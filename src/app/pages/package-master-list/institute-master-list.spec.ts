import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageMasterList } from './package-master-list';

describe('package-master-list', () => {
  let component: PackageMasterList;
  let fixture: ComponentFixture<PackageMasterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackageMasterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageMasterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
