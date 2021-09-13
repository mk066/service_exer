import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'ServiceAng';
  constructor(private userData:UserService){}

  ngOnInit(){
    
  }

  callService(){
    this.userData.getData('Hey! How are you?')
  }
}
