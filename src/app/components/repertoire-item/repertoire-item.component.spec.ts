import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepertoireItemComponent } from './repertoire-item.component';

describe('RepertoireItemComponent', () => {
  let component: RepertoireItemComponent;
  let fixture: ComponentFixture<RepertoireItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepertoireItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepertoireItemComponent);
    fixture.componentRef.setInput('item', {
      name: 'Brno Theatre',
      period: '2024 — Present',
      location: 'Brno, Czech Republic',
      role: 'Company artist',
      image: '/images/about-action.jpg',
      works: [{ title: 'Don Quixote', role: 'Basilio variation', stagedBy: 'Marius Petipa' }],
    });
    fixture.componentRef.setInput('index', 0);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should number the item starting from 01', () => {
    expect(component.number()).toBe('01');
  });

  it('should emit onToggle when it has works', () => {
    let emitted = 0;
    component.onToggle.subscribe(() => emitted++);
    component.toggle();
    expect(emitted).toBe(1);
  });

  it('should not emit onToggle without works', () => {
    fixture.componentRef.setInput('item', { ...component.item(), works: [] });
    let emitted = 0;
    component.onToggle.subscribe(() => emitted++);
    component.toggle();
    expect(emitted).toBe(0);
  });
});