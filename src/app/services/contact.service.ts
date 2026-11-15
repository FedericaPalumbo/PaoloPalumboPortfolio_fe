import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export type ContactPayload = {
    name: string;
    email: string;
    reason: string;
    message: string;
};

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private http = inject(HttpClient);

    send(payload: ContactPayload) {
        return this.http.post<void>('/api/contact', payload);
    }
}