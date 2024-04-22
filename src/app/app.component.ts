import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderImgComponent} from "./header-img/header-img.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {SignInComponent} from "./sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderImgComponent, NavBarComponent, SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NetflicCopy';
}
