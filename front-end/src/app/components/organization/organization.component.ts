import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sensor } from '../Models/Sensor';
import { SensorComponent } from '../sensor/sensor.component';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {


  baseURL="http://localhost:8083/Sensor";
  sensor: Sensor= new Sensor("","","","",false,"","");
  message: any;
  displayTab:any;
  constructor(private http:HttpClient) { }

 
  ngOnInit(): void {
    this.displayTab = sessionStorage.getItem("roleId");
    console.log(this.displayTab);
    
  }
  
  public displayreader()
  {
    if(this.displayTab !== "3")
    {
      return true;
    }
    else
    {

      return false;
    }
  }
  
  public displayUpdator()
  {
    if(this.displayTab !== "3" && this.displayTab !== "4")
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  id:any = "add";
  public tabChange(ids: any)
  {
    this.id=ids;
  }
  
  public searchNow()
  {
    
    let response = this.doUpdatation(this.sensor);
    response.subscribe((data)=>this.message=data);
  }
  public doUpdatation(sensor:Sensor)
  {
    
    return this.http.put(`${this.baseURL}/${sensor.id}`,sensor,{responseType:'text' as 'json'});
    
  }

}
