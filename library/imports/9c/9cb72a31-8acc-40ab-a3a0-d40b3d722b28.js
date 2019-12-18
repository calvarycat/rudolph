"use strict";
cc._RF.push(module, '9cb72oxisxAq6Og1As9ciso', 'UILocalize');
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