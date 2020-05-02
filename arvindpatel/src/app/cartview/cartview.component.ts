import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cartview',
	templateUrl: './cartview.component.html',
	styleUrls: ['./cartview.component.scss']
})
export class CartviewComponent implements OnInit {
	productList: any;
	updatedProductList: any;
	countProduct: any;
	constructor() { 
		this.getProductList();
		this.updatedProductList = [];

	}
	
	getProductList(){
		this.productList = JSON.parse(sessionStorage.getItem('product_order'));
		this.countProduct = this.productList.length;
	}

	updateCartCount(product_id: string, operation: string, product_quantity = 0){
		this.updatedProductList = [];
		this.productList.forEach(element => {
			if(element.product_id == product_id){
				if(operation == 'minus'){
					product_quantity = parseInt(element.product_quantity) - 1;
					if(product_quantity<0){
						product_quantity = 0;
					}
				}else{
					product_quantity = parseInt(element.product_quantity) + 1;
				}
				
				let product_quantity_new = product_quantity.toString();
				let obj = {product_id: product_id, product_unit: element.product_unit, product_quantity:product_quantity_new, product_name:element.product_name};
				this.updatedProductList.push(obj);
			}else{
				this.updatedProductList.push(element);
			}
		});
		sessionStorage.setItem('product_order', JSON.stringify(this.updatedProductList));
		this.getProductList();
	}
	increaseCount(product_id: string){
		alert(product_id);
	}
	ngOnInit() {
	}

}
