import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
 
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  
  public components = [];

  cardComponentClass = CardComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  
  public addComponent(componentClass: Type<any>) {
  
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);

    const component = this.container.createComponent(componentFactory);

    // Push the component so that we can keep track of which components are created
    this.components.push(component);
    console.log(this.components);

  }

  ngOnInit(): void {
  }

}
