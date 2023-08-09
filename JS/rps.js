// https://twitter.com/juanbuis/status/1600155605112496129?lang=en

class RPS{
  
  
  constructor(type,x,y){
    
    this.x = x;
    this.y = y;
    this.type = type;
    this.xspeed = random(-0.25,0.25);
    this.yspeed = random(-0.25,0.25);
    this.bounds = 30;
  }
  
  
  show(){
    
    textSize(32);
    text(this.type, this.x, this.y);
    
  }
  
  move(){
    
    this.x += this.xspeed;
    this.y += this.yspeed;
    if(this.x > width - this.bounds ){
      this.xspeed = -this.xspeed;
    }else if(this.x < this.bounds ){
      this.xspeed = -this.xspeed;
    }
    if(this.y > height -  this.bounds ){
      this.yspeed = -this.yspeed;
    }else if(this.y <  this.bounds ){
      this.yspeed = -this.yspeed;
    }
   
  }
  
}


function setup() {
  createCanvas(750, 750);
  
  initial_components = [];
  types = ['📜','✂️','🪨']
  object_count = 255;  

  for(let i = 0; i < object_count; i++){
    initial_components.push(new RPS(types[Math.floor(Math.random()*types.length)],random(40,width-100),random(40,height-10)));
  }
  
}

function draw() {
  background('#191919');
  
  distance_bounds = 40;
  
  for(const type of initial_components){
    type.show()
    type.move()
    for(const combatant of initial_components){
      
      if(dist(type.x,type.y, combatant.x, combatant.y ) < distance_bounds){
        
        if(type.type !== combatant.type){
          switch(type.type){
              
              case '🪨':
                if(combatant.type === '✂️'){combatant.type = type.type}
                break;
              case '📜':
                if(combatant.type === '🪨'){combatant.type = type.type}
                break;
              case '✂️':
                if(combatant.type === '📜'){combatant.type = type.type}
              
                break;
                
              default:
                break;
              
          }
        }
      }
      
      
    }
  }  
  
  const allEqual = arr => arr.every( v => v.type === arr[0].type )
  
  if(allEqual(initial_components)){
    noLoop();
    clear();
    background('#191919');
    fill(0, 102, 153);
    textSize(128);
    text(initial_components[0].type, 300, 300);
    text("WINS!!", 220, 450);
    
  }  

}