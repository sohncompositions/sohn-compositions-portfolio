import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { EmailService } from './email.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(
        private formBuilder: FormBuilder,
        private emailService: EmailService,
    ) { }

    private _generateValidators(field: IField): ValidatorFn[] {
        const validators = [];
        Object.keys(field)
            .filter((k: keyof IField) => field[k] === true)
            .forEach((k: keyof IField) => {
                switch (k) {
                    case 'required':
                        validators.push(Validators.required);
                        break;
                    case 'email':
                        validators.push(Validators.email);
                        break;
                }
            });

        // if other fields have non-boolean values, then deal with them separately
        return validators;
    }

    private _buildFormControlsConfig(pageConfig: IContactPage): { [K: string]: FormControl } {
        return Object.keys(pageConfig.fields).reduce<{ [K: string]: FormControl }>((t, k) => {
            return {
                ...t,
                [k]: new FormControl('', this._generateValidators(pageConfig.fields[k]))
            };
        }, {});
    }

    buildContactForm(pageConfig: IContactPage): FormGroup {
        return this.formBuilder.group(
            this._buildFormControlsConfig(pageConfig),
        );
    }

    submitContactForm(email) {
        return this.emailService.sendEmail(email)
            .pipe(
                catchError(err => throwError(err.message))
            );
    }

}
