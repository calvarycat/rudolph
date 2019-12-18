"use strict";
cc._RF.push(module, 'd4decZS0SBEwINyaQthJB4n', 'Scrooller');
// Scrooller.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0,
        startx: 0,
        resetX: 0
    },

    update: function update(dt) {

        var x = this.node.x;
        x -= this.speed * dt;
        if (x <= -400) {
            x = this.startx;
            var y = this.getRandomInt(80, 280);
            this.node.y = y;
        }
        this.node.x = x;
    },
    getRandomInt: function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

cc._RF.pop();