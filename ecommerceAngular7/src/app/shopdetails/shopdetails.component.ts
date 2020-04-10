import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shopdetails',
	templateUrl: './shopdetails.component.html',
	styleUrls: ['./shopdetails.component.scss']
})
export class ShopdetailsComponent implements OnInit {
	cartList:any;
	productList:any;
	countProduct:number;
  	constructor() { 
		sessionStorage.clear();
		this.cartList = [];
		this.productList = [];
		this.countProduct = 0;
    	
  	}
	
	setQuantity(product_id: string, product_quantity: string){
		
		sessionStorage.setItem('product_quantity_'+product_id, product_quantity);
	}
	addProduct(product_id: string){

    	let product_unit = sessionStorage.getItem('product_unit_'+product_id);
    	let product_quantity = sessionStorage.getItem('product_quantity_'+product_id);
		let product_name = sessionStorage.getItem('product_name_'+product_id);
		if(product_unit == null || product_quantity == null || product_name == null){
			alert('Please Select Product Quantity');
			return 0;
		}
    	let obj = {product_id: product_id, product_unit: product_unit, product_quantity:product_quantity, product_name:product_name};
		this.cartList[product_id] = obj;
		this.productList = [];
	    this.cartList.forEach(element => {
			this.productList.push(element);
		});
		this.countProduct = this.productList.length;
		sessionStorage.setItem('product_order', JSON.stringify(this.productList));
  	}

	selectProduct(product_id: string, product_unit: string, product_name: string){
		sessionStorage.setItem('product_unit_'+product_id, product_unit);
		let product_quantity = sessionStorage.getItem('product_quantity_'+product_id);
		
		if(product_quantity == null){
			sessionStorage.setItem('product_quantity_'+product_id, '1');
		}
		
		sessionStorage.setItem('product_name_'+product_id, product_name);
	  }
	getCartList(){
		console.log(this.cartList);
	}



  ngOnInit() {
  }

}
