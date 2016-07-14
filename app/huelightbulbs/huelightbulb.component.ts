import { Component } from 'angular2/core';

enum bulbPowerStates {  unknown, off, on }

@Component({
    selector: 'hue-lightbulb',
    templateUrl: 'app/huelightbulbs/huelightbulb.component.html'
})
export class HueLightBulbComponent {
    private _bulbNumber: number = -1;
    private _bulbName: string = "";
    private _bulbPowerState: bulbPowerStates = bulbPowerStates.unknown;

    constructor(bulbName: string){
        this._bulbName = bulbName;
    }

    get bulbNumber():number {
        return this._bulbNumber;
    }
    set bulbNumber(thebulbNumber:number) {
        this._bulbNumber = thebulbNumber;
    }

    get bulbName():string {
        return this._bulbName;
    }
    set bulbName(theBulbName:string) {
        this._bulbName = theBulbName;
    }

    get bulbPowerState():bulbPowerStates {
        return this._bulbPowerState;
    }
    set bulbPowerState(theBulbPowerState:bulbPowerStates) {
        this._bulbPowerState = theBulbPowerState;
    }

    toggleOnOff = function() {return;}
    turnOn = function() {return;}
    turnOff = function() {return;}
}