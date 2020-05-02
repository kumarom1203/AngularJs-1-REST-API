import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-shoplist',
  	templateUrl: './shoplist.component.html',
  	styleUrls: ['./shoplist.component.scss']
})
export class ShoplistComponent implements OnInit {
	distance:number;
	shopList:any;
	searchText: string;
	constructor(private webservice: DataService) { 
		this.distance = 1;
		this.getData(); 
	}

	searchByDistance(distance: number){
		this.distance = distance;
	}

	getData(){
		this.webservice.getShops().subscribe(data => {
			this.shopList = data;
			console.log(this.shopList);
		  }
		);

	}


  ngOnInit() {
  }

}
