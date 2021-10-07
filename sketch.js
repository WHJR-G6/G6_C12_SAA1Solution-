var day;

function setup() {
  createCanvas(400, 400);
  
  //assign random round off number to day
  day = Math.round(random(1,7))
  
}

function draw() {
  background(220);

  textSize(20);

  //add switch case for day name
  switch(day) {
	case 1 : 
    	text("Sunday", 150,200);
        break;
        case 2:
      text("Monday", 150,200);
        break;
        case 3:
      text("Tuesday", 150,200);
        break;
        case 4:
      text("Wednesday", 150,200);
        break;
        case 5:
      text("Thursday", 150,200);
        break;
        case 6:
      text("Friday", 150,200);
        break;
        case 7:
       text("Saturday", 150,200);
        break;
}
  
}
