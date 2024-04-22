import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatOptgroup, MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatToolbar,
    MatSelect,
    MatOptgroup,
    MatOption,
    MatButton
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
