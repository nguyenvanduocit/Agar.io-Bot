
/**
 * Created by nguyenvanduocit on 11/30/2015.
 */
/** @type {Array} */
"use strict";
/**
 * @param {?} dataAndEvents
 * @return {?}
 */
function _isVirus(dataAndEvents) {
    return dataAndEvents["f"];
}
/**
 * @param {number} m3
 * @return {?}
 */
function _getMass(m3) {
    return m3 * m3 / 100;
}
/**
 * @return {?}
 */
function _getSelectedBlob() {
    if (vndot["allNodes"]["hasOwnProperty"](selectedBlobId)) {
        return vndot["allNodes"][selectedBlobId];
    }
    var _0x33d9x6 = _getBiggestBlob();
    return selectedBlobId = _0x33d9x6["id"], _0x33d9x6;
}
/**
 * @return {?}
 */
function _getBiggestBlob() {
    /** @type {number} */
    var specialEasing = 0;
    /** @type {null} */
    var val = null;
    var map = vndot["myPoints"];
    /** @type {number} */
    var key = map["length"] - 1;
    for (;key > -1;--key) {
        if (map[key]["size"] > specialEasing) {
            val = map[key];
            specialEasing = val["size"];
        }
    }
    return val;
}
/**
 * @return {undefined}
 */
function _switchSelectedBlob() {
    if (0 !== vndot["myPoints"]["length"]) {
        var unlock = vndot["myIds"]["indexOf"](selectedBlobId);
        if (-1 === unlock) {
            selectedBlobId = _getBiggestBlob()["id"];
        } else {
            unlock += 1;
            if (unlock >= vndot["myIds"]["length"]) {
                /** @type {number} */
                unlock = 0;
            }
            selectedBlobId = vndot["myIds"][unlock];
        }
    }
}
/**
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
function _onDraw(deepDataAndEvents) {
    _drawMapBorders(deepDataAndEvents);
}
/**
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
function _drawMapBorders(deepDataAndEvents) {
    deepDataAndEvents["strokeStyle"] = "#FFFFFF";
    deepDataAndEvents["beginPath"]();
    deepDataAndEvents["moveTo"](vndot["mapLeft"], vndot["mapTop"]);
    deepDataAndEvents["lineTo"](vndot["mapRight"], vndot["mapTop"]);
    deepDataAndEvents["lineTo"](vndot["mapRight"], vndot["mapBottom"]);
    deepDataAndEvents["lineTo"](vndot["mapLeft"], vndot["mapBottom"]);
    deepDataAndEvents["lineTo"](vndot["mapLeft"], vndot["mapTop"]);
    deepDataAndEvents["closePath"]();
    deepDataAndEvents["stroke"]();
}
/**
 * @param {?} dataAndEvents
 * @return {undefined}
 */
function _drawMapCoodinate(dataAndEvents) {
    if (isSpecMode) {
        var r20;
        var vendors = "ABCD";
        /** @type {number} */
        var y2 = ~~(vndot["mapWidth"] / 4);
        /** @type {number} */
        var z2 = ~~(vndot["mapHeight"] / 4);
        dataAndEvents["fillStyle"] = "#FFFFFF";
        dataAndEvents["font"] = "1100px Arial";
        dataAndEvents["textBaseline"] = "middle";
        /** @type {number} */
        dataAndEvents["globalAlpha"] = 0.3;
        dataAndEvents["textAlign"] = "center";
        var x;
        var y;
        /** @type {number} */
        x = 0;
        y;
        for (;4 > x;++x) {
            /** @type {number} */
            y = 0;
            for (;4 > y;++y) {
                /** @type {number} */
                var RequestAnimationFrame = y + 1;
                /** @type {number} */
                var yy = y * y2;
                /** @type {number} */
                var xz = x * z2;
                /** @type {number} */
                var xy = (y + 1) * y2;
                /** @type {number} */
                var wz = (x + 1) * z2;
                r20 = vendors[x] + RequestAnimationFrame;
                dataAndEvents["fillText"](r20, vndot["mapLeft"] + ~~((yy + xy) / 2), vndot["mapTop"] + ~~((xz + wz) / 2));
            }
        }
        dataAndEvents["strokeStyle"] = "#FFFFFF";
        /** @type {number} */
        dataAndEvents["lineWidth"] = 5;
        dataAndEvents["beginPath"]();
        /** @type {number} */
        x = 1;
        for (;4 > x;++x) {
            dataAndEvents["moveTo"](vndot["mapLeft"], vndot["mapTop"] + x * z2);
            /** @type {number} */
            dataAndEvents["lineWidth"] = 2;
            dataAndEvents["lineTo"](vndot["mapLeft"] + vndot["mapWidth"], vndot["mapTop"] + x * z2);
        }
        /** @type {number} */
        y = 1;
        for (;4 > y;++y) {
            dataAndEvents["moveTo"](vndot["mapLeft"] + y * y2, vndot["mapTop"]);
            /** @type {number} */
            dataAndEvents["lineWidth"] = 2;
            dataAndEvents["lineTo"](vndot["mapLeft"] + y * y2, vndot["mapTop"] + vndot["mapHeight"]);
        }
        dataAndEvents["closePath"]();
        dataAndEvents["stroke"]();
    }
}
/**
 * @return {?}
 */
function _getPreRenderMiniMapBackground() {
    if (miniMapBackground) {
        return miniMapBackground;
    }
    /** @type {number} */
    var value = 220;
    /** @type {number} */
    var v = 220;
    var cache = document["createElement"]("canvas");
    /** @type {number} */
    cache["width"] = value;
    /** @type {number} */
    cache["height"] = v;
    var resp;
    var collection = cache["getContext"]("2d");
    /** @type {number} */
    var y2 = ~~(value / 4);
    /** @type {number} */
    var x2 = ~~(v / 4);
    var vendors = "ABCD";
    collection["fillStyle"] = "#FFFFFF";
    collection["font"] = "20px Ubuntu";
    collection["textBaseline"] = "middle";
    collection["textAlign"] = "center";
    var y;
    /** @type {number} */
    var x = 0;
    for (;4 > x;++x) {
        /** @type {number} */
        y = 0;
        for (;4 > y;++y) {
            /** @type {number} */
            var RequestAnimationFrame = y + 1;
            /** @type {number} */
            var yy = y * y2;
            /** @type {number} */
            var xx = x * x2;
            /** @type {number} */
            var xy = (y + 1) * y2;
            /** @type {number} */
            var wx = (x + 1) * x2;
            /** @type {number} */
            collection["globalAlpha"] = 0.1;
            collection["fillRect"](yy + 2, xx + 2, y2 - 4, x2 - 4);
            /** @type {number} */
            collection["globalAlpha"] = 0.3;
            resp = vendors[x] + RequestAnimationFrame;
            collection["fillText"](resp, ~~((yy + xy) / 2), ~~((xx + wx) / 2));
        }
    }
    return miniMapBackground = cache;
}
/**
 * @return {?}
 */
function _drawMiniMap() {
    if (!miniMapCtx) {
        return void console["log"]("undefined");
    }
    /** @type {number} */
    var _0x33d9x22 = vndot["mapWidth"] / 220;
    /** @type {number} */
    var udataCur = 220;
    /** @type {number} */
    var pdataOld = 220;
    miniMapCtx["clearRect"](0, 0, udataCur, pdataOld);
    miniMapCtx["drawImage"](_getPreRenderMiniMapBackground(), 0, 0);
    miniMapCtx["font"] = "12px Ubuntu";
    miniMapCtx["textBaseline"] = "middle";
    miniMapCtx["textAlign"] = "center";
    var unlock;
    var restoreScript;
    var rreturn;
    var r20;
    var _0x33d9x26 = vndot["myPoints"]["length"];
    if (_0x33d9x26 > 0) {
        var _0x33d9x27 = vndot["viewPosition"];
        /** @type {number} */
        restoreScript = ~~((_0x33d9x27[0] + vndot["mapRight"]) / _0x33d9x22);
        /** @type {number} */
        rreturn = ~~((_0x33d9x27[1] + vndot["mapBottom"]) / _0x33d9x22);
        r20 = new Path2D;
        r20["arc"](restoreScript, rreturn, 5, 0, 2 * Math["PI"]);
        miniMapCtx["fillStyle"] = vndot["myPoints"][0]["color"];
        miniMapCtx["fill"](r20);
        miniMapCtx["fillStyle"] = currentPlayerColor;
        miniMapCtx["fillText"](currentPlayerName, restoreScript, rreturn - 10);
    }
    if (teamPlayers) {
        if (skippedClearSkinCacheCounter > skippedClearSkinCacheMax) {
            skinMap = {};
            /** @type {number} */
            skippedClearSkinCacheCounter = 0;
        } else {
            skippedClearSkinCacheCounter++;
        }
        /** @type {number} */
        unlock = teamPlayers["length"] - 1;
        for (;unlock > -1;--unlock) {
            var cache = teamPlayers[unlock];
            skinMap[cache["name"]] = {
                color : cache["color"],
                skin : cache["skin"]
            };
            if (cache["position"]) {
                /** @type {number} */
                restoreScript = ~~((cache["position"]["x"] + Math["abs"](vndot["mapLeft"])) / _0x33d9x22);
                /** @type {number} */
                rreturn = ~~((cache["position"]["y"] + Math["abs"](vndot["mapTop"])) / _0x33d9x22);
                r20 = new Path2D;
                r20["arc"](restoreScript, rreturn, 5, 0, 2 * Math["PI"]);
                miniMapCtx["fillStyle"] = cache["color"];
                miniMapCtx["fill"](r20);
                miniMapCtx["fillStyle"] = otherPlayerColor;
                miniMapCtx["fillText"](cache["name"], restoreScript, rreturn - 10);
            }
        }
    }
}
/**
 * @return {undefined}
 */
function _onStartSpec() {
    /** @type {boolean} */
    isSpecMode = true;
    window["closeServerbrowser"]();
    clearInterval(miniMapInterval);
    /** @type {number} */
    miniMapInterval = setInterval(function() {
        socket["emit"]("room.getPosition", [], function(dataAndEvents) {
            teamPlayers = dataAndEvents["players"];
        });
        _drawMiniMap();
    }, 900);
}
/**
 * @return {undefined}
 */
function _onStartPlay() {
    vndot["imgCache"] = {};
    window["closeServerbrowser"]();
    /** @type {boolean} */
    isSpecMode = false;
    clearInterval(miniMapInterval);
    /** @type {number} */
    miniMapInterval = setInterval(function() {
        _updatePosition();
        _drawMiniMap();
    }, 900);
    socket["emit"]("room.play", {
        name : currentPlayerName || DEFAULT_NAME,
        color : vndot["myPoints"][0]["color"],
        skin : currentSkin || (currentYinSkin || DEFAULT_SKIN)
    });
}
/**
 * @return {undefined}
 */
function _onDead() {
    socket["emit"]("room.dead");
    clearInterval(miniMapInterval);
    /** @type {null} */
    miniMapInterval = null;
}
/**
 * @return {?}
 */
function _getLeaderBoard() {
    return vndot["leaderboard"] && vndot["leaderboard"][0] ? vndot["leaderboard"][0]["name"] || "An unnamed cell" : "";
}
/**
 * @return {undefined}
 */
function _joinRoom() {
    currentLeaderBoard = _getLeaderBoard();
    console["log"]("Joined room:", currentLeaderBoard);
    socket["emit"]("room.join", {
        ip : serverIp,
        leaderboard : currentLeaderBoard,
        mode : vndot["gameMode"],
        code : ":party" === vndot["gameMode"] && currentCode["length"] < 10 ? currentCode : "",
        team : currentTeam,
        name : currentPlayerName || DEFAULT_NAME,
        color : vndot["myPoints"][0] ? vndot["myPoints"][0]["color"] : "",
        skin : currentSkin || (currentYinSkin || DEFAULT_SKIN)
    });
}
/**
 * @return {undefined}
 */
function _onLeaderBoardChange() {
    /** @type {number} */
    skippedClearSkinCacheCounter = 0;
    currentLeaderBoard = _getLeaderBoard();
    socket["emit"]("room.change", {
        leaderboard : currentLeaderBoard
    });
}
/**
 * @return {undefined}
 */
function _updatePosition() {
    var _0x33d9x27 = vndot["viewPosition"];
    socket["emit"]("room.updatePosition", {
        x : ~~_0x33d9x27[0],
        y : ~~_0x33d9x27[1],
        size : ~~currentSize
    }, function(dataAndEvents) {
        teamPlayers = dataAndEvents["players"];
    });
}
/**
 * @return {undefined}
 */
function sendmsg() {
    if (isChatting) {
        cboxInput["hide"]();
        /** @type {boolean} */
        isChatting = false;
        var udataCur = cboxInput["val"]();
        if (!udataCur) {
            return;
        }
        if (";" === udataCur[udataCur["length"] - 1]) {
            udataCur = udataCur["substring"](0, udataCur["length"] - 1);
            var message = $("<div>")["text"](udataCur)["html"]();
            socket["emit"]("msg", {
                type : "success",
                msg : message
            });
            toastr["success"](message, currentPlayerName);
        }
        sendMsgToCbox(currentPlayerName, udataCur);
    } else {
        cboxInput["show"]();
        cboxInput["val"]("");
        cboxInput["focus"]();
        /** @type {boolean} */
        isChatting = true;
    }
}
/**
 * @param {?} dataAndEvents
 * @param {?} value
 * @return {undefined}
 */
function sendMsgToCbox(dataAndEvents, value) {
    $["post"]("http://www2.cbox.ws/box/?sec=submit&boxid=2348415&boxtag=cfjftf&_v=857", {
        nme : dataAndEvents,
        pst : value
    });
}
/**
 * @return {undefined}
 */
function blurinput() {
    /** @type {boolean} */
    isChatting = false;
    cboxInput["val"]("");
    cboxInput["hide"]();
}
/**
 * @param {?} deepDataAndEvents
 * @return {undefined}
 */
