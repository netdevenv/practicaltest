import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './list-user/user-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private userService : UserServiceService,private route : Router) { }
  Users;
  ngOnInit() {
    this.Users = this.userService.getUsers();
  }
  displayInfo() {
    this.route.navigate(['/fetch-user']);
  }

}
