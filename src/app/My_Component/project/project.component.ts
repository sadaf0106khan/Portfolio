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
      link: 'https://sadaf0106khan.github.io/Medic-App'
    },
    {
      id: 1,
      title: 'Blog Project ',
      content: [
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eius cum exercitationem tempore id dicta aliquid dolorum assumenda nihil! Dolorem fugit aliquid repudiandae delectus ipsam? ',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eius cum exercitationem tempore id dicta aliquid dolorum assumenda nihil! Dolorem fugit aliquid repudiandae delectus ipsam? '
      ],
      images: [
        'assets/medic-dashboard.png',
        'assets/medic-appointment.png',
        'assets/medic-department.png',
        'assets/medic-doctor.png'
      ],
      link: 'https://sadaf0106khan.github.io/Medic-App'
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
