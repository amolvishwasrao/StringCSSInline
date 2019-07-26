import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousComp1Component } from './marvellous-comp1/marvellous-comp1.component';
import { MarvellousComp2Component } from './marvellous-comp2/marvellous-comp2.component';
import { NewCompComponent } from './new-comp/new-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousComp1Component,
    MarvellousComp2Component,
    NewCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NewCompComponent]
})
export class AppModule { }
