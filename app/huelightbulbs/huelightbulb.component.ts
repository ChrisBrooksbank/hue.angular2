import { Component } from 'angular2/core';

enum bulbPowerStates {  unknown, off, on }

@Component({
    selector: 'hue-lightbulb',
    templateUrl: 'app/huelightbulbs/huelightbulb.component.html',
})
export class HueLightBulbComponent {
    public bulbNumber: number = -1;
    public bulbName: string = '';
    public bulbPowerState: bulbPowerStates = bulbPowerStates.unknown;
    
    toggleOnOff = function() {return;}
    turnOn = function() {return;}
    turnOff = function() {return;}
}