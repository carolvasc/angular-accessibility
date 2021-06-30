import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';
@NgModule({
  declarations: [
    YesNoButtonGroupComponent
  ],
  imports: [
    CommonModule,
    KeyboardManagerModule,
  ],
  providers: [UniqueIdService],
  exports: [YesNoButtonGroupComponent]
})
export class YesNoButtonGroupModule { }
