import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const validUser = {
      username: 'b98',
      password: 'b98'
  };

  const blankUser = {
      username: '',
      password: ''
  };

  function updateForm(username: string, password: string){
    component.loginForm.controls['username'].setValue(username);
    component.loginForm.controls['password'].setValue(password);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form invalid should be true when form is invalid', () => {
    updateForm(blankUser.username, blankUser.password);
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('Form invalid should be false when form is valid', () => {
      updateForm(validUser.username, validUser.password);
      expect(component.loginForm.invalid).toBeFalsy();
  });
});
