import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Buoi1Component } from './buoi1/buoi1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Buoi1Component,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentsComponent  //các component sử dụng (lẫn nhau) trong module này
  ],
  imports: [
    BrowserModule   //nơi để import các module khác vào module này
  ],
  providers: [],
  bootstrap: [AppComponent] //nơi chứa component sử dụng trong index.html
})
export class AppModule { }
