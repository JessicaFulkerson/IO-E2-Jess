
//Written by William Luk
// posts data to an Adafuit.io feed
let url = '';

var data = 0;

function setup() {
  createCanvas(400,400);
  button = createButton('Message Received');
  button.mousePressed(press);
  button.mouseReleased(on);
    
    button2 = createButton('Light off')
    button2.mousePressed(press2);
    button2.mouseReleased(off);
    //buttons for LED 2 - green

}

function draw() {
  //background(120);  
}

function press() {
    clear();
    
    let col = color(61, 180, 101, 90);
    button.style('background-color', col);
    
  data = 0;
    //set both to 1 for the LED to turn off when holding the button
    
     fill(61, 180, 101);
    textSize(20);
    text('Message Received!',140,160);
    
  console.log(data);
  sendData(data);
}
//press for on button

function press2() {
    clear();
    //gets rid of text on screen
    
    let col = color(100, 100, 100, 90);
    button2.style('background-color', col);
    
    data = 0;
    console.log(data);
    sendData2(data);
    
    fill(0);
    textSize(40);
    text('Off',140,330);
}
//press for off button


function on() {
  data = 1;
  console.log(data);
  sendData(data);
}
//function sending data for all on presses

function off() {
    data = 0;
    console.log(data);
    sendData2(data);
}
//function sending data for off

function sendData(turnOn){
  let postData ={
    "value": turnOn,
    "X-AIO-Key": ""
  };
  httpPost(url, 'json', postData, function(result){
    console.log(result);
  });
}

function sendData2(turnOff){
  let postData2 ={
    "value": turnOff,
    "X-AIO-Key": ""
  };
  httpPost(url, 'json', postData2, function(result){
    console.log(result);
  });
}

//sending info to the green LED

