/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditPropComponent } from './edit-prop.component';

describe('EditPropComponent', () => {
  let component: EditPropComponent;
  let fixture: ComponentFixture<EditPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
