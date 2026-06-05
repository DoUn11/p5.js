function setup() {
  createCanvas(600, 400);
}

let r = 0;
let g = 0;
let b = 255;
let x = 0;
let y = 0;

function draw()
{
  background(150);
  if(keyIsDown(13))
  {
    if (r === 255)
    {
      if (b > 0)
        b-=17;
      else if (g < 255)
        g+=17;
      else
        r-=17;
    }
    else if (g === 255)
    {
      if (r > 0)
        r-=17;
      else if(b < 255)
        b+=17;
      else
        g-=17;
    }
    else if(b === 255)
    {
      if (g > 0)
        g-=17;
      else if(r < 255)
        r+=17;
      else
        b-=17;
    }
  }
  if (keyIsDown(37))
    x -= 3;
  if (keyIsDown(39))
    x += 3;
  if (keyIsDown(38))
    y -= 3;
  if (keyIsDown(40))
    y += 3;
  x = constrain(x,-350,350);
  y = constrain(y,-250,250);
  
  strokeWeight(1);
  fill(255,220,200);
  stroke(0,0,0);
  ellipse(245+x,145+y,20,40);
  ellipse(355+x,145+y,20,40);
  rect(285+x,200+y,30,80);
  noStroke();
  quad(240+x,100+y,360+x,100+y,360+x,140+y,240+x,140+y);
  fill(255,230,210);
  stroke(0,0,0);
  beginShape();
  curveVertex(240+x,130+y);
  curveVertex(240+x,140+y);
  curveVertex(255+x,190+y);
  curveVertex(292+x,215+y);
  curveVertex(308+x,215+y);
  curveVertex(345+x,190+y);
  curveVertex(360+x,140+y);
  curveVertex(360+x,130+y);
  endShape();
  fill(90,60,60);
  if (mouseIsPressed)
  {
    strokeWeight(4);
    
    line(320+x, 140+y, 350+x, 130+y);
    line(320+x, 140+y, 350+x, 150+y);
    line(280+x, 140+y, 250+x, 130+y);
    line(280+x, 140+y, 250+x, 150+y);
    strokeWeight(1);
  }
  else
  {
    arc(335+x,137+y,20,25,radians(320),radians(210),OPEN);
    curve(300+x,138+y,320+x,128+y,360+x,130+y,380+x,155+y);
    curve(300+x,140+y,320+x,130+y,360+x,132+y,380+x,152+y);
    curve(300+x,140+y,328+x,150+y,342+x,150+y,370+x,145+y);
    curve(350+x,132+y,359+x,132+y,357+x,140+y,355+x,138+y); 
    arc(265+x,137+y,20,25,radians(320),radians(210),OPEN);
    curve(300+x,138+y,280+x,128+y,240+x,130+y,220+x,155+y);
    curve(300+x,140+y,280+x,130+y,240+x,132+y,220+x,152+y);
    curve(300+x,140+y,272+x,150+y,258+x,150+y,230+x,145+y);
    curve(250+x,132+y,241+x,132+y,243+x,140+y,245+x,138+y);
    fill(255,255,255);
    circle(258+x,134+y,3);
    circle(268+x,145+y,2);
    circle(327+x,134+y,3);
    circle(339+x,145+y,2);
  }
  circle(343+x,155+y,2);
  curve(295+x,145+y,300+x,153+y,300+x,157+y,295+x,160+y);
  fill(200,50,50);
  if (mouseIsPressed)
    ellipse(300+x,190+y,30,20);
  else
    curve(280+x,180+y,290+x,190+y,310+x,190+y,320+x,180+y);
  noStroke();

  fill(60,60,60);
  arc(300+x,100+y,145,120,radians(170),radians(10),OPEN);
  arc(242+x,114+y,20,40,radians(90),radians(350));
  triangle(245+x,110+y,280+x,110+y,270+x,120+y);
  triangle(265+x,110+y,300+x,110+y,285+x,125+y);
  triangle(295+x,110+y,340+x,110+y,310+x,115+y);
  triangle(330+x,110+y,360+x,110+y,345+x,122+y);
  arc(358+x,114+y,20,40,radians(190),radians(90));
  stroke(50,50,50);
  fill(r,g,b);
  beginShape();
  curveVertex(300+x,220+y);
  curveVertex(285+x,230+y);
  curveVertex(200+x,260+y);
  vertex(200+x,400+y);
  vertex(400+x,400+y);
  curveVertex(400+x,260+y);
  curveVertex(315+x,230+y);
  curveVertex(300+x,220+y);
  endShape();
  noStroke();
  fill(255,220,200);
  arc(300+x,230+y,30,20,radians(0),radians(180));
  fill(r-30>=0?r-30:0,g-30>=0?g-30:0,b-30>=0?b-30:0);
  quad(240+x,300+y,245+x,350+y,240+x,380+y,235+x,340+y);
  quad(360+x,320+y,355+x,350+y,360+x,380+y,365+x,340+y);
  fill(255,220,200);
  arc(300+x,230+y,30,20,radians(0),radians(180));
  noFill();
  stroke(r-150>=0?r-150:0,g-150>=0?g-150:0,b-150>=0?b-150:0);
  strokeWeight(2);
  arc(268+x,145+y,40,40,radians(350),radians(200));
  arc(332+x,145+y,40,40,radians(340),radians(190));
  arc(300+x,150+y,26,10,radians(190),radians(350));
  line(247+x,142+y,240+x,130+y);
  line(353+x,142+y,360+x,130+y);
}

function keyPressed()
{
  if (key === 's')
    saveGif('mysketch',10);
}