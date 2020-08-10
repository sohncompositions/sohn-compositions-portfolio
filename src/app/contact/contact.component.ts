import { Component } from '@angular/core';
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
    submitting = false;
    submitted = false;
    error: string;
    success: string;
    interpolatedFormCaption: string[];

    constructor(
        private configService: ConfigService,
        private contactService: ContactService,
    ) {
        this.pageConfig = this.configService.config.contactPage;
        this.contactForm = this.contactService.buildContactForm(this.pageConfig);
        this.interpolatedFormCaption = this.interpolateFormCaption();
    }

    interpolateFormCaption(): string[] {
        return this.pageConfig.formCaption.split('{email}');
    }

    displayError(formControlName: string): string {
        const formControl = this.contactForm.controls[formControlName];
        if (formControl.hasError('required')) { return 'This field is required.'; }
        if (formControl.hasError('email')) { return 'This field is not a valid email format'; }
    }

    private onSubmissionComplete() {
        this.submitted = true;
        this.submitting = false;
    }

    handleSubmit(e: Event): void {
        e.preventDefault();
        this.submitting = true;
        this.contactService.submitContactForm(this.contactForm.value)
            .subscribe(() => {
                this.error = null;
                this.success = this.pageConfig.emailServer.successMessage;
                this.onSubmissionComplete();
            }, () => {
                this.error = this.pageConfig.emailServer.errorMessage;
                this.success = null;
                this.onSubmissionComplete();
            });
    }

    get showTitle(): boolean {
        return !!this.pageConfig.title;
    }

    get showSubtitle(): boolean {
        return !!this.pageConfig.subtitle;
    }
}
