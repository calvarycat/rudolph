(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '08c0aPJ6E5OQq5A+MBiywTI', 'Player', __filename);
// Player.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        canvas: {
            default: null, // The default value will be used only when the component attaching
            type: cc.Node, // optional, default is typeof default
            serializable: true // optional, default is true
        },

        rb2d: cc.RigidBody,
        isFlap: false,
        speed: 300,
        isDie: false,

        sfscore: {
            default: null, // The default value will be used only when the component attaching
            type: cc.AudioClip // optional, default is typeof default           
        },
        sfGameover: {
            default: null, // The default value will be used only when the component attaching
            type: cc.AudioClip // optional, default is typeof default           
        },
        sfFlap: {
            default: null, // The default value will be used only when the component attaching
            type: cc.AudioClip // optional, default is typeof default           
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;        
        cc.director.getPhysicsManager().enabled = true;
        this.canvas.on(cc.Node.EventType.TOUCH_START, this.jump, this);
    },
    jump: function jump() {
        if (this.isDie == true) {
            return;
        }
        cc.audioEngine.play(this.sfFlap, false, .5);
        this.isFlap = true;
    },
    start: function start() {},
    update: function update(dt) {

        if (this.isDie || window.gamecontroller.isPaulse == true) return;
        var speed = this.rb2d.linearVelocity;
        if (this.isFlap == true) {
            speed.y = this.speed;
            this.isFlap = false;
        }
        this.rb2d.linearVelocity = speed;
    },


    onCollisionEnter: function onCollisionEnter(other, self) {
        if (this.isDie) return;
        if (other.node.name == 'Score') {
            cc.audioEngine.play(this.sfscore, false, 1);
            window.gamecontroller.onAddScore();
        } else {
            this.isDie = true;
            cc.audioEngine.play(this.sfGameover, false, 1);
            setTimeout(function () {
                window.gamecontroller.onGameOver();
            }.bind(this), 100);
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
        //# sourceMappingURL=Player.js.map
        