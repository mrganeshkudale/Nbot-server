import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginpageComponent } from './components/user/loginpage/loginpage.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationService } from './components/services/user-registration.service';
import { APIComponent } from './components/api/api.component';
import { SensorComponent } from './components/sensor/sensor.component';
import {MatNativeDateModule} from '@angular/material/core';
import { AddsensorComponent } from './components/sensor/addsensor/addsensor.component';
import { UpdatesensorComponent } from './components/sensor/updatesensor/updatesensor.component';
import { DeletesensorComponent } from './components/sensor/deletesensor/deletesensor.component';
import { SearchsensorComponent } from './components/sensor/searchsensor/searchsensor.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './components/user/user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrganizationComponent } from './components/organization/organization.component';
import { AddComponent } from './components/organization/add/add.component';
import { SearchComponent } from './components/organization/search/search.component';
import { DeleteComponent } from './components/organization/delete/delete.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import {MatMenuModule} from '@angular/material/menu';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { SearchUserComponent } from './components/user/search-user/search-user.component';
import { LicenseComponent } from './components/license/license.component';
import { AddLicenseComponent } from './components/license/add-license/add-license.component';
import { DeleteLicenseComponent } from './components/license/delete-license/delete-license.component';
import { SearchLicenseComponent } from './components/license/search-license/search-license.component';
import { UpdateLicenseComponent } from './components/license/update-license/update-license.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule} from '@ngrx/store';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutusComponent,
    LoginpageComponent,
    RegistrationComponent,
    APIComponent,
    SensorComponent,
    AddsensorComponent,
    UpdatesensorComponent,
    DeletesensorComponent,
    SearchsensorComponent,
    UserComponent,
    OrganizationComponent,
    AddComponent,
    SearchComponent,
    DeleteComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    SearchUserComponent,
    LicenseComponent,
    AddLicenseComponent,
    DeleteLicenseComponent,
    SearchLicenseComponent,
    UpdateLicenseComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatTabsModule,
    StoreModule,
    EffectsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent],
  exports:[ AppComponent,
    
    FooterComponent,
    MatMenuModule,
    MatIconModule,
    AboutusComponent,
    
    LoginpageComponent,
    RegistrationComponent,
    APIComponent,
    SensorComponent]
})
export class AppModule { }
