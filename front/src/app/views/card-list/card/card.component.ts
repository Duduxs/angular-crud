import { Component, ComponentFactoryResolver, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public show : boolean = false;

  constructor() {   
    }

  ngOnInit(): void {
  }

  showData(){
    this.show = true;
  }

}
