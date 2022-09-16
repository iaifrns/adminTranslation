import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CoursesComponent } from './courses/courses.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExamplesComponent } from './examples/examples.component';
import { UsersComponent } from './users/users.component';
import { AudoiRecorderComponent } from './audoi-recorder/audoi-recorder.component';
import { LanguageComponent } from './language/language.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    CoursesComponent,
    ExerciseComponent,
    ExamplesComponent,
    UsersComponent,
    AudoiRecorderComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
