import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  rootUrl = 'http://143.198.184.62/api';
  constructor(private http: HttpClient) { }


  control(){
    return this.http.get(`${this.rootUrl}/control`).pipe(
      tap((response) => {
       
      })
    )
    }

  

    controlADD(credentials: any){
      return this.http.post(`${this.rootUrl}/control`, credentials).pipe(
        tap((response) => {
         
         console.log(response)
        })
      )
      }
}
