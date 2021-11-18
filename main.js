function preload() {}

function setup() {
    canvas = createCanvas(850,700);
    canvas.position(400,200);
    video = createCapture(VIDEO);
    video.position(500,300);
    video.hide();
}

function draw() {
    image(video,50,50,750,562);
    fill(236,47,69);
    stroke(236,47,69);
    circle(50,50,80);
    circle(800,50,80);
    circle(50,620,80);
    circle(800,620,80);
    fill(86,38,250);
    stroke(86,38,250);
    rect(90,40,672,20);
    rect(90,613,672,20);
    rect(45,90,20,490);
    rect(790,90,20,490);
}

function take_snapshot() {
    save("bdayframe.png");
}