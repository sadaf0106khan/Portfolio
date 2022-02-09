import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


 
  constructor(private viewportScrollbar: ViewportScroller) { }

  onclickScroller(eid:string) :void {
    this.viewportScrollbar.scrollToAnchor(eid);
  }

  ngOnInit(): void {
  }

}
