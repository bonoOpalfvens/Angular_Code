import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardExplorerComponent } from './board-explorer/board-explorer.component';
import { MaterialModule } from '../material.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Boards', component: BoardExplorerComponent }
];

@NgModule({
  declarations: [BoardExplorerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [BoardExplorerComponent]
})
export class BoardModule { }
