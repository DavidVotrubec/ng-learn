import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx'; // Careful. The "import Rx from 'rxjs/Rx' does not work in VSCode 
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/throttle';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.scss']
})
export class ClickCounterComponent implements OnInit, AfterViewInit  {

  @ViewChild("clicker", {read: ElementRef}) buttonElement: ElementRef;

  button : Element = null;
  clickStream: any;
  multiClickStream: Observable<number>;
  singleClickStream: Observable<number>;
  singleClickCounter: number = 0;
  multipleClickCounter: number = 0;

  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    const period = 250;

    this.button = this.buttonElement.nativeElement;
    this.clickStream = Rx.Observable.fromEvent(this.button, 'click');       

    this.singleClickStream = this.clickStream.buffer(this.clickStream.throttle((ev) => {      
      return Rx.Observable.interval(period);
    }))
    .map((list) => list.length)
    .filter((x) => x == 1);

    this.multiClickStream = this.clickStream.buffer(this.clickStream.throttle((ev) => {
      return Rx.Observable.interval(period);
    }))
    .map((list) => list.length)
    .filter((x) => x >= 2);

    this.singleClickStream.subscribe(() => {
      this.singleClickCounter++;
    })

    this.multiClickStream.subscribe(() => {
      this.multipleClickCounter = this.multipleClickCounter + 1;
    })

  }

}
