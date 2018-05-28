// https://www.npmjs.com/package/ngx-typeahead
// npm install ngx-typeahead@0.0.22-3 --save-dev
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { RestUrlService } from '../../../common/service/rest-url.service';
import { Http } from '@angular/http';

@Component({
  selector: 'vg-auto-complete',
  templateUrl: './auto-complete.component.html'
})
export class AutoCompleteComponent {
  taQueryParam: string;
  result: any;
  _cache: any;
  _prevContext: any;
  @Input() label: string;
  @Input() id: string;
  @Input() value: string;
  @Input() model: string;
  @Input() placeholder: string;
  @Input() dataList: any;
  @Input() disabled: boolean;
  @Input() url: string;
  @Input() api: string;
  @Input() params: string;
  @Input() query: string; 
  @Input() listcount: string; 
  @Input() countryCode: any;
  @Output() onModelChange = new EventEmitter<any>();

  asyncSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  formatter: string;

  constructor(private http: Http, private restUrlService:RestUrlService) {  
   /* this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    }).mergeMap((token: string) => this.getData(token));
    */

   this.taQueryParam = 'search';
  } 

  handleResultSelected (result) {
    this.model=result.locality+','+result.stateProvince+','+result.iso+'['+result.postCode+']';
    this.onModelChange.emit(this.model);
  }

  dataChanged(newObj) {
    this.onModelChange.emit(newObj);    //do something with new value
  }
}