import { Component, Input, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-left-profil',
  templateUrl: './left-profil.component.html',
  styleUrls: ['./left-profil.component.css']
})
export class LeftProfilComponent implements OnInit {
  user:User = <User>{}
  constructor(private api: UserService) { }

  ngOnInit(): void {
    this.api.getUser(0).subscribe(user =>this.user = user);
  }

}
