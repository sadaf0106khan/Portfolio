import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      id: 0,
      title: 'Hospi Project',
      tech: ['Angular 13', '.Net Core', 'Sql Server', 'HTML5', 'CSS3', 'Bootstrap5'],
      content: [
        
      'Implemented an Admin Dashboard for Hospital in which user can perform CURD operations on appointments, patients, payments , departments and doctors ',
       'Users have to create own profile on website before performing CURD operations and they can see the all records and take decisions.',
       'Used Entity Framework Core which is ORM that maps the objects of C# into SQL tables.'
      ],
      images: [
        'assets/medic-dashboard.png',
        'assets/medic-appointment.png',
        'assets/medic-department.png',
        'assets/medic-doctor.png'
      ],
      link: 'https://sadaf0106khan.github.io/Medic-App',
      github: 'https://github.com/sadaf0106khan/Medic-App'
    },
    {
      id: 1,
      title: 'Portfolio',
      tech: ['Angular 13', 'HTML5', 'CSS3', 'Bootstrap5'],
      content: [
        'Created a personal portfolio using Angular 13 Bootstrap 5 which is responsive and interactive',
        'It has about me projects work experience skills and contact me section.',
        'In contact me section I have used formspree to send users messages to me on email.'
      ],
      images: [
        'assets/portfolio1.png',
        'assets/portfolio2.png',
        'assets/portfolio3.png',
        'assets/portfolio4.png'
      ],
      link: 'https://sadaf0106khan.github.io/Portfolio',
      github: 'https://github.com/sadaf0106khan/Portfolio'
    }
  ]
  selected = 0
  selectProject(id:number){
    this.selected = id
  }
  constructor() { }

  ngOnInit(): void {
  }

}
