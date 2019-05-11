import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatTooltipModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatCardModule, MatListModule, MatGridListModule, MatSidenavModule, MatProgressSpinnerModule, MatProgressBarModule, MatButtonToggleModule, MatPaginatorModule } from '@angular/material';

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
    MatPaginatorModule
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
    MatPaginatorModule
  ]
})
export class MaterialModule { }
