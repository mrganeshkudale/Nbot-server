import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sensor } from '../../Models/Sensor';

@Component({
  selector: 'app-updatesensor',
  templateUrl: './updatesensor.component.html',
  styleUrls: ['./updatesensor.component.css']
})
export class UpdatesensorComponent implements OnInit {

  baseURL="http://localhost:8083/Sensor"
  id: string ="";
  sensor: Sensor= new Sensor("","","","",false,"","");
  message: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  sendAlert(message:any):void {
    alert(message);
  }
  public updateNow()
  {
    
    let response = this.doUpdatation(this.sensor);
    response.subscribe((data)=>{this.message=data
    if(this.message == true)
    {
      this.sendAlert("The Sensor Updated Successfully");
    }
    else {
      this.sendAlert("Something Went Wrong");
    }
    });
    
    
  }
  public doUpdatation(sensor:Sensor)
  {
    
    return this.http.put(`${this.baseURL}/${sensor.id}`,sensor,{responseType:'text' as 'json'});
    
  }

}
