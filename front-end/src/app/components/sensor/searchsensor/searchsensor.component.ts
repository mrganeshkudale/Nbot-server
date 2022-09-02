import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sensor } from '../../Models/SearchSensor';

@Component({
  selector: 'app-searchsensor',
  templateUrl: './searchsensor.component.html',
  styleUrls: ['./searchsensor.component.css']
})
export class SearchsensorComponent implements OnInit {

  sensors: Sensor[]=[];
  userId:any;
  totalLength:any;
  page:number=1;
  subscription:any;
  constructor(private http:HttpClient) { }
  result:any;
  ngOnInit(): void {
    this.getAllSensors();
    
    
  }


  public getAllSensors()
  {
    let roleId = sessionStorage.getItem('roleId');
    if(roleId === "1")
    {
      console.log("In the IF part of Getting Sensors");
      this.getGlobalSensors();
    }
    else
    {
      console.log("In the  part of Getting Sensors");
      this.getSensorsByUserId();
    }
  }
  public getSensorsByUserId()
  {
    let userId:any = sessionStorage.getItem('userId');
    let url = "http://localhost:8083/Sensor/User/"+JSON.parse(userId);
    console.log("The Url To Get Sensors By UserId ",url)
    this.subscription = this.http.get<Sensor[]>(url).subscribe(res => {this.sensors = res; this.result = res;this.totalLength = this.result.length;});
  }
  public getGlobalSensors()
  {
    let url="http://localhost:8083/Sensor";
    this.subscription = this.http.get<Sensor[]>(url).subscribe(res => {this.sensors = res; this.result = res;this.totalLength = this.result.length;});
  }
  

  
  Search()
  {
    if(this.userId == "")
    {
      this.ngOnInit();

    }
    else 
    {
      this.sensors = this.sensors.filter(res => {
        return res.id.toLowerCase().match(this.userId.toLowerCase());
      });
    }
    
  }
}
