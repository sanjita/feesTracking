import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  standalone: false,
  templateUrl: './dasboard.html',
  styleUrl: './dasboard.css',
})
export class Dasboard {
  http = inject(HttpClient);

  dashboardItems: any = {};
  isSidebarCollapsed = false;
  dashboardData: any;
    instituteId = 12; 

toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  ngOnInit() {
    this.loadDashboardData();
  }

loadDashboardData() {
    const apiUrl = `https://feestracking.freeprojectapi.com/api/Dashboard/institute/${this.instituteId}`;

    this.http.get<any>(apiUrl).subscribe({
      next: (res) => {
        if (res.result) {
          this.dashboardData = res.data;
          this.setDashboardItems();
        } else {
          console.error('API returned false result');
        }
      },
      error: (err) => {
        console.error('Error fetching dashboard data:', err);
      }
    });
  }

  setDashboardItems() {
    const d = this.dashboardData;
    this.dashboardItems = [
      { label: 'Total Students', value: d.totalStudents, icon: 'bi-people' },
      { label: 'Total Enrollments', value: d.totalEnrollments, icon: 'bi-journal-check' },
      { label: 'Total Courses', value: d.totalCourses, icon: 'bi-book' },
      { label: 'Fees Collected', value: d.totalFeesCollected, icon: 'bi-cash-stack' },
      { label: 'Fees Pending', value: d.totalFeesPending, icon: 'bi-hourglass-split' },
      { label: 'Discount Given', value: d.totalDiscountGiven, icon: 'bi-percent' },
      { label: 'Active Packages', value: d.activePackages, icon: 'bi-box-seam' },
      { label: 'New Enrollments (This Week)', value: d.newEnrollmentsThisWeek, icon: 'bi-calendar-week' }
    ];
  }
}



