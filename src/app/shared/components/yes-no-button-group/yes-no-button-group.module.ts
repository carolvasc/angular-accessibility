import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';



@NgModule({
  declarations: [
    YesNoButtonGroupComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [UniqueIdService],
  exports: [YesNoButtonGroupComponent]
})
export class YesNoButtonGroupModule { }
