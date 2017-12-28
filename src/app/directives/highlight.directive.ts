import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(public element: ElementRef) { 
  }

  // optional color
  @Input() highlight:string
  private defaultColor = 'gold';

  ngOnInit(){
    // If we are using @Input, then the logic needs to be in ngOnInit() and not in the constructor
    // because ngOnInit() waits for all the initialization steps to complete
    this.element.nativeElement.style.backgroundColor = this.highlight || this.defaultColor;
  }

  @HostListener('click', ['$event'])
  onClick(event: Event){
    alert('I have been clicked');
  }

}
