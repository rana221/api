import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import {MatDialogModule} from '@angular/material/dialog';


import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { MatNativeDateModule} from '@angular/material/core';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatInputModule,MatFormFieldModule,
    BrowserAnimationsModule,MatSliderModule,MatCardModule,MatButtonModule,MatIconModule,HttpClientModule,
    MatCheckboxModule,MatDialogModule,MatDatepickerModule,FormsModule,ReactiveFormsModule,MatNativeDateModule,
    NgxSpinnerModule
    
  ],
  providers: [MainService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
