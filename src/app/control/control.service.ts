import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  rootUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  control() {
    return this.http.get(`${this.rootUrl}/control`).pipe(
      tap((response) => {
      })
    )
  }

  controlById(id: any) {
    return this.http.get(`${this.rootUrl}/control/${id}`).pipe(
      tap((response) => {
      })
    )
  }



  controlADD(credentials: any) {
    return this.http.post(`${this.rootUrl}/control`, credentials).pipe(
      tap((response) => {
      })
    )
  }


  controlFeaturesAdd(data: any, id: any){
    return this.http.post(`${this.rootUrl}/control/${id}`, data).pipe(
      tap((response) => {
      })
    )
  }

  fetchFeatures( id: any){
    return this.http.get(`${this.rootUrl}/feature/${id}`).pipe(
      tap((response) => {
        
      })
    )
  }
  controlUpdate(credentials: any, id: any) {
    return this.http.put(`${this.rootUrl}/control/${id}`, credentials).pipe(
      tap((response) => {
      })
    )
  }

  controlSubFeaturesUpdate(credentials: any, id: any) {
    return this.http.put(`${this.rootUrl}/feature/${id}`, credentials).pipe(
      tap((response) => {
      })
    )
  }

  fetchAllSUbFeatureByControlId(id: any){
    return this.http.get(`${this.rootUrl}/features/${id}`).pipe(
      tap((response) => {
      })
    )
  }


  controlGetTheme() {
    return this.http.get(`${this.rootUrl}/style`).pipe(
      tap((response) => {
      })
    )
  }

  controlTheme( id: any) {
    return this.http.get(`${this.rootUrl}/dark/${id}`).pipe(
      tap((response) => {
      })
    )
  }
}
