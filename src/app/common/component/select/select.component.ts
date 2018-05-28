import { Component, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'vg-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() label: string;
  @Input() data : any[];
  @Input() value: string;
  @Input() name: string;
  @Input() id: string;
  @Input() model: any;
  @Output() onModelChange = new EventEmitter<any>();
  @Input() placeholder: string;
  @Input() paramAppend: string;
  @Input() disabled: string;
  @Input() defaultvalue: string;
  @Input() showlabel: boolean;

  constructor() { }  

  dataChanged(newObj) {
    this.onModelChange.emit(newObj);    //do something with new value
  }
  
}
