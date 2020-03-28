import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(
        private formBuilder: FormBuilder
    ) { }

    private _buildFormControlsConfig(pageConfig: IContactPage): { [K: string]: FormControl } {
        return Object.keys(pageConfig.fields).reduce<{ [K: string]: FormControl }>((t, k) => {
            return {
                ...t,
                [k]: new FormControl(
                    '',
                    pageConfig.fields[k].required ?
                        Validators.required :
                        null)
            };
        }, {});
    }

    buildContactForm(pageConfig: IContactPage): FormGroup {
        return this.formBuilder.group(
            this._buildFormControlsConfig(pageConfig),
        );
    }

}
