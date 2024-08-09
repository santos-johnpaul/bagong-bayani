import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbInputModule, NbSearchModule, NbMenuModule, NbActionsModule, NbContextMenuModule, NbIconModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    HttpClientModule,
    NbInputModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),  // This provides the NbMenuService
    NbActionsModule,
    NbContextMenuModule,
    NbSelectModule,
    NbIconModule,
    NbUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
