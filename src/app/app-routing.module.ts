import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './core/add/add.component';
import { EditComponent } from './core/edit/edit.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { UserProfileComponent } from './core/user-profile/user-profile.component';

import { GuardAuthGuard } from './core/guard-auth.guard';
import { WeatherComponent } from './core/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [GuardAuthGuard]
  },{
    path: 'weather',
    component: WeatherComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
