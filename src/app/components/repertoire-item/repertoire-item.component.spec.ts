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
      year: '2024',
      title: 'Don Quixote',
      label: 'Classical · Basilio variation',
      description: 'Senior Men solo.',
    });
    fixture.componentRef.setInput('index', 0);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should number the piece starting from 01', () => {
    expect(component.number()).toBe('01');
  });
});