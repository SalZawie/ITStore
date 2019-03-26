import { Component } from '@angular/core';
import {Item} from './item/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[];
  constructor() {
    this.items = [
      new Item('Black Tea Latte', '4.00', '\\assets\\images\\black.jpg'),
      new Item('Black Sesame Tea Latte', '4.00', '\\assets\\images\\black_sesame.jpg'),
      new Item('Matcha Tea Latte', '4.00', '\\assets\\images\\matcha.jpg'),
      new Item('Chai Tea Latte', '4.00', '\\assets\\images\\chai.jpg'),
      new Item('London Fog Tea Latte', '4.00', '\\assets\\images\\london_fog.jpg'),
      new Item('Rooibos Latte', '4.00', '\\assets\\images\\rooibos.jpg'),
    ];
  }
}

