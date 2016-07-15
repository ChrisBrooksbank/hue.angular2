import { Component } from 'angular2/core';
import { HueLightBulbComponent } from './huelightbulbs/huelightbulb.component';

@Component({
  selector: 'hue-app',
  template: `
  <div><h1>{{pageTitle}}</h1>
   <hue-lightbulb bulbName="landing">Loading lightbulb</hue-lightbulb>
  </div>
  `,
  directives: [HueLightBulbComponent]
})
export class AppComponent{
    pageTitle: string = 'Phillips Hue Light - Angular 2';
}