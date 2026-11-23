import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { SocialLink } from '../../entities';
import { ContactService } from '../../services/contact.service';

type ContactField = 'name' | 'email' | 'reason' | 'message';

// messaggio mostrato sotto il campo quando è vuoto
const REQUIRED_MESSAGES: Record<ContactField, string> = {
  name: 'Please enter your name.',
  email: 'Please enter your email address.',
  reason: 'Please select a reason for your enquiry.',
  message: 'Please write a message.',
};

// il pattern richiede anche il punto dopo la @ (Validators.email accetterebbe "mario@studio")
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contacts',
  styleUrl: './contacts.component.css',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  private fb = inject(FormBuilder);
  private contactSrv = inject(ContactService);
  private destroyRef = inject(DestroyRef);

  protected readonly email = 'palumbop048@gmail.com';

  protected readonly socials: SocialLink[] = [
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'Facebook', url: 'https://www.facebook.com/' },
    { label: 'YouTube', url: 'https://www.youtube.com/' },
  ];

  protected readonly reasons: string[] = [
    'Audition or casting',
    'Performance collaboration',
    'Workshop or masterclass',
    'Press and media',
    'Other',
  ];

  protected contactForm = this.fb.nonNullable.group({
    // pattern: non accetta un testo fatto solo di spazi
    name: ['', [Validators.required, Validators.pattern(/\S/)]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    reason: ['', Validators.required],
    message: ['', [Validators.required, Validators.pattern(/\S/)]],
  });

  protected sending = signal(false);
  protected sent = signal(false);
  protected errorMessage = signal<string | null>(null);

  ngOnInit() {
    this.contactForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.sent.set(false);
      this.errorMessage.set(null);
    });
  }

  // messaggio di errore da mostrare sotto il campo (null = nessun errore).
  // Compare solo dopo che l'utente ha toccato il campo o ha premuto "Send email"
  protected fieldError(name: ContactField): string | null {
    const control = this.contactForm.controls[name];
    if (!control.touched || !control.errors) {
      return null;
    }
    return name === 'email' && control.value
      ? 'Please enter a valid email address.'
      : REQUIRED_MESSAGES[name];
  }

  protected send() {
    if (this.contactForm.invalid) {
      // mostra subito gli errori di tutti i campi non validi
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, reason, message } = this.contactForm.getRawValue();
    this.sending.set(true);
    this.contactSrv
      .send({ name: name.trim(), email: email.trim(), reason, message: message.trim() })
      .pipe(finalize(() => this.sending.set(false)))
      .subscribe({
        next: () => {
          // il reset emette valueChanges: va fatto prima di mostrare il messaggio di successo
          this.contactForm.reset();
          this.sent.set(true);
        },
        error: (response) =>
          this.errorMessage.set(
            response.error?.message ?? 'Unable to send your message, please try again later.',
          ),
      });
  }
}