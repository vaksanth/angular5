import { Component, TemplateRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Modal';
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService, translate: TranslateService) {
        translate.setDefaultLang('en'); 
        translate.use('en');
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  parentMessage = "message from parent";  
}
