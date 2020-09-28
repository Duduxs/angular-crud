import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { GlobalVariable } from 'src/app/shared/global-variables';
import { Warning } from 'src/app/shared/model/warning.model';
import { WarningService } from 'src/app/shared/service/warning.service';
import { CardComponent } from '../card-list/card/card.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
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
       
      });
      window.location.reload();
    }
}
