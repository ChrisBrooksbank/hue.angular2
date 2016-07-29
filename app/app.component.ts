import { Component } from 'angular2/core';
import { HueLightBulbListComponent } from './huelightbulbs/huelightbulb-list.component';

@Component({
  selector: 'hue-app',
  template: `
  <div><h1>{{pageTitle}}</h1>
   <hue-lightbulb-list>Loading lightbulb list</hue-lightbulb-list>
  </div>
  `,
  directives: [HueLightBulbListComponent]
})
export class AppComponent{
    pageTitle: string = 'Phillips Hue Light - Angular 2';
}