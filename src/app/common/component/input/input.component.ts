import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() childMessage: string;
  @Input() label: string;
  @Input() name: string;
  @Input() id: string;
  @Input() showlabel: string;
  @Output() model: EventEmitter<any> = new EventEmitter();
  @Input() placeholder: string;
  @Input() type: string;
  constructor() { }
  ngOnInit() {
  }

  dataChanged(newObj) {
    this.model.emit(newObj)
  }

}
