import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { SharedModule } from './shared-module/shared-module.module';
import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  // "declarations" are components, directives and pipes
  // they only display data
  // They are private for this module only. If you want to share them, then you need to add them to the exports[]
  declarations: [
    AppComponent,
    ColorPickerComponent,
    GithubUsersComponent,
    ClickCounterComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule, SharedModule
  ],
  // exports are available for import from other NgModules
  exports: [],
  // "providers" are services. They get and set the data
  // They are global. No need to export??
  providers: [],
  bootstrap: [AppComponent],
  // CUSTOM_ELEMENTS_SCHEMA means that ANY custom elements are allowed (not necessarily all mine, but this is imao fine)
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
