import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../components/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authenticationService:AuthenticationService, private router:Router)
  {

  }
  
  
  canActivate() {
    
      if(!this.authenticationService.isSuccess)
      {
        this.router.navigate(['']);
        
      }
      
      return this.authenticationService.isSuccess;
  }
  
}
