import { HomepageComponent } from './homepage/homepage.component';
import { HomepageModule } from './homepage/homepage.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderHomepageComponent } from './header-homepage/header-homepage.component';
import { FooterHomepageComponent } from './footer-homepage/footer-homepage.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
// const appRoutes: Routes = [
//   { path: 'crisis-center', component: DashboardComponent },
// ]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    RouterModule.forRoot([
      {path:'',component:HomepageComponent},
      {path:'login',component:LoginComponent}
      ]),
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
