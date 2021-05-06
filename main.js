canvas = new fabric.Canvas("myCanvas");

player_x = 500;
player_y = 100;
sh_image_width = 30;
sh_image_height = 30;
var player_object= "";
var sh_image_object= "";

function player(){
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object)
});
}

function superh(get_image){
   fabric.Image.fromURL(get_image,function(Img){
   sh_image_object=Img;
   sh_image_object.scaleToWidth(sh_image_width);
   sh_image_object.scaleToHeight(sh_image_height);
   sh_image_object.set({
   top:player_y,
   left:player_x
   });
   canvas.add(sh_image_object)
   });
   }
   window.addEventListener("keydown",my_keydown);

    function my_keydown(e){
        keyPressed= e.keyCode;
        console.log(keyPressed);
        if (e.shiftKey==true && keyPressed=="77"){
        sh_image_height=sh_image_height-10;
        sh_image_width=sh_image_width-10;
        document.getElementById("current_height").innerHTML=sh_image_height;
        document.getElementById("current_width").innerHTML=sh_image_width;
       console.log("shift+M pressed"); }
        if (e.shiftKey==true && keyPressed=="80"){
            sh_image_height=sh_image_height+10;
            sh_image_width=sh_image_width+10;
            document.getElementById("current_height").innerHTML=sh_image_height;
            document.getElementById("current_width").innerHTML=sh_image_width;
            console.log("shift+P pressed");
        }
     if (keyPressed=="73"){
    superh("Ironman.png.jpg");
    console.log("i pressed")
     }   
     if (keyPressed=="84"){
        superh("thor.png.jpg");
        console.log("t pressed")
         } 
         if (keyPressed=="83"){
            superh("spider_man.png.jpg");
            console.log("s pressed")
             } 
             if (keyPressed=="67"){
               superh("captain_america.png.jpg");
                console.log("c pressed")
                 } 
                 if (keyPressed=="72"){
                  superh("hulk.png.png");
                    console.log("h pressed")
                     } 
                     if(keyPressed=="38"){
                        up_key()
                         console.log("up pressed");
                          }
                          if(keyPressed=="39"){
                            right_key()
                             console.log("right pressed");
                             }
                             if(keyPressed=="37"){
                            left_key()
                             console.log("left pressed");
                             }
                             if(keyPressed=="40"){
                                down_key()
                                 console.log("down pressed");
                                 }
}
function up_key(){

   if(player_y>=0){
   player_y=player_y-sh_image_height;
   console.log(player_y);
   canvas.remove(player_object);
   player();
   }
}
function down_key(){

   if(player_y<=500){
   player_y=player_y+sh_image_width;
   console.log(player_y);
   canvas.remove(player_object);
   player();
   }
}
function right_key(){

   if(player_x<=900){
   player_x=player_x+sh_image_width;
   console.log(player_x);
   canvas.remove(player_object);
   player();
   }
}
function left_key(){

   if(player_x>=0){
   player_x=player_x-sh_image_width;
   console.log(player_x);
   canvas.remove(player_object);
   player();
   }
}