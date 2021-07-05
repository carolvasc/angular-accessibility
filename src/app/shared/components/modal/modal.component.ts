import { Component } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.less'],
})
export class ModalComponent {
  public config: ModalConfig;
}
