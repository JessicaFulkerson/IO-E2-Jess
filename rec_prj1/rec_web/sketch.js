
//Written by William Luk
//modified by Jessica Fulkerson
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/JessF/feeds/rec/data';

var data = 0;

function setup() {
  createCanvas(400,400);
  myButton = createButton('Recording (on)');
  myButton.mousePressed(press);
  myButton.mouseReleased(on);
    
    button2 = createButton('Not recording (off)')
    button2.mousePressed(press2);
    button2.mouseReleased(off);
    //buttons for LED - red
}

function draw() {
  background(240);
    fill(220,0,0);
    noStroke();
    ellipse (100,100, 80, 80);
    
    fill(240);
    noStroke();
    ellipse (100,100, 70, 70);
    
    fill(220,0,0);
    noStroke();
    ellipse (100,100, 40, 40);
   
    fill(0);
    textSize(20);
    text('Recording?',160,110);
    //image of the recording symbol and text
}

function press() {
  data = 0;
    //set both to 1 for the LED to turn off when holding the button
  console.log(data);
  sendData(data);
}

function press2() {
    data = 0;
    console.log(data);
    sendData2(data);
}

function on() {
  data = 1;
  console.log(data);
  sendData(data);
}

function off() {
    data = 0;
    console.log(data);
    sendData2(data);
}

function sendData(turnOn){
  let postData ={
    "value": turnOn,
    "X-AIO-Key": ""//your key here
  };
  httpPost(url, 'json', postData, function(result){
    console.log(result);
  });
}

function sendData2(turnOff){
  let postData2 ={
    "value": turnOff,
    "X-AIO-Key": ""//your key here
  };
  httpPost(url, 'json', postData2, function(result){
    console.log(result);
  });
}

