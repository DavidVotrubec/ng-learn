import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomNumberComponent } from './random-number/random-number.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RandomNumberComponent],
  exports: [RandomNumberComponent]
})
export class SharedModule { }
