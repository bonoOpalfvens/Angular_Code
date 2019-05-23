import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardExplorerComponent } from './board-explorer/board-explorer.component';
import { MaterialModule } from '../material.module';
import { Routes, RouterModule } from '@angular/router';
import { BoardOverviewComponent } from './board-overview/board-overview.component';
import { BoardCardComponent } from './board-card/board-card.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';

const routes: Routes = [
  { path: 'Boards', component: BoardExplorerComponent }
];

@NgModule({
  declarations: [BoardExplorerComponent, BoardOverviewComponent, BoardCardComponent, BoardDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [BoardExplorerComponent]
})
export class BoardModule { }
