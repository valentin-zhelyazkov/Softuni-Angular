import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    EditComponent,
    UserProfileComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    EditComponent,
    UserProfileComponent
  ]
})
export class CoreModule { }
