import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sensor } from '../../Models/Sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  message: any;

  constructor(private http:HttpClient,private router:Router) { }

  sendAlert(message:any):void {
    alert(message);

  }
  public doAddSensor(sensor:Sensor)
  {
    
    return this.http.post<string>("http://localhost:8083/Sensor",sensor,{responseType:'text' as 'json'}).subscribe((res)=>{this.message
    if(this.message != "true")
    {
      this.sendAlert("The Sensor is added Successfully...");
    }
    else
    {
      this.sendAlert("The Error Occurred ! Please try after some time");
    }
    });
    
    
  }
}
