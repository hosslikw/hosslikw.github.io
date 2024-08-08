/**
 * Load and Display an OBJ Shape.
 *
 * The loadShape() command is used to read simple SVG (Scalable Vector Graphics)
 * files and OBJ (Object) files into a Processing sketch. This example loads an
 * OBJ file of a rocket and displays it to the screen.
 */

PShape rocket;
PImage img;

float ry = 0, rx = 0, rz = 0;
int xLoc, yLoc, zLoc, count = 1, maxCount = 500, cashCount = 0, cashBump = 0;
boolean spin = false;


public void setup() {

  size(800, 600, P3D);
  frameRate(25);

  xLoc = width/2;
  yLoc = height/2;
  zLoc = 0;

  rocket = loadShape("asset/seinfold/mesh.obj");
  rocket.scale(30);
  rocket.rotateX(PI/2 + 0.2);
  rocket.rotateZ(PI/2);
  rocket.translate(-2, 0, -4);

  img = loadImage("asset/seinfold/Elizabeth.png");

  PFont font = createFont("asset/seinfold/SourceCodePro-Regular.ttf", 64);
  textFont(font);
}

public void draw() {
  background(0);
  lights();

  translate(xLoc, yLoc, zLoc);
  rotateZ(rz);
  rotateY(ry);
  rotateX(rx);
  shape(rocket);

  if(spin){

    if(count%1 == 0){
      ry += 0.015;
    }

    //stunt 1

    if(count > 100 && count < 225){
      rz -= count%2*0.01;
    }

    if(count > 100 && count < 225){
      rz += (count+1)%2*0.01;
    }

    //stunt 2

    if(count > 150 && count < 225){
      yLoc -= count%2*3;
    }

    if(count > 150 && count < 225){
      yLoc += (count+1)%2*3;
    }

    //stunt 3

    if(count > 201 && count < 225){
      ry -= 1;
    }

    //

    count += 1;

    if(count == maxCount){
      count = 1;
    }
  }

  //cash counter

  text("$" + cashCount, -200, -100 + cashBump);
  //text("$" + cashCount, 100, +200 + cashBump);
}

void keyPressed(){

  if(keyCode==32){
    if(spin){
      spin = false;
    }

    else if(!spin){
      spin = true;
    }
  }

  if(keyCode==37){
    cashCount -= 1;
    cashBump = 5;
  }

  if(keyCode==39){
    cashCount += 1;
    cashBump = -5;
  }
}

void keyReleased(){

  if(keyCode==37){
    cashBump = 0;
  }

  if(keyCode==39){
    cashBump = 0;
  }
}