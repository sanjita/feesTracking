import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {

  http = inject(HttpClient);
  private API_URL = "https://feestracking.freeprojectapi.com/api/Master"
  getMasters(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/get-all-masters`)

  }

  addMaster(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/create-master`, data)
  }

  updateMaster(id: number, data: any): Observable<any> {
    return this.http.put(`${this.API_URL}/update-master/${id}`, data)
  }

  deleteMaster(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/delete-master/${id}`)
  }



}
