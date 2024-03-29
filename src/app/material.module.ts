import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // AngularMaterialAnimations
    BrowserAnimationsModule,
    // AngularMaterial
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  exports: [
    // AngularMaterialAnimations
    BrowserAnimationsModule,
    // AngularMaterial
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
