import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgZorroAntdModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set the appName',() => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.componentInstance.appName)
      .toEqual('Nimbus Edu');
  });

  it('should set isCollapsed',() => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.componentInstance.isCollapsed)
      .toEqual(false);
  });
});
