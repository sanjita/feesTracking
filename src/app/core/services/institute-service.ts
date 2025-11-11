import { inject, Injectable } from '@angular/core';
import { InstituteInterface } from '../model/interface/institute-interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponseModel } from '../model/interface/package-master';

@Injectable({
  providedIn: 'root',
})
export class InstituteService {
  API_URL = "https://feestracking.freeprojectapi.com/api/InstituteMaster"

  instituteList: InstituteInterface[] = [];

  http = inject(HttpClient);

  getAllInstitute(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(`${this.API_URL}/get-all-institutes`) 
  }

  addInstitute(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/create-institute`, data)

  }

  updateInstitute(data: InstituteInterface, id: number): Observable<any> {
    return this.http.patch<any>(`{this.API_URL}/update-institute/${id}`, data)
  }

  deleteInstitute(id:number){
return this.http.delete<InstituteInterface>(`${this.API_URL}/delete-institute/${id}`)

  }

}
