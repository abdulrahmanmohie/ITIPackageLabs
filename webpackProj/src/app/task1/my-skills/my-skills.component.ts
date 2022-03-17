import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

  mySkills:string[]=["HTML","CSS","JavaScript","React","Photoshop","Adobe XD","Node.js","WordPress"]
  constructor() { }

  ngOnInit(): void {
  }

}
