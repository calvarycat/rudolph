
function callGameQuit(){
    Toaster.postMessage("action=quit");
}

function callGameComplete(score){
    Toaster.postMessage('action=finish-campaign&data=' + score);

   // finish-campaign
   //action=finish&data=
}