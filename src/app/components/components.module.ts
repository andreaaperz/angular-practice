import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent,
  ],
  exports: [
    //Para que otros modulos lo puedan reconocer
    CardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
