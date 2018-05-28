import { Injectable } from '@angular/core';
import * as data from './restUrl.json';

@Injectable()
export class RestUrlService {

  constructor() { }

  getRestUrl() {
    return (<any>data)
  }

}
