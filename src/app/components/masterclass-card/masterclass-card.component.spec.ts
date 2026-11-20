import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterclassCardComponent } from './masterclass-card.component';

describe('MasterclassCardComponent', () => {
  let component: MasterclassCardComponent;
  let fixture: ComponentFixture<MasterclassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterclassCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MasterclassCardComponent);
    fixture.componentRef.setInput('artist', { name: 'Test Artist', role: 'Guest artist', image: '/images/hero.jpg' });
    fixture.componentRef.setInput('index', 0);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should number the card from 01', () => {
    expect(component.number()).toBe('01');
  });
});
