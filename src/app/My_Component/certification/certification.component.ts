import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certifications = [
    { 
      title: 'Became an ASP.NET Core Developer [LinkedIn Course]', 
      url: 'https://drive.google.com/file/d/1uz4Kau1RiSOHNwYmGUPfW92FEKwThA8h/view?usp=drivesdk'
    },
    {
      title: 'Microsoft SQL Server [LinkedIn Course]',
      url: 'https://www.linkedin.com/learning/certificates/1fb74a1151c418fd6a5e381bc0a94d65683c8ab46740b67cf633c6853a57d12a'
    },
    {
      title: 'Learning ECMAScript 6+ (ES6+) [LinkedIn Course]',
      url: 'https://www.linkedin.com/learning/certificates/c42a983783570b27042ace4c465ac5ad7b5b2287635029734982220d4147ba84'
    },
    {
      title: 'Angular Essential Training [LinkedIn Course]',
      url: 'http://linkedin.com/learning/certificates/ec822243c7c9c9be325ac15a87ff0c1e24a37598218c27968a85ecabfab6ab33'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
