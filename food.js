class Food{
    constructor(){
    this.foodStock = 0;
    this.image = loadImage("images/Milk.png");
    }
    getFoodStock(){
        return this.foodStock;
    }
    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
    deductFood(){
    if(this.foodStock>0){
        this.foodStock = this.foodStock - 1;
    }
    }
    display(){  
        background(46,139,87);
        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed : "+ lastFed%12 + " PM", 50,30);
        }else if(lastFed==0){
            text("Last Feed : 12 AM",50,30);
        }else{
            text("Last Feed : "+ lastFed + " AM", 50,30);
        }
        textSize(20);
      fill("white");
      text("Food left: " + foodS,800,65);
      text("Note: Press the UP_ARROW key to feed Drago milk!",290,20);
        var x=70,y=100; 
        imageMode(CENTER);
        if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=70;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
    bedroom(){
      background(bedImg,550,500);  
    }
    garden(){
      background(gardenImg,550,500);  
    } 
    washroom(){
      background(washRoomImg,550,500); 
    }
    }