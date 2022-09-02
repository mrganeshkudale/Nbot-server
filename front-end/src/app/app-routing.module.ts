import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LoginpageComponent } from './components/user/loginpage/loginpage.component';

import { RegistrationComponent } from './components/user/registration/registration.component';
import { APIComponent } from './components/api/api.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { AddsensorComponent } from './components/sensor/addsensor/addsensor.component';
import { UpdatesensorComponent } from './components/sensor/updatesensor/updatesensor.component';
import { DeletesensorComponent } from './components/sensor/deletesensor/deletesensor.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';

import { AddComponent } from './components/organization/add/add.component';
import { DeleteComponent } from './components/organization/delete/delete.component';
import { SearchComponent } from './components/organization/search/search.component';
import { OrganizationComponent } from './components/organization/organization.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'aboutus',component:AboutusComponent, canActivate: [AuthGuard]
  },
  {
    path:'login',component:LoginpageComponent
  },
  {
    path:'api',component:APIComponent, canActivate: [AuthGuard]
  },
  {
    path:'register',component:RegistrationComponent
  },
  {
    path:'api/sensor',component:SensorComponent, canActivate: [AuthGuard]
  },
  {
    path:'api/sensor/add',component:AddsensorComponent, canActivate: [AuthGuard]
  },
  {
    path:'api/sensor/update',component:UpdatesensorComponent, canActivate: [AuthGuard]
  },
  {
    path:'api/sensor/delete',component:DeletesensorComponent, canActivate: [AuthGuard]
  },
  {
    path:'api/organization/add',component:AddComponent, canActivate: [AuthGuard]
  
  },
  {
    path:'api/organization/delete',component:DeleteComponent, canActivate: [AuthGuard]
   
  },
  {
    path:'api/organization/search',component:SearchComponent, canActivate: [AuthGuard]
  },
  {
    path:'api/organization',component:OrganizationComponent, canActivate: [AuthGuard]
  },
  {
    path:'user',component: UserComponent
  },
  {
    path: 'register', component: UserComponent,
    children: [{ path: '', component: RegistrationComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: LoginpageComponent }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
