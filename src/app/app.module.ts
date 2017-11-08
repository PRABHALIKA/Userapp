import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { UsersService } from './users.service';
import { Userdetail} from './Userdetail';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [UsersService]
  
})
export class AppModule { }
