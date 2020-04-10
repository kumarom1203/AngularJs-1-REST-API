import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  productList: any;
	
	countProduct: any;
	constructor() { 
		this.getProductList();
		

	}
	
	getProductList(){
		this.productList = JSON.parse(sessionStorage.getItem('product_order'));
    this.countProduct = this.productList.length;
    sessionStorage.clear();
    
	}

  ngOnInit() {
  }

}
