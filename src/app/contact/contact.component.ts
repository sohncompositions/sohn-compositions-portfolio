import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    pageConfig: IConfig['contactPage'];
    contactForm: FormGroup;

    constructor(
        private configService: ConfigService,
        private contactService: ContactService,
    ) {
        this.pageConfig = this.configService.config.contactPage;
        this.contactForm = this.contactService.buildContactForm(this.pageConfig);
    }

    handleSubmit(e) {
        console.log(e, this.contactForm.value);
    }
}
