import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {

API_URL="https://feestracking.freeprojectapi.com/api/Enrollments"

http=inject(HttpClient)
getAllEnrollment():Observable<any>{
  return this.http.get(`{this.API_URL}/getAllEnrollments`);
}
  
}
