import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UsersService } from '../users.service';
import { Userdetail} from '../Userdetail';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userid: any;
  username: string;
  userdetail: Userdetail[];
  public addnewuser = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userservice: UsersService) {}
  
  ngOnInit(){

    this.route.params
      .switchMap((params: Params) => this.userservice.getById(params['id']))
      .subscribe(results => { this.userdetail = results;
    });
  }

  addUser(event){
    event.preventDefault();
    //console.log(this.username);
    var newUser = {
        username: this.username,
        isdone: false
    }
    
    this.userservice.adduser(newUser)
        .subscribe(res => {
          this.userdetail.push(res);
            this.username = '';
    });
  }

  newuser(){
    //console.log(this.addnewuser);
    this.addnewuser = true;
  }

}
    
