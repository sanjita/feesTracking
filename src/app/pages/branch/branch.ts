import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '../../core/services/branch-service';
import { InstituteService } from '../../core/services/institute-service';
import { Institute } from '../institute/institute';
import { ApiResponseModel } from '../../core/model/interface/package-master';
import { Branchinterface } from '../../core/model/interface/branch';
import { InstituteInterface } from '../../core/model/interface/institute-interface';

@Component({
  selector: 'app-branch',
  standalone: false,
  templateUrl: './branch.html',
  styleUrl: './branch.css',
})
export class Branch implements OnInit {

  isSidebarCollapsed = false;
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  branchService = inject(BranchService);
  instituteService = inject(InstituteService);
  branchForm!: FormGroup;
  branches: Branchinterface[] = [];
  institutes: InstituteInterface[] = [];
  editMode = false;
  editId: number | null = null;
  branchId!: number;
  branchName: any;
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  ngOnInit(): void {
    this.branchForm = this.fb.group({
      branchName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: [''],
      location: [''],
      instituteId: ['', Validators.required],
      branchContactNo: [''],
      branchEmail: [''],
      branchCode: ['']
    });

    this.loadBranches();
    this.loadInstitutes();
  }



  loadBranches() {
    this.branchService.getAllBranches().subscribe({
      next: (res) => (this.branches = res),
      error: (err) => console.error('Error fetching branches:', err)
    });
  }

  loadInstitutes() {
    this.instituteService.getAllInstitute().subscribe({
      next: (res: ApiResponseModel) => (this.institutes = res.data),
      error: (err) => console.error('Error fetching institutes:', err)
    });
          console.log('allinsritute'+this.institutes);

  }

  onSubmit() {
    debugger;
    if (this.branchForm.invalid) return;

    const formValue = this.branchForm.value as Branchinterface;

    if (this.editMode && this.editId) {
      formValue.branchId = this.editId;
      this.branchService.updateBranch(formValue).subscribe({
        next: () => {
          this.loadBranches();
          this.branchForm.reset();
          this.editMode=false;
        },
        error: (err) => console.error('Error updating branch:', err)
      });
    } else {
      debugger;
      this.branchService.createBranch(formValue).subscribe({
        next: () => {
          this.loadBranches();
          this.branchForm.reset();
        },
        error: (err) => console.error('Error adding branch:', err)
      });
    }
  }

  editBranch(branch:Branchinterface) {
    this.branchForm.patchValue(branch);
    this.editMode = true;
    this.editId = branch.branchId;
  }

  deleteBranch(id: number) {
    if (confirm('Are you sure you want to delete this branch?')) {
      this.branchService.deleteBranch(id).subscribe({
        next: () => this.loadBranches(),
        error: (err) => console.error('Error deleting branch:', err)
      });
    }
  }

}