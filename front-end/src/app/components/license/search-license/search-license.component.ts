import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { searchLicenses } from '../../Models/searchLicenses';


@Component({
  selector: 'app-search-license',
  templateUrl: './search-license.component.html',
  styleUrls: ['./search-license.component.css']
})
export class SearchLicenseComponent implements OnInit {

  
  licenses: searchLicenses[] = [];
  userId:any;
  totalLength:any;
  page:number=1;
  constructor(private http:HttpClient) { }
  result:any;
  ngOnInit(): void {
    this.getAllLicenses();
    
  }

  public getAllLicenses()
  {
    let url="http://localhost:8082/License";
    this.http.get<searchLicenses[]>(url).subscribe(res => {this.licenses = res; this.result = res;this.totalLength = this.result.length;});
    
  }
  Search()
  {
    if(this.userId == "")
    {
      this.ngOnInit();

    }
    else 
    {
      this.licenses = this.licenses.filter(res => {
        return res.licenseId.toLowerCase().match(this.userId.toLowerCase());
      })
    }
  }

}
