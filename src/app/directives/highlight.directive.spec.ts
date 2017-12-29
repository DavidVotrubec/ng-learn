import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const span = document.createElement('span');
    const elementRef = new ElementRef(span);
    const directive = new HighlightDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
