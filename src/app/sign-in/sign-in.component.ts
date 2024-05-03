import {Component, OnInit} from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FooterList} from "../footer-list";
import {NgForOf} from "@angular/common";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {RouterLink} from "@angular/router";

export interface  footerList{
  id:number,
  content: string
}
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FlexModule,
    MatFormField,
    MatInput,
    MatButton,
    NgForOf,
    MatOption,
    MatSelect,
    RouterLink
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
  data!: any[];
  footerData!:footerList[];
  filteredFooter!:footerList[];
  filteredId:number[]=[1,2,8,9,10,11];
  footerContent!: footerList[];

   constructor() {
  }

  ngOnInit(): void {
    this.footerData=FooterList.footerList
    const list:footerList[]=[]
    console.log('footerData', this.footerData)
   this.footerData.filter(value => {
   if (value.id === this.filteredId.find(id=>value.id===id)){
     // this.footerContent.push(value.content)
     list.push(value)
this.footerContent=list
   }
   })

    console.log('list', this.footerContent)

  }

}
