var canvas= new fabric.Canvas("myCanvas");

block_width=40;
block_height=40;

player_x= 10;
player_y= 10;

player_object="";
block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);
    });
}

function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object= Img;
        block_object.scaleToWidth(40);
        block_object.scaleToHeight(40);
        block_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){

    Keypressed= e.keyCode;
    console.log(Keypressed);

    if (e.shiftKey== true && Keypressed== '80'){

         block_width= block_width+ 10;
         block_height= block_height+ 10;
        document.getElementById("current_width").innerHTML= block_width;
        document.getElementById("current_height").innerHTML= block_height;
        console.log("shift+p");
        }

    if (e.shiftKey== true && Keypressed== '77'){

            block_width= block_width- 10;
            block_height= block_height- 10;
           document.getElementById("current_width").innerHTML= block_width;
           document.getElementById("current_height").innerHTML= block_height;
           console.log("shift+m");
           }

    if ( Keypressed== '38') {

        up();
        console.log("up");
    }   
    
    if ( Keypressed== '40') {

        down();
        console.log("down");
    } 

    if ( Keypressed== '37') {

        left();
        console.log("left");
    } 

    if ( Keypressed== '39') {

        right();
        console.log("right");
    } 

    if ( Keypressed=='87'){
        block_update('wall.jpg');
        console.log("w");
    }

    if ( Keypressed=='67'){
        block_update('cloud.jpg');
        console.log("c");
    }

    if ( Keypressed=='68'){
        block_update('dark_green.png');
        console.log("d");
    }

    if ( Keypressed=='71'){
        block_update('ground.png');
        console.log("g");
    }

    if ( Keypressed=='76'){
        block_update('light_green.png');
        console.log("l");
    }

    if ( Keypressed=='82'){
        block_update('roof.jpg');
        console.log("r");
    }

    if ( Keypressed=='84'){
        block_update('trunk.jpg');
        console.log("t");
    }

    if ( Keypressed=='85'){
        block_update('unique.png');
        console.log("u");
    }

    if ( Keypressed=='89'){
        block_update('yellow_wall.png');
        console.log("w");
    }
}

function up(){
 if( player_y>= 5){
    player_y= player_y-block_height;
    canvas.remove(player_object);
    player_update();

 }
    
}

function down(){
    if( player_y<= 400){
       player_y= player_y+block_height;
       canvas.remove(player_object);
       player_update();
   
    }
       
   }

   function left(){
    if( player_x>= 0){
       player_x= player_x-block_width;
       canvas.remove(player_object);
       player_update();
   
    }
       
   }

   function right(){
    if( player_x<= 850){
       player_x= player_x+block_width;
       canvas.remove(player_object);
       player_update();
   
    }
       
   }

   