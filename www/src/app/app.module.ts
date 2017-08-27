import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { WorkComponent } from './work/work.component';
import { ProductionLineComponent } from './work/production-line/production-line.component';
import { SutachuComponent } from './work/sutachu/sutachu.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    WorkComponent,
    ProductionLineComponent,
    SutachuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
