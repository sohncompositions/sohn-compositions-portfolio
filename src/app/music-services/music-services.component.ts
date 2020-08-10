import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FileUtil } from '../util-classes';

@Component({
    selector: 'app-music-services',
    templateUrl: './music-services.component.html',
    styleUrls: ['./music-services.component.scss']
})
export class MusicServicesComponent extends FileUtil {

    pageConfig: IConfig["musicServicesPage"];

    constructor(
        private configService: ConfigService
    ) {
        super();
        this.pageConfig = this.configService.config.musicServicesPage;
    }

    generateImageUrl(filename: string): string {
        return `url(${this.resolveFilename(filename)})`;
    }

    get showTitle(): boolean {
        return !!this.pageConfig.title;
    }

    get showSubtitle(): boolean {
        return !!this.pageConfig.subtitle;
    }

}
