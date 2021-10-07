var day;

function setup() {
  createCanvas(400, 400);
  
  //assign random round off number to day
  day = Math.round(1,7)
  
}

function draw() {
  background(220);

  textSize(20);

  //add switch case for day name
  switch(day) {
	case 1 : 
    	text("Sunday", 150,200);
        break;
      text("Monday", 150,200);
        break;
      text("Tuesday", 150,200);
        break;
      text("Wednesday", 150,200);
        break;
      text("Thursday", 150,200);
        break;
      text("Friday", 150,200);
        break;
       text("Saturday", 150,200);
        break;
}
  
}
