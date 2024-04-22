import { Component } from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FlexModule,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
