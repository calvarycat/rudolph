(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Gamcontroller.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3c6feuc6aFBioVcDqmAaLTA', 'Gamcontroller', __filename);
// Gamcontroller.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        gamePlay: cc.Node,
        uiGameplay: cc.Node,
        uiRetry: cc.Node,
        pnHome: cc.Node,
        score: 0,
        txtLable: cc.Label,
        isPaulse: false,
        txtretryTime: cc.Label
    },

    onLoad: function onLoad() {
        window.gamecontroller = this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    start: function start() {},
    onStart: function onStart() {

        this.score = 0;
        this.gamePlay.active = true;
        this.pnHome.active = false;
        this.uiGameplay.active = true;
    },
    onGameOver: function onGameOver() {
        if (this.score >= scoresend) {
            scoresend = this.score;
            if (scoresend >= 10) {
                scoresend = 10;
            }
        }
        livestime--;
        if (livestime == 0) {
            callGameComplete(scoresend * 1000);
        } else {
            this.txtretryTime.string = window.localize.textFormat('g_oopscontent', [livestime]);
            this.uiRetry.active = true;
        }
    },
    OnRetry: function OnRetry() {
        //location.reload();

        cc.director.loadScene("gameplay", function () {
            cc.log("Next scene preloaded");
        });
    },
    OnFinish: function OnFinish() {
        callGameComplete(scoresend * 1000);
    },
    onAddScore: function onAddScore() {
        this.score++;
        this.txtLable.string = this.score;
    },
    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.escape:
                callGameQuit();
                break;

        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Gamcontroller.js.map
        