import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/shared/global-variables';


@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})

export class TextAreaComponent implements OnInit {

  public title: string = "";
  public description: string = "";

  constructor() { }

  clicked(){
   this.title = GlobalVariable.warningTitle;
   this.description = GlobalVariable.warningDescription;
  }

  ngOnInit(): void {

  }

}
