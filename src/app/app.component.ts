import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalRef } from './shared/components/modal/models/modal-ref.model';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'angular-accessibility';
  public form: FormGroup;
  public modalForm: FormGroup;
  public modalRef: ModalRef;
  public info = false;

  constructor(formBuilder: FormBuilder, private modalService: ModalService) {
    this.form = formBuilder.group({
      yesNoAnswer: [{ value: '', disabled: false }],
    });

    this.modalForm = formBuilder.group({
      firstName: ['Carol', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      info: [false],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }

  public submitModal(): void {
    if (this.modalForm.valid) {
      console.log(this.modalForm.value);
      this.modalRef.close();
    }
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'Informações do usuário',
    });
  }
}
