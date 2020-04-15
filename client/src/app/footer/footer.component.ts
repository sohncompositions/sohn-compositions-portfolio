import { Component, AfterViewChecked, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { ConfigService } from '../services/config.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewChecked {

    pageConfig: IConfig['footer'];
    scrolling: boolean;

    @ViewChild('movieScrollWrapper') movieScrollWrapper: ElementRef<HTMLDivElement>;
    @ViewChild('scrollingText') scrollingText: ElementRef<HTMLParagraphElement>;

    constructor(
        public audioService: AudioService,
        private configService: ConfigService
    ) {
        this.pageConfig = this.configService.config.footer;
    }

    ngAfterViewChecked() {
        this.applyMovieScroll();
    }

    applyPulse() {
        return this.audioService.playing ? 'pulse' : '';
    }

    private applyMovieScroll() {
        const comparison = this.isScrollTextTooWide();
        if (
            this.shouldScrollTextUpdate(comparison) &&
            this.audioService.playing
        ) {
            this.setScrollingText(comparison);
        }
    }

    private shouldScrollTextUpdate(widthComparison: boolean): boolean {
        return widthComparison !== this.scrolling;
    }

    private setScrollingText(scrolling: boolean): Promise<boolean> {
        return Promise.resolve().then(() => {
            return this.scrolling = scrolling;
        });
    }

    private isScrollTextTooWide(): boolean {
        if (!this.movieScrollWrapper || !this.scrollingText) {
            return false;
        }

        const wrapperWidth = this.movieScrollWrapper.nativeElement.offsetWidth;
        const textWidth = this.scrollingText.nativeElement.offsetWidth;
        return textWidth > wrapperWidth;
    }

    provideScrollClass(): string {
        return this.scrolling && this.audioService.playing ? 'scrolling' : '';
    }

}
