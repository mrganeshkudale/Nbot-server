import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { license } from '../../Models/license';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  updateLicense(license: license) {
    return this.http.put(`http://localhost:8082/License/${license.licenseId}`,license,{responseType:'text' as 'json'});
  }

  message:boolean = false;
  constructor(private http:HttpClient) { }

  public doAddLicense(license:license)
  {
    
    return this.http.post<boolean>("http://localhost:8082/License",license,{responseType:'text' as 'json'}).subscribe((res)=>{this.message
    if(this.message !== true)
    {
      alert("The License is added Successfully...");
    }
    else
    {
      alert("The Error Occurred ! Please try after some time");
    }
    });
    
    
  }
}
