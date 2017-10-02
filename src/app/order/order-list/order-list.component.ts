import { Component, OnInit } from '@angular/core';
import {OrderService, Order} from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
	private orders: Order[];
  constructor(private orderService: OrderService) {
  	this.list()
   }

  ngOnInit() {
  }


    list(){
      this.orderService.list().subscribe(response=>{
      this.orders = response.json();
    },error=>{
      console.log(error);
    });
  }


}
