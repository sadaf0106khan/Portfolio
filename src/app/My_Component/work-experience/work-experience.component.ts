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
      title: 'Software Developer Intern', subtitle: 'Croptr Technologies Pvt. Ltd', content: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eius cum exercitationem tempore id dicta aliquid dolorum assumenda nihil! Dolorem fugit aliquid repudiandae delectus ipsam?',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eius cum exercitationem tempore id dicta aliquid dolorum assumenda nihil! Dolorem fugit aliquid repudiandae delectus ipsam?'
      ]
    },
    {
      id: 1,
      title: 'Software Developer Intern', subtitle: 'GoodEd Technologies Pvt. Ltd', content: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eius cum exercitationem tempore id dicta aliquid dolorum assumenda nihil! Dolorem fugit aliquid repudiandae delectus ipsam?',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eius cum exercitationem tempore id dicta aliquid dolorum assumenda nihil! Dolorem fugit aliquid repudiandae delectus ipsam?'
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
