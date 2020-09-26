import { Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import * as moment from 'moment';
import { Warning } from 'src/app/shared/model/warning.model';
import { WarningService } from 'src/app/shared/service/warning.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public show : boolean = false;
  warnings: Warning[];

  
  constructor(public warningService: WarningService) {   
    }

  ngOnInit(): void {
    this.getLives();
  }

  showData(id:number){
    const now = moment().format('YYYY-MM-DD'+'T'+'hh:mm:ss');
 
    this.warnings[id].visualizationDate = now;

    console.log(this.warnings[id]);
    if(this.warnings[id].visualizationDate != null){
    this.show = true;
    }
  }

  
  getLives(){
    this.warningService.getWarnings().subscribe(data =>{
      this.warnings = data.content;
      console.log(this.warnings);
    })
  }
}
