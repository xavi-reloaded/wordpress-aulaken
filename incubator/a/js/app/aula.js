
//

//
//define(function (require) {
//    var AulaUtils = require('AulaUtils');
//});

function moveNext(){

    var aulaUtils =new AulaUtils();
    var timelineAtr = $('#timeline').attr('style');

    timelineAtr = aulaUtils.nextSectionOnTimeline(timelineAtr);
    $('#timeline').attr('style',timelineAtr);

    setTimeout(
        function()
        {
            timelineAtr = aulaUtils.nextSectionOnTimeline(timelineAtr);
            $('#timeline').attr('style',timelineAtr);
        }, 1000);


    setTimeout(
        function()
        {
            timelineAtr = aulaUtils.nextSectionOnTimeline(timelineAtr);
            $('#timeline').attr('style',timelineAtr);
        }, 1000);
}

$(document).ready(function() {

    $(".next-lecture").click(function(e) {
        e.preventDefault();
        console.log('next-lecture clicked');

        var lectureId = '213438';
        var t = $(".ud-lecture[data-lectureid=" + lectureId + "]"); //.parents(".ud-coursetaking"); //.data("ud_coursetaking");
        console.log('asigned t' + t);
//        var n = t.timeline[t.reverseIndex["lecture" + this.options.lectureId] + 2];

        moveNext();
    });
    $(".prev-lecture").click(function(e) {
        e.preventDefault();
        console.log('next-lecture clicked');

        var lectureId = '213438';
        var t = $(".ud-lecture[data-lectureid=" + lectureId + "]"); //.parents(".ud-coursetaking"); //.data("ud_coursetaking");
        console.log('asigned t' + t);
//        var n = t.timeline[t.reverseIndex["lecture" + this.options.lectureId] + 2];

        moveNext();
    });


});










//
//    SampleClass.prototype.autoLoadNextLecture = function () {
//
//        e(".next-lecture", this.element.parents("li")).trigger("click", {publishCompleteEvent: !1});
//
//        var t = e(".ud-lecture[data-lectureid=" + this.options.lectureId + "]").parents(".ud-coursetaking").data("ud_coursetaking");
//        var n = t.timeline[t.reverseIndex["lecture" + this.options.lectureId] + 2];
//
//        if (n.type == "chapter") {
//            var r = t.timeline[t.reverseIndex["lecture" + this.options.lectureId] + 1].autoSkipIn * 2, i = setTimeout(function () {
//                e(".next-lecture.continue", n.element).trigger("click", {publishCompleteEvent: !1})
//            }.context(this), r);
//            e(".next-lecture.continue", n.element).bind("click.chaptercontinue", function () {
//                clearTimeout(i), e(".next-lecture.continue", n.element).unbind("click.chaptercontinue")
//            })
//        }
//    }

