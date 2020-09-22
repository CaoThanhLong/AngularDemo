import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent, // Cac component su dung (lan nhau) trong module nay
  ],
  imports: [
    BrowserModule, // Noi de import cac module khac vao module nay
  ],
  providers: [],
  bootstrap: [AppComponent], // Noi chua component su dung trong index.html
})
export class AppModule {}
