(function (d, e, AgarBot, app) {
    function bc() {
        Ra = !0;
        wb();
        setInterval(wb, 18E4);
        P = Sa = document.getElementById("canvas");
        f = P.getContext("2d");
        P.onmousedown = function (a) {
            if (xb) {
                var c = a.clientX - (5 + m / 5 / 2), b = a.clientY - (5 + m / 5 / 2);
                if (Math.sqrt(c * c + b * b) <= m / 5 / 2) {
                    ha();
                    J(17);
                    return
                }
            }
            ta = 1 * a.clientX;
            ua = 1 * a.clientY;
            Ta();
            ha()
        };
        P.onmousemove = function (a) {
            ta = 1 * a.clientX;
            ua = 1 * a.clientY;
            Ta()
        };
        P.onmouseup = function () {
        };
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", yb, !1) : document.body.onmousewheel = yb;
        var a = !1, c = !1, b = !1;
        d.onkeydown = function (d) {
            32 != d.keyCode || a || ("nick" != d.target.id && d.preventDefault(), ha(), J(17), a = !0);
            81 != d.keyCode || c || (J(18), c = !0);
            87 != d.keyCode || b || (ha(), J(21), b = !0);
            27 == d.keyCode && (d.preventDefault(), va(300))
        };
        d.onkeyup = function (d) {
            32 == d.keyCode && (a = !1);
            87 == d.keyCode && (b = !1);
            81 == d.keyCode && c && (J(19), c = !1)
        };
        d.onblur = function () {
            J(19);
            b = c = a = !1
        };
        d.onresize = zb;
        d.requestAnimationFrame(Ab);
        setInterval(ha, 40);
        A && e("#region").val(A);
        Bb();
        wa(e("#region").val());
        0 == Ua && A && Q();
        xa.ABGroupDFP = Cb("AB9");
        xa.ABGroupRubicon = Cb("AB10_Rubicon");
        ya.w = d.hasBottomAd;
        R && console.log("Init ads");
        cc();
        dc();
        R && console.log("Ads initted");
        R && console.log("Your group: ", za() ? "rubicon" : "dfp");
        ec();
        va(0);
        zb();
        d.location.hash && 6 <= d.location.hash.length && Db(d.location.hash)
    }

    function yb(a) {
        S *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        /**
         * @author nguyenvanduocit
         */
        0.1 > S && (S = 0.1);
        S > 4 / g && (S = 4 / g)
    }

    function fc() {
        if (.4 > g)ia = null; else {
            for (var a = Number.POSITIVE_INFINITY, c = Number.POSITIVE_INFINITY, b = Number.NEGATIVE_INFINITY, d = Number.NEGATIVE_INFINITY, h = 0; h < x.length; h++) {
                var e = x[h];
                !e.H() || e.M || 20 >= e.size * g || (a = Math.min(e.x - e.size, a), c = Math.min(e.y - e.size, c), b = Math.max(e.x + e.size, b), d = Math.max(e.y + e.size, d))
            }
            ia = gc.init({ca: a - 10, da: c - 10, $: b + 10, ba: d + 10, ha: 2, ia: 4});
            for (h = 0; h < x.length; h++)if (e = x[h], e.H() && !(20 >= e.size * g))for (a = 0; a < e.a.length; ++a)c = e.a[a].x, b = e.a[a].y, c < v - m / 2 / g || b < w - q / 2 / g || c > v + m / 2 / g || b > w + q / 2 / g || ia.Z(e.a[a])
        }
    }

    function Ta() {
        //@author nguyenvanduocit
        var tmp_ta = (ta - m / 2) / g + v;
        var temp_ua = (ua - q / 2) / g + w
        setPoint(tmp_ta, temp_ua);
    }

    function wb() {
        null == Ca && (Ca = {}, e("#region").children().each(function () {
            var a = e(this), c = a.val();
            c && (Ca[c] =
                a.text())
        }));
        e.get(ja + "info", function (a) {
            var c = {}, b;
            for (b in a.regions) {
                var d = b.split(":")[0];
                c[d] = c[d] || 0;
                c[d] += a.regions[b].numPlayers
            }
            for (b in c)e('#region option[value="' + b + '"]').text(Ca[b] + " (" + c[b] + " players)")
        }, "json")
    }

    function Eb() {
        e("#adsBottom").hide();
        e("#overlays").hide();
        e("#stats").hide();
        e("#mainPanel").hide();
        $ = ka = !1;
        Bb();
        var a = u.aa;
        Va(a);
        Wa(a);
        a = u.ac;
        Va(a);
        Wa(a)
    }

    function wa(a) {
        a && (a == A ? e(".btn-needs-server").prop("disabled", !1) : (e("#region").val() != a && e("#region").val(a), A = d.localStorage.location = a, e(".region-message").hide(), e(".region-message." + a).show(), e(".btn-needs-server").prop("disabled", !1), Ra && Q()))
    }

    function va(a) {
        ka || $ || (Da ? e(".btn-spectate").prop("disabled", !0) : e(".btn-spectate").prop("disabled", !1), K = null, Xa || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show(), e("#g728x90").hide(), e("#a728x90").show()), Ya(Xa ? u.ac : u.aa), Xa = !1, 1E3 > a && (t = 1), ka = !0, e("#mainPanel").show(), 0 < a ? e("#overlays").fadeIn(a) : e("#overlays").show())
    }

    function la(a) {
        e("#helloContainer").attr("data-gamemode", a);
        T = a;
        e("#gamemode").val(a)
    }

    function Bb() {
        e("#region").val() ? d.localStorage.location = e("#region").val() : d.localStorage.location && e("#region").val(d.localStorage.location);
        e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
    }

    function ma(a) {
        return d.i18n[a] || d.i18n_dict.en[a] || a
    }

    function ec() {
        var a = -1 != d.location.search.indexOf("fb"), a = za() && !a;
        googletag.cmd.push(function () {
            googletag.display("g300x250")
        });
        Fb && googletag.cmd.push(function () {
            googletag.display("g728x90")
        });
        a || (googletag.cmd.push(function () {
            googletag.display("s300x250")
        }), googletag.cmd.push(function () {
            googletag.display("a300x250")
        }), Fb && googletag.cmd.push(function () {
            googletag.display("a728x90")
        }))
    }

    function za() {
        return !(50 > Za("ABGroupRubicon"))
    }

    function Za(a) {
        return a in xa ? xa[a] : 0
    }

    function Ya(a) {
        Gb(a);
        for (var c = 0; c < a.length; c++)if (!("type" in a[c] && "rubicon" != a[c].type)) {
            var b = a[c].data;
            R && console.log("Rubicon: refreshing:" + b.id);
            aa.F(b.id, b.size, b.json)
        }
    }

    function cc() {
        var a = {}, c = null, b = null, s = null, h = null, e = -1 != d.location.search.indexOf("fb"), f = za() && !e, n = ya.w;
        e ? (a = "/53945695/agar_facebook/agar/300x250", s = "/53945695/agar_facebook/agar/300x250_Stats", h = "/53945695/agar_facebook/agar/300x250") : (h = "/116850162/300x250_init", c = "/116850162/728x90_init", a = "/116850162/300x250_login", s = "/116850162/300x250_stats", b = "/116850162/728x90_login");
        var g = d.googletag;
        g.cmd.push(function () {
            g.pubads().setTargeting("abtest", Za("ABGroupDFP") + "");
            u.ac.push(ba.defineSlot(h, [300, 250], "g300x250"));
            n && u.ac.push(ba.defineSlot(c, [728, 90], "g728x90"));
            f || (u.ab.push(ba.defineSlot(s, [300, 250], "s300x250")), u.aa.push(ba.defineSlot(a, [300, 250], "a300x250")), n && u.aa.push(ba.defineSlot(b, [728, 90], "a728x90")));
            g.pubads().enableSingleRequest();
            g.pubads().disableInitialLoad();
            g.enableServices();
            $a = !0;
            null != ab && (console.log("refreshing from queue"), Gb(ab))
        })
    }

    function Gb(a) {
        console.log("dfpInitialized=" + $a);
        $a || (console.log("queuing refresh"), ab = a);
        for (var c = [], b = 0; b < a.length; b++)"type" in a[b] && "dfpads" != a[b].type ? console.log("trying to refresh a non dfp ad. continue") : (R && console.log("DFP: refreshing:" + a[b].data.A), c.push(a[b].data));
        0 >= c.length || !d.googletag || d.googletag.cmd.push(function () {
            bb && (bb = !1, setTimeout(function () {
                bb = !0
            }, 6E4 * hc), d.googletag && d.googletag.pubads && d.googletag.pubads().refresh && d.googletag.pubads().refresh(c))
        })
    }

    function Va(a) {
        for (var c = [], b = 0; b < a.length; b++)"type" in a[b] && "dfpads" != a[b].type || (R && console.log("DFP: destroying:" + a[b].data.A), c.push(a[b].data));
        d.googletag && d.googletag.pubads && d.googletag.pubads().clear && d.googletag.pubads().clear(c)
    }

    function dc() {
        if (za()) {
            var a = {acct: 13694, site: 73068, zone: 346604, size: 15}, c = {
                acct: 13694,
                site: 73068,
                zone: 363786,
                size: 2
            }, b = ya.w;
            u.ab.push(aa.defineSlot(a, "300x250", "s300x250"));
            u.aa.push(aa.defineSlot(a, "300x250", "a300x250"));
            b && u.aa.push(aa.defineSlot(c, "728x90", "a728x90"))
        }
    }

    function Hb() {
        var a = ++Ua;
        console.log("Find " + A + T);
        Ib();
        e.ajax(ja + "findServer", {
            error: function () {
                setTimeout(Hb, 3E4)
            }, success: function (c) {
                if (a == Ua) {
                    c.alert && alert(c.alert);
                    var b = c.ip;
                    void 0 != L.Y && (b = d.location.hostname + ":" + L.Y);
                    cb("ws" +
                        (db ? "s" : "") + "://" + b, c.token)
                }
            }, dataType: "json", method: "POST", cache: !1, crossDomain: !0, data: (A + T || "?") + "\n2200049715"
        })
    }

    function Q() {
        Ra && A && (e("#connecting").show(), Hb())
    }

    function Ib() {
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

    function cb(a, c) {
        Ib();
        B.ip && (a = "ws" + (db ? "s" : "") + "://" + B.ip);
        if (null != U) {
            var b = U;
            U = function () {
                b(c)
            }
        }
        if (db && !L.env_development && !L.env_local) {
            var d = a.split(":");
            a = "wss://ip-" + d[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +d[2]
        }
        C = [];
        k = [];
        M = {};
        x = [];
        ca = [];
        y = [];
        D = E = null;
        N = 0;
        na = !1;
        console.log("Connecting to " + a);
        /**
         * @author nguyenvanduocit
         */
        serverIP = a;
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
            a = V(1 + c.length);
            a.setUint8(0, 80);
            for (var b = 0; b < c.length; ++b)a.setUint8(b + 1, c.charCodeAt(b));
            W(a);
            Jb()
        };
        r.onmessage = ic;
        r.onclose = jc;
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

    function jc() {
        na && (Ea = 500);
        console.log("socket close");
        setTimeout(Q, Ea);
        Ea *= 2
    }

    function ic(a) {
        kc(new DataView(a.data))
    }

    function kc(a) {
        function c() {
            for (var c = ""; ;) {
                var d = a.getUint16(b, !0);
                b += 2;
                if (0 == d)break;
                c += String.fromCharCode(d)
            }
            return c
        }

        var b = 0;
        240 == a.getUint8(b) && (b += 5);
        switch (a.getUint8(b++)) {
            case 16:
                lc(a, b);
                break;
            case 17:
                oa = a.getFloat32(b, !0);
                b += 4;
                pa = a.getFloat32(b, !0);
                b += 4;
                qa = a.getFloat32(b, !0);
                b += 4;
                break;
            case 20:
                k = [];
                C = [];
                break;
            case 21:
                eb = a.getInt16(b, !0);
                b += 2;
                fb = a.getInt16(b, !0);
                b += 2;
                gb || (gb = !0, Fa = eb, Ga = fb);
                break;
            case 32:
                C.push(a.getUint32(b, !0));
                b += 4;
                break;
            case 49:
                if (null != E)break;
                var s = a.getUint32(b, !0), b = b + 4;
                y = [];
                for (var e = 0; e < s; ++e) {
                    var f = a.getUint32(b, !0), b = b + 4;
                    y.push({id: f, name: c()})
                }
                Kb();
                break;
            case 50:
                E = [];
                s = a.getUint32(b, !0);
                b += 4;
                for (e = 0; e < s; ++e)E.push(a.getFloat32(b, !0)), b += 4;
                Kb();
                break;
            case 64:
                Ha = a.getFloat64(b, !0);
                b += 8;
                Ia = a.getFloat64(b, !0);
                b += 8;
                Ja = a.getFloat64(b, !0);
                b += 8;
                Ka = a.getFloat64(b, !0);
                b += 8;
                oa = (Ja + Ha) / 2;
                pa = (Ka + Ia) / 2;
                qa = 1;
                0 == k.length &&
                (v = oa, w = pa, g = qa);
                a.byteLength > b && (a.getUint32(b, !0), b += 4, hb = c(), d.MC.updateServerVersion(hb), console.log("Server version " + hb));
                break;
            case 81:
                var p = a.getUint32(b, !0), b = b + 4, n = a.getUint32(b, !0), b = b + 4, m = a.getUint32(b, !0), b = b + 4;
                setTimeout(function () {
                    var a = {level: p, xp: n, xpNeeded: m};
                    d.MC.updateUserXPInfo(a);
                    da(a)
                }, 1200)
        }
    }

    function lc(a, c) {
        function b() {
            for (var b = ""; ;) {
                var d = a.getUint16(c, !0);
                c += 2;
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        function s() {
            for (var b = ""; ;) {
                var d = a.getUint8(c++);
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        Lb = H = Date.now();
        na || (na = !0, mc());
        ib = !1;
        var h = a.getUint16(c, !0);
        c += 2;
        for (var f = 0; f < h; ++f) {
            var p = M[a.getUint32(c, !0)], n = M[a.getUint32(c + 4, !0)];
            c += 8;
            p && n && (n.S(), n.l = n.x, n.m = n.y, n.k = n.size, n.B = p.x, n.C = p.y, n.h = n.size, n.L = H, nc(p, n))
        }
        for (f = 0; ;) {
            h = a.getUint32(c, !0);
            c += 4;
            if (0 == h)break;
            ++f;
            var g, p = a.getInt32(c, !0);
            c += 4;
            n = a.getInt32(c, !0);
            c += 4;
            g = a.getInt16(c, !0);
            c += 2;
            var l = a.getUint8(c++), O = a.getUint8(c++), X = a.getUint8(c++), O = oc(l << 16 | O << 8 | X), X = a.getUint8(c++), m = !!(X & 1), q = !!(X & 16), r = null;
            X & 2 && (c += 4 + a.getUint32(c, !0));
            X & 4 && (r = s());
            var t = b(), l = null;
            M.hasOwnProperty(h) ? (l = M[h], l.K(), l.l = l.x, l.m = l.y, l.k = l.size, l.color = O) : (l = new ea(h, p, n, g, O, t), x.push(l), M[h] = l, l.ja = p, l.ka = n);
            l.c = m;
            l.g = q;
            l.B = p;
            l.C = n;
            l.h = g;
            l.L = H;
            l.U = X;
            r && (l.J = r);
            t && l.q(t);
            //@author nguyenvanduocit
            -1 != C.indexOf(h) && -1 == k.indexOf(l) && (k.push(l),l.birth = getLastUpdate(), l.birthMass = (l.size * l.size / 100), AgarBot.pubsub.trigger('startPlay'), 1 == k.length && (v = l.x, w = l.y, Mb(), document.getElementById("overlays").style.display = "none", z = [], jb = 0, kb = k[0].color, Da = !0, lb = Date.now(), Y = La = mb = 0))
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
        p = a.getUint32(c, !0);
        c += 4;
        for (f = 0; f < p; f++)h = a.getUint32(c, !0), c += 4, l = M[h], null != l && l.S();
        /**
         * @author nguyenvanduocit
         */
        ib && 0 == k.length && (nb = Date.now(), Da = !1, ka || $ || (Nb ? (Ya(u.ab), pc(), $ = !0,AgarBot.pubsub.trigger('stopPlay'), e("#overlays").fadeIn(3E3), e("#stats").show()) : va(3E3)), d.MC.deltaUpdateStats({
            games_played: 1,
            total_mass: ~~(N / 100),
            turn_time: (nb - lb) / 1E3,
            cells_eaten: La
        }))
    }

    function mc() {
        e("#connecting").hide();
        Ob();
        U && (U(), U = null)
    }

    function ha() {
        if (fa()) {
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
            var a = ta - m / 2, c = ua - q / 2;
            64 > a * a + c * c || .01 > Math.abs(Pb - Aa) && .01 > Math.abs(Qb - Ba) || (Pb = Aa, Qb = Ba, a = V(13), a.setUint8(0, 16), a.setInt32(1, Aa, !0), a.setInt32(5,
                Ba, !0), a.setUint32(9, 0, !0), W(a))
        }
    }

    function Ob() {
        if (fa() && na && null != K) {
            var a = V(1 + 2 * K.length);
            a.setUint8(0, 0);
            for (var c = 0; c < K.length; ++c)a.setUint16(1 + 2 * c, K.charCodeAt(c), !0);
            W(a);
            K = null
        }
    }

    function fa() {
        return null != r && r.readyState == r.OPEN
    }

    function J(a) {
        if (fa()) {
            var c = V(1);
            c.setUint8(0, a);
            W(c)
        }
    }

    function Jb() {
        if (fa() && null != F) {
            var a = V(1 + F.length);
            a.setUint8(0, 81);
            for (var c = 0; c < F.length; ++c)a.setUint8(c + 1, F.charCodeAt(c));
            W(a)
        }
    }

    function zb() {
        m = 1 * d.innerWidth;
        q = 1 * d.innerHeight;
        Sa.width = P.width = m;
        Sa.height = P.height = q;
        var a = e("#helloContainer");
        a.css("transform", "none");
        var c = a.height(), b = d.innerHeight;
        0 != c / 2 % 2 && (c++, a.height(c));
        c > b / 1.1 ? a.css("transform", "translate(-50%, -50%) scale(" + b / c / 1.1 + ")") : a.css("transform", "translate(-50%, -50%)");
        Rb()
    }

    function Sb() {
        var a;
        a = 1 * Math.max(q / 1080, m / 1920);
        return a *= S
    }
    /**
     * @author nguyenvanduocit
     */
    function Sb2() {
        var a;
        a = 1 * Math.max(q / 1080, m / 1920);
        return a;
    }

    function qc() {
        if (0 != k.length) {
            for (var a = 0, c = 0; c < k.length; c++)a += k[c].size;
            var a2 = Math.pow(Math.min(64 / a, 1), .4) * Sb2();
            a = Math.pow(Math.min(64 / a, 1), .4) * Sb();
            g = (9 * g + a) / 10;
            //@author nguyenvanduocit
            g2 = (9 * g2 + a2) / 10;
        }
    }

    function Rb() {
        //@author nguyenvanduocit
        dPoints = [];
        circles = [];
        dArc = [];
        dText = [];
        lines = [];

        var a, c = Date.now();
        ++rc;
        H = c;
        if (0 < k.length) {
            qc();
            for (var b = a =
                0, d = 0; d < k.length; d++)k[d].K(), a += k[d].x / k.length, b += k[d].y / k.length;
            oa = a;
            pa = b;
            qa = g;
            v = (v + a) / 2;
            w = (w + b) / 2
        } else v = (29 * v + oa) / 30, w = (29 * w + pa) / 30, g = (9 * g + qa * Sb()) / 10;
        fc();
        Ta();
        ob || f.clearRect(0, 0, m, q);
        ob ? (f.fillStyle = Ma ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, m, q), f.globalAlpha = 1) : sc();
        x.sort(function (a, c) {
            return a.size == c.size ? a.id - c.id : a.size - c.size
        });
        f.save();
        f.translate(m / 2, q / 2);
        f.scale(g, g);
        f.translate(-v, -w);
        for (d = 0; d < ca.length; d++)ca[d].p(f);
        for (d = 0; d < x.length; d++)x[d].p(f);
        /**
         * @author nguyenvanduocit
         */
        AgarBot.pubsub.trigger('main_out:mainloop');
        customRender(f);
        if (gb) {
            Fa = (3 *
                Fa + eb) / 4;
            Ga = (3 * Ga + fb) / 4;
            f.save();
            f.strokeStyle = "#FFAAAA";
            f.lineWidth = 10;
            f.lineCap = "round";
            f.lineJoin = "round";
            f.globalAlpha = .5;
            f.beginPath();
            for (d = 0; d < k.length; d++)f.moveTo(k[d].x, k[d].y), f.lineTo(Fa, Ga);
            f.stroke();
            f.restore()
        }
        f.restore();
        D && D.width && f.drawImage(D, m - D.width - 10, 10);
        N = Math.max(N, Tb());
        0 != N && (null == Na && (Na = new Oa(24, "#FFFFFF")), Na.r(ma("score") + ": " + ~~(N / 100)), b = Na.D(), a = b.width, f.globalAlpha = .2, f.fillStyle = "#000000", f.fillRect(10, q - 10 - 24 - 10, a + 10, 34), f.globalAlpha = 1, f.drawImage(b, 15,
            q - 10 - 24 - 5));
        tc();
        c = Date.now() - c;
        c > 1E3 / 60 ? I -= .01 : c < 1E3 / 65 && (I += .01);
        .4 > I && (I = .4);
        1 < I && (I = 1);
        c = H - Ub;
        !fa() || ka || $ ? (t += c / 2E3, 1 < t && (t = 1)) : (t -= c / 300, 0 > t && (t = 0));
        0 < t ? (f.fillStyle = "#000000", Vb ? (f.globalAlpha = t, f.fillRect(0, 0, m, q), G.complete && G.width && (G.width / G.height < m / q ? (c = m, a = G.height * m / G.width) : (c = G.width * q / G.height, a = q), f.drawImage(G, (m - c) / 2, (q - a) / 2, c, a), f.globalAlpha = .5 * t, f.fillRect(0, 0, m, q))) : (f.globalAlpha = .5 * t, f.fillRect(0, 0, m, q)), f.globalAlpha = 1) : Vb = !1;
        Ub = H
    }
//@author nguyenvanduocit
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
                var text = new Oa(18, (getDarkBool() ? '#F2FBFF' : '#111111'), true, (getDarkBool() ? '#111111' : '#F2FBFF'));
                text.r(dText[i]);
                var textRender = text.D();
                d.drawImage(textRender, dPoints[i][0] - (textRender.width / 2), dPoints[i][1] - (textRender.height / 2));
            }

        }
        d.restore();
    }
    function sc() {
        f.fillStyle = Ma ? "#111111" :
            "#F2FBFF";
        f.fillRect(0, 0, m, q);
        f.save();
        f.strokeStyle = Ma ? "#AAAAAA" : "#000000";
        f.globalAlpha = .2 * g;
        for (var a = m / g, c = q / g, b = (-v + a / 2) % 50; b < a; b += 50)f.beginPath(), f.moveTo(b * g - .5, 0), f.lineTo(b * g - .5, c * g), f.stroke();
        for (b = (-w + c / 2) % 50; b < c; b += 50)f.beginPath(), f.moveTo(0, b * g - .5), f.lineTo(a * g, b * g - .5), f.stroke();
        f.restore()
    }

    function tc() {
        if (xb && pb.width) {
            var a = m / 5;
            f.drawImage(pb, 5, 5, a, a)
        }
    }

    function Tb() {
        for (var a = 0, c = 0; c < k.length; c++)a += k[c].h * k[c].h;
        return a
    }

    function Kb() {
        D = null;
        if (null != E || 0 != y.length)if (null != E || Pa) {
            D = document.createElement("canvas");
            var a = D.getContext("2d"), c = 60, c = null == E ? c + 24 * y.length : c + 180, b = Math.min(200, .3 * m) / 200;
            D.width = 200 * b;
            D.height = c * b;
            a.scale(b, b);
            a.globalAlpha = .4;
            a.fillStyle = "#000000";
            a.fillRect(0, 0, 200, c);
            a.globalAlpha = 1;
            a.fillStyle = "#FFFFFF";
            b = null;
            b = ma("leaderboard");
            a.font = "30px Ubuntu";
            a.fillText(b, 100 - a.measureText(b).width / 2, 40);
            if (null == E)for (a.font = "20px Ubuntu", c = 0; c < y.length; ++c)b = y[c].name || ma("unnamed_cell"), Pa || (b = ma("unnamed_cell")), -1 != C.indexOf(y[c].id) ? (k[0].name &&
            (b = k[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle = "#FFFFFF", b = c + 1 + ". " + b, a.fillText(b, 100 - a.measureText(b).width / 2, 70 + 24 * c); else for (c = b = 0; c < E.length; ++c) {
                var d = b + E[c] * Math.PI * 2;
                a.fillStyle = uc[c + 1];
                a.beginPath();
                a.moveTo(100, 140);
                a.arc(100, 140, 80, b, d, !1);
                a.fill();
                b = d
            }
        }
    }

    function vc(a) {
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

    function wc(a) {
        if (null == a || 0 == a.length)return null;
        if (!ra.hasOwnProperty(a)) {
            var c = new Image;
            if (":" == a[0])c.src = a.slice(1); else if ("%" == a[0]) {
                if (!d.MC || !d.MC.getSkinInfo)return null;
                var b = d.MC.getSkinInfo("skin_" + a.slice(1));
                if (null == b)return null;
                c.src = d.ASSETS_ROOT + "skins/premium/" + b.url
            }
            ra[a] = c
        }
        return 0 != ra[a].width && ra[a].complete ? ra[a] : null
    }

    function qb(a, c, b, d, e) {
        this.Q = a;
        this.x = c;
        this.y = b;
        this.d = d;
        this.b = e
    }

    function ea(a, c, b, d, e, f) {
        this.id = a;
        this.l = this.x = c;
        this.m = this.y = b;
        this.k = this.size = d;
        this.color = e;
        this.a = [];
        this.R();
        this.q(f)
    }

    function oc(a) {
        for (a = a.toString(16); 6 > a.length;)a = "0" + a;
        return "#" + a
    }

    function Oa(a, c, b, d) {
        a && (this.n = a);
        c && (this.N = c);
        this.P = !!b;
        d && (this.o = d)
    }

    function xc(a) {
        for (var c = a.length, b, d; 0 < c;)d = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[d], a[d] = b
    }

    function da(a, c) {
        var b = "1" == e("#helloContainer").attr("data-has-account-data");
        e("#helloContainer").attr("data-has-account-data", "1");
        if (null == c && d.localStorage[Z]) {
            var s = JSON.parse(d.localStorage[Z]);
            s.xp = a.xp;
            s.xpNeeded = a.xpNeeded;
            s.level = a.level;
            d.localStorage[Z] = JSON.stringify(s)
        }
        if (b) {
            var h = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0], b = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0], s = e(".agario-profile-panel .progress-bar-star").first().text();
            if (s != a.level)da({xp: b, xpNeeded: b, level: s}, function () {
                e(".agario-profile-panel .progress-bar-star").text(a.level);
                e(".agario-exp-bar .progress-bar").css("width", "100%");
                e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e(".progress-bar-star").removeClass("animated tada")
                });
                setTimeout(function () {
                    e(".agario-exp-bar .progress-bar-text").text(a.xpNeeded + "/" + a.xpNeeded + " XP");
                    da({xp: 0, xpNeeded: a.xpNeeded, level: a.level}, function () {
                        da(a, c)
                    })
                }, 1E3)
            }); else {
                var f = Date.now(), p = function () {
                    var b;
                    b = (Date.now() - f) / 1E3;
                    b = 0 > b ? 0 : 1 < b ? 1 : b;
                    b = b * b * (3 - 2 * b);
                    e(".agario-exp-bar .progress-bar-text").text(~~(h + (a.xp - h) * b) + "/" + a.xpNeeded + " XP");
                    e(".agario-exp-bar .progress-bar").css("width", (88 * (h + (a.xp - h) * b) / a.xpNeeded).toFixed(2) +
                        "%");
                    1 > b ? d.requestAnimationFrame(p) : c && c()
                };
                d.requestAnimationFrame(p)
            }
        } else e(".agario-profile-panel .progress-bar-star").text(a.level), e(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%"), c && c()
    }

    function Wb(a) {
        "string" == typeof a && (a = JSON.parse(a));
        d.localStorage[Z] = JSON.stringify(a);
        F = a.authToken;
        var c = a.name, c = c.substring(0, c.indexOf(" "));
        e(".agario-profile-name").text(c);
        Jb();
        da({xp: a.xp, xpNeeded: a.xpNeeded, level: a.level});
        e("#helloContainer").attr("data-logged-in", "1")
    }

    function yc(a) {
        a = a.split("\n");
        Wb({name: a[0], fbid: a[1], authToken: a[2], expires: 1E3 * +a[3], level: +a[4], xp: +a[5], xpNeeded: +a[6]})
    }

    function rb(a) {
        if ("connected" == a.status && +d.localStorage.wannaLogin) {
            var c = a.authResponse.accessToken;
            null == c || "undefined" == c || "" == c ? (3 > Xb && (Xb++, d.facebookRelogin()), d.logout()) : (d.localStorage.fbTokenCache = c, delete d.localStorage.wannaLogin, console.log("doLogin because fb logged in"), d.MC.doLoginWithFB(c), d.FB.api("/me/picture?width=180&height=180", function (a) {
                d.localStorage.fbPictureCache = a.data.url;
                e(".agario-profile-picture").attr("src", a.data.url)
            }), e("#helloContainer").attr("data-logged-in", "1"), null != F ? d.checkSocialAPIToken(a) : d.getSocialAPIToken())
        }
    }
    /**
     * @author nguyenvanduocit
     * @type {number}
     */
    var currenConnecttTry = 0;
    var maxConnectRetry = 50;
    function Db(a) {
        la(":party");
        e("#helloContainer").attr("data-party-state", "4");
        a = decodeURIComponent(a).replace(/.*#/gim, "");
        sb("#" + d.encodeURIComponent(a));
        e.ajax(ja + "getToken", {
            error: function () {
                e("#helloContainer").attr("data-party-state", "6")
            }, success: function (c) {
                c = c.split("\n");
                /**
                 * @author nguyenvanduocit
                 */
                var wantedIp = window.getWantedIp();
                if(wantedIp && wantedIp !== c[0].trim()){
                    console.log('Found ',c[0],", Wanted : ",wantedIp );
                    if(currenConnecttTry <= maxConnectRetry){
                        currenConnecttTry++;
                        AgarBot.pubsub.trigger('findServer:retry', {time:currenConnecttTry});
                        setTimeout(function(){Db(a);}, 2e3);
                    }else{
                        AgarBot.pubsub.trigger('findServer:ipNotFound');
                    }
                }else{
                    e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                    e("#helloContainer").attr("data-party-state", "5");
                    la(":party");
                    cb("ws://" + c[0], a)
                }
            }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: a
        })
    }

    function sb(a) {
        d.history && d.history.replaceState && d.history.replaceState({}, d.document.title, a)
    }

    function nc(a, c) {
        var b = -1 != C.indexOf(a.id), d = -1 != C.indexOf(c.id), e = 30 > c.size;
        b && e && ++jb;
        e || !b || d || c.U & 32 || ++La
    }

    function Yb(a) {
        a = ~~a;
        var c = (a % 60).toString();
        a = (~~(a / 60)).toString();
        2 > c.length && (c = "0" + c);
        return a + ":" + c
    }

    function zc() {
        if (null == y)return 0;
        for (var a = 0; a < y.length; ++a)if (-1 != C.indexOf(y[a].id))return a + 1;
        return 0
    }

    function pc() {
        e(".stats-food-eaten").text(jb);
        e(".stats-time-alive").text(Yb((nb - lb) / 1E3));
        e(".stats-leaderboard-time").text(Yb(mb));
        e(".stats-highest-mass").text(~~(N / 100));
        e(".stats-cells-eaten").text(La);
        e(".stats-top-position").text(0 == Y ? ":(" : Y);
        var a = document.getElementById("statsGraph");
        if (a) {
            var c = a.getContext("2d"), b = a.width, a = a.height;
            c.clearRect(0, 0, b, a);
            if (2 < z.length) {
                for (var d = 200, h = 0; h < z.length; h++)d =
                    Math.max(z[h], d);
                c.lineWidth = 3;
                c.lineCap = "round";
                c.lineJoin = "round";
                c.strokeStyle = kb;
                c.fillStyle = kb;
                c.beginPath();
                c.moveTo(0, a - z[0] / d * (a - 10) + 10);
                for (h = 1; h < z.length; h += Math.max(~~(z.length / b), 1)) {
                    for (var f = h / (z.length - 1) * b, p = [], g = -20; 20 >= g; ++g)0 > h + g || h + g >= z.length || p.push(z[h + g]);
                    p = p.reduce(function (a, c) {
                            return a + c
                        }) / p.length / d;
                    c.lineTo(f, a - p * (a - 10) + 10)
                }
                c.stroke();
                c.globalAlpha = .5;
                c.lineTo(b, a);
                c.lineTo(0, a);
                c.fill();
                c.globalAlpha = 1
            }
        }
    }

    var B = {};
    (function () {
        var a = d.location.search;
        "?" == a.charAt(0) &&
        (a = a.slice(1));
        for (var a = a.split("&"), c = 0; c < a.length; c++) {
            var b = a[c].split("=");
            B[b[0]] = b[1]
        }
    })();
    "fb" in B || "miniclip" in B || "http:" == d.location.protocol || (d.location.href = "http:" + d.location.href.substring(d.location.protocol.length));
    d.MC = function () {
    };
    if (void 0 != d.EnvConfig) {
        var L = d.EnvConfig;
        d.EnvConfig = L
    }
    if (!d.agarioNoInit) {
        var tb = d.location.protocol, db = "https:" == tb;
        B.master && (L.master_url = B.master);
        var ja = tb + "//" + L.master_url + "/", Qa = d.navigator.userAgent;
        if (-1 != Qa.indexOf("Android"))d.ga && d.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function () {
            d.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
        }, 1E3); else if (-1 != Qa.indexOf("iPhone") || -1 != Qa.indexOf("iPad") || -1 != Qa.indexOf("iPod"))d.ga && d.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function () {
            d.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
        }, 1E3); else {
            //@author nguyenvanduocit
            var Sa, f, P, m, q, ia = null, r = null, v = 0, w = 0, C = [], k = [], M = {}, x = [], ca = [], y = [], ta = 0, ua = 0, Aa = -1, Ba = -1, rc = 0, H = 0, Ub = 0, K = null, Ha = 0, Ia = 0, Ja = 1E4, Ka = 1E4, g = 1, g2 = 1, A = null, ub = !0, Pa = !0, vb = !1, ib = !1, N = 0, Ma = !1, Zb = !1, oa = v = ~~((Ha + Ja) / 2), pa = w = ~~((Ia + Ka) / 2), qa = 1, T = "", E = null, Ra = !1, gb = !1, eb = 0, fb = 0, Fa = 0, Ga = 0, uc = ["#333333", "#FF3333", "#33FF33", "#3333FF"], ob = !1, na = !1, Lb = 0, F = null, S = 1, t = 1, ka = !1, Ua = 0, Vb = !0, hb = null, G = new Image,
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
            G.src = "/img/background.png";
            var xb = "ontouchstart" in d && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent), pb = new Image;
            pb.src = "/img/split.png";
            var $b = document.createElement("canvas");
            if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == $b || null == $b.getContext || null == d.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this"); else {
                var Ca = null;
                d.setNick = function (a) {
                    // @author nguyenvanduocit
                    firstStart = false;
                    originalName = a;
                    if (getPlayer().length == 0) {
                        lifeTimer = new Date();
                    }
                    d.ga && d.ga("send", "event", "Nick", a.toLowerCase());
                    Eb();
                    K = a;
                    Ob();
                    N = 0
                };
                d.setRegion = wa;
                var Xa = !0;
                d.setSkins = function (a) {
                    ub = a
                };
                d.setNames = function (a) {
                    Pa = a
                };
                d.setDarkTheme = function (a) {
                    Ma = a
                };
                d.setColors = function (a) {
                    vb = a
                };
                d.setShowMass = function (a) {
                    Zb = a
                };
                d.spectate = function () {
                    K = null;
                    J(1);
                    Eb()
                };
                d.setGameMode = function (a) {
                    a != T && (":party" == T && e("#helloContainer").attr("data-party-state", "0"), la(a), ":party" != a && Q())
                };
                d.setAcid = function (a) {
                    ob = a
                };
                e.get(tb + "//gc.agar.io", function (a) {
                    var c = a.split(" ");
                    a = c[0];
                    c = c[1] || "";
                    -1 == ["UA"].indexOf(a) && ac.push("ussr");
                    sa.hasOwnProperty(a) && ("string" == typeof sa[a] ? A || wa(sa[a]) : sa[a].hasOwnProperty(c) && (A || wa(sa[a][c])))
                }, "text");
                var Cb = function (a) {
                    return a in B ? +B[a] : null != d.localStorage ? (null == d.localStorage[a] && (d.localStorage[a] = 0 + ~~(100 * Math.random())), +d.localStorage[a]) : 0
                }, R = "debugads" in B, xa = {}, bb = !0, hc = 0, Fb = !1, u = {aa: [], ab: [], ac: []};
                d.adSlots = u;
                d.getABGroup = Za;
                d.refreshAd = Ya;
                var ya = {w: !1};
                d.agarAdModule = ya;
                var $a = !1, ab = null, ba = function (a) {
                    a.defineSlot = function (a, b, e) {
                        var h = d.googletag;
                        return {type: "dfpads", data: h.defineSlot(a, b, e).addService(h.pubads())}
                    };
                    return a
                }({});
                d.googleAdsModule = ba;
                var Wa = function (a) {
                    for (var c = 0; c < a.length; c++)"type" in a[c] && "rubicon" != a[c].type || (R && console.log("Rubicon: destroying:" +
                        a[c].data.id, a[c]), aa.W(a[c].data.id))
                }, aa = function (a) {
                    a.F = function (a, b, d) {
                        var e = "https:" == document.location.protocol ? "https:" : "http:";
                        b = b.split("x");
                        var f = a + "-fif", g = document.createElement("iframe");
                        g.style.cssText = "width: " + b[0] + "px; height: " + b[1] + "px; border: 0; margin: 0; padding: 0; overflow: hidden;";
                        g.setAttribute("scrolling", "no");
                        g.src = "about:blank";
                        g.id = f;
                        document.getElementById(a).appendChild(g);
                        a = g.contentWindow ? g.contentWindow.document : g.contentDocument.document;
                        a.open().write("<html>\n<head>\n<script type='text/javascript'>inDapIF=true;\n\x3c/script>\n</head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Smart Tag --\x3e\n<script type='text/javascript'>\nrp_account = '" +
                            d.acct + "';\nrp_site = '" + d.site + "';\nrp_zonesize  = '" + d.zone + "-" + d.size + "';\nrp_adtype = 'js';\nrp_kw = '" + d.kw + "';\nrp_visitor = " + d.visitor + ";\nrp_inventory = " + d.inventory + ";\n\x3c/script>\n<script type='text/javascript' src= " + e + "//ads.rubiconproject.com/ad/" + d.acct + '.js">\x3c/script>\n</body>\n</html>');
                        a.close()
                    };
                    a.defineSlot = function (a, b, f) {
                        b = {type: "rubicon", data: {id: f, size: b}};
                        a = e.extend({}, a);
                        a.kw = d.rpx_params.kw;
                        a.visitor = JSON.stringify(d.rpx_params.visitor);
                        a.inventory = JSON.stringify(d.rpx_params.inventory);
                        b.data.json = a;
                        return b
                    };
                    a.la = function (a, b, d) {
                        var h = a + "-fif", f = e("#" + h);
                        null != f ? f.remove() : console.log("couldn't find element", f, h);
                        this.F(a, b, d)
                    };
                    a.W = function (a) {
                        a += "-fif";
                        var b = e("#" + a);
                        null != b ? b.remove() : console.log("couldn't find element", b, a)
                    };
                    a.ma = function (a, b, d) {
                        this.F(a, b, d)
                    };
                    return a
                }({});
                d.rubiconAds = aa;
                var sa = {
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
                d.connect = cb;
                var Ea = 500, Pb = -1, Qb = -1;
                d.refreshPlayerInfo = function () {
                    J(253)
                };
                var D = null, I = 1, Na = null, Ab = function () {
                    var a = Date.now(), c = 1E3 / 60;
                    return function () {
                        d.requestAnimationFrame(Ab);
                        var b = Date.now(), e = b - a;
                        e > c && (a = b - e % c, !fa() || 240 > Date.now() - Lb ? Rb() : console.warn("Skipping draw"), Ac())
                    }
                }(), ga = {}, ac = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"), Bc = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"), ra = {};
                qb.prototype = {Q: null, x: 0, y: 0, d: 0, b: 0};
                ea.prototype = {
                    id: 0,
                    a: null,
                    name: null,
                    i: null,
                    I: null,
                    x: 0,
                    y: 0,
                    size: 0,
                    l: 0,
                    m: 0,
                    k: 0,
                    B: 0,
                    C: 0,
                    h: 0,
                    U: 0,
                    L: 0,
                    X: 0,
                    u: !1,
                    c: !1,
                    g: !1,
                    M: !0,
                    T: 0,
                    J: null,
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
                        return this.L;
                    },
                    S: function () {
                        var a;
                        for (a = 0; a < x.length; a++)if (x[a] == this) {
                            x.splice(a, 1);
                            break
                        }
                        delete M[this.id];
                        a = k.indexOf(this);
                        -1 != a && (ib = !0, k.splice(a, 1));
                        a = C.indexOf(this.id);
                        -1 != a && C.splice(a, 1);
                        this.u = !0;
                        0 < this.T && ca.push(this)
                    },
                    f: function () {
                        return Math.max(~~(.3 * this.size), 24)
                    },
                    q: function (a) {
                        if (this.name = a)null == this.i ? this.i = new Oa(this.f(), "#FFFFFF", !0, "#000000") : this.i.G(this.f()), this.i.r(this.name)
                    },
                    R: function () {
                        for (var a = this.v(); this.a.length > a;) {
                            var c = ~~(Math.random() * this.a.length);
                            this.a.splice(c, 1)
                        }
                        for (0 == this.a.length && 0 < a && this.a.push(new qb(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < a;)c = ~~(Math.random() * this.a.length), c = this.a[c], this.a.push(new qb(this, c.x, c.y, c.d, c.b))
                    },
                    v: function () {
                        var a = 10;
                        20 > this.size && (a = 0);
                        this.c && (a = 30);
                        var c = this.size;
                        this.c || (c *= g);
                        c *= I;
                        return ~~Math.max(c, a)
                    },
                    ea: function () {
                        this.R();
                        for (var a = this.a, c = a.length, b = 0; b < c; ++b) {
                            var d = a[(b - 1 + c) % c].b, e = a[(b + 1) % c].b;
                            a[b].b += (Math.random() - .5) * (this.g ? 3 : 1);
                            a[b].b *= .7;
                            10 < a[b].b && (a[b].b = 10);
                            -10 > a[b].b && (a[b].b = -10);
                            a[b].b = (d + e + 8 * a[b].b) / 10
                        }
                        for (var f = this, p = this.c ? 0 : (this.id / 1E3 + H / 1E4) % (2 * Math.PI), b = 0; b < c; ++b) {
                            var n = a[b].d, d = a[(b - 1 + c) % c].d, e = a[(b + 1) % c].d;
                            if (15 < this.size && null != ia &&
                                20 < this.size * g && 0 < this.id) {
                                var k = !1, l = a[b].x, O = a[b].y;
                                ia.fa(l - 5, O - 5, 10, 10, function (a) {
                                    a.Q != f && 25 > (l - a.x) * (l - a.x) + (O - a.y) * (O - a.y) && (k = !0)
                                });
                                !k && (a[b].x < Ha || a[b].y < Ia || a[b].x > Ja || a[b].y > Ka) && (k = !0);
                                k && (0 < a[b].b && (a[b].b = 0), a[b].b -= 1)
                            }
                            n += a[b].b;
                            0 > n && (n = 0);
                            n = this.g ? (19 * n + this.size) / 20 : (12 * n + this.size) / 13;
                            a[b].d = (d + e + 8 * n) / 10;
                            d = 2 * Math.PI / c;
                            e = this.a[b].d;
                            this.c && 0 == b % 2 && (e += 5);
                            a[b].x = this.x + Math.cos(d * b + p) * e;
                            a[b].y = this.y + Math.sin(d * b + p) * e
                        }
                    },
                    K: function () {
                        if (0 >= this.id)return 1;
                        var a;
                        a = (H - this.L) / 120;
                        a = 0 >
                        a ? 0 : 1 < a ? 1 : a;
                        var c = 0 > a ? 0 : 1 < a ? 1 : a;
                        this.f();
                        if (this.u && 1 <= c) {
                            var b = ca.indexOf(this);
                            -1 != b && ca.splice(b, 1)
                        }
                        this.x = a * (this.B - this.l) + this.l;
                        this.y = a * (this.C - this.m) + this.m;
                        this.size = c * (this.h - this.k) + this.k;
                        return c
                    },
                    H: function () {
                        return 0 >= this.id ? !0 : this.x + this.size + 40 < v - m / 2 / g || this.y + this.size + 40 < w - q / 2 / g || this.x - this.size - 40 > v + m / 2 / g || this.y - this.size - 40 > w + q / 2 / g ? !1 : !0
                    },
                    p: function (a) {
                        if (this.H()) {
                            ++this.T;
                            var c = 0 < this.id && !this.c && !this.g && .4 > g;
                            5 > this.v() && 0 < this.id && (c = !0);
                            if (this.M && !c)for (var b = 0; b < this.a.length; b++)this.a[b].d = this.size;
                            this.M = c;
                            a.save();
                            this.X = H;
                            b = this.K();
                            this.u && (a.globalAlpha *= 1 - b);
                            a.lineWidth = 10;
                            a.lineCap = "round";
                            a.lineJoin = this.c ? "miter" : "round";
                            vb ? (a.fillStyle = "#FFFFFF", a.strokeStyle = "#AAAAAA") : (b = vc(this.J) || this.color, ub && ":teams" != T || (b = this.color), a.fillStyle = b, a.strokeStyle = b);
                            if (c)a.beginPath(), a.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1); else {
                                this.ea();
                                a.beginPath();
                                var e = this.v();
                                a.moveTo(this.a[0].x, this.a[0].y);
                                for (b = 1; b <= e; ++b) {
                                    var h = b % e;
                                    a.lineTo(this.a[h].x, this.a[h].y)
                                }
                            }
                            a.closePath();
                            e = this.name.toLowerCase();
                            !this.g && ub && ":teams" != T ? (b = wc(this.J)) || (-1 != ac.indexOf(e) ? (ga.hasOwnProperty(e) || (ga[e] = new Image, ga[e].src = d.ASSETS_ROOT + "skins/" + e + ".png"), b = 0 != ga[e].width && ga[e].complete ? ga[e] : null) : b = null) : b = null;
                            h = b;
                            c || a.stroke();
                            a.fill();
                            null != h && (a.save(), a.clip(), b = Math.max(this.size, this.h), a.drawImage(h, this.x - b - 5, this.y - b - 5, 2 * b + 10, 2 * b + 10), a.restore());
                            (vb || 15 < this.size) && !c && (a.strokeStyle = "#000000", a.globalAlpha *= .1, a.stroke());
                            a.globalAlpha = 1;
                            b = -1 != k.indexOf(this);
                            c = ~~this.y;
                            if (0 != this.id && (Pa || b) && this.name && this.i && (null == h || -1 == Bc.indexOf(e))) {
                                h = this.i;
                                h.r(this.name);
                                h.G(this.f());
                                e = 0 >= this.id ? 1 : Math.ceil(10 * g) / 10;
                                h.V(e);
                                var h = h.D(), f = ~~(h.width / e), p = ~~(h.height / e);
                                a.drawImage(h, ~~this.x - ~~(f / 2), c - ~~(p / 2), f, p);
                                c += h.height / 2 / e + 4
                            }
                            0 < this.id && Zb && (b || 0 == k.length && (!this.c || this.g) && 20 < this.size) && (null == this.I && (this.I = new Oa(this.f() / 2, "#FFFFFF", !0, "#000000")), b = this.I, b.G(this.f() / 2), b.r(~~(this.size * this.size / 100)), e = Math.ceil(10 * g) / 10,
                                b.V(e), h = b.D(), f = ~~(h.width / e), p = ~~(h.height / e), a.drawImage(h, ~~this.x - ~~(f / 2), c - ~~(p / 2), f, p));
                            a.restore()
                        }
                    }
                };
                Oa.prototype = {
                    t: "",
                    N: "#000000",
                    P: !1,
                    o: "#000000",
                    n: 16,
                    j: null,
                    O: null,
                    e: !1,
                    s: 1,
                    G: function (a) {
                        this.n != a && (this.n = a, this.e = !0)
                    },
                    V: function (a) {
                        this.s != a && (this.s = a, this.e = !0)
                    },
                    setStrokeColor: function (a) {
                        this.o != a && (this.o = a, this.e = !0)
                    },
                    r: function (a) {
                        a != this.t && (this.t = a, this.e = !0)
                    },
                    D: function () {
                        null == this.j && (this.j = document.createElement("canvas"), this.O = this.j.getContext("2d"));
                        if (this.e) {
                            this.e = !1;
                            var a = this.j, c = this.O, b = this.t, d = this.s, e = this.n, f = e + "px Ubuntu";
                            c.font = f;
                            var g = ~~(.2 * e);
                            a.width = (c.measureText(b).width + 6) * d;
                            a.height = (e + g) * d;
                            c.font = f;
                            c.scale(d, d);
                            c.globalAlpha = 1;
                            c.lineWidth = 3;
                            c.strokeStyle = this.o;
                            c.fillStyle = this.N;
                            this.P && c.strokeText(b, 3, e - g / 2);
                            c.fillText(b, 3, e - g / 2)
                        }
                        return this.j
                    }
                };
                Date.now || (Date.now = function () {
                    return (new Date).getTime()
                });
                (function () {
                    for (var a = ["ms", "moz", "webkit", "o"], c = 0; c < a.length && !d.requestAnimationFrame; ++c)d.requestAnimationFrame = d[a[c] + "RequestAnimationFrame"], d.cancelAnimationFrame = d[a[c] + "CancelAnimationFrame"] || d[a[c] + "CancelRequestAnimationFrame"];
                    d.requestAnimationFrame || (d.requestAnimationFrame = function (a) {
                        return setTimeout(a, 1E3 / 60)
                    }, d.cancelAnimationFrame = function (a) {
                        clearTimeout(a)
                    })
                })();
                var gc = {
                    init: function (a) {
                        function c(a) {
                            a < d && (a = d);
                            a > f && (a = f);
                            return ~~((a - d) / 32)
                        }

                        function b(a) {
                            a < e && (a = e);
                            a > g && (a = g);
                            return ~~((a - e) / 32)
                        }

                        var d = a.ca, e = a.da, f = a.$, g = a.ba, n = ~~((f - d) / 32) + 1, k = ~~((g - e) / 32) + 1, l = Array(n * k);
                        return {
                            Z: function (a) {
                                var d = c(a.x) + b(a.y) * n;
                                null ==
                                l[d] ? l[d] = a : Array.isArray(l[d]) ? l[d].push(a) : l[d] = [l[d], a]
                            }, fa: function (a, d, e, f, h) {
                                var g = c(a), p = b(d);
                                a = c(a + e);
                                d = b(d + f);
                                if (0 > g || g >= n || 0 > p || p >= k)debugger;
                                for (; p <= d; ++p)for (f = g; f <= a; ++f)if (e = l[f + p * n], null != e)if (Array.isArray(e))for (var m = 0; m < e.length; m++)h(e[m]); else h(e)
                            }
                        }
                    }
                }, Mb = function () {
                    var a = new ea(0, 0, 0, 32, "#ED1C24", ""), c = document.createElement("canvas");
                    c.width = 32;
                    c.height = 32;
                    var b = c.getContext("2d");
                    return function () {
                        0 < k.length && (a.color = k[0].color, a.q(k[0].name));
                        b.clearRect(0, 0, 32, 32);
                        b.save();
                        b.translate(16, 16);
                        b.scale(.4, .4);
                        a.p(b);
                        b.restore();
                        var d = document.getElementById("favicon"), e = d.cloneNode(!0);
                        e.setAttribute("href", c.toDataURL("image/png"));
                        d.parentNode.replaceChild(e, d)
                    }
                }();
                e(function () {
                    Mb()
                });
                var Z = "loginCache3", Xb = 0;
                d.checkSocialAPIToken = function (a) {
                    e.ajax(ja + "checkToken", {
                        error: function () {
                            F = null;
                            rb(a)
                        }, success: function (a) {
                            a = a.split("\n");
                            da({level: +a[0], xp: +a[1], xpNeeded: +a[2]})
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: F
                    })
                };
                d.getSocialAPIToken = function () {
                    e.ajax(ja + "facebookLogin", {
                        error: function () {
                            F = null;
                            e("#helloContainer").attr("data-logged-in", "0")
                        },
                        success: yc,
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
                            rb(a)
                        }, {scope: "public_profile, email"})
                    }

                    d.FB.init({appId: L.fb_app_id, cookie: !0, xfbml: !0, status: !0, version: "v2.2"});
                    d.FB.Event.subscribe("auth.statusChange", function (c) {
                        console.log("window.localStorage['wannaLogin'] = " + d.localStorage.wannaLogin);
                        +d.localStorage.wannaLogin && ("connected" == c.status ? rb(c) : (console.log("user not connected, facebookLogin()"), a()))
                    });
                    d.facebookRelogin = a;
                    d.facebookLogin = a
                };
                d.logout = function () {
                    F = null;
                    e("#helloContainer").attr("data-logged-in", "0");
                    e("#helloContainer").attr("data-has-account-data", "0");
                    delete d.localStorage.wannaLogin;
                    delete d.localStorage[Z];
                    delete d.localStorage.fbPictureCache;
                    delete d.localStorage.fbTokenCache;
                    Q();
                    d.MC.doLogout()
                };
                d.gameServerLogin = function () {
                    if (+d.localStorage.wannaLogin) {
                        var a = d.localStorage[Z];
                        a && Wb(a);
                        d.localStorage.fbPictureCache && e(".agario-profile-picture").attr("src", d.localStorage.fbPictureCache)
                    }
                };
                e(function () {
                    d.localStorage[Z] && (d.facebookLogin(), d.gameServerLogin())
                });
                var Ac = function () {
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

                    for (var c = new ea(-1, 0, 0, 32, "#5bc0de", ""), b = new ea(-1, 0, 0, 32, "#5bc0de", ""), d = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), f = [], g = 0; g < d.length; ++g) {
                        var k = g / d.length * 12, n = 30 * Math.sqrt(g / d.length);
                        f.push(new ea(-1, Math.cos(k) * n, Math.sin(k) * n, 10, d[g], ""))
                    }
                    xc(f);
                    var m = document.createElement("canvas");
                    m.getContext("2d");
                    m.width = m.height = 70;
                    a(b, m, "", 26, "#ebc0de");
                    return function () {
                        e(".cell-spinner").filter(":visible").each(function () {
                            var b = e(this), d = Date.now(), f = this.width, g = this.height, h = this.getContext("2d");
                            h.clearRect(0, 0, f, g);
                            h.save();
                            h.translate(f / 2, g / 2);
                            for (var k = 0; 10 > k; ++k)h.drawImage(m, (.1 * d + 80 * k) % (f + 140) - f / 2 - 70 - 35, g / 2 * Math.sin((.001 * d + k) % Math.PI * 2) - 35, 70, 70);
                            h.restore();
                            (b = b.attr("data-itr")) && (b = ma(b));
                            a(c, this, b || "", +e(this).attr("data-size"), "#5bc0de")
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
                    la(":party");
                    U = function (a) {
                        sb("/#" + d.encodeURIComponent(a));
                        e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                        e("#helloContainer").attr("data-party-state", "1")
                    };
                    Q()
                };
                d.joinParty = Db;
                d.cancelParty = function () {
                    sb("/");
                    e("#helloContainer").attr("data-party-state", "0");
                    la("");
                    Q()
                };
                var z = [], jb = 0, kb = "#000000", $ = !1, Da = !1, lb = 0, nb = 0, mb = 0, La = 0, Y = 0, Nb = !0;
                setInterval(function () {
                    Da && z.push(Tb() / 100)
                }, 1E3 / 60);
                setInterval(function () {
                    var a = zc();
                    0 != a && (++mb, 0 == Y && (Y = a), Y = Math.min(Y, a))
                }, 1E3);
                d.closeStats = function () {
                    $ = !1;
                    e("#stats").hide();
                    var a = u.ab;
                    Va(a);
                    Wa(a);
                    va(0)
                };
                d.setSkipStats = function (a) {
                    Nb = !a
                };
                e(function () {
                    e(bc);
                    "MAsyncInit" in d && d.MAsyncInit()
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
        Aa = x;
        Ba = y;
    };
    window.getDarkBool = function() {
        return Ma;
    };
    window.getMapStartX = function() {
        return Ha;
    };
    window.getMapStartY = function() {
        return Ia;
    };
    window.getMapEndY = function() {
        return Ka;
    };
    window.getMapEndX = function() {
        return Ja;
    };
    /**
     * The game's current mode. (":ffa", ":experimental", ":teams". ":party")
     * @return {[type]} [description]
     */
    window.getMode = function() {
        return T;
    };
    /**
     * Returns an array with all the player's cells.
     * @return Player's cells
     */
    window.getPlayer = function() {
        return k;
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
        return M;
    };
    /**
     * A timestamp since the last time the server sent any data.
     * @return Last update timestamp
     */
    window.getLastUpdate = function() {
        return H;
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
        return v;
    };
    window.getY = function() {
        return w;
    };
    /**
     * The canvas' width.
     * @return Integer Width
     */
    window.getWidth = function() {
        return m;
    };
    /**
     * The canvas' height
     * @return Integer Height
     */
    window.getHeight = function() {
        return q;
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
        return ta;
    };
    /**
     * The Y location of the mouse.
     * @return Integer Y
     */
    window.getMouseY = function() {
        return ua;
    };
    window.getPointX = function() {
        return Aa;
    };

    window.getPointY = function() {
        return Ba;
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