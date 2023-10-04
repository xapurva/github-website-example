var imageArray = [];
var captionsArray = [];
var randomPic;

function preload() {
  cryMike = loadImage("crymike.jpg")
  stressedMike = loadImage("stressedmike.jpg")
  jim = loadImage("jim.jpg")
  stanley = loadImage("stanley.jpg")
  screamMike = loadImage("screammike.jpg")
  meredith = loadImage("meredith.jpg")
}

function setup() {
  createCanvas(400, 400);
  imageArray[0] = cryMike;
  imageArray[1] = jim;
  imageArray[2] = stressedMike;
  imageArray[3] = stanley;
  imageArray[5] = screamMike;
  imageArray[6] = meredith;
  
  captionsArray[0] = "make a bomb sandwich";
  captionsArray[1] = "stub ur toe";
  captionsArray[2] = "won the lottery";
  captionsArray[3] = "watch grandma fall";
  captionsArray[4] = "drop ur moms famous chili";
  captionsArray[5] = "forgot to wear pants"
  captionsArray[6] = "accidentally call ur ex"
  
  randomImage = int(random(imageArray.length));
  randomText = int(random(captionsArray.length));
}

function draw() {
  background(220);
  noStroke();
  image(imageArray[randomImage], 0, 0, 400, 400);
  
  fill("white");
  textSize(34);
  textAlign(CENTER);
  textFont("Arial");
  text("when u", width/2, 50)
  text(captionsArray[randomText], width / 2, height - 50);
}