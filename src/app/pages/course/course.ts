import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../core/services/course-service';
import { Courseinterface, Institute } from '../../core/model/interface/course';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course implements OnInit {
  isSidebarCollapsed = false;
  courseForm: any;
  fb: any;
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  courses: Courseinterface[] = [];
  institutes: Institute[] = [];
  editmode = false;
  courseData: Courseinterface = {
    courseName: '',
    courseCost: 0,
    creratedDate: '',
    isActive: true,
    duration: '',
    instituteId: 0,
    courseDescription: ''
  }; editMode = false;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    // this.courseForm = this.fb.group({
    //       courseName: ['', Validators.required],
    //       courseCost: ['', Validators.required],
    //       //creratedDate: ['', Validators.required],
    //       duration: [''],
    //       instituteId: ['', Validators.required],
    //       courseDescription: ['']

    //     });

    this.loadInstitutes();
    this.loadCourses();
  }

  loadInstitutes() {
    this.courseService.getAllInstitutes().subscribe(res => {
      this.institutes = res.data;
    });
  }

  loadCourses() {

    this.courseService.getAllCourses().subscribe(res => {
      console.log("courseresponse" + res);
      this.courses = res;
      console.log("allcourses" + this.courses)
    });
  }
  test() {

    console.log('Selected Institute:', this.courseData.instituteId)
  }
  saveCourse() {
    debugger;

    console.log('Form Data:', this.courseData); // 👈 prints all values in console

    console.log('Institutes:', this.institutes);


    const payload = {
      courseId: this.editMode ? this.courseData.courseId : 0,
      courseName: this.courseData.courseName,
      courseCost: this.courseData.courseCost,
      creratedDate: new Date().toISOString(),
      isActive: this.courseData.isActive,
      duration: this.courseData.duration,
      instituteId: this.courseData.instituteId,
      courseDescription: this.courseData.courseDescription
    };


    console.log('Sending payload:', payload);


    if (!this.courseData.courseName || !this.courseData.duration || !this.courseData.instituteId) {
      alert('Please fill all fields');
      return;
    }
    const formValue = this.courseForm.value as Courseinterface;


    if (this.editmode) {
      console.log(this.courseForm.instituteId);

      this.courseService.updateCourse(payload).subscribe(() => {
        alert('Course updated successfully!');

        this.resetForm();
        this.loadCourses();
      });
    } else {
      console.log(payload.instituteId);
      this.courseService.createCourse(payload).subscribe(() => {
        alert('Course added successfully!');

        this.resetForm();
        this.loadCourses();
        this.editmode = false;
      });
    }
  }

  editCourse(course: Courseinterface) {
    this.courseForm = { ...course };
    this.editmode = true;
  }

  deleteCourse(id: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(() => this.loadCourses());
    }
  }

  resetForm() {
    this.courseForm = {
      courseName: '',
      courseCost: 0,
      creratedDate: '',
      isActive: true,
      duration: '',
      instituteId: 0,
      courseDescription: ''
    };
    this.editmode = false;
  }




}
