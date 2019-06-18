import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NeedAuthGuard} from './shared/auth.guard';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'department-details',
    component: DepartmentDetailsComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [NeedAuthGuard]
  },
  { path: '**', component: DashboardComponent, canActivate: [NeedAuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
