(function (f) {
    var m = f.sharing = {}, b = window;
    f().registerPlugin("sharing", "6.0", function (d, a, c) {
        function g() {
            var a = x + encodeURIComponent(k);
            b.open(a, "_blank");
            b.focus();
            return!1
        }

        function y(a) {
            a.target == c && (setTimeout(r, 200), c.style.opacity = 0, d.setControls(!0))
        }

        function r() {
            c.style.visibility = "hidden"
        }

        function f(p) {
            setTimeout(r, 200);
            c.style.opacity = 0;
            d.setControls(!0);
            p = d.getPlaylist()[p.index];
            j = void 0;
            a.code && (0 < a.code.indexOf("MEDIAID") && p.mediaid ? j = a.code.replace("MEDIAID", p.mediaid) : -1 == a.code.indexOf("MEDIAID") &&
                (j = a.code));
            j && "%3C" == j.substr(0, 3) && (j = decodeURIComponent(j));
            k = b.location.toString();
            b.top != b && (k = document.referrer);
            a.link && (0 < a.link.indexOf("MEDIAID") && p.mediaid ? k = a.link.replace("MEDIAID", p.mediaid) : -1 == a.link.indexOf("MEDIAID") && (k = a.link));
            h && (n.setText(j), q.setText(k), j ? (e(n.getDiv(), {left: "0px", top: "30px", display: "block"}), e(q.getDiv(), {left: "0px", top: "72px"}), e(s, {left: "80px", top: "114px"}), e(t, {left: "120px", top: "114px"}), e(u, {left: "160px", top: "114px"})) : (e(n.getDiv(), {display: "none"}),
                e(q.getDiv(), {left: "0px", top: "30px"}), e(s, {left: "80px", top: "72px"}), e(t, {left: "120px", top: "72px"}), e(u, {left: "160px", top: "72px"})), w())
        }

        function w() {
            e(c, {width: l[0] + "px", height: l[1] + "px", backgroundPosition: l[0] - 32 + "px 18px,center center"});
            n.resize(l[0]);
            q.resize(l[0]);
            var a = Math.round(l[0] / 2 - n.getWidth() / 2), b = Math.round(l[1] / 2 - 50);
            j && (b -= 20);
            e(h, {left: a + "px", top: b + "px"})
        }

        function e(a, b) {
            for (var c in b)a.style[c] = b[c]
        }

        function z() {
            var a = A + encodeURIComponent(k);
            b.open(a, "_blank");
            b.focus();
            return!1
        }

        function B() {
            var a = "mailto:?body\x3d" + encodeURIComponent(k);
            b.open(a, "_blank");
            b.focus();
            return!1
        }

        var j, n, l, s, x = "http://www.facebook.com/sharer/sharer.php?u\x3d", h, v, k, q, t, A = "http://twitter.com/intent/tweet?url\x3d", u;
        this.resize = function (a, b) {
            "flash" != d.getRenderingMode() && h && (l = [a, b], w())
        };
        d.onReady(function () {
            "flash" != d.getRenderingMode() && (d.onPlaylistItem(f), d.addButton("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMxJREFUeNpiYCAR/P//nx+I1/9HgP0gMQYyDKr/jwn2k2PQfSwG/WchwQB/IBUAxAp4FQHxfCDuB2J9JHF9qNj7//jBe5DieCwSIM3nsYiDAjkfi8HxjGDTGBgE8PjqAhAvAGFGRsaPUJfKA6kEqPwGoPhFBjzORfEmIcCERw4UqB9Iic75BAJyPtQrILX20HSUj5EIoSkVZth7qJfssaSX9egxBbOAGNfG40qAMNdSI1ugZA0mIs3awEAtgMOL8eQYpI9mWD+yPECAAQD6jshl3zhTjgAAAABJRU5ErkJggg\x3d\x3d",
                "Share Video", function () {
                    "PLAYING" == d.getState() && d.pause();
                    c.style.visibility = "visible";
                    c.style.opacity = 1;
                    d.setControls(!1)
                }, "share"), c.style.visibility = "hidden", c.onclick = y, e(c, {backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAItJREFUeNp8kUEOABEMRXUysXQnJ5k5GidxAmcxsbQxmiAlLUlD/df6UDnn1KK2eJQwUOtMAlwQ7TXG+B1ukxv5hRDRHT1ph5EFSRgN9tPh0E2drO6Xo7E8xk2TGKPSWi9NSilLPi2FEI6WrLV+FjAwe2ksAg4e3TgNCyoHS1bx4z4JxtH3hsXvF2AAnU9uUtSy19QAAAAASUVORK5CYII\x3d),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAYAAAAp8ov1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEdJREFUeNpilpSUvMHEwMDwn+k/EEBY+LkwFgMuCWINwDCPVB30cBoDaTpgBMMoQU2CkYkRCCAsNC6pEgyUGoBHYvA6DSDAAOnHjLU15EHNAAAAAElFTkSuQmCC)",
                backgroundPosition: "right top,center center", backgroundRepeat: "no-repeat,no-repeat", backgroundSize: "auto auto,100% 100%", opacity: 0, "z-index": 101, webkitTransition: "opacity 150ms linear", mozTransition: "opacity 150ms linear", msTransition: "opacity 150ms linear", oTransition: "opacity 150ms linear", transition: "opacity 150ms linear", cursor: "pointer"}), h = document.createElement("div"), c.appendChild(h), e(h, {cursor: "default", position: "absolute", border: "none", width: "320px"}), v = document.createElement("div"), v.innerHTML =
                "string" == typeof a.heading ? a.heading : "Share Video", e(v, {position: "absolute", border: "none", color: "#FFF", display: "block", font: "15px Arial", overflow: "hidden", width: "230px", height: "20px", left: "80px", margin: "0 0 0 0", textTransform: "none", textShadow: "#000 1px 1px 0", padding: "0 0 0 0"}), h.appendChild(v), n = new m.row("Embed code"), h.appendChild(n.getDiv()), q = new m.row("Video link"), h.appendChild(q.getDiv()), s = m.shortcut("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARlJREFUeNpiTKzdzEAbwPL/PwPtjP4/FF3NQDOj/5Hl7O9fv3//9v3d63fIgipaKqiu/key0UATFSW5jSzVUyIskcWjKzZS5GqgY4Nc1VMjrDCl0Iwi2WhVWX6s5mIxmtTEpyYrgEvqP7qrSQzrZKTw/fP336odV24+/HD17musKYS0OGRiZERoZma68fDDlTuvqZn44ODS7VeUZvQndx5gFX98+z6cLaOiQE5Yn91SSlDcN28VNQOEmumaBKMpKVSBZsETzJJtVzDTNVGmuGUuhzB2TY9ETohwceonPjzaaWk0GYUqSrnxb0Bc/ePrV0qMxqOdRUVVmhKj8Whn+fXjFyVG49HORLMKfYgazUKqhtCytUSqBAgwAPLTpnqcD79pAAAAAElFTkSuQmCC",
                "Facebook", g), h.appendChild(s), t = m.shortcut("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcpJREFUeNpiXPX1OwNtABMDzQDL/380M/ofAw2N/j8UwxqHoy9cuN3Ttpzh2w8GLo6M3AAbWz2Sjf6LI0D6J25hEJJhEGZi+P9v9oJ9lra6pIc1Dlf/5RFjYGSEslnZb995rqwsSaqrcQAODmSeID/XX9LTNY7kx8aGzBMR4f/17x91XM3Izo7MjU+fgUURF2tOqpuOhjRpYc3AiuJqRkVNLGr+/5+x9MSkpmASswyqq3GBv2xSuEzAndFRwxoX4GHHaQLLX1x5hpWdGHPbfRR//yfV1eworj6WiSU3/vn/78b37z///MNhNC6z2VBcfeTDZzJKvn/EpJDTt18bqwqTmK5xJT52lNy49szj/4yMXOysQLacGCcnGwsFGZ2NFZn3T1xh9ZknDH//gDi/fjL8Belj52bxsZAzUODHVahid7akAOfL76hScmpoan79/rnx8kt9eT7SUkiEEsvE24wE6hE2tv9c3P8YfpCWrlWEfrvJ8Ox6RcB0MXaGv/+/kxbWT379jpb/oSvIufgZw6ufOM2tVv7z7DfpjYWrX77LcP6Zo8PBwYjd7T/+/7/45SsuE4CuxlcKP/n5E4gGX43+j1bNEFq6GiDAAP9eqmJ8yUAWAAAAAElFTkSuQmCC",
                "Twitter", z), h.appendChild(t), u = m.shortcut("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9pJREFUeNqslllLa0EMxzvTqnVfaF9cUBRFBDf02e/pt3F/EtxAEEEUxA0fxF1Pa/2d82/jOL334cINeJqZJP9JMknG3Orq6t3dXbVa/fpPBBSAwLrb29uBgYFKRrmA8vm8GFT5eu8xy/0mdCQNTWq1Wltb2/39vQPx4+PDOYdSpGrGti9j439ELpf3PzqgtbS0eJxvbW2VR1I10PAk7UtNxhLJxNWcmcAUCgVgfblcXltbIwTD4kv4BhSmhWDFi7EgfN4jU6LBBbBUKnkWy8vLLAjBHJFTOqCx8ysbtm+eUgboF4vF9fV1ADnGg4LLQkdgqmEesMHL6MaijCkPgAAFA6x7fX1lN0mS9/f3w8PDlZWVz8/P3F8oKhvMLTJEGxsb8/PzOEoC5FAqY4HLU1NTiGFCg/B+olsl49rBHMPp6emOjg4lFpGn+Ezc19c3OTlJUNRMmJYwCc1BYIgJhp2dnVY5KbQcrGZEjvr7+ycmJnSrVjCqFrtkta54QhQuhvBA60ivHnMZwaghu7q6RkdHMdBtcA0Cko51M1/SitrY2Bh5AM6kSUY+aZBrENlob2/HgDIyAx2gr6mhgFoxI4lE8p2qSolF9vslvqenB4/wfWtri2OkQ0zKIF/ShQgF1EgxIu0bk0IrzFrWS0lSMe+6u7tJyMjIyObmJkBhNoSLiJhQUxAWuqXBRx5BOpkvSYcBYnt7m/ClCcOSTQ4GN6u/2FaO168xHLg6WSnq7e0ltKGhoZ2dHQInOTDDw8OIwFUVhKM+dN9dX19nnQN6LRrB8PQnjfD4+AjW1dUVm4ODg1jRAcfHx3Nzc2FziqxF06cgGjfGHB0dMRCY5syAl5cXNQKW+Kvu3d3dnZmZCdvHJnha2mElKjNiwF1aWnp+fmYHPSpX1Q1TKOQ54+3tbXFxEd/DlMJUKvVCcApT53xlgxH+5ORkYWEB4+bnJsoA2d/f38f38BmqD3HOt6JhzRdcBhhJkC/6UgZqd8UnHhGJinxX+frGhKtZ0ZyenuIvBio1lVHWAuncsY7QbJMCY5n7xFAVrFJOX4/Ly0s45fHs7Ax/wbU3UEnQ7UUvskj1p8s4ODgYHx+3BKZeCxpcDufetPxXwhBzQLRMT1Vo5+fns7OziKM8WKMaNaZNXU1PaJaBCuaAAFWfIfxdXFxwxQ8PD1aCclzXJSwrTU2bsNp0b/Qkxzw9PQEFYPofBD/UP/3W/KyEbflHHn/tDsJ9xgMPrKcb9b6EvaNCtNFMsFFtaWnRhC8GUAQNbGFvb895Vy6VaVzVo3mtZfO/egKVyL6mj083NzfAfgswACBs40J0KAZ5AAAAAElFTkSuQmCC",
                "Email", B), h.appendChild(u))
        })
    })
})(jwplayer);
(function (f) {
    f.row = function (m) {
        function b(a, b) {
            for (var c in b)a.style[c] = b[c]
        }

        var d, a, c, g, f = {webkitBoxShadow: "0 0 4px #FFFFFF", MozBoxShadow: "0 0 4px #FFFFFF", msBoxShadow: "0 0 4px #FFFFFF", oBoxShadow: "0 0 4px #FFFFFF", boxShadow: "0 0 4px #FFFFFF"}, r = {webkitBoxShadow: "0 0 4px #000", MozBoxShadow: "0 0 4px #000", msBoxShadow: "0 0 4px #000", oBoxShadow: "0 0 4px #000", boxShadow: "0 0 4px #000"};
        this.getDiv = function () {
            return d
        };
        this.setText = function (b) {
            a.setAttribute("value", b)
        };
        this.getWidth = function () {
            return parseInt(g.style.left) +
                50
        };
        this.resize = function (c) {
            c -= 230;
            100 > c ? c = 100 : 400 < c && (c = 400);
            var d = 89 + c;
            b(a, {width: c + "px"});
            b(g, {left: d + "px"})
        };
        d = document.createElement("div");
        b(d, {border: "none", position: "absolute", left: "0px", width: "312px", height: "30px", margin: "0 0 0 0", padding: "0 0 0 0"});
        c = document.createElement("label");
        c.innerHTML = m;
        d.appendChild(c);
        b(c, {border: "none", color: "#FFF", display: "block", font: "12px Arial", overflow: "hidden", width: "74px", position: "absolute", top: "10px", left: "0px", textAlign: "right", textTransform: "none",
            padding: "0 0 0 0"});
        a = document.createElement("input");
        a.setAttribute("type", "text");
        try {
            document.createEvent("TouchEvent")
        } catch (C) {
            a.setAttribute("readonly", "readonly")
        }
        b(a, {position: "absolute", left: "80px", top: "0px", font: "11px Arial", webkitBoxShadow: "0 0 4px #000", MozBoxShadow: "0 0 4px #000", msBoxShadow: "0 0 4px #000", oBoxShadow: "0 0 4px #000", boxShadow: "0 0 4px #000", padding: "0px 5px", background: "#FFF", width: "190px", height: "28px", margin: "0 0 0 0", border: "none"});
        d.appendChild(a);
        g = document.createElement("button");
        g.innerHTML = "Select";
        g.onclick = function () {
            a.select()
        };
        g.onmouseover = function () {
            b(a, f);
            b(g, f)
        };
        g.onmouseout = function () {
            b(a, r);
            b(g, r)
        };
        b(g, {position: "absolute", left: "275px", background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAcCAIAAAAvP0KbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5JREFUeNpisre3Z/r37x8c////H4VPjjgeMYAAAwBV/1FjCd0OtgAAAABJRU5ErkJggg\x3d\x3d)", backgroundSize: "100% 100%", color: "#FFF", font: "11px Arial", width: "50px", height: "28px", margin: "0 0 0 0", textAlign: "center",
            webkitBoxShadow: "0 0 4px #000", MozBoxShadow: "0 0 4px #000", msBoxShadow: "0 0 4px #000", oBoxShadow: "0 0 4px #000", boxShadow: "0 0 4px #000", padding: "0px 5px", border: "none", cursor: "pointer"});
        d.appendChild(g)
    }
})(jwplayer.sharing);
(function (f) {
    f.shortcut = function (f, b, d) {
        function a(a, b) {
            for (var c in b)a.style[c] = b[c]
        }

        var c;
        b = document.createElement("div");
        b.onclick = d;
        b.onmouseout = function () {
            a(c, {webkitBoxShadow: "0 0 4px #000", MozBoxShadow: "0 0 4px #000", msBoxShadow: "0 0 4px #000", oBoxShadow: "0 0 4px #000", boxShadow: "0 0 4px #000"})
        };
        b.onmouseover = function () {
            a(c, {webkitBoxShadow: "0 0 4px #FFF", MozBoxShadow: "0 0 4px #FFF", msBoxShadow: "0 0 4px #FFF", oBoxShadow: "0 0 4px #FFF", boxShadow: "0 0 4px #FFF"})
        };
        a(b, {cursor: "pointer", position: "absolute",
            border: "none", color: "#FFF", display: "block", font: "11px/18px Arial,sans-serif", margin: "0 0 0 0", textAlign: "left", textDecoration: "none", textTransform: "none", padding: "0 0 0 10px", width: "30px", height: "30px"});
        c = document.createElement("img");
        c.setAttribute("src", f);
        a(c, {webkitBoxShadow: "0 0 4px #000", MozBoxShadow: "0 0 4px #000", msBoxShadow: "0 0 4px #000", oBoxShadow: "0 0 4px #000", boxShadow: "0 0 4px #000", position: "absolute", left: "0px", top: "0px", width: "30px", height: "30px", margin: "0 0 0 0", padding: "0 0 0 0"});
        b.appendChild(c);
        return b
    }
})(jwplayer.sharing);