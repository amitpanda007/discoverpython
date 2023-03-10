import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PythonModule } from './python/python.module';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './common/nav/nav.component';
import { AnimatedIconComponent } from './common/animated-icon.component';
import { RedditService } from './common/services/reddit.service';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    PythonModule,
  ],
  providers: [RedditService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
