import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.scss']
})
export class AppointmentlistComponent implements OnInit {
	appointmentList: any;
	constructor() { 
		this.appointmentList = JSON.parse(localStorage.getItem('appointment'));
		console.log(this.appointmentList);
  	}

  	ngOnInit(): void {

  	}

}
