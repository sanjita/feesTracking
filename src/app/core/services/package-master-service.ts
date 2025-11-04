import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PackageMaster } from '../model/interface/package-master';

@Injectable({
  providedIn: 'root',
})
export class PackageMasterService {
private Api_url="https://feestracking.freeprojectapi.com/api/PackageMaster"

http=inject(HttpClient);
fb=inject(FormBuilder);

getallpackages():Observable<any>{
  return this.http.get<any>(`${this.Api_url}/get-all-packages`)
}



//  Create
  addPackageMaster( data: any): Observable<any> {
    return this.http.post<any>(`${this.Api_url}/create-package`, data);
  }

  //  Update
  updatePackageMaster(id: number, data: any ): Observable<any> {
    return this.http.put<any>(`${this.Api_url}/update-package/${id}`, data);
  }

  //  Delete
  deletePackageMaster(id: number): Observable<any> {
    return this.http.delete<any>(`${this.Api_url}/delete-package/${id}`);
  }
}




  

