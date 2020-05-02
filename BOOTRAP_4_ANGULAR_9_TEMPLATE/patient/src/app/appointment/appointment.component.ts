import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
	selector: 'app-appointment',
	templateUrl: './appointment.component.html',
	styleUrls: ['./appointment.component.scss'],
	providers: [DatePipe]
})
export class AppointmentComponent implements OnInit {
	appointmentTime: string;
	todayDate: string;
	selectedDate: string;
	myDate = new Date();
	doctorId: any;
	is_doctor_select: boolean;
	petId:any;
	description:any;
  	constructor(private datePipe: DatePipe, private router: Router) { 
		this.appointmentTime = "None";
        this.doctorId = 0;
		this.todayDate =  this.datePipe.transform(this.myDate, 'yyyy-MM-dd'); 
		this.selectedDate = this.todayDate;
		this.is_doctor_select = false;
		this.petId = 12345;
		this.description = "";
  	}

  	setTime(time: string){
		if(this.doctorId == 0){
			alert("Please Select Doctor");
			
			this.is_doctor_select = false;
		}
		this.appointmentTime = time;
	  }
	changeDate(date: string){
		this.selectedDate = date;
	}
	selectDoctor(doctor_id: any){
		this.is_doctor_select = true;
		this.doctorId = doctor_id;

	}
	setDescription(description){
		this.description = description
	}
	sendRequest(){

		let data = [];
		var obj = {description: this.description, doctorId: this.doctorId, appointmentTime: this.appointmentTime, selectedDate: this.selectedDate, petId:this.petId};

		data.push(obj);
		var old = JSON.parse(localStorage.getItem('appointment'));

		if(old!=null){
			old.forEach(element => {
				data.push(element);
			});
		}
		
		

		localStorage.setItem("appointment", JSON.stringify(data));
        this.router.navigate(['appointmentlist']);

	}

  	ngOnInit(): void {
  	}

}
