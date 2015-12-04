/**
 * Created by nguyenvanduocit on 12/4/2015.
 */
(function (c, e) {
    function Wb() {
        Oa = !0;
        J.google.ka();
        J.ca.init();
        mb();
        setInterval(mb, 18E4);
        P = Pa = document.getElementById("canvas");
        f = P.getContext("2d");
        P.onmousedown = function (a) {
            if (nb) {
                var b = a.clientX - (5 + n / 5 / 2), d = a.clientY - (5 + n / 5 / 2);
                if (Math.sqrt(b * b + d * d) <= n / 5 / 2) {
                    fa();
                    K(17);
                    return
                }
            }
            sa = 1 * a.clientX;
            ta = 1 * a.clientY;
            Qa();
            fa()
        };
        P.onmousemove = function (a) {
            sa = 1 * a.clientX;
            ta = 1 * a.clientY;
            Qa()
        };
        P.onmouseup = function () {
        };
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", ob, !1) : document.body.onmousewheel = ob;
        var a = !1, b = !1, d = !1;
        c.onkeydown = function (c) {
            32 != c.keyCode || a || ("nick" != c.target.id && c.preventDefault(), fa(), K(17), a = !0);
            81 != c.keyCode || b || (K(18), b = !0);
            87 != c.keyCode || d || (fa(), K(21), d = !0);
            27 == c.keyCode && (c.preventDefault(), ua(300))
        };
        c.onkeyup = function (c) {
            32 == c.keyCode && (a = !1);
            87 == c.keyCode && (d = !1);
            81 == c.keyCode && b && (K(19), b = !1)
        };
        c.onblur = function () {
            K(19);
            d = b = a = !1
        };
        c.onresize = pb;
        c.requestAnimationFrame(qb);
        setInterval(fa, 40);
        C && e("#region").val(C);
        rb();
        va(e("#region").val());
        0 == Ra && C && Q();
        ua(0);
        pb();
        c.location.hash && 6 <= c.location.hash.length && sb(c.location.hash)
    }

    function ob(a) {
        a.preventDefault();
        R *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        1 > R && (R = 1);
        R > 4 / k && (R = 4 / k)
    }

    function Xb() {
        if (.4 > k)ga = null; else {
            for (var a = Number.POSITIVE_INFINITY, b = Number.POSITIVE_INFINITY, d = Number.NEGATIVE_INFINITY, c = Number.NEGATIVE_INFINITY, h = 0; h < x.length; h++) {
                var e = x[h];
                !e.L() || e.R || 20 >= e.size * k || (a = Math.min(e.x - e.size, a), b = Math.min(e.y - e.size, b), d = Math.max(e.x + e.size, d), c = Math.max(e.y + e.size, c))
            }
            ga = Yb.init({oa: a - 10, pa: b - 10, ma: d + 10, na: c + 10, za: 2, Aa: 4});
            for (h = 0; h < x.length; h++)if (e = x[h], e.L() && !(20 >= e.size * k))for (a = 0; a < e.a.length; ++a)b = e.a[a].x, d = e.a[a].y, b < v - n / 2 / k || d < w - p / 2 / k || b > v + n / 2 / k || d > w + p / 2 / k || ga.ja(e.a[a])
        }
    }

    function Qa() {
        wa = (sa - n / 2) / k + v;
        xa = (ta - p / 2) / k + w
    }

    function mb() {
        null == ya && (ya = {}, e("#region").children().each(function () {
            var a = e(this), b = a.val();
            b && (ya[b] = a.text())
        }));
        e.get(ha + "info", function (a) {
            var b = {}, d;
            for (d in a.regions) {
                var c = d.split(":")[0];
                b[c] = b[c] || 0;
                b[c] += a.regions[d].numPlayers
            }
            for (d in b)e('#region option[value="' +
                d + '"]').text(ya[d] + " (" + b[d] + " players)")
        }, "json")
    }

    function tb() {
        e("#adsBottom").hide();
        e("#overlays").hide();
        e("#stats").hide();
        e("#mainPanel").hide();
        aa = ia = !1;
        rb();
        c.destroyAd(c.adSlots.aa);
        c.destroyAd(c.adSlots.ac)
    }

    function va(a) {
        a && (a == C ? e(".btn-needs-server").prop("disabled", !1) : (e("#region").val() != a && e("#region").val(a), C = c.localStorage.location = a, e(".region-message").hide(), e(".region-message." + a).show(), e(".btn-needs-server").prop("disabled", !1), Oa && Q()))
    }

    function ua(a) {
        ia || aa || (za ? e(".btn-spectate").prop("disabled", !0) : e(".btn-spectate").prop("disabled", !1), L = null, Sa || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show(), e("#g728x90").hide(), e("#a728x90").show()), c.refreshAd(Sa ? c.adSlots.ac : c.adSlots.aa), Sa = !1, 1E3 > a && (t = 1), ia = !0, e("#mainPanel").show(), 0 < a ? e("#overlays").fadeIn(a) : e("#overlays").show())
    }

    function ja(a) {
        e("#helloContainer").attr("data-gamemode", a);
        ka = a;
        e("#gamemode").val(a)
    }

    function rb() {
        e("#region").val() ? c.localStorage.location = e("#region").val() : c.localStorage.location && e("#region").val(c.localStorage.location);
        e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
    }

    function S(a) {
        return c.i18n[a] || c.i18n_dict.en[a] || a
    }

    function ub() {
        var a = ++Ra;
        console.log("Find " + C + ka);
        vb();
        e.ajax(ha + "findServer", {
            error: function () {
                setTimeout(ub, 3E4)
            }, success: function (b) {
                if (a == Ra) {
                    b.alert && alert(b.alert);
                    var d = b.ip;
                    void 0 != y.ha && (d = c.location.hostname + ":" + y.ha);
                    Ta("ws" + (Ua ? "s" : "") + "://" + d, b.token)
                }
            }, dataType: "json", method: "POST", cache: !1, crossDomain: !0, data: (C + ka || "?") + "\n2200049715"
        })
    }

    function Q() {
        Oa && C && (e("#connecting").show(), ub())
    }

    function vb() {
        if (r) {
            r.onopen = null;
            r.onmessage = null;
            r.onclose = null;
            try {
                r.close()
            } catch (a) {
            }
            r = null
        }
    }

    function Ta(a, b) {
        vb();
        T.ip && (a = "ws" + (Ua ? "s" : "") + "://" + T.ip);
        if (null != U) {
            var d = U;
            U = function () {
                d(b)
            }
        }
        if (Ua && !y.env_development && !y.env_local) {
            var c = a.split(":");
            a = "wss://ip-" + c[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +c[2]
        }
        D = [];
        l = [];
        M = {};
        x = [];
        ba = [];
        A = [];
        E = F = null;
        N = 0;
        la = !1;
        console.log("Connecting to " + a);
        r = new WebSocket(a);
        r.binaryType = "arraybuffer";
        r.onopen = function () {
            var a;
            console.log("socket open");
            a = V(5);
            a.setUint8(0, 254);
            a.setUint32(1, 5, !0);
            W(a);
            a = V(5);
            a.setUint8(0, 255);
            a.setUint32(1, 2200049715, !0);
            W(a);
            a = V(1 + b.length);
            a.setUint8(0, 80);
            for (var d = 0; d < b.length; ++d)a.setUint8(d + 1, b.charCodeAt(d));
            W(a);
            wb()
        };
        r.onmessage = Zb;
        r.onclose = $b;
        r.onerror = function () {
            console.log("socket error")
        }
    }

    function V(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function W(a) {
        r.send(a.buffer)
    }

    function $b() {
        la && (Aa = 500);
        console.log("socket close");
        setTimeout(Q, Aa);
        Aa *= 2
    }

    function Zb(a) {
        ac(new DataView(a.data))
    }

    function ac(a) {
        function b() {
            for (var b = ""; ;) {
                var c = a.getUint16(d, !0);
                d += 2;
                if (0 == c)break;
                b += String.fromCharCode(c)
            }
            return b
        }

        var d = 0;
        240 == a.getUint8(d) && (d += 5);
        switch (a.getUint8(d++)) {
            case 16:
                bc(a, d);
                break;
            case 17:
                ma = a.getFloat32(d, !0);
                d += 4;
                na = a.getFloat32(d, !0);
                d += 4;
                oa = a.getFloat32(d, !0);
                d += 4;
                break;
            case 20:
                l = [];
                D = [];
                break;
            case 21:
                Va = a.getInt16(d, !0);
                d += 2;
                Wa = a.getInt16(d, !0);
                d += 2;
                Xa || (Xa = !0, Ba = Va, Ca = Wa);
                break;
            case 32:
                D.push(a.getUint32(d, !0));
                d += 4;
                break;
            case 49:
                if (null != F)break;
                var e = a.getUint32(d, !0), d = d + 4;
                A = [];
                for (var h = 0; h < e; ++h) {
                    var u = a.getUint32(d, !0), d = d + 4;
                    A.push({id: u, name: b()})
                }
                xb();
                break;
            case 50:
                F = [];
                e = a.getUint32(d, !0);
                d += 4;
                for (h = 0; h < e; ++h)F.push(a.getFloat32(d, !0)), d += 4;
                xb();
                break;
            case 64:
                Da = a.getFloat64(d, !0);
                d += 8;
                Ea = a.getFloat64(d, !0);
                d += 8;
                Fa = a.getFloat64(d, !0);
                d += 8;
                Ga = a.getFloat64(d, !0);
                d += 8;
                ma = (Fa + Da) / 2;
                na = (Ga + Ea) / 2;
                oa = 1;
                0 == l.length && (v = ma, w = na, k = oa);
                a.byteLength > d && (e = a.getUint32(d, !0), d += 4, yb = !!(e & 1), Ya = b(), c.MC.updateServerVersion(Ya),
                    console.log("Server version " + Ya));
                break;
            case 81:
                var f = a.getUint32(d, !0), d = d + 4, q = a.getUint32(d, !0), d = d + 4, g = a.getUint32(d, !0), d = d + 4;
                setTimeout(function () {
                    var a = {level: f, xp: q, xpNeeded: g};
                    c.MC.updateUserXPInfo(a);
                    pa(a, null)
                }, 1200)
        }
    }

    function bc(a, b) {
        function d() {
            for (var d = ""; ;) {
                var c = a.getUint16(b, !0);
                b += 2;
                if (0 == c)break;
                d += String.fromCharCode(c)
            }
            return d
        }

        function Z() {
            for (var d = ""; ;) {
                var c = a.getUint8(b++);
                if (0 == c)break;
                d += String.fromCharCode(c)
            }
            return d
        }

        zb = H = Date.now();
        la || (la = !0, e("#connecting").hide(), Ab(), U && (U(), U = null));
        Za = !1;
        var h = a.getUint16(b, !0);
        b += 2;
        for (var u = 0; u < h; ++u) {
            var f = M[a.getUint32(b, !0)], q = M[a.getUint32(b + 4, !0)];
            b += 8;
            f && q && (q.Z(), q.s = q.x, q.u = q.y, q.o = q.size, q.H = f.x, q.I = f.y, q.g = q.size, q.P = H, cc(f, q))
        }
        for (u = 0; ;) {
            h = a.getUint32(b, !0);
            b += 4;
            if (0 == h)break;
            ++u;
            var g, f = a.getInt32(b, !0);
            b += 4;
            q = a.getInt32(b, !0);
            b += 4;
            g = a.getInt16(b, !0);
            b += 2;
            var m = a.getUint8(b++), O = a.getUint8(b++), k = a.getUint8(b++), O = dc(m << 16 | O << 8 | k), k = a.getUint8(b++), n = !!(k & 1), p = !!(k & 16), r = null;
            k & 2 && (b += 4 + a.getUint32(b, !0));
            k & 4 && (r = Z());
            var t = d(), m = null;
            M.hasOwnProperty(h) ? (m = M[h], m.O(), m.s = m.x, m.u = m.y, m.o = m.size, m.color = O) : (m = new ca(h, f, q, g, O, t), x.push(m), M[h] = m, m.W = f, m.va = q);
            m.c = n;
            m.h = p;
            m.H = f;
            m.I = q;
            m.g = g;
            m.P = H;
            m.ba = k;
            r && (m.N = r);
            t && m.A(t);
            -1 != D.indexOf(h) && -1 == l.indexOf(m) && (l.push(m), 1 == l.length && (v = m.x, w = m.y, Bb(), document.getElementById("overlays").style.display = "none", B = [], $a = 0, ab = l[0].color, za = !0, bb = Date.now(), X = Ha = cb = 0))
        }
        f = a.getUint32(b, !0);
        b += 4;
        for (u = 0; u < f; u++)h = a.getUint32(b, !0), b += 4, m = M[h], null != m && m.Z();
        Za && 0 == l.length && (null == c.storageInfo && c.createDefaultStorage(), db = Date.now(), za = !1, ec(), c.MC.deltaUpdateStats({
            games_played: 1,
            total_mass: ~~(N / 100),
            turn_time: (db - bb) / 1E3,
            cells_eaten: Ha
        }))
    }

    function fa() {
        if (da()) {
            var a = sa - n / 2, b = ta - p / 2;
            64 > a * a + b * b || .01 > Math.abs(Cb - wa) && .01 > Math.abs(Db - xa) || (Cb = wa, Db = xa, a = V(13), a.setUint8(0, 16), a.setInt32(1, wa, !0), a.setInt32(5, xa, !0), a.setUint32(9, 0, !0), W(a))
        }
    }

    function Ab() {
        if (da() && la && null != L) {
            var a = V(1 + 2 * L.length);
            a.setUint8(0, 0);
            for (var b = 0; b < L.length; ++b)a.setUint16(1 +
                2 * b, L.charCodeAt(b), !0);
            W(a);
            L = null
        }
    }

    function da() {
        return null != r && r.readyState == r.OPEN
    }

    function K(a) {
        if (da()) {
            var b = V(1);
            b.setUint8(0, a);
            W(b)
        }
    }

    function wb() {
        if (da() && null != z) {
            var a = V(1 + z.length);
            a.setUint8(0, 81);
            for (var b = 0; b < z.length; ++b)a.setUint8(b + 1, z.charCodeAt(b));
            W(a)
        }
    }

    function pb() {
        n = 1 * c.innerWidth;
        p = 1 * c.innerHeight;
        Pa.width = P.width = n;
        Pa.height = P.height = p;
        var a = e("#helloContainer");
        a.css("transform", "none");
        var b = a.height(), d = c.innerHeight;
        0 != b / 2 % 2 && (b++, a.height(b));
        b > d / 1.1 ? a.css("transform", "translate(-50%, -50%) scale(" + d / b / 1.1 + ")") : a.css("transform", "translate(-50%, -50%)");
        Eb()
    }

    function Fb() {
        var a;
        a = 1 * Math.max(p / 1080, n / 1920);
        return a *= R
    }

    function fc() {
        if (0 != l.length) {
            for (var a = 0, b = 0; b < l.length; b++)a += l[b].size;
            k = (9 * k + Math.pow(Math.min(64 / a, 1), .4) * Fb()) / 10
        }
    }

    function Eb() {
        var a, b = Date.now();
        ++gc;
        H = b;
        if (0 < l.length) {
            fc();
            for (var d = a = 0, c = 0; c < l.length; c++)l[c].O(), a += l[c].x / l.length, d += l[c].y / l.length;
            ma = a;
            na = d;
            oa = k;
            v = (v + a) / 2;
            w = (w + d) / 2
        } else v = (29 * v + ma) / 30, w = (29 * w + na) / 30, k = (9 * k + oa * Fb()) /
            10;
        Xb();
        Qa();
        eb || f.clearRect(0, 0, n, p);
        eb ? (f.fillStyle = Ia ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, n, p), f.globalAlpha = 1) : hc();
        x.sort(function (a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size
        });
        f.save();
        f.translate(n / 2, p / 2);
        f.scale(k, k);
        f.translate(-v, -w);
        for (c = 0; c < ba.length; c++)ba[c].w(f);
        for (c = 0; c < x.length; c++)x[c].w(f);
        if (Xa) {
            Ba = (3 * Ba + Va) / 4;
            Ca = (3 * Ca + Wa) / 4;
            f.save();
            f.strokeStyle = "#FFAAAA";
            f.lineWidth = 10;
            f.lineCap = "round";
            f.lineJoin = "round";
            f.globalAlpha = .5;
            f.beginPath();
            for (c = 0; c < l.length; c++)f.moveTo(l[c].x,
                l[c].y), f.lineTo(Ba, Ca);
            f.stroke();
            f.restore()
        }
        f.restore();
        E && E.width && f.drawImage(E, n - E.width - 10, 10);
        N = Math.max(N, Gb());
        0 != N && (null == Ja && (Ja = new Ka(24, "#FFFFFF")), Ja.B(S("score") + ": " + ~~(N / 100)), d = Ja.J(), a = d.width, f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(10, p - 10 - 24 - 10, a + 10, 34), f.globalAlpha = 1, f.drawImage(d, 15, p - 10 - 24 - 5));
        ic();
        b = Date.now() - b;
        b > 1E3 / 60 ? I -= .01 : b < 1E3 / 65 && (I += .01);
        .4 > I && (I = .4);
        1 < I && (I = 1);
        b = H - Hb;
        !da() || ia || aa ? (t += b / 2E3, 1 < t && (t = 1)) : (t -= b / 300, 0 > t && (t = 0));
        0 < t ? (f.fillStyle = "#000000", Ib ? (f.globalAlpha = t, f.fillRect(0, 0, n, p), G.complete && G.width && (G.width / G.height < n / p ? (b = n, a = G.height * n / G.width) : (b = G.width * p / G.height, a = p), f.drawImage(G, (n - b) / 2, (p - a) / 2, b, a), f.globalAlpha = .5 * t, f.fillRect(0, 0, n, p))) : (f.globalAlpha = .5 * t, f.fillRect(0, 0, n, p)), f.globalAlpha = 1) : Ib = !1;
        Hb = H
    }

    function hc() {
        f.fillStyle = Ia ? "#111111" : "#F2FBFF";
        f.fillRect(0, 0, n, p);
        f.save();
        f.strokeStyle = Ia ? "#AAAAAA" : "#000000";
        f.globalAlpha = .2 * k;
        for (var a = n / k, b = p / k, d = (-v + a / 2) % 50; d < a; d += 50)f.beginPath(), f.moveTo(d * k - .5, 0), f.lineTo(d *
            k - .5, b * k), f.stroke();
        for (d = (-w + b / 2) % 50; d < b; d += 50)f.beginPath(), f.moveTo(0, d * k - .5), f.lineTo(a * k, d * k - .5), f.stroke();
        f.restore()
    }

    function ic() {
        if (nb && fb.width) {
            var a = n / 5;
            f.drawImage(fb, 5, 5, a, a)
        }
    }

    function Gb() {
        for (var a = 0, b = 0; b < l.length; b++)a += l[b].g * l[b].g;
        return a
    }

    function xb() {
        E = null;
        if (null != F || 0 != A.length)if (null != F || La) {
            E = document.createElement("canvas");
            var a = E.getContext("2d"), b = 60, b = null == F ? b + 24 * A.length : b + 180, d = Math.min(200, .3 * n) / 200;
            E.width = 200 * d;
            E.height = b * d;
            a.scale(d, d);
            a.globalAlpha = .4;
            a.fillStyle = "#000000";
            a.fillRect(0, 0, 200, b);
            a.globalAlpha = 1;
            a.fillStyle = "#FFFFFF";
            d = null;
            d = S("leaderboard");
            a.font = "30px Ubuntu";
            a.fillText(d, 100 - a.measureText(d).width / 2, 40);
            if (null == F)for (a.font = "20px Ubuntu", b = 0; b < A.length; ++b)d = A[b].name || S("unnamed_cell"), La || (d = S("unnamed_cell")), -1 != D.indexOf(A[b].id) ? (l[0].name && (d = l[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle = "#FFFFFF", d = b + 1 + ". " + d, a.fillText(d, 100 - a.measureText(d).width / 2, 70 + 24 * b); else for (b = d = 0; b < F.length; ++b) {
                var c = d + F[b] * Math.PI * 2;
                a.fillStyle = jc[b + 1];
                a.beginPath();
                a.moveTo(100, 140);
                a.arc(100, 140, 80, d, c, !1);
                a.fill();
                d = c
            }
        }
    }

    function kc(a) {
        if (null == a || 0 == a.length)return null;
        if ("%" == a[0]) {
            if (!c.MC || !c.MC.getSkinInfo)return null;
            a = c.MC.getSkinInfo("skin_" + a.slice(1));
            if (null == a)return null;
            for (a = (+a.color).toString(16); 6 > a.length;)a = "0" + a;
            return "#" + a
        }
        return null
    }

    function lc(a) {
        if (null == a || 0 == a.length)return null;
        if (!qa.hasOwnProperty(a)) {
            var b = new Image;
            if (":" == a[0])b.src = a.slice(1); else if ("%" == a[0]) {
                if (!c.MC || !c.MC.getSkinInfo)return null;
                var d = c.MC.getSkinInfo("skin_" + a.slice(1));
                if (null == d)return null;
                b.src = c.ASSETS_ROOT + "skins/premium/" + d.url
            }
            qa[a] = b
        }
        return 0 != qa[a].width && qa[a].complete ? qa[a] : null
    }

    function gb(a, b, d, c, e) {
        this.X = a;
        this.x = b;
        this.y = d;
        this.f = c;
        this.b = e
    }

    function ca(a, b, d, c, e, f) {
        this.id = a;
        this.s = this.x = b;
        this.u = this.y = d;
        this.o = this.size = c;
        this.color = e;
        this.a = [];
        this.Y();
        this.A(f)
    }

    function dc(a) {
        for (a = a.toString(16); 6 > a.length;)a = "0" + a;
        return "#" + a
    }

    function Ka(a, b, d, c) {
        a && (this.v = a);
        b && (this.S = b);
        this.U = !!d;
        c && (this.V = c)
    }

    function mc(a) {
        for (var b = a.length, d, c; 0 < b;)c = Math.floor(Math.random() * b), b--, d = a[b], a[b] = a[c], a[c] = d
    }

    function nc() {
        g = hb
    }

    function Jb(a) {
        g.context = "google" == a ? "google" : "facebook";
        Ma()
    }

    function Ma() {
        c.localStorage[Y] = JSON.stringify(g);
        g = JSON.parse(c.localStorage[Y]);
        c.storageInfo = g;
        "google" == g.context ? (e("#gPlusShare").show(), e("#fbShare").hide()) : (e("#gPlusShare").hide(), e("#fbShare").show())
    }

    function Kb(a) {
        e("#helloContainer").attr("data-has-account-data");
        e("#helloContainer").attr("data-has-account-data", "1");
        e("#helloContainer").attr("data-logged-in", "1");
        e(".agario-profile-panel .progress-bar-star").text(a.level);
        e(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP");
        e(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%");
        e(".agario-profile-name").text(a.name);
        e(".agario-profile-picture").attr("src", a.picture);
        e("#instructions").show()
    }

    function pa(a, b) {
        var d = "1" == e("#helloContainer").attr("data-has-account-data");
        e("#helloContainer").attr("data-has-account-data", "1");
        g.userInfo.xp = a.xp;
        g.userInfo.xpNeeded = a.xpNeeded;
        g.userInfo.level = a.level;
        Ma();
        if (d) {
            var Z = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0], d = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0], h = e(".agario-profile-panel .progress-bar-star").first().text();
            if (h != a.level)pa({xp: d, xpNeeded: d, level: h}, function () {
                e(".agario-profile-panel .progress-bar-star").text(a.level);
                e(".agario-exp-bar .progress-bar").css("width", "100%");
                e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e(".progress-bar-star").removeClass("animated tada")
                });
                setTimeout(function () {
                    e(".agario-exp-bar .progress-bar-text").text(a.xpNeeded + "/" + a.xpNeeded + " XP");
                    pa({xp: 0, xpNeeded: a.xpNeeded, level: a.level}, function () {
                        pa(a, null)
                    })
                }, 1E3)
            }); else {
                var f = Date.now(), k = function () {
                    var d;
                    d = (Date.now() - f) / 1E3;
                    d = 0 > d ? 0 : 1 < d ? 1 : d;
                    d = d * d * (3 - 2 * d);
                    e(".agario-exp-bar .progress-bar-text").text(~~(Z + (a.xp - Z) * d) + "/" + a.xpNeeded + " XP");
                    e(".agario-exp-bar .progress-bar").css("width", (88 * (Z + (a.xp - Z) * d) / a.xpNeeded).toFixed(2) +
                        "%");
                    b && b();
                    1 > d && c.requestAnimationFrame(k)
                };
                c.requestAnimationFrame(k)
            }
        } else e(".agario-profile-panel .progress-bar-star").text(a.level), e(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%")
    }

    function Lb() {
        "none" == e("#settings").css("display") && "none" == e("#socialLoginContainer").css("display") && e("#instructions").show()
    }

    function Mb(a) {
        if ("connected" == a.status) {
            var b = a.authResponse.accessToken;
            null == b || "undefined" == b || "" == b ? (3 > Nb && (Nb++, c.facebookRelogin()), c.logout()) : (c.MC.doLoginWithFB(b), c.FB.api("/me/picture?width=180&height=180", function (a) {
                g.userInfo.picture = a.data.url;
                c.updateStorage();
                e(".agario-profile-picture").attr("src", a.data.url)
            }), e("#helloContainer").attr("data-logged-in", "1"), g.context = "facebook", g.loginIntent = "1", c.updateStorage(), null != z ? c.checkSocialAPIToken(a) : c.getSocialAPIToken("facebookLogin", b))
        }
    }

    function sb(a) {
        ja(":party");
        e("#helloContainer").attr("data-party-state", "4");
        a = decodeURIComponent(a).replace(/.*#/gim, "");
        ib("#" + c.encodeURIComponent(a));
        e.ajax(ha + "getToken", {
            error: function () {
                e("#helloContainer").attr("data-party-state", "6")
            }, success: function (b) {
                b = b.split("\n");
                e(".partyToken").val("agar.io/#" + c.encodeURIComponent(a));
                e("#helloContainer").attr("data-party-state", "5");
                ja(":party");
                Ta("ws://" + b[0], a)
            }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: a
        })
    }

    function ib(a) {
        c.history && c.history.replaceState && c.history.replaceState({}, c.document.title, a)
    }

    function cc(a, b) {
        var d = -1 != D.indexOf(a.id), c = -1 != D.indexOf(b.id), e = 30 > b.size;
        d && e && ++$a;
        e || !d || c || b.ba & 32 || ++Ha
    }

    function Ob(a) {
        a = ~~a;
        var b = (a % 60).toString();
        a = (~~(a / 60)).toString();
        2 > b.length && (b = "0" + b);
        return a + ":" + b
    }

    function oc() {
        if (null == A)return 0;
        for (var a = 0; a < A.length; ++a)if (-1 != D.indexOf(A[a].id))return a + 1;
        return 0
    }

    function pc() {
        e(".stats-food-eaten").text($a);
        e(".stats-time-alive").text(Ob((db - bb) / 1E3));
        e(".stats-leaderboard-time").text(Ob(cb));
        e(".stats-highest-mass").text(~~(N / 100));
        e(".stats-cells-eaten").text(Ha);
        e(".stats-top-position").text(0 == X ? ":(" : X);
        var a = document.getElementById("statsGraph");
        if (a) {
            var b = a.getContext("2d"), d = a.width, a = a.height;
            b.clearRect(0, 0, d, a);
            if (2 < B.length) {
                for (var c = 200, h = 0; h < B.length; h++)c = Math.max(B[h], c);
                b.lineWidth = 3;
                b.lineCap = "round";
                b.lineJoin = "round";
                b.strokeStyle = ab;
                b.fillStyle = ab;
                b.beginPath();
                b.moveTo(0, a - B[0] / c * (a - 10) + 10);
                for (h = 1; h < B.length; h += Math.max(~~(B.length / d), 1)) {
                    for (var f = h / (B.length - 1) * d, k = [], g = -20; 20 >= g; ++g)0 > h + g || h + g >= B.length || k.push(B[h + g]);
                    k = k.reduce(function (a, d) {
                            return a + d
                        }) / k.length / c;
                    b.lineTo(f, a - k * (a - 10) + 10)
                }
                b.stroke();
                b.globalAlpha = .5;
                b.lineTo(d, a);
                b.lineTo(0, a);
                b.fill();
                b.globalAlpha = 1
            }
        }
    }

    function ec() {
        ia || aa || (Pb ? (c.refreshAd(c.adSlots.ab), pc(), aa = !0, setTimeout(function () {
            e("#overlays").fadeIn(500);
            e("#stats").show();
            var a = Qb("g_plus_share_stats");
            c.fillSocialValues(a, "gPlusShare")
        }, 1500)) : ua(500))
    }

    function Qb(a) {
        var b = e(".stats-time-alive").text();
        return c.parseString(a, "%@", [b.split(":")[0], b.split(":")[1], e(".stats-highest-mass").text()])
    }

    function qc() {
        c.open("https://plus.google.com/share?url=www.agar.io&hl=en-US", "Agar.io", "width=484,height=580,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (c.screenX + c.innerWidth / 2 - 242) + ",top=" + (c.innerHeight - 580) / 2)
    }

    var T = {};
    (function () {
        var a = c.location.search;
        "?" == a.charAt(0) && (a = a.slice(1));
        for (var a = a.split("&"), b = 0; b < a.length; b++) {
            var d = a[b].split("=");
            T[d[0]] = d[1]
        }
    })();
    "fb" in T || "miniclip" in T || "http:" == c.location.protocol || (c.location.href = "http:" + c.location.href.substring(c.location.protocol.length));
    c.MC = function () {
    };
    if (void 0 != c.EnvConfig) {
        var y = c.EnvConfig;
        c.EnvConfig = y
    }
    if (!c.agarioNoInit) {
        var jb = c.location.protocol, Ua = "https:" == jb;
        T.master && (y.master_url = T.master);
        var ha = jb + "//" + y.master_url + "/", Na = c.navigator.userAgent;
        if (-1 != Na.indexOf("Android"))c.ga && c.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function () {
            c.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
        }, 1E3); else if (-1 != Na.indexOf("iPhone") || -1 != Na.indexOf("iPad") || -1 != Na.indexOf("iPod"))c.ga && c.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function () {
            c.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
        }, 1E3); else {
            var J = {};
            c.agarApp = J;
            var Pa, f, P, n, p, ga = null, r = null, v = 0, w = 0, D = [], l = [], M = {}, x = [], ba = [], A = [], sa = 0, ta = 0, wa = -1, xa = -1, gc = 0, H = 0, Hb = 0, L = null, Da = 0, Ea = 0, Fa = 1E4, Ga = 1E4, k = 1, C = null, Rb = !0, La = !0, kb = !1, Za = !1, N = 0, Ia = !1, Sb = !1, ma = v = ~~((Da + Fa) / 2), na = w = ~~((Ea + Ga) / 2), oa = 1, ka = "", F = null, Oa = !1, Xa = !1, Va = 0, Wa = 0, Ba = 0, Ca = 0, jc = ["#333333", "#FF3333", "#33FF33", "#3333FF"],
                eb = !1, la = !1, zb = 0, z = null, R = 1, t = 1, ia = !1, Ra = 0, Ib = !0, Ya = null, yb = !1, G = new Image;
            G.src = "/img/background.png";
            var nb = "ontouchstart" in c && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c.navigator.userAgent), fb = new Image;
            fb.src = "/img/split.png";
            var Tb = document.createElement("canvas");
            if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == Tb || null == Tb.getContext || null == c.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this"); else {
                var ya = null;
                c.setNick = function (a) {
                    c.ga && c.ga("send", "event", "Nick", a.toLowerCase());
                    tb();
                    L = a;
                    Ab();
                    N = 0
                };
                c.setRegion = va;
                var Sa = !0;
                c.setSkins = function (a) {
                    Rb = a
                };
                c.setNames = function (a) {
                    La = a
                };
                c.setDarkTheme = function (a) {
                    Ia = a
                };
                c.setColors = function (a) {
                    kb = a
                };
                c.setShowMass = function (a) {
                    Sb = a
                };
                c.spectate = function () {
                    L = null;
                    K(1);
                    tb()
                };
                c.setGameMode = function (a) {
                    a != ka && (":party" == ka && e("#helloContainer").attr("data-party-state", "0"), ja(a), ":party" != a && Q())
                };
                c.setAcid = function (a) {
                    eb = a
                };
                e.get(jb + "//gc.agar.io", function (a) {
                    var b = a.split(" ");
                    a = b[0];
                    b = b[1] || "";
                    -1 == ["UA"].indexOf(a) && Ub.push("ussr");
                    ra.hasOwnProperty(a) && ("string" == typeof ra[a] ? C || va(ra[a]) : ra[a].hasOwnProperty(b) && (C || va(ra[a][b])))
                }, "text");
                var ra = {
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
                }, U = null;
                c.connect = Ta;
                var Aa = 500, Cb = -1, Db = -1;
                c.refreshPlayerInfo = function () {
                    K(253)
                };
                var E = null, I = 1, Ja = null, qb = function () {
                    var a = Date.now(), b = 1E3 / 60;
                    return function () {
                        c.requestAnimationFrame(qb);
                        var d = Date.now(), e = d - a;
                        e > b && (a = d - e % b, !da() || 240 > Date.now() - zb ? Eb() : console.warn("Skipping draw"), rc())
                    }
                }(), ea = {}, Ub = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"), sc = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"), qa = {};
                gb.prototype = {X: null, x: 0, y: 0, f: 0, b: 0};
                ca.prototype = {
                    id: 0,
                    a: null,
                    name: null,
                    i: null,
                    M: null,
                    x: 0,
                    y: 0,
                    size: 0,
                    s: 0,
                    u: 0,
                    o: 0,
                    H: 0,
                    I: 0,
                    g: 0,
                    ba: 0,
                    P: 0,
                    fa: 0,
                    F: !1,
                    c: !1,
                    h: !1,
                    R: !0,
                    $: 0,
                    N: null,
                    da: 0,
                    Z: function () {
                        var a;
                        for (a = 0; a < x.length; a++)if (x[a] == this) {
                            x.splice(a, 1);
                            break
                        }
                        delete M[this.id];
                        a = l.indexOf(this);
                        -1 != a && (Za = !0, l.splice(a, 1));
                        a = D.indexOf(this.id);
                        -1 != a && D.splice(a, 1);
                        this.F = !0;
                        0 < this.$ && ba.push(this)
                    },
                    m: function () {
                        return Math.max(~~(.3 * this.size), 24)
                    },
                    A: function (a) {
                        if (this.name = a)null == this.i ? this.i = new Ka(this.m(), "#FFFFFF", !0, "#000000") : this.i.K(this.m()), this.i.B(this.name)
                    },
                    Y: function () {
                        for (var a = this.G(); this.a.length > a;) {
                            var b = ~~(Math.random() * this.a.length);
                            this.a.splice(b, 1)
                        }
                        for (0 == this.a.length && 0 < a && this.a.push(new gb(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < a;)b = ~~(Math.random() * this.a.length), b = this.a[b], this.a.push(new gb(this, b.x, b.y, b.f, b.b))
                    },
                    G: function () {
                        var a = 10;
                        20 > this.size && (a = 0);
                        this.c && (a = 30);
                        var b = this.size;
                        this.c || (b *= k);
                        b *= I;
                        return ~~Math.max(b, a)
                    },
                    qa: function () {
                        this.Y();
                        for (var a = this.a, b = a.length, d = 0; d < b; ++d) {
                            var c = a[(d - 1 + b) % b].b, e = a[(d + 1) % b].b;
                            a[d].b += (Math.random() - .5) * (this.h ? 3 : 1);
                            a[d].b *= .7;
                            10 < a[d].b && (a[d].b = 10);
                            -10 > a[d].b && (a[d].b = -10);
                            a[d].b = (c + e + 8 * a[d].b) / 10
                        }
                        for (var f = this, g = this.c ? 0 : (this.id / 1E3 + H / 1E4) % (2 * Math.PI), q = 0, d = 0; d < b; ++d) {
                            var l = a[d].f, c = a[(d - 1 + b) % b].f, e = a[(d + 1) % b].f;
                            if (15 < this.size && null !=
                                ga && 20 < this.size * k && 0 < this.id) {
                                var m = !1, O = a[d].x, n = a[d].y;
                                ga.ta(O - 5, n - 5, 10, 10, function (a) {
                                    a.X != f && 25 > (O - a.x) * (O - a.x) + (n - a.y) * (n - a.y) && (m = !0)
                                });
                                !m && (a[d].x < Da || a[d].y < Ea || a[d].x > Fa || a[d].y > Ga) && (m = !0);
                                m && (0 < a[d].b && (a[d].b = 0), --a[d].b)
                            }
                            l += a[d].b;
                            0 > l && (l = 0);
                            l = this.h ? (19 * l + this.size) / 20 : (12 * l + this.size) / 13;
                            a[d].f = (c + e + 8 * l) / 10;
                            c = 2 * Math.PI / b;
                            e = this.a[d].f;
                            this.c && 0 == d % 2 && (e += 5);
                            a[d].x = this.x + Math.cos(c * d + g) * e;
                            a[d].y = this.y + Math.sin(c * d + g) * e;
                            q = Math.max(q, e)
                        }
                        this.da = q
                    },
                    O: function () {
                        if (0 >= this.id)return 1;
                        var a;
                        a = (H - this.P) / 120;
                        a = 0 > a ? 0 : 1 < a ? 1 : a;
                        var b = 0 > a ? 0 : 1 < a ? 1 : a;
                        if (this.F && 1 <= b) {
                            var d = ba.indexOf(this);
                            -1 != d && ba.splice(d, 1)
                        }
                        this.x = a * (this.H - this.s) + this.s;
                        this.y = a * (this.I - this.u) + this.u;
                        this.size = b * (this.g - this.o) + this.o;
                        .01 > Math.abs(this.size - this.g) && (this.size = this.g);
                        return b
                    },
                    L: function () {
                        return 0 >= this.id ? !0 : this.x + this.size + 40 < v - n / 2 / k || this.y + this.size + 40 < w - p / 2 / k || this.x - this.size - 40 > v + n / 2 / k || this.y - this.size - 40 > w + p / 2 / k ? !1 : !0
                    },
                    w: function (a) {
                        if (this.L()) {
                            ++this.$;
                            var b = 0 < this.id && !this.c && !this.h &&
                                .4 > k;
                            5 > this.G() && 0 < this.id && (b = !0);
                            if (this.R && !b)for (var d = 0; d < this.a.length; d++)this.a[d].f = this.size;
                            this.R = b;
                            a.save();
                            this.fa = H;
                            var e = this.O();
                            this.F && (a.globalAlpha *= 1 - e);
                            a.lineWidth = 10;
                            a.lineCap = "round";
                            a.lineJoin = this.c ? "miter" : "round";
                            var d = this.name.toLowerCase(), h = null, e = !1, f = this.color;
                            this.h || !Rb || yb || (-1 != Ub.indexOf(d) ? (ea.hasOwnProperty(d) || (ea[d] = new Image, ea[d].src = c.ASSETS_ROOT + "skins/" + d + ".png"), h = 0 != ea[d].width && ea[d].complete ? ea[d] : null) : h = null, null != h ? -1 != sc.indexOf(d) && (e = !0) : (h = lc(this.N), null != h && (f = kc(this.N) || f)));
                            kb ? (a.fillStyle = "#FFFFFF", a.strokeStyle = "#AAAAAA") : (a.fillStyle = f, a.strokeStyle = f);
                            if (b)a.beginPath(), a.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1); else for (this.qa(), a.beginPath(), f = this.G(), a.moveTo(this.a[0].x, this.a[0].y), d = 1; d <= f; ++d) {
                                var g = d % f;
                                a.lineTo(this.a[g].x, this.a[g].y)
                            }
                            a.closePath();
                            b || a.stroke();
                            a.fill();
                            null != h && (a.save(), a.clip(), d = Math.max(this.size, this.da), a.drawImage(h, this.x - d - 5, this.y - d - 5, 2 * d + 10, 2 * d + 10), a.restore());
                            (kb || 15 < this.size) && !b && (a.strokeStyle = "#000000", a.globalAlpha *= .1, a.stroke());
                            a.globalAlpha = 1;
                            h = -1 != l.indexOf(this);
                            b = ~~this.y;
                            0 != this.id && (La || h) && this.name && this.i && !e && (d = this.i, d.B(this.name), d.K(this.m()), e = 0 >= this.id ? 1 : Math.ceil(10 * k) / 10, d.ea(e), d = d.J(), f = Math.ceil(d.width / e), g = Math.ceil(d.height / e), a.drawImage(d, ~~this.x - ~~(f / 2), b - ~~(g / 2), f, g), b += d.height / 2 / e + 4);
                            0 < this.id && Sb && (h || 0 == l.length && (!this.c || this.h) && 20 < this.size) && (null == this.M && (this.M = new Ka(this.m() / 2, "#FFFFFF", !0, "#000000")), h = this.M, h.K(this.m() /
                                2), h.B(~~(this.size * this.size / 100)), e = Math.ceil(10 * k) / 10, h.ea(e), d = h.J(), f = Math.ceil(d.width / e), g = Math.ceil(d.height / e), a.drawImage(d, ~~this.x - ~~(f / 2), b - ~~(g / 2), f, g));
                            a.restore()
                        }
                    }
                };
                c.Maths = function (a) {
                    function b(a, b, c) {
                        return a < b ? b : a > c ? c : a
                    }

                    a.xa = function (a, c, e) {
                        e = b(e, 0, 1);
                        return a + e * (c - a)
                    };
                    a.wa = b;
                    return a
                }({});
                Ka.prototype = {
                    D: "", S: "#000000", U: !1, V: "#000000", v: 16, j: null, T: null, l: !1, C: 1, K: function (a) {
                        this.v != a && (this.v = a, this.l = !0)
                    }, ea: function (a) {
                        this.C != a && (this.C = a, this.l = !0)
                    }, B: function (a) {
                        a != this.D &&
                        (this.D = a, this.l = !0)
                    }, J: function () {
                        null == this.j && (this.j = document.createElement("canvas"), this.T = this.j.getContext("2d"));
                        if (this.l) {
                            this.l = !1;
                            var a = this.j, b = this.T, d = this.D, c = this.C, e = this.v, f = e + "px Ubuntu";
                            b.font = f;
                            var g = ~~(.2 * e);
                            a.width = (b.measureText(d).width + 6) * c;
                            a.height = (e + g) * c;
                            b.font = f;
                            b.scale(c, c);
                            b.globalAlpha = 1;
                            b.lineWidth = 3;
                            b.strokeStyle = this.V;
                            b.fillStyle = this.S;
                            this.U && b.strokeText(d, 3, e - g / 2);
                            b.fillText(d, 3, e - g / 2)
                        }
                        return this.j
                    }
                };
                Date.now || (Date.now = function () {
                    return (new Date).getTime()
                });
                (function () {
                    for (var a = ["ms", "moz", "webkit", "o"], b = 0; b < a.length && !c.requestAnimationFrame; ++b)c.requestAnimationFrame = c[a[b] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[a[b] + "CancelAnimationFrame"] || c[a[b] + "CancelRequestAnimationFrame"];
                    c.requestAnimationFrame || (c.requestAnimationFrame = function (a) {
                        return setTimeout(a, 1E3 / 60)
                    }, c.cancelAnimationFrame = function (a) {
                        clearTimeout(a)
                    })
                })();
                var Yb = {
                    init: function (a) {
                        function b(a) {
                            a < c && (a = c);
                            a > f && (a = f);
                            return ~~((a - c) / 32)
                        }

                        function d(a) {
                            a < e && (a = e);
                            a > g && (a =
                                g);
                            return ~~((a - e) / 32)
                        }

                        var c = a.oa, e = a.pa, f = a.ma, g = a.na, k = ~~((f - c) / 32) + 1, l = ~~((g - e) / 32) + 1, m = Array(k * l);
                        return {
                            ja: function (a) {
                                var c = b(a.x) + d(a.y) * k;
                                null == m[c] ? m[c] = a : Array.isArray(m[c]) ? m[c].push(a) : m[c] = [m[c], a]
                            }, ta: function (a, c, e, f, h) {
                                var g = b(a), u = d(c);
                                a = b(a + e);
                                c = d(c + f);
                                if (0 > g || g >= k || 0 > u || u >= l)debugger;
                                for (; u <= c; ++u)for (f = g; f <= a; ++f)if (e = m[f + u * k], null != e)if (Array.isArray(e))for (var n = 0; n < e.length; n++)h(e[n]); else h(e)
                            }
                        }
                    }
                }, Bb = function () {
                    var a = new ca(0, 0, 0, 32, "#ED1C24", ""), b = document.createElement("canvas");
                    b.width = 32;
                    b.height = 32;
                    var d = b.getContext("2d");
                    return function () {
                        0 < l.length && (a.color = l[0].color, a.A(l[0].name));
                        d.clearRect(0, 0, 32, 32);
                        d.save();
                        d.translate(16, 16);
                        d.scale(.4, .4);
                        a.w(d);
                        d.restore();
                        var c = document.getElementById("favicon"), e = c.cloneNode(!0);
                        e.setAttribute("href", b.toDataURL("image/png"));
                        c.parentNode.replaceChild(e, c)
                    }
                }();
                e(function () {
                    Bb()
                });
                var Y = "storeObjectInfo", hb = {
                    context: null,
                    defaultProvider: "facebook",
                    loginIntent: "0",
                    userInfo: {
                        socialToken: null,
                        tokenExpires: "",
                        level: "",
                        xp: "",
                        xpNeeded: "",
                        name: "",
                        picture: ""
                    }
                }, g = hb;
                c.storageInfo = g;
                c.createDefaultStorage = nc;
                c.updateStorage = Ma;
                e(function () {
                    null != c.localStorage[Y] && (g = JSON.parse(c.localStorage[Y]));
                    "1" == g.loginIntent && Jb(g.context);
                    "" != g.userInfo.name && (Kb(g.userInfo), null != g.userInfo.socialToken && (z = g.userInfo.socialToken))
                });
                c.checkLoginStatus = function () {
                    "1" == g.loginIntent && Jb(g.context)
                };
                c.logout = function () {
                    g = hb;
                    z = null;
                    Vb();
                    e("#helloContainer").attr("data-logged-in", "0");
                    e("#helloContainer").attr("data-has-account-data", "0");
                    e("#gPlusShare").hide();
                    e("#fbShare").show();
                    e("#user-id-tag").text("");
                    delete c.localStorage[Y];
                    c.localStorage[Y] = JSON.stringify(g);
                    Q();
                    c.MC.doLogout()
                };
                c.gameServerLogin = function () {
                    "" != g.userInfo.name && c.localStorage[Y] && (Date.now() + 3E4 > 1E3 * g.userInfo.tokenExpires ? (e("#helloContainer").attr("data-logged-in", "0"), c.logout()) : (z = g.userInfo.socialToken, wb()))
                };
                c.checkSocialAPIToken = function () {
                    e.ajax(ha + "checkToken", {
                        error: function () {
                            z = null;
                            c.logout()
                        }, success: function (a) {
                            g.ya = "1";
                            a = a.split("\n");
                            pa({level: +a[0], xp: +a[1], xpNeeded: +a[2]}, null);
                            c.gameServerLogin()
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: z
                    })
                };
                c.getSocialAPIToken = function (a, b) {
                    null == b || "undefined" == b ? c.logout() : e.ajax(ha + a, {
                        error: function () {
                            z = null;
                            e("#helloContainer").attr("data-logged-in", "0")
                        }, success: function (a) {
                            a = a.split("\n");
                            g.userInfo.socialToken = a[2];
                            g.userInfo.tokenExpires = a[3];
                            g.userInfo.level = a[4];
                            g.userInfo.xp = a[5];
                            g.userInfo.xpNeeded = a[6];
                            g.userInfo.name = a[0].split(" ")[0];
                            Kb(g.userInfo);
                            Ma();
                            c.gameServerLogin()
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: b
                    })
                };
                c.toggleSocialLogin = function () {
                    e("#socialLoginContainer").toggle();
                    e("#settings").hide();
                    e("#instructions").hide();
                    Lb()
                };
                c.toggleSettings = function () {
                    e("#settings").toggle();
                    e("#socialLoginContainer").hide();
                    e("#instructions").hide();
                    Lb()
                };
                var Nb = 0;
                c.fbAsyncInit = function () {
                    function a() {
                        null == c.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : (g.loginIntent = "1", c.updateStorage(), c.FB.login(function (a) {
                            Mb(a)
                        }, {scope: "public_profile, email"}))
                    }

                    c.FB.init({appId: y.fb_app_id, cookie: !0, xfbml: !0, status: !0, version: "v2.2"});
                    "1" == c.storageInfo.loginIntent && "facebook" == c.storageInfo.context && c.FB.getLoginStatus(function (b) {
                        "connected" === b.status ? Mb(b) : (c.logout(), a())
                    });
                    c.facebookRelogin = a;
                    c.facebookLogin = a
                };
                var lb = !1;
                (function (a) {
                    function b() {
                        var a = document.createElement("script");
                        a.type = "text/javascript";
                        a.async = !0;
                        a.src = "//apis.google.com/js/client:platform.js?onload=gapiAsyncInit";
                        var b = document.getElementsByTagName("script")[0];
                        b.parentNode.insertBefore(a, b);
                        f = !0
                    }

                    var d = {}, f = !1;
                    c.gapiAsyncInit = function () {
                        e(d).trigger("initialized")
                    };
                    a.google = {
                        ka: function () {
                            b()
                        }, ia: function (a, b) {
                            c.gapi.client.load("plus", "v1", function () {
                                console.log("fetching me profile");
                                gapi.client.plus.people.get({userId: "me"}).execute(function (a) {
                                    b(a)
                                })
                            })
                        }
                    };
                    a.sa = function (a) {
                        f || b();
                        "undefined" !== typeof gapi ? a() : e(d).bind("initialized", a)
                    };
                    return a
                })(J);
                var tc = function (a) {
                    function b(a) {
                        null != z ? c.checkSocialAPIToken() : c.getSocialAPIToken("googleLogin", a);
                        c.MC.doLoginWithGPlus(a)
                    }

                    function d(a) {
                        g.userInfo.picture = a;
                        e(".agario-profile-picture").attr("src", a)
                    }

                    var f = null, h = {
                        client_id: y.gplus_client_id,
                        cookie_policy: "single_host_origin",
                        scope: "profile email"
                    };
                    a.ca = {
                        W: function () {
                            return f
                        }, init: function () {
                            var a = this, b = g && "1" == g.loginIntent && "google" == g.context;
                            J.sa(function () {
                                c.gapi.ytsubscribe.go("agarYoutube");
                                c.gapi.load("auth2", function () {
                                    f = c.gapi.auth2.init(h);
                                    f.attachClickHandler(document.getElementById("gplusLogin"), {}, function (a) {
                                        console.log("googleUser : " + a)
                                    }, function (a) {
                                        console.log("failed to login in google plus: ", JSON.stringify(a, void 0, 2))
                                    });
                                    f.currentUser.listen(_.bind(a.ra, a));
                                    b && 1 == f.isSignedIn.get() && f.signIn()
                                })
                            })
                        }, ra: function (a) {
                            if (f && a && f.isSignedIn.get() && !lb) {
                                lb = !0;
                                g.loginIntent = "1";
                                var e = a.getAuthResponse(), h = e.access_token;
                                c.W = e;
                                console.log("loggedIn with G+!");
                                a = a.getBasicProfile().getImageUrl();
                                void 0 == a ? J.google.ia(e, function (a) {
                                    a.result.isPlusUser ? (a && d(a.image.url), b(h)) : (alert("Please add Google+ to your Google account and try again.\nOr you can login with another account."), c.logout())
                                }) : (d(a), b(h));
                                g.context = "google";
                                c.updateStorage()
                            }
                        }, la: function () {
                            f && (f.signOut(), lb = !1)
                        }
                    };
                    return a
                }(J);
                c.gplusModule = tc;
                var Vb = function () {
                    J.ca.la()
                };
                c.logoutGooglePlus = Vb;
                var rc = function () {
                    function a(a, b, c, d, e) {
                        var f = b.getContext("2d"), g = b.width;
                        b = b.height;
                        a.color = e;
                        a.A(c);
                        a.size = d;
                        f.save();
                        f.translate(g / 2, b / 2);
                        a.w(f);
                        f.restore()
                    }

                    for (var b = new ca(-1, 0, 0, 32, "#5bc0de", ""), d = new ca(-1, 0, 0, 32, "#5bc0de", ""), c = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), f = [], g = 0; g < c.length; ++g) {
                        var k = g / c.length * 12, l = 30 * Math.sqrt(g / c.length);
                        f.push(new ca(-1, Math.cos(k) * l, Math.sin(k) * l, 10, c[g], ""))
                    }
                    mc(f);
                    var n = document.createElement("canvas");
                    n.getContext("2d");
                    n.width = n.height = 70;
                    a(d, n, "", 26, "#ebc0de");
                    return function () {
                        e(".cell-spinner").filter(":visible").each(function () {
                            var c = e(this), d = Date.now(), f = this.width, g = this.height, h = this.getContext("2d");
                            h.clearRect(0, 0, f, g);
                            h.save();
                            h.translate(f / 2, g / 2);
                            for (var k = 0; 10 > k; ++k)h.drawImage(n, (.1 * d + 80 * k) % (f + 140) - f / 2 - 70 - 35, g / 2 * Math.sin((.001 * d + k) % Math.PI * 2) - 35, 70, 70);
                            h.restore();
                            (c = c.attr("data-itr")) && (c = S(c));
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
                c.createParty = function () {
                    ja(":party");
                    U = function (a) {
                        ib("/#" + c.encodeURIComponent(a));
                        e(".partyToken").val("agar.io/#" + c.encodeURIComponent(a));
                        e("#helloContainer").attr("data-party-state", "1")
                    };
                    Q()
                };
                c.joinParty = sb;
                c.cancelParty = function () {
                    ib("/");
                    e("#helloContainer").attr("data-party-state", "0");
                    ja("");
                    Q()
                };
                var B = [], $a = 0, ab = "#000000", aa = !1, za = !1, bb = 0, db = 0, cb = 0, Ha = 0, X = 0, Pb = !0;
                setInterval(function () {
                    za && B.push(Gb() / 100)
                }, 1E3 / 60);
                setInterval(function () {
                    var a = oc();
                    0 != a && (++cb, 0 == X && (X = a), X = Math.min(X, a))
                }, 1E3);
                c.closeStats = function () {
                    aa = !1;
                    e("#stats").hide();
                    c.destroyAd(c.adSlots.ab);
                    ua(0)
                };
                c.setSkipStats = function (a) {
                    Pb = !a
                };
                c.getStatsString = Qb;
                c.gPlusShare = qc;
                c.twitterShareStats = function () {
                    var a =
                        c.getStatsString("g_plus_share_stats");
                    c.open("https://twitter.com/intent/tweet?text=" + a, "Agar.io", "width=660,height=310,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (c.screenX + c.innerWidth / 2 - 330) + ",top=" + (c.innerHeight - 310) / 2)
                };
                c.fbShareStats = function () {
                    var a = c.getStatsString("fb_matchresults_subtitle");
                    c.FB.ui({
                        method: "feed",
                        display: "iframe",
                        name: S("fb_matchresults_title"),
                        caption: S("fb_matchresults_description"),
                        description: a,
                        link: "http://agar.io",
                        Ba: "http://static2.miniclipcdn.com/mobile/agar/Agar.io_matchresults_fb_1200x630.png",
                        ua: {name: "play now!", link: "http://agar.io"}
                    })
                };
                c.fillSocialValues = function (a, b) {
                    1 == c.isChrome && "google" == c.storageInfo.context && c.gapi.interactivepost.render(b, {
                        contenturl: y.game_url,
                        clientid: y.gplus_client_id,
                        cookiepolicy: "http://agar.io",
                        prefilltext: a,
                        calltoactionlabel: "BEAT",
                        calltoactionurl: y.game_url
                    })
                };
                e(function () {
                    e(Wb);
                    "MAsyncInit" in c && c.MAsyncInit()
                })
            }
        }
    }
})(window, window.jQuery);