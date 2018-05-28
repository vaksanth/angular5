import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'vg-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() model: string;
  constructor() { }

  ngOnInit() {
  }

  @Output() result = new EventEmitter<string>();

  passValue(obj){
    this.result.emit(obj)
  }

}
