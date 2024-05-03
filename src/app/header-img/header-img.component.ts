import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatToolbar} from "@angular/material/toolbar";
import {MatInput} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {Questions} from "../questions";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle,
  MatExpansionPanelHeader
} from "@angular/material/expansion";
import {NgForOf, NgIf} from "@angular/common";
import {FooterList} from "../footer-list";
import {RouterLink} from "@angular/router";

export interface questions{
  id:number,
  name:string,
  clicked: boolean
  content: string
}
export interface  footerList{
  id:number,
  content: string
}
@Component({
  selector: 'app-header-img',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatLabel,
    MatToolbar,
    MatInput,
    FlexModule,
    MatSelect,
    MatOption,
    MatIcon,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './header-img.component.html',
  styleUrl: './header-img.component.css'
})
export class HeaderImgComponent implements OnInit {


  data!: questions[];
  footerData!: footerList[];
  constructor() {
  }

  ngOnInit(): void {
    this.data=Questions.question
    this.footerData=FooterList.footerList
    console.log('data', this.data)
    console.log('footerlist', this.footerData)
  }

  toggleExpand( id: number) {
    this.data.forEach(value => {
      if (value.id===id){
        console.log('clicked', value.clicked)
       value.clicked=!value.clicked
      }else {
        value.clicked=false
      }
    })
    console.log(this.data)
    console.log('id', id)

  }


  protected readonly FooterList = FooterList;
}
