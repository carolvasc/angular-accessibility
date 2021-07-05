import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'angular-accessibility';
  public form: FormGroup;
  public modalRef: ModalRef;

  constructor(formBuilder: FormBuilder, private modalService: ModalService) {
    this.form = formBuilder.group({
      yesNoAnswer: [{ value: 'yes', disabled: false }],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });

    this.modalRef.close();
  }
}
