import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';
import { Userdetail} from '../Userdetail';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UsersService]
})
export class UserlistComponent implements OnInit {

  users: Userdetail[];
  selectedUserId: number = null;


  constructor(private userservice: UsersService) { }

  ngOnInit() {

  	this.userservice.getUsers()
            .subscribe(users => {
              this.users = users;
            });
  }

  onSelect(user) {
    this.selectedUserId = user.id;
  }

  deleteTask(i : any){
    //console.log(i);
    var users = this.users;
    this.userservice.deleteUser(i)
      .subscribe(result => { users.splice(i-1,1);
     })

    //console.log(users.length);

  }

  updateuser(user){
    var _user = {
      _id:user.id,
      title: user.title,
      isDone: !user.isDone
    };
        
    this.userservice.updateuser(_user).subscribe(data => {
        user.isDone = !user.isDone;
    });
  }
}