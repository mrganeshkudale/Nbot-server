import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {


  constructor(private router:Router)
  {

  }
  canActivate() {
   let role = localStorage.getItem("role");
   if(role == "admin")
   {
      
      return true;
   }
   alert("You are not Admin");
   this.router.navigate(['/api']);
   return false;
  }
  
}
