import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagicPage } from './magic.page';

describe('MagicPage', () => {
  let component: MagicPage;
  let fixture: ComponentFixture<MagicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
