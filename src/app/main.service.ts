import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class MainService {

 
  constructor(private _http:HttpClient) { }
  private _url = "../assets/data/student.json";


  getStudents():Observable<Student[]>{
 
 return this._http.get<Student[]>("https://apidemo-d02d0-default-rtdb.firebaseio.com/users.json");
  }

  post(some:Student):Observable<Student>{
    return this._http.post<Student>("https://apidemo-d02d0-default-rtdb.firebaseio.com/users.json", some )
  }


  delete(id:string){
    return this._http.delete("https://apidemo-d02d0-default-rtdb.firebaseio.com/users"+'/'+id+'.json')
  }






  getPerticularId(id:string):Observable<Student>{
    return this._http.get<Student>("https://apidemo-d02d0-default-rtdb.firebaseio.com/users" + '/' +id+ '.json')
  }

  editData(id:string,data:Student):Observable<Student>{
    return this._http.put<Student>("https://apidemo-d02d0-default-rtdb.firebaseio.com/users" + "/" +id+ '.json',data)
  }


  editMode=new BehaviorSubject<string>('regMode')





  
}
