import { Component, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'vg-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  modalRef: BsModalRef;
  @Input() label: string;
  public onClose: Subject<boolean>;
  constructor(private modalService: BsModalService, private _bsModalRef: BsModalRef) {}
 
  public ngOnInit(): void {
    this.onClose = new Subject();
}

public onConfirm(): void {
    this.onClose.next(true);
    this._bsModalRef.hide();
}

public onCancel(): void {
    this.onClose.next(false);
    this._bsModalRef.hide();
}
}
