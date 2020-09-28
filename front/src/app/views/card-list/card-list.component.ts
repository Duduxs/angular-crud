import { Component, Input, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/shared/global-variables';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() warnings: number = 0;

  constructor() { }

  change() {
    this.warnings = GlobalVariable.totalWarnings;
  }

  ngOnInit(): void { }
}
