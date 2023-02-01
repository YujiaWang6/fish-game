/*
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 900;
const CANVAS_HEIGHT = canvas.height = 600;
const numberOfEnemies = 20
const enemiesArray = [];
*/

import {Player} from "./player.js";
import {InputHandler} from "./input.js";
import {Enemy} from "./enemy.js";


window.addEventListener("load", function(){

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext("2d");
    canvas.width = 900;
    canvas.height = 600;
    this.gameOver = false;
    var userChoice;
   

    /*
    for(let i=0; i<numberOfEnemies; i++){
        enemiesArray.push(new Enemy());
    
    };
    function animate(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);   
        enemiesArray.forEach(enemy => {
            enemy.update();
            enemy.draw();
        });
        requestAnimationFrame(animate);
    
    }
    */
    
    class Game{
        constructor(width,height){
           
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();

            this.enemies = new Array();
            this.numberOfEnemies = 5;

            //this.gameOver = false;
            this.gameOver = false;
            //this.score = 0;
            
            for(let i=0; i<this.numberOfEnemies; i++){
                this.enemies.push(new Enemy(this));
            };

            
            //this.enemy = [];
            //this.enemyTimer = 0;
            //this.enemyInterval = 1000;
        }
       
        update(){
            
            this.player.update(this.input.keys);
            
            for(let i=0; i<this.numberOfEnemies; i++){
                this.enemies[i].update();
            };
           

            //if (this.gameOver == false){
                 //console.log(this.player.height, game.player.x);
                

           //function has_game_ended(){

            if(this.input.keys.length >= 1){
        for(let i=0; i<this.numberOfEnemies; i++){
        if(
            game.enemies[i].x < game.player.x + game.player.width && 
            game.enemies[i].x + game.enemies[i].width > game.player.x &&
            game.enemies[i].y < game.player.y + game.player.height &&
            game.enemies[i].y + game.enemies[i].height > game.player.y
        ){
            console.log(this.gameOver);
            //alert("Game Over");
            //end;
            this.gameOver = true;
            //this.gameOver = true;
            //console.log(this.gameOver);
            //userChoice = confirm("Game Over, Wanna another play?");
            
        }}}//}//else {alert("Game Over"); break;}
          // }
          
            //console.log(this.gameOver);
           // if(this.gameOver == true){
           //     end;
           // }


           //if (userChoice === true){
           // this.gameOver = false;

           //}
 
        

           //console.log(this.player.x, this.player.y);
           //console.log(this.enemies);
           //console.log(this.enemies[2].width);


        }

    
        draw(context){
            this.player.draw(context);

            for(let i=0; i<this.numberOfEnemies; i++){
                this.enemies[i].draw(context);
            };

           
            
            //this.enemy.draw(context);
              /* 
                this.enemy.forEach(enemy => {
                    
                    enemy.draw(context);
                    console.log(this.enemy);
                });
                */
                


        
    }
        /*
        addEnemy(){
            this.enemy.push(new Enemy(this));
            console.log(this.enemy);
        }
        */
    }


    const game = new Game(canvas.width, canvas.height);
    console.log(game);
    //console.log(game.player.y);
    //console.log(game.enemies[2].x);
    //if(game.player.x == 40){console.log("a")};
    /*function detectCollosions(){
        for(let i=0; i<this.numberOfEnemies; i++){
        if(
            game.enemies[i].x < this.player.x + this.player.width && 
            game.enemies[i].x + game.enemies[i].width > this.player.x &&
            game.enemies[i].y < this.player.y + this.height &&
            game.enemies[i].y + game.enemies[i].height > this.player.y
        ){
            alert("collision");
          //enemy.markedForDelection = true;
          //this.game.score++;

        }}
    }
        */

    function animate(){
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(game.gameOver==false){
            game.update();
            game.draw(ctx);
            requestAnimationFrame(animate);
        }else{
            cancelAnimationFrame(animate);
            userChoice = confirm("Game Over, Wanna another play?");
            if(userChoice === true){
                window.location.reload();
                
            }else{cancelAnimationFrame(animate);}
        }
        //console.log(game.gameOver);

    }
    
    animate();

    
    //console.log(this.player);
    //console.log(game.enemies[2].x);
    //function checkCollision(){
        //this.game.enemies.forEach(enemies => {
            

       // })
    //}


})