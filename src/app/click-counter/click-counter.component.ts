import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
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
  multiClickStream: Observable<MouseEvent>;
  singleClickStream: Observable<MouseEvent>;
  singleClickCounter: number = 0;
  multipleClickCounter: number = 0;

  
  constructor() { }

  ngOnInit() {
    // this.button = document.
  }

  ngAfterViewInit(){
    this.button = this.buttonElement.nativeElement;

    this.clickStream = Observable.fromEvent(this.button, 'click');
    debugger
    this.multiClickStream = this.clickStream.buffer(() => {
      
      debugger
      return this.clickStream.throttle(250);
    })
    .map((list) => list.length)
    .filter((x) => x >= 2);

    this.singleClickStream = this.clickStream
    // TODO: The buffer does not work?? the debugger never stops there and the rest is never invoked. No error in console
    // .buffer(() => {
    //   debugger
    //   return this.clickStream.throttle(250);
    // })
    .map(function (list) {
return list.length;
    } )
    .filter((x) => x == 1);

    this.multiClickStream.subscribe(() => {
      debugger
      this.multipleClickCounter = this.multipleClickCounter + 1;
    })

    this.singleClickStream.subscribe(() => {
      debugger
      this.singleClickCounter++;
    })

  }

}
