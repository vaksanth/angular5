import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './common/component/auto-complete/auto-complete.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { DatePickerComponent } from './common/component/date-picker/date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
import { TooltipComponent } from './common/component/tooltip/tooltip.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlertComponent } from './common/component/alert/alert.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalComponent } from './common/component/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InputComponent } from './common/component/input/input.component';
import { AddressSetComponent } from './common/component/address-set/address-set.component';
import { SelectComponent } from './common/component/select/select.component';
import { HeaderComponent } from './module/header/header.component';
import { FooterComponent } from './module/footer/footer.component';
import { SectionComponent } from './module/section/section.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DoorDoorComponent } from './module/door-door/door-door.component';
import { SwitchComponent } from './common/component/switch/switch.component';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { RouterModule, Routes } from '@angular/router';
import { CommonServiceService } from './common/service/common-service.service';
import { RestUrlService } from './common/service/rest-url.service';
import { DimensionsComponent } from './common/component/dimensions/dimensions.component';
import { FooterMenuComponent } from './module/footer-menu/footer-menu.component';

defineLocale('de', deLocale); 

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/language-resource/', '.json');
}

const appRoutes: Routes = [
  { path: '', component: SectionComponent },
  { path: 'door-door', component: SectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    DatePickerComponent,
    TooltipComponent,
    AlertComponent,
    ModalComponent,
    InputComponent,
    AddressSetComponent,
    SelectComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    DoorDoorComponent,
    SwitchComponent,
    DimensionsComponent,
    ModalComponent,
    FooterMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxTypeaheadModule,
    BsDatepickerModule.forRoot(),
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )    
  ],
  exports: [
    AutoCompleteComponent
 ],
  providers: [CommonServiceService, RestUrlService],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
]
})
export class AppModule { }
