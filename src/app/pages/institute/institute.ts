import { Component, inject, OnInit } from '@angular/core';
import { InstituteService } from '../../core/services/institute-service';
import { InstituteInterface } from '../../core/model/interface/institute-interface';
import { pipe, Subject, takeUntil } from 'rxjs';
import { ApiResponseModel } from '../../core/model/interface/package-master';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-institute',
  standalone: false,
  templateUrl: './institute.html',
  styleUrl: './institute.css',
})
export class Institute implements OnInit {
  fb = inject(FormBuilder)
  editmode = false;
  instituteService = inject(InstituteService);
  instituteList: InstituteInterface[] = [];
  loading = false;
  errorMsg: string | null = null;
  isSidebarCollapsed = false;
  selectedId: number | null = null;
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  private $destroy = new Subject<void>();
  ngOnInit(): void {
    this.allinstituteList()
  }

  allinstituteList() {

    this.instituteService.getAllInstitute().subscribe({
      next: (data: ApiResponseModel) => {
        this.instituteList = data.data;
        console.log(data);

      }
    })
  }
  instituteForm = this.fb.group({
    instName: ['', Validators.required],
    contactNo: ['', Validators.required],
    email: ['', Validators.required],

    city: ['', Validators.required],

    state: ['', Validators.required],

    owner: ['', Validators.required],

    gstNo: ['', Validators.required]


  })

  save() {

    debugger;
    if (this.instituteForm.invalid) {
      this.instituteForm.markAllAsTouched();
      return;
    }
    const instituteData = this.instituteForm.value;

    if (this.editmode && this.selectedId !== null) {

      const instituteData = this.instituteForm.value as InstituteInterface;
      this.instituteService.updateInstitute(instituteData, this.selectedId).subscribe({

        next: () => {
          this.allinstituteList();

        },
        error: (err) => {
          console.error("update failed", err)
        }
      })

    } else {

      this.instituteService.addInstitute(instituteData).subscribe({

        next: () => {
          this.allinstituteList();
          this.instituteForm.reset();
        }, error: (err) => console.error('Add failed:', err)

      })


    }

  }


  updateinst(instituteList: any) {
    debugger;
    this.editmode = true;
    this.selectedId = instituteList.instituteId;
    this.instituteForm.patchValue(instituteList)
  }

  deleteinst(id: number) {
    debugger;
    this.instituteService.deleteInstitute(id).subscribe({

      next: (res: any) => {
        this.instituteList.push(res);
      }
    })
  }


  // allinstituteList() {
  //   this.instituteService.getAllInstitute().pipe(
  //     takeUntil(this.$destroy)
  //   ).subscribe({
  //     next: (data: InstituteInterface[]) => {
  //       this.instituteList = data;   
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching institutes', err);
  //     }
  //   });
  // }


  // ngOnDestroy() {
  //   this.$destroy.next();
  //   this.$destroy.complete();
  // }

}
