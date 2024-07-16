import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficedesksComponent } from './officedesks.component';

describe('OfficedesksComponent', () => {
  let component: OfficedesksComponent;
  let fixture: ComponentFixture<OfficedesksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficedesksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfficedesksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
