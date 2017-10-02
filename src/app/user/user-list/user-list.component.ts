import { Component, OnInit } from '@angular/core';
import {UserService, User} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})

export class UserListComponent implements OnInit {
  private users: User[];

  constructor(private userService: UserService) { 
    this.list();
  }

  ngOnInit() {

  }

  list(){
      this.userService.list().subscribe(response=>{
      this.users = response.json();
    },error=>{
      console.log(error);
    });
  }

  delete(user: any){

    if(confirm("are you sure you want to delete user "+ user.fullName)){
      this.userService.delete(user.id).subscribe(response=>{
        this.list();
      }, error=>{
        console.log("error deleting user" + user.fullName);
      })
    }
    return false;
  }
}


