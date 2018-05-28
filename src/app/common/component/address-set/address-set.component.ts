import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-set',
  templateUrl: './address-set.component.html',
  styleUrls: ['./address-set.component.css']
})
export class AddressSetComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
