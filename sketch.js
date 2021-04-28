var canvas;
var music;
var rect1,rect2,rect3,rect4,movingRect;
var box;

function preload(){
  
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1 = createSprite(200,550,80,20);
    rect1.shapeColor = "violet";
    rect2 = createSprite(300,550,80,20);
    rect2.shapeColor = "red";
    rect3 = createSprite(400,550,80,20);
    rect3.shapeColor = "blue";
    rect4 = createSprite(500,550,80,20);
    rect4.shapeColor = "pink";



    //create box sprite and give velocity
    box = createSprite(400,300,30,30);
    box.shapeColor = "darkBlue";


}

function draw() {
    background("black");
    edges= createEdgeSprites();
    drawSprites();


    //add condition to check if box touching surface and make it box
}
