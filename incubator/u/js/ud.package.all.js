function ControlVersion() {
    var e, t, n;
    try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t.GetVariable("$version")
    } catch (n) {
    }
    if (!e)try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
    } catch (n) {
    }
    if (!e)try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = t.GetVariable("$version")
    } catch (n) {
    }
    if (!e)try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = "WIN 3,0,18,0"
    } catch (n) {
    }
    if (!e)try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = "WIN 2,0,0,11"
    } catch (n) {
        e = -1
    }
    return e
}
function GetSwfVer() {
    var e = -1;
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var t = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "", n = navigator.plugins["Shockwave Flash" + t].description, r = n.split(" "), i = r[2].split("."), s = i[0], o = i[1], u = r[3];
            u == "" && (u = r[4]), u[0] == "d" ? u = u.substring(1) : u[0] == "r" && (u = u.substring(1), u.indexOf("d") > 0 && (u = u.substring(0, u.indexOf("d"))));
            var e = s + "." + o + "." + u
        }
    } else navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1 ? e = 4 : navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1 ? e = 3 : navigator.userAgent.toLowerCase().indexOf("webtv") != -1 ? e = 2 : isIE && isWin && !isOpera && (e = ControlVersion());
    return e
}
function DetectFlashVer(e, t, n) {
    versionStr = GetSwfVer();
    if (versionStr == -1)return!1;
    if (versionStr != 0) {
        isIE && isWin && !isOpera ? (tempArray = versionStr.split(" "), tempString = tempArray[1], versionArray = tempString.split(",")) : versionArray = versionStr.split(".");
        var r = versionArray[0], i = versionArray[1], s = versionArray[2];
        if (r > parseFloat(e))return!0;
        if (r == parseFloat(e)) {
            if (i > parseFloat(t))return!0;
            if (i == parseFloat(t) && s >= parseFloat(n))return!0
        }
        return!1
    }
}
function AC_AddExtension(e, t) {
    return e.indexOf("?") != -1 ? e.replace(/\?/, t + "?") : e + t
}
function AC_Generateobj(e, t, n) {
    var r = "";
    if (isIE && isWin && !isOpera) {
        r += "<object ";
        for (var i in e)r += i + '="' + e[i] + '" ';
        r += ">";
        for (var i in t)r += '<param name="' + i + '" value="' + t[i] + '" /> ';
        r += "</object>"
    } else {
        r += "<embed ";
        for (var i in n)r += i + '="' + n[i] + '" ';
        r += "> </embed>"
    }
    document.write(r)
}
function AC_FL_RunContent() {
    var e = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    AC_Generateobj(e.objAttrs, e.params, e.embedAttrs)
}
function AC_GetArgs(e, t, n, r, i) {
    var s = new Object;
    s.embedAttrs = new Object, s.params = new Object, s.objAttrs = new Object;
    for (var o = 0; o < e.length; o += 2) {
        var u = e[o].toLowerCase();
        switch (u) {
            case"classid":
                break;
            case"pluginspage":
                s.embedAttrs[e[o]] = e[o + 1];
                break;
            case"src":
            case"movie":
                e[o + 1] = AC_AddExtension(e[o + 1], t), s.embedAttrs.src = e[o + 1], s.params[n] = e[o + 1];
                break;
            case"onafterupdate":
            case"onbeforeupdate":
            case"onblur":
            case"oncellchange":
            case"onclick":
            case"ondblClick":
            case"ondrag":
            case"ondragend":
            case"ondragenter":
            case"ondragleave":
            case"ondragover":
            case"ondrop":
            case"onfinish":
            case"onfocus":
            case"onhelp":
            case"onmousedown":
            case"onmouseup":
            case"onmouseover":
            case"onmousemove":
            case"onmouseout":
            case"onkeypress":
            case"onkeydown":
            case"onkeyup":
            case"onload":
            case"onlosecapture":
            case"onpropertychange":
            case"onreadystatechange":
            case"onrowsdelete":
            case"onrowenter":
            case"onrowexit":
            case"onrowsinserted":
            case"onstart":
            case"onscroll":
            case"onbeforeeditfocus":
            case"onactivate":
            case"onbeforedeactivate":
            case"ondeactivate":
            case"type":
            case"codebase":
                s.objAttrs[e[o]] = e[o + 1];
                break;
            case"id":
            case"width":
            case"height":
            case"align":
            case"vspace":
            case"hspace":
            case"class":
            case"title":
            case"accesskey":
            case"name":
            case"tabindex":
                s.embedAttrs[e[o]] = s.objAttrs[e[o]] = e[o + 1];
                break;
            default:
                s.embedAttrs[e[o]] = s.params[e[o]] = e[o + 1]
        }
    }
    return s.objAttrs.classid = r, i && (s.embedAttrs.type = i), s
}
require.config({paths: {jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min", "jquery.ui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min", swfobject: "https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject", "jquery.autoellipsis": "jquery.autoellipsis-1.0.10", "jquery.easing": "jquery.easing-1.3", "jquery.json": "jquery.json-2.3", "jquery.iframe-transport": "jquery.iframe-transport", "jquery.jqGrid": "jquery.jqGrid.src", jsuri: "jsuri-1.1.1", jwplayer: "/static/jwplayer/source/jwplayer", jwplayer5: "jwplayer5", redactor: "redactor/redactor", moment: "moment.min", "ud.mixpanel": "ud.mixpanel-integration", facebooklib: "https://connect.facebook.net/en_US/all", pinterestpinit: "https://assets.pinterest.com/js/pinit", googleplusone: "https://apis.google.com/js/plusone", twitterwidgets: "https://platform.twitter.com/widgets", googleanalytics: "https://ssl.google-analytics.com/ga", quantcast: "https://secure.quantserve.com/quant", compete: "https://c.compete.com/bootstrap/s/d7c98646df36de38186f8c8bbd16900c/udemy-com/bootstrap", adroll: "https://s.adroll.com/j/roundtrip", jsrepl: "/static/js/jsrepl/build/jsrepl", ace: "ace/ace", async: "requirejs-plugins/async", depend: "requirejs-plugins/depend", font: "requirejs-plugins/font", goog: "requirejs-plugins/goog", image: "requirejs-plugins/image", json: "requirejs-plugins/json", noext: "requirejs-plugins/noext", mdown: "requirejs-plugins/mdown", propertyParser: "requirejs-plugins/propertyParser"}, shim: {redactor: ["jquery"], bootstrap: ["jquery", "jquery.ui"], "jquery.ui": ["jquery"]}, waitSeconds: 0}), define("main.config", function () {
});
var UD = UD || {};
UD.mixpanel = UD.mixpanel || {}, UD.mixpanel.actions = UD.mixpanel.actions || {}, UD.mixpanel.ActionBase = function () {
    var e = function () {
        this.name = null
    };
    return e.prototype.getData = function () {
        return{}
    }, e
}(), UD.mixpanel.getPriceRange = function (e) {
    if (e <= 0)return 0;
    var t = [15, 50, 100, 500], n = 0, r = 0, i = t.some(function (t) {
        return e <= t ? (n = r + "-" + t, !0) : (r = t, !1)
    });
    return i == 0 && (n = t[t.length - 1] + "+"), n
}, UD.mixpanel.ActionLogger = function () {
    var e = function () {
    };
    return e.prototype.log = function (t, n, r) {
        var n = n || {}, i = new t(n);
        if (i instanceof UD.mixpanel.ActionBase == 0) {
            console && console.warn("Action should be an instance of UD.mixpanel.ActionBase");
            return
        }
        if (i.name === undefined || i.name === null) {
            console && console.warn("Action name shouldn't be undefined/null");
            return
        }
        var s = i.name, o = i.getData();
        mixpanel.track(s, o, r)
    }, e
}(), UD.mixpanel.logger = new UD.mixpanel.ActionLogger, define("mixpanel/ud.mixpanel-base", function () {
}), define("mixpanel/ud.mixpanel.actions.homepage", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.HomePage = function () {
        var e = function () {
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "HomePage", e
    }()
}), define("mixpanel/ud.mixpanel.actions.newsfeedlinkclick", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.NewsfeedLinkClick = function () {
        var e = function (e) {
            this.__feedStoryType = e.feedStoryType, this.__targetPageType = e.targetPageType, this.__activityId = e.activityId
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "Newsfeed Link Click", e.prototype.getData = function () {
            return{feedStoryType: this.__feedStoryType, targetPageType: this.__targetPageType, activityId: this.__activityId}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.newsfeedstoryimpression", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.NewsfeedStoryImpression = function () {
        var e = function (e) {
            this.__feedStoryType = e.feedStoryType, this.__activityId = e.activityId
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "Newsfeed Story Impression", e.prototype.getData = function () {
            return{feedStoryType: this.__feedStoryType, activityId: this.__activityId}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.newsfeedstorylike", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.NewsfeedStoryLike = function () {
        var e = function (e) {
            this.__feedStoryType = e.feedStoryType, this.__activityId = e.activityId
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "Newsfeed Story Like", e.prototype.getData = function () {
            return{feedStoryType: this.__feedStoryType, activityId: this.__activityId}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.newsfeedstorycomment", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.NewsfeedStoryComment = function () {
        var e = function (e) {
            this.__feedStoryType = e.feedStoryType, this.__activityId = e.activityId
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "Newsfeed Story Comment", e.prototype.getData = function () {
            return{feedStoryType: this.__feedStoryType, activityId: this.__activityId}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.newsfeeduserfollow", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.NewsfeedUserFollow = function () {
        var e = function () {
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "Newsfeed User Follow", e
    }()
}), define("mixpanel/ud.mixpanel.actions.landing-page", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.LandingPage = function () {
        var e = function (e) {
            this.__courseId = e.courseId, this.__price = e.price, this.__priceRange = UD.mixpanel.getPriceRange(this.__price)
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "See Course Landing Page", e.prototype.getData = function () {
            return(this.__courseId == undefined || this.__price == undefined) && console && console.warn("Missing data in Landing Page action"), {courseId: this.__courseId, price: this.__price, priceRange: this.__priceRange}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.interests-page", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.InterestsPage = function () {
        var e = function () {
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "See Interests Page", e
    }()
}), define("mixpanel/ud.mixpanel.actions.recommended-page", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.RecommendedPage = function () {
        var e = function (e) {
            this.__pagination = e.pagination
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "See Recommended Page", e.prototype.getData = function () {
            return this.__pagination == undefined && console && console.warn("Missing data in See Recommended Page action"), {pagination: this.__pagination}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.popular-page", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.PopularPage = function () {
        var e = function (e) {
            this.__pagination = e.pagination
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "See Popular Page", e.prototype.getData = function () {
            return this.__pagination == undefined && console && console.warn("Missing data in See Popular Page action"), {pagination: this.__pagination}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.category-page", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.CategoryPage = function () {
        var e = function (e) {
            this.__pagination = e.pagination, this.__category = e.category
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "See Category Page", e.prototype.getData = function () {
            return(this.__pagination == undefined || this.__category == undefined) && console && console.warn("Missing data in See Category Page action"), {pagination: this.__pagination, category: this.__category}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.search-page", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.SearchPage = function () {
        var e = function (e) {
            this.__pagination = e.pagination, this.__keyword = e.keyword
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "See Search Page", e.prototype.getData = function () {
            return(this.__pagination == undefined || this.__keyword == undefined) && console && console.warn("Missing data in See Category Page action"), {pagination: this.__pagination, keyword: this.__keyword}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.my-courses-page", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.MyCoursesPage = function () {
        var e = function () {
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "See My Courses Page", e
    }()
}), define("mixpanel/ud.mixpanel.actions.payment-form-page", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.PaymentFormPage = function () {
        var e = function (e) {
            this.__courseId = e.courseId, this.__price = e.price, this.__priceRange = UD.mixpanel.getPriceRange(this.__price)
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "See Payment Form Page", e.prototype.getData = function () {
            return(this.__courseId == undefined || this.__price == undefined) && console && console.warn("Missing data in Payment Form Page action"), {courseId: this.__courseId, price: this.__price, priceRange: this.__priceRange}
        }, e
    }()
}), define("mixpanel/ud.mixpanel.actions.click-redeem-button", ["mixpanel/ud.mixpanel-base"], function () {
    UD.mixpanel.actions.ClickRedeemButton = function () {
        var e = function (e) {
            this.__courseId = e.courseId, this.__price = e.price, this.__priceRange = UD.mixpanel.getPriceRange(this.__price)
        };
        return e.prototype = new UD.mixpanel.ActionBase, e.prototype.name = "Click Redeem Button", e.prototype.getData = function () {
            return(this.__courseId == undefined || this.__price == undefined) && console && console.warn("Missing data in Click Redeem Button action"), {courseId: this.__courseId, price: this.__price, priceRange: this.__priceRange}
        }, e
    }()
}), define("ud.mixpanel", ["jquery", "mixpanel/ud.mixpanel-base", "mixpanel/ud.mixpanel.actions.homepage", "mixpanel/ud.mixpanel.actions.newsfeedlinkclick", "mixpanel/ud.mixpanel.actions.newsfeedstoryimpression", "mixpanel/ud.mixpanel.actions.newsfeedstorylike", "mixpanel/ud.mixpanel.actions.newsfeedstorycomment", "mixpanel/ud.mixpanel.actions.newsfeeduserfollow", "mixpanel/ud.mixpanel.actions.landing-page", "mixpanel/ud.mixpanel.actions.interests-page", "mixpanel/ud.mixpanel.actions.recommended-page", "mixpanel/ud.mixpanel.actions.popular-page", "mixpanel/ud.mixpanel.actions.category-page", "mixpanel/ud.mixpanel.actions.search-page", "mixpanel/ud.mixpanel.actions.my-courses-page", "mixpanel/ud.mixpanel.actions.payment-form-page", "mixpanel/ud.mixpanel.actions.click-redeem-button"], function (e) {
    (function (e, t) {
        window.mixpanel = t;
        var n, r, i, s;
        n = e.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = ("https:" === e.location.protocol ? "https:" : "http:") + "//cdn.mxpnl.com/libs/mixpanel-2.1.min.js", r = e.getElementsByTagName("script")[0], r.parentNode.insertBefore(n, r), t._i = [], t.init = function (e, n, r) {
            function o(e, t) {
                var n = t.split(".");
                2 == n.length && (e = e[n[0]], t = n[1]), e[t] = function () {
                    e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }

            var u = t;
            "undefined" != typeof r ? u = t[r] = [] : r = "mixpanel", u.people = u.people || [], i = "disable track track_pageview track_links track_forms register register_once unregister identify name_tag set_config people.identify people.set people.increment".split(" ");
            for (s = 0; s < i.length; s++)o(u, i[s]);
            t._i.push([e, n, r])
        }, t.__SV = 1.1
    })(document, window.mixpanel || []), mixpanel.init(UD.Config.mixpanelToken)
}), define("init", ["jquery", "jquery.ui", "bootstrap"], function (e) {
    function n(e) {
        return typeof e == "undefined"
    }

    var t = e.fn.button.noConflict();
    e.fn.btn = t, Function.prototype.context = function (e) {
        if (arguments.length < 2 && n(arguments[0]))return this;
        var t = this, r = arguments;
        return function () {
            var n = new Array;
            for (var i = 1; i < r.length; i++)n.push(r[i]);
            for (var i = 0; i < arguments.length; i++)n.push(arguments[i]);
            return t.apply(e, n)
        }
    };
    var r = e.fn.show;
    e.fn.show = function (t, i) {
        return t == 0 && (t = 1), e(this).each(function () {
            n(e(this).attr("isfirst")) && e(this).attr("isfirst", "true");
            var s = e(this), o = function () {
                s.removeAttr("isfirst"), e.isFunction(i) && i.apply(s), s.trigger("aftershow")
            };
            s.trigger("beforeshow"), n(t) && s.attr("isfirst") == "true" ? (s.attr("isfirst", "false"), r.apply(s, [1, o])) : (n(e(this).attr("isfirst")) || s.attr("isfirst", "false"), r.apply(s, [t, o]))
        })
    }
}), define("jquery.fancybox", ["jquery"], function (e) {
    (function (e, t, n, r) {
        var i = n(e), s = n(t), o = n.fancybox = function () {
            o.open.apply(this, arguments)
        }, u = null, a = t.createTouch !== r, f = function (e) {
            return e && e.hasOwnProperty && e instanceof n
        }, l = function (e) {
            return e && n.type(e) === "string"
        }, c = function (e) {
            return l(e) && e.indexOf("%") > 0
        }, h = function (e) {
            return e && (!e.style.overflow || e.style.overflow !== "hidden") && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
        }, p = function (e, t) {
            var n = parseInt(e, 10) || 0;
            return t && c(e) && (n = o.getViewport()[t] / 100 * n), Math.ceil(n)
        }, d = function (e, t) {
            return p(e, t) + "px"
        };
        n.extend(o, {version: "2.1.3", defaults: {padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !a, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: {dataType: "html", headers: {"X-fancyBox": !0}}, iframe: {scrolling: "auto", preload: !0}, swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"}, keys: {next: {13: "left", 34: "up", 39: "left", 40: "up"}, prev: {8: "right", 33: "down", 37: "right", 38: "down"}, close: [27], play: [32], toggle: [70]}, direction: {next: "left", prev: "right"}, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (n.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: {overlay: !0, title: !0}, onCancel: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeChange: n.noop, beforeClose: n.noop, afterClose: n.noop}, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: {timer: null, isActive: !1}, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (e, t) {
            if (!e)return;
            n.isPlainObject(t) || (t = {});
            if (!1 === o.close(!0))return;
            return n.isArray(e) || (e = f(e) ? n(e).get() : [e]), n.each(e, function (i, s) {
                var u = {}, a, c, h, p, d, v, m;
                n.type(s) === "object" && (s.nodeType && (s = n(s)), f(s) ? (u = {href: s.data("fancybox-href") || s.attr("href"), title: s.data("fancybox-title") || s.attr("title"), isDom: !0, element: s}, n.metadata && n.extend(!0, u, s.metadata())) : u = s), a = t.href || u.href || (l(s) ? s : null), c = t.title !== r ? t.title : u.title || "", h = t.content || u.content, p = h ? "html" : t.type || u.type, !p && u.isDom && (p = s.data("fancybox-type"), p || (d = s.prop("class").match(/fancybox\.(\w+)/), p = d ? d[1] : null)), l(a) && (p || (o.isImage(a) ? p = "image" : o.isSWF(a) ? p = "swf" : a.charAt(0) === "#" ? p = "inline" : l(s) && (p = "html", h = s)), p === "ajax" && (v = a.split(/\s+/, 2), a = v.shift(), m = v.shift())), h || (p === "inline" ? a ? h = n(l(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : u.isDom && (h = s) : p === "html" ? h = a : !p && !a && u.isDom && (p = "inline", h = s)), n.extend(u, {href: a, type: p, content: h, title: c, selector: m}), e[i] = u
            }), o.opts = n.extend(!0, {}, o.defaults, t), t.keys !== r && (o.opts.keys = t.keys ? n.extend({}, o.defaults.keys, t.keys) : !1), o.group = e, o._start(o.opts.index)
        }, cancel: function () {
            var e = o.coming;
            if (!e || !1 === o.trigger("onCancel"))return;
            o.hideLoading(), o.ajaxLoad && o.ajaxLoad.abort(), o.ajaxLoad = null, o.imgPreload && (o.imgPreload.onload = o.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), o.coming = null, o.current || o._afterZoomOut(e)
        }, close: function (e) {
            o.cancel();
            if (!1 === o.trigger("beforeClose"))return;
            o.unbindEvents();
            if (!o.isActive)return;
            !o.isOpen || e === !0 ? (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), o._afterZoomOut()) : (o.isOpen = o.isOpened = !1, o.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), o.wrap.stop(!0, !0).removeClass("fancybox-opened"), o.transitions[o.current.closeMethod]())
        }, play: function (e) {
            var t = function () {
                clearTimeout(o.player.timer)
            }, r = function () {
                t(), o.current && o.player.isActive && (o.player.timer = setTimeout(o.next, o.current.playSpeed))
            }, i = function () {
                t(), n("body").unbind(".player"), o.player.isActive = !1, o.trigger("onPlayEnd")
            }, s = function () {
                o.current && (o.current.loop || o.current.index < o.group.length - 1) && (o.player.isActive = !0, n("body").bind({"afterShow.player onUpdate.player": r, "onCancel.player beforeClose.player": i, "beforeLoad.player": t}), r(), o.trigger("onPlayStart"))
            };
            e === !0 || !o.player.isActive && e !== !1 ? s() : i()
        }, next: function (e) {
            var t = o.current;
            t && (l(e) || (e = t.direction.next), o.jumpto(t.index + 1, e, "next"))
        }, prev: function (e) {
            var t = o.current;
            t && (l(e) || (e = t.direction.prev), o.jumpto(t.index - 1, e, "prev"))
        }, jumpto: function (e, t, n) {
            var i = o.current;
            if (!i)return;
            e = p(e), o.direction = t || i.direction[e >= i.index ? "next" : "prev"], o.router = n || "jumpto", i.loop && (e < 0 && (e = i.group.length + e % i.group.length), e %= i.group.length), i.group[e] !== r && (o.cancel(), o._start(e))
        }, reposition: function (e, t) {
            var r = o.current, i = r ? r.wrap : null, s;
            i && (s = o._getPosition(t), e && e.type === "scroll" ? (delete s.position, i.stop(!0, !0).animate(s, 200)) : (i.css(s), r.pos = n.extend({}, r.dim, s)))
        }, update: function (e) {
            var t = e && e.type, n = !t || t === "orientationchange";
            n && (clearTimeout(u), u = null);
            if (!o.isOpen || u)return;
            u = setTimeout(function () {
                var r = o.current;
                if (!r || o.isClosing)return;
                o.wrap.removeClass("fancybox-tmp"), (n || t === "load" || t === "resize" && r.autoResize) && o._setDimension(), (t !== "scroll" || !r.canShrink) && o.reposition(e), o.trigger("onUpdate"), u = null
            }, n && !a ? 0 : 300)
        }, toggle: function (e) {
            o.isOpen && (o.current.fitToView = n.type(e) === "boolean" ? e : !o.current.fitToView, a && (o.wrap.removeAttr("style").addClass("fancybox-tmp"), o.trigger("onUpdate")), o.update())
        }, hideLoading: function () {
            s.unbind(".loading"), n("#fancybox-loading").remove()
        }, showLoading: function () {
            var e, t;
            o.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"), s.bind("keydown.loading", function (e) {
                (e.which || e.keyCode) === 27 && (e.preventDefault(), o.cancel())
            }), o.defaults.fixed || (t = o.getViewport(), e.css({position: "absolute", top: t.h * .5 + t.y, left: t.w * .5 + t.x}))
        }, getViewport: function () {
            var t = o.current && o.current.locked || !1, n = {x: i.scrollLeft(), y: i.scrollTop()};
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = a && e.innerWidth ? e.innerWidth : i.width(), n.h = a && e.innerHeight ? e.innerHeight : i.height()), n
        }, unbindEvents: function () {
            o.wrap && f(o.wrap) && o.wrap.unbind(".fb"), s.unbind(".fb"), i.unbind(".fb")
        }, bindEvents: function () {
            var e = o.current, t;
            if (!e)return;
            i.bind("orientationchange.fb" + (a ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), o.update), t = e.keys, t && s.bind("keydown.fb", function (i) {
                var s = i.which || i.keyCode, u = i.target || i.srcElement;
                if (s === 27 && o.coming)return!1;
                !i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && (!u || !u.type && !n(u).is("[contenteditable]")) && n.each(t, function (t, u) {
                    if (e.group.length > 1 && u[s] !== r)return o[t](u[s]), i.preventDefault(), !1;
                    if (n.inArray(s, u) > -1)return o[t](), i.preventDefault(), !1
                })
            }), n.fn.mousewheel && e.mouseWheel && o.wrap.bind("mousewheel.fb", function (t, r, i, s) {
                var u = t.target || null, a = n(u), f = !1;
                while (a.length) {
                    if (f || a.is(".fancybox-skin") || a.is(".fancybox-wrap"))break;
                    f = h(a[0]), a = n(a).parent()
                }
                r !== 0 && !f && o.group.length > 1 && !e.canShrink && (s > 0 || i > 0 ? o.prev(s > 0 ? "down" : "left") : (s < 0 || i < 0) && o.next(s < 0 ? "up" : "right"), t.preventDefault())
            })
        }, trigger: function (e, t) {
            var r, i = t || o.coming || o.current;
            if (!i)return;
            n.isFunction(i[e]) && (r = i[e].apply(i, Array.prototype.slice.call(arguments, 1)));
            if (r === !1)return!1;
            i.helpers && n.each(i.helpers, function (t, r) {
                r && o.helpers[t] && n.isFunction(o.helpers[t][e]) && (r = n.extend(!0, {}, o.helpers[t].defaults, r), o.helpers[t][e](r, i))
            }), n.event.trigger(e + ".fb")
        }, isImage: function (e) {
            return l(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
        }, isSWF: function (e) {
            return l(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        }, _start: function (e) {
            var t = {}, r, i, s, u, f;
            e = p(e), r = o.group[e] || null;
            if (!r)return!1;
            t = n.extend(!0, {}, o.opts, r), u = t.margin, f = t.padding, n.type(u) === "number" && (t.margin = [u, u, u, u]), n.type(f) === "number" && (t.padding = [f, f, f, f]), t.modal && n.extend(!0, t, {closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}}), t.autoSize && (t.autoWidth = t.autoHeight = !0), t.width === "auto" && (t.autoWidth = !0), t.height === "auto" && (t.autoHeight = !0), t.group = o.group, t.index = e, o.coming = t;
            if (!1 === o.trigger("beforeLoad")) {
                o.coming = null;
                return
            }
            s = t.type, i = t.href;
            if (!s)return o.coming = null, o.current && o.router && o.router !== "jumpto" ? (o.current.index = e, o[o.router](o.direction)) : !1;
            o.isActive = !0;
            if (s === "image" || s === "swf")t.autoHeight = t.autoWidth = !1, t.scrolling = "visible";
            s === "image" && (t.aspectRatio = !0), s === "iframe" && a && (t.scrolling = "scroll"), t.wrap = n(t.tpl.wrap).addClass("fancybox-" + (a ? "mobile" : "desktop") + " fancybox-type-" + s + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"), n.extend(t, {skin: n(".fancybox-skin", t.wrap), outer: n(".fancybox-outer", t.wrap), inner: n(".fancybox-inner", t.wrap)}), n.each(["Top", "Right", "Bottom", "Left"], function (e, n) {
                t.skin.css("padding" + n, d(t.padding[e]))
            }), o.trigger("onReady");
            if (s === "inline" || s === "html") {
                if (!t.content || !t.content.length)return o._error("content")
            } else if (!i)return o._error("href");
            s === "image" ? o._loadImage() : s === "ajax" ? o._loadAjax() : s === "iframe" ? o._loadIframe() : o._afterLoad()
        }, _error: function (e) {
            n.extend(o.coming, {type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: e, content: o.coming.tpl.error}), o._afterLoad()
        }, _loadImage: function () {
            var e = o.imgPreload = new Image;
            e.onload = function () {
                this.onload = this.onerror = null, o.coming.width = this.width, o.coming.height = this.height, o._afterLoad()
            }, e.onerror = function () {
                this.onload = this.onerror = null, o._error("image")
            }, e.src = o.coming.href, e.complete !== !0 && o.showLoading()
        }, _loadAjax: function () {
            var e = o.coming;
            o.showLoading(), o.ajaxLoad = n.ajax(n.extend({}, e.ajax, {url: e.href, error: function (e, t) {
                o.coming && t !== "abort" ? o._error("ajax", e) : o.hideLoading()
            }, success: function (t, n) {
                n === "success" && (e.content = t, o._afterLoad())
            }}))
        }, _loadIframe: function () {
            var e = o.coming, t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", a ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function () {
                try {
                    n(this).find("iframe").hide().attr("src", "https://about:blank").end().empty()
                } catch (e) {
                }
            }), e.iframe.preload && (o.showLoading(), t.one("load", function () {
                n(this).data("ready", 1), a || n(this).bind("load.fb", o.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), o._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || o._afterLoad()
        }, _preloadImages: function () {
            var e = o.group, t = o.current, n = e.length, r = t.preload ? Math.min(t.preload, n - 1) : 0, i, s;
            for (s = 1; s <= r; s += 1)i = e[(t.index + s) % n], i.type === "image" && i.href && ((new Image).src = i.href)
        }, _afterLoad: function () {
            var e = o.coming, t = o.current, r = "fancybox-placeholder", i, s, u, a, l, c;
            o.hideLoading();
            if (!e || o.isActive === !1)return;
            if (!1 === o.trigger("afterLoad", e, t)) {
                e.wrap.stop(!0).trigger("onReset").remove(), o.coming = null;
                return
            }
            t && (o.trigger("beforeChange", t), t.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), o.unbindEvents(), i = e, s = e.content, u = e.type, a = e.scrolling, n.extend(o, {wrap: i.wrap, skin: i.skin, outer: i.outer, inner: i.inner, current: i, previous: t}), l = i.href;
            switch (u) {
                case"inline":
                case"ajax":
                case"html":
                    i.selector ? s = n("<div>").html(s).find(i.selector) : f(s) && (s.data(r) || s.data(r, n('<div class="' + r + '"></div>').insertAfter(s).hide()), s = s.show().detach(), i.wrap.bind("onReset", function () {
                        n(this).find(s).length && s.hide().replaceAll(s.data(r)).data(r, !1)
                    }));
                    break;
                case"image":
                    s = i.tpl.image.replace("{href}", l);
                    break;
                case"swf":
                    s = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + l + '"></param>', c = "", n.each(i.swf, function (e, t) {
                        s += '<param name="' + e + '" value="' + t + '"></param>', c += " " + e + '="' + t + '"'
                    }), s += '<embed src="' + l + '" type="application/x-shockwave-flash" width="100%" height="100%"' + c + "></embed></object>"
            }
            (!f(s) || !s.parent().is(i.inner)) && i.inner.append(s), o.trigger("beforeShow"), i.inner.css("overflow", a === "yes" ? "scroll" : a === "no" ? "hidden" : a), o._setDimension(), o.reposition(), o.isOpen = !1, o.coming = null, o.bindEvents(), o.isOpened ? t.prevMethod && o.transitions[t.prevMethod]() : n(".fancybox-wrap").not(i.wrap).stop(!0).trigger("onReset").remove(), o.transitions[o.isOpened ? i.nextMethod : i.openMethod](), o._preloadImages()
        }, _setDimension: function () {
            var e = o.getViewport(), t = 0, r = !1, i = !1, s = o.wrap, u = o.skin, a = o.inner, f = o.current, l = f.width, h = f.height, v = f.minWidth, m = f.minHeight, g = f.maxWidth, y = f.maxHeight, b = f.scrolling, w = f.scrollOutside ? f.scrollbarWidth : 0, E = f.margin, S = p(E[1] + E[3]), x = p(E[0] + E[2]), T, N, C, k, L, A, O, M, _, D, P, H, B, j, I;
            s.add(u).add(a).width("auto").height("auto").removeClass("fancybox-tmp"), T = p(u.outerWidth(!0) - u.width()), N = p(u.outerHeight(!0) - u.height()), C = S + T, k = x + N, L = c(l) ? (e.w - C) * p(l) / 100 : l, A = c(h) ? (e.h - k) * p(h) / 100 : h;
            if (f.type === "iframe") {
                j = f.content;
                if (f.autoHeight && j.data("ready") === 1)try {
                    j[0].contentWindow.document.location && (a.width(L).height(9999), I = j.contents().find("body"), w && I.css("overflow-x", "hidden"), A = I.height())
                } catch (q) {
                }
            } else if (f.autoWidth || f.autoHeight)a.addClass("fancybox-tmp"), f.autoWidth || a.width(L), f.autoHeight || a.height(A), f.autoWidth && (L = a.width()), f.autoHeight && (A = a.height()), a.removeClass("fancybox-tmp");
            l = p(L), h = p(A), _ = L / A, v = p(c(v) ? p(v, "w") - C : v), g = p(c(g) ? p(g, "w") - C : g), m = p(c(m) ? p(m, "h") - k : m), y = p(c(y) ? p(y, "h") - k : y), O = g, M = y, f.fitToView && (g = Math.min(e.w - C, g), y = Math.min(e.h - k, y)), H = e.w - S, B = e.h - x, f.aspectRatio ? (l > g && (l = g, h = p(l / _)), h > y && (h = y, l = p(h * _)), l < v && (l = v, h = p(l / _)), h < m && (h = m, l = p(h * _))) : (l = Math.max(v, Math.min(l, g)), f.autoHeight && f.type !== "iframe" && (a.width(l), h = a.height()), h = Math.max(m, Math.min(h, y)));
            if (f.fitToView) {
                a.width(l).height(h), s.width(l + T), D = s.width(), P = s.height();
                if (f.aspectRatio)while ((D > H || P > B) && l > v && h > m) {
                    if (t++ > 19)break;
                    h = Math.max(m, Math.min(y, h - 10)), l = p(h * _), l < v && (l = v, h = p(l / _)), l > g && (l = g, h = p(l / _)), a.width(l).height(h), s.width(l + T), D = s.width(), P = s.height()
                } else l = Math.max(v, Math.min(l, l - (D - H))), h = Math.max(m, Math.min(h, h - (P - B)))
            }
            w && b === "auto" && h < A && l + T + w < H && (l += w), a.width(l).height(h), s.width(l + T), D = s.width(), P = s.height(), r = (D > H || P > B) && l > v && h > m, i = f.aspectRatio ? l < O && h < M && l < L && h < A : (l < O || h < M) && (l < L || h < A), n.extend(f, {dim: {width: d(D), height: d(P)}, origWidth: L, origHeight: A, canShrink: r, canExpand: i, wPadding: T, hPadding: N, wrapSpace: P - u.outerHeight(!0), skinSpace: u.height() - h}), !j && f.autoHeight && h > m && h < y && !i && a.height("auto")
        }, _getPosition: function (e) {
            var t = o.current, n = o.getViewport(), r = t.margin, i = o.wrap.width() + r[1] + r[3], s = o.wrap.height() + r[0] + r[2], u = {position: "absolute", top: r[0], left: r[3]};
            return t.autoCenter && t.fixed && !e && s <= n.h && i <= n.w ? u.position = "fixed" : t.locked || (u.top += n.y, u.left += n.x), u.top = d(Math.max(u.top, u.top + (n.h - s) * t.topRatio)), u.left = d(Math.max(u.left, u.left + (n.w - i) * t.leftRatio)), u
        }, _afterZoomIn: function () {
            var e = o.current;
            if (!e)return;
            o.isOpen = o.isOpened = !0, o.wrap.css("overflow", "visible").addClass("fancybox-opened"), o.update(), (e.closeClick || e.nextClick && o.group.length > 1) && o.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), o[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(o.skin).bind(a ? "touchstart.fb" : "click.fb", function (e) {
                e.preventDefault(), o.close()
            }), e.arrows && o.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(o.outer).bind("click.fb", o.prev), (e.loop || e.index < o.group.length - 1) && n(e.tpl.next).appendTo(o.outer).bind("click.fb", o.next)), o.trigger("afterShow"), !e.loop && e.index === e.group.length - 1 ? o.play(!1) : o.opts.autoPlay && !o.player.isActive && (o.opts.autoPlay = !1, o.play())
        }, _afterZoomOut: function (e) {
            e = e || o.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(o, {group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null}), o.trigger("afterClose", e)
        }}), o.transitions = {getOrigPosition: function () {
            var e = o.current, t = e.element, n = e.orig, r = {}, i = 50, s = 50, u = e.hPadding, a = e.wPadding, l = o.getViewport();
            !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), f(n) ? (r = n.offset(), n.is("img") && (i = n.outerWidth(), s = n.outerHeight())) : (r.top = l.y + (l.h - s) * e.topRatio, r.left = l.x + (l.w - i) * e.leftRatio);
            if (o.wrap.css("position") === "fixed" || e.locked)r.top -= l.y, r.left -= l.x;
            return r = {top: d(r.top - u * e.topRatio), left: d(r.left - a * e.leftRatio), width: d(i + a), height: d(s + u)}, r
        }, step: function (e, t) {
            var n, r, i, s = t.prop, u = o.current, a = u.wrapSpace, f = u.skinSpace;
            if (s === "width" || s === "height")n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), o.isClosing && (n = 1 - n), r = s === "width" ? u.wPadding : u.hPadding, i = e - r, o.skin[s](p(s === "width" ? i : i - a * n)), o.inner[s](p(s === "width" ? i : i - a * n - f * n))
        }, zoomIn: function () {
            var e = o.current, t = e.pos, r = e.openEffect, i = r === "elastic", s = n.extend({opacity: 1}, t);
            delete s.position, i ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : r === "fade" && (t.opacity = .1), o.wrap.css(t).animate(s, {duration: r === "none" ? 0 : e.openSpeed, easing: e.openEasing, step: i ? this.step : null, complete: o._afterZoomIn})
        }, zoomOut: function () {
            var e = o.current, t = e.closeEffect, n = t === "elastic", r = {opacity: .1};
            n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1)), o.wrap.animate(r, {duration: t === "none" ? 0 : e.closeSpeed, easing: e.closeEasing, step: n ? this.step : null, complete: o._afterZoomOut})
        }, changeIn: function () {
            var e = o.current, t = e.nextEffect, n = e.pos, r = {opacity: 1}, i = o.direction, s = 200, u;
            n.opacity = .1, t === "elastic" && (u = i === "down" || i === "up" ? "top" : "left", i === "down" || i === "right" ? (n[u] = d(p(n[u]) - s), r[u] = "+=" + s + "px") : (n[u] = d(p(n[u]) + s), r[u] = "-=" + s + "px")), t === "none" ? o._afterZoomIn() : o.wrap.css(n).animate(r, {duration: e.nextSpeed, easing: e.nextEasing, complete: function () {
                setTimeout(o._afterZoomIn, 20)
            }})
        }, changeOut: function () {
            var e = o.previous, t = e.prevEffect, r = {opacity: .1}, i = o.direction, s = 200;
            t === "elastic" && (r[i === "down" || i === "up" ? "top" : "left"] = (i === "up" || i === "left" ? "-" : "+") + "=" + s + "px"), e.wrap.animate(r, {duration: t === "none" ? 0 : e.prevSpeed, easing: e.prevEasing, complete: function () {
                n(this).trigger("onReset").remove()
            }})
        }}, o.helpers.overlay = {defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !a, fixed: !0}, overlay: null, fixed: !1, create: function (e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo("body"), this.fixed = !1, e.fixed && o.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        }, open: function (e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (i.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                n(e.target).hasClass("fancybox-overlay") && (o.isActive ? o.close() : t.close())
            }), this.overlay.css(e.css).show()
        }, close: function () {
            n(".fancybox-overlay").remove(), i.unbind("resize.overlay"), this.overlay = null, this.margin !== !1 && (n("body").css("margin-right", this.margin), this.margin = !1), this.el && this.el.removeClass("fancybox-lock")
        }, update: function () {
            var e = "100%", r;
            this.overlay.width(e).height("100%"), n.browser.msie ? (r = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), s.width() > r && (e = s.width())) : s.width() > i.width() && (e = s.width()), this.overlay.width(e).height(s.height())
        }, onReady: function (e, r) {
            n(".fancybox-overlay").stop(!0, !0), this.overlay || (this.margin = s.height() > i.height() || n("body").css("overflow-y") === "scroll" ? n("body").css("margin-right") : !1, this.el = t.all && !t.querySelector ? n("html") : n("body"), this.create(e)), e.locked && this.fixed && (r.locked = this.overlay.append(r.wrap), r.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
        }, beforeShow: function (e, t) {
            t.locked && (this.el.addClass("fancybox-lock"), this.margin !== !1 && n("body").css("margin-right", p(this.margin) + t.scrollbarWidth)), this.open(e)
        }, onUpdate: function () {
            this.fixed || this.update()
        }, afterClose: function (e) {
            this.overlay && !o.isActive && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }}, o.helpers.title = {defaults: {type: "float", position: "bottom"}, beforeShow: function (e) {
            var t = o.current, r = t.title, i = e.type, s, u;
            n.isFunction(r) && (r = r.call(t.element, t));
            if (!l(r) || n.trim(r) === "")return;
            s = n('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + r + "</div>");
            switch (i) {
                case"inside":
                    u = o.skin;
                    break;
                case"outside":
                    u = o.wrap;
                    break;
                case"over":
                    u = o.inner;
                    break;
                default:
                    u = o.skin, s.appendTo("body"), n.browser.msie && s.width(s.width()), s.wrapInner('<span class="child"></span>'), o.current.margin[2] += Math.abs(p(s.css("margin-bottom")))
            }
            s[e.position === "top" ? "prependTo" : "appendTo"](u)
        }}, n.fn.fancybox = function (e) {
            var t, r = n(this), i = this.selector || "", u = function (s) {
                var u = n(this).blur(), a = t, f, l;
                !(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey) && !u.is(".fancybox-wrap") && (f = e.groupAttr || "data-fancybox-group", l = u.attr(f), l || (f = "rel", l = u.get(0)[f]), l && l !== "" && l !== "nofollow" && (u = i.length ? n(i) : r, u = u.filter("[" + f + '="' + l + '"]'), a = u.index(this)), e.index = a, o.open(u, e) !== !1 && s.preventDefault())
            };
            return e = e || {}, t = e.index || 0, !i || e.live === !1 ? r.unbind("click.fb-start").bind("click.fb-start", u) : s.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", u), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, s.ready(function () {
            n.scrollbarWidth === r && (n.scrollbarWidth = function () {
                var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), t = e.children(), r = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), r
            }), n.support.fixedPosition === r && (n.support.fixedPosition = function () {
                var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"), t = e[0].offsetTop === 20 || e[0].offsetTop === 15;
                return e.remove(), t
            }()), n.extend(o.defaults, {scrollbarWidth: n.scrollbarWidth(), fixed: n.support.fixedPosition, parent: n("body")})
        })
    })(window, document, e)
}), define("ud.time", ["jquery"], function (e) {
    UD.Time = {calculateTimeZone: function () {
        var e = new Date, t = new Date(e.getFullYear(), 0, 1, 0, 0, 0, 0), n = new Date(e.getFullYear(), 6, 1, 0, 0, 0, 0), r = t.toGMTString(), i = new Date(r.substring(0, r.lastIndexOf(" ") - 1));
        r = n.toGMTString();
        var s = new Date(r.substring(0, r.lastIndexOf(" ") - 1)), o = (t - i) / 36e5, u = (n - s) / 36e5, a;
        if (o == u)a = "0"; else {
            var f = o - u;
            f >= 0 && (o = u), a = "1"
        }
        return o
    }, autoDetectTimeZone: function (e) {
        var t = UD.Time.calculateTimeZone();
        t = UD.Time.convertReadableFormat(t);
        if (e)for (i = 0; i < e.options.length; i++)if (e.options[i].innerHTML.indexOf(t) > -1) {
            e.selectedIndex = i;
            break
        }
    }, convertReadableFormat: function (e) {
        timezone = parseFloat(e);
        var t = "(GMT", n = parseInt(e), r = e - n;
        return n < 0 ? (t += "-" + UD.Time.convertTwoDigitString(-1 * n), t += ":" + UD.Time.convertTwoDigitString(60 * r)) : n > 0 && (t += "+" + UD.Time.convertTwoDigitString(n), t += ":" + UD.Time.convertTwoDigitString(60 * r)), t += ")", t
    }, convertTwoDigitString: function (e) {
        return e < 10 ? "0" + e.toString() : e.toString()
    }}
}), define("facebook-api", ["facebooklib"], function () {
    return typeof this.FB != "undefined" ? this.FB : null
});
var Query = function (e) {
    var t = function (e) {
        var t = [], n, r, i, s;
        if (typeof e == "undefined" || e === null || e === "")return t;
        e.indexOf("?") === 0 && (e = e.substring(1)), r = e.toString().split(/[&;]/);
        for (n = 0; n < r.length; n++)i = r[n], s = i.split("="), t.push([s[0], s[1]]);
        return t
    }, n = t(e), r = function () {
        var e = "", t, r;
        for (t = 0; t < n.length; t++)r = n[t], e.length > 0 && (e += "&"), e += r.join("=");
        return e.length > 0 ? "?" + e : e
    }, i = function (e) {
        return e = decodeURIComponent(e), e = e.replace("+", " "), e
    }, s = function (e) {
        var t, r;
        for (r = 0; r < n.length; r++) {
            t = n[r];
            if (i(e) === i(t[0]))return t[1]
        }
    }, o = function (e) {
        var t = [], r, s;
        for (r = 0; r < n.length; r++)s = n[r], i(e) === i(s[0]) && t.push(s[1]);
        return t
    }, u = function (e, t) {
        var r = [], s, o, u, a;
        for (s = 0; s < n.length; s++)o = n[s], u = i(o[0]) === i(e), a = i(o[1]) === i(t), (arguments.length === 1 && !u || arguments.length === 2 && !u && !a) && r.push(o);
        return n = r, this
    }, a = function (e, t, r) {
        return arguments.length === 3 && r !== -1 ? (r = Math.min(r, n.length), n.splice(r, 0, [e, t])) : arguments.length > 0 && n.push([e, t]), this
    }, f = function (e, t, r) {
        var s = -1, o, f;
        if (arguments.length === 3) {
            for (o = 0; o < n.length; o++) {
                f = n[o];
                if (i(f[0]) === i(e) && decodeURIComponent(f[1]) === i(r)) {
                    s = o;
                    break
                }
            }
            u(e, r).addParam(e, t, s)
        } else {
            for (o = 0; o < n.length; o++) {
                f = n[o];
                if (i(f[0]) === i(e)) {
                    s = o;
                    break
                }
            }
            u(e), a(e, t, s)
        }
        return this
    };
    return{getParamValue: s, getParamValues: o, deleteParam: u, addParam: a, replaceParam: f, toString: r}
}, Uri = function (e) {
    var t = !1, n = function (e) {
        var n = {strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/, loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}, r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], i = {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g}, s = n[t ? "strict" : "loose"].exec(e), o = {}, u = 14;
        while (u--)o[r[u]] = s[u] || "";
        return o[i.name] = {}, o[r[12]].replace(i.parser, function (e, t, n) {
            t && (o[i.name][t] = n)
        }), o
    }, r = n(e || ""), i = new Query(r.query), s = function (e) {
        return typeof e != "undefined" && (r.protocol = e), r.protocol
    }, o = null, u = function (e) {
        return typeof e != "undefined" && (o = e), o === null ? r.source.indexOf("//") !== -1 : o
    }, a = function (e) {
        return typeof e != "undefined" && (r.userInfo = e), r.userInfo
    }, f = function (e) {
        return typeof e != "undefined" && (r.host = e), r.host
    }, l = function (e) {
        return typeof e != "undefined" && (r.port = e), r.port
    }, c = function (e) {
        return typeof e != "undefined" && (r.path = e), r.path
    }, h = function (e) {
        return typeof e != "undefined" && (i = new Query(e)), i
    }, p = function (e) {
        return typeof e != "undefined" && (r.anchor = e), r.anchor
    }, d = function (e) {
        return s(e), this
    }, v = function (e) {
        return u(e), this
    }, m = function (e) {
        return a(e), this
    }, g = function (e) {
        return f(e), this
    }, y = function (e) {
        return l(e), this
    }, b = function (e) {
        return c(e), this
    }, w = function (e) {
        return h(e), this
    }, E = function (e) {
        return p(e), this
    }, S = function (e) {
        return h().getParamValue(e)
    }, x = function (e) {
        return h().getParamValues(e)
    }, T = function (e, t) {
        return arguments.length === 2 ? h().deleteParam(e, t) : h().deleteParam(e), this
    }, N = function (e, t, n) {
        return arguments.length === 3 ? h().addParam(e, t, n) : h().addParam(e, t), this
    }, C = function (e, t, n) {
        return arguments.length === 3 ? h().replaceParam(e, t, n) : h().replaceParam(e, t), this
    }, k = function () {
        var e = "", t = function (e) {
            return e !== null && e !== ""
        };
        return t(s()) ? (e += s(), s().indexOf(":") !== s().length - 1 && (e += ":"), e += "//") : u() && t(f()) && (e += "//"), t(a()) && t(f()) && (e += a(), a().indexOf("@") !== a().length - 1 && (e += "@")), t(f()) && (e += f(), t(l()) && (e += ":" + l())), t(c()) ? e += c() : t(f()) && (t(h().toString()) || t(p())) && (e += "/"), t(h().toString()) && (h().toString().indexOf("?") !== 0 && (e += "?"), e += h().toString()), t(p()) && (p().indexOf("#") !== 0 && (e += "#"), e += p()), e
    }, L = function () {
        return new Uri(k())
    };
    return{protocol: s, hasAuthorityPrefix: u, userInfo: a, host: f, port: l, path: c, query: h, anchor: p, setProtocol: d, setHasAuthorityPrefix: v, setUserInfo: m, setHost: g, setPort: y, setPath: b, setQuery: w, setAnchor: E, getQueryParamValue: S, getQueryParamValues: x, deleteQueryParam: T, addQueryParam: N, replaceQueryParam: C, toString: k, clone: L}
}, jsUri = Uri;
define("jsuri", function () {
}), define("ud.page", ["jquery", "facebook-api", "jquery.ui", "init", "jsuri"], function (e) {
    e.widget("ud.ud_page", {options: {pages: []}, _create: function () {
        if (this.element.data("page-name")) {
            this.options.pages = this.element.data("page-name").split(",");
            for (var e = 0; e < this.options.pages.length; e++)typeof this._pages[this.options.pages[e]] != "undefined" && this._pages[this.options.pages[e]].apply(this)
        }
        window.tmp = this
    }, destroy: function () {
    }, _pages: {}}), e.extend(e.ud.ud_page.prototype._pages, {"course-landing-page": function () {
        var t = e(".buy-button-link", this.element), n = (new Uri(window.location.href)).getQueryParamValue("dtcode"), r = t.attr("href"), i = (new Uri(r)).addQueryParam("dtcode", n).toString();
        t.attr("href", i), e(".single-lecture a", this.element).each(function () {
            var t = e(this).attr("data-href");
            if (t) {
                var r = (new Uri(t)).addQueryParam("dtcode", n).toString();
                e(this).attr("data-href", r)
            } else e(this).removeAttr("href")
        })
    }, "import-content": function () {
        this.element.find("tr#form-item-title,tr#form-item-description,tr.form-submit-button").hide(), this.element.find(".ud-importcontent").bind("ud_importcontent.url_loaded", function (e, t) {
            this.element.find("tr#form-item-title,tr#form-item-description,tr.form-submit-button").show(), this.element.find("#title").val() || this.element.find("#title").val(t.title), this.element.find("#description").val() || this.element.find("#description").val(t.description)
        }.context(this))
    }, "quick-import-content": function () {
        this.element.find("button").hide(), this.element.find(".ud-importcontent").bind("ud_importcontent.url_loaded", function (e, t) {
            this.element.find("#title").val(t.title), this.element.find("#description").val(t.description), this.element.find("button").show()
        }.context(this))
    }, "message-delete-icon-hover": function () {
        this.element.hover(function () {
            e(this).find(".delete").show()
        }, function () {
            e(this).find(".delete").hide()
        })
    }, "admin-reset-password": function () {
        this.element.click(function (t) {
            var n = this.element.parent().children(".resetPasswordResult");
            n.html("...");
            var r = {userId: this.element.data("userId"), userEmail: this.element.data("userEmail")};
            e.post("/apps/admin/user/resetPassword", r, function (e) {
                n.html(e)
            })
        }.context(this))
    }, "admin-generate-backdoor-link": function () {
        this.element.click(function (t) {
            var n = this.element.parent().children(".generate-backdoor-link-result"), r = this.element;
            n.html("..."), e.post("/apps/admin/user/generateBackdoorLink", {userId: r.data("userId")}, function (e) {
                n.html(e), r.remove()
            })
        }.context(this))
    }, "init-price-form": function () {
        var t = this.element.find("form"), n = function () {
            var e = !1, n = t.find('input[name="isPremium"]:checked');
            n.length !== 0 && (n.attr("value") == "Yes" ? (t.find("#form-item-initPrice").show(), t.find("#form-item-recurringPrice").show()) : (t.find("#form-item-initPrice").hide(), t.find("#form-item-recurringPrice").hide()))
        };
        t.find("#form-item-isPremium input").each(function () {
            e(this).change(function () {
                n()
            })
        }), n()
    }, "redirect-ipad-to-app": function () {
        navigator.userAgent.match(/iPad/i) != null && !e.cookie("ipadAlreadyRedirected") && (e.cookie("ipadAlreadyRedirected", !0), document.location = "http://ude.my/ipad")
    }, "remove-links": function () {
        this.element.find("a").click(function (e) {
            e.preventDefault()
        })
    }, "toggle-change-price-form": function () {
        var t = this.element.find(".change-pricing");
        e(".toggle-price-form, .change-pricing .cancel-link").click(function (e) {
            t.toggle(), t.css("overflow", "initial")
        }.context(this))
    }, "mark-announcement-as-read": function () {
        this.element.find(".unread").click(function (t) {
            e(t.currentTarget).removeClass("unread"), e(t.currentTarget).addClass("read")
        })
    }, "resize-course-title-page-element": function () {
        var t = function () {
            var t = this.element, n = 0;
            marginTop = t.outerHeight(!0) - t.innerHeight(), t.siblings("div").each(function () {
                n += e(this).outerHeight(!0)
            });
            var r = t.parent().height(), i = r - n;
            t.height(i);
            var s = t.height(), o = 0, u = !0, a = 0;
            do a = o, o = 0, u = !0, t.children().each(function () {
                fontSize = e(this).css("fontSize"), fontSize = fontSize.substring(0, fontSize.length - 2), e(this).is("h1") ? parseInt(fontSize) < 60 ? fontSize = parseInt(fontSize) + 1 : fontSize = parseInt(fontSize) : parseInt(fontSize) < 42 ? fontSize = parseInt(fontSize) + 1 : fontSize = parseInt(fontSize), e(this).css("fontSize", fontSize + "px"), o += e(this).outerHeight(!0)
            }), o == a && (u = !1); while (u && o < s);
            do a = o, o = 0, u = !0, t.children().each(function () {
                fontSize = e(this).css("fontSize"), fontSize = fontSize.substring(0, fontSize.length - 2), e(this).is("h1") ? parseInt(fontSize) > 24 ? fontSize = parseInt(fontSize) - 1 : fontSize = parseInt(fontSize) : parseInt(fontSize) > 12 ? fontSize = parseInt(fontSize) - 1 : fontSize = parseInt(fontSize), e(this).css("fontSize", fontSize + "px"), o += e(this).outerHeight(!0)
            }), o == a && (u = !1); while (u && o > s);
            var f = s - o;
            this.element.children(":nth-child(1)").css("marginBottom", f / 2 + "px")
        }.context(this);
        t(), e(window).resize(t)
    }, "ajaxify-pagination": function () {
        e("li[class*=navigation-] a", this.element).live("click", function () {
            var t = e(this);
            t.closest(".slider-pagination").addClass("on");
            var n = t.attr("href");
            return e.ajax({type: "GET", url: n + "&displayType=ajax", success: function (e) {
                t.closest(".courses").replaceWith(e)
            }}), !1
        })
    }, "clear-notifications": function () {
        var t = this;
        this.element.click(function (n) {
            var r = t.element.data("num");
            t.element.closest("#notifications").hide(), e("#dashboard-controller") && e("#dashboard-controller").find("li.selected .notifier").hide(), e("#u_bar").find(".my-courses-dropdown") && (e("#u_bar").find(".my-courses-dropdown:first").find("b").html(--r), e("#u_bar").find(".my-courses-dropdown:first").find("b").html(0) && e("#u_bar").find(".my-courses-dropdown").find("b").hide(), e("#u_bar").find(".my-courses-dropdown:first").find("li.selected .notifier") && (e("#u_bar").find(".my-courses-dropdown:first").find("li.selected .notifier").html(--r), e("#u_bar").find(".my-courses-dropdown:first").find("li.selected .notifier").html() == 0 && e("#u_bar").find(".my-courses-dropdown:first").find("li.selected .notifier").hide())), e.ajax({type: "GET", url: t.element.attr("href")}), n.preventDefault()
        })
    }, "settings-page": function () {
        e("input#disableAllEmails", this.element).attr("id") == "disableAllEmails" && e("input#disableAllEmails", this.element).attr("checked") && this.element.find(".settings-form-l2 input[type=checkbox]").attr("disabled", "disabled"), e("input,select", this.element).change(function (t) {
            e(t.target).parents("form").find("button").removeClass("disabled")
        }), e("input#disableAllEmails", this.element).change(function (t) {
            e(t.target).attr("checked") ? e("#general-notification-settings input[type=checkbox]", this.element).attr("disabled", "disabled") : e("#general-notification-settings input[type=checkbox]", this.element).removeAttr("disabled")
        }.context(this))
    }, "categorized-select": function () {
        var t = this.element;
        t.hide();
        var n = t.find("option"), r = {}, i = {}, s = [], o = "", u = e('<select style="width:auto"></select>');
        u.append('<option selected="selected" value="">-- Select One --</option>'), e("body").append(u);
        var a, f;
        e.each(n, function (t) {
            if (t != 0)var n = e(this).attr("category");
            e(this).attr("selected") && (s = e(this).val(), t != 0 && (o = n)), t != 0 && (r[n] || (r[n] = [], i[n] = [], u.append('<option value="' + n + '">' + n + "</option>")), r[n].push(e(this)), i[n].push(e(this).text()))
        });
        var a = e("<span>&nbsp;&gt;&nbsp;</span>");
        a.hide(), t.before(u).before(a);
        var l = function (n) {
            t.html(""), n ? (t.append('<option selected="selected" value="">-- Select One --</option>'), e.each(r[n], function (e, r) {
                var o = "";
                s == this.val() && (t.children().removeAttr("selected"), o = 'selected="selected"'), t.append('<option category="' + n + '" value="' + this.val() + '" ' + o + ">" + i[n][e] + "</option>")
            }), a.show(), a.css("display", "inline"), t.show()) : (t.hide(), a.hide())
        };
        u.change(function (t) {
            l(e(t.target).val())
        }), o && (u.val(o), l(o))
    }, "make-all-downloadable": function () {
        e("input[name=CheckAll]", this.element).click(function () {
            e("input[type=checkbox]").attr("checked", "checked")
        }), e("input[name=UnCheckAll]", this.element).click(function () {
            e("input[type=checkbox]").removeAttr("checked")
        })
    }, "manage-lectures": function () {
        e(".lectures li.certificate").hover(function () {
            e.each(e(this).attr("requiredids").split(","), function (t, n) {
                e("#lecture_lec" + n).addClass("highlighted")
            })
        }, function () {
            e.each(e(this).attr("requiredids").split(","), function (t, n) {
                e("#lecture_lec" + n).removeClass("highlighted")
            })
        }), e("#sortable-lectures-list a.deleteItem").click(function () {
            var t = this.rel, r = e(this).closest("li"), i = e(this).closest("ul");
            r.addClass("deleting");
            if (r.hasClass("chapter"))var s = 1;
            if (s)var o = UD.Config.link("lecture", "delete-chapter", {chapterId: t, displayType: "ajax"}); else var o = UD.Config.link("lecture", "delete", {lectureId: t, displayType: "ajax"});
            if (s)var u = confirm("Are you sure you want to remove this chapter?"); else var u = confirm("Are you sure you want to remove this lecture?");
            return u && e.post(o, function () {
                r.fadeOut(function () {
                    n(i)
                })
            }), !1
        });
        var t = function (e) {
            e.sortable({update: function (t, r) {
                n(e)
            }})
        }.context(this), n = function (t) {
            e.post(this.element.data("post-url"), t.sortable("serialize"), function (t) {
                var n = 0, r = !1, i = 0;
                e.each(e("#sortable-lectures-list li"), function (t, s) {
                    e(this).hasClass("lecture") ? (e(".lecture-index", this).html(n += 1), r && e(this).hasClass("chaptered") ? e(this).addClass("chaptered") : !r && e(this).hasClass("chaptered") && e(this).removeClass("chaptered")) : e(this).hasClass("chapter") && (r = !0, i = s + 1, n = 0)
                }), e("#sortable-lectures-list li").removeClass("deleting")
            })
        }.context(this);
        t(e("#sortable-lectures-list")), e(".highlight-requirements a").click(function () {
            e(this).text() == "highlight requirements" ? (e(this).text("unhighlight requirements"), e(this).closest("div").removeClass("highlight-requirements"), e(this).closest("div").addClass("unhighlight-requirements"), e.each(e(this).closest("li.certificate").attr("requiredids").split(","), function (t, n) {
                e("#lecture_lec" + n).addClass("constant-highlighted")
            }), e(this).closest(".highlighted-links").addClass("constant-highlighted-links")) : e(this).text() == "unhighlight requirements" && (e(this).text("highlight requirements"), e(this).closest("div").removeClass("unhighlight-requirements"), e(this).closest("div").addClass("highlight-requirements"), e.each(e(this).closest("li.certificate").attr("requiredids").split(","), function (t, n) {
                e("#lecture_lec" + n).removeClass("constant-highlighted")
            }), e(this).closest(".highlighted-links").removeClass("constant-highlighted-links"))
        })
    }, "date-form-item-opts": function () {
        var t = this.element.data("disable-weekdays"), n = this.element.data("disable-pastdays"), r = this.element.data("disable-pastmonths"), i = this.element.data("weekdays");
        this.element.siblings("#" + this.element.data("id")).datepicker("option", "beforeShowDay", function (s) {
            res = [!0];
            if (t) {
                var o = s.getDay();
                for (var u = 0; u < i.length; u++)e.inArray(o, i) != -1 && (res = [!1])
            }
            if (n) {
                var a = new Date;
                a.setDate(a.getDate() - 1);
                var f = a.getTime() + a.getTimezoneOffset() * 6e4, l = new Date(f + -288e5);
                s <= l && (res = [!1])
            }
            if (r) {
                var c = new Date, h = s.getMonth();
                c.setDate(0), s < c && (res = [!1])
            }
            return res
        })
    }, "payment-report": function () {
        function m() {
            var t = y("month"), n = y("course"), r = e("#dashboard-content").data("userid"), i = "?userId=" + r;
            return t && (i += "&month=" + t), n && (i += "&course=" + n), i
        }

        function g(e, t) {
            var n = e.split("="), r = decodeURIComponent(n[0]), i = decodeURIComponent(n[1]);
            return r == t ? i : null
        }

        function y(e) {
            var t = window.location.search.substring(1), n = null;
            t.indexOf("#") > -1 && (t = t.substring(0, t.indexOf("#")));
            if (t.indexOf("&") > -1) {
                var r = t.split("&");
                for (var i = 0; i < r.length; i++) {
                    n = g(r[i], e);
                    if (n !== null)break
                }
            } else n = g(t, e);
            return n
        }

        function b() {
            require(["jquery.jqGrid"], function () {
                var e = N("sale-type"), g = m(), y = N(v), b = N(d), E = N(p);
                w(n + g, s, a, c, v, y), w(r + g, o, f, h, d, b), !e || e == "all" ? w(t + g, i, u, l, p, E) : (w(t + g + "&saleType=" + e, i, u, l, p, E), k("#" + e))
            })
        }

        function w(t, n, r, i, s, o) {
            if (t.length <= 0)return!1;
            if (!o || o <= 0)o = 1;
            e.ajax({type: "GET", url: n, data: "", dataType: "json", success: function (n) {
                colNames = n.colNames, colModel = n.colModel, tableCaption = n.caption, require(["jquery.jqGrid"], function () {
                    e(r).jqGrid("GridUnload"), e(r).jqGrid({url: t, datatype: "json", height: "100%", autowidth: !0, pager: i, rowNum: 30, rowList: [10, 20, 30, 40, 50], colNames: colNames, colModel: colModel, viewrecords: !0, shrinkToFit: !0, caption: tableCaption, page: o, emptyDataText: "No records to view!", cellattr: function (e, t, n, r, i) {
                        return'style="white-space: normal;'
                    }, gridComplete: function () {
                        e(r).getGridParam("records") == 0 && S(r)
                    }, onPaging: function (t) {
                        var n = e(r).getGridParam("page");
                        C(s, n)
                    }}), e(r).jqGrid("navGrid", i, {edit: !1, add: !1, del: !1})
                }.context(this))
            }.context(this)})
        }

        function E(e) {
            return e.length > 0 && e[0] === "#" && (e = e.substr(1)), e
        }

        function S(t) {
            var n = e(t), r = n.getGridParam("emptyDataText"), i = n.parents(".ui-jqgrid-view");
            i.find(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv").hide(), i.find(".ui-jqgrid-titlebar").after("" + r + "")
        }

        function x() {
            var e = document.location.hash;
            return E(e)
        }

        function T(e) {
            window.location.hash = e
        }

        function N(e) {
            var t = x(), n = null;
            t.indexOf("#") > -1 && (t = t.substring(0, t.indexOf("#")));
            if (t.indexOf(",") > -1) {
                var r = t.split(",");
                for (var i = 0; i < r.length; i++) {
                    n = g(r[i], e);
                    if (n !== null)break
                }
            } else n = g(t, e);
            return n
        }

        function C(e, t) {
            var n = x(), r = e + "=" + t;
            if (n.length <= 0) {
                T(r);
                return
            }
            if (!N(e))n += "," + r; else {
                var i = n.split(",");
                for (var s = 0; s < i.length; s++)if (g(i[s], e)) {
                    i[s] = r;
                    break
                }
                n = i[0];
                for (var s = 1; s < i.length; s++)n += "," + i[s]
            }
            T(n)
        }

        function k(t) {
            e("#all-tran").attr("class", "btn"), e("#coupon").attr("class", "btn"), e("#company-coupon").attr("class", "btn"), e("#deal").attr("class", "btn"), e("#organic").attr("class", "btn"), e("#promotion").attr("class", "btn"), e("#ad-program").attr("class", "btn"), e("#mobile-ad-program").attr("class", "btn"), e("#email-marketing").attr("class", "btn"), e("#affiliate").attr("class", "btn"), e(t).attr("class", "btn btn-info")
        }

        function L(e) {
            var n = e.data.filterType, r = t;
            r += m(), r += "&saleType=" + n, w(r, i, u, l, p, 1), n == "all" ? k("#all-tran") : k("#" + n), C("sale-type", n), C(p, "1")
        }

        var t = "/dashboard/get-subscriber-transactions", n = "/dashboard/get-refunds", r = "/dashboard/get-deal-payments", i = "/dashboard/transaction-table-info.html", s = "/dashboard/refunds-table-info.html", o = "/dashboard/deal-payments-table-info.html", u = "#transaction-table", a = "#refund-table", f = "#dealpayment-table", l = "#tr-pager", c = "#ref-pager", h = "#deal-pager", p = "tr-page", d = "deal-page", v = "ref-page";
        e("#all-tran", this.element).click({filterType: "all"}, L), e("#coupon", this.element).click({filterType: "coupon"}, L), e("#company-coupon", this.element).click({filterType: "company-coupon"}, L), e("#deal", this.element).click({filterType: "deal"}, L), e("#organic", this.element).click({filterType: "organic"}, L), e("#promotion", this.element).click({filterType: "promotion"}, L), e("#ad-program", this.element).click({filterType: "ad-program"}, L), e("#mobile-ad-program", this.element).click({filterType: "mobile-ad-program"}, L), e("#email-marketing", this.element).click({filterType: "email-marketing"}, L), e("#affiliate", this.element).click({filterType: "affiliate"}, L), b()
    }, "customize-mini-widget": function () {
        UD.WidgetCustomizer.initialize(e("#mini-widget-form"), e("#preview-panel"))
    }, "customize-embeddable-course-widget": function () {
        UD.WidgetCustomizer.initialize(e("#customize-embeddable-form"), e("#preview-panel"))
    }, "my-courses-page": function () {
        e(".sales, .subscribers", this.element).click(function (t) {
            t.preventDefault();
            var n = e(this).data("type"), r = e(this).data("courseid"), i = "";
            switch (e(this).attr("id")) {
                case"total":
                    interval = "this-month";
                    break;
                case"this-month":
                    interval = "this-week", n == "payment" && (interval = "total");
                    break;
                case"this-week":
                    interval = "total"
            }
            n == "payment" ? i = UD.Config.link("course", "get-payment-amount") : i = UD.Config.link("course", "get-subscribers-nums"), e(this).children("div").children("img").remove(), e(this).children("div").append('<img src="/static/images/ajax-loader.gif" align="right" style="margin-top: 10px;"/>'), e.ajax({type: "POST", url: i, data: {courseId: r, interval: interval}, dataType: "json", success: function (t) {
                if (t.isSuccess) {
                    e(this).attr("id", interval), e(this).empty();
                    var r = n == "payment" ? "$" + t.numS : t.numS;
                    t.lastTermNum == null ? e(this).append("<div>" + r + "</div>") : t.lastTermNum < t.num ? e(this).append('<div><img src="/static/images/v3/up-arrow.png" align="right" style="margin-top: 10px;"/>' + r + "</div>") : t.lastTermNum > t.num ? e(this).append('<div><img src="/static/images/v3/down-arrow.png" align="right" style="margin-top: 10px;"/>' + r + "</div>") : t.lastTermNum == t.num && e(this).append('<div><img src="/static/images/v3/stable-arrow.png" align="right" style="margin-top: 12px;"/>' + r + "</div>"), e(this).append("<span>" + t.interval + "</span>")
                }
            }.context(this)})
        })
    }, "cotw-decision-maker": function () {
        e(".newspaper-b a.exclude", this.element).click(function (t) {
            e.ajax({type: "GET", url: UD.Config.link("campaign-track", "exclude-from-cotw-decision-maker"), data: {courseId: e(t.currentTarget).data("courseid")}, success: function () {
                e(t.currentTarget).parents(".cotw-decision-item").hide()
            }.context(this)})
        })
    }, "opt-out-from-cotw": function () {
        e(".receive-cotw-yes", this.element).click(function () {
            e.ajax({type: "POST", url: UD.Config.link("settings", "dont-opt-out-user-from-cotw", {displayType: "ajax"})})
        }), e(".receive-cotw-no", this.element).click(function () {
            e.ajax({type: "POST", url: UD.Config.link("settings", "opt-out-user-from-cotw", {displayType: "ajax"})})
        })
    }, "follow-your-friends": function () {
        var t = function (t) {
            if (t) {
                var n = t.to, r = n.length;
                for (var i = 0; i < r; i++)e("#fb_" + n[i] + " a").text("invited").addClass("disabled")
            }
        };
        e("#follow-friends-list li a", this.element).toggle(function () {
            var t = e(this).data("uid");
            return e.post(UD.Config.link("user", "follow"), {userId: t}), e(this).toggleClass("disabled"), e(this).text("Unfollow"), !1
        }, function () {
            var t = e(this).data("uid");
            return e.post(UD.Config.link("user", "unfollow"), {userId: t}), e(this).toggleClass("disabled"), e(this).text("Follow"), !1
        }), e("#follow-friends-button", this.element).click(function () {
            var t = [];
            return e("#follow-friends-list li a").each(function (n) {
                t.push(e(this).data("uid"))
            }), e(this).attr("disabled", !0), e(this).addClass("disabled"), e(this).text("Following All..."), e.post(UD.Config.link("user", "followAllContacts"), {userIds: t}, function (t) {
                e("#follow-friends-list").remove(), e("#friends-on-udemy-heading").text("You are following all your friends on Udemy!"), e("#follow-friends-button").remove()
            }), !1
        }), e("#invite-friends-list li a", this.element).click(function () {
            var t = e(this).data("invitation-id");
            return e.post(UD.Config.link("user", "inviteContact"), {id: t}), e(this).attr("disabled", !0), e(this).addClass("disabled"), e(this).text("Invited"), !1
        }), e("#invite-friends-button", this.element).click(function () {
            return e(this).attr("disabled", !0), e(this).addClass("disabled"), e(this).text("Inviting All..."), e.ajax({url: UD.Config.link("user", "inviteAllContacts"), success: function () {
                e("#invite-friends-list").remove(), e("#invite-friends-heading").text("You invited all your friends!"), e("#invite-friends-button").remove()
            }}), !1
        }), e("#fb-invite-friends-list li a", this.element).click(function () {
            var n = e(this).data("fb-id"), r = this.element.data("sender-title");
            return typeof FB != "undefined" && FB && FB.ui({method: "apprequests", message: r + " has invited you to join Udemy, a website that enables anyone to teach and learn online!", to: n}, t), e(".fb_dialog").css("position", "fixed"), !1
        }.context(this)), e("#fb-invite-friends-button", this.element).click(function () {
            var n = this.element.data("sender-title");
            return typeof FB != "undefined" && FB && FB.ui({method: "apprequests", message: n + " has invited you to join Udemy, a website that enables anyone to teach and learn online!"}, t), e(".fb_dialog").css("position", "fixed"), !1
        }.context(this))
    }, "feedbacks-bar": function () {
        this.element.show();
        var t = this.element.find("div.feedback-bar");
        t.each(function (t, n) {
            e(n).click(function () {
                e(this).dequeue()
            })
        });
        var n = function (t, r) {
            e(t[r]).delay("slow").slideDown("slow").delay(4e3).slideUp("slow", function () {
                r < t.length - 1 ? n(t, r + 1) : this.element.hide()
            }.context(this))
        }.context(this);
        n(t, 0)
    }, "admin-request-approval-form": function () {
        this.element.submit(function (t) {
            t.target && (t.target = t.srcElement || document), t.preventDefault();
            var n = e(e(t.target).find("textarea")[0]), r = e(t.target).find("input");
            r.each(function () {
                if (e(this).val() == "Rejected")return r = e(this), !1
            });
            if (n.val() == "" && r.attr("checked") == "checked") {
                var i = e(e(t.target).find(".notification")[0]);
                i.html('<span style="color:red">- Enter a reason!</span>')
            } else e.ajax({type: "POST", url: t.target.action, data: e(t.target).serialize(), success: function (n) {
                t.target || (t.target = t.srcElement || document), e(t.target).attr("disabled", "disabled"), i = e(e(t.target).find(".notification")[0]), i.html('<span style="color:green">- Success!</span>')
            }, error: function () {
                t.target || (t.target = t.srcElement || document), i = e(e(t.target).find(".notification")[0]), i.html('<span style="color:red">- Failure!</span>')
            }})
        })
    }, "admin-shorten-url-form": function () {
        this.element.submit(function (t) {
            t.target && (t.target = t.srcElement || document), t.preventDefault(), e.ajax({type: "POST", url: t.target.action, data: e(t.target).serialize(), success: function (n) {
                ele = e(e(t.target).find("p.result")[0]), res = jQuery.parseJSON(n), ele.html("<span class='result " + res.result + "'>" + res.result + ":</span> <span class='url'>" + res.info + "</span>")
            }, error: function (n) {
                ele = e(e(t.target).find("p.result")[0]), res = jQuery.parseJSON(n.responseText), ele.html("<span style='color:red'>Error: " + res + "</span>")
            }})
        })
    }, "invite-imported": function () {
        function n(n) {
            e(".friends-checkbox", t).attr("checked", n)
        }

        e("#select-deselect-all", this.element).click(function () {
            e("#select-deselect-all", this.element).is(":checked") ? n(!0) : n(!1)
        }.context(this));
        var t = e("#on-udemy", this.element)
    }, "admin-super-coupon-form": function () {
        function t() {
            e("#course-set").val() == "given" ? e("#course-ids").removeAttr("readonly") : e("#course-ids").attr("readonly", "readonly")
        }

        t(), e("#course-set").change(t.context(this))
    }})
}), define("ud.procedurals", ["jquery", "jquery.ui", "ud.page"], function (e) {
    window.popitup = function (e, t, n) {
        return newwindow = window.open(e, "Popup", "width=" + t + ",height=" + n), window.focus && newwindow.focus(), !1
    }, window.iePlaceholder = function () {
        e(".ie input[type=text], .ie input[type=email],.ie input[type=search], .ie textarea").each(function () {
            var t = e(this).attr("placeholder");
            e(this).val() || e(this).val(t), e(this).focus(function () {
                e(this).val() == t && e(this).val("")
            }).blur(function () {
                e(this).val() || e(this).val(t)
            })
        })
    }
}), define("jquery-ui-timepicker-addon", ["jquery", "jquery.ui"], function ($) {
    function Timepicker() {
        this.regional = [], this.regional[""] = {currentText: "Now", closeText: "Done", ampm: !1, timeFormat: "hh:mm tt", timeSuffix: "", timeOnlyTitle: "Choose Time", timeText: "Time", hourText: "Hour", minuteText: "Minute", secondText: "Second", timezoneText: "Time Zone"}, this._defaults = {showButtonPanel: !0, timeOnly: !1, showHour: !0, showMinute: !0, showSecond: !1, showTimezone: !1, showTime: !0, stepHour: .05, stepMinute: .05, stepSecond: .05, hour: 0, minute: 0, second: 0, timezone: "+0000", hourMin: 0, minuteMin: 0, secondMin: 0, hourMax: 23, minuteMax: 59, secondMax: 59, minDateTime: null, maxDateTime: null, hourGrid: 0, minuteGrid: 0, secondGrid: 0, alwaysSetTime: !0, separator: " ", altFieldTimeOnly: !0, showTimepicker: !0, timezoneList: ["-1100", "-1000", "-0900", "-0800", "-0700", "-0600", "-0500", "-0400", "-0300", "-0200", "-0100", "+0000", "+0100", "+0200", "+0300", "+0400", "+0500", "+0600", "+0700", "+0800", "+0900", "+1000", "+1100", "+1200"]}, $.extend(this._defaults, this.regional[""])
    }

    function extendRemove(e, t) {
        $.extend(e, t);
        for (var n in t)if (t[n] === null || t[n] === undefined)e[n] = t[n];
        return e
    }

    $.extend($.ui, {timepicker: {version: "0.9.6"}}), $.extend(Timepicker.prototype, {$input: null, $altInput: null, $timeObj: null, inst: null, hour_slider: null, minute_slider: null, second_slider: null, timezone_select: null, hour: 0, minute: 0, second: 0, timezone: "+0000", hourMinOriginal: null, minuteMinOriginal: null, secondMinOriginal: null, hourMaxOriginal: null, minuteMaxOriginal: null, secondMaxOriginal: null, ampm: "", formattedDate: "", formattedTime: "", formattedDateTime: "", timezoneList: ["-1100", "-1000", "-0900", "-0800", "-0700", "-0600", "-0500", "-0400", "-0300", "-0200", "-0100", "+0000", "+0100", "+0200", "+0300", "+0400", "+0500", "+0600", "+0700", "+0800", "+0900", "+1000", "+1100", "+1200"], setDefaults: function (e) {
        return extendRemove(this._defaults, e || {}), this
    }, _newInst: function ($input, o) {
        var tp_inst = new Timepicker, inlineSettings = {};
        for (var attrName in this._defaults) {
            var attrValue = $input.attr("time:" + attrName);
            if (attrValue)try {
                inlineSettings[attrName] = eval(attrValue)
            } catch (err) {
                inlineSettings[attrName] = attrValue
            }
        }
        return tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {beforeShow: function (e, t) {
            $.isFunction(o.beforeShow) && o.beforeShow(e, t, tp_inst)
        }, onChangeMonthYear: function (e, t, n) {
            tp_inst._updateDateTime(n), $.isFunction(o.onChangeMonthYear) && o.onChangeMonthYear.call($input[0], e, t, n, tp_inst)
        }, onClose: function (e, t) {
            tp_inst.timeDefined === !0 && $input.val() != "" && tp_inst._updateDateTime(t), $.isFunction(o.onClose) && o.onClose.call($input[0], e, t, tp_inst)
        }, timepicker: tp_inst}), tp_inst.hour = tp_inst._defaults.hour, tp_inst.minute = tp_inst._defaults.minute, tp_inst.second = tp_inst._defaults.second, tp_inst.ampm = "", tp_inst.$input = $input, o.altField && (tp_inst.$altInput = $(o.altField).css({cursor: "pointer"}).focus(function () {
            $input.trigger("focus")
        })), tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date && (tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime())), tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date && (tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime())), tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date && (tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime())), tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date && (tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime())), tp_inst
    }, _addTimePicker: function (e) {
        var t = this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val();
        this.timeDefined = this._parseTime(t), this._limitMinMaxDateTime(e, !1), this._injectTimePicker()
    }, _parseTime: function (e, t) {
        var n = this._defaults.timeFormat.toString().replace(/h{1,2}/ig, "(\\d?\\d)").replace(/m{1,2}/ig, "(\\d?\\d)").replace(/s{1,2}/ig, "(\\d?\\d)").replace(/t{1,2}/ig, "(am|pm|a|p)?").replace(/z{1}/ig, "((\\+|-)\\d\\d\\d\\d)?").replace(/\s/g, "\\s?") + this._defaults.timeSuffix + "$", r = this._getFormatPositions(), i;
        this.inst || (this.inst = $.datepicker._getInst(this.$input[0]));
        if (t || !this._defaults.timeOnly) {
            var s = $.datepicker._get(this.inst, "dateFormat"), o = new RegExp("[.*+?|()\\[\\]{}\\\\]", "g");
            n = ".{" + s.length + ",}" + this._defaults.separator.replace(o, "\\$&") + n
        }
        return i = e.match(new RegExp(n, "i")), i ? (r.t !== -1 && (this.ampm = (i[r.t] === undefined || i[r.t].length === 0 ? "" : i[r.t].charAt(0).toUpperCase() == "A" ? "AM" : "PM").toUpperCase()), r.h !== -1 && (this.ampm == "AM" && i[r.h] == "12" ? this.hour = 0 : this.ampm == "PM" && i[r.h] != "12" ? this.hour = (parseFloat(i[r.h]) + 12).toFixed(0) : this.hour = Number(i[r.h])), r.m !== -1 && (this.minute = Number(i[r.m])), r.s !== -1 && (this.second = Number(i[r.s])), r.z !== -1 && (this.timezone = i[r.z]), !0) : !1
    }, _getFormatPositions: function () {
        var e = this._defaults.timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|t{1,2}|z)/g), t = {h: -1, m: -1, s: -1, t: -1, z: -1};
        if (e)for (var n = 0; n < e.length; n++)t[e[n].toString().charAt(0)] == -1 && (t[e[n].toString().charAt(0)] = n + 1);
        return t
    }, _injectTimePicker: function () {
        var e = this.inst.dpDiv, t = this._defaults, n = this, r = (t.hourMax - t.hourMax % t.stepHour).toFixed(0), i = (t.minuteMax - t.minuteMax % t.stepMinute).toFixed(0), s = (t.secondMax - t.secondMax % t.stepSecond).toFixed(0), o = this.inst.id.toString().replace(/([^A-Za-z0-9_])/g, "");
        if (e.find("div#ui-timepicker-div-" + o).length === 0 && t.showTimepicker) {
            var u = ' style="display:none;"', a = '<div class="ui-timepicker-div" id="ui-timepicker-div-' + o + '"><dl>' + '<dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_' + o + '"' + (t.showTime ? "" : u) + ">" + t.timeText + "</dt>" + '<dd class="ui_tpicker_time" id="ui_tpicker_time_' + o + '"' + (t.showTime ? "" : u) + "></dd>" + '<dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_' + o + '"' + (t.showHour ? "" : u) + ">" + t.hourText + "</dt>", f = 0, l = 0, c = 0, h;
            if (t.showHour && t.hourGrid > 0) {
                a += '<dd class="ui_tpicker_hour"><div id="ui_tpicker_hour_' + o + '"' + (t.showHour ? "" : u) + "></div>" + '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';
                for (var p = t.hourMin; p <= r; p += t.hourGrid) {
                    f++;
                    var d = t.ampm && p > 12 ? p - 12 : p;
                    d < 10 && (d = "0" + d), t.ampm && (p == 0 ? d = "12a" : p < 12 ? d += "a" : d += "p"), a += "<td>" + d + "</td>"
                }
                a += "</tr></table></div></dd>"
            } else a += '<dd class="ui_tpicker_hour" id="ui_tpicker_hour_' + o + '"' + (t.showHour ? "" : u) + "></dd>";
            a += '<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_' + o + '"' + (t.showMinute ? "" : u) + ">" + t.minuteText + "</dt>";
            if (t.showMinute && t.minuteGrid > 0) {
                a += '<dd class="ui_tpicker_minute ui_tpicker_minute_' + t.minuteGrid + '">' + '<div id="ui_tpicker_minute_' + o + '"' + (t.showMinute ? "" : u) + "></div>" + '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';
                for (var v = t.minuteMin; v <= i; v += t.minuteGrid)l++, a += "<td>" + (v < 10 ? "0" : "") + v + "</td>";
                a += "</tr></table></div></dd>"
            } else a += '<dd class="ui_tpicker_minute" id="ui_tpicker_minute_' + o + '"' + (t.showMinute ? "" : u) + "></dd>";
            a += '<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_' + o + '"' + (t.showSecond ? "" : u) + ">" + t.secondText + "</dt>";
            if (t.showSecond && t.secondGrid > 0) {
                a += '<dd class="ui_tpicker_second ui_tpicker_second_' + t.secondGrid + '">' + '<div id="ui_tpicker_second_' + o + '"' + (t.showSecond ? "" : u) + "></div>" + '<div style="padding-left: 1px"><table><tr>';
                for (var m = t.secondMin; m <= s; m += t.secondGrid)c++, a += "<td>" + (m < 10 ? "0" : "") + m + "</td>";
                a += "</tr></table></div></dd>"
            } else a += '<dd class="ui_tpicker_second" id="ui_tpicker_second_' + o + '"' + (t.showSecond ? "" : u) + "></dd>";
            a += '<dt class="ui_tpicker_timezone_label" id="ui_tpicker_timezone_label_' + o + '"' + (t.showTimezone ? "" : u) + ">" + t.timezoneText + "</dt>", a += '<dd class="ui_tpicker_timezone" id="ui_tpicker_timezone_' + o + '"' + (t.showTimezone ? "" : u) + "></dd>", a += "</dl></div>", $tp = $(a), t.timeOnly === !0 && ($tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">' + t.timeOnlyTitle + "</div>" + "</div>"), e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()), this.hour_slider = $tp.find("#ui_tpicker_hour_" + o).slider({orientation: "horizontal", value: this.hour, min: t.hourMin, max: r, step: t.stepHour, slide: function (e, t) {
                n.hour_slider.slider("option", "value", t.value), n._onTimeChange()
            }}), this.minute_slider = $tp.find("#ui_tpicker_minute_" + o).slider({orientation: "horizontal", value: this.minute, min: t.minuteMin, max: i, step: t.stepMinute, slide: function (e, t) {
                n.minute_slider.slider("option", "value", t.value), n._onTimeChange()
            }}), this.second_slider = $tp.find("#ui_tpicker_second_" + o).slider({orientation: "horizontal", value: this.second, min: t.secondMin, max: s, step: t.stepSecond, slide: function (e, t) {
                n.second_slider.slider("option", "value", t.value), n._onTimeChange()
            }}), this.timezone_select = $tp.find("#ui_tpicker_timezone_" + o).append("<select></select>").find("select"), $.fn.append.apply(this.timezone_select, $.map(t.timezoneList, function (e, t) {
                return $("<option />").val(typeof e == "object" ? e.value : e).text(typeof e == "object" ? e.label : e)
            })), this.timezone_select.val(typeof this.timezone != "undefined" && this.timezone != null && this.timezone != "" ? this.timezone : t.timezone), this.timezone_select.change(function () {
                n._onTimeChange()
            }), t.showHour && t.hourGrid > 0 && (h = 100 * f * t.hourGrid / (r - t.hourMin), $tp.find(".ui_tpicker_hour table").css({width: h + "%", marginLeft: h / (-2 * f) + "%", borderCollapse: "collapse"}).find("td").each(function (e) {
                $(this).click(function () {
                    var e = $(this).html();
                    if (t.ampm) {
                        var r = e.substring(2).toLowerCase(), i = parseInt(e.substring(0, 2), 10);
                        r == "a" ? i == 12 ? e = 0 : e = i : i == 12 ? e = 12 : e = i + 12
                    }
                    n.hour_slider.slider("option", "value", e), n._onTimeChange(), n._onSelectHandler()
                }).css({cursor: "pointer", width: 100 / f + "%", textAlign: "center", overflow: "hidden"})
            })), t.showMinute && t.minuteGrid > 0 && (h = 100 * l * t.minuteGrid / (i - t.minuteMin), $tp.find(".ui_tpicker_minute table").css({width: h + "%", marginLeft: h / (-2 * l) + "%", borderCollapse: "collapse"}).find("td").each(function (e) {
                $(this).click(function () {
                    n.minute_slider.slider("option", "value", $(this).html()), n._onTimeChange(), n._onSelectHandler()
                }).css({cursor: "pointer", width: 100 / l + "%", textAlign: "center", overflow: "hidden"})
            })), t.showSecond && t.secondGrid > 0 && $tp.find(".ui_tpicker_second table").css({width: h + "%", marginLeft: h / (-2 * c) + "%", borderCollapse: "collapse"}).find("td").each(function (e) {
                $(this).click(function () {
                    n.second_slider.slider("option", "value", $(this).html()), n._onTimeChange(), n._onSelectHandler()
                }).css({cursor: "pointer", width: 100 / c + "%", textAlign: "center", overflow: "hidden"})
            });
            var g = e.find(".ui-datepicker-buttonpane");
            g.length ? g.before($tp) : e.append($tp), this.$timeObj = $tp.find("#ui_tpicker_time_" + o);
            if (this.inst !== null) {
                var y = this.timeDefined;
                this._onTimeChange(), this.timeDefined = y
            }
            var b = function () {
                n._onSelectHandler()
            };
            this.hour_slider.bind("slidestop", b), this.minute_slider.bind("slidestop", b), this.second_slider.bind("slidestop", b)
        }
    }, _limitMinMaxDateTime: function (e, t) {
        var n = this._defaults, r = new Date(e.selectedYear, e.selectedMonth, e.selectedDay);
        if (!this._defaults.showTimepicker)return;
        if ($.datepicker._get(e, "minDateTime") !== null && r) {
            var i = $.datepicker._get(e, "minDateTime"), s = new Date(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0, 0);
            if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null)this.hourMinOriginal = n.hourMin, this.minuteMinOriginal = n.minuteMin, this.secondMinOriginal = n.secondMin;
            e.settings.timeOnly || s.getTime() == r.getTime() ? (this._defaults.hourMin = i.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = i.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = i.getSeconds()) : (this.second < this._defaults.secondMin && (this.second = this._defaults.secondMin), this._defaults.secondMin = this.secondMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal)) : (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal)
        }
        if ($.datepicker._get(e, "maxDateTime") !== null && r) {
            var o = $.datepicker._get(e, "maxDateTime"), u = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0, 0);
            if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null)this.hourMaxOriginal = n.hourMax, this.minuteMaxOriginal = n.minuteMax, this.secondMaxOriginal = n.secondMax;
            e.settings.timeOnly || u.getTime() == r.getTime() ? (this._defaults.hourMax = o.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = o.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = o.getSeconds()) : (this.second > this._defaults.secondMax && (this.second = this._defaults.secondMax), this._defaults.secondMax = this.secondMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal)
        }
        if (t !== undefined && t === !0) {
            var a = (this._defaults.hourMax - this._defaults.hourMax % this._defaults.stepHour).toFixed(0), f = (this._defaults.minuteMax - this._defaults.minuteMax % this._defaults.stepMinute).toFixed(0), l = (this._defaults.secondMax - this._defaults.secondMax % this._defaults.stepSecond).toFixed(0);
            this.hour_slider && this.hour_slider.slider("option", {min: this._defaults.hourMin, max: a}).slider("value", this.hour), this.minute_slider && this.minute_slider.slider("option", {min: this._defaults.minuteMin, max: f}).slider("value", this.minute), this.second_slider && this.second_slider.slider("option", {min: this._defaults.secondMin, max: l}).slider("value", this.second)
        }
    }, _onTimeChange: function () {
        var e = this.hour_slider ? this.hour_slider.slider("value") : !1, t = this.minute_slider ? this.minute_slider.slider("value") : !1, n = this.second_slider ? this.second_slider.slider("value") : !1, r = this.timezone_select ? this.timezone_select.val() : !1;
        typeof e == "object" && (e = !1), typeof t == "object" && (t = !1), typeof n == "object" && (n = !1), typeof r == "object" && (r = !1), e !== !1 && (e = parseInt(e, 10)), t !== !1 && (t = parseInt(t, 10)), n !== !1 && (n = parseInt(n, 10));
        var i = e < 12 ? "AM" : "PM", s = e != this.hour || t != this.minute || n != this.second || this.ampm.length > 0 && this.ampm != i || r != this.timezone;
        s && (e !== !1 && (this.hour = e), t !== !1 && (this.minute = t), n !== !1 && (this.second = n), r !== !1 && (this.timezone = r), this.inst || (this.inst = $.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0)), this._defaults.ampm && (this.ampm = i), this._formatTime(), this.$timeObj && this.$timeObj.text(this.formattedTime + this._defaults.timeSuffix), this.timeDefined = !0, s && this._updateDateTime()
    }, _onSelectHandler: function () {
        var e = this._defaults.onSelect, t = this.$input ? this.$input[0] : null;
        e && t && e.apply(t, [this.formattedDateTime, this])
    }, _formatTime: function (e, t, n) {
        n == undefined && (n = this._defaults.ampm), e = e || {hour: this.hour, minute: this.minute, second: this.second, ampm: this.ampm, timezone: this.timezone};
        var r = t || this._defaults.timeFormat.toString();
        if (n) {
            var i = e.ampm == "AM" ? e.hour : e.hour % 12;
            i = Number(i) === 0 ? 12 : i, r = r.toString().replace(/hh/g, (i < 10 ? "0" : "") + i).replace(/h/g, i).replace(/mm/g, (e.minute < 10 ? "0" : "") + e.minute).replace(/m/g, e.minute).replace(/ss/g, (e.second < 10 ? "0" : "") + e.second).replace(/s/g, e.second).replace(/TT/g, e.ampm.toUpperCase()).replace(/Tt/g, e.ampm.toUpperCase()).replace(/tT/g, e.ampm.toLowerCase()).replace(/tt/g, e.ampm.toLowerCase()).replace(/T/g, e.ampm.charAt(0).toUpperCase()).replace(/t/g, e.ampm.charAt(0).toLowerCase()).replace(/z/g, e.timezone)
        } else r = r.toString().replace(/hh/g, (e.hour < 10 ? "0" : "") + e.hour).replace(/h/g, e.hour).replace(/mm/g, (e.minute < 10 ? "0" : "") + e.minute).replace(/m/g, e.minute).replace(/ss/g, (e.second < 10 ? "0" : "") + e.second).replace(/s/g, e.second).replace(/z/g, e.timezone), r = $.trim(r.replace(/t/gi, ""));
        if (arguments.length)return r;
        this.formattedTime = r
    }, _updateDateTime: function (e) {
        e = this.inst || e, dt = new Date(e.selectedYear, e.selectedMonth, e.selectedDay), dateFmt = $.datepicker._get(e, "dateFormat"), formatCfg = $.datepicker._getFormatConfig(e), timeAvailable = dt !== null && this.timeDefined, this.formattedDate = $.datepicker.formatDate(dateFmt, dt === null ? new Date : dt, formatCfg);
        var t = this.formattedDate;
        if (e.lastVal !== undefined && e.lastVal.length > 0 && this.$input.val().length === 0)return;
        this._defaults.timeOnly === !0 ? t = this.formattedTime : this._defaults.timeOnly !== !0 && (this._defaults.alwaysSetTime || timeAvailable) && (t += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix), this.formattedDateTime = t, this._defaults.showTimepicker ? this.$altInput && this._defaults.altFieldTimeOnly === !0 ? (this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate)) : this.$altInput ? (this.$altInput.val(t), this.$input.val(t)) : this.$input.val(t) : this.$input.val(this.formattedDate), this.$input.trigger("change")
    }}), $.fn.extend({timepicker: function (e) {
        e = e || {};
        var t = arguments;
        return typeof e == "object" && (t[0] = $.extend(e, {timeOnly: !0})), $(this).each(function () {
            $.fn.datetimepicker.apply($(this), t)
        })
    }, datetimepicker: function (e) {
        e = e || {};
        var t = this, n = arguments;
        return typeof e == "string" ? e == "getDate" ? $.fn.datepicker.apply($(this[0]), n) : this.each(function () {
            var e = $(this);
            e.datepicker.apply(e, n)
        }) : this.each(function () {
            var t = $(this);
            t.datepicker($.timepicker._newInst(t, e)._defaults)
        })
    }}), $.datepicker._base_selectDate = $.datepicker._selectDate, $.datepicker._selectDate = function (e, t) {
        var n = this._getInst($(e)[0]), r = this._get(n, "timepicker");
        r ? (r._limitMinMaxDateTime(n, !0), n.inline = n.stay_open = !0, this._base_selectDate(e, t + r._defaults.separator + r.formattedTime + r._defaults.timeSuffix), n.inline = n.stay_open = !1, this._notifyChange(n), this._updateDatepicker(n)) : this._base_selectDate(e, t)
    }, $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker, $.datepicker._updateDatepicker = function (e) {
        var t = e.input[0];
        if ($.datepicker._curInst && $.datepicker._curInst != e && $.datepicker._datepickerShowing && $.datepicker._lastInput != t)return;
        if (typeof e.stay_open != "boolean" || e.stay_open === !1) {
            this._base_updateDatepicker(e);
            var n = this._get(e, "timepicker");
            n && n._addTimePicker(e)
        }
    }, $.datepicker._base_doKeyPress = $.datepicker._doKeyPress, $.datepicker._doKeyPress = function (e) {
        var t = $.datepicker._getInst(e.target), n = $.datepicker._get(t, "timepicker");
        if (n && $.datepicker._get(t, "constrainInput")) {
            var r = n._defaults.ampm, i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")), s = n._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, r ? "APM" : "").replace(/Tt/g, r ? "AaPpMm" : "").replace(/tT/g, r ? "AaPpMm" : "").replace(/T/g, r ? "AP" : "").replace(/tt/g, r ? "apm" : "").replace(/t/g, r ? "ap" : "") + " " + n._defaults.separator + n._defaults.timeSuffix + (n._defaults.showTimezone ? n._defaults.timezoneList.join("") : "") + i, o = String.fromCharCode(e.charCode === undefined ? e.keyCode : e.charCode);
            return e.ctrlKey || o < " " || !i || s.indexOf(o) > -1
        }
        return $.datepicker._base_doKeyPress(e)
    }, $.datepicker._base_doKeyUp = $.datepicker._doKeyUp, $.datepicker._doKeyUp = function (e) {
        var t = $.datepicker._getInst(e.target), n = $.datepicker._get(t, "timepicker");
        if (n && n._defaults.timeOnly && t.input.val() != t.lastVal)try {
            $.datepicker._updateDatepicker(t)
        } catch (r) {
            $.datepicker.log(r)
        }
        return $.datepicker._base_doKeyUp(e)
    }, $.datepicker._base_gotoToday = $.datepicker._gotoToday, $.datepicker._gotoToday = function (e) {
        this._base_gotoToday(e), this._setTime(this._getInst($(e)[0]), new Date)
    }, $.datepicker._disableTimepickerDatepicker = function (e, t, n) {
        var r = this._getInst(e), i = this._get(r, "timepicker");
        $(e).datepicker("getDate"), i && (i._defaults.showTimepicker = !1, i._updateDateTime(r))
    }, $.datepicker._enableTimepickerDatepicker = function (e, t, n) {
        var r = this._getInst(e), i = this._get(r, "timepicker");
        $(e).datepicker("getDate"), i && (i._defaults.showTimepicker = !0, i._addTimePicker(r), i._updateDateTime(r))
    }, $.datepicker._setTime = function (e, t) {
        var n = this._get(e, "timepicker");
        if (n) {
            var r = n._defaults, i = t ? t.getHours() : r.hour, s = t ? t.getMinutes() : r.minute, o = t ? t.getSeconds() : r.second;
            if (i < r.hourMin || i > r.hourMax || s < r.minuteMin || s > r.minuteMax || o < r.secondMin || o > r.secondMax)i = r.hourMin, s = r.minuteMin, o = r.secondMin;
            n.hour = i, n.minute = s, n.second = o, n.hour_slider && n.hour_slider.slider("value", i), n.minute_slider && n.minute_slider.slider("value", s), n.second_slider && n.second_slider.slider("value", o), n._onTimeChange(), n._updateDateTime(e)
        }
    }, $.datepicker._setTimeDatepicker = function (e, t, n) {
        var r = this._getInst(e), i = this._get(r, "timepicker");
        if (i) {
            this._setDateFromField(r);
            var s;
            t && (typeof t == "string" ? (i._parseTime(t, n), s = new Date, s.setHours(i.hour, i.minute, i.second)) : s = new Date(t.getTime()), s.toString() == "Invalid Date" && (s = undefined), this._setTime(r, s))
        }
    }, $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker, $.datepicker._setDateDatepicker = function (e, t) {
        var n = this._getInst(e), r = t instanceof Date ? new Date(t.getTime()) : t;
        this._updateDatepicker(n), this._base_setDateDatepicker.apply(this, arguments), this._setTimeDatepicker(e, r, !0)
    }, $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker, $.datepicker._getDateDatepicker = function (e, t) {
        var n = this._getInst(e), r = this._get(n, "timepicker");
        if (r) {
            this._setDateFromField(n, t);
            var i = this._getDate(n);
            return i && r._parseTime($(e).val(), r.timeOnly) && i.setHours(r.hour, r.minute, r.second), i
        }
        return this._base_getDateDatepicker(e, t)
    }, $.datepicker._base_parseDate = $.datepicker.parseDate, $.datepicker.parseDate = function (e, t, n) {
        var r;
        try {
            r = this._base_parseDate(e, t, n)
        } catch (i) {
            r = this._base_parseDate(e, t.substring(0, t.length - (i.length - i.indexOf(":") - 2)), n)
        }
        return r
    }, $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker, $.datepicker._optionDatepicker = function (e, t, n) {
        this._base_optionDatepicker(e, t, n);
        var r = this._getInst(e), i = this._get(r, "timepicker");
        i && (t === "minDate" && (i._defaults.minDate !== undefined && i._defaults.minDate instanceof Date && (i._defaults.minDateTime = new Date(n)), i._defaults.minDateTime !== undefined && i._defaults.minDateTime instanceof Date && (i._defaults.minDate = new Date(i._defaults.minDateTime.getTime())), i._limitMinMaxDateTime(r, !0)), t === "maxDate" && (i._defaults.maxDate !== undefined && i._defaults.maxDate instanceof Date && (i._defaults.maxDateTime = new Date(n)), i._defaults.maxDateTime !== undefined && i._defaults.maxDateTime instanceof Date && (i._defaults.maxDate = new Date(i._defaults.maxDateTime.getTime())), i._limitMinMaxDateTime(r, !0)))
    }, $.timepicker = new Timepicker, $.timepicker.version = "0.9.6"
});
var IN_GLOBAL_SCOPE = !0;
window.PR_SHOULD_USE_CONTINUATION = !0;
var prettyPrintOne, prettyPrint;
(function () {
    function O(e) {
        function a(e) {
            var t = e.charCodeAt(0);
            if (t !== 92)return t;
            var n = e.charAt(1);
            return t = u[n], t ? t : "0" <= n && n <= "7" ? parseInt(e.substring(1), 8) : n === "u" || n === "x" ? parseInt(e.substring(2), 16) : e.charCodeAt(1)
        }

        function f(e) {
            if (e < 32)return(e < 16 ? "\\x0" : "\\x") + e.toString(16);
            var t = String.fromCharCode(e);
            return t === "\\" || t === "-" || t === "]" || t === "^" ? "\\" + t : t
        }

        function l(e) {
            var t = e.substring(1, e.length - 1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")), n = [], r = t[0] === "^", i = ["["];
            r && i.push("^");
            for (var s = r ? 1 : 0, o = t.length; s < o; ++s) {
                var u = t[s];
                if (/\\[bdsw]/i.test(u))i.push(u); else {
                    var l = a(u), c;
                    s + 2 < o && "-" === t[s + 1] ? (c = a(t[s + 2]), s += 2) : c = l, n.push([l, c]), c < 65 || l > 122 || (c < 65 || l > 90 || n.push([Math.max(65, l) | 32, Math.min(c, 90) | 32]), c < 97 || l > 122 || n.push([Math.max(97, l) & -33, Math.min(c, 122) & -33]))
                }
            }
            n.sort(function (e, t) {
                return e[0] - t[0] || t[1] - e[1]
            });
            var h = [], p = [];
            for (var s = 0; s < n.length; ++s) {
                var d = n[s];
                d[0] <= p[1] + 1 ? p[1] = Math.max(p[1], d[1]) : h.push(p = d)
            }
            for (var s = 0; s < h.length; ++s) {
                var d = h[s];
                i.push(f(d[0])), d[1] > d[0] && (d[1] + 1 > d[0] && i.push("-"), i.push(f(d[1])))
            }
            return i.push("]"), i.join("")
        }

        function c(e) {
            var r = e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), i = r.length, s = [];
            for (var o = 0, u = 0; o < i; ++o) {
                var a = r[o];
                if (a === "(")++u; else if ("\\" === a.charAt(0)) {
                    var c = +a.substring(1);
                    c && (c <= u ? s[c] = -1 : r[o] = f(c))
                }
            }
            for (var o = 1; o < s.length; ++o)-1 === s[o] && (s[o] = ++t);
            for (var o = 0, u = 0; o < i; ++o) {
                var a = r[o];
                if (a === "(")++u, s[u] || (r[o] = "(?:"); else if ("\\" === a.charAt(0)) {
                    var c = +a.substring(1);
                    c && c <= u && (r[o] = "\\" + s[c])
                }
            }
            for (var o = 0; o < i; ++o)"^" === r[o] && "^" !== r[o + 1] && (r[o] = "");
            if (e.ignoreCase && n)for (var o = 0; o < i; ++o) {
                var a = r[o], h = a.charAt(0);
                a.length >= 2 && h === "[" ? r[o] = l(a) : h !== "\\" && (r[o] = a.replace(/[a-zA-Z]/g, function (e) {
                    var t = e.charCodeAt(0);
                    return"[" + String.fromCharCode(t & -33, t | 32) + "]"
                }))
            }
            return r.join("")
        }

        var t = 0, n = !1, r = !1;
        for (var i = 0, s = e.length; i < s; ++i) {
            var o = e[i];
            if (o.ignoreCase)r = !0; else if (/[a-z]/i.test(o.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                n = !0, r = !1;
                break
            }
        }
        var u = {b: 8, t: 9, n: 10, v: 11, f: 12, r: 13}, h = [];
        for (var i = 0, s = e.length; i < s; ++i) {
            var o = e[i];
            if (o.global || o.multiline)throw new Error("" + o);
            h.push("(?:" + c(o) + ")")
        }
        return new RegExp(h.join("|"), r ? "gi" : "g")
    }

    function M(e, t) {
        function u(e) {
            var a = e.nodeType;
            if (a == 1) {
                if (n.test(e.className))return;
                for (var f = e.firstChild; f; f = f.nextSibling)u(f);
                var l = e.nodeName.toLowerCase();
                if ("br" === l || "li" === l)r[o] = "\n", s[o << 1] = i++, s[o++ << 1 | 1] = e
            } else if (a == 3 || a == 4) {
                var c = e.nodeValue;
                c.length && (t ? c = c.replace(/\r\n?/g, "\n") : c = c.replace(/[ \t\r\n]+/g, " "), r[o] = c, s[o << 1] = i, i += c.length, s[o++ << 1 | 1] = e)
            }
        }

        var n = /(?:^|\s)nocode(?:\s|$)/, r = [], i = 0, s = [], o = 0;
        return u(e), {sourceCode: r.join("").replace(/\n$/, ""), spans: s}
    }

    function _(e, t, n, r) {
        if (!t)return;
        var i = {sourceCode: t, basePos: e};
        n(i), r.push.apply(r, i.decorations)
    }

    function P(e) {
        var t = undefined;
        for (var n = e.firstChild; n; n = n.nextSibling) {
            var r = n.nodeType;
            t = r === 1 ? t ? e : n : r === 3 ? D.test(n.nodeValue) ? e : t : t
        }
        return t === e ? undefined : t
    }

    function H(e, t) {
        var n = {}, r;
        (function () {
            var i = e.concat(t), s = [], o = {};
            for (var u = 0, a = i.length; u < a; ++u) {
                var f = i[u], l = f[3];
                if (l)for (var c = l.length; --c >= 0;)n[l.charAt(c)] = f;
                var h = f[1], p = "" + h;
                o.hasOwnProperty(p) || (s.push(h), o[p] = null)
            }
            s.push(/[\0-\uffff]/), r = O(s)
        })();
        var i = t.length, s = function (e) {
            var o = e.sourceCode, u = e.basePos, a = [u, S], f = 0, l = o.match(r) || [], c = {};
            for (var h = 0, p = l.length; h < p; ++h) {
                var d = l[h], v = c[d], m = void 0, g;
                if (typeof v == "string")g = !1; else {
                    var y = n[d.charAt(0)];
                    if (y)m = d.match(y[1]), v = y[0]; else {
                        for (var b = 0; b < i; ++b) {
                            y = t[b], m = d.match(y[1]);
                            if (m) {
                                v = y[0];
                                break
                            }
                        }
                        m || (v = S)
                    }
                    g = v.length >= 5 && "lang-" === v.substring(0, 5), g && (!m || typeof m[1] != "string") && (g = !1, v = N), g || (c[d] = v)
                }
                var w = f;
                f += d.length;
                if (!g)a.push(u + w, v); else {
                    var E = m[1], x = d.indexOf(E), T = x + E.length;
                    m[2] && (T = d.length - m[2].length, x = T - E.length);
                    var C = v.substring(5);
                    _(u + w, d.substring(0, x), s, a), _(u + w + x, E, U(C, E), a), _(u + w + T, d.substring(T), s, a)
                }
            }
            e.decorations = a
        };
        return s
    }

    function B(e) {
        var t = [], n = [];
        e.tripleQuotedStrings ? t.push([m, /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""]) : e.multiLineStrings ? t.push([m, /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"]) : t.push([m, /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]), e.verbatimStrings && n.push([m, /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
        var r = e.hashComments;
        r && (e.cStyleComments ? (r > 1 ? t.push([y, /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : t.push([y, /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), n.push([m, /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null])) : t.push([y, /^#[^\r\n]*/, null, "#"])), e.cStyleComments && (n.push([y, /^\/\/[^\r\n]*/, null]), n.push([y, /^\/\*[\s\S]*?(?:\*\/|$)/, null]));
        var i = e.regexLiterals;
        if (i) {
            var s = i > 1 ? "" : "\n\r", o = s ? "." : "[\\S\\s]", u = "/(?=[^/*" + s + "])" + "(?:[^/\\x5B\\x5C" + s + "]" + "|\\x5C" + o + "|\\x5B(?:[^\\x5C\\x5D" + s + "]" + "|\\x5C" + o + ")*(?:\\x5D|$))+" + "/";
            n.push(["lang-regex", RegExp("^" + A + "(" + u + ")")])
        }
        var a = e.types;
        a && n.push([b, a]);
        var f = ("" + e.keywords).replace(/^ | $/g, "");
        f.length && n.push([g, new RegExp("^(?:" + f.replace(/[\s,]+/g, "|") + ")\\b"), null]), t.push([S, /^\s+/, null, " \r\n	 "]);
        var l = "^.[^\\s\\w.$@'\"`/\\\\]*";
        return e.regexLiterals && (l += "(?!s*/)"), n.push([w, /^@[a-z_$][a-z_$@0-9]*/i, null], [b, /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], [S, /^[a-z_$][a-z_$@0-9]*/i, null], [w, new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"), null, "0123456789"], [S, /^\\[\s\S]?/, null], [E, new RegExp(l), null]), H(t, n)
    }

    function F(e, t, n) {
        function a(e) {
            var t = e.nodeType;
            if (t == 1 && !r.test(e.className))if ("br" === e.nodeName)f(e), e.parentNode && e.parentNode.removeChild(e); else for (var o = e.firstChild; o; o = o.nextSibling)a(o); else if ((t == 3 || t == 4) && n) {
                var u = e.nodeValue, l = u.match(i);
                if (l) {
                    var c = u.substring(0, l.index);
                    e.nodeValue = c;
                    var h = u.substring(l.index + l[0].length);
                    if (h) {
                        var p = e.parentNode;
                        p.insertBefore(s.createTextNode(h), e.nextSibling)
                    }
                    f(e), c || e.parentNode.removeChild(e)
                }
            }
        }

        function f(e) {
            function t(e, n) {
                var r = n ? e.cloneNode(!1) : e, i = e.parentNode;
                if (i) {
                    var s = t(i, 1), o = e.nextSibling;
                    s.appendChild(r);
                    for (var u = o; u; u = o)o = u.nextSibling, s.appendChild(u)
                }
                return r
            }

            while (!e.nextSibling) {
                e = e.parentNode;
                if (!e)return
            }
            var n = t(e.nextSibling, 0);
            for (var r; (r = n.parentNode) && r.nodeType === 1;)n = r;
            u.push(n)
        }

        var r = /(?:^|\s)nocode(?:\s|$)/, i = /\r\n?|\n/, s = e.ownerDocument, o = s.createElement("li");
        while (e.firstChild)o.appendChild(e.firstChild);
        var u = [o];
        for (var l = 0; l < u.length; ++l)a(u[l]);
        t === (t | 0) && u[0].setAttribute("value", t);
        var c = s.createElement("ol");
        c.className = "linenums";
        var h = Math.max(0, t - 1 | 0) || 0;
        for (var l = 0, p = u.length; l < p; ++l)o = u[l], o.className = "L" + (l + h) % 10, o.firstChild || o.appendChild(s.createTextNode(" ")), c.appendChild(o);
        e.appendChild(c)
    }

    function I(e) {
        var t = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
        t = t && +t[1] <= 8;
        var n = /\n/g, r = e.sourceCode, i = r.length, s = 0, o = e.spans, u = o.length, a = 0, f = e.decorations, l = f.length, c = 0;
        f[l] = i;
        var h, p;
        for (p = h = 0; p < l;)f[p] !== f[p + 2] ? (f[h++] = f[p++], f[h++] = f[p++]) : p += 2;
        l = h;
        for (p = h = 0; p < l;) {
            var d = f[p], v = f[p + 1], m = p + 2;
            while (m + 2 <= l && f[m + 1] === v)m += 2;
            f[h++] = d, f[h++] = v, p = m
        }
        l = f.length = h;
        var g = e.sourceNode, y;
        g && (y = g.style.display, g.style.display = "none");
        try {
            var b = null;
            while (a < u) {
                var w = o[a], E = o[a + 2] || i, S = f[c + 2] || i, m = Math.min(E, S), x = o[a + 1], T;
                if (x.nodeType !== 1 && (T = r.substring(s, m))) {
                    t && (T = T.replace(n, "\r")), x.nodeValue = T;
                    var N = x.ownerDocument, C = N.createElement("span");
                    C.className = f[c + 1];
                    var k = x.parentNode;
                    k.replaceChild(C, x), C.appendChild(x), s < E && (o[a + 1] = x = N.createTextNode(r.substring(m, E)), k.insertBefore(x, C.nextSibling))
                }
                s = m, s >= E && (a += 2), s >= S && (c += 2)
            }
        } finally {
            g && (g.style.display = y)
        }
    }

    function R(t, n) {
        for (var r = n.length; --r >= 0;) {
            var i = n[r];
            q.hasOwnProperty(i) ? e.console && console.warn("cannot override language handler %s", i) : q[i] = t
        }
    }

    function U(e, t) {
        if (!e || !q.hasOwnProperty(e))e = /^\s*</.test(t) ? "default-markup" : "default-code";
        return q[e]
    }

    function z(t) {
        var n = t.langExtension;
        try {
            var r = M(t.sourceNode, t.pre), i = r.sourceCode;
            t.sourceCode = i, t.spans = r.spans, t.basePos = 0, U(n, i)(t), I(t)
        } catch (s) {
            e.console && console.log(s && s.stack || s)
        }
    }

    function W(e, t, n) {
        var r = document.createElement("div");
        r.innerHTML = "<pre>" + e + "</pre>", r = r.firstChild, n && F(r, n, !0);
        var i = {langExtension: t, numberLines: n, sourceNode: r, pre: 1};
        return z(i), r.innerHTML
    }

    function X(t, n) {
        function s(e) {
            return r.getElementsByTagName(e)
        }

        function E() {
            var n = e.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : Infinity;
            for (; h < u.length && c.now() < n; h++) {
                var r = u[h], s = w;
                for (var o = r; o = o.previousSibling;) {
                    var a = o.nodeType, f = (a === 7 || a === 8) && o.nodeValue;
                    if (f ? !/^\??prettify\b/.test(f) : a !== 3 || /\S/.test(o.nodeValue))break;
                    if (f) {
                        s = {}, f.replace(/\b(\w+)=([\w:.%+-]+)/g, function (e, t, n) {
                            s[t] = n
                        });
                        break
                    }
                }
                var l = r.className;
                if ((s !== w || v.test(l)) && !m.test(l)) {
                    var S = !1;
                    for (var x = r.parentNode; x; x = x.parentNode) {
                        var T = x.tagName;
                        if (b.test(T) && x.className && v.test(x.className)) {
                            S = !0;
                            break
                        }
                    }
                    if (!S) {
                        r.className += " prettyprinted";
                        var N = s.lang;
                        if (!N) {
                            N = l.match(d);
                            var C;
                            !N && (C = P(r)) && y.test(C.tagName) && (N = C.className.match(d)), N && (N = N[1])
                        }
                        var k;
                        if (g.test(r.tagName))k = 1; else {
                            var L = r.currentStyle, A = i.defaultView, O = L ? L.whiteSpace : A && A.getComputedStyle ? A.getComputedStyle(r, null).getPropertyValue("white-space") : 0;
                            k = O && "pre" === O.substring(0, 3)
                        }
                        var M = s.linenums;
                        (M = M === "true" || +M) || (M = l.match(/\blinenums\b(?::(\d+))?/), M = M ? M[1] && M[1].length ? +M[1] : !0 : !1), M && F(r, M, k), p = {langExtension: N, sourceNode: r, numberLines: M, pre: k}, z(p)
                    }
                }
            }
            h < u.length ? setTimeout(E, 250) : "function" == typeof t && t()
        }

        var r = n || document.body, i = r.ownerDocument || document, o = [s("pre"), s("code"), s("xmp")], u = [];
        for (var a = 0; a < o.length; ++a)for (var f = 0, l = o[a].length; f < l; ++f)u.push(o[a][f]);
        o = null;
        var c = Date;
        c.now || (c = {now: function () {
            return+(new Date)
        }});
        var h = 0, p, d = /\blang(?:uage)?-([\w.]+)(?!\S)/, v = /\bprettyprint\b/, m = /\bprettyprinted\b/, g = /pre|xmp/i, y = /^code$/i, b = /^(?:pre|code|xmp)$/i, w = {};
        E()
    }

    var e = window, t = ["break,continue,do,else,for,if,return,while"], n = [t, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], r = [n, "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], i = [r, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], s = [r, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"], o = [s, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"], u = "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", a = [r, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"], f = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", l = [t, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], c = [t, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], h = [t, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"], p = [t, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"], d = [i, o, a, f, l, c, p], v = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/, m = "str", g = "kwd", y = "com", b = "typ", w = "lit", E = "pun", S = "pln", x = "tag", T = "dec", N = "src", C = "atn", k = "atv", L = "nocode", A = "(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*", D = /\S/, j = B({keywords: d, hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0}), q = {};
    R(j, ["default-code"]), R(H([], [
        [S, /^[^<?]+/],
        [T, /^<!\w[^>]*(?:>|$)/],
        [y, /^<\!--[\s\S]*?(?:-\->|$)/],
        ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/],
        ["lang-", /^<%([\s\S]+?)(?:%>|$)/],
        [E, /^(?:<[%?]|[%?]>)/],
        ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
        ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
        ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
        ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
    ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), R(H([
        [S, /^[\s]+/, null, " 	\r\n"],
        [k, /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"]
    ], [
        [x, /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
        [C, /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
        ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
        [E, /^[=<>\/]+/],
        ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i],
        ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i],
        ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i],
        ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i],
        ["lang-css", /^style\s*=\s*\'([^\']+)\'/i],
        ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i]
    ]), ["in.tag"]), R(H([], [
        [k, /^[\s\S]+/]
    ]), ["uq.val"]), R(B({keywords: i, hashComments: !0, cStyleComments: !0, types: v}), ["c", "cc", "cpp", "cxx", "cyc", "m"]), R(B({keywords: "null,true,false"}), ["json"]), R(B({keywords: o, hashComments: !0, cStyleComments: !0, verbatimStrings: !0, types: v}), ["cs"]), R(B({keywords: s, cStyleComments: !0}), ["java"]), R(B({keywords: p, hashComments: !0, multiLineStrings: !0}), ["bash", "bsh", "csh", "sh"]), R(B({keywords: l, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0}), ["cv", "py", "python"]), R(B({keywords: f, hashComments: !0, multiLineStrings: !0, regexLiterals: 2}), ["perl", "pl", "pm"]), R(B({keywords: c, hashComments: !0, multiLineStrings: !0, regexLiterals: !0}), ["rb", "ruby"]), R(B({keywords: a, cStyleComments: !0, regexLiterals: !0}), ["javascript", "js"]), R(B({keywords: u, hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0}), ["coffee"]), R(B({keywords: h, cStyleComments: !0, multilineStrings: !0}), ["rc", "rs", "rust"]), R(H([], [
        [m, /^[\s\S]+/]
    ]), ["regex"]);
    var V = e.PR = {createSimpleLexer: H, registerLangHandler: R, sourceDecorator: B, PR_ATTRIB_NAME: C, PR_ATTRIB_VALUE: k, PR_COMMENT: y, PR_DECLARATION: T, PR_KEYWORD: g, PR_LITERAL: w, PR_NOCODE: L, PR_PLAIN: S, PR_PUNCTUATION: E, PR_SOURCE: N, PR_STRING: m, PR_TAG: x, PR_TYPE: b, prettyPrintOne: IN_GLOBAL_SCOPE ? e.prettyPrintOne = W : prettyPrintOne = W, prettyPrint: prettyPrint = IN_GLOBAL_SCOPE ? e.prettyPrint = X : prettyPrint = X};
    typeof define == "function" && define.amd && define("google-code-prettify", [], function () {
        return V
    })
})(), define("prettify", function () {
}), define("ud.tabs", ["jquery"], function (e) {
    var t = function () {
        return location.hash
    }, n = function () {
        typeof callback == "function" && callback.call(this)
    }, r = function () {
        var n = e(t()), r = e('a[href="' + t() + '"]').parent();
        n.siblings().hide(), n.show(), r.siblings().removeClass("on"), r.addClass("on")
    };
    e.fn.tabnav = function (n) {
        return this.each(function (i) {
            var s = this, o = function () {
                typeof n == "function" && n.call(this)
            };
            !t() || t() && !e(t(), s).length ? (e(">ul li:first-child", s).addClass("on"), e(">div>div:first-child", s).fadeIn(function () {
                o()
            })) : r()
        })
    };
    var i = function () {
        e(".ins-slider").each(function () {
            e(t()).closest(".ins-bio").length && s.init(e(this), e(t()).index())
        })
    }, s = {init: function (t, n) {
        n < 0 && (n = 0);
        var r = {ul: e(">.mask>ul", t), details_mask: t.parent().find(".ins-details-mask"), nav: e(">a", t), prev: e("a.prev", t), next: e("a.next", t), ins_count: function () {
            return e("li", this.ul).size()
        }}, i = function () {
            r.prev.attr("href", "#inst" + (n - 1)), r.next.attr("href", "#inst" + (n + 1)), r.ul.css("margin-left", n * -90), r.details_mask.css("margin-top", n * -40), r.nav.removeClass("disabled"), n < 1 && r.prev.addClass("disabled"), n >= r.ins_count() - 1 && r.next.addClass("disabled")
        };
        i(n)
    }};
    e.fn.initTabs = function () {
        window.onhashchange = function () {
            r(), i()
        }, window.onload = function () {
            i()
        }
    }
}), define("ud.initializer", ["jquery", "jquery.ui", "init", "ud.time", "ud.procedurals", "jquery-ui-timepicker-addon", "prettify", "ud.tabs"], function (e) {
    e.fn.ud_initialize = function (t) {
        var n = {onComplete: function () {
        }}, r = e.extend(n, t), i = e(this);
        e("#home-link", i).bind("contextmenu",function () {
            return!1
        }).mousedown(function (t) {
            t.which == 3 && (t.preventDefault(), e("#logo-popup", i).css("top", 0))
        });
        var s = UD.Time.convertReadableFormat(UD.Time.calculateTimeZone());
        e("select.ud-auto-detected-timezone", i).find("option").each(function () {
            e(this).text().indexOf(s) > -1 && e(this).parent("select").val(e(this).val())
        }), e(".logo-popup-close", i).click(function () {
            e("#logo-popup", i).css("top", "-300px")
        }), e(".date-time-form-item.fixed-time").each(function (t, n) {
            var r = {showOn: "both", buttonImage: "/static/images/calendar.gif", buttonImageOnly: !0, dateFormat: "yy-mm-dd", timeFormat: "hh:mm:ss", showHour: !1, showMinute: !1, showTime: !1, showButtonPanel: !1, hour: 23, minute: 59, onSelect: function (t, n) {
                e(this).datepicker("hide")
            }};
            e(n).data("disable-pastdays") && (r.minDate = new Date), e(n).datetimepicker(r)
        }), e(".date-time-form-item").datetimepicker({showOn: "both", buttonImage: "/static/images/calendar.gif", buttonImageOnly: !0, dateFormat: "yy-mm-dd", timeFormat: "hh:mm:ss", hour: 23, minute: 59}), e(".date-form-item").datepicker({showOn: "both", buttonImage: "/static/images/calendar.gif", buttonImageOnly: !0, changeMonth: !0, changeYear: !0, dateFormat: "yy-mm-dd", showButtonPanel: !1, onSelect: function () {
            e(this).datepicker("hide")
        }}), e(".time-form-item").timepicker({ampm: !0, showTimezone: !0, timezone: "PST", timezoneList: [
            {value: "PST", label: "PST"}
        ]}), e(".auth input", i).focus(function () {
            e(this).parent().removeClass("error wrong")
        }), iePlaceholder(), e(".simple-tooltip", i).each(function () {
            e(this).prepend("<span>" + e(this).data("tooltip") + "</span>")
        }), e(".collapsable-text", i).each(function () {
            var t = e(this), n = t.height(), r = parseInt(t.data("collapsable-text-height")) + 20, i = "(more)", s = t.data("more-btn-text");
            s && (i = s);
            var o = "(less)", u = t.data("less-btn-text");
            u && (o = u), n > r && (e(this).addClass("compressed"), t.height(r), t.after("<a href='' class='collapsable-more'>" + i + "</a>"), e(".collapsable-more").toggle(function () {
                return e(this).prev().css("height", "auto").removeClass("compressed"), e(this).text(o), !1
            }, function () {
                return e(this).prev().height(r).addClass("compressed"), e(this).text(i), !1
            }))
        });
        var o = new Array;
        o[".input-table"] = {mid: "ud.formtooltips", fname: "formTooltips"}, o["[rel=isEmailValid]"] = {mid: "ud.emailValidator", fname: "emailValidator"}, o["#collapsible-menu"] = {mid: "ud.collapse", fname: "collapseMenu"}, o[".dropdownmenu"] = {mid: "ud.dropdown", fname: "dropdownmenu"}, o["input[type=radio].ud-star"] = {mid: "jquery.rating", fname: "rating"}, o["textarea[class*=expand]"] = {mid: "jquery.textarea-expander", fname: "TextAreaExpander"}, o[".ud-actionlogger"] = {mid: "ud.actionlogger", fname: "ud_actionlogger"}, o[".ud-articlecreator"] = {mid: "ud.articlecreator", fname: "ud_articlecreator"}, o[".ud-assetcreator"] = {mid: "ud.assetcreator", fname: "ud_assetcreator"}, o[".ud-assetcreator-externallink"] = {mid: "ud.assetcreator.externallink", fname: "ud_assetcreator_externallink"}, o[".ud-assetcreator-fileuploader"] = {mid: "ud.assetcreator.fileuploader", fname: "ud_assetcreator_fileuploader"}, o[".ud-audiocreator"] = {mid: "ud.audiocreator", fname: "ud_audiocreator"}, o[".ud-autocomplete"] = {mid: "ud.autocomplete", fname: "ud_autocomplete"}, o[".ud-autosuggestformitem"] = {mid: "ud.autosuggestformitem", fname: "ud_autosuggestformitem"}, o[".ud-banners"] = {mid: "ud.banners", fname: "ud_banners"}, o[".ud-bulletlistformitem"] = {mid: "ud.bulletlistformitem", fname: "ud_bulletlistformitem"}, o[".ud-choosewishlistformitem"] = {mid: "ud.choosewishlistformitem", fname: "ud_choosewishlistformitem"}, o[".ud-collection"] = {mid: "coffee-compiled/ud.collection", fname: "ud_collection"}, o[".ud-comments"] = {mid: "ud.comments", fname: "ud_comments"}, o[".ud-courseactivities"] = {mid: "ud.courseactivities", fname: "ud_courseactivities"}, o[".ud-courseannouncement"] = {mid: "ud.courseannouncement", fname: "ud_courseannouncement"}, o[".ud-coursecarousel"] = {mid: "coffee-compiled/ud.coursecarousel", fname: "ud_coursecarousel"}, o[".ud-courseimpressiontracker"] = {mid: "ud.courseimpressiontracker", fname: "ud_courseimpressiontracker"}, o[".ud-courseprivacyformitem"] = {mid: "ud.courseprivacyformitem", fname: "ud_courseprivacyformitem"}, o[".ud-coursetaking"] = {mid: "ud.coursetaking", fname: "ud_coursetaking"}, o[".ud-creditcard"] = {mid: "ud.creditcard", fname: "ud_creditcard"}, o[".ud-creditcardexpirationformitem"] = {mid: "ud.creditcardexpirationformitem", fname: "ud_creditcardexpirationformitem"}, o[".ud-curriculumform"] = {mid: "ud.curriculumform", fname: "ud_curriculumform"}, o[".ud-demo"] = {mid: "ud.demo", fname: "ud_demo"}, o[".ud-discover"] = {mid: "ud.discover", fname: "ud_discover"}, o[".ud-editlivesessions"] = {mid: "ud.editlivesessions", fname: "ud_editlivesessions"}, o[".ud-ebookcreator"] = {mid: "ud.ebookcreator", fname: "ud_ebookcreator"}, o[".ud-ebookviewer"] = {mid: "ud.ebookviewer", fname: "ud_ebookviewer"}, o[".ud-extras"] = {mid: "ud.extras", fname: "ud_extras"}, o[".ud-fileupload"] = {mid: "ud.fileupload", fname: "ud_fileupload"}, o[".ud-formajaxify"] = {mid: "ud.formajaxify", fname: "ud_formajaxify"}, o[".ud-form"] = {mid: "ud.form", fname: "ud_form"}, o[".ud-hellobar"] = {mid: "ud.hellobar", fname: "ud_hellobar"}, o[".ud-gift-card"] = {mid: "ud.giftcard", fname: "ud_giftcard"}, o[".ud-imageuploader"] = {mid: "ud.imageuploader", fname: "ud_imageuploader"}, o[".ud-imageuploadwithpreview"] = {mid: "ud.imageuploadwithpreview", fname: "ud_imageuploadwithpreview"}, o[".ud-importcontent"] = {mid: "ud.importcontent", fname: "ud_importcontent"}, o[".ud-inplaceeditor"] = {mid: "ud.inplaceeditor", fname: "ud_inplaceeditor"}, o[".ud-interests"] = {mid: "ud.interests", fname: "ud_interests"}, o[".ud-interestsformitem"] = {mid: "ud.interestsformitem", fname: "ud_interestsformitem"}, o[".ud-invitationrequest"] = {mid: "ud.invitationrequest", fname: "ud_invitationrequest"}, o[".ud-jwplayer"] = {mid: "ud.jwplayer", fname: "ud_jwplayer"}, o[".ud-livesessions"] = {mid: "ud.livesessions", fname: "ud_livesessions"}, o[".ud-loader"] = {mid: "ud.loader", fname: "ud_loader"}, o[".ud-manageinstructors"] = {mid: "ud.manageinstructors", fname: "ud_manageinstructors"}, o[".ud-mashupcreator"] = {mid: "ud.mashupcreator", fname: "ud_mashupcreator"}, o[".ud-message"] = {mid: "ud.message", fname: "ud_message"}, o[".ud-multiplechoicequestionformitem"] = {mid: "ud.multiplechoicequestionformitem", fname: "ud_multiplechoicequestionformitem"}, o[".ud-newsfeed"] = {mid: "ud.newsfeed", fname: "ud_newsfeed"}, o[".ud-notetaking"] = {mid: "ud.notetaking", fname: "ud_notetaking"}, o[".ud-notifications"] = {mid: "ud.notifications", fname: "ud_notifications"}, o[".ud-page"] = {mid: "ud.page", fname: "ud_page"}, o[".ud-floatingmenu"] = {mid: "ud.floatingmenu", fname: "ud_floatingmenu"}, o[".ud-payment"] = {mid: "ud.payment", fname: "ud_payment"}, o[".ud-paymentmethod"] = {mid: "ud.paymentmethod", fname: "ud_paymentmethod"}, o[".ud-popover"] = {mid: "ud.popover", fname: "ud_popover"}, o[".ud-piechart"] = {mid: "ud.piechart", fname: "ud_piechart"}, o[".ud-popup"] = {mid: "ud.popup", fname: "ud_popup"}, o[".ud-presentationcreator"] = {mid: "ud.presentationcreator", fname: "ud_presentationcreator"}, o[".ud-presentationplayer"] = {mid: "ud.presentationplayer", fname: "ud_presentationplayer"}, o[".ud-presentationviewer"] = {mid: "ud.presentationviewer", fname: "ud_presentationviewer"}, o[".ud-questionanswer"] = {mid: "ud.questionanswer", fname: "ud_questionanswer"}, o[".ud-readmore"] = {mid: "ud.readmore", fname: "ud_readmore"}, o[".ud-search"] = {mid: "ud.search", fname: "ud_search"}, o[".ud-sendcourseannouncement"] = {mid: "ud.sendcourseannouncement", fname: "ud_sendcourseannouncement"}, o[".ud-signupbox"] = {mid: "ud.signupbox", fname: "ud_signupbox"}, o[".ud-slider"] = {mid: "ud.slider", fname: "ud_slider"}, o[".ud-template"] = {mid: "ud.template", fname: "ud_template"}, o[".ud-textinput"] = {mid: "ud.textinput", fname: "ud_textinput"}, o[".ud-tabsformitem"] = {mid: "ud.tabsformitem", fname: "ud_tabsformitem"}, o[".ud-temporaryprogresshandler"] = {mid: "ud.temporaryprogresshandler", fname: "ud_temporaryprogresshandler"}, o[".ud-thumbnailselector"] = {mid: "ud.thumbnailselector", fname: "ud_thumbnailselector"}, o[".ud-usernotificationsform"] = {mid: "ud.usernotificationsform", fname: "ud_usernotificationsform"}, o[".ud-userprofile"] = {mid: "ud.userprofile", fname: "ud_userprofile"}, o[".ud-videocreator"] = {mid: "ud.videocreator", fname: "ud_videocreator"}, o[".ud-videouploadwithpreview"] = {mid: "ud.videouploadwithpreview", fname: "ud_videouploadwithpreview"}, o[".ud-windowpopup"] = {mid: "ud.windowpopup", fname: "ud_windowpopup"}, o[".ud-wishlist"] = {mid: "ud.wishlist", fname: "ud_wishlist"}, o[".ud-wysiwyg"] = {mid: "ud.wysiwyg", fname: "ud_wysiwyg"}, o['[class*="ud-jq-"]'] = {mid: "ud.jqelement", fname: "ud_jqelement"}, o[".ud-organization-discover"] = {mid: "ud.organization.discover", fname: "ud_organization_discover"}, o[".ud-organization-analytics"] = {mid: "ud.organization.analytics", fname: "ud_organization_analytics"}, o[".ud-organization-manageusersandgroups"] = {mid: "ud.organization.manageusersandgroups", fname: "ud_organization_manageusersandgroups"}, o[".ud-organization-editgroup"] = {mid: "ud.organization.editgroup", fname: "ud_organization_editgroup"}, o[".ud-organization-creategroup"] = {mid: "ud.organization.creategroup", fname: "ud_organization_creategroup"}, o[".ud-organization-invitenewusers"] = {mid: "ud.organization.invitenewusers", fname: "ud_organization_invitenewusers"}, o[".ud-organization-editusergroups"] = {mid: "ud.organization.editusergroups", fname: "ud_organization_editusergroups"}, o[".ud-organization-managelicenses"] = {mid: "ud.organization.managelicenses", fname: "ud_organization_managelicenses"}, o[".ud-userlist"] = {mid: "ud.userlist", fname: "ud_userlist"};
        var u = 0, a = function (e) {
            u++
        }, f = function (e) {
            u--, u === 0 && r.onComplete()
        }, l = f;
        for (var c in o) {
            var h = e(c, i);
            if (h.length > 0) {
                var p = o[c], d = p.mid, v = p.fname;
                a(d.toString()), require([d.toString()], function (t, n, r, i) {
                    e(t).each(function (t, r) {
                        typeof e(r).data(n) == "undefined" && e(r)[n]()
                    }), r(i.toString())
                }.context(this, h, v, f, d.toString()), function (e, t, n, r, i, s) {
                    throw console.log("Require couldn't load", i, e, t, n), r(i.toString()), s
                }.context(this, h, v, c, l, d.toString()))
            }
        }
        u === 0 && r.onComplete(), e("pre", i).addClass("prettyprint"), prettyPrint(), e(".tabs-container", i).length && (e(".tabs-container", i).initTabs(), e(".tabs-container", i).tabnav()), require(["twitterwidgets"], function () {
            typeof twttr != "undefined" && twttr.widgets.load()
        }), require(["facebook-api"], function () {
            typeof FB != "undefined" && FB && i.each(function (e, t) {
                FB.XFBML.parse(t)
            })
        }), e.each(typeof window.onReadyCalls == "undefined" ? [] : window.onReadyCalls, function (e, t) {
            t()
        }), window.onReadyCalls = []
    }
}), define("jquery.autoellipsis", ["jquery"], function (e) {
    function s(t, n) {
        var r = t.data("jqae");
        r || (r = {});
        var i = r.wrapperElement;
        i || (i = t.wrapInner("<div/>").find(">div"), i.css({margin: 0, padding: 0, border: 0}));
        var s = i.data("jqae");
        s || (s = {});
        var f = s.originalContent;
        f ? i = s.originalContent.clone(!0).data("jqae", {originalContent: f}).replaceAll(i) : i.data("jqae", {originalContent: i.clone(!0)}), t.data("jqae", {wrapperElement: i, containerWidth: t.width(), containerHeight: t.height()});
        var l = t.height(), c = (parseInt(t.css("padding-top"), 10) || 0) + (parseInt(t.css("border-top-width"), 10) || 0) - (i.offset().top - t.offset().top), h = !1, p = i;
        n.selector && (p = e(i.find(n.selector).get().reverse())), p.each(function () {
            var t = e(this), r = t.text(), s = !1;
            if (i.innerHeight() - t.innerHeight() > l + c)t.remove(); else {
                a(t);
                if (t.contents().length) {
                    h && (u(t).get(0).nodeValue += n.ellipsis, h = !1);
                    while (i.innerHeight() > l + c) {
                        s = o(t);
                        if (!s) {
                            h = !0, t.remove();
                            break
                        }
                        a(t);
                        if (!t.contents().length) {
                            h = !0, t.remove();
                            break
                        }
                        u(t).get(0).nodeValue += n.ellipsis
                    }
                    n.setTitle == "onEllipsis" && s || n.setTitle == "always" ? t.attr("title", r) : n.setTitle != "never" && t.removeAttr("title")
                }
            }
        })
    }

    function o(t) {
        var n = u(t);
        if (n.length) {
            var r = n.get(0).nodeValue, i = r.lastIndexOf(" ");
            return i > -1 ? (r = e.trim(r.substring(0, i)), n.get(0).nodeValue = r) : n.get(0).nodeValue = "", !0
        }
        return!1
    }

    function u(e) {
        if (e.contents().length) {
            var t = e.contents(), n = t.eq(t.length - 1);
            return n.filter(f).length ? n : u(n)
        }
        e.append("");
        var t = e.contents();
        return t.eq(t.length - 1)
    }

    function a(t) {
        if (t.contents().length) {
            var n = t.contents(), r = n.eq(n.length - 1);
            if (r.filter(f).length) {
                var i = r.get(0).nodeValue;
                return i = e.trim(i), i == "" ? (r.remove(), !0) : !1
            }
            while (a(r));
            return r.contents().length ? !1 : (r.remove(), !0)
        }
        return!1
    }

    function f() {
        return this.nodeType === 3
    }

    function l(e, r) {
        t[e] = r, n || (n = window.setInterval(function () {
            h()
        }, 200))
    }

    function c(e) {
        t[e] && (delete t[e], t.length || n && (window.clearInterval(n), n = undefined))
    }

    function h() {
        if (!r) {
            r = !0;
            for (var n in t)e(n).each(function () {
                var r, i;
                r = e(this), i = r.data("jqae"), (i.containerWidth != r.width() || i.containerHeight != r.height()) && s(r, t[n])
            });
            r = !1
        }
    }

    var t = {}, n, r = !1, i = {ellipsis: "...", setTitle: "never", live: !1};
    e.fn.ellipsis = function (t, n) {
        var r, o;
        return r = e(this), typeof t != "string" && (n = t, t = undefined), o = e.extend({}, i, n), o.selector = t, r.each(function () {
            var t = e(this);
            s(t, o)
        }), o.live ? l(r.selector, o) : c(r.selector), this
    }
}), define("jquery.autoSuggest", ["jquery"], function (e) {
    e.fn.autoSuggest = function (t, n) {
        var r = {asHtmlID: !1, startText: "Enter Name Here", emptyText: "No Results Found", preFill: {}, limitText: "No More Selections Are Allowed", selectedItemProp: "value", selectedValuesProp: "value", searchObjProps: "value", queryParam: "q", retrieveLimit: !1, extraParams: "", matchCase: !1, minChars: 1, keyDelay: 400, resultsHighlight: !0, neverSubmit: !1, selectionLimit: !1, showResultList: !0, start: function () {
        }, selectionClick: function (e) {
        }, selectionAdded: function (e) {
        }, selectionRemoved: function (e) {
            e.remove()
        }, formatList: !1, beforeRetrieve: function (e) {
            return e
        }, retrieveComplete: function (e) {
            return e
        }, resultClick: function (e) {
        }, resultsComplete: function () {
        }, selectFirstDataItem: !1}, i = e.extend(r, n), s = "object", o = 0;
        if (typeof t == "string" && t) {
            s = "string";
            var u = t
        } else {
            var a = t;
            for (k in t)t.hasOwnProperty(k) && o++
        }
        if (s == "object" && o >= 0 || s == "string")return this.each(function (t) {
            function C() {
                if (lastKeyPressCode == 46 || lastKeyPressCode > 8 && lastKeyPressCode < 32)return h.hide();
                var t = r.val().replace(/[\\]+|[\/]+/g, "");
                if (t == x)return;
                x = t;
                if (t.length >= i.minChars) {
                    l.addClass("loading");
                    if (s == "string") {
                        var n = "";
                        i.retrieveLimit && (n = "&limit=" + encodeURIComponent(i.retrieveLimit)), i.beforeRetrieve && (t = i.beforeRetrieve.call(this, t)), e.getJSON(u + "?" + i.queryParam + "=" + encodeURIComponent(t) + n + i.extraParams, function (e) {
                            o = 0;
                            var n = i.retrieveComplete.call(this, e);
                            for (k in n)n.hasOwnProperty(k) && o++;
                            A(n, t)
                        })
                    } else i.beforeRetrieve && (t = i.beforeRetrieve.call(this, t)), A(a, t)
                } else l.removeClass("loading"), h.hide()
            }

            function A(t, n) {
                i.matchCase || (n = n.toLowerCase());
                var s = 0;
                h.html(p.html("")).hide();
                for (var a = 0; a < o; a++) {
                    var c = a;
                    L++;
                    var v = !1;
                    if (i.searchObjProps == "value")var m = t[c].value; else {
                        var m = "", g = i.searchObjProps.split(",");
                        for (var y = 0; y < g.length; y++) {
                            var b = e.trim(g[y]);
                            m = m + t[c][b] + " "
                        }
                    }
                    m && (i.matchCase || (m = m.toLowerCase()), m.search(n) != -1 && d.val().search("," + t[c][i.selectedValuesProp] + ",") == -1 && (v = !0));
                    if (v) {
                        var w = e('<li class="as-result-item" id="as-result-item-' + c + '"></li>').click(function () {
                            var t = e(this).data("data"), n = t.num;
                            if (e("#as-selection-" + n, l).length <= 0 && !N) {
                                var s = t.attributes;
                                r.val("").focus(), x = "", O(s, n), i.resultClick.call(this, t), h.hide()
                            }
                            N = !1
                        }).mousedown(function () {
                            f = !1
                        }).mouseover(function () {
                            e("li", p).removeClass("active"), e(this).addClass("active")
                        }).data("data", {attributes: t[c], num: L}), E = e.extend({}, t[c]);
                        if (!i.matchCase)var S = new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + n + ")(?![^<>]*>)(?![^&;]+;)", "gi"); else var S = new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + n + ")(?![^<>]*>)(?![^&;]+;)", "g");
                        i.resultsHighlight && (E[i.selectedItemProp] = E[i.selectedItemProp].replace(S, "<em>$1</em>")), i.formatList ? w = i.formatList.call(this, E, w) : w = w.html(E[i.selectedItemProp]), p.append(w), delete E, s++;
                        if (i.retrieveLimit && i.retrieveLimit == s)break
                    }
                }
                l.removeClass("loading");
                if (s > 0)p.css("width", l.outerWidth()), h.show(); else if (u || o > 0)p.html('<li class="as-message no-matching">No Matching Items</li>'), h.show();
                i.selectFirstDataItem && _(), i.resultsComplete.call(this)
            }

            function O(t, n) {
                d.val() == "" && d.val(","), d.val(d.val() + t[i.selectedValuesProp] + ",");
                var s = e('<li class="as-selection-item" id="as-selection-' + n + '"></li>').click(function () {
                    i.selectionClick.call(this, e(this)), l.children().removeClass("selected"), e(this).addClass("selected")
                }).mousedown(function () {
                    f = !1
                }), o = e('<a class="as-close">&times;</a>').click(function () {
                    return d.val(d.val().replace("," + t[i.selectedValuesProp] + ",", ",")), i.selectionRemoved.call(this, s), f = !0, r.focus(), !1
                });
                c.before(s.html(t[i.selectedItemProp]).prepend(o)), i.selectionAdded.call(this, c.prev())
            }

            function M(t) {
                if (e(":visible", h).length > 0) {
                    var n = e("li", h);
                    if (t == "down")var r = n.eq(0); else var r = n.filter(":last");
                    var i = e("li.active:first", h);
                    i.length > 0 && (t == "down" ? r = i.next() : r = i.prev()), n.removeClass("active"), r.addClass("active")
                }
            }

            function _() {
                if (e(":visible", h).length > 0) {
                    var t = e("li", h), n = t.eq(0), r = e("li.active:first", h);
                    r.length > 0 && (n = r.next()), t.removeClass("active"), n.addClass("active")
                }
            }

            if (!i.asHtmlID) {
                t = t + "" + Math.floor(Math.random() * 100);
                var n = "as-input-" + t
            } else {
                t = i.asHtmlID;
                var n = t
            }
            i.start.call(this);
            var r = e(this);
            e(this).css("color", "#bbb"), r.attr("autocomplete", "off").addClass("as-input").attr("id", n).val(i.startText);
            var f = !1;
            r.wrap('<ul class="as-selections" id="as-selections-' + t + '"></ul>').wrap('<li class="as-original" id="as-original-' + t + '"></li>');
            var l = e("#as-selections-" + t), c = e("#as-original-" + t), h = e('<div class="as-results" id="as-results-' + t + '"></div>').hide(), p = e('<ul class="as-list"></ul>'), d = e('<input type="hidden" class="as-values" name="as_values_' + t + '" id="as-values-' + t + '" />'), v = "";
            if (typeof i.preFill == "string") {
                var m = i.preFill.split(",");
                for (var g = 0; g < m.length; g++) {
                    var y = {};
                    y[i.selectedValuesProp] = m[g], m[g] != "" && O(y, "000" + g)
                }
                v = i.preFill
            } else {
                v = "";
                var b = 0;
                for (k in i.preFill)i.preFill.hasOwnProperty(k) && b++;
                if (b > 0)for (var g = 0; g < b; g++) {
                    var w = i.preFill[g][i.selectedValuesProp];
                    w == undefined && (w = ""), v = v + w + ",", w != "" && O(i.preFill[g], "000" + g)
                }
            }
            if (v != "") {
                r.val("");
                var E = v.substring(v.length - 1);
                E != "," && (v += ","), d.val("," + v), e("li.as-selection-item", l).addClass("blur").removeClass("selected")
            }
            r.after(d), l.click(function () {
                f = !0, r.focus()
            }).mousedown(function () {
                f = !1
            }).after(h);
            var S = null, x = "", T = 0, N = !1;
            r.focus(function () {
                return e(this).val() == i.startText && d.val() == "" ? (e(this).val(""), e(this).css("color", "#000")) : f && (e("li.as-selection-item", l).removeClass("blur"), e(this).val() != "" && (p.css("width", l.outerWidth()), h.show())), f = !0, !0
            }).blur(function () {
                e(this).val() == "" && d.val() == "" && v == "" ? (e(this).css("color", "#bbb"), e(this).val(i.startText)) : f && (e("li.as-selection-item", l).addClass("blur").removeClass("selected"), h.hide())
            }).keydown(function (t) {
                lastKeyPressCode = t.keyCode, first_focus = !1;
                switch (t.keyCode) {
                    case 38:
                        t.preventDefault(), M("up");
                        break;
                    case 40:
                        t.preventDefault(), M("down");
                        break;
                    case 8:
                        if (r.val() == "") {
                            var n = d.val().split(",");
                            n = n[n.length - 2], l.children().not(c.prev()).removeClass("selected"), c.prev().hasClass("selected") ? (d.val(d.val().replace("," + n + ",", ",")), i.selectionRemoved.call(this, c.prev())) : (i.selectionClick.call(this, c.prev()), c.prev().addClass("selected"))
                        }
                        r.val().length == 1 && (h.hide(), x = ""), e(":visible", h).length > 0 && (S && clearTimeout(S), S = setTimeout(function () {
                            C()
                        }, i.keyDelay));
                        break;
                    case 9:
                    case 188:
                    case 32:
                        if (t.keyCode === 32 && (u || a || o))break;
                        if (p.find("li:first").hasClass("no-matching")) {
                            t.preventDefault();
                            break
                        }
                        N = !0;
                        var s = r.val().split(",");
                        for (g in s) {
                            var f = s[g].trim();
                            if (f != "" && d.val().search("," + f + ",") < 0 && f.length >= i.minChars) {
                                t.preventDefault();
                                var v = {};
                                v[i.selectedItemProp] = f, v[i.selectedValuesProp] = f;
                                var m = e("li", l).length;
                                O(v, "00" + (m + 1)), r.val("")
                            }
                        }
                        break;
                    case 13:
                        N = !1;
                        if (p.find("li:first").hasClass("no-matching")) {
                            t.preventDefault();
                            break
                        }
                        var y = e("li.active:first", h);
                        y.length > 0 && (y.click(), h.hide());
                        if (i.neverSubmit || y.length > 0) {
                            t.preventDefault();
                            var s = r.val().split(",");
                            for (g in s) {
                                var f = s[g].trim();
                                if (f != "" && d.val().search("," + f + ",") < 0 && f.length >= i.minChars) {
                                    t.preventDefault();
                                    var v = {};
                                    v[i.selectedItemProp] = f, v[i.selectedValuesProp] = f;
                                    var m = e("li", l).length;
                                    O(v, "00" + (m + 1)), r.val("")
                                }
                            }
                        }
                        break;
                    default:
                        i.showResultList && (i.selectionLimit && e("li.as-selection-item", l).length >= i.selectionLimit ? (p.html('<li class="as-message">' + i.limitText + "</li>"), h.show()) : (S && clearTimeout(S), S = setTimeout(function () {
                            C()
                        }, i.keyDelay)))
                }
            });
            var L = 0
        })
    }
}), define("jquery.color", ["jquery"], function (e) {
    function t(t) {
        var n;
        return t && t.constructor == Array && t.length == 3 ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1]), parseInt(n[2]), parseInt(n[3])] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(n[1]) * 2.55, parseFloat(n[2]) * 2.55, parseFloat(n[3]) * 2.55] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : r[e.trim(t).toLowerCase()]
    }

    function n(n, r) {
        var i;
        do {
            i = e.curCSS(n, r);
            if (i != "" && i != "transparent" || e.nodeName(n, "body"))break;
            r = "backgroundColor"
        } while (n = n.parentNode);
        return t(i)
    }

    e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (r, i) {
        e.fx.step[i] = function (e) {
            e.state == 0 && (e.start = n(e.elem, i), e.end = t(e.end)), e.elem.style[i] = "rgb(" + [Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0]), 255), 0), Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1]), 255), 0), Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2]), 255), 0)].join(",") + ")"
        }
    });
    var r = {aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0]}
}), define("jquery.cookie", ["jquery"], function (e) {
    e.cookie = function (t, n, r) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(n)) || n === null || n === undefined)) {
            r = e.extend({}, r);
            if (n === null || n === undefined)r.expires = -1;
            if (typeof r.expires == "number") {
                var i = r.expires, s = r.expires = new Date;
                s.setDate(s.getDate() + i)
            }
            return n = String(n), document.cookie = [encodeURIComponent(t), "=", r.raw ? n : encodeURIComponent(n), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
        }
        r = n || {};
        var o = r.raw ? function (e) {
            return e
        } : decodeURIComponent, u = document.cookie.split("; ");
        for (var a = 0, f; f = u[a] && u[a].split("="); a++)if (o(f[0]) === t)return o(f[1] || "");
        return null
    }
}), define("jquery.cycle.all", ["jquery"], function (e) {
    (function (e, t) {
        function r(t) {
            e.fn.cycle.debug && i(t)
        }

        function i() {
            window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
        }

        function s(t, n, r) {
            var i = e(t).data("cycle.opts");
            if (!i)return;
            var s = !!t.cyclePause;
            s && i.paused ? i.paused(t, i, n, r) : !s && i.resumed && i.resumed(t, i, n, r)
        }

        function o(n, r, o) {
            function l(t, n, r) {
                if (!t && n === !0) {
                    var s = e(r).data("cycle.opts");
                    if (!s)return i("options not found, can not resume"), !1;
                    r.cycleTimeout && (clearTimeout(r.cycleTimeout), r.cycleTimeout = 0), p(s.elements, s, 1, !s.backwards)
                }
            }

            n.cycleStop === t && (n.cycleStop = 0);
            if (r === t || r === null)r = {};
            if (r.constructor == String) {
                switch (r) {
                    case"destroy":
                    case"stop":
                        var u = e(n).data("cycle.opts");
                        if (!u)return!1;
                        return n.cycleStop++, n.cycleTimeout && clearTimeout(n.cycleTimeout), n.cycleTimeout = 0, u.elements && e(u.elements).stop(), e(n).removeData("cycle.opts"), r == "destroy" && a(n, u), !1;
                    case"toggle":
                        return n.cyclePause = n.cyclePause === 1 ? 0 : 1, l(n.cyclePause, o, n), s(n), !1;
                    case"pause":
                        return n.cyclePause = 1, s(n), !1;
                    case"resume":
                        return n.cyclePause = 0, l(!1, o, n), s(n), !1;
                    case"prev":
                    case"next":
                        u = e(n).data("cycle.opts");
                        if (!u)return i('options not found, "prev/next" ignored'), !1;
                        return e.fn.cycle[r](u), !1;
                    default:
                        r = {fx: r}
                }
                return r
            }
            if (r.constructor == Number) {
                var f = r;
                return r = e(n).data("cycle.opts"), r ? f < 0 || f >= r.elements.length ? (i("invalid slide index: " + f), !1) : (r.nextSlide = f, n.cycleTimeout && (clearTimeout(n.cycleTimeout), n.cycleTimeout = 0), typeof o == "string" && (r.oneTimeFx = o), p(r.elements, r, 1, f >= r.currSlide), !1) : (i("options not found, can not advance slide"), !1)
            }
            return r
        }

        function u(t, n) {
            if (!e.support.opacity && n.cleartype && t.style.filter)try {
                t.style.removeAttribute("filter")
            } catch (r) {
            }
        }

        function a(t, n) {
            n.next && e(n.next).unbind(n.prevNextEvent), n.prev && e(n.prev).unbind(n.prevNextEvent), (n.pager || n.pagerAnchorBuilder) && e.each(n.pagerAnchors || [], function () {
                this.unbind().remove()
            }), n.pagerAnchors = null, e(t).unbind("mouseenter.cycle mouseleave.cycle"), n.destroy && n.destroy(n)
        }

        function f(n, r, o, a, f) {
            var d, y = e.extend({}, e.fn.cycle.defaults, a || {}, e.metadata ? n.metadata() : e.meta ? n.data() : {}), b = e.isFunction(n.data) ? n.data(y.metaAttr) : null;
            b && (y = e.extend(y, b)), y.autostop && (y.countdown = y.autostopCount || o.length);
            var w = n[0];
            n.data("cycle.opts", y), y.$cont = n, y.stopCount = w.cycleStop, y.elements = o, y.before = y.before ? [y.before] : [], y.after = y.after ? [y.after] : [], !e.support.opacity && y.cleartype && y.after.push(function () {
                u(this, y)
            }), y.continuous && y.after.push(function () {
                p(o, y, 0, !y.backwards)
            }), l(y), !e.support.opacity && y.cleartype && !y.cleartypeNoBg && g(r), n.css("position") == "static" && n.css("position", "relative"), y.width && n.width(y.width), y.height && y.height != "auto" && n.height(y.height), y.startingSlide !== t ? (y.startingSlide = parseInt(y.startingSlide, 10), y.startingSlide >= o.length || y.startSlide < 0 ? y.startingSlide = 0 : d = !0) : y.backwards ? y.startingSlide = o.length - 1 : y.startingSlide = 0;
            if (y.random) {
                y.randomMap = [];
                for (var E = 0; E < o.length; E++)y.randomMap.push(E);
                y.randomMap.sort(function (e, t) {
                    return Math.random() - .5
                });
                if (d)for (var S = 0; S < o.length; S++)y.startingSlide == y.randomMap[S] && (y.randomIndex = S); else y.randomIndex = 1, y.startingSlide = y.randomMap[1]
            } else y.startingSlide >= o.length && (y.startingSlide = 0);
            y.currSlide = y.startingSlide || 0;
            var x = y.startingSlide;
            r.css({position: "absolute", top: 0, left: 0}).hide().each(function (t) {
                var n;
                y.backwards ? n = x ? t <= x ? o.length + (t - x) : x - t : o.length - t : n = x ? t >= x ? o.length - (t - x) : x - t : o.length - t, e(this).css("z-index", n)
            }), e(o[x]).css("opacity", 1).show(), u(o[x], y), y.fit && (y.aspect ? r.each(function () {
                var t = e(this), n = y.aspect === !0 ? t.width() / t.height() : y.aspect;
                y.width && t.width() != y.width && (t.width(y.width), t.height(y.width / n)), y.height && t.height() < y.height && (t.height(y.height), t.width(y.height * n))
            }) : (y.width && r.width(y.width), y.height && y.height != "auto" && r.height(y.height))), y.center && (!y.fit || y.aspect) && r.each(function () {
                var t = e(this);
                t.css({"margin-left": y.width ? (y.width - t.width()) / 2 + "px" : 0, "margin-top": y.height ? (y.height - t.height()) / 2 + "px" : 0})
            }), y.center && !y.fit && !y.slideResize && r.each(function () {
                var t = e(this);
                t.css({"margin-left": y.width ? (y.width - t.width()) / 2 + "px" : 0, "margin-top": y.height ? (y.height - t.height()) / 2 + "px" : 0})
            });
            var T = (y.containerResize || y.containerResizeHeight) && !n.innerHeight();
            if (T) {
                var N = 0, C = 0;
                for (var k = 0; k < o.length; k++) {
                    var L = e(o[k]), A = L[0], O = L.outerWidth(), M = L.outerHeight();
                    O || (O = A.offsetWidth || A.width || L.attr("width")), M || (M = A.offsetHeight || A.height || L.attr("height")), N = O > N ? O : N, C = M > C ? M : C
                }
                y.containerResize && N > 0 && C > 0 && n.css({width: N + "px", height: C + "px"}), y.containerResizeHeight && C > 0 && n.css({height: C + "px"})
            }
            var _ = !1;
            y.pause && n.bind("mouseenter.cycle",function () {
                _ = !0, this.cyclePause++, s(w, !0)
            }).bind("mouseleave.cycle", function () {
                _ && this.cyclePause--, s(w, !0)
            });
            if (c(y) === !1)return!1;
            var D = !1;
            a.requeueAttempts = a.requeueAttempts || 0, r.each(function () {
                var t = e(this);
                this.cycleH = y.fit && y.height ? y.height : t.height() || this.offsetHeight || this.height || t.attr("height") || 0, this.cycleW = y.fit && y.width ? y.width : t.width() || this.offsetWidth || this.width || t.attr("width") || 0;
                if (t.is("img")) {
                    var n = e.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete, r = e.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete, s = e.browser.opera && (this.cycleW == 42 && this.cycleH == 19 || this.cycleW == 37 && this.cycleH == 17) && !this.complete, o = this.cycleH === 0 && this.cycleW === 0 && !this.complete;
                    if (n || r || s || o) {
                        if (f.s && y.requeueOnImageNotLoaded && ++a.requeueAttempts < 100)return i(a.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH), setTimeout(function () {
                            e(f.s, f.c).cycle(a)
                        }, y.requeueTimeout), D = !0, !1;
                        i("could not determine size of image: " + this.src, this.cycleW, this.cycleH)
                    }
                }
                return!0
            });
            if (D)return!1;
            y.cssBefore = y.cssBefore || {}, y.cssAfter = y.cssAfter || {}, y.cssFirst = y.cssFirst || {}, y.animIn = y.animIn || {}, y.animOut = y.animOut || {}, r.not(":eq(" + x + ")").css(y.cssBefore), e(r[x]).css(y.cssFirst);
            if (y.timeout) {
                y.timeout = parseInt(y.timeout, 10), y.speed.constructor == String && (y.speed = e.fx.speeds[y.speed] || parseInt(y.speed, 10)), y.sync || (y.speed = y.speed / 2);
                var P = y.fx == "none" ? 0 : y.fx == "shuffle" ? 500 : 250;
                while (y.timeout - y.speed < P)y.timeout += y.speed
            }
            y.easing && (y.easeIn = y.easeOut = y.easing), y.speedIn || (y.speedIn = y.speed), y.speedOut || (y.speedOut = y.speed), y.slideCount = o.length, y.currSlide = y.lastSlide = x, y.random ? (++y.randomIndex == o.length && (y.randomIndex = 0), y.nextSlide = y.randomMap[y.randomIndex]) : y.backwards ? y.nextSlide = y.startingSlide === 0 ? o.length - 1 : y.startingSlide - 1 : y.nextSlide = y.startingSlide >= o.length - 1 ? 0 : y.startingSlide + 1;
            if (!y.multiFx) {
                var H = e.fn.cycle.transitions[y.fx];
                if (e.isFunction(H))H(n, r, y); else if (y.fx != "custom" && !y.multiFx)return i("unknown transition: " + y.fx, "; slideshow terminating"), !1
            }
            var B = r[x];
            return y.skipInitializationCallbacks || (y.before.length && y.before[0].apply(B, [B, B, y, !0]), y.after.length && y.after[0].apply(B, [B, B, y, !0])), y.next && e(y.next).bind(y.prevNextEvent, function () {
                return v(y, 1)
            }), y.prev && e(y.prev).bind(y.prevNextEvent, function () {
                return v(y, 0)
            }), (y.pager || y.pagerAnchorBuilder) && m(o, y), h(y, o), y
        }

        function l(t) {
            t.original = {before: [], after: []}, t.original.cssBefore = e.extend({}, t.cssBefore), t.original.cssAfter = e.extend({}, t.cssAfter), t.original.animIn = e.extend({}, t.animIn), t.original.animOut = e.extend({}, t.animOut), e.each(t.before, function () {
                t.original.before.push(this)
            }), e.each(t.after, function () {
                t.original.after.push(this)
            })
        }

        function c(t) {
            var n, s, o = e.fn.cycle.transitions;
            if (t.fx.indexOf(",") > 0) {
                t.multiFx = !0, t.fxs = t.fx.replace(/\s*/g, "").split(",");
                for (n = 0; n < t.fxs.length; n++) {
                    var u = t.fxs[n];
                    s = o[u];
                    if (!s || !o.hasOwnProperty(u) || !e.isFunction(s))i("discarding unknown transition: ", u), t.fxs.splice(n, 1), n--
                }
                if (!t.fxs.length)return i("No valid transitions named; slideshow terminating."), !1
            } else if (t.fx == "all") {
                t.multiFx = !0, t.fxs = [];
                for (var a in o)o.hasOwnProperty(a) && (s = o[a], o.hasOwnProperty(a) && e.isFunction(s) && t.fxs.push(a))
            }
            if (t.multiFx && t.randomizeEffects) {
                var f = Math.floor(Math.random() * 20) + 30;
                for (n = 0; n < f; n++) {
                    var l = Math.floor(Math.random() * t.fxs.length);
                    t.fxs.push(t.fxs.splice(l, 1)[0])
                }
                r("randomized fx sequence: ", t.fxs)
            }
            return!0
        }

        function h(t, n) {
            t.addSlide = function (r, i) {
                var s = e(r), o = s[0];
                t.autostopCount || t.countdown++, n[i ? "unshift" : "push"](o), t.els && t.els[i ? "unshift" : "push"](o), t.slideCount = n.length, t.random && (t.randomMap.push(t.slideCount - 1), t.randomMap.sort(function (e, t) {
                    return Math.random() - .5
                })), s.css("position", "absolute"), s[i ? "prependTo" : "appendTo"](t.$cont), i && (t.currSlide++, t.nextSlide++), !e.support.opacity && t.cleartype && !t.cleartypeNoBg && g(s), t.fit && t.width && s.width(t.width), t.fit && t.height && t.height != "auto" && s.height(t.height), o.cycleH = t.fit && t.height ? t.height : s.height(), o.cycleW = t.fit && t.width ? t.width : s.width(), s.css(t.cssBefore), (t.pager || t.pagerAnchorBuilder) && e.fn.cycle.createPagerAnchor(n.length - 1, o, e(t.pager), n, t), e.isFunction(t.onAddSlide) ? t.onAddSlide(s) : s.hide()
            }
        }

        function p(n, i, s, o) {
            function m() {
                var e = 0, t = i.timeout;
                i.timeout && !i.continuous ? (e = d(n[i.currSlide], n[i.nextSlide], i, o), i.fx == "shuffle" && (e -= i.speedOut)) : i.continuous && u.cyclePause && (e = 10), e > 0 && (u.cycleTimeout = setTimeout(function () {
                    p(n, i, 0, !i.backwards)
                }, e))
            }

            var u = i.$cont[0], a = n[i.currSlide], f = n[i.nextSlide];
            s && i.busy && i.manualTrump && (r("manualTrump in go(), stopping active transition"), e(n).stop(!0, !0), i.busy = 0, clearTimeout(u.cycleTimeout));
            if (i.busy) {
                r("transition active, ignoring new tx request");
                return
            }
            if (u.cycleStop != i.stopCount || u.cycleTimeout === 0 && !s)return;
            if (!s && !u.cyclePause && !i.bounce && (i.autostop && --i.countdown <= 0 || i.nowrap && !i.random && i.nextSlide < i.currSlide)) {
                i.end && i.end(i);
                return
            }
            var l = !1;
            if ((s || !u.cyclePause) && i.nextSlide != i.currSlide) {
                l = !0;
                var c = i.fx;
                a.cycleH = a.cycleH || e(a).height(), a.cycleW = a.cycleW || e(a).width(), f.cycleH = f.cycleH || e(f).height(), f.cycleW = f.cycleW || e(f).width(), i.multiFx && (o && (i.lastFx === t || ++i.lastFx >= i.fxs.length) ? i.lastFx = 0 : !o && (i.lastFx === t || --i.lastFx < 0) && (i.lastFx = i.fxs.length - 1), c = i.fxs[i.lastFx]), i.oneTimeFx && (c = i.oneTimeFx, i.oneTimeFx = null), e.fn.cycle.resetState(i, c), i.before.length && e.each(i.before, function (e, t) {
                    if (u.cycleStop != i.stopCount)return;
                    t.apply(f, [a, f, i, o])
                });
                var h = function () {
                    i.busy = 0, e.each(i.after, function (e, t) {
                        if (u.cycleStop != i.stopCount)return;
                        t.apply(f, [a, f, i, o])
                    }), u.cycleStop || m()
                };
                r("tx firing(" + c + "); currSlide: " + i.currSlide + "; nextSlide: " + i.nextSlide), i.busy = 1, i.fxFn ? i.fxFn(a, f, i, h, o, s && i.fastOnEvent) : e.isFunction(e.fn.cycle[i.fx]) ? e.fn.cycle[i.fx](a, f, i, h, o, s && i.fastOnEvent) : e.fn.cycle.custom(a, f, i, h, o, s && i.fastOnEvent)
            } else m();
            if (l || i.nextSlide == i.currSlide) {
                var v;
                i.lastSlide = i.currSlide, i.random ? (i.currSlide = i.nextSlide, ++i.randomIndex == n.length && (i.randomIndex = 0, i.randomMap.sort(function (e, t) {
                    return Math.random() - .5
                })), i.nextSlide = i.randomMap[i.randomIndex], i.nextSlide == i.currSlide && (i.nextSlide = i.currSlide == i.slideCount - 1 ? 0 : i.currSlide + 1)) : i.backwards ? (v = i.nextSlide - 1 < 0, v && i.bounce ? (i.backwards = !i.backwards, i.nextSlide = 1, i.currSlide = 0) : (i.nextSlide = v ? n.length - 1 : i.nextSlide - 1, i.currSlide = v ? 0 : i.nextSlide + 1)) : (v = i.nextSlide + 1 == n.length, v && i.bounce ? (i.backwards = !i.backwards, i.nextSlide = n.length - 2, i.currSlide = n.length - 1) : (i.nextSlide = v ? 0 : i.nextSlide + 1, i.currSlide = v ? n.length - 1 : i.nextSlide - 1))
            }
            l && i.pager && i.updateActivePagerLink(i.pager, i.currSlide, i.activePagerClass)
        }

        function d(e, t, n, i) {
            if (n.timeoutFn) {
                var s = n.timeoutFn.call(e, e, t, n, i);
                while (n.fx != "none" && s - n.speed < 250)s += n.speed;
                r("calculated timeout: " + s + "; speed: " + n.speed);
                if (s !== !1)return s
            }
            return n.timeout
        }

        function v(t, n) {
            var r = n ? 1 : -1, i = t.elements, s = t.$cont[0], o = s.cycleTimeout;
            o && (clearTimeout(o), s.cycleTimeout = 0);
            if (t.random && r < 0)t.randomIndex--, --t.randomIndex == -2 ? t.randomIndex = i.length - 2 : t.randomIndex == -1 && (t.randomIndex = i.length - 1), t.nextSlide = t.randomMap[t.randomIndex]; else if (t.random)t.nextSlide = t.randomMap[t.randomIndex]; else {
                t.nextSlide = t.currSlide + r;
                if (t.nextSlide < 0) {
                    if (t.nowrap)return!1;
                    t.nextSlide = i.length - 1
                } else if (t.nextSlide >= i.length) {
                    if (t.nowrap)return!1;
                    t.nextSlide = 0
                }
            }
            var u = t.onPrevNextEvent || t.prevNextClick;
            return e.isFunction(u) && u(r > 0, t.nextSlide, i[t.nextSlide]), p(i, t, 1, n), !1
        }

        function m(t, n) {
            var r = e(n.pager);
            e.each(t, function (i, s) {
                e.fn.cycle.createPagerAnchor(i, s, r, t, n)
            }), n.updateActivePagerLink(n.pager, n.startingSlide, n.activePagerClass)
        }

        function g(t) {
            function n(e) {
                return e = parseInt(e, 10).toString(16), e.length < 2 ? "0" + e : e
            }

            function i(t) {
                for (; t && t.nodeName.toLowerCase() != "html"; t = t.parentNode) {
                    var r = e.css(t, "background-color");
                    if (r && r.indexOf("rgb") >= 0) {
                        var i = r.match(/\d+/g);
                        return"#" + n(i[0]) + n(i[1]) + n(i[2])
                    }
                    if (r && r != "transparent")return r
                }
                return"#ffffff"
            }

            r("applying clearType background-color hack"), t.each(function () {
                e(this).css("background-color", i(this))
            })
        }

        var n = "2.9999.8";
        e.support === t && (e.support = {opacity: !e.browser.msie}), e.expr[":"].paused = function (e) {
            return e.cyclePause
        }, e.fn.cycle = function (t, n) {
            var s = {s: this.selector, c: this.context};
            return this.length === 0 && t != "stop" ? !e.isReady && s.s ? (i("DOM not ready, queuing slideshow"), e(function () {
                e(s.s, s.c).cycle(t, n)
            }), this) : this : this.each(function () {
                var i = o(this, t, n);
                if (i === !1)return;
                i.updateActivePagerLink = i.updateActivePagerLink || e.fn.cycle.updateActivePagerLink, this.cycleTimeout && clearTimeout(this.cycleTimeout), this.cycleTimeout = this.cyclePause = 0, this.cycleStop = 0;
                var u = e(this), a = i.slideExpr ? e(i.slideExpr, this) : u.children(), l = a.get();
                if (l.length < 2)return;
                var c = f(u, a, l, i, s);
                if (c === !1)return;
                var h = c.continuous ? 10 : d(l[c.currSlide], l[c.nextSlide], c, !c.backwards);
                h && (h += c.delay || 0, h < 10 && (h = 10), r("first timeout: " + h), this.cycleTimeout = setTimeout(function () {
                    p(l, c, 0, !i.backwards)
                }, h))
            })
        }, e.fn.cycle.resetState = function (t, n) {
            n = n || t.fx, t.before = [], t.after = [], t.cssBefore = e.extend({}, t.original.cssBefore), t.cssAfter = e.extend({}, t.original.cssAfter), t.animIn = e.extend({}, t.original.animIn), t.animOut = e.extend({}, t.original.animOut), t.fxFn = null, e.each(t.original.before, function () {
                t.before.push(this)
            }), e.each(t.original.after, function () {
                t.after.push(this)
            });
            var r = e.fn.cycle.transitions[n];
            e.isFunction(r) && r(t.$cont, e(t.elements), t)
        }, e.fn.cycle.updateActivePagerLink = function (t, n, r) {
            e(t).each(function () {
                e(this).children().removeClass(r).eq(n).addClass(r)
            })
        }, e.fn.cycle.next = function (e) {
            v(e, 1)
        }, e.fn.cycle.prev = function (e) {
            v(e, 0)
        }, e.fn.cycle.createPagerAnchor = function (t, n, i, o, u) {
            var a;
            e.isFunction(u.pagerAnchorBuilder) ? (a = u.pagerAnchorBuilder(t, n), r("pagerAnchorBuilder(" + t + ", el) returned: " + a)) : a = '<a href="#">' + (t + 1) + "</a>";
            if (!a)return;
            var f = e(a);
            if (f.parents("body").length === 0) {
                var l = [];
                i.length > 1 ? (i.each(function () {
                    var t = f.clone(!0);
                    e(this).append(t), l.push(t[0])
                }), f = e(l)) : f.appendTo(i)
            }
            u.pagerAnchors = u.pagerAnchors || [], u.pagerAnchors.push(f);
            var c = function (n) {
                n.preventDefault(), u.nextSlide = t;
                var r = u.$cont[0], i = r.cycleTimeout;
                i && (clearTimeout(i), r.cycleTimeout = 0);
                var s = u.onPagerEvent || u.pagerClick;
                e.isFunction(s) && s(u.nextSlide, o[u.nextSlide]), p(o, u, 1, u.currSlide < t)
            };
            /mouseenter|mouseover/i.test(u.pagerEvent) ? f.hover(c, function () {
            }) : f.bind(u.pagerEvent, c), !/^click/.test(u.pagerEvent) && !u.allowPagerClickBubble && f.bind("click.cycle", function () {
                return!1
            });
            var h = u.$cont[0], d = !1;
            u.pauseOnPagerHover && f.hover(function () {
                d = !0, h.cyclePause++, s(h, !0, !0)
            }, function () {
                d && h.cyclePause--, s(h, !0, !0)
            })
        }, e.fn.cycle.hopsFromLast = function (e, t) {
            var n, r = e.lastSlide, i = e.currSlide;
            return t ? n = i > r ? i - r : e.slideCount - r : n = i < r ? r - i : r + e.slideCount - i, n
        }, e.fn.cycle.commonReset = function (t, n, r, i, s, o) {
            e(r.elements).not(t).hide(), typeof r.cssBefore.opacity == "undefined" && (r.cssBefore.opacity = 1), r.cssBefore.display = "block", r.slideResize && i !== !1 && n.cycleW > 0 && (r.cssBefore.width = n.cycleW), r.slideResize && s !== !1 && n.cycleH > 0 && (r.cssBefore.height = n.cycleH), r.cssAfter = r.cssAfter || {}, r.cssAfter.display = "none", e(t).css("zIndex", r.slideCount + (o === !0 ? 1 : 0)), e(n).css("zIndex", r.slideCount + (o === !0 ? 0 : 1))
        }, e.fn.cycle.custom = function (t, n, r, i, s, o) {
            var u = e(t), a = e(n), f = r.speedIn, l = r.speedOut, c = r.easeIn, h = r.easeOut;
            a.css(r.cssBefore), o && (typeof o == "number" ? f = l = o : f = l = 1, c = h = null);
            var p = function () {
                a.animate(r.animIn, f, c, function () {
                    i()
                })
            };
            u.animate(r.animOut, l, h, function () {
                u.css(r.cssAfter), r.sync || p()
            }), r.sync && p()
        }, e.fn.cycle.transitions = {fade: function (t, n, r) {
            n.not(":eq(" + r.currSlide + ")").css("opacity", 0), r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r), r.cssBefore.opacity = 0
            }), r.animIn = {opacity: 1}, r.animOut = {opacity: 0}, r.cssBefore = {top: 0, left: 0}
        }}, e.fn.cycle.ver = function () {
            return n
        }, e.fn.cycle.defaults = {activePagerClass: "activeSlide", after: null, allowPagerClickBubble: !1, animIn: null, animOut: null, aspect: !1, autostop: 0, autostopCount: 0, backwards: !1, before: null, center: null, cleartype: !e.support.opacity, cleartypeNoBg: !1, containerResize: 1, containerResizeHeight: 0, continuous: 0, cssAfter: null, cssBefore: null, delay: 0, easeIn: null, easeOut: null, easing: null, end: null, fastOnEvent: 0, fit: 0, fx: "fade", fxFn: null, height: "auto", manualTrump: !0, metaAttr: "cycle", next: null, nowrap: 0, onPagerEvent: null, onPrevNextEvent: null, pager: null, pagerAnchorBuilder: null, pagerEvent: "click.cycle", pause: 0, pauseOnPagerHover: 0, prev: null, prevNextEvent: "click.cycle", random: 0, randomizeEffects: 1, requeueOnImageNotLoaded: !0, requeueTimeout: 250, rev: 0, shuffle: null, skipInitializationCallbacks: !1, slideExpr: null, slideResize: 1, speed: 1e3, speedIn: null, speedOut: null, startingSlide: t, sync: 1, timeout: 4e3, timeoutFn: null, updateActivePagerLink: null, width: null}
    })(jQuery), function (e) {
        e.fn.cycle.transitions.none = function (t, n, r) {
            r.fxFn = function (t, n, r, i) {
                e(n).show(), e(t).hide(), i()
            }
        }, e.fn.cycle.transitions.fadeout = function (t, n, r) {
            n.not(":eq(" + r.currSlide + ")").css({display: "block", opacity: 1}), r.before.push(function (t, n, r, i, s, o) {
                e(t).css("zIndex", r.slideCount + (o !== !0 ? 1 : 0)), e(n).css("zIndex", r.slideCount + (o !== !0 ? 0 : 1))
            }), r.animIn.opacity = 1, r.animOut.opacity = 0, r.cssBefore.opacity = 1, r.cssBefore.display = "block", r.cssAfter.zIndex = 0
        }, e.fn.cycle.transitions.scrollUp = function (t, n, r) {
            t.css("overflow", "hidden"), r.before.push(e.fn.cycle.commonReset);
            var i = t.height();
            r.cssBefore.top = i, r.cssBefore.left = 0, r.cssFirst.top = 0, r.animIn.top = 0, r.animOut.top = -i
        }, e.fn.cycle.transitions.scrollDown = function (t, n, r) {
            t.css("overflow", "hidden"), r.before.push(e.fn.cycle.commonReset);
            var i = t.height();
            r.cssFirst.top = 0, r.cssBefore.top = -i, r.cssBefore.left = 0, r.animIn.top = 0, r.animOut.top = i
        }, e.fn.cycle.transitions.scrollLeft = function (t, n, r) {
            t.css("overflow", "hidden"), r.before.push(e.fn.cycle.commonReset);
            var i = t.width();
            r.cssFirst.left = 0, r.cssBefore.left = i, r.cssBefore.top = 0, r.animIn.left = 0, r.animOut.left = 0 - i
        }, e.fn.cycle.transitions.scrollRight = function (t, n, r) {
            t.css("overflow", "hidden"), r.before.push(e.fn.cycle.commonReset);
            var i = t.width();
            r.cssFirst.left = 0, r.cssBefore.left = -i, r.cssBefore.top = 0, r.animIn.left = 0, r.animOut.left = i
        }, e.fn.cycle.transitions.scrollHorz = function (t, n, r) {
            t.css("overflow", "hidden").width(), r.before.push(function (t, n, r, i) {
                r.rev && (i = !i), e.fn.cycle.commonReset(t, n, r), r.cssBefore.left = i ? n.cycleW - 1 : 1 - n.cycleW, r.animOut.left = i ? -t.cycleW : t.cycleW
            }), r.cssFirst.left = 0, r.cssBefore.top = 0, r.animIn.left = 0, r.animOut.top = 0
        }, e.fn.cycle.transitions.scrollVert = function (t, n, r) {
            t.css("overflow", "hidden"), r.before.push(function (t, n, r, i) {
                r.rev && (i = !i), e.fn.cycle.commonReset(t, n, r), r.cssBefore.top = i ? 1 - n.cycleH : n.cycleH - 1, r.animOut.top = i ? t.cycleH : -t.cycleH
            }), r.cssFirst.top = 0, r.cssBefore.left = 0, r.animIn.top = 0, r.animOut.left = 0
        }, e.fn.cycle.transitions.slideX = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e(r.elements).not(t).hide(), e.fn.cycle.commonReset(t, n, r, !1, !0), r.animIn.width = n.cycleW
            }), r.cssBefore.left = 0, r.cssBefore.top = 0, r.cssBefore.width = 0, r.animIn.width = "show", r.animOut.width = 0
        }, e.fn.cycle.transitions.slideY = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e(r.elements).not(t).hide(), e.fn.cycle.commonReset(t, n, r, !0, !1), r.animIn.height = n.cycleH
            }), r.cssBefore.left = 0, r.cssBefore.top = 0, r.cssBefore.height = 0, r.animIn.height = "show", r.animOut.height = 0
        }, e.fn.cycle.transitions.shuffle = function (t, n, r) {
            var i, s = t.css("overflow", "visible").width();
            n.css({left: 0, top: 0}), r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !0, !0, !0)
            }), r.speedAdjusted || (r.speed = r.speed / 2, r.speedAdjusted = !0), r.random = 0, r.shuffle = r.shuffle || {left: -s, top: 15}, r.els = [];
            for (i = 0; i < n.length; i++)r.els.push(n[i]);
            for (i = 0; i < r.currSlide; i++)r.els.push(r.els.shift());
            r.fxFn = function (t, n, r, i, s) {
                r.rev && (s = !s);
                var o = s ? e(t) : e(n);
                e(n).css(r.cssBefore);
                var u = r.slideCount;
                o.animate(r.shuffle, r.speedIn, r.easeIn, function () {
                    var n = e.fn.cycle.hopsFromLast(r, s);
                    for (var a = 0; a < n; a++)s ? r.els.push(r.els.shift()) : r.els.unshift(r.els.pop());
                    if (s)for (var f = 0, l = r.els.length; f < l; f++)e(r.els[f]).css("z-index", l - f + u); else {
                        var c = e(t).css("z-index");
                        o.css("z-index", parseInt(c, 10) + 1 + u)
                    }
                    o.animate({left: 0, top: 0}, r.speedOut, r.easeOut, function () {
                        e(s ? this : t).hide(), i && i()
                    })
                })
            }, e.extend(r.cssBefore, {display: "block", opacity: 1, top: 0, left: 0})
        }, e.fn.cycle.transitions.turnUp = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !0, !1), r.cssBefore.top = n.cycleH, r.animIn.height = n.cycleH, r.animOut.width = n.cycleW
            }), r.cssFirst.top = 0, r.cssBefore.left = 0, r.cssBefore.height = 0, r.animIn.top = 0, r.animOut.height = 0
        }, e.fn.cycle.transitions.turnDown = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !0, !1), r.animIn.height = n.cycleH, r.animOut.top = t.cycleH
            }), r.cssFirst.top = 0, r.cssBefore.left = 0, r.cssBefore.top = 0, r.cssBefore.height = 0, r.animOut.height = 0
        }, e.fn.cycle.transitions.turnLeft = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !1, !0), r.cssBefore.left = n.cycleW, r.animIn.width = n.cycleW
            }), r.cssBefore.top = 0, r.cssBefore.width = 0, r.animIn.left = 0, r.animOut.width = 0
        }, e.fn.cycle.transitions.turnRight = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !1, !0), r.animIn.width = n.cycleW, r.animOut.left = t.cycleW
            }), e.extend(r.cssBefore, {top: 0, left: 0, width: 0}), r.animIn.left = 0, r.animOut.width = 0
        }, e.fn.cycle.transitions.zoom = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !1, !1, !0), r.cssBefore.top = n.cycleH / 2, r.cssBefore.left = n.cycleW / 2, e.extend(r.animIn, {top: 0, left: 0, width: n.cycleW, height: n.cycleH}), e.extend(r.animOut, {width: 0, height: 0, top: t.cycleH / 2, left: t.cycleW / 2})
            }), r.cssFirst.top = 0, r.cssFirst.left = 0, r.cssBefore.width = 0, r.cssBefore.height = 0
        }, e.fn.cycle.transitions.fadeZoom = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !1, !1), r.cssBefore.left = n.cycleW / 2, r.cssBefore.top = n.cycleH / 2, e.extend(r.animIn, {top: 0, left: 0, width: n.cycleW, height: n.cycleH})
            }), r.cssBefore.width = 0, r.cssBefore.height = 0, r.animOut.opacity = 0
        }, e.fn.cycle.transitions.blindX = function (t, n, r) {
            var i = t.css("overflow", "hidden").width();
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r), r.animIn.width = n.cycleW, r.animOut.left = t.cycleW
            }), r.cssBefore.left = i, r.cssBefore.top = 0, r.animIn.left = 0, r.animOut.left = i
        }, e.fn.cycle.transitions.blindY = function (t, n, r) {
            var i = t.css("overflow", "hidden").height();
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r), r.animIn.height = n.cycleH, r.animOut.top = t.cycleH
            }), r.cssBefore.top = i, r.cssBefore.left = 0, r.animIn.top = 0, r.animOut.top = i
        }, e.fn.cycle.transitions.blindZ = function (t, n, r) {
            var i = t.css("overflow", "hidden").height(), s = t.width();
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r), r.animIn.height = n.cycleH, r.animOut.top = t.cycleH
            }), r.cssBefore.top = i, r.cssBefore.left = s, r.animIn.top = 0, r.animIn.left = 0, r.animOut.top = i, r.animOut.left = s
        }, e.fn.cycle.transitions.growX = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !1, !0), r.cssBefore.left = this.cycleW / 2, r.animIn.left = 0, r.animIn.width = this.cycleW, r.animOut.left = 0
            }), r.cssBefore.top = 0, r.cssBefore.width = 0
        }, e.fn.cycle.transitions.growY = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !0, !1), r.cssBefore.top = this.cycleH / 2, r.animIn.top = 0, r.animIn.height = this.cycleH, r.animOut.top = 0
            }), r.cssBefore.height = 0, r.cssBefore.left = 0
        }, e.fn.cycle.transitions.curtainX = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !1, !0, !0), r.cssBefore.left = n.cycleW / 2, r.animIn.left = 0, r.animIn.width = this.cycleW, r.animOut.left = t.cycleW / 2, r.animOut.width = 0
            }), r.cssBefore.top = 0, r.cssBefore.width = 0
        }, e.fn.cycle.transitions.curtainY = function (t, n, r) {
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !0, !1, !0), r.cssBefore.top = n.cycleH / 2, r.animIn.top = 0, r.animIn.height = n.cycleH, r.animOut.top = t.cycleH / 2, r.animOut.height = 0
            }), r.cssBefore.height = 0, r.cssBefore.left = 0
        }, e.fn.cycle.transitions.cover = function (t, n, r) {
            var i = r.direction || "left", s = t.css("overflow", "hidden").width(), o = t.height();
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r), r.cssAfter.display = "", i == "right" ? r.cssBefore.left = -s : i == "up" ? r.cssBefore.top = o : i == "down" ? r.cssBefore.top = -o : r.cssBefore.left = s
            }), r.animIn.left = 0, r.animIn.top = 0, r.cssBefore.top = 0, r.cssBefore.left = 0
        }, e.fn.cycle.transitions.uncover = function (t, n, r) {
            var i = r.direction || "left", s = t.css("overflow", "hidden").width(), o = t.height();
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !0, !0, !0), i == "right" ? r.animOut.left = s : i == "up" ? r.animOut.top = -o : i == "down" ? r.animOut.top = o : r.animOut.left = -s
            }), r.animIn.left = 0, r.animIn.top = 0, r.cssBefore.top = 0, r.cssBefore.left = 0
        }, e.fn.cycle.transitions.toss = function (t, n, r) {
            var i = t.css("overflow", "visible").width(), s = t.height();
            r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r, !0, !0, !0), !r.animOut.left && !r.animOut.top ? e.extend(r.animOut, {left: i * 2, top: -s / 2, opacity: 0}) : r.animOut.opacity = 0
            }), r.cssBefore.left = 0, r.cssBefore.top = 0, r.animIn.left = 0
        }, e.fn.cycle.transitions.wipe = function (t, n, r) {
            var i = t.css("overflow", "hidden").width(), s = t.height();
            r.cssBefore = r.cssBefore || {};
            var o;
            if (r.clip)if (/l2r/.test(r.clip))o = "rect(0px 0px " + s + "px 0px)"; else if (/r2l/.test(r.clip))o = "rect(0px " + i + "px " + s + "px " + i + "px)"; else if (/t2b/.test(r.clip))o = "rect(0px " + i + "px 0px 0px)"; else if (/b2t/.test(r.clip))o = "rect(" + s + "px " + i + "px " + s + "px 0px)"; else if (/zoom/.test(r.clip)) {
                var u = parseInt(s / 2, 10), a = parseInt(i / 2, 10);
                o = "rect(" + u + "px " + a + "px " + u + "px " + a + "px)"
            }
            r.cssBefore.clip = r.cssBefore.clip || o || "rect(0px 0px 0px 0px)";
            var f = r.cssBefore.clip.match(/(\d+)/g), l = parseInt(f[0], 10), c = parseInt(f[1], 10), h = parseInt(f[2], 10), p = parseInt(f[3], 10);
            r.before.push(function (t, n, r) {
                if (t == n)return;
                var o = e(t), u = e(n);
                e.fn.cycle.commonReset(t, n, r, !0, !0, !1), r.cssAfter.display = "block";
                var a = 1, f = parseInt(r.speedIn / 13, 10) - 1;
                (function d() {
                    var e = l ? l - parseInt(a * (l / f), 10) : 0, t = p ? p - parseInt(a * (p / f), 10) : 0, n = h < s ? h + parseInt(a * ((s - h) / f || 1), 10) : s, r = c < i ? c + parseInt(a * ((i - c) / f || 1), 10) : i;
                    u.css({clip: "rect(" + e + "px " + r + "px " + n + "px " + t + "px)"}), a++ <= f ? setTimeout(d, 13) : o.css("display", "none")
                })()
            }), e.extend(r.cssBefore, {display: "block", opacity: 1, top: 0, left: 0}), r.animIn = {left: 0}, r.animOut = {left: 0}
        }
    }
}), define("jquery.easing", ["jquery"], function (e) {
    e.easing.jswing = e.easing.swing, e.extend(e.easing, {def: "easeOutQuad", swing: function (t, n, r, i, s) {
        return e.easing[e.easing.def](t, n, r, i, s)
    }, easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    }, easeOutQuad: function (e, t, n, r, i) {
        return-r * (t /= i) * (t - 2) + n
    }, easeInOutQuad: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    }, easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    }, easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    }, easeInOutCubic: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    }, easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    }, easeOutQuart: function (e, t, n, r, i) {
        return-r * ((t = t / i - 1) * t * t * t - 1) + n
    }, easeInOutQuart: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    }, easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    }, easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    }, easeInOutQuint: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    }, easeInSine: function (e, t, n, r, i) {
        return-r * Math.cos(t / i * (Math.PI / 2)) + r + n
    }, easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    }, easeInOutSine: function (e, t, n, r, i) {
        return-r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    }, easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    }, easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    }, easeInOutExpo: function (e, t, n, r, i) {
        return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    }, easeInCirc: function (e, t, n, r, i) {
        return-r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    }, easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    }, easeInOutCirc: function (e, t, n, r, i) {
        return(t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    }, easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158, o = 0, u = r;
        if (t == 0)return n;
        if ((t /= i) == 1)return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return-(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    }, easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158, o = 0, u = r;
        if (t == 0)return n;
        if ((t /= i) == 1)return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    }, easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158, o = 0, u = r;
        if (t == 0)return n;
        if ((t /= i / 2) == 2)return n + r;
        o || (o = i * .3 * 1.5);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    }, easeInBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
    }, easeOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    }, easeInOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    }, easeInBounce: function (t, n, r, i, s) {
        return i - e.easing.easeOutBounce(t, s - n, 0, i, s) + r
    }, easeOutBounce: function (e, t, n, r, i) {
        return(t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    }, easeInOutBounce: function (t, n, r, i, s) {
        return n < s / 2 ? e.easing.easeInBounce(t, n * 2, 0, i, s) * .5 + r : e.easing.easeOutBounce(t, n * 2 - s, 0, i, s) * .5 + i * .5 + r
    }})
}), function (e) {
    typeof define == "function" && define.amd ? define("jquery.fileupload", ["jquery", "jquery.ui"], e) : e(window.jQuery)
}(function (e) {
    e.support.xhrFileUpload = !!window.XMLHttpRequestUpload && !!window.FileReader, e.support.xhrFormDataFileUpload = !!window.FormData, e.widget("blueimp.fileupload", {options: {namespace: undefined, dropZone: e(document), fileInput: undefined, replaceFileInput: !0, paramName: undefined, singleFileUploads: !0, limitMultiFileUploads: undefined, sequentialUploads: !1, limitConcurrentUploads: undefined, forceIframeTransport: !1, redirect: undefined, redirectParamName: undefined, postMessage: undefined, multipart: !0, maxChunkSize: undefined, uploadedBytes: undefined, recalculateProgress: !0, progressInterval: 100, bitrateInterval: 500, formData: function (e) {
        return e.serializeArray()
    }, add: function (e, t) {
        t.submit()
    }, processData: !1, contentType: !1, cache: !1}, _refreshOptionsList: ["namespace", "dropZone", "fileInput", "multipart", "forceIframeTransport"], _BitrateTimer: function () {
        this.timestamp = +(new Date), this.loaded = 0, this.bitrate = 0, this.getBitrate = function (e, t, n) {
            var r = e - this.timestamp;
            if (!this.bitrate || !n || r > n)this.bitrate = (t - this.loaded) * (1e3 / r) * 8, this.loaded = t, this.timestamp = e;
            return this.bitrate
        }
    }, _isXHRUpload: function (t) {
        return!t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
    }, _getFormData: function (t) {
        var n;
        return typeof t.formData == "function" ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : t.formData ? (n = [], e.each(t.formData, function (e, t) {
            n.push({name: e, value: t})
        }), n) : []
    }, _getTotal: function (t) {
        var n = 0;
        return e.each(t, function (e, t) {
            n += t.size || 1
        }), n
    }, _onProgress: function (e, t) {
        if (e.lengthComputable) {
            var n = +(new Date), r, i;
            if (t._time && t.progressInterval && n - t._time < t.progressInterval && e.loaded !== e.total)return;
            t._time = n, r = t.total || this._getTotal(t.files), i = parseInt(e.loaded / e.total * (t.chunkSize || r), 10) + (t.uploadedBytes || 0), this._loaded += i - (t.loaded || t.uploadedBytes || 0), t.lengthComputable = !0, t.loaded = i, t.total = r, t.bitrate = t._bitrateTimer.getBitrate(n, i, t.bitrateInterval), this._trigger("progress", e, t), this._trigger("progressall", e, {lengthComputable: !0, loaded: this._loaded, total: this._total, bitrate: this._bitrateTimer.getBitrate(n, this._loaded, t.bitrateInterval)})
        }
    }, _initProgressListener: function (t) {
        var n = this, r = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
        r.upload && (e(r.upload).bind("progress", function (e) {
            var r = e.originalEvent;
            e.lengthComputable = r.lengthComputable, e.loaded = r.loaded, e.total = r.total, n._onProgress(e, t)
        }), t.xhr = function () {
            return r
        })
    }, _initXHRData: function (t) {
        var n, r = t.files[0], i = t.multipart || !e.support.xhrFileUpload, s = t.paramName[0];
        if (!i || t.blob)t.headers = e.extend(t.headers, {"X-File-Name": r.name, "X-File-Type": r.type, "X-File-Size": r.size}), t.blob ? i || (t.contentType = "application/octet-stream", t.data = t.blob) : (t.contentType = r.type, t.data = r);
        i && e.support.xhrFormDataFileUpload && (t.postMessage ? (n = this._getFormData(t), t.blob ? n.push({name: s, value: t.blob}) : e.each(t.files, function (e, r) {
            n.push({name: t.paramName[e] || s, value: r})
        })) : (t.formData instanceof FormData ? n = t.formData : (n = new FormData, e.each(this._getFormData(t), function (e, t) {
            n.append(t.name, t.value)
        })), t.blob ? n.append(s, t.blob, r.name) : e.each(t.files, function (e, r) {
            r instanceof Blob && n.append(t.paramName[e] || s, r, r.name)
        })), t.data = n), t.blob = null
    }, _initIframeSettings: function (t) {
        t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && e("<a></a>").prop("href", t.url).prop("host") !== location.host && t.formData.push({name: t.redirectParamName || "redirect", value: t.redirect})
    }, _initDataSettings: function (e) {
        this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e, "iframe")
    }, _getParamName: function (t) {
        var n = e(t.fileInput), r = t.paramName;
        return r ? e.isArray(r) || (r = [r]) : (r = [], n.each(function () {
            var t = e(this), n = t.prop("name") || "files[]", i = (t.prop("files") || [1]).length;
            while (i)r.push(n), i -= 1
        }), r.length || (r = [n.prop("name") || "files[]"])), r
    }, _initFormSettings: function (t) {
        if (!t.form || !t.form.length)t.form = e(t.fileInput.prop("form"));
        t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || t.form.prop("method") || "").toUpperCase(), t.type !== "POST" && t.type !== "PUT" && (t.type = "POST")
    }, _getAJAXSettings: function (t) {
        var n = e.extend({}, this.options, t);
        return this._initFormSettings(n), this._initDataSettings(n), n
    }, _enhancePromise: function (e) {
        return e.success = e.done, e.error = e.fail, e.complete = e.always, e
    }, _getXHRPromise: function (t, n, r) {
        var i = e.Deferred(), s = i.promise();
        return n = n || this.options.context || s, t === !0 ? i.resolveWith(n, r) : t === !1 && i.rejectWith(n, r), s.abort = i.promise, this._enhancePromise(s)
    }, _chunkedUpload: function (t, n) {
        var r = this, i = t.files[0], s = i.size, o = t.uploadedBytes = t.uploadedBytes || 0, u = t.maxChunkSize || s, a = i.webkitSlice || i.mozSlice || i.slice, f, l, c, h;
        return!(this._isXHRUpload(t) && a && (o || u < s)) || t.data ? !1 : n ? !0 : o >= s ? (i.error = "uploadedBytes", this._getXHRPromise(!1, t.context, [null, "error", i.error])) : (l = Math.ceil((s - o) / u), f = function (n) {
            return n ? f(n -= 1).pipe(function () {
                var s = e.extend({}, t);
                return s.blob = a.call(i, o + n * u, o + (n + 1) * u), s.chunkSize = s.blob.size, r._initXHRData(s), r._initProgressListener(s), c = (e.ajax(s) || r._getXHRPromise(!1, s.context)).done(function () {
                    s.loaded || r._onProgress(e.Event("progress", {lengthComputable: !0, loaded: s.chunkSize, total: s.chunkSize}), s), t.uploadedBytes = s.uploadedBytes += s.chunkSize
                }), c
            }) : r._getXHRPromise(!0, t.context)
        }, h = f(l), h.abort = function () {
            return c.abort()
        }, this._enhancePromise(h))
    }, _beforeSend: function (e, t) {
        this._active === 0 && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer), this._active += 1, this._loaded += t.uploadedBytes || 0, this._total += this._getTotal(t.files)
    }, _onDone: function (t, n, r, i) {
        this._isXHRUpload(i) || this._onProgress(e.Event("progress", {lengthComputable: !0, loaded: 1, total: 1}), i), i.result = t, i.textStatus = n, i.jqXHR = r, this._trigger("done", null, i)
    }, _onFail: function (e, t, n, r) {
        r.jqXHR = e, r.textStatus = t, r.errorThrown = n, this._trigger("fail", null, r), r.recalculateProgress && (this._loaded -= r.loaded || r.uploadedBytes || 0, this._total -= r.total || this._getTotal(r.files))
    }, _onAlways: function (e, t, n, r) {
        this._active -= 1, r.textStatus = t, n && n.always ? (r.jqXHR = n, r.result = e) : (r.jqXHR = e, r.errorThrown = n), this._trigger("always", null, r), this._active === 0 && (this._trigger("stop"), this._loaded = this._total = 0, this._bitrateTimer = null)
    }, _onSend: function (t, n) {
        var r = this, i, s, o, u = r._getAJAXSettings(n), a = function (n, s) {
            return r._sending += 1, u._bitrateTimer = new r._BitrateTimer, i = i || (n !== !1 && r._trigger("send", t, u) !== !1 && (r._chunkedUpload(u) || e.ajax(u)) || r._getXHRPromise(!1, u.context, s)).done(function (e, t, n) {
                r._onDone(e, t, n, u)
            }).fail(function (e, t, n) {
                r._onFail(e, t, n, u)
            }).always(function (e, t, n) {
                r._sending -= 1, r._onAlways(e, t, n, u);
                if (u.limitConcurrentUploads && u.limitConcurrentUploads > r._sending) {
                    var i = r._slots.shift();
                    while (i) {
                        if (!i.isRejected()) {
                            i.resolve();
                            break
                        }
                        i = r._slots.shift()
                    }
                }
            }), i
        };
        return this._beforeSend(t, u), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (s = e.Deferred(), this._slots.push(s), o = s.pipe(a)) : o = this._sequence = this._sequence.pipe(a, a), o.abort = function () {
            var e = [undefined, "abort", "abort"];
            return i ? i.abort() : (s && s.rejectWith(e), a(!1, e))
        }, this._enhancePromise(o)) : a()
    }, _onAdd: function (t, n) {
        var r = this, i = !0, s = e.extend({}, this.options, n), o = s.limitMultiFileUploads, u = this._getParamName(s), a, f, l, c;
        if (!s.singleFileUploads && !o || !this._isXHRUpload(s))l = [n.files], a = [u]; else if (!s.singleFileUploads && o) {
            l = [], a = [];
            for (c = 0; c < n.files.length; c += o)l.push(n.files.slice(c, c + o)), f = u.slice(c, c + o), f.length || (f = u), a.push(f)
        } else a = u;
        return n.originalFiles = n.files, e.each(l || n.files, function (s, o) {
            var u = e.extend({}, n);
            return u.files = l ? o : [o], u.paramName = a[s], u.submit = function () {
                return u.jqXHR = this.jqXHR = r._trigger("submit", t, this) !== !1 && r._onSend(t, this), this.jqXHR
            }, i = r._trigger("add", t, u)
        }), i
    }, _normalizeFile: function (e, t) {
        t.name === undefined && t.size === undefined && (t.name = t.fileName, t.size = t.fileSize)
    }, _replaceFileInput: function (t) {
        var n = t.clone(!0);
        e("<form></form>").append(n)[0].reset(), t.after(n).detach(), e.cleanData(t.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (e, r) {
            return r === t[0] ? n[0] : r
        }), t[0] === this.element[0] && (this.element = n)
    }, _onChange: function (t) {
        var n = t.data.fileupload, r = {files: e.each(e.makeArray(t.target.files), n._normalizeFile), fileInput: e(t.target), form: e(t.target.form)};
        r.files.length || (r.files = [
            {name: t.target.value.replace(/^.*\\/, "")}
        ]), n.options.replaceFileInput && n._replaceFileInput(r.fileInput);
        if (n._trigger("change", t, r) === !1 || n._onAdd(t, r) === !1)return!1
    }, _onPaste: function (t) {
        var n = t.data.fileupload, r = t.originalEvent.clipboardData, i = r && r.items || [], s = {files: []};
        e.each(i, function (e, t) {
            var n = t.getAsFile && t.getAsFile();
            n && s.files.push(n)
        });
        if (n._trigger("paste", t, s) === !1 || n._onAdd(t, s) === !1)return!1
    }, _onDrop: function (t) {
        var n = t.data.fileupload, r = t.dataTransfer = t.originalEvent.dataTransfer, i = {files: e.each(e.makeArray(r && r.files), n._normalizeFile)};
        if (n._trigger("drop", t, i) === !1 || n._onAdd(t, i) === !1)return!1;
        t.preventDefault()
    }, _onDragOver: function (e) {
        var t = e.data.fileupload, n = e.dataTransfer = e.originalEvent.dataTransfer;
        if (t._trigger("dragover", e) === !1)return!1;
        n && (n.dropEffect = n.effectAllowed = "copy"), e.preventDefault()
    }, _initEventHandlers: function () {
        var e = this.options.namespace;
        this._isXHRUpload(this.options) && this.options.dropZone.bind("dragover." + e, {fileupload: this}, this._onDragOver).bind("drop." + e, {fileupload: this}, this._onDrop).bind("paste." + e, {fileupload: this}, this._onPaste), this.options.fileInput.bind("change." + e, {fileupload: this}, this._onChange)
    }, _destroyEventHandlers: function () {
        var e = this.options.namespace;
        this.options.dropZone.unbind("dragover." + e, this._onDragOver).unbind("drop." + e, this._onDrop).unbind("paste." + e, this._onPaste), this.options.fileInput.unbind("change." + e, this._onChange)
    }, _setOption: function (t, n) {
        var r = e.inArray(t, this._refreshOptionsList) !== -1;
        r && this._destroyEventHandlers(), e.Widget.prototype._setOption.call(this, t, n), r && (this._initSpecialOptions(), this._initEventHandlers())
    }, _initSpecialOptions: function () {
        var t = this.options;
        t.fileInput === undefined ? t.fileInput = this.element.is("input:file") ? this.element : this.element.find("input:file") : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone))
    }, _create: function () {
        var t = this.options;
        e.extend(t, e(this.element[0].cloneNode(!1)).data()), t.namespace = t.namespace || this.widgetName, this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = this._loaded = this._total = 0, this._initEventHandlers()
    }, destroy: function () {
        this._destroyEventHandlers(), e.Widget.prototype.destroy.call(this)
    }, enable: function () {
        e.Widget.prototype.enable.call(this), this._initEventHandlers()
    }, disable: function () {
        this._destroyEventHandlers(), e.Widget.prototype.disable.call(this)
    }, add: function (t) {
        if (!t || this.options.disabled)return;
        t.files = e.each(e.makeArray(t.files), this._normalizeFile), this._onAdd(null, t)
    }, send: function (t) {
        if (t && !this.options.disabled) {
            t.files = e.each(e.makeArray(t.files), this._normalizeFile);
            if (t.files.length)return this._onSend(null, t)
        }
        return this._getXHRPromise(!1, t && t.context)
    }})
}), define("jquery.form", ["jquery"], function (e) {
    function n(t) {
        var n = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(this).ajaxSubmit(n))
    }

    function r(t) {
        var n = t.target, r = e(n);
        if (!r.is(":submit,input:image")) {
            var i = r.closest(":submit");
            if (i.length === 0)return;
            n = i[0]
        }
        var s = this;
        s.clk = n;
        if (n.type == "image")if (t.offsetX !== undefined)s.clk_x = t.offsetX, s.clk_y = t.offsetY; else if (typeof e.fn.offset == "function") {
            var o = r.offset();
            s.clk_x = t.pageX - o.left, s.clk_y = t.pageY - o.top
        } else s.clk_x = t.pageX - n.offsetLeft, s.clk_y = t.pageY - n.offsetTop;
        setTimeout(function () {
            s.clk = s.clk_x = s.clk_y = null
        }, 100)
    }

    function i() {
        if (!e.fn.ajaxSubmit.debug)return;
        var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
    }

    var t = {};
    t.fileapi = e("<input type='file'/>").get(0).files !== undefined, t.formdata = window.FormData !== undefined, e.fn.ajaxSubmit = function (n) {
        function x(t) {
            var r = new FormData;
            for (var i = 0; i < t.length; i++)r.append(t[i].name, t[i].value);
            if (n.extraData)for (var s in n.extraData)n.extraData.hasOwnProperty(s) && r.append(s, n.extraData[s]);
            n.data = null;
            var o = e.extend(!0, {}, e.ajaxSettings, n, {contentType: !1, processData: !1, cache: !1, type: "POST"});
            n.uploadProgress && (o.xhr = function () {
                var e = jQuery.ajaxSettings.xhr();
                return e.upload && (e.upload.onprogress = function (e) {
                    var t = 0, r = e.loaded || e.position, i = e.total;
                    e.lengthComputable && (t = Math.ceil(r / i * 100)), n.uploadProgress(e, r, i, t)
                }), e
            }), o.data = null;
            var u = o.beforeSend;
            o.beforeSend = function (e, t) {
                t.data = r, u && u.call(this, e, t)
            }, e.ajax(o)
        }

        function T(t) {
            function x(e) {
                var t = e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document;
                return t
            }

            function C() {
                function o() {
                    try {
                        var e = x(d).readyState;
                        i("state = " + e), e && e.toLowerCase() == "uninitialized" && setTimeout(o, 50)
                    } catch (t) {
                        i("Server abort: ", t, " (", t.name, ")"), M(S), b && clearTimeout(b), b = undefined
                    }
                }

                var t = u.attr("target"), n = u.attr("action");
                s.setAttribute("target", h), r || s.setAttribute("method", "POST"), n != f.url && s.setAttribute("action", f.url), !f.skipEncodingOverride && (!r || /post/i.test(r)) && u.attr({encoding: "multipart/form-data", enctype: "multipart/form-data"}), f.timeout && (b = setTimeout(function () {
                    y = !0, M(E)
                }, f.timeout));
                var a = [];
                try {
                    if (f.extraData)for (var l in f.extraData)f.extraData.hasOwnProperty(l) && (e.isPlainObject(f.extraData[l]) && f.extraData[l].hasOwnProperty("name") && f.extraData[l].hasOwnProperty("value") ? a.push(e('<input type="hidden" name="' + f.extraData[l].name + '">').attr("value", f.extraData[l].value).appendTo(s)[0]) : a.push(e('<input type="hidden" name="' + l + '">').attr("value", f.extraData[l]).appendTo(s)[0]));
                    f.iframeTarget || (p.appendTo("body"), d.attachEvent ? d.attachEvent("onload", M) : d.addEventListener("load", M, !1)), setTimeout(o, 15), s.submit()
                } finally {
                    s.setAttribute("action", n), t ? s.setAttribute("target", t) : u.removeAttr("target"), e(a).remove()
                }
            }

            function M(t) {
                if (v.aborted || O)return;
                try {
                    L = x(d)
                } catch (n) {
                    i("cannot access response document: ", n), t = S
                }
                if (t === E && v) {
                    v.abort("timeout");
                    return
                }
                if (t == S && v) {
                    v.abort("server abort");
                    return
                }
                if (!L || L.location.href == f.iframeSrc)if (!y)return;
                d.detachEvent ? d.detachEvent("onload", M) : d.removeEventListener("load", M, !1);
                var r = "success", s;
                try {
                    if (y)throw"timeout";
                    var o = f.dataType == "xml" || L.XMLDocument || e.isXMLDoc(L);
                    i("isXml=" + o);
                    if (!o && window.opera && (L.body === null || !L.body.innerHTML) && --A) {
                        i("requeing onLoad callback, DOM not available"), setTimeout(M, 250);
                        return
                    }
                    var u = L.body ? L.body : L.documentElement;
                    v.responseText = u ? u.innerHTML : null, v.responseXML = L.XMLDocument ? L.XMLDocument : L, o && (f.dataType = "xml"), v.getResponseHeader = function (e) {
                        var t = {"content-type": f.dataType};
                        return t[e]
                    }, u && (v.status = Number(u.getAttribute("status")) || v.status, v.statusText = u.getAttribute("statusText") || v.statusText);
                    var a = (f.dataType || "").toLowerCase(), l = /(json|script|text)/.test(a);
                    if (l || f.textarea) {
                        var h = L.getElementsByTagName("textarea")[0];
                        if (h)v.responseText = h.value, v.status = Number(h.getAttribute("status")) || v.status, v.statusText = h.getAttribute("statusText") || v.statusText; else if (l) {
                            var m = L.getElementsByTagName("pre")[0], g = L.getElementsByTagName("body")[0];
                            m ? v.responseText = m.textContent ? m.textContent : m.innerText : g && (v.responseText = g.textContent ? g.textContent : g.innerText)
                        }
                    } else a == "xml" && !v.responseXML && v.responseText && (v.responseXML = _(v.responseText));
                    try {
                        k = P(v, a, f)
                    } catch (t) {
                        r = "parsererror", v.error = s = t || r
                    }
                } catch (t) {
                    i("error caught: ", t), r = "error", v.error = s = t || r
                }
                v.aborted && (i("upload aborted"), r = null), v.status && (r = v.status >= 200 && v.status < 300 || v.status === 304 ? "success" : "error"), r === "success" ? (f.success && f.success.call(f.context, k, "success", v), c && e.event.trigger("ajaxSuccess", [v, f])) : r && (s === undefined && (s = v.statusText), f.error && f.error.call(f.context, v, r, s), c && e.event.trigger("ajaxError", [v, f, s])), c && e.event.trigger("ajaxComplete", [v, f]), c && !--e.active && e.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, v, r), O = !0, f.timeout && clearTimeout(b), setTimeout(function () {
                    f.iframeTarget || p.remove(), v.responseXML = null
                }, 100)
            }

            var s = u[0], o, a, f, c, h, p, d, v, m, g, y, b, w = !!e.fn.prop;
            if (e(":input[name=submit],:input[id=submit]", s).length) {
                alert('Error: Form elements must not have name or id of "submit".');
                return
            }
            if (t)for (a = 0; a < l.length; a++)o = e(l[a]), w ? o.prop("disabled", !1) : o.removeAttr("disabled");
            f = e.extend(!0, {}, e.ajaxSettings, n), f.context = f.context || f, h = "jqFormIO" + (new Date).getTime(), f.iframeTarget ? (p = e(f.iframeTarget), g = p.attr("name"), g ? h = g : p.attr("name", h)) : (p = e('<iframe name="' + h + '" src="' + f.iframeSrc + '" />'), p.css({position: "absolute", top: "-1000px", left: "-1000px"})), d = p[0], v = {aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function () {
            }, getResponseHeader: function () {
            }, setRequestHeader: function () {
            }, abort: function (t) {
                var n = t === "timeout" ? "timeout" : "aborted";
                i("aborting upload... " + n), this.aborted = 1;
                if (d.contentWindow.document.execCommand)try {
                    d.contentWindow.document.execCommand("Stop")
                } catch (r) {
                }
                p.attr("src", f.iframeSrc), v.error = n, f.error && f.error.call(f.context, v, n, t), c && e.event.trigger("ajaxError", [v, f, n]), f.complete && f.complete.call(f.context, v, n)
            }}, c = f.global, c && 0 === e.active++ && e.event.trigger("ajaxStart"), c && e.event.trigger("ajaxSend", [v, f]);
            if (f.beforeSend && f.beforeSend.call(f.context, v, f) === !1) {
                f.global && e.active--;
                return
            }
            if (v.aborted)return;
            m = s.clk, m && (g = m.name, g && !m.disabled && (f.extraData = f.extraData || {}, f.extraData[g] = m.value, m.type == "image" && (f.extraData[g + ".x"] = s.clk_x, f.extraData[g + ".y"] = s.clk_y)));
            var E = 1, S = 2, T = e("meta[name=csrf-token]").attr("content"), N = e("meta[name=csrf-param]").attr("content");
            N && T && (f.extraData = f.extraData || {}, f.extraData[N] = T), f.forceSync ? C() : setTimeout(C, 10);
            var k, L, A = 50, O, _ = e.parseXML || function (e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && t.documentElement.nodeName != "parsererror" ? t : null
            }, D = e.parseJSON || function (e) {
                return window.eval("(" + e + ")")
            }, P = function (t, n, r) {
                var i = t.getResponseHeader("content-type") || "", s = n === "xml" || !n && i.indexOf("xml") >= 0, o = s ? t.responseXML : t.responseText;
                return s && o.documentElement.nodeName === "parsererror" && e.error && e.error("parsererror"), r && r.dataFilter && (o = r.dataFilter(o, n)), typeof o == "string" && (n === "json" || !n && i.indexOf("json") >= 0 ? o = D(o) : (n === "script" || !n && i.indexOf("javascript") >= 0) && e.globalEval(o)), o
            }
        }

        if (!this.length)return i("ajaxSubmit: skipping submit process - no element selected"), this;
        var r, s, o, u = this;
        typeof n == "function" && (n = {success: n}), r = this.attr("method"), s = this.attr("action"), o = typeof s == "string" ? e.trim(s) : "", o = o || window.location.href || "", o && (o = (o.match(/^([^#]+)/) || [])[1]), n = e.extend(!0, {url: o, success: e.ajaxSettings.success, type: r || "GET", iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, n);
        var a = {};
        this.trigger("form-pre-serialize", [this, n, a]);
        if (a.veto)return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (n.beforeSerialize && n.beforeSerialize(this, n) === !1)return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var f = n.traditional;
        f === undefined && (f = e.ajaxSettings.traditional);
        var l = [], c, h = this.formToArray(n.semantic, l);
        n.data && (n.extraData = n.data, c = e.param(n.data, f));
        if (n.beforeSubmit && n.beforeSubmit(h, this, n) === !1)return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        this.trigger("form-submit-validate", [h, this, n, a]);
        if (a.veto)return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var p = e.param(h, f);
        c && (p = p ? p + "&" + c : c), n.type.toUpperCase() == "GET" ? (n.url += (n.url.indexOf("?") >= 0 ? "&" : "?") + p, n.data = null) : n.data = p;
        var d = [];
        n.resetForm && d.push(function () {
            u.resetForm()
        }), n.clearForm && d.push(function () {
            u.clearForm(n.includeHidden)
        });
        if (!n.dataType && n.target) {
            var v = n.success || function () {
            };
            d.push(function (t) {
                var r = n.replaceTarget ? "replaceWith" : "html";
                e(n.target)[r](t).each(v, arguments)
            })
        } else n.success && d.push(n.success);
        n.success = function (e, t, r) {
            var i = n.context || this;
            for (var s = 0, o = d.length; s < o; s++)d[s].apply(i, [e, t, r || u, u])
        };
        var m = e("input:file:enabled[value]", this), g = m.length > 0, y = "multipart/form-data", b = u.attr("enctype") == y || u.attr("encoding") == y, w = t.fileapi && t.formdata;
        i("fileAPI :" + w);
        var E = (g || b) && !w;
        n.iframe !== !1 && (n.iframe || E) ? n.closeKeepAlive ? e.get(n.closeKeepAlive, function () {
            T(h)
        }) : T(h) : (g || b) && w ? x(h) : e.ajax(n);
        for (var S = 0; S < l.length; S++)l[S] = null;
        return this.trigger("form-submit-notify", [this, n]), this
    }, e.fn.ajaxForm = function (t) {
        t = t || {}, t.delegation = t.delegation && e.isFunction(e.fn.on);
        if (!t.delegation && this.length === 0) {
            var s = {s: this.selector, c: this.context};
            return!e.isReady && s.s ? (i("DOM not ready, queuing ajaxForm"), e(function () {
                e(s.s, s.c).ajaxForm(t)
            }), this) : this
        }
        return t.delegation ? (e(document).off("submit.form-plugin", this.selector, n).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, t, n).on("click.form-plugin", this.selector, t, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", t, n).bind("click.form-plugin", t, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (n, r) {
        var i = [];
        if (this.length === 0)return i;
        var s = this[0], o = n ? s.getElementsByTagName("*") : s.elements;
        if (!o)return i;
        var u, a, f, l, c, h, p;
        for (u = 0, h = o.length; u < h; u++) {
            c = o[u], f = c.name;
            if (!f)continue;
            if (n && s.clk && c.type == "image") {
                !c.disabled && s.clk == c && (i.push({name: f, value: e(c).val(), type: c.type}), i.push({name: f + ".x", value: s.clk_x}, {name: f + ".y", value: s.clk_y}));
                continue
            }
            l = e.fieldValue(c, !0);
            if (l && l.constructor == Array) {
                r && r.push(c);
                for (a = 0, p = l.length; a < p; a++)i.push({name: f, value: l[a]})
            } else if (t.fileapi && c.type == "file" && !c.disabled) {
                r && r.push(c);
                var d = c.files;
                if (d.length)for (a = 0; a < d.length; a++)i.push({name: f, value: d[a], type: c.type}); else i.push({name: f, value: "", type: c.type})
            } else l !== null && typeof l != "undefined" && (r && r.push(c), i.push({name: f, value: l, type: c.type, required: c.required}))
        }
        if (!n && s.clk) {
            var v = e(s.clk), m = v[0];
            f = m.name, f && !m.disabled && m.type == "image" && (i.push({name: f, value: v.val()}), i.push({name: f + ".x", value: s.clk_x}, {name: f + ".y", value: s.clk_y}))
        }
        return i
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var n = [];
        return this.each(function () {
            var r = this.name;
            if (!r)return;
            var i = e.fieldValue(this, t);
            if (i && i.constructor == Array)for (var s = 0, o = i.length; s < o; s++)n.push({name: r, value: i[s]}); else i !== null && typeof i != "undefined" && n.push({name: this.name, value: i})
        }), e.param(n)
    }, e.fn.fieldValue = function (t) {
        for (var n = [], r = 0, i = this.length; r < i; r++) {
            var s = this[r], o = e.fieldValue(s, t);
            if (o === null || typeof o == "undefined" || o.constructor == Array && !o.length)continue;
            o.constructor == Array ? e.merge(n, o) : n.push(o)
        }
        return n
    }, e.fieldValue = function (t, n) {
        var r = t.name, i = t.type, s = t.tagName.toLowerCase();
        n === undefined && (n = !0);
        if (n && (!r || t.disabled || i == "reset" || i == "button" || (i == "checkbox" || i == "radio") && !t.checked || (i == "submit" || i == "image") && t.form && t.form.clk != t || s == "select" && t.selectedIndex == -1))return null;
        if (s == "select") {
            var o = t.selectedIndex;
            if (o < 0)return null;
            var u = [], a = t.options, f = i == "select-one", l = f ? o + 1 : a.length;
            for (var c = f ? o : 0; c < l; c++) {
                var h = a[c];
                if (h.selected) {
                    var p = h.value;
                    p || (p = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value);
                    if (f)return p;
                    u.push(p)
                }
            }
            return u
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var r = this.type, i = this.tagName.toLowerCase();
            n.test(r) || i == "textarea" ? this.value = "" : r == "checkbox" || r == "radio" ? this.checked = !1 : i == "select" ? this.selectedIndex = -1 : t && (t === !0 && /hidden/.test(r) || typeof t == "string" && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            (typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return e === undefined && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return t === undefined && (t = !0), this.each(function () {
            var n = this.type;
            if (n == "checkbox" || n == "radio")this.checked = t; else if (this.tagName.toLowerCase() == "option") {
                var r = e(this).parent("select");
                t && r[0] && r[0].type == "select-one" && r.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}), define("jquery.Jcrop", ["jquery"], function (e) {
    e.Jcrop = function (t, n) {
        function u(e) {
            return parseInt(e, 10) + "px"
        }

        function a(e) {
            return parseInt(e, 10) + "%"
        }

        function f(e) {
            return r.baseClass + "-" + e
        }

        function l() {
            return e.fx.step.hasOwnProperty("backgroundColor")
        }

        function c(t) {
            var n = e(t).offset();
            return[n.left, n.top]
        }

        function p(e) {
            return[e.pageX - i[0], e.pageY - i[1]]
        }

        function d(t) {
            typeof t != "object" && (t = {}), r = e.extend(r, t), typeof r.onChange != "function" && (r.onChange = function () {
            }), typeof r.onSelect != "function" && (r.onSelect = function () {
            }), typeof r.onRelease != "function" && (r.onRelease = function () {
            })
        }

        function v(e) {
            e !== s && (rt.setCursor(e), s = e)
        }

        function m(e, t) {
            i = c(_), rt.setCursor(e === "move" ? e : e + "-resize");
            if (e === "move")return rt.activateHandlers(b(t), C);
            var n = tt.getFixed(), r = E(e), s = tt.getCorner(E(r));
            tt.setPressed(tt.getCorner(r)), tt.setCurrent(s), rt.activateHandlers(g(e, n), C)
        }

        function g(e, t) {
            return function (n) {
                if (!r.aspectRatio)switch (e) {
                    case"e":
                        n[1] = t.y2;
                        break;
                    case"w":
                        n[1] = t.y2;
                        break;
                    case"n":
                        n[0] = t.x2;
                        break;
                    case"s":
                        n[0] = t.x2
                } else switch (e) {
                    case"e":
                        n[1] = t.y + 1;
                        break;
                    case"w":
                        n[1] = t.y + 1;
                        break;
                    case"n":
                        n[0] = t.x + 1;
                        break;
                    case"s":
                        n[0] = t.x + 1
                }
                tt.setCurrent(n), nt.update()
            }
        }

        function b(e) {
            var t = e;
            return it.watchKeys(), function (e) {
                tt.moveOffset([e[0] - t[0], e[1] - t[1]]), t = e, nt.update()
            }
        }

        function E(e) {
            switch (e) {
                case"n":
                    return"sw";
                case"s":
                    return"nw";
                case"e":
                    return"nw";
                case"w":
                    return"ne";
                case"ne":
                    return"sw";
                case"nw":
                    return"se";
                case"se":
                    return"nw";
                case"sw":
                    return"ne"
            }
        }

        function S(e) {
            return function (t) {
                return r.disabled ? !1 : e === "move" && !r.allowMove ? !1 : (G = !0, m(e, p(t)), t.stopPropagation(), t.preventDefault(), !1)
            }
        }

        function T(e, t, n) {
            var r = e.width(), i = e.height();
            r > t && t > 0 && (r = t, i = t / e.width() * e.height()), i > n && n > 0 && (i = n, r = n / e.height() * e.width()), J = e.width() / r, K = e.height() / i, e.width(r).height(i)
        }

        function N(e) {
            return{x: parseInt(e.x * J, 10), y: parseInt(e.y * K, 10), x2: parseInt(e.x2 * J, 10), y2: parseInt(e.y2 * K, 10), w: parseInt(e.w * J, 10), h: parseInt(e.h * K, 10)}
        }

        function C(e) {
            var t = tt.getFixed();
            t.w > r.minSelect[0] && t.h > r.minSelect[1] ? (nt.enableHandles(), nt.done()) : nt.release(), rt.setCursor(r.allowSelect ? "crosshair" : "default")
        }

        function k(e) {
            if (r.disabled)return!1;
            if (!r.allowSelect)return!1;
            G = !0, i = c(_), nt.disableHandles(), v("crosshair");
            var t = p(e);
            return tt.setPressed(t), nt.update(), rt.activateHandlers(L, C), it.watchKeys(), e.stopPropagation(), e.preventDefault(), !1
        }

        function L(e) {
            tt.setCurrent(e), nt.update()
        }

        function A() {
            var t = e("<div></div>").addClass(f("tracker"));
            return e.browser.msie && t.css({opacity: 0, backgroundColor: "white"}), t
        }

        function st(e) {
            H.removeClass().addClass(f("holder")).addClass(e)
        }

        function ot(e, t) {
            function w() {
                window.setTimeout(E, c)
            }

            var n = parseInt(e[0], 10) / J, i = parseInt(e[1], 10) / K, s = parseInt(e[2], 10) / J, o = parseInt(e[3], 10) / K;
            if (Y)return;
            var u = tt.flipCoords(n, i, s, o), a = tt.getFixed(), f = [a.x, a.y, a.x2, a.y2], l = f, c = r.animationDelay, h = u[0] - f[0], p = u[1] - f[1], d = u[2] - f[2], v = u[3] - f[3], m = 0, g = r.swingSpeed;
            x = l[0], y = l[1], s = l[2], o = l[3], nt.animMode(!0);
            var b, E = function () {
                return function () {
                    m += (100 - m) / g, l[0] = x + m / 100 * h, l[1] = y + m / 100 * p, l[2] = s + m / 100 * d, l[3] = o + m / 100 * v, m >= 99.8 && (m = 100), m < 100 ? (at(l), w()) : (nt.done(), typeof t == "function" && t.call(yt))
                }
            }();
            w()
        }

        function ut(e) {
            at([parseInt(e[0], 10) / J, parseInt(e[1], 10) / K, parseInt(e[2], 10) / J, parseInt(e[3], 10) / K])
        }

        function at(e) {
            tt.setPressed([e[0], e[1]]), tt.setCurrent([e[2], e[3]]), nt.update()
        }

        function ft() {
            return N(tt.getFixed())
        }

        function lt() {
            return tt.getFixed()
        }

        function ct(e) {
            d(e), gt()
        }

        function ht() {
            r.disabled = !0, nt.disableHandles(), nt.setCursor("default"), rt.setCursor("default")
        }

        function pt() {
            r.disabled = !1, gt()
        }

        function dt() {
            nt.done(), rt.activateHandlers(null, null)
        }

        function vt() {
            H.remove(), M.show(), e(t).removeData("Jcrop")
        }

        function mt(e, t) {
            nt.release(), ht();
            var n = new Image;
            n.onload = function () {
                var i = n.width, s = n.height, o = r.boxWidth, u = r.boxHeight;
                _.width(i).height(s), _.attr("src", e), B.attr("src", e), T(_, o, u), D = _.width(), P = _.height(), B.width(D).height(P), R.width(D + q * 2).height(P + q * 2), H.width(D).height(P), pt(), typeof t == "function" && t.call(yt)
            }, n.src = e
        }

        function gt(e) {
            r.allowResize ? e ? nt.enableOnly() : nt.enableHandles() : nt.disableHandles(), rt.setCursor(r.allowSelect ? "crosshair" : "default"), nt.setCursor(r.allowMove ? "move" : "default"), r.hasOwnProperty("setSelect") && (ut(r.setSelect), nt.done(), delete r.setSelect), r.hasOwnProperty("trueSize") && (J = r.trueSize[0] / D, K = r.trueSize[1] / P), r.hasOwnProperty("bgColor") && (l() && r.fadeTime ? H.animate({backgroundColor: r.bgColor}, {queue: !1, duration: r.fadeTime}) : H.css("backgroundColor", r.bgColor), delete r.bgColor), r.hasOwnProperty("bgOpacity") && (U = r.bgOpacity, nt.isAwake() && (r.fadeTime ? _.fadeTo(r.fadeTime, U) : H.css("opacity", r.opacity)), delete r.bgOpacity), z = r.maxSize[0] || 0, W = r.maxSize[1] || 0, X = r.minSize[0] || 0, V = r.minSize[1] || 0, r.hasOwnProperty("outerImage") && (_.attr("src", r.outerImage), delete r.outerImage), nt.refresh()
        }

        var r = e.extend({}, e.Jcrop.defaults), i, s, o = !1;
        e.browser.msie && e.browser.version.split(".")[0] === "6" && (o = !0), typeof t != "object" && (t = e(t)[0]), typeof n != "object" && (n = {}), d(n);
        var O = {border: "none", margin: 0, padding: 0, position: "absolute"}, M = e(t), _ = M.clone().removeAttr("id").css(O);
        _.width(M.width()), _.height(M.height()), M.after(_).hide(), T(_, r.boxWidth, r.boxHeight);
        var D = _.width(), P = _.height(), H = e("<div />").width(D).height(P).addClass(f("holder")).css({position: "relative", backgroundColor: r.bgColor}).insertAfter(M).append(_);
        delete r.bgColor, r.addClass && H.addClass(r.addClass);
        var B = e("<img />").attr("src", _.attr("src")).css(O).width(D).height(P), j = e("<div />").width(a(100)).height(a(100)).css({zIndex: 310, position: "absolute", overflow: "hidden"}).append(B), F = e("<div />").width(a(100)).height(a(100)).css("zIndex", 320), I = e("<div />").css({position: "absolute", zIndex: 300}).insertBefore(_).append(j, F);
        o && I.css({overflowY: "hidden"});
        var q = r.boundary, R = A().width(D + q * 2).height(P + q * 2).css({position: "absolute", top: u(-q), left: u(-q), zIndex: 290}).mousedown(k), U = r.bgOpacity, z, W, X, V, J, K, Q = !0, G, Y, Z;
        i = c(_);
        var et = function () {
            function e() {
                var e = {}, t = ["touchstart", "touchmove", "touchend"], n = document.createElement("div"), r;
                try {
                    for (r = 0; r < t.length; r++) {
                        var i = t[r];
                        i = "on" + i;
                        var s = i in n;
                        s || (n.setAttribute(i, "return;"), s = typeof n[i] == "function"), e[t[r]] = s
                    }
                    return e.touchstart && e.touchend && e.touchmove
                } catch (o) {
                    return!1
                }
            }

            function t() {
                return r.touchSupport === !0 || r.touchSupport === !1 ? r.touchSupport : e()
            }

            return{createDragger: function (e) {
                return function (t) {
                    return t.pageX = t.originalEvent.changedTouches[0].pageX, t.pageY = t.originalEvent.changedTouches[0].pageY, r.disabled ? !1 : e === "move" && !r.allowMove ? !1 : (G = !0, m(e, p(t)), t.stopPropagation(), t.preventDefault(), !1)
                }
            }, newSelection: function (e) {
                return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, k(e)
            }, isSupported: e, support: t()}
        }(), tt = function () {
            function u(r) {
                r = d(r), n = e = r[0], i = t = r[1]
            }

            function a(e) {
                e = d(e), s = e[0] - n, o = e[1] - i, n = e[0], i = e[1]
            }

            function f() {
                return[s, o]
            }

            function l(r) {
                var s = r[0], o = r[1];
                0 > e + s && (s -= s + e), 0 > t + o && (o -= o + t), P < i + o && (o += P - (i + o)), D < n + s && (s += D - (n + s)), e += s, n += s, t += o, i += o
            }

            function c(e) {
                var t = p();
                switch (e) {
                    case"ne":
                        return[t.x2, t.y];
                    case"nw":
                        return[t.x, t.y];
                    case"se":
                        return[t.x2, t.y2];
                    case"sw":
                        return[t.x, t.y2]
                }
            }

            function p() {
                if (!r.aspectRatio)return m();
                var s = r.aspectRatio, o = r.minSize[0] / J, u = r.maxSize[0] / J, a = r.maxSize[1] / K, f = n - e, l = i - t, c = Math.abs(f), p = Math.abs(l), d = c / p, y, b;
                return u === 0 && (u = D * 10), a === 0 && (a = P * 10), d < s ? (b = i, w = p * s, y = f < 0 ? e - w : w + e, y < 0 ? (y = 0, h = Math.abs((y - e) / s), b = l < 0 ? t - h : h + t) : y > D && (y = D, h = Math.abs((y - e) / s), b = l < 0 ? t - h : h + t)) : (y = n, h = c / s, b = l < 0 ? t - h : t + h, b < 0 ? (b = 0, w = Math.abs((b - t) * s), y = f < 0 ? e - w : w + e) : b > P && (b = P, w = Math.abs(b - t) * s, y = f < 0 ? e - w : w + e)), y > e ? (y - e < o ? y = e + o : y - e > u && (y = e + u), b > t ? b = t + (y - e) / s : b = t - (y - e) / s) : y < e && (e - y < o ? y = e - o : e - y > u && (y = e - u), b > t ? b = t + (e - y) / s : b = t - (e - y) / s), y < 0 ? (e -= y, y = 0) : y > D && (e -= y - D, y = D), b < 0 ? (t -= b, b = 0) : b > P && (t -= b - P, b = P), g(v(e, t, y, b))
            }

            function d(e) {
                return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > D && (e[0] = D), e[1] > P && (e[1] = P), [e[0], e[1]]
            }

            function v(e, t, n, r) {
                var i = e, s = n, o = t, u = r;
                return n < e && (i = n, s = e), r < t && (o = r, u = t), [Math.round(i), Math.round(o), Math.round(s), Math.round(u)]
            }

            function m() {
                var r = n - e, s = i - t, o;
                return z && Math.abs(r) > z && (n = r > 0 ? e + z : e - z), W && Math.abs(s) > W && (i = s > 0 ? t + W : t - W), V / K && Math.abs(s) < V / K && (i = s > 0 ? t + V / K : t - V / K), X / J && Math.abs(r) < X / J && (n = r > 0 ? e + X / J : e - X / J), e < 0 && (n -= e, e -= e), t < 0 && (i -= t, t -= t), n < 0 && (e -= n, n -= n), i < 0 && (t -= i, i -= i), n > D && (o = n - D, e -= o, n -= o), i > P && (o = i - P, t -= o, i -= o), e > D && (o = e - P, i -= o, t -= o), t > P && (o = t - P, i -= o, t -= o), g(v(e, t, n, i))
            }

            function g(e) {
                return{x: e[0], y: e[1], x2: e[2], y2: e[3], w: e[2] - e[0], h: e[3] - e[1]}
            }

            var e = 0, t = 0, n = 0, i = 0, s, o;
            return{flipCoords: v, setPressed: u, setCurrent: a, getOffset: f, moveOffset: l, getCorner: c, getFixed: p}
        }(), nt = function () {
            function c(t) {
                var n = e("<div />").css({position: "absolute", opacity: r.borderOpacity}).addClass(f(t));
                return j.append(n), n
            }

            function h(t, n) {
                var r = e("<div />").mousedown(S(t)).css({cursor: t + "-resize", position: "absolute", zIndex: n});
                return et.support && r.bind("touchstart", et.createDragger(t)), F.append(r), r
            }

            function p(e) {
                return h(e, n++).css({top: u(-l + 1), left: u(-l + 1), opacity: r.handleOpacity}).addClass(f("handle"))
            }

            function d(e) {
                var t = r.handleSize, i = t, s = t, o = l, f = l;
                switch (e) {
                    case"n":
                    case"s":
                        s = a(100);
                        break;
                    case"e":
                    case"w":
                        i = a(100)
                }
                return h(e, n++).width(s).height(i).css({top: u(-o + 1), left: u(-f + 1)})
            }

            function v(e) {
                var t;
                for (t = 0; t < e.length; t++)s[e[t]] = p(e[t])
            }

            function m(e) {
                var t = Math.round(e.h / 2 - l), n = Math.round(e.w / 2 - l), r = -l + 1, i = -l + 1, o = e.w - l, a = e.h - l, f, c;
                s.e && (s.e.css({top: u(t), left: u(o)}), s.w.css({top: u(t)}), s.s.css({top: u(a), left: u(n)}), s.n.css({left: u(n)})), s.ne && (s.ne.css({left: u(o)}), s.se.css({top: u(a), left: u(o)}), s.sw.css({top: u(a)})), s.b && (s.b.css({top: u(a)}), s.r.css({left: u(o)}))
            }

            function g(e, t) {
                B.css({top: u(-t), left: u(-e)}), I.css({top: u(t), left: u(e)})
            }

            function y(e, t) {
                I.width(e).height(t)
            }

            function b() {
                var e = tt.getFixed();
                tt.setPressed([e.x, e.y]), tt.setCurrent([e.x2, e.y2]), w()
            }

            function w() {
                if (t)return E()
            }

            function E() {
                var e = tt.getFixed();
                y(e.w, e.h), g(e.x, e.y), o && m(e), t || x(), r.onChange.call(yt, N(e))
            }

            function x() {
                I.show(), r.bgFade ? _.fadeTo(r.fadeTime, U) : _.css("opacity", U), t = !0
            }

            function T() {
                L(), I.hide(), r.bgFade ? _.fadeTo(r.fadeTime, 1) : _.css("opacity", 1), t = !1, r.onRelease.call(yt)
            }

            function C() {
                o && (m(tt.getFixed()), F.show())
            }

            function k() {
                o = !0;
                if (r.allowResize)return m(tt.getFixed()), F.show(), !0
            }

            function L() {
                o = !1, F.hide()
            }

            function O(e) {
                Y === e ? L() : k()
            }

            function M() {
                O(!1), b()
            }

            var t, n = 370, i = {}, s = {}, o = !1, l = r.handleOffset;
            r.drawBorders && (i = {top: c("hline"), bottom: c("hline bottom"), left: c("vline"), right: c("vline right")}), r.dragEdges && (s.t = d("n"), s.b = d("s"), s.r = d("e"), s.l = d("w")), r.sideHandles && v(["n", "s", "e", "w"]), r.cornerHandles && v(["sw", "nw", "ne", "se"]);
            var D = A().mousedown(S("move")).css({cursor: "move", position: "absolute", zIndex: 360});
            return et.support && D.bind("touchstart.jcrop", et.createDragger("move")), j.append(D), L(), {updateVisible: w, update: E, release: T, refresh: b, isAwake: function () {
                return t
            }, setCursor: function (e) {
                D.css("cursor", e)
            }, enableHandles: k, enableOnly: function () {
                o = !0
            }, showHandles: C, disableHandles: L, animMode: O, done: M}
        }(), rt = function () {
            function s() {
                R.css({zIndex: 450}), i && e(document).bind("mousemove", u).bind("mouseup", a)
            }

            function o() {
                R.css({zIndex: 290}), i && e(document).unbind("mousemove", u).unbind("mouseup", a)
            }

            function u(e) {
                return t(p(e)), !1
            }

            function a(e) {
                return e.preventDefault(), e.stopPropagation(), G && (G = !1, n(p(e)), nt.isAwake() && r.onSelect.call(yt, N(tt.getFixed())), o(), t = function () {
                }, n = function () {
                }), !1
            }

            function f(e, r) {
                return G = !0, t = e, n = r, s(), !1
            }

            function l(e) {
                return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, u(e)
            }

            function c(e) {
                return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, a(e)
            }

            function h(e) {
                R.css("cursor", e)
            }

            var t = function () {
            }, n = function () {
            }, i = r.trackDocument;
            return et.support && e(document).bind("touchmove", l).bind("touchend", c), i || R.mousemove(u).mouseup(a).mouseout(a), _.before(R), {activateHandlers: f, setCursor: h}
        }(), it = function () {
            function i() {
                r.keySupport && (t.show(), t.focus())
            }

            function s(e) {
                t.hide()
            }

            function u(e, t, n) {
                r.allowMove && (tt.moveOffset([t, n]), nt.updateVisible()), e.preventDefault(), e.stopPropagation()
            }

            function a(e) {
                if (e.ctrlKey)return!0;
                Z = e.shiftKey ? !0 : !1;
                var t = Z ? 10 : 1;
                switch (e.keyCode) {
                    case 37:
                        u(e, -t, 0);
                        break;
                    case 39:
                        u(e, t, 0);
                        break;
                    case 38:
                        u(e, 0, -t);
                        break;
                    case 40:
                        u(e, 0, t);
                        break;
                    case 27:
                        nt.release();
                        break;
                    case 9:
                        return!0
                }
                return!1
            }

            var t = e('<input type="radio" />').css({position: "fixed", left: "-120px", width: "12px"}), n = e("<div />").css({position: "absolute", overflow: "hidden"}).append(t);
            return r.keySupport && (t.keydown(a).blur(s), o || !r.fixedSupport ? (t.css({position: "absolute", left: "-20px"}), n.append(t).insertBefore(_)) : t.insertBefore(_)), {watchKeys: i}
        }();
        et.support && R.bind("touchstart", et.newSelection), F.hide(), gt(!0);
        var yt = {setImage: mt, animateTo: ot, setSelect: ut, setOptions: ct, tellSelect: ft, tellScaled: lt, setClass: st, disable: ht, enable: pt, cancel: dt, release: nt.release, destroy: vt, focus: it.watchKeys, getBounds: function () {
            return[D * J, P * K]
        }, getWidgetSize: function () {
            return[D, P]
        }, getScaleFactor: function () {
            return[J, K]
        }, ui: {holder: H, selection: I}};
        return e.browser.msie && H.bind("selectstart", function () {
            return!1
        }), M.data("Jcrop", yt), yt
    }, e.fn.Jcrop = function (t, n) {
        function r(r) {
            var i = typeof t == "object" ? t : {}, s = i.useImg || r.src, o = new Image;
            o.onload = function () {
                function t() {
                    var t = e.Jcrop(r, i);
                    typeof n == "function" && n.call(t)
                }

                function s() {
                    !o.width || !o.height ? window.setTimeout(s, 50) : t()
                }

                window.setTimeout(s, 50)
            }, o.src = s
        }

        return this.each(function () {
            if (e(this).data("Jcrop")) {
                if (t === "api")return e(this).data("Jcrop");
                e(this).data("Jcrop").setOptions(t)
            } else r(this)
        }), this
    }, e.Jcrop.defaults = {allowSelect: !0, allowMove: !0, allowResize: !0, trackDocument: !0, baseClass: "jcrop", addClass: null, bgColor: "black", bgOpacity: .6, bgFade: !1, borderOpacity: .4, handleOpacity: .5, handleSize: 9, handleOffset: 5, aspectRatio: 0, keySupport: !0, cornerHandles: !0, sideHandles: !0, drawBorders: !0, dragEdges: !0, fixedSupport: !0, touchSupport: null, boxWidth: 0, boxHeight: 0, boundary: 2, fadeTime: 400, animationDelay: 20, swingSpeed: 3, minSelect: [0, 0], maxSize: [0, 0], minSize: [0, 0], onChange: function () {
    }, onSelect: function () {
    }, onRelease: function () {
    }}
}), define("jquery.json", ["jquery"], function ($) {
    var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g, meta = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
    $.toJSON = typeof JSON == "object" && JSON.stringify ? JSON.stringify : function (e) {
        if (e === null)return"null";
        var t = typeof e;
        if (t === "undefined")return undefined;
        if (t === "number" || t === "boolean")return"" + e;
        if (t === "string")return $.quoteString(e);
        if (t === "object") {
            if (typeof e.toJSON == "function")return $.toJSON(e.toJSON());
            if (e.constructor === Date) {
                var n = e.getUTCMonth() + 1, r = e.getUTCDate(), i = e.getUTCFullYear(), s = e.getUTCHours(), o = e.getUTCMinutes(), u = e.getUTCSeconds(), a = e.getUTCMilliseconds();
                return n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), s < 10 && (s = "0" + s), o < 10 && (o = "0" + o), u < 10 && (u = "0" + u), a < 100 && (a = "0" + a), a < 10 && (a = "0" + a), '"' + i + "-" + n + "-" + r + "T" + s + ":" + o + ":" + u + "." + a + 'Z"'
            }
            if (e.constructor === Array) {
                var f = [];
                for (var l = 0; l < e.length; l++)f.push($.toJSON(e[l]) || "null");
                return"[" + f.join(",") + "]"
            }
            var c, h, p = [];
            for (var d in e) {
                t = typeof d;
                if (t === "number")c = '"' + d + '"'; else {
                    if (t !== "string")continue;
                    c = $.quoteString(d)
                }
                t = typeof e[d];
                if (t === "function" || t === "undefined")continue;
                h = $.toJSON(e[d]), p.push(c + ":" + h)
            }
            return"{" + p.join(",") + "}"
        }
    }, $.evalJSON = typeof JSON == "object" && JSON.parse ? JSON.parse : function (src) {
        return eval("(" + src + ")")
    }, $.secureEvalJSON = typeof JSON == "object" && JSON.parse ? JSON.parse : function (src) {
        var filtered = src.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
        if (/^[\],:{}\s]*$/.test(filtered))return eval("(" + src + ")");
        throw new SyntaxError("Error parsing JSON, source is not valid.")
    }, $.quoteString = function (e) {
        return e.match(escapeable) ? '"' + e.replace(escapeable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        }) + '"' : '"' + e + '"'
    }
}), function (e) {
    typeof define == "function" && define.amd ? define("jquery.iframe-transport", ["jquery"], e) : e(window.jQuery)
}(function (e) {
    var t = 0;
    e.ajaxTransport("iframe", function (n) {
        if (n.async && (n.type === "POST" || n.type === "GET")) {
            var r, i;
            return{send: function (s, o) {
                r = e('<form style="display:none;"></form>'), i = e('<iframe src="javascript:false;" name="iframe-transport-' + (t += 1) + '"></iframe>').bind("load", function () {
                    var t, s = e.isArray(n.paramName) ? n.paramName : [n.paramName];
                    i.unbind("load").bind("load", function () {
                        var t;
                        try {
                            t = i.contents();
                            if (!t.length || !t[0].firstChild)throw new Error
                        } catch (n) {
                            t = undefined
                        }
                        o(200, "success", {iframe: t}), e('<iframe src="javascript:false;"></iframe>').appendTo(r), r.remove()
                    }), r.prop("target", i.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && e.each(n.formData, function (t, n) {
                        e('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(r)
                    }), n.fileInput && n.fileInput.length && n.type === "POST" && (t = n.fileInput.clone(), n.fileInput.after(function (e) {
                        return t[e]
                    }), n.paramName && n.fileInput.each(function (t) {
                        e(this).prop("name", s[t] || n.paramName)
                    }), r.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")), r.submit(), t && t.length && n.fileInput.each(function (n, r) {
                        var i = e(t[n]);
                        e(r).prop("name", i.prop("name")), i.replaceWith(r)
                    })
                }), r.append(i).appendTo(document.body)
            }, abort: function () {
                i && i.unbind("load").prop("src", "javascript".concat(":false;")), r && r.remove()
            }}
        }
    }), e.ajaxSetup({converters: {"iframe text": function (t) {
        return e(t[0].body).text()
    }, "iframe json": function (t) {
        return e.parseJSON(e(t[0].body).text())
    }, "iframe html": function (t) {
        return e(t[0].body).html()
    }, "iframe script": function (t) {
        return e.globalEval(e(t[0].body).text())
    }}})
}), define("jquery.mousewheel", ["jquery"], function (e) {
    function r(t) {
        var n = t || window.event, r = [].slice.call(arguments, 1), i = 0, s = !0, o = 0, u = 0;
        return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (i = n.wheelDelta / 120), n.detail && (i = -n.detail / 3), u = i, n.axis !== undefined && n.axis === n.HORIZONTAL_AXIS && (u = 0, o = -1 * i), n.wheelDeltaY !== undefined && (u = n.wheelDeltaY / 120), n.wheelDeltaX !== undefined && (o = -1 * n.wheelDeltaX / 120), r.unshift(t, i, o, u), (e.event.dispatch || e.event.handle).apply(this, r)
    }

    var t = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)for (var n = t.length; n;)e.event.fixHooks[t[--n]] = e.event.mouseHooks;
    e.event.special.mousewheel = {setup: function () {
        if (this.addEventListener)for (var e = t.length; e;)this.addEventListener(t[--e], r, !1); else this.onmousewheel = r
    }, teardown: function () {
        if (this.removeEventListener)for (var e = t.length; e;)this.removeEventListener(t[--e], r, !1); else this.onmousewheel = null
    }}, e.fn.extend({mousewheel: function (e) {
        return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
    }, unmousewheel: function (e) {
        return this.unbind("mousewheel", e)
    }})
}), define("jquery.rating", ["jquery"], function (e) {
    if (e.browser.msie)try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (t) {
    }
    e.fn.rating = function (t) {
        if (this.length == 0)return this;
        if (typeof arguments[0] == "string") {
            if (this.length > 1) {
                var n = arguments;
                return this.each(function () {
                    e.fn.rating.apply(e(this), n)
                })
            }
            return e.fn.rating[arguments[0]].apply(this, e.makeArray(arguments).slice(1) || []), this
        }
        var t = e.extend({}, e.fn.rating.options, t || {});
        return e.fn.rating.calls++, this.not(".star-rating-applied").addClass("star-rating-applied").each(function () {
            var n, r = e(this), i = (this.name || "unnamed-rating").replace(/\[|\]/g, "_").replace(/^\_+|\_+$/g, ""), s = e(this.form || document.body), o = s.data("rating");
            if (!o || o.call != e.fn.rating.calls)o = {count: 0, call: e.fn.rating.calls};
            var u = o[i];
            u && (n = u.data("rating"));
            if (u && n)n.count++; else {
                n = e.extend({}, t || {}, (e.metadata ? r.metadata() : e.meta ? r.data() : null) || {}, {count: 0, stars: [], inputs: []}), n.serial = o.count++, u = e('<span class="star-rating-control"/>'), r.before(u), u.addClass("rating-to-be-drawn");
                if (r.attr("disabled") || r.hasClass("disabled"))n.readOnly = !0;
                r.hasClass("required") && (n.required = !0), u.append(n.cancel = e('<div class="rating-cancel"><a title="' + n.cancel + '">' + n.cancelValue + "</a></div>").mouseover(function () {
                    e(this).rating("drain"), e(this).addClass("star-rating-hover")
                }).mouseout(function () {
                    e(this).rating("draw"), e(this).removeClass("star-rating-hover")
                }).click(function () {
                    e(this).rating("select")
                }).data("rating", n))
            }
            var a = e('<div class="star-rating rater-' + n.serial + '"><a title="' + (this.title || this.value) + '">' + this.value + "</a></div>");
            u.append(a), this.id && a.attr("id", this.id), this.className && a.addClass(this.className), n.half && (n.split = 2);
            if (typeof n.split == "number" && n.split > 0) {
                var f = (e.fn.width ? a.width() : 0) || n.starWidth, l = n.count % n.split, c = Math.floor(f / n.split);
                a.width(c).find("a").css({"margin-left": "-" + l * c + "px"})
            }
            n.readOnly ? a.addClass("star-rating-readonly") : a.addClass("star-rating-live").mouseover(function () {
                e(this).rating("fill"), e(this).rating("focus")
            }).mouseout(function () {
                e(this).rating("draw"), e(this).rating("blur")
            }).click(function () {
                e(this).rating("select")
            }), this.checked && (n.current = a), this.nodeName == "A" && e(this).hasClass("selected") && (n.current = a), r.hide(), e(r.siblings("label")).hide(), r.change(function () {
                e(this).rating("select")
            }), a.data("rating.input", r.data("rating.star", a)), n.stars[n.stars.length] = a[0], n.inputs[n.inputs.length] = r[0], n.rater = o[i] = u, n.context = s, r.data("rating", n), u.data("rating", n), a.data("rating", n), s.data("rating", o)
        }), e(".rating-to-be-drawn").rating("draw").removeClass("rating-to-be-drawn"), this
    }, e.extend(e.fn.rating, {calls: 0, focus: function () {
        var t = this.data("rating");
        if (!t)return this;
        if (!t.focus)return this;
        var n = e(this).data("rating.input") || e(this.tagName == "INPUT" ? this : null);
        t.focus && t.focus.apply(n[0], [n.val(), e("a", n.data("rating.star"))[0]])
    }, blur: function () {
        var t = this.data("rating");
        if (!t)return this;
        if (!t.blur)return this;
        var n = e(this).data("rating.input") || e(this.tagName == "INPUT" ? this : null);
        t.blur && t.blur.apply(n[0], [n.val(), e("a", n.data("rating.star"))[0]])
    }, fill: function () {
        var e = this.data("rating");
        if (!e)return this;
        if (e.readOnly)return;
        this.rating("drain"), this.prevAll().andSelf().filter(".rater-" + e.serial).addClass("star-rating-hover")
    }, drain: function () {
        var e = this.data("rating");
        if (!e)return this;
        if (e.readOnly)return;
        e.rater.children().filter(".rater-" + e.serial).removeClass("star-rating-on").removeClass("star-rating-hover")
    }, draw: function () {
        var t = this.data("rating");
        if (!t)return this;
        this.rating("drain"), t.current ? (t.current.data("rating.input").attr("checked", "checked"), t.current.prevAll().andSelf().filter(".rater-" + t.serial).addClass("star-rating-on")) : e(t.inputs).removeAttr("checked"), t.cancel[t.readOnly || t.required ? "hide" : "show"](), this.siblings()[t.readOnly ? "addClass" : "removeClass"]("star-rating-readonly")
    }, select: function (t, n) {
        var r = this.data("rating");
        if (!r)return this;
        if (r.readOnly)return;
        r.current = null;
        if (typeof t != "undefined") {
            if (typeof t == "number")return e(r.stars[t]).rating("select", undefined, n);
            typeof t == "string" && e.each(r.stars, function () {
                e(this).data("rating.input").val() == t && e(this).rating("select", undefined, n)
            })
        } else r.current = this[0].tagName == "INPUT" ? this.data("rating.star") : this.is(".rater-" + r.serial) ? this : null;
        this.data("rating", r), this.rating("draw");
        var i = e(r.current ? r.current.data("rating.input") : null);
        (n || n == undefined) && r.callback && r.callback.apply(i[0], [i.val(), e("a", r.current)[0]])
    }, readOnly: function (t, n) {
        var r = this.data("rating");
        if (!r)return this;
        r.readOnly = t || t == undefined ? !0 : !1, n ? e(r.inputs).attr("disabled", "disabled") : e(r.inputs).removeAttr("disabled"), this.data("rating", r), this.rating("draw")
    }, disable: function () {
        this.rating("readOnly", !0, !0)
    }, enable: function () {
        this.rating("readOnly", !1, !1)
    }}), e.fn.rating.options = {cancel: "Cancel Rating", cancelValue: "", split: 0, starWidth: 16, required: !0}
}), define("jquery.textarea-expander", ["jquery"], function (e) {
    e.fn.TextAreaExpander = function (t, n) {
        function i(t) {
            t = t.target || t;
            var n = t.value.length, i = t.offsetWidth;
            if (n != t.valLength || i != t.boxWidth) {
                r && (n < t.valLength || i != t.boxWidth) && (t.style.height = "0px");
                var s = t.scrollHeight;
                e.browser.mozilla && (s += parseInt(e(t).css("padding-top")), s += parseInt(e(t).css("padding-bottom")));
                var o = Math.max(t.expandMin, Math.min(s, t.expandMax));
                t.style.overflow = t.scrollHeight > o ? "auto" : "hidden", t.style.height = o + "px", t.valLength = n, t.boxWidth = i
            }
            return!0
        }

        var r = !e.browser.msie && !e.browser.opera;
        return this.each(function () {
            if (this.nodeName.toLowerCase() != "textarea")return;
            var r = this.className.match(/expand(\d+)\-*(\d+)*/i);
            this.expandMin = t || (r ? parseInt("0" + r[1], 10) : 0), this.expandMax = n || (r ? parseInt("0" + r[2], 10) : 99999), i(this), this.Initialized || (this.Initialized = !0, e(this).bind("keyup", i).bind("focus", i))
        }), this
    }
}), define("jquery.serialize-object", ["jquery"], function (e) {
    e.fn.serializeObject = function () {
        var t = {};
        return e.each(this.serializeArray(), function (n, r) {
            var i = r.name, s = r.value;
            t[i] = t[i] === undefined ? s : e.isArray(t[i]) ? t[i].concat(s) : [t[i], s]
        }), t
    }
}), define("jquery.viewport", ["jquery"], function (e) {
    e.belowthefold = function (t, n) {
        var r = e(window).height() + e(window).scrollTop();
        return r <= e(t).offset().top - n.threshold
    }, e.abovethetop = function (t, n) {
        var r = e(window).scrollTop();
        return r >= e(t).offset().top + e(t).height() - n.threshold
    }, e.rightofscreen = function (t, n) {
        var r = e(window).width() + e(window).scrollLeft();
        return r <= e(t).offset().left - n.threshold
    }, e.leftofscreen = function (t, n) {
        var r = e(window).scrollLeft();
        return r >= e(t).offset().left + e(t).width() - n.threshold
    }, e.inviewport = function (t, n) {
        return!e.rightofscreen(t, n) && !e.leftofscreen(t, n) && !e.belowthefold(t, n) && !e.abovethetop(t, n)
    }, e.extend(e.expr[":"], {"below-the-fold": function (t, n, r) {
        return e.belowthefold(t, {threshold: 0})
    }, "above-the-top": function (t, n, r) {
        return e.abovethetop(t, {threshold: 0})
    }, "left-of-screen": function (t, n, r) {
        return e.leftofscreen(t, {threshold: 0})
    }, "right-of-screen": function (t, n, r) {
        return e.rightofscreen(t, {threshold: 0})
    }, "in-viewport": function (t, n, r) {
        return e.inviewport(t, {threshold: 0})
    }})
}), define("ud.package.jqueryplugins", ["jquery.autoellipsis", "jquery.autoSuggest", "jquery.color", "jquery.cookie", "jquery.cycle.all", "jquery.easing", "jquery.fancybox", "jquery.fileupload", "jquery.form", "jquery.Jcrop", "jquery.json", "jquery.iframe-transport", "jquery.mousewheel", "jquery.rating", "jquery.textarea-expander", "jquery-ui-timepicker-addon", "jquery.serialize-object", "jsuri", "jquery.viewport"], function () {
}), define("ud.jquery.ready", ["jquery", "jquery.ui", "ud.mixpanel", "init", "bootstrap", "jquery.fancybox", "ud.initializer", "ud.package.jqueryplugins"], function (e) {
    jQuery(document).ready(function (e) {
        e(document).ud_initialize(), e(".slp-faq h4").click(function () {
            var t = e(this).parent();
            t.toggleClass("on")
        }), e("#q").length && (e("#q").autocomplete({source: "/search/search-for-course-and-user-auto-complete-new.html", minLength: 2, delay: 750, search: function () {
            var t = e.trim(e("#q").val());
            if (!t.length)return!1
        }, open: function (t, n) {
            e(".ui-autocomplete:visible").append("<li class='more ui-menu-item' role='menuitem'><a href='/search?q=" + e("#q").val() + "' class='search-more-link'>See more results about <i>" + e("#q").val() + "</i> &raquo; <span>Displaying top " + e(".ui-autocomplete li").size() + " results</span></a></li>"), e(".search-more-link").live("click", function () {
                window.location = e(this).attr("href")
            }), e("a:[data-cat=user]:first").each(function () {
                e(this).parent().before('<li class="header"><h3>Users</h3></li>')
            }), e("a:[data-cat=course]:first").each(function () {
                e(this).parent().before('<li class="header"><h3>Courses</h3></li>')
            })
        }, select: function (e, t) {
            window.location = t.item.link
        }, autoFocus: !0}).data("autocomplete")._renderItem = function (t, n) {
            var r = "";
            return r = "<a href='" + n.link + "' data-cat='" + n.category + "'>", r += "<img src='" + n.imgUrl + "' class='thumb'/>", r += "<span>", r += "<b class='title'>" + n.title + "</b>", r += "<br><i class='subtitle'>" + n.subtitle + "</i>", r += "<br><i class='extra'>" + n.extraHtml + "</i>", r += "</span", r += "</a>", e("<li></li>").data("item.autocomplete", n).append(r).appendTo(t)
        }), setTimeout(function () {
            e("#courseCategoryId").html(function () {
                return e(this).html()
            })
        }, 1), e(".slp-coupon").each(function () {
            var t = e("a.redeem", this), n = e("a.close", this), r = e("div.form", this);
            t.click(function () {
                return r.addClass("on"), t.data("course-id") && t.data("price") && UD.mixpanel.logger.log(UD.mixpanel.actions.ClickRedeemButton, {courseId: t.data("course-id"), price: t.data("price")}), !1
            }), n.click(function () {
                return r.removeClass("on"), !1
            })
        }), e(".payment-coupon-info-box-t a.click-to-redeem").click(function () {
            return e("#payment-coupon-form").show(), e("#coupon-link").hide(), !1
        }), e("body").addClass("pageloaded"), e("#ud-announcement-top-bar").slideDown("slow").delay(2e3), e("#hide-browser-message").click(function () {
            e("#old-browser").html("")
        }), Handlebars.registerHelper("isYes", function (e, t) {
            var n = t.fn, r = t.inverse;
            return e === "Yes" ? n(this) : r(this)
        }), Handlebars.registerHelper("isNo", function (e, t) {
            var n = t.fn, r = t.inverse;
            return e === "No" ? n(this) : r(this)
        }), Handlebars.registerHelper("isNewCourse", function (e, t) {
            var n = t.fn, r = t.inverse, i = (new Date).getTime(), s = 6048e5;
            if (e.published_time) {
                var o = (new Date(e.published_time)).getTime();
                return i - o <= s ? n(this) : r(this)
            }
            return r(this)
        }), Handlebars.registerHelper("isFeaturedCourse", function (e, t) {
            var n = t.fn, r = t.inverse;
            if (e.admin_rating) {
                var i = parseInt(e.admin_rating);
                return i >= 10 ? n(this) : r(this)
            }
            return r(this)
        }), Handlebars.registerHelper("math", function (e, t, n, r) {
            return arguments.length < 4 && (r = n, n = t, t = "+"), e = parseFloat(e), n = parseFloat(n), {"+": e + n, "-": e - n, "*": e * n, "/": e / n, "%": e % n}[t]
        }), Handlebars.registerHelper("renderLicenseCount", function (e, t) {
            return parseInt(e) === -1 ? new Handlebars.SafeString("&#8734;") : e
        }), Handlebars.registerHelper("random", function (e, t, n) {
            return Math.random() * (t - e) + e
        }), e(".tbtn").addClass("tthc").attr("ontouchstart", ""), e(".switch-form").click(function () {
            var t = e(this).closest(".right-col");
            return t.toggleClass("on"), !1
        }), e("#hide-browser-message").click(function () {
            e("#old-browser").html("")
        }), e(".ddown > a").live("click", function (t) {
            t && t.preventDefault(), t && t.stopPropagation();
            var n = e(t.currentTarget).parent();
            return n.hasClass("on") ? n.removeClass("on") : (e(".ddown").removeClass("on"), n.addClass("on"), n.hasClass("ud-notifications") && e(document).trigger("notificationsBarOpened")), !1
        }), e("html, .ddown.on > a, ").live("click", function (t) {
            e(".ddown.on").removeClass("on");
            var n = e(t.target).closest(".popover");
            n.length === 0 && e(".ud-popover").popover("hide")
        });
        var t = e(".single-lecture .details .ud-popup, .slp-course-title > *, .single-lecture .ud-popup, .auto-ellipsis");
        t.length && require(["jquery.autoellipsis"], function () {
            t.ellipsis()
        }), e(".fancybox").fancybox({padding: 0, beforeShow: function () {
        }, afterClose: function () {
        }, afterShow: function () {
            var t = e(".fancybox-inner");
            t.ud_initialize()
        }}), e("#searchbox input[type=text]").focus(function () {
            e(this).parent().addClass("on")
        }).blur(function () {
            e(this).parent().removeClass("on")
        }), e(".share a.f").live("click", function () {
            return popitup(e(this).attr("href"), e(this).data("w"), e(this).data("h")), !1
        }), e(".goto-login-btn").on("click", function () {
            return e(this).closest("#auth-popup").removeClass("off"), e(this).closest("#auth-popup").addClass("on"), !1
        }), e(".goto-signup-btn").on("click", function () {
            return e(this).closest("#auth-popup").removeClass("on"), e(this).closest("#auth-popup").addClass("off"), !1
        }), e("#search-input-wrapper input").focus(function () {
            e("#sample-text").fadeOut()
        }), e(".fields input, #search-input-wrapper input").attr("autocomplete", "off"), e(".field-error").each(function () {
            var t = this, n = e("input, textarea, select", this);
            n.bind("focus change", function () {
                e(t).removeClass("field-error")
            })
        }), e(".steps-bar").each(function () {
            var t = this, n = e(".on", t), r = n.index();
            n.prevAll().addClass("off"), e("li", t).eq(r + 1).addClass("trans")
        }), e(".image-slider").length && e(".image-slider").cycle({fx: "fade"}), e("#ipad-landing-image-slider").length && e("#ipad-landing-image-slider").before('<div id="slider-nav">').cycle({fx: "fade", pager: "#slider-nav"}), e(".custom-placeholders input").each(function () {
            var t = e(this), n = t.attr("placeholder");
            n && t.after('<span class="placeholder">' + n + "</span>").attr("placeholder", ""), t.blur(function () {
                t.val().length || t.removeClass("hasval")
            }).keydown(function (e) {
                setTimeout(function () {
                    e && e.keyCode == 8 || t.val().length ? t.addClass("hasval") : t.removeClass("hasval")
                }, 0)
            })
        }), e("#activity-wrapper").each(function () {
            e("#my textarea", this).focus(function () {
                e(this).addClass("clicked")
            }), e(".ok", this).click(function () {
                e(this).parent().addClass("none")
            })
        }), e(".gray-dropdown").each(function () {
            var t = this, n = e("ul", t);
            e(t).hover(function () {
                e(t).addClass("on")
            }, function () {
                e(t).removeClass("on")
            }), e("li", t).click(function () {
                e(this).prependTo(n), e(t).removeClass("on")
            })
        }), e("#ipad-toolbar").each(function () {
            var t = this;
            e(t).addClass("on"), e(".cl", t).click(function () {
                return e(t).removeClass("on"), !1
            })
        }), e(".course-list-wrapper").each(function () {
            var t = this, n = 4, r = e(".course-nav-btn", t), i = e(".prev", t), s = e(".next", t), o = e(".collapse-btn", t), u = 0, a = e("ul", t), f = e("li", t), l = f.length, c = f.outerWidth(!0);
            a.width() >= e(t).width() && s.addClass("block"), r.click(function () {
                e(this).hasClass("next") ? u++ : u--, left = -c * u, a.css("left", left + "px"), u > 0 ? i.addClass("block") : i.removeClass("block"), u + 1 < l ? s.addClass("block") : s.removeClass("block")
            }), o.click(function () {
                e(t).toggleClass("all")
            })
        }), e("#fixed-nav").each(function () {
            var t = this, n = e(t).outerHeight(), r = !1;
            e(window).scrollTop() > n && e(t).addClass("floating"), e("a", t).click(function () {
                r = !0, e("a", t).removeClass("on"), e(this).addClass("on"), e("html,body").animate({scrollTop: e(e(this).attr("href")).offset().top - n + 10}, "fast", function () {
                    r = !1
                })
            });
            var i = [];
            e("> a", t).each(function (t) {
                t != 0 && i.push(e(this).attr("href"))
            });
            var s = function (t) {
                return e(window).scrollTop() + n < e(i[t]).offset().top
            }, o = function (n) {
                e("a", t).removeClass("on").eq(n).addClass("on")
            };
            e(window).scroll(function () {
                r || (e(window).scrollTop() > 45 ? e(t).addClass("floating") : e(t).removeClass("floating"), s(0) ? o(0) : s(1) ? o(1) : s(2) ? o(2) : s(3) ? o(3) : o(4))
            })
        }), e(".manage-fields-wrapper").each(function () {
            var t = this;
            e("input,textarea", t).focus(function () {
                e(".error-msg", t).addClass("force-hideItem")
            }), e("label", t).each(function () {
                var t = e(this).next(".tooltip-reference").find("input,textarea,select");
                t.length || e(this).addClass("cursor-default"), e(this).click(function () {
                    t.focus()
                })
            })
        }), e("#featured-courses .slide-this").each(function () {
            e("h1,h2,h3").each(function () {
                var t = parseInt(e(this).css("font-size")), n = e(window).width();
                if (n < 1170) {
                    var r = t * e(window).width() / 1170;
                    e(this).css("font-size", r + "px")
                }
            })
        }), e(".create-row .btn").live("click", function () {
            window.location = e(this).attr("href")
        }), e("#ins-videos").each(function () {
            var t = e(">div", this);
            t.eq(0).addClass("block"), e("#ins-slider-bullets li").click(function () {
                var n = e(this).index();
                t.removeClass().eq(n).addClass("block")
            })
        }), UD.Config.APP === "base" && (require(["pinterestpinit", "googleplusone", "twitterwidgets", "googleanalytics", "compete"], function () {
        }), UD.Config.ENV === "PROD" && (require(["adroll"], function () {
        }), require(["quantcast"], function () {
            _qevents.push({qacct: UD.Config.quantcastAccount})
        }))), e(".ud-wysiwyg").parent().addClass("w3c-default")
    })
}), this.Handlebars = {}, function (e) {
    e.VERSION = "1.0.rc.1", e.helpers = {}, e.partials = {}, e.registerHelper = function (e, t, n) {
        n && (t.not = n), this.helpers[e] = t
    }, e.registerPartial = function (e, t) {
        this.partials[e] = t
    }, e.registerHelper("helperMissing", function (e) {
        if (arguments.length === 2)return undefined;
        throw new Error("Could not find property '" + e + "'")
    });
    var t = Object.prototype.toString, n = "[object Function]";
    e.registerHelper("blockHelperMissing", function (r, i) {
        var s = i.inverse || function () {
        }, o = i.fn, u = "", a = t.call(r);
        return a === n && (r = r.call(this)), r === !0 ? o(this) : r === !1 || r == null ? s(this) : a === "[object Array]" ? r.length > 0 ? e.helpers.each(r, i) : s(this) : o(r)
    }), e.K = function () {
    }, e.createFrame = Object.create || function (t) {
        e.K.prototype = t;
        var n = new e.K;
        return e.K.prototype = null, n
    }, e.registerHelper("each", function (t, n) {
        var r = n.fn, i = n.inverse, s = 0, o = "", u;
        n.data && (u = e.createFrame(n.data));
        if (t && typeof t == "object")if (t instanceof Array)for (var a = t.length; s < a; s++)u && (u.index = s), o += r(t[s], {data: u}); else for (var f in t)t.hasOwnProperty(f) && (u && (u.key = f), o += r(t[f], {data: u}), s++);
        return s === 0 && (o = i(this)), o
    }), e.registerHelper("if", function (r, i) {
        var s = t.call(r);
        return s === n && (r = r.call(this)), !r || e.Utils.isEmpty(r) ? i.inverse(this) : i.fn(this)
    }), e.registerHelper("unless", function (t, n) {
        var r = n.fn, i = n.inverse;
        return n.fn = i, n.inverse = r, e.helpers["if"].call(this, t, n)
    }), e.registerHelper("with", function (e, t) {
        return t.fn(e)
    }), e.registerHelper("log", function (t) {
        e.log(t)
    })
}(this.Handlebars);
var handlebars = function () {
    function n() {
        this.yy = {}
    }

    var e = {trace: function () {
    }, yy: {}, symbols_: {error: 2, root: 3, program: 4, EOF: 5, statements: 6, simpleInverse: 7, statement: 8, openInverse: 9, closeBlock: 10, openBlock: 11, mustache: 12, partial: 13, CONTENT: 14, COMMENT: 15, OPEN_BLOCK: 16, inMustache: 17, CLOSE: 18, OPEN_INVERSE: 19, OPEN_ENDBLOCK: 20, path: 21, OPEN: 22, OPEN_UNESCAPED: 23, OPEN_PARTIAL: 24, params: 25, hash: 26, DATA: 27, param: 28, STRING: 29, INTEGER: 30, BOOLEAN: 31, hashSegments: 32, hashSegment: 33, ID: 34, EQUALS: 35, pathSegments: 36, SEP: 37, $accept: 0, $end: 1}, terminals_: {2: "error", 5: "EOF", 14: "CONTENT", 15: "COMMENT", 16: "OPEN_BLOCK", 18: "CLOSE", 19: "OPEN_INVERSE", 20: "OPEN_ENDBLOCK", 22: "OPEN", 23: "OPEN_UNESCAPED", 24: "OPEN_PARTIAL", 27: "DATA", 29: "STRING", 30: "INTEGER", 31: "BOOLEAN", 34: "ID", 35: "EQUALS", 37: "SEP"}, productions_: [0, [3, 2], [4, 3], [4, 1], [4, 0], [6, 1], [6, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [7, 2], [17, 3], [17, 2], [17, 2], [17, 1], [17, 1], [25, 2], [25, 1], [28, 1], [28, 1], [28, 1], [28, 1], [28, 1], [26, 1], [32, 2], [32, 1], [33, 3], [33, 3], [33, 3], [33, 3], [33, 3], [21, 1], [36, 3], [36, 1]], performAction: function (t, n, r, i, s, o, u) {
        var a = o.length - 1;
        switch (s) {
            case 1:
                return o[a - 1];
            case 2:
                this.$ = new i.ProgramNode(o[a - 2], o[a]);
                break;
            case 3:
                this.$ = new i.ProgramNode(o[a]);
                break;
            case 4:
                this.$ = new i.ProgramNode([]);
                break;
            case 5:
                this.$ = [o[a]];
                break;
            case 6:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
            case 7:
                this.$ = new i.BlockNode(o[a - 2], o[a - 1].inverse, o[a - 1], o[a]);
                break;
            case 8:
                this.$ = new i.BlockNode(o[a - 2], o[a - 1], o[a - 1].inverse, o[a]);
                break;
            case 9:
                this.$ = o[a];
                break;
            case 10:
                this.$ = o[a];
                break;
            case 11:
                this.$ = new i.ContentNode(o[a]);
                break;
            case 12:
                this.$ = new i.CommentNode(o[a]);
                break;
            case 13:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
            case 14:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
            case 15:
                this.$ = o[a - 1];
                break;
            case 16:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1]);
                break;
            case 17:
                this.$ = new i.MustacheNode(o[a - 1][0], o[a - 1][1], !0);
                break;
            case 18:
                this.$ = new i.PartialNode(o[a - 1]);
                break;
            case 19:
                this.$ = new i.PartialNode(o[a - 2], o[a - 1]);
                break;
            case 20:
                break;
            case 21:
                this.$ = [[o[a - 2]].concat(o[a - 1]), o[a]];
                break;
            case 22:
                this.$ = [[o[a - 1]].concat(o[a]), null];
                break;
            case 23:
                this.$ = [
                    [o[a - 1]],
                    o[a]
                ];
                break;
            case 24:
                this.$ = [
                    [o[a]],
                    null
                ];
                break;
            case 25:
                this.$ = [
                    [new i.DataNode(o[a])],
                    null
                ];
                break;
            case 26:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
            case 27:
                this.$ = [o[a]];
                break;
            case 28:
                this.$ = o[a];
                break;
            case 29:
                this.$ = new i.StringNode(o[a]);
                break;
            case 30:
                this.$ = new i.IntegerNode(o[a]);
                break;
            case 31:
                this.$ = new i.BooleanNode(o[a]);
                break;
            case 32:
                this.$ = new i.DataNode(o[a]);
                break;
            case 33:
                this.$ = new i.HashNode(o[a]);
                break;
            case 34:
                o[a - 1].push(o[a]), this.$ = o[a - 1];
                break;
            case 35:
                this.$ = [o[a]];
                break;
            case 36:
                this.$ = [o[a - 2], o[a]];
                break;
            case 37:
                this.$ = [o[a - 2], new i.StringNode(o[a])];
                break;
            case 38:
                this.$ = [o[a - 2], new i.IntegerNode(o[a])];
                break;
            case 39:
                this.$ = [o[a - 2], new i.BooleanNode(o[a])];
                break;
            case 40:
                this.$ = [o[a - 2], new i.DataNode(o[a])];
                break;
            case 41:
                this.$ = new i.IdNode(o[a]);
                break;
            case 42:
                o[a - 2].push(o[a]), this.$ = o[a - 2];
                break;
            case 43:
                this.$ = [o[a]]
        }
    }, table: [
        {3: 1, 4: 2, 5: [2, 4], 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {1: [3]},
        {5: [1, 16]},
        {5: [2, 3], 7: 17, 8: 18, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 19], 20: [2, 3], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {5: [2, 5], 14: [2, 5], 15: [2, 5], 16: [2, 5], 19: [2, 5], 20: [2, 5], 22: [2, 5], 23: [2, 5], 24: [2, 5]},
        {4: 20, 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 4], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {4: 21, 6: 3, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 4], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {5: [2, 9], 14: [2, 9], 15: [2, 9], 16: [2, 9], 19: [2, 9], 20: [2, 9], 22: [2, 9], 23: [2, 9], 24: [2, 9]},
        {5: [2, 10], 14: [2, 10], 15: [2, 10], 16: [2, 10], 19: [2, 10], 20: [2, 10], 22: [2, 10], 23: [2, 10], 24: [2, 10]},
        {5: [2, 11], 14: [2, 11], 15: [2, 11], 16: [2, 11], 19: [2, 11], 20: [2, 11], 22: [2, 11], 23: [2, 11], 24: [2, 11]},
        {5: [2, 12], 14: [2, 12], 15: [2, 12], 16: [2, 12], 19: [2, 12], 20: [2, 12], 22: [2, 12], 23: [2, 12], 24: [2, 12]},
        {17: 22, 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {17: 27, 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {17: 28, 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {17: 29, 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {21: 30, 34: [1, 26], 36: 25},
        {1: [2, 1]},
        {6: 31, 8: 4, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {5: [2, 6], 14: [2, 6], 15: [2, 6], 16: [2, 6], 19: [2, 6], 20: [2, 6], 22: [2, 6], 23: [2, 6], 24: [2, 6]},
        {17: 22, 18: [1, 32], 21: 23, 27: [1, 24], 34: [1, 26], 36: 25},
        {10: 33, 20: [1, 34]},
        {10: 35, 20: [1, 34]},
        {18: [1, 36]},
        {18: [2, 24], 21: 41, 25: 37, 26: 38, 27: [1, 45], 28: 39, 29: [1, 42], 30: [1, 43], 31: [1, 44], 32: 40, 33: 46, 34: [1, 47], 36: 25},
        {18: [2, 25]},
        {18: [2, 41], 27: [2, 41], 29: [2, 41], 30: [2, 41], 31: [2, 41], 34: [2, 41], 37: [1, 48]},
        {18: [2, 43], 27: [2, 43], 29: [2, 43], 30: [2, 43], 31: [2, 43], 34: [2, 43], 37: [2, 43]},
        {18: [1, 49]},
        {18: [1, 50]},
        {18: [1, 51]},
        {18: [1, 52], 21: 53, 34: [1, 26], 36: 25},
        {5: [2, 2], 8: 18, 9: 5, 11: 6, 12: 7, 13: 8, 14: [1, 9], 15: [1, 10], 16: [1, 12], 19: [1, 11], 20: [2, 2], 22: [1, 13], 23: [1, 14], 24: [1, 15]},
        {14: [2, 20], 15: [2, 20], 16: [2, 20], 19: [2, 20], 22: [2, 20], 23: [2, 20], 24: [2, 20]},
        {5: [2, 7], 14: [2, 7], 15: [2, 7], 16: [2, 7], 19: [2, 7], 20: [2, 7], 22: [2, 7], 23: [2, 7], 24: [2, 7]},
        {21: 54, 34: [1, 26], 36: 25},
        {5: [2, 8], 14: [2, 8], 15: [2, 8], 16: [2, 8], 19: [2, 8], 20: [2, 8], 22: [2, 8], 23: [2, 8], 24: [2, 8]},
        {14: [2, 14], 15: [2, 14], 16: [2, 14], 19: [2, 14], 20: [2, 14], 22: [2, 14], 23: [2, 14], 24: [2, 14]},
        {18: [2, 22], 21: 41, 26: 55, 27: [1, 45], 28: 56, 29: [1, 42], 30: [1, 43], 31: [1, 44], 32: 40, 33: 46, 34: [1, 47], 36: 25},
        {18: [2, 23]},
        {18: [2, 27], 27: [2, 27], 29: [2, 27], 30: [2, 27], 31: [2, 27], 34: [2, 27]},
        {18: [2, 33], 33: 57, 34: [1, 58]},
        {18: [2, 28], 27: [2, 28], 29: [2, 28], 30: [2, 28], 31: [2, 28], 34: [2, 28]},
        {18: [2, 29], 27: [2, 29], 29: [2, 29], 30: [2, 29], 31: [2, 29], 34: [2, 29]},
        {18: [2, 30], 27: [2, 30], 29: [2, 30], 30: [2, 30], 31: [2, 30], 34: [2, 30]},
        {18: [2, 31], 27: [2, 31], 29: [2, 31], 30: [2, 31], 31: [2, 31], 34: [2, 31]},
        {18: [2, 32], 27: [2, 32], 29: [2, 32], 30: [2, 32], 31: [2, 32], 34: [2, 32]},
        {18: [2, 35], 34: [2, 35]},
        {18: [2, 43], 27: [2, 43], 29: [2, 43], 30: [2, 43], 31: [2, 43], 34: [2, 43], 35: [1, 59], 37: [2, 43]},
        {34: [1, 60]},
        {14: [2, 13], 15: [2, 13], 16: [2, 13], 19: [2, 13], 20: [2, 13], 22: [2, 13], 23: [2, 13], 24: [2, 13]},
        {5: [2, 16], 14: [2, 16], 15: [2, 16], 16: [2, 16], 19: [2, 16], 20: [2, 16], 22: [2, 16], 23: [2, 16], 24: [2, 16]},
        {5: [2, 17], 14: [2, 17], 15: [2, 17], 16: [2, 17], 19: [2, 17], 20: [2, 17], 22: [2, 17], 23: [2, 17], 24: [2, 17]},
        {5: [2, 18], 14: [2, 18], 15: [2, 18], 16: [2, 18], 19: [2, 18], 20: [2, 18], 22: [2, 18], 23: [2, 18], 24: [2, 18]},
        {18: [1, 61]},
        {18: [1, 62]},
        {18: [2, 21]},
        {18: [2, 26], 27: [2, 26], 29: [2, 26], 30: [2, 26], 31: [2, 26], 34: [2, 26]},
        {18: [2, 34], 34: [2, 34]},
        {35: [1, 59]},
        {21: 63, 27: [1, 67], 29: [1, 64], 30: [1, 65], 31: [1, 66], 34: [1, 26], 36: 25},
        {18: [2, 42], 27: [2, 42], 29: [2, 42], 30: [2, 42], 31: [2, 42], 34: [2, 42], 37: [2, 42]},
        {5: [2, 19], 14: [2, 19], 15: [2, 19], 16: [2, 19], 19: [2, 19], 20: [2, 19], 22: [2, 19], 23: [2, 19], 24: [2, 19]},
        {5: [2, 15], 14: [2, 15], 15: [2, 15], 16: [2, 15], 19: [2, 15], 20: [2, 15], 22: [2, 15], 23: [2, 15], 24: [2, 15]},
        {18: [2, 36], 34: [2, 36]},
        {18: [2, 37], 34: [2, 37]},
        {18: [2, 38], 34: [2, 38]},
        {18: [2, 39], 34: [2, 39]},
        {18: [2, 40], 34: [2, 40]}
    ], defaultActions: {16: [2, 1], 24: [2, 25], 38: [2, 23], 55: [2, 21]}, parseError: function (t, n) {
        throw new Error(t)
    }, parse: function (t) {
        function v(e) {
            r.length = r.length - 2 * e, i.length = i.length - e, s.length = s.length - e
        }

        function m() {
            var e;
            return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
        }

        var n = this, r = [0], i = [null], s = [], o = this.table, u = "", a = 0, f = 0, l = 0, c = 2, h = 1;
        this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc == "undefined" && (this.lexer.yylloc = {});
        var p = this.lexer.yylloc;
        s.push(p);
        var d = this.lexer.options && this.lexer.options.ranges;
        typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
        var g, y, b, w, E, S, x = {}, T, N, C, k;
        for (; ;) {
            b = r[r.length - 1];
            if (this.defaultActions[b])w = this.defaultActions[b]; else {
                if (g === null || typeof g == "undefined")g = m();
                w = o[b] && o[b][g]
            }
            if (typeof w == "undefined" || !w.length || !w[0]) {
                var L = "";
                if (!l) {
                    k = [];
                    for (T in o[b])this.terminals_[T] && T > 2 && k.push("'" + this.terminals_[T] + "'");
                    this.lexer.showPosition ? L = "Parse error on line " + (a + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") + ", got '" + (this.terminals_[g] || g) + "'" : L = "Parse error on line " + (a + 1) + ": Unexpected " + (g == 1 ? "end of input" : "'" + (this.terminals_[g] || g) + "'"), this.parseError(L, {text: this.lexer.match, token: this.terminals_[g] || g, line: this.lexer.yylineno, loc: p, expected: k})
                }
            }
            if (w[0]instanceof Array && w.length > 1)throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + g);
            switch (w[0]) {
                case 1:
                    r.push(g), i.push(this.lexer.yytext), s.push(this.lexer.yylloc), r.push(w[1]), g = null, y ? (g = y, y = null) : (f = this.lexer.yyleng, u = this.lexer.yytext, a = this.lexer.yylineno, p = this.lexer.yylloc, l > 0 && l--);
                    break;
                case 2:
                    N = this.productions_[w[1]][1], x.$ = i[i.length - N], x._$ = {first_line: s[s.length - (N || 1)].first_line, last_line: s[s.length - 1].last_line, first_column: s[s.length - (N || 1)].first_column, last_column: s[s.length - 1].last_column}, d && (x._$.range = [s[s.length - (N || 1)].range[0], s[s.length - 1].range[1]]), S = this.performAction.call(x, u, f, a, this.yy, w[1], i, s);
                    if (typeof S != "undefined")return S;
                    N && (r = r.slice(0, -1 * N * 2), i = i.slice(0, -1 * N), s = s.slice(0, -1 * N)), r.push(this.productions_[w[1]][0]), i.push(x.$), s.push(x._$), C = o[r[r.length - 2]][r[r.length - 1]], r.push(C);
                    break;
                case 3:
                    return!0
            }
        }
        return!0
    }}, t = function () {
        var e = {EOF: 1, parseError: function (t, n) {
            if (!this.yy.parser)throw new Error(t);
            this.yy.parser.parseError(t, n)
        }, setInput: function (e) {
            return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {first_line: 1, first_column: 0, last_line: 1, last_column: 0}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
        }, input: function () {
            var e = this._input[0];
            this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e;
            var t = e.match(/(?:\r\n?|\n).*/g);
            return t ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
        }, unput: function (e) {
            var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
            this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
            var r = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
            var i = this.yylloc.range;
            return this.yylloc = {first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t}, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]), this
        }, more: function () {
            return this._more = !0, this
        }, less: function (e) {
            this.unput(this.match.slice(e))
        }, pastInput: function () {
            var e = this.matched.substr(0, this.matched.length - this.match.length);
            return(e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
        }, upcomingInput: function () {
            var e = this.match;
            return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
        }, showPosition: function () {
            var e = this.pastInput(), t = (new Array(e.length + 1)).join("-");
            return e + this.upcomingInput() + "\n" + t + "^"
        }, next: function () {
            if (this.done)return this.EOF;
            this._input || (this.done = !0);
            var e, t, n, r, i, s;
            this._more || (this.yytext = "", this.match = "");
            var o = this._currentRules();
            for (var u = 0; u < o.length; u++) {
                n = this._input.match(this.rules[o[u]]);
                if (n && (!t || n[0].length > t[0].length)) {
                    t = n, r = u;
                    if (!this.options.flex)break
                }
            }
            if (t) {
                s = t[0].match(/(?:\r\n?|\n).*/g), s && (this.yylineno += s.length), this.yylloc = {first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1);
                if (e)return e;
                return
            }
            return this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text: "", token: null, line: this.yylineno})
        }, lex: function () {
            var t = this.next();
            return typeof t != "undefined" ? t : this.lex()
        }, begin: function (t) {
            this.conditionStack.push(t)
        }, popState: function () {
            return this.conditionStack.pop()
        }, _currentRules: function () {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
        }, topState: function () {
            return this.conditionStack[this.conditionStack.length - 2]
        }, pushState: function (t) {
            this.begin(t)
        }};
        return e.options = {}, e.performAction = function (t, n, r, i) {
            var s = i;
            switch (r) {
                case 0:
                    n.yytext.slice(-1) !== "\\" && this.begin("mu"), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1), this.begin("emu"));
                    if (n.yytext)return 14;
                    break;
                case 1:
                    return 14;
                case 2:
                    return n.yytext.slice(-1) !== "\\" && this.popState(), n.yytext.slice(-1) === "\\" && (n.yytext = n.yytext.substr(0, n.yyleng - 1)), 14;
                case 3:
                    return n.yytext = n.yytext.substr(0, n.yyleng - 4), this.popState(), 15;
                case 4:
                    return 24;
                case 5:
                    return 16;
                case 6:
                    return 20;
                case 7:
                    return 19;
                case 8:
                    return 19;
                case 9:
                    return 23;
                case 10:
                    return 23;
                case 11:
                    this.popState(), this.begin("com");
                    break;
                case 12:
                    return n.yytext = n.yytext.substr(3, n.yyleng - 5), this.popState(), 15;
                case 13:
                    return 22;
                case 14:
                    return 35;
                case 15:
                    return 34;
                case 16:
                    return 34;
                case 17:
                    return 37;
                case 18:
                    break;
                case 19:
                    return this.popState(), 18;
                case 20:
                    return this.popState(), 18;
                case 21:
                    return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\"/g, '"'), 29;
                case 22:
                    return n.yytext = n.yytext.substr(1, n.yyleng - 2).replace(/\\'/g, "'"), 29;
                case 23:
                    return n.yytext = n.yytext.substr(1), 27;
                case 24:
                    return 31;
                case 25:
                    return 31;
                case 26:
                    return 30;
                case 27:
                    return 34;
                case 28:
                    return n.yytext = n.yytext.substr(1, n.yyleng - 2), 34;
                case 29:
                    return"INVALID";
                case 30:
                    return 5
            }
        }, e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], e.conditions = {mu: {rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], inclusive: !1}, emu: {rules: [2], inclusive: !1}, com: {rules: [3], inclusive: !1}, INITIAL: {rules: [0, 1, 30], inclusive: !0}}, e
    }();
    return e.lexer = t, n.prototype = e, e.Parser = n, new n
}();
typeof require != "undefined" && typeof exports != "undefined" && (exports.parser = handlebars, exports.Parser = handlebars.Parser, exports.parse = function () {
    return handlebars.parse.apply(handlebars, arguments)
}, exports.main = function (t) {
    if (!t[1])throw new Error("Usage: " + t[0] + " FILE");
    var n, r;
    return typeof process != "undefined" ? n = require("fs").readFileSync(require("path").resolve(t[1]), "utf8") : n = require("file").path(require("file").cwd()).join(t[1]).read({charset: "utf-8"}), exports.parser.parse(n)
}, typeof module != "undefined" && require.main === module && exports.main(typeof process != "undefined" ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = handlebars, Handlebars.parse = function (e) {
    return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e)
}, Handlebars.print = function (e) {
    return(new Handlebars.PrintVisitor).accept(e)
}, Handlebars.logger = {DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3, log: function (e, t) {
}}, Handlebars.log = function (e, t) {
    Handlebars.logger.log(e, t)
}, function () {
    Handlebars.AST = {}, Handlebars.AST.ProgramNode = function (e, t) {
        this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t))
    }, Handlebars.AST.MustacheNode = function (e, t, n) {
        this.type = "mustache", this.escaped = !n, this.hash = t;
        var r = this.id = e[0], i = this.params = e.slice(1), s = this.eligibleHelper = r.isSimple;
        this.isHelper = s && (i.length || t)
    }, Handlebars.AST.PartialNode = function (e, t) {
        this.type = "partial", this.id = e, this.context = t
    };
    var e = function (e, t) {
        if (e.original !== t.original)throw new Handlebars.Exception(e.original + " doesn't match " + t.original)
    };
    Handlebars.AST.BlockNode = function (t, n, r, i) {
        e(t.id, i), this.type = "block", this.mustache = t, this.program = n, this.inverse = r, this.inverse && !this.program && (this.isInverse = !0)
    }, Handlebars.AST.ContentNode = function (e) {
        this.type = "content", this.string = e
    }, Handlebars.AST.HashNode = function (e) {
        this.type = "hash", this.pairs = e
    }, Handlebars.AST.IdNode = function (e) {
        this.type = "ID", this.original = e.join(".");
        var t = [], n = 0;
        for (var r = 0, i = e.length; r < i; r++) {
            var s = e[r];
            s === ".." ? n++ : s === "." || s === "this" ? this.isScoped = !0 : t.push(s)
        }
        this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = e.length === 1 && !this.isScoped && n === 0
    }, Handlebars.AST.DataNode = function (e) {
        this.type = "DATA", this.id = e
    }, Handlebars.AST.StringNode = function (e) {
        this.type = "STRING", this.string = e
    }, Handlebars.AST.IntegerNode = function (e) {
        this.type = "INTEGER", this.integer = e
    }, Handlebars.AST.BooleanNode = function (e) {
        this.type = "BOOLEAN", this.bool = e
    }, Handlebars.AST.CommentNode = function (e) {
        this.type = "comment", this.comment = e
    }
}(), Handlebars.Exception = function (e) {
    var t = Error.prototype.constructor.apply(this, arguments);
    for (var n in t)t.hasOwnProperty(n) && (this[n] = t[n]);
    this.message = t.message
}, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function (e) {
    this.string = e
}, Handlebars.SafeString.prototype.toString = function () {
    return this.string.toString()
}, function () {
    var e = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, t = /[&<>"'`]/g, n = /[&<>"'`]/, r = function (t) {
        return e[t] || "&amp;"
    };
    Handlebars.Utils = {escapeExpression: function (e) {
        return e instanceof Handlebars.SafeString ? e.toString() : e == null || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e
    }, isEmpty: function (e) {
        return typeof e == "undefined" ? !0 : e === null ? !0 : e === !1 ? !0 : Object.prototype.toString.call(e) === "[object Array]" && e.length === 0 ? !0 : !1
    }}
}(), Handlebars.Compiler = function () {
}, Handlebars.JavaScriptCompiler = function () {
}, function (e, t) {
    e.prototype = {compiler: e, disassemble: function () {
        var e = this.opcodes, t, n = [], r, i;
        for (var s = 0, o = e.length; s < o; s++) {
            t = e[s];
            if (t.opcode === "DECLARE")n.push("DECLARE " + t.name + "=" + t.value); else {
                r = [];
                for (var u = 0; u < t.args.length; u++)i = t.args[u], typeof i == "string" && (i = '"' + i.replace("\n", "\\n") + '"'), r.push(i);
                n.push(t.opcode + " " + r.join(" "))
            }
        }
        return n.join("\n")
    }, guid: 0, compile: function (e, t) {
        this.children = [], this.depths = {list: []}, this.options = t;
        var n = this.options.knownHelpers;
        this.options.knownHelpers = {helperMissing: !0, blockHelperMissing: !0, each: !0, "if": !0, unless: !0, "with": !0, log: !0};
        if (n)for (var r in n)this.options.knownHelpers[r] = n[r];
        return this.program(e)
    }, accept: function (e) {
        return this[e.type](e)
    }, program: function (e) {
        var t = e.statements, n;
        this.opcodes = [];
        for (var r = 0, i = t.length; r < i; r++)n = t[r], this[n.type](n);
        return this.isSimple = i === 1, this.depths.list = this.depths.list.sort(function (e, t) {
            return e - t
        }), this
    }, compileProgram: function (e) {
        var t = (new this.compiler).compile(e, this.options), n = this.guid++, r;
        this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
        for (var i = 0, s = t.depths.list.length; i < s; i++) {
            r = t.depths.list[i];
            if (r < 2)continue;
            this.addDepth(r - 1)
        }
        return n
    }, block: function (e) {
        var t = e.mustache, n = e.program, r = e.inverse;
        n && (n = this.compileProgram(n)), r && (r = this.compileProgram(r));
        var i = this.classifyMustache(t);
        i === "helper" ? this.helperMustache(t, n, r) : i === "simple" ? (this.simpleMustache(t), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("blockValue")) : (this.ambiguousMustache(t, n, r), this.opcode("pushProgram", n), this.opcode("pushProgram", r), this.opcode("pushLiteral", "{}"), this.opcode("ambiguousBlockValue")), this.opcode("append")
    }, hash: function (e) {
        var t = e.pairs, n, r;
        this.opcode("push", "{}");
        for (var i = 0, s = t.length; i < s; i++)n = t[i], r = n[1], this.accept(r), this.opcode("assignToHash", n[0])
    }, partial: function (e) {
        var t = e.id;
        this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
    }, content: function (e) {
        this.opcode("appendContent", e.string)
    }, mustache: function (e) {
        var t = this.options, n = this.classifyMustache(e);
        n === "simple" ? this.simpleMustache(e) : n === "helper" ? this.helperMustache(e) : this.ambiguousMustache(e), e.escaped && !t.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
    }, ambiguousMustache: function (e, t, n) {
        var r = e.id, i = r.parts[0];
        this.opcode("getContext", r.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("invokeAmbiguous", i)
    }, simpleMustache: function (e, t, n) {
        var r = e.id;
        r.type === "DATA" ? this.DATA(r) : r.parts.length ? this.ID(r) : (this.addDepth(r.depth), this.opcode("getContext", r.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
    }, helperMustache: function (e, t, n) {
        var r = this.setupFullMustacheParams(e, t, n), i = e.id.parts[0];
        if (this.options.knownHelpers[i])this.opcode("invokeKnownHelper", r.length, i); else {
            if (this.knownHelpersOnly)throw new Error("You specified knownHelpersOnly, but used the unknown helper " + i);
            this.opcode("invokeHelper", r.length, i)
        }
    }, ID: function (e) {
        this.addDepth(e.depth), this.opcode("getContext", e.depth);
        var t = e.parts[0];
        t ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
        for (var n = 1, r = e.parts.length; n < r; n++)this.opcode("lookup", e.parts[n])
    }, DATA: function (e) {
        this.options.data = !0, this.opcode("lookupData", e.id)
    }, STRING: function (e) {
        this.opcode("pushString", e.string)
    }, INTEGER: function (e) {
        this.opcode("pushLiteral", e.integer)
    }, BOOLEAN: function (e) {
        this.opcode("pushLiteral", e.bool)
    }, comment: function () {
    }, opcode: function (e) {
        this.opcodes.push({opcode: e, args: [].slice.call(arguments, 1)})
    }, declare: function (e, t) {
        this.opcodes.push({opcode: "DECLARE", name: e, value: t})
    }, addDepth: function (e) {
        if (isNaN(e))throw new Error("EWOT");
        if (e === 0)return;
        this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e))
    }, classifyMustache: function (e) {
        var t = e.isHelper, n = e.eligibleHelper, r = this.options;
        if (n && !t) {
            var i = e.id.parts[0];
            r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1)
        }
        return t ? "helper" : n ? "ambiguous" : "simple"
    }, pushParams: function (e) {
        var t = e.length, n;
        while (t--)n = e[t], this.options.stringParams ? (n.depth && this.addDepth(n.depth), this.opcode("getContext", n.depth || 0), this.opcode("pushStringParam", n.string)) : this[n.type](n)
    }, setupMustacheParams: function (e) {
        var t = e.params;
        return this.pushParams(t), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), t
    }, setupFullMustacheParams: function (e, t, n) {
        var r = e.params;
        return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.hash(e.hash) : this.opcode("pushLiteral", "{}"), r
    }};
    var n = function (e) {
        this.value = e
    };
    t.prototype = {nameLookup: function (e, n, r) {
        return/^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']"
    }, appendToBuffer: function (e) {
        return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"
    }, initializeBuffer: function () {
        return this.quotedString("")
    }, namespace: "Handlebars", compile: function (e, t, n, r) {
        this.environment = e, this.options = t || {}, Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!n, this.context = n || {programs: [], aliases: {}}, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {list: []}, this.compileStack = [], this.compileChildren(e, t);
        var i = e.opcodes, s;
        this.i = 0;
        for (o = i.length; this.i < o; this.i++)s = i[this.i], s.opcode === "DECLARE" ? this[s.name] = s.value : this[s.opcode].apply(this, s.args);
        return this.createFunctionContext(r)
    }, nextOpcode: function () {
        var e = this.environment.opcodes, t = e[this.i + 1];
        return e[this.i + 1]
    }, eat: function (e) {
        this.i = this.i + 1
    }, preamble: function () {
        var e = [];
        if (!this.isChild) {
            var t = this.namespace, n = "helpers = helpers || " + t + ".helpers;";
            this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), this.options.data && (n += " data = data || {};"), e.push(n)
        } else e.push("");
        this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
    }, createFunctionContext: function (e) {
        var t = this.stackVars.concat(this.registers.list);
        t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", "));
        if (!this.isChild) {
            var n = [];
            for (var r in this.context.aliases)this.source[1] = this.source[1] + ", " + r + "=" + this.context.aliases[r]
        }
        this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
        var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
        for (var s = 0, o = this.environment.depths.list.length; s < o; s++)i.push("depth" + this.environment.depths.list[s]);
        if (e)return i.push(this.source.join("\n  ")), Function.apply(this, i);
        var u = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
        return Handlebars.log(Handlebars.logger.DEBUG, u + "\n\n"), u
    }, blockValue: function () {
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        var e = ["depth0"];
        this.setupParams(0, e), this.replaceStack(function (t) {
            return e.splice(1, 0, t), t + " = blockHelperMissing.call(" + e.join(", ") + ")"
        })
    }, ambiguousBlockValue: function () {
        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
        var e = ["depth0"];
        this.setupParams(0, e);
        var t = this.topStack();
        e.splice(1, 0, t), this.source.push("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
    }, appendContent: function (e) {
        this.source.push(this.appendToBuffer(this.quotedString(e)))
    }, append: function () {
        var e = this.popStack();
        this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
    }, appendEscaped: function () {
        var e = this.nextOpcode(), t = "";
        this.context.aliases.escapeExpression = "this.escapeExpression", e && e.opcode === "appendContent" && (t = " + " + this.quotedString(e.args[0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
    }, getContext: function (e) {
        this.lastContext !== e && (this.lastContext = e)
    }, lookupOnContext: function (e) {
        this.pushStack(this.nameLookup("depth" + this.lastContext, e, "context"))
    }, pushContext: function () {
        this.pushStackLiteral("depth" + this.lastContext)
    }, resolvePossibleLambda: function () {
        this.context.aliases.functionType = '"function"', this.replaceStack(function (e) {
            return"typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
        })
    }, lookup: function (e) {
        this.replaceStack(function (t) {
            return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
        })
    }, lookupData: function (e) {
        this.pushStack(this.nameLookup("data", e, "data"))
    }, pushStringParam: function (e) {
        this.pushStackLiteral("depth" + this.lastContext), this.pushString(e)
    }, pushString: function (e) {
        this.pushStackLiteral(this.quotedString(e))
    }, push: function (e) {
        this.pushStack(e)
    }, pushLiteral: function (e) {
        this.pushStackLiteral(e)
    }, pushProgram: function (e) {
        e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
    }, invokeHelper: function (e, t) {
        this.context.aliases.helperMissing = "helpers.helperMissing";
        var n = this.lastHelper = this.setupHelper(e, t);
        this.register("foundHelper", n.name), this.pushStack("foundHelper ? foundHelper.call(" + n.callParams + ") " + ": helperMissing.call(" + n.helperMissingParams + ")")
    }, invokeKnownHelper: function (e, t) {
        var n = this.setupHelper(e, t);
        this.pushStack(n.name + ".call(" + n.callParams + ")")
    }, invokeAmbiguous: function (e) {
        this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
        var t = this.setupHelper(0, e), n = this.lastHelper = this.nameLookup("helpers", e, "helper");
        this.register("foundHelper", n);
        var r = this.nameLookup("depth" + this.lastContext, e, "context"), i = this.nextStack();
        this.source.push("if (foundHelper) { " + i + " = foundHelper.call(" + t.callParams + "); }"), this.source.push("else { " + i + " = " + r + "; " + i + " = typeof " + i + " === functionType ? " + i + ".apply(depth0) : " + i + "; }")
    }, invokePartial: function (e) {
        var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
        this.options.data && t.push("data"), this.context.aliases.self = "this", this.pushStack("self.invokePartial(" + t.join(", ") + ");")
    }, assignToHash: function (e) {
        var t = this.popStack(), n = this.topStack();
        this.source.push(n + "['" + e + "'] = " + t + ";")
    }, compiler: t, compileChildren: function (e, t) {
        var n = e.children, r, i;
        for (var s = 0, o = n.length; s < o; s++) {
            r = n[s], i = new this.compiler, this.context.programs.push("");
            var u = this.context.programs.length;
            r.index = u, r.name = "program" + u, this.context.programs[u] = i.compile(r, t, this.context)
        }
    }, programExpression: function (e) {
        this.context.aliases.self = "this";
        if (e == null)return"self.noop";
        var t = this.environment.children[e], n = t.depths.list, r, i = [t.index, t.name, "data"];
        for (var s = 0, o = n.length; s < o; s++)r = n[s], r === 1 ? i.push("depth0") : i.push("depth" + (r - 1));
        return n.length === 0 ? "self.program(" + i.join(", ") + ")" : (i.shift(), "self.programWithDepth(" + i.join(", ") + ")")
    }, register: function (e, t) {
        this.useRegister(e), this.source.push(e + " = " + t + ";")
    }, useRegister: function (e) {
        this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
    }, pushStackLiteral: function (e) {
        return this.compileStack.push(new n(e)), e
    }, pushStack: function (e) {
        return this.source.push(this.incrStack() + " = " + e + ";"), this.compileStack.push("stack" + this.stackSlot), "stack" + this.stackSlot
    }, replaceStack: function (e) {
        var t = e.call(this, this.topStack());
        return this.source.push(this.topStack() + " = " + t + ";"), "stack" + this.stackSlot
    }, nextStack: function (e) {
        var t = this.incrStack();
        return this.compileStack.push("stack" + this.stackSlot), t
    }, incrStack: function () {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot
    }, popStack: function () {
        var e = this.compileStack.pop();
        return e instanceof n ? e.value : (this.stackSlot--, e)
    }, topStack: function () {
        var e = this.compileStack[this.compileStack.length - 1];
        return e instanceof n ? e.value : e
    }, quotedString: function (e) {
        return'"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
    }, setupHelper: function (e, t) {
        var n = [];
        this.setupParams(e, n);
        var r = this.nameLookup("helpers", t, "helper");
        return{params: n, name: r, callParams: ["depth0"].concat(n).join(", "), helperMissingParams: ["depth0", this.quotedString(t)].concat(n).join(", ")}
    }, setupParams: function (e, t) {
        var n = [], r = [], i, s, o;
        n.push("hash:" + this.popStack()), s = this.popStack(), o = this.popStack();
        if (o || s)o || (this.context.aliases.self = "this", o = "self.noop"), s || (this.context.aliases.self = "this", s = "self.noop"), n.push("inverse:" + s), n.push("fn:" + o);
        for (var u = 0; u < e; u++)i = this.popStack(), t.push(i), this.options.stringParams && r.push(this.popStack());
        return this.options.stringParams && n.push("contexts:[" + r.join(",") + "]"), this.options.data && n.push("data:data"), t.push("{" + n.join(",") + "}"), t.join(", ")
    }};
    var r = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), i = t.RESERVED_WORDS = {};
    for (var s = 0, o = r.length; s < o; s++)i[r[s]] = !0;
    t.isValidJavaScriptVariableName = function (e) {
        return!t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
    }
}(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function (e, t) {
    t = t || {};
    var n = Handlebars.parse(e), r = (new Handlebars.Compiler).compile(n, t);
    return(new Handlebars.JavaScriptCompiler).compile(r, t)
}, Handlebars.compile = function (e, t) {
    function r() {
        var n = Handlebars.parse(e), r = (new Handlebars.Compiler).compile(n, t), i = (new Handlebars.JavaScriptCompiler).compile(r, t, undefined, !0);
        return Handlebars.template(i)
    }

    t = t || {};
    var n;
    return function (e, t) {
        return n || (n = r()), n.call(this, e, t)
    }
}, Handlebars.VM = {template: function (e) {
    var t = {escapeExpression: Handlebars.Utils.escapeExpression, invokePartial: Handlebars.VM.invokePartial, programs: [], program: function (e, t, n) {
        var r = this.programs[e];
        return n ? Handlebars.VM.program(t, n) : r ? r : (r = this.programs[e] = Handlebars.VM.program(t), r)
    }, programWithDepth: Handlebars.VM.programWithDepth, noop: Handlebars.VM.noop};
    return function (n, r) {
        return r = r || {}, e.call(t, Handlebars, n, r.helpers, r.partials, r.data)
    }
}, programWithDepth: function (e, t, n) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function (n, i) {
        return i = i || {}, e.apply(this, [n, i.data || t].concat(r))
    }
}, program: function (e, t) {
    return function (n, r) {
        return r = r || {}, e(n, r.data || t)
    }
}, noop: function () {
    return""
}, invokePartial: function (e, t, n, r, i, s) {
    var o = {helpers: r, partials: i, data: s};
    if (e === undefined)throw new Handlebars.Exception("The partial " + t + " could not be found");
    if (e instanceof Function)return e(n, o);
    if (!Handlebars.compile)throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode");
    return i[t] = Handlebars.compile(e, {data: s !== undefined}), i[t](n, o)
}}, Handlebars.template = Handlebars.VM.template, define("handlebars", function () {
}), UD.API = {version: "api-1.1", call: function (e, t) {
    var n = {};
    return $.cookie("client_id") && (n["X-Udemy-Client-Id"] = $.cookie("client_id")), $.cookie("access_token") && (n["X-Udemy-Bearer-Token"] = $.cookie("access_token")), $.ajax($.extend({url: UD.Config.http + this.version + e, headers: n, dataType: "json"}, t))
}, regularCall: function (e, t) {
    return $.ajax($.extend({url: UD.Config.http + e}, t))
}}, UD.API.Lecture = {create: function (e, t, n) {
    UD.API.call("/lectures/", {type: "POST", data: e, success: t, error: n})
}, read: function (e, t, n, r) {
    UD.API.call("/lectures/" + e, {type: "GET", data: t, success: n, error: r})
}, update: function (e, t, n, r) {
    t.method = "PUT", t.disableMemcacheGets = 1, UD.API.call("/lectures/" + e, {type: "POST", data: t, success: n, error: r})
}, destroy: function (e, t, n) {
    UD.API.call("/lectures/" + e, {type: "POST", data: {method: "DELETE"}, success: t, error: n})
}}, UD.API.Quiz = {create: function (e, t, n) {
    UD.API.call("/quizzes/", {type: "POST", data: e, success: t, error: n})
}, read: function (e, t, n, r) {
    UD.API.call("/quizzes/" + e, {type: "GET", data: t, success: n, error: r})
}, update: function (e, t, n, r) {
    t.method = "PUT", t.disableMemcaceGets = 1, UD.API.call("/quizzes/" + e, {type: "POST", data: t, success: n, error: r})
}, destroy: function (e, t, n) {
    UD.API.call("/quizzes/" + e, {type: "POST", data: {method: "DELETE"}, success: t, error: n})
}}, UD.API.Chapter = {create: function (e, t, n) {
    UD.API.call("/chapters/", {type: "POST", data: e, success: t, error: n})
}, read: function (e, t, n, r) {
    UD.API.call("/chapters/" + e, {type: "GET", data: t, success: n, error: r})
}, update: function (e, t, n, r) {
    t.method = "PUT", t.disableMemcacheGets = 1, UD.API.call("/chapters/" + e, {type: "POST", data: t, success: n, error: r})
}, destroy: function (e, t, n) {
    UD.API.call("/chapters/" + e, {type: "POST", data: {method: "DELETE"}, success: t, error: n})
}}, UD.API.Question = {create: function (e, t, n) {
    UD.API.call("/questions/", {type: "POST", data: e, success: t, error: n})
}, read: function (e, t, n, r) {
    UD.API.call("/questions/" + e, {type: "GET", data: t, success: n, error: r})
}, update: function (e, t, n, r) {
    t.method = "PUT", t.disableMemcacheGets = 1, UD.API.call("/questions/" + e, {type: "POST", data: t, success: n, error: r})
}, destroy: function (e, t, n) {
    UD.API.call("/questions/" + e, {type: "POST", data: {method: "DELETE"}, success: t, error: n})
}}, UD.API.Answer = {create: function (e, t, n) {
    UD.API.call("/answers/", {type: "POST", data: e, success: t, error: n})
}, read: function (e, t, n, r) {
    UD.API.call("/answers/" + e, {type: "GET", data: t, success: n, error: r})
}, update: function (e, t, n, r) {
    t.method = "PUT", t.disableMemcacheGets = 1, UD.API.call("/answers/" + e, {type: "POST", data: t, success: n, error: r})
}, destroy: function (e, t, n) {
    UD.API.call("/answers/" + e, {type: "POST", data: {method: "DELETE"}, success: t, error: n})
}}, UD.API.Asset = {read: function (e, t, n, r) {
    UD.API.call("/assets/" + e, {type: "GET", data: t, success: n, error: r})
}, update: function (e, t, n, r) {
    t.method = "PUT", t.disableMemcacheGets = 1, UD.API.call("/assets/" + e, {type: "POST", data: t, success: n, error: r})
}, destroy: function (e, t, n) {
    UD.API.call("/assets/" + e, {type: "POST", data: {method: "DELETE"}, success: t, error: n})
}}, UD.API.Stat = {increment: function (e, t, n) {
    UD.API.call("/stats/" + e + "/increment", {type: "POST", success: t, error: n})
}, timing: function (e, t, n, r) {
    UD.API.call("/stats/" + e + "/timing", {type: "POST", data: {time: t}, success: n, error: r})
}}, define("ud.api", function () {
}), define("ud.utils", ["jquery", "init", "ud.page"], function ($) {
    UD.Utils = UD.Utils || {}, UD.Utils.Object = {mergeArrays: function (e, t, n) {
        for (var r = 0; r < t.length; ++r)t[r] !== null && t[r] !== undefined && !isNaN(t[r]) && (e[r] = t[r]);
        return e
    }, merge: function (e, t, n, r) {
        n = n === !1 ? !1 : !0, e = n ? this.clone(e) : e;
        var i, s;
        for (var o in t) {
            i = e[o], s = t[o];
            if (r && i !== undefined)continue;
            if (typeof i != "object" || i instanceof Array || i instanceof RegExp || i === null)if (i instanceof Array && s instanceof Array)for (var u = 0, a = s.length; u < a; ++u)i[u] = s[u]; else typeof s != "object" || s instanceof Array || s instanceof RegExp || s === null ? e[o] = s : e[o] = this.clone(s); else typeof s != "object" || s instanceof Array || s instanceof RegExp || s === null ? e[o] = s : e[o] = arguments.callee.call(this, i, s, n, r)
        }
        return e
    }, exclusiveMerge: function (e, t, n) {
        return this.merge(e, t, n, !0)
    }, loadScript: function (e, t) {
        var n = document.createElement("script");
        n.type = "text/javascript", n.readyState ? n.onreadystatechange = function () {
            if (n.readyState == "loaded" || n.readyState == "complete")n.onreadystatechange = null, t()
        } : n.onload = function () {
            t()
        }, n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
    }, clone: function (obj) {
        var newObj = {}, o;
        for (var i in obj)o = obj[i], o instanceof Array ? newObj[i] = o.concat() : o instanceof RegExp ? newObj[i] = eval(o.toString()) : o === undefined || o === null ? newObj[i] = o : typeof o == "object" ? newObj[i] = arguments.callee.call(this, o) : newObj[i] = o;
        return newObj
    }}, UD.Utils.connect = function (e, t, n, r) {
        if (e === undefined || e === null)e = function () {
        };
        arguments.length == 2 ? (n = t, t = null) : arguments.length == 3 && (r = n, n = t, t = "__context__");
        if (e && e.__connectedFunctions)return e.__connectedFunctions.push({func: n, context: r}), e;
        var i = function () {
            t = t == "__context__" ? this : t, e && e.apply(t, arguments);
            if (i.__connectedFunctions) {
                var n;
                for (var r = 0; r < i.__connectedFunctions.length; r++)n = i.__connectedFunctions[r], n.func.apply(n.context, arguments)
            }
        };
        return i.__connectedFunctions = [
            {func: n, context: r}
        ], i
    }, UD.Utils.escapeHTML = function (e) {
        return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }, UD.Utils.deEscapeHTML = function (e) {
        return e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    }, UD.Utils.revertXSS = function (e) {
        return $("<div/>").html(e).text()
    }, UD.Utils.cleanHTML = function (e) {
        return e = e.replace(/<head[^>]*?>.*?<\/head>/g, "").replace(/<style[^>]*?>.*?<\/style>/g, "").replace(/<script[^>]*?.*?<\/script>/g, "").replace(/<object[^>]*?.*?<\/object>/g, "").replace(/<embed[^>]*?.*?<\/embed>/g, "").replace(/<applet[^>]*?.*?<\/applet>/g, "").replace(/<noframes[^>]*?.*?<\/noframes>/g, "").replace(/<noscript[^>]*?.*?<\/noscript>/g, "").replace(/<noembed[^>]*?.*?<\/noembed>/g, "").replace(/&nbsp;/g, " ").replace(/<br[^>]+>/g, "\n").replace(/<([^>]*)>/g, "").replace(/\\n\\r/g, " ").replace(/\\n/g, " ").replace(/\\r/g, " "), e
    }, UD.Utils.normalizeText = function (e) {
        return e = e.replace(/ /, "").replace(/\\b/i, "").replace(/\\f/i, "").replace(/\\n/i, "").replace(/\\O/i, "").replace(/\\r/, "").replace(/\\t/i, "").replace(/\\v/i, "").replace(/\\/i, "").replace(/\\ddd/, "").replace(/\\xdd/, "").replace(/\\udddd/, ""), $.trim(e).toLowerCase()
    }, UD.Utils.cleanup = function (e) {
        return e = e.replace(/[\s-\u0001-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007f\u02b0-\u036f]/g, "").replace(/[\u00c0-\u00c6\u00e0-\u00e6\u0100-\u0105\u018f\u01cd\u01ce\u01dd-\u01e3\u01fa-\u01fd\u0200-\u0203\u0226\u0227\u0259\u1e00\u1e01\u1ea0-\u1eb7]/g, "a").replace(/[\u00c7\u00e7\u0106-\u010d\u1e08\u1e09]/g, "c").replace(/[\u00d0\u00f0\u010e-\u0111\u1e0a-\u1e13]/g, "d").replace(/[\u00c8-\u00cb\u00e8-\u00eb\u0112-\u011b\u018e\u018f\u01dd\u0204-\u0207\u0228\u0229\u1e14-\u1e1d\u1eb8-\u1ec7]/g, "e").replace(/[\u011c-\u0123\u01e4-\u01e7\u01f4\u01f5\u1e20\u1e21]/g, "g").replace(/[\u00cc-\u00cf\u00ec-\u00ef\u0128-\u0131\u01cf\u01d0\u0208-\u020b\u1e2c-\u1e2f\u1ec8-\u1ecb]/g, "i").replace(/[\u0136-\u0138\u01e8\u01e9\u1e30-\u1e35]/g, "k").replace(/[\u0139-\u0142\u1e36-\u1e3d]/g, "l").replace(/[\u00d1\u00f1\u0143-\u014b\u01f8\u01f9\u1e44-\u1e4b]/g, "n").replace(/[\u00d2-\u00d6\u00d8\u00f2-\u00f6\u00f8\u014c-\u0153\u01a0\u01a1\u01d1\u01d2\u01ea-\u01ed\u01fe\u01ff\u020c-\u020f\u022a-\u0231\u1e4c-\u1e53\u1ecc-\u1ee3]/g, "o").replace(/[\u0154-\u0159\u1e58-\u1e5f]/g, "r").replace(/[\u00df\u015a-\u0161\u1e60-\u1e69]/g, "s").replace(/[\u0162-\u0167\u1e6a-\u1e71]/g, "t").replace(/[\u00d9-\u00dc\u00f9-\u00fc\u0168-\u0173\u01af\u01b0\u01d3-\u01dc\u0214-\u0217\u1e72-\u1e7b\u1ee4-\u1ef1]/g, "u").replace(/[\u00dd\u00fd\u00ff\u0176-\u0178\u1ef2-\u1ef9]/g, "y").replace(/[\u0179-\u017e\u01b5\u01b6\u1e90-\u1e95]/g, "z"), $.trim(e).toLowerCase()
    }, UD.Utils.generateRandomUpperCaseString = function (e) {
        var t = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ", n = "", r = t.length - 1;
        for (var i = 0; i < e; i++) {
            var s = Math.floor(Math.random() * r);
            n += t[s]
        }
        return n
    }, UD.Utils.getFileExtension = function (e) {
        var t = e.match(/\.([^\.\/]+)$/);
        return t.length >= 2 ? t[1] : null
    }, UD.Utils.parseLinkHeader = function (e) {
        var t = {}, n, r = /<\s*"?(.*?)"?\s*>\s*;\s*rel\s*=\s*"(\w+)"/gi;
        while ((n = r.exec(e)) !== null)t[n[2]] = n[1];
        return t
    }, UD.Utils.Feedback = {fromText: function (e, t) {
        t = t || "info", e && ($("header>div.feedbacks-bar").remove(), $("header").append($("<div>", {"class": "feedbacks-bar ud-page", "data-page-name": "feedbacks-bar"}).append($("<div>", {"class": "feedback-bar feedback-type-" + t}).append($("<div>", {"class": "feedback-container"}).append($("<p>", {"class": "message", text: e}))))), $(".feedbacks-bar").ud_page())
    }, fromJqXHR: function (e, t, n) {
        if (typeof n.getResponseHeader == "function")UD.Utils.Feedback.fromText(n.getResponseHeader("X-UI-Message"), n.getResponseHeader("X-UI-Message-Type")); else {
            var r = $.parseJSON(e.responseText);
            typeof r.error != "undefined" && typeof r.error.details == "string" && UD.Utils.Feedback.fromText(r.error.details, "error")
        }
    }}, UD.Utils.Form = {fillErrors: function (e, t) {
        var n = $("<span>", {"class": "error-msg inside-error-msg", text: "required"}), r = $("<div>", {"class": "form-tooltip black-tooltip medium arrow-left error-msg outside-error-msg"}), i = $("<span>", {"class": "arrow"});
        e.find(".error-msg").remove(), e.find(".field-error").removeClass("field-error"), e.find("> .form-errors.black-tooltip").addClass("none"), e.find("> .form-errors.black-tooltip").empty();
        var s = jQuery.parseJSON(t.responseText);
        if (s.error && s.error.details) {
            var o = s.error.details;
            o.error && (e.find("> .form-errors.black-tooltip").text(o.error), e.find("> .form-errors.black-tooltip").removeClass("none"));
            if (o.invalid_items)for (var u in o.invalid_items) {
                var a = o.invalid_items[u];
                u = $.camelCase(u.replace(/_/gi, "-"));
                var f = e.find("#form-item-" + u + " > .tooltip-reference"), l = f.find("#" + u);
                f.addClass("field-error"), !a && (l.is('input[type="text"]') || l.is("textarea")) ? f.append(n.clone()) : a && f.append(r.clone().text(a).append(i.clone()))
            }
        } else s.error && s.error.message && (e.find("> .form-errors.black-tooltip").text(s.error.message), e.find("> .form-errors.black-tooltip").removeClass("none"))
    }}
}), define("ud.string", ["jquery", "ud.package.default"], function (e) {
    UD.String = {revertXSS: function (e) {
        return e = e.replace(/&amp;/g, "&"), e = e.replace(/&quot;/g, '"'), e = e.replace(/&#039;/g, "'"), e = e.replace(/&lt;/g, "<"), e = e.replace(/&gt;/g, ">"), e
    }, addUrlParameters: function (t, n) {
        var r = e.param(n);
        return t.indexOf("?") >= 0 ? t + "&" + r : t + "?" + r
    }, toReadableTitle: function (e) {
        return e.replace(/\.[^\.]+$/, "").replace(/[A-Z][a-z]+/g, " $& ").replace(/[_\-\+\.]/g, " ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "").replace(/(^|\s)([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase()
        })
    }, escapeAllWhiteSpace: function (t) {
        var n = e.trim(t);
        return n.gsub(/\s+/, "")
    }}
}), define("ud.jqelement", ["jquery", "ud.package.default"], function ($) {
    $.widget("ud.ud_jqelement", {options: {}, _create: function () {
        var matches = this.element.attr("class").match(/ud-jq-(\w*)\b/);
        if (matches.length > 1) {
            var uiName = matches[1], params = {};
            $.each(this.element.data(), function (i, e) {
                typeof e != "object" && (typeof e == "string" && e.indexOf("new Function") == 0 ? params[i] = eval(e) : params[i] = e)
            }), this.element[uiName](params), this.element.show()
        }
    }, destroy: function () {
    }})
}), define("ud.loader", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_loader", {options: {url: null}, _create: function () {
        for (var e in this.options)typeof this.element.data(e.toLowerCase()) != "undefined" && (this.options[e] = this.element.data(e.toLowerCase()));
        this.addCallback("onBeforeFormSubmit", this.options.onBeforeFormSubmit), this.addCallback("onBeforeLoad", this.options.onBeforeLoad), this.addCallback("onLoad", this.options.onLoad), this.addCallback("onContentRendered", this.options.onContentRendered), this.addCallback("onJson", this.options.onJson), this.onParseElements = UD.Utils.Object.exclusiveMerge(this.options.onParseElements || {}, this.onParseElements), this.onParseCommands = UD.Utils.Object.exclusiveMerge(this.options.onParseCommands || {}, this.onParseCommands), this.currentAjaxRequest = null, this.currentAjaxRequest = null, this.jsonInstructions = null, this.currentUrl = null, this.isLoading = !1, this.isBlocked = !1, this.parser(), this.load(this.options.url, this.element)
    }, destroy: function () {
    }, addCallback: function (e, t) {
        t && (this[e] = UD.Utils.connect(this[e], t))
    }, onContentRendered: function () {
        this.element.ud_initialize(), e.fancybox.update()
    }, onJson: function (e) {
    }, onLoad: function (e) {
    }, onParseElements: {form: function (e, t) {
        if (e.closest(".external-form").size())return;
        e.submit(function () {
            try {
                typeof tinyMCE != "undefined" && tinyMCE.triggerSave(), this.submitForm(e)
            } catch (t) {
            }
            return!1
        }.context(this))
    }, select: function (e, t) {
    }, a: function (t, n) {
        if (t.processed || t.attr("rel") == "nofollow" || t.attr("target") == "_blank")return;
        if (e(t).data("external-link"))return;
        t.processed = !0, t.click(function (e) {
            t.attr("href") && !/^javascript/.test(t.attr("href")) && (e.preventDefault && e.preventDefault(), window.event && (window.event.returnValue = !1), this.load(t.attr("href"), n))
        }.context(this))
    }}, onParseCommands: {"div.run-command.alert": function (t, n) {
        alert(e(t).html())
    }, "div.run-command.hide-info-section": function (t, n) {
        e("info-section").hide()
    }, "div.run-command.command-reload": function (t, n) {
        var r = e(t).find(".time") ? parseFloat(e(t).find(".time").html()) : 0, i = e(t).find(".url").html() || this.currentUrl;
        setTimeout(function () {
            this.load.context(this, i, n)
        }.context(this), r)
    }, "div.run-command.close-popup": function (t, n) {
        e.ud.ud_popup.prototype.close(!0)
    }, "div.run-command.refresh-page": function (e, t) {
        window.location.reload()
    }, "div.run-command.redirect": function (t, n) {
        window.location.href = e(t).data("url")
    }, "div.run-command.reload-page-element": function (e, t) {
    }}, parser: function (t) {
        t = t ? e(t) : this.element;
        if (this.parseElements(t) === !0)return!0;
        if (this.parseCommands(t) === !0)return!0
    }, parseElements: function (t) {
        var n = !1;
        for (var r in this.onParseElements)t.find(r).each(function (s, o) {
            try {
                if (this.onParseElements[r].call(this, e(o), t) === !0)throw n = !0, $break
            } catch (u) {
                console && console.log("error: " + u)
            }
        }.context(this));
        return n
    }, parseCommands: function (e) {
        var t = !1;
        for (var n in this.onParseCommands)try {
            e.find(n).each(function (r, s) {
                if (this.onParseCommands[n].call(this, s, e) === !0)throw t = !0, $break
            }.context(this))
        } catch (r) {
            console && console.log("error:" + r)
        }
        return t
    }, submitForm: function (t, n) {
        if (this.isBlocked)return;
        if (this.onBeforeFormSubmit && this.onBeforeFormSubmit(t) === !0)return!0;
        if (this.onBeforeLoad && this.onBeforeLoad(n) === !0)return!0;
        var r = t.serialize();
        r += "&displayType=ajax", this.currentAjaxRequest = e.ajax({url: t.attr("action"), method: "post", data: r, success: function (e, t, r) {
            this._loadHandler(n || this.element, e)
        }.context(this)}), this.showLoader(), this.isLoading = !0
    }, isActive: function () {
        return this.isLoading
    }, deactivate: function () {
        this.isBlocked = !0, this.isLoading && (this.currentAjaxRequest && this.currentAjaxRequest.abort && this.currentAjaxRequest.abort(), this.isLoading = !1)
    }, load: function (t, n) {
        if (!t || this.isBlocked)return;
        if (this.onBeforeLoad && this.onBeforeLoad(n, t) === !0)return!0;
        this.showLoader(n), this.currentUrl = t, this.currentAjaxRequest = e.ajax({url: t, data: {displayType: "ajax"}, success: function (e, t, r) {
            this._loadHandler(n || this.element, e)
        }.context(this)}), this.isLoading = !0
    }, _loadHandler: function (e, t) {
        if (this.isBlocked)return;
        this.isLoading = !1;
        var n = t;
        if (this.onLoad) {
            var r = this.onLoad(n, e);
            if (r === !0)return!0;
            typeof r == "string" && (n = r)
        }
        this._htmlRenderer(e, n);
        if (this.onContentRendered && this.onContentRendered(e, n) === !0)return!0;
        this.parser(e)
    }, _htmlRenderer: function (e, t) {
        e.html(t)
    }, showLoader: function (e) {
        e = e || this.element;
        var t = null;
        e.find(".inline-loader-holder").each(function (e, n) {
            throw t = n, $break
        }), t = t || e, $content = this.getLoaderContent(t.width(), t.height()), t.html($content)
    }, getLoaderContent: function (e, t) {
        return'<div style="background-color: white; margin: 0px; padding: 0px; width: ' + e + "px; height: " + t + 'px;">' + '<span class="ajax-loader-small" style="top:50%;"></span>' + "</div>"
    }})
}), define("ud.popup", ["jquery", "ud.package.default", "ud.loader"], function (e) {
    e.widget("ud.ud_popup", {options: {autoOpen: !1, type: "ajax", enableLoader: !1, requireLogin: !1, closeable: !0, scrolling: "auto", width: "auto", height: "auto", minWidth: 0, minHeight: 0, autoDimensions: !0, autoCenter: !0, padding: 0, autoSize: !0, fitToView: !1, href: null, wrapCSS: ""}, _create: function () {
        for (var t in this.options)typeof this.element.data(t.toLowerCase()) != "undefined" && (this.options[t] = this.element.data(t.toLowerCase()));
        this.options.closeable || (this.options.closeBtn = !1, this.options.modal = !0);
        if (typeof(this.options.href || this.element.attr("href")) != "string") {
            this.destroy();
            return
        }
        var n = e.extend({type: this.options.type, beforeClose: function () {
            e("#fancybox-overlay").addClass("noopacity")
        }, beforeShow: function () {
            window.scrollPosition = [self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop];
            var e = jQuery("html");
            window.scrollTo(scrollPosition[0], scrollPosition[1])
        }, afterClose: function () {
            var e = jQuery("html");
            window.scrollTo(window.scrollPosition[0], window.scrollPosition[1])
        }.context(this), afterShow: function () {
            if (this.options.type == "ajax") {
                var t = e(".fancybox-inner");
                t.ud_initialize(), this.options.enableLoader && t.ud_loader()
            }
        }.context(this)}, this.options);
        this.options.type == "ajax" && (this.options.requireLogin ? n.href = UD.Config.link("join", "signup-popup", {displayType: "ajax", showSkipButton: 1, returnUrlAfterLogin: this.element.attr("href")}) : n.href = this.attachAjax(this.options.href || this.element.attr("href"))), this.element.fancybox(n), this.options.autoOpen && (this.element.hide(), this.element.trigger("click"))
    }, destroy: function () {
    }, attachAjax: function (e) {
        if (e === null)return"";
        if (e.indexOf("&displayType=ajax") == -1 && e.indexOf("?displayType=ajax") == -1) {
            var t = "?";
            return e.indexOf("?") != -1 && (t = "&"), e + t + "displayType=ajax"
        }
        return e
    }, open: function (t) {
        t.href && (t.href = this.attachAjax(t.href)), e.fancybox.open(e.extend({type: "ajax", minHeight: 20}, t))
    }, close: function () {
        e.fancybox.close(!0)
    }})
}), define("ud.notifications", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_notifications", {currentRequest: null, options: {}, notificationsData: null, currentPage: 1, _create: function () {
        for (var t in this.options)typeof this.element.data(t.toLowerCase()) != "undefined" && (this.options[t] = this.element.data(t.toLowerCase()));
        e(document).delegate(this.element, "notificationsBarOpened", e.proxy(this.notificationsBarOpenedHandler, this)), e(this.element).delegate(".null", "click", function (e) {
            return e.preventDefault(), !1
        }), e(this.element).delegate("li:not(.null)", "click", function (e) {
            e.stopPropagation()
        }), this.loadAndRenderUnreadNotificationsCount()
    }, loadAndRenderUnreadNotificationsCount: function () {
        this.renderUnreadNotificationsCount(this.element.data("count"))
    }, renderUnreadNotificationsCount: function (t) {
        var n = parseInt(t);
        if (n) {
            var r = e(".count", this.element);
            r.html(t), r.removeClass("none")
        }
    }, handleLoadAndRenderUnreadNotificationsCountError: function () {
        console && console.log("handleLoadAndRenderUnreadNotificationsCountError")
    }, notificationsBarOpenedHandler: function () {
        this.notificationsData == null ? this.loadAndRenderNotifications() : this.saveAndRenderNotifications(this.notificationsData)
    }, loadAndRenderNotifications: function () {
        UD.API.call("/newsfeed/notifications", {type: "GET", data: {page: 1}, success: function (e) {
            this.saveAndRenderNotifications(e)
        }.context(this), error: e.proxy(this.handleLoadNotificationsError, this)})
    }, saveAndRenderNotifications: function (t) {
        this.notificationsData = t, window.nd = t, this.loadingData = !1, $countElem = e(".count", this.element);
        var n = parseInt($countElem.html());
        window.co = n, $countElem.addClass("none"), $countElem.html("0");
        var r = "";
        if (t["data"].length == 0)r = this.renderNoNotifications(); else for (var i = 0; i < t.data.length; i++) {
            var s = i + 1 < n, o = this.renderNotification(t.data[i], s);
            r += o
        }
        e(this.element).find("ul").html(r), e.each(e("time", this.element), function (t, n) {
            var r = e(n), i = r.data("redistimestamp"), s = Math.floor(i / 1e3), o = moment(s);
            r.html(o.fromNow())
        })
    }, renderNoNotifications: function () {
        var t = e("#noNotificationsFoundTemplate").html();
        return t
    }, renderNotification: function (e, t) {
        var n = "";
        return n = this.commonNotificationRenderer(e), t, n
    }, commonNotificationRenderer: function (t) {
        window.xx = t;
        var n = e("#" + t.aggregated_story.aggregated_values.template_id).html(), r = Handlebars.compile(n);
        return r(t)
    }, handleLoadNotificationsError: function () {
        console && console.log("handleLoadNotificationsError")
    }})
}), define("ud.search", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_search", {options: {}, _create: function () {
        var t = this;
        for (var n in this.options)typeof this.element.data(n.toLowerCase()) != "undefined" && (this.options[n] = this.element.data(n.toLowerCase()));
        this._initHandlebarsTemplates(), e("#quick-search").length && (e("#quick-search").autocomplete({source: function (t, n) {
            e.ajax({url: "/search/quick-search.html", data: t, dataType: "json", type: "post", success: function (r) {
                var i = [];
                for (var s = 0; s < r.length; s++)r[s].category == "course" && i.push(r[s].id);
                UD.API.call("/discover/log/view", {type: "POST", data: {page: "", ids: i.join(","), context: "inline-search", subcontext: t.term}, success: function (t) {
                    e(".ui-autocomplete .ui-menu-item a[data-cat=course]").each(function (n, r) {
                        var i = e(r).attr("href"), s = t[e(r).data("id")], o = (new Uri(i)).addQueryParam("dtcode", s).toString();
                        e(r).attr("href", o)
                    })
                }}), n(r)
            }})
        }, minLength: 2, delay: 750, position: {my: "left top", at: "left bottom", of: e("#quick-search"), offset: "-155 10"}, search: function () {
            var t = e.trim(e("#quick-search").val());
            if (!t.length)return!1
        }, open: function (t, n) {
            params = {moreSearchURL: "/courses/search?q=" + e("#quick-search").val(), searchTerm: e("#quick-search").val(), totalItemsFound: e(".ui-autocomplete:visible li").size()}, e(".ui-autocomplete:visible").append(this.searchFooterTemplate(params)), e(".search-more-link").live("click", function () {
                window.location = e(this).attr("href")
            }), e("a:[data-cat=user]:first").each(function (t, n) {
                e(n).parent().before(this.searchMenuHeaderTemplate({title: "Users"}))
            }.context(this)), e("a:[data-cat=course]:first").each(function (t, n) {
                e(n).parent().before(this.searchMenuHeaderTemplate({title: "Courses"}))
            }.context(this))
        }.context(this), select: function (t, n) {
            if (n.item.category == "course") {
                var r = e(".ui-autocomplete .ui-menu-item a[data-cat=course][data-id=" + n.item.id + "]").attr("href");
                window.location = r
            } else window.location = n.item.url
        }, autoFocus: !0}).data("autocomplete")._renderItem = function (t, n) {
            t.append(e(this.searchMenuItemTemplate({item: n})).data("item.autocomplete", n))
        }.context(this), e("#quick-search").autocomplete("widget").attr("id", "quick-search-dropdown")), e("form", this.element).submit(function (t) {
            t && t.preventDefault();
            var n = e("input[type=text]", e(this)).val(), r = e(this).attr("action");
            document.location = r + "?q=" + n
        })
    }, destroy: function () {
    }, _initHandlebarsTemplates: function () {
        this.searchFooterTemplate = Handlebars.compile(e("#search-footer").html()), this.searchMenuHeaderTemplate = Handlebars.compile(e("#search-menu-header").html()), this.searchMenuItemTemplate = Handlebars.compile(e("#search-menu-item").html())
    }})
}), define("ud.share", ["jquery", "ud.package.default"], function (e) {
    UD.share = {}, UD.share.activeSharingFriendList = [], UD.share.getNewFacebookFriend = function (t) {
        if (!t)return;
        var n = t.data("uFbFriendId") || null, r = t.data("uCourseId") || null;
        e.ajax({type: "GET", url: href + "&displayType=ajax", data: {friendId: n, courseId: r}, success: function (e) {
            e = jQuery.parseJSON(e), e.isSuccess && e.domElement && e.friendId && e.courseId ? UD.share.onSuccessShareCourseWithFriend(t) : UD.share.onErrorShareCourseWithFriend(t)
        }, error: function () {
            UD.share.onErrorShareCourseWithFriend(t)
        }})
    }, UD.share.onSuccessShareCourseWithFriend = function (e) {
        if (!e)return;
        var t = e.find("div.publishing-wall-status");
        t && (t.removeClass("publishing-wall"), t.addClass("shared-status"), t.append('<div class="shared-text">shared</div>'), UD.share.getNewFacebookFriend(e))
    }, UD.share.onShareCourseWithFriend = function (e) {
        if (!e)return;
        var t = e.find("div.publishing-wall-status");
        t && (t.removeClass("no-sharing"), t.addClass("publishing-wall"))
    }, UD.share.onErrorShareCourseWithFriend = function (e) {
        if (!e)return;
        var t = e.find("div.publishing-wall-status");
        t && (t.removeClass("publishing-wall"), t.addClass("no-sharing"))
    }
}), define("ud.rotator", ["jquery", "ud.package.default"], function (e) {
    UD.rotator = {initialize: function (t, n) {
        var r = this;
        t.each(function () {
            r.eachSlider(e(this))
        })
    }, eachSlider: function (t) {
        this.con = t, this.imgs = t.find("*"), this.total = this.imgs.length, this.cur = 0, this.imgs.each(function (t) {
            t && e(this).css("display", "none"), e(this).css("visibility", "visible")
        }), this.timeOut()
    }, timeOut: function () {
        var e = this;
        setTimeout(e.fadeOut.context(e), 5e3)
    }, fadeOut: function () {
        var t = this.cur % this.total, n = (this.cur + 1) % this.total, t = e(this.imgs[t]), n = e(this.imgs[n]);
        t.css("zIndex", "1"), n.css("zIndex", "0"), t.fadeOut("slow"), n.fadeIn("slow"), this.cur++, this.timeOut()
    }}
}), define("ud.formtooltips", ["jquery"], function (e) {
    e.fn.formTooltips = function () {
        e("input,textarea,select", this).each(function () {
            var t = e(this).closest("tr"), n = e(".tooltip-text", t), r = e(".tooltip-base", t);
            e(">.tooltip-text", r).length && r.addClass("rel"), n = n.length ? n : e(".tooltip-text-u", t), n.length && e.trim(n.text()).length > 10 && e(this).focus(function () {
                n.fadeIn(), t.addClass("focused")
            }).blur(function () {
                n.fadeOut(), t.removeClass("focused")
            })
        })
    }
}), define("ud.collapse", ["jquery"], function (e) {
    e.fn.collapseMenu = function () {
        e(this).each(function () {
            var t = this;
            e(">li.chapter", t).click(function () {
                e(this).hasClass("on") ? e(this).removeClass("on") : e(this).addClass("on")
            });
            var n = e("li.selected", t);
            n.length ? n.closest("li").parent().parent().prev().addClass("on") : e(">li:first-child", t).addClass("on")
        })
    }
}), define("ud.floatingmenu", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_floatingmenu", {options: {courseId: null, bottom_item: null, extra_bottom_space: 0}, _create: function () {
        for (var t in this.options)typeof this.element.data(t.toLowerCase()) != "undefined" && (this.options[t] = this.element.data(t.toLowerCase()));
        var n = this.element, r = n.offset().top, i = n.outerHeight(), s = e(e.trim(this.options.bottom_item));
        if (s.length)var o = s.offset().top;
        var u = this.options.extra_bottom_space;
        e(window).scroll(function () {
            scrollAmount = e(document).scrollTop(), item_current_top = n.offset().top, stick_to_bottom = scrollAmount > o - i - u, s.length || (stick_to_bottom = !1), fixed = r < scrollAmount, fixed && stick_to_bottom ? n.removeClass("fixed").addClass("fixed_to_bottom") : fixed ? n.removeClass("fixed_to_bottom").addClass("fixed") : n.removeClass("fixed fixed_to_bottom")
        })
    }, destroy: function () {
    }}), e().ready(function () {
        var t = e("#floating-cat-list");
        if (t.length) {
            var n = e("#course-blocks>li").size() - 1, r = e("#course-blocks>li:nth-child(7)").offset().top - 20, i = e("#course-blocks>li:nth-child(" + n + ")").offset().top, t = e("#floating-cat-list");
            e(window).scroll(function () {
                scrollAmount = e(document).scrollTop(), scrollAmount > r && scrollAmount < i ? t.addClass("on") : t.removeClass("on")
            }), e("a", t).click(function () {
                var t = e(this).data("scrollto");
                return e("html, body").animate({scrollTop: e("#" + t).offset().top - 10}, 700), !1
            })
        }
    })
});
var isIE = navigator.appVersion.indexOf("MSIE") != -1 ? !0 : !1, isWin = navigator.appVersion.toLowerCase().indexOf("win") != -1 ? !0 : !1, isOpera = navigator.userAgent.indexOf("Opera") != -1 ? !0 : !1;
define("AC_OETags", function () {
}), define("ud.emailValidator", ["jquery", "ud.package.default"], function (e) {
    e.fn.emailValidator = function (t) {
        this.each(function () {
            return!0;
            var t, n, r
        })
    }
}), define("ud.package.others", ["jquery", "ud.tabs", "ud.share", "ud.rotator", "ud.formtooltips", "ud.collapse", "ud.floatingmenu", "AC_OETags", "ud.emailValidator", "ud.loader"], function (e) {
}), define("ud.package.default", ["jquery", "jquery.ui", "ud.jquery.ready", "init", "swfobject", "redactor", "bootstrap", "handlebars", "ud.api", "ud.mixpanel", "ud.utils", "ud.string", "ud.initializer", "ud.jqelement", "ud.popup", "ud.notifications", "ud.search", "ud.package.jqueryplugins", "ud.package.others"], function (e) {
}), define("ud.formajaxify", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_formajaxify", {options: {option1: 123}, displayType: "json", form: null, formItems: null, _create: function () {
        for (var t in this.options)typeof this.element.data(t.toLowerCase()) != "undefined" && (this.options[t] = this.element.data(t.toLowerCase()));
        this.form = this.element, this.formItems = e("input,select", this.form), this.formItems.focus(this.formItemsChangeCallback), this.formItems.on("keypress", e.proxy(this, "formItemsKeyPress")), e(".form-bottom .signup-btn", this.element).click(this.formSubmit.context(this)), e(".form-bottom .login-btn", this.element).click(this.formSubmit.context(this)), this.element.submit(this.formSubmit.context(this))
    }, destroy: function () {
    }, formSubmit: function (t) {
        t.preventDefault(), e.ajax({type: "post", dataType: "json", url: this.form.attr("action"), data: this.form.serialize() + "&displayType=" + this.displayType, success: this.successResponse.context(this)})
    }, successResponse: function (t) {
        if (typeof t.error == "undefined")e(location).attr("href", t.returnUrl); else {
            var n = t.error.data.itemErrors, r = t.error.data.formErrors;
            for (var i in n) {
                var s = e(".form-item." + i, this.form);
                e("#" + i, s).addClass("error"), e("span.error-text", s).html(e("<div/>").html(n[i]).text()).addClass("block")
            }
            r && (e(".form-errors", this.form).html(e("<div/>").html(r).text()).addClass("block"), e(".form-errors", this.form).html(e("<div/>").html(r).text()).removeClass("none"))
        }
    }, formItemsChangeCallback: function (t) {
        var n = e(this).parent();
        e("input", n).removeClass("error"), e("span.error-text", n).removeClass("block").html(""), n.siblings(".form-errors").removeClass("block").html(""), e(".form-errors", this.form).html("").removeClass("block"), e(".form-errors", this.form).html("").addClass("none")
    }, formItemsKeyPress: function (e) {
        e.which === 13 && this.formSubmit(e)
    }})
});
var totalWatchedVideoNumber = 0;
define("ud.jwplayer", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_jwplayer", {options: {mode: "video"}, key: "5XXb+w0txH2+cnkwOtAOWXU39zFQbZ6VT9mOA6R83tk=", api: null, firstPlay: !0, initialPosition: null, embedParams: {}, errorLogData: {}, _create: function () {
        require(["jwplayer", "jwplayer5"], this._initJwplayer.context(this))
    }, _initJwplayer: function () {
        for (var t in this.options)typeof this.element.data(t.toLowerCase()) != "undefined" && (this.options[t] = this.element.data(t.toLowerCase()));
        typeof jwplayer.key == "undefined" && (window.jwplayer.key = this.key), this.prepareEmbedParams(), this.element.append('<div id="' + this.embedParams.id + '"></div>'), this.options.mode == "mashup" ? (this.embedParams.primary = "flash", this.embedParams.flashplayer = UD.Config.http + "static/flash/player-53-udemy.swf", this.api = jwplayer5(this.embedParams.id).setup(this.embedParams)) : (this.api = jwplayer(this.embedParams.id).setup(this.embedParams), this.api.onBeforePlay(this.onPlayerBeforePlay.context(this)), this.api.onBuffer(this.onPlayerBuffer.context(this))), this.api.onReady(this.onPlayerReady.context(this)), e(window).on("resize.jwplayer." + this.embedParams.id, this.onWindowResize.context(this)), e("#" + this.embedParams.id).on("contextmenu", function () {
            e(".jwclick").css("display", "none")
        })
    }, initialSeek: function (e) {
        !!e.autostart == 0 ? e.position && (this.initialPosition = e.position) : (this.firstPlay = !1, e.position ? this.api.seek(e.position) : this.api.play(!0))
    }, seek: function (e, t) {
        this.firstPlay ? this.initialSeek(t) : this.api.seek(t.position)
    }, prepareEmbedParams: function () {
        this.embedParams = e.evalJSON(e("script.jwplayer-params", this.element).html());
        var t = this.options.mode + "_" + this.element.attr("id");
        this.embedParams.id = this.embedParams.isLandingPage ? "sample_" + t : t, this.embedParams.base = UD.Config.http + "static/jwplayer/source/", this.embedParams.width = "100%", this.embedParams.height = "100%", typeof this.embedParams.primary == "undefined" && (this.embedParams.primary = "flash"), this.embedParams.events = {onError: this.onPlayerError.context(this), onFullscreen: this.onPlayerFullscreen.context(this)}, typeof this.embedParams.plugins != "undefined" && this.embedParams.plugins.length === 0 && delete this.embedParams.plugins
    }, onWindowResize: function () {
        this.options.mode != "mashup" && this.api.resize()
    }, onPlayerError: function (t) {
        delete this.embedParams.events, delete this.embedParams.fallbackDiv;
        var n = {errorMessage: t.message, settings: e.extend(this.embedParams, {renderingMode: jwplayer().getRenderingMode(), flashVersion: swfobject.getFlashPlayerVersion()}), currentVideoPosition: this.api.getPosition(), totalVideoDuration: this.api.getDuration(), totalWatchedVideo: totalWatchedVideoNumber, browser: navigator.userAgent, os: navigator.platform};
        e.extend(this.errorLogData, n), this.errorLogData.settings.renderingMode == "html5" ? this.errorLogData.videoUrl = this.api.getPlaylistItem().sources[this.api.getCurrentQuality()].file : this.errorLogData.videoUrl = this.api.getPlaylistItem().file, UD.API.call("/jserrors/jwplayer-error", {data: this.errorLogData, type: "POST"}), UD.API.Stat.increment("videoplayer." + this.errorLogData.settings.renderingMode + ".error")
    }, onPlayerFullscreen: function (e) {
        if (!e.fullscreen) {
            var t = 0, n = null;
            n = setInterval(function () {
                try {
                    t++, this.api.resize("100%", "100%"), t == 4 && clearInterval(n)
                } catch (e) {
                    clearInterval(n)
                }
            }.context(this), 500)
        }
    }, onPlayerReady: function (e) {
        UD.API.Stat.increment("videoplayer." + this.api.getRenderingMode() + ".viewed")
    }, onPlayerBeforePlay: function (e) {
        this.firstPlay && (this.firstPlay = !1, this.initialPosition !== null && this.api.seek(this.initialPosition))
    }, onPlayerBuffer: function (e) {
        e.oldstate == "IDLE" && totalWatchedVideoNumber++
    }, destroy: function () {
        e("#" + this.embedParams.id).off("contextmenu"), this.options.mode != "mashup" && (jwplayer(this.embedParams.id).stop(), jwplayer(this.embedParams.id).remove()), e(window).off("resize.jwplayer." + this.embedParams.id)
    }})
}), define("ud.package.home", ["jquery", "ud.package.default", "ud.page", "ud.formajaxify", "ud.jwplayer"], function (e) {
}), define("ud.courseimpressiontracker", ["jquery", "ud.package.default", "jquery.viewport"], function (e) {
    e.widget("ud.ud_courseimpressiontracker", {options: {}, _create: function () {
        for (var e in this.options)typeof this.element.data(e.toLowerCase()) != "undefined" && (this.options[e] = this.element.data(e.toLowerCase()));
        setInterval(this.logVisibleCourses.context(this), 1e3)
    }, destroy: function () {
    }, logVisibleCourses: function () {
        var t = [];
        e("li[data-courseid]:in-viewport", this.element).each(function (n, r) {
            var i = e(r);
            i.data("seen") || (i.data("seen", 1), t.push(i.data("courseid")))
        }.context(this));
        if (t.length > 0) {
            var n = "", r = "", i = "";
            if (this.element.data("ud_discover")) {
                var s = this.element.data("ud_discover").currentRequest;
                i = s.context, s.context == "category" ? n = s.courseCategoryId : s.context == "search" && (n = s.searchQuery)
            } else this.element.data("ud_collection") && (i = "collection", n = this.element.data("ud_collection").options.collection);
            UD.API.call("/discover/log/view", {type: "POST", data: {page: r, ids: t.join(","), context: i, subcontext: n}, success: function (t) {
                for (var n in t) {
                    var r = e("li[data-courseid=" + n + "]", this.element), i = e("a", r), s = i.attr("href"), o = s + "?dtcode=" + t[n];
                    i.attr("href", o)
                }
            }.context(this)})
        }
    }})
});
var Base64 = {_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
    var t = "", n, r, i, s, o, u, a, f = 0;
    e = Base64._utf8_encode(e);
    while (f < e.length)n = e.charCodeAt(f++), r = e.charCodeAt(f++), i = e.charCodeAt(f++), s = n >> 2, o = (n & 3) << 4 | r >> 4, u = (r & 15) << 2 | i >> 6, a = i & 63, isNaN(r) ? u = a = 64 : isNaN(i) && (a = 64), t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
    return t
}, decode: function (e) {
    var t = "", n, r, i, s, o, u, a, f = 0;
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (f < e.length)s = this._keyStr.indexOf(e.charAt(f++)), o = this._keyStr.indexOf(e.charAt(f++)), u = this._keyStr.indexOf(e.charAt(f++)), a = this._keyStr.indexOf(e.charAt(f++)), n = s << 2 | o >> 4, r = (o & 15) << 4 | u >> 2, i = (u & 3) << 6 | a, t += String.fromCharCode(n), u != 64 && (t += String.fromCharCode(r)), a != 64 && (t += String.fromCharCode(i));
    return t = Base64._utf8_decode(t), t
}, _utf8_encode: function (e) {
    e = e.replace(/\r\n/g, "\n");
    var t = "";
    for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(r & 63 | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(r & 63 | 128))
    }
    return t
}, _utf8_decode: function (e) {
    var t = "", n = 0, r = c1 = c2 = 0;
    while (n < e.length)r = e.charCodeAt(n), r < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (c2 = e.charCodeAt(n + 1), t += String.fromCharCode((r & 31) << 6 | c2 & 63), n += 2) : (c2 = e.charCodeAt(n + 1), c3 = e.charCodeAt(n + 2), t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63), n += 3);
    return t
}};
define("base64", function () {
}), define("ud.discover", ["jquery", "ud.package.default", "ud.courseimpressiontracker", "jquery.viewport", "base64"], function (e) {
    e.widget("ud.ud_discover", {options: {}, featuredButton: null, recommendedButton: null, categoryButton: null, coursesList: null, coursesRows: null, featuredSlider: null, featuredCollectionThumbs: null, recommendedData: null, loadMoreButton: null, ajaxLoader: null, currentRequest: {page: 1, pageSize: 12, active: !1, disabled: !1, pushPopStateActive: !1, context: "featured", courseCategoryId: "", searchQuery: null, filters: {sort: null, price: null, category: null}, filterDropdownValues: {sort: null, price: null, category: null}}, filterTabs: {sort: ["popularity", "reviews", "newest"], price: ["free", "paid"]}, _create: function () {
        for (var e in this.options)typeof this.element.data(e.toLowerCase()) != "undefined" && (this.options[e] = this.element.data(e.toLowerCase()));
        this._initHandlebarsTemplates(), this.initializePageElements(), this.initializePage(), this.initializeInfiniteScroll(), setInterval(this.logCarouselImpressions, 200)
    }, _pushStateOrLoadPage: function (e, t, n) {
        var r;
        window.location.origin ? r = window.location.origin : r = window.location.protocol + "//" + window.location.host;
        if (window.location.href == r + n)return;
        typeof history != "undefined" && typeof history.pushState != "undefined" ? history.pushState(e, t, n) : window.location = r + n
    }, _capitalizeFirstLetter: function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }, _decapitalizeFirstLetter: function (e) {
        return e.charAt(0).toLowerCase() + e.slice(1)
    }, _getUrlVars: function () {
        var e = {};
        return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (t, n, r) {
            e[n] = r
        }), e
    }, _setSearchParamsFromUrl: function () {
        var e = this._getUrlVars(), t = typeof e.q != "undefined" ? e.q : null;
        t && t !== this.currentRequest.searchQuery && this._resetFilterParams(), this.currentRequest.searchQuery = UD.Utils.cleanHTML(decodeURIComponent(t)), typeof e.sort !== undefined && e.sort ? this.currentRequest.filters.sort = e.sort : this.currentRequest.filters.sort = null, typeof e.price && e.price ? this.currentRequest.filters.price = e.price : this.currentRequest.filters.price = null, typeof e.category && e.category ? this.currentRequest.filters.category = e.category : this.currentRequest.filters.category = null, this._updateDropdownValues()
    }, _getFilterParams: function () {
        var e = {};
        for (var t in this.currentRequest.filters) {
            var n = this.currentRequest.filters[t];
            typeof n != "undefined" && n && (e[t] = n)
        }
        return e
    }, _resetFilterParams: function () {
        for (var e in this.currentRequest.filters)this.currentRequest.filters[e] = null;
        this._updateDropdownValues()
    }, _hideSearchElements: function () {
        this.resultsFor.addClass("none"), this.filtersSection.addClass("none"), this.selectedFilters.html(""), this.currentRequest.searchQuery = null
    }, _showFeaturedElements: function () {
        this.featuredSlider && this.featuredSlider.removeClass("none"), this.featuredCollectionThumbs && this.featuredCollectionThumbs.removeClass("none")
    }, _hideFeaturedElements: function () {
        this.featuredCollectionThumbs && this.featuredCollectionThumbs.addClass("none"), this.featuredSlider && this.featuredSlider.addClass("none")
    }, _generateSearchUrlParams: function () {
        var e = this._getFilterParams(), t = [];
        this.currentRequest.searchQuery && t.push("q=" + this.currentRequest.searchQuery.trim());
        for (var n in e)t.push(n + "=" + encodeURIComponent(e[n].trim()));
        return t.join("&")
    }, _setResultsFor: function () {
        e(".term", this.resultsFor).html(decodeURIComponent(this.currentRequest.searchQuery)), this.resultsFor.removeClass("none"), this.resultsForResults.removeClass("none")
    }, _selectSortBy: function (t) {
        t && t.preventDefault(), t && t.stopPropagation();
        var n = e(t.currentTarget), r = n.index(), i = e("input[type=radio]", n);
        typeof i.attr("checked") != "undefined" ? (i.removeAttr("checked"), this.currentRequest.filterDropdownValues.sort = null) : (i.attr("checked", "checked"), this.currentRequest.filterDropdownValues.sort = this.filterTabs.sort[r]), this._updateFiltersFromDropdown(), this._reloadAfterFiltering()
    }, _selectPriceFilter: function (t) {
        t && t.preventDefault(), t && t.stopPropagation();
        var n = e(t.currentTarget), r = n.index(), i = e("input[type=radio]", n);
        typeof i.attr("checked") != "undefined" ? (i.removeAttr("checked"), this.currentRequest.filterDropdownValues.price = null) : (i.attr("checked", "checked"), this.currentRequest.filterDropdownValues.price = this.filterTabs.price[r]), this._updateFiltersFromDropdown(), this._reloadAfterFiltering()
    }, _selectCategoryFilter: function (t) {
        t && t.preventDefault(), t && t.stopPropagation();
        var n = e(t.currentTarget), r = e.trim(n.data("category-name")), i = n.data("category-id");
        this.currentRequest.filterDropdownValues.category !== r && (i ? this.currentRequest.filterDropdownValues.category = r : this.currentRequest.filterDropdownValues.category = null, this._updateFiltersFromDropdown(), this._reloadAfterFiltering()), this.grayDropdown.removeClass("on")
    }, _updateDropdownValues: function () {
        for (var t in this.currentRequest.filters) {
            var n = this.currentRequest.filters[t];
            this.currentRequest.filterDropdownValues[t] = n;
            switch (t) {
                case"price":
                    e("input[type=radio]", this.priceSection).removeAttr("checked"), e("#price-" + n + "-btn", this.priceSection).attr("checked", "checked");
                    break;
                case"sort":
                    e("input[type=radio]", this.sortSection).removeAttr("checked"), n && e("#" + n, this.sortSection).attr("checked", "checked");
                    break;
                case"category":
                    e("a", this.grayDropdown).html("All Categories"), n && e("a", this.grayDropdown).html(n)
            }
        }
    }, _updateFiltersFromDropdown: function (e) {
        e && e.preventDefault(), e && e.stopPropagation();
        for (var t in this.currentRequest.filterDropdownValues)this.currentRequest.filters[t] = this.currentRequest.filterDropdownValues[t]
    }, _removeFilter: function (t) {
        t && t.preventDefault(), t && t.stopPropagation();
        var n = e(t.currentTarget), r = n.parent("li"), i = this._decapitalizeFirstLetter(r.data("filtertype"));
        r.remove();
        for (var s in this.currentRequest.filters)s === i && (this.currentRequest.filters[s] = null);
        this._updateDropdownValues()
    }, _createSelectedFilters: function () {
        var e = this._getFilterParams(), t = [];
        for (var n in e)t.push({type: this._capitalizeFirstLetter(n), value: this._capitalizeFirstLetter(decodeURIComponent(e[n]))});
        this.selectedFilters.html(this.discoveryFilterTemplate({filters: t})).removeClass("none")
    }, _reloadAfterFiltering: function () {
        this.load(1)
    }, _initHandlebarsTemplates: function () {
        this.courseListTemplate = Handlebars.compile(e("#courseListTemplate").html()), this.courseListTemplateForSearch = Handlebars.compile(e("#courseListForSearchTemplate").html()), this.courseRowsTemplate = Handlebars.compile(e("#coursesCarouselTemplate").html()), this.discoveryFilterTemplate = Handlebars.compile(e("#discoveryFilterTemplate").html()), Handlebars.registerHelper("generateAddCourseToListUrl", function (e) {
            return UD.Config.link("wishlist", "add-buyable-object", {buyableObjectId: e, buyableObjectType: "course"})
        }), this.featuredSliderTemplate = Handlebars.compile(e("#sliderFeaturedListTemplate").html()), this.featuredCollectionThumbsTemplate = Handlebars.compile(e("#featuredCollectionThumbs").html()), Handlebars.registerPartial("course-list", this.courseListTemplate), Handlebars.registerHelper("isPriceFilter", function (e, t) {
            var n = t.fn, r = t.inverse;
            return e === "Price" ? n(this) : r(this)
        })
    }, activate: function (e) {
        this.searchButton.find('input[type="text"]').val(""), this.navigation.find("> li").removeClass("on"), e.addClass("on")
    }, initializePushState: function () {
        this.recommendedButton.click(function (e) {
            e.preventDefault(), this._resetFilterParams(), this._loadFunction = this._loadRecommended.context(this), this.load(1)
        }.context(this)), this.featuredButton.click(function (e) {
            e.preventDefault(), this._resetFilterParams(), this._loadFunction = this._loadFeatured.context(this), this.load(1)
        }.context(this)), this.courseCategoryButtons.click(function (t) {
            t.preventDefault(), this._resetFilterParams();
            var n = e(t.currentTarget);
            this.currentRequest.courseCategoryId = n.data("category-id"), n.parents(".ddown.on").eq(0).removeClass("on"), this._loadFunction = this._loadCategory.context(this), this.load(1)
        }.context(this)), this.searchForm.submit(function (t) {
            t.preventDefault();
            var n = e(t.currentTarget), r = e("input[type=text]", n).val();
            r !== this.currentRequest.searchQuery && this._resetFilterParams(), this.currentRequest.searchQuery = UD.Utils.cleanHTML(r), e.trim(this.currentRequest.searchQuery) && (this._loadFunction = this._loadSearchQuery.context(this), this.load(1), this.searchButton.find('input[type="text"]').val(this.currentRequest.searchQuery))
        }.context(this))
    }, initializePopState: function () {
        window.onpopstate = this.initializePage.context(this)
    }, destroy: function () {
    }, load: function (e) {
        this.currentRequest.page = e, this.currentRequest.active_scroll_request_exists = !0, this.currentRequest.page == 1 && (this.noCourses.addClass("none"), this._hideCoursesList(), this.currentRequest.disabled = !1), this._hideLoadMoreButton(), this._showAjaxLoader(), this._loadFunction()
    }, clearCourseLists: function () {
        this.coursesList.html(""), this.coursesRows.html("")
    }, _renderFeaturedTop: function (t) {
        this._pushPopInitializations();
        var n = e("div.top");
        n.after(this.featuredCollectionThumbsTemplate(t)), n.after(this.featuredSliderTemplate(t)), this.featuredSlider = e(".slider-container"), this.featuredCollectionThumbs = e("#collection-thumbs"), this.featuredSlider.ud_initialize()
    }, _isNewCourse: function (e) {
        var t = (new Date).getTime(), n = 6048e5;
        if (e.published_time) {
            var r = (new Date(e.published_time)).getTime();
            return t - r <= n ? !0 : !1
        }
        return!1
    }, _isFeaturedCourse: function (e) {
        if (e.admin_rating) {
            var t = parseInt(e.admin_rating);
            return t >= 10 ? !0 : !1
        }
        return!1
    }, _renderFeaturedLists: function (e) {
        this.clearCourseLists();
        var t = "";
        for (var n in e) {
            e[n].courses_count = e[n].courses.length;
            for (var r in e[n].courses)e[n].courses[r].course.in_featured_page = !0, e[n].courses[r].course.is_new_course = this._isNewCourse(e[n].courses[r].course), e[n].courses[r].course.is_featured_course = this._isFeaturedCourse(e[n].courses[r].course);
            t += this.courseRowsTemplate(e[n])
        }
        this._pushPopInitializations(), this.coursesRows.append(t), this.coursesRows.ud_initialize(), this._hideAjaxLoader()
    }, _pushPopInitializations: function () {
        this.currentRequest.pushPopStateActive == 0 && (this.currentRequest.pushPopStateActive = !0, this.initializePushState(), this.initializePopState())
    }, _render: function (t, n) {
        t.page == 1 && this.clearCourseLists();
        if (t.page == 1 && t.courses.length == 0 && (this.currentRequest.searchQuery || this.currentRequest.filters.price)) {
            var r = "";
            this.currentRequest.searchQuery && (r = '"' + this.currentRequest.searchQuery + '"'), e("span", this.noCourses).html(r), this.noCourses.removeClass("none")
        } else this.currentRequest.context != "search" ? (this.coursesList.append(this.courseListTemplate(t)), this.coursesList.ud_initialize()) : (n == "1" ? this.coursesList.append(this.courseListTemplateForSearch(t)) : this.coursesList.append(this.courseListTemplate(t)), this.coursesList.ud_initialize());
        t.page_size == 0 ? (this.currentRequest.disabled = !0, this._hideLoadMoreButton()) : this._showLoadMoreButton(), this._pushPopInitializations(), this.currentRequest.active_scroll_request_exists = !1, this._hideAjaxLoader(), this._showCoursesList()
    }, _renderHorizontal: function (e) {
        this.recommendedData = e;
        var t = e.my_courses, n = e.interests;
        t.length === 0 && n.length === 0 && window.location.replace(UD.Config.http + "interests");
        var r = "";
        for (var i in e.my_courses)t[i].courses_count = t[i].courses.length, r += this.courseRowsTemplate(t[i]);
        this.coursesRows.append(r), r = "";
        for (var i in e.interests)n[i].courses_count = n[i].courses.length, r += this.courseRowsTemplate(n[i]);
        this.coursesRows.append(r), this._pushPopInitializations(), this.coursesRows.ud_initialize(), this._hideAjaxLoader()
    }, _errorRender: function (e) {
        var t = {};
        t.page = "1", t.page_size = 0, t.courses = [], this._render(t)
    }, _loadFunction: null, _loadRecommended: function () {
        this._hideSearchElements(), this._hideFeaturedElements(), this.clearCourseLists(), this.currentRequest.page == 1 && (this.currentRequest.context = "recommended", this.activate(this.recommendedButton), this._pushStateOrLoadPage({}, "Recommended Courses", "/courses/recommended"));
        var e = this._getLoadedCourses();
        e || (e = 0), UD.API.call("/users/me/recommended", {type: "GET", success: this._renderHorizontal.context(this)})
    }, _loadFeatured: function () {
        this._hideSearchElements(), this._showFeaturedElements(), this.clearCourseLists(), this.activate(this.featuredButton), this._pushStateOrLoadPage({}, "Featured Courses", "/courses/featured"), this.featuredSlider === null && UD.API.call("/discover/featured/top", {success: this._renderFeaturedTop.context(this)}), UD.API.call("/discover/featured/lists", {success: this._renderFeaturedLists.context(this)})
    }, _loadCategory: function () {
        this._hideSearchElements(), this._hideFeaturedElements(), e(".category-filter-wrapper", this.filtersSection).addClass("none"), e("h3.category-text", this.filtersSection).addClass("none");
        if (this.currentRequest.page == 1) {
            this.clearCourseLists(), this.currentRequest.context = "category", this.activate(this.categoryButton), this.categoryButton.find(".ddown > a").html(this.currentRequest.courseCategoryId);
            var t = this._generateSearchUrlParams(), n = this.currentRequest.courseCategoryId.trim(), r = "/courses/" + n.replace(/ /g, "-") + (t ? "?" + t : "");
            this._pushStateOrLoadPage({}, n + " Courses", r)
        }
        e(".filter-wrapper.cat", this.filtersSection).addClass("none"), this.filtersSection.removeClass("none"), this._createSelectedFilters(), UD.mixpanel.logger.log(UD.mixpanel.actions.CategoryPage, {pagination: this.currentRequest.page, category: this.currentRequest.courseCategoryId}), UD.API.call("/discover/category/" + this.currentRequest.courseCategoryId + "/" + this.currentRequest.pageSize + "/" + this.currentRequest.page, {data: this._getFilterParams(), success: this._render.context(this)})
    }, _loadSearchQuery: function () {
        this.currentRequest.page == 1 && (this._hideFeaturedElements(), this.clearCourseLists()), e(".category-filter-wrapper", this.filtersSection).removeClass("none"), e("h3.category-text", this.filtersSection).removeClass("none");
        if (this.currentRequest.page == 1) {
            this.currentRequest.context = "search", this.activate(this.searchButton), this.searchButton.find('input[type="text"]').val(decodeURIComponent(this.currentRequest.searchQuery)), this._setResultsFor();
            var t = this._generateSearchUrlParams(), n = "/courses/search?" + t;
            this._pushStateOrLoadPage({}, "Courses About " + decodeURIComponent(this.currentRequest.searchQuery), n)
        }
        this.filtersSection.removeClass("none"), this._createSelectedFilters(), UD.mixpanel.logger.log(UD.mixpanel.actions.SearchPage, {pagination: this.currentRequest.page, keyword: this.currentRequest.searchQuery});
        var r = this._getFilterParams();
        r.q = this.currentRequest.searchQuery, r.pageSize = this.currentRequest.pageSize, r.p = this.currentRequest.page, UD.API.call("/discover/search", {type: "POST", data: r, success: this._getABTestValAndThenRender.context(this), error: this._errorRender.context(this)})
    }, _getABTestValAndThenRender: function (e) {
        var t = 5008;
        UD.API.call("/experiments/" + t + "/value", {type: "GET", success: this._render.context(this, e), error: this._errorRender.context(this)})
    }, _showCoursesList: function () {
        this.coursesList.removeClass("none")
    }, _hideCoursesList: function () {
        this.coursesList.addClass("none")
    }, _showLoadMoreButton: function () {
        this.loadMoreButton.removeClass("none")
    }, _hideLoadMoreButton: function () {
        this.loadMoreButton.addClass("none")
    }, loadMore: function () {
        this.load(++this.currentRequest.page)
    }, _getLoadedCourses: function () {
        var t = "";
        return e("li", this.coursesList).each(function (n, r) {
            t += e(r).data("courseid") + ","
        }), Base64.encode(t.substr(0, t.length - 1))
    }, initializeInfiniteScroll: function () {
        e(window).scroll(function () {
            !this.currentRequest.active_scroll_request_exists && !this.currentRequest.disabled && e(window).scrollTop() >= e(document).height() - e(window).height() - 500 && this.loadMore()
        }.context(this))
    }, initializePageElements: function () {
        this.recommendedButton = e(".recommended-col", this.element), this.featuredButton = e(".featured-col", this.element), this.categoryButton = e(".categories-col", this.element), this.courseCategoryButtons = e(".discover-course-category", this.element), this.searchButton = e(".search-col", this.element), this.searchForm = e("#discover-search-box", this.element), this.ajaxLoader = e(".ajax-loader-stick", this.element), this.navigation = e("ul.discovery-navigation"), this.coursesList = e("ul.discover-courses-list", this.element), this.coursesRows = e("div#discover-courses-rows", this.element), this.noCourses = e("#no-courses", this.element), this.loadMoreButton = e(".load-more", this.element), this.loadMoreButton.click(this.loadMore.context(this)), this.filtersSection = e("#filters", this.element), this.selectedFilters = e("#selected-filters", this.element), this.resultsFor = e(".results-for", this.element), this.resultsForResults = e(".results", this.resultsFor), this.grayDropdown = e(".gray-dropdown-wrapper .gray-dropdown", this.filtersSection), this.sortSection = e(".tab-container.sort-container", this.filtersSection), this.priceSection = e(".tab-container.price-container", this.filtersSection), e("li", this.sortSection).click(this._selectSortBy.context(this)), e("li", this.priceSection).click(this._selectPriceFilter.context(this)), e("li", this.grayDropdown).click(this._selectCategoryFilter.context(this)), e("i", this.selectedFilters).live("click", function (e) {
            this._removeFilter(e), this._reloadAfterFiltering()
        }.context(this)), e(".update", this.filtersSection).click(function (e) {
            this._updateFiltersFromDropdown(e), this._reloadAfterFiltering()
        }.context(this))
    }, initializePage: function () {
        var t = document.location.pathname.split("/");
        if (t.length <= 2 || t[2] == "featured")this.currentRequest.context = "featured", this._loadFunction = this._loadFeatured.context(this), this.load(1); else if (t[2] == "recommended")this.currentRequest.context = "recommended", this._loadFunction = this._loadRecommended.context(this), this.load(1); else if (t[2] == "search") {
            this.currentRequest.context = "search";
            var n = document.URL.search(/\?q=/);
            n != -1 ? (this._setSearchParamsFromUrl(), this._loadFunction = this._loadSearchQuery.context(this), this.load(1)) : (this._loadFunction = this._loadRecommended.context(this), this.load(1))
        } else {
            var r = t[2].replace(/-/g, " "), i = e.map(e(".discover-course-category"), function (t) {
                return e(t).data("category-id")
            }), s = e.inArray(r, i);
            s >= 0 ? (this.currentRequest.courseCategoryId = r, this._setSearchParamsFromUrl(), this._loadFunction = this._loadCategory.context(this), this.load(1)) : (this.currentRequest.context = "featured", this._loadFunction = this._loadFeatured.context(this), this.load(1))
        }
    }, logCarouselImpressions: function () {
        var t = [];
        e(".ud-slider li.b[data-category=course]:in-viewport").each(function (n, r) {
            var i = e(r);
            i.data("seen") || (i.data("seen", 1), t.push(i.data("id")))
        }.context(this));
        if (t.length > 0) {
            var n = "", r = "", i = "featured-carousel";
            UD.API.call("/discover/log/view", {type: "POST", data: {page: r, ids: t.join(","), context: i, subcontext: n}, success: function (t) {
                for (var n in t) {
                    var r = e(".ud-slider li.b[data-category=course][data-id=" + n + "]", this.element), i = e("a", r), s = i.attr("href"), o = s + "?dtcode=" + t[n];
                    i.attr("href", o)
                }
            }.context(this)})
        }
    }, _showAjaxLoader: function () {
        this.ajaxLoader.removeClass("none")
    }, _hideAjaxLoader: function () {
        this.ajaxLoader.addClass("none")
    }})
}), define("coffee-compiled/ud.coursecarousel", ["jquery", "ud.package.default"], function (e) {
    return e.widget("ud.ud_coursecarousel", {options: {onlyCarousel: !1}, viewAllToggleButton: null, additionalToggleButtons: null, nextButton: null, prevButton: null, courseListWrapper: null, _visibleMode: "collapsed", coursesHeaderRightElements: null, numberOfCourses: null, coursesList: null, mask: null, lastCourse: null, _courseWidth: null, _create: function () {
        var t, n, r, i, s, o = this;
        t = this.element, s = this.options;
        for (n in s)i = s[n], r = n.toLowerCase(), t.data(r) != null && (this.options[n] = t.data(r));
        return this.viewAllToggleButton = e(".collapse-btn", t), this.additionalToggleButtons = e(".show-all-toggle", t), this.titleButton = e(""), this.prevButton = e(".course-nav-btn.prev", t), this.nextButton = e(".course-nav-btn.next", t), this.courseListWrapper = t, this.coursesList = e(".discover-courses-list", t), this.mask = e(".discover-courses-list-mask", t), this.coursesHeaderRightElements = e(".courses-header .right-items", t), this.lastCourse = t.find("ul > li:last-child"), this._courseWidth = this.lastCourse.width() + parseInt(this.lastCourse.css("margin-left"), 10) + parseInt(this.lastCourse.css("margin-right"), 10), this.numberOfCourses = e.trim(t.data("numberOfCourses")), this.options.onlyCarousel ? this.setOnlyOneInThePage() : t.data("viewAll") && this.viewAll(), this.viewAllToggleButton.on("click", function (e) {
            return e.preventDefault(), o.toggleViewAll()
        }), this.additionalToggleButtons.on("click", function (e) {
            return e.preventDefault(), o.toggleViewAll()
        }), this.nextButton.on("click", function (e) {
            return e.preventDefault(), o.next()
        }), this.prevButton.on("click", function (e) {
            return e.preventDefault(), o.prev()
        })
    }, setOnlyOneInThePage: function () {
        return this.coursesHeaderRightElements.addClass("none"), this.viewAll()
    }, next: function () {
        var e, t, n;
        if (this.coursesList.is(":animated"))return;
        return t = parseInt(this.coursesList.css("margin-left")), e = this.mask.width(), this.lastCourse.offset().left - e < 0 ? n = 0 : n = t - e, this.coursesList.animate({"margin-left": n + "px"}, 600)
    }, prev: function () {
        var e, t, n;
        if (this.coursesList.is(":animated"))return;
        return t = parseInt(this.coursesList.css("margin-left")), e = this.mask.width(), t === 0 ? n = -(this.lastCourse.position().left + this._courseWidth) + e : (n = t + e, n > 0 && (n = 0)), this.coursesList.animate({"margin-left": n + "px"}, 600)
    }, viewAll: function () {
        var e = this;
        return this.nextButton.addClass("off"), this.prevButton.addClass("off"), this._visibleMode = "extended", this.coursesList.css("margin-left", "0px"), this.courseListWrapper.addClass("all", 400, function () {
            return e.coursesList.removeClass("one-line"), e.viewAllToggleButton.addClass("collapse-selector"), e.viewAllToggleButton.removeClass("view-all"), e.viewAllToggleButton.html("Collapse")
        })
    }, collapseAll: function () {
        var e = this;
        return this.nextButton.removeClass("off"), this.prevButton.removeClass("off"), this._visibleMode = "collapsed", this.courseListWrapper.removeClass("all", 400, function () {
            return e.coursesList.addClass("one-line"), e.viewAllToggleButton.addClass("view-all"), e.viewAllToggleButton.removeClass("collapse-selector"), e.viewAllToggleButton.html("View All")
        })
    }, toggleViewAll: function () {
        if (this._visibleMode === "collapsed")return this.viewAll();
        if (this._visibleMode === "extended")return this.collapseAll();
        throw"Unknown _visibleMode: " + this._visibleMode
    }})
}), define("ud.slider", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_slider", {options: {bullet_count: !1, loop: !1, auto_slider: !1, slide_time: 600}, ul: null, li: null, nav_btns: null, prev: null, next: null, bullet_list: null, bullet_container: null, bullet_count: null, cur: 0, sliderIntervalId: null, stopAutoSlide: function () {
        this.options.auto_slider = !1, this.sliderIntervalId && clearInterval(this.sliderIntervalId)
    }, _create: function () {
        var t = this;
        for (var n in this.options)typeof this.element.data(n.toLowerCase()) != "undefined" && (this.options[n] = this.element.data(n.toLowerCase()));
        var r = this.element;
        this.ul = e(".slide-this", r), this.li = e("> li", this.ul);
        var i = this.li.length;
        this.bullet_count = parseInt(this.options.bullet_count) || Math.ceil(this.li.outerWidth(!0) * i / this.ul.outerWidth(!0)), this.bullet_container = e(".bullets", r), this.bullet_list = e("li", this.bullet_container), this.nav_btns = e("nav span", r);
        if (this.bullet_count > 1) {
            this.prev = e(".prev", r), this.next = e(".next", r);
            var s = "";
            for (n = 0; n < this.bullet_count; n++)s += "<li></li>";
            this.bullet_container.html(s), this.bullet_list = e("li", this.bullet_container), this.bullet_list.eq(0).addClass("on"), this.bullet_list.click(function () {
                t.stopAutoSlide(), t.cur = e(this).index(), t.navigate()
            }), this.bullet_count > 1 && this.next.addClass("on"), this.nav_btns.click(function () {
                e(this).hasClass("on") && (t.stopAutoSlide(), t.options.auto_slider = !1, t.sliderIntervalId && clearInterval(t.sliderIntervalId), e(this).hasClass("next") ? t.cur++ : t.cur--, t.navigate())
            }), this.options.loop && this.options.auto_slider && (this.sliderIntervalId = setInterval(function () {
                t.options.auto_slider && (t.cur++, t.navigate())
            }, this.options.auto_slider))
        } else this.bullet_list.css("visibility", "hidden"), this.nav_btns.css("display", "none")
    }, navigate: function () {
        this.bullet_list.removeClass("on"), this.options.loop && (this.cur < 0 ? this.cur = this.bullet_count - 1 : this.cur >= this.bullet_count && (this.cur = 0)), this.bullet_list.eq(this.cur).addClass("on"), this.ul.css("left", this.cur ? -100 * this.cur + "%" : 0), this.options.loop === !1 && (this.nav_btns.removeClass("on"), this.cur < this.bullet_count - 1 && this.next.addClass("on"), this.cur > 0 && this.prev.addClass("on"))
    }, _init: function () {
    }, destroy: function () {
    }})
}), define("ud.package.discover", ["jquery", "ud.package.default", "ud.discover", "coffee-compiled/ud.coursecarousel", "ud.search", "ud.notifications", "ud.slider", "ud.popup"], function (e) {
}), define("ud.courseannouncement", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_courseannouncement", {options: {courseId: null}, announcements: [], deletedCount: 0, pagination: {nextPageUrl: null, firstPageUrl: null}, queryParams: {closeSessionWrites: 1, p: 1, pageSize: 3}, _create: function () {
        e.extend(this.options, this.element.data()), this._initHandlebarsTemplates(), this.pagination.firstPageUrl = "/courses/" + this.options.courseId + "/announcements?" + e.param(this.queryParams), this.element.on("click.ud.courseannouncement", "li.announcement-item", e.proxy(this.markAsRead, this)), this.element.on("click.ud.courseannouncement", "li.load-wrapper", e.proxy(this.loadMore, this)), e(document).on("click.ud.courseannouncement", ".read-announcement .remove-handle", e.proxy(this.removeAnnouncement, this)), this.reload()
    }, _destroy: function () {
        this.element.find(".announcements-list").empty(), this.element.off(".ud.courseannouncement"), e(document).off(".ud.courseannouncement"), this._super()
    }, _initHandlebarsTemplates: function () {
        this.courseAnnouncementsTemplate = Handlebars.compile(this.element.find("#courseAnnouncementsTemplate").html())
    }, markAsRead: function (t) {
        var n = e(t.currentTarget), r = this;
        r.announcements[n.index()].status === "unread" && UD.API.call(n.data("read-url"), {type: "POST", success: function (e) {
            r.announcements[n.index()].status = e.status, r.render()
        }})
    }, removeAnnouncement: function (t) {
        var n = e(t.currentTarget).data("id"), r = this.element.find("li.announcement-item[data-id=" + n + "]"), i = r.data("delete-url");
        UD.API.call(i, {type: "POST", success: e.proxy(this.removeSuccessHandler, this, r.index())})
    }, removeSuccessHandler: function (e) {
        this.announcements.splice(e, 1), this.deletedCount++, this.pagination.nextPageUrl && this.announcements.length < this.queryParams.pageSize ? this.reload() : this.deletedCount === this.queryParams.pageSize ? this.loadMore() : this.render(), parent.jQuery.fancybox.close()
    }, loadMore: function () {
        this.element.find("li.load-wrapper .more").remove(), this.element.find("li.load-wrapper").css("padding", "8px"), this.element.find("li.load-wrapper .ajax-loader-tiny").addClass("block"), this.deletedCount && (this.pagination.nextPageUrl = this.element.find("li.announcement-item").last().data("loaded-page-url")), this.load()
    }, reload: function () {
        this.element.find(".announcements-list").empty(), this.element.find(".ajax-loader-stick").show(), this.announcements.length = 0, this.pagination.nextPageUrl = this.pagination.firstPageUrl, this.load()
    }, load: function () {
        UD.API.call(this.pagination.nextPageUrl, {type: "GET", success: e.proxy(this.loadSuccessHandler, this)})
    }, loadSuccessHandler: function (t, n, r) {
        var i = UD.Utils.parseLinkHeader(r.getResponseHeader("Link")), s = {}, o = this;
        this.pagination.nextPageUrl = i.next, this.deletedCount = 0, e.each(this.announcements, function () {
            s[this.course_announcement.id] = !0
        }), e.each(t.data, function () {
            s[this.course_announcement.id] || (this.loadedPageUrl = i.self, o.announcements.push(this))
        }), this.element.find(".ajax-loader-stick").hide(), this.render()
    }, render: function () {
        this.element.find(".announcements-list").html(this.courseAnnouncementsTemplate({data: this.announcements, more: !!this.pagination.nextPageUrl})), this.element.ud_initialize()
    }})
}), define("ud.wysiwyg", ["jquery", "ud.package.default", "redactor"], function (e) {
    e.widget("ud.ud_wysiwyg", {options: {theme: "simple", buttons: "", autofocus: !1, imageUploadLink: "https://www.udemy.com/upload/image", autoResize: !1, lang: "en"}, _getDefaultButtons: function (e) {
        switch (e) {
            default:
            case"simple":
                return["bold", "italic", "deleted", "|", "unorderedlist", "orderedlist", "html", "|", "link", "image"];
            case"simple-without-image":
                return["bold", "italic", "deleted", "|", "unorderedlist", "orderedlist", "html", "|", "link"];
            case"advanced":
                return["bold", "italic", "deleted", "|", "alignleft", "aligncenter", "alignright", "justify", "|", "formatting", "outdent", "indent", "|", "unorderedlist", "orderedlist", "|", "image", "html", "|", "link"]
        }
    }, _create: function () {
        for (var e in this.options)typeof this.element.data(e.toLowerCase()) != "undefined" && (this.options[e] = this.element.data(e.toLowerCase()));
        this.options.convert_urls = !this.element.data("preserveurls"), this.options.buttons = this._getDefaultButtons(this.options.theme), this.newId = this.element.attr("id") + "_" + Math.round(1e3 * Math.random()), this.element.attr("id", this.newId), this.element.append('<link rel="stylesheet" href="/static/js/redactor/css/redactor.css?v=3" />'), this.options.lang != "en" && this.element.append('<script src="/static/js/redactor/langs/' + this.options.lang + '.js?v=2"></script>'), this.activate()
    }, activate: function () {
        this.element.redactor({autoresize: this.options.autoResize, buttons: this.options.buttons, convertLinks: this.options.convert_urls, focus: this.options.autofocus, imageUpload: this.options.imageUploadLink, imageUploadCallback: function (e, t) {
        }, lang: this.options.lang})
    }, destroy: function () {
    }})
}), define("ud.questionanswer", ["jquery", "ud.package.default", "ud.wysiwyg"], function (e) {
    e.widget("ud.ud_questionanswer", {options: {courseId: null, isinstructor: !1}, currentRequest: {questionId: 0, answerId: 0, lectureId: 0, questionsPage: 1, searchQuestionsPage: 1, answersPage: 1, commentsPage: 1, pageSize: 12, currentAnswer: null, currentQuestionElement: null, questionsListActive: !1, questionsListDisabled: !1, searchQuestionsActive: !1, answersListActive: !1, answersListDisabled: !1}, followButton: null, questionsList: null, questionDetail: null, questionDetailResponsesWrapper: null, questionWrapper: null, quesionsMask: null, questions: Array(), questionsAjaxLoader: null, answersAjaxLoader: null, _create: function () {
        var t = this;
        for (var n in this.options)typeof this.element.data(n.toLowerCase()) != "undefined" && (this.options[n] = this.element.data(n.toLowerCase()));
        this._initHandlebarsTemplates(), this.courseDashboard = e("#course-dashboard", this.element), this.courseTakingPage = e("#course-taking-page", this.element), this.questionsList = e("#questions-list", this.element), this.answersList = e("#answers-list", this.element), this.questionDetail = e("#single-question", this.element), this.questionDetailResponsesWrapper = e("#responses-wrapper", this.element), this.questionsWrapper = e("#questions-wrapper", this.element), this.questionsMask = e("#questions-mask", this.element), this.questionForm = e("#create-question-form", this.element), this.answerForm = e("#create-answer-form", this.element), this.responsesWrapper = e("#responses-wrapper", this.element), e(".form-item-title textarea", this.questionForm).focus(function (t) {
            e(".bottom", this.questionForm).removeClass("none"), e(".form-item-details", this.questionForm).show(), e(".cancel", this.questionForm).removeClass("none"), this.questionsList.css("margin-top") == "0px" && this.questionsList.css("margin-top", "176px")
        }.context(this)), e("a.backto", this.questionsWrapper).live("click", function (e) {
            e.preventDefault(), this.refreshQuestion(this.currentRequest.questionId), this.questionsWrapper.removeClass("detail-view"), this.resetAnswerParams(), this.currentRequest.lectureId ? window.location.hash = "lecture/" + this.currentRequest.lectureId : window.location.hash = "back"
        }.context(this)), e(".add-details", this.questionForm).click(this.addQuestionDetails.context(this)), e(".cancel", this.questionForm).click(function (e) {
            e.preventDefault(), this._resetQuestionForm()
        }.context(this)), e("#questions-list > li.question", this.element).live("click", this.showQuestionDetailV2.context(this)), e(".btns .up", this.answersList).live("click", this.voteAnswer.context(this, 1)), e(".btns .down", this.answersList).live("click", this.voteAnswer.context(this, -1)), e("#answers-list > li .num-comments a.show", this.element).live("click", this.showAnswerComments.context(this)), e("#answers-list > li .num-comments a.add", this.element).live("click", this.addFirstComment.context(this)), e("#answers-list > li .add-comment a", this.element).live("click", this.addAnswerComment.context(this)), e("#answers-list > li .view-previous a", this.element).live("click", this.loadMoreComments.context(this)), e("#answers-list > li .js-delete-answer", this.element).live("click", this.deleteAnswer.context(this)), this.questionForm.submit(this.questionSubmit.context(this)), this.answerForm.submit(this.answerSubmit.context(this)), this.questionsAjaxLoader = e(".ajax-loader-stick", this.questionsMask), this.answersAjaxLoader = e(".ajax-loader-stick", this.responsesWrapper), this.answerBox = e(".answer-box", this.responsesWrapper), this.initializeQuestionsListInfiniteScroll(), this.initializeAnswersListInfiniteScroll(), this.initQuestionAutoSuggester()
    }, _initHandlebarsTemplates: function () {
        this.answerTemplate = Handlebars.compile(e("#answerTemplate").html()), this.questionTemplate = Handlebars.compile(e("#questionTemplate").html()), this.questionHeaderTemplate = Handlebars.compile(e("#questionHeaderTemplate").html()), this.questionDetailTemplate = Handlebars.compile(e("#questionDetailTemplate").html()), this.answerCommentTemplate = Handlebars.compile(e("#answerCommentTemplate").html())
    }, deleteAnswer: function (t) {
        t && t.preventDefault();
        if (!confirm("Are you sure you want to delete this answer?"))return;
        this.currentRequest.currentAnswer = e(t.currentTarget).parents("li").eq(0), this.currentRequest.answerId = this.currentRequest.currentAnswer.data("answerid"), this.submitRemoveAnswer(this.currentRequest.answerId)
    }, submitQuestionUpdate: function (t, n) {
        UD.API.call("/questions/" + t, {type: "POST", data: {data: {title: n}}, success: e.ud.ud_questionanswer.prototype.handleSubmitQuestionUpdateSuccess.call(e(".ud-questionanswer").data("ud_questionanswer"))})
    }, handleSubmitQuestionUpdateSuccess: function () {
    }, submitRemoveQuestion: function (t) {
        e(".ud-questionanswer").data("ud_questionanswer").currentRequest.questionId = t, UD.API.Question.destroy(t, e.ud.ud_questionanswer.prototype.handleSubmitRemoveQuestionSuccess.call(e(".ud-questionanswer").data("ud_questionanswer")))
    }, handleSubmitRemoveQuestionSuccess: function () {
        e("li[data-questionid=" + this.currentRequest.questionId + "]").remove();
        for (var t = 0; t < this.questions.length; t++)if (this.questions[t].id == this.currentRequest.questionId) {
            this.questions.splice(t, 1);
            break
        }
        e("#single-question .backto").click(), this.resetAnswerParams()
    }, submitAnswerUpdate: function (t, n) {
        var r = {data: {answer: n}};
        UD.API.Answer.update(t, r, e.ud.ud_questionanswer.prototype.handleSubmitAnswerUpdateSuccess.call(e(".ud-questionanswer").data("ud_questionanswer")))
    }, handleSubmitAnswerUpdateSuccess: function () {
    }, submitRemoveAnswer: function (t) {
        e(".ud-questionanswer").data("ud_questionanswer").currentRequest.answerId = t, UD.API.Answer.destroy(t, e.ud.ud_questionanswer.prototype.handleSubmitRemoveAnswerSuccess.call(e(".ud-questionanswer").data("ud_questionanswer")))
    }, handleSubmitRemoveAnswerSuccess: function (t) {
        $answer_part1 = e("li.vote[data-answerid=" + this.currentRequest.answerId + "]"), $answer_part2 = $answer_part1.next(), $answer_part1.remove(), $answer_part2.remove()
    }, submitCommentUpdate: function (t, n) {
        UD.API.call("/answers/comment/" + t, {type: "POST", data: {data: {comment: n}}, success: e.ud.ud_questionanswer.prototype.handleSubmitCommentUpdateSuccess.call(e(".ud-questionanswer").data("ud_questionanswer"))})
    }, handleSubmitCommentUpdateSuccess: function () {
    }, submitRemoveComment: function (t) {
        e(".ud-questionanswer").data("ud_questionanswer").currentRequest.commentId = t, UD.API.call("/answers/comment/" + t, {type: "POST", data: {method: "DELETE"}, success: e.ud.ud_questionanswer.prototype.handleSubmitRemoveCommentSuccess.call(e(".ud-questionanswer").data("ud_questionanswer"))})
    }, handleSubmitRemoveCommentSuccess: function (t) {
        var n = e("article[data-objectid=" + this.currentRequest.commentId + "]").parent().parent(), r = n.parent().data("answerid");
        e("article[data-objectid=" + this.currentRequest.commentId + "]").parent().remove();
        var i = n.children().length;
        i > 0 ? e(".num-comments a[data-answerid=" + r + "] span").html(i + " Comments") : e(".num-comments a[data-answerid=" + r + "] span").html("Add Comment")
    }, addQuestionDetails: function (t) {
        t.preventDefault(), e(".form-item-details", this.questionForm).show(), e(".add-details", this.questionForm).addClass("none"), e(".cancel", this.questionForm).removeClass("none"), this.questionsList.css("margin-top", "176px")
    }, questionSubmit: function (t) {
        t.preventDefault(), typeof tinyMCE != "undefined" && tinyMCE.triggerSave();
        var n = this.questionForm.serializeObject();
        n.title = e.trim(n.title), n.details = e.trim(n.details), n.title && UD.API.call("/questions", {type: "POST", data: {courseId: this.options.courseId, lectureId: this.currentRequest.lectureId, data: n}, success: this.renderNewQuestion.context(this), error: this.handleQuestionSubmitError.context(this)})
    }, questionSubmitSuccess: function (t) {
        e(".form-item-details", this.questionForm).css("display", "block")
    }, answerSubmit: function (t) {
        t.preventDefault();
        var n = this.answerForm.serializeObject();
        n.answer = e.trim(n.answer);
        if (n.answer) {
            var r = {questionId: this.currentRequest.questionId, data: n};
            UD.API.Answer.create(r, this.renderNewAnswer.context(this), this.handleAnswerSubmitError.context(this))
        }
    }, findQuestionById: function (e) {
        for (var t in this.questions)if (this.questions[t].id == e)return this.questions[t];
        var n = null;
        return UD.API.call("/questions/" + e, {async: !1, success: function (e) {
            n = e
        }}), n
    }, getLectureQuestions: function (t) {
        this.currentRequest.lectureId = t, e(".no-questions", this.questionsList).remove(), this.currentRequest.questionsListActive = !0, this.currentRequest.questionsPage == 1 && (this.questions = [], this.questionsList.html("")), this.questionsAjaxLoader.removeClass("none"), UD.API.call("/lectures/" + t + "/questions/", {type: "GET", data: {p: this.currentRequest.questionsPage, pageSize: this.currentRequest.pageSize}, success: this.renderQuestions.context(this)})
    }, getQuizQuestions: function (t) {
        this.currentRequest.quizId = t, e(".no-questions", this.questionsList).remove(), this.currentRequest.questionsListActive = !0, this.currentRequest.questionsPage == 1 && (this.questions = [], this.questionsList.html("")), this.questionsAjaxLoader.removeClass("none"), UD.API.call("/quizzes/" + t + "/questions/", {type: "GET", data: {p: this.currentRequest.questionsPage, pageSize: this.currentRequest.pageSize}, success: this.renderQuestions.context(this)})
    }, getCourseQuestions: function () {
        e(".form-item-title textarea", this.element).attr("placeholder", "Type your question about this course"), this.currentRequest.lectureId = null, e(".no-questions", this.questionsList).remove(), this.currentRequest.questionsListActive = !0, this.currentRequest.questionsPage == 1 && (this.questions = [], this.questionsList.html("")), this.questionsAjaxLoader.removeClass("none"), UD.API.call("/courses/" + this.options.courseId + "/questions", {type: "GET", data: {closeSessionWrites: 1, p: this.currentRequest.questionsPage, pageSize: this.currentRequest.pageSize}, success: this.renderQuestions.context(this)})
    }, renderNewQuestion: function (t) {
        this.questions.unshift(t);
        var n = {data: [t]};
        e(".no-questions", this.questionsList).remove(), this.questionsList.html(this.questionTemplate({data: this.questions})), this._resetQuestionForm(), this.resetSearchParams()
    }, _resetQuestionForm: function () {
        e(".form-item-details", this.questionForm).css("display", "none"), e(".form-item-title textarea", this.questionForm).removeClass("focus").val(""), e(".form-item-details textarea", this.questionForm).val(""), e(".bottom", this.questionForm).addClass("none"), e(".add-details", this.questionForm).removeClass("none"), e(".cancel", this.questionForm).addClass("none"), this.questionsList.css("margin-top", "0px")
    }, renderNewAnswer: function (t) {
        this.questions.push(t);
        if (this.options.isinstructor || t.is_owner)t.editable = !0;
        var n = {data: [t]};
        e(".no-answers", this.answersList).remove(), this.answersList.append(this.answerTemplate(n)), this.answersList.ud_initialize({onComplete: function () {
            e("textarea", this.answerForm).setCode("")
        }.context(this)})
    }, renderQuestions: function (e) {
        var t = e.data, n = e.pagination;
        n.page == 1 && (this.questions = [], this.questionsList.html("")), this.questions.push.apply(this.questions, t), n.page > 1 && t.length == 0 ? this.currentRequest.questionsListDisabled = !0 : (this.questionsList.append(this.questionTemplate(e)), this.questionsWrapper.removeClass("detail-view"), this.currentRequest.questionsListActive = !1), this.currentRequest.questionsPage = n.page + 1, this.questionsAjaxLoader.addClass("none")
    }, renderSearchQuestions: function (t) {
        var n = t.data, r = t.pagination;
        r.page == 1 && this.questionsList.html(""), this.questionsList.append(this.questionTemplate(t)), this.questionsWrapper.removeClass("detail-view"), this.currentRequest.questionsListActive = !1, this.currentRequest.searchQuestionsPage = r.page + 1, this.questionsAjaxLoader.addClass("none"), e(".ud-question-input", this.element).removeClass("ui-autocomplete-loading")
    }, searchQuestions: function (e) {
        this.currentRequest.questionsListActive = !0, this.currentRequest.searchQuestionsActive = !0, UD.API.call("/questions/search", {data: {q: e, courseId: this.options.courseId, lectureId: this.currentRequest.lectureId, p: this.currentRequest.searchQuestionsPage, pageSize: this.currentRequest.pageSize}, type: "POST", success: function (e) {
            this.renderSearchQuestions(e)
        }.context(this)})
    }, initQuestionAutoSuggester: function () {
        var t = e(".ud-question-input", this.element);
        t.length && t.autocomplete({source: function (e, t) {
            this.resetSearchParams(), this.searchQuestions(e.term)
        }.context(this), minLength: 0, delay: 300, search: function (t, n) {
            var r = e.trim(t.currentTarget.value);
            if (!r.length)return this.resetSearchParams(), e(t.currentTarget).removeClass("ui-autocomplete-loading"), this.currentRequest.lectureId > 0 ? this.getLectureQuestions(this.currentRequest.lectureId) : this.questionsList.html(this.questionTemplate({data: this.questions})), !1
        }.context(this)})
    }, showQuestionDetailV2: function (t) {
        t.preventDefault(), this.currentRequest.questionId = t ? e(t.currentTarget).data("questionid") : questionId, this.currentRequest.lectureId ? window.location.hash = "lecture/" + this.currentRequest.lectureId + "/" + "question" + "/" + this.currentRequest.questionId : window.location.hash = "question/" + this.currentRequest.questionId
    }, showQuestionDetail: function (t, n) {
        t && t.preventDefault(), this.currentRequest.questionId = t ? e(t.currentTarget).data("questionid") : n, this.currentRequest.currentQuestionElement = t ? e(t.currentTarget) : e("li[data-questionid=" + n + "]", this.questionsList), question = this.findQuestionById(this.currentRequest.questionId), e(".header", this.questionDetail).html(this.questionHeaderTemplate(question));
        if (question.is_requester_the_owner || this.options.isinstructor)question.editable = !0;
        e("#question", this.questionDetailResponsesWrapper).html(this.questionDetailTemplate(question)), this.questionDetailResponsesWrapper.ud_initialize({onComplete: function () {
            this.questionsWrapper.addClass("detail-view"), this.followButton = e("button.follow", this.questionDetail), this.followButton.click(this.followUnfollowQuestion.context(this)), this.answersList.html(""), this.getAnswers(question)
        }.context(this)})
    }, addAnswerComment: function (t) {
        t.preventDefault();
        var n = e(t.currentTarget);
        this.currentRequest.answerId = n.data("answerid"), this.currentRequest.currentCommentsElement = n.parent().parent("li"), this.currentRequest.currentCommentTextArea = e("textarea", n.parent("div"));
        var r = e.trim(this.currentRequest.currentCommentTextArea.val());
        r && UD.API.call("/answers/" + this.currentRequest.answerId + "/comments", {type: "POST", data: {data: {comment: r}}, success: function (t) {
            this.comments.push(t), t.editable = !0, e("ul", this.currentRequest.currentCommentsElement).append(this.answerCommentTemplate({data: t})), e("ul", this.currentRequest.currentCommentsElement).ud_initialize(), this.currentRequest.currentCommentTextArea.val(""), e(".num-comments a span", this.currentRequest.currentAnswer).html(this.comments.length + " Comments")
        }.context(this)})
    }, addFirstComment: function (t) {
        t.preventDefault(), this.resetCommentParams();
        var n = e(t.currentTarget);
        this.currentRequest.answerId = n.data("answerid"), this.currentRequest.currentAnswer = n.parent().parent("li"), this.currentRequest.currentCommentsElement = this.currentRequest.currentAnswer.next(), this.currentRequest.currentCommentsElement.toggleClass("none")
    }, showAnswerComments: function (t) {
        t.preventDefault();
        var n = e(t.currentTarget);
        this.currentRequest.answerId != n.data("answerid") ? (this.currentRequest.answerId = n.data("answerid"), this.currentRequest.currentAnswer = n.parent().parent("li"), this.currentRequest.currentCommentsElement = this.currentRequest.currentAnswer.next(), e("ul", this.currentRequest.currentCommentsElement).html(""), this.comments = [], e("textarea", this.currentRequest.currentCommentsElement).TextAreaExpander(30, 150), e(".ajax-loader-stick", this.currentRequest.currentAnswer).removeClass("none"), this.currentRequest.commentsPage = 1, this.getComments(this.currentRequest.answerId), this.currentRequest.currentAnswer.toggleClass("active"), this.currentRequest.currentCommentsElement.toggleClass("active")) : (this.currentRequest.currentAnswer.toggleClass("active"), this.currentRequest.currentCommentsElement.toggleClass("active"), this.currentRequest.currentCommentsElement.toggleClass("none"))
    }, getComments: function (t) {
        UD.API.call("/answers/" + t + "/comments", {data: {p: this.currentRequest.commentsPage, pageSize: this.currentRequest.pageSize}, success: function (t) {
            var n = t.pagination, r = t.data.reverse();
            this.comments.push.apply(this.comments, r);
            var i = this.comments.length, s = t.pagination.total;
            if (s > i) {
                var o = e(".view-previous", this.currentRequest.currentCommentsElement);
                e(".comments-counter .current", o).html(i), e(".comments-counter .total", o).html(s), o.removeClass("none")
            } else e(".view-previous", this.currentRequest.currentCommentsElement).addClass("none");
            for (var u = 0; u < r.length; u++)if (this.options.isinstructor || r[u].is_owner)r[u].editable = !0;
            var a = this.answerCommentTemplate({data: r});
            e("ul", this.currentRequest.currentCommentsElement).prepend(a), e("ul", this.currentRequest.currentCommentsElement).ud_initialize(), n.page == 1 ? (this.currentRequest.currentCommentsElement.toggleClass("none"), e(".ajax-loader-stick", this.currentRequest.currentAnswer).addClass("none")) : e(".ajax-loader-stick", this.currentRequest.currentCommentsElement).addClass("none"), this.currentRequest.commentsPage = n.page + 1
        }.context(this)})
    }, loadMoreComments: function (t) {
        t.preventDefault();
        var n = e(t.currentTarget);
        this.currentRequest.currentCommentsElement = n.closest(".answers-comments"), this.currentRequest.answerId = this.currentRequest.currentCommentsElement.data("answerid"), e(".ajax-loader-stick", this.currentRequest.currentCommentsElement).removeClass("none"), this.getComments(this.currentRequest.answerId)
    }, getAnswers: function (t) {
        this.currentRequest.answersListActive = !0, e(".no-answers", this.answersList).remove(), this.answersAjaxLoader.removeClass("none"), UD.API.call("/questions/" + t.id + "/answers", {data: {p: this.currentRequest.answersPage, pageSize: this.currentRequest.pageSize}, success: function (t) {
            var n = t.data, r = t.pagination;
            for (var i = 0; i < n.length; i++)if (this.options.isinstructor || n[i].is_owner)n[i].editable = !0;
            var s = this.answerTemplate({data: n});
            this.answersList.append(s), this.answersList.ud_initialize(), this.answersAjaxLoader.addClass("none"), this.answerBox.removeClass("none"), this.currentRequest.answersListActive = !1, this.currentRequest.answersPage = r.page + 1, r.page > 1 && n.length == 0 && (this.currentRequest.answersListDisabled = !0, e(".no-answers", this.answersList).remove())
        }.context(this)})
    }, followUnfollowQuestion: function (t) {
        t.preventDefault(), e(t.currentTarget).hasClass("off") ? this.unfollowQuestion(this.currentRequest.questionId) : this.followQuestion(this.currentRequest.questionId)
    }, followQuestion: function (e) {
        this.followButton.attr("disabled", "true"), UD.API.call("/questions/" + e + "/follow", {type: "POST", data: {questionId: e}, success: function (e) {
            e && (question = this.findQuestionById(this.currentRequest.questionId), question.following = !0, this.followButton.removeAttr("disabled"), this.followButton.addClass("off"), this.followButton.text("unfollow"))
        }.context(this)})
    }, unfollowQuestion: function (e) {
        this.followButton.attr("disabled", "true"), UD.API.call("/questions/" + e + "/unfollow", {type: "POST", data: {questionId: e}, success: function (e) {
            e && (question = this.findQuestionById(this.currentRequest.questionId), question.following = !1, this.followButton.removeAttr("disabled"), this.followButton.removeClass("off"), this.followButton.text("follow"))
        }.context(this)})
    }, voteAnswer: function (t, n) {
        n.preventDefault();
        var r = e(n.currentTarget).data("answerid");
        UD.API.call("/answers/" + r + "/vote", {type: "POST", data: {data: {vote: t}}, success: function (t) {
            if (t) {
                var r = e("span", e(n.currentTarget).parent().parent());
                r.text(t.vote_count), e(n.currentTarget).hasClass("on") ? e(n.currentTarget).removeClass("on") : e(n.currentTarget).addClass("on"), e(n.currentTarget).siblings().removeClass("on")
            }
        }})
    }, handleQuestionSubmitError: function (e) {
        return!1
    }, handleAnswerSubmitError: function (e) {
        return!1
    }, loadMoreQuestions: function () {
    }, loadMoreAnswers: function () {
    }, resetParams: function () {
        this.currentRequest.lectureId = null, this.currentRequest.questionsPage = 1, this.currentRequest.answersPage = 1, this.currentRequest.questionsListActive = !1, this.currentRequest.questionsListDisabled = !1, this.currentRequest.searchQuestionsActive = !1, this.currentRequest.answersListActive = !1, this.currentRequest.answersListDisabled = !1
    }, resetQuestionParams: function () {
        this.currentRequest.questionsPage = 1, this.currentRequest.questionsListActive = !1, this.currentRequest.questionsListDisabled = !1
    }, resetAnswerParams: function () {
        this.currentRequest.answersPage = 1, this.currentRequest.commentsPage = 1, this.comments = [], this.currentRequest.answerId = 0, this.currentRequest.answersListActive = !1, this.currentRequest.answersListDisabled = !1, this.answerBox.addClass("none")
    }, resetCommentParams: function () {
        this.currentRequest.commentsPage = 1, this.comments = []
    }, resetSearchParams: function () {
        this.currentRequest.searchQuestionsActive = !1, this.currentRequest.searchQuestionsPage = 1
    }, refreshQuestion: function (t) {
        question = this.findQuestionById(t), UD.API.call("/questions/" + t, {type: "GET", success: function (t) {
            e.each(t, function (e, t) {
                question[e] = t
            }), this.currentRequest.currentQuestionElement.replaceWith(this.questionTemplate({data: question}))
        }.context(this)})
    }, initializeQuestionsListInfiniteScroll: function () {
        this.questionsList.scroll(function () {
            var e = this.questionsList.get(0).scrollHeight, t = this.questionsList.height(), n = this.questionsList.scrollTop();
            !this.currentRequest.questionsListActive && !this.currentRequest.questionsListDisabled && !this.currentRequest.searchQuestionsActive && e - t - n <= 150 && (this.currentRequest.lectureId ? this.getLectureQuestions(this.currentRequest.lectureId) : this.getCourseQuestions())
        }.context(this))
    }, initializeAnswersListInfiniteScroll: function () {
        this.questionDetailResponsesWrapper.scroll(function () {
            var e = this.questionDetailResponsesWrapper.get(0).scrollHeight, t = this.questionDetailResponsesWrapper.height(), n = this.questionDetailResponsesWrapper.scrollTop();
            !this.currentRequest.answersListActive && !this.currentRequest.answersListDisabled && !this.currentRequest.searchQuestionsActive && e - t - n <= 150 && (question = this.findQuestionById(this.currentRequest.questionId), this.getAnswers(question))
        }.context(this))
    }})
}), define("ud.notetaking", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_notetaking", {options: {courseId: null}, currentRequest: {lectureId: null, noteId: null, page: 1, pageSize: 12, notesListActive: !1, notesListDisabled: !1}, notes: [], notesList: null, _positionHandler: {getPosition: function () {
        return null
    }, getTotal: function () {
        return null
    }, renderPosition: function (e) {
        return e === null ? "" : e
    }}, template: "", isStartedTakingNote: !1, position: 0, setPositionHandler: function (e) {
        this._positionHandler = e
    }, _create: function () {
        for (var t in this.options)typeof this.element.data(t.toLowerCase()) != "undefined" && (this.options[t] = this.element.data(t.toLowerCase()));
        this._initHandlebarsTemplates(), this.noteForm = e("#create-note-form", this.element), this.noteFormTextArea = e("textarea", this.noteForm), this.notesList = e("#notes-list", this.element), this.notesMask = e("#notes-mask", this.element), this.noteForm.submit(this.noteSubmit.context(this)), this.noteFormTextArea.keypress(function (e) {
            e.which == 13 && (e.shiftKey || (this.noteSubmit(e), e.preventDefault()))
        }.context(this)).keyup(function (e) {
            this.fixMargin(), this.setPosition(e)
        }.context(this)).focus(function (e) {
            this.fixMargin()
        }.context(this)).blur(function (e) {
            this.fixMargin()
        }.context(this)), e("time", this.element).live("click", this.gotoPosition.context(this)), this.initializeNotesListInfiniteScroll()
    }, _initHandlebarsTemplates: function () {
        this.noteTemplate = Handlebars.compile(e("#noteTemplate").html())
    }, noteSubmit: function (t) {
        t.preventDefault(), this.enableDownloadNotesButton();
        var n = this.noteForm.serializeObject();
        n.note = e.trim(n.note);
        if (!n.note)return;
        UD.API.call("/lectures/" + this.currentRequest.lectureId + "/notes", {type: "POST", data: {courseId: this.options.courseId, lectureId: this.currentRequest.lectureId, data: e.extend(n, {position: this.position})}, success: this.renderNewNote.context(this)})
    }, submitNoteUpdate: function (t, n) {
        e(".ud-notetaking").data("ud_notetaking").currentRequest.noteId = t, UD.API.call("/notes/" + t, {type: "POST", data: {data: {note: n, method: "PUT"}}, success: e.ud.ud_notetaking.prototype.handleSubmitNoteUpdateSuccess.call(e(".ud-notetaking").data("ud_notetaking"))})
    }, handleSubmitNoteUpdateSuccess: function () {
    }, submitRemoveNote: function (t) {
        e(".ud-notetaking").data("ud_notetaking").currentRequest.noteId = t, UD.API.call("/notes/" + t, {type: "POST", data: {method: "DELETE"}, success: e.ud.ud_notetaking.prototype.handleSubmitRemoveNoteSuccess.call(e(".ud-notetaking").data("ud_notetaking"))})
    }, handleSubmitRemoveNoteSuccess: function () {
        e("li[data-noteid=" + this.currentRequest.noteId + "]").remove(), this.element.find("#notes-list").children().length == 0 && this.disableDownloadNotesButton()
    }, showOldNote: function (e) {
    }, renderNewNote: function (e) {
        this.isStartedTakingNote = !1, this.notes.push(e);
        var t = [e];
        this.addRenderPositionMethod(t), this.checkPositionLabel(t);
        var n = {data: t};
        this.notesList.prepend(this.noteTemplate(n)), this.notesList.ud_initialize(), this.noteFormTextArea.val(""), this.noteFormTextArea.css("height", ""), this.fixMargin()
    }, getNotes: function (e) {
        this.addDownloadNotesURL(e), this.currentRequest.lectureId = e, this.currentRequest.notesListActive = !0, UD.API.call("/lectures/" + e + "/notes", {type: "GET", data: {p: this.currentRequest.page, pageSize: this.currentRequest.pageSize}, success: this.renderNotes.context(this)})
    }, getQuizNotes: function (e) {
        this.addDownloadNotesURL(e), this.currentRequest.quizId = e, this.currentRequest.notesListActive = !0, UD.API.call("/quizzes/" + e + "/notes", {type: "GET", data: {p: this.currentRequest.page, pageSize: this.currentRequest.pageSize}, success: this.renderNotes.context(this)})
    }, addDownloadNotesURL: function (e) {
        this.element.find("#download-button").attr("href", "/note/download/?lectureId=" + e)
    }, disableDownloadNotesButton: function () {
        this.element.find("#download-notes").hide()
    }, enableDownloadNotesButton: function () {
        this.element.find("#download-notes").show()
    }, checkPositionLabel: function (e) {
        for (i in e)e[i].positionLabel == "00:00" && (e[i].positionLabel = !1)
    }, renderNotes: function (e) {
        var t = e.data, n = e.pagination;
        this.notes.push.apply(this.notes, t), n.page > 1 && (t.length == 0 || t.length < n.pageSize) && (this.currentRequest.notesListDisabled = !0), n.page == 1 && this.notesList.html(""), this.addRenderPositionMethod(this.notes), this.checkPositionLabel(t), this.notesList.append(this.noteTemplate(e)), this.notesList.ud_initialize(), this.currentRequest.page = n.page + 1, this.currentRequest.notesListActive = !1, this.element.find("#notes-list").children().length == 0 ? this.disableDownloadNotesButton() : this.enableDownloadNotesButton()
    }, addRenderPositionMethod: function (t) {
        e.each(t, function (e, t) {
            typeof t["positionLabel"] == "undefined" && (t.positionLabel = this._positionHandler.renderPosition(t.position))
        }.context(this))
    }, destroy: function () {
    }, fixMargin: function () {
        var e = this.noteFormTextArea.css("height");
        this.notesMask.css("margin-top", e.substr(0, e.length - 2) - 26 + "px")
    }, setPosition: function (e) {
        if (e.which == 13)return;
        this.isStartedTakingNote == 0 && (this.isStartedTakingNote = !0, this.position = this._positionHandler.getPosition())
    }, initializeNotesListInfiniteScroll: function () {
        this.notesMask.scroll(function () {
            var e = this.notesMask.get(0).scrollHeight, t = this.notesMask.height(), n = this.notesMask.scrollTop();
            !this.currentRequest.notesListActive && !this.currentRequest.notesListDisabled && e - t - n <= 150 && this.getNotes(this.currentRequest.lectureId)
        }.context(this))
    }, resetParams: function () {
        this.currentRequest.page = 1, this.currentRequest.notesListActive = !1, this.currentRequest.notesListDisabled = !1
    }, gotoPosition: function (t) {
        window.location.hash = window.location.hash.split(":")[0], window.location.hash += ":" + e(t.currentTarget).data("position")
    }})
}), define("ud.extras", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_extras", {options: {lecture: null, courseId: null}, currentRequest: {lectureId: null}, extrasList: null, extras: [], courseDescription: null, _create: function () {
        for (var t in this.options)typeof this.element.data(t.toLowerCase()) != "undefined" && (this.options[t] = this.element.data(t.toLowerCase()));
        this._initHandlebarsTemplates();
        var n = this.element.parents(".sidebar-container").eq(0);
        this.extrasCountContainer = e(".tab-label-container .e .count-container", n), this.extrasCount = e(".count", this.extrasCountContainer), this.extrasContainer = e("#extras-container", this.element), this.extrasNav = e("#extras-nav", this.element), this.extrasSide = e("#extras-side", this.element)
    }, destroy: function () {
    }, removeCurrentContent: function (t) {
        e("#side-on", this.element).removeAttr("checked"), this.element.removeClass("on"), this.extrasSide.html(""), window.location.hash = "lecture/" + this.options.lecture.id
    }, _initHandlebarsTemplates: function () {
        this.extrasTemplate = Handlebars.compile(e("#extrasTemplate").html()), this.extrasContentTemplate = Handlebars.compile(e("#extrasContentTemplate").html()), this.extrasSourceCodeContentTemplate = Handlebars.compile(e("#extrasSourceCodeContentTemplate").html()), this.extrasContentTextTemplate = Handlebars.compile(e("#extrasContentTextTemplate").html()), this.lectureDescriptionTemplate = Handlebars.compile(e("#lectureDescriptionTemplate").html())
    }, getExtras: function (e) {
        this.options.lecture = e, this.currentRequest.lectureId = e.id, UD.API.call("/lectures/" + e.id + "/extras/", {success: this.renderExtras.context(this)})
    }, getQuizExtras: function (e) {
        this.currentRequest.quizId = e, UD.API.call("/quizzes/" + e + "/extras/", {success: this.renderExtras.context(this)})
    }, renderExtras: function (t) {
        this.options.lecture.extras = t.data, this.options.lecture.description = t.description, this.options.lecture.preview_mode = t.preview_mode, this.classifyExtras(), this.options.preview_mode = !1, this.extrasNav.html(this.extrasTemplate(this.options.lecture)), e("section.ext li").off("click").on("click", this.externalOnClick.context(this)), e("section.down li").off("click").on("click", this.downloadOnClick.context(this)), e("section.int li").off("click").on("click", this.interactiveOnClick.context(this))
    }, externalOnClick: function (t) {
        t && t.preventDefault();
        var n = e(t.currentTarget).data("id");
        window.location.hash = "lecture/" + this.options.lecture.id + "/" + "material" + "/" + n
    }, downloadOnClick: function (t) {
        t && t.preventDefault();
        var n = e(t.currentTarget).data("id"), r = this.findAssetById(n);
        this.downloadMaterialHandler(r)
    }, interactiveOnClick: function (t) {
        t && t.preventDefault();
        var n = e(t.currentTarget).data("id");
        window.location.hash = "lecture/" + this.options.lecture.id + "/" + "material" + "/" + n
    }, showMaterial: function (e) {
        var t = this.findAssetById(e);
        if (t)switch (t.type) {
            case"ExternalLink":
                this.externalResourceHandler(t);
                break;
            case"File":
                this.downloadMaterialHandler(t);
                break;
            case"SourceCode":
                this.sourceCodeEditorHandler(t)
        }
    }, downloadMaterialHandler: function (t, n) {
        n && n.preventDefault(), this._scrollToTop();
        var r = t.download_url.download;
        e("body").append("<iframe src='" + r + "' style='display: none;'></iframe>")
    }, externalResourceHandler: function (t) {
        this._scrollToTop(), e("#side-on", this.element).attr("checked", "checked"), this.element.addClass("on"), this.extrasSide.html(this.extrasContentTemplate({})), e(".action.back", this.extrasSide).on("click", this.removeCurrentContent.context(this));
        var n = e(".embedded-content", this.extrasSide).width();
        UD.API.call("/assets/" + t.id + "/preview/", {data: {maxWidth: n}, success: this.renderExternalResource.context(this)})
    }, sourceCodeEditorHandler: function (t) {
        this._scrollToTop(), e("#side-on", this.element).attr("checked", "checked"), this.element.addClass("on"), this.extrasSide.html(this.extrasSourceCodeContentTemplate(t)), e(".action.back", this.extrasSide).on("click", this.removeCurrentContent.context(this)), e(".action.download-source", this.extrasSide).on("click", this.downloadMaterialHandler.context(this, t)), UD.API.call("/assets/" + t.id + "/content/", {success: this.renderSourceCodeEditor.context(this, t)})
    }, renderSourceCodeEditor: function (t, n) {
        var r = n.html;
        e(".side-content", this.extrasSide).html(r), require(["ud.sourcecodeeditor"], function () {
            var n = {};
            n.asset = t, e(".ud-sourcecodeeditor", this.extrasSide).ud_sourcecodeeditor(n)
        }.context(this))
    }, renderExternalResource: function (t) {
        var n = t.details, r = t.text, i = UD.Utils.deEscapeHTML(r.item.description);
        e(".bar a.external", this.extrasSide).attr("href", n.url), n.html && e(".embedded-content", this.extrasSide).html(n.html), n.page_text_content = i, e(".text-content", this.extrasSide).html(this.extrasContentTextTemplate(n))
    }, classifyExtras: function () {
        this.options.lecture.interactive_materials = [], this.options.lecture.downloadable_materials = [], this.options.lecture.external_materials = [], this.options.lecture.lecture_files = [];
        for (var t in this.options.lecture.extras) {
            var n = this.options.lecture.extras[t];
            if (n.status === "1") {
                n.data = e.parseJSON(n.data);
                switch (n.type) {
                    case"SourceCode":
                        this.options.lecture.interactive_materials.push(n);
                        break;
                    case"File":
                        this.options.lecture.downloadable_materials.push(n);
                        break;
                    case"ExternalLink":
                        this.options.lecture.external_materials.push(n);
                        break;
                    default:
                        this.options.lecture.lecture_files.push(n)
                }
            }
        }
    }, findAssetById: function (e) {
        for (var t in this.options.lecture.extras) {
            var n = this.options.lecture.extras[t];
            if (n.id == e)return n
        }
        return null
    }, _scrollToTop: function () {
        this.element.scrollTop(0)
    }})
}), define("ud.lecture", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_lecture", {options: {lectureId: null, autoLoad: !0, courseId: null}, type: null, startPosition: null, position: null, total: null, lectureCompletedTimeout: null, lectureTrackTimeout: null, lectureTrackPause: !1, autoPlay: !0, _create: function () {
        for (var e in this.options)typeof this.element.data(e.toLowerCase()) != "undefined" && (this.options[e] = this.element.data(e.toLowerCase()));
        this.options.autoLoad && this.load(), this.element.bind("lectureCompleted_" + this.options.lectureId, this.lectureCompleteHandler.context(this)), this.element.bind("lectureDownloaded_" + this.options.lectureId, this.lectureDownloadHandler.context(this)), this.element.bind("lectureProgress_" + this.options.lectureId, this.lectureProgressHandler.context(this)), this.element.bind("lecturecontentready_" + this.options.lectureId, this._contentReady.context(this))
    }, lectureCompleteHandler: function (t, n) {
        e("#timeline li[data-lectureid=" + this.options.lectureId + "] .mark").addClass("read"), e("#timeline li[data-lectureid=" + this.options.lectureId + "]").addClass("completed");
        var r = e(".ud-lecture[data-lectureid=" + this.options.lectureId + "]").parents(".ud-coursetaking").data("ud_coursetaking");
        r.timeline[r.reverseIndex["lecture" + this.options.lectureId]].just_completed = !0
    }, lectureDownloadHandler: function (e, t) {
        UD.API.call("/lectures/" + this.options.lectureId + "/downloaded", {type: "POST", async: !1, success: function (e) {
            e.is_completed && this.element.trigger("lectureCompleted_" + this.options.lectureId)
        }.context(this)})
    }, lectureProgressHandler: function (e, t) {
        UD.API.call("/lectures/" + this.options.lectureId + "/progress", {type: "POST", data: {data: Base64.encode(JSON.stringify(t))}, success: function (e) {
            e.is_completed && this.element.trigger("lectureCompleted_" + this.options.lectureId)
        }.context(this)})
    }, sendProgressData: function () {
        this.element.trigger("lectureProgress_" + this.options.lectureId, {position: 1, total: 1})
    }, unload: function () {
        this.element.empty(), clearTimeout(this.lectureCompletedTimeout)
    }, load: function (t) {
        this._getAnalyticsTrackingCode(), UD.API.call("/lectures/" + this.options.lectureId + "/content", {success: function (e) {
            if (this.type = e.type)this.element.html(e.html), this.element.ud_initialize({onComplete: function () {
                e.isPreRoll || (this.markAsViewed(), this.setPositionHandler()), t && t(e)
            }.context(this)})
        }.context(this), error: function (t) {
            var n = UD.Config.link("course", "buynow-popup", {courseId: this.options.courseId}), r = '<a class="ud-popup" id="buynow-popup" data-autoopen="true" data-closeable="false" href="' + n + '" style="display: none;"></a>';
            e("body").append(r), e("#buynow-popup").ud_popup()
        }.context(this)})
    }, markAsViewed: function () {
        UD.API.call("/lectures/" + this.options.lectureId + "/viewed", {type: "POST"})
    }, _initJwplayer: function (t) {
        require(["jwplayer", "jwplayer5"], function (t) {
            t.errorLogData.lectureId = this.options.lectureId, t.api.onReady(function (e) {
                this.total = t.api.getDuration(), this.element.trigger("lecturecontentready_" + this.options.lectureId, {targetObj: t})
            }.context(this)), t.api.onPlay(function () {
                var t = e(".ud-lecture[data-lectureid=" + this.options.lectureId + "]").parents(".ud-coursetaking").data("ud_coursetaking"), n = t.timeline[t.reverseIndex["lecture" + this.options.lectureId]];
                this.loadWindowOnBeforeUnload("You are watching lecture " + n.data.title)
            }.context(this)), t.api.onPause(function () {
                this.onBeforeUnload(), this.loadWindowOnBeforeUnload();
                var e = parseFloat(this.total.toString().substring(0, this.total.toString().indexOf(".") + 2));
                e === t.api.getPosition() && this.autoPlay && this.autoLoadNextLecture()
            }.context(this)), t.api.onComplete(function () {
                this.onBeforeUnload(), this.loadWindowOnBeforeUnload(), this.autoPlay && this.autoLoadNextLecture()
            }.context(this)), t.api.onTime(function (e) {
                this.total = e.duration, this.position = e.position
            }.context(this))
        }.context(this, t))
    }, setPositionHandler: function () {
        switch (this.type) {
            case"VideoMashup":
            case"Video":
            case"Audio":
                this.total = 0, this.position = 0;
                var t = e(".ud-jwplayer", this.element).data("ud_jwplayer");
                typeof t == "undefined" ? require(["ud.jwplayer"], function () {
                    e(".ud-jwplayer", this.element).ud_jwplayer(), this._initJwplayer(t)
                }.context(this)) : this._initJwplayer(t);
                break;
            case"Article":
            case"File":
            case"Image":
            case"ImportContent":
            case"RecordedSession":
            case"Upcoming":
                this.lectureCompletedTimeout = setTimeout(function () {
                    this.sendProgressData.call(this)
                }.context(this), 1e4);
                break;
            case"EBook":
            case"Presentation":
                e(window).bind("beforeunload." + this.options.lectureId, function () {
                    this.onBeforeUnload()
                }.context(this)), this.element.bind("positionHandler_" + this.options.lectureId, function (e, t) {
                    this.total = t.duration, this.position = t.position
                }.context(this));
                var n = e(".ud-" + this.type.toLowerCase() + "viewer", this.element).data("ud_" + this.type.toLowerCase() + "viewer");
                n && n.onReady(function () {
                    setTimeout(function () {
                        this.total = n.getSlidesNum(), e.event.trigger("lecturecontentready_" + this.options.lectureId, {targetObj: n})
                    }.context(this), 1)
                }.context(this))
        }
    }, getPosition: function () {
        return this.position
    }, getTotal: function () {
        return this.total
    }, renderPosition: function (e) {
        switch (this.type) {
            case"Video":
            case"VideoMashup":
            case"Audio":
                return this._renderTime(e);
            case"EBook":
            case"Presentation":
                return this._renderPage(e);
            default:
                return null
        }
    }, _renderTime: function (e) {
        if (e >= 0) {
            e = Math.round(e);
            var t = function (e) {
                return e < 10 ? "0" + e : e
            };
            for (blocks = []; e > 60; e = Math.floor(e / 60))blocks.push(t(e % 60));
            return blocks.push(t(e)), blocks.length < 2 && blocks.push("00"), blocks.reverse().join(":")
        }
        return""
    }, _renderPage: function (e) {
        return e >= 0 ? "Page " + e : ""
    }, _contentReady: function (e, t) {
        t.targetObj.element.bind("gotoposition_" + this.options.lectureId, t.targetObj.seek.context(t.targetObj))
    }, gotoPosition: function (t) {
        (parseInt(t.position) <= this.total || this.total === -1) && e.event.trigger("gotoposition_" + this.options.lectureId, t)
    }, onBeforeUnload: function () {
        var t, n = parseInt(this.position);
        if (!n)return;
        switch (this.type) {
            case"Video":
            case"Audio":
            case"VideoMashup":
                t = this.total * .95;
                break;
            default:
                t = this.total
        }
        n > t && (n = 0), UD.API.call("/lectures/" + this.options.lectureId + "/last-position", {type: "POST", data: {position: n}});
        var r = e(e("li[data-lectureid=" + this.options.lectureId + "] a", "#curriculum")[0]), i = r.attr("href").split(":")[0];
        r.attr("href", i + ":" + n);
        var s = e(".ud-lecture[data-lectureid=" + this.options.lectureId + "]").parents(".ud-coursetaking").data("ud_coursetaking");
        s.timeline[s.reverseIndex["lecture" + this.options.lectureId]].data.start_position = n
    }, autoLoadNextLecture: function () {
        e(".next-lecture", this.element.parents("li")).trigger("click", {publishCompleteEvent: !1});
        var t = e(".ud-lecture[data-lectureid=" + this.options.lectureId + "]").parents(".ud-coursetaking").data("ud_coursetaking"), n = t.timeline[t.reverseIndex["lecture" + this.options.lectureId] + 2];
        if (n.type == "chapter") {
            var r = t.timeline[t.reverseIndex["lecture" + this.options.lectureId] + 1].autoSkipIn * 2, i = setTimeout(function () {
                e(".next-lecture.continue", n.element).trigger("click", {publishCompleteEvent: !1})
            }.context(this), r);
            e(".next-lecture.continue", n.element).bind("click.chaptercontinue", function () {
                clearTimeout(i), e(".next-lecture.continue", n.element).unbind("click.chaptercontinue")
            })
        }
    }, loadWindowOnBeforeUnload: function (t) {
        e(window).unbind("beforeunload." + this.options.lectureId), e(window).bind("beforeunload." + this.options.lectureId, function () {
            this.onBeforeUnload();
            if (typeof t != "undefined")return t
        }.context(this))
    }, _getAnalyticsTrackingCode: function () {
        UD.API.call("/lectures/" + this.options.lectureId + "/tracking-code", {success: function (e) {
            this.element.append(e.code)
        }.context(this)})
    }})
}), define("ud.form", ["jquery", "ud.package.default"], function (e) {
    e.widget("ud.ud_form", {options: {pages: []}, _create: function () {
        if (this.element.attr("data-page-name")) {
            this.options.pages = this.element.attr("data-page-name").split(",");
            for (var e = 0; e < this.options.pages.length; e++)typeof this.pages[this.options.pages[e]] != "undefined" && this.pages[this.options.pages[e]].apply(this)
        }
        window.tmp = this
    }, destroy: function () {
    }, pages: {}}), UD.form = {submit: function (t, n) {
        e("#" + t).submit()
    }, onsubmit: function (t, n) {
        e("#" + t).onsubmit()
    }}, e.extend(e.ud.ud_form.prototype.pages, {submit: function () {
        this.element.submit()
    }, onsubmit: function () {
        this.element.onsubmit()
    }, "enable-default-text": function () {
        var e = this.element;
        if (!e)return;
        var t = e.attr("uDefaultText") || null;
        t && !e.val() && (e.val(t), e.addClass("default-text-field"), e.click(function (n) {
            e.value == t && (e.val(""), e.removeClass("default-text-field")), n.preventDefault()
        }), e.focus(function (n) {
            e.val() == t && (e.val(""), e.removeClass("default-text-field")), n.preventDefault()
        }), e.blur(function (n) {
            e.val() || (e.val(t), e.addClass("default-text-field"))
        }))
    }, "show-settings": function () {
        var t = this;
        this.element.click(function (n) {
            var r = e("#" + t.element.data("el"));
            if (!r)return!1;
            var i = r.attr("id");
            if (!i)return!1;
            var s = e("#show-settings-" + i), o = e("#hide-settings-" + i);
            if (!s || !o)return!1;
            s.hide(), o.show(), r.show()
        })
    }, "hide-settings": function () {
        var t = this;
        this.element.click(function (n) {
            var r = e("#" + t.element.data("el"));
            if (!r)return!1;
            var i = r.attr("id");
            if (!i)return!1;
            var s = e("#show-settings-" + i), o = e("#hide-settings-" + i);
            if (!s || !o)return!1;
            s.show(), o.hide(), r.hide()
        })
    }})
}), define("ud.coursetaking", ["jquery", "ud.package.default", "ud.courseannouncement", "ud.questionanswer", "ud.notetaking", "ud.extras", "ud.lecture", "ud.form", "jquery.rating"], function (e) {
    e.widget("ud.ud_coursetaking", {options: {courseId: null, coursetitle: null, courseurl: null, isInstructor: null, defaultLectureId: null, userId: null, previewModeActive: null, autoPlay: 1, uiMessages: null}, currentRequest: {studentsPage: 1, pageSize: 12, studentsListActive: !1, studentsListDisabled: !1}, curriculumRenderedSuccessfully: !1, reviewFeedbackArray: Array(), qawidget: null, courseqawidget: null, notewidget: null, extraswidget: null, dashboard: null, curriculum: [], courseInfo: null, courseInfoElement: null, courseProgress: null, courseProgressElement: null, courseSettingsElement: null, ratingPanel: null, courseReview: null, curriculumElement: null, currentIndex: -1, timelineElement: null, timeline: [], reverseIndex: {}, sidebarCloseToggledByUser: !1, _create: function () {
        var t = window.location.hash, n = "^#((lecture|chapter|certificate)/([0-9]+))/?((questions|extras|notes|question|material)(/?([0-9]*)))?", r = t.match(n);
        r || e("#course-dashboard").removeClass("none");
        for (var i in this.options)typeof this.element.data(i.toLowerCase()) != "undefined" && (this.options[i] = this.element.data(i.toLowerCase()));
        this.reviewFeedbackArray[1] = this.options.uiMessages.feedbackDidntLike, this.reviewFeedbackArray[2] = this.options.uiMessages.feedbackDidntLike, this.reviewFeedbackArray[3] = this.options.uiMessages.feedbackCourseFine, this.reviewFeedbackArray[4] = this.options.uiMessages.feedbackCourseGood, this.reviewFeedbackArray[5] = this.options.uiMessages.feedbackCourseVeryGood, this._initHandlebarsTemplates(), this.dashboard = e("#course-dashboard"), this.qawidget = e(".ud-questionanswer", this.element), this.courseqawidget = e(".ud-questionanswer", this.dashboard), this.notewidget = e(".ud-notetaking", this.element), this.extraswidget = e(".ud-extras", this.element), this.timelineElement = e("ul#timeline", this.element), this.curriculumElement = e("div#curriculum .wrapper", this.dashboard), this.courseInfoElement = e("div.top", this.dashboard), this.courseProgressElement = e("div.main-content #progress", this.dashboard), this.courseReviewsElement = e("#instructor-course-reviews", this.dashboard), this.ratingPanel = e("#rating-panel", this.dashboard), this.courseSettingsElement = e(".settings", this.dashboard), this.studentsListWrapper = e("#students"), this.studentsList = e("#students-list", this.studentsListWrapper), this.studentsListAjaxLoader = e(".ajax-loader", this.studentsListWrapper), this.dashboardCoursePopupContent = e("#dashboard-course-popup-content", this.dashboard), this.loadCourse(), this.initCourseInfoButton(), e(window).bind("hashchange", this.onUrlChange.context(this)), e(".sidebar", this.element).bind("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd", function () {
            e(window).resize()
        }.context(this)), e(".sidebar a.close-btn", this.element).click(function () {
            return this.element.hasClass("off") ? this.element.removeClass("off") : this.element.addClass("off"), this.sidebarCloseToggledByUser = !0, !1
        }.context(this)), e(".auto-submit-star", this.dashboard).rating({callback: this._submitRating.context(this)}), e(".cancel-rating", this.dashboard).click(function (e) {
            this.cancelRating(e)
        }.context(this)), e("input[type=submit]", this.ratingPanel).click(function (e) {
            e.preventDefault(), this._updateReview(1)
        }.context(this)), e(".after-rating .update-btn", this.ratingPanel).click(function (e) {
            e.preventDefault(), this._getReview()
        }.context(this)), e(".rate-main .remove-btn", this.ratingPanel).click(function (e) {
            e.preventDefault(), this._removeReview()
        }.context(this)), e(".mark", this.element).live("click", this.markAsCompletedToggle.context(this)), e("a.autoplay", this.element).live("click", function (t) {
            t.preventDefault();
            var n = e(t.currentTarget), r = n.data("name"), i = n.hasClass("on");
            this.options.autoPlay = !i, data = {}, data.settings = {}, data.settings[r] = this.options.autoPlay ? 1 : 0, this.getLectureWidget(this.timeline[this.currentIndex].id).data("ud_lecture").autoPlay = this.options.autoPlay, UD.API.call("/users/me/settings", {type: "POST", data: data}), i ? (n.removeClass("on"), e("span", n).html("OFF")) : (n.addClass("on"), e("span", n).html("ON"))
        }.context(this)), e("#go-back").live("click", function () {
            this.loadCourseProgress(), this.loadCourseQuestions()
        }.context(this)), this.options.previewModeActive && this.initPreviewMode()
    }, destroy: function () {
    }, _initHandlebarsTemplates: function () {
        this.courseInfoPopupTemplate = Handlebars.compile(e("#courseInfoPopupTemplate").html()), this.dashboardCourseProgressTemplate = Handlebars.compile(e("#dashboardCourseProgressTemplate").html()), this.dashboardLectureElementTemplate = Handlebars.compile(e("#dashboardLectureElementTemplate").html()), this.dashboardChapterElementTemplate = Handlebars.compile(e("#dashboardChapterElementTemplate").html()), this.dashboardQuizElementTemplate = Handlebars.compile(e("#dashboardQuizElementTemplate").html()), this.lectureTemplate = Handlebars.compile(e("#lectureTemplate").html()), this.progressTemplate = Handlebars.compile(e("#progressTemplate").html()), this.chapterTemplate = Handlebars.compile(e("#chapterTemplate").html()), this.quizTemplate = Handlebars.compile(e("#quizTemplate").html()), this.quizViewTemplate = Handlebars.compile(e("#quizViewTemplate").html()), this.quizNotPublishedViewTemplate = Handlebars.compile(e("#quizNotPublishedViewTemplate").html()), this.certificateTemplate = Handlebars.compile(e("#certificateTemplate").html()), this.courseStudentTemplate = Handlebars.compile(e("#courseStudentTemplate").html()), this.dashboardCourseInfoTemplate = Handlebars.compile(e("#dashboardCourseInfoTemplate").html()), Handlebars.registerHelper("generateMessageUrl", function (t) {
            return UD.Config.link("message", "", {action: "send-new", userId: e.trim(t)})
        }), Handlebars.registerHelper("times", function (e, t) {
            var n = "";
            for (var r = 0; r < e; ++r)n += t.fn(r);
            return n
        }), Handlebars.registerHelper("for", function (e, t, n, r) {
            var i = "";
            for (var s = e; s < t; s += n)i += r.fn(s);
            return i
        }), Handlebars.registerHelper("add", function (e, t) {
            return e + t
        }), Handlebars.registerHelper("isYes", function (e, t) {
            var n = t.fn, r = t.inverse;
            return e === "Yes" ? n(this) : r(this)
        }), Handlebars.registerHelper("isNo", function (e, t) {
            var n = t.fn, r = t.inverse;
            return e === "No" ? n(this) : r(this)
        })
    }, onUrlChange: function (t) {
        var n, r = window.location.hash, i = "^#((quiz|lecture|chapter|certificate)/([0-9]+)(:([0-9]+))?)?/?((extra|note|question|material)/([0-9]*))?", s = r.match(i);
        if (s && typeof s[3] != "undefined")switch (s[2]) {
            case"quiz":
            case"chapter":
            case"lecture":
                n = this.timeline[this.reverseIndex[s[2] + s[3]]], n.data.start_position = 0, typeof s[5] != "undefined" && (n.data.start_position = s[5]), this.element.removeClass("none"), this.dashboard.addClass("none"), this.currentIndex != n.index && this.showContent(n), typeof s[8] != "undefined" ? s[7] == "question" ? (e("input[type=radio]", e(".sidebar-container", this.element)).removeAttr("checked"), e("input[type=radio].tab-questions", e(".sidebar-container", this.element)).attr("checked", "checked"), this.openSpecificQuestion(s[8], !0)) : s[7] == "material" && (e("input[type=radio]", e(".sidebar-container", this.element)).removeAttr("checked"), e("input[type=radio].tab-materials", e(".sidebar-container", this.element)).attr("checked", "checked"), this.openSpecificMaterial(s[8])) : (typeof t == "undefined" || t.originalEvent.oldURL.indexOf("/question") == -1 && t.originalEvent.oldURL.indexOf("/material") == -1) && e.event.trigger("gotoposition_" + n.id, {position: n.data.start_position, autostart: !0});
                return;
            default:
                this.showDashboard();
                return
        }
        if (s && typeof s[8] != "undefined")switch (s[7]) {
            case"question":
                this.getCourseQuestionAnswerWidget() && this.getCourseQuestionAnswerWidget().resetAnswerParams(), this.openSpecificQuestion(s[8], !1);
                return;
            default:
                this.showDashboard();
                return
        }
        this.showDashboard();
        return
    }, markedCompletedByUser: function () {
        var e = this.timeline[this.currentIndex].id;
        UD.API.call("/lectures/" + e + "/completed", {type: "POST", success: this.loadCourseProgress.context(this)})
    }, markedUncompletedByUser: function () {
        var e = this.timeline[this.currentIndex].id;
        UD.API.call("/lectures/" + e + "/uncompleted", {type: "POST", success: this.loadCourseProgress.context(this)})
    }, initPreviewMode: function () {
        this.updateRemainingPreviewTime()
    }, updateRemainingPreviewTime: function () {
        UD.API.call("/course-previews/time-spent/" + this.options.courseId, {data: {closeSessionWrites: 1}, success: this.handlePreviewTimeUsed.context(this)})
    }, handlePreviewTimeUsed: function (t) {
        var n = t.seconds_used, r = t.is_finished, i = t.remaining_seconds, s = Math.ceil(i / 60);
        e(".preview-remaining-time").text(s);
        if (i <= 0) {
            var o = '<a class="ud-popup" id="buynow-popup" data-autoopen="true" data-closeable="false" href="/course/buynow-popup?courseId=' + this.options.courseId + '" style="display: none;"></a>';
            e("body").append(o), e("#buynow-popup").ud_popup()
        } else setTimeout(this.updateRemainingPreviewTime.context(this), 1e4)
    }, submitPreviewCommentAndRedirect: function (e, t) {
        UD.API.call("/course-previews/add-preview-comment/" + t, {type: "POST", data: {comment: e}, success: function () {
            window.location = window.location.origin + "/discover"
        }, error: function () {
            window.location = window.location.origin + "/discover"
        }})
    }, loadCourseInfo: function () {
        UD.API.call("/courses/" + this.options.courseId, {data: {closeSessionWrites: 1}, success: this.renderCourseInfo.context(this)})
    }, renderCourseInfo: function (e) {
        this.courseInfo = e, this.courseInfoElement.html(this.dashboardCourseInfoTemplate(e)), this.renderCourseReviews(e), this.courseInfoElement.ud_initialize()
    }, initCourseInfoButton: function () {
        e(".right-col .btns .subs", this.dashboard).live("click", function (e) {
            e.preventDefault(), this.showStudentsListPopup()
        }.context(this)), e(".right-col .btns .info", this.dashboard).live("click", function (e) {
            e.preventDefault(), this.showCourseInfoPopup()
        }.context(this)), e(".more a", this.studentsListWrapper).live("click", function (e) {
            e.preventDefault(), this.getStudents()
        }.context(this)), e(".follow, .following", this.studentsListWrapper).live("click", function (t) {
            t.preventDefault();
            var n = e(t.currentTarget), r = n.data("userid");
            n.hasClass("follow") ? UD.API.call("/users/me/follow/" + r, {success: this.followUserResponse.context(this, n)}) : n.hasClass("following") && UD.API.call("/users/me/unfollow/" + r, {success: this.unfollowUserResponse.context(this, n)})
        }.context(this)), e(".settings", this.dashboard).live("click", function (t) {
            e(".settings-content", this.dashboard).toggleClass("none")
        }.context(this)), e(".ttip .switcher").live("click", function (t) {
            var n = e(t.currentTarget), r = n.parent().attr("data-setting-val"), i = r == "off" ? "on" : "off", s = n.parent().data("setting-id"), o = {};
            o[s] = i, this._submitSetting(o), n.parent().attr("data-setting-val", i), n.hasClass("on") ? (n.removeClass("on"), n.addClass("off")) : (n.addClass("on"), n.removeClass("off"))
        }.context(this)), e(".unsubscribe-course-link").live("click", function (t) {
            var n = confirm(e(t.currentTarget).data("unsubcribe-confirm-text"));
            n == 1 && (window.location.href = UD.Config.link("course", "unsubscribe", {courseId: this.options.courseId}))
        }.context(this))
    }, loadCourseInfoPopupContent: function () {
        UD.API.call("/courses/" + this.options.courseId + "/extended", {type: "GET", success: function (e) {
            this.dashboardCoursePopupContent.html(this.courseInfoPopupTemplate(e))
        }.context(this)})
    }, updateCurriculumAndTimelineWithProgress: function () {
        if (this.courseProgress == null) {
            setTimeout(this.updateCurriculumAndTimelineWithProgress, 50);
            return
        }
        e(".completion-ratio", this.element).html(this.courseProgress.completion_ratio + "%"), this.courseProgress.num_completed_lectures == this.courseProgress.num_lectures ? e(".certificate").prev().prev().find(".next-lecture").removeClass("none") : e(".certificate").prev().prev().find(".next-lecture").addClass("none"), e("li", this.curriculumElement).each(function (t, n) {
            if (e(n).data("lectureid"))var r = this.courseProgress.lectures_progress[e(n).data("lectureid")] || {status: ""}, i = "lecture"; else if (e(n).data("quizid"))var r = this.courseProgress.quiz_progress[e(n).data("quizid")] || {status: ""}, i = "quiz";
            e(".circle", e(n)).hasClass(r.status) || e(".circle", e(n)).removeClass("viewed").removeClass("started").removeClass("completed").addClass(r.status), i == "lecture" ? e(".btn", e(n)).html(this.getButtonLabelForLectureStatus(r.status)) : e(".btn", e(n)).html(this.getButtonLabelForQuizStatus(r.status))
        }.context(this)), e("li", this.timelineElement).each(function (t, n) {
            var r = this.courseProgress.lectures_progress[e(n).data("lectureid")] || {status: "viewed"};
            r.status == "completed" ? (e(".mark", e(n)).addClass("read"), e(n).addClass("completed")) : (e(".mark", e(n)).removeClass("read"), e(n).removeClass("completed"))
        }.context(this))
    }, loadCourseProgress: function () {
        UD.API.call("/courses/" + this.options.courseId + "/progress", {data: {closeSessionWrites: 1}, success: this.renderCourseProgress.context(this)})
    }, renderCourseProgress: function (e) {
        var t = e;
        t.isCompleted = t.num_completed_lectures == t.num_lectures, t.next_lecture ? t.num_completed_lectures == 0 ? t.progressButtonText = this.options.uiMessages.startWithLecture + t.next_lecture.title : t.num_completed_lectures == t.num_lectures ? t.progressButtonText = this.options.uiMessages.completedCourse : t.progressButtonText = this.options.uiMessages.continueWithLecture + t.next_lecture.title : t.progressButtonText = this.options.uiMessages.noLectures, this.courseProgress = t, this.curriculumRenderedSuccessfully && this.updateCurriculumAndTimelineWithProgress(), this.courseProgressElement.html(this.dashboardCourseProgressTemplate(this.courseProgress))
    }, getButtonLabelForLectureStatus: function (e) {
        return e == "started" ? this.options.uiMessages.resumeLecture : e == "completed" ? this.options.uiMessages.revisitLecture : this.options.uiMessages.startLecture
    }, getButtonLabelForQuizStatus: function (e) {
        return e == "started" ? this.options.uiMessages.resumeQuiz : e == "completed" ? this.options.uiMessages.revisitQuiz : this.options.uiMessages.startQuiz
    }, loadCourseCurriculum: function () {
        UD.API.call("/courses/" + this.options.courseId + "/curriculum", {data: {closeSessionWrites: 1}, success: this.renderCourseCurriculum.context(this)})
    }, renderCourseCurriculum: function (t) {
        this.curriculum = t;
        var n = 0, r = !0, i = !0, s = this.curriculum.length, o = [];
        this.curriculumElement.html("");
        for (var u = 0; u < this.curriculum.length; u++)if (this.curriculum[u].__class == "lecture") {
            this.curriculum[u].isFirstLecture = !0;
            break
        }
        for (var u = this.curriculum.length - 1; u >= 0; u--)if (this.curriculum[u].__class == "lecture") {
            this.curriculum[u].isLastLecture = !0;
            break
        }
        for (var a in this.curriculum) {
            var f = this.curriculum[a], l = {id: f.id, type: f.__class, data: f, index: n, element: null};
            if (f.__class == "lecture") {
                f.progress_status = "";
                var c = "";
                r && (this.curriculumElement.append("<ul></ul>"), r = !1), e("ul", this.curriculumElement).last().append(this.dashboardLectureElementTemplate(f)), l.element = e(this.lectureTemplate(f)), this.timelineElement.append(l.element), this.timeline.push(l), this.reverseIndex[f.__class + f.id] = n++;
                var h = {id: f.id, type: "progress", autoSkipIn: 2e3, data: {progress: 70}, index: n, element: null};
                h.element = e(this.progressTemplate(h.data)), this.timelineElement.append(h.element), this.timeline.push(h), this.reverseIndex[h.type + f.id] = n++
            } else if (f.__class == "chapter") {
                r = !0, this.curriculumElement.append(this.dashboardChapterElementTemplate(f));
                var u = parseInt(a) + 1, p = [];
                while (u < this.curriculum.length && this.curriculum[u.toString()].__class != "chapter")this.curriculum[u.toString()].__class == "lecture" && p.push(this.curriculum[u.toString()]), u++;
                l.element = e(this.chapterTemplate({chapter: f, lectures: p})), this.timelineElement.append(l.element), this.timeline.push(l), this.reverseIndex[f.__class + f.id] = n++
            } else if (f.__class == "quiz") {
                f.progress_status = "";
                var c = "";
                r && (this.curriculumElement.append("<ul></ul>"), r = !1), e("ul", this.curriculumElement).last().append(this.dashboardQuizElementTemplate(f)), l.element = e(this.quizTemplate(f)), this.timelineElement.append(l.element), this.timeline.push(l), this.reverseIndex[f.__class + f.id] = n++;
                var h = {id: f.id, type: "progress", autoSkipIn: 2e3, data: {progress: 70}, index: n, element: null};
                h.element = e(this.progressTemplate(h.data)), this.timelineElement.append(h.element), this.timeline.push(h), this.reverseIndex[h.type + f.__class + f.id] = n++
            }
        }
        var d = {id: "1", type: "certificate", data: {course_title: this.options.coursetitle, course_url: this.options.courseurl}, index: n, element: null};
        d.element = e(this.certificateTemplate(d.data)), this.timelineElement.append(d.element), this.timeline.push(d), this.reverseIndex[d.type + d.id] = n++, e(".prev-lecture", this.timelineElement).click(this.prev.context(this)), e(".next-lecture", this.timelineElement).click(this.next.context(this));
        var v = {};
        v.courseId = this.options.courseId, e(".ud-lecture", this.timelineElement).ud_lecture(v), this.curriculumRenderedSuccessfully = !0, this.updateCurriculumAndTimelineWithProgress(), this.onUrlChange()
    }, loadCourseQuestions: function () {
        this.getCourseQuestionAnswerWidget() && this.getCourseQuestionAnswerWidget().resetParams(), this.getCourseQuestionAnswerWidget() && this.getCourseQuestionAnswerWidget().getCourseQuestions()
    }, openSpecificQuestion: function (t, n) {
        if (n) {
            if (this.getQuestionAnswerWidget()) {
                if (!e.trim(this.getQuestionAnswerWidget().questionsList.html())) {
                    setTimeout(this.openSpecificQuestion.context(this), 50, t, n);
                    return
                }
                this.getQuestionAnswerWidget().showQuestionDetail(null, t)
            }
        } else if (this.getCourseQuestionAnswerWidget()) {
            if (!e.trim(this.getCourseQuestionAnswerWidget().questionsList.html())) {
                setTimeout(this.openSpecificQuestion.context(this), 50, t, n);
                return
            }
            this.getCourseQuestionAnswerWidget().showQuestionDetail(null, t)
        }
    }, openSpecificMaterial: function (t) {
        if (!this.extraswidget.length || !e.trim(this.extraswidget.data("ud_extras").extrasNav.html())) {
            setTimeout(this.openSpecificMaterial.context(this), 50, t);
            return
        }
        this.extraswidget.length && this.extraswidget.data("ud_extras").showMaterial(t)
    }, loadCourse: function () {
        this.loadCourseInfo(), this.loadCourseQuestions(), this.loadCourseCurriculum(), this.options.isInstructor || (this.loadCourseProgress(), this.initCourseReview())
    }, showDashboard: function () {
        this._getTrackingCode(), this.dashboard.removeClass("none"), this.element.addClass("none");
        var t = this.timeline[this.currentIndex];
        t && t.type != "chapter" && t.type != "quiz" && (e(window).trigger("beforeunload." + t.id), e(window).unbind("beforeunload." + t.id), this.getLectureWidget(t.id).data("ud_lecture").unload()), this.currentIndex = -1
    }, show: function (e) {
        switch (e.type) {
            case"progress":
                this.showContent(e);
                break;
            case"lecture":
                window.location.hash = "lecture/" + e.id + (e.data.start_position ? ":" + e.data.start_position : "");
                break;
            default:
                window.location.hash = e.type + "/" + e.id
        }
    }, showContent: function (t) {
        switch (t.type) {
            case"progress":
                this.loadCourseProgress(), this.scrollTo(t.index), setTimeout(this.next.context(this), t.autoSkipIn), this.sidebarCloseToggledByUser == 0 && e(this.element).removeClass("off");
                break;
            case"lecture":
                this.prepareLecture(t), this.scrollTo(t.index), this.sidebarCloseToggledByUser == 0 && e(this.element).removeClass("off");
                break;
            case"quiz":
                this.prepareQuiz(t), this.scrollTo(t.index), this.sidebarCloseToggledByUser == 0 && e(this.element).addClass("off");
                break;
            default:
                this.scrollTo(t.index)
        }
    }, next: function (t, n) {
        var r = this.timeline[this.currentIndex];
        typeof t != "undefined" && t != null && typeof t != "number" && typeof t != "string" && typeof t.preventDefault == "function" && (t.preventDefault(), !this.options.isInstructor && r.type == "lecture" && r.just_completed && (typeof n == "undefined" || !!n.publishCompleteEvent != 0) && UD.API.call("/lectures/" + r.id + "/open-graph-action", {type: "POST", success: function () {
            r.just_completed = !1
        }.context(this)})), r && r.type == "lecture" && (e(window).trigger("beforeunload." + r.id), e(window).unbind("beforeunload." + r.id));
        var i = this.timeline[this.currentIndex + 1];
        e(i.element).removeClass("off"), this.show(i)
    }, prev: function (t) {
        var n = this.timeline[this.currentIndex];
        typeof t != "undefined" && t != null && typeof t != "number" && typeof t != "string" && typeof t.preventDefault == "function" && (t.preventDefault(), !this.options.isinstructor && n.type == "lecture" && n.just_completed && (typeof data == "undefined" || !!data.publishCompleteEvent != 0) && UD.API.call("/lectures/" + n.id + "/open-graph-action", {type: "POST", success: function () {
            n.just_completed = !1
        }.context(this)})), n && n.type == "lecture" && (e(window).trigger("beforeunload." + n.id), e(window).unbind("beforeunload." + n.id));
        var r = this.currentIndex - 1;
        this.timeline[r].element.addClass("off");
        while (r >= 0 && (this.timeline[r].type == "progress" || this.timeline[r].type == "chapter"))r -= 1;
        if (r < 0)return;
        var i = this.timeline[r];
        this.show(i)
    }, scrollTo: function (e) {
        if (this.currentIndex == e)return;
        this.timelineElement.css("top", e * -100 + "%"), this.onChangeIndex(this.currentIndex, e), this.currentIndex = e
    }, onChangeIndex: function (e, t) {
        e !== null && (old = this.timeline[e]) && old.type == "lecture" && this.getLectureWidget(old.id).data("ud_lecture").unload()
    }, prepareLecture: function (t) {
        t.data.is_instructor = this.options.isInstructor;
        var n = t.data.start_position;
        this.options.autoPlay ? (e("a.autoplay", this.element).addClass("on"), e("a.autoplay span", this.element).html("ON")) : (e("a.autoplay", this.element).removeClass("on"), e("a.autoplay span", this.element).html("OFF"));
        var r = this.getLectureWidget(t.id).data("ud_lecture");
        r.load(function () {
            r.autoPlay = this.options.autoPlay, r.startPosition = n, this.getQuestionAnswerWidget() && this.getQuestionAnswerWidget().resetParams(), this.getQuestionAnswerWidget() && this.getQuestionAnswerWidget().getLectureQuestions(t.id), this.getNoteWidget() && this.getNoteWidget().resetParams(), this.getNoteWidget() && this.getNoteWidget().getNotes(t.id), this.getNoteWidget() && this.getNoteWidget().setPositionHandler(r), this.getExtrasWidget() && this.getExtrasWidget().getExtras(t)
        }.context(this))
    }, prepareQuiz: function (t) {
        var n = t.id, r = e(".asset-container", this.timeline[this.reverseIndex["quiz" + n]].element);
        t.data.is_published == "Yes" || t.data.is_published == "No" && this.options.isInstructor ? (r.html(this.quizViewTemplate(t.data)), this.getQuizWidget(n, function (e) {
            quizWidget = e.data("ud_quiz"), quizWidget._initializeQuiz(t.data), quizWidget.load(function () {
                this.getQuestionAnswerWidget() && this.getQuestionAnswerWidget().resetParams(), this.getNoteWidget() && this.getNoteWidget().resetParams(), this.getNoteWidget() && this.getNoteWidget().setPositionHandler(quizWidget)
            }.context(this))
        }.context(this))) : r.html(this.quizNotPublishedViewTemplate(t.data))
    }, prepareProgress: function (e) {
    }, getQuestionAnswerWidget: function () {
        return this.qawidget = e(".ud-questionanswer", this.element), this.qawidget.length && (this.qawidget.data("ud_questionanswer") || this.qawidget.ud_questionanswer()), this.qawidget.data("ud_questionanswer")
    }, getExtrasWidget: function () {
        return this.extraswidget = e(".ud-extras", this.element), this.extraswidget.length && (this.extraswidget.data("ud_extras") || this.extraswidget.ud_extras()), this.extraswidget.data("ud_extras")
    }, getNoteWidget: function () {
        return this.notewidget = e(".ud-notetaking", this.element), this.notewidget.length && (this.notewidget.data("ud_notetaking") || this.notewidget.ud_notetaking()), this.notewidget.data("ud_notetaking")
    }, getCourseQuestionAnswerWidget: function () {
        return this.courseqawidget = e(".ud-questionanswer", this.dashboard), this.courseqawidget.length && (this.courseqawidget.data("ud_questionanswer") || this.courseqawidget.ud_questionanswer()), this.courseqawidget.data("ud_questionanswer")
    }, getLectureWidget: function (t) {
        var n = e(".asset-container .ud-lecture", this.timeline[this.reverseIndex["lecture" + t]].element);
        if (!n.data("ud_lecture")) {
            var r = {};
            r.courseId = this.options.courseId, n.ud_lecture(r)
        }
        return n
    }, getQuizWidget: function (t, n) {
        var r = e(".asset-container .ud-quiz", this.timeline[this.reverseIndex["quiz" + t]].element);
        if (!r.data("ud_quiz")) {
            var i = {};
            this.options.isInstructor ? (i.instructorMode = !0, i.studentMode = !1) : (i.instructorMode = !1, i.studentMode = !0), require(["ud.quiz"], function (e, t) {
                e.ud_quiz(t), n && n(e)
            }.context(this, r, i))
        } else n && n(r)
    }, initCourseReview: function () {
        UD.API.call("/courses/" + this.options.courseId + "/review", {type: "GET", data: {closeSessionWrites: 1}, success: function (t) {
            this.courseReview = t, e(".ajax-loader-stick", this.ratingPanel).remove();
            if (this.courseReview) {
                e("span.user-rating", e(".after-rating", this.dashboard)).html(this.courseReview.rating + "/" + "5");
                for (var n = 1; n < this.courseReview.rating; n++)e("#rating-option-" + n, this.ratingPanel).attr("checked", "checked");
                e(".star-rating", e(".star-rating-control", this.ratingPanel)).each(function (t, n) {
                    t + 1 <= this.courseReview.rating && e(n).addClass("star-rating-on")
                }.context(this)), this._closeRatingPanelDetails()
            } else e(".rate-top", this.ratingPanel).removeClass("none"), e(".rate-top", this.ratingPanel).addClass("alone")
        }.context(this), error: function (t) {
            e(".rate-top", this.ratingPanel).removeClass("none"), e(".rate-top", this.ratingPanel).addClass("alone")
        }.context(this)})
    }, _submitRating: function () {
        this.courseReview ? this._updateReview(0) : this._submitReview()
    }, _submitSetting: function (e) {
        UD.API.call("/courses/" + this.options.courseId + "/settings", {type: "POST", data: {data: e}})
    }, _getReviewFormData: function () {
        return data = {rating: e(".star-rating-on", this.dashboard).length, title: e("textarea.title", e(".rate-main")).val(), content: e("textarea.content", e(".rate-main")).val()}, data
    }, _submitReview: function () {
        UD.API.call("/courses/" + this.options.courseId + "/reviews", {type: "POST", data: {data: this._getReviewFormData()}, success: function (e) {
            this.courseReview = e, this._openRatingPanelDetails()
        }.context(this)})
    }, _removeReview: function () {
        UD.API.call("/courses/" + this.options.courseId + "/reviews", {type: "DELETE", data: {data: ""}, success: function (t) {
            e(".rate-top").addClass("alone"), e(".rate-feedback").addClass("none"), e(".rate-main").addClass("none"), e(".after-rating").addClass("none"), e(".star-rating").removeClass("star-rating-on")
        }.context(this)})
    }, _getReview: function () {
        UD.API.call("/courses/" + this.options.courseId + "/review", {type: "GET", success: function (t) {
            t && (this.courseReview = t, e("textarea.title", this.ratingPanel).val(this.courseReview.title), e("textarea.content", this.ratingPanel).val(this.courseReview.content), this._openRatingPanelDetails())
        }.context(this)})
    }, _updateReview: function (t) {
        UD.API.call("/courses/" + this.options.courseId + "/reviews", {type: "POST", data: {method: "PUT", data: this._getReviewFormData()}, success: function (n) {
            this.courseReview = n, e("span.user-rating", e(".after-rating", this.dashboard)).html(this.courseReview.rating + "/" + "5"), e(".rate-feedback", this.ratingPanel).html(this.reviewFeedbackArray[this.courseReview.rating]).removeClass("none"), t && this._closeRatingPanelDetails()
        }.context(this)})
    }, submitReview: function (t) {
        this.courseReview && this._updateRating(), t == 1 ? UD.API.call("/courses/" + this.options.courseId + "/reviews", {type: "POST", data: {data: this._getReviewFormData()}, success: function (e) {
            this.courseReview = e, this._openRatingPanelDetails()
        }.context(this)}) : t == 2 && UD.API.call("/courses/" + this.options.courseId + "/reviews", {type: "PUT", data: {data: this._getReviewFormData()}, success: function (t) {
            this.courseReview = t, e("span.user-rating", e(".after-rating", this.dashboard)).html(this.courseReview.rating + "/" + "5"), this._closeRatingPanelDetails()
        }.context(this)})
    }, updateReview: function () {
        UD.API.call("/courses/" + this.options.courseId + "/review", {type: "GET", success: function (t) {
            t && typeof t["error"] == "undefined" && (this.courseReview = t, e("textarea.title", this.ratingPanel).val(this.courseReview.title), e("textarea.content", this.ratingPanel).val(this.courseReview.content), this._openRatingPanelDetails())
        }.context(this)}), e(".rate-main", this.ratingPanel).removeClass("none")
    }, cancelRating: function (t) {
        t.preventDefault(), e("span.user-rating", e(".after-rating", this.dashboard)).html(this.courseReview.rating + "/" + "5"), this._closeRatingPanelDetails()
    }, _closeRatingPanelDetails: function () {
        e(".rate-main", this.ratingPanel).addClass("none"), e(".rate-top", this.ratingPanel).addClass("none"), e(".rate-feedback", this.ratingPanel).addClass("none"), e(".after-rating", this.ratingPanel).removeClass("none")
    }, _openRatingPanelDetails: function () {
        e(".rate-main", this.ratingPanel).removeClass("none"), e(".rate-top", this.ratingPanel).removeClass("none alone"), e(".rate-feedback", this.ratingPanel).html(this.reviewFeedbackArray[this.courseReview.rating]).removeClass("none"), e(".after-rating", this.ratingPanel).addClass("none")
    }, renderCourseReviews: function (t) {
        var n = e("#dashboardCourseReviewsTemplate").html(), r = Handlebars.compile(n);
        this.courseReviewsElement.html(r(t)), e("a", this.courseReviewsElement).ud_popup()
    }, showStudentsListPopup: function () {
        this.currentRequest.studentsPage == 1 && this.getStudents()
    }, showCourseInfoPopup: function () {
        this.dashboardCoursePopupContent.html().trim() || this.loadCourseInfoPopupContent()
    }, getStudents: function () {
        !this.currentRequest.studenstListActive && !this.currentRequest.studentsListDisabled && (this.currentRequest.studentsListActive = !0, e(".more-btn", this.studentsListWrapper).addClass("none"), e(".ajax-loader-tiny", this.studentsListWrapper).show(), UD.API.call("/courses/" + this.options.courseId + "/students", {type: "GET", data: {p: this.currentRequest.studentsPage, pageSize: this.currentRequest.pageSize}, success: this.renderStudents.context(this)}))
    }, renderStudents: function (t) {
        var n = t.data, r = t.pagination;
        r.page == 1 && this.studentsList.html(""), n.length < r.pageSize && (this.currentRequest.studentsListDisabled = !0);
        var i = t.data.length;
        this.options.userId || (this.options.userId = 0);
        for (var s = 0; s < i; s++)t.data[s].id == this.options.userId ? t.data[s].show_buttons = !1 : t.data[s].show_buttons = !0;
        this.studentsList.append(this.courseStudentTemplate(t)), this.currentRequest.studentsPage = r.page + 1, this.currentRequest.studentsListActive = !1, e(".ajax-loader-tiny", this.studentsListWrapper).hide(), e(".more-btn", this.studentsListWrapper).removeClass("none"), e("a.following", this.studentsListWrapper), this.studentsList.ud_initialize()
    }, followUserResponse: function (e, t) {
        t && e.removeClass("follow blue").addClass("following green").text("Following")
    }, unfollowUserResponse: function (e, t) {
        t && e.removeClass("following green").addClass("follow blue").text("Follow")
    }, markAsCompletedToggle: function (t) {
        t.preventDefault();
        var n = e(t.target);
        n.hasClass("read") ? (n.removeClass("read"), this.markedUncompletedByUser(), this.timeline[this.currentIndex].just_completed = !1) : (n.addClass("read"), this.markedCompletedByUser(), this.timeline[this.currentIndex].just_completed = !0)
    }, _getTrackingCode: function () {
        UD.API.call("/courses/" + this.options.courseId + "/tracking-code", {success: function (e) {
            this.element.append(e.code)
        }.context(this)})
    }})
}), define("ud.package.coursetaking", ["jquery", "ud.package.default", "ud.coursetaking"], function (e) {
}), define("ud.package.mycourses", ["jquery", "ud.package.default", "ud.popup", "ud.notifications", "ud.search"], function (e) {
}), require(["main.config", "jquery", "jquery.ui", "ud.package.default", "ud.package.home", "ud.package.discover", "ud.package.coursetaking", "ud.package.mycourses"], function (e, t) {
}), define("ud.package.all", function () {
});