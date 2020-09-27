import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GlobalVariable } from 'src/app/shared/global-variables';
import { Warning } from 'src/app/shared/model/warning.model';
import { WarningService } from 'src/app/shared/service/warning.service';
import { TextAreaComponent } from '../../text-area/text-area.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  public show: boolean = false;
  warnings: Warning[];

  textarea : TextAreaComponent = new TextAreaComponent();

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


    console.log(this.warnings[id]);
    this.show = true;
  }

  
  getWarnings() {
    this.warningService.getWarnings().subscribe(data => {
      this.warnings = data.content;
    })
  }
}



