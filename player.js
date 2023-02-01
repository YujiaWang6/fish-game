export class Player{
    constructor(game){
        this.game = game;
        this.width = 27.7;
        this.height = 22.5;
        this.x = (this.game.width - this.width)/2;
        this.y = (this.game.height - this.height)/2;
        this.image = document.getElementById('player');
        this.imageFlip = document.getElementById('playerFlip');
        this.vel_x = 0;
        this.vel_y =0;
        this.speed = 0;
        //this.maxSpeed = 10;
        this.imageWidth = 27.7;
        this.imageHeight = 22.5;
        this.frameX = 0;
        this.frameY = 0;
        this.array = [];

    }
    update(input){
        //
        
        this.x += this.vel_x;
        this.y += this.vel_y;
        //
        //this.checkCollision();
        //console.log(this.x);


        //this.x += this.speed;
        if(input.includes("ArrowRight")) this.vel_x+= 0.05;
        else if (input.includes("ArrowLeft")) this.vel_x-=0.05;
        else this.speed = 0;
        if(this.x<0) this.x = 0;
        if(this.x > this.game.width - this.width) this.x=this.game.width-this.width;

        //this.y += this.speed;
        if(input.includes("ArrowUp")) this.vel_y-= 0.05;
        else if (input.includes("ArrowDown")) this.vel_y += 0.05;
        else this.speed = 0;
        if(this.y<0) this.y = 0;
        if(this.y> this.game.height - this.height) this.y = this.game.height - this.height;
        
        this.array = input
        
    }
    draw(context){
        //context.fillStyle = "pink";
        //context.fillRect(this.x, this.y, this.width, this.height);
        //console.log(this.array);
        if(this.array.indexOf("ArrowLeft")){
            this.frameY = 0;
        }else
        {
            this.frameY = 1;
        }
        if(this.frameX<6) {this.frameX++;}
        else {this.frameX = 0;}
        context.drawImage(this.image, this.frameX * this.imageWidth, this.frameY * this.imageHeight, this.imageWidth,this.imageHeight, this.x, this.y, this.width,this.height);

        
    }
    
    /*
    checkCollision(){
        this.game.enemies.forEach(enemy => {
            if(
                enemy.x < this.x + this.width && 
                enemy.x + enemy.width > this.x &&
                enemy.y < this.y + this.height &&
                enemy.y + enemy.height > this,y
            ){
                alert("Game Over");
                //console.log("collision");
              //enemy.markedForDelection = true;
              //this.game.score++;

            }else{

            }
        })
    }*/
}