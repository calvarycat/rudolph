cc.Class({
    extends: cc.Component,

    properties: {
        guide: {
            default: null,        // The default value will be used only when the component attaching
            type: cc.Node, // optional, default is typeof default
        },
      
    },

   

    onEnable () {
    
     
        this.guide.scaleX = 0.0;
        this.guide.scaleY = 0.0;
        this.guide.runAction(cc.scaleTo(0.5, 1, 1).easing(cc.easeBackOut()));         
       
    },
});
