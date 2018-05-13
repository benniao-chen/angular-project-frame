import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneComponentComponent } from './module-one-component.component';

describe('ModuleOneComponentComponent', () => {
  let component: ModuleOneComponentComponent;
  let fixture: ComponentFixture<ModuleOneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleOneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
