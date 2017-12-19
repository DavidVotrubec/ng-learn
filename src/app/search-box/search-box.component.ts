import { Component, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-search-box',
  //templateUrl: './search-box.component.html',
  template: `
    <h1>Custom search box built on Observable Stream</h1>
    <h3>Inspired by <a href="http://blog.rangle.io/observables-and-reactive-programming-in-angular-2/">Rangle.io</a></h3>
    <br/>
    <input type="text"
      [ngFormControl]="seachBox"
      placeholder="Search. TODO: Localization"/>
    <br/>
    
    <div *ngFor=#item of results | async">
      {{item.name}} -- popularity: {{item.popularity}}
    </div>
  `,
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor() { 
    // this.searchBox
  }

  ngOnInit() {
  }

  // decorators - how does this work undder the hood?
  @Input() results: Observable<any>;
  // TODO: Needs type
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();

  // TODO: IS this supported in Angular 5?
  private searchBox : Control = new Control();


}
