import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs/internal/Observable';
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
  warnings: Warning[];
  warning: Warning;

  constructor(public warningService: WarningService) {
  }

  ngOnInit(): void {
    this.getWarnings();
  }

  showData(id: number) {
    const now = moment().format('YYYY-MM-DD' + 'T' + 'hh:mm:ss');
  
    this.warnings[id].visualizationDate = now;

    GlobalVariable.warningTitle = this.warnings[id].title;
    GlobalVariable.warningDescription = this.warnings[id].description;
    GlobalVariable.warningVisualizationDate = this.warnings[id].visualizationDate;


    this.show = true;
  }

  findById(id: number){
    this.warningService.findByid(id).subscribe(data =>{
      this.warning = data;
    })
    }

  getWarnings() {
    this.warningService.getWarnings().subscribe(data => {
      this.warnings = data.content;
    })
  }

  deleteWarning(id: number){
    this.findById(id);
    const index = this.warnings.indexOf(this.warning);
    this.warnings.splice(index,1);

    this.warningService.deleteWarning(id).subscribe(() =>{
     
    });
  }

}



