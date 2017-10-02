import { Component, OnInit } from '@angular/core';
import {ProductService, Product} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	private products: Product[];
	
  constructor(private productService: ProductService) { 
  	this.list();
  }

  ngOnInit() {
  }

  list(){
      this.productService.list().subscribe(response=>{
      this.products = response.json();
    },error=>{
      console.log(error);
    });
  }

  delete(product: any){

    if(confirm("are you sure you want to delete product "+ product.name)){
      this.productService.delete(product.id).subscribe(response=>{
        this.list();
      }, error=>{
        console.log("error deleting product" + product.name);
      })
    }
    return false;
  }

}
