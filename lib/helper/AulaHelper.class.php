<?php




/**
 * Created by JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 2/06/12
 * Time: 13:05
 * To change this template use File | Settings | File Templates.
 */



class AulaHelper {

    public static function getTermIdArrayFromCategory($category) {
        $termIdArray=array();
        if (isset($category["aula-taxonomy"])) {
        foreach ($category["aula-taxonomy"] as $key => $value) {
            if($key>0) array_push($termIdArray,(int)$value);
        }}

        return $termIdArray;


    }

    public static function processPostMeta($meta, $obj) {
        // deserialize meta if necessary
        if (is_serialized($meta)) {
            $meta = unserialize($meta);
        }
        // loop through meta array and set properties
        if (is_array($meta)) {
            foreach ($meta as $key => $value) {
                $obj->{str_replace('-', '_', $key)} = is_array($value) ? $value[0] : $value;
            }
        }

    }

    //TODO: fill with aula post meta
    public function updatePostMeta($post_meta_name) {
        $meta = array();
        $meta['image']        = $this->image;
        $meta['sub-images']   = $this->sub_images;
        $meta['link']         = $this->link;
        $meta['price']        = $this->price;
        $meta['product-code'] = $this->product_code;

        update_post_meta($this->id, $post_meta_name, $meta);
    }

    public function deletePostMeta() {
        // remove the current post meta values from database
        delete_post_meta($this->id, $this->_post_meta_name);
    }

    public function deleteLegacyPostMeta() {
        delete_post_meta($this->id, 'aula-image');
        delete_post_meta($this->id, 'aula-link');
        delete_post_meta($this->id, 'aula-price');
        delete_post_meta($this->id, 'aula-product-code');
    }

    public function getParameterArray() {
        $param_names = array();
        foreach ($this as $name => $value) {
            if (substr($name,0,1) != '_') {
                $param_names[] = $name;
            }
        }
        return $param_names;
    }

    public function unique_filename($filename) {
        $original = $filename;
        $test_path  = $this->_wp_upload_dir . "/aula/originals/$filename";
        $count = 2;

        while (is_file($test_path) && $count < 1000) {
            $filename_array = explode('.', $original);
            $extension      = array_pop($filename_array);
            $filename_two   = (implode('.', $filename_array)) . "-" . $count . "." . $extension;

            $test_path = $this->_wp_upload_dir . "/aula/originals/$filename_two";
            $filename  = $filename_two;

            $count++;
        }

        return $filename;
    }
// public function getSanitizedTitle() {
// 	$special_chars_removed = preg_replace("/[^a-zA-Z0-9s]/", "", $this->title);
// 	return sanitize_title($special_chars_removed) . ".jpg";
// }

    public function html2rgb($color) {
        if ($color[0] == '#') {
            $color = substr($color, 1);
        }

        if (strlen($color) == 6) {
            list($r, $g, $b) = array($color[0].$color[1], $color[2].$color[3], $color[4].$color[5]);
        }
        elseif (strlen($color) == 3) {
            list($r, $g, $b) = array($color[0].$color[0], $color[1].$color[1], $color[2].$color[2]);
        }
        else {
            return false;
        }

        $r = hexdec($r);
        $g = hexdec($g);
        $b = hexdec($b);

        return array($r, $g, $b);
    }

    public function rotateImage($canvas, $original) {
        if (function_exists('exif_read_data') && function_exists('imagerotate')) {
            $orientation = 1;
            $exif = @exif_read_data($original, 'EXIF', 0);
            if ($exif) {
                if (isset($exif['Orientation'])) {
                    $orientation = $exif['Orientation'];
                }
            }

            switch ($orientation) {
                case 1:
                    $orientation = 0;
                    break;
                case 3:
                    $orientation = 180;
                    break;
                case 6:
                    $orientation = -90;
                    break;
                case 8:
                    $orientation = 90;
                    break;
            }

            if ($orientation != 0) {
                $canvas = imagerotate($canvas, $orientation, 0);
            }

        }
        // die;
        return $canvas;
    }

    public static function string_length($string) {
        if (function_exists('mb_strlen')) {
            return mb_strlen($string);
        }
        else {
            return strlen($string);
        }
    }




    /*****************************************************
     **       - IMAGE GENERATION METHODS
     *****************************************************/

