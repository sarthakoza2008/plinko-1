class Division{
  
  constructor(x,y,width,height){

     var options={
       isStatic = true
     }

     this.body = Bodies.rectangle(x,y,30,100,options);  
     this.width = 30,
     this.height = 100;

     World.add(world,this.body);
  }

  display(){
    var pos = this.body.position;

    push()
     fill('white'),
     strokeWeight(4),
     stroke('white'),
     rect(this.x,this.y,this.width,this.height);

    pop()
   
  }
}