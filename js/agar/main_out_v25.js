(function (d, e, AgarBot, app) {
    function lc() {
        Ua = !0;
        K.google.da();
        K.V.init();
        zb();
        setInterval(zb, 18E4);
        Q = Va = document.getElementById("canvas");
        f = Q.getContext("2d");
        Q.oncontextmenu = function(e) {
            e.preventDefault();
        };
        Q.onmousedown = function (a) {
            //@author nguyenvanduocit
            if(a.which ==2){
                splitPlayer(true);
            }else if(a.which == 3){
                a.preventDefault();
                ejectMass(true);
                return;
            }

            if (Ab) {
                var c = a.clientX - (5 + p / 5 / 2), b = a.clientY - (5 + p / 5 / 2);
                if (Math.sqrt(c * c + b * b) <= p / 5 / 2) {
                    ha();
                    L(17);
                    return
                }
            }
            ua = 1 * a.clientX;
            va = 1 * a.clientY;
            Wa();
            ha()
        };
        Q.onmousemove = function (a) {
            ua = 1 * a.clientX;
            va = 1 * a.clientY;
            Wa()
        };
        Q.onmouseup = function () {
        };
        /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", Bb, !1) : document.body.onmousewheel = Bb;
        var a = !1, c = !1, b = !1;
        d.onkeydown = function (d) {
            32 != d.keyCode || a || ("nick" != d.target.id && d.preventDefault(), ha(), L(17), a = !0);
            81 != d.keyCode || c || (L(18), c = !0);
            87 != d.keyCode || b || (ha(), L(21), b = !0);
            27 == d.keyCode && (d.preventDefault(), wa(300))
        };
        d.onkeyup = function (d) {
            32 == d.keyCode && (a = !1);
            87 == d.keyCode && (b = !1);
            81 == d.keyCode && c && (L(19), c = !1)
        };
        //@author nguyenvanduocit
        d.onblur = function () {
            //L(19);
            //b = c = a = !1
        };
        d.onresize = Cb;
        d.requestAnimationFrame(Db);
        setInterval(ha, 40);
        C && e("#region").val(C);
        Eb();
        xa(e("#region").val());
        0 == Xa && C && R();
        ya.ABGroupDFP = Fb("AB9");
        ya.ABGroupRubicon = Fb("AB10_Rubicon");
        d.location.search.indexOf("fb");
        za.w = d.hasBottomAd;
        S && console.log("Init ads");
        //@author nguyenvanduocit
        //mc();
        //nc();
        S && console.log("Ads initted");
        S && console.log("Your group: ", Aa() ? "rubicon" : "dfp");
        //@author nguyenvanduocit
        //oc();
        wa(0);
        Cb();
        d.location.hash && 6 <= d.location.hash.length && Gb(d.location.hash)
    }

    function Bb(a) {
        a.preventDefault();
        T *= Math.pow(.9, a.wheelDelta / -120 || a.detail || 0);
        /**
         * @author nguyenvanduocit
         */
        .01 > T && (T = .01);
        T > 4 / m && (T = 4 / m)
    }

    function pc() {
        if (.4 > m)ia = null; else {
            for (var a = Number.POSITIVE_INFINITY, c = Number.POSITIVE_INFINITY, b = Number.NEGATIVE_INFINITY, d = Number.NEGATIVE_INFINITY, g = 0; g < x.length; g++) {
                var e = x[g];
                !e.H() || e.M || 20 >= e.size * m || (a = Math.min(e.x - e.size, a), c = Math.min(e.y - e.size, c), b = Math.max(e.x + e.size, b), d = Math.max(e.y + e.size, d))
            }
            ia = qc.init({ia: a - 10, ja: c - 10, fa: b + 10, ha: d + 10, ta: 2, ua: 4});
            for (g = 0; g < x.length; g++)if (e = x[g], e.H() && !(20 >= e.size * m))for (a = 0; a < e.a.length; ++a)c = e.a[a].x, b = e.a[a].y, c < u - p / 2 / m || b < v - q / 2 / m || c > u + p / 2 / m || b > v + q / 2 / m || ia.ca(e.a[a])
        }
    }

    function Wa() {
        //@author nguyenvanduocit
        var tmp_Ba = (ua - p / 2) / m + u;
        var tmp_Ca = (va - q / 2) / m + v;
        setPoint(tmp_Ba, tmp_Ca);
    }

    function zb() {
        null == Da &&
        (Da = {}, e("#region").children().each(function () {
            var a = e(this), c = a.val();
            c && (Da[c] = a.text())
        }));
        e.get(ja + "info", function (a) {
            var c = {}, b;
            for (b in a.regions) {
                var d = b.split(":")[0];
                c[d] = c[d] || 0;
                c[d] += a.regions[b].numPlayers
            }
            for (b in c)e('#region option[value="' + b + '"]').text(Da[b] + " (" + c[b] + " players)")
        }, "json")
    }

    function Hb() {
        e("#adsBottom").hide();
        e("#overlays").hide();
        e("#stats").hide();
        e("#mainPanel").hide();
        aa = ka = !1;
        Eb();
        var a = s.aa;
        Ya(a);
        Za(a);
        a = s.ac;
        Ya(a);
        Za(a)
    }

    function xa(a) {
        a && (a == C ? e(".btn-needs-server").prop("disabled", !1) : (e("#region").val() != a && e("#region").val(a), C = d.localStorage.location = a, e(".region-message").hide(), e(".region-message." + a).show(), e(".btn-needs-server").prop("disabled", !1), Ua && R()))
    }

    function wa(a) {
        ka || aa || (Ea ? e(".btn-spectate").prop("disabled", !0) : e(".btn-spectate").prop("disabled", !1), M = null, $a || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show(), e("#g728x90").hide(), e("#a728x90").show()), ab($a ? s.ac : s.aa), $a = !1, 1E3 > a && (w = 1), ka = !0, e("#mainPanel").show(), 0 < a ? e("#overlays").fadeIn(a) : e("#overlays").show())
    }

    function la(a) {
        e("#helloContainer").attr("data-gamemode", a);
        ma = a;
        e("#gamemode").val(a)
    }

    function Eb() {
        e("#region").val() ? d.localStorage.location = e("#region").val() : d.localStorage.location && e("#region").val(d.localStorage.location);
        e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
    }

    function U(a) {
        return d.i18n[a] || d.i18n_dict.en[a] || a
    }

    function oc() {
        var a = -1 != d.location.search.indexOf("fb"), a = Aa() && !a;
        googletag.cmd.push(function () {
            googletag.display("g300x250")
        });
        Ib && googletag.cmd.push(function () {
            googletag.display("g728x90")
        });
        a || (googletag.cmd.push(function () {
            googletag.display("s300x250")
        }), googletag.cmd.push(function () {
            googletag.display("a300x250")
        }), Ib && googletag.cmd.push(function () {
            googletag.display("a728x90")
        }))
    }

    function Aa() {
        return !(50 > bb("ABGroupRubicon"))
    }

    function bb(a) {
        return a in ya ? ya[a] : 0
    }

    function ab(a) {
        Jb(a);
        for (var c = 0; c < a.length; c++)if (!("type" in a[c] && "rubicon" != a[c].type)) {
            var b = a[c].data;
            S && console.log("Rubicon: refreshing:" + b.id);
            ba.F(b.id, b.size, b.json)
        }
    }

    function mc() {
        var a = {}, c = null, b = null, e = null, g = null, t = -1 != d.location.search.indexOf("fb"), k = Aa() && !t, Fa = za.w;
        t ? (a = "/53945695/agar_facebook/agar/300x250", e = "/53945695/agar_facebook/agar/300x250_Stats", g = "/53945695/agar_facebook/agar/300x250") : (g = "/116850162/300x250_init", c = "/116850162/728x90_init", a = "/116850162/300x250_login", e = "/116850162/300x250_stats", b = "/116850162/728x90_login");
        var f = d.googletag;
        f.cmd.push(function () {
            f.pubads().setTargeting("abtest", bb("ABGroupDFP") + "");
            s.ac.push(ca.defineSlot(g, [300, 250], "g300x250"));
            Fa && s.ac.push(ca.defineSlot(c, [728, 90], "g728x90"));
            k || (s.ab.push(ca.defineSlot(e, [300, 250], "s300x250")), s.aa.push(ca.defineSlot(a, [300, 250], "a300x250")), Fa && s.aa.push(ca.defineSlot(b, [728, 90], "a728x90")));
            f.pubads().enableSingleRequest();
            f.pubads().disableInitialLoad();
            f.enableServices();
            cb = !0;
            null != db && (console.log("refreshing from queue"), Jb(db))
        })
    }

    function Jb(a) {
        console.log("dfpInitialized=" + cb);
        cb || (console.log("queuing refresh"), db = a);
        for (var c = [], b = 0; b < a.length; b++)"type" in
        a[b] && "dfpads" != a[b].type ? console.log("trying to refresh a non dfp ad. continue") : (S && console.log("DFP: refreshing:" + a[b].data.A), c.push(a[b].data));
        0 >= c.length || !d.googletag || d.googletag.cmd.push(function () {
            eb && (eb = !1, setTimeout(function () {
                eb = !0
            }, 6E4 * rc), d.googletag && d.googletag.pubads && d.googletag.pubads().refresh && d.googletag.pubads().refresh(c))
        })
    }

    function Ya(a) {
        for (var c = [], b = 0; b < a.length; b++)"type" in a[b] && "dfpads" != a[b].type || (S && console.log("DFP: destroying:" + a[b].data.A), c.push(a[b].data));
        d.googletag && d.googletag.pubads && d.googletag.pubads().clear && d.googletag.pubads().clear(c)
    }

    function nc() {
        if (Aa()) {
            var a = {acct: 13694, site: 73068, zone: 346604, size: 15}, c = {
                acct: 13694,
                site: 73068,
                zone: 363786,
                size: 2
            };
            d.location.search.indexOf("fb");
            var b = za.w;
            s.ab.push(ba.defineSlot(a, "300x250", "s300x250"));
            s.aa.push(ba.defineSlot(a, "300x250", "a300x250"));
            b && s.aa.push(ba.defineSlot(c, "728x90", "a728x90"))
        }
    }
    /**
     * @author nguyenvanduocit
     * @type {number}
     */
    var currenConnecttTry = 0;
    var maxConnectRetry = 50;
    function Kb() {
        var a = ++Xa;
        console.log("Find " + C + ma);
        Lb();
        e.ajax(ja + "findServer", {
            error: function () {
                setTimeout(Kb, 3E4)
            }, success: function (c) {
                if (a == Xa) {
                    c.alert && alert(c.alert);
                    var b = c.ip;
                    void 0 != y.$ && (b = d.location.hostname + ":" + y.$);
                    fb("ws" + (gb ? "s" : "") + "://" + b, c.token)
                }
            }, dataType: "json", method: "POST", cache: !1, crossDomain: !0, data: (C + ma || "?") + "\n2200049715"
        })
    }

    function R() {
        Ua && C && (e("#connecting").show(), Kb())
    }

    function Lb() {
        if (r) {
            //nguyenvanduocit
            AgarBot.pubsub.trigger('game:disconnected');

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

    function fb(a, c) {
        Lb();
        D.ip && (a = "ws" + (gb ? "s" : "") + "://" + D.ip);
        if (null != V) {
            var b = V;
            V = function () {
                b(c)
            }
        }
        if (gb && !y.env_development && !y.env_local) {
            var d = a.split(":");
            a = "wss://ip-" + d[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +d[2]
        }
        E = [];
        l = [];
        N = {};
        x = [];
        da = [];
        A = [];
        F = G = null;
        O = 0;
        na = !1;
        console.log("Connecting to " + a);

        /**
         * @author nguyenvanduocit
         */
        serverIP = a;
        token = c;
        AgarBot.pubsub.trigger('Game:connect', {ip:serverIP, token:token});

        r = new WebSocket(a);
        r.binaryType = "arraybuffer";
        r.onopen = function () {
            var a;
            console.log("socket open");
            a = W(5);
            a.setUint8(0, 254);
            a.setUint32(1, 5, !0);
            X(a);
            a = W(5);
            a.setUint8(0, 255);
            a.setUint32(1, 2200049715, !0);
            X(a);
            a = W(1 + c.length);
            a.setUint8(0, 80);
            for (var b = 0; b < c.length; ++b)a.setUint8(b + 1, c.charCodeAt(b));
            X(a);
            Mb();
        };
        r.onmessage = sc;
        r.onclose = tc;
        r.onerror = function () {
            console.log("socket error")
        };
    }

    function W(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function X(a) {
        r.send(a.buffer)
    }

    function tc() {
        na && (Ga = 500);
        console.log("socket close");
        setTimeout(R, Ga);
        Ga *= 2;
    }

    function sc(a) {
        uc(new DataView(a.data))
    }

    function uc(a) {
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
                vc(a, b);
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
                l = [];
                E = [];
                break;
            case 21:
                hb = a.getInt16(b, !0);
                b += 2;
                ib = a.getInt16(b, !0);
                b += 2;
                jb || (jb = !0, Ha = hb, Ia = ib);
                break;
            case 32:
                E.push(a.getUint32(b, !0));
                b += 4;
                break;
            case 49:
                if (null != G)break;
                var e = a.getUint32(b, !0), b = b + 4;
                A = [];
                for (var g = 0; g < e; ++g) {
                    var t = a.getUint32(b, !0), b = b + 4;
                    A.push({id: t, name: c()})
                }
                Nb();
                //nguyenvanduocit
                if(Date.now() - lastLeaderBoardUpdate > 1000){
                    lastLeaderBoardUpdate = Date.now();
                    leaderBoard = A;
                    AgarBot.pubsub.trigger('updateLeaderBoard');
                }
                break;
            case 50:
                G = [];
                e = a.getUint32(b, !0);
                b += 4;
                for (g = 0; g < e; ++g)G.push(a.getFloat32(b, !0)), b += 4;
                Nb();
                break;
            case 64:
                Ja = a.getFloat64(b, !0);
                b += 8;
                Ka = a.getFloat64(b, !0);
                b += 8;
                La = a.getFloat64(b, !0);
                b += 8;
                Ma = a.getFloat64(b, !0);
                b += 8;
                oa = (La + Ja) / 2;
                pa = (Ma + Ka) / 2;
                qa = 1;
                0 == l.length && (u = oa, v = pa, m = qa);
                a.byteLength > b && (e = a.getUint32(b, !0), b += 4, Ob = !!(e & 1), kb = c(), d.MC.updateServerVersion(kb), console.log("Server version " + kb));
                break;
            case 81:
                var k = a.getUint32(b, !0), b = b + 4, Fa = a.getUint32(b, !0), b = b + 4, f = a.getUint32(b, !0), b = b + 4;
                setTimeout(function () {
                    var a = {level: k, xp: Fa, xpNeeded: f};
                    d.MC.updateUserXPInfo(a);
                    ra(a, null)
                }, 1200)
        }
    }

    function vc(a, c) {
        function b() {
            for (var b =
                ""; ;) {
                var d = a.getUint16(c, !0);
                c += 2;
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        function $() {
            for (var b = ""; ;) {
                var d = a.getUint8(c++);
                if (0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        Pb = I = Date.now();
        na || (na = !0, e("#connecting").hide(), Qb(), V && (V(), V = null));
        lb = !1;
        var g = a.getUint16(c, !0);
        c += 2;
        for (var t = 0; t < g; ++t) {
            var k = N[a.getUint32(c, !0)], f = N[a.getUint32(c + 4, !0)];
            c += 8;
            k && f && (f.S(), f.l = f.x, f.m = f.y, f.k = f.size, f.B = k.x, f.C = k.y, f.e = f.size, f.L = I, wc(k, f))
        }
        for (t = 0; ;) {
            g = a.getUint32(c, !0);
            c += 4;
            if (0 == g)break;
            ++t;
            var h, k = a.getInt32(c, !0);
            c += 4;
            f = a.getInt32(c, !0);
            c += 4;
            h = a.getInt16(c, !0);
            c += 2;
            var n = a.getUint8(c++), P = a.getUint8(c++), m = a.getUint8(c++), P = xc(n << 16 | P << 8 | m), m = a.getUint8(c++), p = !!(m & 1), q = !!(m & 16), r = null;
            m & 2 && (c += 4 + a.getUint32(c, !0));
            m & 4 && (r = $());
            var s = b(), n = null;
            N.hasOwnProperty(g) ? (n = N[g], n.K(), n.l = n.x, n.m = n.y, n.k = n.size, n.color = P) : (n = new ea(g, k, f, h, P, s), x.push(n), N[g] = n, n.va = k, n.wa = f);
            n.c = p;
            n.h = q;
            n.B = k;
            n.C = f;
            n.e = h;
            n.L = I;
            n.U = m;
            r && (n.J = r);
            s && n.q(s);
            //nguyenvanduocit
            -1 != E.indexOf(g) && -1 == l.indexOf(n) && (l.push(n),n.birth = getLastUpdate(),n.birthMass = (n.size * n.size / 100), AgarBot.pubsub.trigger('game:start'), 1 == l.length && (u = n.x, v = n.y, Rb(), document.getElementById("overlays").style.display = "none", B = [], mb = 0, nb = l[0].color, Ea = !0, ob = Date.now(), Y = Na = pb = 0));
            //nguyenvanduocit
            interNodes[g] = window.getCells()[g];
        }
        //nguyenvanduocit
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
        k = a.getUint32(c, !0);
        c += 4;
        for (t = 0; t < k; t++)g = a.getUint32(c, !0), c += 4, n = N[g], null != n && n.S();
        lb && 0 == l.length && (null == d.storageInfo && d.createDefaultStorage(), qb = Date.now(), Ea = !1, yc(), d.MC.deltaUpdateStats({
            games_played: 1,
            total_mass: ~~(O / 100),
            turn_time: (qb - ob) / 1E3,
            cells_eaten: Na
        }),
        AgarBot.pubsub.trigger('stopPlay'))//nguyenvanduocit
    }

    function ha() {
        if (fa()) {

            //@author nguyenvanduocit
            if (getPlayer().length == 0 && !reviving && ~~(getCurrentScore() / 100) > 0) {
                console.log("Dead: " + ~~(getCurrentScore() / 100));
                AgarBot.pubsub.trigger('player:dead');
            }
            if (getPlayer().length == 0 && !firstStart && !reviving) {
                console.log("Revive");
                setNick(originalName);
                reviving = true;
            } else if (getPlayer().length > 0 && reviving) {
                reviving = false;
                console.log("Done Reviving!");
                AgarBot.pubsub.trigger('player:revive');
            }

            var a = ua - p / 2, c = va - q / 2;
            64 > a * a + c * c || .01 > Math.abs(Sb - Ba) && .01 >
            Math.abs(Tb - Ca) || (Sb = Ba, Tb = Ca, a = W(13), a.setUint8(0, 16), a.setInt32(1, Ba, !0), a.setInt32(5, Ca, !0), a.setUint32(9, 0, !0), X(a))
        }
    }

    function Qb() {
        if (fa() && na && null != M) {
            var a = W(1 + 2 * M.length);
            a.setUint8(0, 0);
            for (var c = 0; c < M.length; ++c)a.setUint16(1 + 2 * c, M.charCodeAt(c), !0);
            X(a);
            M = null
        }
    }

    function fa() {
        return null != r && r.readyState == r.OPEN
    }

    function L(a) {
        if (fa()) {
            var c = W(1);
            c.setUint8(0, a);
            X(c)
        }
    }

    function Mb() {
        if (fa() && null != z) {
            var a = W(1 + z.length);
            a.setUint8(0, 81);
            for (var c = 0; c < z.length; ++c)a.setUint8(c + 1, z.charCodeAt(c));
            X(a)
        }
    }

    function Cb() {
        p = 1 * d.innerWidth;
        q = 1 * d.innerHeight;
        Va.width = Q.width = p;
        Va.height = Q.height = q;
        var a = e("#helloContainer");
        a.css("transform", "none");
        var c = a.height(), b = d.innerHeight;
        0 != c / 2 % 2 && (c++, a.height(c));
        c > b / 1.1 ? a.css("transform", "translate(-50%, -50%) scale(" + b / c / 1.1 + ")") : a.css("transform", "translate(-50%, -50%)");
        Ub()
    }

    function Vb() {
        var a;
        a = 1 * Math.max(q / 1080, p / 1920);
        return a *= T
    }

    /**
     * @author nguyenvanduocit
     */
    function Vb2() {
        var a;
        a = 1 * Math.max(q / 1080, p / 1920);
        return a
    }

    function zc() {
        if (0 != l.length) {
            //nguyenvanduocit
            for (var a = 0, a2= 0, c = 0; c < l.length; c++)a += l[c].size;
            a = Math.pow(Math.min(64 / a, 1), .4) * Vb();
            //nguyenvanduocit
            a2 = Math.pow(Math.min(64 / a, 1), .4) * Vb2();
            m = (9 * m + a) / 10;
            //@author nguyenvanduocit
            m2 = (9 * m2+ a2) / 10;
        }
    }

    function Ub() {

        //@author nguyenvanduocit
        dPoints = [];
        circles = [];
        dArc = [];
        dText = [];
        lines = [];

        var a, c = Date.now();
        ++Ac;
        I = c;
        if (0 < l.length) {
            zc();
            for (var b = a = 0, d = 0; d < l.length; d++)l[d].K(), a += l[d].x / l.length, b += l[d].y / l.length;
            oa = a;
            pa = b;
            qa = m;
            u = (u + a) / 2;
            v = (v + b) / 2
        } else u = (29 * u + oa) / 30, v = (29 * v + pa) / 30, m = (9 * m + qa * Vb()) / 10;
        pc();
        Wa();
        rb || f.clearRect(0, 0, p, q);
        rb ? (f.fillStyle = Oa ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.fillRect(0, 0, p, q), f.globalAlpha = 1) : Bc();
        x.sort(function (a, c) {
            return a.size == c.size ? a.id - c.id : a.size - c.size
        });
        f.save();
        f.translate(p / 2, q / 2);
        f.scale(m, m);
        f.translate(-u,
            -v);
        for (d = 0; d < da.length; d++)da[d].p(f);
        for (d = 0; d < x.length; d++)x[d].p(f);
        /**
         * @author nguyenvanduocit
         */
        AgarBot.pubsub.trigger('main_out:mainloop');
        customRender(f);
        if (jb) {
            Ha = (3 * Ha + hb) / 4;
            Ia = (3 * Ia + ib) / 4;
            f.save();
            f.strokeStyle = "#FFAAAA";
            f.lineWidth = 10;
            f.lineCap = "round";
            f.lineJoin = "round";
            f.globalAlpha = .5;
            f.beginPath();
            for (d = 0; d < l.length; d++)f.moveTo(l[d].x, l[d].y), f.lineTo(Ha, Ia);
            f.stroke();
            f.restore()
        }
        f.restore();
        F && F.width && f.drawImage(F, p - F.width - 10, 10);
O = Math.max(O, Wb());                                                                  //nguyenvanduocit
        0 != O && (null == Pa && (Pa = new Qa(24, "#FFFFFF")), Pa.r(U("score") + ": " + ~~(O / 100) + ", FPS :" + framePerSecond), b = Pa.D(), a = b.width, f.globalAlpha = .2, f.fillStyle =
            "#000000", f.fillRect(10, q - 10 - 24 - 10, a + 10, 34), f.globalAlpha = 1, f.drawImage(b, 15, q - 10 - 24 - 5));
        Cc();
        c = Date.now() - c;
        c > 1E3 / 60 ? J -= .01 : c < 1E3 / 65 && (J += .01);
        .4 > J && (J = .4);
        1 < J && (J = 1);
        c = I - Xb;
        !fa() || ka || aa ? (w += c / 2E3, 1 < w && (w = 1)) : (w -= c / 300, 0 > w && (w = 0));
        0 < w ? (f.fillStyle = "#000000", Yb ? (f.globalAlpha = w, f.fillRect(0, 0, p, q), H.complete && H.width && (H.width / H.height < p / q ? (c = p, a = H.height * p / H.width) : (c = H.width * q / H.height, a = q), f.drawImage(H, (p - c) / 2, (q - a) / 2, c, a), f.globalAlpha = .5 * w, f.fillRect(0, 0, p, q))) : (f.globalAlpha = .5 * w, f.fillRect(0,
            0, p, q)), f.globalAlpha = 1) : Yb = !1;
        Xb = I
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
                //nguyenvanduocit
                var text = new Qa(18, (getDarkBool() ? '#F2FBFF' : '#111111'), true, (getDarkBool() ? '#111111' : '#F2FBFF'));
                text.r(dText[i]);
                var textRender = text.D();
                d.drawImage(textRender, dPoints[i][0] - (textRender.width / 2), dPoints[i][1] - (textRender.height / 2));
            }

        }
        d.restore();
    }
    function Bc() {
        f.fillStyle = Oa ? "#111111" : "#F2FBFF";
        f.fillRect(0, 0, p, q);
        f.save();
        f.strokeStyle = Oa ? "#AAAAAA" : "#000000";
        f.globalAlpha = .2 * m;
        for (var a = p / m, c = q / m, b = (-u + a / 2) % 50; b < a; b += 50)f.beginPath(), f.moveTo(b * m - .5, 0), f.lineTo(b * m - .5, c * m), f.stroke();
        for (b = (-v + c / 2) % 50; b < c; b += 50)f.beginPath(), f.moveTo(0, b * m - .5), f.lineTo(a * m, b * m - .5), f.stroke();
        f.restore()
    }

    function Cc() {
        if (Ab && sb.width) {
            var a = p / 5;
            f.drawImage(sb, 5, 5, a, a)
        }
    }

    function Wb() {
        for (var a = 0, c = 0; c < l.length; c++)a += l[c].e * l[c].e;
        return a
    }

    /**
     * nguyenvanduocit
     * just header comment
     * @constructor
     */
    function Nb() {
        F = null;
        if (null != G || 0 != A.length)if (null != G || Ra) {
            F = document.createElement("canvas");
            var a = F.getContext("2d"), c = 60, c = null == G ? c + 24 * A.length : c + 180, b = Math.min(200, .3 * p) / 200;
            F.width = 200 * b;
            F.height = c * b;
            a.scale(b, b);
            a.globalAlpha = .4;
            a.fillStyle = "#000000";
            a.fillRect(0, 0, 200, c);
            a.globalAlpha = 1;
            a.fillStyle = "#FFFFFF";
            b = null;
            //nguyenvanduocit
            b = U("Leaders");
            a.font = "30px Ubuntu";

            a.fillText(b, 100 - a.measureText(b).width / 2, 40);
            if (null == G)for (a.font = "15px Ubuntu", c = 0; c < A.length; ++c)b = A[c].name || U("unnamed_cell"),
            Ra || (b = U("unnamed_cell")), -1 != E.indexOf(A[c].id) ? (l[0].name && (b = l[0].name), a.fillStyle = "#FFAAAA") : a.fillStyle = "#FFFFFF",b = c + 1 + ". " + b, a.fillText(b, 100 - a.measureText(b).width / 2, 70 + 24 * c); else for (c = b = 0; c < G.length; ++c) {
                var d = b + G[c] * Math.PI * 2;
                a.fillStyle = Dc[c + 1];
                a.beginPath();
                a.moveTo(100, 140);
                a.arc(100, 140, 80, b, d, !1);
                a.fill();
                b = d
            }
        }
    }

    function Ec(a) {
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

    function Fc(a) {
        if (null == a || 0 == a.length)return null;
        if (!sa.hasOwnProperty(a)) {
            var c = new Image;
            if (":" == a[0])c.src = a.slice(1); else if ("%" == a[0]) {
                if (!d.MC || !d.MC.getSkinInfo)return null;
                var b = d.MC.getSkinInfo("skin_" + a.slice(1));
                if (null == b)return null;
                c.src = d.ASSETS_ROOT + "skins/premium/" + b.url
            }
            sa[a] = c
        }
        return 0 != sa[a].width && sa[a].complete ? sa[a] : null
    }

    function tb(a, c, b, d, e) {
        this.Q = a;
        this.x = c;
        this.y = b;
        this.d = d;
        this.b = e
    }
    //nguyenvanduocit
    //function Cell(id, x, y, size, color, name)
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

    function xc(a) {
        for (a = a.toString(16); 6 > a.length;)a = "0" + a;
        return "#" + a
    }

    function Qa(a, c, b, d) {
        a && (this.n = a);
        c && (this.N = c);
        this.P = !!b;
        d && (this.o = d)
    }

    function Gc(a) {
        for (var c = a.length, b, d; 0 < c;)d = Math.floor(Math.random() * c), c--, b = a[c], a[c] = a[d], a[d] = b
    }

    function Hc() {
        h = ub
    }

    function Zb(a) {
        h.context = "google" == a ? "google" : "facebook";
        Sa()
    }

    function Sa() {
        d.localStorage[Z] = JSON.stringify(h);
        h = JSON.parse(d.localStorage[Z]);
        d.storageInfo = h;
        "google" == h.context ? (e("#gPlusShare").show(), e("#fbShare").hide()) : (e("#gPlusShare").hide(), e("#fbShare").show())
    }

    function $b(a) {
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

    function ra(a, c) {
        var b = "1" == e("#helloContainer").attr("data-has-account-data");
        e("#helloContainer").attr("data-has-account-data", "1");
        h.userInfo.xp = a.xp;
        h.userInfo.xpNeeded = a.xpNeeded;
        h.userInfo.level = a.level;
        Sa();
        if (b) {
            var $ = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0], b = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0], g = e(".agario-profile-panel .progress-bar-star").first().text();
            if (g != a.level)ra({xp: b, xpNeeded: b, level: g}, function () {
                e(".agario-profile-panel .progress-bar-star").text(a.level);
                e(".agario-exp-bar .progress-bar").css("width", "100%");
                e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e(".progress-bar-star").removeClass("animated tada")
                });
                setTimeout(function () {
                    e(".agario-exp-bar .progress-bar-text").text(a.xpNeeded + "/" + a.xpNeeded + " XP");
                    ra({xp: 0, xpNeeded: a.xpNeeded, level: a.level}, function () {
                        ra(a, null)
                    })
                }, 1E3)
            }); else {
                var f = Date.now(), k = function () {
                    var b;
                    b = (Date.now() - f) / 1E3;
                    b = 0 > b ? 0 : 1 < b ? 1 : b;
                    b = b * b * (3 - 2 * b);
                    e(".agario-exp-bar .progress-bar-text").text(~~($ + (a.xp - $) * b) + "/" + a.xpNeeded + " XP");
                    e(".agario-exp-bar .progress-bar").css("width", (88 * ($ + (a.xp - $) * b) / a.xpNeeded).toFixed(2) + "%");
                    c && c();
                    1 > b && d.requestAnimationFrame(k)
                };
                d.requestAnimationFrame(k)
            }
        } else e(".agario-profile-panel .progress-bar-star").text(a.level),
            e(".agario-exp-bar .progress-bar-text").text(a.xp + "/" + a.xpNeeded + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * a.xp / a.xpNeeded).toFixed(2) + "%")
    }

    function ac() {
        "none" == e("#settings").css("display") && "none" == e("#socialLoginContainer").css("display") && e("#instructions").show()
    }

    function bc(a) {
        if ("connected" == a.status) {
            var c = a.authResponse.accessToken;
            null == c || "undefined" == c || "" == c ? (3 > cc && (cc++, d.facebookRelogin()), d.logout()) : (d.MC.doLoginWithFB(c), d.FB.api("/me/picture?width=180&height=180", function (a) {
                h.userInfo.picture = a.data.url;
                d.updateStorage();
                e(".agario-profile-picture").attr("src", a.data.url)
            }), e("#helloContainer").attr("data-logged-in", "1"), h.context = "facebook", h.loginIntent = "1", d.updateStorage(), null != z ? d.checkSocialAPIToken(a) : d.getSocialAPIToken("facebookLogin", c))
        }
    }

    function Gb(a) {
        la(":party");
        e("#helloContainer").attr("data-party-state", "4");
        a = decodeURIComponent(a).replace(/.*#/gim, "");
        vb("#" + d.encodeURIComponent(a));

        e.ajax(ja + "getToken", {
            error: function () {
                e("#helloContainer").attr("data-party-state", "6")
            }, success: function (c) {
                c = c.split("\n");

                /**
                 * @author nguyenvanduocit
                 */
                var wantedIp = window.getWantedIp();
                if(wantedIp && wantedIp !== c[0]){
                    console.log('Found ',c[0],", Wanted : ",wantedIp );
                    if(currenConnecttTry <= maxConnectRetry){
                        currenConnecttTry++;
                        AgarBot.pubsub.trigger('findServer:retry', {time:currenConnecttTry});
                        setTimeout(function(){Gb(a);}, 2e3);
                    }else{
                        AgarBot.pubsub.trigger('findServer:ipNotFound');
                        currenConnecttTry = 0;
                    }
                }else{
                    e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                    e("#helloContainer").attr("data-party-state", "5");
                    la(":party");
                    fb("ws://" + c[0], a);
                    currenConnecttTry = 0;
                }
            }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: a
        })

    }

    function vb(a) {
        d.history && d.history.replaceState && d.history.replaceState({}, d.document.title, a)
    }

    function wc(a, c) {
        var b = -1 != E.indexOf(a.id), d = -1 != E.indexOf(c.id), e = 30 > c.size;
        b && e && ++mb;
        e || !b || d || c.U & 32 || ++Na
    }

    function dc(a) {
        a = ~~a;
        var c = (a % 60).toString();
        a = (~~(a /
        60)).toString();
        2 > c.length && (c = "0" + c);
        return a + ":" + c
    }

    function Ic() {
        if (null == A)return 0;
        for (var a = 0; a < A.length; ++a)if (-1 != E.indexOf(A[a].id))return a + 1;
        return 0
    }

    function Jc() {
        e(".stats-food-eaten").text(mb);
        e(".stats-time-alive").text(dc((qb - ob) / 1E3));
        e(".stats-leaderboard-time").text(dc(pb));
        e(".stats-highest-mass").text(~~(O / 100));
        e(".stats-cells-eaten").text(Na);
        e(".stats-top-position").text(0 == Y ? ":(" : Y);
        var a = document.getElementById("statsGraph");
        if (a) {
            var c = a.getContext("2d"), b = a.width, a = a.height;
            c.clearRect(0, 0, b, a);
            if (2 < B.length) {
                for (var d = 200, g = 0; g < B.length; g++)d = Math.max(B[g], d);
                c.lineWidth = 3;
                c.lineCap = "round";
                c.lineJoin = "round";
                c.strokeStyle = nb;
                c.fillStyle = nb;
                c.beginPath();
                c.moveTo(0, a - B[0] / d * (a - 10) + 10);
                for (g = 1; g < B.length; g += Math.max(~~(B.length / b), 1)) {
                    for (var f = g / (B.length - 1) * b, k = [], h = -20; 20 >= h; ++h)0 > g + h || g + h >= B.length || k.push(B[g + h]);
                    k = k.reduce(function (a, c) {
                            return a + c
                        }) / k.length / d;
                    c.lineTo(f, a - k * (a - 10) + 10)
                }
                c.stroke();
                c.globalAlpha = .5;
                c.lineTo(b, a);
                c.lineTo(0, a);
                c.fill();
                c.globalAlpha =
                    1
            }
        }
    }

    function yc() {
        if (!ka && !aa)if (ec) {
            ab(s.ab);
            Jc();
            aa = !0;
            e("#overlays").fadeIn(3E3);
            e("#stats").show();
            var a = fc("g_plus_share_stats");
            d.fillSocialValues(a, "gPlusShare")
        } else wa(3E3)
    }

    function fc(a) {
        var c = e(".stats-time-alive").text();
        return d.parseString(a, "%@", [c.split(":")[0], c.split(":")[1], e(".stats-highest-mass").text()])
    }

    function Kc() {
        d.open("https://plus.google.com/share?url=www.agar.io&hl=en-US", "Agar.io", "width=484,height=580,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (d.screenX +
            d.innerWidth / 2 - 242) + ",top=" + (d.innerHeight - 580) / 2)
    }

    var D = {};
    (function () {
        var a = d.location.search;
        "?" == a.charAt(0) && (a = a.slice(1));
        for (var a = a.split("&"), c = 0; c < a.length; c++) {
            var b = a[c].split("=");
            D[b[0]] = b[1]
        }
    })();
    "fb" in D || "miniclip" in D || "http:" == d.location.protocol || (d.location.href = "http:" + d.location.href.substring(d.location.protocol.length));
    d.MC = function () {
    };
    if (void 0 != d.EnvConfig) {
        var y = d.EnvConfig;
        d.EnvConfig = y
    }
    if (!d.agarioNoInit) {
        var wb = d.location.protocol, gb = "https:" == wb;
        D.master && (y.master_url =
            D.master);
        var ja = wb + "//" + y.master_url + "/", Ta = d.navigator.userAgent;
        if (-1 != Ta.indexOf("Android"))d.ga && d.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function () {
            d.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
        }, 1E3); else if (-1 != Ta.indexOf("iPhone") || -1 != Ta.indexOf("iPad") || -1 != Ta.indexOf("iPod"))d.ga && d.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function () {
            d.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
        }, 1E3); else {
            var K = {};
            d.agarApp = K;
            //@author nguyenvanduocit
            var m2 = 1,
                toggle = false,
                lastLeaderBoardUpdate = 0,
                leaderBoard = [],
                toggleDraw = false,
                framePerSecond = 0,
                ejectMassTime = 0,
                splitTime = 0,
                ejectMassCooldown = 10000,
                splitCooldown = 10000,
                dPoints = [],
                circles = [],
                dArc = [],
                dText = [],
                lines = [],
                names = ["Agar.SenViet.org"],
                firstStart = true;
                originalName = names[Math.floor(Math.random() * names.length)],
                sessionScore = 0,
                serverIP = "",
                token = "",
                interNodes = [],
                lifeTimer = new Date(),
                bestTime = 0,
                botIndex = 0,
                reviving = false,
                message = [];

            var Va, f, Q, p, q, ia = null, r = null, u = 0, v = 0, E = [], l = [], N = {}, x = [], da = [], A = [], ua = 0, va = 0, Ba = -1, Ca = -1, Ac = 0, I = 0, Xb = 0, M = null, Ja = 0, Ka = 0, La = 1E4, Ma = 1E4, m = 1, C = null, gc = !0, Ra = !0, xb = !1, lb = !1, O = 0, Oa = !1, hc = !1, oa = u = ~~((Ja + La) / 2), pa = v = ~~((Ka + Ma) / 2), qa = 1, ma = "", G = null, Ua = !1, jb = !1, hb = 0, ib = 0, Ha = 0, Ia = 0, Dc = ["#333333", "#FF3333", "#33FF33", "#3333FF"], rb = !1, na = !1, Pb = 0, z = null, T = 1, w = 1, ka = !1, Xa = 0, Yb = !0, kb = null, Ob = !1, H = new Image;
            H.src = "/img/background.png";
            var Ab = "ontouchstart" in d && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent),
                sb = new Image;
            sb.src = "/img/split.png";
            var ic = document.createElement("canvas");
            if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == ic || null == ic.getContext || null == d.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this"); else {
                var Da = null;
                d.setNick = function (a) {
                    // @author nguyenvanduocit
                    firstStart = false;
                    originalName = a;
                    if (getPlayer().length == 0) {
                        lifeTimer = new Date();
                    }

                    d.ga && d.ga("send", "event", "Nick", a.toLowerCase());
                    Hb();
                    M = a;
                    Qb();
                    O = 0
                };
                d.setRegion = xa;
                var $a = !0;
                d.setSkins = function (a) {
                    gc = a
                };
                d.setNames = function (a) {
                    Ra = a
                };
                d.setDarkTheme = function (a) {
                    Oa = a
                };
                d.setColors = function (a) {
                    xb = a
                };
                d.setShowMass = function (a) {
                    hc = a
                };
                d.spectate = function () {
                    M = null;
                    L(1);
                    Hb()
                };
                d.setGameMode = function (a) {
                    a != ma && (":party" == ma && e("#helloContainer").attr("data-party-state", "0"), la(a), ":party" != a && R())
                };
                d.setAcid = function (a) {
                    rb = a
                };
                e.get(wb + "//gc.agar.io", function (a) {
                    var c = a.split(" ");
                    a = c[0];
                    c = c[1] || "";
                    -1 == ["UA"].indexOf(a) && jc.push("ussr");
                    ta.hasOwnProperty(a) && ("string" == typeof ta[a] ? C || xa(ta[a]) : ta[a].hasOwnProperty(c) && (C || xa(ta[a][c])))
                }, "text");
                var Fb = function (a) {
                    return a in D ? +D[a] : null != d.localStorage ? (null == d.localStorage[a] && (d.localStorage[a] = 0 + ~~(100 * Math.random())), +d.localStorage[a]) : 0
                }, S = "debugads" in D, ya = {}, eb = !0, rc = 0, Ib = !1, s = {aa: [], ab: [], ac: []};
                d.adSlots = s;
                d.getABGroup = bb;
                d.refreshAd = ab;
                var za = {w: !1};
                d.agarAdModule = za;
                var cb = !1, db = null, ca = function (a) {
                    a.defineSlot = function (a, b, e) {
                        var g = d.googletag;
                        return {type: "dfpads", data: g.defineSlot(a, b, e).addService(g.pubads())}
                    };
                    return a
                }({});
                d.googleAdsModule = ca;
                var Za = function (a) {
                    for (var c = 0; c < a.length; c++)"type" in a[c] && "rubicon" != a[c].type || (S && console.log("Rubicon: destroying:" + a[c].data.id, a[c]), ba.Y(a[c].data.id))
                }, ba = function (a) {
                    a.F = function (a, b, d) {
                        var e = "https:" == document.location.protocol ? "https:" : "http:";
                        b = b.split("x");
                        var f = a + "-fif", k = document.createElement("iframe");
                        k.style.cssText = "width: " + b[0] + "px; height: " + b[1] + "px; border: 0; margin: 0; padding: 0; overflow: hidden;";
                        k.setAttribute("scrolling", "no");
                        k.src = "about:blank";
                        k.id = f;
                        document.getElementById(a).appendChild(k);
                        a = k.contentWindow ? k.contentWindow.document : k.contentDocument.document;
                        a.open().write("<html>\n<head>\n<script type='text/javascript'>inDapIF=true;\n\x3c/script>\n</head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Smart Tag --\x3e\n<script type='text/javascript'>\nrp_account = '" + d.acct + "';\nrp_site = '" + d.site + "';\nrp_zonesize  = '" + d.zone + "-" + d.size + "';\nrp_adtype = 'js';\nrp_kw = '" + d.kw + "';\nrp_visitor = " + d.visitor + ";\nrp_inventory = " + d.inventory + ";\n\x3c/script>\n<script type='text/javascript' src= " +
                            e + "//ads.rubiconproject.com/ad/" + d.acct + '.js">\x3c/script>\n</body>\n</html>');
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
                    a.ya = function (a, b, d) {
                        var g = a + "-fif", f = e("#" + g);
                        null != f ? f.remove() : console.log("couldn't find element", f, g);
                        this.F(a, b, d)
                    };
                    a.Y = function (a) {
                        a += "-fif";
                        var b = e("#" + a);
                        null != b ? b.remove() : console.log("couldn't find element", b, a)
                    };
                    a.za = function (a, b, d) {
                        this.F(a, b, d)
                    };
                    return a
                }({});
                d.rubiconAds = ba;
                var ta = {
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
                }, V = null;
                d.connect = fb;
                var Ga = 500, Sb = -1, Tb = -1;
                d.refreshPlayerInfo = function () {
                    L(253)
                };
                var F = null, J = 1, Pa = null, Db = function () {
                    var a = Date.now(), c = 1E3 / 60;
                    //nguyenvanduocit
                    var diff = 0,aux = Date.now(), frameCounter = 0;
                    return function () {
                        d.requestAnimationFrame(Db);
                        var b = Date.now(), e = b - a;
                        //nguyenvanduocit
                        if(diff > 1e3){
                            console.log()
                            aux = Date.now();
                            diff = 0;
                            framePerSecond = frameCounter;
                            frameCounter = 0;
                        }else{
                            diff = Date.now() - aux;
                                                                                            //nguyenvanduocit add frameCounter++
                            e > c && (a = b - e % c, !fa() || 240 > Date.now() - Pb ? (Ub(), frameCounter++) : console.warn("Skipping draw"), Lc())
                        }

                    }
                }(), ga = {}, jc = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"), Mc = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";"), sa = {};
                tb.prototype = {Q: null, x: 0, y: 0, d: 0, b: 0};
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
                    e: 0,
                    U: 0,
                    L: 0,
                    Z: 0,
                    u: !1,
                    c: !1,
                    h: !1,
                    M: !0,
                    T: 0,
                    J: null,
                    W: 0,
                    //@author nguyenvanduocit
                    updateCode: 0,
                    danger: false,
                    dangerTimeOut: 0,
                    getOldPosition:function(){
                        return {
                            x:this.l, y:this.m
                        }
                    },
                    isNotMoving: function() {
                        var oldPosition = this.getOldPosition();
                        return (this.x == oldPosition.x && this.y == oldPosition.y);
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
                        delete N[this.id];
                        a = l.indexOf(this);
                        -1 != a && (lb = !0, l.splice(a, 1));
                        a = E.indexOf(this.id);
                        -1 != a && E.splice(a, 1);
                        this.u = !0;
                        0 < this.T && da.push(this)
                    },
                    g: function () {
                        return Math.max(~~(.3 * this.size), 24)
                    },
                    //nguyenvanduocit Set name
                    q: function (a) {
                        if (this.name = a)null == this.i ? this.i = new Qa(this.g(), "#FFFFFF", !0, "#000000") : this.i.G(this.g()), this.i.r(this.name)
                    },
                    R: function () {
                        for (var a = this.v(); this.a.length > a;) {
                            var c = ~~(Math.random() * this.a.length);
                            this.a.splice(c, 1)
                        }
                        for (0 == this.a.length && 0 < a && this.a.push(new tb(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < a;)c = ~~(Math.random() * this.a.length), c = this.a[c], this.a.push(new tb(this, c.x, c.y, c.d, c.b))
                    },
                    v: function () {
                        var a = 10;
                        20 > this.size && (a = 0);
                        this.c && (a = 30);
                        var c = this.size;
                        this.c || (c *= m);
                        c *= J;
                        return ~~Math.max(c, a)
                    },
                    ka: function () {
                        this.R();
                        for (var a = this.a, c = a.length, b = 0; b < c; ++b) {
                            var d = a[(b - 1 + c) % c].b, e = a[(b + 1) % c].b;
                            a[b].b += (Math.random() - .5) * (this.h ? 3 : 1);
                            a[b].b *= .7;
                            10 < a[b].b && (a[b].b = 10);
                            -10 > a[b].b && (a[b].b = -10);
                            a[b].b = (d + e + 8 * a[b].b) / 10
                        }
                        for (var f = this, k = this.c ? 0 : (this.id / 1E3 + I / 1E4) % (2 * Math.PI), h = 0, b = 0; b < c; ++b) {
                            var l = a[b].d, d = a[(b - 1 + c) % c].d, e = a[(b + 1) % c].d;
                            if (15 < this.size && null !=
                                ia && 20 < this.size * m && 0 < this.id) {
                                var n = !1, P = a[b].x, p = a[b].y;
                                ia.na(P - 5, p - 5, 10, 10, function (a) {
                                    a.Q != f && 25 > (P - a.x) * (P - a.x) + (p - a.y) * (p - a.y) && (n = !0)
                                });
                                !n && (a[b].x < Ja || a[b].y < Ka || a[b].x > La || a[b].y > Ma) && (n = !0);
                                n && (0 < a[b].b && (a[b].b = 0), a[b].b -= 1)
                            }
                            l += a[b].b;
                            0 > l && (l = 0);
                            l = this.h ? (19 * l + this.size) / 20 : (12 * l + this.size) / 13;
                            a[b].d = (d + e + 8 * l) / 10;
                            d = 2 * Math.PI / c;
                            e = this.a[b].d;
                            this.c && 0 == b % 2 && (e += 5);
                            a[b].x = this.x + Math.cos(d * b + k) * e;
                            a[b].y = this.y + Math.sin(d * b + k) * e;
                            h = Math.max(h, e)
                        }
                        this.W = h
                    },
                    K: function () {
                        if (0 >= this.id)return 1;
                        var a;
                        a = (I - this.L) / 120;
                        a = 0 > a ? 0 : 1 < a ? 1 : a;
                        var c = 0 > a ? 0 : 1 < a ? 1 : a;
                        this.g();
                        if (this.u && 1 <= c) {
                            var b = da.indexOf(this);
                            -1 != b && da.splice(b, 1)
                        }
                        this.x = a * (this.B - this.l) + this.l;
                        this.y = a * (this.C - this.m) + this.m;
                        this.size = c * (this.e - this.k) + this.k;
                        .01 > Math.abs(this.size - this.e) && (this.size = this.e);
                        return c
                    },
                    H: function () {
                        return 0 >= this.id ? !0 : this.x + this.size + 40 < u - p / 2 / m || this.y + this.size + 40 < v - q / 2 / m || this.x - this.size - 40 > u + p / 2 / m || this.y - this.size - 40 > v + q / 2 / m ? !1 : !0
                    },
                    /**
                     * nguyenvanduocit
                     * draw cell
                     * @param a
                     */
                    p: function (a) {
                        if (this.H()) {
                            ++this.T;
                            var c = 0 < this.id && !this.c && !this.h && .4 > m;
                            5 > this.v() && 0 < this.id && (c = !0);
                            if (this.M && !c)for (var b = 0; b < this.a.length; b++)this.a[b].d = this.size;
                            this.M = c;
                            a.save();
                            this.Z = I;
                            var e = this.K();
                            this.u && (a.globalAlpha *= 1 - e);
                            a.lineWidth = 10;
                            a.lineCap = "round";
                            a.lineJoin = this.c ? "miter" : "round";
                            var b = this.name.toLowerCase(), g = null, e = !1, f = this.color;
                            this.h || !gc || Ob || (-1 != jc.indexOf(b) ? (ga.hasOwnProperty(b) || (ga[b] = new Image, ga[b].src = d.ASSETS_ROOT + "skins/" + b + ".png"), g = 0 != ga[b].width && ga[b].complete ? ga[b] : null) : g = null, null != g ? -1 != Mc.indexOf(b) && (e = !0) : (g = Fc(this.J), null != g && (f = Ec(this.J) || f)));
                            xb ? (a.fillStyle = "#FFFFFF", a.strokeStyle = "#AAAAAA") : (a.fillStyle = f, a.strokeStyle = f);
                            if (c)a.beginPath(), a.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, !1); else for (this.ka(), a.beginPath(), f = this.v(), a.moveTo(this.a[0].x, this.a[0].y), b = 1; b <= f; ++b) {
                                var k = b % f;
                                a.lineTo(this.a[k].x, this.a[k].y)
                            }
                            a.closePath();
                            c || a.stroke();
                            a.fill();
                            null != g && (a.save(), a.clip(), b = Math.max(this.size, this.W), a.drawImage(g, this.x - b - 5, this.y - b - 5, 2 * b + 10, 2 * b + 10), a.restore());
                            (xb || 15 < this.size) && !c && (a.strokeStyle = "#000000", a.globalAlpha *= .1, a.stroke());
                            a.globalAlpha = 1;

                            //Nguyenvanduocit Show mass of other
                            //g = -1 != l.indexOf(this);
                            g = true;

                            c = ~~this.y;
                            0 != this.id && (Ra || g) && this.name && this.i && !e && (b = this.i, b.r(this.name), b.G(this.g()), e = 0 >= this.id ? 1 : Math.ceil(10 * m) / 10, b.X(e), b = b.D(), f = Math.ceil(b.width / e), k = Math.ceil(b.height / e), a.drawImage(b, ~~this.x - ~~(f / 2), c - ~~(k / 2), f, k), c += b.height / 2 / e + 4);
                            0 < this.id && hc && (g || 0 == l.length && (!this.c || this.h) && 20 < this.size) && (null == this.I && (this.I = new Qa(this.g() / 2, "#FFFFFF", !0, "#000000")), g = this.I,
                                g.G(this.g() / 2), g.r(~~(this.size * this.size / 100)), e = Math.ceil(10 * m) / 10, g.X(e), b = g.D(), f = Math.ceil(b.width / e), k = Math.ceil(b.height / e), a.drawImage(b, ~~this.x - ~~(f / 2), c - ~~(k / 2), f, k));
                            a.restore()
                        }
                    }
                };
                d.Maths = function (a) {
                    function c(a, c, d) {
                        return a < c ? c : a > d ? d : a
                    }

                    a.ra = function (a, d, e) {
                        e = c(e, 0, 1);
                        return a + e * (d - a)
                    };
                    a.qa = c;
                    return a
                }({});
                Qa.prototype = {
                    t: "", N: "#000000", P: !1, o: "#000000", n: 16, j: null, O: null, f: !1, s: 1, G: function (a) {
                        this.n != a && (this.n = a, this.f = !0)
                    }, X: function (a) {
                        this.s != a && (this.s = a, this.f = !0)
                    }, setStrokeColor: function (a) {
                        this.o !=
                        a && (this.o = a, this.f = !0)
                    }, r: function (a) {
                        a != this.t && (this.t = a, this.f = !0)
                    }, D: function () {
                        null == this.j && (this.j = document.createElement("canvas"), this.O = this.j.getContext("2d"));
                        if (this.f) {
                            this.f = !1;
                            var a = this.j, c = this.O, b = this.t, d = this.s, e = this.n, f = e + "px Ubuntu";

                            c.font = f;
                            var k = ~~(.2 * e);
                            a.width = (c.measureText(b).width + 6) * d;
                            a.height = (e + k) * d;
                            c.font = f;
                            c.scale(d, d);
                            c.globalAlpha = 1;
                            c.lineWidth = 3;
                            c.strokeStyle = this.o;
                            c.fillStyle = this.N;
                            this.P && c.strokeText(b, 3, e - k / 2);
                            c.fillText(b, 3, e - k / 2);
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
                var qc = {
                    init: function (a) {
                        function c(a) {
                            a < d && (a = d);
                            a > f && (a = f);
                            return ~~((a - d) / 32)
                        }

                        function b(a) {
                            a < e && (a = e);
                            a > k && (a = k);
                            return ~~((a - e) / 32)
                        }

                        var d = a.ia, e = a.ja, f = a.fa, k = a.ha, h = ~~((f - d) / 32) + 1, m = ~~((k - e) / 32) + 1, n = Array(h * m);
                        return {
                            ca: function (a) {
                                var d = c(a.x) + b(a.y) * h;
                                null == n[d] ? n[d] = a : Array.isArray(n[d]) ? n[d].push(a) : n[d] = [n[d], a]
                            }, na: function (a, d, e, f, g) {
                                var k = c(a), l = b(d);
                                a = c(a + e);
                                d = b(d + f);
                                if (0 > k || k >= h || 0 > l || l >= m)debugger;
                                for (; l <= d; ++l)for (f = k; f <= a; ++f)if (e = n[f + l * h], null != e)if (Array.isArray(e))for (var t = 0; t < e.length; t++)g(e[t]); else g(e)
                            }
                        }
                    }
                }, Rb = function () {
                    var a = new ea(0,
                        0, 0, 32, "#ED1C24", ""), c = document.createElement("canvas");
                    c.width = 32;
                    c.height = 32;
                    var b = c.getContext("2d");
                    return function () {
                        0 < l.length && (a.color = l[0].color, a.q(l[0].name));
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
                    Rb()
                });
                var Z = "storeObjectInfo", ub = {
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
                }, h = ub;
                d.storageInfo = h;
                d.createDefaultStorage = Hc;
                d.updateStorage = Sa;
                e(function () {
                    null != d.localStorage[Z] && (h = JSON.parse(d.localStorage[Z]));
                    "1" == h.loginIntent && Zb(h.context);
                    "" != h.userInfo.name && ($b(h.userInfo), null != h.userInfo.socialToken && (z = h.userInfo.socialToken))
                });
                d.checkLoginStatus = function () {
                    "1" == h.loginIntent && Zb(h.context)
                };
                d.logout = function () {
                    h = ub;
                    z = null;
                    kc();
                    e("#helloContainer").attr("data-logged-in", "0");
                    e("#helloContainer").attr("data-has-account-data", "0");
                    e("#gPlusShare").hide();
                    e("#fbShare").show();
                    e("#user-id-tag").text("");
                    delete d.localStorage[Z];
                    d.localStorage[Z] = JSON.stringify(h);
                    R();
                    d.MC.doLogout()
                };
                d.gameServerLogin = function () {
                    "" != h.userInfo.name && d.localStorage[Z] && (Date.now() + 3E4 > 1E3 * h.userInfo.tokenExpires ? (e("#helloContainer").attr("data-logged-in", "0"), d.logout()) : (z = h.userInfo.socialToken, Mb()))
                };
                d.checkSocialAPIToken = function () {
                    e.ajax(ja + "checkToken", {
                        error: function () {
                            z = null;
                            d.logout()
                        }, success: function (a) {
                            h.sa = "1";
                            a = a.split("\n");
                            ra({level: +a[0], xp: +a[1], xpNeeded: +a[2]}, null);
                            d.gameServerLogin()
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: z
                    })
                };
                d.getSocialAPIToken = function (a, c) {
                    null == c || "undefined" == c ? d.logout() : e.ajax(ja + a, {
                        error: function () {
                            z = null;
                            e("#helloContainer").attr("data-logged-in", "0")
                        }, success: function (a) {
                            a = a.split("\n");
                            h.userInfo.socialToken = a[2];
                            h.userInfo.tokenExpires = a[3];
                            h.userInfo.level = a[4];
                            h.userInfo.xp = a[5];
                            h.userInfo.xpNeeded = a[6];
                            h.userInfo.name = a[0].split(" ")[0];
                            $b(h.userInfo);
                            Sa();
                            d.gameServerLogin()
                        }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: c
                    })
                };
                d.toggleSocialLogin = function () {
                    e("#socialLoginContainer").toggle();
                    e("#settings").hide();
                    e("#instructions").hide();
                    ac()
                };
                d.toggleSettings = function () {
                    e("#settings").toggle();
                    e("#socialLoginContainer").hide();
                    e("#instructions").hide();
                    ac()
                };
                var cc = 0;
                d.fbAsyncInit = function () {
                    function a() {
                        null == d.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : (h.loginIntent = "1", d.updateStorage(), d.FB.login(function (a) {
                            bc(a)
                        }, {scope: "public_profile, email"}))
                    }

                    d.FB.init({appId: y.fb_app_id, cookie: !0, xfbml: !0, status: !0, version: "v2.2"});
                    "1" == d.storageInfo.loginIntent && "facebook" == d.storageInfo.context && d.FB.getLoginStatus(function (c) {
                        "connected" === c.status ? bc(c) : (d.logout(), a())
                    });
                    d.facebookRelogin = a;
                    d.facebookLogin = a
                };
                var yb = !1;
                (function (a) {
                    function c() {
                        var a = document.createElement("script");
                        a.type = "text/javascript";
                        a.async = !0;
                        a.src = "//apis.google.com/js/client:platform.js?onload=gapiAsyncInit";
                        var b = document.getElementsByTagName("script")[0];
                        b.parentNode.insertBefore(a, b);
                        f = !0
                    }

                    var b = {}, f = !1;
                    d.gapiAsyncInit = function () {
                        e(b).trigger("initialized")
                    };
                    a.google = {
                        da: function () {
                            c()
                        }, ba: function (a, b) {
                            d.gapi.client.load("plus", "v1", function () {
                                console.log("fetching me profile");
                                gapi.client.plus.people.get({userId: "me"}).execute(function (a) {
                                    b(a)
                                })
                            })
                        }
                    };
                    a.ma = function (a) {
                        f || c();
                        "undefined" !== typeof gapi ? a() : e(b).bind("initialized", a)
                    };
                    return a
                })(K);
                var Nc = function (a) {
                    function c(a) {
                        null != z ? d.checkSocialAPIToken() : d.getSocialAPIToken("googleLogin", a);
                        d.MC.doLoginWithGPlus(a)
                    }

                    function b(a) {
                        h.userInfo.picture = a;
                        e(".agario-profile-picture").attr("src", a)
                    }

                    var f = null, g = {
                        client_id: y.gplus_client_id,
                        cookie_policy: "single_host_origin",
                        scope: "profile email"
                    };
                    a.V = {
                        Aa: function () {
                            return f
                        }, init: function () {
                            var a = this, b = h && "1" == h.loginIntent && "google" == h.context;
                            K.ma(function () {
                                d.gapi.ytsubscribe.go("agarYoutube");
                                d.gapi.load("auth2", function () {
                                    f = d.gapi.auth2.init(g);
                                    f.attachClickHandler(document.getElementById("gplusLogin"), {}, function (a) {
                                        console.log("googleUser : " + a)
                                    }, function (a) {
                                        console.log("failed to login in google plus: ", JSON.stringify(a, void 0, 2))
                                    });
                                    f.currentUser.listen(_.bind(a.la, a));
                                    b && 1 == f.isSignedIn.get() && f.signIn()
                                })
                            })
                        }, la: function (a) {
                            if (f && a && f.isSignedIn.get() && !yb) {
                                yb = !0;
                                h.loginIntent = "1";
                                var e = a.getAuthResponse(), g = e.access_token;
                                d.pa = e;
                                console.log("loggedIn with G+!");
                                a = a.getBasicProfile().getImageUrl();
                                void 0 == a ? K.google.ba(e, function (a) {
                                    a.result.isPlusUser ? (a && b(a.image.url), c(g)) : (alert("Please add Google+ to your Google account and try again.\nOr you can login with another account."), d.logout())
                                }) : (b(a), c(g));
                                h.context = "google";
                                d.updateStorage()
                            }
                        }, ea: function () {
                            f && (f.signOut(), yb = !1)
                        }
                    };
                    return a
                }(K);
                d.gplusModule = Nc;
                var kc = function () {
                    K.V.ea()
                };
                d.logoutGooglePlus = kc;
                var Lc = function () {
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

                    for (var c = new ea(-1, 0, 0, 32, "#5bc0de", ""), b = new ea(-1, 0, 0, 32, "#5bc0de", ""), d = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), f = [], h = 0; h < d.length; ++h) {
                        var k = h / d.length * 12, m = 30 * Math.sqrt(h / d.length);
                        f.push(new ea(-1, Math.cos(k) * m, Math.sin(k) * m, 10, d[h], ""))
                    }
                    Gc(f);
                    var l = document.createElement("canvas");
                    l.getContext("2d");
                    l.width = l.height = 70;
                    a(b, l, "", 26, "#ebc0de");
                    return function () {
                        e(".cell-spinner").filter(":visible").each(function () {
                            var b = e(this), d = Date.now(), f = this.width, g = this.height, h = this.getContext("2d");
                            h.clearRect(0, 0, f, g);
                            h.save();
                            h.translate(f / 2, g / 2);
                            for (var k = 0; 10 > k; ++k)h.drawImage(l, (.1 * d + 80 * k) % (f + 140) - f / 2 - 70 - 35, g / 2 * Math.sin((.001 * d + k) % Math.PI * 2) - 35, 70, 70);
                            h.restore();
                            (b = b.attr("data-itr")) && (b = U(b));
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
                    V = function (a) {
                        vb("/#" + d.encodeURIComponent(a));
                        e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a));
                        e("#helloContainer").attr("data-party-state", "1")
                    };
                    R()
                };
                d.joinParty = Gb;
                d.cancelParty = function () {
                    vb("/");
                    e("#helloContainer").attr("data-party-state", "0");
                    la("");
                    R()
                };
                var B = [], mb = 0, nb = "#000000", aa = !1, Ea = !1, ob = 0, qb = 0, pb = 0, Na = 0, Y = 0, ec = !0;
                setInterval(function () {
                    Ea && B.push(Wb() / 100)
                }, 1E3 / 60);
                setInterval(function () {
                    var a = Ic();
                    0 != a && (++pb, 0 == Y && (Y = a), Y = Math.min(Y, a))
                }, 1E3);
                d.closeStats = function () {
                    aa = !1;
                    e("#stats").hide();
                    var a = s.ab;
                    Ya(a);
                    Za(a);
                    wa(0)
                };
                d.setSkipStats = function (a) {
                    ec = !a
                };
                d.getStatsString = fc;
                d.gPlusShare = Kc;
                d.twitterShareStats = function () {
                    var a =
                        d.getStatsString("g_plus_share_stats");
                    d.open("https://twitter.com/intent/tweet?text=" + a, "Agar.io", "width=660,height=310,menubar=no,toolbar=no,resizable=yes,scrollbars=no,left=" + (d.screenX + d.innerWidth / 2 - 330) + ",top=" + (d.innerHeight - 310) / 2)
                };
                d.fbShareStats = function () {
                    var a = d.getStatsString("fb_matchresults_subtitle");
                    d.FB.ui({
                        method: "feed",
                        display: "iframe",
                        name: U("fb_matchresults_title"),
                        caption: U("fb_matchresults_description"),
                        description: a,
                        link: "http://agar.io",
                        xa: "http://static2.miniclipcdn.com/mobile/agar/Agar.io_matchresults_fb_1200x630.png",
                        oa: {name: "play now!", link: "http://agar.io"}
                    })
                };
                d.fillSocialValues = function (a, c) {
                    1 == d.isChrome && "google" == d.storageInfo.context && d.gapi.interactivepost.render(c, {
                        contenturl: y.game_url,
                        clientid: y.gplus_client_id,
                        cookiepolicy: "http://agar.io",
                        prefilltext: a,
                        calltoactionlabel: "BEAT",
                        calltoactionurl: y.game_url
                    })
                };
                e(function () {
                    e(lc);
                    "MAsyncInit" in d && d.MAsyncInit()
                })
            }
        }
    }
    /**
     * Custom function
     * @author nguyenvanduocit
     */
    function computeDistance(x1, y1, x2, y2) {
        var xdis = x1 - x2; // <--- FAKE AmS OF COURSE!
        var ydis = y1 - y2;
        var distance = Math.sqrt(xdis * xdis + ydis * ydis);

        return distance;
    }
    window.setPoint = function(x, y) {
        Ba = x;
        Ca = y;
    };
    window.getDarkBool = function() {
        return Oa;
    };
    window.getMapStartX = function() {
        return Ja;
    };
    window.getMapStartY = function() {
        return Ka;
    };
    window.getMapEndY = function() {
        return Ma;
    };
    window.getMapEndX = function() {
        return La;
    };
    /**
     * The game's current mode. (":ffa", ":experimental", ":teams". ":party")
     * @return {[type]} [description]
     */
    window.getMode = function() {
        return ma;
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
        return N;
    };
    /**
     * A timestamp since the last time the server sent any data.
     * @return Last update timestamp
     */
    window.getLastUpdate = function() {
        return I;
    };
    /**
     * Scaling ratio of the canvas. The bigger this ration,
     * the further that you see.
     * @return Screen scaling ratio.
     */
    window.getRatio = function() {
        return m;
    };
    window.getZoomlessRatio = function() {
        return m2;
    };
    window.getX = function() {
        return u;
    };
    window.getY = function() {
        return v;
    };
    /**
     * The canvas' width.
     * @return Integer Width
     */
    window.getWidth = function() {
        return p;
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
        return ua;
    };
    /**
     * The Y location of the mouse.
     * @return Integer Y
     */
    window.getMouseY = function() {
        return va;
    };
    window.getPointX = function() {
        return Ba;
    };

    window.getPointY = function() {
        return Ca;
    };
    window.getRegion = function(){
        return C;
    };
    window.sendMessage = function(a){
        L(a);
    };
    window.getCurrentScore = function() {
        return O;
    };
    window.disconnect = function(){
        Lb();
    };
    window.getSocket = function(){
        return f;
    };
    window.findServer = function(){
        Kb();
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
    window.getOriginalName  =function(){
        return originalName;
    };
    window.getToken = function(){
        return token;
    };
    window.createDataView = function(a) {
        return new DataView(new ArrayBuffer(a))
    };
    window.ejectMass = function(isForce) {
        if (ejectMassTime + ejectMassCooldown < new Date().getTime() || isForce) {
            ejectMassTime = new Date().getTime();
            sendMessage(21);
        }
    };
    window.splitPlayer = function(isForce){
        if (splitTime + splitCooldown < new Date().getTime() || isForce) {
            splitTime = new Date().getTime();
            sendMessage(17);
        }
    };
    window.explodePlayer = function(){
        sendMessage(21);
    };
    window.getFPS = function(){
        return framePerSecond;
    };
    window.getLeaderBoard = function(){
        return leaderBoard;
    };
})(window, window.jQuery, AgarBot, AgarBot.app);