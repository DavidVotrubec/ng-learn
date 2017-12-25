import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    GithubUsersComponent,
    ClickCounterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
