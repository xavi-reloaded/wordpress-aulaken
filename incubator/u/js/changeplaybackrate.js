(function (e) {
    var t = "changeplaybackrate", n = function (e, t, n) {
        function u() {
            --o === -1 && (o = s.length - 1), f(s[o].speed)
        }

        function a(t) {
            if (e.getRenderingMode() != "html5")return;
            $.each(s, function (e, t) {
                if ($.cookie("playbackspeed") == t.speed)return o = e, i = t.speed, !1
            }), r = $("video", $(e.container))[0], e.onPlay(f)
        }

        function f(e) {
            typeof e != "object" && (i = e);
            var t = !1;
            $.each(s, function (e, n) {
                if (n.speed == i)return o = e, t = !0, !1
            }), t ? (r.playbackRate = i, c()) : i = r.playbackRate
        }

        function l(t) {
            e.removeButton("playbackrate"), $("#" + e.id + "_dock_playbackrate_tooltip").remove(), e.addButton("/static/images/jwplayer/" + t + ".png", "Playback Speed", u, "playbackrate")
        }

        function c() {
            l(r.playbackRate), h()
        }

        function h() {
            $.cookie("playbackspeed", r.playbackRate, {expires: 30, path: "/"})
        }

        var r = {}, i = 1, s = [
            {label: "2x", speed: 2},
            {label: "1.5x", speed: 1.5},
            {label: "1.25x", speed: 1.25},
            {label: "1x", speed: 1},
            {label: "0.5x", speed: .5}
        ], o;
        this.resize = function (e, t) {
        }, e.onReady(a)
    };
    e().registerPlugin(t, "6.0", n)
})(jwplayer);