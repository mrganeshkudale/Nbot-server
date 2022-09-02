import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleBasedService {

  displayTab:any;
  constructor() { }
  ngOnInit() {
    this.displayTab = sessionStorage.getItem("roleId");
    console.log(this.displayTab);
    this.displayreader();
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
}
