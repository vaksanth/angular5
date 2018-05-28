import { Injectable } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import { RestUrlService } from './rest-url.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class CommonServiceService {
 
  constructor(private http: Http, private restUrlService:RestUrlService) { }

  getAllCountries() {
    return this.http.get(this.restUrlService.getRestUrl().getD2DCountries.url);
  }
}
