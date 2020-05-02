import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopcategory',
  templateUrl: './shopcategory.component.html',
  styleUrls: ['./shopcategory.component.scss']
})
export class ShopcategoryComponent implements OnInit {
	categoryList:any;
	searchText: string;
  constructor(private webservice: DataService) { 
    this.getData();
  }
	getData(){
		this.webservice.getCategory().subscribe(data => {
			this.categoryList = data;
			console.log(this.categoryList);
		  }
		);

	}
  ngOnInit() {
  }

}
