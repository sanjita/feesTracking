import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courseinterface } from '../model/interface/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private API_URL = 'https://feestracking.freeprojectapi.com/api';
  private http = inject(HttpClient);

  // 📌 Get all institutes
  getAllInstitutes(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.API_URL}/InstituteMaster/get-all-institutes`);
  }

  // 📌 Get all courses
  getAllCourses(): Observable<Courseinterface[]> {
    return this.http.get<Courseinterface[]>(`${this.API_URL}/Course/getAllCourses`);
  }

  // 📌 Get course by ID
  getCourseById(id: number): Observable<Courseinterface[]> {
    return this.http.get<Courseinterface[]>(`${this.API_URL}/Course/getCourseById/${id}`);
  }

  // 📌 Get courses by institute
  getCoursesByInstitute(instituteId: number): Observable<Courseinterface[]> {
    return this.http.get<Courseinterface[]>(`${this.API_URL}/Course/getCoursesByInstitute/${instituteId}`);
  }

  // 📌 Create new course
  createCourse(data: any): Observable<Courseinterface> {
    return this.http.post<Courseinterface>(`${this.API_URL}/Course/createCourse`, data);
  }

  // 📌 Update course
  updateCourse(data: any): Observable<Courseinterface> {
    return this.http.put<Courseinterface>(`${this.API_URL}/Course/updateCourse`, data);
  }

  // 📌 Delete course
  deleteCourse(id: number): Observable<Courseinterface> {
    return this.http.delete<Courseinterface>(`${this.API_URL}/Course/deleteCourse/${id}`);
  }
}
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}