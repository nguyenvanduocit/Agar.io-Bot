"use strict";
function _isVirus(cell) {
    return cell.f
}
function _getMass(x) {
    return x * x / 100
}
function _getSelectedBlob() {
    if (vndot.allNodes.hasOwnProperty(selectedBlobId))return vndot.allNodes[selectedBlobId];
    var maxBlob = _getBiggestBlob();
    return selectedBlobId = maxBlob.id, maxBlob
}
function _getBiggestBlob() {
    for (var maxSize = 0, maxBlob = null, blobs = vndot.myPoints, i = blobs.length - 1; i > -1; --i)blobs[i].size > maxSize && (maxBlob = blobs[i], maxSize = maxBlob.size);
    return maxBlob
}
function _switchSelectedBlob() {
    if (0 !== vndot.myPoints.length) {
        var index = vndot.myIds.indexOf(selectedBlobId);
        -1 === index ? selectedBlobId = _getBiggestBlob().id : (index += 1, index >= vndot.myIds.length && (index = 0), selectedBlobId = vndot.myIds[index])
    }
}
function _onDraw(ctx) {
    _drawMapBorders(ctx)
}
function _drawMapBorders(ctx) {
    ctx.strokeStyle = "#FFFFFF", ctx.beginPath(), ctx.moveTo(vndot.mapLeft, vndot.mapTop), ctx.lineTo(vndot.mapRight, vndot.mapTop), ctx.lineTo(vndot.mapRight, vndot.mapBottom), ctx.lineTo(vndot.mapLeft, vndot.mapBottom), ctx.lineTo(vndot.mapLeft, vndot.mapTop), ctx.closePath(), ctx.stroke()
}
function _drawMapCoodinate(ctx) {
    if (isSpecMode) {
        var title, letters = "ABCD", cellWidth = ~~(vndot.mapWidth / 4), cellHeight = ~~(vndot.mapHeight / 4);
        ctx.fillStyle = "#FFFFFF", ctx.font = "1100px Arial", ctx.textBaseline = "middle", ctx.globalAlpha = .3, ctx.textAlign = "center";
        var row, col;
        for (row = 0, col; 4 > row; ++row)for (col = 0; 4 > col; ++col) {
            var number = col + 1, leftX = col * cellWidth, leftY = row * cellHeight, rightX = (col + 1) * cellWidth, rightY = (row + 1) * cellHeight;
            title = letters[row] + number, ctx.fillText(title, vndot.mapLeft + ~~((leftX + rightX) / 2), vndot.mapTop + ~~((leftY + rightY) / 2))
        }
        for (ctx.strokeStyle = "#FFFFFF", ctx.lineWidth = 5, ctx.beginPath(), row = 1; 4 > row; ++row)ctx.moveTo(vndot.mapLeft, vndot.mapTop + row * cellHeight), ctx.lineWidth = 2, ctx.lineTo(vndot.mapLeft + vndot.mapWidth, vndot.mapTop + row * cellHeight);
        for (col = 1; 4 > col; ++col)ctx.moveTo(vndot.mapLeft + col * cellWidth, vndot.mapTop), ctx.lineWidth = 2, ctx.lineTo(vndot.mapLeft + col * cellWidth, vndot.mapTop + vndot.mapHeight);
        ctx.closePath(), ctx.stroke()
    }
}
function _getPreRenderMiniMapBackground() {
    if (miniMapBackground)return miniMapBackground;
    var miniMapWidth = 220, miniMapHeight = 220, canvas = document.createElement("canvas");
    canvas.width = miniMapWidth, canvas.height = miniMapHeight;
    var title, ctx = canvas.getContext("2d"), cellWidth = ~~(miniMapWidth / 4), cellHeight = ~~(miniMapHeight / 4), cellLetters = "ABCD";
    ctx.fillStyle = "#FFFFFF", ctx.font = "20px Ubuntu", ctx.textBaseline = "middle", ctx.textAlign = "center";
    for (var col, row = 0; 4 > row; ++row)for (col = 0; 4 > col; ++col) {
        var number = col + 1, leftX = col * cellWidth, leftY = row * cellHeight, rightX = (col + 1) * cellWidth, rightY = (row + 1) * cellHeight;
        ctx.globalAlpha = .1, ctx.fillRect(leftX + 2, leftY + 2, cellWidth - 4, cellHeight - 4), ctx.globalAlpha = .3, title = cellLetters[row] + number, ctx.fillText(title, ~~((leftX + rightX) / 2), ~~((leftY + rightY) / 2))
    }
    return miniMapBackground = canvas
}
function _drawMiniMap() {
    if (!miniMapCtx)return void console.log("undefined");
    var minimapScale = vndot.mapWidth / 220, miniMapWidth = 220, miniMapHeight = 220;
    miniMapCtx.clearRect(0, 0, miniMapWidth, miniMapHeight), miniMapCtx.drawImage(_getPreRenderMiniMapBackground(), 0, 0), miniMapCtx.font = "12px Ubuntu", miniMapCtx.textBaseline = "middle", miniMapCtx.textAlign = "center";
    var i, centerX, centerY, path, size = vndot.myPoints.length;
    if (size > 0) {
        var positions = vndot.viewPosition;
        centerX = ~~((positions[0] + vndot.mapRight) / minimapScale), centerY = ~~((positions[1] + vndot.mapBottom) / minimapScale), path = new Path2D, path.arc(centerX, centerY, 5, 0, 2 * Math.PI), miniMapCtx.fillStyle = vndot.myPoints[0].color, miniMapCtx.fill(path), miniMapCtx.fillStyle = currentPlayerColor, miniMapCtx.fillText(currentPlayerName, centerX, centerY - 10)
    }
    if (teamPlayers)for (skippedClearSkinCacheCounter > skippedClearSkinCacheMax ? (skinMap = {}, skippedClearSkinCacheCounter = 0) : skippedClearSkinCacheCounter++, i = teamPlayers.length - 1; i > -1; --i) {
        var player = teamPlayers[i];
        player.position && (skinMap[player.name] = {
            color: player.position.color,
            skin: player.position.skin
        }, centerX = ~~((player.position.centerX + Math.abs(vndot.mapLeft)) / minimapScale), centerY = ~~((player.position.centerY + Math.abs(vndot.mapTop)) / minimapScale), path = new Path2D, path.arc(centerX, centerY, 5, 0, 2 * Math.PI), miniMapCtx.fillStyle = player.color, miniMapCtx.fill(path), miniMapCtx.fillStyle = otherPlayerColor, miniMapCtx.fillText(player.name, centerX, centerY - 10))
    }
}
function _onStartSpec() {
    isSpecMode = !0, window.closeServerbrowser(), clearInterval(miniMapInterval), miniMapInterval = setInterval(function () {
        socket.emit("room.getPosition", [], function (data) {
            teamPlayers = data.players
        }), _drawMiniMap()
    }, 900)
}
function _onStartPlay() {
    vndot.imgCache = {}, window.closeServerbrowser(), isSpecMode = !1, clearInterval(miniMapInterval), miniMapInterval = setInterval(function () {
        _updatePosition(), _drawMiniMap()
    }, 900), socket.emit("room.play", {name: currentPlayerName || DEFAULT_NAME, color: vndot.myPoints[0].color})
}
function _onDead() {
    socket.emit("room.dead"), clearInterval(miniMapInterval), miniMapInterval = null
}
function _getLeaderBoard() {
    return vndot.leaderboard && vndot.leaderboard[0] ? vndot.leaderboard[0].name || "An unnamed cell" : ""
}
function _joinRoom() {
    currentLeaderBoard = _getLeaderBoard(), console.log("Joined room:", currentLeaderBoard), socket.emit("room.join", {
        ip: serverIp,
        leaderboard: currentLeaderBoard,
        name: currentPlayerName || DEFAULT_NAME,
        mode: vndot.gameMode,
        code: ":party" === vndot.gameMode ? currentCode : ""
    })
}
function _onLeaderBoardChange() {
    skippedClearSkinCacheCounter = 0, currentLeaderBoard = _getLeaderBoard(), socket.emit("room.change", {
        ip: serverIp,
        leaderboard: currentLeaderBoard,
        name: currentPlayerName || DEFAULT_NAME,
        color: vndot.myPoints[0] ? vndot.myPoints[0].color : "",
        mode: vndot.gameMode,
        code: ":party" === vndot.gameMode ? currentCode : ""
    })
}
function _updatePosition() {
    for (var blobs = [], positions = vndot.viewPosition, i = vndot.myPoints.length - 1; i > -1; --i) {
        var myBlob = vndot.myPoints[i];
        blobs.push({nx: myBlob.x, ny: myBlob.y, size: myBlob.size})
    }
    socket.emit("room.updatePosition", {
        centerX: ~~positions[0],
        centerY: ~~positions[1],
        blobs: blobs,
        skin: currentSkin || currentYinSkin || DEFAULT_SKIN,
        name: currentPlayerName || DEFAULT_NAME,
        color: vndot.myPoints[0] ? vndot.myPoints[0].color : ""
    }, function (data) {
        teamPlayers = data.players
    })
}
function sendmsg() {
    if (isChatting) {
        cboxInput.hide(), isChatting = !1;
        var text = cboxInput.val();
        if (";" === text[text.length - 1]) {
            text = text.substring(0, text.length - 1);
            var escapeText = $("<div>").text(text).html();
            socket.emit("msg", {type: "success", msg: escapeText}), toastr.success(escapeText, currentPlayerName)
        }
        sendMsgToCbox(currentPlayerName, text)
    } else cboxInput.show(), cboxInput.val(""), cboxInput.focus(), isChatting = !0
}
function sendMsgToCbox(name, msg) {
    $.post("http://www2.cbox.ws/box/?sec=submit&boxid=2348415&boxtag=cfjftf&_v=857", {nme: name, pst: msg})
}
function blurinput() {
    isChatting = !1, cboxInput.val(""), cboxInput.hide()
}
function _customKeyDownEvents(e) {
    var now = new Date;
    if (9 === e.keyCode)e.preventDefault(), myColorIndex = (myColorIndex + 1) % myColors.length; else if (13 === e.keyCode)sendmsg(); else if (77 === e.keyCode)turnOffMouse ? (turnOffMouse = !1, lastTimePressOnM = 0) : 500 > now - lastTimePressOnM ? turnOffMouse = !0 : lastTimePressOnM = now; else if (88 === e.keyCode)window.onMouseWheel(0, -.1); else if (90 === e.keyCode)window.onMouseWheel(0, .1); else if (16 === e.keyCode)_switchSelectedBlob(); else if (17 === e.keyCode)vndot.myPoints.length > 0 && (selectedBlobId = _getBiggestBlob().id); else if (69 === e.keyCode)enableCieCircle = !enableCieCircle; else if (67 === e.keyCode)$("#overlays").is(":visible") || toastr.info(guides, "Hot keys"); else {
        if (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey)return;
        messages.forEach(function (message) {
            if (message.code === e.keyCode) {
                if (2e3 > now - lastTimeSendMsg)return void toastr.info("DM ko spam!", "VNDOT");
                lastTimeSendMsg = now;
                var msg = message.msg, cbox = message.cbox, mapPosition = vndot.mapPosition;
                49 === message.code ? (msg = "Need help at <b>" + mapPosition + "</b>", cbox = ":cuu " + mapPosition) : 51 === message.code && (msg = "Enermies near <b>" + mapPosition + "</b>", cbox = mapPosition + " codich"), toastr[message.type](msg, currentPlayerName), socket.emit("msg", {
                    type: message.type,
                    msg: msg
                }), cbox && sendMsgToCbox(currentPlayerName, cbox)
            }
        })
    }
}
function toggleCbox() {
    _cbox.toggle()
}
function toggleMiniMap() {
    _miniMap.toggle()
}
var version = "0.3.3", SERVER_URL = "http://kscc-agarvn.rhcloud.com:8000", serverIp = null, isSpecMode = !1, currentPlayerColor = "#FFFF00", currentPlayerName = localStorage.getItem("nick") || "", currentLeaderBoard = null, currentCode = "", foodColor = "#3371FF", otherPlayerColor = "#3371FF", miniMapCtx = null, miniMapInterval = null, isChatting = !1, myColors = ["", "green", "blue", "red", "yellow", "pink", "#607D8B", "#F44336", "#E91E63", "#9C27B0", "#4CAF50", "#FF9800", "#795548"], myColorIndex = 0, framePerSecond = 0, teamPlayers = null, skinMap = {}, skippedClearSkinCacheCounter = 0, skippedClearSkinCacheMax = 10, currentSkin = localStorage.getItem("skin") || "", currentYinSkin = "", DEFAULT_SKIN = "http://heroandtn3.github.io/download/skin.svg", DEFAULT_NAME = "An unnamed cell", selectedBlobId = null, Huge = 2.66, Large = 1.25, Small = .7, Tiny = .375, Huge_Color = "#FF3C3C", Large_Color = "#FFFF00", Same_Color = "#3371FF", Small_Color = "#00AA00", Tiny_Color = "#CC66FF", cieSplitToEat = 0, cieMergeToEat = 0, enableCieMass = !1, enableCieSignal = !1, enableCieCircle = !1, showGridLines = !1, isKeepFoodColor = !1, turnOffMouse = !1, isDefaultSkinForAll = !1, isEnableYinSkin = !1, isTransparentCell = !1, i18n_lang = "en", i18n_dict = {
    en: {
        connecting: "Connecting",
        connect_help: "If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.",
        play: "Play",
        spectate: "Spectate",
        login_and_play: "Login and play",
        play_as_guest: "Play as guest",
        share: "Share",
        advertisement: "Advertisement",
        privacy_policy: "Privacy Policy",
        terms_of_service: "Terms of Service",
        changelog: "Changelog",
        instructions_mouse: "Move your mouse to control your cell",
        instructions_space: "Press <b>Space</b> to split",
        instructions_w: "Press <b>W</b> to eject some mass",
        gamemode_ffa: "FFA",
        gamemode_teams: "Teams",
        gamemode_experimental: "Experimental",
        region_select: " -- Select a Region -- ",
        region_us_east: "US East",
        region_us_west: "US West",
        region_north_america: "North America",
        region_south_america: "South America",
        region_europe: "Europe",
        region_turkey: "Turkey",
        region_poland: "Poland",
        region_east_asia: "East Asia",
        region_russia: "Russia",
        region_china: "China",
        region_oceania: "Oceania",
        region_australia: "Australia",
        region_players: "players",
        option_no_skins: "No skins",
        option_no_names: "No names",
        option_dark_theme: "Dark theme",
        option_no_colors: "No colors",
        option_show_mass: "Show mass",
        leaderboard: "Leaderboard",
        unnamed_cell: "An unnamed cell",
        last_match_results: "Last match results",
        score: "Score",
        leaderboard_time: "Leaderboard Time",
        mass_eaten: "Mass Eaten",
        top_position: "Top Position",
        position_1: "First",
        position_2: "Second",
        position_3: "Third",
        position_4: "Fourth",
        position_5: "Fifth",
        position_6: "Sixth",
        position_7: "Seventh",
        position_8: "Eighth",
        position_9: "Ninth",
        position_10: "Tenth",
        player_cells_eaten: "Player Cells Eaten",
        survival_time: "Survival Time",
        games_played: "Games played",
        highest_mass: "Highest mass",
        total_cells_eaten: "Total cells eaten",
        total_mass_eaten: "Total mass eaten",
        longest_survival: "Longest survival",
        logout: "Logout",
        stats: "Stats",
        shop: "Shop",
        party: "Party",
        party_description: "Play with your friends in the same map",
        create_party: "Create",
        creating_party: "Creating party...",
        join_party: "Join",
        back_button: "Back",
        joining_party: "Joining party...",
        joined_party_instructions: "You are now playing with this party:",
        party_join_error: "There was a problem joining that party, please make sure the code is correct, or try creating another party",
        login_tooltip: "Login with Facebook and get:<br /><br /><br />Start the game with more mass!<br />Level up to get even more starting mass!",
        create_party_instructions: "Give this link to your friends:",
        join_party_instructions: "Your friend should have given you a code, type it here:",
        "continue": "Continue",
        option_skip_stats: "Skip stats",
        stats_food_eaten: "food eaten",
        stats_highest_mass: "highest mass",
        stats_time_alive: "time alive",
        stats_leaderboard_time: "leaderboard time",
        stats_cells_eaten: "cells eaten",
        stats_top_position: "top position",
        "": ""
    }, "?": {}
};
i18n_lang = (window.navigator.userLanguage || window.navigator.language || "en").split("-")[0], i18n_dict.hasOwnProperty(i18n_lang) || (i18n_lang = "en");
var i18n = i18n_dict[i18n_lang];
!function (d, e) {
    function Nb() {
        Ga = !0, eb(), setInterval(eb, 18e4), L = Ha = document.getElementById("canvas"), f = L.getContext("2d"), L.onmousedown = function (a) {
            if (fb) {
                var b = a.clientX - (5 + h / 5 / 2), c = a.clientY - (5 + h / 5 / 2);
                if (Math.sqrt(b * b + c * c) <= h / 5 / 2)return ca(), void H(17)
            }
            na = 1 * a.clientX, oa = 1 * a.clientY, Ia(), ca()
        }, L.onmousemove = function (a) {
            na = 1 * a.clientX, oa = 1 * a.clientY, Ia()
        }, L.onmouseup = function () {
        }, /firefox/i.test(navigator.userAgent) ? document.addEventListener("DOMMouseScroll", onMouseWheel, !1) : document.body.onmousewheel = onMouseWheel;
        var a = !1, b = !1, c = !1;
        d.onkeydown = function (n) {
            isChatting && 13 != n.keyCode || (32 == n.keyCode && (a || (ca(), H(17), a = !0)), 81 == n.keyCode && (b || (H(18), b = !0)), 87 === n.keyCode && (ca(), H(21), c = !0), 27 === n.keyCode && (e("#mainPanel").show(), e("#overlays").toggle()), _customKeyDownEvents(n))
        }, d.onkeyup = function (n) {
            isChatting || (32 === n.keyCode && (a = !1), 87 === n.keyCode && (c = !1), 81 === n.keyCode && b && (H(19), b = !1))
        }, d.onblur = function () {
            H(19), c = b = a = !1
        }, d.onresize = hb, d.requestAnimationFrame(ib), setInterval(ca, 40), y && e("#region").val(y), jb(), qa(e("#region").val()), 0 == Ja && y && M(), pa(0), hb(), d.location.hash && 6 <= d.location.hash.length && kb(d.location.hash)
    }

    function onMouseWheel(a, zoomAdjust) {
        zoomAdjust ? N += zoomAdjust : N *= Math.pow(.95, a.wheelDelta / -120 || a.detail || 0), .1 > N && (N = .1), N > 4 / g && (N = 4 / g)
    }

    function Ob() {
        if (.4 > g)da = null; else {
            for (var e, a = Number.POSITIVE_INFINITY, b = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY, n = Number.NEGATIVE_INFINITY, d = v.length - 1; d > -1; --d)e = v[d], e.H() && (e.L || 20 < e.size * g && (a = Math.min(e.x - e.size, a), b = Math.min(e.y - e.size, b), c = Math.max(e.x + e.size, c), n = Math.max(e.y + e.size, n)));
            for (da = Pb.X({
                ba: a - 10,
                ca: b - 10,
                Z: c + 10,
                $: n + 10,
                fa: 2,
                ha: 4
            }), d = 0, d = v.length - 1; d > -1; --d)if (e = v[d], e.H() && 20 < e.size * g)for (a = 0, a = e.a.length - 1; a > -1; --a)b = e.a[a].x, c = e.a[a].y, b >= t - h / 2 / g && c >= u - q / 2 / g && t + h / 2 / g >= b && u + q / 2 / g >= c && da.Y(e.a[a])
        }
    }

    function Ia() {
        ra = (na - h / 2) / g + t, sa = (oa - q / 2) / g + u
    }

    function eb() {
        null === ta && (ta = {}, e("#region").children().each(function () {
            var a = e(this), b = a.val();
            b && (ta[b] = ha(a.attr("data-itr")))
        })), e.get(ea + "info", function (a) {
            var region, b = {};
            for (region in a.regions) {
                var n = region.split(":")[0];
                b[n] = b[n] || 0, b[n] += a.regions[region].numPlayers
            }
            for (region in b)e('#region option[value="' + region + '"]').text(ta[region] + " (" + b[region] + " players)")
        }, "json")
    }

    function lb() {
        e("#overlays").hide(), e("#stats").hide(), e("#mainPanel").hide(), W = fa = !1, jb()
    }

    function qa(a) {
        a && a != y && (e("#region").val() != a && e("#region").val(a), y = d.localStorage.location = a, e(".region-message").hide(), e(".region-message." + a).show(), e(".btn-needs-server").prop("disabled", !1), Ga && M())
    }

    function pa(a) {
        fa || W || (I = null, Ka || (e("#adsBottom").show(), e("#g300x250").hide(), e("#a300x250").show()), nb(Ka ? d.ac : d.aa), Ka = !1, 1e3 > a && (s = 1), fa = !0, e("#mainPanel").show(), a > 0 ? e("#overlays").fadeIn(a) : e("#overlays").show())
    }

    function ga(a) {
        e("#helloContainer").attr("data-gamemode", a), X = a, e("#gamemode").val(a)
    }

    function jb() {
        e("#region").val() ? d.localStorage.location = e("#region").val() : d.localStorage.location && e("#region").val(d.localStorage.location), e("#region").val() ? e("#locationKnown").append(e("#region")) : e("#locationUnknown").append(e("#region"))
    }

    function nb(a) {
        d.googletag && d.googletag.cmd.push(function () {
            La && (La = !1, setTimeout(function () {
                La = !0
            }, 6e4 * Qb), d.googletag && d.googletag.pubads && d.googletag.pubads().refresh && d.googletag.pubads().refresh(a))
        })
    }

    function mb(a) {
        d.googletag && d.googletag.pubads && d.googletag.pubads().clear && d.googletag.pubads().clear(a)
    }

    function ha(a) {
        return d.i18n[a] || d.i18n_dict.en[a] || a
    }

    function ob() {
        var a = ++Ja;
        console.log("Find " + y + X), e.ajax(ea + "findServer", {
            error: function () {
                setTimeout(ob, 1e3)
            }, success: function (b) {
                if (a == Ja) {
                    b.alert && alert(b.alert);
                    var wantedIp = window.ksGetWantedIp();
                    console.log("Found IP:", b.ip), wantedIp && wantedIp !== b.ip ? (window.ksUpdateConnectBtn(), setTimeout(ob, 1e3)) : (window.ksStopConnect(), Ma("ws://" + b.ip, b.token))
                }
            }, dataType: "json", method: "POST", cache: !1, crossDomain: !0, data: (y + X || "?") + "\n2200049715"
        })
    }

    function M() {
        Ga && y && (e("#connecting").show(), ob())
    }

    function Ma(a, b) {
        if (currentCode = b, r) {
            r.onopen = null, r.onmessage = null, r.onclose = null;
            try {
                r.close()
            } catch (c) {
            }
            r = null
        }
        if (Na.ip && (a = "ws://" + Na.ip), null != O) {
            var n = O;
            O = function () {
                n(b)
            }
        }
        if (Rb) {
            var d = a.split(":");
            a = d[0] + "s://ip-" + d[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + +d[2]
        }
        z = [], l = [], J = {}, v = [], Y = [], w = [], A = B = null, P = 0, ia = !1, console.log("Connecting to " + a), r = new WebSocket(a);
        var connectingIp = a.substring(5);
        r.binaryType = "arraybuffer", r.onopen = function () {
            serverIp = connectingIp, ":party" === vndot.gameMode && currentCode.length > 0 && currentCode.length < 10 ? e("#ksCurrentIp").html(serverIp + " - " + currentCode) : e("#ksCurrentIp").html(serverIp);
            var a;
            console.log("socket open"), currentLeaderBoard = null, a = Q(5), a.setUint8(0, 254), a.setUint32(1, 5, !0), R(a), a = Q(5), a.setUint8(0, 255), a.setUint32(1, 2200049715, !0), R(a), a = Q(1 + b.length), a.setUint8(0, 80);
            for (var c = 0, len = b.length; len > c; ++c)a.setUint8(c + 1, b.charCodeAt(c));
            R(a), pb(), W = fa = !1
        }, r.onmessage = Sb, r.onclose = Tb, r.onerror = function () {
            console.log("socket error")
        }
    }

    function Q(a) {
        return new DataView(new ArrayBuffer(a))
    }

    function R(a) {
        r.send(a.buffer)
    }

    function Tb() {
        ia && (ua = 500), console.log("socket close"), setTimeout(M, ua), ua *= 2
    }

    function Sb(a) {
        Ub(new DataView(a.data))
    }

    function Ub(a) {
        function b() {
            for (var b = ""; ;) {
                var d = a.getUint16(c, !0);
                if (c += 2, 0 == d)break;
                b += String.fromCharCode(d)
            }
            return b
        }

        var c = 0;
        switch (240 == a.getUint8(c) && (c += 5), a.getUint8(c++)) {
            case 16:
                Vb(a, c);
                break;
            case 17:
                ja = a.getFloat32(c, !0), c += 4, ka = a.getFloat32(c, !0), c += 4, la = a.getFloat32(c, !0), c += 4;
                break;
            case 20:
                l = [], z = [];
                break;
            case 21:
                Oa = a.getInt16(c, !0), c += 2, Pa = a.getInt16(c, !0), c += 2, Qa || (Qa = !0, va = Oa, wa = Pa);
                break;
            case 32:
                z.push(a.getUint32(c, !0)), c += 4;
                break;
            case 49:
                if (null != B)break;
                var n = a.getUint32(c, !0);
                c += 4, w = [];
                for (var d = 0; n > d; ++d) {
                    var e = a.getUint32(c, !0);
                    c += 4, w.push({id: e, name: b()})
                }
                qb(), null === currentLeaderBoard ? _joinRoom() : _getLeaderBoard() !== currentLeaderBoard && _onLeaderBoardChange();
                break;
            case 50:
                for (B = [], n = a.getUint32(c, !0), c += 4, d = 0; n > d; ++d)B.push(a.getFloat32(c, !0)), c += 4;
                qb();
                break;
            case 64:
                xa = a.getFloat64(c, !0), c += 8, ya = a.getFloat64(c, !0), c += 8, za = a.getFloat64(c, !0), c += 8, Aa = a.getFloat64(c, !0), c += 8, ja = (za + xa) / 2, ka = (Aa + ya) / 2, la = 1, 0 == l.length && (t = ja, u = ka, g = la), a.byteLength > c && (a.getUint32(c, !0), c += 4, rb = b(), console.log("Server version " + rb));
                break;
            case 81:
                var f = a.getUint32(c, !0);
                c += 4;
                var k = a.getUint32(c, !0);
                c += 4;
                var h = a.getUint32(c, !0);
                c += 4, setTimeout(function () {
                    Z({d: f, e: k, c: h})
                }, 1200)
        }
    }

    function Vb(a, b) {
        function c() {
            for (var c = ""; ;) {
                var d = a.getUint16(b, !0);
                if (b += 2, 0 == d)break;
                c += String.fromCharCode(d)
            }
            return c
        }

        function n() {
            for (var c = ""; ;) {
                var d = a.getUint8(b++);
                if (0 == d)break;
                c += String.fromCharCode(d)
            }
            return c
        }

        sb = F = Date.now(), ia || (ia = !0, Wb()), Ra = !1;
        var p = a.getUint16(b, !0);
        b += 2;
        for (var f = 0; p > f; ++f) {
            var C = J[a.getUint32(b, !0)], k = J[a.getUint32(b + 4, !0)];
            b += 8, C && k && (k.R(), k.o = k.x, k.p = k.y, k.n = k.size, k.C = C.x, k.D = C.y, k.m = k.size, k.K = F, Xb(C, k))
        }
        for (f = 0; p = a.getUint32(b, !0), b += 4, 0 != p;) {
            ++f;
            var g;
            C = a.getInt32(b, !0), b += 4, k = a.getInt32(b, !0), b += 4, g = a.getInt16(b, !0), b += 2;
            var m = a.getUint8(b++), K = a.getUint8(b++), S = a.getUint8(b++);
            K = Yb(m << 16 | K << 8 | S), S = a.getUint8(b++);
            var h = !!(1 & S), q = !!(16 & S), r = null;
            2 & S && (b += 4 + a.getUint32(b, !0)), 4 & S && (r = n());
            var s = c();
            m = null, J.hasOwnProperty(p) ? (m = J[p], m.J(), m.o = m.x, m.p = m.y, m.n = m.size, m.color = K) : (m = new $(p, C, k, g, K, s), v.push(m), J[p] = m, m.ia = C, m.ja = k), m.f = h, m.j = q, m.C = C, m.D = k, m.m = g, m.K = F, m.T = S, r && (m.V = r), s && m.t(s), -1 != z.indexOf(p) && -1 == l.indexOf(m) && (l.push(m), 1 == l.length && (t = m.x, u = m.y, document.getElementById("overlays").style.display = "none", x = [], Sa = 0, Ta = l[0].color, Ua = !0, ub = Date.now(), T = Va = Wa = 0, _onStartPlay()))
        }
        for (C = a.getUint32(b, !0), b += 4, f = 0; C > f; f++)p = a.getUint32(b, !0), b += 4, m = J[p], null != m && m.R();
        Ra && 0 == l.length && (_onDead(), vb = Date.now(), Ua = !1, fa || W || (enableStats ? (nb(d.ab), Zb(), W = !0, e("#overlays").fadeIn(3e3), e("#stats").show()) : pa(3e3)))
    }

    function Wb() {
        e("#connecting").hide(), xb(), O && (O(), O = null), null != Xa && clearTimeout(Xa), Xa = setTimeout(function () {
            d.ga && (++yb, d.ga("set", "dimension2", yb))
        }, 1e4)
    }

    function ca() {
        if (!turnOffMouse && aa()) {
            var a = na - h / 2, b = oa - q / 2;
            64 > a * a + b * b || .01 > Math.abs(zb - ra) && .01 > Math.abs(Ab - sa) || (zb = ra, Ab = sa, a = Q(13), a.setUint8(0, 16), a.setInt32(1, ra, !0), a.setInt32(5, sa, !0), a.setUint32(9, 0, !0), R(a))
        }
    }

    function xb() {
        if (aa() && ia && null != I) {
            var a = Q(1 + 2 * I.length);
            a.setUint8(0, 0);
            for (var b = 0, len = I.length; len > b; ++b)a.setUint16(1 + 2 * b, I.charCodeAt(b), !0);
            R(a), I = null
        }
    }

    function aa() {
        return null != r && r.readyState == r.OPEN
    }

    function H(a) {
        if (aa()) {
            var b = Q(1);
            b.setUint8(0, a), R(b)
        }
    }

    function pb() {
        if (aa() && null != D) {
            var a = Q(1 + D.length);
            a.setUint8(0, 81);
            for (var b = 0, len = D.length; len > b; ++b)a.setUint8(b + 1, D.charCodeAt(b));
            R(a)
        }
    }

    function hb() {
        h = 1 * d.innerWidth, q = 1 * d.innerHeight, Ha.width = L.width = h, Ha.height = L.height = q;
        var a = e("#helloContainer");
        a.css("transform", "none");
        var b = a.height(), c = d.innerHeight;
        b > c / 1.1 ? a.css("transform", "translate(-40%, -50%) scale(" + c / b / 1 + ")") : a.css("transform", "translate(-40%, -50%)"), Bb()
    }

    function Cb() {
        var a;
        return a = 1 * Math.max(q / 1080, h / 1920), a *= N
    }

    function $b() {
        if (0 !== l.length) {
            var a = 0, b = 0;
            for (b = l.length - 1; b > -1; --b)a += l[b].size;
            a = Math.pow(Math.min(64 / a, 1), .4) * Cb(), g = (9 * g + a) / 10
        }
    }

    function Bb() {
        var a, b = Date.now();
        ++ac, F = b;
        var d = 0;
        if (0 < l.length) {
            $b();
            var c = 0;
            for (a = 0, d = l.length - 1; d > -1; --d)l[d].J(), a += l[d].x / l.length, c += l[d].y / l.length;
            ja = a, ka = c, la = g, t = (t + a) / 2, u = (u + c) / 2
        } else t = (29 * t + ja) / 30, u = (29 * u + ka) / 30, g = (9 * g + la * Cb()) / 10;
        for (Ob(), Ia(), Ya || f.clearRect(0, 0, h, q), Ya ? (f.fillStyle = isDarkTheme ? "#111111" : "#F2FBFF", f.globalAlpha = .05, f.clearRect(0, 0, h, q), f.globalAlpha = 1) : bc(), v.sort(function (a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size
        }), f.save(), f.translate(h / 2, q / 2), f.scale(g, g), f.translate(-t, -u), _drawMapCoodinate(f), d = 0; d < Y.length; d++)Y[d].s(f);
        for (d = 0; d < v.length; d++)v[d].s(f);
        if (_onDraw(vndot.ctx), Qa) {
            for (va = (3 * va + Oa) / 4, wa = (3 * wa + Pa) / 4, f.save(), f.strokeStyle = "#FFAAAA", f.lineWidth = 10, f.lineCap = "round", f.lineJoin = "round", f.globalAlpha = .5, f.beginPath(), d = l.length - 1; d > -1; --d)f.moveTo(l[d].x, l[d].y), f.lineTo(va, wa);
            f.stroke(), f.restore()
        }
        if (f.restore(), A && A.width && f.drawImage(A, h - A.width - 10, 10), P = Math.max(P, Db()), 0 != P) {
            null == Ca && (Ca = new Da(24, "#FFFFFF"));
            var cieBbText = enableCieMass ? " - STE: " + cieSplitToEat + " - MTE: " + cieMergeToEat : "";
            Ca.u(ha("score") + ": " + ~~(P / 100) + cieBbText + " [" + vndot.myPoints.length + "/16]" + (turnOffMouse ? " ✴️ Mouse off" : "") + " - FPS: " + framePerSecond), c = Ca.F(), a = c.width, f.globalAlpha = 1, f.drawImage(c, 15, q - 10 - 24 - 5)
        }
        cc(), b = Date.now() - b, b > 1e3 / 60 ? G -= .01 : 1e3 / 65 > b && (G += .01), .4 > G && (G = .4), G > 1 && (G = 1), b = F - Eb, !aa() || fa || W ? (s += b / 2e3, s > 1 && (s = 1)) : (s -= b / 300, 0 > s && (s = 0)), Eb = F
    }

    function bc() {
        if (f.fillStyle = isDarkTheme ? "#111111" : "#F2FBFF", f.clearRect(0, 0, h, q), showGridLines) {
            f.save(), f.strokeStyle = isDarkTheme ? "#AAAAAA" : "#000000", f.globalAlpha = .2 * g, f.beginPath();
            for (var a = h / g, b = q / g, c = (-t + a / 2) % 50; a > c; c += 50)f.moveTo(c * g - .5, 0), f.lineTo(c * g - .5, b * g);
            for (c = (-u + b / 2) % 50; b > c; c += 50)f.moveTo(0, c * g - .5), f.lineTo(a * g, c * g - .5);
            f.closePath(), f.stroke(), f.restore()
        }
    }

    function cc() {
        if (fb && Za.width) {
            var a = h / 5;
            f.drawImage(Za, 5, 5, a, a)
        }
    }

    function Db() {
        var a = 0, b = 0;
        for (b = l.length - 1; b > -1; --b)a += l[b].m * l[b].m;
        return a
    }

    function qb() {
        if (A = null, (null != B || 0 != w.length) && (null != B || showCellName)) {
            A = document.createElement("canvas");
            var a = A.getContext("2d"), b = 60;
            b = null == B ? b + 24 * w.length : b + 180;
            var c = Math.min(200, .3 * h) / 200;
            if (A.width = 200 * c, A.height = b * c, a.scale(c, c), a.globalAlpha = .4, a.fillStyle = "#000000", a.fillRect(0, 0, 200, b), a.globalAlpha = 1, a.fillStyle = "#FFFFFF", c = null, c = ha("leaderboard"), a.font = "30px Ubuntu", a.textAlign = "center", a.textBaseline = "middle", a.fillText(c, 100, 40), null === B) {
                a.font = "20px Ubuntu", b = 0;
                for (var len = w.length; len > b; ++b)c = w[b].name || ha("unnamed_cell"), showCellName || (c = ha("unnamed_cell")), -1 != z.indexOf(w[b].id) ? (l[0].name && (c = l[0].name), a.fillStyle = "#FFAAAA") : skinMap.hasOwnProperty(w[b].name) ? a.fillStyle = skinMap[w[b].name].color || "green" : a.fillStyle = "#FFFFFF", c = b + 1 + ". " + c, a.fillText(c, 100, 70 + 24 * b)
            } else {
                b = c = 0;
                for (var _len = B.length; _len > b; ++b) {
                    var d = c + B[b] * Math.PI * 2;
                    a.fillStyle = dc[b + 1], a.beginPath(), a.moveTo(100, 140), a.arc(100, 140, 80, c, d, !1), a.fill(), c = d
                }
            }
        }
    }

    function $a(a, b, c, d, e) {
        this.P = a, this.x = b, this.y = c, this.g = d, this.b = e
    }

    function $(a, b, c, d, e, f) {
        this.id = a, this.o = this.x = b, this.p = this.y = c, this.n = this.size = d, this.color = e, this.a = [], this.Q(), this.t(f)
    }

    function Yb(a) {
        for (a = a.toString(16); 6 > a.length;)a = "0" + a;
        return "#" + a
    }

    function Da(a, b, c, d) {
        a && (this.q = a), b && (this.M = b), this.O = !!c, d && (this.r = d)
    }

    function ec(a) {
        for (var c, d, b = a.length; b > 0;)d = Math.floor(Math.random() * b), b--, c = a[b], a[b] = a[d], a[d] = c
    }

    function Z(a, b) {
        var c = "1" == e("#helloContainer").attr("data-has-account-data");
        if (e("#helloContainer").attr("data-has-account-data", "1"), null == b && d.localStorage[U]) {
            var n = JSON.parse(d.localStorage[U]);
            n.xp = a.e, n.xpNeeded = a.c, n.level = a.d, d.localStorage[U] = JSON.stringify(n)
        }
        if (c) {
            var p = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[0];
            if (c = +e(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0], n = e(".agario-profile-panel .progress-bar-star").first().text(), n != a.d)Z({
                e: c,
                c: c,
                d: n
            }, function () {
                e(".agario-profile-panel .progress-bar-star").text(a.d), e(".agario-exp-bar .progress-bar").css("width", "100%"), e(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e(".progress-bar-star").removeClass("animated tada")
                }), setTimeout(function () {
                    e(".agario-exp-bar .progress-bar-text").text(a.c + "/" + a.c + " XP"), Z({
                        e: 0,
                        c: a.c,
                        d: a.d
                    }, function () {
                        Z(a, b)
                    })
                }, 1e3)
            }); else {
                var f = Date.now(), g = function () {
                    var c;
                    c = (Date.now() - f) / 1e3, c = 0 > c ? 0 : c > 1 ? 1 : c, c = c * c * (3 - 2 * c), e(".agario-exp-bar .progress-bar-text").text(~~(p + (a.e - p) * c) + "/" + a.c + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * (p + (a.e - p) * c) / a.c).toFixed(2) + "%"), 1 > c ? d.requestAnimationFrame(g) : b && b()
                };
                d.requestAnimationFrame(g)
            }
        } else e(".agario-profile-panel .progress-bar-star").text(a.d), e(".agario-exp-bar .progress-bar-text").text(a.e + "/" + a.c + " XP"), e(".agario-exp-bar .progress-bar").css("width", (88 * a.e / a.c).toFixed(2) + "%"), b && b()
    }

    function Gb(a) {
        "string" == typeof a && (a = JSON.parse(a)), Date.now() + 18e5 > a.expires ? e("#helloContainer").attr("data-logged-in", "0") : (d.localStorage[U] = JSON.stringify(a), D = a.authToken, e(".agario-profile-name").text(a.name), pb(), Z({
            e: a.xp,
            c: a.xpNeeded,
            d: a.level
        }), e("#helloContainer").attr("data-logged-in", "1"))
    }

    function fc(a) {
        a = a.split("\n"), Gb({
            name: a[0],
            fbid: a[1],
            authToken: a[2],
            expires: 1e3 * +a[3],
            level: +a[4],
            xp: +a[5],
            xpNeeded: +a[6]
        })
    }

    function ab(a) {
        if ("connected" == a.status) {
            var b = a.authResponse.accessToken;
            console.log(b), d.FB.api("/me/picture?width=180&height=180", function (a) {
                d.localStorage.fbPictureCache = a.data.url, e(".agario-profile-picture").attr("src", a.data.url)
            }), e("#helloContainer").attr("data-logged-in", "1"), null != D ? e.ajax(ea + "checkToken", {
                error: function () {
                    D = null, ab(a)
                }, success: function (a) {
                    a = a.split("\n"), Z({d: +a[0], e: +a[1], c: +a[2]})
                }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: D
            }) : e.ajax(ea + "facebookLogin", {
                error: function () {
                    D = null, e("#helloContainer").attr("data-logged-in", "0")
                }, success: fc, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: b
            })
        }
    }

    function kb(a) {
        ga(":party"), e("#helloContainer").attr("data-party-state", "4"), a = decodeURIComponent(a).replace(/.*#/gim, ""), bb("#" + d.encodeURIComponent(a)), e.ajax(ea + "getToken", {
            error: function () {
                e("#helloContainer").attr("data-party-state", "6")
            }, success: function (b) {
                b = b.split("\n"), e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a)), e("#helloContainer").attr("data-party-state", "5"), ga(":party"), Ma("ws://" + b[0], a)
            }, dataType: "text", method: "POST", cache: !1, crossDomain: !0, data: a
        })
    }

    function bb(a) {
        d.history && d.history.replaceState && d.history.replaceState({}, d.document.title, a)
    }

    function Xb(a, b) {
        var c = -1 != z.indexOf(a.id), d = -1 != z.indexOf(b.id), e = 30 > b.size;
        c && e && ++Sa, e || c && (d || ++Va)
    }

    function Hb(a) {
        a = ~~a;
        var b = (a % 60).toString();
        return a = (~~(a / 60)).toString(), 2 > b.length && (b = "0" + b), a + ":" + b
    }

    function Zb() {
        e(".stats-food-eaten").text(Sa), e(".stats-time-alive").text(Hb((vb - ub) / 1e3)), e(".stats-leaderboard-time").text(Hb(Wa)), e(".stats-highest-mass").text(~~(P / 100)), e(".stats-cells-eaten").text(Va), e(".stats-top-position").text(0 == T ? ":(" : T);
        var a = document.getElementById("statsGraph");
        if (a) {
            var b = a.getContext("2d"), c = a.width;
            if (a = a.height, b.clearRect(0, 0, c, a), 2 < x.length) {
                for (var d = 200, p = 0; p < x.length; p++)d = Math.max(x[p], d);
                for (b.lineWidth = 3, b.lineCap = "round", b.lineJoin = "round", b.strokeStyle = Ta, b.fillStyle = Ta, b.beginPath(), b.moveTo(0, a - x[0] / d * (a - 10) + 10), p = 1; p < x.length; p += Math.max(~~(x.length / c), 1)) {
                    for (var f = p / (x.length - 1) * c, g = [], k = -20; 20 >= k; ++k)0 > p + k || p + k >= x.length || g.push(x[p + k]);
                    g = g.reduce(function (a, b) {
                            return a + b
                        }) / g.length / d, b.lineTo(f, a - g * (a - 10) + 10)
                }
                b.stroke(), b.globalAlpha = .5, b.lineTo(c, a), b.lineTo(0, a), b.fill(), b.globalAlpha = 1
            }
        }
    }

    var vndot = {};
    if (window.vndot = vndot, Object.defineProperty(vndot, "connect", {
            get: function () {
                return Aa
            }
        }), Object.defineProperty(vndot, "ctx", {
            get: function () {
                return f
            }
        }), Object.defineProperty(vndot, "webSocket", {
            get: function () {
                return r
            }
        }), Object.defineProperty(vndot, "myIds", {
            get: function () {
                return z
            }
        }), Object.defineProperty(vndot, "myPoints", {
            get: function () {
                return l
            }
        }), Object.defineProperty(vndot, "allNodes", {
            get: function () {
                return J
            }
        }), Object.defineProperty(vndot, "allItems", {
            get: function () {
                return v
            }
        }), Object.defineProperty(vndot, "mouseX2", {
            get: function () {
                return fa
            }
        }), Object.defineProperty(vndot, "mouseY2", {
            get: function () {
                return ga
            }
        }), Object.defineProperty(vndot, "mapLeft", {
            get: function () {
                return xa
            }
        }), Object.defineProperty(vndot, "mapTop", {
            get: function () {
                return ya
            }
        }), Object.defineProperty(vndot, "mapRight", {
            get: function () {
                return za
            }
        }), Object.defineProperty(vndot, "mapBottom", {
            get: function () {
                return Aa
            }
        }), Object.defineProperty(vndot, "isShowSkins", {
            get: function () {
                return enableSkin
            }
        }), Object.defineProperty(vndot, "isNightMode", {
            get: function () {
                return sa
            }
        }), Object.defineProperty(vndot, "isShowMass", {
            get: function () {
                return gb
            }
        }), Object.defineProperty(vndot, "gameMode", {
            get: function () {
                return X
            }
        }), Object.defineProperty(vndot, "fireFunction", {
            get: function () {
                return G
            }
        }), Object.defineProperty(vndot, "isColors", {
            get: function () {
                return Ka
            }
        }), Object.defineProperty(vndot, "defaultSkins", {
            get: function () {
                return jb
            }
        }), Object.defineProperty(vndot, "imgCache", {
            get: function () {
                return ba
            }, set: function (value) {
                ba = value
            }
        }), Object.defineProperty(vndot, "textFunc", {
            get: function () {
                return ua
            }
        }), Object.defineProperty(vndot, "textBlobs", {
            get: function () {
                return Bb
            }
        }), Object.defineProperty(vndot, "hasNickname", {
            get: function () {
                return va
            }
        }), Object.defineProperty(vndot, "scale", {
            get: function () {
                return k
            }
        }), Object.defineProperty(vndot, "CachedCanvas", {
            get: function () {
                return ua
            }
        }), Object.defineProperty(vndot, "Cell", {
            get: function () {
                return aa
            }
        }), Object.defineProperty(vndot, "mapWidth", {
            get: function () {
                return ~~(Math.abs(vndot.mapLeft) + vndot.mapRight)
            }
        }), Object.defineProperty(vndot, "mapHeight", {
            get: function () {
                return ~~(Math.abs(vndot.mapTop) + vndot.mapBottom)
            }
        }), Object.defineProperty(vndot, "leaderboard", {
            get: function () {
                return w
            }
        }), Object.defineProperty(vndot, "viewPosition", {
            get: function () {
                return [ja, ka]
            }
        }), Object.defineProperty(vndot, "mapPosition", {
            get: function () {
                var xCenter = Math.abs(ja + vndot.mapRight), yCenter = Math.abs(ka + vndot.mapBottom), cellWidth = vndot.mapWidth / 4, cellHeight = vndot.mapHeight / 4, letters = "ABCD", row = ~~(yCenter / cellHeight), col = ~~(xCenter / cellWidth);
                return letters[row] + (col + 1)
            }
        }), window.onMouseWheel = onMouseWheel, window.ksOb = ob, !d.agarioNoInit) {
        var cb = d.location.protocol, Rb = "https:" == cb, ea = cb + "//m.agar.io/", Fa = d.navigator.userAgent;
        if (-1 != Fa.indexOf("Android"))d.ga && d.ga("send", "event", "MobileRedirect", "PlayStore"), setTimeout(function () {
            d.location.href = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io"
        }, 1e3); else if (-1 != Fa.indexOf("iPhone") || -1 != Fa.indexOf("iPad") || -1 != Fa.indexOf("iPod"))d.ga && d.ga("send", "event", "MobileRedirect", "AppStore"), setTimeout(function () {
            d.location.href = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp"
        }, 1e3); else {
            var Ha, f, L, h, q, da = null, r = null, t = 0, u = 0, z = [], l = [], J = {}, v = [], Y = [], w = [], na = 0, oa = 0, ra = -1, sa = -1, ac = 0, F = 0, Eb = 0, I = null, xa = 0, ya = 0, za = 1e4, Aa = 1e4, g = 1, y = null, enableSkin = !0, showCellName = !0, isNoColor = !1, Ra = !1, P = 0, isDarkTheme = !0, isShowMass = !0, ja = t = ~~((xa + za) / 2), ka = u = ~~((ya + Aa) / 2), la = 1, X = "", B = null, Ga = !1, Qa = !1, Oa = 0, Pa = 0, va = 0, wa = 0, Kb = 0, dc = ["#333333", "#FF3333", "#33FF33", "#3333FF"], Ya = !1, ia = !1, sb = 0, D = null, N = 1, s = 1, fa = !1, Ja = 0, Na = {}, rb = null;
            !function () {
                var a = d.location.search;
                "?" == a.charAt(0) && (a = a.slice(1)), a = a.split("&");
                for (var b = 0; b < a.length; b++) {
                    var c = a[b].split("=");
                    Na[c[0]] = c[1]
                }
            }();
            var fb = "ontouchstart" in d && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.navigator.userAgent), Za = new Image;
            Za.src = "img/split.png";
            var Lb = document.createElement("canvas");
            if ("undefined" == typeof console || "undefined" == typeof DataView || "undefined" == typeof WebSocket || null == Lb || null == Lb.getContext || null == d.localStorage)alert("You browser does not support this game, we recommend you to use Firefox to play this"); else {
                var ta = null;
                d.setNick = function (a) {
                    turnOffMouse = !1, d.ga && d.ga("send", "event", "Nick", a.toLowerCase()), lb(), I = a, xb(), P = 0, currentPlayerName = a, localStorage.setItem("nick", a);
                    var temp = a.split(":");
                    currentYinSkin = temp.length > 1 && /^[\u0001-\uFFFE]$/.test(temp[temp.length - 1]) ? "http://upload.happyfor.me/getimg.php?id=" + temp.pop().charCodeAt(0) : ""
                }, d.setRegion = qa;
                var Ka = !0;
                d.setSkins = function (a) {
                    enableSkin = a
                }, d.setNames = function (a) {
                    showCellName = a
                }, d.setDarkTheme = function (a) {
                    isDarkTheme = a
                }, d.setColors = function (a) {
                    isNoColor = a
                }, d.setShowMass = function (a) {
                    isShowMass = a
                }, d.spectate = function () {
                    I = null, H(1), lb(), 0 === vndot.myPoints.length && _onStartSpec()
                }, d.setGameMode = function (gameMode) {
                    gameMode !== X && (":party" === X && e("#helloContainer").attr("data-party-state", "0"), ga(gameMode), ":party" !== gameMode && M())
                }, d.setAcid = function (a) {
                    Ya = a
                }, null != d.localStorage && (null == d.localStorage.AB9 && (d.localStorage.AB9 = 0 + ~~(100 * Math.random())), Kb = +d.localStorage.AB9, d.ABGroup = Kb), e.get(cb + "//gc.agar.io", function (a) {
                    var b = a.split(" ");
                    a = b[0], b = b[1] || "", -1 == ["UA"].indexOf(a) && Mb.push("ussr"), ma.hasOwnProperty(a) && ("string" == typeof ma[a] ? y || qa(ma[a]) : ma[a].hasOwnProperty(b) && (y || qa(ma[a][b])))
                }, "text");
                var La = !0, Qb = 0, ma = {
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
                }, O = null;
                if (d.connect) {
                    var oldConnect = d.connect;
                    setTimeout(function () {
                        try {
                            oldConnect("Killing_original_websocket", "")
                        } catch (err) {
                        }
                    }, 1500)
                }
                d.connect = Ma;
                var ua = 500, Xa = null, yb = 0, zb = -1, Ab = -1;
                d.refreshPlayerInfo = function () {
                    H(253)
                };
                var A = null, G = 1, Ca = null, ib = function () {
                    var a = Date.now(), frameCounter = 0, diff = 0, aux = Date.now(), b = 1e3 / 60;
                    return function () {
                        d.requestAnimationFrame(ib);
                        var c = Date.now(), e = c - a;
                        diff > 1e3 ? (aux = Date.now(), diff = 0, framePerSecond = frameCounter, frameCounter = 0) : diff = Date.now() - aux, e > b && (a = c - e % b, (!aa() || 240 > Date.now() - sb) && (Bb(), frameCounter++), hc())
                    }
                }(), ba = {}, Mb = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";"), ic = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";");
                $a.prototype = {P: null, x: 0, y: 0, g: 0, b: 0}, $.prototype = {
                    id: 0,
                    a: null,
                    name: null,
                    k: null,
                    I: null,
                    x: 0,
                    y: 0,
                    size: 0,
                    o: 0,
                    p: 0,
                    n: 0,
                    C: 0,
                    D: 0,
                    m: 0,
                    T: 0,
                    K: 0,
                    W: 0,
                    A: !1,
                    f: !1,
                    j: !1,
                    L: !0,
                    S: 0,
                    V: null,
                    R: function () {
                        var a;
                        for (a = 0; a < v.length; a++)if (v[a] == this) {
                            v.splice(a, 1);
                            break
                        }
                        delete J[this.id], a = l.indexOf(this), -1 != a && (Ra = !0, l.splice(a, 1)), a = z.indexOf(this.id), -1 != a && z.splice(a, 1), this.A = !0, 0 < this.S && Y.push(this)
                    },
                    i: function () {
                        return Math.max(~~(.3 * this.size), 24)
                    },
                    t: function (a) {
                        if ((this.name = a) && (null == this.k ? this.k = new Da(this.i(), "#FFFFFF", !0, "#000000") : this.k.G(this.i()), this.k.u(this.name), isEnableYinSkin)) {
                            var temp = a.split(":");
                            temp.length > 1 && /^[\u0001-\uFFFE]$/.test(temp[temp.length - 1]) && (this.img = temp.pop())
                        }
                    },
                    Q: function () {
                        for (var a = this.B(); this.a.length > a;) {
                            var b = ~~(Math.random() * this.a.length);
                            this.a.splice(b, 1)
                        }
                        for (0 == this.a.length && a > 0 && this.a.push(new $a(this, this.x, this.y, this.size, Math.random() - .5)); this.a.length < a;)b = ~~(Math.random() * this.a.length), b = this.a[b], this.a.push(new $a(this, b.x, b.y, b.g, b.b))
                    },
                    B: function () {
                        var a = 10;
                        20 > this.size && (a = 0), this.f && (a = 30);
                        var b = this.size;
                        return this.f || (b *= g), b *= G, 32 & this.T && (b *= .25), ~~Math.max(b, a)
                    },
                    da: function () {
                        this.Q();
                        for (var a = this.a, b = a.length, c = 0; b > c; ++c) {
                            var d = a[(c - 1 + b) % b].b, e = a[(c + 1) % b].b;
                            a[c].b += (Math.random() - .5) * (this.j ? 3 : 1), a[c].b *= .7, 10 < a[c].b && (a[c].b = 10), -10 > a[c].b && (a[c].b = -10), a[c].b = (d + e + 8 * a[c].b) / 10
                        }
                        var f = this, l = this.f ? 0 : (this.id / 1e3 + F / 1e4) % (2 * Math.PI);
                        for (c = 0; b > c; ++c) {
                            var k = a[c].g;
                            if (d = a[(c - 1 + b) % b].g, e = a[(c + 1) % b].g, 15 < this.size && null != da && 20 < this.size * g && 0 < this.id) {
                                var h = !1, m = a[c].x, K = a[c].y;
                                da.ea(m - 5, K - 5, 10, 10, function (a) {
                                    a.P != f && 25 > (m - a.x) * (m - a.x) + (K - a.y) * (K - a.y) && (h = !0)
                                }), h || (a[c].x < xa || a[c].y < ya || a[c].x > za || a[c].y > Aa) && (h = !0), h && (0 < a[c].b && (a[c].b = 0), a[c].b -= 1)
                            }
                            k += a[c].b, 0 > k && (k = 0), k = this.j ? (19 * k + this.size) / 20 : (12 * k + this.size) / 13, a[c].g = (d + e + 8 * k) / 10, d = 2 * Math.PI / b, e = this.a[c].g, this.f && 0 == c % 2 && (e += 5), a[c].x = this.x + Math.cos(d * c + l) * e, a[c].y = this.y + Math.sin(d * c + l) * e
                        }
                    },
                    J: function () {
                        if (0 >= this.id)return 1;
                        var a;
                        a = (F - this.K) / 120, a = 0 > a ? 0 : a > 1 ? 1 : a;
                        var b = 0 > a ? 0 : a > 1 ? 1 : a;
                        if (this.i(), this.A && b >= 1) {
                            var c = Y.indexOf(this);
                            -1 != c && Y.splice(c, 1)
                        }
                        return this.x = a * (this.C - this.o) + this.o, this.y = a * (this.D - this.p) + this.p, this.size = b * (this.m - this.n) + this.n, b
                    },
                    H: function () {
                        return 0 >= this.id ? !0 : this.x + this.size + 40 < t - h / 2 / g || this.y + this.size + 40 < u - q / 2 / g || this.x - this.size - 40 > t + h / 2 / g || this.y - this.size - 40 > u + q / 2 / g ? !1 : !0
                    },
                    s: function (a) {
                        if (this.H()) {
                            ++this.S;
                            var b = 0 < this.id && !this.f && !this.j && .4 > g;
                            if (5 > this.B() && 0 < this.id && (b = !0), this.L && !b)for (var c = 0; c < this.a.length; c++)this.a[c].g = this.size;
                            if (this.L = b, a.save(), this.W = F, c = this.J(), this.A && (a.globalAlpha *= 1 - c), a.lineWidth = 0, a.lineCap = "round", a.lineJoin = this.f ? "miter" : "round", isNoColor ? (a.fillStyle = "#FFFFFF", a.strokeStyle = "#AAAAAA") : myColorIndex > 0 && vndot.myIds.indexOf(this.id) > -1 ? (a.fillStyle = myColors[myColorIndex], a.strokeStyle = myColors[myColorIndex]) : !isKeepFoodColor && this.size < 15 ? (a.fillStyle = foodColor, a.strokeStyle = foodColor) : (a.fillStyle = this.color, a.strokeStyle = this.color), b)a.beginPath(), a.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1); else {
                                this.da(), a.beginPath();
                                var d = this.B();
                                if (_isVirus(this))for (a.moveTo(this.a[0].x, this.a[0].y), c = 1; d >= c; ++c) {
                                    var e = c % d;
                                    a.lineTo(this.a[e].x, this.a[e].y)
                                } else c = d, a.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1)
                            }
                            if (a.closePath(), c = this.name.toLowerCase(), !this.j && enableSkin && ":teams" != X) {
                                if (d = null, !d) {
                                    var skinUrl = "";
                                    vndot.myIds.indexOf(this.id) > -1 ? skinUrl = currentSkin || currentYinSkin || DEFAULT_SKIN : skinMap.hasOwnProperty(this.name) && this.color === skinMap[this.name].color ? skinUrl = isDefaultSkinForAll ? DEFAULT_SKIN : skinMap[this.name].skin : isEnableYinSkin && this.img && (skinUrl = "http://upload.happyfor.me/getimg.php?id=" + this.img.charCodeAt(0)), skinUrl ? (ba.hasOwnProperty(this.name) && ba[this.name].src === skinUrl || (ba[this.name] = new Image, ba[this.name].src = skinUrl), d = 0 < ba[this.name].width && ba[this.name].complete ? ba[this.name] : null) : d = null
                                }
                            } else d = null;
                            if (e = d, this.size < 20 ? a.globalAlpha = 1 : _isVirus(this) ? a.globalAlpha = .8 : a.globalAlpha = isTransparentCell ? .95 : 1, (this.size > 15 || !isSpecMode) && a.fill(), null != e) {
                                a.save(), a.clip();
                                try {
                                    a.drawImage(e, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size)
                                } catch (err) {
                                }
                                a.restore()
                            }
                            (isNoColor || 15 < this.size) && (b || (a.strokeStyle = "#000000", a.globalAlpha *= .1, a.stroke()));
                            var massPrefix = "", massPostfix = "";
                            if (enableCieMass || enableCieSignal || enableCieCircle) {
                                if (20 < this.size && !_isVirus(this) && vndot.myPoints.length > 0)if (-1 === vndot.myIds.indexOf(this.id)) {
                                    var selectedBlob = _getSelectedBlob(), selectedBlobMass = _getMass(selectedBlob.size), currentMass = _getMass(this.size);
                                    cieSplitToEat = ~~(selectedBlobMass * Tiny), cieMergeToEat = ~~(selectedBlobMass * Small), currentMass > selectedBlobMass * Huge ? (this.cieColor = Huge_Color, massPostfix = "::") : currentMass > selectedBlobMass * Large ? (this.cieColor = Large_Color, massPostfix = ":") : currentMass > selectedBlobMass * Small ? this.cieColor = Same_Color : currentMass > selectedBlobMass * Tiny ? (this.cieColor = Small_Color, massPrefix = ":") : (this.cieColor = Tiny_Color, massPrefix = "::")
                                } else this.cieColor = null;
                                if (enableCieCircle && this.cieColor) {
                                    a.lineWidth = 4, a.globalAlpha = 1, a.beginPath(), a.strokeStyle = this.cieColor;
                                    var outerSize = ~~(this.size / 12);
                                    15 > outerSize && (outerSize = 15), a.arc(this.x, this.y, this.size + outerSize, 0, 2 * Math.PI, !1), a.stroke()
                                }
                            }
                            if (a.globalAlpha = 1, d = -1 != l.indexOf(this), b = ~~this.y, 0 != this.id && (showCellName || d) && this.name && this.k && (null == e || -1 == ic.indexOf(c))) {
                                e = this.k, e.u(this.name), e.G(this.i()), c = 0 >= this.id ? 1 : Math.ceil(10 * g) / 10, e.U(c), e = e.F();
                                var f = ~~(e.width / c), h = ~~(e.height / c);
                                a.drawImage(e, ~~this.x - ~~(f / 2), b - ~~(h / 2), f, h), b += e.height / 2 / c + 4
                            }
                            0 < this.id && isShowMass && (d || 38 < this.size) && (skinMap.hasOwnProperty(this.name) && skinMap[this.name].color === this.color || this.id === selectedBlobId ? (null == this.I || "#000000" !== this.I.M) && (this.I = new Da(this.i() / 2, "#000000", !0, "#FFFFFF")) : (null == this.I || "#FFFFFF" !== this.I.M && vndot.myIds.indexOf(this.id) > -1) && (this.I = new Da(this.i() / 2, "#FFFFFF", !0, "#000000")), d = this.I, _isVirus(this) ? (d.u("" + ~~((149 - this.size) / 7)), d.G(4 * this.i())) : (enableCieSignal ? d.u(massPrefix + ~~(this.size * this.size / 100) + massPostfix) : d.u(~~(this.size * this.size / 100)), d.G(this.i())), c = Math.ceil(10 * g) / 10, d.U(c), e = d.F(), f = ~~(e.width / c), h = ~~(e.height / c), a.drawImage(e, ~~this.x - ~~(f / 2), b - ~~(h / 2), f, h)), a.restore()
                        }
                    }
                }, Da.prototype = {
                    w: "",
                    M: "#000000",
                    O: !1,
                    r: "#000000",
                    q: 16,
                    l: null,
                    N: null,
                    h: !1,
                    v: 1,
                    G: function (a) {
                        this.q != a && (this.q = a, this.h = !0)
                    },
                    U: function (a) {
                        this.v != a && (this.v = a, this.h = !0)
                    },
                    setStrokeColor: function (a) {
                        this.r != a && (this.r = a, this.h = !0)
                    },
                    u: function (a) {
                        a != this.w && (this.w = a, this.h = !0)
                    },
                    F: function () {
                        if (null == this.l && (this.l = document.createElement("canvas"), this.N = this.l.getContext("2d")), this.h) {
                            this.h = !1;
                            var a = this.l, b = this.N, c = this.w, d = this.v, e = this.q, f = e + "px Ubuntu";
                            b.font = f;
                            var g = ~~(.2 * e);
                            a.width = (b.measureText(c).width + 6) * d, a.height = (e + g) * d, b.font = f, b.scale(d, d), b.globalAlpha = 1, b.lineWidth = 3, b.strokeStyle = this.r, b.fillStyle = this.M, this.O && b.strokeText(c, 3, ~~(e - g / 2)), b.fillText(c, 3, ~~(e - g / 2))
                        }
                        return this.l
                    }
                }, Date.now || (Date.now = function () {
                    return (new Date).getTime()
                }), function () {
                    for (var a = ["ms", "moz", "webkit", "o"], b = 0; b < a.length && !d.requestAnimationFrame; ++b)d.requestAnimationFrame = d[a[b] + "RequestAnimationFrame"], d.cancelAnimationFrame = d[a[b] + "CancelAnimationFrame"] || d[a[b] + "CancelRequestAnimationFrame"];
                    d.requestAnimationFrame || (d.requestAnimationFrame = function (a) {
                        return setTimeout(a, 1e3 / 60)
                    }, d.cancelAnimationFrame = function (a) {
                        clearTimeout(a)
                    })
                }();
                var Pb = {
                    X: function (a) {
                        function b(a) {
                            return d > a && (a = d), a > f && (a = f), ~~((a - d) / 32)
                        }

                        function c(a) {
                            return e > a && (a = e), a > g && (a = g), ~~((a - e) / 32)
                        }

                        var d = a.ba, e = a.ca, f = a.Z, g = a.$, k = ~~((f - d) / 32) + 1, h = ~~((g - e) / 32) + 1, m = Array(k * h);
                        return {
                            Y: function (a) {
                                var d = b(a.x) + c(a.y) * k;
                                null == m[d] ? m[d] = a : Array.isArray(m[d]) ? m[d].push(a) : m[d] = [m[d], a]
                            }, ea: function (a, d, e, f, g) {
                                var n = b(a), p = c(d);
                                for (a = b(a + e), d = c(d + f); d >= p; ++p)for (f = n; a >= f; ++f)if (e = m[f + p * k], null != e)if (Array.isArray(e))for (var l = 0; l < e.length; l++)g(e[l]); else g(e)
                            }
                        }
                    }
                };
                (function () {
                    var a = new $(0, 0, 0, 32, "#ED1C24", ""), b = document.createElement("canvas");
                    b.width = 32, b.height = 32;
                    var c = b.getContext("2d");
                    return function () {
                        0 < l.length && (a.color = l[0].color, a.t(l[0].name)), c.clearRect(0, 0, 32, 32), c.save(), c.translate(16, 16), c.scale(.4, .4), a.s(c), c.restore();
                        var d = document.getElementById("favicon"), e = d.cloneNode(!0);
                        e.setAttribute("href", b.toDataURL("image/png")), d.parentNode.replaceChild(e, d)
                    }
                })();
                e(function () {
                });
                var U = "loginCache3";
                e(function () {
                    +d.localStorage.wannaLogin && (d.localStorage[U] && Gb(d.localStorage[U]), d.localStorage.fbPictureCache && e(".agario-profile-picture").attr("src", d.localStorage.fbPictureCache))
                }), d.facebookLogin = function () {
                    d.localStorage.wannaLogin = 1
                }, d.fbAsyncInit = function () {
                    function a() {
                        d.localStorage.wannaLogin = 1, null == d.FB ? alert("You seem to have something blocking Facebook on your browser, please check for any extensions") : d.FB.login(function (a) {
                            ab(a)
                        }, {scope: "public_profile, email"})
                    }

                    d.FB.init({
                        appId: "677505792353827",
                        cookie: !0,
                        xfbml: !0,
                        status: !0,
                        version: "v2.2"
                    }), d.FB.Event.subscribe("auth.statusChange", function (b) {
                        +d.localStorage.wannaLogin && ("connected" == b.status ? ab(b) : a())
                    }), d.facebookLogin = a
                }, d.logout = function () {
                    D = null, e("#helloContainer").attr("data-logged-in", "0"), e("#helloContainer").attr("data-has-account-data", "0"), delete d.localStorage.wannaLogin, delete d.localStorage[U], delete d.localStorage.fbPictureCache, M()
                };
                var hc = function () {
                    function a(a, b, c, d, e) {
                        var f = b.getContext("2d"), g = b.width;
                        b = b.height, a.color = e, a.t(c), a.size = d, f.save(), f.translate(g / 2, b / 2), a.s(f), f.restore()
                    }

                    for (var b = new $(-1, 0, 0, 32, "#5bc0de", ""), c = new $(-1, 0, 0, 32, "#5bc0de", ""), d = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" "), f = [], g = 0; g < d.length; ++g) {
                        var h = g / d.length * 12, k = 30 * Math.sqrt(g / d.length);
                        f.push(new $(-1, Math.cos(h) * k, Math.sin(h) * k, 10, d[g], ""))
                    }
                    ec(f);
                    var l = document.createElement("canvas");
                    return l.getContext("2d"), l.width = l.height = 70, a(c, l, "", 26, "#ebc0de"), function () {
                        e(".cell-spinner").filter(":visible").each(function () {
                            var c = e(this), d = Date.now(), f = this.width, g = this.height, h = this.getContext("2d");
                            h.clearRect(0, 0, f, g), h.save(), h.translate(f / 2, g / 2);
                            for (var k = 0; 10 > k; ++k)h.drawImage(l, (.1 * d + 80 * k) % (f + 140) - f / 2 - 70 - 35, g / 2 * Math.sin((.001 * d + k) % Math.PI * 2) - 35, 70, 70);
                            h.restore(), (c = c.attr("data-itr")) && (c = ha(c)), a(b, this, c || "", +e(this).attr("data-size"), "#5bc0de")
                        }), e("#statsPellets").filter(":visible").each(function () {
                            e(this);
                            var b = this.width, c = this.height;
                            for (this.getContext("2d").clearRect(0, 0, b, c), b = 0; b < f.length; b++)a(f[b], this, "", f[b].size, f[b].color)
                        })
                    }
                }();
                d.createParty = function () {
                    ga(":party"), O = function (a) {
                        bb("/#" + d.encodeURIComponent(a)), e(".partyToken").val("agar.io/#" + d.encodeURIComponent(a)), e("#helloContainer").attr("data-party-state", "1")
                    }, M()
                }, d.joinParty = kb, d.cancelParty = function () {
                    bb("/"), e("#helloContainer").attr("data-party-state", "0"), ga(""), M()
                };
                var x = [], Sa = 0, Ta = "#000000", W = !1, Ua = !1, ub = 0, vb = 0, Wa = 0, Va = 0, T = 0, enableStats = !1;
                d.closeStats = function () {
                    W = !1, e("#stats").hide(), mb(d.ab), pa(0)
                }, d.setSkipStats = function (a) {
                    enableStats = !a
                }, e(function () {
                    e(Nb)
                })
            }
        }
    }
}(window, window.jQuery), $(function () {
    $("[data-itr]").each(function () {
        var $this = $(this), itr = $this.attr("data-itr");
        $this.html(i18n[itr] || i18n_dict.en[itr] || itr)
    }), $(".btn-login").tooltip({html: !0, title: i18n.login_tooltip, placement: "bottom"})
}), $(".partyToken").on("mouseover click mousemove mousedown mouseup select", function (e) {
}), $(".copy-party-token").click(function () {
    var i = $(".partyToken:visible")[0];
    i.setSelectionRange(0, i.value.length), i.select();
    try {
        document.execCommand("copy")
    } catch (e) {
    }
}), $(document).ready(function () {
    function connectServer() {
        window.ksOb()
    }

    function getWantedIp() {
        return ksIpInput.val()
    }

    function clearWantedIp() {
        ksIpInput.val("")
    }

    function stopConnect() {
        ksConnectBtn.removeClass("disabled"), ksConnectBtn.text("Connect"), ksStopBtn.addClass("disabled"), window.ksConnectTriedCounter = -1
    }

    function startConnect() {
        window.ksConnectTriedCounter = 0, ksConnectBtn.addClass("disabled"), ksConnectBtn.text("Connecting..."), ksStopBtn.removeClass("disabled")
    }

    function updateConnectBtn() {
        window.ksConnectTriedCounter++, ksConnectBtn.text("Connecting... (" + window.ksConnectTriedCounter + ")")
    }

    var helloContainer = $("div#helloContainer"), mainPanel = helloContainer.find("div#mainPanel");
    mainPanel.find("hr").remove(), helloContainer.find("div.agario-promo").remove(), helloContainer.find("#instructions").remove(), helloContainer.find("center").remove(), helloContainer.find("div.agario-loggedout-panel").remove(), $("div#openfl-content").remove(), $("div#openfl-overlay").remove(), mainPanel.css("background-color", "#222").css("color", "#bababa"), helloContainer.find("div.agario-party div.agario-panel").css("background-color", "#222").css("color", "#bababa"), mainPanel.find("form div.form-group:first").find("h2").remove(), mainPanel.find("form div.form-group:first").append("<h3>VNDOT <small>v" + version + " by KSCC & GS.Chich</small></h3>"), mainPanel.find("form div.form-group:first div:last").remove(), mainPanel.find("input#nick").val(currentPlayerName);
    var settings = mainPanel.find("#settings");
    settings.find(":first-child").css("width", "").css("float", ""), settings.append('<div id="ks-skin-group" class="form-group input-group-sm"> <input type="text" id="ks-skin-textbox" placeholder="Skin URL" class="form-control"value=' + currentSkin + "></div><h6>Không nên dùng ảnh quá nặng</h6>"), mainPanel.find("#settings input#ks-skin-textbox").val(currentSkin), mainPanel.find("#settings input#ks-skin-textbox").on("input propertychange paste", function () {
        var newval = String(this.value);
        0 === newval.length || newval.match(/^http/) ? ($("#ks-skin-group").removeClass("has-error"), currentSkin = newval, localStorage.setItem("skin", currentSkin)) : $("#ks-skin-group").addClass("has-error")
    });
    var options = settings.find("#options");
    options.find("input[onchange=\"setSkins(!$(this).is(':checked'));\"]").prop("checked", !vndot.isShowSkins), options.find("input[onchange=\"setShowMass($(this).is(':checked'));\"]").prop("checked", !0), options.find('label:has(span[data-itr="option_no_colors"])').remove(), options.find('label:has(span[data-itr="option_dark_theme"])').remove(), options.find('label:has(span[data-itr="option_skip_stats"])').remove(), options.append('<label><input type="checkbox" id="option_gridlines"><span data-itr="option_gridlines">Gridlines</span></label>'), options.find("input#option_gridlines").change(function () {
        showGridLines = this.checked
    }), options.append('<label><input type="checkbox" id="option_foodcolor"><span data-itr="option_foodcolor">Food color</span></label>'), options.find("input#option_foodcolor").change(function () {
        isKeepFoodColor = this.checked
    }), options.append('<label><input type="checkbox" id="option_defaultskin"><span>Default skin</span></label>'), options.find("input#option_defaultskin").change(function () {
        isDefaultSkinForAll = this.checked
    }), options.append('<label><input type="checkbox" id="option_cieMass"><span>CIE Mass</span></label>'), options.find("input#option_cieMass").change(function () {
        enableCieMass = this.checked
    }), options.append('<label><input type="checkbox" id="option_cieSignal"><span>CIE Signal</span></label>'), options.find("input#option_cieSignal").change(function () {
        enableCieSignal = this.checked
    }), options.append('<label><input type="checkbox" id="option_cieCircle"><span>CIE Circle</span></label>'), options.find("input#option_cieCircle").change(function () {
        enableCieCircle = this.checked
    }), options.append('<label><input type="checkbox" id="option_ShowCbox" checked onchange="toggleCbox()"><span>Cbox</span></label>'), options.append('<label><input type="checkbox" id="option_ShowMinimap" checked onchange="toggleMiniMap()"><span>MiniMap</span></label>'), options.append('<label><input type="checkbox" id="option_yinSkin"><span>Yin Skin</span></label>'), options.find("input#option_yinSkin").change(function () {
        isEnableYinSkin = this.checked
    }), options.append('<label><input type="checkbox" id="option_transparent"><span>Transparent</span></label>'), options.find("input#option_transparent").change(function () {
        isTransparentCell = this.checked
    });
    var mainButtons = helloContainer.find("#agario-main-buttons");
    mainButtons.append('<div class="row" style="padding: 10px 13px 5px 13px;"><div class="col-xs-6" style="padding-left:2px; padding-right:2px;"><input type="text" class="form-control" id="ksIpInput" placeholder="Enter server IP"></div><div class="col-xs-4" style="padding-left:2px; padding-right:2px;"><button type="button" id="ksConnectBtn" class="btn btn-success btn-block">Connect</button></div><div class="col-xs-2" style="padding-left:2px; padding-right:2px;"><button type="button" id="ksStopBtn" class="btn btn-danger disabled"><span class="glyphicon glyphicon-stop"></span></button></div></div>'), mainButtons.append('<button type="button" id="opnBrowser" onclick="openServerbrowser();" style="margin-top:5px;position:relative;float:left;width:40%" class="btn btn-info">Danh sách server</button>');
    var specButton = settings.find('button[data-itr="spectate"]');
    specButton.css("width", "30%").css("margin-top", "5px").css("float", "left"), mainButtons.append(specButton), mainButtons.append('<button style="width:22%;margin-left:10px;margin-top:5px;float:left;" type="button" onclick="$(\'input#ksIpInput\').val(\'\');$(\'button#ksConnectBtn\').click()" class="btn btn-info "><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span></button>');
    var logoutButton = settings.find('button[data-itr="logout"]');
    logoutButton.css("width", "20%").css("margin-top", "5px").css("float", "right"), mainButtons.append(logoutButton), mainButtons.append('<br style="clear:both;"/><br/><b>IP: <span id="ksCurrentIp"></span></b>'), $("#connecting").css("z-index", 1e3), miniMapCtx = $('<canvas id="mini-map" width="220" height="220" style="border:none;text-align:center;position:fixed;bottom:40px;left:5px;"></canvas>').appendTo($("body")).get(0).getContext("2d");
    var _iframe = '<iframe id="chickframe" style="border: none;position:absolute; bottom: 10px; right: 10px; width: 200px; height: 250px; opacity: 0.5; z-index: 9999999;" src="http://my.cbox.ws/~2-2348415-cfjftf"></iframe>';
    $("#canvas").after(_iframe), $("#canvas").css("background-color", "#111111"), $("div.tosBox").remove();
    var _form = '<input type="text" style="display:none; position: fixed; bottom: 100px; left: 30%; width: 40%;" id="cboxmsg" onblur="blurinput()">';
    $("body").append(_form);
    var head = $("head"), injectCss = ["https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css", "//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.min.css", "http://heroandtn3.github.io/download/styles.min.css"];
    injectCss.forEach(function (link) {
        head.append('<link rel="stylesheet" href="' + link + '" type="text/css" />')
    }), $("body").append('<div class="overlay" id="serverBrowser" ng-controller="mainCtrl" style="display:none"> <div class="popupbox"> <div class="popheader"> <h3>Danh sách server</h3> </div>	 <div class="scrollable" style="overflow-x: hidden;"> <div class="list-group" ng-repeat="server in servers" ng-show="server.players.length > 0" style="margin: 10px;"> <div class="list-group-item list-group-item-info" style="padding-left: 2px; padding-right: 2px"> <div class="pull-left" style="padding-top: 10px;"> <span> <strong>{{server.title}} <span ng-if="server.code">- {{server.code}}</span> - ({{server.players.length}})</strong> </span> </div> <div class="pull-right"> <button class="btn btn-default btn-sm" ng-click="connectServer(server)" ng-disabled="connectTriedCounter() > -1" type="button">Connect</button> <button class="btn btn-danger btn-sm" ng-click="connectServer(server)" ng-disabled="connectTriedCounter() === -1" type="button">Stop</button> </div> <div class="clearfix"></div> </div> <div class="list-group-item" ng-class="{\'list-group-item-success\': player.playing}" ng-repeat="player in server.players">{{player.name}} ({{getTotalMass(player.position)}} mass)</div> </div> </div> <div class="popupbuttons clearfix"> <button 	class="btn btn-danger" onclick="closeServerbrowser()" style="transform:translateX(72%);margin:4px" type="button">Close</button> <button class="btn btn-info" id="rsb" ng-click="getServers()" style="float:right;margin:4px;" type="button">Refresh <i class="glyphicon glyphicon-refresh"></i> </button> </div> </div> </div>'), window.openServerbrowser = function (a) {
        $("#serverBrowser").fadeIn()
    }, window.closeServerbrowser = function () {
        $("#serverBrowser").fadeOut()
    }, angular.module("vnks", []).controller("mainCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
        var socket = io(SERVER_URL + "/serverInfo");
        $scope.getServers = function () {
            socket.emit("server.info", "", function (data) {
                $timeout(function () {
                    $scope.servers = data
                })
            })
        }, $scope.connectServer = function (server) {
            ":party" === server.mode ? ($("#joinPartyToken").val(server.code), joinParty(server.code)) : ($("input#ksIpInput").val(server.ip), startConnect(), connectServer())
        }, $scope.stopConnect = function () {
            $("input#ksIpInput").val("")
        }, $scope.connectTriedCounter = function () {
            return window.ksConnectTriedCounter
        }, $scope.getTotalMass = function (position) {
            if (position && position.blobs) {
                for (var size = position.blobs.length, sumSize = 0, i = 0; size > i; ++i)sumSize += position.blobs[i].size;
                return ~~(sumSize * sumSize / 100)
            }
            return 0
        }
    }]), $("#serverBrowser").ready(function () {
        angular.bootstrap($("#serverBrowser"), ["vnks"])
    });
    var ksIpInput, ksConnectBtn, ksStopBtn;
    ksIpInput = mainButtons.find("input#ksIpInput"), ksConnectBtn = mainButtons.find("button#ksConnectBtn"), ksStopBtn = mainButtons.find("button#ksStopBtn"), ksConnectBtn.click(function () {
        startConnect(), connectServer()
    }), ksStopBtn.click(function () {
        clearWantedIp()
    }), window.ksGetWantedIp = getWantedIp, window.ksStopConnect = stopConnect, window.ksUpdateConnectBtn = updateConnectBtn
});
var miniMapBackground = null, cboxInput = $("input#cboxmsg");
cboxInput.css("background", "transparent").css("border", "none").css("color", "#FFF").css("border-bottom", "2px solid cornflowerblue").css("font-size", "1.6em");
var lastTimePressOnM = 0, messages = [{code: 49, key: 1, msg: "Need help", cbox: ":cuu", type: "warning"}, {
    code: 50,
    key: 2,
    msg: "Feed me",
    type: "warning"
}, {code: 51, key: 3, msg: "Enermies near me", cbox: "codich", type: "warning"}, {
    code: 52,
    key: 4,
    msg: "Eat virus",
    cbox: ":pha",
    type: "warning"
}, {code: 53, key: 5, msg: "Fire virus", cbox: ":ban", type: "warning"}, {
    code: 54,
    key: 6,
    msg: "Run run run!",
    cbox: "Chạy đi",
    type: "warning"
}, {code: 55, key: 7, msg: "Feed teemates", cbox: ":bfvt", type: "warning"}, {
    code: 56,
    key: 8,
    msg: "We won!",
    type: "warning"
}, {code: 57, key: 9, msg: "WTF, house burning!!!", cbox: ":dot", type: "error"}, {
    code: 48,
    key: 0,
    msg: "I love KSCC <3",
    type: "success"
}], guides = [];
messages.forEach(function (message) {
    guides.push("<br>" + message.key + ": " + message.msg)
}), guides = guides.join("");
var lastTimeSendMsg = 0;
toastr.options.positionClass = "toast-top-left", toastr.options.preventDuplicates = !0;
var holdInterval, holdSwitchy = !1, holdBody = $("body");
$(document).on("keydown", function (e) {
    if (81 == e.keyCode) {
        if (holdSwitchy)return;
        holdSwitchy = !0, holdInterval = setInterval(function () {
            holdBody.trigger($.Event("keydown", {keyCode: 87})), holdBody.trigger($.Event("keyup", {keyCode: 87}))
        }, 100)
    }
}), $(document).on("keyup", function (e) {
    return 81 == e.keyCode ? (holdSwitchy = !1, void clearInterval(holdInterval)) : void 0
});
var _cbox = $("#chickframe"), _miniMap = $("#mini-map"), socket = io(SERVER_URL);
socket.on("connect", function () {
    currentLeaderBoard = null
}), socket.on("room.join", function (name) {
}), socket.on("room.play", function (name) {
}), socket.on("msg", function (message) {
    toastr[message.type](message.msg, message.sender)
});