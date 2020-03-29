function setup() {
  createCanvas(400,400);

  base1 = createSprite(200, 385, 300, 15);
  base1.shapeColor = "black";

  base2 = createSprite(200, 370, 280, 15);
  base2.shapeColor = "black";

  pillar1 = createSprite(110, 340, 50, 50);
  pillar1.shapeColor = "black";

  pillar2 = createSprite(200, 340, 50, 50);
  pillar2.shapeColor = "black";

  pillar3 = createSprite(290, 340, 50, 50);
  pillar3.shapeColor = "black";

  pillar4 = createSprite(110, 265, 35, 120);
  pillar4.shapeColor = "black";

  pillar5 = createSprite(200, 265, 35, 120);
  pillar5.shapeColor = "black";

  pillar5 = createSprite(290, 265, 35, 120);
  pillar5.shapeColor = "black";

  block1 = createSprite(110, 195, 50, 20);
  block1.shapeColor = "black";

  block2 = createSprite(200, 195, 50, 20);
  block2.shapeColor = "black";

  block3 = createSprite(290, 195, 50, 20);
  block3.shapeColor = "black";

}

function draw() {
  background(255);  

  fill(0);
  triangle(65,195,200,80,335,195);

  fill(255);
  circle(200,145,50);

  drawSprites();
}