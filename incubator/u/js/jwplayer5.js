if (typeof jwplayer5 == "undefined") {
    var jwplayer5 = function (e) {
        if (jwplayer5.api)return jwplayer5.api.selectPlayer(e)
    }, $jw = jwplayer5;
    jwplayer5.version = "5.10.2295 (Licensed version)", jwplayer5.vid = document.createElement("video"), jwplayer5.audio = document.createElement("audio"), jwplayer5.source = document.createElement("source"), function (e) {
        function t(t) {
            if (!e.utils.exists(t))return;
            var n = t.indexOf("://"), r = t.indexOf("?");
            return n > 0 && (r < 0 || r > n)
        }

        e.utils = function () {
        }, e.utils.typeOf = function (e) {
            var t = typeof e;
            return t === "object" && (e ? e instanceof Array && (t = "array") : t = "null"), t
        }, e.utils.extend = function () {
            var t = e.utils.extend.arguments;
            if (t.length > 1) {
                for (var n = 1; n < t.length; n++)for (var r in t[n])t[0][r] = t[n][r];
                return t[0]
            }
            return null
        }, e.utils.clone = function (t) {
            var n, r = e.utils.clone.arguments;
            if (r.length == 1)switch (e.utils.typeOf(r[0])) {
                case"object":
                    n = {};
                    for (var i in r[0])n[i] = e.utils.clone(r[0][i]);
                    break;
                case"array":
                    n = [];
                    for (var i in r[0])n[i] = e.utils.clone(r[0][i]);
                    break;
                default:
                    return r[0]
            }
            return n
        }, e.utils.extension = function (e) {
            if (!e)return"";
            e = e.substring(e.lastIndexOf("/") + 1, e.length), e = e.split("?")[0];
            if (e.lastIndexOf(".") > -1)return e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase();
            return
        }, e.utils.html = function (e, t) {
            e.innerHTML = t
        }, e.utils.wrap = function (e, t) {
            e.parentNode && e.parentNode.replaceChild(t, e), t.appendChild(e)
        }, e.utils.ajax = function (t, n, r) {
            var i;
            window.XMLHttpRequest ? i = new XMLHttpRequest : i = new ActiveXObject("Microsoft.XMLHTTP"), i.onreadystatechange = function () {
                if (i.readyState === 4)if (i.status === 200) {
                    if (n) {
                        if (!e.utils.exists(i.responseXML))try {
                            if (window.DOMParser) {
                                var s = (new DOMParser).parseFromString(i.responseText, "text/xml");
                                s && (i = e.utils.extend({}, i, {responseXML: s}))
                            } else s = new ActiveXObject("Microsoft.XMLDOM"), s.async = "false", s.loadXML(i.responseText), i = e.utils.extend({}, i, {responseXML: s})
                        } catch (o) {
                            r && r(t)
                        }
                        n(i)
                    }
                } else r && r(t)
            };
            try {
                i.open("GET", t, !0), i.send(null)
            } catch (s) {
                r && r(t)
            }
            return i
        }, e.utils.load = function (e, t, n) {
            e.onreadystatechange = function () {
                e.readyState === 4 && (e.status === 200 ? t && t() : n && n())
            }
        }, e.utils.find = function (e, t) {
            return e.getElementsByTagName(t)
        }, e.utils.append = function (e, t) {
            e.appendChild(t)
        }, e.utils.isIE = function () {
            return typeof window.ActiveXObject != "undefined"
        }, e.utils.userAgentMatch = function (e) {
            var t = navigator.userAgent.toLowerCase();
            return t.match(e) !== null
        }, e.utils.isIOS = function () {
            return e.utils.userAgentMatch(/iP(hone|ad|od)/i)
        }, e.utils.isIPad = function () {
            return e.utils.userAgentMatch(/iPad/i)
        }, e.utils.isIPod = function () {
            return e.utils.userAgentMatch(/iP(hone|od)/i)
        }, e.utils.isAndroid = function () {
            return e.utils.userAgentMatch(/android/i)
        }, e.utils.isLegacyAndroid = function () {
            return e.utils.userAgentMatch(/android 2.[012]/i)
        }, e.utils.isBlackberry = function () {
            return e.utils.userAgentMatch(/blackberry/i)
        }, e.utils.isMobile = function () {
            return e.utils.userAgentMatch(/(iP(hone|ad|od))|android/i)
        }, e.utils.getFirstPlaylistItemFromConfig = function (e) {
            var t = {}, n;
            return e.playlist && e.playlist.length ? n = e.playlist[0] : n = e, t.file = n.file, t.levels = n.levels, t.streamer = n.streamer, t.playlistfile = n.playlistfile, t.provider = n.provider, t.provider || (t.file && (t.file.toLowerCase().indexOf("youtube.com") > -1 || t.file.toLowerCase().indexOf("youtu.be") > -1) && (t.provider = "youtube"), t.streamer && t.streamer.toLowerCase().indexOf("rtmp://") == 0 && (t.provider = "rtmp"), n.type && (t.provider = n.type.toLowerCase())), t.provider == "audio" && (t.provider = "sound"), t
        }, e.utils.getOuterHTML = function (e) {
            if (e.outerHTML)return e.outerHTML;
            try {
                return(new XMLSerializer).serializeToString(e)
            } catch (t) {
                return""
            }
        }, e.utils.setOuterHTML = function (e, t) {
            if (e.outerHTML)e.outerHTML = t; else {
                var n = document.createElement("div");
                n.innerHTML = t;
                var r = document.createRange();
                r.selectNodeContents(n);
                var i = r.extractContents();
                e.parentNode.insertBefore(i, e), e.parentNode.removeChild(e)
            }
        }, e.utils.hasFlash = function () {
            if (typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] != "undefined")return!0;
            if (typeof window.ActiveXObject != "undefined")try {
                return new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), !0
            } catch (e) {
            }
            return!1
        }, e.utils.getPluginName = function (e) {
            return e.lastIndexOf("/") >= 0 && (e = e.substring(e.lastIndexOf("/") + 1, e.length)), e.lastIndexOf("-") >= 0 && (e = e.substring(0, e.lastIndexOf("-"))), e.lastIndexOf(".swf") >= 0 && (e = e.substring(0, e.lastIndexOf(".swf"))), e.lastIndexOf(".js") >= 0 && (e = e.substring(0, e.lastIndexOf(".js"))), e
        }, e.utils.getPluginVersion = function (e) {
            return e.lastIndexOf("-") >= 0 ? e.lastIndexOf(".js") >= 0 ? e.substring(e.lastIndexOf("-") + 1, e.lastIndexOf(".js")) : e.lastIndexOf(".swf") >= 0 ? e.substring(e.lastIndexOf("-") + 1, e.lastIndexOf(".swf")) : e.substring(e.lastIndexOf("-") + 1) : ""
        }, e.utils.getAbsolutePath = function (n, r) {
            e.utils.exists(r) || (r = document.location.href);
            if (!e.utils.exists(n))return undefined;
            if (t(n))return n;
            var i = r.substring(0, r.indexOf("://") + 3), s = r.substring(i.length, r.indexOf("/", i.length + 1)), o;
            if (n.indexOf("/") === 0)o = n.split("/"); else {
                var u = r.split("?")[0];
                u = u.substring(i.length + s.length + 1, u.lastIndexOf("/")), o = u.split("/").concat(n.split("/"))
            }
            var f = [];
            for (var l = 0; l < o.length; l++) {
                if (!o[l] || !e.utils.exists(o[l]) || o[l] == ".")continue;
                o[l] == ".." ? f.pop() : f.push(o[l])
            }
            return i + s + "/" + f.join("/")
        }, e.utils.pluginPathType = {ABSOLUTE: "ABSOLUTE", RELATIVE: "RELATIVE", CDN: "CDN"}, e.utils.getPluginPathType = function (t) {
            if (typeof t != "string")return;
            t = t.split("?")[0];
            var n = t.indexOf("://");
            if (n > 0)return e.utils.pluginPathType.ABSOLUTE;
            var r = t.indexOf("/"), i = e.utils.extension(t);
            return n < 0 && r < 0 && (!i || !isNaN(i)) ? e.utils.pluginPathType.CDN : e.utils.pluginPathType.RELATIVE
        }, e.utils.mapEmpty = function (e) {
            for (var t in e)return!1;
            return!0
        }, e.utils.mapLength = function (e) {
            var t = 0;
            for (var n in e)t++;
            return t
        }, e.utils.log = function (e, t) {
            typeof console != "undefined" && typeof console.log != "undefined" && (t ? console.log(e, t) : console.log(e))
        }, e.utils.css = function (t, n, r) {
            if (e.utils.exists(t))for (var i in n)try {
                if (typeof n[i] == "undefined")continue;
                if (typeof n[i] == "number" && i != "zIndex" && i != "opacity") {
                    if (isNaN(n[i]))continue;
                    i.match(/color/i) ? n[i] = "#" + e.utils.strings.pad(n[i].toString(16), 6) : n[i] = Math.ceil(n[i]) + "px"
                }
                t.style[i] = n[i]
            } catch (s) {
            }
        }, e.utils.isYouTube = function (e) {
            return e.indexOf("youtube.com") > -1 || e.indexOf("youtu.be") > -1
        }, e.utils.transform = function (t, n, r, i, s) {
            e.utils.exists(n) || (n = 1), e.utils.exists(r) || (r = 1), e.utils.exists(i) || (i = 0), e.utils.exists(s) || (s = 0);
            if (n == 1 && r == 1 && i == 0 && s == 0)t.style.webkitTransform = "", t.style.MozTransform = "", t.style.OTransform = ""; else {
                var o = "scale(" + n + "," + r + ") translate(" + i + "px," + s + "px)";
                t.style.webkitTransform = o, t.style.MozTransform = o, t.style.OTransform = o
            }
        }, e.utils.stretch = function (t, n, r, i, s, o) {
            if (typeof r == "undefined" || typeof i == "undefined" || typeof s == "undefined" || typeof o == "undefined")return;
            var u = r / s, a = i / o, f = 0, l = 0, c = !1, h = {};
            n.parentElement && (n.parentElement.style.overflow = "hidden"), e.utils.transform(n);
            switch (t.toUpperCase()) {
                case e.utils.stretching.NONE:
                    h.width = s, h.height = o, h.top = (i - h.height) / 2, h.left = (r - h.width) / 2;
                    break;
                case e.utils.stretching.UNIFORM:
                    u > a ? (h.width = s * a, h.height = o * a, h.width / r > .95 && (c = !0, u = Math.ceil(100 * r / h.width) / 100, a = 1, h.width = r)) : (h.width = s * u, h.height = o * u, h.height / i > .95 && (c = !0, u = 1, a = Math.ceil(100 * i / h.height) / 100, h.height = i)), h.top = (i - h.height) / 2, h.left = (r - h.width) / 2;
                    break;
                case e.utils.stretching.FILL:
                    u > a ? (h.width = s * u, h.height = o * u) : (h.width = s * a, h.height = o * a), h.top = (i - h.height) / 2, h.left = (r - h.width) / 2;
                    break;
                case e.utils.stretching.EXACTFIT:
                    h.width = s, h.height = o;
                    var p = Math.round(s / 2 * (1 - 1 / u)), d = Math.round(o / 2 * (1 - 1 / a));
                    c = !0, h.top = h.left = 0;
                    break;
                default:
            }
            c && e.utils.transform(n, u, a, p, d), e.utils.css(n, h)
        }, e.utils.stretching = {NONE: "NONE", FILL: "FILL", UNIFORM: "UNIFORM", EXACTFIT: "EXACTFIT"}, e.utils.deepReplaceKeyName = function (t, n, r) {
            switch (e.utils.typeOf(t)) {
                case"array":
                    for (var i = 0; i < t.length; i++)t[i] = e.utils.deepReplaceKeyName(t[i], n, r);
                    break;
                case"object":
                    for (var s in t) {
                        var o, u;
                        if (n instanceof Array && r instanceof Array) {
                            if (n.length != r.length)continue;
                            o = n, u = r
                        } else o = [n], u = [r];
                        var a = s;
                        for (var i = 0; i < o.length; i++)a = a.replace(new RegExp(n[i], "g"), r[i]);
                        t[a] = e.utils.deepReplaceKeyName(t[s], n, r), s != a && delete t[s]
                    }
            }
            return t
        }, e.utils.isInArray = function (e, t) {
            if (!!e && e instanceof Array) {
                for (var n = 0; n < e.length; n++)if (t === e[n])return!0;
                return!1
            }
            return!1
        }, e.utils.exists = function (e) {
            switch (typeof e) {
                case"string":
                    return e.length > 0;
                case"object":
                    return e !== null;
                case"undefined":
                    return!1
            }
            return!0
        }, e.utils.empty = function (e) {
            if (typeof e.hasChildNodes == "function")while (e.hasChildNodes())e.removeChild(e.firstChild)
        }, e.utils.parseDimension = function (e) {
            return typeof e == "string" ? e === "" ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
        }, e.utils.getDimensions = function (t) {
            return t && t.style ? {x: e.utils.parseDimension(t.style.left), y: e.utils.parseDimension(t.style.top), width: e.utils.parseDimension(t.style.width), height: e.utils.parseDimension(t.style.height)} : {}
        }, e.utils.getElementWidth = function (t) {
            return t ? t == document.body ? e.utils.parentNode(t).clientWidth : t.clientWidth > 0 ? t.clientWidth : t.style ? e.utils.parseDimension(t.style.width) : null : null
        }, e.utils.getElementHeight = function (t) {
            return t ? t == document.body ? e.utils.parentNode(t).clientHeight : t.clientHeight > 0 ? t.clientHeight : t.style ? e.utils.parseDimension(t.style.height) : null : null
        }, e.utils.timeFormat = function (e) {
            return str = "00:00", e > 0 && (str = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) + ":" : Math.floor(e / 60) + ":", str += Math.floor(e % 60) < 10 ? "0" + Math.floor(e % 60) : Math.floor(e % 60)), str
        }, e.utils.useNativeFullscreen = function () {
            return navigator && navigator.vendor && navigator.vendor.indexOf("Apple") == 0
        }, e.utils.parentNode = function (e) {
            return e ? e.parentNode ? e.parentNode : e.parentElement ? e.parentElement : e : document.body
        }, e.utils.getBoundingClientRect = function (e) {
            return typeof e.getBoundingClientRect == "function" ? e.getBoundingClientRect() : {left: e.offsetLeft + document.body.scrollLeft, top: e.offsetTop + document.body.scrollTop, width: e.offsetWidth, height: e.offsetHeight}
        }, e.utils.translateEventResponse = function (t, n) {
            var r = e.utils.extend({}, n);
            t == e.api.events.JWPLAYER_FULLSCREEN && !r.fullscreen ? (r.fullscreen = r.message == "true" ? !0 : !1, delete r.message) : typeof r.data == "object" ? (r = e.utils.extend(r, r.data), delete r.data) : typeof r.metadata == "object" && e.utils.deepReplaceKeyName(r.metadata, ["__dot__", "__spc__", "__dsh__"], [".", " ", "-"]);
            var i = ["position", "duration", "offset"];
            for (var s in i)r[i[s]] && (r[i[s]] = Math.round(r[i[s]] * 1e3) / 1e3);
            return r
        }, e.utils.saveCookie = function (e, t) {
            document.cookie = "jwplayer5." + e + "=" + t + "; path=/"
        }, e.utils.getCookies = function () {
            var e = {}, t = document.cookie.split("; ");
            for (var n = 0; n < t.length; n++) {
                var r = t[n].split("=");
                r[0].indexOf("jwplayer5.") == 0 && (e[r[0].substring(9, r[0].length)] = r[1])
            }
            return e
        }, e.utils.readCookie = function (t) {
            return e.utils.getCookies()[t]
        }
    }(jwplayer5), function (e) {
        e.events = function () {
        }, e.events.COMPLETE = "COMPLETE", e.events.ERROR = "ERROR"
    }(jwplayer5), function (jwplayer5) {
        jwplayer5.events.eventdispatcher = function (debug) {
            var _debug = debug, _listeners, _globallisteners;
            this.resetEventListeners = function () {
                _listeners = {}, _globallisteners = []
            }, this.resetEventListeners(), this.addEventListener = function (type, listener, count) {
                try {
                    jwplayer5.utils.exists(_listeners[type]) || (_listeners[type] = []), typeof listener == "string" && eval("listener = " + listener), _listeners[type].push({listener: listener, count: count})
                } catch (err) {
                    jwplayer5.utils.log("error", err)
                }
                return!1
            }, this.removeEventListener = function (e, t) {
                if (!_listeners[e])return;
                try {
                    for (var n = 0; n < _listeners[e].length; n++)if (_listeners[e][n].listener.toString() == t.toString()) {
                        _listeners[e].splice(n, 1);
                        break
                    }
                } catch (r) {
                    jwplayer5.utils.log("error", r)
                }
                return!1
            }, this.addGlobalListener = function (listener, count) {
                try {
                    typeof listener == "string" && eval("listener = " + listener), _globallisteners.push({listener: listener, count: count})
                } catch (err) {
                    jwplayer5.utils.log("error", err)
                }
                return!1
            }, this.removeGlobalListener = function (e) {
                if (!e)return;
                try {
                    for (var t = 0; t < _globallisteners.length; t++)if (_globallisteners[t].listener.toString() == e.toString()) {
                        _globallisteners.splice(t, 1);
                        break
                    }
                } catch (n) {
                    jwplayer5.utils.log("error", n)
                }
                return!1
            }, this.sendEvent = function (e, t) {
                jwplayer5.utils.exists(t) || (t = {}), _debug && jwplayer5.utils.log(e, t);
                if (typeof _listeners[e] != "undefined")for (var n = 0; n < _listeners[e].length; n++) {
                    try {
                        _listeners[e][n].listener(t)
                    } catch (r) {
                        jwplayer5.utils.log("There was an error while handling a listener: " + r.toString(), _listeners[e][n].listener)
                    }
                    _listeners[e][n] && (_listeners[e][n].count === 1 ? delete _listeners[e][n] : _listeners[e][n].count > 0 && (_listeners[e][n].count = _listeners[e][n].count - 1))
                }
                for (var i = 0; i < _globallisteners.length; i++) {
                    try {
                        _globallisteners[i].listener(t)
                    } catch (r) {
                        jwplayer5.utils.log("There was an error while handling a listener: " + r.toString(), _globallisteners[i].listener)
                    }
                    _globallisteners[i] && (_globallisteners[i].count === 1 ? delete _globallisteners[i] : _globallisteners[i].count > 0 && (_globallisteners[i].count = _globallisteners[i].count - 1))
                }
            }
        }
    }(jwplayer5), function (e) {
        var t = {};
        e.utils.animations = function () {
        }, e.utils.animations.transform = function (e, t) {
            e.style.webkitTransform = t, e.style.MozTransform = t, e.style.OTransform = t, e.style.msTransform = t
        }, e.utils.animations.transformOrigin = function (e, t) {
            e.style.webkitTransformOrigin = t, e.style.MozTransformOrigin = t, e.style.OTransformOrigin = t, e.style.msTransformOrigin = t
        }, e.utils.animations.rotate = function (t, n) {
            e.utils.animations.transform(t, ["rotate(", n, "deg)"].join(""))
        }, e.utils.cancelAnimation = function (e) {
            delete t[e.id]
        }, e.utils.fadeTo = function (n, r, i, s, o, u) {
            if (t[n.id] != u && e.utils.exists(u))return;
            if (n.style.opacity == r)return;
            var f = (new Date).getTime();
            u > f && setTimeout(function () {
                e.utils.fadeTo(n, r, i, s, 0, u)
            }, u - f), n.style.display == "none" && (n.style.display = "block"), e.utils.exists(s) || (s = n.style.opacity === "" ? 1 : n.style.opacity);
            if (n.style.opacity == r && n.style.opacity !== "" && e.utils.exists(u)) {
                r === 0 && (n.style.display = "none");
                return
            }
            e.utils.exists(u) || (u = f, t[n.id] = u), e.utils.exists(o) || (o = 0);
            var l = i > 0 ? (f - u) / (i * 1e3) : 0;
            l = l > 1 ? 1 : l;
            var c = r - s, h = s + l * c;
            h > 1 ? h = 1 : h < 0 && (h = 0), n.style.opacity = h;
            if (o > 0) {
                t[n.id] = u + o * 1e3, e.utils.fadeTo(n, r, i, s, 0, t[n.id]);
                return
            }
            setTimeout(function () {
                e.utils.fadeTo(n, r, i, s, 0, u)
            }, 10)
        }
    }(jwplayer5), function (e) {
        e.utils.arrays = function () {
        }, e.utils.arrays.indexOf = function (e, t) {
            for (var n = 0; n < e.length; n++)if (e[n] == t)return n;
            return-1
        }, e.utils.arrays.remove = function (t, n) {
            var r = e.utils.arrays.indexOf(t, n);
            r > -1 && t.splice(r, 1)
        }
    }(jwplayer5), function (e) {
        e.utils.extensionmap = {"3gp": {html5: "video/3gpp", flash: "video"}, "3gpp": {html5: "video/3gpp"}, "3g2": {html5: "video/3gpp2", flash: "video"}, "3gpp2": {html5: "video/3gpp2"}, flv: {flash: "video"}, f4a: {html5: "audio/mp4"}, f4b: {html5: "audio/mp4", flash: "video"}, f4v: {html5: "video/mp4", flash: "video"}, mov: {html5: "video/quicktime", flash: "video"}, m4a: {html5: "audio/mp4", flash: "video"}, m4b: {html5: "audio/mp4"}, m4p: {html5: "audio/mp4"}, m4v: {html5: "video/mp4", flash: "video"}, mp4: {html5: "video/mp4", flash: "video"}, rbs: {flash: "sound"}, aac: {html5: "audio/aac", flash: "video"}, mp3: {html5: "audio/mp3", flash: "sound"}, ogg: {html5: "audio/ogg"}, oga: {html5: "audio/ogg"}, ogv: {html5: "video/ogg"}, webm: {html5: "video/webm"}, m3u8: {html5: "audio/x-mpegurl"}, gif: {flash: "image"}, jpeg: {flash: "image"}, jpg: {flash: "image"}, swf: {flash: "image"}, png: {flash: "image"}, wav: {html5: "audio/x-wav"}}
    }(jwplayer5), function (e) {
        function r(n, r) {
            return e.utils.exists(r) ? e.utils.extend(r, t[n]) : r = t[n], r
        }

        function i(t, i) {
            if (n[t.tagName.toLowerCase()] && !e.utils.exists(i))return n[t.tagName.toLowerCase()](t);
            i = r("element", i);
            var s = {};
            for (var o in i)if (o != "length") {
                var u = t.getAttribute(o);
                e.utils.exists(u) && (s[i[o]] = u)
            }
            var a = t.style["#background-color"];
            return a && a != "transparent" && a != "rgba(0, 0, 0, 0)" && (s.screencolor = a), s
        }

        function s(t, n) {
            n = r("media", n);
            var s = [], u = e.utils.selectors("source", t);
            for (var f in u)isNaN(f) || s.push(o(u[f]));
            var l = i(t, n);
            return e.utils.exists(l.file) && (s[0] = {file: l.file}), l.levels = s, l
        }

        function o(e, t) {
            t = r("source", t);
            var n = i(e, t);
            return n.width = n.width ? n.width : 0, n.bitrate = n.bitrate ? n.bitrate : 0, n
        }

        function u(e, t) {
            t = r("video", t);
            var n = s(e, t);
            return n
        }

        e.utils.mediaparser = function () {
        };
        var t = {element: {width: "width", height: "height", id: "id", "class": "className", name: "name"}, media: {src: "file", preload: "preload", autoplay: "autostart", loop: "repeat", controls: "controls"}, source: {src: "file", type: "type", media: "media", "data-jw-width": "width", "data-jw-bitrate": "bitrate"}, video: {poster: "image"}}, n = {};
        e.utils.mediaparser.parseMedia = function (e) {
            return i(e)
        }, n.media = s, n.audio = s, n.source = o, n.video = u
    }(jwplayer5), function (e) {
        e.utils.loaderstatus = {NEW: "NEW", LOADING: "LOADING", ERROR: "ERROR", COMPLETE: "COMPLETE"}, e.utils.scriptloader = function (t) {
            var n = e.utils.loaderstatus.NEW, r = new e.events.eventdispatcher;
            e.utils.extend(this, r), this.load = function () {
                if (n == e.utils.loaderstatus.NEW) {
                    n = e.utils.loaderstatus.LOADING;
                    var i = document.createElement("script");
                    i.onload = function (t) {
                        n = e.utils.loaderstatus.COMPLETE, r.sendEvent(e.events.COMPLETE)
                    }, i.onerror = function (t) {
                        n = e.utils.loaderstatus.ERROR, r.sendEvent(e.events.ERROR)
                    }, i.onreadystatechange = function () {
                        if (i.readyState == "loaded" || i.readyState == "complete")n = e.utils.loaderstatus.COMPLETE, r.sendEvent(e.events.COMPLETE)
                    }, document.getElementsByTagName("head")[0].appendChild(i), i.src = t
                }
            }, this.getStatus = function () {
                return n
            }
        }
    }(jwplayer5), function (e) {
        e.utils.selectors = function (t, n) {
            e.utils.exists(n) || (n = document), t = e.utils.strings.trim(t);
            var r = t.charAt(0);
            if (r == "#")return n.getElementById(t.substr(1));
            if (r == ".")return n.getElementsByClassName ? n.getElementsByClassName(t.substr(1)) : e.utils.selectors.getElementsByTagAndClass("*", t.substr(1));
            if (t.indexOf(".") > 0) {
                var i = t.split(".");
                return e.utils.selectors.getElementsByTagAndClass(i[0], i[1])
            }
            return n.getElementsByTagName(t)
        }, e.utils.selectors.getElementsByTagAndClass = function (t, n, r) {
            var i = [];
            e.utils.exists(r) || (r = document);
            var s = r.getElementsByTagName(t);
            for (var o = 0; o < s.length; o++)if (e.utils.exists(s[o].className)) {
                var u = s[o].className.split(" ");
                for (var f = 0; f < u.length; f++)u[f] == n && i.push(s[o])
            }
            return i
        }
    }(jwplayer5), function (e) {
        e.utils.strings = function () {
        }, e.utils.strings.trim = function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }, e.utils.strings.pad = function (e, t, n) {
            n || (n = "0");
            while (e.length < t)e = n + e;
            return e
        }, e.utils.strings.serialize = function (e) {
            return e == null ? null : e == "true" ? !0 : e == "false" ? !1 : isNaN(Number(e)) || e.length > 5 || e.length == 0 ? e : Number(e)
        }, e.utils.strings.seconds = function (e) {
            e = e.replace(",", ".");
            var t = e.split(":"), n = 0;
            return e.substr(-1) == "s" ? n = Number(e.substr(0, e.length - 1)) : e.substr(-1) == "m" ? n = Number(e.substr(0, e.length - 1)) * 60 : e.substr(-1) == "h" ? n = Number(e.substr(0, e.length - 1)) * 3600 : t.length > 1 ? (n = Number(t[t.length - 1]), n += Number(t[t.length - 2]) * 60, t.length == 3 && (n += Number(t[t.length - 3]) * 3600)) : n = Number(e), n
        }, e.utils.strings.xmlAttribute = function (e, t) {
            for (var n = 0; n < e.attributes.length; n++)if (e.attributes[n].name && e.attributes[n].name.toLowerCase() == t.toLowerCase())return e.attributes[n].value.toString();
            return""
        }, e.utils.strings.jsonToString = function (t) {
            var n = n || {};
            if (n && n.stringify)return n.stringify(t);
            var r = typeof t;
            if (r == "object" && t !== null) {
                var i = [], s = t && t.constructor == Array;
                for (var o in t) {
                    var u = t[o];
                    switch (typeof u) {
                        case"string":
                            u = '"' + u.replace(/"/g, '\\"') + '"';
                            break;
                        case"object":
                            e.utils.exists(u) && (u = e.utils.strings.jsonToString(u))
                    }
                    s ? typeof u != "function" && i.push(String(u)) : typeof u != "function" && i.push('"' + o + '":' + String(u))
                }
                return s ? "[" + String(i) + "]" : "{" + String(i) + "}"
            }
            if (r != "string")return String(t);
            t = '"' + t.replace(/"/g, '\\"') + '"'
        }
    }(jwplayer5), function (e) {
        function n(e) {
            var n = ["true", "false", "t", "f"];
            return n.toString().indexOf(e.toLowerCase().replace(" ", "")) >= 0 ? "boolean" : t.test(e) ? "color" : !isNaN(parseInt(e, 10)) && parseInt(e, 10).toString().length == e.length ? "integer" : !isNaN(parseFloat(e)) && parseFloat(e).toString().length == e.length ? "float" : "string"
        }

        function r(t, n) {
            if (!e.utils.exists(n))return t;
            switch (n) {
                case"color":
                    if (t.length > 0)return i(t);
                    return null;
                case"integer":
                    return parseInt(t, 10);
                case"float":
                    return parseFloat(t);
                case"boolean":
                    if (t.toLowerCase() == "true")return!0;
                    if (t == "1")return!0;
                    return!1
            }
            return t
        }

        function i(e) {
            switch (e.toLowerCase()) {
                case"blue":
                    return parseInt("0000FF", 16);
                case"green":
                    return parseInt("00FF00", 16);
                case"red":
                    return parseInt("FF0000", 16);
                case"cyan":
                    return parseInt("00FFFF", 16);
                case"magenta":
                    return parseInt("FF00FF", 16);
                case"yellow":
                    return parseInt("FFFF00", 16);
                case"black":
                    return parseInt("000000", 16);
                case"white":
                    return parseInt("FFFFFF", 16);
                default:
                    return e = e.replace(/(#|0x)?([0-9A-F]{3,6})$/gi, "$2"), e.length == 3 && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), parseInt(e, 16)
            }
            return parseInt("000000", 16)
        }

        var t = new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);
        e.utils.typechecker = function (t, i) {
            return i = e.utils.exists(i) ? i : n(t), r(t, i)
        }
    }(jwplayer5), function (e) {
        e.utils.parsers = function () {
        }, e.utils.parsers.localName = function (e) {
            return e ? e.localName ? e.localName : e.baseName ? e.baseName : "" : ""
        }, e.utils.parsers.textContent = function (e) {
            return e ? e.textContent ? e.textContent : e.text ? e.text : "" : ""
        }
    }(jwplayer5), function (e) {
        e.utils.parsers.jwparser = function () {
        }, e.utils.parsers.jwparser.PREFIX = "jwplayer5", e.utils.parsers.jwparser.parseEntry = function (t, n) {
            for (var r = 0; r < t.childNodes.length; r++)t.childNodes[r].prefix == e.utils.parsers.jwparser.PREFIX && (n[e.utils.parsers.localName(t.childNodes[r])] = e.utils.strings.serialize(e.utils.parsers.textContent(t.childNodes[r])), e.utils.parsers.localName(t.childNodes[r]) == "file" && n.levels && delete n.levels), !n.file && String(n.link).toLowerCase().indexOf("youtube") > -1 && (n.file = n.link);
            return n
        }, e.utils.parsers.jwparser.getProvider = function (t) {
            if (t.type)return t.type;
            if (t.file.indexOf("youtube.com/w") > -1 || t.file.indexOf("youtube.com/v") > -1 || t.file.indexOf("youtu.be/") > -1)return"youtube";
            if (t.streamer && t.streamer.indexOf("rtmp") == 0)return"rtmp";
            if (t.streamer && t.streamer.indexOf("http") == 0)return"http";
            var n = e.utils.strings.extension(t.file);
            return extensions.hasOwnProperty(n) ? extensions[n] : ""
        }
    }(jwplayer5), function (e) {
        e.utils.parsers.mediaparser = function () {
        }, e.utils.parsers.mediaparser.PREFIX = "media", e.utils.parsers.mediaparser.parseGroup = function (t, n) {
            var r = !1;
            for (var i = 0; i < t.childNodes.length; i++)if (t.childNodes[i].prefix == e.utils.parsers.mediaparser.PREFIX) {
                if (!e.utils.parsers.localName(t.childNodes[i]))continue;
                switch (e.utils.parsers.localName(t.childNodes[i]).toLowerCase()) {
                    case"content":
                        r || (n.file = e.utils.strings.xmlAttribute(t.childNodes[i], "url")), e.utils.strings.xmlAttribute(t.childNodes[i], "duration") && (n.duration = e.utils.strings.seconds(e.utils.strings.xmlAttribute(t.childNodes[i], "duration"))), e.utils.strings.xmlAttribute(t.childNodes[i], "start") && (n.start = e.utils.strings.seconds(e.utils.strings.xmlAttribute(t.childNodes[i], "start"))), t.childNodes[i].childNodes && t.childNodes[i].childNodes.length > 0 && (n = e.utils.parsers.mediaparser.parseGroup(t.childNodes[i], n));
                        if (e.utils.strings.xmlAttribute(t.childNodes[i], "width") || e.utils.strings.xmlAttribute(t.childNodes[i], "bitrate") || e.utils.strings.xmlAttribute(t.childNodes[i], "url"))n.levels || (n.levels = []), n.levels.push({width: e.utils.strings.xmlAttribute(t.childNodes[i], "width"), bitrate: e.utils.strings.xmlAttribute(t.childNodes[i], "bitrate"), file: e.utils.strings.xmlAttribute(t.childNodes[i], "url")});
                        break;
                    case"title":
                        n.title = e.utils.parsers.textContent(t.childNodes[i]);
                        break;
                    case"description":
                        n.description = e.utils.parsers.textContent(t.childNodes[i]);
                        break;
                    case"keywords":
                        n.tags = e.utils.parsers.textContent(t.childNodes[i]);
                        break;
                    case"thumbnail":
                        n.image = e.utils.strings.xmlAttribute(t.childNodes[i], "url");
                        break;
                    case"credit":
                        n.author = e.utils.parsers.textContent(t.childNodes[i]);
                        break;
                    case"player":
                        var s = t.childNodes[i].url;
                        if (s.indexOf("youtube.com") >= 0 || s.indexOf("youtu.be") >= 0)r = !0, n.file = e.utils.strings.xmlAttribute(t.childNodes[i], "url");
                        break;
                    case"group":
                        e.utils.parsers.mediaparser.parseGroup(t.childNodes[i], n)
                }
            }
            return n
        }
    }(jwplayer5), function (e) {
        function t(t) {
            var n = {};
            for (var r = 0; r < t.childNodes.length; r++) {
                if (!e.utils.parsers.localName(t.childNodes[r]))continue;
                switch (e.utils.parsers.localName(t.childNodes[r]).toLowerCase()) {
                    case"enclosure":
                        n.file = e.utils.strings.xmlAttribute(t.childNodes[r], "url");
                        break;
                    case"title":
                        n.title = e.utils.parsers.textContent(t.childNodes[r]);
                        break;
                    case"pubdate":
                        n.date = e.utils.parsers.textContent(t.childNodes[r]);
                        break;
                    case"description":
                        n.description = e.utils.parsers.textContent(t.childNodes[r]);
                        break;
                    case"link":
                        n.link = e.utils.parsers.textContent(t.childNodes[r]);
                        break;
                    case"category":
                        n.tags ? n.tags += e.utils.parsers.textContent(t.childNodes[r]) : n.tags = e.utils.parsers.textContent(t.childNodes[r])
                }
            }
            return n = e.utils.parsers.mediaparser.parseGroup(t, n), n = e.utils.parsers.jwparser.parseEntry(t, n), new e.html5.playlistitem(n)
        }

        e.utils.parsers.rssparser = function () {
        }, e.utils.parsers.rssparser.parse = function (n) {
            var r = [];
            for (var i = 0; i < n.childNodes.length; i++)if (e.utils.parsers.localName(n.childNodes[i]).toLowerCase() == "channel")for (var s = 0; s < n.childNodes[i].childNodes.length; s++)e.utils.parsers.localName(n.childNodes[i].childNodes[s]).toLowerCase() == "item" && r.push(t(n.childNodes[i].childNodes[s]));
            return r
        }
    }(jwplayer5), function (e) {
        var t = {}, n = {};
        e.plugins = function () {
        }, e.plugins.loadPlugins = function (r, i) {
            return n[r] = new e.plugins.pluginloader(new e.plugins.model(t), i), n[r]
        }, e.plugins.registerPlugin = function (r, i, s) {
            var o = e.utils.getPluginName(r);
            if (t[o])t[o].registerPlugin(r, i, s); else {
                e.utils.log("A plugin (" + r + ") was registered with the player that was not loaded. Please check your configuration.");
                for (var u in n)n[u].pluginFailed()
            }
        }
    }(jwplayer5), function (e) {
        e.plugins.model = function (t) {
            this.addPlugin = function (n) {
                var r = e.utils.getPluginName(n);
                return t[r] || (t[r] = new e.plugins.plugin(n)), t[r]
            }
        }
    }(jwplayer5), function (e) {
        e.plugins.pluginmodes = {FLASH: "FLASH", JAVASCRIPT: "JAVASCRIPT", HYBRID: "HYBRID"}, e.plugins.plugin = function (t) {
            function f() {
                switch (e.utils.getPluginPathType(t)) {
                    case e.utils.pluginPathType.ABSOLUTE:
                        return t;
                    case e.utils.pluginPathType.RELATIVE:
                        return e.utils.getAbsolutePath(t, window.location.href);
                    case e.utils.pluginPathType.CDN:
                        var r = e.utils.getPluginName(t), i = e.utils.getPluginVersion(t), s = window.location.href.indexOf("https://") == 0 ? n.replace("http://", "https://secure") : n;
                        return s + "/" + e.version.split(".")[0] + "/" + r + "/" + r + (i !== "" ? "-" + i : "") + ".js"
                }
            }

            function l(t) {
                o = setTimeout(function () {
                    r = e.utils.loaderstatus.COMPLETE, u.sendEvent(e.events.COMPLETE)
                }, 1e3)
            }

            function c(t) {
                r = e.utils.loaderstatus.ERROR, u.sendEvent(e.events.ERROR)
            }

            var n = "http://lp.longtailvideo.com", r = e.utils.loaderstatus.NEW, i, s, o, u = new e.events.eventdispatcher;
            e.utils.extend(this, u), this.load = function () {
                if (r == e.utils.loaderstatus.NEW) {
                    if (t.lastIndexOf(".swf") > 0) {
                        i = t, r = e.utils.loaderstatus.COMPLETE, u.sendEvent(e.events.COMPLETE);
                        return
                    }
                    r = e.utils.loaderstatus.LOADING;
                    var n = new e.utils.scriptloader(f());
                    n.addEventListener(e.events.COMPLETE, l), n.addEventListener(e.events.ERROR, c), n.load()
                }
            }, this.registerPlugin = function (t, n, f) {
                o && (clearTimeout(o), o = undefined), n && f ? (i = f, s = n) : typeof n == "string" ? i = n : typeof n == "function" ? s = n : !n && !f && (i = t), r = e.utils.loaderstatus.COMPLETE, u.sendEvent(e.events.COMPLETE)
            }, this.getStatus = function () {
                return r
            }, this.getPluginName = function () {
                return e.utils.getPluginName(t)
            }, this.getFlashPath = function () {
                if (i)switch (e.utils.getPluginPathType(i)) {
                    case e.utils.pluginPathType.ABSOLUTE:
                        return i;
                    case e.utils.pluginPathType.RELATIVE:
                        if (t.lastIndexOf(".swf") > 0)return e.utils.getAbsolutePath(i, window.location.href);
                        return e.utils.getAbsolutePath(i, f());
                    case e.utils.pluginPathType.CDN:
                        if (i.indexOf("-") > -1)return i + "h";
                        return i + "-h"
                }
                return null
            }, this.getJS = function () {
                return s
            }, this.getPluginmode = function () {
                if (typeof i != "undefined" && typeof s != "undefined")return e.plugins.pluginmodes.HYBRID;
                if (typeof i != "undefined")return e.plugins.pluginmodes.FLASH;
                if (typeof s != "undefined")return e.plugins.pluginmodes.JAVASCRIPT
            }, this.getNewInstance = function (e, t, n) {
                return new s(e, t, n)
            }, this.getURL = function () {
                return t
            }
        }
    }(jwplayer5), function (e) {
        e.plugins.pluginloader = function (t, n) {
            function f() {
                o || (o = !0, i = e.utils.loaderstatus.COMPLETE, u.sendEvent(e.events.COMPLETE))
            }

            function l() {
                if (!o) {
                    var t = 0;
                    for (plugin in r) {
                        var n = r[plugin].getStatus();
                        (n == e.utils.loaderstatus.LOADING || n == e.utils.loaderstatus.NEW) && t++
                    }
                    t == 0 && f()
                }
            }

            var r = {}, i = e.utils.loaderstatus.NEW, s = !1, o = !1, u = new e.events.eventdispatcher;
            e.utils.extend(this, u), this.setupPlugins = function (e, t, n) {
                var i = {length: 0, plugins: {}}, s = {length: 0, plugins: {}};
                for (var o in r) {
                    var u = r[o].getPluginName();
                    r[o].getFlashPath() && (i.plugins[r[o].getFlashPath()] = t.plugins[o], i.plugins[r[o].getFlashPath()].pluginmode = r[o].getPluginmode(), i.length++);
                    if (r[o].getJS()) {
                        var a = document.createElement("div");
                        a.id = e.id + "_" + u, a.style.position = "absolute", a.style.zIndex = s.length + 10, s.plugins[u] = r[o].getNewInstance(e, t.plugins[o], a), s.length++, typeof s.plugins[u].resize != "undefined" && (e.onReady(n(s.plugins[u], a, !0)), e.onResize(n(s.plugins[u], a)))
                    }
                }
                return e.plugins = s.plugins, i
            }, this.load = function () {
                i = e.utils.loaderstatus.LOADING, s = !0;
                for (var o in n)e.utils.exists(o) && (r[o] = t.addPlugin(o), r[o].addEventListener(e.events.COMPLETE, l), r[o].addEventListener(e.events.ERROR, l));
                for (o in r)r[o].load();
                s = !1, l()
            }, this.pluginFailed = function () {
                f()
            }, this.getStatus = function () {
                return i
            }
        }
    }(jwplayer5), function (e) {
        var t = [];
        e.api = function (t) {
            function p(e, t) {
                return function (n, r, i, s) {
                    if (e.renderingMode == "flash" || e.renderingMode == "html5") {
                        var u;
                        r ? (h[n] = r, u = "jwplayer5('" + e.id + "').callback('" + n + "')") : !r && h[n] && delete h[n], o.jwDockSetButton(n, u, i, s)
                    }
                    return t
                }
            }

            function d(t) {
                a = [], e.utils.getOuterHTML(t.container) != l && e.api.destroyPlayer(t.id, l)
            }

            function v(e) {
                return function (t) {
                    var n = t.newstate, i = t.oldstate;
                    if (n == e) {
                        var s = r[n];
                        if (s)for (var o = 0; o < s.length; o++)typeof s[o] == "function" && s[o].call(this, {oldstate: i, newstate: n})
                    }
                }
            }

            function m(e, t) {
                return function (n) {
                    if (e == n.component) {
                        var r = i[e][t];
                        if (r)for (var s = 0; s < r.length; s++)typeof r[s] == "function" && r[s].call(this, n)
                    }
                }
            }

            function g(e, t, n) {
                var r = [];
                t || (t = 0), n || (n = e.length - 1);
                for (var i = t; i <= n; i++)r.push(e[i]);
                return r
            }

            this.container = t, this.id = t.id;
            var n = {}, r = {}, i = {}, s = [], o = undefined, u = !1, a = [], f = undefined, l = e.utils.getOuterHTML(t), c = {}, h = {};
            return this.getBuffer = function () {
                return this.callInternal("jwGetBuffer")
            }, this.getContainer = function () {
                return this.container
            }, this.getPlugin = function (t) {
                var n = this, r = {};
                return t == "dock" ? e.utils.extend(r, {setButton: p(n, r), show: function () {
                    return n.callInternal("jwDockShow"), r
                }, hide: function () {
                    return n.callInternal("jwDockHide"), r
                }, onShow: function (t) {
                    return n.componentListener("dock", e.api.events.JWPLAYER_COMPONENT_SHOW, t), r
                }, onHide: function (t) {
                    return n.componentListener("dock", e.api.events.JWPLAYER_COMPONENT_HIDE, t), r
                }}) : t == "controlbar" ? e.utils.extend(r, {show: function () {
                    return n.callInternal("jwControlbarShow"), r
                }, hide: function () {
                    return n.callInternal("jwControlbarHide"), r
                }, onShow: function (t) {
                    return n.componentListener("controlbar", e.api.events.JWPLAYER_COMPONENT_SHOW, t), r
                }, onHide: function (t) {
                    return n.componentListener("controlbar", e.api.events.JWPLAYER_COMPONENT_HIDE, t), r
                }}) : t == "display" ? e.utils.extend(r, {show: function () {
                    return n.callInternal("jwDisplayShow"), r
                }, hide: function () {
                    return n.callInternal("jwDisplayHide"), r
                }, onShow: function (t) {
                    return n.componentListener("display", e.api.events.JWPLAYER_COMPONENT_SHOW, t), r
                }, onHide: function (t) {
                    return n.componentListener("display", e.api.events.JWPLAYER_COMPONENT_HIDE, t), r
                }}) : this.plugins[t]
            }, this.callback = function (e) {
                if (h[e])return h[e]()
            }, this.getDuration = function () {
                return this.callInternal("jwGetDuration")
            }, this.getFullscreen = function () {
                return this.callInternal("jwGetFullscreen")
            }, this.getHeight = function () {
                return this.callInternal("jwGetHeight")
            }, this.getLockState = function () {
                return this.callInternal("jwGetLockState")
            }, this.getMeta = function () {
                return this.getItemMeta()
            }, this.getMute = function () {
                return this.callInternal("jwGetMute")
            }, this.getPlaylist = function () {
                var t = this.callInternal("jwGetPlaylist");
                this.renderingMode == "flash" && e.utils.deepReplaceKeyName(t, ["__dot__", "__spc__", "__dsh__"], [".", " ", "-"]);
                for (var n = 0; n < t.length; n++)e.utils.exists(t[n].index) || (t[n].index = n);
                return t
            }, this.getPlaylistItem = function (t) {
                return e.utils.exists(t) || (t = this.getCurrentItem()), this.getPlaylist()[t]
            }, this.getPosition = function () {
                return this.callInternal("jwGetPosition")
            }, this.getRenderingMode = function () {
                return this.renderingMode
            }, this.getState = function () {
                return this.callInternal("jwGetState")
            }, this.getVolume = function () {
                return this.callInternal("jwGetVolume")
            }, this.getWidth = function () {
                return this.callInternal("jwGetWidth")
            }, this.setFullscreen = function (t) {
                return e.utils.exists(t) ? this.callInternal("jwSetFullscreen", t) : this.callInternal("jwSetFullscreen", !this.callInternal("jwGetFullscreen")), this
            }, this.setMute = function (t) {
                return e.utils.exists(t) ? this.callInternal("jwSetMute", t) : this.callInternal("jwSetMute", !this.callInternal("jwGetMute")), this
            }, this.lock = function () {
                return this
            }, this.unlock = function () {
                return this
            }, this.load = function (e) {
                return this.callInternal("jwLoad", e), this
            }, this.playlistItem = function (e) {
                return this.callInternal("jwPlaylistItem", e), this
            }, this.playlistPrev = function () {
                return this.callInternal("jwPlaylistPrev"), this
            }, this.playlistNext = function () {
                return this.callInternal("jwPlaylistNext"), this
            }, this.resize = function (e, t) {
                if (this.renderingMode == "html5")o.jwResize(e, t); else {
                    this.container.width = e, this.container.height = t;
                    var n = document.getElementById(this.id + "_wrapper");
                    n && (n.style.width = e + "px", n.style.height = t + "px")
                }
                return this
            }, this.play = function (t) {
                return typeof t == "undefined" ? (t = this.getState(), t == e.api.events.state.PLAYING || t == e.api.events.state.BUFFERING ? this.callInternal("jwPause") : this.callInternal("jwPlay")) : this.callInternal("jwPlay", t), this
            }, this.pause = function (t) {
                return typeof t == "undefined" ? (t = this.getState(), t == e.api.events.state.PLAYING || t == e.api.events.state.BUFFERING ? this.callInternal("jwPause") : this.callInternal("jwPlay")) : this.callInternal("jwPause", t), this
            }, this.stop = function () {
                return this.callInternal("jwStop"), this
            }, this.seek = function (e) {
                return this.callInternal("jwSeek", e), this
            }, this.setVolume = function (e) {
                return this.callInternal("jwSetVolume", e), this
            }, this.loadInstream = function (t, n) {
                return f = new e.api.instream(this, o, t, n), f
            }, this.onBufferChange = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_BUFFER, t)
            }, this.onBufferFull = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL, t)
            }, this.onError = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_ERROR, t)
            }, this.onFullscreen = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_FULLSCREEN, t)
            }, this.onMeta = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_META, t)
            }, this.onMute = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_MUTE, t)
            }, this.onPlaylist = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, t)
            }, this.onPlaylistItem = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, t)
            }, this.onReady = function (t) {
                return this.eventListener(e.api.events.API_READY, t)
            }, this.onResize = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_RESIZE, t)
            }, this.onComplete = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_COMPLETE, t)
            }, this.onSeek = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_SEEK, t)
            }, this.onTime = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_TIME, t)
            }, this.onVolume = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_VOLUME, t)
            }, this.onBeforePlay = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_BEFOREPLAY, t)
            }, this.onBeforeComplete = function (t) {
                return this.eventListener(e.api.events.JWPLAYER_MEDIA_BEFORECOMPLETE, t)
            }, this.onBuffer = function (t) {
                return this.stateListener(e.api.events.state.BUFFERING, t)
            }, this.onPause = function (t) {
                return this.stateListener(e.api.events.state.PAUSED, t)
            }, this.onPlay = function (t) {
                return this.stateListener(e.api.events.state.PLAYING, t)
            }, this.onIdle = function (t) {
                return this.stateListener(e.api.events.state.IDLE, t)
            }, this.remove = function () {
                if (!u)throw"Cannot call remove() before player is ready";
                d(this)
            }, this.setup = function (t) {
                if (e.embed) {
                    var n = this.id;
                    d(this);
                    var r = e(n);
                    return r.config = t, new e.embed(r)
                }
                return this
            }, this.registerPlugin = function (t, n, r) {
                e.plugins.registerPlugin(t, n, r)
            }, this.setPlayer = function (e, t) {
                o = e, this.renderingMode = t
            }, this.stateListener = function (t, n) {
                return r[t] || (r[t] = [], this.eventListener(e.api.events.JWPLAYER_PLAYER_STATE, v(t))), r[t].push(n), this
            }, this.detachMedia = function () {
                if (this.renderingMode == "html5")return this.callInternal("jwDetachMedia")
            }, this.attachMedia = function () {
                if (this.renderingMode == "html5")return this.callInternal("jwAttachMedia")
            }, this.componentListener = function (e, t, n) {
                return i[e] || (i[e] = {}), i[e][t] || (i[e][t] = [], this.eventListener(t, m(e, t))), i[e][t].push(n), this
            }, this.addInternalListener = function (t, n) {
                try {
                    t.jwAddEventListener(n, 'function(dat) { jwplayer5("' + this.id + '").dispatchEvent("' + n + '", dat); }')
                } catch (r) {
                    e.utils.log("Could not add internal listener")
                }
            }, this.eventListener = function (e, t) {
                return n[e] || (n[e] = [], o && u && this.addInternalListener(o, e)), n[e].push(t), this
            }, this.dispatchEvent = function (e) {
                if (n[e]) {
                    var t = _utils.translateEventResponse(e, arguments[1]);
                    for (var r = 0; r < n[e].length; r++)typeof n[e][r] == "function" && n[e][r].call(this, t)
                }
            }, this.dispatchInstreamEvent = function (e) {
                f && f.dispatchEvent(e, arguments)
            }, this.callInternal = function () {
                if (u) {
                    var e = arguments[0], t = [];
                    for (var n = 1; n < arguments.length; n++)t.push(arguments[n]);
                    return typeof o != "undefined" && typeof o[e] == "function" ? t.length == 2 ? o[e](t[0], t[1]) : t.length == 1 ? o[e](t[0]) : o[e]() : null
                }
                a.push(arguments)
            }, this.playerReady = function (t) {
                u = !0, o || this.setPlayer(document.getElementById(t.id)), this.container = document.getElementById(this.id);
                for (var r in n)this.addInternalListener(o, r);
                this.eventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, function (e) {
                    c = {}
                }), this.eventListener(e.api.events.JWPLAYER_MEDIA_META, function (t) {
                    e.utils.extend(c, t.metadata)
                }), this.dispatchEvent(e.api.events.API_READY);
                while (a.length > 0)this.callInternal.apply(this, a.shift())
            }, this.getItemMeta = function () {
                return c
            }, this.getCurrentItem = function () {
                return this.callInternal("jwGetPlaylistIndex")
            }, this
        }, e.api.selectPlayer = function (t) {
            var n;
            e.utils.exists(t) || (t = 0), t.nodeType ? n = t : typeof t == "string" && (n = document.getElementById(t));
            if (n) {
                var r = e.api.playerById(n.id);
                return r ? r : e.api.addPlayer(new e.api(n))
            }
            return typeof t == "number" ? e.getPlayers()[t] : null
        }, e.api.events = {API_READY: "jwplayerAPIReady", JWPLAYER_READY: "jwplayerReady", JWPLAYER_FULLSCREEN: "jwplayerFullscreen", JWPLAYER_RESIZE: "jwplayerResize", JWPLAYER_ERROR: "jwplayerError", JWPLAYER_MEDIA_BEFOREPLAY: "jwplayerMediaBeforePlay", JWPLAYER_MEDIA_BEFORECOMPLETE: "jwplayerMediaBeforeComplete", JWPLAYER_COMPONENT_SHOW: "jwplayerComponentShow", JWPLAYER_COMPONENT_HIDE: "jwplayerComponentHide", JWPLAYER_MEDIA_BUFFER: "jwplayerMediaBuffer", JWPLAYER_MEDIA_BUFFER_FULL: "jwplayerMediaBufferFull", JWPLAYER_MEDIA_ERROR: "jwplayerMediaError", JWPLAYER_MEDIA_LOADED: "jwplayerMediaLoaded", JWPLAYER_MEDIA_COMPLETE: "jwplayerMediaComplete", JWPLAYER_MEDIA_SEEK: "jwplayerMediaSeek", JWPLAYER_MEDIA_TIME: "jwplayerMediaTime", JWPLAYER_MEDIA_VOLUME: "jwplayerMediaVolume", JWPLAYER_MEDIA_META: "jwplayerMediaMeta", JWPLAYER_MEDIA_MUTE: "jwplayerMediaMute", JWPLAYER_PLAYER_STATE: "jwplayerPlayerState", JWPLAYER_PLAYLIST_LOADED: "jwplayerPlaylistLoaded", JWPLAYER_PLAYLIST_ITEM: "jwplayerPlaylistItem", JWPLAYER_INSTREAM_CLICK: "jwplayerInstreamClicked", JWPLAYER_INSTREAM_DESTROYED: "jwplayerInstreamDestroyed"}, e.api.events.state = {BUFFERING: "BUFFERING", IDLE: "IDLE", PAUSED: "PAUSED", PLAYING: "PLAYING"}, e.api.playerById = function (e) {
            for (var n = 0; n < t.length; n++)if (t[n].id == e)return t[n];
            return null
        }, e.api.addPlayer = function (e) {
            for (var n = 0; n < t.length; n++)if (t[n] == e)return e;
            return t.push(e), e
        }, e.api.destroyPlayer = function (n, r) {
            var i = -1;
            for (var s = 0; s < t.length; s++)if (t[s].id == n) {
                i = s;
                continue
            }
            if (i >= 0) {
                try {
                    t[i].callInternal("jwDestroy")
                } catch (o) {
                }
                var u = document.getElementById(t[i].id);
                document.getElementById(t[i].id + "_wrapper") && (u = document.getElementById(t[i].id + "_wrapper"));
                if (u)if (r)e.utils.setOuterHTML(u, r); else {
                    var f = document.createElement("div"), l = u.id;
                    u.id.indexOf("_wrapper") == u.id.length - 8 && (newID = u.id.substring(0, u.id.length - 8)), f.setAttribute("id", l), u.parentNode.replaceChild(f, u)
                }
                t.splice(i, 1)
            }
            return null
        }, e.getPlayers = function () {
            return t.slice(0)
        }
    }(jwplayer5);
    var _userPlayerReady = typeof playerReady == "function" ? playerReady : undefined;
    playerReady = function (e) {
        var t = jwplayer5.api.playerById(e.id);
        t ? t.playerReady(e) : jwplayer5.api.selectPlayer(e.id).playerReady(e), _userPlayerReady && _userPlayerReady.call(this, e)
    }, function (e) {
        e.api.instream = function (t, n, r, i) {
            function h() {
                s.callInternal("jwLoadInstream", r, i)
            }

            function p(e, t) {
                o.jwInstreamAddEventListener(t, 'function(dat) { jwplayer5("' + s.id + '").dispatchInstreamEvent("' + t + '", dat); }')
            }

            function d(e, t) {
                return l[e] || (l[e] = [], p(o, e)), l[e].push(t), this
            }

            function v(t, n) {
                return c[t] || (c[t] = [], d(e.api.events.JWPLAYER_PLAYER_STATE, m(t))), c[t].push(n), this
            }

            function m(e) {
                return function (t) {
                    var n = t.newstate, r = t.oldstate;
                    if (n == e) {
                        var i = c[n];
                        if (i)for (var s = 0; s < i.length; s++)typeof i[s] == "function" && i[s].call(this, {oldstate: r, newstate: n, type: t.type})
                    }
                }
            }

            var s = t, o = n, u = r, f = i, l = {}, c = {};
            this.dispatchEvent = function (e, t) {
                if (l[e]) {
                    var n = _utils.translateEventResponse(e, t[1]);
                    for (var r = 0; r < l[e].length; r++)typeof l[e][r] == "function" && l[e][r].call(this, n)
                }
            }, this.onError = function (t) {
                return d(e.api.events.JWPLAYER_ERROR, t)
            }, this.onFullscreen = function (t) {
                return d(e.api.events.JWPLAYER_FULLSCREEN, t)
            }, this.onMeta = function (t) {
                return d(e.api.events.JWPLAYER_MEDIA_META, t)
            }, this.onMute = function (t) {
                return d(e.api.events.JWPLAYER_MEDIA_MUTE, t)
            }, this.onComplete = function (t) {
                return d(e.api.events.JWPLAYER_MEDIA_COMPLETE, t)
            }, this.onSeek = function (t) {
                return d(e.api.events.JWPLAYER_MEDIA_SEEK, t)
            }, this.onTime = function (t) {
                return d(e.api.events.JWPLAYER_MEDIA_TIME, t)
            }, this.onVolume = function (t) {
                return d(e.api.events.JWPLAYER_MEDIA_VOLUME, t)
            }, this.onBuffer = function (t) {
                return v(e.api.events.state.BUFFERING, t)
            }, this.onPause = function (t) {
                return v(e.api.events.state.PAUSED, t)
            }, this.onPlay = function (t) {
                return v(e.api.events.state.PLAYING, t)
            }, this.onIdle = function (t) {
                return v(e.api.events.state.IDLE, t)
            }, this.onInstreamClick = function (t) {
                return d(e.api.events.JWPLAYER_INSTREAM_CLICK, t)
            }, this.onInstreamDestroyed = function (t) {
                return d(e.api.events.JWPLAYER_INSTREAM_DESTROYED, t)
            }, this.play = function (e) {
                o.jwInstreamPlay(e)
            }, this.pause = function (e) {
                o.jwInstreamPause(e)
            }, this.seek = function (e) {
                o.jwInstreamSeek(e)
            }, this.destroy = function () {
                o.jwInstreamDestroy()
            }, this.getState = function () {
                return o.jwInstreamGetState()
            }, this.getDuration = function () {
                return o.jwInstreamGetDuration()
            }, this.getPosition = function () {
                return o.jwInstreamGetPosition()
            }, h()
        }
    }(jwplayer5), function (e) {
        function n() {
            if (!document.body)return setTimeout(n, 15);
            var r = t.selectors.getElementsByTagAndClass("video", "jwplayer5");
            for (var i = 0; i < r.length; i++) {
                var s = r[i];
                s.id == "" && (s.id = "jwplayer_" + Math.round(Math.random() * 1e5)), e(s.id).setup({})
            }
        }

        var t = e.utils;
        e.embed = function (n) {
            function u(e, t) {
                for (var n in t)typeof e[n] == "function" && e[n].call(e, t[n])
            }

            function f() {
                if (o.getStatus() == t.loaderstatus.COMPLETE) {
                    for (var r = 0; r < s.modes.length; r++)if (s.modes[r].type && e.embed[s.modes[r].type]) {
                        var i = s.modes[r].config, f = s;
                        if (i) {
                            f = t.extend(t.clone(s), i);
                            var l = ["file", "levels", "playlist"];
                            for (var p = 0; p < l.length; p++) {
                                var v = l[p];
                                if (t.exists(i[v]))for (var m = 0; m < l.length; m++)if (m != p) {
                                    var g = l[m];
                                    t.exists(f[g]) && !t.exists(i[g]) && delete f[g]
                                }
                            }
                        }
                        var y = new e.embed[s.modes[r].type](document.getElementById(n.id), s.modes[r], f, o, n);
                        if (y.supportsConfig())return y.embed(), u(n, s.events), n
                    }
                    t.log("No suitable players found"), new e.embed.logo(t.extend({hide: !0}, s.components.logo), "none", n.id)
                }
            }

            var r = {width: 400, height: 300, components: {controlbar: {position: "over"}}}, i = t.mediaparser.parseMedia(n.container), s = new e.embed.config(t.extend(r, i, n.config), this), o = e.plugins.loadPlugins(n.id, s.plugins);
            return o.addEventListener(e.events.COMPLETE, f), o.addEventListener(e.events.ERROR, f), o.load(), n
        }, n()
    }(jwplayer5), function (e) {
        function n(e) {
            var n = [
                {type: "flash", src: e ? e : "/jwplayer5/player.swf"},
                {type: "html5"},
                {type: "download"}
            ];
            return t.isAndroid() && (n[0] = n.splice(1, 1, n[0])[0]), n
        }

        function i(e) {
            var t = e.toLowerCase(), n = ["left", "right", "top", "bottom"];
            for (var r = 0; r < n.length; r++)if (t == n[r])return!0;
            return!1
        }

        function s(e) {
            var t = !1;
            return t = e instanceof Array || typeof e == "object" && !e.position && !e.size, t
        }

        function o(e) {
            if (typeof e == "string")if (parseInt(e).toString() == e || e.toLowerCase().indexOf("px") > -1)return parseInt(e);
            return e
        }

        function a(e) {
            var n = {};
            switch (t.typeOf(e.plugins)) {
                case"object":
                    for (var r in e.plugins)n[t.getPluginName(r)] = r;
                    break;
                case"string":
                    var i = e.plugins.split(",");
                    for (var s = 0; s < i.length; s++)n[t.getPluginName(i[s])] = i[s]
            }
            return n
        }

        function f(e, n, r, i) {
            t.typeOf(e[n]) != "object" && (e[n] = {});
            var s = e[n][r];
            t.typeOf(s) != "object" && (e[n][r] = s = {});
            if (i)if (n == "plugins") {
                var o = t.getPluginName(r);
                s[i] = e[o + "." + i], delete e[o + "." + i]
            } else s[i] = e[r + "." + i], delete e[r + "." + i]
        }

        var t = e.utils, r = {players: "modes", autoplay: "autostart"}, u = ["playlist", "dock", "controlbar", "logo", "display"];
        e.embed.deserialize = function (e) {
            var n = a(e);
            for (var r in n)f(e, "plugins", n[r]);
            for (var i in e)if (i.indexOf(".") > -1) {
                var s = i.split("."), o = s[0], i = s[1];
                t.isInArray(u, o) ? f(e, "components", o, i) : n[o] && f(e, "plugins", n[o], i)
            }
            return e
        }, e.embed.config = function (i, a) {
            var f = t.extend({}, i), l;
            s(f.playlist) && (l = f.playlist, delete f.playlist), f = e.embed.deserialize(f), f.height = o(f.height), f.width = o(f.width);
            if (typeof f.plugins == "string") {
                var p = f.plugins.split(",");
                typeof f.plugins != "object" && (f.plugins = {});
                for (var d = 0; d < p.length; d++) {
                    var v = t.getPluginName(p[d]);
                    typeof f[v] == "object" ? (f.plugins[p[d]] = f[v], delete f[v]) : f.plugins[p[d]] = {}
                }
            }
            for (var m = 0; m < u.length; m++) {
                var y = u[m];
                t.exists(f[y]) && (typeof f[y] != "object" ? (f.components[y] || (f.components[y] = {}), y == "logo" ? f.components[y].file = f[y] : f.components[y].position = f[y], delete f[y]) : (f.components[y] || (f.components[y] = {}), t.extend(f.components[y], f[y]), delete f[y])), typeof f[y + "size"] != "undefined" && (f.components[y] || (f.components[y] = {}), f.components[y].size = f[y + "size"], delete f[y + "size"])
            }
            typeof f.icons != "undefined" && (f.components.display || (f.components.display = {}), f.components.display.icons = f.icons, delete f.icons);
            for (var b in r)f[b] && (f[r[b]] || (f[r[b]] = f[b]), delete f[b]);
            var w;
            return f.flashplayer && !f.modes ? (w = n(f.flashplayer), delete f.flashplayer) : f.modes ? (typeof f.modes == "string" ? w = n(f.modes) : f.modes instanceof Array ? w = f.modes : typeof f.modes == "object" && f.modes.type && (w = [f.modes]), delete f.modes) : w = n(), f.modes = w, l && (f.playlist = l), f
        }
    }(jwplayer5), function (e) {
        e.embed.download = function (t, n, r, i, s) {
            function o(t, n, r) {
                if (r)return!1;
                var i = ["image", "sound", "youtube", "http"];
                if (n && i.toString().indexOf(n) > -1)return!0;
                if (!n || n && n == "video") {
                    var s = e.utils.extension(t);
                    if (s && e.utils.extensionmap[s])return!0
                }
                return!1
            }

            this.embed = function () {
                function g(e) {
                    _imageWidth = i.display_image.naturalWidth, _imageHeight = i.display_image.naturalHeight, y()
                }

                function y() {
                    e.utils.stretch(e.utils.stretching.UNIFORM, i.display_image, o, u, _imageWidth, _imageHeight)
                }

                var n = e.utils.extend({}, r), i = {}, o = r.width ? r.width : 480;
                typeof o != "number" && (o = parseInt(o, 10));
                var u = r.height ? r.height : 320;
                typeof u != "number" && (u = parseInt(u, 10));
                var l, h, p, d = {};
                r.playlist && r.playlist.length ? (d.file = r.playlist[0].file, h = r.playlist[0].image, d.levels = r.playlist[0].levels) : (d.file = r.file, h = r.image, d.levels = r.levels), d.file ? l = d.file : d.levels && d.levels.length && (l = d.levels[0].file), p = l ? "pointer" : "auto";
                var v = {display: {style: {cursor: p, width: o, height: u, backgroundColor: "#000", position: "relative", textDecoration: "none", border: "none", display: "block"}}, display_icon: {style: {cursor: p, position: "absolute", display: l ? "block" : "none", top: 0, left: 0, border: 0, margin: 0, padding: 0, zIndex: 3, width: 50, height: 50, backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"}}, display_iconBackground: {style: {cursor: p, position: "absolute", display: l ? "block" : "none", top: (u - 50) / 2, left: (o - 50) / 2, border: 0, width: 50, height: 50, margin: 0, padding: 0, zIndex: 2, backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"}}, display_image: {style: {width: o, height: u, display: h ? "block" : "none", position: "absolute", cursor: p, left: 0, top: 0, margin: 0, padding: 0, textDecoration: "none", zIndex: 1, border: "none"}}}, m = function (n, r, i) {
                    var s = document.createElement(n);
                    return i ? s.id = i : s.id = t.id + "_jwplayer_" + r, e.utils.css(s, v[r].style), s
                };
                i.display = m("a", "display", t.id), l && i.display.setAttribute("href", e.utils.getAbsolutePath(l)), i.display_image = m("img", "display_image"), i.display_image.setAttribute("alt", "Click to download..."), h && i.display_image.setAttribute("src", e.utils.getAbsolutePath(h)), i.display_icon = m("div", "display_icon"), i.display_iconBackground = m("div", "display_iconBackground"), i.display.appendChild(i.display_image), i.display_iconBackground.appendChild(i.display_icon), i.display.appendChild(i.display_iconBackground), _css = e.utils.css, _hide = function (e) {
                    _css(e, {display: "none"})
                }, i.display_image.onerror = function (e) {
                    _hide(i.display_image)
                }, i.display_image.onload = g, t.parentNode.replaceChild(i.display, t);
                var w = r.plugins && r.plugins.logo ? r.plugins.logo : {};
                i.display.appendChild(new e.embed.logo(r.components.logo, "download", t.id)), s.container = document.getElementById(s.id), s.setPlayer(i.display, "download")
            }, this.supportsConfig = function () {
                if (!r)return!0;
                var t = e.utils.getFirstPlaylistItemFromConfig(r);
                if (typeof t.file == "undefined" && typeof t.levels == "undefined")return!0;
                if (t.file)return o(t.file, t.provider, t.playlistfile);
                if (t.levels && t.levels.length)for (var n = 0; n < t.levels.length; n++)if (t.levels[n].file && o(t.levels[n].file, t.provider, t.playlistfile))return!0
            }
        }
    }(jwplayer5), function (e) {
        e.embed.flash = function (t, n, r, i, s) {
            function o(e, t, n) {
                var r = document.createElement("param");
                r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
            }

            function u(t, n, r) {
                return function (i) {
                    r && document.getElementById(s.id + "_wrapper").appendChild(n);
                    var o = document.getElementById(s.id).getPluginConfig("display");
                    t.resize(o.width, o.height);
                    var u = {left: o.x, top: o.y};
                    e.utils.css(n, u)
                }
            }

            function f(e) {
                if (!e)return{};
                var t = {};
                for (var n in e) {
                    var r = e[n];
                    for (var i in r)t[n + "." + i] = r[i]
                }
                return t
            }

            function l(e, t) {
                if (e[t]) {
                    var n = e[t];
                    for (var r in n) {
                        var i = n[r];
                        if (typeof i == "string")e[r] || (e[r] = i); else for (var s in i)e[r + "." + s] || (e[r + "." + s] = i[s])
                    }
                    delete e[t]
                }
            }

            function c(t) {
                if (!t)return{};
                var n = {}, r = [];
                for (var i in t) {
                    var s = e.utils.getPluginName(i), o = t[i];
                    r.push(i);
                    for (var u in o)n[s + "." + u] = o[u]
                }
                return n.plugins = r.join(","), n
            }

            function h(t) {
                var n = t.netstreambasepath ? "" : "netstreambasepath=" + encodeURIComponent(window.location.href.split("#")[0]) + "&";
                for (var r in t)typeof t[r] == "object" ? n += r + "=" + encodeURIComponent("[[JSON]]" + e.utils.strings.jsonToString(t[r])) + "&" : n += r + "=" + encodeURIComponent(t[r]) + "&";
                return n.substring(0, n.length - 1)
            }

            this.embed = function () {
                r.id = s.id;
                var f, p = e.utils.extend({}, r), d = p.width, v = p.height;
                t.id + "_wrapper" == t.parentNode.id ? f = document.getElementById(t.id + "_wrapper") : (f = document.createElement("div"), f.id = t.id + "_wrapper", e.utils.wrap(t, f), e.utils.css(f, {position: "relative", width: d, height: v}));
                var y = i.setupPlugins(s, p, u);
                y.length > 0 ? e.utils.extend(p, c(y.plugins)) : delete p.plugins;
                var w = ["height", "width", "modes", "events"];
                for (var E = 0; E < w.length; E++)delete p[w[E]];
                var S = "opaque";
                p.wmode && (S = p.wmode), l(p, "components"), l(p, "providers"), typeof p["dock.position"] != "undefined" && p["dock.position"].toString().toLowerCase() == "false" && (p.dock = p["dock.position"], delete p["dock.position"]);
                var x = e.utils.getCookies();
                for (var T in x)typeof p[T] == "undefined" && (p[T] = x[T]);
                var N = "#000000", C;
                if (e.utils.isIE()) {
                    var L = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="' + N + '" width="100%" height="100%" id="' + t.id + '" name="' + t.id + '" tabindex=0"">';
                    L += '<param name="movie" value="' + n.src + '">', L += '<param name="allowfullscreen" value="true">', L += '<param name="allowscriptaccess" value="always">', L += '<param name="seamlesstabbing" value="true">', L += '<param name="wmode" value="' + S + '">', L += '<param name="flashvars" value="' + h(p) + '">', L += "</object>", e.utils.setOuterHTML(t, L), C = document.getElementById(t.id)
                } else {
                    var A = document.createElement("object");
                    A.setAttribute("type", "application/x-shockwave-flash"), A.setAttribute("data", n.src), A.setAttribute("width", "100%"), A.setAttribute("height", "100%"), A.setAttribute("bgcolor", "#000000"), A.setAttribute("id", t.id), A.setAttribute("name", t.id), A.setAttribute("tabindex", 0), o(A, "allowfullscreen", "true"), o(A, "allowscriptaccess", "always"), o(A, "seamlesstabbing", "true"), o(A, "wmode", S), o(A, "flashvars", h(p)), t.parentNode.replaceChild(A, t), C = A
                }
                s.container = C, s.setPlayer(C, "flash")
            }, this.supportsConfig = function () {
                if (e.utils.hasFlash()) {
                    if (!r)return!0;
                    var t = e.utils.getFirstPlaylistItemFromConfig(r);
                    if (typeof t.file == "undefined" && typeof t.levels == "undefined")return!0;
                    if (t.file)return flashCanPlay(t.file, t.provider);
                    if (t.levels && t.levels.length)for (var n = 0; n < t.levels.length; n++)if (t.levels[n].file && flashCanPlay(t.levels[n].file, t.provider))return!0
                }
                return!1
            }, flashCanPlay = function (t, n) {
                var r = ["video", "http", "sound", "image"];
                if (n && r.toString().indexOf(n) < 0)return!0;
                var i = e.utils.extension(t);
                return i ? e.utils.exists(e.utils.extensionmap[i]) && !e.utils.exists(e.utils.extensionmap[i].flash) ? !1 : !0 : !0
            }
        }
    }(jwplayer5), function (e) {
        e.embed.html5 = function (t, n, r, i, s) {
            function o(e, n, r) {
                return function (i) {
                    var s = document.getElementById(t.id + "_displayarea");
                    r && s.appendChild(n), e.resize(s.clientWidth, s.clientHeight), n.left = s.style.left, n.top = s.style.top
                }
            }

            this.embed = function () {
                if (!e.html5)return null;
                i.setupPlugins(s, r, o), t.innerHTML = "";
                var n = e.utils.extend({screencolor: "0x000000"}, r), u = ["plugins", "modes", "events"];
                for (var l = 0; l < u.length; l++)delete n[u[l]];
                n.levels && !n.sources && (n.sources = r.levels), n.skin && n.skin.toLowerCase().indexOf(".zip") > 0 && (n.skin = n.skin.replace(/\.zip/i, ".xml"));
                var h = new (e.html5(t).setup)(n);
                s.container = document.getElementById(s.id), s.setPlayer(h, "html5")
            }, this.supportsConfig = function () {
                if (!!e.vid.canPlayType) {
                    if (!r)return!0;
                    var t = e.utils.getFirstPlaylistItemFromConfig(r);
                    if (typeof t.file == "undefined" && typeof t.levels == "undefined")return!0;
                    if (t.file)return html5CanPlay(e.vid, t.file, t.provider, t.playlistfile);
                    if (t.levels && t.levels.length)for (var n = 0; n < t.levels.length; n++)if (t.levels[n].file && html5CanPlay(e.vid, t.levels[n].file, t.provider, t.playlistfile))return!0
                }
                return!1
            }, html5CanPlay = function (t, n, r, i) {
                if (i)return!1;
                if (r && r == "youtube")return!0;
                if (r && r != "video" && r != "http" && r != "sound")return!1;
                if (navigator.userAgent.match(/BlackBerry/i) !== null)return!1;
                var s = e.utils.extension(n);
                return!e.utils.exists(s) || !e.utils.exists(e.utils.extensionmap[s]) ? !0 : e.utils.exists(e.utils.extensionmap[s].html5) ? e.utils.isLegacyAndroid() && s.match(/m4v|mp4/) ? !0 : browserCanPlay(t, e.utils.extensionmap[s].html5) : !1
            }, browserCanPlay = function (e, t) {
                return t ? e.canPlayType(t) ? !0 : t == "audio/mp3" && navigator.userAgent.match(/safari/i) ? e.canPlayType("audio/mpeg") : !1 : !0
            }
        }
    }(jwplayer5), function (e) {
        e.embed.logo = function (t, n, r) {
            function u() {
                f(), c(), h()
            }

            function f() {
                if (i.prefix) {
                    var n = e.version.split(/\W/).splice(0, 2).join("/");
                    i.prefix.indexOf(n) < 0 && (i.prefix += n + "/")
                }
                o = e.utils.extend({}, i, t)
            }

            function l() {
                var e = {border: "none", textDecoration: "none", position: "absolute", cursor: "pointer", zIndex: 10};
                e.display = o.hide ? "none" : "block";
                var t = o.position.toLowerCase().split("-");
                for (var n in t)e[t[n]] = o.margin;
                return e
            }

            function c() {
                s = document.createElement("img"), s.id = r + "_jwplayer_logo", s.style.display = "none", s.onload = function (e) {
                    _css(s, l()), d()
                };
                if (!o.file)return;
                o.file.indexOf("http://") === 0 ? s.src = o.file : s.src = o.prefix + o.file
            }

            function h() {
                o.link ? (s.onmouseover = v, s.onmouseout = d, s.onclick = p) : this.mouseEnabled = !1
            }

            function p(e) {
                typeof e != "undefined" && (e.preventDefault(), e.stopPropagation()), o.link && window.open(o.link, o.linktarget);
                return
            }

            function d(e) {
                o.link && (s.style.opacity = o.out);
                return
            }

            function v(e) {
                o.hide && (s.style.opacity = o.over);
                return
            }

            var i = {prefix: "http://l.longtailvideo.com/" + n + "/", file: "", link: "", linktarget: "_top", margin: 8, out: .5, over: 1, timeout: 5, hide: !1, position: "bottom-left"};
            _css = e.utils.css;
            var s, o;
            u();
            if (!o.file)return;
            return s
        }
    }(jwplayer5), function (e) {
        e.html5 = function (t) {
            var n = t;
            return this.setup = function (t) {
                return e.utils.extend(this, new e.html5.api(n, t)), this
            }, this
        }
    }(jwplayer5), function (e) {
        var t = e.utils, n = t.css, r = t.isIOS();
        e.html5.view = function (i, s, o) {
            function L() {
                function e() {
                    return u.skin.getComponentSettings("display") && u.skin.getComponentSettings("display").backgroundcolor ? u.skin.getComponentSettings("display").backgroundcolor : parseInt("000000", 16)
                }

                h = document.createElement("div"), h.id = f.id, h.className = f.className, _videowrapper = document.createElement("div"), _videowrapper.id = h.id + "_video_wrapper", f.id = h.id + "_video", n(h, {position: "relative", height: l.height, width: l.width, padding: 0, backgroundColor: e(), zIndex: 0}), n(f, {width: "100%", height: "100%", top: 0, left: 0, zIndex: 1, margin: "auto", display: "block"}), n(_videowrapper, {overflow: "hidden", position: "absolute", top: 0, left: 0, bottom: 0, right: 0}), t.wrap(f, h), t.wrap(f, _videowrapper), m = document.createElement("div"), m.id = h.id + "_displayarea", h.appendChild(m), _instreamArea = document.createElement("div"), _instreamArea.id = h.id + "_instreamarea", n(_instreamArea, {overflow: "hidden", position: "absolute", top: 0, left: 0, bottom: 0, right: 0, zIndex: 100, background: "000000", display: "none"}), h.appendChild(_instreamArea)
            }

            function A() {
                for (var e = 0; e < l.plugins.order.length; e++) {
                    var n = l.plugins.order[e];
                    t.exists(l.plugins.object[n].getDisplayElement) && (l.plugins.object[n].height = t.parseDimension(l.plugins.object[n].getDisplayElement().style.height), l.plugins.object[n].width = t.parseDimension(l.plugins.object[n].getDisplayElement().style.width), l.plugins.config[n].currentPosition = l.plugins.config[n].position)
                }
                _()
            }

            function O(e) {
                S = l.fullscreen
            }

            function M(t) {
                if (C)return;
                switch (t.newstate) {
                    case e.api.events.state.PLAYING:
                        l.getMedia() && l.getMedia().hasChrome() && (m.style.display = "none");
                        break;
                    default:
                        m.style.display = "block"
                }
                q()
            }

            function _(e) {
                var n = l.getMedia() ? l.getMedia().getDisplayElement() : null;
                if (t.exists(n)) {
                    w != n && (w && w.parentNode && w.parentNode.replaceChild(n, w), w = n);
                    for (var r = 0; r < l.plugins.order.length; r++) {
                        var i = l.plugins.order[r];
                        t.exists(l.plugins.object[i].getDisplayElement) && (l.plugins.config[i].currentPosition = l.plugins.config[i].position)
                    }
                }
                P(l.width, l.height)
            }

            function D(t) {
                switch (t.keyCode) {
                    case 27:
                        u.jwGetFullscreen() && u.jwSetFullscreen(!1);
                        break;
                    case 32:
                        u.jwGetState() != e.api.events.state.IDLE && u.jwGetState() != e.api.events.state.PAUSED ? u.jwPause() : u.jwPlay()
                }
            }

            function P(e, i) {
                if (h.style.display == "none")return;
                var s = [].concat(l.plugins.order);
                s.reverse(), g = s.length + 2;
                if (S && $())try {
                    l.fullscreen && !l.getMedia().getDisplayElement().webkitDisplayingFullscreen && (l.fullscreen = !1)
                } catch (o) {
                }
                if (!l.fullscreen) {
                    p = e, v = i, typeof e == "string" && e.indexOf("%") > 0 ? p = t.getElementWidth(t.parentNode(h)) * parseInt(e.replace("%"), "") / 100 : p = e, typeof i == "string" && i.indexOf("%") > 0 ? v = t.getElementHeight(t.parentNode(h)) * parseInt(i.replace("%"), "") / 100 : v = i;
                    var u = {top: 0, bottom: 0, left: 0, right: 0, width: p, height: v, position: "absolute"};
                    n(m, u);
                    var a = {}, f;
                    try {
                        f = l.plugins.object.display.getDisplayElement()
                    } catch (o) {
                    }
                    f && (a.width = t.parseDimension(f.style.width), a.height = t.parseDimension(f.style.height));
                    var y = t.extend({}, u, a, {zIndex: _instreamArea.style.zIndex, display: _instreamArea.style.display});
                    n(_instreamArea, y), n(h, {height: v, width: p});
                    var w = B(j, s);
                    if (w.length > 0) {
                        g += w.length;
                        var E = w.indexOf("playlist"), N = w.indexOf("controlbar");
                        E >= 0 && N >= 0 && (w[E] = w.splice(N, 1, w[E])[0]), B(F, w, !0)
                    }
                    x = t.getElementWidth(m), T = t.getElementHeight(m)
                } else!$() && !r && B(I, s, !0);
                q()
            }

            function B(r, i, s) {
                H = 0;
                var o = [];
                for (var u = 0; u < i.length; u++) {
                    var f = i[u];
                    if (t.exists(l.plugins.object[f].getDisplayElement))if (l.plugins.config[f].currentPosition != e.html5.view.positions.NONE) {
                        var c = r(f, g--);
                        if (!c)o.push(f); else {
                            var h = c.width, p = c.height;
                            s && (delete c.width, delete c.height), n(l.plugins.object[f].getDisplayElement(), c), l.plugins.object[f].resize(h, p)
                        }
                    } else n(l.plugins.object[f].getDisplayElement(), {display: "none"})
                }
                return o
            }

            function j(e, n) {
                if (t.exists(l.plugins.object[e].getDisplayElement) && l.plugins.config[e].position && V(l.plugins.config[e].position)) {
                    t.exists(l.plugins.object[e].getDisplayElement().parentNode) || h.appendChild(l.plugins.object[e].getDisplayElement());
                    var r = R(e);
                    return r.zIndex = n, r
                }
                return!1
            }

            function F(e, n) {
                return t.exists(l.plugins.object[e].getDisplayElement().parentNode) || m.appendChild(l.plugins.object[e].getDisplayElement()), {position: "absolute", width: t.getElementWidth(m) - t.parseDimension(m.style.right), height: t.getElementHeight(m) - t.parseDimension(m.style.bottom), zIndex: n}
            }

            function I(e, t) {
                return{position: "fixed", width: l.width, height: l.height, zIndex: t}
            }

            function V(t) {
                return[e.html5.view.positions.TOP, e.html5.view.positions.RIGHT, e.html5.view.positions.BOTTOM, e.html5.view.positions.LEFT].toString().indexOf(t.toUpperCase()) > -1
            }

            function $() {
                return u.jwGetState() != e.api.events.state.IDLE && !E && l.getMedia() && l.getMedia().getDisplayElement() && l.getMedia().getDisplayElement().webkitSupportsFullscreen && t.useNativeFullscreen() ? !0 : !1
            }

            var u = i, f = s, l = o, h, p, v, m, g, y, w, E = !1, S = !1, x, T, N, C, k;
            this.setup = function () {
                l && l.getMedia() && (f = l.getMedia().getDisplayElement()), L(), A(), u.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, M), u.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_LOADED, _), u.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_BEFOREPLAY, O), u.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_META, function (e) {
                    q()
                });
                var n;
                t.exists(window.onresize) && (n = window.onresize), window.onresize = function (e) {
                    if (t.exists(n))try {
                        n(e)
                    } catch (r) {
                    }
                    if (u.jwGetFullscreen()) {
                        if (!$()) {
                            var i = t.getBoundingClientRect(document.body);
                            l.width = Math.abs(i.left) + Math.abs(i.right), l.height = window.innerHeight, P(l.width, l.height)
                        }
                    } else P(l.width, l.height)
                }
            };
            var H, q = this.resizeMedia = function () {
                m.style.position = "absolute";
                var i = l.getMedia() ? l.getMedia().getDisplayElement() : k;
                if (!i)return;
                if (i && i.tagName.toLowerCase() == "video") {
                    if (!i.videoWidth || !i.videoHeight) {
                        i.style.width = m.style.width, i.style.height = m.style.height;
                        return
                    }
                    i.style.position = "absolute", t.fadeTo(i, 1, .25), i.parentNode && (i.parentNode.style.left = m.style.left, i.parentNode.style.top = m.style.top);
                    if (l.fullscreen && u.jwGetStretching() == e.utils.stretching.EXACTFIT && !t.isMobile()) {
                        var s = document.createElement("div");
                        t.stretch(e.utils.stretching.UNIFORM, s, t.getElementWidth(m), t.getElementHeight(m), x, T), t.stretch(e.utils.stretching.EXACTFIT, i, t.parseDimension(s.style.width), t.parseDimension(s.style.height), i.videoWidth ? i.videoWidth : 400, i.videoHeight ? i.videoHeight : 300), n(i, {left: s.style.left, top: s.style.top})
                    } else r || t.stretch(u.jwGetStretching(), i, t.getElementWidth(m), t.getElementHeight(m), i.videoWidth ? i.videoWidth : 400, i.videoHeight ? i.videoHeight : 300)
                } else {
                    var o = l.plugins.object.display.getDisplayElement();
                    o ? l.getMedia().resize(t.parseDimension(o.style.width), t.parseDimension(o.style.height)) : l.getMedia().resize(t.parseDimension(m.style.width), t.parseDimension(m.style.height))
                }
            }, R = this.getComponentPosition = function (n) {
                var r = {position: "absolute", margin: 0, padding: 0, top: null}, i = l.plugins.config[n].currentPosition.toLowerCase();
                switch (i.toUpperCase()) {
                    case e.html5.view.positions.TOP:
                        r.top = t.parseDimension(m.style.top), r.left = t.parseDimension(m.style.left), r.width = t.getElementWidth(m) - t.parseDimension(m.style.left) - t.parseDimension(m.style.right), r.height = l.plugins.object[n].height, m.style[i] = t.parseDimension(m.style[i]) + l.plugins.object[n].height + "px", m.style.height = t.getElementHeight(m) - r.height + "px";
                        break;
                    case e.html5.view.positions.RIGHT:
                        r.top = t.parseDimension(m.style.top), r.right = t.parseDimension(m.style.right), r.width = l.plugins.object[n].width, r.height = t.getElementHeight(m) - t.parseDimension(m.style.top) - t.parseDimension(m.style.bottom), m.style.width = t.getElementWidth(m) - r.width + "px";
                        break;
                    case e.html5.view.positions.BOTTOM:
                        r.left = t.parseDimension(m.style.left), r.width = t.getElementWidth(m) - t.parseDimension(m.style.left) - t.parseDimension(m.style.right), r.height = l.plugins.object[n].height, r.bottom = t.parseDimension(m.style.bottom + H), H += r.height, m.style.height = t.getElementHeight(m) - r.height + "px";
                        break;
                    case e.html5.view.positions.LEFT:
                        r.top = t.parseDimension(m.style.top), r.left = t.parseDimension(m.style.left), r.width = l.plugins.object[n].width, r.height = t.getElementHeight(m) - t.parseDimension(m.style.top) - t.parseDimension(m.style.bottom), m.style[i] = t.parseDimension(m.style[i]) + l.plugins.object[n].width + "px", m.style.width = t.getElementWidth(m) - r.width + "px";
                        break;
                    default:
                }
                return r
            };
            this.resize = P;
            var U, z, W, X = this.fullscreen = function (e) {
                if (r)return;
                var i;
                try {
                    i = l.getMedia().getDisplayElement()
                } catch (s) {
                }
                e && (z = l.width, W = l.height);
                var o = {position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: 2147483e3}, u = {position: "relative", height: z, width: W, zIndex: 0};
                if ($() && i && i.webkitSupportsFullscreen) {
                    if (e && !i.webkitDisplayingFullscreen)try {
                        n(i, o), t.transform(i), U = m.style.display, m.style.display = "none", i.webkitEnterFullscreen()
                    } catch (a) {
                    } else if (!e) {
                        n(i, u), q();
                        if (i.webkitDisplayingFullscreen)try {
                            i.webkitExitFullscreen()
                        } catch (a) {
                        }
                        m.style.display = U
                    }
                    E = !1
                } else {
                    if (e) {
                        document.onkeydown = D, clearInterval(y);
                        var f = t.getBoundingClientRect(document.body);
                        l.width = Math.abs(f.left) + Math.abs(f.right), l.height = window.innerHeight, n(h, o), o.zIndex = 1, l.getMedia() && l.getMedia().getDisplayElement() && n(l.getMedia().getDisplayElement(), o), o.zIndex = 2, n(m, o), E = !0
                    } else document.onkeydown = "", l.width = p, l.height = v, n(h, u), E = !1;
                    P(l.width, l.height)
                }
            };
            this.setupInstream = function (e, n) {
                t.css(_instreamArea, {display: "block", position: "absolute"}), m.style.display = "none", _instreamArea.appendChild(e), k = n, C = !0
            };
            var J = this.destroyInstream = function () {
                _instreamArea.style.display = "none", _instreamArea.innerHTML = "", m.style.display = "block", k = null, C = !1, P(l.width, l.height)
            }
        }, e.html5.view.positions = {TOP: "TOP", RIGHT: "RIGHT", BOTTOM: "BOTTOM", LEFT: "LEFT", OVER: "OVER", NONE: "NONE"}
    }(jwplayer5), function (e) {
        var t = {backgroundcolor: "", margin: 10, font: "Arial,sans-serif", fontsize: 10, fontcolor: parseInt("000000", 16), fontstyle: "normal", fontweight: "bold", buttoncolor: parseInt("ffffff", 16), position: e.html5.view.positions.BOTTOM, idlehide: !1, hideplaylistcontrols: !1, forcenextprev: !1, layout: {left: {position: "left", elements: [
            {name: "play", type: "button"},
            {name: "divider", type: "divider"},
            {name: "prev", type: "button"},
            {name: "divider", type: "divider"},
            {name: "next", type: "button"},
            {name: "divider", type: "divider"},
            {name: "elapsed", type: "text"}
        ]}, center: {position: "center", elements: [
            {name: "time", type: "slider"}
        ]}, right: {position: "right", elements: [
            {name: "duration", type: "text"},
            {name: "blank", type: "button"},
            {name: "divider", type: "divider"},
            {name: "mute", type: "button"},
            {name: "volume", type: "slider"},
            {name: "divider", type: "divider"},
            {name: "fullscreen", type: "button"}
        ]}}};
        _utils = e.utils, _css = _utils.css, _hide = function (e) {
            _css(e, {display: "none"})
        }, _show = function (e) {
            _css(e, {display: "block"})
        }, e.html5.controlbar = function (n, r) {
            function M() {
                return x || (x = i.skin.getSkinElement("controlbar", "background"), x || (x = {width: 0, height: 0, src: null})), x
            }

            function _() {
                f = 0, l = 0, u = 0;
                if (!w) {
                    var e = {height: M().height, backgroundColor: s.backgroundcolor};
                    o = document.createElement("div"), o.id = i.id + "_jwplayer_controlbar", _css(o, e)
                }
                var t = i.skin.getSkinElement("controlbar", "capLeft"), n = i.skin.getSkinElement("controlbar", "capRight");
                t && $("capLeft", "left", !1, o), U("background", o, {position: "absolute", height: M().height, left: t ? t.width : 0, zIndex: 0}, "img"), M().src && (y.background.src = M().src), U("elements", o, {position: "relative", height: M().height, zIndex: 1}), n && $("capRight", "right", !1, o)
            }

            function D() {
                var e = ["timeSlider", "volumeSlider", "timeSliderRail", "volumeSliderRail"];
                for (var t in e) {
                    var n = e[t];
                    typeof y[n] != "undefined" && (E[n] = _utils.getBoundingClientRect(y[n]))
                }
            }

            function H(t) {
                if (T)return;
                clearTimeout(N);
                if (s.position == e.html5.view.positions.OVER || i.jwGetFullscreen())switch (i.jwGetState()) {
                    case e.api.events.state.PAUSED:
                    case e.api.events.state.IDLE:
                        o && o.style.opacity < 1 && (!s.idlehide || _utils.exists(t)) && (P = !1, setTimeout(function () {
                            P || j()
                        }, 100)), s.idlehide && (N = setTimeout(function () {
                            B()
                        }, 2e3));
                        break;
                    default:
                        P = !0, t && j(), N = setTimeout(function () {
                            B()
                        }, 2e3)
                } else j()
            }

            function B() {
                T || (q(), o.style.opacity == 1 && (_utils.cancelAnimation(o), _utils.fadeTo(o, 0, .1, 1, 0)))
            }

            function j() {
                T || (I(), o.style.opacity == 0 && (_utils.cancelAnimation(o), _utils.fadeTo(o, 1, .1, 0, 0)))
            }

            function F(e) {
                return function () {
                    k && C != e && (C = e, O.sendEvent(e, {component: "controlbar", boundingRect: R()}))
                }
            }

            function R() {
                return s.position == e.html5.view.positions.OVER || i.jwGetFullscreen() ? _utils.getDimensions(o) : {x: 0, y: 0, width: 0, height: 0}
            }

            function U(e, t, n, r) {
                var i;
                return w ? i = document.getElementById(o.id + "_" + e) : (r || (r = "div"), i = document.createElement(r), y[e] = i, i.id = o.id + "_" + e, t.appendChild(i)), _utils.exists(n) && _css(i, n), i
            }

            function z() {
                if (i.jwGetHeight() <= 40) {
                    s.layout = _utils.clone(s.layout);
                    for (var e = 0; e < s.layout.left.elements.length; e++)s.layout.left.elements[e].name == "fullscreen" && s.layout.left.elements.splice(e, 1);
                    for (e = 0; e < s.layout.right.elements.length; e++)s.layout.right.elements[e].name == "fullscreen" && s.layout.right.elements.splice(e, 1);
                    ot()
                }
                W(s.layout.left), W(s.layout.center), W(s.layout.right)
            }

            function W(e, t) {
                var n = e.position == "right" ? "right" : "left", r = _utils.extend([], e.elements);
                _utils.exists(t) && r.reverse();
                var e = U(e.position + "Group", y.elements, {"float": "left", styleFloat: "left", cssFloat: "left", height: "100%"});
                for (var i = 0; i < r.length; i++)V(r[i], n, e)
            }

            function X() {
                return u++
            }

            function V(e, t, n) {
                var r, s, o, u, a;
                n || (n = y.elements);
                if (e.type == "divider") {
                    $("divider" + X(), t, !0, n, undefined, e.width, e.element);
                    return
                }
                switch (e.name) {
                    case"play":
                        $("playButton", t, !1, n), $("pauseButton", t, !0, n), Y("playButton", "jwPlay"), Y("pauseButton", "jwPause");
                        break;
                    case"prev":
                        $("prevButton", t, !0, n), Y("prevButton", "jwPlaylistPrev");
                        break;
                    case"stop":
                        $("stopButton", t, !0, n), Y("stopButton", "jwStop");
                        break;
                    case"next":
                        $("nextButton", t, !0, n), Y("nextButton", "jwPlaylistNext");
                        break;
                    case"elapsed":
                        $("elapsedText", t, !0, n, null, null, i.skin.getSkinElement("controlbar", "elapsedBackground"));
                        break;
                    case"time":
                        s = _utils.exists(i.skin.getSkinElement("controlbar", "timeSliderCapLeft")) ? i.skin.getSkinElement("controlbar", "timeSliderCapLeft").width : 0, o = _utils.exists(i.skin.getSkinElement("controlbar", "timeSliderCapRight")) ? i.skin.getSkinElement("controlbar", "timeSliderCapRight").width : 0, r = t == "left" ? s : o, a = {height: M().height, position: "relative", "float": "left", styleFloat: "left", cssFloat: "left"};
                        var f = U("timeSlider", n, a);
                        $("timeSliderCapLeft", t, !0, f, "relative"), $("timeSliderRail", t, !1, f, "relative"), $("timeSliderBuffer", t, !1, f, "absolute"), $("timeSliderProgress", t, !1, f, "absolute"), $("timeSliderThumb", t, !1, f, "absolute"), $("timeSliderCapRight", t, !0, f, "relative"), Z("time");
                        break;
                    case"fullscreen":
                        $("fullscreenButton", t, !1, n), $("normalscreenButton", t, !0, n), Y("fullscreenButton", "jwSetFullscreen", !0), Y("normalscreenButton", "jwSetFullscreen", !1);
                        break;
                    case"volume":
                        s = _utils.exists(i.skin.getSkinElement("controlbar", "volumeSliderCapLeft")) ? i.skin.getSkinElement("controlbar", "volumeSliderCapLeft").width : 0, o = _utils.exists(i.skin.getSkinElement("controlbar", "volumeSliderCapRight")) ? i.skin.getSkinElement("controlbar", "volumeSliderCapRight").width : 0, r = t == "left" ? s : o, u = i.skin.getSkinElement("controlbar", "volumeSliderRail").width + s + o, a = {height: M().height, position: "relative", width: u, "float": "left", styleFloat: "left", cssFloat: "left"};
                        var l = U("volumeSlider", n, a);
                        $("volumeSliderCapLeft", t, !1, l, "relative"), $("volumeSliderRail", t, !1, l, "relative"), $("volumeSliderProgress", t, !1, l, "absolute"), $("volumeSliderThumb", t, !1, l, "absolute"), $("volumeSliderCapRight", t, !1, l, "relative"), Z("volume");
                        break;
                    case"mute":
                        $("muteButton", t, !1, n), $("unmuteButton", t, !0, n), Y("muteButton", "jwSetMute", !0), Y("unmuteButton", "jwSetMute", !1);
                        break;
                    case"duration":
                        $("durationText", t, !0, n, null, null, i.skin.getSkinElement("controlbar", "durationBackground"))
                }
            }

            function $(e, t, n, r, o, u, a) {
                if (_utils.exists(i.skin.getSkinElement("controlbar", e)) || e.indexOf("Text") > 0 || e.indexOf("divider") === 0) {
                    var c = {height: "100%", position: o ? o : "relative", display: "block", "float": "left", styleFloat: "left", cssFloat: "left"};
                    (e.indexOf("next") === 0 || e.indexOf("prev") === 0) && (i.jwGetPlaylist().length < 2 || s.hideplaylistcontrols.toString() == "true") && s.forcenextprev.toString() != "true" && (n = !1, c.display = "none");
                    var h;
                    if (e.indexOf("Text") > 0)e.innerhtml = "00:00", c.font = s.fontsize + "px/" + (M().height + 1) + "px " + s.font, c.color = s.fontcolor, c.textAlign = "center", c.fontWeight = s.fontweight, c.fontStyle = s.fontstyle, c.cursor = "default", a && (c.background = "url(" + a.src + ") no-repeat center", c.backgroundSize = "100% " + M().height + "px"), c.padding = "0 5px"; else if (e.indexOf("divider") === 0)if (u)isNaN(parseInt(u)) || (h = parseInt(u)); else if (a) {
                        var p = i.skin.getSkinElement("controlbar", a);
                        p && (c.background = "url(" + p.src + ") repeat-x center left", h = p.width)
                    } else c.background = "url(" + i.skin.getSkinElement("controlbar", "divider").src + ") repeat-x center left", h = i.skin.getSkinElement("controlbar", "divider").width; else c.background = "url(" + i.skin.getSkinElement("controlbar", e).src + ") repeat-x center left", h = i.skin.getSkinElement("controlbar", e).width;
                    t == "left" ? n && (f += h) : t == "right" && n && (l += h), _utils.typeOf(r) == "undefined" && (r = y.elements), c.width = h;
                    if (w)_css(y[e], c); else {
                        var d = U(e, r, c);
                        _utils.exists(i.skin.getSkinElement("controlbar", e + "Over")) && (d.onmouseover = function (t) {
                            d.style.backgroundImage = ["url(", i.skin.getSkinElement("controlbar", e + "Over").src, ")"].join("")
                        }, d.onmouseout = function (t) {
                            d.style.backgroundImage = ["url(", i.skin.getSkinElement("controlbar", e).src, ")"].join("")
                        }), e.indexOf("divider") == 0 && d.setAttribute("class", "divider"), d.innerHTML = "&nbsp;"
                    }
                }
            }

            function J() {
                i.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, K), i.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, Q), i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_BUFFER, tt), i.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, rt), i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_TIME, st), i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_MUTE, nt), i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_VOLUME, ft), i.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_COMPLETE, it)
            }

            function K() {
                s.hideplaylistcontrols || (i.jwGetPlaylist().length > 1 || s.forcenextprev.toString() == "true" ? (_show(y.nextButton), _show(y.prevButton)) : (_hide(y.nextButton), _hide(y.prevButton)), at(), G())
            }

            function Q(e) {
                d = i.jwGetPlaylist()[e.index].duration, S = -1, st({id: i.id, duration: d, position: 0}), tt({id: i.id, bufferProgress: 0})
            }

            function G() {
                st({id: i.id, duration: i.jwGetDuration(), position: 0}), tt({id: i.id, bufferProgress: 0}), nt({id: i.id, mute: i.jwGetMute()}), rt({id: i.id, newstate: e.api.events.state.IDLE}), ft({id: i.id, volume: i.jwGetVolume()})
            }

            function Y(e, t, n) {
                if (w)return;
                if (_utils.exists(i.skin.getSkinElement("controlbar", e))) {
                    var r = y[e];
                    _utils.exists(r) && (_css(r, {cursor: "pointer"}), t == "fullscreen" ? r.onmouseup = function (e) {
                        e.stopPropagation(), i.jwSetFullscreen(!i.jwGetFullscreen())
                    } : r.onmouseup = function (e) {
                        e.stopPropagation(), _utils.exists(n) ? i[t](n) : i[t]()
                    })
                }
            }

            function Z(e) {
                if (w)return;
                var t = y[e + "Slider"];
                _css(y.elements, {cursor: "pointer"}), _css(t, {cursor: "pointer"}), t.onmousedown = function (t) {
                    c = e
                }, t.onmouseup = function (e) {
                    e.stopPropagation(), et(e.pageX)
                }, t.onmousemove = function (t) {
                    if (c == "time") {
                        h = !0;
                        var n = t.pageX - E[e + "Slider"].left - window.pageXOffset;
                        _css(y[c + "SliderThumb"], {left: n})
                    }
                }
            }

            function et(t) {
                h = !1;
                var n;
                if (c == "time") {
                    n = t - E.timeSliderRail.left + window.pageXOffset;
                    var r = n / E.timeSliderRail.width * d;
                    r < 0 ? r = 0 : r > d && (r = d - 3), (i.jwGetState() == e.api.events.state.PAUSED || i.jwGetState() == e.api.events.state.IDLE) && i.jwPlay(), i.jwSeek(r)
                } else if (c == "volume") {
                    n = t - E.volumeSliderRail.left - window.pageXOffset;
                    var s = Math.round(n / E.volumeSliderRail.width * 100);
                    s < 10 ? s = 0 : s > 100 && (s = 100), i.jwGetMute() && i.jwSetMute(!1), i.jwSetVolume(s)
                }
                c = "none"
            }

            function tt(e) {
                _utils.exists(e.bufferPercent) && (v = e.bufferPercent);
                if (E.timeSliderRail) {
                    var t = i.skin.getSkinElement("controlbar", "timeSliderCapLeft"), n = E.timeSliderRail.width, r = isNaN(Math.round(n * v / 100)) ? 0 : Math.round(n * v / 100);
                    _css(y.timeSliderBuffer, {width: r, left: t ? t.width : 0})
                }
            }

            function nt(e) {
                e.mute ? (_hide(y.muteButton), _show(y.unmuteButton), _hide(y.volumeSliderProgress)) : (_show(y.muteButton), _hide(y.unmuteButton), _show(y.volumeSliderProgress))
            }

            function rt(t) {
                t.newstate == e.api.events.state.BUFFERING || t.newstate == e.api.events.state.PLAYING ? (_show(y.pauseButton), _hide(y.playButton)) : (_hide(y.pauseButton), _show(y.playButton)), H(), t.newstate == e.api.events.state.IDLE ? (_hide(y.timeSliderBuffer), _hide(y.timeSliderProgress), _hide(y.timeSliderThumb), st({id: i.id, duration: i.jwGetDuration(), position: 0})) : (_show(y.timeSliderBuffer), t.newstate != e.api.events.state.BUFFERING && (_show(y.timeSliderProgress), _show(y.timeSliderThumb)))
            }

            function it(e) {
                tt({bufferPercent: 0}), st(_utils.extend(e, {position: 0, duration: d}))
            }

            function st(e) {
                _utils.exists(e.position) && (p = e.position);
                var t = !1;
                _utils.exists(e.duration) && e.duration != d && (d = e.duration, t = !0);
                var n = p === d === 0 ? 0 : p / d, r = E.timeSliderRail;
                if (r) {
                    var s = isNaN(Math.round(r.width * n)) ? 0 : Math.round(r.width * n), o = i.skin.getSkinElement("controlbar", "timeSliderCapLeft"), u = s + (o ? o.width : 0);
                    y.timeSliderProgress && (_css(y.timeSliderProgress, {width: s, left: o ? o.width : 0}), h || y.timeSliderThumb && (y.timeSliderThumb.style.left = u + "px"))
                }
                y.durationText && (y.durationText.innerHTML = _utils.timeFormat(d));
                if (y.elapsedText) {
                    var a = _utils.timeFormat(p);
                    y.elapsedText.innerHTML = a, S != a.length && (t = !0, S = a.length)
                }
                t && at()
            }

            function ot() {
                var e = y.elements.childNodes, t, n;
                for (var r = 0; r < e.length; r++) {
                    var i = e[r].childNodes;
                    for (var s in i) {
                        if (isNaN(parseInt(s, 10)))continue;
                        i[s].id.indexOf(o.id + "_divider") === 0 && n && n.id.indexOf(o.id + "_divider") === 0 && i[s].style.backgroundImage == n.style.backgroundImage ? i[s].style.display = "none" : i[s].id.indexOf(o.id + "_divider") === 0 && t && t.style.display != "none" && (i[s].style.display = "block"), i[s].style.display != "none" && (n = i[s]), t = i[s]
                    }
                }
            }

            function ut() {
                i.jwGetFullscreen() ? (_show(y.normalscreenButton), _hide(y.fullscreenButton)) : (_hide(y.normalscreenButton), _show(y.fullscreenButton)), i.jwGetState() == e.api.events.state.BUFFERING || i.jwGetState() == e.api.events.state.PLAYING ? (_show(y.pauseButton), _hide(y.playButton)) : (_hide(y.pauseButton), _show(y.playButton)), i.jwGetMute() == 1 ? (_hide(y.muteButton), _show(y.unmuteButton), _hide(y.volumeSliderProgress)) : (_show(y.muteButton), _hide(y.unmuteButton), _show(y.volumeSliderProgress))
            }

            function at() {
                ot(), ut();
                var t = {width: m}, n = {"float": "left", styleFloat: "left", cssFloat: "left"};
                if (s.position == e.html5.view.positions.OVER || i.jwGetFullscreen())t.left = s.margin, t.width -= 2 * s.margin, t.top = g - M().height - s.margin, t.height = M().height;
                var r = i.skin.getSkinElement("controlbar", "capLeft"), u = i.skin.getSkinElement("controlbar", "capRight");
                n.width = t.width - (r ? r.width : 0) - (u ? u.width : 0);
                var f = _utils.getBoundingClientRect(y.leftGroup).width, l = _utils.getBoundingClientRect(y.rightGroup).width, c = n.width - f - l - 1, h = c, p = i.skin.getSkinElement("controlbar", "timeSliderCapLeft"), d = i.skin.getSkinElement("controlbar", "timeSliderCapRight");
                return _utils.exists(p) && (h -= p.width), _utils.exists(d) && (h -= d.width), y.timeSlider.style.width = c + "px", y.timeSliderRail.style.width = h + "px", _css(o, t), _css(y.elements, n), _css(y.background, n), D(), t
            }

            function ft(e) {
                if (_utils.exists(y.volumeSliderRail)) {
                    var t = isNaN(e.volume / 100) ? 1 : e.volume / 100, n = _utils.parseDimension(y.volumeSliderRail.style.width), r = isNaN(Math.round(n * t)) ? 0 : Math.round(n * t), s = _utils.parseDimension(y.volumeSliderRail.style.right), o = _utils.exists(i.skin.getSkinElement("controlbar", "volumeSliderCapLeft")) ? i.skin.getSkinElement("controlbar", "volumeSliderCapLeft").width : 0;
                    _css(y.volumeSliderProgress, {width: r, left: o});
                    if (y.volumeSliderThumb) {
                        var u = r - Math.round(_utils.parseDimension(y.volumeSliderThumb.style.width) / 2);
                        u = Math.min(Math.max(u, 0), n - _utils.parseDimension(y.volumeSliderThumb.style.width)), _css(y.volumeSliderThumb, {left: u})
                    }
                    _utils.exists(y.volumeSliderCapLeft) && _css(y.volumeSliderCapLeft, {left: 0})
                }
            }

            function lt() {
                try {
                    var e = i.id.indexOf("_instream") > 0 ? i.id.replace("_instream", "") : i.id;
                    A = document.getElementById(e), A.addEventListener("mousemove", H)
                } catch (t) {
                    _utils.log("Could not add mouse listeners to controlbar: " + t)
                }
            }

            function ct() {
                _(), z(), D(), w = !0, J(), s.idlehide = s.idlehide.toString().toLowerCase() == "true", s.position == e.html5.view.positions.OVER && s.idlehide ? (o.style.opacity = 0, k = !0) : (o.style.opacity = 1, setTimeout(function () {
                    k = !0, I()
                }, 1)), lt(), G()
            }

            window.controlbar = this;
            var i = n, s = _utils.extend({}, t, i.skin.getComponentSettings("controlbar"), r);
            if (s.position == e.html5.view.positions.NONE || typeof e.html5.view.positions[s.position] == "undefined")return;
            _utils.mapLength(i.skin.getComponentLayout("controlbar")) > 0 && (s.layout = i.skin.getComponentLayout("controlbar"));
            var o, u, f, l, c = "none", h, p, d, v, m, g, y = {}, w = !1, E = {}, S = -1, x, T = !1, N, C, k = !1, L = !1, A, O = new e.html5.eventdispatcher;
            _utils.extend(this, O), this.getDisplayElement = function () {
                return o
            }, this.resize = function (e, t) {
                lt(), _utils.cancelAnimation(o), m = e, g = t, L != i.jwGetFullscreen() && (L = i.jwGetFullscreen(), L || H(), C = undefined);
                var n = at();
                return st({id: i.id, duration: d, position: p}), tt({id: i.id, bufferPercent: v}), n
            }, this.show = function () {
                T && (T = !1, _show(o), I())
            }, this.hide = function () {
                T || (T = !0, _hide(o), q())
            };
            var P, I = F(e.api.events.JWPLAYER_COMPONENT_SHOW), q = F(e.api.events.JWPLAYER_COMPONENT_HIDE);
            return ct(), this
        }
    }(jwplayer5), function (e) {
        var t = ["width", "height", "state", "playlist", "item", "position", "buffer", "duration", "volume", "mute", "fullscreen"], n = e.utils;
        e.html5.controller = function (t, r, s, o) {
            function S(e) {
                y ? E.sendEvent(e.type, e) : g.push(e)
            }

            function x(t) {
                if (!y) {
                    y = !0, E.sendEvent(e.api.events.JWPLAYER_READY, t), e.utils.exists(window.playerReady) && playerReady(t), e.utils.exists(window[s.config.playerReady]) && window[s.config.playerReady](t);
                    while (g.length > 0) {
                        var n = g.shift();
                        E.sendEvent(n.type, n)
                    }
                    s.config.autostart && !e.utils.isIOS() && F();
                    while (z.length > 0) {
                        var r = z.shift();
                        X(r.method, r.arguments)
                    }
                }
            }

            function T() {
                try {
                    m = T;
                    if (!d) {
                        d = !0, E.sendEvent(e.api.events.JWPLAYER_MEDIA_BEFOREPLAY), d = !1;
                        if (v) {
                            v = !1, m = null;
                            return
                        }
                    }
                    return _(a.item), a.playlist[a.item].levels[0].file.length > 0 && (h || a.state == e.api.events.state.IDLE ? (a.getMedia().load(a.playlist[a.item]), h = !1) : a.state == e.api.events.state.PAUSED && a.getMedia().play()), !0
                } catch (t) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, t), m = null
                }
                return!1
            }

            function N() {
                try {
                    if (a.playlist[a.item].levels[0].file.length > 0)switch (a.state) {
                        case e.api.events.state.PLAYING:
                        case e.api.events.state.BUFFERING:
                            a.getMedia() && a.getMedia().pause();
                            break;
                        default:
                            d && (v = !0)
                    }
                    return!0
                } catch (t) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, t)
                }
                return!1
            }

            function C(t) {
                try {
                    if (a.playlist[a.item].levels[0].file.length > 0) {
                        typeof t != "number" && (t = parseFloat(t));
                        switch (a.state) {
                            case e.api.events.state.IDLE:
                                p < 0 && (p = a.playlist[a.item].start, a.playlist[a.item].start = t), d || T();
                                break;
                            case e.api.events.state.PLAYING:
                            case e.api.events.state.PAUSED:
                            case e.api.events.state.BUFFERING:
                                a.seek(t)
                        }
                    }
                    return!0
                } catch (n) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, n)
                }
                return!1
            }

            function k(t) {
                m = null, n.exists(t) || (t = !0);
                try {
                    return(a.state != e.api.events.state.IDLE || t) && a.getMedia() && a.getMedia().stop(t), d && (v = !0), !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return!1
            }

            function L() {
                try {
                    a.playlist[a.item].levels[0].file.length > 0 && (a.config.shuffle ? _(O()) : a.item + 1 == a.playlist.length ? _(0) : _(a.item + 1));
                    if (a.state != e.api.events.state.IDLE) {
                        var t = a.state;
                        a.state = e.api.events.state.IDLE, E.sendEvent(e.api.events.JWPLAYER_PLAYER_STATE, {oldstate: t, newstate: e.api.events.state.IDLE})
                    }
                    return T(), !0
                } catch (n) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, n)
                }
                return!1
            }

            function A() {
                try {
                    a.playlist[a.item].levels[0].file.length > 0 && (a.config.shuffle ? _(O()) : a.item === 0 ? _(a.playlist.length - 1) : _(a.item - 1));
                    if (a.state != e.api.events.state.IDLE) {
                        var t = a.state;
                        a.state = e.api.events.state.IDLE, E.sendEvent(e.api.events.JWPLAYER_PLAYER_STATE, {oldstate: t, newstate: e.api.events.state.IDLE})
                    }
                    return T(), !0
                } catch (n) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, n)
                }
                return!1
            }

            function O() {
                var e = null;
                if (a.playlist.length > 1)while (!n.exists(e))e = Math.floor(Math.random() * a.playlist.length), e == a.item && (e = null); else e = 0;
                return e
            }

            function M(t) {
                if (!a.playlist || !a.playlist[t])return!1;
                try {
                    if (a.playlist[t].levels[0].file.length > 0) {
                        var n = a.state;
                        n !== e.api.events.state.IDLE && (a.playlist[a.item] && a.playlist[a.item].provider == a.playlist[t].provider ? k(!1) : k()), _(t), T()
                    }
                    return!0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return!1
            }

            function _(t) {
                if (!a.playlist[t])return;
                a.setActiveMediaProvider(a.playlist[t]), a.item != t && (a.item = t, h = !0, E.sendEvent(e.api.events.JWPLAYER_PLAYLIST_ITEM, {index: t}))
            }

            function D(t) {
                try {
                    _(a.item);
                    var n = a.getMedia();
                    switch (typeof t) {
                        case"number":
                            n.volume(t);
                            break;
                        case"string":
                            n.volume(parseInt(t, 10))
                    }
                    return a.setVolume(t), !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return!1
            }

            function P(t) {
                try {
                    _(a.item);
                    var n = a.getMedia();
                    return typeof t == "undefined" ? (n.mute(!a.mute), a.setMute(!a.mute)) : t.toString().toLowerCase() == "true" ? (n.mute(!0), a.setMute(!0)) : (n.mute(!1), a.setMute(!1)), !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return!1
            }

            function H(t, n) {
                try {
                    return a.width = t, a.height = n, f.resize(t, n), E.sendEvent(e.api.events.JWPLAYER_RESIZE, {width: a.width, height: a.height}), !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return!1
            }

            function B(t, n) {
                try {
                    return typeof t == "undefined" && (t = !a.fullscreen), typeof n == "undefined" && (n = !0), t != a.fullscreen && (a.fullscreen = t.toString().toLowerCase() == "true", f.fullscreen(a.fullscreen), n && E.sendEvent(e.api.events.JWPLAYER_FULLSCREEN, {fullscreen: a.fullscreen}), E.sendEvent(e.api.events.JWPLAYER_RESIZE, {width: a.width, height: a.height})), !0
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return!1
            }

            function j(t) {
                try {
                    return k(), d && (v = !1), a.loadPlaylist(t), a.playlist[a.item].provider ? (_(a.item), a.config.autostart.toString().toLowerCase() == "true" && !n.isIOS() && !d && T(), !0) : !1
                } catch (r) {
                    E.sendEvent(e.api.events.JWPLAYER_ERROR, r)
                }
                return!1
            }

            function F(e) {
                n.isIOS() || (_(a.item), a.config.autostart.toString().toLowerCase() == "true" && !n.isIOS() && T())
            }

            function I(e) {
                B(e.fullscreen, !1)
            }

            function q() {
                try {
                    return a.getMedia().detachMedia()
                } catch (e) {
                    return null
                }
            }

            function R() {
                try {
                    var e = a.getMedia().attachMedia();
                    typeof m == "function" && m()
                } catch (t) {
                    return null
                }
            }

            function U() {
                if (a.state != e.api.events.state.IDLE)return;
                m = U;
                switch (a.config.repeat.toUpperCase()) {
                    case e.html5.controller.repeatoptions.SINGLE:
                        T();
                        break;
                    case e.html5.controller.repeatoptions.ALWAYS:
                        a.item == a.playlist.length - 1 && !a.config.shuffle ? M(0) : L();
                        break;
                    case e.html5.controller.repeatoptions.LIST:
                        a.item == a.playlist.length - 1 && !a.config.shuffle ? (k(), _(0)) : L();
                        break;
                    default:
                        k()
                }
            }

            function W(e) {
                return function () {
                    y ? X(e, arguments) : z.push({method: e, arguments: arguments})
                }
            }

            function X(e, t) {
                var n = [];
                for (i = 0; i < t.length; i++)n.push(t[i]);
                e.apply(this, n)
            }

            var u = t, a = s, f = o, l = r, h = !0, p = -1, d = !1, v = !1, m, g = [], y = !1, w = n.exists(a.config.debug) && a.config.debug.toString().toLowerCase() == "console", E = new e.html5.eventdispatcher(l.id, w);
            n.extend(this, E), a.addGlobalListener(S), a.addEventListener(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL, function () {
                a.getMedia().play()
            }), a.addEventListener(e.api.events.JWPLAYER_MEDIA_TIME, function (e) {
                e.position >= a.playlist[a.item].start && p >= 0 && (a.playlist[a.item].start = p, p = -1)
            }), a.addEventListener(e.api.events.JWPLAYER_MEDIA_COMPLETE, function (e) {
                setTimeout(U, 25)
            }), a.addEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, F), a.addEventListener(e.api.events.JWPLAYER_FULLSCREEN, I), e.html5.controller.repeatoptions = {LIST: "LIST", ALWAYS: "ALWAYS", SINGLE: "SINGLE", NONE: "NONE"};
            var z = [];
            this.play = W(T), this.pause = W(N), this.seek = W(C), this.stop = W(k), this.next = W(L), this.prev = W(A), this.item = W(M), this.setVolume = W(D), this.setMute = W(P), this.resize = W(H), this.setFullscreen = W(B), this.load = W(j), this.playerReady = x, this.detachMedia = q, this.attachMedia = R, this.beforePlay = function () {
                return d
            }, this.destroy = function () {
                a.getMedia() && a.getMedia().destroy()
            }
        }
    }(jwplayer5), function (e) {
        e.html5.defaultSkin = function () {
            return this.text = '<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.1"><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/><setting name="fontcolor" value="0x000000"/></settings><layout><group position="left"><button name="play"/><divider name="divider"/><button name="prev"/><divider name="divider"/><button name="next"/><divider name="divider"/><text name="elapsed"/></group><group position="center"><slider name="time"/></group><group position="right"><text name="duration"/><divider name="divider"/><button name="blank"/><divider name="divider"/><button name="mute"/><slider name="volume"/><divider name="divider"/><button name="fullscreen"/></group></layout><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUOI3t1LERACAMQlFgGvcfxNIhHMK4gsUvUviOmgtNsiAZkBSEKxKEnCYkkQrJn/YwbUNiSDDYRZaQRDaShv+oX9GBZEIuK+8hXVLs+/YAAAAASUVORK5CYII="/><element name="blankButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUCB0FwcENgEAAw7Aq+893g8APUILNOQcbFRktVGqUVFRkWNz3xTa2sUaLNUosKlRUvvf5AdbWOTtzmzyWAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAANUlEQVR42u2RsQkAAAjD/NTTPaW6dXLrINJA1kBpGPMAjDWmOgp1HFQXx+b1KOefO4oxY57R73YnVYCQUCQAAAAASUVORK5CYII="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAIUlEQVQ4jWNgGAWjYOiD/0gYG3/U0FFDB4Oho2AUDAYAAEwiL9HrpdMVAAAAAElFTkSuQmCC"/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQklEQVQ4y2NgGAWjYOiD/1AMA/JAfB5NjCJD/YH4PRaLyDa0H4lNNUP/DxlD59PCUBCIp3ZEwYA+NZLUKBgFgwEAAN+HLX9sB8u8AAAAAElFTkSuQmCC"/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQElEQVQ4y2NgGAWjYOiD/0B8Hojl0cT+U2ooCL8HYn9qGwrD/bQw9P+QMXQ+tSMqnpoRBUpS+tRMUqNgFAwGAADxZy1/mHvFnAAAAABJRU5ErkJggg=="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOElEQVRIDe3BwQkAIRADwAhhw/nU/kWwUK+KPITMABFh19Y+F0acY8CJvX9wYpXgRElwolSIiMf9ZWEDhtwurFsAAAAASUVORK5CYII="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAN0lEQVRIDe3BwQkAMQwDMBcc55mRe9zi7RR+FCwBEWG39vcfGHFm4MTuhhMlwYlVBSdKhYh43AW/LQMKm1spzwAAAABJRU5ErkJggg=="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAIElEQVRIiWNgGAWjYBTQBfynMR61YCRYMApGwSigMQAAiVWPcbq6UkIAAAAASUVORK5CYII="/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAYCAYAAAA/OUfnAAAAO0lEQVQYlWP4//8/Awwz0JgDBP/BeN6Cxf/hnI2btiI4u/fsQ3AOHjqK4Jw4eQbBOX/hEoKDYjSd/AMA4cS4mfLsorgAAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJklEQVQ4y2NgGAUjDcwH4v/kaPxPikZkxcNVI9mBQ5XoGAWDFwAAsKAXKQQmfbUAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAMklEQVQ4y2NgGAWDHPyntub5xBr6Hwv/Pzk2/yfVG/8psRFE25Oq8T+tQnsIaB4FVAcAi2YVysVY52AAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAACmpqampqbBXAu8AAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderCapRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQklEQVRIiWNgGAWjYMiD/0iYFDmSLbDHImdPLQtgBpEiR7Zl2NijAA5oEkT/0Whi5UiyAJ8BVMsHNMtoo2AUDAIAAGdcIN3IDNXoAAAAAElFTkSuQmCC"/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAP0lEQVRIx2NgGAWjYMiD/1RSQ5QB/wmIUWzJfzx8qhj+n4DYCAY0DyJ7PBbYU8sHMEvwiZFtODXUjIJRMJgBACpWIN2ZxdPTAAAAAElFTkSuQmCC"/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAiUlEQVR42u3XSw2AMBREURwgAQlIQAISKgUpSEFKJeCg5b0E0kWBTVcD9ySTsL0Jn9IBAAAA+K2UUrBlW/Rr5ZDoIeeuoFkxJD9ss03aIXXQqB9SttoG7ZA6qNcOKdttiwcJh9RB+iFl4SshkRBuLR72+9cvH0SOKI2HRo7x/Fi1/uoCAAAAwLsD8ki99IlO2dQAAAAASUVORK5CYII="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAVUlEQVR42u3WMQrAIAxAUW/g/SdvGmvpoOBeSHgPsjj5QTANAACARCJilIhYM0tEvJM+Ik3Id9E957kQIb+F3OdCPC0hPkQriqWx9hp/x/QGAABQyAPLB22VGrpLDgAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAA/0lEQVR42u2U0QmEMBAF7cASLMESUoIlpARLSCkpwRJSgiWkhOvAXD4WsgRkyaG5DbyB+Yvg8KITAAAAAAAYk+u61mwk15EjPtlEfihmqIiZR1Qx80ghjgdUuiHXGHSVsoag0x6x8DUoyjD5KovmEJ9NTDMRPIT0mtdIUkjlonuNohO+Ha99DTmkuGgKCTcvebAzx82ZoCWC3/3aIMWSRucaxcjORSFY4xpFdjYJGp1rFGcyCYZ/RVh6AUnfcNZ2zih3/mGj1jVCdiNDwyrq1rA/xMdeEXvDVdnYc1vDc3uPkDObXrlaxbNHSOohQhr/WOeLEWfWTgAAAAAAADzNF9sHJ7PJ57MlAAAAAElFTkSuQmCC"/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACBklEQVR42u3Zv0sCYRzH8USTzOsHHEWGkC1HgaDgkktGDjUYtDQ01RDSljQ1BLU02+rk1NTm2NLq4Nx/0L/h9fnCd3j4cnZe1/U8xiO8h3uurufF0/3COd/3/0UWYiEWYiEWYiGJQ+J8xuPxKhXjEMZANinjIZhkGuVRNioE4wVURo4JkHm0xKWmhRAc1bh1EyCUw5BcBIjHiApKa4CErko6DEJwuRo6IRKzyJD8FJAyI3Zp2zRImiBcRhlfo5RtlxCcE3CcDNpGrhYIT2IhAJKilO0VRmzJ32fAMTpBTS0QMfGwlcuKMRftE0DJ0wCJdcOsCkBdXP3Mh9CEFUBTPS9mDZJBG6io4aqVzMdCokCw9H3kT6j/C/9iDdSeUMNC7DkyyxAs/Rk6Qss8FPWRZgdVtUH4DjxEn1zxh+/zj1wHlf4MQhNGrwqA6sY40U8JonRJwEQh+AO3AvCG6gHv4U7IY4krxkroWoAOkoQMGfCBrgIm+YBGqPENpIJ66CJg3x66Y0gnSUidAEEnNr9jjLiWMn5DiWP0OC/oAsCgkq43xBdGDMQr7YASP/vEkHvdl1+JOCcEV5sC4hGEOzTlPuKgd0b0xD4JkRcOgnRRTjdErkYhAsQVq6IdUuPJtmk7BCL3t/h88cx91pKQkI/pkDx6pmYTIjEoxiHsN1YWYiEWYiEWknhflZ5IErA5nr8AAAAASUVORK5CYII="/></elements></component><component name="dock"><settings><setting name="fontcolor" value="0xffffff"/></settings><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/></elements></component><component name="playlist"><settings><setting name="backgroundcolor" value="0xe8e8e8"/></settings><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUaN7t2MENwCAMBEEe9N8wSKYC/D8YV7CyJoRkVtVImxkZPQInMxoP0XiIxkM0HsGbjjSNBx544IEHHnjggUe/6UQeey0PIh7XTftGxKPj4eXCtLsHHh+ZxkO0Iw8PR55Ni8ZD9Hu/EAoP0dc5RRg9qeRjVF8AAAAASUVORK5CYII="/><element name="sliderCapTop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAKElEQVQ4y2P4//8/Az68bNmy/+iYkB6GUUNHDR01dNTQUUNHDaXcUABUDOKhcxnsSwAAAABJRU5ErkJggg=="/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAJUlEQVQ4T2P4//8/Ay4MBP9xYbz6Rg0dNXTU0FFDRw0dNZRyQwHH4NBa7GJsXAAAAABJRU5ErkJggg=="/><element name="sliderCapBottom" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/></elements></component></components></skin>', this.xml = null, window.DOMParser ? (parser = new DOMParser, this.xml = parser.parseFromString(this.text, "text/xml")) : (this.xml = new ActiveXObject("Microsoft.XMLDOM"), this.xml.async = "false", this.xml.loadXML(this.text)), this
        }
    }(jwplayer5), function (e) {
        _utils = e.utils, _css = _utils.css, _hide = function (e) {
            _css(e, {display: "none"})
        }, _show = function (e) {
            _css(e, {display: "block"})
        }, e.html5.display = function (t, n) {
            function M() {
                o.display = P("div", "display"), o.display_text = P("div", "display_text"), o.display.appendChild(o.display_text), o.display_image = P("img", "display_image"), o.display_image.onerror = function (e) {
                    _hide(o.display_image)
                }, o.display_image.onload = _, o.display_icon = P("div", "display_icon"), o.display_iconBackground = P("div", "display_iconBackground"), o.display.appendChild(o.display_image), o.display_iconBackground.appendChild(o.display_icon), o.display.appendChild(o.display_iconBackground), H(), setTimeout(function () {
                    N = !0, i.icons.toString() == "true" && J()
                }, 1)
            }

            function _(t) {
                l = o.display_image.naturalWidth, c = o.display_image.naturalHeight, D();
                if (s.jwGetState() == e.api.events.state.IDLE || s.jwGetPlaylist()[s.jwGetPlaylistIndex()].provider == "sound")_css(o.display_image, {display: "block", opacity: 0}), _utils.fadeTo(o.display_image, 1, .1);
                E = !1
            }

            function D() {
                if (s.jwGetFullscreen() && s.jwGetStretching() == e.utils.stretching.EXACTFIT) {
                    var t = document.createElement("div");
                    _utils.stretch(e.utils.stretching.UNIFORM, t, u, f, k, L), _utils.stretch(e.utils.stretching.EXACTFIT, o.display_image, _utils.parseDimension(t.style.width), _utils.parseDimension(t.style.height), l, c), _css(o.display_image, {left: t.style.left, top: t.style.top})
                } else _utils.stretch(s.jwGetStretching(), o.display_image, u, f, l, c)
            }

            function P(e, t) {
                var n = document.createElement(e);
                return n.id = s.id + "_jwplayer_" + t, _css(n, O[t].style), n
            }

            function H() {
                for (var e in o)_utils.exists(O[e].click) && (o[e].onclick = O[e].click)
            }

            function B(t) {
                typeof t.preventDefault != "undefined" ? t.preventDefault() : t.returnValue = !1;
                if (typeof C == "function") {
                    C(t);
                    return
                }
                s.jwGetState() != e.api.events.state.PLAYING ? s.jwPlay() : s.jwPause()
            }

            function j(e) {
                if (d) {
                    F();
                    return
                }
                o.display_icon.style.backgroundImage = ["url(", s.skin.getSkinElement("display", e).src, ")"].join(""), _css(o.display_icon, {width: s.skin.getSkinElement("display", e).width, height: s.skin.getSkinElement("display", e).height, top: (s.skin.getSkinElement("display", "background").height - s.skin.getSkinElement("display", e).height) / 2, left: (s.skin.getSkinElement("display", "background").width - s.skin.getSkinElement("display", e).width) / 2}), I(), _utils.exists(s.skin.getSkinElement("display", e + "Over")) ? (o.display_icon.onmouseover = function (t) {
                    o.display_icon.style.backgroundImage = ["url(", s.skin.getSkinElement("display", e + "Over").src, ")"].join("")
                }, o.display_icon.onmouseout = function (t) {
                    o.display_icon.style.backgroundImage = ["url(", s.skin.getSkinElement("display", e).src, ")"].join("")
                }) : (o.display_icon.onmouseover = null, o.display_icon.onmouseout = null)
            }

            function F() {
                i.icons.toString() == "true" && (_hide(o.display_icon), _hide(o.display_iconBackground), K())
            }

            function I() {
                !T && i.icons.toString() == "true" && (_show(o.display_icon), _show(o.display_iconBackground), J())
            }

            function q(e) {
                d = !0, F(), o.display_text.innerHTML = e.message, _show(o.display_text), o.display_text.style.top = (f - _utils.getBoundingClientRect(o.display_text).height) / 2 + "px"
            }

            function R() {
                S = !1, o.display_image.style.display = "none"
            }

            function U() {
                y = ""
            }

            function z(t) {
                (t.type == e.api.events.JWPLAYER_PLAYER_STATE || t.type == e.api.events.JWPLAYER_PLAYLIST_ITEM) && d && (d = !1, _hide(o.display_text));
                var n = s.jwGetState();
                if (n == y)return;
                y = n, g >= 0 && clearTimeout(g), b || s.jwGetState() == e.api.events.state.PLAYING || s.jwGetState() == e.api.events.state.PAUSED ? X(s.jwGetState()) : g = setTimeout(W(s.jwGetState()), 500)
            }

            function W(e) {
                return function () {
                    X(e)
                }
            }

            function X(t) {
                _utils.exists(p) && (clearInterval(p), p = null, _utils.animations.rotate(o.display_icon, 0));
                switch (t) {
                    case e.api.events.state.BUFFERING:
                        _utils.isIPod() ? (R(), F()) : (s.jwGetPlaylist()[s.jwGetPlaylistIndex()].provider == "sound" && V(), h = 0, p = setInterval(function () {
                            h += v, _utils.animations.rotate(o.display_icon, h % 360)
                        }, m), j("bufferIcon"), b = !0);
                        break;
                    case e.api.events.state.PAUSED:
                        _utils.isIPod() || (s.jwGetPlaylist()[s.jwGetPlaylistIndex()].provider != "sound" && _css(o.display_image, {background: "transparent no-repeat center center"}), j("playIcon"), b = !0);
                        break;
                    case e.api.events.state.IDLE:
                        s.jwGetPlaylist()[s.jwGetPlaylistIndex()] && s.jwGetPlaylist()[s.jwGetPlaylistIndex()].image ? V() : R(), j("playIcon"), b = !0;
                        break;
                    default:
                        s.jwGetPlaylist()[s.jwGetPlaylistIndex()] && s.jwGetPlaylist()[s.jwGetPlaylistIndex()].provider == "sound" ? _utils.isIPod() ? (R(), b = !1) : V() : (R(), b = !1), s.jwGetMute() && i.showmute ? j("muteIcon") : F()
                }
                g = -1
            }

            function V() {
                if (s.jwGetPlaylist()[s.jwGetPlaylistIndex()]) {
                    var e = s.jwGetPlaylist()[s.jwGetPlaylistIndex()].image;
                    e && (e != x ? (x = e, E = !0, o.display_image.src = _utils.getAbsolutePath(e)) : !E && !S && (S = !0, o.display_image.style.opacity = 0, o.display_image.style.display = "block", _utils.fadeTo(o.display_image, 1, .1)))
                }
            }

            function $(e) {
                return function () {
                    if (!N)return;
                    !T && w != e && (w = e, A.sendEvent(e, {component: "display", boundingRect: _utils.getDimensions(o.display_iconBackground)}))
                }
            }

            var r = {icons: !0, showmute: !1}, i = _utils.extend({}, r, n), s = t, o = {}, u, f, l, c, h, p, d, v = _utils.exists(s.skin.getComponentSettings("display").bufferrotation) ? parseInt(s.skin.getComponentSettings("display").bufferrotation, 10) : 15, m = _utils.exists(s.skin.getComponentSettings("display").bufferinterval) ? parseInt(s.skin.getComponentSettings("display").bufferinterval, 10) : 100, g = -1, y = e.api.events.state.IDLE, b = !0, w, E = !1, S = !0, x = "", T = !1, N = !1, C, k, L, A = new e.html5.eventdispatcher;
            _utils.extend(this, A);
            var O = {display: {style: {cursor: "pointer", top: 0, left: 0, overflow: "hidden"}, click: B}, display_icon: {style: {cursor: "pointer", position: "absolute", top: (s.skin.getSkinElement("display", "background").height - s.skin.getSkinElement("display", "playIcon").height) / 2, left: (s.skin.getSkinElement("display", "background").width - s.skin.getSkinElement("display", "playIcon").width) / 2, border: 0, margin: 0, padding: 0, zIndex: 3, display: "none"}}, display_iconBackground: {style: {cursor: "pointer", position: "absolute", top: (f - s.skin.getSkinElement("display", "background").height) / 2, left: (u - s.skin.getSkinElement("display", "background").width) / 2, border: 0, backgroundImage: ["url(", s.skin.getSkinElement("display", "background").src, ")"].join(""), width: s.skin.getSkinElement("display", "background").width, height: s.skin.getSkinElement("display", "background").height, margin: 0, padding: 0, zIndex: 2, display: "none"}}, display_image: {style: {display: "none", width: u, height: f, position: "absolute", cursor: "pointer", left: 0, top: 0, margin: 0, padding: 0, textDecoration: "none", zIndex: 1}}, display_text: {style: {zIndex: 4, position: "relative", opacity: .8, backgroundColor: parseInt("000000", 16), color: parseInt("ffffff", 16), textAlign: "center", fontFamily: "Arial,sans-serif", padding: "0 5px", fontSize: 14}}};
            s.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, z), s.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_MUTE, z), s.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, U), s.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, z), s.jwAddEventListener(e.api.events.JWPLAYER_ERROR, q), M(), this.getDisplayElement = function () {
                return o.display
            }, this.resize = function (e, t) {
                if (s.jwGetFullscreen() && _utils.isMobile())return;
                _css(o.display, {width: e, height: t}), _css(o.display_text, {width: e - 10, top: (t - _utils.getBoundingClientRect(o.display_text).height) / 2}), _css(o.display_iconBackground, {top: (t - s.skin.getSkinElement("display", "background").height) / 2, left: (e - s.skin.getSkinElement("display", "background").width) / 2});
                if (u != e || f != t)u = e, f = t, w = undefined, J();
                s.jwGetFullscreen() || (k = e, L = t), D(), z({})
            }, this.show = function () {
                T && (T = !1, X(s.jwGetState()))
            }, this.hide = function () {
                T || (F(), T = !0)
            };
            var J = $(e.api.events.JWPLAYER_COMPONENT_SHOW), K = $(e.api.events.JWPLAYER_COMPONENT_HIDE);
            return this.setAlternateClickHandler = function (e) {
                C = e
            }, this.revertAlternateClickHandler = function () {
                C = undefined
            }, this
        }
    }(jwplayer5), function (e) {
        var t = e.utils, n = t.css;
        e.html5.dock = function (r, i) {
            function s() {
                return{align: e.html5.view.positions.RIGHT}
            }

            function S(e) {
                return"url(" + e + ") no-repeat center center"
            }

            function x(e) {
            }

            function T(n, i) {
                P();
                if (f.length > 0) {
                    var s = 10, p = s, g = -1, y = r.skin.getSkinElement("dock", "button").height, b = r.skin.getSkinElement("dock", "button").width, w = n - b - s, E, S;
                    o.align == e.html5.view.positions.LEFT && (g = 1, w = s);
                    for (var x = 0; x < f.length; x++) {
                        var T = Math.floor(p / i);
                        p + y + s > (T + 1) * i && (p = (T + 1) * i + s, T = Math.floor(p / i));
                        var N = u[f[x]].div;
                        N.style.top = p % i + "px", N.style.left = w + (r.skin.getSkinElement("dock", "button").width + s) * T * g + "px";
                        var C = {x: t.parseDimension(N.style.left), y: t.parseDimension(N.style.top), width: b, height: y};
                        if (!E || C.x <= E.x && C.y <= E.y)E = C;
                        if (!S || C.x >= S.x && C.y >= S.y)S = C;
                        N.style.width = b + "px", N.style.height = y + "px", p += r.skin.getSkinElement("dock", "button").height + s
                    }
                    v = {x: E.x, y: E.y, width: S.x - E.x + S.width, height: E.y - S.y + S.height}
                }
                if (d != r.jwGetFullscreen() || l != n || h != i)l = n, h = i, d = r.jwGetFullscreen(), m = undefined, setTimeout(L, 1)
            }

            function N(e) {
                return function () {
                    !p && m != e && f.length > 0 && (m = e, w.sendEvent(e, {component: "dock", boundingRect: v}))
                }
            }

            function C(n) {
                t.isMobile() ? n.newstate == e.api.events.state.IDLE ? O() : M() : k()
            }

            function k(n) {
                if (p)return;
                clearTimeout(y);
                if (i.position == e.html5.view.positions.OVER || r.jwGetFullscreen())switch (r.jwGetState()) {
                    case e.api.events.state.PAUSED:
                    case e.api.events.state.IDLE:
                        E && E.style.opacity < 1 && (!i.idlehide || t.exists(n)) && D(), i.idlehide && (y = setTimeout(function () {
                            _()
                        }, 2e3));
                        break;
                    default:
                        t.exists(n) && D(), y = setTimeout(function () {
                            _()
                        }, 2e3)
                } else D()
            }

            function _() {
                p || (A(), E.style.opacity == 1 && (t.cancelAnimation(E), t.fadeTo(E, 0, .1, 1, 0)))
            }

            function D() {
                p || (L(), E.style.opacity == 0 && (t.cancelAnimation(E), t.fadeTo(E, 1, .1, 0, 0)))
            }

            function P() {
                try {
                    g = document.getElementById(r.id), g.addEventListener("mousemove", k)
                } catch (e) {
                    t.log("Could not add mouse listeners to dock: " + e)
                }
            }

            var o = t.extend({}, s(), i);
            if (o.align == "FALSE")return;
            var u = {}, f = [], l, h, p = !1, d = !1, v = {x: 0, y: 0, width: 0, height: 0}, m, g, y, w = new e.html5.eventdispatcher;
            t.extend(this, w);
            var E = document.createElement("div");
            E.id = r.id + "_jwplayer_dock", E.style.opacity = 1, P(), r.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, C), this.getDisplayElement = function () {
                return E
            }, this.setButton = function (n, i, s, o) {
                !i && u[n] ? (t.arrays.remove(f, n), E.removeChild(u[n].div), delete u[n]) : i && (u[n] || (u[n] = {}), u[n].handler = i, u[n].outGraphic = s, u[n].overGraphic = o, u[n].div || (f.push(n), u[n].div = document.createElement("div"), u[n].div.style.position = "absolute", E.appendChild(u[n].div), u[n].div.appendChild(document.createElement("div")), u[n].div.childNodes[0].style.position = "relative", u[n].div.childNodes[0].style.width = "100%", u[n].div.childNodes[0].style.height = "100%", u[n].div.childNodes[0].style.zIndex = 10, u[n].div.childNodes[0].style.cursor = "pointer", u[n].div.appendChild(document.createElement("img")), u[n].div.childNodes[1].style.position = "absolute", u[n].div.childNodes[1].style.left = 0, u[n].div.childNodes[1].style.top = 0, r.skin.getSkinElement("dock", "button") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "button").src), u[n].div.childNodes[1].style.zIndex = 9, u[n].div.childNodes[1].style.cursor = "pointer", u[n].div.onmouseover = function () {
                    u[n].overGraphic && (u[n].div.childNodes[0].style.background = S(u[n].overGraphic)), r.skin.getSkinElement("dock", "buttonOver") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "buttonOver").src)
                }, u[n].div.onmouseout = function () {
                    u[n].outGraphic && (u[n].div.childNodes[0].style.background = S(u[n].outGraphic)), r.skin.getSkinElement("dock", "button") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "button").src)
                }, r.skin.getSkinElement("dock", "button") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "button").src)), u[n].outGraphic ? u[n].div.childNodes[0].style.background = S(u[n].outGraphic) : u[n].overGraphic && (u[n].div.childNodes[0].style.background = S(u[n].overGraphic)), i && (u[n].div.onclick = function (t) {
                    t.preventDefault(), e(r.id).callback(n), u[n].overGraphic && (u[n].div.childNodes[0].style.background = S(u[n].overGraphic)), r.skin.getSkinElement("dock", "button") && (u[n].div.childNodes[1].src = r.skin.getSkinElement("dock", "button").src)
                })), T(l, h)
            };
            var L = N(e.api.events.JWPLAYER_COMPONENT_SHOW), A = N(e.api.events.JWPLAYER_COMPONENT_HIDE);
            this.resize = T;
            var O = function () {
                n(E, {display: "block"}), p && (p = !1, L())
            }, M = function () {
                n(E, {display: "none"}), p || (A(), p = !0)
            };
            return this.hide = M, this.show = O, this
        }
    }(jwplayer5), function (e) {
        e.html5.eventdispatcher = function (t, n) {
            var r = new e.events.eventdispatcher(n);
            e.utils.extend(this, r), this.sendEvent = function (n, i) {
                e.utils.exists(i) || (i = {}), e.utils.extend(i, {id: t, version: e.version, type: n}), r.sendEvent(n, i)
            }
        }
    }(jwplayer5), function (e) {
        var t = e.utils;
        e.html5.instream = function (n, r, i, s) {
            function L() {
                _fakemodel = new e.html5.model(this, c.getMedia() ? c.getMedia().getDisplayElement() : c.container, c), N = new e.html5.eventdispatcher, l.jwAddEventListener(e.api.events.JWPLAYER_RESIZE, B), l.jwAddEventListener(e.api.events.JWPLAYER_FULLSCREEN, B)
            }

            function A() {
                _fakemodel.setMute(c.mute), _fakemodel.setVolume(c.volume)
            }

            function O() {
                E || (E = new e.html5.mediavideo(_fakemodel, c.getMedia() ? c.getMedia().getDisplayElement() : c.container), E.addGlobalListener(M), E.addEventListener(e.api.events.JWPLAYER_MEDIA_META, P), E.addEventListener(e.api.events.JWPLAYER_MEDIA_COMPLETE, D), E.addEventListener(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL, _)), E.attachMedia()
            }

            function M(e) {
                T && H(e.type, e)
            }

            function _(e) {
                T && E.play()
            }

            function D(e) {
                T && setTimeout(function () {
                    k.jwInstreamDestroy(!0)
                }, 10)
            }

            function P(e) {
                e.metadata.width && e.metadata.height && h.resizeMedia()
            }

            function H(e, t, n) {
                (T || n) && N.sendEvent(e, t)
            }

            function B() {
                var e = c.plugins.object.display.getDisplayElement().style;
                if (S) {
                    var n = c.plugins.object.controlbar.getDisplayElement().style;
                    S.resize(t.parseDimension(e.width), t.parseDimension(e.height)), _css(S.getDisplayElement(), t.extend({}, n, {zIndex: 1001, opacity: 1}))
                }
                x && (x.resize(t.parseDimension(e.width), t.parseDimension(e.height)), _css(x.getDisplayElement(), t.extend({}, e, {zIndex: 1e3}))), h && h.resizeMedia()
            }

            var o = {controlbarseekable: "always", controlbarpausable: !0, controlbarstoppable: !0, playlistclickable: !0}, u, f, l = n, c = r, h = i, p = s, d, v, m, g, y, w, E, S, x, T = !1, N, C, k = this;
            return this.load = function (n, r) {
                A(), T = !0, f = t.extend(o, r), u = e.html5.playlistitem(n), O(), C = document.createElement("div"), C.id = k.id + "_instream_container", p.detachMedia(), d = E.getDisplayElement(), w = c.playlist[c.item], y = l.jwGetState(), (y == e.api.events.state.BUFFERING || y == e.api.events.state.PLAYING) && d.pause(), v = d.src ? d.src : d.currentSrc, m = d.innerHTML, g = d.currentTime, x = new e.html5.display(k, t.extend({}, c.plugins.config.display)), x.setAlternateClickHandler(function (t) {
                    _fakemodel.state == e.api.events.state.PAUSED ? k.jwInstreamPlay() : H(e.api.events.JWPLAYER_INSTREAM_CLICK, t)
                }), C.appendChild(x.getDisplayElement());
                if (!t.isMobile()) {
                    S = new e.html5.controlbar(k, t.extend({}, c.plugins.config.controlbar, {}));
                    if (c.plugins.config.controlbar.position == e.html5.view.positions.OVER)C.appendChild(S.getDisplayElement()); else {
                        var i = c.plugins.object.controlbar.getDisplayElement().parentNode;
                        i.appendChild(S.getDisplayElement())
                    }
                }
                h.setupInstream(C, d), B(), E.load(u)
            }, this.jwInstreamDestroy = function (t) {
                if (!T)return;
                T = !1, y != e.api.events.state.IDLE ? (E.load(w, !1), E.stop(!1)) : E.stop(!0), E.detachMedia(), h.destroyInstream();
                if (S)try {
                    S.getDisplayElement().parentNode.removeChild(S.getDisplayElement())
                } catch (n) {
                }
                H(e.api.events.JWPLAYER_INSTREAM_DESTROYED, {reason: t ? "complete" : "destroyed"}, !0), p.attachMedia();
                if (y == e.api.events.state.BUFFERING || y == e.api.events.state.PLAYING)d.play(), c.playlist[c.item] == w && c.getMedia().seek(g);
                return
            }, this.jwInstreamAddEventListener = function (e, t) {
                N.addEventListener(e, t)
            }, this.jwInstreamRemoveEventListener = function (e, t) {
                N.removeEventListener(e, t)
            }, this.jwInstreamPlay = function () {
                if (!T)return;
                E.play(!0)
            }, this.jwInstreamPause = function () {
                if (!T)return;
                E.pause(!0)
            }, this.jwInstreamSeek = function (e) {
                if (!T)return;
                E.seek(e)
            }, this.jwInstreamGetState = function () {
                return T ? _fakemodel.state : undefined
            }, this.jwInstreamGetPosition = function () {
                return T ? _fakemodel.position : undefined
            }, this.jwInstreamGetDuration = function () {
                return T ? _fakemodel.duration : undefined
            }, this.playlistClickable = function () {
                return!T || f.playlistclickable.toString().toLowerCase() == "true"
            }, this.jwPlay = function (e) {
                f.controlbarpausable.toString().toLowerCase() == "true" && this.jwInstreamPlay()
            }, this.jwPause = function (e) {
                f.controlbarpausable.toString().toLowerCase() == "true" && this.jwInstreamPause()
            }, this.jwStop = function () {
                f.controlbarstoppable.toString().toLowerCase() == "true" && (this.jwInstreamDestroy(), l.jwStop())
            }, this.jwSeek = function (e) {
                switch (f.controlbarseekable.toLowerCase()) {
                    case"always":
                        this.jwInstreamSeek(e);
                        break;
                    case"backwards":
                        _fakemodel.position > e && this.jwInstreamSeek(e)
                }
            }, this.jwGetPosition = function () {
            }, this.jwGetDuration = function () {
            }, this.jwGetWidth = l.jwGetWidth, this.jwGetHeight = l.jwGetHeight, this.jwGetFullscreen = l.jwGetFullscreen, this.jwSetFullscreen = l.jwSetFullscreen, this.jwGetVolume = function () {
                return c.volume
            }, this.jwSetVolume = function (e) {
                E.volume(e), l.jwSetVolume(e)
            }, this.jwGetMute = function () {
                return c.mute
            }, this.jwSetMute = function (e) {
                E.mute(e), l.jwSetMute(e)
            }, this.jwGetState = function () {
                return _fakemodel.state
            }, this.jwGetPlaylist = function () {
                return[u]
            }, this.jwGetPlaylistIndex = function () {
                return 0
            }, this.jwGetStretching = function () {
                return c.config.stretching
            }, this.jwAddEventListener = function (e, t) {
                N.addEventListener(e, t)
            }, this.jwRemoveEventListener = function (e, t) {
                N.removeEventListener(e, t)
            }, this.skin = l.skin, this.id = l.id + "_instream", L(), this
        }
    }(jwplayer5), function (e) {
        var t = {prefix: "", file: "", link: "", linktarget: "_top", margin: 8, out: .5, over: 1, timeout: 5, hide: !0, position: "bottom-left"};
        _css = e.utils.css, e.html5.logo = function (n, r) {
            function l() {
                c(), i.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, E), h(), p()
            }

            function c() {
                if (t.prefix) {
                    var i = n.version.split(/\W/).splice(0, 2).join("/");
                    t.prefix.indexOf(i) < 0 && (t.prefix += i + "/")
                }
                r.position == e.html5.view.positions.OVER && (r.position = t.position);
                try {
                    window.location.href.indexOf("https") == 0 && (t.prefix = t.prefix.replace("http://l.longtailvideo.com", "https://securel.longtailvideo.com"))
                } catch (s) {
                }
                o = e.utils.extend({}, t, r)
            }

            function h() {
                u = document.createElement("img"), u.id = i.id + "_jwplayer_logo", u.style.display = "none", u.onload = function (e) {
                    _css(u, g()), v()
                };
                if (!o.file)return;
                o.file.indexOf("/") >= 0 ? u.src = o.file : u.src = o.prefix + o.file
            }

            function p() {
                o.link ? (u.onmouseover = m, u.onmouseout = v, u.onclick = d) : this.mouseEnabled = !1
            }

            function d(e) {
                typeof e != "undefined" && e.stopPropagation();
                if (!f)return;
                i.jwPause(), i.jwSetFullscreen(!1), o.link && window.open(o.link, o.linktarget);
                return
            }

            function v(e) {
                o.link && f && (u.style.opacity = o.out);
                return
            }

            function m(e) {
                f && (u.style.opacity = o.over);
                return
            }

            function g() {
                var e = {textDecoration: "none", position: "absolute", cursor: "pointer"};
                e.display = o.hide.toString() == "true" && !f ? "none" : "block";
                var t = o.position.toLowerCase().split("-");
                for (var n in t)e[t[n]] = parseInt(o.margin);
                return e
            }

            function y() {
                o.hide.toString() == "true" && (u.style.display = "block", u.style.opacity = 0, e.utils.fadeTo(u, o.out, .1, parseFloat(u.style.opacity)), s = setTimeout(function () {
                    w()
                }, o.timeout * 1e3)), f = !0
            }

            function w() {
                f = !1, o.hide.toString() == "true" && e.utils.fadeTo(u, 0, .1, parseFloat(u.style.opacity))
            }

            function E(t) {
                t.newstate == e.api.events.state.BUFFERING && (clearTimeout(s), y())
            }

            var i = n, s, o, u, f = !1;
            l();
            if (!o.file)return;
            return this.resize = function (e, t) {
            }, this.getDisplayElement = function () {
                return u
            }, this
        }
    }(jwplayer5), function (e) {
        var t = {ended: e.api.events.state.IDLE, playing: e.api.events.state.PLAYING, pause: e.api.events.state.PAUSED, buffering: e.api.events.state.BUFFERING}, n = e.utils, r = n.isMobile(), i, s, o = {};
        e.html5.mediavideo = function (u, l) {
            function D(e, t) {
                return p[e] ? p[e] : (p[e] = function (e) {
                    n.exists(e.target.parentNode) && t(e)
                }, p[e])
            }

            function P() {
                E = e.api.events.state.IDLE, k = !0, w = H(), w.setAttribute("x-webkit-airplay", "allow"), y.parentNode && (w.id = y.id, y.parentNode.replaceChild(w, y))
            }

            function H() {
                var e = o[m.id];
                e || (y.tagName.toLowerCase() == "video" ? e = y : e = document.createElement("video"), o[m.id] = e, e.id || (e.id = y.id));
                for (var t in h)e.addEventListener(t, D(t, h[t]), !0);
                return e
            }

            function B(t) {
                if (t == e.api.events.state.PAUSED && E == e.api.events.state.IDLE)return;
                if (r)switch (t) {
                    case e.api.events.state.PLAYING:
                        G();
                        break;
                    case e.api.events.state.BUFFERING:
                    case e.api.events.state.PAUSED:
                        Y()
                }
                if (E != t) {
                    var n = E;
                    m.state = E = t, Z(e.api.events.JWPLAYER_PLAYER_STATE, {oldstate: n, newstate: t})
                }
            }

            function j(e) {
            }

            function F(t) {
                var n = Math.round(w.volume * 100);
                Z(e.api.events.JWPLAYER_MEDIA_VOLUME, {volume: n}, !0), Z(e.api.events.JWPLAYER_MEDIA_MUTE, {mute: w.muted}, !0)
            }

            function I(t) {
                if (!k)return;
                var r;
                if (n.exists(t) && t.lengthComputable && t.total)r = t.loaded / t.total * 100; else if (n.exists(w.buffered) && w.buffered.length > 0) {
                    var i = w.buffered.length - 1;
                    i >= 0 && (r = w.buffered.end(i) / w.duration * 100)
                }
                n.useNativeFullscreen() && n.exists(w.webkitDisplayingFullscreen) && m.fullscreen != w.webkitDisplayingFullscreen && Z(e.api.events.JWPLAYER_FULLSCREEN, {fullscreen: w.webkitDisplayingFullscreen}, !0), O === !1 && E == e.api.events.state.BUFFERING && (Z(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL), O = !0), A || (r == 100 && (A = !0), n.exists(r) && r > m.buffer && (m.buffer = Math.round(r), Z(e.api.events.JWPLAYER_MEDIA_BUFFER, {bufferPercent: Math.round(r)})))
            }

            function q(t) {
                if (!k)return;
                if (n.exists(t) && n.exists(t.target)) {
                    L > 0 && !isNaN(t.target.duration) && (isNaN(m.duration) || m.duration < 1) && (t.target.duration == Infinity ? m.duration = 0 : m.duration = Math.round(t.target.duration * 10) / 10), !S && w.readyState > 0 && B(e.api.events.state.PLAYING);
                    if (E == e.api.events.state.PLAYING) {
                        if (w.readyState > 0 && (N > -1 || !S)) {
                            S = !0;
                            try {
                                w.currentTime != N && N > -1 && (w.currentTime = N, N = -1)
                            } catch (r) {
                            }
                            w.volume = m.volume / 100, w.muted = m.mute
                        }
                        m.position = m.duration > 0 ? Math.round(t.target.currentTime * 10) / 10 : 0, Z(e.api.events.JWPLAYER_MEDIA_TIME, {position: m.position, duration: m.duration});
                        if (m.position >= m.duration && (m.position > 0 || m.duration > 0)) {
                            J();
                            return
                        }
                    }
                }
                I(t)
            }

            function R(e) {
            }

            function U(e) {
                if (!k)return;
                i && s && (w.style.width = i, w.style.height = s, i = _previousHieght = 0), t[e.type] && (e.type == "ended" ? J() : B(t[e.type]))
            }

            function z(t) {
                if (!k)return;
                var n = Math.round(w.duration * 10) / 10, r = {height: w.videoHeight, width: w.videoWidth, duration: n};
                L || (m.duration < n || isNaN(m.duration)) && w.duration != Infinity && (m.duration = n), Z(e.api.events.JWPLAYER_MEDIA_META, {metadata: r})
            }

            function W(t) {
                if (!k)return;
                if (E == e.api.events.state.IDLE)return;
                var r = "There was an error: ";
                if (t.target.error && t.target.tagName.toLowerCase() == "video" || t.target.parentNode.error && t.target.parentNode.tagName.toLowerCase() == "video") {
                    var i = n.exists(t.target.error) ? t.target.error : t.target.parentNode.error;
                    switch (i.code) {
                        case i.MEDIA_ERR_ABORTED:
                            n.log("User aborted the video playback.");
                            return;
                        case i.MEDIA_ERR_NETWORK:
                            r = "A network error caused the video download to fail part-way: ";
                            break;
                        case i.MEDIA_ERR_DECODE:
                            r = "The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";
                            break;
                        case i.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            r = "The video could not be loaded, either because the server or network failed or because the format is not supported: ";
                            break;
                        default:
                            r = "An unknown error occurred: "
                    }
                } else {
                    if (t.target.tagName.toLowerCase() != "source") {
                        n.log("An unknown error occurred.  Continuing...");
                        return
                    }
                    M--;
                    if (M > 0)return;
                    if (n.userAgentMatch(/firefox/i)) {
                        n.log("The video could not be loaded, either because the server or network failed or because the format is not supported."), _(!1);
                        return
                    }
                    r = "The video could not be loaded, either because the server or network failed or because the format is not supported: "
                }
                _(!1), r += X(), _error = !0, Z(e.api.events.JWPLAYER_ERROR, {message: r});
                return
            }

            function X() {
                var t = "";
                for (var n in x.levels) {
                    var r = x.levels[n], i = y.ownerDocument.createElement("source");
                    t += e.utils.getAbsolutePath(r.file), n < x.levels.length - 1 && (t += ", ")
                }
                return t
            }

            function V() {
                n.exists(T) || (T = setInterval(function () {
                    I()
                }, 100))
            }

            function $() {
                clearInterval(T), T = null
            }

            function J() {
                E == e.api.events.state.PLAYING && (_(!1), Z(e.api.events.JWPLAYER_MEDIA_BEFORECOMPLETE), Z(e.api.events.JWPLAYER_MEDIA_COMPLETE))
            }

            function K(t) {
                n.exists(w.webkitDisplayingFullscreen) && m.fullscreen && !w.webkitDisplayingFullscreen && Z(e.api.events.JWPLAYER_FULLSCREEN, {fullscreen: !1}, !0)
            }

            function Q(e) {
                if (e.length > 0 && n.userAgentMatch(/Safari/i) && !n.userAgentMatch(/Chrome/i)) {
                    var t = -1;
                    for (var r = 0; r < e.length; r++)switch (n.extension(e[r].file)) {
                        case"mp4":
                            t < 0 && (t = r);
                            break;
                        case"webm":
                            e.splice(r, 1)
                    }
                    if (t > 0) {
                        var i = e.splice(t, 1)[0];
                        e.unshift(i)
                    }
                }
            }

            function G() {
                setTimeout(function () {
                    w.setAttribute("controls", "controls")
                }, 100)
            }

            function Y() {
                setTimeout(function () {
                    w.removeAttribute("controls")
                }, 250)
            }

            function Z(e, t, n) {
                if (k || n)t ? v.sendEvent(e, t) : v.sendEvent(e)
            }

            var h = {abort: j, canplay: U, canplaythrough: U, durationchange: z, emptied: j, ended: U, error: W, loadeddata: z, loadedmetadata: z, loadstart: U, pause: U, play: j, playing: U, progress: I, ratechange: j, seeked: U, seeking: U, stalled: U, suspend: U, timeupdate: q, volumechange: F, waiting: U, canshowcurrentframe: j, dataunavailable: j, empty: j, load: R, loadedfirstframe: j, webkitfullscreenchange: K}, p = {}, v = new e.html5.eventdispatcher;
            n.extend(this, v);
            var m = u, y = l, w, E, S, x, T, N, C = !1, k = !1, L = !1, A, O, M;
            P(), this.load = function (t, o) {
                typeof o == "undefined" && (o = !0);
                if (!k)return;
                x = t, L = x.duration > 0, m.duration = x.duration, n.empty(w), w.style.display = "block", w.style.opacity = 1, i && s && (w.style.width = i, w.style.height = s, i = _previousHieght = 0), M = 0, Q(t.levels);
                if (t.levels && t.levels.length > 0)if (t.levels.length == 1 || n.isIOS())w.src = t.levels[0].file; else {
                    w.src && w.removeAttribute("src");
                    for (var u = 0; u < t.levels.length; u++) {
                        var l = w.ownerDocument.createElement("source");
                        l.src = t.levels[u].file, w.appendChild(l), M++
                    }
                } else w.src = t.file;
                w.volume = m.volume / 100, w.muted = m.mute, r && G(), A = O = S = !1, m.buffer = 0, n.exists(t.start) || (t.start = 0), N = t.start > 0 ? t.start : -1, Z(e.api.events.JWPLAYER_MEDIA_LOADED), (!r && t.levels.length == 1 || !C) && w.load(), C = !1, o && (B(e.api.events.state.BUFFERING), Z(e.api.events.JWPLAYER_MEDIA_BUFFER, {bufferPercent: 0}), V()), w.videoWidth > 0 && w.videoHeight > 0 && z()
            }, this.play = function () {
                if (!k)return;
                V(), O ? B(e.api.events.state.PLAYING) : (w.load(), B(e.api.events.state.BUFFERING)), w.play()
            }, this.pause = function () {
                if (!k)return;
                w.pause(), B(e.api.events.state.PAUSED)
            }, this.seek = function (e) {
                if (!k)return;
                !S && w.readyState > 0 ? !(m.duration <= 0 || isNaN(m.duration)) && !(m.position <= 0 || isNaN(m.position)) && (w.currentTime = e, w.play()) : N = e
            };
            var _ = this.stop = function (t) {
                if (!k)return;
                n.exists(t) || (t = !0), $();
                if (t) {
                    O = !1;
                    var r = navigator.userAgent;
                    if (w.webkitSupportsFullscreen)try {
                        w.webkitExitFullscreen()
                    } catch (o) {
                    }
                    w.style.opacity = 0, Y(), n.isIE() ? w.src = "" : w.removeAttribute("src"), n.empty(w), w.load(), C = !0
                }
                if (n.isIPod())i = w.style.width, s = w.style.height, w.style.width = 0, w.style.height = 0; else if (n.isIPad()) {
                    w.style.display = "none";
                    try {
                        w.webkitExitFullscreen()
                    } catch (u) {
                    }
                }
                B(e.api.events.state.IDLE)
            };
            this.fullscreen = function (e) {
                e === !0 ? this.resize("100%", "100%") : this.resize(m.config.width, m.config.height)
            }, this.resize = function (e, t) {
            }, this.volume = function (t) {
                r || (w.volume = t / 100, Z(e.api.events.JWPLAYER_MEDIA_VOLUME, {volume: t / 100}))
            }, this.mute = function (t) {
                r || (w.muted = t, Z(e.api.events.JWPLAYER_MEDIA_MUTE, {mute: t}))
            }, this.getDisplayElement = function () {
                return w
            }, this.hasChrome = function () {
                return r && E == e.api.events.state.PLAYING
            }, this.detachMedia = function () {
                return k = !1, this.getDisplayElement()
            }, this.attachMedia = function () {
                k = !0
            }, this.destroy = function () {
                if (w && w.parentNode) {
                    $();
                    for (var e in h)w.removeEventListener(e, D(e, h[e]), !0);
                    n.empty(w), y = w.parentNode, w.parentNode.removeChild(w), delete o[m.id], w = null
                }
            }
        }
    }(jwplayer5), function (e) {
        var t = {ended: e.api.events.state.IDLE, playing: e.api.events.state.PLAYING, pause: e.api.events.state.PAUSED, buffering: e.api.events.state.BUFFERING}, n = e.utils.css;
        e.html5.mediayoutube = function (t, r) {
            function c(t) {
                if (u != t) {
                    var n = u;
                    s.state = t, u = t, i.sendEvent(e.api.events.JWPLAYER_PLAYER_STATE, {oldstate: n, newstate: t})
                }
            }

            function h(e) {
                var t = e.levels[0].file;
                t = ["http://www.youtube.com/v/", p(t), "&amp;hl=en_US&amp;fs=1&autoplay=1"].join(""), f = document.createElement("object"), f.id = o.id, f.style.position = "absolute";
                var n = {movie: t, allowfullscreen: "true", allowscriptaccess: "always"};
                for (var r in n) {
                    var i = document.createElement("param");
                    i.name = r, i.value = n[r], f.appendChild(i)
                }
                l = document.createElement("embed"), f.appendChild(l);
                var s = {src: t, type: "application/x-shockwave-flash", allowfullscreen: "true", allowscriptaccess: "always", width: f.width, height: f.height};
                for (var u in s)l.setAttribute(u, s[u]);
                f.appendChild(l), f.style.zIndex = 2147483e3, o != f && o.parentNode && o.parentNode.replaceChild(f, o), o = f
            }

            function p(e) {
                var t = e.split(/\?|\#\!/), n = "";
                for (var r = 0; r < t.length; r++)t[r].substr(0, 2) == "v=" && (n = t[r].substr(2));
                return n == "" && (e.indexOf("/v/") >= 0 ? n = e.substr(e.indexOf("/v/") + 3) : e.indexOf("youtu.be") >= 0 ? n = e.substr(e.indexOf("youtu.be/") + 9) : n = e), n.indexOf("?") > -1 && (n = n.substr(0, n.indexOf("?"))), n.indexOf("&") > -1 && (n = n.substr(0, n.indexOf("&"))), n
            }

            var i = new e.html5.eventdispatcher;
            e.utils.extend(this, i);
            var s = t, o = document.getElementById(r.id), u = e.api.events.state.IDLE, f, l;
            return this.getDisplayElement = this.detachMedia = function () {
                return o
            }, this.attachMedia = function () {
            }, this.play = function () {
                u == e.api.events.state.IDLE ? (i.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER, {bufferPercent: 100}), i.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL), c(e.api.events.state.PLAYING)) : u == e.api.events.state.PAUSED && c(e.api.events.state.PLAYING)
            }, this.pause = function () {
                c(e.api.events.state.PAUSED)
            }, this.seek = function (e) {
            }, this.stop = function (t) {
                _utils.exists(t) || (t = !0), s.position = 0, c(e.api.events.state.IDLE), t && n(o, {display: "none"})
            }, this.volume = function (t) {
                s.setVolume(t), i.sendEvent(e.api.events.JWPLAYER_MEDIA_VOLUME, {volume: Math.round(t)})
            }, this.mute = function (t) {
                o.muted = t, i.sendEvent(e.api.events.JWPLAYER_MEDIA_MUTE, {mute: t})
            }, this.resize = function (e, t) {
                e * t > 0 && f && (f.width = l.width = e, f.height = l.height = t)
            }, this.fullscreen = function (e) {
                e === !0 ? this.resize("100%", "100%") : this.resize(s.config.width, s.config.height)
            }, this.load = function (t) {
                h(t), n(f, {display: "block"}), c(e.api.events.state.BUFFERING), i.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER, {bufferPercent: 0}), i.sendEvent(e.api.events.JWPLAYER_MEDIA_LOADED), this.play()
            }, this.hasChrome = function () {
                return u != e.api.events.state.IDLE
            }, this.embed = l, this
        }
    }(jwplayer5), function (jwplayer5) {
        var _configurableStateVariables = ["width", "height", "start", "duration", "volume", "mute", "fullscreen", "item", "plugins", "stretching"], _utils = jwplayer5.utils;
        jwplayer5.html5.model = function (api, container, options) {
            function _loadExternal(e) {
                var t = new jwplayer5.html5.playlistloader;
                t.addEventListener(jwplayer5.api.events.JWPLAYER_PLAYLIST_LOADED, function (e) {
                    _model.playlist = new jwplayer5.html5.playlist(e), _loadComplete(!0)
                }), t.addEventListener(jwplayer5.api.events.JWPLAYER_ERROR, function (e) {
                    _model.playlist = new jwplayer5.html5.playlist({playlist: []}), _loadComplete(!1)
                }), t.load(e)
            }

            function _loadComplete() {
                _model.config.shuffle ? _model.item = _getShuffleItem() : (_model.config.item >= _model.playlist.length ? _model.config.item = _model.playlist.length - 1 : _model.config.item < 0 && (_model.config.item = 0), _model.item = _model.config.item), _model.position = 0, _model.duration = _model.playlist.length > 0 ? _model.playlist[_model.item].duration : 0, _eventDispatcher.sendEvent(jwplayer5.api.events.JWPLAYER_PLAYLIST_LOADED, {playlist: _model.playlist}), _eventDispatcher.sendEvent(jwplayer5.api.events.JWPLAYER_PLAYLIST_ITEM, {index: _model.item})
            }

            function _getShuffleItem() {
                var e = null;
                if (_model.playlist.length > 1)while (!jwplayer5.utils.exists(e))e = Math.floor(Math.random() * _model.playlist.length), e == _model.item && (e = null); else e = 0;
                return e
            }

            function forward(e) {
                switch (e.type) {
                    case jwplayer5.api.events.JWPLAYER_MEDIA_LOADED:
                        _container = _media.getDisplayElement();
                        break;
                    case jwplayer5.api.events.JWPLAYER_MEDIA_MUTE:
                        this.mute = e.mute;
                        break;
                    case jwplayer5.api.events.JWPLAYER_MEDIA_VOLUME:
                        this.volume = e.volume
                }
                _eventDispatcher.sendEvent(e.type, e)
            }

            var _api = api, _container = container, _cookies = _utils.getCookies(), _model = {id: _container.id, playlist: [], state: jwplayer5.api.events.state.IDLE, position: 0, buffer: 0, container: _container, config: {width: 480, height: 320, item: -1, skin: undefined, file: undefined, image: undefined, start: 0, duration: 0, bufferlength: 5, volume: _cookies.volume ? _cookies.volume : 90, mute: _cookies.mute && _cookies.mute.toString().toLowerCase() == "true" ? !0 : !1, fullscreen: !1, repeat: "", stretching: jwplayer5.utils.stretching.UNIFORM, autostart: !1, debug: undefined, screencolor: undefined}}, _media, _eventDispatcher = new jwplayer5.html5.eventdispatcher, _components = ["display", "logo", "controlbar", "playlist", "dock"];
            jwplayer5.utils.extend(_model, _eventDispatcher);
            for (var option in options) {
                if (typeof options[option] == "string") {
                    var type = /color$/.test(option) ? "color" : null;
                    options[option] = jwplayer5.utils.typechecker(options[option], type)
                }
                var config = _model.config, path = option.split(".");
                for (var edge in path)edge == path.length - 1 ? config[path[edge]] = options[option] : (jwplayer5.utils.exists(config[path[edge]]) || (config[path[edge]] = {}), config = config[path[edge]])
            }
            for (var index in _configurableStateVariables) {
                var configurableStateVariable = _configurableStateVariables[index];
                _model[configurableStateVariable] = _model.config[configurableStateVariable]
            }
            var pluginorder = _components.concat([]);
            if (jwplayer5.utils.exists(_model.plugins) && typeof _model.plugins == "string") {
                var userplugins = _model.plugins.split(",");
                for (var userplugin in userplugins)typeof userplugins[userplugin] == "string" && pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g, ""))
            }
            jwplayer5.utils.isMobile() ? (pluginorder = ["display", "logo", "dock", "playlist"], jwplayer5.utils.exists(_model.config.repeat) || (_model.config.repeat = "list")) : _model.config.chromeless && (pluginorder = ["logo", "dock", "playlist"], jwplayer5.utils.exists(_model.config.repeat) || (_model.config.repeat = "list")), _model.plugins = {order: pluginorder, config: {}, object: {}};
            if (typeof _model.config.components != "undefined")for (var component in _model.config.components)_model.plugins.config[component] = _model.config.components[component];
            var playlistVisible = !1;
            for (var pluginIndex in _model.plugins.order) {
                var pluginName = _model.plugins.order[pluginIndex], pluginConfig = jwplayer5.utils.exists(_model.plugins.config[pluginName]) ? _model.plugins.config[pluginName] : {};
                _model.plugins.config[pluginName] = jwplayer5.utils.exists(_model.plugins.config[pluginName]) ? jwplayer5.utils.extend(_model.plugins.config[pluginName], pluginConfig) : pluginConfig, jwplayer5.utils.exists(_model.plugins.config[pluginName].position) ? (pluginName == "playlist" && (playlistVisible = !0), _model.plugins.config[pluginName].position = _model.plugins.config[pluginName].position.toString().toUpperCase()) : pluginName == "playlist" ? _model.plugins.config[pluginName].position = jwplayer5.html5.view.positions.NONE : _model.plugins.config[pluginName].position = jwplayer5.html5.view.positions.OVER
            }
            _model.plugins.config.controlbar && playlistVisible && (_model.plugins.config.controlbar.hideplaylistcontrols = !0);
            if (typeof _model.plugins.config.dock != "undefined") {
                if (typeof _model.plugins.config.dock != "object") {
                    var position = _model.plugins.config.dock.toString().toUpperCase();
                    _model.plugins.config.dock = {position: position}
                }
                typeof _model.plugins.config.dock.position != "undefined" && (_model.plugins.config.dock.align = _model.plugins.config.dock.position, _model.plugins.config.dock.position = jwplayer5.html5.view.positions.OVER);
                if (typeof _model.plugins.config.dock.idlehide == "undefined")try {
                    _model.plugins.config.dock.idlehide = _model.plugins.config.controlbar.idlehide
                } catch (e) {
                }
            }
            _model.loadPlaylist = function (arg) {
                var input;
                if (typeof arg == "string")if (arg.indexOf("[") == 0 || arg.indexOf("{") == "0")try {
                    input = eval(arg)
                } catch (err) {
                    input = arg
                } else input = arg; else input = arg;
                var config;
                switch (jwplayer5.utils.typeOf(input)) {
                    case"object":
                        config = input;
                        break;
                    case"array":
                        config = {playlist: input};
                        break;
                    default:
                        config = {file: input}
                }
                _model.playlist = new jwplayer5.html5.playlist(config), _model.item = _model.config.item >= 0 ? _model.config.item : 0, !_model.playlist[0].provider && _model.playlist[0].file ? _loadExternal(_model.playlist[0].file) : _loadComplete()
            };
            var _mediaProviders = {};
            return _model.setActiveMediaProvider = function (e) {
                e.provider == "audio" && (e.provider = "sound");
                var t = e.provider, n = _media ? _media.getDisplayElement() : null;
                if (t == "sound" || t == "http" || t == "")t = "video";
                if (!jwplayer5.utils.exists(_mediaProviders[t])) {
                    switch (t) {
                        case"video":
                            _media = new jwplayer5.html5.mediavideo(_model, n ? n : _container);
                            break;
                        case"youtube":
                            _media = new jwplayer5.html5.mediayoutube(_model, n ? n : _container)
                    }
                    if (!jwplayer5.utils.exists(_media))return!1;
                    _media.addGlobalListener(forward), _mediaProviders[t] = _media
                } else _media != _mediaProviders[t] && (_media && _media.stop(), _media = _mediaProviders[t]);
                return!0
            }, _model.getMedia = function () {
                return _media
            }, _model.seek = function (e) {
                return _eventDispatcher.sendEvent(jwplayer5.api.events.JWPLAYER_MEDIA_SEEK, {position: _model.position, offset: e}), _media.seek(e)
            }, _model.setVolume = function (e) {
                _utils.saveCookie("volume", e), _model.volume = e
            }, _model.setMute = function (e) {
                _utils.saveCookie("mute", e), _model.mute = e
            }, _model.setupPlugins = function () {
                if (!jwplayer5.utils.exists(_model.plugins) || !jwplayer5.utils.exists(_model.plugins.order) || _model.plugins.order.length == 0)return jwplayer5.utils.log("No plugins to set up"), _model;
                for (var e = 0; e < _model.plugins.order.length; e++)try {
                    var t = _model.plugins.order[e];
                    jwplayer5.utils.exists(jwplayer5.html5[t]) ? t == "playlist" ? _model.plugins.object[t] = new jwplayer5.html5.playlistcomponent(_api, _model.plugins.config[t]) : _model.plugins.object[t] = new jwplayer5.html5[t](_api, _model.plugins.config[t]) : _model.plugins.order.splice(plugin, plugin + 1), typeof _model.plugins.object[t].addGlobalListener == "function" && _model.plugins.object[t].addGlobalListener(forward)
                } catch (n) {
                    jwplayer5.utils.log("Could not setup " + t)
                }
            }, _model
        }
    }(jwplayer5), function (e) {
        e.html5.playlist = function (t) {
            var n = [];
            if (t.playlist && t.playlist instanceof Array && t.playlist.length > 0)for (var r in t.playlist)isNaN(parseInt(r)) || n.push(new e.html5.playlistitem(t.playlist[r])); else n.push(new e.html5.playlistitem(t));
            return n
        }
    }(jwplayer5), function (e) {
        var t = {size: 180, position: e.html5.view.positions.NONE, itemheight: 60, thumbs: !0, fontcolor: "#000000", overcolor: "", activecolor: "", backgroundcolor: "#f8f8f8", font: "_sans", fontsize: "", fontstyle: "", fontweight: ""}, n = {_sans: "Arial, Helvetica, sans-serif", _serif: "Times, Times New Roman, serif", _typewriter: "Courier New, Courier, monospace"};
        _utils = e.utils, _css = _utils.css, _hide = function (e) {
            _css(e, {display: "none"})
        }, _show = function (e) {
            _css(e, {display: "block"})
        }, e.html5.playlistcomponent = function (r, i) {
            function g() {
                u = document.createElement("div"), u.id = s.id + "_jwplayer_playlistcomponent", u.style.overflow = "hidden";
                switch (o.position) {
                    case e.html5.view.positions.RIGHT:
                    case e.html5.view.positions.LEFT:
                        u.style.width = o.size + "px";
                        break;
                    case e.html5.view.positions.TOP:
                    case e.html5.view.positions.BOTTOM:
                        u.style.height = o.size + "px"
                }
                O(), m.item && (o.itemheight = m.item.height), u.style.backgroundColor = "#C6C6C6", s.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, x), s.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM, L), s.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE, A)
            }

            function y() {
                var e = document.createElement("ul");
                return _css(e, {width: u.style.width, minWidth: u.style.width, height: u.style.height, backgroundColor: o.backgroundcolor, backgroundImage: m.background ? "url(" + m.background.src + ")" : "", color: o.fontcolor, listStyle: "none", margin: 0, padding: 0, fontFamily: n[o.font] ? n[o.font] : n._sans, fontSize: (o.fontsize ? o.fontsize : 11) + "px", fontStyle: o.fontstyle, fontWeight: o.fontweight, overflowY: "auto"}), e
            }

            function w(e) {
                return function () {
                    var t = d.getElementsByClassName("item")[e], n = o.fontcolor, r = m.item ? "url(" + m.item.src + ")" : "";
                    e == s.jwGetPlaylistIndex() && (o.activecolor !== "" && (n = o.activecolor), m.itemActive && (r = "url(" + m.itemActive.src + ")")), _css(t, {color: o.overcolor !== "" ? o.overcolor : n, backgroundImage: m.itemOver ? "url(" + m.itemOver.src + ")" : r})
                }
            }

            function E(e) {
                return function () {
                    var t = d.getElementsByClassName("item")[e], n = o.fontcolor, r = m.item ? "url(" + m.item.src + ")" : "";
                    e == s.jwGetPlaylistIndex() && (o.activecolor !== "" && (n = o.activecolor), m.itemActive && (r = "url(" + m.itemActive.src + ")")), _css(t, {color: n, backgroundImage: r})
                }
            }

            function S(t) {
                var n = h[t], r = document.createElement("li");
                r.className = "item", _css(r, {height: o.itemheight, display: "block", cursor: "pointer", backgroundImage: m.item ? "url(" + m.item.src + ")" : "", backgroundSize: "100% " + o.itemheight + "px"}), r.onmouseover = w(t), r.onmouseout = E(t);
                var i = document.createElement("div"), s = new Image, u = 0, c = 0, p = 0;
                k() && (n.image || n["playlist.image"] || m.itemImage) && (s.className = "image", m.itemImage ? (u = (o.itemheight - m.itemImage.height) / 2, c = m.itemImage.width, p = m.itemImage.height) : (c = o.itemheight * 4 / 3, p = o.itemheight), _css(i, {height: p, width: c, "float": "left", styleFloat: "left", cssFloat: "left", margin: "0 5px 0 0", background: "black", overflow: "hidden", margin: u + "px", position: "relative"}), _css(s, {position: "relative"}), i.appendChild(s), s.onload = function () {
                    e.utils.stretch(e.utils.stretching.FILL, s, c, p, this.naturalWidth, this.naturalHeight)
                }, n["playlist.image"] ? s.src = n["playlist.image"] : n.image ? s.src = n.image : m.itemImage && (s.src = m.itemImage.src), r.appendChild(i));
                var d = f - c - u * 2;
                l < o.itemheight * h.length && (d -= 15);
                var v = document.createElement("div");
                _css(v, {position: "relative", height: "100%", overflow: "hidden"});
                var g = document.createElement("span");
                n.duration > 0 && (g.className = "duration", _css(g, {fontSize: (o.fontsize ? o.fontsize : 11) + "px", fontWeight: o.fontweight ? o.fontweight : "bold", width: "40px", height: o.fontsize ? o.fontsize + 10 : 20, lineHeight: 24, "float": "right", styleFloat: "right", cssFloat: "right"}), g.innerHTML = _utils.timeFormat(n.duration), v.appendChild(g));
                var y = document.createElement("span");
                y.className = "title", _css(y, {padding: "5px 5px 0 " + (u ? 0 : "5px"), height: o.fontsize ? o.fontsize + 10 : 20, lineHeight: o.fontsize ? o.fontsize + 10 : 20, overflow: "hidden", "float": "left", styleFloat: "left", cssFloat: "left", width: (n.duration > 0 ? d - 50 : d) - 10 + "px", fontSize: (o.fontsize ? o.fontsize : 13) + "px", fontWeight: o.fontweight ? o.fontweight : "bold"}), y.innerHTML = n ? n.title : "", v.appendChild(y);
                if (n.description) {
                    var b = document.createElement("span");
                    b.className = "description", _css(b, {display: "block", "float": "left", styleFloat: "left", cssFloat: "left", margin: 0, paddingLeft: y.style.paddingLeft, paddingRight: y.style.paddingRight, lineHeight: (o.fontsize ? o.fontsize + 4 : 16) + "px", overflow: "hidden", position: "relative"}), b.innerHTML = n.description, v.appendChild(b)
                }
                return r.appendChild(v), r
            }

            function x(e) {
                u.innerHTML = "", h = T();
                if (!h)return;
                items = [], d = y();
                for (var t = 0; t < h.length; t++) {
                    var n = S(t);
                    n.onclick = N(t), d.appendChild(n), items.push(n)
                }
                v = s.jwGetPlaylistIndex(), E(v)(), u.appendChild(d);
                if (_utils.isIOS() && window.iScroll) {
                    d.style.height = o.itemheight * h.length + "px";
                    var r = new iScroll(u.id)
                }
            }

            function T() {
                var e = s.jwGetPlaylist(), t = [];
                for (var n = 0; n < e.length; n++)e[n]["ova.hidden"] || t.push(e[n]);
                return t
            }

            function N(e) {
                return function () {
                    s.jwPlaylistItem(e), s.jwPlay(!0)
                }
            }

            function C() {
                d.scrollTop = s.jwGetPlaylistIndex() * o.itemheight
            }

            function k() {
                return o.thumbs.toString().toLowerCase() == "true"
            }

            function L(e) {
                v >= 0 && (E(v)(), v = e.index), E(e.index)(), C()
            }

            function A() {
                if (o.position == e.html5.view.positions.OVER)switch (s.jwGetState()) {
                    case e.api.events.state.IDLE:
                        _show(u);
                        break;
                    default:
                        _hide(u)
                }
            }

            function O() {
                for (var e in m)m[e] = M(e)
            }

            function M(e) {
                return s.skin.getSkinElement("playlist", e)
            }

            var s = r, o = e.utils.extend({}, t, s.skin.getComponentSettings("playlist"), i);
            if (o.position == e.html5.view.positions.NONE || typeof e.html5.view.positions[o.position] == "undefined")return;
            var u, f, l, h, p, d, v = -1, m = {background: undefined, item: undefined, itemOver: undefined, itemImage: undefined, itemActive: undefined};
            return this.getDisplayElement = function () {
                return u
            }, this.resize = function (e, t) {
                f = e, l = t;
                if (s.jwGetFullscreen())_hide(u); else {
                    var n = {display: "block", width: f, height: l};
                    _css(u, n)
                }
            }, this.show = function () {
                _show(u)
            }, this.hide = function () {
                _hide(u)
            }, g(), this
        }
    }(jwplayer5), function (e) {
        function t(t) {
            if (e.utils.isYouTube(t.file))return"youtube";
            var n = e.utils.extension(t.file), r;
            if (n && e.utils.extensionmap[n]) {
                if (n == "m3u8")return"video";
                r = e.utils.extensionmap[n].html5
            } else t.type && (r = t.type);
            if (r) {
                var i = r.split("/")[0];
                if (i == "audio")return"sound";
                if (i == "video")return i
            }
            return""
        }

        e.html5.playlistitem = function (n) {
            var r = {author: "", date: "", description: "", image: "", link: "", mediaid: "", tags: "", title: "", provider: "", file: "", streamer: "", duration: -1, start: 0, currentLevel: -1, levels: []}, i = e.utils.extend({}, r, n);
            return i.type && (i.provider = i.type, delete i.type), i.levels.length === 0 && (i.levels[0] = new e.html5.playlistitemlevel(i)), i.provider ? i.provider = i.provider.toLowerCase() : i.provider = t(i.levels[0]), i
        }
    }(jwplayer5), function (e) {
        e.html5.playlistitemlevel = function (t) {
            var n = {file: "", streamer: "", bitrate: 0, width: 0};
            for (var r in n)e.utils.exists(t[r]) && (n[r] = t[r]);
            return n
        }
    }(jwplayer5), function (e) {
        e.html5.playlistloader = function () {
            function n(n) {
                var i = [];
                try {
                    var i = e.utils.parsers.rssparser.parse(n.responseXML.firstChild);
                    t.sendEvent(e.api.events.JWPLAYER_PLAYLIST_LOADED, {playlist: new e.html5.playlist({playlist: i})})
                } catch (s) {
                    r("Could not parse the playlist")
                }
            }

            function r(n) {
                t.sendEvent(e.api.events.JWPLAYER_ERROR, {message: n ? n : "Could not load playlist an unknown reason."})
            }

            var t = new e.html5.eventdispatcher;
            e.utils.extend(this, t), this.load = function (t) {
                e.utils.ajax(t, n, r)
            }
        }
    }(jwplayer5), function (e) {
        e.html5.skin = function () {
            var t = {}, n = !1;
            this.load = function (r, i) {
                new e.html5.skinloader(r, function (e) {
                    n = !0, t = e, i()
                }, function () {
                    new e.html5.skinloader("", function (e) {
                        n = !0, t = e, i()
                    })
                })
            }, this.getSkinElement = function (r, i) {
                if (n)try {
                    return t[r].elements[i]
                } catch (s) {
                    e.utils.log("No such skin component / element: ", [r, i])
                }
                return null
            }, this.getComponentSettings = function (e) {
                return n && t && t[e] ? t[e].settings : null
            }, this.getComponentLayout = function (e) {
                return n ? t[e].layout : null
            }
        }
    }(jwplayer5), function (e) {
        e.html5.skinloader = function (t, n, r) {
            function h() {
                typeof l != "string" || l === "" ? p(e.html5.defaultSkin().xml) : e.utils.ajax(e.utils.getAbsolutePath(l), function (t) {
                    try {
                        if (e.utils.exists(t.responseXML)) {
                            p(t.responseXML);
                            return
                        }
                    } catch (n) {
                        m()
                    }
                    p(e.html5.defaultSkin().xml)
                }, function (t) {
                    p(e.html5.defaultSkin().xml)
                })
            }

            function p(t) {
                var n = t.getElementsByTagName("component");
                if (n.length === 0)return;
                for (var r = 0; r < n.length; r++) {
                    var s = n[r].getAttribute("name"), o = {settings: {}, elements: {}, layout: {}};
                    i[s] = o;
                    var f = n[r].getElementsByTagName("elements")[0].getElementsByTagName("element");
                    for (var l = 0; l < f.length; l++)v(f[l], s);
                    var c = n[r].getElementsByTagName("settings")[0];
                    if (c && c.childNodes.length > 0) {
                        var h = c.getElementsByTagName("setting");
                        for (var p = 0; p < h.length; p++) {
                            var m = h[p].getAttribute("name"), g = h[p].getAttribute("value"), y = /color$/.test(m) ? "color" : null;
                            i[s].settings[m] = e.utils.typechecker(g, y)
                        }
                    }
                    var w = n[r].getElementsByTagName("layout")[0];
                    if (w && w.childNodes.length > 0) {
                        var E = w.getElementsByTagName("group");
                        for (var S = 0; S < E.length; S++) {
                            var x = E[S];
                            i[s].layout[x.getAttribute("position")] = {elements: []};
                            for (var T = 0; T < x.attributes.length; T++) {
                                var N = x.attributes[T];
                                i[s].layout[x.getAttribute("position")][N.name] = N.value
                            }
                            var C = x.getElementsByTagName("*");
                            for (var k = 0; k < C.length; k++) {
                                var L = C[k];
                                i[s].layout[x.getAttribute("position")].elements.push({type: L.tagName});
                                for (var A = 0; A < L.attributes.length; A++) {
                                    var O = L.attributes[A];
                                    i[s].layout[x.getAttribute("position")].elements[k][O.name] = O.value
                                }
                                e.utils.exists(i[s].layout[x.getAttribute("position")].elements[k].name) || (i[s].layout[x.getAttribute("position")].elements[k].name = L.tagName)
                            }
                        }
                    }
                    u = !1, d()
                }
            }

            function d() {
                clearInterval(f), c || (f = setInterval(function () {
                    g()
                }, 100))
            }

            function v(t, n) {
                var r = new Image, s = t.getAttribute("name"), u = t.getAttribute("src"), f;
                if (u.indexOf("data:image/png;base64,") === 0)f = u; else {
                    var h = e.utils.getAbsolutePath(l), p = h.substr(0, h.lastIndexOf("/"));
                    f = [p, n, u].join("/")
                }
                i[n].elements[s] = {height: 0, width: 0, src: "", ready: !1, image: r}, r.onload = function (e) {
                    y(r, s, n)
                }, r.onerror = function (e) {
                    c = !0, d(), o()
                }, r.src = f
            }

            function m() {
                for (var e in i) {
                    var t = i[e];
                    for (var n in t.elements) {
                        var r = t.elements[n], s = r.image;
                        s.onload = null, s.onerror = null, delete r.image, delete t.elements[n]
                    }
                    delete i[e]
                }
            }

            function g() {
                for (var e in i)if (e != "properties")for (var t in i[e].elements)if (!i[e].elements[t].ready)return;
                u === !1 && (clearInterval(f), s(i))
            }

            function y(t, n, r) {
                i[r] && i[r].elements[n] ? (i[r].elements[n].height = t.height, i[r].elements[n].width = t.width, i[r].elements[n].src = t.src, i[r].elements[n].ready = !0, d()) : e.utils.log("Loaded an image for a missing element: " + r + "." + n)
            }

            var i = {}, s = n, o = r, u = !0, f, l = t, c = !1;
            h()
        }
    }(jwplayer5), function (e) {
        e.html5.api = function (t, n) {
            function f() {
                s.state == e.api.events.state.PLAYING || s.state == e.api.events.state.BUFFERING ? u.pause() : u.play()
            }

            function l(e) {
                return function () {
                    return s[e]
                }
            }

            function c(e, t, n) {
                return function () {
                    var r = s.plugins.object[e];
                    r && r[t] && typeof r[t] == "function" && r[t].apply(r, n)
                }
            }

            function p(e) {
                return function () {
                    if (h && typeof h[e] == "function")return h[e].apply(this, arguments);
                    _utils.log("Could not call instream method - instream API not initialized")
                }
            }

            function d() {
                s.config.playlistfile ? (s.addEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, v), s.loadPlaylist(s.config.playlistfile)) : typeof s.config.playlist == "string" ? (s.addEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, v), s.loadPlaylist(s.config.playlist)) : (s.loadPlaylist(s.config), setTimeout(v, 25))
            }

            function v(t) {
                s.removeEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED, v), s.setupPlugins(), o.setup();
                var t = {id: r.id, version: r.version};
                u.playerReady(t)
            }

            var r = {}, i = document.createElement("div");
            t.parentNode.replaceChild(i, t), i.id = t.id, r.version = e.version, r.id = i.id;
            var s = new e.html5.model(r, i, n), o = new e.html5.view(r, i, s), u = new e.html5.controller(r, i, s, o);
            r.skin = new e.html5.skin, r.jwPlay = function (e) {
                typeof e == "undefined" ? f() : e.toString().toLowerCase() == "true" ? u.play() : u.pause()
            }, r.jwPause = function (e) {
                typeof e == "undefined" ? f() : e.toString().toLowerCase() == "true" ? u.pause() : u.play()
            }, r.jwStop = u.stop, r.jwSeek = u.seek, r.jwPlaylistItem = function (e) {
                if (!h)return u.item(e);
                if (h.playlistClickable())return h.jwInstreamDestroy(), u.item(e)
            }, r.jwPlaylistNext = u.next, r.jwPlaylistPrev = u.prev, r.jwResize = u.resize, r.jwLoad = u.load, r.jwDetachMedia = u.detachMedia, r.jwAttachMedia = u.attachMedia, r.jwGetPlaylistIndex = l("item"), r.jwGetPosition = l("position"), r.jwGetDuration = l("duration"), r.jwGetBuffer = l("buffer"), r.jwGetWidth = l("width"), r.jwGetHeight = l("height"), r.jwGetFullscreen = l("fullscreen"), r.jwSetFullscreen = u.setFullscreen, r.jwGetVolume = l("volume"), r.jwSetVolume = u.setVolume, r.jwGetMute = l("mute"), r.jwSetMute = u.setMute, r.jwGetStretching = function () {
                return s.stretching.toUpperCase()
            }, r.jwGetState = l("state"), r.jwGetVersion = function () {
                return r.version
            }, r.jwGetPlaylist = function () {
                return s.playlist
            }, r.jwAddEventListener = u.addEventListener, r.jwRemoveEventListener = u.removeEventListener, r.jwSendEvent = u.sendEvent, r.jwDockSetButton = function (e, t, n, r) {
                s.plugins.object.dock && s.plugins.object.dock.setButton && s.plugins.object.dock.setButton(e, t, n, r)
            }, r.jwControlbarShow = c("controlbar", "show"), r.jwControlbarHide = c("controlbar", "hide"), r.jwDockShow = c("dock", "show"), r.jwDockHide = c("dock", "hide"), r.jwDisplayShow = c("display", "show"), r.jwDisplayHide = c("display", "hide");
            var h;
            return r.jwLoadInstream = function (t, n) {
                h || (h = new e.html5.instream(r, s, o, u)), setTimeout(function () {
                    h.load(t, n)
                }, 10)
            }, r.jwInstreamDestroy = function () {
                h && h.jwInstreamDestroy()
            }, r.jwInstreamAddEventListener = p("jwInstreamAddEventListener"), r.jwInstreamRemoveEventListener = p("jwInstreamRemoveEventListener"), r.jwInstreamGetState = p("jwInstreamGetState"), r.jwInstreamGetDuration = p("jwInstreamGetDuration"), r.jwInstreamGetPosition = p("jwInstreamGetPosition"), r.jwInstreamPlay = p("jwInstreamPlay"), r.jwInstreamPause = p("jwInstreamPause"), r.jwInstreamSeek = p("jwInstreamSeek"), r.jwDestroy = function () {
                u.destroy()
            }, r.jwGetLevel = function () {
            }, r.jwGetBandwidth = function () {
            }, r.jwGetLockState = function () {
            }, r.jwLock = function () {
            }, r.jwUnlock = function () {
            }, s.config.chromeless && !e.utils.isIOS() ? d() : r.skin.load(s.config.skin, d), r
        }
    }(jwplayer5)
}
;