import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { MaterialModule, MdButtonModule } from '@angular/material';
import { AuthGuard } from './auth-guard/auth-guard.guard';
import { Oauthv2TokenHandlerService } from './oauthv2-token-handler/oauthv2-token-handler.service';
import { routeConfig } from './routes';

import 'hammerjs';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MainWindowComponent } from './main-window/main-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    MainWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig, {useHash: true}),
    HttpModule,
    MaterialModule,
    MdButtonModule
  ],
  providers: [AuthGuard, Oauthv2TokenHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
