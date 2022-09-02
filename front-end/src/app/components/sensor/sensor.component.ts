
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Sensor } from '../Models/Sensor';
import { SearchsensorComponent } from './searchsensor/searchsensor.component';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  baseURL="http://localhost:8083/Sensor";
  sensor: Sensor= new Sensor("","","","",false,"","");
  message: any;
  displayTab:any;
  result:any;
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
  
 
  public searchNow()
  {
    
    let response = this.doSearch(this.sensor);
    response.subscribe((data)=>this.message=data);
  }
  public doSearch(sensor:Sensor)
  {
    
    return this.http.put(`${this.baseURL}/${sensor.id}`,sensor,{responseType:'text' as 'json'});
    
  }


}
