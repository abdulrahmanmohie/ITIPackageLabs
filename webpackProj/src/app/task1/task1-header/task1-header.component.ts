import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1-header',
  templateUrl: './task1-header.component.html',
  styleUrls: ['./task1-header.component.css']
})
export class Task1HeaderComponent implements OnInit {
  firstName:string ='Abdelrahman'
  lastName:string ='Mohyeldin'
  jobTitle:string = 'MEARNstack Web Developer'

  constructor() { }

  ngOnInit(): void {
  }

}
