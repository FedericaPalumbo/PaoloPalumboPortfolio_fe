import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizeYearComponent } from './prize-year.component';

describe('PrizeYearComponent', () => {
  let component: PrizeYearComponent;
  let fixture: ComponentFixture<PrizeYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeYearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrizeYearComponent);
    // group è un input obbligatorio: va passato prima del primo rendering
    fixture.componentRef.setInput('group', {
      year: '2023',
      distinctions: [
        { recognition: '1st Place', category: 'Classical Soloist', competition: 'YGP · Paris' },
        { recognition: 'Top 6', category: 'Contemporary Soloist', competition: 'YGP · Paris' },
      ],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one numbered row per distinction', () => {
    const rows = fixture.nativeElement.querySelectorAll('.prize');
    expect(rows.length).toBe(2);
    expect(rows[0].querySelector('.prize-index').textContent).toBe('01');
  });

  it('should show recognition, category and competition in each row', () => {
    const row = fixture.nativeElement.querySelector('.prize');
    expect(row.querySelector('.prize-recognition').textContent).toBe('1st Place');
    expect(row.textContent).toContain('Classical Soloist');
    expect(row.textContent).toContain('YGP · Paris');
  });

  it('should count the distinctions of the year', () => {
    expect(component.count()).toBe('02 distinctions');
  });

  it('should use the singular for a single distinction', () => {
    fixture.componentRef.setInput('group', {
      year: '2024',
      distinctions: [{ recognition: 'Top 12', category: 'Senior Soloist', competition: 'YGP Finals · New York' }],
    });
    expect(component.count()).toBe('01 distinction');
  });
});
