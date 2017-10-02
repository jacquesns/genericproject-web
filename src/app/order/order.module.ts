import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { OrderListComponent } from './order-list/order-list.component';
import {RouterModule} from '@angular/router';
import {OrderService} from './order.service';
import { HttpModule, Http, RequestOptions, XHRBackend } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild([{path:'order/list', component: OrderListComponent}])
  ],
  declarations: [OrderListComponent],
  providers:[OrderService]
})
export class OrderModule { }
