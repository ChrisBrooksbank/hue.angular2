System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var bulbPowerStates, HueLightBulbComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            (function (bulbPowerStates) {
                bulbPowerStates[bulbPowerStates["unknown"] = 0] = "unknown";
                bulbPowerStates[bulbPowerStates["off"] = 1] = "off";
                bulbPowerStates[bulbPowerStates["on"] = 2] = "on";
            })(bulbPowerStates || (bulbPowerStates = {}));
            HueLightBulbComponent = (function () {
                function HueLightBulbComponent() {
                    this._bulbNumber = -1;
                    this._bulbName = "";
                    this._bulbPowerState = bulbPowerStates.unknown;
                    this.toggleOnOff = function () { return; };
                    this.turnOn = function () { return; };
                    this.turnOff = function () { return; };
                }
                Object.defineProperty(HueLightBulbComponent.prototype, "bulbNumber", {
                    get: function () {
                        return this._bulbNumber;
                    },
                    set: function (thebulbNumber) {
                        this._bulbNumber = thebulbNumber;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HueLightBulbComponent.prototype, "bulbName", {
                    get: function () {
                        return this._bulbName;
                    },
                    set: function (theBulbName) {
                        this._bulbName = theBulbName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(HueLightBulbComponent.prototype, "bulbPowerState", {
                    get: function () {
                        return this._bulbPowerState;
                    },
                    set: function (theBulbPowerState) {
                        this._bulbPowerState = theBulbPowerState;
                    },
                    enumerable: true,
                    configurable: true
                });
                HueLightBulbComponent = __decorate([
                    core_1.Component({
                        selector: 'hue-lightbulb',
                        templateUrl: 'app/huelightbulbs/huelightbulb.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HueLightBulbComponent);
                return HueLightBulbComponent;
            }());
            exports_1("HueLightBulbComponent", HueLightBulbComponent);
        }
    }
});
//# sourceMappingURL=huelightbulb.component.js.map