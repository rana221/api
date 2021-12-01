import { Component, OnInit } from '@angular/core';

import { MatDialog } from  '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { MainService } from '../main.service';
import {map}  from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allComplete: boolean = false;

  public students :any=[]

  constructor(private  dialogRef : MatDialog,  private route:ActivatedRoute,private _stdService: MainService,public rt:Router,private spinner: NgxSpinnerService){}
  data:any=[]  
  fetchData(){
    this._stdService.getStudents().pipe(map(responseData=>{
     // console.log(responseData);
     const empArray=[]
      for(const key in responseData){
        //console.log(responseData[key])
  //      console.warn(responseData.hasOwnProperty(key))
        if(responseData.hasOwnProperty(key)){
        empArray.push({userId:key,...responseData[key]})
      }
      }
      return empArray
    })).subscribe((d)=>this.data=d)
  }

  openDialog_add(){
  
    this.dialogRef.open(AddComponent).afterClosed().subscribe((d)=>this.fetchData);
  }
  

  openDialog2(){
    this.dialogRef.open(EditComponent);
  }

 

  

    delete(id:string){

      if(confirm("Do you Wana delete record")){
        console.log(id)
         this._stdService.delete(id).subscribe(()=>
         this.fetchData())
        
      } 
      
      }

  ngOnInit(){
   
   this.fetchData()

   this.spinner.show();

   setTimeout(() => {
     /** spinner ends after 5 seconds */
     this.spinner.hide();
   }, 5000);
  }
  





}
