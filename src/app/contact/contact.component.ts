import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    pageConfig: IConfig['contactPage'];
    constructor(
        private configService: ConfigService
    ) {
        this.pageConfig = this.configService.config.contactPage;
    }
}
