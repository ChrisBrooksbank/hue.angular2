# hue.angular2

This Angular 2 project allows you to control the (Phillips Hue) lights in your house.

## Configuration
Create a file called config.json to contain your Phillips Hue bridge address and username.
[Click here](http://www.developers.meethue.com/documentation/getting-started) to see how to find bridge address and create username on hue bridge

An example file is :
{
	"hue" : {
	"bridgeaddress" : "yourhuebridgeaddress",
	"bridgeusername" : "yourhuebridgeusername"
}
}


## Angular2 Components
Services : **PhillipsHueBridgeService**

Components : **PhillipsHueLight**

## Web pages
### /Lights
Displays all lights connected to bridge ( in a flexbox )
The UI Indicates if light is on or off.              
Clicking a light toggles it between on and off.