import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
actualDate: Date;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.actualDate=new Date();
  }
  goToContact(){
    this.router.navigate(['contact']);


  }
}
