import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    CustomMaterialModule
  ]
})
export class CalenderModule { }
