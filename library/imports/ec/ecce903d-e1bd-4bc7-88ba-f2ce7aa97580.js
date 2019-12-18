"use strict";
cc._RF.push(module, 'ecce9A94b1Lx4i68s56qXWA', 'GameControll');
// base/scripts/GameControll.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        popupQuit: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {

        var search = this.getUrlVars();
        window.localize.languge = search['lang'] == null ? 'vi' : search['lang'];
        window.config.max_score = search['max_score'] == null ? 5 : Number(search['max_score']);
    },
    getUrlVars: function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    },
    start: function start() {},


    // update (dt) {},

    onSoungClick: function onSoungClick() {
        cc.audioEngine.playEffect(this.touchAudio, false);
    },
    onClickClose: function onClickClose() {

        this.popupQuit.active = true;
    },
    callGameComplete: function (_callGameComplete) {
        function callGameComplete(_x) {
            return _callGameComplete.apply(this, arguments);
        }

        callGameComplete.toString = function () {
            return _callGameComplete.toString();
        };

        return callGameComplete;
    }(function (score) {
        callGameComplete(score);
    })
});

cc._RF.pop();