import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExamplesComponent } from './examples/examples.component';
import { UsersComponent } from './users/users.component';
import { AudoiRecorderComponent } from './audoi-recorder/audoi-recorder.component';
import { LanguageComponent } from './language/language.component';
import { ContentComponent } from './content/content.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'course', component: CoursesComponent},
  {path: 'excesice', component: ExerciseComponent},
  {path: 'example', component: ExamplesComponent},
  {path: 'users', component: UsersComponent},
  {path: 'audioRecorder', component: AudoiRecorderComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'content', component: ContentComponent},
  {path: 'title', component: TitleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
