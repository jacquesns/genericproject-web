import { Component, Input, Output, EventEmitter,ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from  "@angular/router";
import { User, UserService } from '../user.service';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
showLoading : boolean =false
userCreateForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  	this.userCreateForm = this.fb.group({ 
            name: ['', Validators.required],
            age: ['', Validators.required],
            salary: ['', Validators.required] }); 

    if(this.route.snapshot.params.id)
      this.get();
  }

  get(){
      this.userService.get(this.route.snapshot.params["id"]).subscribe(response=>{
      var user = response.json();
      this.userCreateForm.patchValue({name:user.name, age: user.age, salary:user.salary, id:user.id})
    },error=>{
      console.log(error);
    });
  }

  onSubmitUser(){
  	this.showLoading = true;

    this.userService.createOrUpdate(this.userCreateForm.value).subscribe(response=>{
      this.showLoading = false;
      this.router.navigate(['/user/list']);
    },error=>{
      this.showLoading = false;
    })
  }
}
