import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { MaterialModule, MdButtonModule } from '@angular/material';
import { AuthGuard } from './auth-guard/auth-guard.guard';
import { AccessCodeGuard } from './access-code/access-code.guard';
import { Oauthv2TokenHandlerService } from './oauthv2-token-handler/oauthv2-token-handler.service';
import { routeConfig } from './routes';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig, {useHash: true}),
    HttpModule,
    MaterialModule,
    MdButtonModule
  ],
  providers: [AuthGuard, Oauthv2TokenHandlerService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
