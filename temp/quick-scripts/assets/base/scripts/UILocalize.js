(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/base/scripts/UILocalize.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9cb72oxisxAq6Og1As9ciso', 'UILocalize', __filename);
// base/scripts/UILocalize.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        key: ''
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    setKey: function setKey(value) {
        this.key = value;
        this.getComponent(cc.Label).string = window.localize.text(this.key);
    },
    onEnable: function onEnable() {
        this.getComponent(cc.Label).string = window.localize.text(this.key);
    }
}

// start () {},

// update (dt) {},
);

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
        //# sourceMappingURL=UILocalize.js.map
        