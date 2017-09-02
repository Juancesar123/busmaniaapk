import { LoginComponent } from './../login/login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    {
        path: 'login',component: LoginComponent
    },
    ])  
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
