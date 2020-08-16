import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class EmailService {
    apiUrl: string;

    constructor(
        private httpClient: HttpClient,
        private configService: ConfigService
    ) {
        this.apiUrl = this.configService.config.contactPage.emailServer.url;
    }

    sendEmail(email: IEmail): Observable<unknown> {
        // const url = process.env.NODE_ENV === 'development' ?
        //     'http://localhost:8080/api/emailer' :
        //     this.apiUrl;
        const url = this.apiUrl;
        return this.httpClient.post(url, email);
    }
}
