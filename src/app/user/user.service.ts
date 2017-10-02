import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { SettingsService } from '../shared/settings.service';

export class User {
    id: string=null;
    name: string = "";
    age: number= 0;
    salary: number= 0;
}


@Injectable()
export class UserService {

  constructor(private http: Http, private settingsService: SettingsService) { }

  list() : any {
  	return this.http.get(this.settingsService.baseUrl+ 'api/users');
  }

  get(id){
  	return this.http.get(this.settingsService.baseUrl+ 'api/users/'+id);
  }

  delete(id){
  	return this.http.delete(this.settingsService.baseUrl+ 'api/users/'+id);	
  }

  createOrUpdate(user: any){
    if(user && user.id){
      return this.update(user);
    }
    
    return this.create(user);
  }


  create(user: any){
    console.log(user);
  	return this.http.post(this.settingsService.baseUrl+ 'api/users', user);	
  }

  update(user: User){
  	return this.http.patch(this.settingsService.baseUrl+ 'api/users/' + user.id, user);	
  }

}
