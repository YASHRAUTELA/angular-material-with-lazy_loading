import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    GridRoutingModule,
    CustomMaterialModule
  ]
})
export class GridModule { }
