import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle: string = 'PATIENT APPLICATION';
  userName: string = 'User Name';
  constructor() { 
    localStorage.setItem('p_user_id', '1');
    localStorage.setItem('p_name', 'Arvind Patel');
  }

  ngOnInit(): void {
  }

}
