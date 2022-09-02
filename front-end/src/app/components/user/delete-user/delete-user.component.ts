import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from '../../Models/user';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string = "";
  user: user = new user("","","","","","","");
  message:any;
  baseURL="http://localhost:8081/User"
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  public deleteNow()
  {
    let response = this.doDeletion(this.user);
    response.subscribe((data)=>this.message=data);
    if(this.message = true)
    {
      alert(this.message);
      this.ngOnInit();  
    }
    
  }
  doDeletion(user: user) {
    return this.http.delete(`${this.baseURL}/${user.id}`);
  }

}
