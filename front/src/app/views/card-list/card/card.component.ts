import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GlobalVariable } from 'src/app/shared/global-variables';
import { Warning } from 'src/app/shared/model/warning.model';
import { WarningService } from 'src/app/shared/service/warning.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  public show: boolean = false;
  public warnings: Warning[];
  warning: Warning;

  constructor(public warningService: WarningService) { }

  ngOnInit(): void { this.getWarnings(); }

  showData(warning: Warning) {
    
    let index = this.warnings.indexOf(warning);
    //Every time i click in this card show me a new visualization date
    const now = moment().format('YYYY-MM-DD' + 'T' + 'hh:mm:ss');
    this.warnings[index].visualizationDate = now;

    if(GlobalVariable.clickedInEdit){
    GlobalVariable.warningTitle = this.warnings[index].title;
    GlobalVariable.warningDescription = this.warnings[index].description;
    GlobalVariable.warningVisualizationDate = this.warnings[index].visualizationDate;
    }
    //When i click at the card, show the rest of the properties.
    this.show = true;
  }
  
  findById(id: number){
    //Find Warning by id and place his in warning variable
    this.warningService.findByid(id).subscribe(data =>{
      this.warning = data;
    })
    }

  getWarnings() {
    //Get all warnings
    this.warningService.getWarnings().subscribe(data => {
      this.warnings = data.content;
      let count = 0;
      //Length property doesn't work :/
      for(let i = 0 ; i < this.warnings.length ; i++){
        count++;
      }
      GlobalVariable.totalWarnings = count;
    
    })
  }

  updateWarning(id: number){

    this.findById(id);
  
    GlobalVariable.clickedInEdit = true;
    //New infos that will be present on card.
    this.warning.title = GlobalVariable.newTitle;
    this.warning.description = GlobalVariable.newDescription;

    this.warningService.updateWarnings(id, this.warning).subscribe(data => {});
    
    if(this.warning.title != undefined)
      window.location.reload();
  }

  deleteWarning(id: number){

    this.findById(id);
    //Remove warning from array
    const index = this.warnings.indexOf(this.warning);
    this.warnings.splice(index,1);
    //Remove warning from api
    this.warningService.deleteWarning(id).subscribe(() =>{});
    //Att total warnings
    GlobalVariable.totalWarnings = this.warnings.length;
  }
}



