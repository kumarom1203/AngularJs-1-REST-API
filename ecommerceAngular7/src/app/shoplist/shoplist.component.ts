import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
	selector: 'app-shoplist',
  	templateUrl: './shoplist.component.html',
  	styleUrls: ['./shoplist.component.scss']
})
export class ShoplistComponent implements OnInit {
	constructor(private webservice: DataService) { 
		
	}

  ngOnInit() {
  }

}