    public function makeFullsize($filepath=NULL) {
        if ($filepath === NULL) {
            $filepath = $this->getImage();
        }

        $original = $this->_wp_upload_dir . "/aula/originals/" . $filepath;
        $fullsize = $this->_wp_upload_dir . "/aula/fullsize/" . $filepath;
        $quality  = 80;

        if (is_file($original) === false) {
            return "<strong>$filepath</strong>: " . sprintf(__("Original image file missing, could not be located at %s", 'aula'), $original);
        }

        list($width, $height, $format) = getimagesize($original);
        $canvas_size = $this->_options['image-size'];

        if ($width < 1 || $height < 1) {
            return "<strong>$filepath</strong>: " . __("Original image dimensions are less then 1px. Most likely PHP does not have permission to read the original file.", 'aula');
        }

        if ($width < $canvas_size && $height < $canvas_size) {
            //original is smaller, do nothing....
        }


        $ratio = ($height > $width)? ($canvas_size / $height) : ($canvas_size / $width);
        $new_height = $height * $ratio;
        $new_width  = $width * $ratio;


        // create a blank canvas of user specified size
        $bg_color = $this->html2rgb($this->_options['background-color']);
        $canvas   = imagecreatetruecolor($new_width, $new_height);


        switch($format) {
            case IMAGETYPE_GIF:
                $upload = imagecreatefromgif($original);
                break;
            case IMAGETYPE_JPEG:
                $upload = imagecreatefromjpeg($original);
                break;
            case IMAGETYPE_PNG:
                $upload = imagecreatefrompng($original);
                break;
            default:
                return "<strong>$filepath</strong>: " . __("Original image could not be loaded because it is an unsupported format.", 'aula');
        }

        imagecopyresampled($canvas, $upload, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

        // rotate the final canvas to match the original files orientation
        $canvas = $this->rotateImage($canvas, $original);

        imagejpeg($canvas, $fullsize, $quality);

        imagedestroy($canvas);

        return true;
    }

    public function makeThumbnail($filepath=NULL) {
        if ($filepath === NULL) {
            $filepath = $this->getImage();
        }

        $original = $this->_wp_upload_dir . "/aula/originals/" . $filepath;
        $thumb    = $this->_wp_upload_dir . "/aula/thumbnails/" . $filepath;
        $quality  = 90;

        if (is_file($original) === false) {
            return "<strong>$filepath</strong>: " . sprintf(__("Original image file missing, could not be located at %s", 'aula'), $original);
        }

        list($width, $height, $format) = @getimagesize($original);
        $canvas_width = $this->_options['thumbnail-width'];
        $canvas_height = $this->_options['thumbnail-height'];

        if ($width < 1 || $height < 1) {
            return "<strong>$filepath</strong>: " . __("Original image dimensions are less then 1px. Most likely PHP does not have permission to read the original file.", 'aula');
        }

        switch($format) {
            case IMAGETYPE_GIF:
                $upload = imagecreatefromgif($original);
                break;
            case IMAGETYPE_JPEG:
                $upload = imagecreatefromjpeg($original);
                break;
            case IMAGETYPE_PNG:
                $upload = imagecreatefrompng($original);
                break;
            default:
                return "<strong>$filepath</strong>: " . __("Original image could not be loaded because it is an unsupported format.", 'aula');
        }


        // rotate loaded image and get its dimensions
        $upload = $this->rotateImage($upload, $original);
        $width = imagesx($upload);
        $height = imagesy($upload);


        // create a blank canvas of user specified size and color
        $bg_color = $this->html2rgb($this->_options['background-color']);
        $canvas   = imagecreatetruecolor($canvas_width, $canvas_height);
        $bg_color = imagecolorallocate($canvas, $bg_color[0], $bg_color[1], $bg_color[2]);
        imagefilledrectangle($canvas, 0, 0, $canvas_width, $canvas_height, $bg_color);


        // determine settings to place the original image into the thumbnail canvas
        if (!$this->_options['keep-aspect-ratio']) {
            if ($width > $height) {
                $params = $this->crop_width($width, $height, $canvas_width, $canvas_height);
            }
            else {
                $params = $this->crop_height($width, $height, $canvas_width, $canvas_height);
            }
        }
        else {
            if ($width > $height) {
                $params = $this->shrink_width($width, $height, $canvas_width, $canvas_height);
            }
            else {
                $params = $this->shrink_height($width, $height, $canvas_width, $canvas_height);
            }
        }

        imagecopyresampled($canvas, $upload, $params['left'], $params['top'], 0, 0, $params['width'], $params['height'], $width, $height);
        imagejpeg($canvas, $thumb, $quality);
        imagedestroy($canvas);

        return true;
    }


    private function shrink_width($original_width, $original_height, $thumbnail_width, $thumbnail_height) {
        $ratio      = $thumbnail_height / $original_height;
        $new_width  = $original_width * $ratio;
        $new_height = $thumbnail_height;
        $new_top    = 0;
        $new_left   = (($thumbnail_width - $new_width) / 2);

        if ($new_width > $thumbnail_width) {
            return $this->shrink_height($original_width, $original_height, $thumbnail_width, $thumbnail_height);
        }

        return array('top'=>$new_top, 'left'=>$new_left, 'width'=>$new_width, 'height'=>$new_height);
    }

    private function shrink_height($original_width, $original_height, $thumbnail_width, $thumbnail_height) {
        $ratio      = $thumbnail_width / $original_width;
        $new_width  = $thumbnail_width;
        $new_height = $original_height * $ratio;
        $new_top    = (($thumbnail_height - $new_height) / 2);
        $new_left   = 0;

        if ($new_height > $thumbnail_height) {
            return $this->shrink_width($original_width, $original_height, $thumbnail_width, $thumbnail_height);
        }

        return array('top'=>$new_top, 'left'=>$new_left, 'width'=>$new_width, 'height'=>$new_height);
    }

    private function crop_width($original_width, $original_height, $thumbnail_width, $thumbnail_height) {
        $ratio      = $thumbnail_width / $original_width;
        $new_width  = $thumbnail_width;
        $new_height = $original_height * $ratio;
        $new_top    = (($thumbnail_height - $new_height) / 2);
        $new_left   = 0;

        if ($new_height < $thumbnail_height) {
            return $this->crop_height($original_width, $original_height, $thumbnail_width, $thumbnail_height);
        }

        return array('top'=>$new_top, 'left'=>$new_left, 'width'=>$new_width, 'height'=>$new_height);
    }

    private function crop_height($original_width, $original_height, $thumbnail_width, $thumbnail_height) {
        $ratio      = $thumbnail_height / $original_height;
        $new_width  = $original_width * $ratio;
        $new_height = $thumbnail_height;
        $new_top    = 0;
        $new_left   = (($thumbnail_width - $new_width) / 2);

        if ($new_width < $thumbnail_width) {
            return $this->crop_width($original_width, $original_height, $thumbnail_width, $thumbnail_height);
        }

        return array('top'=>$new_top, 'left'=>$new_left, 'width'=>$new_width, 'height'=>$new_height);
    }

}