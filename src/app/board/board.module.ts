import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardExplorerComponent } from './board-explorer/board-explorer.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [BoardExplorerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class BoardModule { }
