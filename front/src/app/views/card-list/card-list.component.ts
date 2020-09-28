import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GlobalVariable } from 'src/app/shared/global-variables';
import { Warning } from 'src/app/shared/model/warning.model';
import { WarningService } from 'src/app/shared/service/warning.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {


  warning: Warning = {
    id: null,
    title: 'Title',
    description: 'Description',
    publicationDate: moment().format('YYYY-MM-DD' + 'T' + 'hh:mm:ss'),
    visualizationDate: null
  }

  constructor(public warningService: WarningService) { }

  ngOnInit(): void {

  }

  postWarning(): void{
    this.warningService.postWarning(this.warning).subscribe((data) =>{
      console.log(data);
    });
    window.location.reload();
  }

}
