const canvas = document.getElementById('cartoon');
const ctx = canvas.getContext('2d');

//draw sky
function sky() {
    ctx.fillStyle = "#ADD8E6";
    ctx.fillRect(0,0,800,800);

}

// draw the floor 
function floor() {
    ctx.fillStyle = "#355E3B";
    ctx.fillRect(0,710,800,90);
}

// create grass (triangles) and place them on top of the floor
function grass() {
    ctx.fillStyle = "#355E3B";
    for (let i = -10; i<800;i+=5) {
        ctx.beginPath();
        ctx.moveTo(i,740);
        ctx.lineTo(i+15,685);
        ctx.lineTo(i+30,740);
        ctx.fill();
    }
}

//draw sun(circle) to the top right of the canvas
function sun() {
    ctx.fillStyle = "#FEE12B";
    ctx.beginPath();
    ctx.arc(730,50,90,0,2*Math.PI);
    ctx.fill();
}

//draw a basic building
function houseFoundation() {
    ctx.fillStyle = "#7C0A02";
    ctx.fillRect(60,400,400,300);
}

//draw windows
function windows() {
    ctx.fillStyle = "#89CFF0";
    ctx.fillRect(80,450,100,100);
    ctx.fillRect(340,450,100,100);
}

//create door
function door() {
    ctx.fillStyle = "#E97451";
    ctx.fillRect(220,570,80,130);
}

//create roof
function roof() {
    ctx.fillStyle = "#E97451";
    ctx.beginPath();
    ctx.moveTo(260,200);
    ctx.lineTo(490,400);
    ctx.lineTo(30,400);
    ctx.closePath();
    ctx.fill();
}

//create door knob for door
function doorKnob() {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(230,650,5,0,2*Math.PI);
    ctx.fill();
}

//create tree
function tree() {
    ctx.fillStyle = "#6F4E37";
    ctx.fillRect(650,450,60,250);
}

// I probably could've used a loop for this but I wasn't sure how to deal with adjusting the x,y values
function leaves() {
    ctx.fillStyle = "#228B22";
    ctx.beginPath();
    ctx.arc(600,450,80,0,2*Math.PI);
    ctx.arc(750,450,80,0,2*Math.PI);
    ctx.arc(750,450,80,0,2*Math.PI); // for some reason I needed to repeat the previous line of code here because other wise it wouldn't
    // fully fill the circle and instead leave a triangle.
    ctx.arc(600,350,80,0,2*Math.PI);
    ctx.arc(750,350,80,0,2*Math.PI);
    ctx.arc(670,350,80,0,2*Math.PI);
    ctx.fill();
}

// create text and place it on the top left of the canvas
function text() {
    ctx.fillStyle = "#000000";
    ctx.font = "15px Arial";
    ctx.fillText("Cartoon - A Lovely Day By Aleksandr Chamin",5,15);
}

// use all functions to create the cartoon
function draw() {
    sky();
    floor();
    grass();
    sun();
    houseFoundation();
    windows();
    door();
    doorKnob();
    roof();
    tree();
    leaves();
    text();
}

draw();