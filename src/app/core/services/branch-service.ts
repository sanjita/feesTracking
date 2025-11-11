import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Branch } from '../../pages/branch/branch';
import { Branchinterface } from '../model/interface/branch';

@Injectable({
  providedIn: 'root',
})
export class BranchService {

  private API_URL = 'https://feestracking.freeprojectapi.com/api/BranchMaster';
  http = inject(HttpClient);


  getAllBranches(): Observable<Branchinterface[]> {
    return this.http.get<Branchinterface[]>(`${this.API_URL}/get-all-branches`);
  }
  getBranchById(id: number): Observable<Branchinterface> {
    return this.http.get<Branchinterface>(`${this.API_URL}/get-branch-by-id/${id}`);
  }

  createBranch(data: Branchinterface): Observable<any> {
    return this.http.post(`${this.API_URL}/create-branch`, data);
  }

  updateBranch(data: Branchinterface): Observable<any> {
    return this.http.put(`${this.API_URL}/update-branch`, data);
  }
  deleteBranch(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/delete-branch/${id}`);
  }
}
