import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SofaComponent } from './sofa.component';

describe('SofaComponent', () => {
  let component: SofaComponent;
  let fixture: ComponentFixture<SofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SofaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
