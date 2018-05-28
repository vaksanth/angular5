import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vg-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  @Input() label: string;
  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Input() model: string;
  @Input() placeholder: string;
  @Output() onModelChange = new EventEmitter<any>();
  weightUnit: string ='kgs'; 
  volumeUnit: string ='cbm'; 
  constructor() { }

  ngOnInit() {
  }

  isDimsChanged(obj){
    this.weightUnit=obj;
  }
  isVolumeChanged(obj){
    this.volumeUnit=obj;
  }

  dataChanged(newObj) {
    this.onModelChange.emit(newObj);    //do something with new value
  }
}
