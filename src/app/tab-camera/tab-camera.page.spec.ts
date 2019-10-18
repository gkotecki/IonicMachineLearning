import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCamera } from './tab-camera.page';

describe('TabCameraPage', () => {
  let component: TabCamera;
  let fixture: ComponentFixture<TabCamera>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabCamera],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCamera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
