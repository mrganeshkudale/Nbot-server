import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/registration/user';
import { Sensor } from '../Sensor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  rootUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }


  userAuthentication(username:string, password:string) {
    var data = "username=" + username + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }
   

}
