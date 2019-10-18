import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInfo } from './tab-info.page';

describe('TabInfo', () => {
  let component: TabInfo;
  let fixture: ComponentFixture<TabInfo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabInfo],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
