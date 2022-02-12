import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills = [
    { name: 'Angular', image: 'assets/angular.png' },
    { name: 'ASP.NET Core', image: 'assets/asp.netcore.jpeg' },
    { name: 'Microsoft Sql Server', image: 'assets/mssql-server.png' },
    { name: 'HTML 5', image: 'assets/html.webp' },
    { name: 'CSS 3', image: 'assets/css.png' },
    { name: 'JavaScript', image: 'assets/js.png' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
