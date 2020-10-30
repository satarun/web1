import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http:HttpClient) { }

public signUp(data):Observable<any>{

   return this.http.post("http://localhost:3000/signup",data);
}
public lgnp(data):Observable<any>{

  return this.http.post("http://localhost:3000/login",data);
}
  
}
