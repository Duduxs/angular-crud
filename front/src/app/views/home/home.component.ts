import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { Warning } from 'src/app/shared/model/warning.model';
import { WarningService } from 'src/app/shared/service/warning.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Model Warning
  warning: Warning = {
    id: null,
    title: 'Title',
    description: 'Description',
    publicationDate: moment().format('YYYY-MM-DD' + 'T' + 'hh:mm:ss'),
    visualizationDate: null
  }

   constructor(public warningService: WarningService) { }

    ngOnInit(): void { }

    //Post an empty warning
    postWarning(): void{
      
      this.warningService.postWarning(this.warning).subscribe((data) =>{});
      window.location.reload();
    }
}
