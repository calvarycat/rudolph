
cc.Class({
    extends: cc.Component,

    properties: {
        gamePlay : cc.Node,
        uiGameplay : cc.Node,    
        uiRetry : cc.Node,    
        pnHome : cc.Node,    
        score:0,
        txtLable:cc.Label,
        isPaulse:false,      
        txtretryTime:cc.Label,
    },

    onLoad()
    {
        window.gamecontroller=this;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    

    start () {
    
    },
    onStart()
    {
    
        this.score=0;
        this.gamePlay.active=true;
        this.pnHome.active=false;
        this.uiGameplay.active=true;
        
    },
    
    onGameOver()
    {      
       if(this.score>=scoresend)
       {
            scoresend=this.score;
           if(scoresend>=10)
           {
            scoresend=10;
           }
       }
       livestime--;       
        if(livestime==0)
        {
            callGameComplete(scoresend*1000);
        }else
        {
            this.txtretryTime.string=  window.localize.textFormat('g_oopscontent', [livestime]);
            this.uiRetry.active=true;
        }
      
    },

    OnRetry()
    {
        //location.reload();

        cc.director.loadScene("gameplay", function () {
            cc.log("Next scene preloaded");
        });
    },
    OnFinish()
    {
        callGameComplete(scoresend*1000);
    },
    onAddScore()
    {      
        this.score++;
        this.txtLable.string =this.score;
    },



  
  
 
   onKeyDown(event)
   {
       switch(event.keyCode) {
           case cc.macro.KEY.escape:
               callGameQuit();
               break;
         
       }
   }
    
});
