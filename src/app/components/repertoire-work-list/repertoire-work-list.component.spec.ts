import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepertoireWorkListComponent } from './repertoire-work-list.component';


describe('RepertoireWorkListComponent', () => {
  let component: RepertoireWorkListComponent;
  let fixture: ComponentFixture<RepertoireWorkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepertoireWorkListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepertoireWorkListComponent);
    // works è un input obbligatorio: va passato prima del primo rendering
    fixture.componentRef.setInput('works', [
      { title: 'Don Quixote', role: 'Basilio variation', stagedBy: 'Marius Petipa' },
      { title: 'Le Corsaire', role: 'Pas de deux', stagedBy: 'Marius Petipa' },
    ]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one numbered row per work', () => {
    const rows = fixture.nativeElement.querySelectorAll('.work');
    expect(rows.length).toBe(2);
    expect(rows[0].querySelector('.work-number').textContent).toBe('01');
  });

  it('should show who staged the work', () => {
    const staged = fixture.nativeElement.querySelector('.work-staged');
    expect(staged.textContent).toContain('Staged by Marius Petipa');
  });
});
