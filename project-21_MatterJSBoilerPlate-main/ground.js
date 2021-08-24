class ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
                    isStatic:true
                  };
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
                    
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
  }

  show() {
    var groundPos = this.body.position;

    push();
   // translate(groundPos.x,groundPos.y);
    rectMode(CENTER);
    //stroke();
    strokeWeight(2);
    fill("blue");
    rect(groundPos.x, groundPos.y, this.w, this.h);
    pop();
   
  }
  
}


