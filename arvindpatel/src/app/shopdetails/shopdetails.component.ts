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
	itemList:any;
	catList:any;
	subCatList:any;
	activeList:any;
	activePanel:boolean;
	numberItem: number;
	mySlideImages = [''];
	myCarouselImages =['../assets/images/image1.jpg','../assets/images/image2.jpeg','../assets/images/image3.jpg'];
   
  mySlideOptions={items:4,loop:false, margin:10,autoplay:true,autoplayTimeout:1000000,autoplayHoverPause:true};
  myCarouselOptions={items: 3, dots: true, nav: true}
	
  	constructor() { 
		sessionStorage.clear();
		this.cartList = [];
		this.numberItem = 7;
		this.activePanel = true;
		this.productList = [];
		this.countProduct = 0;
		this.subCatList = [
			{
			  "id": "1",
			  "name": "Sub list 7",
			  "price": "5",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			},
			{
			  "id": "2",
			  "name": "Sub List 5",
			  "price": "7",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			}
		  ]; 
		this.catList = [
			{
			  "id": "1",
			  "name": "Category 1",
			  "price": "5",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			},
			{
			  "id": "2",
			  "name": "Category 2",
			  "price": "7",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			},
			{
			  "id": "3",
			  "name": "Category 3",
			  "price": "8",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			},
			{
			  "id": "10",
			  "name": "Category 4",
			  "price": "8",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			},
			  {
			  "id": "10",
			  "name": "Category 5",
			  "price": "8",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			},
			  {
			  "id": "10",
			  "name": "Category 6",
			  "price": "8",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			},
			  {
			  "id": "10",
			  "name": "Category 7",
			  "price": "8",
			  "createdAt": "2020-04-21 06:39:55",
			  "updatedAt": "2020-04-21 06:39:55"
			}
		  ];
        
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
		  };


		  console.log(this.itemList);
	  }
	  callSubcate(){
		this.activePanel = false;
		this.numberItem = 2;
	  }
	  maincat(){
		this.activePanel = true;
		this.numberItem = 7;
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
