import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Item} from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
