import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
	categoryList: any;

	constructor(private webservice: DataService) { 
		/*
		this.webservice.getUsers().subscribe(responce => {
			this.categoryList = responce;
			//console.log(this.categoryList.response.categoryList);
		  }
		);
		*/
	}

	ngOnInit() {
	}
}

