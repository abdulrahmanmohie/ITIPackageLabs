import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  myCards:string[]=["WEB DESIGN","MOBILE DESIGN","LOGO DESIGN","WEB APPLICATION DEVELOPMENT","MOBILE APPLICATION DEVELOPMENT","PWA DEVELOPMENT"]

  constructor() { }

  ngOnInit(): void {
  }

}
