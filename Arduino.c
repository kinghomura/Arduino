#include<ESP8266.h>
//#define SSID "Design0"
//#define PASSWD "abcdefghijklm"
#define SSID "cs203"
#define PASSWD "wakasat0"
#define HOST_NAME "10.128.3.70"
#define HOST_PORT (49999)
SoftwareSerial Wserial(2,4);
ESP8266 wifi(Wserial);

#include<Wire.h>
#define LM75B 0x48
#define temp_reg 0x00
#define conf_reg 0x01


void setup() {
  Serial.begin(9600);
  Wserial.begin(115200);
  Wserial.println("AT+UART_CUR=9600,8,1,0,0");
  delay(10);
  Wserial.begin(9600);
  delay(10);
  if(wifi.setOprToStation()){
    Serial.println("OK");
  }else{
    Serial.println("ERROR");
  }
  if(wifi.joinAP(SSID,PASSWD)){
    Serial.println(wifi.getLocalIP().c_str());
  }else{
    Serial.println("Failed");
    }

  //for temp
  Wire.begin();
  Wire.beginTransmission(LM75B);
  Wire.write(conf_reg);
  Wire.write(0x00);
  Wire.endTransmission();
  Wire.beginTransmission(LM75B);
  Wire.write(temp_reg);
  Wire.endTransmission();
}

char smsg[128] = {0};
char rmsg[128] = {0};
int i=0;
void loop(){
  unsigned int temp_data = 0;
  double temp = 0.0;

  Wire.requestFrom(LM75B,2);

  while(Wire.available()){
    temp_data = (Wire.read() << 8);
    temp_data |= Wire.read();
  }
  temp = (temp_data >> 5) * 0.125;

  //double num1 = temp;
  char str[30];

  String kiii = String(temp, 2);
  Serial.println(str);


  strcpy(smsg,str);
  //sprintf(smsg,"%s",temp);
  //Serial.println(str);
  //printf(str);

  if(wifi.createTCP(HOST_NAME,HOST_PORT)){
    Serial.println("OK: TCP Connected.");
    wifi.send(smsg,strlen(smsg));
    Serial.println(smsg);
  }else{
    Serial.println("Failed TCP Connect.");
  }
  wifi.releaseTCP();

  delay(1000);
}
