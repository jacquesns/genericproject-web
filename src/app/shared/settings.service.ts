import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  baseUrl : string = "http://localhost:8080/";
  constructor() { }

}
