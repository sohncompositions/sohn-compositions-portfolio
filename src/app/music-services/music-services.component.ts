import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-music-services',
    templateUrl: './music-services.component.html',
    styleUrls: ['./music-services.component.scss']
})
export class MusicServicesComponent {

    pageConfig: IConfig["musicServicesPage"];

    constructor(
        private configService: ConfigService,
        private router: Router
    ) {
        this.pageConfig = this.configService.config.musicServicesPage;
    }

    generateImageUrl(filename: string): string {
        return `url(${this.resolveFilename(filename)})`;
    }

    get showSellingPointsTitle(): boolean {
        return !!this.pageConfig.sellingPointSection.title;
    }

    get showTitle(): boolean {
        return !!this.pageConfig.title;
    }

    get showSubtitle(): boolean {
        return !!this.pageConfig.subtitle;
    }

    handleContactRouteChange(option: string): void {
        this.router.navigate(['/contact'], { state: { option } });
    }

    resolveFilename(filename: string): string {
        return `../../assets/images/${filename}`;
    }
}
