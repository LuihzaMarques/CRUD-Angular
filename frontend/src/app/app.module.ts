import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './escopo/header/header.component';
import { FooterComponent } from './escopo/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { BoxFormComponent } from './escopo/box-form/box-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './escopo/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BoxFormComponent,
    SidebarComponent,
    DashboardComponent,
    UserComponent,
    EmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
