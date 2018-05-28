import { Component, Input} from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales } from 'ngx-bootstrap/chronos';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'vg-input-date-time',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent{  
  @Input() label: string;
  @Input() value: string;
  @Input() model: string;
  @Input() placeHolder: () => string;
  locale = 'en';
  locales = listLocales();  
 
  constructor(private _localeService: BsLocaleService) {
  }

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  myForm = new FormGroup({
    myDateYMD: new FormControl(new Date()),
    myDateFull: new FormControl(new Date()),
    myDateMDY: new FormControl(new Date())
  });
 
  applyLocale(pop:any) {
    this._localeService.use(this.locale);
    pop.hide();
    pop.show();
  }
}
