import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { SettingsService } from '../shared/settings.service';


export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}


@Injectable()
export class ProductService {

   constructor(private http: Http, private settingsService: SettingsService) { }

  list() : any {
  	return this.http.get(this.settingsService.baseUrl+ 'api/products/');
  }

  get(id){
  	return this.http.get(this.settingsService.baseUrl+ 'api/products/'+id);
  }

  delete(id){
  	return this.http.delete(this.settingsService.baseUrl+ 'api/products/'+id);	
  }

  createOrUpdate(product: Product){
    if(product.id){
      return this.update(product);
    }

    return this.create(product);
  }

  create(product: Product){
  	return this.http.post(this.settingsService.baseUrl+ 'api/products/', product);	
  }

  update(product: Product){
  	return this.http.patch(this.settingsService.baseUrl+ 'api/products/', product);	
  }

}
