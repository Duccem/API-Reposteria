import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { MenusComponent } from './Components/menus/menus.component';
import { DialogBodyComponent } from './Components/dialog-body/dialog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
