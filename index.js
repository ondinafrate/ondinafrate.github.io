var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function setup (){
    // canvas.width = document.body.clientWidth; //document.width is obsolete
    // canvas.height = document.body.clientHeight; //document.height is obsolete
    // canvasW = canvas.width;
    // canvasH = canvas.height;
    loadData();
}

function draw(){
}

function loadData(){
    fetch("./data1.json")
    .then(response => {
       return response.json();
    })
    .then(data => {
        var text = "";
        var i;
        ctx.rotate(Math.PI/2);
        ctx.font = "12px Arial";
        ctx.fillStyle = "white";
        for (i = 0; i < data.length; i++) {
            data[i];
            ctx.fillText (data[i].body, 0, (-i*3));
            // ctx.rotate(Math.PI/2)
            // ctx.rotate(Math.PI*2/(i*6));
            
            // ctx.rotate(-Math.PI / 4);
          }
        console.log(data)});
        
}

setup();