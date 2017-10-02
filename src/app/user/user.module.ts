import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path:'user/list', component: UserListComponent},
    					   {path:'user/create', component: UserCreateComponent},
    					   {path:'user/create/:id', component: UserCreateComponent}])
  ],
  declarations: [UserCreateComponent, UserListComponent],
  providers:[UserService]
})
export class UserModule { }
