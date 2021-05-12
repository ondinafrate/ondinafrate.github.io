var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

function setup (){
    // canvas.width = document.body.clientWidth; //document.width is obsolete
    // canvas.height = document.body.clientHeight; //document.height is obsolete
    // canvasW = canvas.width;
    // canvasH = canvas.height;
    loadData();
}

function draw(){
}

var min, max;

function loadData(){
    fetch("./data1.json")
    .then(response => {
       return response.json();
    })
    .then(data => {
        // data = _.sortBy(data, (tweet) => new Date(tweet.posted_time))
        // data = data.slice(0, 500)
        var maxTweet = _.maxBy(data, (tweet) => new Date(tweet.posted_time));
        var minTweet = _.minBy(data, (tweet) => new Date(tweet.posted_time));
        max = new Date(maxTweet.posted_time);
        min = new Date(minTweet.posted_time);
        // var maxTweet = _.maxBy(data, (tweet) => tweet.hashtags.length);
        // var minTweet = _.minBy(data, (tweet) => tweet.hashtags.length);
        // var max = maxTweet.hashtags.length;
        // var min = minTweet.hashtags.length;
        var text = "";
        var i;
        // ctx.rotate(Math.PI/2);
        ctx.font = "12px Arial";
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        for (i = 0; i < data.length; i++) {
            var tweet = data[i];
            delay(data[i], i)
            // ctx.fillText (data[i].body, 0, (-i*3));
            // ctx.fillText (data[i].body, 0, map(new Date(data[i].posted_time), min, max, -1280, 0));
            // ctx.fillText (data[i].body, 0, map(data[i].hashtags.length, min, max, -1280, 0));
            // ctx.rotate(Math.PI/2)
            // ctx.rotate(Math.PI*2/(i*6));
            
            // ctx.rotate(-Math.PI / 4);
          }
        showTweet(data);
        console.log(data)});
        
}

function delay(t, i){
    var tweet = t;
    setTimeout(() => {
        ctx.fillText (tweet.body, 0, map(new Date(tweet.posted_time), min, max, 0, 2500));
    }, 10 * i);
}

function showTweet(tweets){
    if(tweets.length === 0){
        return;
    }
    var tweet = tweets.splice(_.random(0, tweets.length), 1)[0];

    document.getElementById('fixed-text').innerHTML = tweet.body;

    setTimeout(() => showTweet(tweets), 5000);
}

setup();