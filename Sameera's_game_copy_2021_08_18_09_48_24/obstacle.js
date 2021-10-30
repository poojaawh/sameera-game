class Obstacle{
  constructor(x,y,width,height){
    this.ob = createSprite(x,y,width,height)
    this.ob.addImage(giraffee1img)
    this.ans = createInput("you answer is!!")
    this.go = createButton("Go");
  }
 
  goButton(){
    this.go.mousePressed( () => {
      //chance = obstacle.ans.value();
      console.log(chance);
    //chance.toLowerCase();
   // chance= chance+"";
    if(chance.localeCompare("giraffe") === 0){
      console.log("great!!")
      gameState = "level1";
    }
    else {}
   });
  }

}