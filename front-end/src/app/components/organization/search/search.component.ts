import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { searchorganization } from '../../Models/searchorganization';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  
  orgs:  searchorganization[] = [];
  orgId:any;
  totalLength:any;
  page:number=1;
  constructor(private http:HttpClient) { }
  result:any;
  ngOnInit(): void {
    this.getAllOrganizations();
    
  }

  public getAllOrganizations()
  {
    let url="http://localhost:8084/organisation";
    this.http.get<searchorganization[]>(url).subscribe(res => {this.orgs = res; this.result = res;this.totalLength = this.result.length;});
    
  }
 
  Search()
  {
    if(this.orgId == "")
    {
      this.ngOnInit();

    }
    else 
    {
      this.orgs = this.orgs.filter(res => {
        return res.orgId.toLowerCase().match(this.orgId.toLowerCase());
      })
    }
  }

}
