import { Component, inject } from '@angular/core';
import { MasterService } from '../../core/services/master-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-list',
  standalone: false,
  templateUrl: './master-list.html',
  styleUrl: './master-list.css',
})
export class MasterList {
  isSidebarCollapsed = false;
fb=inject(FormBuilder);
masterService=inject(MasterService)
toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  masters: any[] = [];
  masterForm!: FormGroup;
  editMode = false;
  selectedId: number | null = null;

  ngOnInit() {
    this.masterForm = this.fb.group({
       masterId: [0, Validators.required],
      masterFor: ['', Validators.required],
      masterValue: ['', Validators.required]
    });
    this.loadMasters();
  }

  loadMasters() {
    debugger;
    this.masterService.getMasters().subscribe({
      next: (res) => this.masters = res.data,
      error: (err) => console.error('Error fetching masters', err)
    });
  }

  onSubmit() {
    if (this.masterForm.invalid) return;

    const formData = this.masterForm.value;
    if (this.editMode && this.selectedId) {
      this.masterService.updateMaster(this.selectedId, formData).subscribe({
        next: () => {
          this.loadMasters();
          this.cancelEdit();
        }
      });
    } else {
      this.masterService.addMaster(formData).subscribe({
        next: () => {
          this.loadMasters();
          this.masterForm.reset();
        }
      });
    }
  }

  updateMaster(master: any) {
    this.editMode = true;
    this.selectedId = master.masterId;
    this.masterForm.patchValue(master);
  }

  deleteMaster(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.masterService.deleteMaster(id).subscribe({
        next: () => this.loadMasters()
      });
    }
  }

  cancelEdit() {
    debugger;
    this.editMode = false;
    this.selectedId = null;
    this.masterForm.reset();
  }


}
