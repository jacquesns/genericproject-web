import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from  "@angular/router";
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent implements OnInit {
		showLoading : boolean =false
productCreateForm: FormGroup;

constructor(private productService: ProductService, private fb: FormBuilder,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
 		this.productCreateForm = this.fb.group({ 
            name: ['', Validators.required],
            price: ['', Validators.required],
            description: ['', Validators.required] }); 
  if(this.route.snapshot.params.id)
      this.get();
  }

  get(){
      this.productService.get(this.route.snapshot.params["id"]).subscribe(response=>{
      var product = response.json();
      this.productCreateForm.patchValue({name:product.name, price: product.price, description:product.description, id:product.id})
    },error=>{
      console.log(error);
    });
  }



onSubmitProduct(){
  this.showLoading = true;
  	this.productService.createOrUpdate(this.productCreateForm.value).subscribe(response=>{
      this.showLoading = false;
      this.router.navigate(['/product/list']);
    },error=>{
      this.showLoading = false;
    })
  }
}
