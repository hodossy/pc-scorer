import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { YellowComponent } from './components/yellow/yellow.component';
import { BlueComponent } from './components/blue/blue.component';
import { GreenComponent } from './components/green/green.component';
import { OrangeComponent } from './components/orange/orange.component';
import { PurpleComponent } from './components/purple/purple.component';
import { SelectableBoxComponent } from './components/selectable-box/selectable-box.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { ArrowComponent } from './components/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundsComponent,
    BonusComponent,
    YellowComponent,
    BlueComponent,
    GreenComponent,
    OrangeComponent,
    PurpleComponent,
    SelectableBoxComponent,
    InputBoxComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
