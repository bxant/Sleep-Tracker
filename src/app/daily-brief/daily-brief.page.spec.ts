import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyBriefPage } from './daily-brief.page';

describe('DailyBriefPage', () => {
  let component: DailyBriefPage;
  let fixture: ComponentFixture<DailyBriefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyBriefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyBriefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
