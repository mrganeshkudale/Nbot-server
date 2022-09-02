import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sensor } from '../../Models/Sensor';

@Component({
  selector: 'app-deletesensor',
  templateUrl: './deletesensor.component.html',
  styleUrls: ['./deletesensor.component.css']
})
export class DeletesensorComponent implements OnInit {

  
  baseURL="http://localhost:8083/Sensor"
  id: string ="";
  sensor: Sensor= new Sensor("","","","",false,"","");
  message: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  sendAlert(message:any):void 
  {
    alert(message);
  }
  public deleteNow()
  {
    
    let response = this.doDeletion(this.sensor);
    response.subscribe((data)=>{this.message=data
      if(this.message == true)
      {
        this.sendAlert("The Sensor Deleted Succesfully.");
      }
      else
      {
        this.sendAlert("The Sensor is not deleted / Already Deleted");
      }
    });
    
  }
  public doDeletion(sensor:Sensor)
  {
    
    return this.http.delete(`${this.baseURL}/${sensor.id}`);
    
  }

}



