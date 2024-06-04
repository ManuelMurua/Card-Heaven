import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YugiohPage } from './yugioh.page';

describe('YugiohPage', () => {
  let component: YugiohPage;
  let fixture: ComponentFixture<YugiohPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YugiohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
