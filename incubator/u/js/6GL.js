/**
 *
 *      _/    _/  _/_/_/
 *     _/  _/      _/        Qualaroo for udemy.com
 *    _/_/        _/         (C) 2013 Qualaroo. All rights reserved.
 *   _/  _/      _/          qualaroo.com
 *  _/    _/  _/_/_/
 *
 * Version: 2013-03-25 14:28:55 -0500 (a79cce1bd6070ef5da736035570e99a772b62cb4)
 * Generated: 2013-03-25 21:59:20 +0000
 */
if (typeof _kiq == 'undefined') {
    var _kiq = []
}
if (typeof KI == 'undefined' && navigator.userAgent.match(/(MSIE [7,8,9,10])|(Firefox\/([3-9]|10|11|12|13|14|15|16|17|18|19|20))|(Opera\/[9])|Safari|Chrome/i) && !navigator.userAgent.match(/(phone|mobile)/i) && ((navigator.userAgent.match(/MSIE/)) ? ((document.compatMode != 'BackCompat') ? 1 : 0) : 1)) {

    var $KI = {version: 2.5, s3: "s3.amazonaws.com", bucket: 'ki.js', preflight: $KI || {}, guid: function () {
        function s() {
            return(((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
        }

        return(s() + s() + "-" + s() + "-" + s() + "-" + s() + "-" + s() + s() + s())
    }, css: function (css) {
        var c = css.replace(/images\//gi, (($KI.preflight.images) ? $KI.preflight.images : "//" + [$KI.s3, $KI.bucket, "images", $KI.version].join("/") + "/"));
        var t = new $KI.$("style", null, {type: "text/css"});
        if (t.styleSheet) {
            t.styleSheet.cssText = c
        } else {
            t.appendChild(document.createTextNode(c))
        }
        document.body.appendChild(t)
    }, ready: function (func, bind) {
        var ran = false;

        function proxy() {
            if (ran) {
                return false
            }
            ran = true;
            func.apply(bind)
        }

        function check() {
            var r = document.readyState;
            if (r == "complete" || r == "loaded" || r == "interactive") {
                proxy();
                return true
            }
            return false
        }

        if (!check()) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", proxy, true);
                document.addEventListener("readystatechange", check, true);
                window.addEventListener("load", proxy, true)
            } else {
                if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", check);
                    window.attachEvent("onload", proxy)
                }
            }
        }
    }, bind: function (func, bind) {
        function proxy() {
            return func.apply(bind, arguments)
        }

        return proxy
    }, iee: {}, attach: function (element, type, func, bind) {
        if (bind) {
            func = $KI.bind(func, bind)
        }
        if (element.addEventListener) {
            element.addEventListener(type, func, false)
        } else {
            if (!element.id) {
                element.id = "event_" + new Date().getTime()
            }
            $KI.iee[element.id + type] = function (e) {
                if (!e.target && e.srcElement) {
                    e.target = e.srcElement
                }
                if (!e.preventDefault) {
                    e.preventDefault = function () {
                        e.returnValue = false
                    }
                }
                func(e)
            };
            element.attachEvent("on" + type, $KI.iee[element.id + type])
        }
    }, detach: function (element, type, func) {
        if (element.removeEventListener) {
            element.removeEventListener(type, func, false)
        } else {
            element.detachEvent("on" + type, $KI.iee[element.id + type])
        }
    }, scrolled: function () {
        var d = document, b = d.body, e = d.documentElement, p = Math.floor(Math.floor((e.scrollTop + b.scrollTop) / (e.scrollHeight - e.clientHeight) * 100));
        return p
    }, type: function (item, is) {
        try {
            var type = typeof item;
            if (type === "object" && item instanceof Array) {
                type = "array"
            }
            if (type === "object" && item === null) {
                type = "null"
            }
            if (is) {
                if (type.toString() === is) {
                    return true
                }
                return false
            }
            return type
        } catch (e) {
            return false
        }
    }, size: function (o) {
        var s = 0;
        for (k in o) {
            if (o.hasOwnProperty(k)) {
                s++
            }
        }
        return s
    }, getById: function (o, id) {
        for (var i = 0; i < o.length; i++) {
            var f = o[i];
            if (f && f.id == id) {
                return f
            }
        }
        return null
    }, merge: function (a, b) {
        if (!a) {
            a = {}
        }
        for (var i in b) {
            if (!b.hasOwnProperty(i)) {
                continue
            }
            try {
                if ($KI.type(b[i], "object")) {
                    a[i] = $KI.merge(a[i], b[i])
                } else {
                    a[i] = b[i]
                }
            } catch (e) {
                a[i] = b[i]
            }
        }
        return a
    }, clone: function (o) {
        var c = {};
        for (var i in o) {
            c[i] = o[i]
        }
        return c
    }, contains: function (haystack, needle) {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true
            }
        }
        return false
    }, select: function (object, selector) {
        var split = selector.split("/");
        for (var i = 0; i < split.length; i++) {
            if (!object[split[i]]) {
                return
            }
            object = object[split[i]]
        }
        return object
    }, toInt: function (n) {
        return parseInt(n, 10)
    }, query: function (o, p) {
        if ($KI.type(o, "object")) {
            var s = [];
            for (var i in o) {
                if (!o[i]) {
                    continue
                }
                switch ($KI.type(o[i])) {
                    case"string":
                    case"number":
                    case"boolean":
                        s.push(((p) ? p + "[" + i + "]" : i) + "=" + $KI.url.encode(o[i]));
                        break;
                    case"object":
                        s.push($KI.query(o[i], i));
                        break
                }
            }
        }
        if (s && s.length) {
            return s.join("&")
        } else {
            return""
        }
    }, serialize: function (form, questions) {
        var data = [];
        for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements[i];
            if (!element.name || !element.value) {
                continue
            }
            switch (element.type) {
                case"checkbox":
                case"radio":
                    if (element.checked && this.q_match(questions, element.name)) {
                        data.push(element.name + "=" + $KI.url.encode(element.value))
                    }
                    break;
                default:
                    if (element.value && this.q_match(questions, element.name)) {
                        data.push(element.name + "=" + $KI.url.encode(element.value))
                    }
                    break
            }
        }
        return data.join("&")
    }, q_match: function (qids, str) {
        if (typeof qids == "undefined" || qids == null || qids.length == 0) {
            return true
        }
        for (var i = 0; i < qids.length; i++) {
            if (str.indexOf("[" + qids[i] + "]") > -1) {
                return true
            }
        }
        return false
    }, ymd: function (date) {
        var s = date.split("-");
        return $KI.mktime(0, 0, 0, s[1], s[2], s[0])
    }, mktime: function () {
        var d = new Date(), r = arguments, i = 0, e = ["Hours", "Minutes", "Seconds", "Month", "Date", "FullYear"];
        for (i = 0; i < e.length; i++) {
            if (typeof r[i] === "undefined") {
                r[i] = d["get" + e[i]]();
                r[i] += (i === 3)
            } else {
                r[i] = parseInt(r[i], 10);
                if (isNaN(r[i])) {
                    return false
                }
            }
        }
        r[5] += (r[5] >= 0 ? (r[5] <= 69 ? 2000 : (r[5] <= 100 ? 1900 : 0)) : 0);
        d.setFullYear(r[5], r[3] - 1, r[4]);
        d.setHours(r[0], r[1], r[2]);
        return(d.getTime() / 1000 >> 0) - (d.getTime() < 0)
    }, timezone: function () {
        var n = new Date();
        var ja1 = new Date(n.getFullYear(), 0, 1, 0, 0, 0, 0);
        var ju1 = new Date(n.getFullYear(), 6, 1, 0, 0, 0, 0);
        var t = ja1.toGMTString();
        var ja2 = new Date(t.substring(0, t.lastIndexOf(" ") - 1));
        t = ju1.toGMTString();
        var ju2 = new Date(t.substring(0, t.lastIndexOf(" ") - 1));
        var std_o = (ja1 - ja2) / (1000 * 60 * 60);
        var d_o = (ju1 - ju2) / (1000 * 60 * 60);
        var d = 0;
        if (std_o != d_o) {
            d = 1;
            var h = std_o - d_o;
            if (h >= 0) {
                std_o = d_o
            }
        }
        return[std_o, d]
    }, hex: function (str) {
        var _ = [];
        for (var i = 0; i < 48; i++) {
            _.push(0)
        }
        _.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15);
        for (var i = 0; i < 153; i++) {
            _.push(0)
        }
        var len = str.length, rv = "", i = 0, c1, c2;
        while (len > 1) {
            h1 = str.charAt(i++);
            c1 = h1.charCodeAt(0);
            h2 = str.charAt(i++);
            c2 = h2.charCodeAt(0);
            rv += String.fromCharCode((_[c1] << 4) + _[c2]);
            len -= 2
        }
        return rv
    }, sha1: function (msg) {
        function rotate_left(n, s) {
            var t4 = (n << s) | (n >>> (32 - s));
            return t4
        }

        function lsb_hex(val) {
            var str = "";
            var i;
            var vh;
            var vl;
            for (i = 0; i <= 6; i += 2) {
                vh = (val >>> (i * 4 + 4)) & 15;
                vl = (val >>> (i * 4)) & 15;
                str += vh.toString(16) + vl.toString(16)
            }
            return str
        }

        function cvt_hex(val) {
            var str = "";
            var i;
            var v;
            for (i = 7; i >= 0; i--) {
                v = (val >>> (i * 4)) & 15;
                str += v.toString(16)
            }
            return str
        }

        function Utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c)
                } else {
                    if ((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128)
                    } else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128)
                    }
                }
            }
            return utftext
        }

        var blockstart;
        var i, j;
        var W = new Array(80);
        var H0 = 1732584193;
        var H1 = 4023233417;
        var H2 = 2562383102;
        var H3 = 271733878;
        var H4 = 3285377520;
        var A, B, C, D, E;
        var temp;
        msg = Utf8Encode(msg);
        var msg_len = msg.length;
        var word_array = new Array();
        for (i = 0; i < msg_len - 3; i += 4) {
            j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
            word_array.push(j)
        }
        switch (msg_len % 4) {
            case 0:
                i = 2147483648;
                break;
            case 1:
                i = msg.charCodeAt(msg_len - 1) << 24 | 8388608;
                break;
            case 2:
                i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 32768;
                break;
            case 3:
                i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 128;
                break
        }
        word_array.push(i);
        while ((word_array.length % 16) != 14) {
            word_array.push(0)
        }
        word_array.push(msg_len >>> 29);
        word_array.push((msg_len << 3) & 4294967295);
        for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
            for (i = 0; i < 16; i++) {
                W[i] = word_array[blockstart + i]
            }
            for (i = 16; i <= 79; i++) {
                W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1)
            }
            A = H0;
            B = H1;
            C = H2;
            D = H3;
            E = H4;
            for (i = 0; i <= 19; i++) {
                temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 1518500249) & 4294967295;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp
            }
            for (i = 20; i <= 39; i++) {
                temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393) & 4294967295;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp
            }
            for (i = 40; i <= 59; i++) {
                temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 2400959708) & 4294967295;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp
            }
            for (i = 60; i <= 79; i++) {
                temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782) & 4294967295;
                E = D;
                D = C;
                C = rotate_left(B, 30);
                B = A;
                A = temp
            }
            H0 = (H0 + A) & 4294967295;
            H1 = (H1 + B) & 4294967295;
            H2 = (H2 + C) & 4294967295;
            H3 = (H3 + D) & 4294967295;
            H4 = (H4 + E) & 4294967295
        }
        var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
        return temp.toLowerCase()
    }, shuffle: function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
        }
        return o
    }};
    $KI.string = {match: function (str1, str2) {
        if (str1.indexOf("*") == -1) {
            return(str1 == str2)
        }
        if (str1 == str2) {
            return true
        }
        if (str1.length == 0) {
            return false
        }
        var startsWithWildcard = str1.substr(0, 1) == "*", endsWithWildcard = str1.substr(str1.length - 1, 1) == "*", parts = str1.split("*");
        for (var i = 0; i < parts.length; i++) {
            if (parts[i]) {
                var index = (startsWithWildcard || i > 0) ? str2.lastIndexOf(parts[i]) : str2.indexOf(parts[i]);
                if (index != -1) {
                    if (i == 0 && !startsWithWildcard) {
                        if (index != 0) {
                            return false
                        }
                    }
                    str2 = str2.substring(index + parts[i].length)
                } else {
                    return false
                }
            }
        }
        if (endsWithWildcard) {
            return true
        } else {
            return str2 ? false : true
        }
    }};
    $KI.url = {query_parts: function (query) {
        if (!query) {
            return{}
        }
        if (query.indexOf("?") == 0) {
            query = query.substr(1)
        }
        var pairs = query.split("&");
        var results = {};
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            results[$KI.url.decode(pair[0])] = $KI.url.decode(pair[1])
        }
        return results
    }, encode: function (string) {
        if (!string) {
            return null
        }
        return encodeURIComponent(string)
    }, decode: function (value) {
        var u = {"'": "%27", "(": "%28", ")": "%29", "*": "%2A", "~": "%7E", "!": "%21", "%20": "+"};
        if (value) {
            for (var e in u) {
                if (typeof(u[e]) == "string") {
                    value = value.split(u[e]).join(e)
                }
            }
            value = decodeURIComponent(value)
        }
        return value
    }};
    $KI.bundle = function (name, methods) {
        this[name] = function () {
            var self = $KI.merge({init: function () {
                return this
            }, option: function (o) {
                return $KI.select(this.options, o)
            }, setOptions: function (o) {
                this.options = $KI.merge(self.options, o)
            }}, methods);
            var p;
            if (p = $KI.preflight[name]) {
                self = $KI.merge(self, p)
            }
            return self.init(arguments)
        }
    };
    $KI.is_bundle = function (b) {
        if ($KI.type($KI[b], "function")) {
            return true
        }
        return false
    };
    $KI.fx = function (g) {
        if (g.nodeType && g.nodeType == 1) {
            var h = g
        } else {
            if (String(g).match(/^#(\w+)/i)) {
                var h = document.getElementById(RegExp.$1 + "");
                if (!h) {
                    return null
                }
            } else {
                return null
            }
        }
        if (typeof(h._fx) != "undefined" && h._fx) {
            h._fx._addSet();
            return h
        }
        h.fxVersion = 0.1;
        h._fx = {};
        h._fx.sets = [];
        h._fx._currSet = 0;
        if (typeof(h._fxTerminated) != "undefined") {
            try {
                delete h._fxTerminated
            } catch (err) {
                h._fxTerminated = null
            }
        }
        var k = {"left|top|right|bottom|width|height|margin|padding|spacing|backgroundx|backgroundy": "px", font: "pt", opacity: ""};
        var l = !!navigator.userAgent.match(/MSIE/ig);
        var m = {delay: 100, step: 5, unit: ""};
        var n = {opacity: function (a, b) {
            a = parseInt(a);
            if (isNaN(a)) {
                if (l) {
                    var c = (new RegExp("alpha\\s*\\(opacity\\s*=\\s*(\\d+)\\)")).exec(h.style.filter + "");
                    if (c) {
                        return parseInt(c[1])
                    } else {
                        return 1
                    }
                } else {
                    return Math.round((h.style.opacity ? parseFloat(h.style.opacity) : 1) * 100)
                }
            } else {
                a = Math.min(100, Math.max(0, a));
                if (l) {
                    h.style.zoom = 1;
                    h.style.filter = "alpha(opacity=" + a + ");"
                } else {
                    h.style.opacity = a / 100
                }
            }
        }, backgroundx: function (a, b) {
            a = parseInt(a);
            var x = 0, y = 0;
            var c = (new RegExp("^(-?\\d+)[^\\d\\-]+(-?\\d+)")).exec(h.style.backgroundPosition + "");
            if (c) {
                x = parseInt(c[1]);
                y = parseInt(c[2])
            }
            if (isNaN(a)) {
                return x
            } else {
                h.style.backgroundPosition = a + b + " " + y + b
            }
        }, backgroundy: function (a, b) {
            a = parseInt(a);
            var x = 0, y = 0;
            var c = (new RegExp("^(-?\\d+)[^\\d\\-]+(-?\\d+)")).exec(h.style.backgroundPosition + "");
            if (c) {
                x = parseInt(c[1]);
                y = parseInt(c[2])
            }
            if (isNaN(a)) {
                return y
            } else {
                h.style.backgroundPosition = x + b + " " + a + b
            }
        }};
        var o = {width: function () {
            return parseInt(h.offsetWidth)
        }, height: function () {
            return parseInt(h.offsetHeight)
        }, left: function () {
            var a = 0;
            for (var b = h; b; b = b.offsetParent) {
                a += parseInt(b.offsetLeft)
            }
            return a
        }, top: function () {
            var a = 0;
            for (var b = h; b; b = b.offsetParent) {
                a += parseInt(b.offsetTop)
            }
            return a
        }};
        h.fxAddSet = function () {
            this._fx._addSet();
            return this
        };
        h.fxHold = function (a, b) {
            if (h._fx.sets[this._fx._currSet]._isrunning) {
                return this
            }
            var b = parseInt(b);
            this._fx.sets[isNaN(b) ? this._fx._currSet : b]._holdTime = a;
            return this
        };
        h.fxAdd = function (c) {
            var d = this._fx._currSet;
            if (this._fx.sets[d]._isrunning) {
                return this
            }
            for (var p in m) {
                if (!c[p]) {
                    c[p] = m[p]
                }
            }
            if (!c.unit) {
                for (var e in k) {
                    if ((new RegExp(e, "i").test(c.type))) {
                        c.unit = k[e];
                        break
                    }
                }
            }
            c.onstart = (c.onstart && c.onstart.call) ? c.onstart : function () {
            };
            c.onfinish = (c.onfinish && c.onfinish.call) ? c.onfinish : function () {
            };
            if (!this._fx[c.type]) {
                if (n[c.type]) {
                    this._fx[c.type] = n[c.type]
                } else {
                    var f = this;
                    this._fx[c.type] = function (a, b) {
                        if (typeof(a) == "undefined") {
                            return parseInt(f.style[c.type])
                        } else {
                            f.style[c.type] = parseInt(a) + b
                        }
                    }
                }
            }
            if (isNaN(c.from)) {
                if (isNaN(this._fx[c.type]())) {
                    if (o[c.type]) {
                        c.from = o[c.type]()
                    } else {
                        c.from = 0
                    }
                } else {
                    c.from = this._fx[c.type]()
                }
            }
            c._initial = c.from;
            this._fx[c.type](c.from, c.unit);
            this._fx.sets[d]._queue.push(c);
            return this
        };
        h.fxRun = function (a, b, c) {
            var d = h._fx._currSet;
            if (this._fx.sets[d]._isrunning) {
                return this
            }
            setTimeout(function () {
                if (h._fx.sets[d]._isrunning) {
                    return h
                }
                h._fx.sets[d]._isrunning = true;
                if (h._fx.sets[d]._effectsDone > 0) {
                    return h
                }
                h._fx.sets[d]._onfinal = (a && a.call) ? a : function () {
                };
                h._fx.sets[d]._onloop = (c && c.call) ? c : function () {
                };
                if (!isNaN(b)) {
                    h._fx.sets[d]._loops = b
                }
                for (var i = 0; i < h._fx.sets[d]._queue.length; i++) {
                    h._fx.sets[d]._queue[i].onstart.call(h);
                    h._fx._process(d, i)
                }
            }, h._fx.sets[d]._holdTime);
            return this
        };
        h.fxPause = function (a, b) {
            this._fx.sets[!isNaN(b) ? b : this._fx._currSet]._paused = a;
            return this
        };
        h.fxStop = function (a) {
            this._fx.sets[!isNaN(a) ? a : this._fx._currSet]._stoped = true;
            return this
        };
        h.fxReset = function () {
            for (var i = 0; i < this._fx.sets.length; i++) {
                for (var j = 0; j < this._fx.sets[i]._queue.length; j++) {
                    var a = this._fx.sets[i]._queue[j];
                    if (isNaN(a._initial)) {
                        this._fx[a.type]("", "")
                    } else {
                        this._fx[a.type](a._initial, a.unit)
                    }
                }
            }
            var b = ["_fx", "fxHold", "fxAdd", "fxAddSet", "fxRun", "fxPause", "fxStop", "fxReset"];
            for (var i = 0; i < b.length; i++) {
                try {
                    delete this[b[i]]
                } catch (err) {
                    this[b[i]] = null
                }
            }
            this._fxTerminated = true
        };
        h._fx._addSet = function () {
            var a = this.sets.length;
            this._currSet = a;
            this.sets[a] = {};
            this.sets[a]._loops = 1;
            this.sets[a]._stoped = false;
            this.sets[a]._queue = [];
            this.sets[a]._effectsDone = 0;
            this.sets[a]._loopsDone = 0;
            this.sets[a]._holdTime = 0;
            this.sets[a]._paused = false;
            this.sets[a]._isrunning = false;
            this.sets[a]._onfinal = function () {
            };
            return this
        };
        h._fx._process = function (a, b) {
            if (!this.sets[a] || this.sets[a]._stoped || h._fxTerminated) {
                return
            }
            var c = this.sets[a]._queue[b];
            var d = this[c.type]();
            if ((c.step > 0 && d + c.step <= c.to) || (c.step < 0 && d + c.step >= c.to)) {
                if (!this.sets[a]._paused) {
                    this[c.type](d + c.step, c.unit)
                }
                var e = this;
                setTimeout(function () {
                    if (e._process) {
                        e._process(a, b)
                    }
                }, c.delay)
            } else {
                this[c.type](c.to, c.unit);
                this.sets[a]._effectsDone++;
                c.onfinish.call(h);
                if (this.sets[a]._queue.length == this.sets[a]._effectsDone) {
                    this.sets[a]._effectsDone = 0;
                    this.sets[a]._loopsDone++;
                    this.sets[a]._onloop.call(h, this.sets[a]._loopsDone);
                    if (this.sets[a]._loopsDone < this.sets[a]._loops || this.sets[a]._loops == -1) {
                        for (var i = 0; i < this.sets[a]._queue.length; i++) {
                            this[c.type](c.from, this.sets[a]._queue[i].unit);
                            this.sets[a]._queue[i].onstart.call(h, this.sets[a]._loopsDone);
                            this._process(a, i)
                        }
                    } else {
                        this.sets[a]._onfinal.call(h)
                    }
                }
            }
        };
        h._fx._addSet();
        return h
    };
    $KI.bundle("Metrics", {ga: false, km: false, seg: false, init: function () {
        return this
    }, record: function (event, props) {
        if (this.seg) {
            this.record_segmentio(event, props)
        } else {
            if (this.km) {
                if (typeof window._kmq === "object") {
                    window._kmq.push(["record", event, $KI.merge(props, {"Survey source": "Qualaroo"})])
                }
            }
            if (this.ga) {
                this.record_ga(event, props)
            }
        }
    }, record_ga: function (event, props) {
        if (typeof window._gaq === "object") {
            sname = props["Nudge Name"];
            switch (event) {
                case"Answered nudge":
                    for (var key in props) {
                        if ("Nudge Name" != key && "Time to answer" != key && "Survey source" != key) {
                            _gaq.push(["_trackEvent", "Qualaroo - " + sname, key, props[key]])
                        }
                    }
                    break;
                case"Clicked CTA":
                    _gaq.push(["_trackEvent", "Qualaroo - " + sname, event, props.CTA]);
                    break;
                default:
                    _gaq.push(["_trackEvent", "Qualaroo", event, sname, 1, true])
            }
        }
    }, record_segmentio: function (event, props) {
        if (typeof window.analytics === "object") {
            sname = props["Nudge Name"];
            switch (event) {
                case"Answered nudge":
                    for (var key in props) {
                        if ("Nudge Name" != key && "Time to answer" != key && "Survey source" != key) {
                            analytics.track(key, {category: "Qualaroo - " + sname, label: props[key]})
                        }
                    }
                    break;
                case"Clicked CTA":
                    _gaq.push(["_trackEvent", "Qualaroo - " + sname, event, props.CTA]);
                    analytics.track(event, {category: "Qualaroo - " + sname, label: props.CTA});
                    break;
                default:
                    analytics.track(event, {category: "Qualaroo", label: sname, noninteraction: true})
            }
        }
    }});
    $KI.bundle("Event", {bind: null, handlers: {}, init: function () {
        return this
    }, add: function (name, callback, bind) {
        if (!this.handlers[name]) {
            this.handlers[name] = []
        }
        this.handlers[name].push($KI.bind(callback, bind))
    }, fire: function (name, data) {
        var h = this.handlers[name];
        if (h) {
            for (var i = 0; i < h.length; i++) {
                var retval = h[i](data);
                if (typeof retval != "undefined") {
                    if ((typeof(retval.is_valid) != "undefined") && (false == retval.is_valid)) {
                        return retval
                    }
                }
            }
        }
    }});
    $KI.bundle("Cookie", {options: {prefix: "ki_", expire: 1826, is_session: false}, init: function (args) {
        this.name = this.option("prefix") + args[0];
        this.def_value = args[1];
        this.get();
        if (!this.value && this.def_value) {
            this.set(this.def_value)
        }
        return this
    }, get: function () {
        return this.value = this._get(this.name)
    }, set: function (value) {
        return this.value = this._set(this.name, value, this.option("expire"))
    }, destroy: function () {
        this._unset(this.name)
    }, _get: function (k) {
        var c = "" + document.cookie, ind = c.indexOf(k);
        if (ind == -1 || k == "") {
            return""
        }
        var ind1 = c.indexOf(";", ind);
        if (ind1 == -1) {
            ind1 = c.length
        }
        return unescape(c.substring(ind + k.length + 1, ind1))
    }, _set: function (k, v, days) {
        var exp = "";
        if (this.options.is_session) {
        } else {
            var expires = new Date();
            expires.setDate(expires.getDate() + days);
            exp = expires.toGMTString()
        }
        cookieval = k + "=" + escape(v) + "; " + ((exp) ? ("expires=" + exp + "; ") : "") + "path=/";
        if (typeof KI_COOKIE_DOMAIN != "undefined") {
            cookieval += "; domain=" + KI_COOKIE_DOMAIN
        }
        document.cookie = cookieval;
        return v
    }, _unset: function (k) {
        this._set(k, null, -200)
    }});
    $KI.bundle("Request", {options: {api: 'www.qualaroo.com', bucket: 'r.kissinsights.com'}, init: function (args) {
        this.type = args[0];
        this.path = args[1];
        switch (this.type) {
            case"api":
                this.url = ((KI.location.ssl() ? "https" : "http")) + "://" + this.option("api") + this.path;
                break;
            case"bucket":
                this.url = "//s3.amazonaws.com/" + this.option("bucket") + this.path;
                break
        }
        return this
    }, make: function () {
        this.script = new $KI.$("script", null, {type: "text/javascript", src: this.url + this.slug()});
        document.body.appendChild(this.script)
    }, slug: function () {
        return((this.path.indexOf("?") != -1) ? "&" : "?") + "_" + new Date().getTime()
    }});
    $KI.$ = function () {
        var self = {init: function (args) {
            this.type = args[0];
            this.id = args[1];
            this.attributes = args[2];
            if (this.type.toString().indexOf("<") != -1) {
                this.element = this._create(this.type)
            } else {
                this.element = document.createElement(this.type)
            }
            this.bind();
            if (this.id) {
                this.element.id = this.id
            }
            if ($KI.type(this.attributes, "object")) {
                this.set(this.attributes)
            }
            return this.element
        }, bind: function () {
            for (var func in this) {
                if (!this.hasOwnProperty(func)) {
                    continue
                }
                if ($KI.type(this[func], "function") && func != "init" && func.charAt(0) != "_") {
                    this.element[func] = this[func]
                }
            }
        }, set: function (property, value) {
            if (typeof property == "object") {
                for (var p in property) {
                    if (!property.hasOwnProperty(p)) {
                        continue
                    }
                    self.element[p] = self._unescape_html(property[p])
                }
            } else {
                self.element[property] = self._unescape_html(value)
            }
            return self.element
        }, get: function (property) {
            return self.element[property]
        }, parent: function (level) {
            var e = self.element.parentNode;
            if (typeof level == "number" && level > 1) {
                for (var i = 1; i < level; i++) {
                    e = e.parentNode
                }
            }
            return e
        }, seek: function (i) {
            return self.element.childNodes[i]
        }, first: function () {
            var e = self.element;
            if (e.hasChildNodes()) {
                return e.childNodes[0]
            }
            return e
        }, last: function () {
            var e = self.element;
            if (e.hasChildNodes()) {
                return e.childNodes[e.childNodes.length - 1]
            }
            return e
        }, empty: function () {
            var e = self.element;
            if (e.hasChildNodes()) {
                while (e.childNodes.length >= 1) {
                    e.removeChild(e.firstChild)
                }
            }
            return e
        }, eachChild: function (callback, bind) {
            var e = self.element, callback = $KI.bind(callback, bind);
            if (e.hasChildNodes()) {
                for (var i = 0; i < e.childNodes.length; i++) {
                    callback(e.childNodes[i])
                }
            }
            return e
        }, replace: function (a) {
            self.element.parentNode.replaceChild(a, self.element);
            return self.element
        }, attach: function (type, func, bind) {
            $KI.attach(self.element, type, $KI.bind(func, bind));
            return self.element
        }, html: function (string) {
            self.element.innerHTML = string;
            return self.element
        }, appendText: function (string) {
            self.element.adopt(document.createTextNode(self._unescape_html(string)));
            return self.element
        }, hide: function () {
            self.element.style.display = "none";
            return self.element
        }, is_hidden: function () {
            if (self.element.style.display == "none") {
                return true
            }
            return false
        }, show: function () {
            self.element.style.display = "block";
            return self.element
        }, cloak: function () {
            self.element.style.visibility = "hidden";
            return self.element
        }, uncloak: function () {
            self.element.style.visibility = "";
            return self.element
        }, addClass: function (name) {
            if (self.element.hasClass(name)) {
                return
            }
            self.element.className += name + " ";
            return self.element
        }, hasClass: function (name) {
            if (self.element.className.indexOf(name) != -1) {
                return true
            }
        }, removeClass: function (name) {
            self.element.className = self.element.className.replace(new RegExp(name, "g"), "");
            return self.element
        }, getStyle: function (property, save) {
            if (self.element.currentStyle) {
                var y = self.element.currentStyle[property]
            } else {
                if (window.getComputedStyle) {
                    var y = document.defaultView.getComputedStyle(self.element, null).getPropertyValue(property).replace(["px"], "")
                }
            }
            if (save) {
                self.saved_styles[property] = y
            }
            return y
        }, getWidth: function () {
            return self.element.clientWidth
        }, getHeight: function () {
            return self.element.clientHeight
        }, position: function () {
            var cl = ct = 0, e = self.element;
            if (e.offsetParent) {
                do {
                    cl += e.offsetLeft;
                    ct += e.offsetTop
                } while (e = e.offsetParent);
                return[cl, ct]
            }
        }, addStyle: function (key, value) {
            if (typeof key == "object") {
                for (var k in key) {
                    if (!key.hasOwnProperty(k)) {
                        continue
                    }
                    self.element.style[k] = key[k]
                }
            } else {
                self.element.style[key] = value
            }
            return self.element
        }, getSavedStyle: function (property) {
            if (self.saved_styles[property]) {
                return self.saved_styles[property]
            }
        }, adopt: function (obj) {
            switch ($KI.type(obj)) {
                case"string":
                    self.element.appendChild(new $KI.$(obj, arguments[1], arguments[2]));
                    break;
                case"array":
                    for (var i in obj) {
                        if (!obj.hasOwnProperty(i) || !obj[i]) {
                            continue
                        }
                        self.element.appendChild(obj[i])
                    }
                    break;
                case"object":
                    self.element.appendChild(obj);
                    break
            }
            return self.element
        }, prepend: function (obj) {
            self.element.insertBefore(obj, self.element.firstChild);
            return self.element
        }, remove: function () {
            if (self.element.parentNode) {
                self.element.parentNode.removeChild(self.element)
            }
        }, _create: function (html) {
            var d = document.createElement("div");
            d.innerHTML = html;
            return d.firstChild
        }, _unescape_html: function (string) {
            if (string) {
                var temp = document.createElement("div");
                temp.innerHTML = string;
                var result = temp.childNodes[0].nodeValue;
                temp.removeChild(temp.firstChild);
                return result
            }
        }};
        return self.init(arguments)
    };
    $KI.bundle("Location", {options: {engines: {google: [/^https?:\/\/(www\.)?google\./i, /q=([^&]+)/i], yahoo: [/^https?:\/\/(www\.)?search\.yahoo\./i, /p=([^&]+)/i], bing: [/^https?:\/\/(www\.)?bing\./i, /q=([^&]+)/i], ask: [/^https?:\/\/(www\.)?ask\./i, /q=([^&]+)/i]}}, init: function () {
        this.location = this.parse((("location" in this) ? this.location : $KI.clone(document.location)));
        this.referrer = new $KI.Cookie("r", this.check_referrer(document.referrer));
        return this
    }, check_referrer: function (r) {
        var rh = r.toString().match(/\/\/(.*)\//);
        if (rh && rh[1].indexOf(this.location.host) == -1) {
            return r
        }
        return null
    }, parse: function (loc) {
        for (var i in loc) {
            loc[i] = loc[i].toString().toLowerCase()
        }
        loc.host = loc.host.replace("www.", "");
        loc.clean = loc.protocol + "//" + loc.host;
        if (loc.pathname.charAt(loc.pathname.length - 1) == "/" && loc.pathname.length != 1) {
            loc.pathname = loc.pathname.substring(0, loc.pathname.length - 1)
        }
        loc.clean += loc.pathname;
        loc.query = $KI.url.query_parts(loc.search);
        loc.host_path = loc.clean.substring(loc.protocol.length + 2);
        return loc
    }, ssl: function () {
        if (this.location.protocol.match(/https/)) {
            return true
        }
        return false
    }, get: function (s) {
        return $KI.select(this.location, s)
    }, has_query: function (s) {
        return(s in this.location.query)
    }, query: function (s) {
        return this.location.query[s]
    }, matches: function (match) {
        if (match.match(/^\/.+\/$/)) {
            match = match.slice(1, -1);
            match = $KI.url.decode(match).replace(/\s+/g, "+");
            return this.regex_match(match, true)
        } else {
            match = $KI.url.decode(match)
        }
        if (match.match(/\.\*/)) {
            return this.regex_match(match, false)
        } else {
            return this.match(match)
        }
    }, match: function (match) {
        if (match.charAt(0) == "/") {
            var ignore_host = true, url = this.location.pathname
        } else {
            var ignore_host = false, url = this.location.host_path
        }
        if (this.location.search) {
            url += this.location.search
        }
        var url1 = this._sanitize(match, ignore_host), url2 = this._sanitize(url, ignore_host);
        if (url1 == url2) {
            return true
        }
        var url1parts = url1.split("?"), url2parts = url2.split("?");
        if (!$KI.string.match(this._remove_index(url1parts[0]), this._remove_index(url2parts[0]))) {
            return false
        }
        var params1 = $KI.url.query_parts(url1parts[1]), params2 = $KI.url.query_parts(url2parts[1]), value;
        for (var k in params1) {
            value = params1[k];
            if ($KI.type(value, "string")) {
                if (value == "*") {
                    if (!params2[k]) {
                        return false
                    }
                } else {
                    if (params2[k] != value) {
                        return false
                    }
                }
            }
        }
        return true
    }, regex_match: function (match, pure_regexp) {
        var match = match.toString().toLowerCase();
        if (pure_regexp) {
            var against = this.location.href
        } else {
            if (match.charAt(0) == "/") {
                var against = this.location.pathname
            } else {
                var against = this.location.host_path
            }
        }
        if (pure_regexp) {
            if (new RegExp(match).test(against)) {
                return true
            } else {
                return false
            }
        }
        match = match.replace("/.*", "(/.*)?");
        if (new RegExp("^" + match + "$").test(against)) {
            return true
        }
        return false
    }, search_terms: function () {
        var referrer = $KI.url.decode(this.referrer.get()), engines = this.option("engines");
        if (!referrer) {
            return null
        }
        if ($KI.type(engines, "object")) {
            for (var i in engines) {
                if (!engines.hasOwnProperty(i)) {
                    continue
                }
                if (new RegExp(engines[i][0]).test(referrer)) {
                    var m = referrer.match(engines[i][1]);
                    if (m && m[1]) {
                        return{engine: i, terms: $KI.url.decode(m[1]).replace(/['"]/g, "").replace(/[\s,\+\.]+/g, " ").replace(/\\p{P}+/, "").toLowerCase()}
                    }
                }
            }
        }
        return null
    }, _sanitize: function (url, strip_host) {
        var url = url.toLowerCase().replace(/^https?/i, "").replace(/^:\/\//i, "").replace(/^www./i, "");
        if (strip_host) {
            if (url.match(/\//)) {
                url = url.replace(/^.*?\//, "/")
            } else {
                url = ""
            }
            if (url.indexOf("/") != 0) {
                url = "/" + url
            }
        }
        return url.replace(/\#.*/, "")
    }, _remove_index: function (path) {
        return path
    }});
    $KI.bundle("Visitor", {timer_i: 0, events: {}, identity_name: null, init: function () {
        this.start_timer();
        this.uid_c = new $KI.Cookie("u", $KI.guid());
        this.views_c = new $KI.Cookie("t");
        this.update_views();
        this.timezone = $KI.timezone();
        this.language = navigator.language;
        this.history = window.history;
        return this
    }, start_timer: function () {
        this.timer = setInterval($KI.bind(function () {
            this.timer_i++
        }, this), 1000)
    }, stop_timer: function () {
        clearInterval(this.timer);
        return this.timer_i
    }, uid: function () {
        return this.uid_c.get()
    }, identity: function (name) {
        if (name) {
            return this.identity_name = name
        } else {
            return this.identity_name
        }
    }, views: function (k) {
        var m = {first: 0, last: 1, current: 2, unique: 3, all: 4}, c = this.views_c.get().split(";");
        return c[m[k]]
    }, update_views: function () {
        var c = this.views_c.get().split(";"), n = new Date().getTime(), m = 12, f = [];
        if (c.length !== 5) {
            f.push(n, n, n, 1, 1)
        } else {
            if (c[1] > n) {
                f.push(c[0], n, n, c[3], c[4])
            } else {
                f = c;
                if (((n - c[1]) / 1000) / 3600 >= m) {
                    f[1] = n;
                    f[3]++
                }
                f[2] = n;
                f[4]++
            }
        }
        for (var i = 0; i < f.length; i++) {
            f[i] = $KI.toInt(f[i])
        }
        this.views_c.set(f.join(";"));
        return f
    }, to_query: function () {
        var h = {u: this.uid(), i: this.identity(), t: this.stop_timer(), tz: this.timezone.join(","), l: this.language, h: this.history.length};
        return $KI.query(h)
    }});
    $KI.bundle("Survey", {current: {node_type: null, node: null}, options: {default_thanks_msg: "Thank you! Your response has been sent.", thanks: {message: "__DEFAULT__", close: [60 * 1000, 120 * 1000]}, selection_submits: true}, init: function (args) {
        var o = args[0];
        this.id = o.id;
        this.setOptions(o.options);
        this.status_c = new $KI.Cookie("s");
        this.locale = KI.locale.use(this.option("language"));
        this.view_type = o.view_type || "default";
        this.name = o.name || null;
        this.requires = o.requires;
        this.questions = [];
        if ((typeof(o.questions) != "undefined") && o.questions != null) {
            for (var i = 0; i < o.questions.length; i++) {
                var q = new $KI.Question(o.questions[i], i);
                this.questions[i] = q
            }
        }
        this.question_screens = o.question_screens;
        this.message_screens = o.message_screens;
        this.actions = o.actions;
        this.start = o.start || null;
        if ((typeof(this.start) == "undefined") || this.start == null) {
            this.start = {node_type: "question", id: this.questions[0].id}
        }
        this.update_cookie();
        return this
    }, getQuestionAndAnswer: function (qid, aid) {
        var q = $KI.getById(this.questions, qid);
        if (q && q.answers) {
            var a = $KI.getById(q.answers, aid);
            if (a) {
                return[q, a]
            }
        }
        return null
    }, init_view: function (view) {
        if ($KI.is_bundle("Survey_" + view)) {
            this.view = new $KI["Survey_" + view](this)
        }
    }, update_cookie: function () {
        var s = this.status_c.get();
        if (s.indexOf("{") != -1) {
            this.status_c.set(this._encode(eval("(" + s + ")")))
        }
    }, __: function (key, value) {
        var map = {views: 0, completed: 1, minimized: 3, participant: 4};
        var current = this._decode(this.status_c.get());
        if (!current[this.id]) {
            current[this.id] = [0, 0, 0, 0, 2]
        }
        if ($KI.type(value) != "undefined") {
            if (value === "++") {
                current[this.id][map[key]]++
            } else {
                current[this.id][map[key]] = value
            }
            this.status_c.set(this._encode(current))
        } else {
            return $KI.toInt(current[this.id][map[key]])
        }
    }, setRequires: function (r) {
        this.requires = $KI.merge(this.requires, r)
    }, require: function (req) {
        return $KI.select(this.requires || {}, req)
    }, ping: function () {
        var v = KI.visitor, l = KI.location, r = new $KI.Request("bucket", "/c.js?" + [$KI.query({id: this.id, cid: KI.customer.id, ref: l.referrer.get(), p: l.get("href")}), v.to_query()].join("&")).make()
    }, can_show: function () {
        var identity = KI.visitor.identity();
        if (KI.location.has_query("preview")) {
            return true
        }
        if (this.__("completed") && this.option("persistent") != true) {
            return false
        }
        if (completed = this.require("completed")) {
            if (id = KI.get_by_id("surveys", completed)) {
                var check = new $KI.Survey(id);
                if (!check.__("completed")) {
                    return false
                }
            } else {
                return false
            }
        }
        if (this.option("one_shot") && this.__("views") >= 1) {
            return false
        }
        if (this.option("tab_closes") && this.__("minimized")) {
            return false
        }
        signed_in = this.require("signed_in");
        if (signed_in && (("true" === signed_in) && (null === identity)) || (("false" === signed_in) && (!(null === identity)))) {
            return false
        }
        if (this.require("all_views") && this.require("all_views") > KI.visitor.views("all")) {
            return false
        }
        if (this.require("views") && (this.require("views") > KI.visitor.views("unique"))) {
            return false
        }
        if (this.require("survey_views") && (this.require("survey_views") > this.__("views"))) {
            return false
        }
        var specify_ids = this.require("specify_ids");
        if (specify_ids) {
            var policy = specify_ids.policy;
            var list = specify_ids.list;
            if ($KI.type(list, "object")) {
                if (!identity) {
                    return false
                }
                if (("whitelist" == policy) && (!list[$KI.sha1(identity)])) {
                    return false
                }
                if (("blacklist" == policy) && list[$KI.sha1(identity)]) {
                    return false
                }
            }
        }
        var now = $KI.mktime();
        var start = this.require("start");
        if (start && start.length == 10 && $KI.ymd(start) > now) {
            return false
        }
        var end = this.require("end");
        if (end && end.length == 10 && $KI.ymd(end) < now) {
            return false
        }
        if (this.require("direct") && KI.location.referrer.get()) {
            return false
        }
        var search = this.require("search");
        if (search) {
            var searched_for = KI.location.search_terms();
            if (!searched_for) {
                return false
            }
            if (search.terms && !new RegExp("(" + search.terms.split(" ").join("|") + ")", "ig").test(searched_for.terms)) {
                return false
            }
            if (search.engine && search.engine != "any" && search.engine != searched_for.engine) {
                return false
            }
        }
        var event = this.require("event");
        if (event && !this.__("minimized")) {
            this.event_block = true;
            switch (event) {
                case"scroll":
                    this.func = $KI.bind(function (e) {
                        var p = $KI.scrolled();
                        if (p > 50) {
                            $KI.detach(document.body, "mousewheel", this.func);
                            this.event_block = false;
                            this.show()
                        }
                    }, this);
                    $KI.attach(document.body, "mousewheel", this.func);
                    break;
                case"movetoclose":
                    this.func = $KI.bind(function (e) {
                        if (e.pageY < 10 || e.clientY < 10) {
                            $KI.detach(document, "mousemove", this.func);
                            this.event_block = false;
                            this.show()
                        }
                    }, this);
                    $KI.attach(document, "mousemove", this.func);
                    break
            }
        }
        var participant = this.__("participant");
        if (isNaN(participant) || (2 == participant)) {
            var sample_percent_visitors = this.require("percent_visitors");
            sample_percent_visitors = parseFloat(sample_percent_visitors);
            if (sample_percent_visitors && !isNaN(sample_percent_visitors) && (sample_percent_visitors >= 0) && (sample_percent_visitors <= 100)) {
                var percentage_shown = 100 * Math.random();
                if (percentage_shown > sample_percent_visitors) {
                    this.__("participant", 0);
                    return(false)
                } else {
                    this.__("participant", 1)
                }
            }
        } else {
            if (0 == participant) {
                return(false)
            } else {
                if (1 != participant) {
                    throw new Error("Illegal ki_s cookie value")
                }
            }
        }
        if (($KI.select(this, "requires/custom") != undefined) && ($KI.size(this.requires.custom) > 0)) {
            for (var property in this.requires.custom) {
                var qtp_value = this.requires.custom[property];
                var actual_value = KI.props[property];
                if (!(actual_value == qtp_value)) {
                    return false
                }
            }
        }
        if (($KI.select(this, "requires/optimizely") != undefined) && ($KI.size(this.requires.optimizely) > 0)) {
            var experiment_id = this.requires.optimizely.experiment_id;
            var variation_index = -1;
            if (typeof(optimizely) != "undefined" && optimizely.variationMap.hasOwnProperty(experiment_id)) {
                variation_index = optimizely.variationMap[experiment_id]
            }
            if (variation_index > -1) {
                var cur_variation_name = optimizely.data.variations[optimizely.data.experiments[experiment_id].variation_ids[variation_index]].name;
                if (!$KI.contains(this.requires.optimizely.variation_names, cur_variation_name)) {
                    return false
                }
            }
        }
        return true
    }, show: function () {
        if (!this.event_block) {
            this.init_view(this.view_type);
            if (this.view) {
                last_stop = this.show_node(this.start);
                this.__("views", "++");
                this.ping();
                KI.metrics.record("Saw nudge", {"Nudge Name": this.name});
                this.view.show()
            }
        }
    }, submit: function (e) {
        if (e) {
            e.preventDefault()
        }
        if (this.option("prevent_send")) {
            return false
        }
        var cbArg = this.get_callback_arg(this.current);
        var cbResponse = KI.event.fire("submit", {current_fields: cbArg});
        if (typeof cbResponse != "undefined") {
            if ((typeof(cbResponse.is_valid) != "undefined") && (false == cbResponse.is_valid)) {
                var message = "Please check your input!";
                if ((typeof(cbResponse.error_message) != "undefined") && (null != cbResponse.error_message)) {
                    message = cbResponse.error_message
                }
                alert(message);
                return
            }
        }
        var last_stop = false;
        var next_node_conf = {node_type: "thanks", id: null};
        var qids = null;
        switch (this.current.node_type) {
            case"question":
                var q = new $KI.Question(this.current.node, 0);
                qids = [q.id];
                next_node_conf = q.get_next_conf(this.view.form);
                var serialized = $KI.serialize(this.view.form, qids);
                this.send_response(serialized);
                break;
            case"question_screen":
                qids = this.current.node.questions;
                if (this.current.node.next) {
                    next_node_conf = this.current.node.next
                }
                var serialized = $KI.serialize(this.view.form, qids);
                this.send_response(serialized);
                break;
            case"action":
                if (this.current.node.next) {
                    next_node_conf = this.current.node.next
                }
                break
        }
        last_stop = this.show_node(next_node_conf);
        try {
            this.track(cbArg)
        } catch (e) {
        }
        this.__("completed", 1)
    }, show_node: function (node_conf) {
        var node = {node_type: null, node: null};
        var is_last_stop = false;
        if (node_conf) {
            node.node_type = node_conf.node_type;
            switch (node_conf.node_type) {
                case"thanks":
                case"message_screen":
                    if (null == node_conf.id) {
                        node.node = this.options.thanks;
                        is_last_stop = true
                    } else {
                        node.node = this.find_thankyou(node_conf.id)
                    }
                    node.node = $KI.merge(this.options.thanks, node.node);
                    break;
                case"question_screen":
                    node.node = this.find_question_screen(node_conf.id);
                    break;
                case"question":
                    node.node = this.find_question(node_conf.id);
                    break;
                case"action":
                    node.node = this.find_action(node_conf.id);
                    break
            }
        }
        if (null == node.node) {
            node.node_type = "thanks";
            node.node = this.options.thanks;
            is_last_stop = true
        }
        this.current = node;
        switch (node.node_type) {
            case"thanks":
            case"message_screen":
                if ("redirect" == node.node.type) {
                    KI.event.add("responseSent", $KI.bind(function () {
                        window.location = node.node.redirect.url
                    }, this.view))
                } else {
                    this.view.show_thanks(node.node)
                }
                break;
            case"question_screen":
                this.view.show_question_screen(node.node);
                break;
            case"question":
                this.view.show_question(node.node);
                break;
            case"action":
                this.perform_action(node.node);
                break
        }
        return is_last_stop
    }, get_callback_arg: function (current_node) {
        var callback_arg = [];
        switch (current_node.node_type) {
            case"question":
                var q = new $KI.Question(current_node.node, 0);
                arg = {question: q.title, answer: q.read_answer(this.view.form)};
                if ((typeof(q.canonical_name) != "undefined") && (q.canonical_name != null)) {
                    arg.canonical_name = q.canonical_name
                }
                callback_arg.push(arg);
                break;
            case"question_screen":
                var question_screen = current_node.node;
                for (var j = 0; j < question_screen.questions.length; j++) {
                    var q = this.find_question(question_screen.questions[j]);
                    arg = {question: q.title, answer: q.read_answer(this.view.form)};
                    if ((typeof(q.canonical_name) != "undefined") && (q.canonical_name != null)) {
                        arg.canonical_name = q.canonical_name
                    }
                    callback_arg.push(arg)
                }
                break
        }
        return callback_arg
    }, get_all_values: function () {
        var ret = [];
        for (var j = 0; j < this.questions.length; j++) {
            var q = this.questions[j];
            arg = {question: q.title, answer: q.read_answer(this.view.form)};
            if ((typeof(q.canonical_name) != "undefined") && (q.canonical_name != null)) {
                arg.canonical_name = q.canonical_name
            }
            ret.push(arg)
        }
        return ret
    }, find_question: function (id) {
        for (var j = 0; j < this.questions.length; j++) {
            if (this.questions[j].id == id) {
                return this.questions[j]
            }
        }
        return null
    }, find_thankyou: function (id) {
        var thanks_screens = this.message_screens;
        if (thanks_screens) {
            for (var j = 0; j < thanks_screens.length; j++) {
                if (thanks_screens[j].id == id) {
                    return thanks_screens[j]
                }
            }
        }
        return null
    }, find_question_screen: function (id) {
        var question_screens = this.question_screens;
        if (question_screens) {
            for (var j = 0; j < question_screens.length; j++) {
                if (question_screens[j].id == id) {
                    return question_screens[j]
                }
            }
        }
        return null
    }, find_action: function (id) {
        for (var j = 0; j < this.actions.length; j++) {
            if (this.actions[j].id == id) {
                return this.actions[j]
            }
        }
        return null
    }, send_response: function (serialized) {
        var v = KI.visitor, l = KI.location, f = serialized, r = new $KI.Request("bucket", "/r.js?" + [$KI.query({id: this.id, ref: l.referrer.get(), p: l.get("href"), rp: KI.props}), v.to_query(), f].join("&")).make()
    }, cta_clicked: function (message_screen) {
        var url = decodeURIComponent(message_screen.cta.url);
        var cta_label = message_screen.cta.text + "->" + url;
        KI.metrics.record("Clicked CTA", {"Nudge Name": this.name, CTA: cta_label});
        this.ping_on_thank_you_cta_clicked(message_screen);
        setTimeout(function () {
            message_screen.cta.new_window ? window.open(url, "_blank") : window.location = url
        }, 300)
    }, ping_on_thank_you_cta_clicked: function (cta) {
        var v = KI.visitor, l = KI.location, r = new $KI.Request("bucket", "/a.js?" + [$KI.query({id: this.id, ctaid: (typeof cta != "undefined" && cta.id) ? cta.id : 0, ref: l.referrer.get(), p: l.get("pathname"), rp: KI.props}), v.to_query()].join("&")).make()
    }, call_nudge_action_server: function (action) {
        var qas = this.get_all_values();
        var qa_ser = {};
        for (var i = 0; i < qas.length; i++) {
            var qa = qas[i];
            if (qa.canonical_name && qa.answer.value) {
                qa_ser[$KI.url.encode(qa.canonical_name)] = qa.answer.value
            }
        }
        var v = KI.visitor, l = KI.location, r = new $KI.Request("api", "/nudge_actions/perform?" + [$KI.query({id: this.id, aid: (typeof action != "undefined" && action.id) ? action.id : 0, ref: l.referrer.get(), p: l.get("pathname"), rp: KI.props}), v.to_query(), $KI.query(qa_ser)].join("&")).make()
    }, perform_action: function (action) {
        if (this.option("preview_mode") == true) {
            this.preview_action(action);
            return
        }
        switch (action.action_type) {
            case"olark":
                this.view.close();
                show_olark = true;
                olark("api.box.show");
                olark("api.box.expand");
                olark("api.chat.sendNotificationToOperator", {body: "Olark action has been invoked on nudge " + this.name});
                this.ping_on_thank_you_cta_clicked(action);
            case"zopim":
                this.view.close();
                if ((!(("undefined" === typeof $zopim) || (undefined === $zopim))) && $zopim) {
                    $zopim.livechat.bubble.setTitle("Questions?");
                    $zopim.livechat.bubble.setText("Click here to chat with us!");
                    $zopim.livechat.window.show()
                }
                this.ping_on_thank_you_cta_clicked(action);
            case"snapengage":
                this.view.close();
                if ((!(("undefined" === typeof SnapABug) || (undefined === SnapABug))) && SnapABug) {
                    SnapABug.openProactiveChat(true, true, "Hello, can I help you with our setup process?")
                }
                this.ping_on_thank_you_cta_clicked(action);
                break;
            case"redirect":
                this.view.close();
                setTimeout(function () {
                    action.redirect.new_window ? window.open(decodeURIComponent(action.redirect.url), "_blank") : window.location = decodeURIComponent(action.redirect.url)
                }, 400);
                this.ping_on_thank_you_cta_clicked(action);
                break;
            default:
                this.call_nudge_action_server(action)
        }
        this.submit()
    }, preview_action: function (action) {
        var a_p_msg = "ACTION " + action.action_type + " invoked";
        switch (action.action_type) {
            case"olark":
                a_p_msg = "ACTION: Olark chat would start now";
                break;
            case"redirect":
                a_p_msg = "ACTION: User would be redirected to " + decodeURIComponent(action.redirect.url);
                break;
            default:
        }
        var preview_notice = {type: "message", id: -1, message: a_p_msg, show_checkmark: false};
        this.view.show_thanks(preview_notice);
        if (action.next) {
            setTimeout($KI.bind(this.submit, this), 3000)
        } else {
            setTimeout($KI.bind(this.view.close, this.view), 3000)
        }
    }, track: function (data) {
        var props = {"Nudge Name": this.name};
        for (var i = 0; i < data.length; i++) {
            var elt = data[i];
            var k = elt.question;
            if (typeof elt.canonical_name != "undefined") {
                k = elt.canonical_name
            }
            var v = elt.answer.value;
            if (typeof elt.answer.canonical_name != "undefined") {
                v = elt.answer.canonical_name
            }
            if (k && v) {
                props[k] = v
            }
        }
        KI.metrics.record("Answered nudge", props)
    }, powered_link: function () {
        return"http://www.qualaroo.com/r/p" + this._utm() + "&r=" + this.id
    }, _decode: function (string) {
        var obj = {}, split = string.split(";");
        for (var i = 0; i < split.length; i++) {
            var o = split[i].split(":");
            if (o[0] && o[1]) {
                obj[o[0]] = o[1].split(".")
            }
        }
        return obj
    }, _encode: function (object) {
        var string = [];
        for (var i in object) {
            if (object.hasOwnProperty(i)) {
                string.push(i + ":" + object[i].join("."))
            }
        }
        return string.join(";")
    }, _utm: function () {
        return"?" + $KI.query({utm_source: "suview", utm_medium: ((this.option("light") == true) ? "light" : "dark"), utm_campaign: document.location.hostname.toString().replace("www.", ""), utm_content: this.__("views")})
    }});
    $KI.bundle("Survey_default", {main: null, questions: [], event_block: false, submit_on_select: true, bottom_offset: 0, submit_button: null, init: function (args) {
        this.main = args[0];
        this.css();
        this.scaffolding();
        this.cache_sizes();
        this.detect_toolbars();
        this.submit_on_select = this.submit_on_select && this.main.option("selection_submits");
        KI.event.add("selection", this.selection_callback, this);
        if (this.main.__("minimized")) {
            this.minimize(true)
        }
        return this
    }, css: function () {
        $KI.css('#ki_container #ki_tab,#ki_container #ki_tab #ki_plus_min,#ki_container #ki_thanks #ki_check{background-image:url(data:image/png;base64,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);background-repeat:no-repeat}#ki_container #ki_tab.w_cta{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY8AAAA6CAYAAABI6tWVAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIEltYWdlUmVhZHk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chvleg4AAAJgSURBVHja7dvPSmNnHMfh79FEdKi1mzJ21dBtIJfRVVsVI7gbRcR1r6SXoO4KKirtqpchuC3aTVO6qQZGO/55ZzHnQKGFGcYGOfA88HIgyx/J75MXkqqUkiSpqqpKMl2fTpJufTpJppJUead5NkqYpMoIeAYz9We/2QV/vGcP/Jfyj+djkvskd/W5T/KQ5KE0S4h2LaZSShOO5o0yu7a2Nr+ysjI/GAw6/X7f8gKe7Pz8vJydnd0fHx+PDw4Oxklu64jcC0g7v9U2N45ukheHh4eLq6urXaMBJuXo6OhuOByOkryubyJuIC2Mx1QTjpOTky+WlpZmrq6upl692ly/uLz4+ubm9itjAp5qbm72196XvV/293d/XFhYeDw9PX2zvLz8exOQUsqjKbUrHtNJZjc2Nj7f3d39bDQadb/5dvmH8fh6YDzA/21+/tOzn386+X5xcfFuc3Pzr729vT+T3JZSHkynPaaam8dwOPwkSba2d9aFA5iU8fh6sLW9s54k9d7p1nuINsaj3+93kuTy8rfvjAWYpGbP1HtHPFoajypJp9frJUnu3vz90liASWr2TL13OvGT9NbGY9oogGcyLR7tjAcAfFQ8VB94LvaPmwcA4gEA4gGAeAAgHgCIBwDiAQDiAYB4ACAeAIgHAOIBgHgAwIfr/PulYioAuHkAIB4AiAcA4gGAeACAeAAgHgCIBwAtUJXiT4EAuHkAIB4AiAcA4gGAeACAeAAgHgCIBwDiAYB4AIB4ACAeAIgHAOIBgHgAgHgAIB4AiAcA4gGAeAAgHgAgHgCIBwDiAUC7vQWEI49w65hpfgAAAABJRU5ErkJggg==)}#ki_container.ie7 #ki_tab,#ki_container.ie7 #ki_tab a,#ki_container.ie7 #ki_thanks #ki_check{background-image:url(images/ki_master_dark.png);background-repeat:no-repeat}#ki_container.ie7 #ki_tab.w_cta{background-image:url(images/ki_master_dark_w_cta.png)}#ki_container.ki_light #ki_tab,#ki_container.ki_light #ki_tab #ki_plus_min,#ki_container.ki_light #ki_thanks #ki_check{background-image:url(data:image/png;base64,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)}#ki_container.ki_light #ki_tab.w_cta{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY8AAAA4CAYAAAAFInSeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIEltYWdlUmVhZHk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chvleg4AAAHaSURBVHja7dehbxRBGMbhb3aXs8X0Sh22R7B4GkqKKAqBvBCKIKGA40/AASVBUEJOIlCohpDgsYTUIgkY9DKzgyMNwZByYsnzyJGv+H6ZVGsNAPgb3Z8eHz97sZFOdRdTxLlIcdZMwInV+FwjPtUf+f292zePDDJu6fefx/7B4k6k2DYNsMSQHO7tzp8a4j+Jx/7B4m6kuNw1bXN1+9LGmenq6a7rGjMBJ5VzHr58/fb9zeG7ozyUIWq83dudP7HMyOPx6PnifNvEw8lk0t64fu1CSqkrpUQpxUrAibVtG23bRq01v3z1+kPf96UM8eD+rflH64zPr19FG+lKRMTO1uYspdT1fS8cwD9TSom+7yOl1O1sbc6O3x1GHI9o6iwiYn1tupJztgywFDnnWF+brhy/O4w5HhGrERFN06RhGCwDLMUwDNE0TTp+dxh3PABAPAAQDwDEAwDxAEA8AEA8ABAPAMQDAPEAQDwAQDwAEA8AxAMA8QBAPAAQDwAQDwDEAwDxAEA8ABAPABAPAMQDAPEAYJRSrdUKAPh5ACAeAIgHAOIBgHgAgHgAIB4AiAcA4gGAeACAeAAgHgCIBwDiAYB4AIB4ACAeAIgHAOIBgHgAIB4AIB4ALNFPosZt4VrW6DcAAAAASUVORK5CYII=)}#ki_container.ie7.ki_light #ki_tab,#ki_container.ie7.ki_light #ki_tab a,#ki_container.ie7.ki_light #ki_thanks #ki_check{background-image:url(images/ki_master_light.png)}#ki_container.ie7.ki_light #ki_tab.w_cta{background-image:url(images/ki_master_light_w_cta.png)}#ki_container #ki_main{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAAABCAYAAACVM8ikAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACtJREFUOMtjYGBg4ARimf///xuAsKq65qdRPIpH8SimNYaVOcDyRxZUDgEAf1CZ7AMmBtIAAAAASUVORK5CYII=) 0 0 repeat-y}#ki_container.ie7 #ki_main{background:transparent url(images/ki_main_dark.png) 0 0 repeat-y}#ki_container.ki_light #ki_main{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAAABCAYAAACVM8ikAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACtJREFUOMtj+P//PwMIT5q9YCsIA9mfvn79OopH8SgexTTDoHIGqcwBl0EAtSpOgBEP8U0AAAAASUVORK5CYII=)}#ki_container.ie7.ki_light #ki_main{background-image:url(images/ki_main_light.png)}#ki_container #ki_fb_container{background-image:url(data:image/gif;base64,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)}#ki_container.ie7 #ki_fb_container{background-image:url(images/cog.gif)}#ki_container .ki_twtr_icon{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXpJREFUKM+FUj1PwlAUZXPyf5i40lV3R4NxMFFZHNTEn2BMiJuMhEVd/WTAGKMGlEQHrDYCSYW0lkiAILR+RGCgyPXd177a+mgcTu9t7j3nnXvfCwBAAHEo1efFygfonR5kVB02zkrjrOYH+tmXanNG17wiAL3bs2Eq66dPY/+Ssy/vgMRQfgCCCBApD6jAnlRbXjvKjSJ8yfREYle4B4qwPHAcYI1AQaRLzShHZk1B0SLPFABSrR6kddOKLRPkT0skVWxEOTICiUwA7dPc/p94ANqjGW3gbCOYbTfJESNgfUNtM8KkBLBI5sbZMa4W+3DS7OPJsUu5PutrGwXYwthJLC8b7c3h23bNjPNlDdMjYPfEOHK++kYbpx69MwZdy4po3ygQvyhUQh7ysfi8QgoJnOvvktxgDj1kBJlnFwvJ1z51ILiuzLp7aw+3apMnT28lRzT9CwUSzhvv/L4yzEk837mWwxyZ4eBOXcpVDc+WMd4oDdjOyAvu3h+WBNpOaNzeBAAAAABJRU5ErkJggg==) 0 0 no-repeat}#ki_container.ie7 .ki_twtr_icon{background:transparent url(images/ki_twtr_icon.png) 0 0 no-repeat}#ki_container .ki_powered_by,#ki_container .ki_powered_by:hover{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAMCAYAAACNzvbFAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6c3ViamVjdD4KICAgICAgICAgICAgPHJkZjpCYWcvPgogICAgICAgICA8L2RjOnN1YmplY3Q+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrlPw1BAAABK0lEQVQoz63TTytEURjH8TtzKVGk7KSkJG9AKSWlaDaymGxmajazsUfZitgoJQsbYjcLNkpKCcXChqRkYWHrBVge38Pv4SEz+Xfrc2fO6XnOfZ5zz01CCMl/i7cuZKoExPk6DGEDFzjFLFqQKm4f85YTb9MaxOSspPqN82vh9VpEDgWc4AFtiplTTL9VOoxVtLsKmzCCM9yh+4suJnCDA6zjWJ2MWUAFTzhS0KOevI1GdWGtZjW23F4MYgF92Etcm7G1Zaxg0lU3ik1cY8ot3IAt7OISeQygw56W1nhJNh5X9TOaL+Lc7euHt+8X+cyqqtf/HVy5nHv3kt9yfnL+YmJJ+21zS2iuVel3Fs1pC+Letur8Zv6yqCUfhverUu2L+o0elHGLTneCXjwDCRMgrmq/1zEAAAAASUVORK5CYII=) 0 0 no-repeat}#ki_container.ki_light .ki_powered_by,#ki_container.ki_light .ki_powered_by:hover{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAMCAYAAACNzvbFAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6c3ViamVjdD4KICAgICAgICAgICAgPHJkZjpCYWcvPgogICAgICAgICA8L2RjOnN1YmplY3Q+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgrlPw1BAAABgklEQVQoz62SvYrCQBSF8xhpfATFFxDrgFUQLAQjmEJELQRBsPMHo6bIKyg2VmIVwcZOLGIhWhiwUUFslID4Uxzi3gGzYd1dXNziMsyZme/Ovedytm1zr8b5fMb1eoVbu91uoHBrnGVZOJ1O+A02Go1Qq9WQy+VQLBYxGAwcUK/XY9put3MY3H6/x3g8/hFar9fh8/mgaRp0XUer1UI4HGYgOl+v1/B6vchms5/Qy+WCarUKwzDwKIVKXK1WiEQiCAQCOBwOT0mbzSaCwSAKhQIkSUImk0Gj0WBv2YXNZsMOotEokskkW0OhEFRVBbVnsVjANM0nMCXudDpQFIW1hKDH4xHOBfoNtYFKnEwm2G63DLJcLtFutyGKIiqVigMmLZ1Oo1QqYTgcgj72qOhl52ezGTweD7rdLnsYi8Uwn8+/9YL7y0ilUinE43EG+vDAzufz70PJHDLOvX8bOp1OwfM8/H4/ZFm2aRzfhlJQH8vlMgRBQCKR+B+oO/r9Phuhr/odYgDn7GeN5HQAAAAASUVORK5CYII=) 0 0 no-repeat}html div#ki_container *,html div#ki_container a:hover,html div#ki_container a:focus,html div#ki_container a:active{background:none;border:0;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;float:none;font:normal 100%/normal helvetica,arial,sans-serif;-webkit-font-smoothing:antialiased;height:auto;letter-spacing:normal;margin:0;outline:none;position:static;padding:0;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;width:auto;visibility:visible}html div#ki_container{background:none;border:0;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;bottom:-99999px;height:auto;margin:0;padding:0;position:fixed;right:30px;width:291px;z-index:99999}html div#ki_container.ki_left{left:30px}#ki_container #ki_tab{background-position:0 0;position:relative;height:33px;width:291px}#ki_container #ki_tab #ki_plus_min{background-position:-291px -7px;display:block;height:19px;position:absolute;right:4px;top:4px;text-indent:-9999em;width:25px}#ki_container.ki_minimized #ki_tab #ki_plus_min{background-position:-316px -6px}#ki_container #ki_tab #ki_min_cta{display:block;height:19px;position:absolute;left:10px;top:12px;width:250px;display:none;font:bold 14px helvetica,arial,sans-serif;text-align:center;color:#f2f3f9}#ki_container.ki_light #ki_tab #ki_min_cta{color:#8a9197}#ki_container.ki_minimized #ki_tab #ki_min_cta{display:block}#ki_container #ki_tab.w_cta #ki_plus_min{right:8px;top:9px}#ki_container #ki_main{overflow:hidden;padding:2px 4px;width:283px;-webkit-box-sizing:content-box}html div#ki_container hr{border-collapse:collapse;border-top:1px solid #1c1e1e;border-top:1px solid rgba(0,0,0,.4);border-bottom:1px solid #454647;border-bottom:1px solid rgba(255,255,255,.1);display:block;margin:13px 0 12px;width:283px}html div#ki_container.ki_light hr{border-top:1px solid #e4e4e4;border-top:1px solid rgba(0,0,0,.1);border-bottom:1px solid #fff}html div#ki_container hr.ki_silent{border-top:none;border-bottom:none;border:none}html div#ki_questions.ki_buttonless{padding-bottom:10px}html div#ki_container h1.ki_h1{color:#fff;display:block;font:bold 12px/17px helvetica,arial,sans-serif;padding:8px 15px 5px;text-align:center;text-transform:none;text-shadow:1px 1px 1px #000;white-space:normal}html div#ki_container.ki_light h1.ki_h1{color:#3b3f42;text-shadow:1px 1px 1px #fff}html div#ki_container.ki_ltr h1.ki_h1{text-align:left}#ki_container .ki_description{color:#ebebeb;font:normal 11px/17px helvetica,arial,sans-serif;margin:0 15px 15px 15px}#ki_container.ki_rtl .ki_description{text-align:right}#ki_container .ki_description.ki_before{margin-bottom:0}#ki_container.ki_light .ki_description{color:#53575a}#ki_container .ki_description a{color:#ebebeb;text-decoration:underline}#ki_container.ki_light .ki_description a{color:#53575a}#ki_container ul.ki_answers{display:block;list-style:none;margin-bottom:2px;overflow:hidden;padding:0 15px}#ki_container ul.ki_answers li{display:block;list-style:none;margin:0}#ki_container li.ki_answer_li label{background:#414243;background:rgba(183,183,183,.1);border-radius:26px;-webkit-border-radius:26px;-moz-border-radius:26px;color:#ebebeb;display:block;font:normal 11px/15px helvetica,arial,sans-serif;margin-bottom:4px;padding:10px 10px 10px 28px;position:relative;text-align:left;text-transform:none;width:215px}#ki_container.ki_rtl li.ki_answer_li label{text-align:right;padding-right:28px;padding-left:10px}#ki_container.ie7 li.ki_answer_li label{background:#414243}#ki_container.ki_light li.ki_answer_li label{background:#e1e1e1;background:rgba(225,225,225,.9);color:#53575a;text-shadow:1px 1px 1px #fff}#ki_container.ie7.ki_light li.ki_answer_li label{background:#e1e1e1}#ki_container li.ki_answer_li label:hover{background:#404243;background:rgba(183,183,183,.12);cursor:pointer}#ki_container li.ki_answer_li label:hover{background:#404243}#ki_container.ki_light li.ki_answer_li label:hover{background:#e7e7e7;background:rgba(225,225,225,.7)}#ki_container.ki_light li.ki_answer_li label:hover{background:#e7e7e7}#ki_container li.ki_answer_li input.ki_radio,#ki_container li.ki_answer_li input.ki_checkbox{background:none;border:0;left:7px;margin:0 0 0 2px;padding:0;position:absolute;top:11px;min-width:0}#ki_container li.ki_answer_li input.ki_radio{-webkit-appearance:radio}#ki_container li.ki_answer_li input.ki_checkbox{-webkit-appearance:checkbox}#ki_container.ki_rtl li.ki_answer_li input.ki_radio,#ki_container.ki_rtl li.ki_answer_li input.ki_checkbox{left:auto;right:7px;margin-right:2px;margin-left:0}#ki_container.ie7 li.ki_answer_li input.ki_radio,#ki_container.ie7 li.ki_answer_li input.ki_checkbox{left:5px;top:8px}#ki_container.ki_rtl.ie7 li.ki_answer_li input.ki_radio,#ki_container.ki_rtl.ie7 li.ki_answer_li input.ki_checkbox{left:auto;right:5px}#ki_container input.ki_explain_small,#ki_container input.ki_explain_small:focus{background:none;background-color:#fff;border:2px solid #2c2d30;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;color:#333;font-size:12px;margin:4px 10px 4px 0;padding:5px;width:185px}#ki_container.ki_rtl input.ki_explain_small,#ki_container.ki_rtl input.ki_explain_small:focus{margin-left:34px;text-align:right}#ki_container.ki_light input.ki_explain_small,#ki_container.ki_light input.ki_explain_small:focus{border-color:#ddd}html div#ki_container textarea,html div#ki_container textarea:focus{background:#fff;border:2px solid #18191b;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;color:#333;font:normal 12px/16px helvetica,arial,sans-serif;height:35px;min-height:35px;margin:0 15px;overflow:auto;padding:5px;resize:vertical;width:239px;min-width:239px}html div#ki_container.ki_rtl textarea,html div#ki_container.ki_rtl textarea:focus{text-align:right}html div#ki_container.ki_light textarea,html div#ki_container.ki_light textarea:focus{border-color:#eaebec}#ki_container textarea.ki_explain_large,#ki_container textarea.ki_explain_large:focus{border-color:#2c2d30;margin:4px 10px 4px 0;width:185px;min-width:185px}#ki_container.ki_light textarea.ki_explain_large,#ki_container.ki_light textarea.ki_explain_large:focus{border-color:#ddd}html div#ki_container .ki_text_single input{background:#fff;border:2px solid #18191b;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;color:#333;font:normal 12px/16px helvetica,arial,sans-serif;margin:0 15px;padding:5px;width:239px}html #ki_container ul.ki_nps{height:42px;margin-left:16px}html #ki_container ul.ki_nps li{float:left;position:relative;list-style:none;width:20px;margin-right:3px}html #ki_container ul.ki_nps li a,html #ki_container ul.ki_nps li a:hover{display:block;padding-top:3px;background:#414243;background:rgba(183,183,183,0.1);border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;cursor:pointer;color:#fff;font-size:11px;height:19px;line-height:17px;text-align:center;text-decoration:none;text-shadow:1px 1px 1px #000;width:20px}html #ki_container.ki_light ul.ki_nps li a{background:#e1e1e1;background:rgba(225,225,225,.9);color:#53575a;text-shadow:1px 1px 1px #fff}html #ki_container ul.ki_nps li a:hover,html #ki_container ul.ki_nps li.active a{text-shadow:none;color:#fff}html #ki_container ul.ki_nps li.nps_0 a:hover,html #ki_container ul.ki_nps li.nps_0.active a{background:#e52c32;background:rgba(229,44,50,0.9)}html #ki_container ul.ki_nps li.nps_1 a:hover,html #ki_container ul.ki_nps li.nps_1.active a{background:#bd383c;background:rgba(189,56,60,0.9)}html #ki_container ul.ki_nps li.nps_2 a:hover,html #ki_container ul.ki_nps li.nps_2.active a{background:#cf452e;background:rgba(207,69,46,0.9)}html #ki_container ul.ki_nps li.nps_3 a:hover,html #ki_container ul.ki_nps li.nps_3.active a{background:#d34a23;background:rgba(211,74,35,0.9)}html #ki_container ul.ki_nps li.nps_4 a:hover,html #ki_container ul.ki_nps li.nps_4.active a{background:#d85c1f;background:rgba(216,92,31,0.9)}html #ki_container ul.ki_nps li.nps_5 a:hover,html #ki_container ul.ki_nps li.nps_5.active a{background:#d4631b;background:rgba(212,99,27,0.9)}html #ki_container ul.ki_nps li.nps_6 a:hover,html #ki_container ul.ki_nps li.nps_6.active a{background:#cb751e;background:rgba(203,117,30,0.9)}html #ki_container ul.ki_nps li.nps_7 a:hover,html #ki_container ul.ki_nps li.nps_7.active a{background:#b68622;background:rgba(182,134,34,0.9)}html #ki_container ul.ki_nps li.nps_8 a:hover,html #ki_container ul.ki_nps li.nps_8.active a{background:#a09829;background:rgba(160,152,41,0.9)}html #ki_container ul.ki_nps li.nps_9 a:hover,html #ki_container ul.ki_nps li.nps_9.active a{background:#7e9d38;background:rgba(126,157,56,0.9)}html #ki_container ul.ki_nps li.nps_10 a:hover,html #ki_container ul.ki_nps li.nps_10.active a{background:#7ab242;background:rgba(122,178,66,0.9)}html #ki_container ul.ki_nps li span.ki_not_likely,html #ki_container ul.ki_nps li span.ki_most_likely{position:absolute;margin-top:5px;width:120px;font-size:10px;color:#a9a9a9;text-align:left;text-shadow:0 1px 0 #000}html #ki_container ul.ki_nps li span.ki_most_likely{right:0;text-align:right}html #ki_container.ki_light ul.ki_nps li span.ki_not_likely,html #ki_container.ki_light ul.ki_nps li span.ki_most_likely{color:#53575a;text-shadow:1px 1px 1px #fff}#ki_container .ki_datepicker{border:0 solid #18191b;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;color:#333;font:normal 12px/16px helvetica,arial,sans-serif;margin:0 15px;padding:5px;width:239px}#ki_container .ki_datepicker select{background:#fff;margin:0 2px}#ki_container #ki_buttons{height:34px;position:relative}#ki_container .ki_button,#ki_container .ki_button:hover{background:#919191;background:rgba(145,145,145,.9);border-top:1px solid #a9a9a9;border-top:1px solid rgba(255,255,255,.2);border-bottom:1px solid #737373;border-bottom:1px solid rgba(0,0,0,.2);border-radius:26px;-webkit-border-radius:26px;-moz-border-radius:26px;color:#fff;display:inline-block;font:bold 11px/normal helvetica,arial,sans-serif;padding:6px 26px 6px 12px;position:absolute;right:15px;top:0;text-decoration:none;text-shadow:1px 1px 1px #747474;text-shadow:1px 1px 1px rgba(0,0,0,.2);text-transform:uppercase}#ki_container.ie7 .ki_button,#ki_container.ie7 .ki_button:hover{background:#919191}#ki_container .ki_button .ki_circle{background:#fff;border-radius:26px;-webkit-border-radius:26px;-moz-border-radius:26px;box-shadow:1px 1px 1px rgba(0,0 0,.2);-webkit-box-shadow:1px 1px 1px rgba(0,0 0,.2);-moz-box-shadow:1px 1px 1px rgba(0,0 0,.2);display:block;height:12px;margin-top:-6px;position:absolute;right:8px;top:50%;width:12px}#ki_container .ki_button .ki_arrow{position:absolute;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:3px solid #919191;top:3px;left:5px}#ki_container .ki_button:hover{background:#888;background:rgba(136,136,136,.9)}#ki_container.ie7 .ki_button:hover{background:#888}#ki_container .ki_powered_by,#ki_container .ki_powered_by:hover{color:#a9a9a9;font:normal 10px/13px helvetica,arial,sans-serif;height:13px;left:15px;position:absolute;text-decoration:none;text-shadow:0 1px 0 #000;top:6px;padding-left:25px}#ki_container.ki_light .ki_powered_by,#ki_container.ki_light .ki_powered_by:hover{color:#53575a;text-shadow:0 1px 0 #fff}#ki_container .ki_powered_by:hover,#ki_container.ki_light .ki_powered_by:hover{text-decoration:underline}#ki_container .ki_thanks_only{padding-bottom:12px}#ki_container #ki_thanks h1{padding-bottom:0}#ki_container #ki_check{background-position:-341px 0;height:58px;margin:0 auto 3px auto;width:58px}#ki_container.ie7 #ki_check,#ki_container.ie8 #ki_check{background-color:#303233}#ki_container.ki_light.ie7 #ki_check,#ki_container.ki_light.ie8 #ki_check{background-color:#f5f5f5}#ki_container #ki_call,#ki_container .ki_section{margin:0 15px;text-align:center}#ki_container #ki_call h1,#ki_container .ki_section h1{padding-bottom:11px}#ki_container .ki_section p{text-align:center}#ki_container .ki_cta,#ki_container .ki_twtr_button,#ki_container .ki_cta:hover,#ki_container .ki_twtr_button:hover{background-color:#2e69ac;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;box-shadow:1px 2px 1px rgba(0,0,0,.2);-webkit-box-shadow:1px 2px 1px rgba(0,0,0,.2);-moz-box-shadow:1px 2px 1px rgba(0,0,0,.2);color:#fff;margin:0 0 12px 0;padding:5px 28px 5px 7px;position:relative;right:auto;top:auto}#ki_container.ie7 .ki_cta{background:#2e69ac}#ki_container .ki_cta .ki_arrow{border-left:3px solid #2e69ac}#ki_container .ki_cta:hover{background-color:#2c63a1}#ki_container.ie7 .ki_cta:hover{background:#2c63a1}#ki_container .ki_cta:active,#ki_container .ki_twtr_button:active{box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none}#ki_container .ki_twtr_button,#ki_container .ki_twtr_button:hover{background-color:#509fc8;padding:7px 8px 5px 28px}#ki_container.ie7 .ki_twtr_button{background:#509fc8}#ki_container .ki_twtr_icon{display:block;height:15px;left:7px;position:absolute;top:4px;width:15px}#ki_container .ki_twtr_button:hover{background-color:#4d99c1}#ki_container.ie7 .ki_twtr_button:hover{background:#4d99c1}#ki_container #ki_fb_container{background:#414243;background:rgba(183,183,183,.1);background-position:50% 50%;background-repeat:no-repeat;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;height:60px;margin:13px 0;padding:10px}#ki_container.ie7 #ki_fb_container{background:#414243}#ki_container #ki_fb_container.loaded{background-image:none}#ki_container.ki_light #ki_fb_container{background:#eee;background:rgba(183,183,183,.1)}#ki_container.ie7.ki_light #ki_fb_container{background:#eee}')
    }, scaffolding: function () {
        this.container = new $KI.$("div", "ki_container");
        if (this.main.option("light") == true) {
            this.container.addClass("ki_light")
        }
        if (this.main.locale.rtl) {
            this.container.addClass("ki_rtl")
        } else {
            if (this.main.option("silent_hrs")) {
                this.container.addClass("ki_ltr")
            }
        }
        if (anchor = this.main.option("anchor")) {
            this.container.addClass("ki_" + anchor)
        }
        var matchie;
        if (matchie = navigator.userAgent.match(/MSIE ([0-9])/i)) {
            this.container.addClass("ie" + matchie[1])
        }
        this.plus_min = new $KI.$("a", "ki_plus_min", {href: "#"}).attach("click", this.toggle, this);
        if (min_cta_text = this.main.option("min_cta")) {
            if (min_cta_text.length < 18) {
                this.ki_tab_cta_link = (new $KI.$("a", "ki_min_cta", {href: "#"})).appendText(min_cta_text);
                this.ki_tab_cta_link.attach("click", this.toggle, this)
            }
        }
        this.main_div = new $KI.$("div", "ki_main");
        this.form = new $KI.$("form", "ki_form", {action: "#", method: "post"}).attach("submit", this.main.submit, this.main);
        var questions = this.main.option("shuffle") ? $KI.shuffle(this.main.questions) : this.main.questions;
        this.questions_container = new $KI.$("div", "ki_questions");
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            var q_elt = q.render();
            q_elt.hide();
            this.questions_container.adopt(q_elt)
        }
        var buttons = new $KI.$("div", "ki_buttons");
        if (KI.customer.show_powered) {
            buttons.adopt(new $KI.$("a", null, {href: this.main.powered_link(), target: "_blank"}).addClass("ki_powered_by").appendText("Powered by Qualaroo [?]"))
        }
        this.submit_button = new $KI.$("a", "ki_submit_button", {href: "#"}).addClass("ki_button").attach("click", this.main.submit, this.main).appendText(this.main.locale.__("send", "Send")).adopt(new $KI.$("span").addClass("ki_circle").adopt(new $KI.$("span").addClass("ki_arrow")));
        buttons.prepend(this.submit_button);
        this.thanks = new $KI.$("div", "ki_thanks");
        this.form.adopt(this.questions_container);
        if (buttons) {
            this.form.adopt([new $KI.$("hr"), buttons])
        }
        if (typeof(this.ki_tab_cta_link) != "undefined") {
            tab_content = [this.ki_tab_cta_link, this.plus_min]
        } else {
            tab_content = [this.plus_min]
        }
        ki_tab = new $KI.$("div", "ki_tab").adopt(tab_content);
        if (typeof(this.ki_tab_cta_link) != "undefined") {
            ki_tab.addClass("w_cta")
        }
        this.container.adopt([ki_tab, this.main_div.adopt([this.form, this.thanks.hide()])]);
        document.body.appendChild(this.container)
    }, cache_sizes: function () {
        this.container.height = this.container.getHeight();
        this.main_div.height = this.main_div.getHeight()
    }, render_thanks: function (render_thanks) {
        if (render_thanks == null) {
            render_thanks = {}
        }
        var option = render_thanks.message;
        if (option !== "__DEFAULT__") {
            var message = option
        } else {
            var message = this.main.locale.__("thanks", this.main.option("default_thanks_msg"))
        }
        if ((typeof(render_thanks.show_checkmark) == "undefined") || (render_thanks.show_checkmark == true)) {
            this.thanks.adopt([new $KI.$("div", "ki_check")])
        }
        this.thanks.adopt([new $KI.$("h1").addClass("ki_h1 sIFR-ignore").appendText(message)]);
        if (render_thanks.cta) {
            this.long_close = true;
            var cta_link_a = null;
            cta_link_a = new $KI.$("a", null, {href: "#"}).addClass("ki_button ki_cta");
            cta_link_a.attach("click", function (e) {
                e.preventDefault();
                this.main.cta_clicked(render_thanks)
            }, this);
            this.thanks.adopt([new $KI.$("hr"), new $KI.$("div").addClass("ki_section").adopt(new $KI.$("p").adopt(cta_link_a.appendText(render_thanks.cta.text).adopt(new $KI.$("span").addClass("ki_circle").adopt(new $KI.$("span").addClass("ki_arrow")))))])
        }
        if (render_thanks.twitter) {
            this.long_close = true;
            if ("follow" == render_thanks.twitter.type) {
                this.thanks.adopt([new $KI.$("hr"), new $KI.$("div").addClass("ki_section").adopt(new $KI.$("p").adopt(new $KI.$("a", null, {href: "http://twitter.com/" + render_thanks.twitter.handle, target: "_new"}).addClass("ki_twtr_button ki_button").adopt(new $KI.$("span").addClass("ki_twtr_icon")).appendText(this.main.locale.__("twitter", "Follow") + " @" + render_thanks.twitter.handle)))])
            }
        }
        if (render_thanks.facebook) {
            this.long_close = true;
            var u = ((render_thanks.facebook.type == "auto") ? KI.location.get("clean") : render_thanks.facebook.url);
            this.fb_like = new $KI.$("iframe", "ki_fb_frame", {src: "http://www.facebook.com/plugins/like.php?href=" + u + "&layout=standard&show_faces=false&width=250&action=like&colorscheme=dark", scrolling: "no", allowTransparency: true, frameBorder: "0"}).addStyle({width: "233px", height: "60px", border: "none"}).hide().attach("load", function (e) {
                e.target.show();
                e.target.parent().addClass("loaded")
            });
            this.thanks.adopt([new $KI.$("hr"), new $KI.$("div").addClass("ki_section").adopt(new $KI.$("h1").addClass("ki_h1 sIFR-ignore").appendText(this.main.locale.__("facebook", "Support us on Facebook!"))).adopt(new $KI.$("div", "ki_fb_container").adopt(this.fb_like))])
        }
        if (!this.long_close) {
            this.thanks.addClass("ki_thanks_only")
        }
    }, show: function () {
        var b = 0, bo = this.main.option("bottom");
        if ($KI.type(bo, "number")) {
            b = bo
        }
        if (this.main.option("abrupt")) {
            this.container.addStyle("bottom", b)
        } else {
            this.container.addStyle("bottom", -this.container.height);
            $KI.fx(this.container).fxAdd({type: "bottom", from: -this.container.height, to: b, step: 30, delay: 1}).fxRun()
        }
        KI.event.fire("show")
    }, show_thanks: function (thanks_conf) {
        this.render_thanks(thanks_conf);
        if (this.main.option("abrupt")) {
            this.form.hide();
            this.thanks.addStyle({position: "relative", visibility: "visible", display: "block"})
        } else {
            this.thanks.addStyle({position: "absolute", visibility: "hidden"}).show();
            this.thanks.height = this.thanks.getHeight();
            $KI.fx(this.main_div).fxAdd({type: "height", from: this.main_div.height, to: this.thanks.height, step: ((this.main_div.height > this.thanks.height) ? -10 : 10), delay: 1}).fxRun(null, null, $KI.bind(this.cache_sizes, this));
            $KI.fx(this.form).fxAdd({type: "opacity", from: 100, to: 0, step: -10, delay: 1}).fxRun(null, null, $KI.bind(function () {
                this.form.hide();
                this.thanks.addStyle({position: "relative", visibility: "visible"})
            }, this))
        }
        if (!this.main.option("disable_autoclose")) {
            var close = thanks_conf.close;
            if (close) {
                setTimeout($KI.bind(this.close, this), ((this.long_close) ? close[1] : close[0]))
            }
        }
        KI.event.fire("show")
    }, show_question_screen: function (question_screen) {
        setTimeout($KI.bind(function () {
            for (var j = 0; j < this.main.questions.length; j++) {
                this.main.questions[j].container.hide()
            }
            for (var j = 0; j < question_screen.questions.length; j++) {
                var q = this.main.find_question(question_screen.questions[j]);
                q.container.show()
            }
            this.submit_button.show();
            KI.event.fire("show")
        }, this), 1)
    }, show_question: function (question) {
        setTimeout($KI.bind(function () {
            for (var j = 0; j < this.main.questions.length; j++) {
                if (question.id == this.main.questions[j].id) {
                    this.main.questions[j].container.show()
                } else {
                    this.main.questions[j].container.hide()
                }
            }
            if ((question.supports_submit_on_select()) && this.submit_on_select == true) {
                this.submit_button.hide()
            } else {
                this.submit_button.show()
            }
            KI.event.fire("show")
        }, this), 1)
    }, close: function () {
        $KI.fx(this.container).fxAdd({type: "bottom", from: 0, to: -this.container.height, step: -30, delay: 1}).fxRun(null, null, $KI.bind(function () {
            this.container.remove();
            KI.event.fire("close")
        }, this));
        KI.metrics.record("Closed nudge", {"Nudge Name": this.main.name})
    }, detect_toolbars: function () {
        var o = 0;
        try {
            if (wibiyaToolbar) {
                o = 25
            }
        } catch (e) {
        }
        if (o > 0) {
            this.main.options.bottom = o
        }
    }, toggle: function (e) {
        e.preventDefault();
        if (this.main.option("prevent_collapse")) {
            return false
        }
        if (this.main.option("tab_closes")) {
            this.main.__("minimized", 1);
            this.close();
            return
        }
        if (this.main.__("minimized")) {
            this.maximize()
        } else {
            this.minimize()
        }
    }, minimize: function (abrupt) {
        this.container.addClass("ki_minimized");
        this.main.__("minimized", 1);
        if (abrupt === true) {
            this.main_div.addStyle("height", 0)
        } else {
            $KI.fx(this.main_div).fxAdd({type: "height", from: this.main_div.height, to: 0, step: -30, delay: 1}).fxRun(null, null, $KI.bind(function () {
                this.questions_container.cloak()
            }, this))
        }
        KI.metrics.record("Minimized nudge", {"Nudge Name": this.main.name})
    }, maximize: function (abrupt) {
        this.container.removeClass("ki_minimized");
        this.main.__("minimized", 0);
        this.questions_container.uncloak();
        if (abrupt === true) {
            this.main_div.addStyle("height", "auto")
        } else {
            $KI.fx(this.main_div).fxAdd({type: "height", from: 0, to: this.main_div.height, step: 30, delay: 1}).fxRun(null, null, $KI.bind(function () {
                this.main_div.addStyle("height", "auto")
            }, this))
        }
        KI.metrics.record("Maximized nudge", {"Nudge Name": this.main.name})
    }, selection_callback: function () {
        if (true == this.submit_on_select) {
            if ("question" == this.main.current.node_type) {
                if (this.main.current.node.supports_submit_on_select()) {
                    this.main.submit()
                }
            }
        }
    }});
    $KI.bundle("Question", {container: null, explains: {}, init: function (args) {
        var o = args[0];
        this.index = args[1];
        this.id = o.id;
        this.type = o.type;
        this.title = o.title;
        this.answers = o.answers;
        this.data = o;
        this.next = o.next;
        this.canonical_name = o.canonical_name;
        return this
    }, render: function () {
        this.container = new $KI.$("div", "ki_question_" + this.id).addClass("ki_question").adopt(new $KI.$("h1").appendText(this.title).addClass("ki_h1 sIFR-ignore"));
        if (this.data.description) {
            var d = new $KI.$("p").addClass("ki_description");
            d.innerHTML = this.data.description;
            if (this.data.description_placement == "before") {
                d.addClass("ki_before");
                this.container.prepend(new $KI.$("hr"));
                this.container.prepend(d)
            } else {
                this.container.adopt(d)
            }
        }
        if (this.index == 0) {
            this.container.addClass("ki_top")
        }
        switch (this.type.toLowerCase()) {
            case"radio":
            case"checkbox":
                var answers_element = new $KI.$("ul", "ki_question_" + this.id + "_answers").addClass("ki_answers");
                var randomize = KI.survey.option("randomize");
                if ($KI.type(this.answers, "array")) {
                    if (randomize && (true == randomize)) {
                        this.answers = $KI.shuffle(this.answers)
                    }
                    for (var i = 0; i < this.answers.length; i++) {
                        answers_element.adopt(this.render_answer(this.answers[i], i))
                    }
                }
                this.container.adopt(answers_element);
                break;
            case"text":
                this.freeform = true;
                var answer = new $KI.$("div", "ki_question_" + this.id + "_answer").addClass("ki_text").adopt(new $KI.$("textarea", null, {name: "r[" + this.id + "][text]"}));
                this.container.adopt(answer);
                break;
            case"text-single":
                this.freeform = true;
                var answer = new $KI.$("div", "ki_question_" + this.id + "_answer").addClass("ki_text_single").adopt(new $KI.$("input", null, {type: "text", name: "r[" + this.id + "][text]"}));
                this.container.adopt(answer);
                break;
            case"nps":
                var nps = new $KI.NPS(this.id, this.answers);
                this.container.adopt(nps.render());
                break;
            case"date":
                var datepicker = new $KI.Datepicker(this.id);
                this.container.adopt(datepicker.render());
                break
        }
        return this.container
    }, render_answer: function (answer, index) {
        var li = new $KI.$("li", "ki_answer_" + answer.id).addClass("ki_answer_li");
        if (index % 2) {
            li.addClass("ki_h")
        }
        var label = new $KI.$("label");
        var input = new $KI.$('<input type="' + this.type + '" name="r[' + this.id + '][]" value="' + answer.id + '" class="ki_' + this.type + '" />').attach("click", function (e) {
            this.toggle_explains(e);
            KI.event.fire("selection")
        }, this);
        li.adopt(label.adopt(input).appendText(" " + answer.title));
        if (this.type == "checkbox") {
            this.freeform = true
        }
        if (answer.show_explain) {
            var e = answer.show_explain;
            this.explains[answer.id] = new $KI.$(((e == "small") ? "input" : "textarea"), null, {name: "re[" + this.id + "][" + answer.id + "]"}).addClass("ki_explain_" + e).hide();
            label.adopt(this.explains[answer.id])
        }
        return li
    }, toggle_explains: function (e) {
        var answer_id = e.target.parent(2).id.replace("ki_answer_", "");
        var checked = e.target.parent().getElementsByTagName("input")[0].checked;
        if (this.explains[answer_id]) {
            this.explains[answer_id].show().focus()
        }
        for (var id in this.explains) {
            if (answer_id != id && this.explains[id] && this.explains[id].parentNode && this.explains[id].parent().getElementsByTagName("input")[0].checked != true) {
                this.explains[id].hide()
            } else {
                if (answer_id == id && checked == false) {
                    this.explains[id].hide()
                }
            }
        }
        KI.survey.view.cache_sizes()
    }, chosen_answer_id: function (form) {
        switch (this.type.toLowerCase()) {
            case"radio":
                for (var i = 0; i < form.elements.length; i++) {
                    var element = form.elements[i];
                    if (element.checked && (element.name == "r[" + this.id + "][]")) {
                        return element.value
                    }
                }
                break;
            case"nps":
                return form.elements[0].value;
                break
        }
    }, read_answer: function (form) {
        switch (this.type.toLowerCase()) {
            case"radio":
                for (var i = 0; i < form.elements.length; i++) {
                    var element = form.elements[i];
                    if (element.checked && (element.name == "r[" + this.id + "][]")) {
                        for (var j = 0; j < this.answers.length; j++) {
                            var answer = this.answers[j];
                            if (answer.id == element.value) {
                                ret = {value: answer.title};
                                if ((typeof(answer.canonical_name) != "undefined") && (answer.canonical_name != null)) {
                                    ret.canonical_name = answer.canonical_name
                                }
                                return ret
                            }
                        }
                    }
                }
                break;
            case"checkbox":
                var checked_answer_ids = [];
                for (var i = 0; i < form.elements.length; i++) {
                    var element = form.elements[i];
                    if (element.checked && (element.name == "r[" + this.id + "][]")) {
                        checked_answer_ids.push(element.value)
                    }
                }
                var checked_answer_canonical_names = [];
                for (var i = 0; i < this.answers.length; i++) {
                    var answer = this.answers[i];
                    if ($KI.contains(checked_answer_ids, answer.id)) {
                        if ((typeof(answer.canonical_name) != "undefined") && (answer.canonical_name != null)) {
                            checked_answer_canonical_names.push(answer.canonical_name)
                        }
                    }
                }
                return checked_answer_canonical_names;
                break;
            case"nps":
                return form.elements[0].value;
                break;
            case"text":
            case"text-single":
            case"date":
                for (var i = 0; i < form.elements.length; i++) {
                    var element = form.elements[i];
                    if (element.name == "r[" + this.id + "][text]") {
                        return{value: element.value}
                    }
                }
                break
        }
    }, get_next_conf: function (form) {
        switch (this.type.toLowerCase()) {
            case"radio":
            case"nps":
                var chosen_answer_id = this.chosen_answer_id(form);
                for (var i = 0; i < this.answers.length; i++) {
                    var answer = this.answers[i];
                    if (chosen_answer_id == answer.id) {
                        if (answer.next) {
                            return answer.next
                        }
                    }
                }
                if (this.next) {
                    return this.next
                }
                break;
            case"checkbox":
            case"text":
            case"text-single":
            case"date":
                if (this.next) {
                    return this.next
                }
                break
        }
        return null
    }, supports_submit_on_select: function () {
        var ret = false;
        switch (this.type.toLowerCase()) {
            case"radio":
            case"nps":
                ret = !($KI.size(this.explains) > 0);
                break
        }
        return ret
    }});
    $KI.bundle("NPS", {init: function (args) {
        this.id = args[0];
        this.answers = {};
        this.choices = [];
        this.answers = this.map_answers(args[1]);
        this.container = new $KI.$("ul", "ki_nps_" + this.id).addClass("ki_nps");
        this.value_house = new $KI.$("input", null, {type: "hidden", name: "r[" + this.id + "][]"});
        return this
    }, map_answers: function (a) {
        var map = {};
        if ($KI.type(a, "array")) {
            for (var i = 0; i < a.length; i++) {
                var b = a[i];
                map[b.title] = b.id
            }
        }
        return map
    }, value: function (set) {
        if (set || set === null) {
            this.value_house.value = set
        } else {
            return this.value_house.value
        }
    }, reset: function () {
        for (i = 0; i < this.choices.length; i++) {
            this.choices[i].removeClass("active")
        }
    }, render: function () {
        for (i = 0; i <= 10; i++) {
            var li = new $KI.$("li").addClass("nps_" + i);
            li.set("answer_id", this.answers[i]);
            li.adopt(new $KI.$("a", null, {href: "#"}).appendText(i + "").attach("click", function (e) {
                e.preventDefault();
                var parent = e.target.parent();
                if (parent.hasClass("active")) {
                    parent.removeClass("active");
                    this.value(null)
                } else {
                    var id = parseInt(parent.get("answer_id"));
                    this.reset();
                    parent.addClass("active");
                    this.value(id)
                }
                KI.event.fire("selection")
            }, this));
            var not_likely_label = KI.survey.options.not_likely || KI.survey.locale.__("not_likely", "Not likely");
            var likely_label = KI.survey.options.likely || KI.survey.locale.__("likely", "Most Likely");
            if (i == 0) {
                li.adopt(new $KI.$("span").addClass("ki_not_likely").appendText(not_likely_label))
            }
            if (i == 10) {
                li.adopt(new $KI.$("span").addClass("ki_most_likely").appendText(likely_label))
            }
            this.choices.push(li)
        }
        return[this.value_house, this.container.adopt(this.choices)]
    }});
    $KI.bundle("Datepicker", {init: function (args) {
        this.id = args[0];
        this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.from_year = 2010;
        this.to_year = 2020;
        this.container = new $KI.$("div", "ki_dp_" + this.id).addClass("ki_datepicker");
        this.value_house = new $KI.$("input", null, {type: "hidden", name: "r[" + this.id + "][text]"});
        return this
    }, value: function () {
        return this.value_house.value
    }, construct_value: function () {
        if ((-1 == document.getElementById("ki_dp_m_" + this.id).value) || (-1 == document.getElementById("ki_dp_d_" + this.id).value) || (-1 == document.getElementById("ki_dp_y_" + this.id).value)) {
            this.value_house.value = ""
        } else {
            this.value_house.value = document.getElementById("ki_dp_m_" + this.id).value + "/" + document.getElementById("ki_dp_d_" + this.id).value + "/" + document.getElementById("ki_dp_y_" + this.id).value
        }
    }, render: function () {
        var m = new $KI.$("select", "ki_dp_m_" + this.id).addClass("datepicker_m");
        m.adopt(new $KI.$("option", null, {value: "-1"}).appendText("Month"));
        for (i = 0; i < this.months.length; i++) {
            var v = (i + 1).toString();
            if (i < 9) {
                v = "0" + v
            }
            m.adopt(new $KI.$("option", null, {value: v}).appendText(this.months[i]))
        }
        m.attach("change", function (e) {
            e.preventDefault();
            this.construct_value()
        }, this);
        var d = new $KI.$("select", "ki_dp_d_" + this.id).addClass("datepicker_d");
        d.adopt(new $KI.$("option", null, {value: "-1"}).appendText("Day"));
        for (i = 1; i <= 31; i++) {
            var v = i.toString();
            if (i < 10) {
                v = "0" + v
            }
            d.adopt(new $KI.$("option", null, {value: v}).appendText(v))
        }
        d.attach("change", function (e) {
            e.preventDefault();
            this.construct_value()
        }, this);
        var y = new $KI.$("select", "ki_dp_y_" + this.id).addClass("datepicker_y");
        y.adopt(new $KI.$("option", null, {value: "-1"}).appendText("Year"));
        for (i = this.from_year; i <= this.to_year; i++) {
            y.adopt(new $KI.$("option", null, {value: i.toString()}).appendText(i.toString()))
        }
        y.attach("change", function (e) {
            e.preventDefault();
            this.construct_value()
        }, this);
        return[this.value_house, this.container.adopt([m, d, y])]
    }});
    $KI.bundle("Base", {customer: {}, queue: {surveys: {ids: [], list: []}, overlays: {ids: [], list: []}}, survey: null, overlay: null, props: {}, caps: null, runtimeOptions: {}, init: function (args) {
        this.event = new $KI.Event();
        this.location = new $KI.Location();
        this.visitor = new $KI.Visitor();
        this.locale = new $KI.Locale();
        this.metrics = new $KI.Metrics();
        this.set_customer(args[0], args[1]);
        if (this.caps) {
            this.d_frq_counter = new $KI.FrequencyCounter({name: "d", num_buckets: 24, num_min_in_bucket: 60});
            this.w_frq_counter = new $KI.FrequencyCounter({name: "w", num_buckets: 7, num_min_in_bucket: 1440});
            this.event.add("show", this.d_frq_counter.record, this.d_frq_counter);
            this.event.add("show", this.w_frq_counter.record, this.w_frq_counter);
            this.session_c = new $KI.Cookie("sess");
            this.session_c.options.is_session = true;
            this.event.add("show", this.record_view_in_session, this)
        }
        return this
    }, set_customer: function (hash, site_id) {
        if (site_id) {
            this.site_id = site_id
        }
        if (hash) {
            try {
                var c = eval("[" + $KI.hex(hash) + "]")
            } catch (e) {
            }
            if ($KI.type(c, "array")) {
                this.customer = {id: c[0], v: $KI.sha1([hash, c[0], this.site_id].join("")), referral: c[1], premium: c[2] || 0, signup: c[3] || 0, edge: c[4] || 0, show_powered: c[5] || 0}
            }
        }
    }, add: function (type, match, data) {
        if (arguments.length == 2) {
            return this.add("survey", type, match)
        }
        var t = type + "s";
        this.queue[t].ids[data.id] = this.queue[t].list.length;
        this.queue[t].list.push($KI.merge({match: match}, data))
    }, run: function () {
        if (!this.under_caps()) {
            return
        }
        if (this.customer.signup && !this.skip_signup) {
            this.signup = new $KI.Signup(this);
            this.signup.verify_and_show(function () {
                this.skip_signup = true;
                this.run()
            }, this);
            return
        }
        if (!this.ran) {
            this.mine();
            this.ran = true
        }
    }, mine: function (type) {
        if (!type) {
            this.mine("surveys");
            this.mine("overlays");
            return
        }
        var list = this.queue[type].list;
        for (var i in list) {
            if (!list.hasOwnProperty(i)) {
                continue
            }
            var item = list[i];
            if (item.match == false || this.location.matches(item.match)) {
                switch (type) {
                    case"surveys":
                        if (this.show_survey(item)) {
                            break
                        }
                        break;
                    case"overlays":
                        this.overlay = new $KI.Overlay(item);
                        break
                }
            }
        }
    }, under_caps: function () {
        if (this.caps) {
            var s_cap = this.caps.session;
            if (s_cap > 0) {
                var s_count = $KI.toInt(this.session_c.get());
                if (!isNaN(s_count) && s_count >= s_cap) {
                    return false
                }
            }
            var d_cap = this.caps.day;
            if (d_cap > 0) {
                if (this.d_frq_counter.count() >= d_cap) {
                    return false
                }
            }
            var w_cap = this.caps.week;
            if (w_cap > 0) {
                if (this.w_frq_counter.count() >= w_cap) {
                    return false
                }
            }
        }
        return true
    }, record_view_in_session: function () {
        var str = this.session_c.get();
        var count = $KI.toInt(str);
        if (isNaN(count)) {
            count = 0
        }
        count++;
        this.session_c.set(count)
    }, show_survey: function (object, ignore_rules) {
        if (this.survey) {
            return
        }
        this.survey = new $KI.Survey(object);
        if (this.survey.can_show() || ignore_rules == true) {
            this.survey.setOptions(this.runtimeOptions);
            var d = this.survey.require("duration");
            setTimeout($KI.bind(this.survey.show, this.survey), ((d) ? d * 1000 : 300));
            return true
        } else {
            this.survey = null;
            return false
        }
    }, get_by_id: function (type, id) {
        return this.queue[type].list[this.queue[type].ids[id]]
    }, show_by_id: function (type, id, ignore_rules) {
        var t = type + "s", s = this.get_by_id(t, id);
        if (s) {
            switch (t) {
                case"surveys":
                    this.show_survey(s, ignore_rules);
                    break
            }
        }
    }, hide_survey: function () {
        if (this.survey && this.survey.view) {
            this.survey.view.close();
            this.survey = null
        }
    }, API: {options: function (o) {
        this.runtimeOptions = o
    }, disableAuto: function () {
        this.ran = true
    }, identify: function (name) {
        this.visitor.identity(name)
    }, identity: function (name) {
        this.visitor.identity(name)
    }, showSurvey: function (id, ignore_rules) {
        this.hide_survey();
        this.show_by_id("survey", id, ignore_rules)
    }, hideSurvey: function () {
        this.hide_survey()
    }, minimizeSurvey: function () {
        if (this.survey && this.survey.view && this.survey.view.minimize) {
            this.survey.view.minimize()
        }
    }, maximizeSurvey: function () {
        if (this.survey && this.survey.view && this.survey.view.maximize) {
            this.survey.view.maximize()
        }
    }, addSurvey: function (match, data) {
        this.add("survey", match, data)
    }, eventHandler: function (name, callback) {
        this.event.add(name, callback, this)
    }, set: function (p) {
        this.props = $KI.merge(this.props, p);
        if (this.survey == null) {
            this.ran = false
        }
        this.run()
    }}});
    $KI.bundle("Locale_item", {init: function (args) {
        this.dict = args[0] || {};
        this.rtl = args[1] || false;
        return this
    }, __: function (select, the_default) {
        var s = $KI.select(this.dict, select);
        if (s) {
            return s
        } else {
            return the_default
        }
    }});
    $KI.bundle("Locale", {langs: {}, init: function () {
        return this
    }, add: function (l, dict, rtl) {
        this.langs[l] = new $KI.Locale_item(dict, rtl)
    }, use: function (l) {
        return this.langs[l] || new $KI.Locale_item()
    }});
    $KI.Queue = function (q) {
        if (q && q.length) {
            for (var i = 0; i < q.length; i++) {
                this.push(q[i])
            }
        }
    };
    $KI.Queue.prototype.push = function (o) {
        if ($KI.type(o, "array") && o.length) {
            var f = o.splice(0, 1);
            if (KI.API[f]) {
                KI.API[f].apply(KI, o)
            }
        } else {
            if ($KI.type(o, "function")) {
                o()
            }
        }
    };
    $KI.bundle("FrequencyCounter", {init: function (args) {
        var o = args[0];
        this.name = o.name;
        this.num_buckets = o.num_buckets;
        this.num_min_in_bucket = o.num_min_in_bucket;
        this.c = new $KI.Cookie("frq_" + this.name);
        return this
    }, record: function () {
        var updated_at = new Date();
        var new_obj = {updated_at: updated_at.getTime(), buckets: new Array(this.num_buckets)};
        for (var j = 0; j < new_obj.buckets.length; j++) {
            new_obj.buckets[j] = 0
        }
        var obj = this._read();
        if (obj) {
            var cur_bucket_idx = this._current_bucket_idx(obj);
            if (cur_bucket_idx < this.num_buckets) {
                for (var i = cur_bucket_idx; i < new_obj.buckets.length; i++) {
                    new_obj.buckets[i] = obj.buckets[i]
                }
            }
        }
        new_obj.buckets[0] += 1;
        this._write(new_obj)
    }, count: function () {
        var res = 0;
        var obj = this._read();
        if (obj) {
            var cur_bucket_idx = this._current_bucket_idx(obj);
            if (cur_bucket_idx < this.num_buckets) {
                for (var i = cur_bucket_idx; i < obj.buckets.length; i++) {
                    res += obj.buckets[i]
                }
            }
        }
        return res
    }, _current_bucket_idx: function (obj) {
        var diff_buckets = null;
        if (obj) {
            var cur_time = new Date();
            var diff_min = $KI.toInt((cur_time.getTime() - obj.updated_at) / 60000);
            diff_buckets = Math.floor(diff_min / this.num_min_in_bucket)
        }
        return diff_buckets
    }, _read: function () {
        var s = this.c.get();
        var obj = this._decode(s);
        return obj
    }, _write: function (obj) {
        this.c.set(this._encode(obj))
    }, _encode: function (object) {
        var str = [];
        str[0] = object.updated_at;
        str[1] = object.buckets.join(".");
        return str.join(";")
    }, _decode: function (string) {
        var obj = {};
        if (string) {
            var split = string.split(";");
            if (split.length == 2) {
                var updated_at = $KI.toInt(split[0]);
                if (updated_at) {
                    obj.updated_at = updated_at
                }
                var buckets = split[1].split(".");
                if (buckets.length == this.num_buckets) {
                    var buckets_valid = true;
                    for (var i = 0; i < buckets.length; i++) {
                        buckets[i] = $KI.toInt(buckets[i]);
                        if (isNaN(buckets[i])) {
                            buckets_valid = false
                        }
                    }
                    if (buckets_valid) {
                        obj.buckets = buckets
                    }
                }
            }
        }
        if (obj.updated_at && obj.buckets) {
            return obj
        } else {
            return null
        }
    }});


    var KI = new $KI.Base('33343433362c276e756c6c272c312c302c302c30', 27311);


    _kiq = new $KI.Queue(_kiq);
    $KI.ready(KI.run, KI);
}
