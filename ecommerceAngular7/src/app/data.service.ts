import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Import it up here
//import { Headers } from '@angular/http';  // Import it up here
@Injectable({
	providedIn: 'root'
})
export class DataService {
	authorization:any;
	userid: any;
	name: any;
	httpOptions: any;
	baseURL:any;
	constructor(private http: HttpClient) { 
		this.baseURL = 'https://dev.tutees.net:8080/ShopClientApp/api/';
    	this.authorization = localStorage.getItem("authorization");
    	this.name = localStorage.getItem("name");
		this.userid = localStorage.getItem("userid");
		this.httpOptions = {
			headers: new HttpHeaders({
			   'Authorization': this.authorization  
			})
		  }
	  }

  	getUsers() {
    	return this.http.get(this.baseURL+'masterproduct/getcategory', this.httpOptions);
  	}

}
