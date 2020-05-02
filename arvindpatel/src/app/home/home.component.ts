import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor() { 
		localStorage.setItem("authorization", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVkQXQiOjE1ODYyNjMyNTQsInVzZXJJZCI6IlROQzEwMDAwMDAwMiJ9.MD553LqWEmQwh0J-T2ZrSvDGqlv9LcHfReggxcd4A1I");
	    localStorage.setItem("name", "Dhana");
	    localStorage.setItem("userid", "TNC100000002");
	}

	ngOnInit() {
	}

}
