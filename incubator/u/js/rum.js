// Copyright 2010 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// See the source code here:
//      http://code.google.com/p/episodes/
// Don't overwrite pre-existing instances of the object (esp. for older browsers).
var NR_QUEUE = [];
typeof window.NREUMQ != "undefined" ? NR_QUEUE = NREUMQ : typeof window.EPISODES != "undefined" ? NR_QUEUE = EPISODES.q : typeof window.NREUM != "undefined" && (NR_QUEUE = NREUM.q);
var NREUM = NREUM || {};
NREUM.q = NR_QUEUE, NREUM.targetOrigin = document.location.protocol + "//" + document.location.host, NREUM.version = 40, NREUM.autorun = "undefined" != typeof NREUM.autorun ? NREUM.autorun : !0, NREUM.init = function () {
    NREUM.dataSent = !1, NREUM.jsonp = !1, NREUM.beaconToken = null, NREUM.navCookie = !0, NREUM.bDone = !1, NREUM.cycle = 0, NREUM.logging = !1, NREUM.contentLoadFired = !1, NREUM.marks = {}, NREUM.measures = {}, NREUM.starts = {}, NREUM.findStartTime(), NREUM.load = null, NREUM.addEventListener("beforeunload", NREUM.beforeUnload, !1), NREUM.addEventListener("pagehide", NREUM.beforeUnload, !1), NREUM.processQ(), NREUM.beacon = null, NREUM.licenseKey = null, NREUM.applicationID = null, NREUM.transactionName = null, NREUM.agentToken = null, NREUM.txnParam = null, NREUM.unloaded = !1, document.readyState === "complete" ? NREUM.domContentLoaded() : "undefined" != typeof document.addEventListener ? document.addEventListener("DOMContentLoaded", NREUM.domContentLoaded, !1) : "undefined" != typeof document.attachEvent && document.attachEvent("onreadystatechange", NREUM.readyStateChange), NREUM.load || document.loaded ? NREUM.onload() : NREUM.addEventListener("load", NREUM.onload, !1)
}, NREUM.processQ = function () {
    var a = NREUM.q.length, b, c, d;
    for (d = 0; d < a; d++) {
        b = NREUM.q[d], c = null;
        switch (b[0]) {
            case"mark":
                NREUM.mark(b[1], b[2]);
                break;
            case"measure":
                NREUM.measure(b[1], b[2], b[3]);
                break;
            case"done":
                NREUM.done(b[1]);
                break;
            case"nrf":
            case"nrfinish":
                c = "t";
                break;
            case"nrf2":
            case"nrfinish2":
                c = "to";
                break;
            case"nrfj":
                c = "to", NREUM.jsonp = parent == self;
                break;
            case"load":
                NREUM.load = b[1];
                break;
            default:
                NREUM.dprint("Unknown queue command " + b[0])
        }
        c && NREUM.nrfinish(c, b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12])
    }
}, NREUM.nrfinish = function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
    NREUM.dprint("NREUM: finish data received"), NREUM.txnParam = a, NREUM.beacon = b, NREUM.licenseKey = c, NREUM.applicationID = d, NREUM.transactionName = e, NREUM.tt_guid = i, NREUM.user = k, NREUM.account = l, NREUM.product = m, NREUM.measures.qt = f, NREUM.measures.ap = g, NREUM.dom_end_time = h, NREUM.agentToken = j
}, NREUM.mark = function (a, b) {
    NREUM.dprint("NREUM.mark: " + a + ", " + b);
    a ? (NREUM.marks[a] = parseInt(b || (new Date).getTime(), 10), "firstbyte" === a ? (NREUM.measure("be", "starttime", "firstbyte"), NREUM.dom_start_time = NREUM.marks.firstbyte) : "onload" === a ? NREUM.measure("fe", "firstbyte", "onload") : "domContent" === a && NREUM.measure("dc", "firstbyte", "domContent")) : NREUM.dprint("Error: markName is undefined in NREUM.mark.")
}, NREUM.measure = function (a, b, c) {
    NREUM.dprint("NREUM.measure: " + a + ", " + b + ", " + c);
    if (!a)NREUM.dprint("Error: episodeName is undefined in NREUM.measure."); else {
        var d;
        if ("undefined" == typeof b)"number" == typeof NREUM.marks[a] ? d = NREUM.marks[a] : d = (new Date).getTime(); else if ("number" == typeof NREUM.marks[b])d = NREUM.marks[b]; else if ("number" == typeof b)d = b; else {
            NREUM.dprint("Error: unexpected startNameOrTime in NREUM.measure: " + b);
            return
        }
        var e;
        if ("undefined" == typeof c)e = (new Date).getTime(); else if ("number" == typeof NREUM.marks[c])e = NREUM.marks[c]; else if ("number" == typeof c)e = c; else {
            NREUM.dprint("NREUM: Error: unexpected endNameOrTime in NREUM.measure: " + c);
            return
        }
        NREUM.starts[a] = parseInt(d, 10), NREUM.measures[a] = parseInt(e - d, 10)
    }
}, NREUM.done = function (a) {
    NREUM.bDone || (NREUM.bDone = !0, NREUM.mark("done"), NREUM.autorun && NREUM.sendBeacon(), "function" == typeof a && a())
}, NREUM.getMarks = function () {
    return NREUM.marks
}, NREUM.getMeasures = function () {
    return NREUM.measures
}, NREUM.getStarts = function () {
    return NREUM.starts
}, NREUM.sendBeacon = function () {
    if (!NREUM.dataSent) {
        NREUM.dataSent = !0, NREUM.processQ(), NREUM.domContentLoaded();
        if (NREUM.licenseKey === null || NREUM.applicationID === null) {
            NREUM.dprint("NREUM: licenseKey or applicationID has not been set");
            return
        }
        NREUM.dom_end_time && NREUM.dom_start_time && (NREUM.dprint("NREUM: picking up DOM processing time from embedded JS"), NREUM.mark("domContent", NREUM.dom_end_time)), NREUM.load && (NREUM.dprint("NREUM: picking up load event time from embedded JS"), NREUM.mark("onload", NREUM.load));
        var a = NREUM.getMeasures(), b = "", c;
        for (c in a)b += "&" + c + "=" + a[c];
        var d;
        if (b) {
            var e = "1";
            d = ("http:" === document.location.protocol ? "http:" : "https:") + "//" + NREUM.beacon + "/" + e + "/" + NREUM.licenseKey, d += "?a=" + NREUM.applicationID, d += b, d += NREUM.getParam(NREUM.txnParam, NREUM.transactionName), d += NREUM.getParam("tt", NREUM.tt_guid), d += NREUM.getParam("us", NREUM.user), d += NREUM.getParam("ac", NREUM.account), d += NREUM.getParam("pr", NREUM.product), d += NREUM.getParam("tk", NREUM.agentToken), d += "&v=" + NREUM.version, NREUM.jsonp && (d += "&jsonp=NREUM.setToken");
            var f = NREUM.getPerformance();
            if (f) {
                var g = {};
                g.timing = NREUM.addPT(f.timing, {}), g.navigation = NREUM.addPN(f.navigation, {}), d += NREUM.getParam("perf", NREUM.stringify(g))
            }
            if (NREUM.jsonp) {
                var h = document.createElement("script");
                h.type = "text/javascript", h.src = d, document.body.appendChild(h)
            } else {
                var i = new Image;
                i.src = d
            }
            NREUM.dprint("NREUM: (new) data sent", d)
        }
    }
}, NREUM.getParam = function (a, b) {
    if (b != null && b.length > 0)return"&" + a + "=" + encodeURIComponent(b);
    return""
}, NREUM.addPT = function (a, b) {
    var c = a.navigationStart;
    b.of = c, NREUM.addRel(a.navigationStart, c, b, "n"), NREUM.addRel(a.unloadEventStart, c, b, "u"), NREUM.addRel(a.unloadEventEnd, c, b, "ue"), NREUM.addRel(a.domLoading, c, b, "dl"), NREUM.addRel(a.domInteractive, c, b, "di"), NREUM.addRel(a.domContentLoadedEventStart, c, b, "ds"), NREUM.addRel(a.domContentLoadedEventEnd, c, b, "de"), NREUM.addRel(a.domComplete, c, b, "dc"), NREUM.addRel(a.loadEventStart, c, b, "l"), NREUM.addRel(a.loadEventEnd, c, b, "le"), NREUM.addRT(a, b, c);
    return b
}, NREUM.addPN = function (a, b) {
    NREUM.addRel(a.type, 0, b, "ty"), NREUM.addRel(a.redirectCount, 0, b, "rc");
    return b
}, NREUM.addRT = function (a, b, c) {
    var d;
    c ? d = c : (d = a.startTime, b.of = d), NREUM.addRel(a.redirectStart, d, b, "r"), NREUM.addRel(a.redirectEnd, d, b, "re"), NREUM.addRel(a.fetchStart, d, b, "f"), NREUM.addRel(a.domainLookupStart, d, b, "dn"), NREUM.addRel(a.domainLookupEnd, d, b, "dne"), NREUM.addRel(a.connectStart, d, b, "c"), NREUM.addRel(a.connectEnd, d, b, "ce"), NREUM.addRel(a.secureConnectionStart, d, b, "s"), NREUM.addRel(a.requestStart, d, b, "rq"), NREUM.addRel(a.responseStart, d, b, "rp"), NREUM.addRel(a.responseEnd, d, b, "rpe"), c || (b.n = a.name, b.st = a.startTime - d, b.it = a.initiatorType, b.du = a.duration);
    return b
}, NREUM.addRel = function (a, b, c, d) {
    "number" == typeof a && a > 0 && (c[d] = a - b)
}, NREUM.setToken = function (a) {
    NREUM.dprint("NREUM: trace " + a), NREUM.beaconToken = a
}, NREUM.inlineHit = function (a, b, c, d, e, f) {
    NREUM.cycle += 1;
    if (NREUM.licenseKey === null || NREUM.applicationID === null)NREUM.dprint("NREUM: licenseKey or applicationID has not been set"); else {
        var g = new Image, h = ("http:" === document.location.protocol ? "http:" : "https:") + "//" + NREUM.beacon + "/1/" + NREUM.licenseKey;
        h += "?a=" + NREUM.applicationID + "&", h += "t=" + a + "&", h += "qt=" + b + "&", h += "ap=" + c + "&", h += "be=" + d + "&", h += "dc=" + e + "&", h += "fe=" + f + "&", h += "c=" + NREUM.cycle, g.src = h, NREUM.dprint("NREUM Inline: " + h)
    }
}, NREUM.findStartTime = function () {
    var a = NREUM.findStartWebTiming() || NREUM.findStartGToolbar() || NREUM.findStartCookie();
    a ? NREUM.mark("starttime", a) : NREUM.dprint("NREUM: Error: couldn't find a start time")
}, NREUM.findStartWebTiming = function () {
    var a;
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        var b = new Number(RegExp.$1);
        if (b < 9)return a
    }
    var c = NREUM.getPerformance();
    c && "undefined" != typeof c.timing.navigationStart && (a = c.timing.navigationStart, NREUM.dprint("NREUM.findStartWebTiming: startTime = " + a)), a && (NREUM.navCookie = !1);
    return a
}, NREUM.getPerformance = function () {
    var a = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance;
    if ("undefined" != typeof a && "undefined" != typeof a.timing)return a;
    return null
}, NREUM.findStartGToolbar = function () {
    var a, b;
    try {
        window.external && window.external.pageT ? a = window.external.pageT : window.gtbExternal && window.gtbExternal.pageT ? a = window.gtbExternal.pageT() : window.chrome && window.chrome.csi && (a = window.chrome.csi().pageT), a && a < 6e4 && (b = (new Date).getTime() - a, NREUM.dprint("NREUM.findStartGToolbar: startTime = " + b))
    } catch (c) {
    }
    b && (NREUM.navCookie = !1);
    return b
}, NREUM.findStartCookie = function () {
    var a = document.cookie.split(" "), b, c;
    for (b = 0; b < a.length; b++)if (0 === a[b].indexOf("NREUM=")) {
        var d, e, f = a[b].substring("NREUM=".length).split("&"), g, h;
        for (c = 0; c < f.length; c++)0 === f[c].indexOf("s=") ? g = f[c].substring(2) : 0 === f[c].indexOf("h=") ? (g = f[c].substring(2), NREUM.measure("ph", 0, 1)) : 0 === f[c].indexOf("p=") ? (e = f[c].substring(2), e.charAt(e.length - 1) === ";" && (e = e.substr(0, e.length - 1))) : 0 === f[c].indexOf("r=") && (d = f[c].substring(2), d.charAt(d.length - 1) === ";" && (d = d.substr(0, d.length - 1)));
        if (d) {
            var i = NREUM.sHash(document.referrer);
            h = i == d, h || (h = NREUM.sHash(document.location.href) == d && i == e)
        }
        if (h && g) {
            var j = (new Date).getTime();
            if (j - g > 6e4) {
                NREUM.dprint("NREUM.findStartCookie: startTime > 60s old - ignored");
                return undefined
            }
            NREUM.dprint("NREUM.findStartCookie: startTime = " + g);
            return g
        }
    }
    return undefined
}, NREUM.beforeUnload = function (a) {
    if (!NREUM.unloaded) {
        var b = "s";
        a.type === "pagehide" && (b = "h"), NREUM.navCookie && (document.cookie = "NREUM=" + b + "=" + Number(new Date) + "&r=" + NREUM.sHash(document.location.href) + "&p=" + NREUM.sHash(document.referrer) + "; path=/"), NREUM.beaconToken && (document.cookie = "NRAGENT=tk=" + NREUM.beaconToken + "; max-age=1; path=/"), NREUM.unloaded = !0
    }
}, NREUM.onload = function (a) {
    NREUM.mark("onload"), NREUM.autorun && NREUM.done()
}, NREUM.domContentLoaded = function (a) {
    NREUM.contentLoadFired || (NREUM.mark("domContent", (new Date).getTime()), NREUM.contentLoadFired = !0)
}, NREUM.readyStateChange = function (a) {
    document.readyState === "complete" && NREUM.domContentLoaded()
}, NREUM.addEventListener = function (a, b, c) {
    if ("undefined" != typeof window.attachEvent)return window.attachEvent("on" + a, b);
    if (window.addEventListener)return window.addEventListener(a, b, c)
}, NREUM.sHash = function (a) {
    var b, c = 0;
    for (b = 0; b < a.length; b++)c += (b + 1) * a.charCodeAt(b);
    return Math.abs(c)
}, NREUM.stringify = function (a) {
    var b = typeof a;
    switch (b) {
        case"string":
            return'"' + a + '"';
        case"boolean":
        case"number":
            return String(a);
        case"object":
            if (a === null)return"null";
            var c = !1, d = "";
            for (prop in a) {
                var e = String(prop), f = NREUM.stringify(a[prop]);
                f.length > 0 && (c ? d += ", " : c = !0, d += '"' + e + '":' + f)
            }
            return a instanceof Array ? "[" + d + "]" : "{" + d + "}";
        default:
            return""
    }
}, "undefined" != typeof console && "undefined" != typeof console.log ? NREUM.dprint = function (a) {
    NREUM.logging && console.log(a)
} : NREUM.dprint = function (a) {
}, NREUM.init()