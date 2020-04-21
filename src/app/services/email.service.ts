import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';


@Injectable({
    providedIn: 'root'
})
export class EmailService {
    apiUrl: string;

    constructor(
        private httpClient: HttpClient,
        private configService: ConfigService
    ) {
        this.apiUrl = this.configService.config.contactPage.emailServer.url
    }

    sendEmail(email) {
        return this.httpClient.post(this.apiUrl, email);
    }
}
