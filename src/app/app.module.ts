import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
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
  bootstrap: [AppComponent],
  // CUSTOM_ELEMENTS_SCHEMA means that ANY custom elements are allowed (not necessarily all mine, but this is imao fine)
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
