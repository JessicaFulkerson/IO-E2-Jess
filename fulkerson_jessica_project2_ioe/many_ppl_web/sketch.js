
//Written by William Luk
//modified by Jessica Fulkerson
// posts data to an Adafuit.io feed
let url = '';

var data = 0;

function setup() {
  createCanvas(800,800);
  button = createButton('Fred');
  button.mousePressed(press);
  button.mouseReleased(on);
    
    button2 = createButton('Light off')
    button2.mousePressed(pressOff);
    button2.mouseReleased(off);
    //buttons for LED 1 - green
    //indicated a message has been sent
    
    button4 = createButton('Ali');
    button4.mousePressed(press2);
    button4.mouseReleased(on);
    
    button5 = createButton('Jessica');
    button5.mousePressed(press3);
    button5.mouseReleased(on);
    
    button6 = createButton('Emily');
    button6.mousePressed(press4);
    button6.mouseReleased(on);
    
    button7 = createButton('Marlena');
    button7.mousePressed(press5);
    button7.mouseReleased(on);
    
    //just to clear all text
    button3 = createButton('clear text');
    button3.mousePressed(pressClear);
    //button setups
}

function draw() {
//  background(120);
    fill(0);
    textSize(20);
    text('If you reset the light, please reset the other statuses.',140,110);
    text('Click to set your status to do not disturb.', 140, 130);
}

function press() {
    let col = color(254, 100, 79, 90);
    button.style('background-color', col);
    //button style
    data = 0;
  console.log(data);
  sendData(data);
    //send data
    //text
    fill(254, 100, 79);
    textSize(20);
    text('Fred: Do not disturb',140,160);
}

function press2() {
    let col = color(61, 180, 101, 90);
    button4.style('background-color', col);
    //button style
    data = 0;
  console.log(data);
  sendData(data);
    //send data
    //text
    fill(61, 180, 101);
    textSize(20);
    text('Ali: Do not disturb',140,190);
}

function press3() {
    let col = color(61, 146, 180, 90);
    button5.style('background-color', col);
    //button style
    data = 0;
  console.log(data);
  sendData(data);
    //send data
    //text
    fill(61, 146, 180);
    textSize(20);
    text('Jessica: Do not disturb',140,220);
}

 function press4() {
    let col = color(227, 172, 25, 90);
    button6.style('background-color', col);
    //button style
    data = 0;
  console.log(data);
  sendData(data);
    //send data
    //text
    fill(227, 172, 25);
    textSize(20);
    text('Emily: Do not disturb',140,250);
}

 function press5() {
    let col = color(113, 58, 153, 90);
    button7.style('background-color', col);
    //button style
    data = 0;
  console.log(data);
  sendData(data);
    //send data
    //text
    fill(113, 58, 153);
    textSize(20);
    text('Marlena: Do not disturb',140,280);
}
//press for all on buttons

function pressOff() {
    clear(); 
    
    let col = color(100, 100, 100, 90);
    button2.style('background-color', col);
    //button style
    //sending on/off
    data = 0;
    console.log(data);
    sendData2(data);
    //text
    fill(0);
    textSize(40);
    text('Off',140,330);
}
//press for off button

function pressClear() {
    clear();
}
//press to clear text

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
