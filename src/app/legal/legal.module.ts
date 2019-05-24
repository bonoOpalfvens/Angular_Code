import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

@NgModule({
  declarations: [PrivacyComponent, TermsAndConditionsComponent],
  imports: [
    CommonModule
  ],
  exports: [PrivacyComponent, TermsAndConditionsComponent]
})
export class LegalModule { }
