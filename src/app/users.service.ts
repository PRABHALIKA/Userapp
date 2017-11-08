import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {


    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }
    
    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users/')
            .map(res => res.json());
    }

    getById(id : any){
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
            .map(res => res.json());
    }

    deleteUser(id: any){
        return this.http.delete('https://jsonplaceholder.typicode.com/users/'+ id)
            .map(res => res.json());
    }

    adduser(newUser){
        console.log(newUser);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://jsonplaceholder.typicode.com/users/', JSON.stringify(newUser), {headers: headers})
            .map(res => res.json());
    }

    updateuser(user){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('https://jsonplaceholder.typicode.com/users/' + user._id, JSON.stringify(user), {headers: headers})
            .map(res => res.json());
    }
    

}
 