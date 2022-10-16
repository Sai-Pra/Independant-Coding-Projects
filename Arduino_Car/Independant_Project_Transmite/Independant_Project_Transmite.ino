/*
* Arduino Wireless Communication Tutorial
*     Example 1 - Transmitter Code
*                
* by Dejan Nedelkovski, www.HowToMechatronics.com
* 
* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/
*/

#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(7, 8); // CE, CSN

const byte address[6] = "00001";

void setup() {
  radio.begin();
  radio.openWritingPipe(address);
  radio.setPALevel(RF24_PA_MIN);
  radio.stopListening();
}

void loop() {
  const char text[] = "Hello World";
  radio.write(&text, sizeof(text));
  if(radio.available()){
    Serial.println("Good");
  }
}





//#include <SPI.h>
//#include <RF24.h>
//#include <nRF24L01.h>
////
////
////
////COM4 => Transmit
////
//RF24 radio(7, 8); // CE, CSN
////
//int input = 9;
//int VRx = A0;
//int VRy = A1;
//int SW = 2;
//
//int xPosition = 0;
//int yPosition = 0;
//int SW_state = 0;
//int mapX = 0;
//int mapY = 0;
//int num[2];
//
//const byte address[6] = "00001";
//
//void setup() {
//  Serial.begin(9600);
//radio.begin();                  //Starting the Wireless communication
//radio.openWritingPipe(address); //Setting the address where we will send the data
//radio.setPALevel(RF24_PA_MIN);  //You can set it as minimum or maximum depending on the distance between the transmitter and receiver.
//radio.stopListening(); 
//  pinMode(VRx, INPUT);
//  pinMode(VRy, INPUT);
//  pinMode(SW, INPUT_PULLUP); 
//  pinMode(input, INPUT);
//}
//
//void loop() {
//  if(radio.available()){
//      xPosition = analogRead(VRx);
//  
//  yPosition = analogRead(VRy);
//  SW_state = digitalRead(SW);
//  mapX = map(xPosition, 0, 1023, -512, 512);
//  //Serial.println(xPosition);
//  mapY = map(yPosition, 0, 1023, -512, 512);
//  num[0] = mapX;
//  num[1] = mapY;
//  radio.write(&num, sizeof(num));  //transmit the data
//  Serial.print("Xpos = ");
//  Serial.print(xPosition);
//  Serial.print(" Ypos = ");
//  Serial.println(yPosition);
//  } else {
//    Serial.println("BAD");
//  }
//  
//}
