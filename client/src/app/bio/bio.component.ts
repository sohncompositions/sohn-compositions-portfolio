import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss']
})
export class BioComponent {
    pageConfig: IConfig['bioPage'];
    constructor(
        private configService: ConfigService
    ) {
        this.pageConfig = this.configService.config.bioPage;
    }

    resolveFilename(filename: string): string {
        return `../../assets/images/${filename}`;
    }
}
