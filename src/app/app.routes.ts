import { Routes } from '@angular/router';
import {HeaderImgComponent} from "./header-img/header-img.component";
import {SignInComponent} from "./sign-in/sign-in.component";

export const routes: Routes = [
  {path:'home', component: HeaderImgComponent},
  {path:'signIn', component: SignInComponent}

];
