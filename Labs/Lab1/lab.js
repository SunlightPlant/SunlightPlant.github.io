// Aleksandr Chamin
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// create array of fruit
var fruit = [
    {name:"Apple",quantity:20, color:"red"},
    {name:"Orange",quantity:10,color:"orange"},
    {name:"Banana",quantity:15,color:"yellow"},
    {name:"Kiwi",quantity:5,color:"green"},
    {name:"Blueberry",quantity:5,color:"blue"},
    {name:"Grapes",quantity:10,color:"purple"}
];

// function to create for loop of each bar, the y var is used to define where each bar is supposed to be
function createChart(data) {
    var y = 20;
    for (let i = 0; i<data.length;i++) {
        ctx.fillStyle = data[i].color;
        ctx.fillRect(20,y,data[i].quantity*20,50); // multiply quantity to improve visibility on the chart
        ctx.fillStyle="#000000";
        ctx.fillText(data[i].name,25,y+20);
        ctx.fillText(data[i].quantity,35,y+10);
        y+=50;
    }
}

createChart(fruit);