import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { OddComponentComponent } from './odd-component/odd-component.component';
import { EvenComponentComponent } from './even-component/even-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    OddComponentComponent,
    EvenComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
