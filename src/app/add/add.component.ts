import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { Student } from '../student';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  constructor(public rt:Router, private _stdService:MainService ) { }

  AddUser=new Student()
  ngOnInit(): void {
  }


  
  form:FormGroup=new FormGroup({
    xyz:new FormControl('', [Validators.required]),
    name:new FormControl('',[Validators.required]),
    info:new FormControl('',[Validators.required]),
    date:new FormControl('', [Validators.required])
   
  })
   add(){
    if(this.form.valid===true){
    this.AddUser.xyz=this.form.value.xyz;
    this.AddUser.name=this.form.value.name;
    this.AddUser.info=this.form.value.info;
    this.AddUser.date=this.form.value.date;
    this._stdService.post(this.AddUser).subscribe((data)=>{
     console.log(data)
      this.form.reset();
    })
   }


  }

  reset(){
    this.form.reset()
  }

}
