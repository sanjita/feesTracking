import { Component, inject, OnInit } from '@angular/core';
import { PackageMasterService } from '../../core/services/package-master-service';
import { PackageMaster } from '../../core/model/interface/package-master';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-package-master-list',
  standalone: false,
  templateUrl: './package-master-list.html',
  styleUrl: './package-master-list.css',
})
export class PackageMasterList implements OnInit {

  ngOnInit(): void {

    this.loadallpackg();
  }



  packgMasterService = inject(PackageMasterService)
  isSidebarCollapsed = false;
  fb = inject(FormBuilder)
  Allpakages: any[] = [];
  editMode = false;
  selectedId: number | null = null;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }


  packageForm = this.fb.group({
    packageId: [0],
    emiTotalCost: [''],
    maxBranches: [''],
    maxStudents: [''],
    oneTimeTotalCost: [''],
    packageName: ['']
  })
  onSubmit() {
    if (this.packageForm.invalid) {
      this.packageForm.markAllAsTouched();
      return
    }
    const formadta = this.packageForm.value;
    if (this.editMode && this.selectedId !== null) {
      this.packgMasterService.updatePackageMaster(this.selectedId, formadta).subscribe({
        next: () => {
          this.loadallpackg();
          this.cancelEdit();
        },
        error: (err) => console.error('Update failed:', err)
      });

    }
    else {
      this.packgMasterService.addPackageMaster(formadta).subscribe({
        next: () => {
          this.loadallpackg();
          this.packageForm.reset();
        }, error: (err) => console.error('Add failed:', err)

      })
    }

  }



  loadallpackg() {
    this.packgMasterService.getallpackages().subscribe({

      next: (res: any) => {
        this.Allpakages = res.data;
        console.log(res.data);
      },
      error: () => {


      }
    })
  }


  cancelEdit() {
    debugger;
    this.editMode = false;
    this.selectedId = null;
    this.packageForm.reset();
  }

  updatepkgMaster(Allpakages: any) {
    this.editMode = true;
    this.selectedId = Allpakages.packageId;
    this.packageForm.patchValue(Allpakages)
  }
    deletepkgMaster(id: number) {
      if (confirm('Are you sure you want to delete this record?')) {
  debugger;
        this.packgMasterService.deletePackageMaster(id).subscribe({
          next: () => {
            this.loadallpackg();
          }
        })
      }
  }
}
