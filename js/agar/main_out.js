(function (d, e, AgarBot, app) {
    function Ob() {
        Ka = !0;
        jb();
        setInterval(jb, 18E4);
        M = La = document.getElementById("canvas");
        f = M.getContext("2d");
        M.onmousedown = function (a) {
            if (kb) {
                var b = a.clientX - (5 + k / 5 / 2), c = a.clientY - (5 + k / 5 / 2);
                if (Math.sqrt(b * b + c * c) <= k / 5 / 2) {
                    ca();
                    H(17);
                    return
                }
            }
            pa = 1 * a.clientX;
            qa = 1 * a.clientY;
            Ma();
            ca();
        };
        M.onmousemove = function (a) {
            pa = 1 * a.clientX;
            qa = 1 * a.clientY;
            Ma()
        };
        M.onmouseup = function () {
        };
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", lb, !1) : document.body.onmousewheel = lb;
        var a = !1, b = !1, c = !1;
        d.onkeydown = function (d) {
            32 != d.keyCode || a || (ca(), H(17), a = !0);
            81 != d.keyCode || b || (H(18), b = !0);
            87 != d.keyCode || c || (ca(), H(21), c = !0);
            27 == d.keyCode && (d.preventDefault(), ra(300));
        };
        d.onkeyup = function (d) {
            32 == d.keyCode && (a = !1);
            87 == d.keyCode && (c = !1);
            81 == d.keyCode && b && (H(19), b = !1)
        };
        d.onblur = function () {
            H(19);
            c = b = a = !1
        };
        d.onresize = mb;
        d.requestAnimationFrame(nb);
        setInterval(ca, 40);
        y && e("#region").val(y);
        ob();
        sa(e("#region").val());
        0 == Na && y && N();
        ra(0);
        mb();
        d.location.hash && 6 <= d.location.hash.length && pb(d.location.hash)
    }

    function lb(a) {
        O *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        /**
         * @author nguyenvanduocit
         */
        0.1 > O && (O = 0.1);
        O > 4 / g && (O = 4 / g)
    }

    function Pb() {
        if (.4 > g)da = null; else {
            for (var a = Number.POSITIVE_INFINITY, b = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY, d = Number.NEGATIVE_INFINITY, h = 0; h < u.length; h++) {
                var e = u[h];
                !e.D() || e.J || 20 >= e.size * g || (a = Math.min(e.x - e.size, a), b = Math.min(e.y - e.size, b), c = Math.max(e.x + e.size, c), d = Math.max(e.y + e.size, d))
            }
            da = Qb.V({Z: a - 10, $: b - 10, X: c + 10, Y: d + 10, da: 2, ea: 4});
            for (h = 0; h < u.length; h++)if (e = u[h], e.D() && !(20 >= e.size * g))for (a = 0; a < e.a.length; ++a)b = e.a[a].x, c = e.a[a].y, b < s - k / 2 / g || c < t - p / 2 / g || b > s + k / 2 / g || c > t + p / 2 / g || da.W(e.a[a])
        }
    }

    function Ma() {
        //@author nguyenvanduocit
        var tmp_ta = (pa - k / 2) / g + s;
        var temp_ua = (qa - p / 2) / g + t;
        setPoint(tmp_ta, temp_ua);
    }

    function jb() {
        null == va && (va = {}, e("#region").children().each(function () {
            var a = e(this), b = a.val();
            b && (va[b] = a.text())
        }));
        e.get(ea + "info", function (a) {
            var b = {}, c;
            for (c in a.regions) {
                var d = c.split(":")[0];
                b[d] = b[d] || 0;
                b[d] += a.regions[c].numPlayers
            }
            for (c in b)e('#region option[value="' + c + '"]').text(va[c] + " (" + b[c] + " players)")
        }, "json")
    }

    function qb() {
        e("#adsBottom").hide();
        e("#overlays").hide();
        e("#stats").hide();
        e("#mainPanel").hide();
        X = fa = !1;
        ob();
        rb(d.aa.concat(d.ac))
    }

    function sa(a) {
        a && (a == y ? e(".btn-needs-server").prop("disabled", !1) : (e("#region").val() != a && e("#region").val(a), y = d.localStorage.location = a, e(".region-message").hide(), e(".region-message." + a).show(), e(".btn-needs-server").prop("disabled", !1), Ka && N()))
    }

    function ra(a) {
        fa || X || (wa ? e(".btn-spectate").prop("disabled", !0) : e(".btn-spectate").prop("disabled", !1), I = null, Oa || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show()), sb(Oa ? d.ac : d.aa), Oa = !1, 1E3 > a && (r = 1), fa = !0, e("#mainPanel").show(), 0 < a ? e("#overlays").fadeIn(a) : e("#overlays").show())
    }

    function ga(a) {
        e("#helloContainer").attr("data-gamemode", a);
        P = a;
        e("#gamemode").val(a)
    }

    function ob() {
        e("#region").val() ? d.localStorage.location = e("#region").val() : d.localStorage.location && e("#region").val(d.localStorage.location);
        e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
    }

    function sb(a) {
        d.googletag && d.googletag.cmd.push(function () {
            Pa && (Pa = !1, setTimeout(function () {
                Pa = !0
            }, 6E4 * Rb), d.googletag && d.googletag.pubads && d.googletag.pubads().refresh && d.googletag.pubads().refresh(a))
        })
    }

    function rb(a) {
        d.googletag && d.googletag.pubads && d.googletag.pubads().clear && d.googletag.pubads().clear(a)
    }

    function ha(a) {
        return d.i18n[a] || d.i18n_dict.en[a] || a
    }

    function tb() {
        var a = ++Na;
        console.log("Find " + y + P);
        e.ajax(ea + "findServer", {
            error: function () {
                setTimeout(tb, 3E4)
            }, success: function (b) {
                if (a == Na) {
                    b.alert && alert(b.alert);
                    var c = b.ip;
                    void 0 != Q.U && (c = d.location.hostname + ":" + Q.U);
                    Qa("ws" + (Ra ? "s" : "") + "://" + c, b.token)
                }
            }, dataType: "json", method: "POST", cache: !1, crossDomain: !0, data: (y + P || "?") + "\n2200049715"
        })
    }

    function N() {
        Ka && y && (e("#connecting").show(), tb())
    }

    function Qa(a, b) {
        if (q) {
            q.onopen = null;
            q.onmessage = null;
            q.onclose = null;
            try {
                q.close()
            } catch (c) {
            }
            q = null
        }
        ia.ip && (a = "ws" + (Ra ? "s" : "") + "://" + ia.ip);
        if (null != R) {
            var d = R;
            R = function () {
                d(b)
            }
        }
        if (Ra && !Q.env_development && !Q.env_local) {
            var e = a.split(":");
            a = "wss://ip-" + e[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +e[2]
        }
        z = [];
        l = [];
        J = {};
        u = [];
        Y = [];
        w = [];
        A = B = null;
        K = 0;
        ja = !1;
        console.log("Connecting to " + a);
        serverIP = a;
        q = new WebSocket(a);
        q.binaryType = "arraybuffer";
        q.onopen = function () {
            var a;
            console.log("socket open");
            a = S(5);
            a.setUint8(0, 254);
            a.setUint32(1, 5, !0);
            T(a);
            a = S(5);
            a.setUint8(0, 255);
            a.setUint32(1, 2200049715, !0);
            T(a);
            a = S(1 + b.length);
            a.setUint8(0, 80);
            for (var c = 0; c < b.length; ++c)a.setUint8(c + 1, b.charCodeAt(c));
            T(a);
            ub()
        };
        q.onmessage = Sb;
        q.onclose = Tb;
        q.onerror = function () {
            console.log("socket error")
        }
    }

    function S(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function T(a) {
        q.send(a.buffer)
    }

    function Tb() {
        ja && (xa = 500);
        console.log("socket close");
        setTimeout(N, xa);
        xa *= 2
    }

    function Sb(a) {
        Ub(new DataView(a.data))
    }

    function Ub(a) {
        function b() {
            for (var b = ""; ;) {
                var d = a.getUint16(c, !0);
                c += 2;
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        var c = 0;
        240 == a.getUint8(c) && (c += 5);
        switch (a.getUint8(c++)) {
            case 16:
                Vb(a, c);
                break;
            case 17:
                ka = a.getFloat32(c, !0);
                c += 4;
                la = a.getFloat32(c, !0);
                c += 4;
                ma = a.getFloat32(c, !0);
                c += 4;
                break;
            case 20:
                l = [];
                z = [];
                break;
            case 21:
                Sa = a.getInt16(c, !0);
                c += 2;
                Ta = a.getInt16(c, !0);
                c += 2;
                Ua || (Ua = !0, ya = Sa, za = Ta);
                break;
            case 32:
                z.push(a.getUint32(c, !0));
                c += 4;
                break;
            case 49:
                if (null != B)break;
                var e = a.getUint32(c, !0), c = c + 4;
                w = [];
                for (var h = 0; h < e; ++h) {
                    var f = a.getUint32(c, !0), c = c + 4;
                    w.push({id: f, name: b()})
                }
                vb();
                break;
            case 50:
                B = [];
                e = a.getUint32(c, !0);
                c += 4;
                for (h = 0; h < e; ++h)B.push(a.getFloat32(c, !0)), c += 4;
                vb();
                break;
            case 64:
                Aa = a.getFloat64(c, !0);
                c += 8;
                Ba = a.getFloat64(c, !0);
                c += 8;
                Ca = a.getFloat64(c, !0);
                c += 8;
                Da = a.getFloat64(c, !0);
                c += 8;
                ka = (Ca + Aa) / 2;
                la = (Da + Ba) / 2;
                ma = 1;
                0 == l.length &&
                (s = ka, t = la, g = ma);
                a.byteLength > c && (a.getUint32(c, !0), c += 4, Va = b(), d.MC.updateServerVersion(Va), console.log("Server version " + Va));
                break;
            case 81:
                var v = a.getUint32(c, !0), c = c + 4, n = a.getUint32(c, !0), c = c + 4, k = a.getUint32(c, !0), c = c + 4;
                setTimeout(function () {
                    var a = {level: v, xp: n, xpNeeded: k};
                    d.MC.updateUserXPInfo(a);
                    Z(a)
                }, 1200)
        }
    }

    function Vb(a, b) {
        function c() {
            for (var c = ""; ;) {
                var d = a.getUint16(b, !0);
                b += 2;
                if (0 == d)break;
                c += String.fromCharCode(d)
            }
            return c
        }

        function E() {
            for (var c = ""; ;) {
                var d = a.getUint8(b++);
                if (0 == d)break;
                c += String.fromCharCode(d)
            }
            return c
        }

        wb = F = Date.now();
        ja || (ja = !0, e("#connecting").hide(), xb(), R && (R(), R = null));
        Wa = !1;
        var h = a.getUint16(b, !0);
        b += 2;
        for (var f = 0; f < h; ++f) {
            var v = J[a.getUint32(b, !0)], n = J[a.getUint32(b + 4, !0)];
            b += 8;
            v && n && (n.P(), n.l = n.x, n.m = n.y, n.k = n.size, n.w = v.x, n.A = v.y, n.h = n.size, n.I = F, Wb(v, n))
        }
        for (f = 0; ;) {
            h = a.getUint32(b, !0);
            b += 4;
            if (0 == h)break;
            ++f;
            var g, v = a.getInt32(b, !0);
            b += 4;
            n = a.getInt32(b, !0);
            b += 4;
            g = a.getInt16(b, !0);
            b += 2;
            var m = a.getUint8(b++), L = a.getUint8(b++), U = a.getUint8(b++), L = Xb(m << 16 | L << 8 | U), U = a.getUint8(b++), k = !!(U & 1), p = !!(U & 16), q = null;
            U & 2 && (b += 4 + a.getUint32(b, !0));
            U & 4 && (q = E());
            var r = c(), m = null;
            J.hasOwnProperty(h) ? (m = J[h], m.H(), m.l = m.x, m.m = m.y, m.k = m.size, m.color = L) : (m = new $(h, v, n, g, L, r), u.push(m), J[h] = m, m.fa = v, m.ha = n);
            m.c = k;
            m.g = p;
            m.w = v;
            m.A = n;
            m.h = g;
            m.I = F;
            m.T = U;
            q && (m.G = q);
            r && m.q(r);
            //@author nguyenvanduocit
            -1 != z.indexOf(h) && -1 == l.indexOf(m) && (l.push(m), m.birth = getLastUpdate(), m.birthMass = (m.size * m.size / 100), AgarBot.pubsub.trigger('startPlay'), 1 == l.length && (s = m.x, t = m.y, yb(), document.getElementById("overlays").style.display = "none", x = [], Xa = 0, Ya = l[0].color, wa = !0, Za = Date.now(), V = Ea = $a = 0));
            /**
             * @author nguyenvanduocit
             */
            interNodes[h] = window.getCells()[h];
        }
        /**
         * @author nguyenvanduocit
         */
        Object.keys(interNodes).forEach(function(element, index) {
            //console.log("start: " + interNodes[element].updateTime + " current: " + D + " life: " + (D - interNodes[element].updateTime));
            var isRemoved = !window.getCells().hasOwnProperty(element);

            //console.log("Time not updated: " + (window.getLastUpdate() - interNodes[element].getUptimeTime()));
            if (isRemoved && (window.getLastUpdate() - interNodes[element].getUptimeTime()) > 3000) {
                delete interNodes[element];
            } else {
                if (isRemoved &&
                    interNodes[element].x > (getX() - (1920 / 2) / getZoomlessRatio()) &&
                    interNodes[element].x < (getX() + (1920 / 2) / getZoomlessRatio()) &&
                    interNodes[element].y > getY() - (1080 / 2) / getZoomlessRatio() &&
                    interNodes[element].y < getY() + (1080 / 2) / getZoomlessRatio()) {
                    delete interNodes[element];
                }
            }
        });

        v = a.getUint32(b, !0);
        b += 4;
        for (f = 0; f < v; f++)h = a.getUint32(b, !0), b += 4, m = J[h], null != m && m.P();
        /**
         * @author nguyenvanduocit
         */
        Wa && 0 == l.length && (ab = Date.now(), wa = !1, fa || X || (zb ? (sb(d.ab), Yb(), X = !0,AgarBot.pubsub.trigger('stopPlay'), e("#overlays").fadeIn(3E3), (e("#stats").show())) : ra(3E3)), d.MC.deltaUpdateStats({
            games_played: 1,
            total_mass: ~~(K / 100),
            turn_time: (ab - Za) / 1E3,
            cells_eaten: Ea
        }));
    }

    function ca() {
        if (aa()) {
            //@author nguyenvanduocit
            if (getPlayer().length == 0 && !reviving && ~~(getCurrentScore() / 100) > 0) {
                console.log("Dead: " + ~~(getCurrentScore() / 100));
            }
            if (getPlayer().length == 0 && !firstStart) {
                console.log("Revive");
                setNick(originalName);
                reviving = true;
            } else if (getPlayer().length > 0 && reviving) {
                reviving = false;
                console.log("Done Reviving!");
            }

            var a = pa - k / 2, b = qa - p / 2;
            64 > a * a + b * b || .01 > Math.abs(Ab - ta) && .01 > Math.abs(Bb - ua) || (Ab = ta, Bb = ua, a = S(13), a.setUint8(0, 16), a.setInt32(1, ta, !0), a.setInt32(5, ua, !0), a.setUint32(9, 0, !0), T(a))
        }
    }

    function xb() {
        if (aa() &&
            ja && null != I) {
            var a = S(1 + 2 * I.length);
            a.setUint8(0, 0);
            for (var b = 0; b < I.length; ++b)a.setUint16(1 + 2 * b, I.charCodeAt(b), !0);
            T(a);
            I = null
        }
    }

    function aa() {
        return null != q && q.readyState == q.OPEN
    }

    function H(a) {
        if (aa()) {
            var b = S(1);
            b.setUint8(0, a);
            T(b)
        }
    }

    function ub() {
        if (aa() && null != C) {
            var a = S(1 + C.length);
            a.setUint8(0, 81);
            for (var b = 0; b < C.length; ++b)a.setUint8(b + 1, C.charCodeAt(b));
            T(a)
        }
    }

    function mb() {
        k = 1 * d.innerWidth;
        p = 1 * d.innerHeight;
        La.width = M.width = k;
        La.height = M.height = p;
        var a = e("#helloContainer");
        a.css("transform", "none");
        var b = a.height(), c = d.innerHeight;
        0 != b / 2 % 2 && (b++, a.height(b));
        b > c / 1.1 ? a.css("transform", "translate(-50%, -50%) scale(" + c / b / 1.1 + ")") : a.css("transform", "translate(-50%, -50%)");
        Cb();
    }

    function Db() {
        var a;
        a = 1 * Math.max(p / 1080, k / 1920);
        return a *= O
    }

    /**
     * @author nguyenvanduocit
     */
    function Db2() {
        var a;
        a = 1 * Math.max(p / 1080, k / 1920);
        return a;
    }

    function Zb() {
        if (0 != l.length) {
            for (var a = 0, b = 0; b < l.length; b++)a += l[b].size;
            var a2 = Math.pow(Math.min(64 / a, 1), .4) * Db2();
            a = Math.pow(Math.min(64 / a, 1), .4) * Db();
            g = (9 * g + a) / 10;
            //@author nguyenvanduocit
            g2 = (9 * g2 + a2) / 10;
        }
    }

    function Cb() {
        //@author nguyenvanduocit
        dPoints = [];
        circles = [];
        dArc = [];
        dText = [];
        lines = [];

        var a, b = Date.now();
        ++$b;
        F = b;
        if (0 < l.length) {
            Zb();
            for (var c = a = 0, d = 0; d < l.length; d++)l[d].H(), a += l[d].x / l.length, c += l[d].y /
                l.length;
            ka = a;
            la = c;
            ma = g;
            s = (s + a) / 2;
            t = (t + c) / 2
        } else s = (29 * s + ka) / 30, t = (29 * t + la) / 30, g = (9 * g + ma * Db()) / 10,g2 = (9 * g2 + ma * Db2()) / 10;
        Pb();
        Ma();
        bb || f.clearRect(0, 0, k, p);
        bb ? (f.fillStyle = Fa ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, k, p), f.globalAlpha = 1) : ac();
        u.sort(function (a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size
        });
        f.save();
        f.translate(k / 2, p / 2);
        f.scale(g, g);
        f.translate(-s, -t);
        for (d = 0; d < Y.length; d++)Y[d].p(f);
        for (d = 0; d < u.length; d++)u[d].p(f);
        /**
         * @author nguyenvanduocit
         */
        AgarBot.pubsub.trigger('main_out:mainloop');
        customRender(f);
        if (Ua) {
            ya = (3 * ya + Sa) / 4;
            za = (3 * za + Ta) / 4;
            f.save();
            f.strokeStyle = "#FFAAAA";
            f.lineWidth =
                10;
            f.lineCap = "round";
            f.lineJoin = "round";
            f.globalAlpha = .5;
            f.beginPath();
            for (d = 0; d < l.length; d++)f.moveTo(l[d].x, l[d].y), f.lineTo(ya, za);
            f.stroke();
            f.restore()
        }
        f.restore();
        A && A.width && f.drawImage(A, k - A.width - 10, 10);
        K = Math.max(K, Eb());
        0 != K && (null == Ga && (Ga = new Ha(24, "#FFFFFF")), Ga.r(ha("score") + ": " + ~~(K / 100)), c = Ga.B(), a = c.width, f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(10, p - 10 - 24 - 10, a + 10, 34), f.globalAlpha = 1, f.drawImage(c, 15, p - 10 - 24 - 5));
        bc();
        b = Date.now() - b;
        b > 1E3 / 60 ? G -= .01 : b < 1E3 / 65 && (G += .01);
        .4 > G && (G = .4);
        1 < G && (G = 1);
        b = F - Fb;
        !aa() || fa || X ? (r += b / 2E3, 1 < r && (r = 1)) : (r -= b / 300, 0 > r && (r = 0));
        0 < r ? (f.fillStyle = "#000000", Gb ? (f.globalAlpha = r, f.fillRect(0, 0, k, p), D.complete && D.width && (D.width / D.height < k / p ? (b = k, a = D.height * k / D.width) : (b = D.width * p / D.height, a = p), f.drawImage(D, (k - b) / 2, (p - a) / 2, b, a), f.globalAlpha = .5 * r, f.fillRect(0, 0, k, p))) : (f.globalAlpha = .5 * r, f.fillRect(0, 0, k, p)), f.globalAlpha = 1) : Gb = !1;
        Fb = F;
    }
//UPDATE
    function customRender(d) {
        d.save();
        for (var i = 0; i < lines.length; i++) {
            d.beginPath();

            d.lineWidth = 5;

            if (lines[i][4] == 0) {
                d.strokeStyle = "#FF0000";
            } else if (lines[i][4] == 1) {
                d.strokeStyle = "#00FF00";
            } else if (lines[i][4] == 2) {
                d.strokeStyle = "#0000FF";
            } else if (lines[i][4] == 3) {
                d.strokeStyle = "#FF8000";
            } else if (lines[i][4] == 4) {
                d.strokeStyle = "#8A2BE2";
            } else if (lines[i][4] == 5) {
                d.strokeStyle = "#FF69B4";
            } else if (lines[i][4] == 6) {
                d.strokeStyle = "#008080";
            } else if (lines[i][4] == 7) {
                d.strokeStyle = (getDarkBool() ? '#F2FBFF' : '#111111');
            } else {
                d.strokeStyle = "#000000";
            }

            d.moveTo(lines[i][0], lines[i][1]);
            d.lineTo(lines[i][2], lines[i][3]);

            d.stroke();
        }
        d.restore();
        d.save();
        for (var i = 0; i < circles.length; i++) {
            if (circles[i][3] == 0) {
                d.strokeStyle = "#FF0000";
            } else if (circles[i][3] == 1) {
                d.strokeStyle = "#00FF00";
            } else if (circles[i][3] == 2) {
                d.strokeStyle = "#0000FF";
            } else if (circles[i][3] == 3) {
                d.strokeStyle = "#FF8000";
            } else if (circles[i][3] == 4) {
                d.strokeStyle = "#8A2BE2";
            } else if (circles[i][3] == 5) {
                d.strokeStyle = "#FF69B4";
            } else if (circles[i][3] == 6) {
                d.strokeStyle = "#008080";
            } else if (circles[i][3] == 7) {
                d.strokeStyle = (getDarkBool() ? '#F2FBFF' : '#111111');
            } else {
                d.strokeStyle = "#000000";
            }
            d.beginPath();

            d.lineWidth = 10;
            //d.setLineDash([5]);
            d.globalAlpha = 0.3;

            d.arc(circles[i][0], circles[i][1], circles[i][2], 0, 2 * Math.PI, false);

            d.stroke();
        }
        d.restore();
        d.save();
        for (var i = 0; i < dArc.length; i++) {
            if (dArc[i][7] == 0) {
                d.strokeStyle = "#FF0000";
            } else if (dArc[i][7] == 1) {
                d.strokeStyle = "#00FF00";
            } else if (dArc[i][7] == 2) {
                d.strokeStyle = "#0000FF";
            } else if (dArc[i][7] == 3) {
                d.strokeStyle = "#FF8000";
            } else if (dArc[i][7] == 4) {
                d.strokeStyle = "#8A2BE2";
            } else if (dArc[i][7] == 5) {
                d.strokeStyle = "#FF69B4";
            } else if (dArc[i][7] == 6) {
                d.strokeStyle = "#008080";
            } else if (dArc[i][7] == 7) {
                d.strokeStyle = (getDarkBool() ? '#F2FBFF' : '#111111');
            } else {
                d.strokeStyle = "#000000";
            }

            d.beginPath();

            d.lineWidth = 5;

            var ang1 = Math.atan2(dArc[i][1] - dArc[i][5], dArc[i][0] - dArc[i][4]);
            var ang2 = Math.atan2(dArc[i][3] - dArc[i][5], dArc[i][2] - dArc[i][4]);

            d.arc(dArc[i][4], dArc[i][5], dArc[i][6], ang1, ang2, false);

            d.stroke();
        }
        d.restore();
        d.save();
        for (var i = 0; i < dPoints.length; i++) {
            if (dText[i] == "") {
                var radius = 10;

                d.beginPath();
                d.arc(dPoints[i][0], dPoints[i][1], radius, 0, 2 * Math.PI, false);

                if (dPoints[i][2] == 0) {
                    d.fillStyle = "black";
                } else if (dPoints[i][2] == 1) {
                    d.fillStyle = "yellow";
                } else if (dPoints[i][2] == 2) {
                    d.fillStyle = "blue";
                } else if (dPoints[i][2] == 3) {
                    d.fillStyle = "red";
                } else if (dPoints[i][2] == 4) {
                    d.fillStyle = "#008080";
                } else if (dPoints[i][2] == 5) {
                    d.fillStyle = "#FF69B4";
                } else {
                    d.fillStyle = "#000000";
                }

                d.fill();
                d.lineWidth = 2;
                d.strokeStyle = '#003300';
                d.stroke();
            } else {
                var text = new Ha(18, (getDarkBool() ? '#F2FBFF' : '#111111'), true, (getDarkBool() ? '#111111' : '#F2FBFF'));
                text.r(dText[i]);
                var textRender = text.B();
                d.drawImage(textRender, dPoints[i][0] - (textRender.width / 2), dPoints[i][1] - (textRender.height / 2));
            }

        }
        d.restore();
    }
    function ac() {
        f.fillStyle = Fa ? "#111111" : "#F2FBFF";
        f.fillRect(0, 0, k, p);
        f.save();
        f.strokeStyle = Fa ? "#AAAAAA" : "#000000";
        f.globalAlpha = .2 * g;
        for (var a = k / g, b = p / g, c = (-s + a / 2) % 50; c < a; c += 50)f.beginPath(), f.moveTo(c * g - .5, 0), f.lineTo(c * g - .5, b * g), f.stroke();
        for (c = (-t + b / 2) % 50; c < b; c += 50)f.beginPath(), f.moveTo(0, c * g - .5), f.lineTo(a * g, c * g - .5), f.stroke();
        f.restore()
    }

    function bc() {
        if (kb && cb.width) {
            var a = k / 5;
            f.drawImage(cb, 5, 5, a, a)
        }
    }

    function Eb() {
        for (var a = 0, b = 0; b < l.length; b++)a += l[b].h * l[b].h;
        return a
    }

    function vb() {
        A = null;
        if (null != B || 0 != w.length)if (null != B || Ia) {
            A = document.createElement("canvas");
            var a = A.getContext("2d"), b = 60, b = null == B ? b + 24 * w.length : b + 180, c = Math.min(200, .3 * k) / 200;
            A.width = 200 * c;
            A.height = b * c;
            a.scale(c, c);
            a.globalAlpha = .4;
            a.fillStyle = "#000000";
            a.fillRect(0, 0, 200, b);
            a.globalAlpha = 1;
            a.fillStyle = "#FFFFFF";
            c = null;
            c = ha("leaderboard");
            a.font = "30px Ubuntu";
            a.fillText(c, 100 - a.measureText(c).width / 2, 40);
            if (null == B)for (a.font = "20px Ubuntu", b = 0; b < w.length; ++b)c = w[b].name || ha("unnamed_cell"), Ia || (c = ha("unnamed_cell")), -1 != z.indexOf(w[b].id) ? (l[0].name && (c = l[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle = "#FFFFFF", c = b + 1 + ". " + c,
                a.fillText(c, 100 - a.measureText(c).width / 2, 70 + 24 * b); else for (b = c = 0; b < B.length; ++b) {
                var d = c + B[b] * Math.PI * 2;
                a.fillStyle = cc[b + 1];
                a.beginPath();
                a.moveTo(100, 140);
                a.arc(100, 140, 80, c, d, !1);
                a.fill();
                c = d
            }
        }
    }

    function dc(a) {
        if (null == a || 0 == a.length)return null;
        if ("%" == a[0]) {
            if (!d.MC || !d.MC.getSkinInfo)return null;
            a = d.MC.getSkinInfo("skin_" + a.slice(1));
            if (null == a)return null;
            for (a = (+a.color).toString(16); 6 > a.length;)a = "0" + a;
            return "#" + a
        }
        return null
    }

    function ec(a) {
        if (null == a || 0 == a.length)return null;
        if (!na.hasOwnProperty(a)) {
            var b = new Image;
            if (":" == a[0])b.src = a.slice(1); else if ("%" == a[0]) {
                if (!d.MC || !d.MC.getSkinInfo)return null;
                var c = d.MC.getSkinInfo("skin_" + a.slice(1));
                if (null == c)return null;
                b.src = d.ASSETS_ROOT + "skins/premium/" + c.url
            }
            na[a] = b
        }
        return 0 != na[a].width && na[a].complete ? na[a] : null
    }

    function db(a, b, c, d, e) {
        this.N = a;
        this.x = b;
        this.y = c;
        this.d = d;
        this.b = e
    }

    function $(a, b, c, d, e, f) {
        this.id = a;
        this.l = this.x = b;
        this.m = this.y = c;
        this.k = this.size = d;
        this.color = e;
        this.a = [];
        this.O();
        this.q(f)
    }

    function Xb(a) {
        for (a = a.toString(16); 6 > a.length;)a = "0" + a;
        return "#" + a
    }

    function Ha(a, b, c, d) {
        a && (this.n = a);
        b && (this.K = b);
        this.M = !!c;
        d && (this.o = d)
    }

    function fc(a) {
        for (var b = a.length, c, d; 0 < b;)d = Math.floor(Math.random() * b), b--, c = a[b], a[b] = a[d], a[d] = c
    }

    function Z(a, b) {
        var c = "1" == e("#helloContainer").attr("data-has-account-data");
        e("#helloContainer").attr("data-has-account-data", "1");
        if (null == b && d.localStorage[W]) {
            var E = JSON.parse(d.localStorage[W]);
            E.xp = a.xp;
            E.xpNeeded = a.xpNeeded;
            E.level = a.level;
            d.localStorage[W] = JSON.stringify(E)
        }
        if (c) {
            var h = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0], c = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0], E = e(".agario-profile-panel .progress-bar-star").first().text();
            if (E != a.level)Z({xp: c, xpNeeded: c, level: E}, function () {
                e(".agario-profile-panel .progress-bar-star").text(a.level);
                e(".agario-exp-bar .progress-bar").css("width", "100%");
                e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e(".progress-bar-star").removeClass("animated tada")
                });
                setTimeout(function () {
                    e(".agario-exp-bar .progress-bar-text").text(a.xpNeeded + "/" + a.xpNeeded + " XP");
                    Z({xp: 0, xpNeeded: a.xpNeeded, level: a.level}, function () {
                        Z(a, b)
                    })
                }, 1E3)
            }); else {
                var f = Date.now(), g = function () {
                    var c;
                    c = (Date.now() - f) / 1E3;
                    c = 0 > c ? 0 : 1 < c ? 1 : c;
                    c = c * c * (3 - 2 * c);
                    e(".agario-exp-bar .progress-bar-text").text(~~(h + (a.xp - h) * c) + "/" + a.xpNeeded + " XP");
                    e(".agario-exp-bar .progress-bar").css("width", (88 * (h + (a.xp - h) * c) / a.xpNeeded).toFixed(2) + "%");
                    1 > c ? d.requestAnimationFrame(g) : b && b()
                };
                d.requestAnimationFrame(g)
            }
        } else e(".agario-profile-panel .progress-bar-star").text(a.level),
            e(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%"), b && b()
    }

    function Hb(a) {
        "string" == typeof a && (a = JSON.parse(a));
        d.localStorage[W] = JSON.stringify(a);
        C = a.authToken;
        var b = a.name, b = b.substring(0, b.indexOf(" "));
        e(".agario-profile-name").text(b);
        ub();
        Z({xp: a.xp, xpNeeded: a.xpNeeded, level: a.level});
        e("#helloContainer").attr("data-logged-in", "1")
    }

    function gc(a) {
        a = a.split("\n");
        Hb({name: a[0], fbid: a[1], authToken: a[2], expires: 1E3 * +a[3], level: +a[4], xp: +a[5], xpNeeded: +a[6]})
    }

    function eb(a) {
        if ("connected" == a.status && +d.localStorage.wannaLogin) {
            var b = a.authResponse.accessToken;
            null == b || "undefined" == b || "" == b ? (3 > Ib && (Ib++, d.facebookRelogin()), d.logout()) : (d.localStorage.fbTokenCache = b, delete d.localStorage.wannaLogin, console.log("doLogin because fb logged in"), d.MC.doLoginWithFB(b), d.FB.api("/me/picture?width=180&height=180", function (a) {
                d.localStorage.fbPictureCache = a.data.url;
                e(".agario-profile-picture").attr("src", a.data.url)
            }), e("#helloContainer").attr("data-logged-in", "1"), null != C ? d.checkSocialAPIToken(a) : d.getSocialAPIToken())
        }
    }
    /**
     * @author nguyenvanduocit
     * @type {number}
     */
    var currenConnecttTry = 0;
    var maxConnectRetry = 50;
    function pb(a) {
        ga(":party");
        e("#helloContainer").attr("data-party-state", "4");
        a = decodeURIComponent(a).replace(/.*#/gim, "");
        fb("#" + d.encodeURIComponent(a));
        e.ajax(ea + "getToken", {
            error: function () {
                e("#helloContainer").attr("data-party-state", "6")
            }, success: function (b) {
                b = b.split("\n");
                /**
                 * @author nguyenvanduocit
                 */
                var wantedIp = window.getWantedIp();
                if(wantedIp && wantedIp !== b[0].trim()){
                    console.log('Found ',b[0],", Wanted : ",wantedIp );
                    if(currenConnecttTry <= maxConnectRetry){
                        currenConnecttTry++;
                        AgarBot.pubsub.trigger('findServer:retry', {time:currenConnecttTry});
                        setTimeout(function(){pb(a);}, 2e3);
                    }
                    else{
                        AgarBot.pubsub.trigger('findServer:ipNotFound');
                    }
                }else{
                    e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                    e("#helloContainer").attr("data-party-state", "5");
                    ga(":party");
                    Qa("ws://" + b[0], a)
                }
            }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: a
        })
    }

    function fb(a) {
        d.history && d.history.replaceState && d.history.replaceState({}, d.document.title, a)
    }

    function Wb(a, b) {
        var c = -1 != z.indexOf(a.id), d = -1 != z.indexOf(b.id), e = 30 > b.size;
        c && e && ++Xa;
        e || !c || d || ++Ea
    }

    function Jb(a) {
        a = ~~a;
        var b = (a % 60).toString();
        a = (~~(a / 60)).toString();
        2 > b.length && (b = "0" + b);
        return a + ":" + b
    }

    function hc() {
        if (null == w)return 0;
        for (var a = 0; a < w.length; ++a)if (-1 != z.indexOf(w[a].id))return a +
            1;
        return 0
    }

    function Yb() {
        e(".stats-food-eaten").text(Xa);
        e(".stats-time-alive").text(Jb((ab - Za) / 1E3));
        e(".stats-leaderboard-time").text(Jb($a));
        e(".stats-highest-mass").text(~~(K / 100));
        e(".stats-cells-eaten").text(Ea);
        e(".stats-top-position").text(0 == V ? ":(" : V);
        var a = document.getElementById("statsGraph");
        if (a) {
            var b = a.getContext("2d"), c = a.width, a = a.height;
            b.clearRect(0, 0, c, a);
            if (2 < x.length) {
                for (var d = 200, h = 0; h < x.length; h++)d = Math.max(x[h], d);
                b.lineWidth = 3;
                b.lineCap = "round";
                b.lineJoin = "round";
                b.strokeStyle =
                    Ya;
                b.fillStyle = Ya;
                b.beginPath();
                b.moveTo(0, a - x[0] / d * (a - 10) + 10);
                for (h = 1; h < x.length; h += Math.max(~~(x.length / c), 1)) {
                    for (var f = h / (x.length - 1) * c, g = [], n = -20; 20 >= n; ++n)0 > h + n || h + n >= x.length || g.push(x[h + n]);
                    g = g.reduce(function (a, b) {
                            return a + b
                        }) / g.length / d;
                    b.lineTo(f, a - g * (a - 10) + 10)
                }
                b.stroke();
                b.globalAlpha = .5;
                b.lineTo(c, a);
                b.lineTo(0, a);
                b.fill();
                b.globalAlpha = 1
            }
        }
    }

    var ia = {};
    (function () {
        var a = d.location.search;
        "?" == a.charAt(0) && (a = a.slice(1));
        for (var a = a.split("&"), b = 0; b < a.length; b++) {
            var c = a[b].split("=");
            ia[c[0]] =
                c[1]
        }
    })();
    "fb" in ia || "miniclip" in ia || "http:" == d.location.protocol || (d.location.href = "http:" + d.location.href.substring(d.location.protocol.length));
    d.MC = function () {
    };
    if (void 0 != d.EnvConfig) {
        var Q = d.EnvConfig;
        d.EnvConfig = Q
    }
    if (!d.agarioNoInit) {
        var gb = d.location.protocol, Ra = "https:" == gb, ea = gb + "//" + Q.master_url + "/", Ja = d.navigator.userAgent;
        if (-1 != Ja.indexOf("Android"))d.ga && d.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function () {
            d.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
        }, 1E3); else if (-1 != Ja.indexOf("iPhone") || -1 != Ja.indexOf("iPad") || -1 != Ja.indexOf("iPod"))d.ga && d.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function () {
            d.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
        }, 1E3); else {
            var La, f, M, k, p, da = null, q = null, s = 0, t = 0, z = [], l = [], J = {}, u = [], Y = [], w = [], pa = 0, qa = 0, ta = -1, ua = -1, $b = 0, F = 0, Fb = 0, I = null, Aa = 0, Ba = 0, Ca = 1E4, Da = 1E4, g = 1, g2 = 1, y = null, hb = !0, Ia = !0, ib = !1, Wa = !1, K = 0, Fa = !1, Kb = !1, ka = s = ~~((Aa + Ca) / 2), la = t = ~~((Ba + Da) / 2), ma = 1, P = "", B = null, Ka =
                !1, Ua = !1, Sa = 0, Ta = 0, ya = 0, za = 0, Lb = 0, cc = ["#333333", "#FF3333", "#33FF33", "#3333FF"], bb = !1, ja = !1, wb = 0, C = null, O = 1, r = 1, fa = !1, Na = 0, Gb = !0, Va = null, D = new Image,
                // @author nguyenvanduocit
                toggle = false,
                toggleDraw = false,
                shootTime = 0,
                splitTime = 0,
                shootCooldown = 100,
                splitCooldown = 100,
                tempPoint = [0, 0, 1],
                dPoints = [],
                circles = [],
                dArc = [],
                dText = [],
                lines = [],
                names = ["SenViet.org"],
                firstStart = true;
                originalName = names[Math.floor(Math.random() * names.length)],
                sessionScore = 0,
                serverIP = "",
                interNodes = [],
                lifeTimer = new Date(),
                bestTime = 0,
                botIndex = 0,
                reviving = false,
                message = [];
            D.src = "/img/background.png";
            var kb = "ontouchstart" in d && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent), cb = new Image;
            cb.src = "/img/split.png";
            var Mb = document.createElement("canvas");
            if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == Mb || null == Mb.getContext || null == d.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this"); else {
                var va = null;
                d.setNick = function (a) {
                    // @author nguyenvanduocit
                    firstStart = false;
                    originalName = a;
                    if (getPlayer().length == 0) {
                        lifeTimer = new Date();
                    }

                    d.ga && d.ga("send", "event", "Nick", a.toLowerCase());
                    qb();
                    I = a;
                    xb();
                    K = 0
                };
                d.setRegion = sa;
                var Oa = !0;
                d.setSkins = function (a) {
                    hb = a
                };
                d.setNames = function (a) {
                    Ia = a
                };
                d.setDarkTheme = function (a) {
                    Fa = a
                };
                d.setColors = function (a) {
                    ib = a
                };
                d.setShowMass = function (a) {
                    Kb = a
                };
                d.spectate = function () {
                    I = null;
                    H(1);
                    qb()
                };
                d.setGameMode = function (a) {
                    a != P && (":party" == P && e("#helloContainer").attr("data-party-state", "0"), ga(a), ":party" != a && N())
                };
                d.setAcid = function (a) {
                    bb = a
                };
                null != d.localStorage && (null == d.localStorage.AB9 && (d.localStorage.AB9 = 0 + ~~(100 * Math.random())), Lb = +d.localStorage.AB9, d.ABGroup = Lb);
                e.get(gb + "//gc.agar.io", function (a) {
                    var b = a.split(" ");
                    a = b[0];
                    b = b[1] || "";
                    -1 == ["UA"].indexOf(a) && Nb.push("ussr");
                    oa.hasOwnProperty(a) && ("string" == typeof oa[a] ? y || sa(oa[a]) : oa[a].hasOwnProperty(b) && (y || sa(oa[a][b])))
                }, "text");
                var Pa = !0, Rb = 0, oa = {
                    AF: "JP-Tokyo",
                    AX: "EU-London",
                    AL: "EU-London",
                    DZ: "EU-London",
                    AS: "SG-Singapore",
                    AD: "EU-London",
                    AO: "EU-London",
                    AI: "US-Atlanta",
                    AG: "US-Atlanta",
                    AR: "BR-Brazil",
                    AM: "JP-Tokyo",
                    AW: "US-Atlanta",
                    AU: "SG-Singapore",
                    AT: "EU-London",
                    AZ: "JP-Tokyo",
                    BS: "US-Atlanta",
                    BH: "JP-Tokyo",
                    BD: "JP-Tokyo",
                    BB: "US-Atlanta",
                    BY: "EU-London",
                    BE: "EU-London",
                    BZ: "US-Atlanta",
                    BJ: "EU-London",
                    BM: "US-Atlanta",
                    BT: "JP-Tokyo",
                    BO: "BR-Brazil",
                    BQ: "US-Atlanta",
                    BA: "EU-London",
                    BW: "EU-London",
                    BR: "BR-Brazil",
                    IO: "JP-Tokyo",
                    VG: "US-Atlanta",
                    BN: "JP-Tokyo",
                    BG: "EU-London",
                    BF: "EU-London",
                    BI: "EU-London",
                    KH: "JP-Tokyo",
                    CM: "EU-London",
                    CA: "US-Atlanta",
                    CV: "EU-London",
                    KY: "US-Atlanta",
                    CF: "EU-London",
                    TD: "EU-London",
                    CL: "BR-Brazil",
                    CN: "CN-China",
                    CX: "JP-Tokyo",
                    CC: "JP-Tokyo",
                    CO: "BR-Brazil",
                    KM: "EU-London",
                    CD: "EU-London",
                    CG: "EU-London",
                    CK: "SG-Singapore",
                    CR: "US-Atlanta",
                    CI: "EU-London",
                    HR: "EU-London",
                    CU: "US-Atlanta",
                    CW: "US-Atlanta",
                    CY: "JP-Tokyo",
                    CZ: "EU-London",
                    DK: "EU-London",
                    DJ: "EU-London",
                    DM: "US-Atlanta",
                    DO: "US-Atlanta",
                    EC: "BR-Brazil",
                    EG: "EU-London",
                    SV: "US-Atlanta",
                    GQ: "EU-London",
                    ER: "EU-London",
                    EE: "EU-London",
                    ET: "EU-London",
                    FO: "EU-London",
                    FK: "BR-Brazil",
                    FJ: "SG-Singapore",
                    FI: "EU-London",
                    FR: "EU-London",
                    GF: "BR-Brazil",
                    PF: "SG-Singapore",
                    GA: "EU-London",
                    GM: "EU-London",
                    GE: "JP-Tokyo",
                    DE: "EU-London",
                    GH: "EU-London",
                    GI: "EU-London",
                    GR: "EU-London",
                    GL: "US-Atlanta",
                    GD: "US-Atlanta",
                    GP: "US-Atlanta",
                    GU: "SG-Singapore",
                    GT: "US-Atlanta",
                    GG: "EU-London",
                    GN: "EU-London",
                    GW: "EU-London",
                    GY: "BR-Brazil",
                    HT: "US-Atlanta",
                    VA: "EU-London",
                    HN: "US-Atlanta",
                    HK: "JP-Tokyo",
                    HU: "EU-London",
                    IS: "EU-London",
                    IN: "JP-Tokyo",
                    ID: "JP-Tokyo",
                    IR: "JP-Tokyo",
                    IQ: "JP-Tokyo",
                    IE: "EU-London",
                    IM: "EU-London",
                    IL: "JP-Tokyo",
                    IT: "EU-London",
                    JM: "US-Atlanta",
                    JP: "JP-Tokyo",
                    JE: "EU-London",
                    JO: "JP-Tokyo",
                    KZ: "JP-Tokyo",
                    KE: "EU-London",
                    KI: "SG-Singapore",
                    KP: "JP-Tokyo",
                    KR: "JP-Tokyo",
                    KW: "JP-Tokyo",
                    KG: "JP-Tokyo",
                    LA: "JP-Tokyo",
                    LV: "EU-London",
                    LB: "JP-Tokyo",
                    LS: "EU-London",
                    LR: "EU-London",
                    LY: "EU-London",
                    LI: "EU-London",
                    LT: "EU-London",
                    LU: "EU-London",
                    MO: "JP-Tokyo",
                    MK: "EU-London",
                    MG: "EU-London",
                    MW: "EU-London",
                    MY: "JP-Tokyo",
                    MV: "JP-Tokyo",
                    ML: "EU-London",
                    MT: "EU-London",
                    MH: "SG-Singapore",
                    MQ: "US-Atlanta",
                    MR: "EU-London",
                    MU: "EU-London",
                    YT: "EU-London",
                    MX: "US-Atlanta",
                    FM: "SG-Singapore",
                    MD: "EU-London",
                    MC: "EU-London",
                    MN: "JP-Tokyo",
                    ME: "EU-London",
                    MS: "US-Atlanta",
                    MA: "EU-London",
                    MZ: "EU-London",
                    MM: "JP-Tokyo",
                    NA: "EU-London",
                    NR: "SG-Singapore",
                    NP: "JP-Tokyo",
                    NL: "EU-London",
                    NC: "SG-Singapore",
                    NZ: "SG-Singapore",
                    NI: "US-Atlanta",
                    NE: "EU-London",
                    NG: "EU-London",
                    NU: "SG-Singapore",
                    NF: "SG-Singapore",
                    MP: "SG-Singapore",
                    NO: "EU-London",
                    OM: "JP-Tokyo",
                    PK: "JP-Tokyo",
                    PW: "SG-Singapore",
                    PS: "JP-Tokyo",
                    PA: "US-Atlanta",
                    PG: "SG-Singapore",
                    PY: "BR-Brazil",
                    PE: "BR-Brazil",
                    PH: "JP-Tokyo",
                    PN: "SG-Singapore",
                    PL: "EU-London",
                    PT: "EU-London",
                    PR: "US-Atlanta",
                    QA: "JP-Tokyo",
                    RE: "EU-London",
                    RO: "EU-London",
                    RU: "RU-Russia",
                    RW: "EU-London",
                    BL: "US-Atlanta",
                    SH: "EU-London",
                    KN: "US-Atlanta",
                    LC: "US-Atlanta",
                    MF: "US-Atlanta",
                    PM: "US-Atlanta",
                    VC: "US-Atlanta",
                    WS: "SG-Singapore",
                    SM: "EU-London",
                    ST: "EU-London",
                    SA: "EU-London",
                    SN: "EU-London",
                    RS: "EU-London",
                    SC: "EU-London",
                    SL: "EU-London",
                    SG: "JP-Tokyo",
                    SX: "US-Atlanta",
                    SK: "EU-London",
                    SI: "EU-London",
                    SB: "SG-Singapore",
                    SO: "EU-London",
                    ZA: "EU-London",
                    SS: "EU-London",
                    ES: "EU-London",
                    LK: "JP-Tokyo",
                    SD: "EU-London",
                    SR: "BR-Brazil",
                    SJ: "EU-London",
                    SZ: "EU-London",
                    SE: "EU-London",
                    CH: "EU-London",
                    SY: "EU-London",
                    TW: "JP-Tokyo",
                    TJ: "JP-Tokyo",
                    TZ: "EU-London",
                    TH: "JP-Tokyo",
                    TL: "JP-Tokyo",
                    TG: "EU-London",
                    TK: "SG-Singapore",
                    TO: "SG-Singapore",
                    TT: "US-Atlanta",
                    TN: "EU-London",
                    TR: "TK-Turkey",
                    TM: "JP-Tokyo",
                    TC: "US-Atlanta",
                    TV: "SG-Singapore",
                    UG: "EU-London",
                    UA: "EU-London",
                    AE: "EU-London",
                    GB: "EU-London",
                    US: "US-Atlanta",
                    UM: "SG-Singapore",
                    VI: "US-Atlanta",
                    UY: "BR-Brazil",
                    UZ: "JP-Tokyo",
                    VU: "SG-Singapore",
                    VE: "BR-Brazil",
                    VN: "JP-Tokyo",
                    WF: "SG-Singapore",
                    EH: "EU-London",
                    YE: "JP-Tokyo",
                    ZM: "EU-London",
                    ZW: "EU-London"
                }, R = null;
                d.connect = Qa;
                var xa = 500, Ab = -1, Bb = -1;
                d.refreshPlayerInfo = function () {
                    H(253)
                };
                var A = null, G = 1, Ga = null, nb = function () {
                    var a = Date.now(), b = 1E3 / 60;
                    return function () {
                        d.requestAnimationFrame(nb);
                        var c = Date.now(), e = c - a;
                        e > b && (a = c - e % b, !aa() || 240 > Date.now() - wb ? Cb() : console.warn("Skipping draw"), ic())
                    }
                }(), ba = {}, Nb = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"), jc = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"), na = {};
                db.prototype = {N: null, x: 0, y: 0, d: 0, b: 0};
                $.prototype = {
                    id: 0,
                    a: null,
                    name: null,
                    i: null,
                    F: null,
                    x: 0,
                    y: 0,
                    size: 0,
                    l: 0,
                    m: 0,
                    k: 0,
                    w: 0,
                    A: 0,
                    h: 0,
                    T: 0,
                    I: 0,
                    S: 0,
                    u: !1,
                    c: !1,
                    g: !1,
                    J: !0,
                    Q: 0,
                    G: null,
                    //@author nguyenvanduocit
                    updateCode: 0,
                    danger: false,
                    dangerTimeOut: 0,
                    isNotMoving: function() {
                        return (this.x == this.l && this.y == this.m);
                    },
                    isVirus: function() {
                        return this.c;
                    },
                    getUptimeTime: function() {
                        return this.I;
                    },
                    P: function () {
                        var a;
                        for (a = 0; a < u.length; a++)if (u[a] == this) {
                            u.splice(a, 1);
                            break
                        }
                        delete J[this.id];
                        a = l.indexOf(this);
                        -1 != a && (Wa = !0, l.splice(a, 1));
                        a = z.indexOf(this.id);
                        -1 != a && z.splice(a, 1);
                        this.u = !0;
                        0 < this.Q && Y.push(this)
                    },
                    f: function () {
                        return Math.max(~~(.3 * this.size), 24)
                    },
                    q: function (a) {
                        if (this.name = a)null == this.i ? this.i = new Ha(this.f(), "#FFFFFF", !0, "#000000") : this.i.C(this.f()), this.i.r(this.name)
                    },
                    O: function () {
                        for (var a = this.v(); this.a.length > a;) {
                            var b = ~~(Math.random() * this.a.length);
                            this.a.splice(b, 1)
                        }
                        for (0 == this.a.length && 0 < a && this.a.push(new db(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < a;)b = ~~(Math.random() * this.a.length), b = this.a[b], this.a.push(new db(this, b.x, b.y, b.d, b.b))
                    },
                    v: function () {
                        var a = 10;
                        20 > this.size && (a = 0);
                        this.c && (a = 30);
                        var b = this.size;
                        this.c || (b *= g);
                        b *= G;
                        return ~~Math.max(b, a)
                    },
                    ba: function () {
                        this.O();
                        for (var a = this.a, b = a.length, c = 0; c < b; ++c) {
                            var d = a[(c - 1 + b) % b].b, e = a[(c + 1) % b].b;
                            a[c].b += (Math.random() - .5) * (this.g ? 3 : 1);
                            a[c].b *= .7;
                            10 < a[c].b && (a[c].b = 10);
                            -10 > a[c].b && (a[c].b = -10);
                            a[c].b = (d + e + 8 * a[c].b) / 10
                        }
                        for (var f = this, l = this.c ? 0 : (this.id / 1E3 + F / 1E4) % (2 * Math.PI), c = 0; c < b; ++c) {
                            var n = a[c].d, d = a[(c - 1 + b) % b].d, e = a[(c + 1) % b].d;
                            if (15 < this.size && null != da &&
                                20 < this.size * g && 0 < this.id) {
                                var k = !1, m = a[c].x, L = a[c].y;
                                da.ca(m - 5, L - 5, 10, 10, function (a) {
                                    a.N != f && 25 > (m - a.x) * (m - a.x) + (L - a.y) * (L - a.y) && (k = !0)
                                });
                                !k && (a[c].x < Aa || a[c].y < Ba || a[c].x > Ca || a[c].y > Da) && (k = !0);
                                k && (0 < a[c].b && (a[c].b = 0), a[c].b -= 1)
                            }
                            n += a[c].b;
                            0 > n && (n = 0);
                            n = this.g ? (19 * n + this.size) / 20 : (12 * n + this.size) / 13;
                            a[c].d = (d + e + 8 * n) / 10;
                            d = 2 * Math.PI / b;
                            e = this.a[c].d;
                            this.c && 0 == c % 2 && (e += 5);
                            a[c].x = this.x + Math.cos(d * c + l) * e;
                            a[c].y = this.y + Math.sin(d * c + l) * e
                        }
                    },
                    H: function () {
                        if (0 >= this.id)return 1;
                        var a;
                        a = (F - this.I) / 120;
                        a = 0 >
                        a ? 0 : 1 < a ? 1 : a;
                        var b = 0 > a ? 0 : 1 < a ? 1 : a;
                        this.f();
                        if (this.u && 1 <= b) {
                            var c = Y.indexOf(this);
                            -1 != c && Y.splice(c, 1)
                        }
                        this.x = a * (this.w - this.l) + this.l;
                        this.y = a * (this.A - this.m) + this.m;
                        this.size = b * (this.h - this.k) + this.k;
                        return b
                    },
                    D: function () {
                        return 0 >= this.id ? !0 : this.x + this.size + 40 < s - k / 2 / g || this.y + this.size + 40 < t - p / 2 / g || this.x - this.size - 40 > s + k / 2 / g || this.y - this.size - 40 > t + p / 2 / g ? !1 : !0
                    },
                    p: function (a) {
                        if (this.D()) {
                            ++this.Q;
                            var b = 0 < this.id && !this.c && !this.g && .4 > g;
                            5 > this.v() && 0 < this.id && (b = !0);
                            if (this.J && !b)for (var c = 0; c < this.a.length; c++)this.a[c].d = this.size;
                            this.J = b;
                            a.save();
                            this.S = F;
                            c = this.H();
                            this.u && (a.globalAlpha *= 1 - c);
                            a.lineWidth = 10;
                            a.lineCap = "round";
                            a.lineJoin = this.c ? "miter" : "round";
                            ib ? (a.fillStyle = "#FFFFFF", a.strokeStyle = "#AAAAAA") : (c = dc(this.G) || this.color, hb && ":teams" != P || (c = this.color), a.fillStyle = c, a.strokeStyle = c);
                            if (b)a.beginPath(), a.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1); else {
                                this.ba();
                                a.beginPath();
                                var e = this.v();
                                a.moveTo(this.a[0].x, this.a[0].y);
                                for (c = 1; c <= e; ++c) {
                                    var h = c % e;
                                    a.lineTo(this.a[h].x, this.a[h].y)
                                }
                            }
                            a.closePath();
                            e = this.name.toLowerCase();
                            !this.g && hb && ":teams" != P ? (c = ec(this.G)) || (-1 != Nb.indexOf(e) ? (ba.hasOwnProperty(e) || (ba[e] = new Image, ba[e].src = d.ASSETS_ROOT + "skins/" + e + ".png"), c = 0 != ba[e].width && ba[e].complete ? ba[e] : null) : c = null) : c = null;
                            h = c;
                            b || a.stroke();
                            a.fill();
                            null != h && (a.save(), a.clip(), c = Math.max(this.size, this.h), a.drawImage(h, this.x - c - 5, this.y - c - 5, 2 * c + 10, 2 * c + 10), a.restore());
                            (ib || 15 < this.size) && !b && (a.strokeStyle = "#000000", a.globalAlpha *= .1, a.stroke());
                            a.globalAlpha = 1;
                            c = -1 != l.indexOf(this);
                            b = ~~this.y;
                            if (0 != this.id && (Ia || c) && this.name && this.i && (null == h || -1 == jc.indexOf(e))) {
                                h = this.i;
                                h.r(this.name);
                                h.C(this.f());
                                e = 0 >= this.id ? 1 : Math.ceil(10 * g) / 10;
                                h.R(e);
                                var h = h.B(), f = ~~(h.width / e), k = ~~(h.height / e);
                                a.drawImage(h, ~~this.x - ~~(f / 2), b - ~~(k / 2), f, k);
                                b += h.height / 2 / e + 4
                            }
                            0 < this.id && Kb && (c || 0 == l.length && (!this.c || this.g) && 20 < this.size) && (null == this.F && (this.F = new Ha(this.f() / 2, "#FFFFFF", !0, "#000000")), c = this.F, c.C(this.f() / 2), c.r(~~(this.size * this.size / 100)), e = Math.ceil(10 * g) / 10, c.R(e), h = c.B(), f = ~~(h.width / e),
                                k = ~~(h.height / e), a.drawImage(h, ~~this.x - ~~(f / 2), b - ~~(k / 2), f, k));
                            a.restore()
                        }
                    }
                };
                Ha.prototype = {
                    t: "",
                    K: "#000000",
                    M: !1,
                    o: "#000000",
                    n: 16,
                    j: null,
                    L: null,
                    e: !1,
                    s: 1,
                    C: function (a) {
                        this.n != a && (this.n = a, this.e = !0)
                    },
                    R: function (a) {
                        this.s != a && (this.s = a, this.e = !0)
                    },
                    setStrokeColor: function (a) {
                        this.o != a && (this.o = a, this.e = !0)
                    },
                    r: function (a) {
                        a != this.t && (this.t = a, this.e = !0)
                    },
                    B: function () {
                        null == this.j && (this.j = document.createElement("canvas"), this.L = this.j.getContext("2d"));
                        if (this.e) {
                            this.e = !1;
                            var a = this.j, b = this.L, c = this.t, d = this.s, e = this.n, f = e + "px Ubuntu";
                            b.font = f;
                            var g = ~~(.2 * e);
                            a.width = (b.measureText(c).width + 6) * d;
                            a.height = (e + g) * d;
                            b.font = f;
                            b.scale(d, d);
                            b.globalAlpha = 1;
                            b.lineWidth = 3;
                            b.strokeStyle = this.o;
                            b.fillStyle = this.K;
                            this.M && b.strokeText(c, 3, e - g / 2);
                            b.fillText(c, 3, e - g / 2)
                        }
                        return this.j
                    }
                };
                Date.now || (Date.now = function () {
                    return (new Date).getTime()
                });
                (function () {
                    for (var a = ["ms", "moz", "webkit", "o"], b = 0; b < a.length && !d.requestAnimationFrame; ++b)d.requestAnimationFrame = d[a[b] + "RequestAnimationFrame"], d.cancelAnimationFrame = d[a[b] + "CancelAnimationFrame"] || d[a[b] + "CancelRequestAnimationFrame"];
                    d.requestAnimationFrame || (d.requestAnimationFrame = function (a) {
                        return setTimeout(a, 1E3 / 60)
                    }, d.cancelAnimationFrame = function (a) {
                        clearTimeout(a)
                    })
                })();
                var Qb = {
                    V: function (a) {
                        function b(a) {
                            a < d && (a = d);
                            a > f && (a = f);
                            return ~~((a - d) / 32)
                        }

                        function c(a) {
                            a < e && (a = e);
                            a > g && (a = g);
                            return ~~((a - e) / 32)
                        }

                        var d = a.Z, e = a.$, f = a.X, g = a.Y, n = ~~((f - d) / 32) + 1, k = ~~((g - e) / 32) + 1, m = Array(n * k);
                        return {
                            W: function (a) {
                                var d = b(a.x) + c(a.y) * n;
                                null == m[d] ? m[d] = a : Array.isArray(m[d]) ?
                                    m[d].push(a) : m[d] = [m[d], a]
                            }, ca: function (a, d, e, f, h) {
                                var g = b(a), l = c(d);
                                a = b(a + e);
                                d = c(d + f);
                                if (0 > g || g >= n || 0 > l || l >= k)debugger;
                                for (; l <= d; ++l)for (f = g; f <= a; ++f)if (e = m[f + l * n], null != e)if (Array.isArray(e))for (var p = 0; p < e.length; p++)h(e[p]); else h(e)
                            }
                        }
                    }
                }, yb = function () {
                    var a = new $(0, 0, 0, 32, "#ED1C24", ""), b = document.createElement("canvas");
                    b.width = 32;
                    b.height = 32;
                    var c = b.getContext("2d");
                    return function () {
                        0 < l.length && (a.color = l[0].color, a.q(l[0].name));
                        c.clearRect(0, 0, 32, 32);
                        c.save();
                        c.translate(16, 16);
                        c.scale(.4, .4);
                        a.p(c);
                        c.restore();
                        var d = document.getElementById("favicon"), e = d.cloneNode(!0);
                        e.setAttribute("href", b.toDataURL("image/png"));
                        d.parentNode.replaceChild(e, d)
                    }
                }();
                e(function () {
                    yb()
                });
                var W = "loginCache3", Ib = 0;
                d.checkSocialAPIToken = function (a) {
                    e.ajax(ea + "checkToken", {
                        error: function () {
                            C = null;
                            eb(a)
                        }, success: function (a) {
                            a = a.split("\n");
                            Z({level: +a[0], xp: +a[1], xpNeeded: +a[2]})
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: C
                    })
                };
                d.getSocialAPIToken = function () {
                    e.ajax(ea + "facebookLogin", {
                        error: function () {
                            C = null;
                            e("#helloContainer").attr("data-logged-in", "0")
                        },
                        success: gc,
                        dataType: "text",
                        method: "POST",
                        cache: !1,
                        crossDomain: !0,
                        data: d.localStorage.fbTokenCache
                    })
                };
                d.facebookLogin = function () {
                    d.localStorage.wannaLogin = 1
                };
                d.checkLoginStatus = function () {
                    d.gameServerLogin();
                    if (+d.localStorage.wannaLogin) {
                        var a = d.localStorage.fbTokenCache;
                        a && (delete d.localStorage.wannaLogin, d.MC.doLoginWithFB(a, !0))
                    }
                };
                d.fbAsyncInit = function () {
                    function a() {
                        d.localStorage.wannaLogin = 1;
                        null == d.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : d.FB.login(function (a) {
                            eb(a)
                        }, {scope: "public_profile, email"})
                    }

                    d.FB.init({appId: Q.fb_app_id, cookie: !0, xfbml: !0, status: !0, version: "v2.2"});
                    d.FB.Event.subscribe("auth.statusChange", function (b) {
                        console.log("window.localStorage['wannaLogin'] = " + d.localStorage.wannaLogin);
                        +d.localStorage.wannaLogin && ("connected" == b.status ? eb(b) : (console.log("user not connected, facebookLogin()"), a()))
                    });
                    d.facebookRelogin = a;
                    d.facebookLogin = a
                };
                d.logout = function () {
                    C = null;
                    e("#helloContainer").attr("data-logged-in", "0");
                    e("#helloContainer").attr("data-has-account-data", "0");
                    delete d.localStorage.wannaLogin;
                    delete d.localStorage[W];
                    delete d.localStorage.fbPictureCache;
                    delete d.localStorage.fbTokenCache;
                    N();
                    d.MC.doLogout()
                };
                d.gameServerLogin = function () {
                    if (+d.localStorage.wannaLogin) {
                        var a = d.localStorage[W];
                        a && Hb(a);
                        d.localStorage.fbPictureCache && e(".agario-profile-picture").attr("src", d.localStorage.fbPictureCache)
                    }
                };
                e(function () {
                    d.localStorage[W] && (d.facebookLogin(), d.gameServerLogin())
                });
                var ic = function () {
                    function a(a, b, c, d, e) {
                        var f = b.getContext("2d"), g = b.width;
                        b = b.height;
                        a.color = e;
                        a.q(c);
                        a.size = d;
                        f.save();
                        f.translate(g / 2, b / 2);
                        a.p(f);
                        f.restore()
                    }

                    for (var b = new $(-1, 0, 0, 32, "#5bc0de", ""), c = new $(-1, 0, 0, 32, "#5bc0de", ""), d = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), f = [], g = 0; g < d.length; ++g) {
                        var k = g / d.length * 12, n = 30 * Math.sqrt(g / d.length);
                        f.push(new $(-1, Math.cos(k) * n, Math.sin(k) * n, 10, d[g], ""))
                    }
                    fc(f);
                    var l = document.createElement("canvas");
                    l.getContext("2d");
                    l.width = l.height = 70;
                    a(c, l, "", 26, "#ebc0de");
                    return function () {
                        e(".cell-spinner").filter(":visible").each(function () {
                            var c = e(this), d = Date.now(), f = this.width, g = this.height, h = this.getContext("2d");
                            h.clearRect(0, 0, f, g);
                            h.save();
                            h.translate(f / 2, g / 2);
                            for (var k = 0; 10 > k; ++k)h.drawImage(l, (.1 * d + 80 * k) % (f + 140) - f / 2 - 70 - 35, g / 2 * Math.sin((.001 * d + k) % Math.PI * 2) - 35, 70, 70);
                            h.restore();
                            (c = c.attr("data-itr")) && (c = ha(c));
                            a(b, this, c || "", +e(this).attr("data-size"), "#5bc0de")
                        });
                        e("#statsPellets").filter(":visible").each(function () {
                            e(this);
                            var b = this.width, c = this.height;
                            this.getContext("2d").clearRect(0, 0, b, c);
                            for (b = 0; b < f.length; b++)a(f[b], this, "", f[b].size, f[b].color)
                        })
                    }
                }();
                d.createParty = function () {
                    ga(":party");
                    R = function (a) {
                        fb("/#" + d.encodeURIComponent(a));
                        e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                        e("#helloContainer").attr("data-party-state", "1")
                    };
                    N()
                };
                d.joinParty = pb;
                d.cancelParty = function () {
                    fb("/");
                    e("#helloContainer").attr("data-party-state", "0");
                    ga("");
                    N()
                };
                var x = [], Xa = 0, Ya = "#000000", X = !1, wa = !1, Za = 0, ab = 0, $a = 0, Ea = 0, V = 0, zb = !0;
                setInterval(function () {
                    wa && x.push(Eb() / 100)
                }, 1E3 / 60);
                setInterval(function () {
                    var a = hc();
                    0 != a && (++$a, 0 == V && (V = a), V = Math.min(V, a))
                }, 1E3);
                d.closeStats = function () {
                    X = !1;
                    e("#stats").hide();
                    rb(d.ab);
                    ra(0)
                };
                d.setSkipStats = function (a) {
                    zb = !a
                };
                e(function () {
                    e(Ob)
                })
            }
        }
    }
    /**
     * Custom function
     * @author nguyenvanduocit
     */
    //UPDATE
    function computeDistance(x1, y1, x2, y2) {
        var xdis = x1 - x2; // <--- FAKE AmS OF COURSE!
        var ydis = y1 - y2;
        var distance = Math.sqrt(xdis * xdis + ydis * ydis);

        return distance;
    }
    window.setPoint = function(x, y) {
        ta = x;
        ua = y;
    };
    window.getDarkBool = function() {
        return Fa;
    };
    window.getMapStartX = function() {
        return Aa;
    };
    window.getMapStartY = function() {
        return Ba;
    };
    window.getMapEndY = function() {
        return Da;
    };
    window.getMapEndX = function() {
        return Ca;
    };
    /**
     * The game's current mode. (":ffa", ":experimental", ":teams". ":party")
     * @return {[type]} [description]
     */
    window.getMode = function() {
        return P;
    };
    /**
     * Returns an array with all the player's cells.
     * @return Player's cells
     */
    window.getPlayer = function() {
        return l;
    };
    /**
     * This is a copy of everything that is shown on screen.
     * Normally stuff will time out when off the screen, this
     * memorizes everything that leaves the screen for a little
     * while longer.
     * @return The memory object.
     */
    window.getMemoryCells = function() {
        return interNodes;
    };
    /**
     * [getCellsArray description]
     * @return {[type]} [description]
     */
    window.getCells = function() {
        return J;
    };
    /**
     * A timestamp since the last time the server sent any data.
     * @return Last update timestamp
     */
    window.getLastUpdate = function() {
        return F;
    };
    /**
     * Scaling ratio of the canvas. The bigger this ration,
     * the further that you see.
     * @return Screen scaling ratio.
     */
    window.getRatio = function() {
        return g;
    };
    window.getZoomlessRatio = function() {
        return g2;
    };
    window.getX = function() {
        return s;
    };
    window.getY = function() {
        return t;
    };
    /**
     * The canvas' width.
     * @return Integer Width
     */
    window.getWidth = function() {
        return k;
    };
    /**
     * The canvas' height
     * @return Integer Height
     */
    window.getHeight = function() {
        return p;
    };
    /**
     * A conversion from the screen's horizontal coordinate system
     * to the game's horizontal coordinate system.
     * @param x in the screen's coordinate system
     * @return x in the game's coordinate system
     */
    window.screenToGameX = function(x) {
        return (x - getWidth() / 2) / getRatio() + getX();
    };
    /**
     * The X location of the mouse.
     * @return Integer X
     */
    window.getMouseX = function() {
        return pa;
    };
    /**
     * The Y location of the mouse.
     * @return Integer Y
     */
    window.getMouseY = function() {
        return qa;
    };
    window.getPointX = function() {
        return ta;
    };

    window.getPointY = function() {
        return ua;
    };
    /**
     * A conversion from the screen's vertical coordinate system
     * to the game's vertical coordinate system.
     * @param y in the screen's coordinate system
     * @return y in the game's coordinate system
     */
    window.screenToGameY = function(y) {
        return (y - getHeight() / 2) / getRatio() + getY();
    };
    window.drawPoint = function(x_1, y_1, drawColor, text) {
        if (!toggleDraw) {
            dPoints.push([x_1, y_1, drawColor]);
            dText.push(text);
        }
    };
    window.drawArc = function(x_1, y_1, x_2, y_2, x_3, y_3, drawColor) {
        if (!toggleDraw) {
            var radius = computeDistance(x_1, y_1, x_3, y_3);
            dArc.push([x_1, y_1, x_2, y_2, x_3, y_3, radius, drawColor]);
        }
    };

    window.drawLine = function(x_1, y_1, x_2, y_2, drawColor) {
        if (!toggleDraw) {
            lines.push([x_1, y_1, x_2, y_2, drawColor]);
        }
    };

    window.drawCircle = function(x_1, y_1, radius, drawColor) {
        if (!toggleDraw) {
            circles.push([x_1, y_1, radius, drawColor]);
        }
    };

    window.verticalDistance = function() {
        return computeDistance(screenToGameX(0), screenToGameY(0), screenToGameX(getWidth()), screenToGameY(getHeight()));
    };
    window.getServer = function() {
        return serverIP;
    };
    window.getCurrentScore = function() {
        return K;
    };
    window.sendMessage = function(a){
        T(a);
    };
    window.createDataView = function(a) {
        return new DataView(new ArrayBuffer(a))
    };
})(window, window.jQuery, AgarBot, AgarBot.app);