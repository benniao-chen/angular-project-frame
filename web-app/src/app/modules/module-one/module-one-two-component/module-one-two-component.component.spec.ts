import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneTwoComponentComponent } from './module-one-two-component.component';

describe('ModuleOneTwoComponentComponent', () => {
  let component: ModuleOneTwoComponentComponent;
  let fixture: ComponentFixture<ModuleOneTwoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleOneTwoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleOneTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
