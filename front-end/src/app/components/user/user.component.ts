import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayTab:any;
  constructor() { }

  ngOnInit(): void {
    this.displayTab = sessionStorage.getItem("roleId");
    console.log(this.displayTab);
    
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

