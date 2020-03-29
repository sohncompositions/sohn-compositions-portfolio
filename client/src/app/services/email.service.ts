import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const EMAILER_API_URL = '/api/emailer';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    constructor(
        private httpClient: HttpClient
    ) { }

    sendEmail(email) {
        return this.httpClient.post(EMAILER_API_URL, email);
    }
}