function _customKeyDownEvents(deepDataAndEvents) {
    /** @type {Date} */
    var against = new Date;
    if (9 === deepDataAndEvents["keyCode"]) {
        deepDataAndEvents["preventDefault"]();
        /** @type {number} */
        myColorIndex = (myColorIndex + 1) % myColors["length"];
    } else {
        if (13 === deepDataAndEvents["keyCode"]) {
            sendmsg();
        } else {
            if (77 === deepDataAndEvents["keyCode"]) {
                if (turnOffMouse) {
                    /** @type {boolean} */
                    turnOffMouse = false;
                    /** @type {number} */
                    lastTimePressOnM = 0;
                } else {
                    if (500 > against - lastTimePressOnM) {
                        /** @type {boolean} */
                        turnOffMouse = true;
                    } else {
                        /** @type {Date} */
                        lastTimePressOnM = against;
                    }
                }
            } else {
                if (88 === deepDataAndEvents["keyCode"]) {
                    window["onMouseWheel"](0, -0.1);
                } else {
                    if (90 === deepDataAndEvents["keyCode"]) {
                        window["onMouseWheel"](0, 0.1);
                    } else {
                        if (16 === deepDataAndEvents["keyCode"]) {
                            _switchSelectedBlob();
                        } else {
                            if (17 === deepDataAndEvents["keyCode"]) {
                                if (vndot["myPoints"]["length"] > 0) {
                                    selectedBlobId = _getBiggestBlob()["id"];
                                }
                            } else {
                                if (69 === deepDataAndEvents["keyCode"]) {
                                    /** @type {boolean} */
                                    enableCieCircle = !enableCieCircle;
                                } else {
                                    if (67 === deepDataAndEvents["keyCode"]) {
                                        if (!$("#overlays")["is"](":visible")) {
                                            toastr["info"](guides, "Hot keys");
                                        }
                                    } else {
                                        if (deepDataAndEvents["shiftKey"] || (deepDataAndEvents["ctrlKey"] || (deepDataAndEvents["altKey"] || deepDataAndEvents["metaKey"]))) {
                                            return;
                                        }
                                        messages["forEach"](function(match) {
                                            if (match["code"] === deepDataAndEvents["keyCode"]) {
                                                if (2E3 > against - lastTimeSendMsg) {
                                                    return void toastr["info"]("DM ko spam!", "VNDOT");
                                                }
                                                /** @type {Date} */
                                                lastTimeSendMsg = against;
                                                var which = match["msg"];
                                                var index = match["cbox"];
                                                var offset = vndot["mapPosition"];
                                                if (49 === match["code"]) {
                                                    which = "Need help at <b>" + offset + "</b>";
                                                    index = ":cuu " + offset;
                                                } else {
                                                    if (51 === match["code"]) {
                                                        which = "Enermies near <b>" + offset + "</b>";
                                                        index = offset + " codich";
                                                    }
                                                }
                                                toastr[match["type"]](which, currentPlayerName);
                                                socket["emit"]("msg", {
                                                    type : match["type"],
                                                    msg : which
                                                });
                                                if (index) {
                                                    sendMsgToCbox(currentPlayerName, index);
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
/**
 * @return {undefined}
 */
function toggleCbox() {
    _cbox["toggle"]();
}
/**
 * @return {undefined}
 */
function toggleMiniMap() {
    _miniMap["toggle"]();
}
var version = "0.4.0";
var SERVER_URL = "http://kscc-agarvn.rhcloud.com:8000";
/** @type {null} */
var serverIp = null;
/** @type {boolean} */
var isSpecMode = false;
var cboxInput;
var currentPlayerColor = "#FFFF00";
var currentPlayerName = localStorage["getItem"]("nick") || "";
/** @type {null} */
var currentLeaderBoard = null;
var currentCode = "";
var currentTeam = "VNDOT";
/** @type {number} */
var currentSize = 0;
var foodColor = "#3371FF";
var otherPlayerColor = "#3371FF";
/** @type {null} */
var miniMapCtx = null;
/** @type {null} */
var miniMapInterval = null;
/** @type {boolean} */
var isChatting = false;
/** @type {Array} */
var myColors = ["", "green", "blue", "red", "yellow", "pink", "#607D8B", "#F44336", "#E91E63", "#9C27B0", "#4CAF50", "#FF9800", "#795548"];
/** @type {number} */
var myColorIndex = 0;
/** @type {number} */
var framePerSecond = 0;
/** @type {null} */
var teamPlayers = null;
var skinMap = {};
/** @type {number} */
var skippedClearSkinCacheCounter = 0;
/** @type {number} */
var skippedClearSkinCacheMax = 10;
var currentSkin = localStorage["getItem"]("skin") || "";
var currentSkinCode = localStorage["getItem"]("skin_code") || "";
var currentYinSkin = "";
var DEFAULT_SKIN = "http://heroandtn3.github.io/download/skin.svg";
var DEFAULT_NAME = "An unnamed cell";
/** @type {null} */
var selectedBlobId = null;
/** @type {number} */
var Huge = 2.66;
/** @type {number} */
var Large = 1.25;
/** @type {number} */
var Small = 0.7;
/** @type {number} */
var Tiny = 0.375;
var Huge_Color = "#FF3C3C";
var Large_Color = "#FFFF00";
var Same_Color = "#3371FF";
var Small_Color = "#00AA00";
var Tiny_Color = "#CC66FF";
/** @type {number} */
var cieSplitToEat = 0;
/** @type {number} */
var cieMergeToEat = 0;
/** @type {boolean} */
var enableCieMass = false;
/** @type {boolean} */
var enableCieSignal = false;
/** @type {boolean} */
var enableCieCircle = false;
/** @type {boolean} */
var showGridLines = false;
/** @type {boolean} */
var isKeepFoodColor = false;
/** @type {boolean} */
var turnOffMouse = false;
/** @type {boolean} */
var isDefaultSkinForAll = false;
/** @type {boolean} */
var isEnableYinSkin = false;
/** @type {boolean} */
var isTransparentCell = false;
var i18n_lang = "en";
var i18n_dict = {
    en : {
        connecting : "Connecting",
        connect_help : "If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.",
        play : "Play",
        spectate : "Spectate",
        login_and_play : "Login and play",
        play_as_guest : "Play as guest",
        share : "Share",
        advertisement : "Advertisement",
        privacy_policy : "Privacy Policy",
        terms_of_service : "Terms of Service",
        changelog : "Changelog",
        instructions_mouse : "Move your mouse to control your cell",
        instructions_space : "Press <b>Space</b> to split",
        instructions_w : "Press <b>W</b> to eject some mass",
        gamemode_ffa : "FFA",
        gamemode_teams : "Teams",
        gamemode_experimental : "Experimental",
        region_select : " -- Select a Region -- ",
        region_us_east : "US East",
        region_us_west : "US West",
        region_north_america : "North America",
        region_south_america : "South America",
        region_europe : "Europe",
        region_turkey : "Turkey",
        region_poland : "Poland",
        region_east_asia : "East Asia",
        region_russia : "Russia",
        region_china : "China",
        region_oceania : "Oceania",
        region_australia : "Australia",
        region_players : "players",
        option_no_skins : "No skins",
        option_no_names : "No names",
        option_dark_theme : "Dark theme",
        option_no_colors : "No colors",
        option_show_mass : "Show mass",
        leaderboard : "Leaderboard",
        unnamed_cell : "An unnamed cell",
        last_match_results : "Last match results",
        score : "Score",
        leaderboard_time : "Leaderboard Time",
        mass_eaten : "Mass Eaten",
        top_position : "Top Position",
        position_1 : "First",
        position_2 : "Second",
        position_3 : "Third",
        position_4 : "Fourth",
        position_5 : "Fifth",
        position_6 : "Sixth",
        position_7 : "Seventh",
        position_8 : "Eighth",
        position_9 : "Ninth",
        position_10 : "Tenth",
        player_cells_eaten : "Player Cells Eaten",
        survival_time : "Survival Time",
        games_played : "Games played",
        highest_mass : "Highest mass",
        total_cells_eaten : "Total cells eaten",
        total_mass_eaten : "Total mass eaten",
        longest_survival : "Longest survival",
        logout : "Logout",
        stats : "Stats",
        shop : "Shop",
        party : "Party",
        party_description : "Play with your friends in the same map",
        create_party : "Create",
        creating_party : "Creating party...",
        join_party : "Join",
        back_button : "Back",
        joining_party : "Joining party...",
        joined_party_instructions : "You are now playing with this party:",
        party_join_error : "There was a problem joining that party, please make sure the code is correct, or try creating another party",
        login_tooltip : "Login with Facebook and get:<br /><br /><br />Start the game with more mass!<br />Level up to get even more starting mass!",
        create_party_instructions : "Give this link to your friends:",
        join_party_instructions : "Your friend should have given you a code, type it here:",
        "continue" : "Continue",
        option_skip_stats : "Skip stats",
        stats_food_eaten : "food eaten",
        stats_highest_mass : "highest mass",
        stats_time_alive : "time alive",
        stats_leaderboard_time : "leaderboard time",
        stats_cells_eaten : "cells eaten",
        stats_top_position : "top position",
        "" : ""
    },
    "?" : {}
};
i18n_lang = (window["navigator"]["userLanguage"] || (window["navigator"]["language"] || "en"))["split"]("-")[0], i18n_dict["hasOwnProperty"](i18n_lang) || (i18n_lang = "en");
var i18n = i18n_dict[i18n_lang];
!function($, success) {
    /**
     * @return {undefined}
     */
    function init() {
        /** @type {boolean} */
        _0x33d9x121 = true;
        exec();
        setInterval(exec, 18E4);
        stack = memory = document["getElementById"]("canvas");
        node = stack["getContext"]("2d");
        /**
         * @param {?} dataAndEvents
         * @return {?}
         */
        stack["onmousedown"] = function(dataAndEvents) {
            if (_0x33d9x12e) {
                /** @type {number} */
                var z0 = dataAndEvents["clientX"] - (5 + nodeList / 5 / 2);
                /** @type {number} */
                var z1 = dataAndEvents["clientY"] - (5 + nodeList / 5 / 2);
                if (Math["sqrt"](z0 * z0 + z1 * z1) <= nodeList / 5 / 2) {
                    return run(), void render(17);
                }
            }
            /** @type {number} */
            zin = 1 * dataAndEvents["clientX"];
            /** @type {number} */
            alignToCenterY = 1 * dataAndEvents["clientY"];
            activatePage$();
            run();
        };
        /**
         * @param {?} dataAndEvents
         * @return {undefined}
         */
        stack["onmousemove"] = function(dataAndEvents) {
            /** @type {number} */
            zin = 1 * dataAndEvents["clientX"];
            /** @type {number} */
            alignToCenterY = 1 * dataAndEvents["clientY"];
            activatePage$();
        };
        /**
         * @return {undefined}
         */
        stack["onmouseup"] = function() {
        };
        if (/firefox/i["test"](navigator["userAgent"])) {
            document["addEventListener"]("DOMMouseScroll", ap, false);
        } else {
            /** @type {function (?, ?): undefined} */
            document["body"]["onmousewheel"] = ap;
        }
        /** @type {boolean} */
        var _0x33d9x79 = false;
        /** @type {boolean} */
        var inParens = false;
        /** @type {boolean} */
        var inPseudo = false;
        /**
         * @param {?} deepDataAndEvents
         * @return {undefined}
         */
        $["onkeydown"] = function(deepDataAndEvents) {
            if (!(isChatting && 13 !== deepDataAndEvents["keyCode"])) {
                if (32 === deepDataAndEvents["keyCode"]) {
                    if (!_0x33d9x79) {
                        run();
                        render(17);
                        /** @type {boolean} */
                        _0x33d9x79 = true;
                    }
                }
                if (81 === deepDataAndEvents["keyCode"]) {
                    if (!inParens) {
                        render(18);
                        /** @type {boolean} */
                        inParens = true;
                    }
                }
                if (87 === deepDataAndEvents["keyCode"]) {
                    run();
                    render(21);
                    /** @type {boolean} */
                    inPseudo = true;
                }
                if (27 === deepDataAndEvents["keyCode"]) {
                    success("#mainPanel")["show"]();
                    success("#overlays")["toggle"]();
                }
                _customKeyDownEvents(deepDataAndEvents);
            }
        };
        /**
         * @param {?} dataAndEvents
         * @return {undefined}
         */
        $["onkeyup"] = function(dataAndEvents) {
            if (!isChatting) {
                if (32 === dataAndEvents["keyCode"]) {
                    /** @type {boolean} */
                    _0x33d9x79 = false;
                }
                if (87 === dataAndEvents["keyCode"]) {
                    /** @type {boolean} */
                    inPseudo = false;
                }
                if (81 === dataAndEvents["keyCode"]) {
                    if (inParens) {
                        render(19);
                        /** @type {boolean} */
                        inParens = false;
                    }
                }
            }
        };
        /**
         * @return {undefined}
         */
        $["onblur"] = function() {
            render(19);
            /** @type {boolean} */
            inPseudo = inParens = _0x33d9x79 = false;
        };
        /** @type {function (): undefined} */
        $["onresize"] = fn;
        $["requestAnimationFrame"](which);
        setInterval(run, 40);
        if (digits) {
            success("#region")["val"](digits);
        }
        error();
        css(success("#region")["val"]());
        if (0 === requestIndex) {
            if (digits) {
                search();
            }
        }
        cb(0);
        fn();
        if ($["location"]["hash"]) {
            if (6 <= $["location"]["hash"]["length"]) {
                send($["location"]["hash"]);
            }
        }
    }
    /**
     * @param {?} step
     * @param {?} i
     * @return {undefined}
     */
    function ap(step, i) {
        if (i) {
            len += i;
        } else {
            len *= Math["pow"](0.95, step["wheelDelta"] / -120 || (step["detail"] || 0));
        }
        if (0.1 > len) {
            /** @type {number} */
            len = 0.1;
        }
        if (len > 4 / alpha) {
            /** @type {number} */
            len = 4 / alpha;
        }
    }
    /**
     * @return {undefined}
     */
    function r() {
        if (0.4 > alpha) {
            /** @type {null} */
            jQuery = null;
        } else {
            var color;
            var match = Number["POSITIVE_INFINITY"];
            var r = Number["POSITIVE_INFINITY"];
            var x = Number["NEGATIVE_INFINITY"];
            var serverAttrs = Number["NEGATIVE_INFINITY"];
            /** @type {number} */
            var i = entries["length"] - 1;
            for (;i > -1;--i) {
                color = entries[i];
                if (color.H()) {
                    if (!color["L"]) {
                        if (20 < color["size"] * alpha) {
                            match = Math["min"](color["x"] - color["size"], match);
                            r = Math["min"](color["y"] - color["size"], r);
                            x = Math["max"](color["x"] + color["size"], x);
                            serverAttrs = Math["max"](color["y"] + color["size"], serverAttrs);
                        }
                    }
                }
            }
            jQuery = pos.X({
                ba : match - 10,
                ca : r - 10,
                Z : x + 10,
                $ : serverAttrs + 10,
                fa : 2,
                ha : 4
            });
            /** @type {number} */
            i = 0;
            /** @type {number} */
            i = entries["length"] - 1;
            for (;i > -1;--i) {
                if (color = entries[i], color.H() && 20 < color["size"] * alpha) {
                    /** @type {number} */
                    match = 0;
                    /** @type {number} */
                    match = color["a"]["length"] - 1;
                    for (;match > -1;--match) {
                        r = color["a"][match]["x"];
                        x = color["a"][match]["y"];
                        if (r >= tmp - nodeList / 2 / alpha) {
                            if (x >= end - tipWidth / 2 / alpha) {
                                if (tmp + nodeList / 2 / alpha >= r) {
                                    if (end + tipWidth / 2 / alpha >= x) {
                                        jQuery.Y(color["a"][match]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * @return {undefined}
     */
    function activatePage$() {
        step = (zin - nodeList / 2) / alpha + tmp;
        vec = (alignToCenterY - tipWidth / 2) / alpha + end;
    }
    /**
     * @return {undefined}
     */
    function exec() {
        if (null === $cookies) {
            $cookies = {};
            success("#region")["children"]()["each"](function() {
                var success1 = success(this);
                var key = success1["val"]();
                if (key) {
                    $cookies[key] = toString(success1["attr"]("data-itr"));
                }
            });
        }
        success["get"](angle + "info", function(input) {
            var key;
            var map = {};
            for (key in input["regions"]) {
                var objUid = key["split"](":")[0];
                map[objUid] = map[objUid] || 0;
                map[objUid] += input["regions"][key]["numPlayers"];
            }
            for (key in map) {
                success("#region option[value=\"" + key + "\"]")["text"]($cookies[key] + " (" + map[key] + " players)");
            }
        }, "json");
    }
    /**
     * @return {undefined}
     */
    function runCallbacks() {
        success("#overlays")["hide"]();
        success("#stats")["hide"]();
        success("#mainPanel")["hide"]();
        /** @type {boolean} */
        from = to = false;
        error();
    }
    /**
     * @param {?} extra
     * @return {undefined}
     */
    function css(extra) {
        if (extra) {
            if (extra !== digits) {
                if (success("#region")["val"]() !== extra) {
                    success("#region")["val"](extra);
                }
                digits = $["localStorage"]["location"] = extra;
                success(".region-message")["hide"]();
                success(".region-message." + extra)["show"]();
                success(".btn-needs-server")["prop"]("disabled", false);
                if (_0x33d9x121) {
                    search();
                }
            }
        }
    }
    /**
     * @param {number} min1
     * @return {undefined}
     */
    function cb(min1) {
        if (!to) {
            if (!from) {
                /** @type {null} */
                args = null;
                /** @type {boolean} */
                OUTPUT = false;
                if (1E3 > min1) {
                    /** @type {number} */
                    newEnd = 1;
                }
                /** @type {boolean} */
                to = true;
                success("#mainPanel")["show"]();
                if (min1 > 0) {
                    success("#overlays")["fadeIn"](min1);
                } else {
                    success("#overlays")["show"]();
                }
            }
        }
    }
    /**
     * @param {(Object|number)} deepDataAndEvents
     * @return {undefined}
     */
    function _success(deepDataAndEvents) {
        success("#helloContainer")["attr"]("data-gamemode", deepDataAndEvents);
        /** @type {(Object|number)} */
        result = deepDataAndEvents;
        success("#gamemode")["val"](deepDataAndEvents);
    }
    /**
     * @return {undefined}
     */
    function error() {
        if (success("#region")["val"]()) {
            $["localStorage"]["location"] = success("#region")["val"]();
        } else {
            if ($["localStorage"]["location"]) {
                success("#region")["val"]($["localStorage"]["location"]);
            }
        }
        if (success("#region")["val"]()) {
            success("#locationKnown")["append"](success("#region"));
        } else {
            success("#locationUnknown")["append"](success("#region"));
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function toString(name) {
        return $["i18n"][name] || ($["i18n_dict"]["en"][name] || name);
    }
    /**
     * @return {undefined}
     */
    function next() {
        /** @type {number} */
        var index = ++requestIndex;
        console["log"]("Find " + digits + result);
        success["ajax"](angle + "findServer", {
            /**
             * @return {undefined}
             */
            error : function() {
                setTimeout(next, 1E3);
            },
            /**
             * @param {?} args
             * @return {undefined}
             */
            success : function(args) {
                if (index === requestIndex) {
                    if (args["alert"]) {
                        alert(args["alert"]);
                    }
                    var a = window["ksGetWantedIp"]();
                    console["log"]("Found IP:", args["ip"]);
                    if (a && a !== args["ip"]) {
                        window["ksUpdateConnectBtn"]();
                        setTimeout(next, 1E3);
                    } else {
                        window["ksStopConnect"]();
                        bind("ws://" + args["ip"], args["token"]);
                    }
                }
            },
            dataType : "json",
            method : "POST",
            cache : false,
            crossDomain : true,
            data : (digits + result || "?") + "2200049715"
        });
    }
    /**
     * @return {undefined}
     */
    function search() {
        if (_0x33d9x121) {
            if (digits) {
                success("#connecting")["show"]();
                next();
            }
        }
    }
    /**
     * @param {?} name
     * @param {Object} fn
     * @return {undefined}
     */
    function bind(name, fn) {
        if (currentCode = fn, ret) {
            /** @type {null} */
            ret["onopen"] = null;
            /** @type {null} */
            ret["onmessage"] = null;
            /** @type {null} */
            ret["onclose"] = null;
            try {
                ret["close"]();
            } catch (_0x33d9x79) {
            }
            /** @type {null} */
            ret = null;
        }
        if (vars["ip"] && (name = "ws://" + vars["ip"]), null !== get) {
            var $timeout = get;
            /**
             * @return {undefined}
             */
            get = function() {
                $timeout(fn);
            };
        }
        if (_0x33d9xff) {
            var _0x33d9x9c = name["split"](":");
            name = _0x33d9x9c[0] + "s://ip-" + _0x33d9x9c[1]["replace"](/\./g, "-")["replace"](/\//g, "") + ".tech.agar.io:" + _0x33d9x9c[2];
        }
        /** @type {Array} */
        doc = [];
        /** @type {Array} */
        child = [];
        results = {};
        /** @type {Array} */
        entries = [];
        /** @type {Array} */
        dims = [];
        /** @type {Array} */
        context = [];
        /** @type {null} */
        enc3 = enc4 = null;
        /** @type {number} */
        currentValue = 0;
        /** @type {boolean} */
        deepStringMixin = false;
        console["log"]("Connecting to " + name);
        /** @type {WebSocket} */
        ret = new WebSocket(name);
        var _0x33d9x9d = name["substring"](5);
        ret["binaryType"] = "arraybuffer";
        /**
         * @return {undefined}
         */
        ret["onopen"] = function() {
            serverIp = _0x33d9x9d;
            if (":party" === obj["gameMode"] && (currentCode["length"] > 0 && currentCode["length"] < 10)) {
                success("#ksCurrentIp")["html"](serverIp + " - " + currentCode);
            } else {
                success("#ksCurrentIp")["html"](serverIp);
            }
            var button;
            console["log"]("socket open");
            /** @type {null} */
            currentLeaderBoard = null;
            button = create(5);
            button["setUint8"](0, 254);
            button["setUint32"](1, 5, true);
            click(button);
            button = create(5);
            button["setUint8"](0, 255);
            button["setUint32"](1, 2200049715, true);
            click(button);
            button = create(1 + fn["length"]);
            button["setUint8"](0, 80);
            /** @type {number} */
            var r20 = 0;
            var fnName = fn["length"];
            for (;fnName > r20;++r20) {
                button["setUint8"](r20 + 1, fn["charCodeAt"](r20));
            }
            click(button);
            trigger();
            /** @type {boolean} */
            from = to = false;
        };
        /** @type {function (?): undefined} */
        ret["onmessage"] = parse;
        /** @type {function (): undefined} */
        ret["onclose"] = err;
        /**
         * @return {undefined}
         */
        ret["onerror"] = function() {
            console["log"]("socket error");
        };
    }
    /**
     * @param {number} expectedNumberOfNonCommentArgs
     * @return {?}
     */
    function create(expectedNumberOfNonCommentArgs) {
        return new DataView(new ArrayBuffer(expectedNumberOfNonCommentArgs));
    }
    /**
     * @param {number} opt_button
     * @return {undefined}
     */
    function click(opt_button) {
        ret["send"](opt_button["buffer"]);
    }
    /**
     * @return {undefined}
     */
    function err() {
        if (deepStringMixin) {
            /** @type {number} */
            time = 500;
        }
        console["log"]("socket close");
        setTimeout(search, time);
        time *= 2;
    }
    /**
     * @param {?} execResult
     * @return {undefined}
     */
    function parse(execResult) {
        flush(new DataView(execResult["data"]));
    }
    /**
     * @param {?} key
     * @return {undefined}
     */
    function flush(key) {
        /**
         * @return {?}
         */
        function toString() {
            var str = "";
            for (;;) {
                var b = key["getUint16"](id, true);
                if (id += 2, 0 === b) {
                    break;
                }
                str += String["fromCharCode"](b);
            }
            return str;
        }
        /** @type {number} */
        var id = 0;
        switch(240 === key["getUint8"](id) && (id += 5), key["getUint8"](id++)) {
            case 16:
                _save(key, id);
                break;
            case 17:
                cur = key["getFloat32"](id, true);
                id += 4;
                start = key["getFloat32"](id, true);
                id += 4;
                beta = key["getFloat32"](id, true);
                id += 4;
                break;
            case 20:
                /** @type {Array} */
                child = [];
                /** @type {Array} */
                doc = [];
                break;
            case 21:
                def = key["getInt16"](id, true);
                id += 2;
                type = key["getInt16"](id, true);
                id += 2;
                if (!_0x33d9x122) {
                    /** @type {boolean} */
                    _0x33d9x122 = true;
                    value = def;
                    msg = type;
                }
                break;
            case 32:
                doc["push"](key["getUint32"](id, true));
                id += 4;
                break;
            case 49:
                if (null !== enc4) {
                    break;
                }
                var a = key["getUint32"](id, true);
                id += 4;
                /** @type {Array} */
                context = [];
                /** @type {number} */
                var b = 0;
                for (;a > b;++b) {
                    var pageId = key["getUint32"](id, true);
                    id += 4;
                    context["push"]({
                        id : pageId,
                        name : toString()
                    });
                }
                isArray();
                if (null === currentLeaderBoard) {
                    _joinRoom();
                } else {
                    if (_getLeaderBoard() !== currentLeaderBoard) {
                        _onLeaderBoardChange();
                    }
                }
                break;
            case 50:
                /** @type {Array} */
                enc4 = [];
                a = key["getUint32"](id, true);
                id += 4;
                /** @type {number} */
                b = 0;
                for (;a > b;++b) {
                    enc4["push"](key["getFloat32"](id, true));
                    id += 4;
                }
                isArray();
                break;
            case 64:
                x = key["getFloat64"](id, true);
                id += 8;
                y = key["getFloat64"](id, true);
                id += 8;
                width = key["getFloat64"](id, true);
                id += 8;
                height = key["getFloat64"](id, true);
                id += 8;
                /** @type {number} */
                cur = (width + x) / 2;
                /** @type {number} */
                start = (height + y) / 2;
                /** @type {number} */
                beta = 1;
                if (0 === child["length"]) {
                    /** @type {number} */
                    tmp = cur;
                    /** @type {number} */
                    end = start;
                    /** @type {number} */
                    alpha = beta;
                }
                if (key["byteLength"] > id) {
                    key["getUint32"](id, true);
                    id += 4;
                    str = toString();
                    console["log"]("Server version " + str);
                }
                break;
            case 81:
                var i = key["getUint32"](id, true);
                id += 4;
                var e = key["getUint32"](id, true);
                id += 4;
                var name = key["getUint32"](id, true);
                id += 4;
                setTimeout(function() {
                    save({
                        d : i,
                        e : e,
                        c : name
                    });
                }, 1200);
        }
    }
    /**
     * @param {?} obj
     * @param {number} name
     * @return {undefined}
     */
    function _save(obj, name) {
        /**
         * @return {?}
         */
        function extend() {
            var result = "";
            for (;;) {
                var match = obj["getUint16"](name, true);
                if (name += 2, 0 === match) {
                    break;
                }
                result += String["fromCharCode"](match);
            }
            return result;
        }
        /**
         * @return {?}
         */
        function promote() {
            var t = "";
            for (;;) {
                var rAt = obj["getUint8"](name++);
                if (0 === rAt) {
                    break;
                }
                t += String["fromCharCode"](rAt);
            }
            return t;
        }
        min = max = Date["now"]();
        if (!deepStringMixin) {
            /** @type {boolean} */
            deepStringMixin = true;
            loaded();
        }
        /** @type {boolean} */
        _0x33d9x11b = false;
        var root = obj["getUint16"](name, true);
        name += 2;
        var value;
        var result;
        /** @type {number} */
        var high = 0;
        for (;root > high;++high) {
            value = results[obj["getUint32"](name, true)];
            result = results[obj["getUint32"](name + 4, true)];
            name += 8;
            if (value) {
                if (result) {
                    result.R();
                    result["o"] = result["x"];
                    result["p"] = result["y"];
                    result["n"] = result["size"];
                    result["C"] = value["x"];
                    result["D"] = value["y"];
                    result["m"] = result["size"];
                    result["K"] = max;
                    print(value, result);
                }
            }
        }
        /** @type {number} */
        high = 0;
        var data;
        for (;root = obj["getUint32"](name, true), name += 4, 0 !== root;) {
            ++high;
            var element;
            value = obj["getInt32"](name, true);
            name += 4;
            result = obj["getInt32"](name, true);
            name += 4;
            element = obj["getInt16"](name, true);
            name += 2;
            data = obj["getUint8"](name++);
            var content = obj["getUint8"](name++);
            var oid = obj["getUint8"](name++);
            content = compile(data << 16 | content << 8 | oid);
            oid = obj["getUint8"](name++);
            /** @type {boolean} */
            var K = !!(1 & oid);
            /** @type {boolean} */
            var Ye = !!(16 & oid);
            /** @type {null} */
            var g = null;
            if (2 & oid) {
                name += 4 + obj["getUint32"](name, true);
            }
            if (4 & oid) {
                g = promote();
            }
            var oldconfig = extend();
            /** @type {null} */
            data = null;
            if (results["hasOwnProperty"](root)) {
                data = results[root];
                data.J();
                data["o"] = data["x"];
                data["p"] = data["y"];
                data["n"] = data["size"];
                data["color"] = content;
            } else {
                data = new a(root, value, result, element, content, oldconfig);
                entries["push"](data);
                results[root] = data;
                data["ia"] = value;
                data["ja"] = result;
            }
            /** @type {boolean} */
            data["f"] = K;
            /** @type {boolean} */
            data["j"] = Ye;
            data["C"] = value;
            data["D"] = result;
            data["m"] = element;
            data["K"] = max;
            data["T"] = oid;
            if (g) {
                data["V"] = g;
            }
            if (oldconfig) {
                data["t"](oldconfig);
            }
            if (-1 !== doc["indexOf"](root)) {
                if (-1 === child["indexOf"](data)) {
                    child["push"](data);
                    if (1 === child["length"]) {
                        tmp = data["x"];
                        end = data["y"];
                        document["getElementById"]("overlays")["style"]["display"] = "none";
                        /** @type {Array} */
                        _0x33d9x39 = [];
                        /** @type {number} */
                        _0x33d9x174 = 0;
                        _0x33d9x175 = child[0]["color"];
                        /** @type {boolean} */
                        _0x33d9x177 = true;
                        _0x33d9x82 = Date["now"]();
                        /** @type {number} */
                        inPseudo = inParens = _0x33d9x35 = 0;
                        _onStartPlay();
                    }
                }
            }
        }
        value = obj["getUint32"](name, true);
        name += 4;
        /** @type {number} */
        high = 0;
        for (;value > high;high++) {
            root = obj["getUint32"](name, true);
            name += 4;
            data = results[root];
            if (data) {
                data.R();
            }
        }
        if (_0x33d9x11b) {
            if (0 === child["length"]) {
                _onDead();
                _0x33d9x178 = Date["now"]();
                /** @type {boolean} */
                _0x33d9x177 = false;
                if (!to) {
                    if (!from) {
                        if (connected) {
                            /** @type {boolean} */
                            from = true;
                            success("#overlays")["fadeIn"](3E3);
                        } else {
                            cb(3E3);
                        }
                    }
                }
            }
        }
    }
    /**
     * @return {undefined}
     */
    function loaded() {
        success("#connecting")["hide"]();
        _init();
        if (get) {
            get();
            /** @type {null} */
            get = null;
        }
    }
    /**
     * @return {undefined}
     */
    function run() {
        if (!turnOffMouse && children()) {
            /** @type {number} */
            var z0 = zin - nodeList / 2;
            /** @type {number} */
            var z1 = alignToCenterY - tipWidth / 2;
            if (z0 * z0 + z1 * z1 >= 64) {
                if (!(0.01 > Math["abs"](n - step) && 0.01 > Math["abs"](dest - vec))) {
                    n = step;
                    dest = vec;
                    z0 = create(13);
                    z0["setUint8"](0, 16);
                    z0["setInt32"](1, step, true);
                    z0["setInt32"](5, vec, true);
                    z0["setUint32"](9, 0, true);
                    click(z0);
                }
            }
        }
    }
    /**
     * @return {undefined}
     */
    function _init() {
        if (children() && (deepStringMixin && null !== args)) {
            var button = create(1 + 2 * args["length"]);
            button["setUint8"](0, 0);
            /** @type {number} */
            var message = 0;
            var pageY = args["length"];
            for (;pageY > message;++message) {
                button["setUint16"](1 + 2 * message, args["charCodeAt"](message), true);
            }
            click(button);
            /** @type {null} */
            args = null;
        }
    }
    /**
     * @return {?}
     */
    function children() {
        return null !== ret && ret["readyState"] === ret["OPEN"];
    }
    /**
     * @param {number} expectedNumberOfNonCommentArgs
     * @return {undefined}
     */
    function render(expectedNumberOfNonCommentArgs) {
        if (children()) {
            var button = create(1);
            button["setUint8"](0, expectedNumberOfNonCommentArgs);
            click(button);
        }
    }
    /**
     * @return {undefined}
     */
    function trigger() {
        if (children() && null !== data) {
            var button = create(1 + data["length"]);
            button["setUint8"](0, 81);
            /** @type {number} */
            var high = 0;
            var value = data["length"];
            for (;value > high;++high) {
                button["setUint8"](high + 1, data["charCodeAt"](high));
            }
            click(button);
        }
    }
    /**
     * @return {undefined}
     */
    function fn() {
        /** @type {number} */
        nodeList = 1 * $["innerWidth"];
        /** @type {number} */
        tipWidth = 1 * $["innerHeight"];
        /** @type {number} */
        memory["width"] = stack["width"] = nodeList;
        /** @type {number} */
        memory["height"] = stack["height"] = tipWidth;
        var success1 = success("#helloContainer");
        success1["css"]("transform", "none");
        success1["height"]();
        $["innerHeight"];
        count();
    }
    /**
     * @return {?}
     */
    function _forEach() {
        var x0;
        return x0 = 1 * Math["max"](tipWidth / 1080, nodeList / 1920), x0 *= len;
    }
    /**
     * @return {undefined}
     */
    function forEach() {
        if (0 !== child["length"]) {
            /** @type {number} */
            var lowestDeltaXY = 0;
            /** @type {number} */
            var tmpIndex = child["length"] - 1;
            for (;tmpIndex > -1;--tmpIndex) {
                lowestDeltaXY += child[tmpIndex]["size"];
            }
            currentSize = lowestDeltaXY;
            /** @type {number} */
            lowestDeltaXY = Math["pow"](Math["min"](64 / lowestDeltaXY, 1), 0.4) * _forEach();
            /** @type {number} */
            alpha = (9 * alpha + lowestDeltaXY) / 10;
        }
    }
    /**
     * @return {undefined}
     */
    function count() {
        var arg;
        var diff = Date["now"]();
        ++_0x33d9x10f;
        max = diff;
        var a;
        /** @type {number} */
        var j = 0;
        if (0 < child["length"]) {
            forEach();
            /** @type {number} */
            a = 0;
            /** @type {number} */
            arg = 0;
            /** @type {number} */
            j = child["length"] - 1;
            for (;j > -1;--j) {
                child[j].J();
                arg += child[j]["x"] / child["length"];
                a += child[j]["y"] / child["length"];
            }
            /** @type {number} */
            cur = arg;
            /** @type {number} */
            start = a;
            beta = alpha;
            /** @type {number} */
            tmp = (tmp + arg) / 2;
            /** @type {number} */
            end = (end + a) / 2;
        } else {
            /** @type {number} */
            tmp = (29 * tmp + cur) / 30;
            /** @type {number} */
            end = (29 * end + start) / 30;
            /** @type {number} */
            alpha = (9 * alpha + beta * _forEach()) / 10;
        }
        r();
        activatePage$();
        if (oldStatus) {
            node["clearRect"](0, 0, nodeList, tipWidth);
            /** @type {number} */
            node["globalAlpha"] = 1;
        } else {
            toFunction();
        }
        entries["sort"](function(a, b) {
            return a["size"] === b["size"] ? a["id"] - b["id"] : a["size"] - b["size"];
        });
        node["save"]();
        node["translate"](nodeList / 2, tipWidth / 2);
        node["scale"](alpha, alpha);
        node["translate"](-tmp, -end);
        _drawMapCoodinate(node);
        /** @type {number} */
        j = 0;
        for (;j < dims["length"];j++) {
            dims[j]["s"](node);
        }
        /** @type {number} */
        j = 0;
        for (;j < entries["length"];j++) {
            entries[j]["s"](node);
        }
        if (_onDraw(obj["ctx"]), node["restore"](), currentValue = Math["max"](currentValue, mixin()), 0 !== currentValue) {
            if (null === item) {
                item = new clone(24, "#FFFFFF");
            }
            var _0x33d9xcf = enableCieMass ? " - STE: " + cieSplitToEat + " - MTE: " + cieMergeToEat : "";
            item["u"](toString("score") + ": " + ~~(currentValue / 100) + _0x33d9xcf + " [" + obj["myPoints"]["length"] + "/16]" + (turnOffMouse ? " \u2734\ufe0f Mouse off" : "") + " - FPS: " + framePerSecond);
            a = item.F();
            arg = a["width"];
            node["drawImage"](a, 15, tipWidth - 10 - 24 - 5);
        }
        /** @type {number} */
        diff = Date["now"]() - diff;
        if (diff > 1E3 / 60) {
            opt_val -= 0.01;
        } else {
            if (1E3 / 65 > diff) {
                opt_val += 0.01;
            }
        }
        if (0.4 > opt_val) {
            /** @type {number} */
            opt_val = 0.4;
        }
        if (opt_val > 1) {
            /** @type {number} */
            opt_val = 1;
        }
        /** @type {number} */
        diff = max - aux;
        if (!children() || (to || from)) {
            newEnd += diff / 2E3;
            if (newEnd > 1) {
                /** @type {number} */
                newEnd = 1;
            }
        } else {
            newEnd -= diff / 300;
            if (0 > newEnd) {
                /** @type {number} */
                newEnd = 0;
            }
        }
        aux = max;
    }
    /**
     * @return {undefined}
     */
    function toFunction() {
        if (node["clearRect"](0, 0, nodeList, tipWidth), showGridLines) {
            node["strokeStyle"] = "#AAAAAA";
            /** @type {number} */
            node["globalAlpha"] = 0.2 * alpha;
            node["beginPath"]();
            /** @type {number} */
            var f = nodeList / alpha;
            /** @type {number} */
            var ms = tipWidth / alpha;
            /** @type {number} */
            var d = (-tmp + f / 2) % 50;
            for (;f > d;d += 50) {
                node["moveTo"](d * alpha - 0.5, 0);
                node["lineTo"](d * alpha - 0.5, ms * alpha);
            }
            /** @type {number} */
            d = (-end + ms / 2) % 50;
            for (;ms > d;d += 50) {
                node["moveTo"](0, d * alpha - 0.5);
                node["lineTo"](f * alpha, d * alpha - 0.5);
            }
            node["closePath"]();
            node["stroke"]();
            /** @type {number} */
            node["globalAlpha"] = 1;
        }
    }
    /**
     * @return {?}
     */
    function mixin() {
        /** @type {number} */
        var obj = 0;
        /** @type {number} */
        var tmpIndex = 0;
        /** @type {number} */
        tmpIndex = child["length"] - 1;
        for (;tmpIndex > -1;--tmpIndex) {
            obj += child[tmpIndex]["m"] * child[tmpIndex]["m"];
        }
        return obj;
    }
    /**
     * @return {undefined}
     */
    function isArray() {
        if (context["length"] > 0) {
            var _0x33d9x35;
            var m;
            var value = "";
            var tail = context["length"];
            /** @type {number} */
            var p = 0;
            for (;tail > p;++p) {
                m = context[p];
                _0x33d9x35 = m["name"] || toString("unnamed_cell");
                value += -1 !== doc["indexOf"](m["id"]) ? "<span class=\"mine\">" + (p + 1) + ". " + _0x33d9x35 + "</span><br />" : skinMap["hasOwnProperty"](m["name"]) ? "<span class="team">" + (p + 1) + ". " + _0x33d9x35 + "</span><br />" : "<span>" + (p + 1) + ". " + _0x33d9x35 + "</span><br />";
            }
            flags["innerHTML"] = value;
        }
    }
    /**
     * @param {?} opt_vars
     * @param {?} opt_size
     * @param {?} autoplay
     * @param {?} url
     * @param {?} sess
     * @return {undefined}
     */
    function Player(opt_vars, opt_size, autoplay, url, sess) {
        this["P"] = opt_vars;
        this["x"] = opt_size;
        this["y"] = autoplay;
        this["g"] = url;
        this["b"] = sess;
    }
    /**
     * @param {?} code
     * @param {?} key
     * @param {?} module
     * @param {?} node
     * @param {?} exports
     * @param {?} att_name
     * @return {undefined}
     */
    function a(code, key, module, node, exports, att_name) {
        this["id"] = code;
        this["o"] = this["x"] = key;
        this["p"] = this["y"] = module;
        this["n"] = this["size"] = node;
        this["color"] = exports;
        /** @type {Array} */
        this["a"] = [];
        this.Q();
        this["t"](att_name);
    }
    /**
     * @param {(number|string)} code
     * @return {?}
     */
    function compile(code) {
        code = code.toString(16);
        for (;6 > code["length"];) {
            code = "0" + code;
        }
        return "#" + code;
    }
    /**
     * @param {?} dataAndEvents
     * @param {?} deepDataAndEvents
     * @param {?} events
     * @param {?} keepData
     * @return {undefined}
     */
    function clone(dataAndEvents, deepDataAndEvents, events, keepData) {
        if (dataAndEvents) {
            this["q"] = dataAndEvents;
        }
        if (deepDataAndEvents) {
            this["M"] = deepDataAndEvents;
        }
        /** @type {boolean} */
        this["O"] = !!events;
        if (keepData) {
            this["r"] = keepData;
        }
    }
    /**
     * @param {Array} result
     * @return {undefined}
     */
    function flattenTo(result) {
        var value;
        var rand;
        var index = result["length"];
        for (;index > 0;) {
            rand = Math["floor"](Math["random"]() * index);
            index--;
            value = result[index];
            result[index] = result[rand];
            result[rand] = value;
        }
    }
    /**
     * @param {?} opt_attributes
     * @param {Object} callback
     * @return {undefined}
     */
    function save(opt_attributes, callback) {
        /** @type {boolean} */
        var fn1 = "1" === success("#helloContainer")["attr"]("data-has-account-data");
        if (success("#helloContainer")["attr"]("data-has-account-data", "1"), null === callback && $["localStorage"][name]) {
            var deep = JSON["parse"]($["localStorage"][name]);
            deep["xp"] = opt_attributes["e"];
            deep["xpNeeded"] = opt_attributes["c"];
            deep["level"] = opt_attributes["d"];
            $["localStorage"][name] = JSON["stringify"](deep);
        }
        if (fn1) {
            /** @type {number} */
            var source = +success(".agario-exp-bar .progress-bar-text")["first"]()["text"]()["split"]("/")[0];
            /** @type {number} */
            fn1 = +success(".agario-exp-bar .progress-bar-text")["first"]()["text"]()["split"]("/")[1]["split"](" ")[0];
            var i = success(".agario-profile-panel .progress-bar-star")["first"]()["text"]();
            if (i != opt_attributes["d"]) {
                save({
                    e : fn1,
                    c : fn1,
                    d : i
                }, function() {
                    success(".agario-profile-panel .progress-bar-star")["text"](opt_attributes["d"]);
                    success(".agario-exp-bar .progress-bar")["css"]("width", "100%");
                    success(".progress-bar-star")["addClass"]("animated tada")["one"]("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        success(".progress-bar-star")["removeClass"]("animated tada");
                    });
                    setTimeout(function() {
                        success(".agario-exp-bar .progress-bar-text")["text"](opt_attributes["c"] + "/" + opt_attributes["c"] + " XP");
                        save({
                            e : 0,
                            c : opt_attributes["c"],
                            d : opt_attributes["d"]
                        }, function() {
                            save(opt_attributes, callback);
                        });
                    }, 1E3);
                });
            } else {
                var _0x33d9xa2 = Date["now"]();
                /**
                 * @return {undefined}
                 */
                var then = function() {
                    var pos;
                    /** @type {number} */
                    pos = (Date["now"]() - _0x33d9xa2) / 1E3;
                    /** @type {number} */
                    pos = 0 > pos ? 0 : pos > 1 ? 1 : pos;
                    /** @type {number} */
                    pos = pos * pos * (3 - 2 * pos);
                    success(".agario-exp-bar .progress-bar-text")["text"](~~(source + (opt_attributes["e"] - source) * pos) + "/" + opt_attributes["c"] + " XP");
                    success(".agario-exp-bar .progress-bar")["css"]("width", (88 * (source + (opt_attributes["e"] - source) * pos) / opt_attributes["c"])["toFixed"](2) + "%");
                    if (1 > pos) {
                        $["requestAnimationFrame"](then);
                    } else {
                        if (callback) {
                            callback();
                        }
                    }
                };
                $["requestAnimationFrame"](then);
            }
        } else {
            success(".agario-profile-panel .progress-bar-star")["text"](opt_attributes["d"]);
            success(".agario-exp-bar .progress-bar-text")["text"](opt_attributes["e"] + "/" + opt_attributes["c"] + " XP");
            success(".agario-exp-bar .progress-bar")["css"]("width", (88 * opt_attributes["e"] / opt_attributes["c"])["toFixed"](2) + "%");
            if (callback) {
                callback();
            }
        }
    }
    /**
     * @param {Text} buffer
     * @return {undefined}
     */
    function callback(buffer) {
        if ("string" == typeof buffer) {
            buffer = JSON["parse"](buffer);
        }
        if (Date["now"]() + 18E5 > buffer["expires"]) {
            success("#helloContainer")["attr"]("data-logged-in", "0");
        } else {
            $["localStorage"][name] = JSON["stringify"](buffer);
            data = buffer["authToken"];
            success(".agario-profile-name")["text"](buffer["name"]);
            trigger();
            save({
                e : buffer["xp"],
                c : buffer["xpNeeded"],
                d : buffer["level"]
            });
            success("#helloContainer")["attr"]("data-logged-in", "1");
        }
    }
    /**
     * @param {Array} result
     * @return {undefined}
     */
    function successCallback(result) {
        result = result["split"]("");
        callback({
            name : result[0],
            fbid : result[1],
            authToken : result[2],
            expires : 1E3 * +result[3],
            level : +result[4],
            xp : +result[5],
            xpNeeded : +result[6]
        });
    }
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    function logout(deepDataAndEvents) {
        if ("connected" === deepDataAndEvents["status"]) {
            var task = deepDataAndEvents["authResponse"]["accessToken"];
            $["FB"]["api"]("/me/picture?width=180&height=180", function(dataAndEvents) {
                $["localStorage"]["fbPictureCache"] = dataAndEvents["data"]["url"];
                success(".agario-profile-picture")["attr"]("src", dataAndEvents["data"]["url"]);
            });
            success("#helloContainer")["attr"]("data-logged-in", "1");
            if (null !== data) {
                success["ajax"](angle + "checkToken", {
                    /**
                     * @return {undefined}
                     */
                    error : function() {
                        /** @type {null} */
                        data = null;
                        logout(deepDataAndEvents);
                    },
                    /**
                     * @param {Array} textStatus
                     * @return {undefined}
                     */
                    success : function(textStatus) {
                        textStatus = textStatus["split"]("");
                        save({
                            d : +textStatus[0],
                            e : +textStatus[1],
                            c : +textStatus[2]
                        });
                    },
                    dataType : "text",
                    method : "POST",
                    cache : false,
                    crossDomain : true,
                    data : data
                });
            } else {
                success["ajax"](angle + "facebookLogin", {
                    /**
                     * @return {undefined}
                     */
                    error : function() {
                        /** @type {null} */
                        data = null;
                        success("#helloContainer")["attr"]("data-logged-in", "0");
                    },
                    /** @type {function (Array): undefined} */
                    success : successCallback,
                    dataType : "text",
                    method : "POST",
                    cache : false,
                    crossDomain : true,
                    data : task
                });
            }
        }
    }
    /**
     * @param {Object} data
     * @return {undefined}
     */
    function send(data) {
        _success(":party");
        success("#helloContainer")["attr"]("data-party-state", "4");
        data = decodeURIComponent(data)["replace"](/.*#/gim, "");
        isObject("#" + $["encodeURIComponent"](data));
        success["ajax"](angle + "getToken", {
            /**
             * @return {undefined}
             */
            error : function() {
                success("#helloContainer")["attr"]("data-party-state", "6");
            },
            /**
             * @param {(Array|number)} textStatus
             * @return {undefined}
             */
            success : function(textStatus) {
                textStatus = textStatus["split"]("
                ");
                success(".partyToken")["val"]("agar.io/#" + $["encodeURIComponent"](data));
                success("#helloContainer")["attr"]("data-party-state", "5");
                _success(":party");
                bind("ws://" + textStatus[0], data);
            },
            dataType : "text",
            method : "POST",
            cache : false,
            crossDomain : true,
            data : data
        });
    }
    /**
     * @param {?} arg
     * @return {undefined}
     */
    function isObject(arg) {
        if ($["history"]) {
            if ($["history"]["replaceState"]) {
                $["history"]["replaceState"]({}, $["document"]["title"], arg);
            }
        }
    }
    /**
     * @param {?} m
     * @param {?} str
     * @return {undefined}
     */
    function print(m, str) {
        /** @type {boolean} */
        var _0x33d9x79 = -1 !== doc["indexOf"](m["id"]);
        /** @type {boolean} */
        var _0x33d9xf8 = -1 !== doc["indexOf"](str["id"]);
        /** @type {boolean} */
        var _0x33d9x39 = 30 > str["size"];
        if (_0x33d9x79) {
            if (_0x33d9x39) {
                ++_0x33d9x174;
            }
        }
        if (!_0x33d9x39) {
            if (_0x33d9x79) {
                if (!_0x33d9xf8) {
                    ++inParens;
                }
            }
        }
    }
    var flags = document["getElementById"]("leaderboardInner");
    var obj = {};
    if (window["vndot"] = obj, Object["defineProperty"](obj, "connect", {
            /**
             * @return {?}
             */
            get : function() {
                return height;
            }
        }), Object["defineProperty"](obj, "ctx", {
            /**
             * @return {?}
             */
            get : function() {
                return node;
            }
        }), Object["defineProperty"](obj, "webSocket", {
            /**
             * @return {?}
             */
            get : function() {
                return ret;
            }
        }), Object["defineProperty"](obj, "myIds", {
            /**
             * @return {?}
             */
            get : function() {
                return doc;
            }
        }), Object["defineProperty"](obj, "myPoints", {
            /**
             * @return {?}
             */
            get : function() {
                return child;
            }
        }), Object["defineProperty"](obj, "allNodes", {
            /**
             * @return {?}
             */
            get : function() {
                return results;
            }
        }), Object["defineProperty"](obj, "allItems", {
            /**
             * @return {?}
             */
            get : function() {
                return entries;
            }
        }), Object["defineProperty"](obj, "mouseX2", {
            /**
             * @return {?}
             */
            get : function() {
                return to;
            }
        }), Object["defineProperty"](obj, "mouseY2", {
            /**
             * @return {?}
             */
            get : function() {
                return _success;
            }
        }), Object["defineProperty"](obj, "mapLeft", {
            /**
             * @return {?}
             */
            get : function() {
                return x;
            }
        }), Object["defineProperty"](obj, "mapTop", {
            /**
             * @return {?}
             */
            get : function() {
                return y;
            }
        }), Object["defineProperty"](obj, "mapRight", {
            /**
             * @return {?}
             */
            get : function() {
                return width;
            }
        }), Object["defineProperty"](obj, "mapBottom", {
            /**
             * @return {?}
             */
            get : function() {
                return height;
            }
        }), Object["defineProperty"](obj, "isShowSkins", {
            /**
             * @return {?}
             */
            get : function() {
                return fragment;
            }
        }), Object["defineProperty"](obj, "isNightMode", {
            /**
             * @return {?}
             */
            get : function() {
                return vec;
            }
        }), Object["defineProperty"](obj, "gameMode", {
            /**
             * @return {?}
             */
            get : function() {
                return result;
            }
        }), Object["defineProperty"](obj, "fireFunction", {
            /**
             * @return {?}
             */
            get : function() {
                return opt_val;
            }
        }), Object["defineProperty"](obj, "isColors", {
            /**
             * @return {?}
             */
            get : function() {
                return OUTPUT;
            }
        }), Object["defineProperty"](obj, "defaultSkins", {
            /**
             * @return {?}
             */
            get : function() {
                return error;
            }
        }), Object["defineProperty"](obj, "imgCache", {
            /**
             * @return {?}
             */
            get : function() {
                return parts;
            },
            /**
             * @param {?} mL
             * @return {undefined}
             */
            set : function(mL) {
                parts = mL;
            }
        }), Object["defineProperty"](obj, "textFunc", {
            /**
             * @return {?}
             */
            get : function() {
                return time;
            }
        }), Object["defineProperty"](obj, "textBlobs", {
            /**
             * @return {?}
             */
            get : function() {
                return count;
            }
        }), Object["defineProperty"](obj, "hasNickname", {
            /**
             * @return {?}
             */
            get : function() {
                return value;
            }
        }), Object["defineProperty"](obj, "CachedCanvas", {
            /**
             * @return {?}
             */
            get : function() {
                return time;
            }
        }), Object["defineProperty"](obj, "Cell", {
            /**
             * @return {?}
             */
            get : function() {
                return children;
            }
        }), Object["defineProperty"](obj, "mapWidth", {
            /**
             * @return {?}
             */
            get : function() {
                return~~(Math["abs"](obj["mapLeft"]) + obj["mapRight"]);
            }
        }), Object["defineProperty"](obj, "mapHeight", {
            /**
             * @return {?}
             */
            get : function() {
                return~~(Math["abs"](obj["mapTop"]) + obj["mapBottom"]);
            }
        }), Object["defineProperty"](obj, "leaderboard", {
            /**
             * @return {?}
             */
            get : function() {
                return context;
            }
        }), Object["defineProperty"](obj, "viewPosition", {
            /**
             * @return {?}
             */
            get : function() {
                return[cur, start];
            }
        }), Object["defineProperty"](obj, "mapPosition", {
            /**
             * @return {?}
             */
            get : function() {
                var a = Math["abs"](cur + obj["mapRight"]);
                var filesSent = Math["abs"](start + obj["mapBottom"]);
                /** @type {number} */
                var b = obj["mapWidth"] / 4;
                /** @type {number} */
                var totalFiles = obj["mapHeight"] / 4;
                var allEls = "ABCD";
                /** @type {number} */
                var j = ~~(filesSent / totalFiles);
                /** @type {number} */
                var i = ~~(a / b);
                return allEls[j] + (i + 1);
            }
        }), window["onMouseWheel"] = ap, window["ksOb"] = next, !$["agarioNoInit"]) {
        var startAngle = $["location"]["protocol"];
        /** @type {boolean} */
        var _0x33d9xff = "https:" === startAngle;
        var angle = startAngle + "//m.agar.io/";
        var _0x33d9x100 = $["navigator"]["userAgent"];
        if (-1 !== _0x33d9x100["indexOf"]("Android")) {
            if ($["ga"]) {
                $["ga"]("send", "event", "MobileRedirect", "PlayStore");
            }
            setTimeout(function() {
                $["location"]["href"] = "https://play.google.com/store/apps/details?id=com.miniclip.agar.io";
            }, 1E3);
        } else {
            if (-1 !== _0x33d9x100["indexOf"]("iPhone") || (-1 !== _0x33d9x100["indexOf"]("iPad") || -1 !== _0x33d9x100["indexOf"]("iPod"))) {
                if ($["ga"]) {
                    $["ga"]("send", "event", "MobileRedirect", "AppStore");
                }
                setTimeout(function() {
                    $["location"]["href"] = "https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp";
                }, 1E3);
            } else {
                var memory;
                var node;
                var stack;
                var nodeList;
                var tipWidth;
                var cur;
                /** @type {null} */
                var jQuery = null;
                /** @type {null} */
                var ret = null;
                /** @type {number} */
                var tmp = 0;
                /** @type {number} */
                var end = 0;
                /** @type {Array} */
                var doc = [];
                /** @type {Array} */
                var child = [];
                var results = {};
                /** @type {Array} */
                var entries = [];
                /** @type {Array} */
                var dims = [];
                /** @type {Array} */
                var context = [];
                /** @type {number} */
                var zin = 0;
                /** @type {number} */
                var alignToCenterY = 0;
                /** @type {number} */
                var step = -1;
                /** @type {number} */
                var vec = -1;
                /** @type {number} */
                var _0x33d9x10f = 0;
                /** @type {number} */
                var max = 0;
                /** @type {number} */
                var aux = 0;
                /** @type {null} */
                var args = null;
                /** @type {number} */
                var x = 0;
                /** @type {number} */
                var y = 0;
                /** @type {number} */
                var width = 1E4;
                /** @type {number} */
                var height = 1E4;
                /** @type {number} */
                var alpha = 1;
                /** @type {null} */
                var digits = null;
                /** @type {boolean} */
                var fragment = true;
                /** @type {boolean} */
                var text = true;
                /** @type {boolean} */
                var $rootScope = false;
                /** @type {boolean} */
                var _0x33d9x11b = false;
                /** @type {number} */
                var currentValue = 0;
                /** @type {boolean} */
                var doneResults = true;
                /** @type {boolean} */
                var $timeout = true;
                /** @type {number} */
                cur = tmp = ~~((x + width) / 2);
                var start;
                /** @type {number} */
                start = end = ~~((y + height) / 2);
                /** @type {number} */
                var beta = 1;
                var result = "";
                /** @type {null} */
                var enc4 = null;
                /** @type {boolean} */
                var _0x33d9x121 = false;
                /** @type {boolean} */
                var _0x33d9x122 = false;
                /** @type {number} */
                var def = 0;
                /** @type {number} */
                var type = 0;
                /** @type {number} */
                var value = 0;
                /** @type {number} */
                var msg = 0;
                /** @type {number} */
                var nth = 0;
                /** @type {boolean} */
                var oldStatus = false;
                /** @type {boolean} */
                var deepStringMixin = false;
                /** @type {number} */
                var min = 0;
                /** @type {null} */
                var data = null;
                /** @type {number} */
                var len = 1;
                /** @type {number} */
                var newEnd = 1;
                /** @type {boolean} */
                var to = false;
                /** @type {number} */
                var requestIndex = 0;
                var vars = {};
                /** @type {null} */
                var str = null;
                !function() {
                    var h = $["location"]["search"];
                    if ("?" === h["charAt"](0)) {
                        h = h["slice"](1);
                    }
                    h = h["split"]("&");
                    /** @type {number} */
                    var k = 0;
                    for (;k < h["length"];k++) {
                        var hash = h[k]["split"]("=");
                        vars[hash[0]] = hash[1];
                    }
                }();
                var _0x33d9x12e = "ontouchstart" in $ && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i["test"]($["navigator"]["userAgent"]);
                var _0x33d9x12f = document["createElement"]("canvas");
                if ("undefined" == typeof console || ("undefined" == typeof DataView || ("undefined" == typeof WebSocket || (null === _0x33d9x12f || (null === _0x33d9x12f["getContext"] || null === $["localStorage"]))))) {
                    alert("You browser does not support this game, we recommend you to use Firefox to play this");
                } else {
                    /** @type {null} */
                    var $cookies = null;
                    /**
                     * @param {string} arg2
                     * @return {undefined}
                     */
                    $["setNick"] = function(arg2) {
                        /** @type {boolean} */
                        turnOffMouse = false;
                        localStorage["setItem"]("nick", arg2);
                        if (currentSkinCode["length"]) {
                            arg2 = arg2["substr"](0, 15 - currentSkinCode["length"] - 1);
                        }
                        var r20 = currentSkinCode ? currentSkinCode["charCodeAt"](0) : 0;
                        if (2 === currentSkinCode["length"]) {
                            r20 += 65534;
                        }
                        if (r20 > 1 && 65535 > r20) {
                            arg2 += "\u0001" + String["fromCharCode"](r20);
                            currentYinSkin = "http://upload.happyfor.me/getimg.php?id=" + r20;
                        } else {
                            if (r20 > 65535) {
                                arg2 += "\u0001" + String["fromCharCode"](r20 - 65534) + "\uffff";
                                currentYinSkin = "http://upload.happyfor.me/getimg.php?id=" + r20;
                            } else {
                                currentYinSkin = "";
                            }
                        }
                        runCallbacks();
                        /** @type {string} */
                        args = arg2;
                        _init();
                        /** @type {number} */
                        currentValue = 0;
                        /** @type {string} */
                        currentPlayerName = arg2;
                    };
                    /** @type {function (?): undefined} */
                    $["setRegion"] = css;
                    /** @type {boolean} */
                    var OUTPUT = true;
                    /**
                     * @param {boolean} first
                     * @return {undefined}
                     */
                    $["setSkins"] = function(first) {
                        /** @type {boolean} */
                        fragment = first;
                    };
                    /**
                     * @param {boolean} textAlt
                     * @return {undefined}
                     */
                    $["setNames"] = function(textAlt) {
                        /** @type {boolean} */
                        text = textAlt;
                    };
                    /**
                     * @param {boolean} data
                     * @return {undefined}
                     */
                    $["setDarkTheme"] = function(data) {
                        /** @type {boolean} */
                        doneResults = data;
                    };
                    /**
                     * @param {boolean} _$rootScope_
                     * @return {undefined}
                     */
                    $["setColors"] = function(_$rootScope_) {
                        /** @type {boolean} */
                        $rootScope = _$rootScope_;
                    };
                    /**
                     * @param {boolean} _$timeout_
                     * @return {undefined}
                     */
                    $["setShowMass"] = function(_$timeout_) {
                        /** @type {boolean} */
                        $timeout = _$timeout_;
                    };
                    /**
                     * @return {undefined}
                     */
                    $["spectate"] = function() {
                        /** @type {null} */
                        args = null;
                        render(1);
                        runCallbacks();
                        if (0 === obj["myPoints"]["length"]) {
                            _onStartSpec();
                        }
                    };
                    /**
                     * @param {(Object|number)} deepDataAndEvents
                     * @return {undefined}
                     */
                    $["setGameMode"] = function(deepDataAndEvents) {
                        if (deepDataAndEvents !== result) {
                            if (":party" === result) {
                                success("#helloContainer")["attr"]("data-party-state", "0");
                            }
                            _success(deepDataAndEvents);
                            if (":party" !== deepDataAndEvents) {
                                search();
                            }
                        }
                    };
                    /**
                     * @param {boolean} newStatus
                     * @return {undefined}
                     */
                    $["setAcid"] = function(newStatus) {
                        /** @type {boolean} */
                        oldStatus = newStatus;
                    };
                    if (null !== $["localStorage"]) {
                        if (null === $["localStorage"]["AB9"]) {
                            /** @type {number} */
                            $["localStorage"]["AB9"] = 0 + ~~(100 * Math["random"]());
                        }
                        /** @type {number} */
                        nth = +$["localStorage"]["AB9"];
                        /** @type {number} */
                        $["ABGroup"] = nth;
                    }
                    success["get"](startAngle + "//gc.agar.io", function(attr) {
                        var sel = attr["split"](" ");
                        attr = sel[0];
                        sel = sel[1] || "";
                        if (el["hasOwnProperty"](attr)) {
                            if ("string" == typeof el[attr]) {
                                if (!digits) {
                                    css(el[attr]);
                                }
                            } else {
                                if (el[attr]["hasOwnProperty"](sel)) {
                                    if (!digits) {
                                        css(el[attr][sel]);
                                    }
                                }
                            }
                        }
                    }, "text");
                    var el = {
                        AF : "JP-Tokyo",
                        AX : "EU-London",
                        AL : "EU-London",
                        DZ : "EU-London",
                        AS : "SG-Singapore",
                        AD : "EU-London",
                        AO : "EU-London",
                        AI : "US-Atlanta",
                        AG : "US-Atlanta",
                        AR : "BR-Brazil",
                        AM : "JP-Tokyo",
                        AW : "US-Atlanta",
                        AU : "SG-Singapore",
                        AT : "EU-London",
                        AZ : "JP-Tokyo",
                        BS : "US-Atlanta",
                        BH : "JP-Tokyo",
                        BD : "JP-Tokyo",
                        BB : "US-Atlanta",
                        BY : "EU-London",
                        BE : "EU-London",
                        BZ : "US-Atlanta",
                        BJ : "EU-London",
                        BM : "US-Atlanta",
                        BT : "JP-Tokyo",
                        BO : "BR-Brazil",
                        BQ : "US-Atlanta",
                        BA : "EU-London",
                        BW : "EU-London",
                        BR : "BR-Brazil",
                        IO : "JP-Tokyo",
                        VG : "US-Atlanta",
                        BN : "JP-Tokyo",
                        BG : "EU-London",
                        BF : "EU-London",
                        BI : "EU-London",
                        KH : "JP-Tokyo",
                        CM : "EU-London",
                        CA : "US-Atlanta",
                        CV : "EU-London",
                        KY : "US-Atlanta",
                        CF : "EU-London",
                        TD : "EU-London",
                        CL : "BR-Brazil",
                        CN : "CN-China",
                        CX : "JP-Tokyo",
                        CC : "JP-Tokyo",
                        CO : "BR-Brazil",
                        KM : "EU-London",
                        CD : "EU-London",
                        CG : "EU-London",
                        CK : "SG-Singapore",
                        CR : "US-Atlanta",
                        CI : "EU-London",
                        HR : "EU-London",
                        CU : "US-Atlanta",
                        CW : "US-Atlanta",
                        CY : "JP-Tokyo",
                        CZ : "EU-London",
                        DK : "EU-London",
                        DJ : "EU-London",
                        DM : "US-Atlanta",
                        DO : "US-Atlanta",
                        EC : "BR-Brazil",
                        EG : "EU-London",
                        SV : "US-Atlanta",
                        GQ : "EU-London",
                        ER : "EU-London",
                        EE : "EU-London",
                        ET : "EU-London",
                        FO : "EU-London",
                        FK : "BR-Brazil",
                        FJ : "SG-Singapore",
                        FI : "EU-London",
                        FR : "EU-London",
                        GF : "BR-Brazil",
                        PF : "SG-Singapore",
                        GA : "EU-London",
                        GM : "EU-London",
                        GE : "JP-Tokyo",
                        DE : "EU-London",
                        GH : "EU-London",
                        GI : "EU-London",
                        GR : "EU-London",
                        GL : "US-Atlanta",
                        GD : "US-Atlanta",
                        GP : "US-Atlanta",
                        GU : "SG-Singapore",
                        GT : "US-Atlanta",
                        GG : "EU-London",
                        GN : "EU-London",
                        GW : "EU-London",
                        GY : "BR-Brazil",
                        HT : "US-Atlanta",
                        VA : "EU-London",
                        HN : "US-Atlanta",
                        HK : "JP-Tokyo",
                        HU : "EU-London",
                        IS : "EU-London",
                        IN : "JP-Tokyo",
                        ID : "JP-Tokyo",
                        IR : "JP-Tokyo",
                        IQ : "JP-Tokyo",
                        IE : "EU-London",
                        IM : "EU-London",
                        IL : "JP-Tokyo",
                        IT : "EU-London",
                        JM : "US-Atlanta",
                        JP : "JP-Tokyo",
                        JE : "EU-London",
                        JO : "JP-Tokyo",
                        KZ : "JP-Tokyo",
                        KE : "EU-London",
                        KI : "SG-Singapore",
                        KP : "JP-Tokyo",
                        KR : "JP-Tokyo",
                        KW : "JP-Tokyo",
                        KG : "JP-Tokyo",
                        LA : "JP-Tokyo",
                        LV : "EU-London",
                        LB : "JP-Tokyo",
                        LS : "EU-London",
                        LR : "EU-London",
                        LY : "EU-London",
                        LI : "EU-London",
                        LT : "EU-London",
                        LU : "EU-London",
                        MO : "JP-Tokyo",
                        MK : "EU-London",
                        MG : "EU-London",
                        MW : "EU-London",
                        MY : "JP-Tokyo",
                        MV : "JP-Tokyo",
                        ML : "EU-London",
                        MT : "EU-London",
                        MH : "SG-Singapore",
                        MQ : "US-Atlanta",
                        MR : "EU-London",
                        MU : "EU-London",
                        YT : "EU-London",
                        MX : "US-Atlanta",
                        FM : "SG-Singapore",
                        MD : "EU-London",
                        MC : "EU-London",
                        MN : "JP-Tokyo",
                        ME : "EU-London",
                        MS : "US-Atlanta",
                        MA : "EU-London",
                        MZ : "EU-London",
                        MM : "JP-Tokyo",
                        NA : "EU-London",
                        NR : "SG-Singapore",
                        NP : "JP-Tokyo",
                        NL : "EU-London",
                        NC : "SG-Singapore",
                        NZ : "SG-Singapore",
                        NI : "US-Atlanta",
                        NE : "EU-London",
                        NG : "EU-London",
                        NU : "SG-Singapore",
                        NF : "SG-Singapore",
                        MP : "SG-Singapore",
                        NO : "EU-London",
                        OM : "JP-Tokyo",
                        PK : "JP-Tokyo",
                        PW : "SG-Singapore",
                        PS : "JP-Tokyo",
                        PA : "US-Atlanta",
                        PG : "SG-Singapore",
                        PY : "BR-Brazil",
                        PE : "BR-Brazil",
                        PH : "JP-Tokyo",
                        PN : "SG-Singapore",
                        PL : "EU-London",
                        PT : "EU-London",
                        PR : "US-Atlanta",
                        QA : "JP-Tokyo",
                        RE : "EU-London",
                        RO : "EU-London",
                        RU : "RU-Russia",
                        RW : "EU-London",
                        BL : "US-Atlanta",
                        SH : "EU-London",
                        KN : "US-Atlanta",
                        LC : "US-Atlanta",
                        MF : "US-Atlanta",
                        PM : "US-Atlanta",
                        VC : "US-Atlanta",
                        WS : "SG-Singapore",
                        SM : "EU-London",
                        ST : "EU-London",
                        SA : "EU-London",
                        SN : "EU-London",
                        RS : "EU-London",
                        SC : "EU-London",
                        SL : "EU-London",
                        SG : "JP-Tokyo",
                        SX : "US-Atlanta",
                        SK : "EU-London",
                        SI : "EU-London",
                        SB : "SG-Singapore",
                        SO : "EU-London",
                        ZA : "EU-London",
                        SS : "EU-London",
                        ES : "EU-London",
                        LK : "JP-Tokyo",
                        SD : "EU-London",
                        SR : "BR-Brazil",
                        SJ : "EU-London",
                        SZ : "EU-London",
                        SE : "EU-London",
                        CH : "EU-London",
                        SY : "EU-London",
                        TW : "JP-Tokyo",
                        TJ : "JP-Tokyo",
                        TZ : "EU-London",
                        TH : "JP-Tokyo",
                        TL : "JP-Tokyo",
                        TG : "EU-London",
                        TK : "SG-Singapore",
                        TO : "SG-Singapore",
                        TT : "US-Atlanta",
                        TN : "EU-London",
                        TR : "TK-Turkey",
                        TM : "JP-Tokyo",
                        TC : "US-Atlanta",
                        TV : "SG-Singapore",
                        UG : "EU-London",
                        UA : "EU-London",
                        AE : "EU-London",
                        GB : "EU-London",
                        US : "US-Atlanta",
                        UM : "SG-Singapore",
                        VI : "US-Atlanta",
                        UY : "BR-Brazil",
                        UZ : "JP-Tokyo",
                        VU : "SG-Singapore",
                        VE : "BR-Brazil",
                        VN : "JP-Tokyo",
                        WF : "SG-Singapore",
                        EH : "EU-London",
                        YE : "JP-Tokyo",
                        ZM : "EU-London",
                        ZW : "EU-London"
                    };
                    /** @type {null} */
                    var get = null;
                    if ($["connect"]) {
                        var throttledUpdate = $["connect"];
                        setTimeout(function() {
                            try {
                                throttledUpdate("Killing_original_websocket", "");
                            } catch (err) {
                            }
                        }, 1500);
                    }
                    /** @type {function (?, Object): undefined} */
                    $["connect"] = bind;
                    /** @type {number} */
                    var time = 500;
                    /** @type {number} */
                    var n = -1;
                    /** @type {number} */
                    var dest = -1;
                    /**
                     * @return {undefined}
                     */
                    $["refreshPlayerInfo"] = function() {
                        render(253);
                    };
                    /** @type {null} */
                    var enc3 = null;
                    /** @type {number} */
                    var opt_val = 1;
                    /** @type {null} */
                    var item = null;
                    var which = function() {
                        var d = Date["now"]();
                        /** @type {number} */
                        var _0x33d9x142 = 0;
                        /** @type {number} */
                        var diff = 0;
                        var aux = Date["now"]();
                        /** @type {number} */
                        var b = 1E3 / 60;
                        return function() {
                            $["requestAnimationFrame"](which);
                            var x = Date["now"]();
                            /** @type {number} */
                            var a = x - d;
                            if (diff > 1E3) {
                                aux = Date["now"]();
                                /** @type {number} */
                                diff = 0;
                                framePerSecond = _0x33d9x142;
                                /** @type {number} */
                                _0x33d9x142 = 0;
                            } else {
                                /** @type {number} */
                                diff = Date["now"]() - aux;
                            }
                            if (a > b) {
                                /** @type {number} */
                                d = x - a % b;
                                if (!children() || 240 > Date["now"]() - min) {
                                    count();
                                    _0x33d9x142++;
                                }
                                tryIt();
                            }
                        };
                    }();
                    var parts = {};
                    Player["prototype"] = {
                        P : null,
                        x : 0,
                        y : 0,
                        g : 0,
                        b : 0
                    };
                    a["prototype"] = {
                        id : 0,
                        a : null,
                        name : null,
                        k : null,
                        I : null,
                        x : 0,
                        y : 0,
                        size : 0,
                        o : 0,
                        p : 0,
                        n : 0,
                        C : 0,
                        D : 0,
                        m : 0,
                        T : 0,
                        K : 0,
                        W : 0,
                        A : false,
                        f : false,
                        j : false,
                        L : true,
                        S : 0,
                        V : null,
                        /**
                         * @return {undefined}
                         */
                        R : function() {
                            var tag;
                            /** @type {number} */
                            tag = 0;
                            var entry = entries["length"];
                            for (;entry > tag;tag++) {
                                if (entries[tag] === this) {
                                    entries["splice"](tag, 1);
                                    break;
                                }
                            }
                            delete results[this["id"]];
                            tag = child["indexOf"](this);
                            if (-1 !== tag) {
                                /** @type {boolean} */
                                _0x33d9x11b = true;
                                child["splice"](tag, 1);
                            }
                            tag = doc["indexOf"](this["id"]);
                            if (-1 !== tag) {
                                doc["splice"](tag, 1);
                            }
                            /** @type {boolean} */
                            this["A"] = true;
                            if (0 < this["S"]) {
                                dims["push"](this);
                            }
                        },
                        /**
                         * @return {?}
                         */
                        i : function() {
                            return Math["max"](~~(0.3 * this["size"]), 24);
                        },
                        /**
                         * @param {(Node|string)} a
                         * @return {undefined}
                         */
                        t : function(a) {
                            if (this["name"] = a, a && (null === this["k"] ? this["k"] = new clone(this["i"](), "#FFFFFF", true, "#000000") : this["k"].G(this["i"]()), this["k"]["u"](this["name"]), isEnableYinSkin)) {
                                var _0x33d9x145 = a["split"]("\u0001");
                                if (_0x33d9x145["length"] > 1) {
                                    var r20 = _0x33d9x145["pop"]();
                                    if (/^[\u0002-\uffff]\uffff?$/["test"](r20)) {
                                        if (2 === r20["length"]) {
                                            this["img"] = "http://upload.happyfor.me/getimg.php?id=" + (r20["charCodeAt"](0) + 65534);
                                        } else {
                                            this["img"] = "http://upload.happyfor.me/getimg.php?id=" + r20["charCodeAt"](0);
                                        }
                                    }
                                }
                            }
                        },
                        /**
                         * @return {undefined}
                         */
                        Q : function() {
                            var msg;
                            var B = this.B();
                            for (;this["a"]["length"] > B;) {
                                /** @type {number} */
                                msg = ~~(Math["random"]() * this["a"]["length"]);
                                this["a"]["splice"](msg, 1);
                            }
                            if (0 === this["a"]["length"]) {
                                if (B > 0) {
                                    this["a"]["push"](new Player(this, this["x"], this["y"], this["size"], Math["random"]() - 0.5));
                                }
                            }
                            for (;this["a"]["length"] < B;) {
                                /** @type {number} */
                                msg = ~~(Math["random"]() * this["a"]["length"]);
                                msg = this["a"][msg];
                                this["a"]["push"](new Player(this, msg["x"], msg["y"], msg["g"], msg["b"]));
                            }
                        },
                        /**
                         * @return {?}
                         */
                        B : function() {
                            /** @type {number} */
                            var suggestedValue = 10;
                            if (20 > this["size"]) {
                                /** @type {number} */
                                suggestedValue = 0;
                            }
                            if (this["f"]) {
                                /** @type {number} */
                                suggestedValue = 30;
                            }
                            var currentValue = this["size"];
                            return this["f"] || (currentValue *= alpha), currentValue *= opt_val, 32 & this["T"] && (currentValue *= 0.25), ~~Math["max"](currentValue, suggestedValue);
                        },
                        /**
                         * @return {undefined}
                         */
                        da : function() {
                            this.Q();
                            var a;
                            var b;
                            var cs = this["a"];
                            var n = cs["length"];
                            /** @type {number} */
                            var i = 0;
                            for (;n > i;++i) {
                                a = cs[(i - 1 + n) % n]["b"];
                                b = cs[(i + 1) % n]["b"];
                                cs[i]["b"] += (Math["random"]() - 0.5) * (this["j"] ? 3 : 1);
                                cs[i]["b"] *= 0.7;
                                if (10 < cs[i]["b"]) {
                                    /** @type {number} */
                                    cs[i]["b"] = 10;
                                }
                                if (-10 > cs[i]["b"]) {
                                    /** @type {number} */
                                    cs[i]["b"] = -10;
                                }
                                /** @type {number} */
                                cs[i]["b"] = (a + b + 8 * cs[i]["b"]) / 10;
                            }
                            var inprogress = this;
                            /** @type {number} */
                            var difference = this["f"] ? 0 : (this["id"] / 1E3 + max / 1E4) % (2 * Math["PI"]);
                            /** @type {number} */
                            i = 0;
                            for (;n > i;++i) {
                                var _0x33d9x7b = cs[i]["g"];
                                if (a = cs[(i - 1 + n) % n]["g"], b = cs[(i + 1) % n]["g"], 15 < this["size"] && (null !== jQuery && (20 < this["size"] * alpha && 0 < this["id"]))) {
                                    /** @type {boolean} */
                                    var _0x33d9x14c = false;
                                    var yEnd = cs[i]["x"];
                                    var cx = cs[i]["y"];
                                    jQuery["ea"](yEnd - 5, cx - 5, 10, 10, function(queue) {
                                        if (queue["P"] !== inprogress) {
                                            if (25 > (yEnd - queue["x"]) * (yEnd - queue["x"]) + (cx - queue["y"]) * (cx - queue["y"])) {
                                                /** @type {boolean} */
                                                _0x33d9x14c = true;
                                            }
                                        }
                                    });
                                    if (!_0x33d9x14c) {
                                        if (cs[i]["x"] < x || (cs[i]["y"] < y || (cs[i]["x"] > width || cs[i]["y"] > height))) {
                                            /** @type {boolean} */
                                            _0x33d9x14c = true;
                                        }
                                    }
                                    if (_0x33d9x14c) {
                                        if (0 < cs[i]["b"]) {
                                            /** @type {number} */
                                            cs[i]["b"] = 0;
                                        }
                                        cs[i]["b"] -= 1;
                                    }
                                }
                                _0x33d9x7b += cs[i]["b"];
                                if (0 > _0x33d9x7b) {
                                    /** @type {number} */
                                    _0x33d9x7b = 0;
                                }
                                /** @type {number} */
                                _0x33d9x7b = this["j"] ? (19 * _0x33d9x7b + this["size"]) / 20 : (12 * _0x33d9x7b + this["size"]) / 13;
                                /** @type {number} */
                                cs[i]["g"] = (a + b + 8 * _0x33d9x7b) / 10;
                                /** @type {number} */
                                a = 2 * Math["PI"] / n;
                                b = this["a"][i]["g"];
                                if (this["f"]) {
                                    if (0 === i % 2) {
                                        b += 5;
                                    }
                                }
                                cs[i]["x"] = this["x"] + Math["cos"](a * i + difference) * b;
                                cs[i]["y"] = this["y"] + Math["sin"](a * i + difference) * b;
                            }
                        },
                        /**
                         * @return {?}
                         */
                        J : function() {
                            if (0 >= this["id"]) {
                                return 1;
                            }
                            var position;
                            /** @type {number} */
                            position = (max - this["K"]) / 120;
                            /** @type {number} */
                            position = 0 > position ? 0 : position > 1 ? 1 : position;
                            /** @type {number} */
                            var _0x33d9x81 = 0 > position ? 0 : position > 1 ? 1 : position;
                            if (this["i"](), this["A"] && _0x33d9x81 >= 1) {
                                var r20 = dims["indexOf"](this);
                                if (-1 !== r20) {
                                    dims["splice"](r20, 1);
                                }
                            }
                            return this["x"] = position * (this["C"] - this["o"]) + this["o"], this["y"] = position * (this["D"] - this["p"]) + this["p"], this["size"] = _0x33d9x81 * (this["m"] - this["n"]) + this["n"], _0x33d9x81;
                        },
                        /**
                         * @return {?}
                         */
                        H : function() {
                            return 0 >= this["id"] ? true : this["x"] + this["size"] + 40 < tmp - nodeList / 2 / alpha || (this["y"] + this["size"] + 40 < end - tipWidth / 2 / alpha || (this["x"] - this["size"] - 40 > tmp + nodeList / 2 / alpha || this["y"] - this["size"] - 40 > end + tipWidth / 2 / alpha)) ? false : true;
                        },
                        /**
                         * @param {?} d
                         * @return {undefined}
                         */
                        s : function(d) {
                            if (!(this["size"] < 15 && isSpecMode) && this.H()) {
                                ++this["S"];
                                /** @type {boolean} */
                                var _0x33d9x14e = 0 < this["id"] && (!this["f"] && (!this["j"] && 0.4 > alpha));
                                if (5 > this.B()) {
                                    if (0 < this["id"]) {
                                        /** @type {boolean} */
                                        _0x33d9x14e = true;
                                    }
                                }
                                var child;
                                if (this["L"] && !_0x33d9x14e) {
                                    /** @type {number} */
                                    child = 0;
                                    var _0x33d9xc5 = this["a"]["length"];
                                    for (;_0x33d9xc5 > child;child++) {
                                        this["a"][child]["g"] = this["size"];
                                    }
                                }
                                /** @type {boolean} */
                                this["L"] = _0x33d9x14e;
                                d["save"]();
                                this["W"] = max;
                                child = this.J();
                                if (this["A"]) {
                                    d["globalAlpha"] *= 1 - child;
                                }
                                /** @type {number} */
                                d["lineWidth"] = 0;
                                d["lineCap"] = "round";
                                d["lineJoin"] = this["f"] ? "miter" : "round";
                                if ($rootScope) {
                                    d["fillStyle"] = "#FFFFFF";
                                    d["strokeStyle"] = "#AAAAAA";
                                } else {
                                    if (myColorIndex > 0 && obj["myIds"]["indexOf"](this["id"]) > -1) {
                                        d["fillStyle"] = myColors[myColorIndex];
                                        d["strokeStyle"] = myColors[myColorIndex];
                                    } else {
                                        if (!isKeepFoodColor && this["size"] < 15) {
                                            d["fillStyle"] = foodColor;
                                            d["strokeStyle"] = foodColor;
                                        } else {
                                            d["fillStyle"] = this["color"];
                                            d["strokeStyle"] = this["color"];
                                        }
                                    }
                                }
                                var parent;
                                var node;
                                if (_0x33d9x14e ? (d["beginPath"](), d["arc"](this["x"], this["y"], this["size"], 0, 2 * Math["PI"], false)) : (this["da"](), d["beginPath"](), parent = this.B(), child = parent, d["arc"](this["x"], this["y"], this["size"], 0, 2 * Math["PI"], false)), d["closePath"](), !this["j"] && (this["size"] > 15 && (fragment && ":teams" !== result))) {
                                    var i = this["skinUrl"];
                                    if (!i) {
                                        var slotEntry = skinMap[this["name"]];
                                        if (obj["myIds"]["indexOf"](this["id"]) > -1) {
                                            i = currentSkin || (currentYinSkin || DEFAULT_SKIN);
                                        } else {
                                            if (slotEntry && this["color"] === slotEntry["color"]) {
                                                i = isDefaultSkinForAll ? DEFAULT_SKIN : slotEntry["skin"];
                                            } else {
                                                if (isEnableYinSkin) {
                                                    if (this["img"]) {
                                                        i = this["img"];
                                                    }
                                                }
                                            }
                                        }
                                        if (i) {
                                            if (/\.(png|jpg|jpeg)$/["test"](i)) {
                                                i = "http://i0.wp.com/" + i["substring"](i["indexOf"]("//") + 2) + "?w=200";
                                            }
                                        }
                                        this["skinUrl"] = i;
                                    }
                                    if (i) {
                                        var part = parts[i];
                                        if (!(part && part["src"] === i)) {
                                            /** @type {Image} */
                                            parts[i] = new Image;
                                            parts[i]["src"] = i;
                                            part = parts[i];
                                        }
                                        parent = 0 < part["width"] && part["complete"] ? part : null;
                                    } else {
                                        /** @type {null} */
                                        parent = null;
                                    }
                                } else {
                                    /** @type {null} */
                                    parent = null;
                                }
                                if (node = parent, this["size"] < 20 ? d["globalAlpha"] = 1 : _isVirus(this) ? d["globalAlpha"] = 0.8 : d["globalAlpha"] = isTransparentCell ? 0.95 : 1, (null === node || node["src"] === DEFAULT_SKIN) && d["fill"](), null !== node) {
                                    d["save"]();
                                    d["clip"]();
                                    try {
                                        d["drawImage"](node, this["x"] - this["size"], this["y"] - this["size"], 2 * this["size"], 2 * this["size"]);
                                    } catch (err) {
                                    }
                                    d["restore"]();
                                }
                                var type = "";
                                var pageX = "";
                                if (enableCieMass || (enableCieSignal || enableCieCircle)) {
                                    if (20 < this["size"] && (!_isVirus(this) && obj["myPoints"]["length"] > 0)) {
                                        if (-1 === obj["myIds"]["indexOf"](this["id"])) {
                                            var _0x33d9x153 = _getSelectedBlob();
                                            var average = _getMass(_0x33d9x153["size"]);
                                            var standardDeviation = _getMass(this["size"]);
                                            /** @type {number} */
                                            cieSplitToEat = ~~(average * Tiny);
                                            /** @type {number} */
                                            cieMergeToEat = ~~(average * Small);
                                            if (standardDeviation > average * Huge) {
                                                this["cieColor"] = Huge_Color;
                                                pageX = "::";
                                            } else {
                                                if (standardDeviation > average * Large) {
                                                    this["cieColor"] = Large_Color;
                                                    pageX = ":";
                                                } else {
                                                    if (standardDeviation > average * Small) {
                                                        this["cieColor"] = Same_Color;
                                                    } else {
                                                        if (standardDeviation > average * Tiny) {
                                                            this["cieColor"] = Small_Color;
                                                            type = ":";
                                                        } else {
                                                            this["cieColor"] = Tiny_Color;
                                                            type = "::";
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            /** @type {null} */
                                            this["cieColor"] = null;
                                        }
                                    }
                                    if (enableCieCircle && this["cieColor"]) {
                                        /** @type {number} */
                                        d["lineWidth"] = 4;
                                        /** @type {number} */
                                        d["globalAlpha"] = 1;
                                        d["beginPath"]();
                                        d["strokeStyle"] = this["cieColor"];
                                        /** @type {number} */
                                        var _0x33d9x156 = ~~(this["size"] / 12);
                                        if (15 > _0x33d9x156) {
                                            /** @type {number} */
                                            _0x33d9x156 = 15;
                                        }
                                        d["arc"](this["x"], this["y"], this["size"] + _0x33d9x156, 0, 2 * Math["PI"], false);
                                        d["stroke"]();
                                    }
                                }
                                /** @type {number} */
                                d["globalAlpha"] = 1;
                                /** @type {number} */
                                _0x33d9x14e = ~~this["y"];
                                var r20;
                                var restoreScript;
                                if (0 !== this["id"] && (this["name"] && this["k"])) {
                                    node = this["k"];
                                    node["u"](this["name"]);
                                    node.G(this["i"]());
                                    /** @type {number} */
                                    child = 0 >= this["id"] ? 1 : Math["ceil"](10 * alpha) / 10;
                                    node.U(child);
                                    node = node.F();
                                    /** @type {number} */
                                    var rreturn = ~~(node["width"] / child);
                                    /** @type {number} */
                                    var udataCur = ~~(node["height"] / child);
                                    d["drawImage"](node, ~~this["x"] - ~~(rreturn / 2), _0x33d9x14e - ~~(udataCur / 2), rreturn, udataCur);
                                    _0x33d9x14e += node["height"] / 2 / child + 4;
                                }
                                if (0 < this["id"]) {
                                    if ($timeout) {
                                        if (parent || 38 < this["size"]) {
                                            if (skinMap["hasOwnProperty"](this["name"]) && skinMap[this["name"]]["color"] === this["color"] || this["id"] === selectedBlobId) {
                                                if (null === this["I"] || "#000000" !== this["I"]["M"]) {
                                                    this["I"] = new clone(this["i"]() / 2, "#000000", true, "#FFFFFF");
                                                }
                                            } else {
                                                if (null === this["I"] || "#FFFFFF" !== this["I"]["M"] && obj["myIds"]["indexOf"](this["id"]) > -1) {
                                                    this["I"] = new clone(this["i"]() / 2, "#FFFFFF", true, "#000000");
                                                }
                                            }
                                            parent = this["I"];
                                            if (_isVirus(this)) {
                                                parent["u"]("" + ~~((149 - this["size"]) / 7));
                                                parent.G(4 * this["i"]());
                                            } else {
                                                if (enableCieSignal) {
                                                    parent["u"](type + ~~(this["size"] * this["size"] / 100) + pageX);
                                                } else {
                                                    parent["u"](~~(this["size"] * this["size"] / 100));
                                                }
                                                parent.G(this["i"]());
                                            }
                                            /** @type {number} */
                                            child = Math["ceil"](10 * alpha) / 10;
                                            parent.U(child);
                                            node = parent.F();
                                            /** @type {number} */
                                            r20 = ~~(node["width"] / child);
                                            /** @type {number} */
                                            restoreScript = ~~(node["height"] / child);
                                            d["drawImage"](node, ~~this["x"] - ~~(r20 / 2), _0x33d9x14e - ~~(restoreScript / 2), r20, restoreScript);
                                        }
                                    }
                                }
                                d["restore"]();
                            }
                        }
                    };
                    clone["prototype"] = {
                        w : "",
                        M : "#000000",
                        O : false,
                        r : "#000000",
                        q : 16,
                        l : null,
                        N : null,
                        h : false,
                        v : 1,
                        /**
                         * @param {number} mod
                         * @return {undefined}
                         */
                        G : function(mod) {
                            if (this["q"] !== mod) {
                                /** @type {number} */
                                this["q"] = mod;
                                /** @type {boolean} */
                                this["h"] = true;
                            }
                        },
                        /**
                         * @param {?} input
                         * @return {undefined}
                         */
                        U : function(input) {
                            if (this["v"] !== input) {
                                this["v"] = input;
                                /** @type {boolean} */
                                this["h"] = true;
                            }
                        },
                        /**
                         * @param {?} b
                         * @return {undefined}
                         */
                        setStrokeColor : function(b) {
                            if (this["r"] !== b) {
                                this["r"] = b;
                                /** @type {boolean} */
                                this["h"] = true;
                            }
                        },
                        /**
                         * @param {?} a
                         * @return {undefined}
                         */
                        u : function(a) {
                            if (a !== this["w"]) {
                                this["w"] = a;
                                /** @type {boolean} */
                                this["h"] = true;
                            }
                        },
                        /**
                         * @return {?}
                         */
                        F : function() {
                            if (null === this["l"] && (this["l"] = document["createElement"]("canvas"), this["N"] = this["l"]["getContext"]("2d")), this["h"]) {
                                /** @type {boolean} */
                                this["h"] = false;
                                var out = this["l"];
                                var flags = this["N"];
                                var r20 = this["w"];
                                var nf = this["v"];
                                var far = this["q"];
                                var value = far + "px Ubuntu";
                                flags["font"] = value;
                                /** @type {number} */
                                var near = ~~(0.2 * far);
                                /** @type {number} */
                                out["width"] = (flags["measureText"](r20)["width"] + 6) * nf;
                                /** @type {number} */
                                out["height"] = (far + near) * nf;
                                flags["font"] = value;
                                flags["scale"](nf, nf);
                                /** @type {number} */
                                flags["globalAlpha"] = 1;
                                /** @type {number} */
                                flags["lineWidth"] = 3;
                                flags["strokeStyle"] = this["r"];
                                flags["fillStyle"] = this["M"];
                                if (this["O"]) {
                                    flags["strokeText"](r20, 3, ~~(far - near / 2));
                                }
                                flags["fillText"](r20, 3, ~~(far - near / 2));
                            }
                            return this["l"];
                        }
                    };
                    if (!Date["now"]) {
                        /**
                         * @return {?}
                         */
                        Date["now"] = function() {
                            return(new Date)["getTime"]();
                        };
                    }
                    (function() {
                        /** @type {Array} */
                        var ws = ["ms", "moz", "webkit", "o"];
                        /** @type {number} */
                        var y = 0;
                        var x = ws["length"];
                        for (;x > y && !$["requestAnimationFrame"];++y) {
                            $["requestAnimationFrame"] = $[ws[y] + "RequestAnimationFrame"];
                            $["cancelAnimationFrame"] = $[ws[y] + "CancelAnimationFrame"] || $[ws[y] + "CancelRequestAnimationFrame"];
                        }
                        if (!$["requestAnimationFrame"]) {
                            /**
                             * @param {?} fnc
                             * @return {?}
                             */
                            $["requestAnimationFrame"] = function(fnc) {
                                return setTimeout(fnc, 1E3 / 60);
                            };
                            /**
                             * @param {?} to
                             * @return {undefined}
                             */
                            $["cancelAnimationFrame"] = function(to) {
                                clearTimeout(to);
                            };
                        }
                    })();
                    var pos = {
                        /**
                         * @param {?} args
                         * @return {?}
                         */
                        X : function(args) {
                            /**
                             * @param {?} end
                             * @return {?}
                             */
                            function $(end) {
                                return start > end && (end = start), end > next && (end = next), ~~((end - start) / 32);
                            }
                            /**
                             * @param {?} left
                             * @return {?}
                             */
                            function parseInt(left) {
                                return x > left && (left = x), left > right && (left = right), ~~((left - x) / 32);
                            }
                            var start = args["ba"];
                            var x = args["ca"];
                            var next = args["Z"];
                            var right = args["$"];
                            /** @type {number} */
                            var dim = ~~((next - start) / 32) + 1;
                            /** @type {number} */
                            var klength = ~~((right - x) / 32) + 1;
                            /** @type {Array} */
                            var cache = Array(dim * klength);
                            return{
                                /**
                                 * @param {?} v
                                 * @return {undefined}
                                 */
                                Y : function(v) {
                                    var k = $(v["x"]) + parseInt(v["y"]) * dim;
                                    if (cache[k]) {
                                        if (Array["isArray"](cache[k])) {
                                            cache[k]["push"](v);
                                        } else {
                                            /** @type {Array} */
                                            cache[k] = [cache[k], v];
                                        }
                                    } else {
                                        cache[k] = v;
                                    }
                                },
                                /**
                                 * @param {number} elem
                                 * @param {number} c
                                 * @param {number} item
                                 * @param {number} r
                                 * @param {?} func
                                 * @return {undefined}
                                 */
                                ea : function(elem, c, item, r, func) {
                                    var q = $(elem);
                                    var g = parseInt(c);
                                    elem = $(elem + item);
                                    c = parseInt(c + r);
                                    for (;c >= g;++g) {
                                        r = q;
                                        for (;elem >= r;++r) {
                                            if (item = cache[r + g * dim]) {
                                                if (Array["isArray"](item)) {
                                                    /** @type {number} */
                                                    var prop = 0;
                                                    var callback = item["length"];
                                                    for (;callback > prop;prop++) {
                                                        func(item[prop]);
                                                    }
                                                } else {
                                                    func(item);
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                        }
                    };
                    success(function() {
                    });
                    var name = "loginCache3";
                    success(function() {
                        if (+$["localStorage"]["wannaLogin"]) {
                            if ($["localStorage"][name]) {
                                callback($["localStorage"][name]);
                            }
                            if ($["localStorage"]["fbPictureCache"]) {
                                success(".agario-profile-picture")["attr"]("src", $["localStorage"]["fbPictureCache"]);
                            }
                        }
                    });
                    /**
                     * @return {undefined}
                     */
                    $["facebookLogin"] = function() {
                        /** @type {number} */
                        $["localStorage"]["wannaLogin"] = 1;
                    };
                    /**
                     * @return {undefined}
                     */
                    $["fbAsyncInit"] = function() {
                        /**
                         * @return {undefined}
                         */
                        function makeArray() {
                            /** @type {number} */
                            $["localStorage"]["wannaLogin"] = 1;
                            if ($["FB"]) {
                                $["FB"]["login"](function(deepDataAndEvents) {
                                    logout(deepDataAndEvents);
                                }, {
                                    scope : "public_profile, email"
                                });
                            } else {
                                alert("You seem to have something blocking Facebook on your browser, please check for any extensions");
                            }
                        }
                        $["FB"]["init"]({
                            appId : "677505792353827",
                            cookie : true,
                            xfbml : true,
                            status : true,
                            version : "v2.2"
                        });
                        $["FB"]["Event"]["subscribe"]("auth.statusChange", function(deepDataAndEvents) {
                            if (+$["localStorage"]["wannaLogin"]) {
                                if ("connected" === deepDataAndEvents["status"]) {
                                    logout(deepDataAndEvents);
                                } else {
                                    makeArray();
                                }
                            }
                        });
                        /** @type {function (): undefined} */
                        $["facebookLogin"] = makeArray;
                    };
                    /**
                     * @return {undefined}
                     */
                    $["logout"] = function() {
                        /** @type {null} */
                        data = null;
                        success("#helloContainer")["attr"]("data-logged-in", "0");
                        success("#helloContainer")["attr"]("data-has-account-data", "0");
                        delete $["localStorage"]["wannaLogin"];
                        delete $["localStorage"][name];
                        delete $["localStorage"]["fbPictureCache"];
                        search();
                    };
                    var tryIt = function() {
                        /**
                         * @param {?} callback
                         * @param {number} dataAndEvents
                         * @param {?} deepDataAndEvents
                         * @param {number} events
                         * @param {?} keepData
                         * @return {undefined}
                         */
                        function clone(callback, dataAndEvents, deepDataAndEvents, events, keepData) {
                            var downloadId = dataAndEvents["getContext"]("2d");
                            var _0x33d9xd3 = dataAndEvents["width"];
                            dataAndEvents = dataAndEvents["height"];
                            callback["color"] = keepData;
                            callback["t"](deepDataAndEvents);
                            /** @type {number} */
                            callback["size"] = events;
                            downloadId["save"]();
                            downloadId["translate"](_0x33d9xd3 / 2, dataAndEvents / 2);
                            callback["s"](downloadId);
                            downloadId["restore"]();
                        }
                        var which = new a(-1, 0, 0, 32, "#5bc0de", "");
                        var restoreScript = new a(-1, 0, 0, 32, "#5bc0de", "");
                        var component = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e"["split"](" ");
                        /** @type {Array} */
                        var expectationResult = [];
                        /** @type {number} */
                        var delta = 0;
                        var lowestDelta = component["length"];
                        for (;lowestDelta > delta;++delta) {
                            /** @type {number} */
                            var y = delta / lowestDelta * 12;
                            /** @type {number} */
                            var _width = 30 * Math["sqrt"](delta / lowestDelta);
                            expectationResult["push"](new a(-1, Math["cos"](y) * _width, Math["sin"](y) * _width, 10, component[delta], ""));
                        }
                        flattenTo(expectationResult);
                        var node = document["createElement"]("canvas");
                        return node["getContext"]("2d"), node["width"] = node["height"] = 70, clone(restoreScript, node, "", 26, "#ebc0de"), function() {
                            success(".cell-spinner")["filter"](":visible")["each"](function() {
                                var str = success(this);
                                var x = Date["now"]();
                                var r20 = this["width"];
                                var restoreScript = this["height"];
                                var Y_DOM = this["getContext"]("2d");
                                Y_DOM["clearRect"](0, 0, r20, restoreScript);
                                Y_DOM["save"]();
                                Y_DOM["translate"](r20 / 2, restoreScript / 2);
                                /** @type {number} */
                                var y = 0;
                                for (;10 > y;++y) {
                                    Y_DOM["drawImage"](node, (0.1 * x + 80 * y) % (r20 + 140) - r20 / 2 - 70 - 35, restoreScript / 2 * Math["sin"]((0.001 * x + y) % Math["PI"] * 2) - 35, 70, 70);
                                }
                                Y_DOM["restore"]();
                                str = str["attr"]("data-itr");
                                if (str) {
                                    str = toString(str);
                                }
                                clone(which, this, str || "", +success(this)["attr"]("data-size"), "#5bc0de");
                            });
                        };
                    }();
                    /**
                     * @return {undefined}
                     */
                    $["createParty"] = function() {
                        _success(":party");
                        /**
                         * @param {Object} elem
                         * @return {undefined}
                         */
                        get = function(elem) {
                            isObject("/#" + $["encodeURIComponent"](elem));
                            success(".partyToken")["val"]("agar.io/#" + $["encodeURIComponent"](elem));
                            success("#helloContainer")["attr"]("data-party-state", "1");
                        };
                        search();
                    };
                    /** @type {function (Object): undefined} */
                    $["joinParty"] = send;
                    /**
                     * @return {undefined}
                     */
                    $["cancelParty"] = function() {
                        isObject("/");
                        success("#helloContainer")["attr"]("data-party-state", "0");
                        _success("");
                        search();
                    };
                    /** @type {Array} */
                    var _0x33d9x39 = [];
                    /** @type {number} */
                    var _0x33d9x174 = 0;
                    var _0x33d9x175 = "#000000";
                    /** @type {boolean} */
                    var from = false;
                    /** @type {boolean} */
                    var _0x33d9x177 = false;
                    /** @type {number} */
                    var _0x33d9x82 = 0;
                    /** @type {number} */
                    var _0x33d9x178 = 0;
                    /** @type {number} */
                    var _0x33d9x35 = 0;
                    /** @type {number} */
                    var inParens = 0;
                    /** @type {number} */
                    var inPseudo = 0;
                    /** @type {boolean} */
                    var connected = false;
                    /**
                     * @return {undefined}
                     */
                    $["closeStats"] = function() {
                        /** @type {boolean} */
                        from = false;
                        cb(0);
                    };
                    /**
                     * @param {?} err
                     * @return {undefined}
                     */
                    $["setSkipStats"] = function(err) {
                        /** @type {boolean} */
                        connected = !err;
                    };
                    success(function() {
                        success(init);
                    });
                }
            }
        }
    }
}(window, window["jQuery"]), $(document)["ready"](function() {
    /**
     * @return {undefined}
     */
    function throttledUpdate() {
        window["ksOb"]();
    }
    /**
     * @return {?}
     */
    function onLoad() {
        return _0x33d9x18f["val"]();
    }
    /**
     * @return {undefined}
     */
    function tryIt() {
        _0x33d9x18f["val"]("");
    }
    /**
     * @return {undefined}
     */
    function cframe() {
        _0x33d9x190["removeClass"]("disabled");
        _0x33d9x190["text"]("Connect");
        _0x33d9x191["addClass"]("disabled");
        /** @type {number} */
        window["ksConnectTriedCounter"] = -1;
    }
    /**
     * @return {undefined}
     */
    function traverseNode() {
        /** @type {number} */
        window["ksConnectTriedCounter"] = 0;
        _0x33d9x190["addClass"]("disabled");
        _0x33d9x190["text"]("Connecting...");
        _0x33d9x191["removeClass"]("disabled");
    }
    /**
     * @return {undefined}
     */
    function Benchmark() {
        window["ksConnectTriedCounter"]++;
        _0x33d9x190["text"]("Connecting... (" + window["ksConnectTriedCounter"] + ")");
    }
    var emptyJ = $("div#helloContainer");
    var _0x33d9x183 = emptyJ["find"]("div#mainPanel");
    _0x33d9x183["find"]("form div.form-group:first")["append"]("<h3>VNDOT <small>v" + version + " by KSCC & GS.Chich</small></h3>");
    _0x33d9x183["find"]("input#nick")["val"](currentPlayerName);
    var _0x33d9x184 = _0x33d9x183["find"]("#settings");
    var _0x33d9x185 = _0x33d9x183["find"]("#settings div#ks-skin-group");
    var _0x33d9x186 = _0x33d9x185["find"]("input#ks-skin-textbox");
    var _0x33d9x187 = _0x33d9x185["find"]("input#ks-skin-code");
    _0x33d9x186["val"](currentSkin);
    _0x33d9x186["on"]("input propertychange paste", function() {
        /** @type {string} */
        var stringConstructor = String(this["value"]);
        if (0 === stringConstructor["length"] || /^http/["test"](stringConstructor)) {
            _0x33d9x185["removeClass"]("has-error");
            /** @type {string} */
            currentSkin = stringConstructor;
            localStorage["setItem"]("skin", currentSkin);
        } else {
            _0x33d9x185["addClass"]("has-error");
        }
    });
    _0x33d9x187["val"](currentSkinCode);
    _0x33d9x187["on"]("input propertychange paste", function() {
        /** @type {string} */
        var t = String(this["value"]);
        if (t["length"] < 3) {
            _0x33d9x185["removeClass"]("has-error");
            /** @type {string} */
            currentSkinCode = t;
            localStorage["setItem"]("skin_code", currentSkinCode);
        } else {
            _0x33d9x185["addClass"]("has-error");
        }
    });
    var _0x33d9x189 = _0x33d9x184["find"]("input#vndot-team");
    _0x33d9x189["val"](currentTeam);
    _0x33d9x189["on"]("input propertychange paste", function() {
        currentTeam = this["value"];
        /** @type {null} */
        currentLeaderBoard = null;
    });
    var _0x33d9xb4 = _0x33d9x184["find"]("#options");
    _0x33d9xb4["find"]("input[onchange="setSkins(!$(this).is(':checked'));"]")["prop"]("checked", !vndot["isShowSkins"]);
    _0x33d9xb4["find"]("input[onchange="setShowMass($(this).is(':checked'));"]")["prop"]("checked", true);
    _0x33d9xb4["find"]("input#option_gridlines")["change"](function() {
        showGridLines = this["checked"];
    });
    _0x33d9xb4["find"]("input#option_foodcolor")["change"](function() {
        isKeepFoodColor = this["checked"];
    });
    _0x33d9xb4["find"]("input#option_defaultskin")["change"](function() {
        isDefaultSkinForAll = this["checked"];
    });
    _0x33d9xb4["find"]("input#option_cieMass")["change"](function() {
        enableCieMass = this["checked"];
    });
    _0x33d9xb4["find"]("input#option_cieSignal")["change"](function() {
        enableCieSignal = this["checked"];
    });
    _0x33d9xb4["find"]("input#option_cieCircle")["change"](function() {
        enableCieCircle = this["checked"];
    });
    _0x33d9xb4["find"]("input#option_yinSkin")["change"](function() {
        isEnableYinSkin = this["checked"];
    });
    _0x33d9xb4["find"]("input#option_transparent")["change"](function() {
        isTransparentCell = this["checked"];
    });
    var _0x33d9x18a = emptyJ["find"]("#agario-main-buttons");
    $("#connecting")["css"]("z-index", 1E3);
    miniMapCtx = document["getElementById"]("mini-map")["getContext"]("2d");
    cboxInput = $("input#cboxmsg");
    /**
     * @param {?} dataAndEvents
     * @return {undefined}
     */
    window["openServerbrowser"] = function(dataAndEvents) {
        $("#serverBrowser")["fadeIn"]();
    };
    /**
     * @return {undefined}
     */
    window["closeServerbrowser"] = function() {
        $("#serverBrowser")["fadeOut"]();
    };
    angular["module"]("vnks", [])["controller"]("mainCtrl", ["$scope", "$timeout", function(exports, $sanitize) {
        var xhr = io(SERVER_URL + "/serverInfo");
        /**
         * @return {undefined}
         */
        exports["getServers"] = function() {
            xhr["emit"]("server.info", "", function(val) {
                $sanitize(function() {
                    exports["servers"] = val;
                });
            });
        };
        /**
         * @param {?} task
         * @return {undefined}
         */
        exports["connectServer"] = function(task) {
            if (task) {
                if (-1 === task["indexOf"](".")) {
                    $("#joinPartyToken")["val"](task);
                    window["joinParty"](task);
                } else {
                    $("input#ksIpInput")["val"](task);
                    traverseNode();
                    throttledUpdate();
                }
            }
        };
        /**
         * @return {undefined}
         */
        exports["stopConnect"] = function() {
            $("input#ksIpInput")["val"]("");
        };
        /**
         * @return {?}
         */
        exports["connectTriedCounter"] = function() {
            return window["ksConnectTriedCounter"];
        };
        /**
         * @param {boolean} m3
         * @return {?}
         */
        exports["getTotalMass"] = function(m3) {
            return m3 ? ~~(m3 * m3 / 100) : 0;
        };
    }]);
    $("#serverBrowser")["ready"](function() {
        angular["bootstrap"]($("#serverBrowser"), ["vnks"]);
    });
    var _0x33d9x18f;
    var _0x33d9x190;
    var _0x33d9x191;
    _0x33d9x18f = _0x33d9x18a["find"]("input#ksIpInput");
    _0x33d9x190 = _0x33d9x18a["find"]("button#ksConnectBtn");
    _0x33d9x191 = _0x33d9x18a["find"]("button#ksStopBtn");
    _0x33d9x190["click"](function() {
        traverseNode();
        throttledUpdate();
    });
    _0x33d9x191["click"](function() {
        tryIt();
    });
    /** @type {function (): ?} */
    window["ksGetWantedIp"] = onLoad;
    /** @type {function (): undefined} */
    window["ksStopConnect"] = cframe;
    /** @type {function (): undefined} */
    window["ksUpdateConnectBtn"] = Benchmark;
});
/** @type {null} */
var miniMapBackground = null;
/** @type {number} */
var lastTimePressOnM = 0;
/** @type {Array} */
var messages = [{
    code : 49,
    key : 1,
    msg : "Need help",
    cbox : ":cuu",
    type : "warning"
}, {
    code : 50,
    key : 2,
    msg : "Feed me",
    type : "warning"
}, {
    code : 51,
    key : 3,
    msg : "Enermies near me",
    cbox : "codich",
    type : "warning"
}, {
    code : 52,
    key : 4,
    msg : "Eat virus",
    cbox : ":pha",
    type : "warning"
}, {
    code : 53,
    key : 5,
    msg : "Fire virus",
    cbox : ":ban",
    type : "warning"
}, {
    code : 54,
    key : 6,
    msg : "Run run run!",
    cbox : "Ch\u1ea1y \u0111i",
    type : "warning"
}, {
    code : 55,
    key : 7,
    msg : "Feed teemates",
    cbox : ":bfvt",
    type : "warning"
}, {
    code : 56,
    key : 8,
    msg : "We won!",
    type : "warning"
}, {
    code : 57,
    key : 9,
    msg : "WTF, house burning!!!",
    cbox : ":dot",
    type : "error"
}, {
    code : 48,
    key : 0,
    msg : "I love KSCC <3",
    type : "success"
}];
/** @type {Array} */
var guides = [];
messages["forEach"](function(dataAndEvents) {
    guides["push"]("<br>" + dataAndEvents["key"] + ": " + dataAndEvents["msg"]);
}), guides = guides["join"]("");
/** @type {number} */
var lastTimeSendMsg = 0;
toastr["options"]["positionClass"] = "toast-top-left", toastr["options"]["preventDuplicates"] = true;
var holdInterval;
/** @type {boolean} */
var holdSwitchy = false;
var holdBody = $("body");
$(document)["on"]("keydown", function(dataAndEvents) {
    if (81 === dataAndEvents["keyCode"]) {
        if (holdSwitchy) {
            return;
        }
        /** @type {boolean} */
        holdSwitchy = true;
        /** @type {number} */
        holdInterval = setInterval(function() {
            holdBody["trigger"]($.Event("keydown", {
                keyCode : 87
            }));
            holdBody["trigger"]($.Event("keyup", {
                keyCode : 87
            }));
        }, 100);
    }
}), $(document)["on"]("keyup", function(dataAndEvents) {
    return 81 === dataAndEvents["keyCode"] ? (holdSwitchy = false, void clearInterval(holdInterval)) : void 0;
});
var _cbox = $("#cbox");
var _miniMap = $("#mini-map");
var socket = io(SERVER_URL);
socket["on"]("connect", function() {
    /** @type {null} */
    currentLeaderBoard = null;
}), socket["on"]("room.join", function(dataAndEvents) {
}), socket["on"]("room.play", function(dataAndEvents) {
}), socket["on"]("msg", function(dataAndEvents) {
    toastr[dataAndEvents["type"]](dataAndEvents["msg"], dataAndEvents["sender"]);
});
