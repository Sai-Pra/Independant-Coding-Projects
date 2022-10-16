/*
* Arduino Wireless Communication Tutorial
*       Example 1 - Receiver Code
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
  Serial.begin(9600);
  radio.begin();
  radio.openReadingPipe(0, address);
  radio.setPALevel(RF24_PA_MIN);
  radio.startListening();
}

void loop() {
  if (radio.available()) {
    char text[32] = "";
    radio.read(&text, sizeof(text));
    Serial.println(text);
  }
}







//#include <SPI.h>
//#include <nRF24L01.h>
//#include <RF24.h>
//
//RF24 radio(7, 8); // CE, CSN
////COM8 => Recieve Black
//
//const byte address[6] = "00001";
//
//void setup() {
//  Serial.begin(9600);
//radio.begin();
//radio.openReadingPipe(0, address);   //Setting the address at which we will receive the data
//radio.setPALevel(RF24_PA_MIN);       //You can set this as minimum or maximum depending on the distance between the transmitter and receiver.
//radio.startListening();  
//
//}
//
//void loop() {
//  //if (radio.available()) {
//    int num[2];
//    radio.read(&num, sizeof(num));
//    Serial.println(num[0]);
//    Serial.print(num[1]);
//   
//    if(num[0] >= 240){
//      if(num[1] >= 220){  
//        digitalWrite(9, LOW);    
//        analogWrite(10, map(num[0], 512, 0, 255, 0));
//        analogWrite(5, map(num[0], 512, 0, 255, 0));
//        digitalWrite(3, LOW);      
//      }
//      else if(num[1] <= 210){
//        analogWrite(9, map(num[0], 0, 512, 0, 255));
//        digitalWrite(10, LOW);
//        digitalWrite(5, LOW);    
//        analogWrite(3, map(num[0], 512, 0, 255, 0));               
//      }
//      else{
//        analogWrite(9, map(num[0], 0, 512, 0, 255));
//        digitalWrite(10, LOW);
//        analogWrite(5, map(num[0], 512, 0, 255, 0));
//        digitalWrite(3, LOW);              
//      }
//
//    }
//    else if(num[0] < 230){
//      if(num[1] >= 220){  
//      digitalWrite(10, LOW);    
//      analogWrite(9, map(num[0], -512, 0, 255, 0));
//      analogWrite(3, map(num[0], -512, 0, 255, 0));
//      digitalWrite(5, LOW);
//      }
//      else if(num[1] <= 210){
//      analogWrite(10, map(num[0], -512, 0, 255, 0));
//      digitalWrite(9, LOW);
//      digitalWrite(3, LOW);    
//      analogWrite(5, map(num[0], -512, 0, 255, 0));             
//      }
//      else{
//      analogWrite(10, map(num[0], -512, 0, 255, 0));
//      digitalWrite(9, LOW);
//      analogWrite(3, map(num[0], -512, 0, 255, 0));
//      digitalWrite(5, LOW);          
//      }
//    }
//    else{
//      digitalWrite(10, LOW);
//      digitalWrite(9, LOW);
//      digitalWrite(5, LOW);
//      digitalWrite(3, LOW);
//    }
//  //}
//}
