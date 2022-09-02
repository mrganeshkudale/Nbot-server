import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { searchUser } from '../../Models/searchUser';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  
  userId:any;
  totalUserLength:any;
  page:number=1;
  constructor(private http:HttpClient) { }
  result:any;
  users: searchUser[] = [];
  ngOnInit(): void {
    this.getAllUsers();
    
  }

  public getAllUsers()
  {
    let url="http://localhost:8081/User";
    this.http.get<searchUser[]>(url).subscribe(res => {this.users = res; this.result = res;this.totalUserLength = this.result.length;});
    
  }
  Search()
  {
    if(this.userId == "")
    {
      this.ngOnInit();

    }
    else 
    {
      this.users = this.users.filter(res => {
        return res.id.toLowerCase().match(this.userId.toLowerCase());
      })
    }
  }
}
