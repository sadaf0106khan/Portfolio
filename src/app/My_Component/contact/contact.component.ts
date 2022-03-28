import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
  }
  alertText=''
  currentClasses={
    alert: true,
    fade: true,
    show: false,
    'alert-success': false,
    'alert-danger': false
  }
  contactForm:FormGroup = this.formBuilder.group({
    name: '', phone: '', subject: '', email: '', message: ''
  })
  removeAlert = () => {
    setTimeout(() => {
      this.currentClasses={
        alert: true,
        fade: true,
        show: false,
        'alert-success': false,
        'alert-danger': false
      }
    }, 3000);
  }
  headers:HttpHeaders = new HttpHeaders().append('Content-Type', 'application/json')
  onSubmit(){
    this.http.post('https://formspree.io/f/xgedkaag', JSON.stringify(this.contactForm.value),
      { headers: this.headers })
    .subscribe({
      next: res => {
        this.alertText = 'Your response has been successfully submitted.'
        this.currentClasses={
          alert: true,
          fade: true, 
          show: true,
          'alert-success': true,
          'alert-danger': false
        }
        this.contactForm.reset()
        this.removeAlert()
      },
      error: err => {
        this.alertText = 'There has been an error submitting your response'
        this.currentClasses={
          alert: true,
          fade: true, 
          show: true,
          'alert-danger': true,
          'alert-success': false
        }
        this.removeAlert()
      }
    })
  }
}
