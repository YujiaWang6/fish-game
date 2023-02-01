
export class Enemy{
    constructor(game){
        this.game = game;
        this.width = 28.8;
        this.height = 22.5;
        this.x = Math.random();//*(this.game.width - this.width);
        this.y = Math.random();//*(this.game.height - this.height);
        this.speed = Math.random()*4-2;
        
        this.angle = 0;
        this.angleSpeed = Math.random()*0.005; //change speed
        this.curve = Math.random()*5;
        this.image = document.getElementById('enemy');

        this.imageWidth = 28.8;
        this.imageHeight = 22.5;
        this.frameX = 0;
        this.frameY = 0;


    }
    update(){
        //this.x+= this.speed;
        this.y+= this.speed;

        this.speedX = Math.random()*4-2+this.curve * Math.cos(this.angle);

        //console.log(this.speed);
        //this.x += Math.random()*2 -2.5;
        //this.y += Math.random()*5 -2.5;
        this.angle += this.angleSpeed;
        this.y += this.curve * Math.sin(this.angle);
        //this.x += this.curve * Math.cos(this.angle);
        this.x +=this.speedX;

        //this.x += Math.sin(Math.random());
        //move from right to left
        //if(this.x + this.width<0) this.x = this.game.width;
        //if(this.y + this.height<0) this.y = this.game.height;

        
        if(this.x - this.width>=this.game.width) this.x = this.curve * Math.cos(this.angle);
        if(this.x <0) this.x = this.curve * Math.cos(this.angle);
        if(this.y - this.height >=this.game.height) this.y = this.curve * Math.cos(this.angle);
        if(this.y <0) this.y = this.curve * Math.cos(this.angle);
        

    }
    draw(context){
        
        //context.strokeRect(this.x, this.y, this.width, this.height);
        if(this.speed>0 ){
            this.frameY = 0;
        }else
        {
            this.frameY = 1;
        }
        if(this.frameX<6) {this.frameX++;}
        else {this.frameX = 0;}
        context.drawImage(this.image, this.frameX * this.imageWidth, this.frameY * this.imageHeight, this.imageWidth,this.imageHeight, this.x, this.y, this.width,this.height);



    }

};


