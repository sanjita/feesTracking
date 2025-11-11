import { Component, inject } from '@angular/core';
import { EnrollmentService } from '../../core/services/enrollment-service';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
enrollmentService=inject(EnrollmentService)
  enrollmentStdList:any[]=[];

  allentrstdList(data:any){
this.enrollmentService.getAllEnrollment().subscribe({
  next:(res:any)=>{
    this.allentrstdList=res.data;
    console.log("allenrollmentStudent"+this.allentrstdList);
  },
  error:(err)=>{

    console.log('data dint lod',err)
  }
})
  }

}
