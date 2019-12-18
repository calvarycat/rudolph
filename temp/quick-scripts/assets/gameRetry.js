(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/gameRetry.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b2f5cXxJnJIYrKJ/9WU2OUu', 'gameRetry', __filename);
// gameRetry.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        guide: {
            default: null, // The default value will be used only when the component attaching
            type: cc.Node // optional, default is typeof default
        }

    },

    onEnable: function onEnable() {

        this.guide.scaleX = 0.0;
        this.guide.scaleY = 0.0;
        this.guide.runAction(cc.scaleTo(0.5, 1, 1).easing(cc.easeBackOut()));
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
        //# sourceMappingURL=gameRetry.js.map
        