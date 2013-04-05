(function (e) {
    var t = function (t, n, r) {
        function f(e) {
            u.onTime(l), u.onSeek(c), a = n.progresshandler, r.style.display = "none"
        }

        function l(e) {
            i = Math.round(u.getDuration() / 60), i = i ? i : 1, s = Math.floor(e.position / 60);
            if (o == s || s < 0)return;
            o = s, s == i && (s -= 1), h(s + 1)
        }

        function c(e) {
            var t = Math.floor(e.offset / 60);
            if (t != o) {
                s = t, o = s;
                if (s == i)return;
                h(t + 1)
            }
        }

        function h(t) {
            e.event.trigger(a, {total: i, position: t})
        }

        var i = 0, s = -1, o = -1, u = t, a = "";
        u.onReady(f), this.resize = function (e, t) {
        }
    };
    jwplayer5 && jwplayer5() && jwplayer5().registerPlugin("courseprogress", t), jwplayer && jwplayer() && jwplayer().registerPlugin("courseprogress", "6.0", t)
})(jQuery);