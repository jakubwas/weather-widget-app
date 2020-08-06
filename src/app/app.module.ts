import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [AppComponent, WidgetComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
