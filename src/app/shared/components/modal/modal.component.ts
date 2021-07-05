import { Component, HostBinding } from '@angular/core';
import { fade } from '../../animations/fade-in';
import { ModalConfig } from './interfaces/modal-config.model';
import { ModalRef } from './models/modal-ref.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.less'],
  animations: [fade],
})
export class ModalComponent {
  @HostBinding('@fade') fade = true;
  public config: ModalConfig;
  public modalRef: ModalRef;
}
