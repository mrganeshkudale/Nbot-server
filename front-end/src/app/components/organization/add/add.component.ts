import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { organization } from '../../Models/organization';
import * as uuid from 'uuid';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  org: organization = new organization("","",false,"");
  message: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  sendAlert(message:any):void {
    alert(message);

  }
  public registerNow()
  {
    this.org.orgId = uuid.v4();
    let response = this.doRegistration(this.org);
    response.subscribe((data)=>{this.message=data
      console.log(this.message);
      this.sendAlert(this.message);
    });
    
  }
  public doRegistration(org:organization)
  {
    return this.http.post("http://localhost:8084/organisation",org,{responseType:'text' as 'json'});
  }
}
