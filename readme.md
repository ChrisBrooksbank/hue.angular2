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

## Running this code on a development box
`npm install`
This downloads and installs dependencies.

`npm start`
This will start a filewatcher for compiling typescript .ts=>.js

And [lite-server](https://github.com/johnpapa/lite-server) is responsible for "...serves the static content, detects changes, refreshes the browser..."

## RoadMap
Development is at a very early stage so roadmap is rough.

[ ] Create Angular service to talk to hue bridge.

[ ] huelightbulb rendering to reflect bulb on/off/unknown

[ ] huelightbulb to render in correct colour

[ ] clicking on huelightbulb to toggle power state on/off

[ ] Allow huelightbulb colour to be changed by user

[ ] add a huelightbulblist component showing all bulbs on bridge

[ ] assist other users in configuring bridge connection

[ ] support for viewing and maintaining alarms. e.g. wakeup alarms
