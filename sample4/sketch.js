function setup() {
  createCanvas(600, 400);
}

function draw() {

  background(20);

  // -------------------
  // 펄스값
  // -------------------

  let pulse1 = sin(frameCount * 0.040) * 8;
  let pulse2 = sin(frameCount * 0.055) * 6;
  let pulse3 = sin(frameCount * 0.070) * 4;
  let pulse4 = sin(frameCount * 0.090) * 2;

  // -------------------
  // 빛 밝기
  // -------------------

  let glow1 = 150 + sin(frameCount * 0.040) * 100;
  let glow2 = 120 + sin(frameCount * 0.055) * 80;
  let glow3 = 100 + sin(frameCount * 0.070) * 60;

  // -------------------
  // 색상 변화
  // -------------------

  let c1 = color(0,140,255);
  let c2 = color(255,0,180);
  let c3 = color(140,0,255);
  let c4 = color(0,255,220);

  let mix1 = (sin(frameCount * 0.010) + 1) / 2;
  let mix2 = (sin(frameCount * 0.013 + 2) + 1) / 2;
  let mix3 = (sin(frameCount * 0.017 + 4) + 1) / 2;

  let outerColor = lerpColor(c1, c2, mix1);
  let midColor   = lerpColor(c2, c4, mix2);
  let innerColor = lerpColor(c4, c3, mix3);
  
  // 화면 중심 이동
  translate(300, 200);

  // -------------------
  // 별 배경
  // -------------------

  push();

  translate(
    sin(frameCount * 0.01) * 20,
    cos(frameCount * 0.005) * 10
  );

  shearX(frameCount * -0.005);
  shearY(frameCount * -0.005);

  fill(255,255,0);
  noStroke();

  square(-250,-170,2);
  square(-40,-150,2);
  square(200,100,2);
  square(0,170,2);
  square(-230,130,2);
  square(-150,0,2);
  square(150,30,2);
  square(250,-180,2);

  fill(255,255,255);

  square(212,33,1);
  square(-213,-55,1);
  square(1,199,1);
  square(-256,-122,1);
  square(299,-188,1);
  square(-172,76,1);
  square(150,121,1);
  square(-90,-102,1);
  square(65,-13,1);
  square(-228,154,1);

  square(233,-134,1);
  square(-101,88,1);
  square(102,-27,1);
  square(-285,40,1);
  square(-22,111,1);
  square(190,-173,1);
  square(-239,190,1);
  square(44,-44,1);
  square(222,4,1);
  square(-163,-125,1);

  square(89,67,1);
  square(-52,-67,1);
  square(276,142,1);
  square(-210,-181,1);
  square(10,22,1);
  square(155,101,1);
  square(-133,-112,1);
  square(303,-23,1);
  square(-16,155,1);
  square(-249,64,1);

  square(121,-58,1);
  square(-227,198,1);
  square(58,-133,1);
  square(-86,89,1);
  square(196,-91,1);
  square(-168,31,1);
  square(270,146,1);
  square(-35,-142,1);
  square(89,174,1);
  square(-276,-8,1);

  pop();

  // -------------------
  // 은하
  // -------------------

  push();

  rotate(frameCount * -0.007);
  shearY(frameCount * -0.005);

  drawingContext.shadowBlur = 25;
  drawingContext.shadowColor = outerColor.toString();

  strokeWeight(2);

  // -------------------
  // 바깥 레이어
  // -------------------

  stroke(red(outerColor),green(outerColor),blue(outerColor),glow1);

  fill(red(outerColor),green(outerColor),blue(outerColor),glow1);

  arc(0,0,170 + pulse1,170 + pulse1,radians(120),radians(180));
  arc(0,0,170 + pulse1,170 + pulse1,radians(300),radians(360));

  noFill();

  arc(0,0,170 + pulse1,170 + pulse1,radians(180),radians(270));
  arc(0,0,170 + pulse1,170 + pulse1,radians(0),radians(90));

  // -------------------
  // 중간 레이어
  // -------------------

  stroke(red(midColor),green(midColor),blue(midColor),glow2);

  fill(red(midColor),green(midColor),blue(midColor),glow2);

  arc(0,0,140 + pulse2,140 + pulse2,radians(60),radians(120));
  arc(0,0,140 + pulse2,140 + pulse2,radians(240),radians(300));

  noFill();

  arc(0,0,140 + pulse2,140 + pulse2,radians(120),radians(210));
  arc(0,0,140 + pulse2,140 + pulse2,radians(300),radians(30));

  // -------------------
  // 안쪽 레이어
  // -------------------

  stroke(red(innerColor),green(innerColor),blue(innerColor),glow3);

  fill(red(innerColor),green(innerColor),blue(innerColor),glow3);

  arc(0,0,110 + pulse3,110 + pulse3,radians(0),radians(60));
  arc(0,0,110 + pulse3,110 + pulse3,radians(180),radians(240));

  noFill();

  arc(0,0,110 + pulse3,110 + pulse3,radians(60),radians(150));
  arc(0,0,110 + pulse3,110 + pulse3,radians(240),radians(330));

  // -------------------
  // 코어
  // -------------------

  fill(red(innerColor),green(innerColor),blue(innerColor),255);

  arc(0,0,50 + pulse4,50 + pulse4,radians(240),radians(300));
  arc(0,0,50 + pulse4,50 + pulse4,radians(60),radians(120));

  noFill();

  arc(0,0,50 + pulse4,50 + pulse4,radians(300),radians(390));
  arc(0,0,50 + pulse4,50 + pulse4,radians(120),radians(210));

  // -------------------
  // 외곽 고리
  // -------------------

  stroke(red(outerColor),green(outerColor),blue(outerColor),80);

  arc(0,-10,190 + pulse1,200 + pulse1,radians(160),radians(290));
  arc(0,10,190 + pulse1,200 + pulse1,radians(340),radians(110));

  arc(5,-20,210 + pulse2,230 + pulse2,radians(190),radians(320));
  arc(-5,20,210 + pulse2,230 + pulse2,radians(10),radians(150));

  arc(25,-30,260 + pulse3,240 + pulse3,radians(225),radians(350));
  arc(-25,30,260 + pulse3,240 + pulse3,radians(45),radians(170));

  arc(30,10,320 + pulse1,320 + pulse1,radians(300),radians(40));
  arc(-30,-10,320 + pulse1,320 + pulse1,radians(110),radians(220));

  pop();
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}