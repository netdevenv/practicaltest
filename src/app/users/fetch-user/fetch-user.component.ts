import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './fetch-user/user-service.service';
@Component({
  selector: 'app-fetch-user',
  templateUrl: './fetch-user.component.html',
  styleUrls: ['./fetch-user.component.scss']
})
export class FetchUserComponent implements OnInit {

  constructor(private userService : UserServiceService) { }
  users;
  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
