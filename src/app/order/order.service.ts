import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { SettingsService } from '../shared/settings.service';

export interface Order{
	id:number;
	status: string;
	value: number;
}

@Injectable()
export class OrderService {

   constructor(private http: Http, private settingsService: SettingsService) { }

  list() : any {
  	return this.http.get(this.settingsService.baseUrl+ 'order');
  }

  get(id){
  	return this.http.get(this.settingsService.baseUrl+ 'api/product/'+id);
  }

  delete(id){
  	return this.http.delete(this.settingsService.baseUrl+ 'api/product/'+id);	
  }



}
