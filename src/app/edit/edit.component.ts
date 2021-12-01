import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';
import {FormGroup,Validators,FormControl} from '@angular/forms'
import { Student } from '../student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editMode='regMode';

  constructor(public rt:Router,private _http:HttpClient, private _stdService:MainService,private route:ActivatedRoute ) { }

  ngOnInit() {
    this.edit()
    this.funRec()
  }
  funRec(){
    this._stdService.editMode.subscribe((data)=>this.editMode=data)
    console.warn(this.editMode)
  }

  editEmp=new Student()


  form:FormGroup=new FormGroup({
    xyz:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    info:new FormControl("",[Validators.required]),
    date:new FormControl("",[Validators.required])
  })

  edit(){
    console.log(this.route.snapshot.params.id)
    this._stdService.getPerticularId(this.route.snapshot.params.id).subscribe((data)=>{
      this.form=new FormGroup({
        xyz:new FormControl(data['xyz']),
        name:new FormControl(data['name']),
        info:new FormControl(data['info']),
        date: new FormControl(data['date']),
      })
    })
  }


  
fun2(){
  if(this.form.valid===true){
  this.editEmp.xyz=this.form.value.xyz;
 this.editEmp.name=this.form.value.name;
 this.editEmp.info=this.form.value.info;
   this.editEmp.date=this.form.value.date;
   this._stdService.editData(this.route.snapshot.params.id,this.editEmp).subscribe(((data)=>
  console.log(data)
  
  )
  ,
 
  )
  }
  else{
    alert("Enter Data")
  }
  this.rt.navigate(['/home']) 
}
  



}
