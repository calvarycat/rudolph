(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/base/scripts/PopupQuit.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b398aZHn+tDEYYXlLAGqrca', 'PopupQuit', __filename);
// base/scripts/PopupQuit.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        txtQuitMessage: {
            default: null,
            type: cc.Label
        },
        guide: {
            default: null,
            type: cc.Node
        }
    },

    // onLoad () {},

    // update (dt) {},


    onEnable: function onEnable() {

        this.txtQuitMessage.string = window.localize.textFormat('popup_quit_body', [window.config.max_score]);
        this.guide.scaleX = 0.0;
        this.guide.scaleY = 0.0;
        this.guide.runAction(cc.scaleTo(0.5, 1, 1).easing(cc.easeBackOut()));

        setTimeout(function () {
            cc.game.pause();
        }.bind(this), 500);
    },
    onQuit: function onQuit() {
        this.node.active = false;
        callGameQuit();
    },
    onContinue: function onContinue() {
        var _this = this;

        cc.game.resume();
        //  window.gamecontroller.isPaulse=false;
        this.guide.runAction(cc.scaleTo(0.25, 0, 0).easing(cc.easeQuadraticActionOut()));
        setTimeout(function () {
            _this.node.active = false;
        }, 250);
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
        //# sourceMappingURL=PopupQuit.js.map
        