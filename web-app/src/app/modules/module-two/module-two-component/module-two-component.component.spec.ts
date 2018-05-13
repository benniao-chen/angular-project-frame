import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTwoComponentComponent } from './module-two-component.component';

describe('ModuleTwoComponentComponent', () => {
  let component: ModuleTwoComponentComponent;
  let fixture: ComponentFixture<ModuleTwoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTwoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
