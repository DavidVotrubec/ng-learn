import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// inspired by example in http://reactivex.io/learnrx/
@Component({
  selector: 'app-drag-n-drop-with-observables',
  templateUrl: './drag-n-drop-with-observables.component.html',
  styleUrls: ['./drag-n-drop-with-observables.component.scss']
})
export class DragNDropWithObservablesComponent implements OnInit {

  constructor() { }

//@ViewChild("clicker", {read: ElementRef}) buttonElement: ElementRef;
  @ViewChild("container", {read: ElementRef}) containerEl: ElementRef;
  @ViewChild("sprite", {read: ElementRef}) spriteEl: ElementRef;

  ngOnInit() {
    this.addDragNDrop(this.spriteEl.nativeElement, this.containerEl.nativeElement);

    // hack. should not be invoked this way ...
    (<any>(Array.prototype)).concatMap = function(projectionFunctionThatReturnsArray) {
      return this.
        map(function(item) {
          return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
        concatAll();
    };
  }

  private addDragNDrop(sprite, spriteContainer) {
    var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown"),
      spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove"),
      spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup"),
      spriteMouseDrags =
        // For every mouse down event on the sprite...
        spriteMouseDowns.
          concatMap(function(contactPoint) {
            // ...retrieve all the mouse move events on the sprite container...
            return spriteContainerMouseMoves.
              // ...until a mouse up event occurs.
              takeUntil(spriteContainerMouseUps);
          });
  
        // For each mouse drag event, move the sprite to the absolute page position.
        spriteMouseDrags.forEach(function(dragPoint: MouseEvent) {
          sprite.style.left = dragPoint.offsetX + "px";
          sprite.style.top = dragPoint.offsetY + "px";
        });
  }

}
