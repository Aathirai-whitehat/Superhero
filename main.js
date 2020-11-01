var canvas=new fabric.Canvas("mycanvas");
var playerx=30;
var playery=30;
var blockwidth=30;
var blockheight=30;

var playerobject="";

function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(140);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,left:playerx
        });
        canvas.add(playerobject);
    });
}

function blockimage(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        blockobject=Img;
        blockobject.scaleToHeight(blockheight);
        blockobject.scaleToWidth(blockwidth);
        blockobject.set({
            top:playery,left:playerx
        });
        canvas.add(blockobject);
    });
}


window.addEventListener("keydown",kd);

function kd(e){
   var code=e.keyCode;
   console.log(code);
   
   if(code=="70"){
     blockimage("ironma face.png");
     console.log("f key was pressed");
   }

   if(code=="66"){
       blockimage("spiderman body.png");
       console.log("b key was pressed");
   }

   if(code=="76"){
    blockimage("hulks leg.png");
    console.log("l key was pressed");
   }

   if(code=="82"){
    blockimage("thors right hand.png");
    console.log("r key was pressed");
   }

   if(code=="72"){
    blockimage("captain americas left hand.png");
    console.log("h key was pressed");
   }

   if(code=="89"){
    blockimage("yellow_wall.png");
    console.log("y key was pressed");
   }

   if(code=="82"){
    blockimage("roof.jpg");
    console.log("r key was pressed");
   }

   if(code=="67"){
    blockimage("cloud.jpg");
    console.log("c key was pressed");
   }

   if(code=="85"){
    blockimage("unique.png");
    console.log("u key was pressed");
   }

   if(code=="38"){
       up();
    console.log("up key was pressed");
   }

   if(code=="40"){
    down();
    console.log("down key was pressed");
   }

   if(code=="39"){
    right();
    console.log("right key was pressed");
   }

   if(code=="37"){
    left();
    console.log("left key was pressed");
   }

   if(e.shiftKey==true && code=="80"){
       blockwidth=blockwidth+10;
       blockheight=blockheight+10;
       document.getElementById("width").innerHTML=blockwidth;
       document.getElementById("height").innerHTML=blockheight;
       console.log("shift and p were pressed together");
   }

   if(e.shiftKey==true && code=="77"){
    blockwidth=blockwidth-10;
    blockheight=blockheight-10;
    document.getElementById("width").innerHTML=blockwidth;
    document.getElementById("height").innerHTML=blockheight;
    console.log("shift and m were pressed together");
}
}

function up(){
    if(playery>=0){
        playery=playery-blockheight;
        console.log("blockheight = " + blockheight);
        console.log("when up is pressed, x= " + playerx + " ,y= " + playery);
        canvas.remove(playerobject);
        playerupdate();
    }
}

function down(){
    if(playery<=800){
        playery=playery+blockheight;
        console.log("blockheight = " + blockheight);
        console.log("when down is pressed ,x= " + playerx + ", y= " + playery);
        canvas.remove(playerobject);
        playerupdate();
    }
}

function left(){
    if(playerx>=0){
        playerx=playerx-blockwidth;
        console.log("blockwidth = " + blockwidth);
        console.log("when left is pressed ,x= " + playerx + ", y= " + playery);
        canvas.remove(playerobject);
        playerupdate();
    }
}

function right(){
    if(playerx<=800){
        playerx=playerx+blockwidth;
        console.log("blockwidth = " + blockwidth);
        console.log("when left is pressed ,x= " + playerx + ", y= " + playery);
        canvas.remove(playerobject);
        playerupdate();
    }
}