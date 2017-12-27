import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
    // this.button = document.
  }

  ngAfterViewInit(){
    this.button = this.buttonElement.nativeElement;

    this.clickStream = Observable.fromEvent(this.button, 'click');    
    var interval = Observable.interval(250);
    var interval2 = Observable.interval(250);

    // now the buffer is called, but it has weird result.
    // I've probably missundertood something.
    // It is hard to find good examples, because the old versions (v4) seems to have deprecated methods
    // and then the examples does not work
    this.singleClickStream = interval.buffer(this.clickStream)
    .map(function (list) {
      return list.length;
    })
    .filter((x) => x == 1);

    this.multiClickStream = interval2.buffer(this.clickStream)
    .map((list) => list.length)
    .filter((x) => x >= 2);


    this.singleClickStream.subscribe(() => {
      debugger
      this.singleClickCounter++;
    })


    this.multiClickStream.subscribe(() => {
      debugger
      this.multipleClickCounter = this.multipleClickCounter + 1;
    })


  }

}
