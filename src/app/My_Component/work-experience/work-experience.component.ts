import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experiences = [
    {
      id: 0,
      title: 'Software Developer', subtitle: 'GoodEd Technologies Pvt. Ltd', content: [
      'Working extensively in development with creativity and implementing the ways to improve educational value of the product with technical solutions.',
      '1. Increased the traffic in neetprep.com by 25.52% by adding Learning vedios in the pages.',
      '2. Implemented redirection of show answer and courses links to take trial courses so that more users take trial courses.',
      
      
      ]
    },
    {
      id: 1,
      title: 'Full Stack Developer Intern', subtitle: 'GoodEd Technologies Pvt. Ltd', content: [
        
        'I worked in backend and frontend technologies with Angular, ASP.Net Core , Entity Framework Core and SQL Server in my project . Implemented and launched new features. Eagerly learnt new technologies and methodologies.',
        ' Implemented the faster loading of target and Dpps pages by adding pagination.'
      
      ]
    },
    {
      id: 2,
      title: 'Backend Developer Intern', subtitle: 'Croptr Technologies Pvt. Ltd', content: [
     
      'I worked in backend technologies with .Net core ,SQL Server, Web API , C# etc'
      ]
    }
  ]
  selected = 0
  selectExp(id:number){
    this.selected = id
  }
  constructor() { }

  ngOnInit(): void {
  }

}
