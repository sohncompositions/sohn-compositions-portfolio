import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FileUtil } from '../util-classes';


@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss']
})
export class BioComponent extends FileUtil {
    pageConfig: IConfig['bioPage'];
    constructor(
        private configService: ConfigService
    ) {
        super();
        this.pageConfig = this.configService.config.bioPage;
    }

}
