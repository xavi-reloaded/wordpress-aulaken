(function (e) {
    var t = function (e, t, n) {
        function h(t) {
            if (e.getRenderingMode() != "html5")return;
            r = $(e.container), r.attr("tabindex", 1), r.focus(), r.css("outline", "none"), r.keydown(function (e) {
                switch (e.which) {
                    case c:
                    case o:
                        e.preventDefault(), v(e.which);
                        break;
                    case u:
                        e.preventDefault(), d(i);
                        break;
                    case a:
                        e.preventDefault(), d(-i);
                        break;
                    case f:
                        e.preventDefault(), m();
                        break;
                    case l:
                        e.preventDefault(), p();
                        break;
                    default:
                }
            })
        }

        function p() {
            e.setMute(!e.getMute())
        }

        function d(t) {
            s = parseInt(e.getVolume()), s += t, s > 0 && e.setMute(!1);
            if (s > 100) {
                s = 100;
                return
            }
            if (s < 0) {
                s = 0;
                return
            }
            e.setVolume(s)
        }

        function v(t) {
            if (e.getFullscreen() && t == o)return;
            e.play()
        }

        function m() {
            var t = e.getFullscreen();
            e.setFullscreen(!t)
        }

        var r = "", i = 5, s = 100, o = 32, u = 38, a = 40, f = 70, l = 77, c = 80;
        e.onReady(h), e.onPlay(function () {
            d(0)
        })
    };
    e().registerPlugin("shortcut", "6.0", t)
})(jwplayer);