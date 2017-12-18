import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  color = 'orange';
  allColors = ['red', 'orange', 'blue', 'green'];
  colorIndex = 0;

  changeColor() {
    this.colorIndex = this.colorIndex + 1;
    const index = this.colorIndex % 4;
    this.color = this.allColors[index];
  }
}
