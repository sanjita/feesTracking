import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteMasterList } from './institute-master-list';

describe('InstituteMasterList', () => {
  let component: InstituteMasterList;
  let fixture: ComponentFixture<InstituteMasterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstituteMasterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteMasterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
