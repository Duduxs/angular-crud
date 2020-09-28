import { Component, Input, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/shared/global-variables';
import { WarningService } from 'src/app/shared/service/warning.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})

export class TextAreaComponent implements OnInit {
  //Title and description handles from card
  public title: string = GlobalVariable.warningTitle;
  public description: string = GlobalVariable.warningDescription;
  public inputHidden: boolean = true;
  public writing: boolean = false;
  

  //Input variables
  value: string;
  value2: string;

  constructor(public warningService: WarningService) { }

  ngOnInit(): void {}

   //Get each value of the description input and send to GlobalVariable 
  onKey(value: string) {
   //I'll allow if the user clicked in "Edit" btn.
    if (GlobalVariable.clickedInEdit) {
      this.writing = true;
      this.title = '';
      GlobalVariable.newTitle = value;

    }
  }

  //Get each value of the description input and send to GlobalVariable 
  onKeyDescription(value2: string) {
    //I'll allow if the user clicked in "Edit" btn.
    if (GlobalVariable.clickedInEdit) {
      this.writing = true;
      this.description = '';
      GlobalVariable.newDescription = value2;
    }
  }

  clicked() {
    //If the user isn't writing then set Title and Description when i click in this component.
    if (!this.writing) {
      this.title = GlobalVariable.warningTitle;
      this.description = GlobalVariable.warningDescription;
    }
  }

  mouseleave(){
    
    this.inputHidden = true;
  }

  mouseenter(){

    if(GlobalVariable.clickedInEdit)
      this.inputHidden = false;
  }
}
