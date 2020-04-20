import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopdetailstwo',
  templateUrl: './shopdetailstwo.component.html',
  styleUrls: ['./shopdetailstwo.component.scss']
})
export class ShopdetailstwoComponent implements OnInit {

  cartList:any;
	productList:any;
	countProduct:number;
	itemList:any;
	
  	constructor() { 
		
		sessionStorage.clear();
		this.cartList = [];
		this.productList = [];
		this.countProduct = 0;
    	this.itemList = {
			"shop_name": "My Test Store Shop",
			"product": [
			  {
				"product_name": "My Lovely Product AA",
				"qty": 1,
				"available_unit": [
				  "100 G",
				  "200 G",
				  "500 G",
				  "1 KG"
				],
				"product_image": "http://34.87.9.55/assets/icons/rice-packaging.png"
			  },
			  {
				"product_name": "My Lovely Product BB",
				"qty": 1,
				"available_unit": [
				  "100 ML",
				  "200 ML",
				  "500 ML",
				  "1 L",
				  "5 L"
				],
				"product_image": "http://34.87.9.55/assets/icons/rice-packaging.png"
			  },
			  {
				"product_name": "My Lovely Product CC",
				"qty": 1,
				"available_unit": [
				  "100 G",
				  "200 G",
				  "500 G",
				  "1 KG"
				],
				"product_image": "http://34.87.9.55/assets/icons/rice-packaging.png"
			  }
			]
		  }

		  console.log(this.itemList);
	  }
	  
	  updateCartCount(product_id: string, operation: string){
		let product_quantity = sessionStorage.getItem('product_quantity_'+product_id);
		let new_product_quantity = 0;
		if(operation == 'minus'){
			new_product_quantity = parseInt(product_quantity) - 1;
			if(new_product_quantity<0){
				new_product_quantity = 0;
			}
		}else{
			new_product_quantity = parseInt(product_quantity) + 1;
		}
		sessionStorage.setItem('product_quantity_'+product_id, new_product_quantity.toString());
        this.addProduct(product_id);
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
