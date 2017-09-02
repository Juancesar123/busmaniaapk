import { FooterHomepageComponent } from './../footer-homepage/footer-homepage.component';
import { HeaderHomepageComponent } from './../header-homepage/header-homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'about',component:HomepageComponent},
    ])
  ],
  declarations: [HomepageComponent,HeaderHomepageComponent,FooterHomepageComponent]
})
export class HomepageModule { }
