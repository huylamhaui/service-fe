import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPageAdminComponent } from './menu-page-admin.component';

describe('MenuPageAdminComponent', () => {
  let component: MenuPageAdminComponent;
  let fixture: ComponentFixture<MenuPageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPageAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
