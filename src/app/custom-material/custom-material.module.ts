import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  exports:[
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ]
})
export class CustomMaterialModule { }
