import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { TablereactComponent } from './tablereact/tablereact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import { NewapiComponent } from './newapi/newapi.component';
import { HowapiComponent } from './howapi/howapi.component';
import { New2Component } from './new2/new2.component';  

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TableComponent,
    Table2Component,
    TablereactComponent,
    NewapiComponent,
    HowapiComponent,
    New2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
