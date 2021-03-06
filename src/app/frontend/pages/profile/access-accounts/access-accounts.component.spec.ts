import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccessAccountsComponent } from './access-accounts.component';

describe('AccessAccountsComponent', () => {
    let component: AccessAccountsComponent;
    let fixture: ComponentFixture<AccessAccountsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ReactiveFormsModule, RouterModule.forRoot([]), HttpClientModule],
          declarations: [ AccessAccountsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AccessAccountsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('the component should created correctly.', () => {
        expect(component).toBeTruthy();
    });

    it('there must be a method called ngOnInit.', () => {
        let ngOnInit = spyOn(component, 'ngOnInit')
        component.ngOnInit();
        expect(ngOnInit).toHaveBeenCalled();
      });
  

    it('the component should have a navbar.', () => {
        fixture = TestBed.createComponent(AccessAccountsComponent);
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
    });

})