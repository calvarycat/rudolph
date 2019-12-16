
cc.Class({
    extends: cc.Component,

    properties: {
        canvas: {
            default: null,        // The default value will be used only when the component attaching
            type: cc.Node, // optional, default is typeof default
            serializable: true,   // optional, default is true
        },
      
     
        rb2d:cc.RigidBody,
        isFlap:false,
        speed :300,       
        isDie:false,

        sfscore: {
            default: null,        // The default value will be used only when the component attaching
            type: cc.AudioClip, // optional, default is typeof default           
        },
        sfGameover: {
            default: null,        // The default value will be used only when the component attaching
            type: cc.AudioClip, // optional, default is typeof default           
        },
        sfFlap: {
            default: null,        // The default value will be used only when the component attaching
            type: cc.AudioClip, // optional, default is typeof default           
        },
    },
   
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        cc.director.getCollisionManager().enabled = true;
       // cc.director.getCollisionManager().enabledDebugDraw = true;
       // cc.director.getCollisionManager().enabledDrawBoundingBox = true;        
         cc.director.getPhysicsManager().enabled=true;
         this.canvas.on(cc.Node.EventType.TOUCH_START,this.jump, this);
     },
     jump()
     {   
         if(this.isDie==true)
         {
             return;
         }
        cc.audioEngine.play(this.sfFlap, false, .5);
        this.isFlap=true;       
     },
     
    start () {

    },

     update (dt) {
     

        if(this.isDie ||  window.gamecontroller.isPaulse==true)
        return;
       var speed= this.rb2d.linearVelocity;
       if(this.isFlap==true)
       {
           speed.y=this.speed;
           this.isFlap=false;
       }
       this.rb2d.linearVelocity=speed;
     },

     onCollisionEnter: function (other, self) {      
        if(this.isDie)
        return;
       if(other.node.name=='Score')
       {
        cc.audioEngine.play(this.sfscore, false, 1);
        window.gamecontroller.onAddScore();
       }else
       {
           this.isDie=true;
        cc.audioEngine.play(this.sfGameover, false, 1);
        setTimeout(function () {
            window.gamecontroller.onGameOver();
          }.bind(this), 100);
       
       }
       
    },
});
