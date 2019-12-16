cc.Class({
    extends: cc.Component,

    properties: {     
        speed: 0,  
        startx: 0,   
        resetX: 0
    },

    update (dt) {
       
        var x = this.node.x;
        x -= this.speed * dt;
        if (x <= -400) {
            x= this.startx;    
            var y =  this.getRandomInt(80,280);
            this.node.y=y;
        }     
        this.node.x = x;
    },

    getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
});
