import { Component, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewChecked {

    scrolling: boolean;

    @ViewChild('movieScrollWrapper') movieScrollWrapper: ElementRef<HTMLDivElement>;
    @ViewChild('scrollingText') scrollingText: ElementRef<HTMLParagraphElement>;

    constructor(public audioService: AudioService) { }

    ngAfterViewChecked() {
        this.applyMovieScroll();
    }

    private applyMovieScroll() {
        const comparison = this.isScrollTextTooWide();
        if (this.shouldScrollTextUpdate(comparison)) {
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
        return this.scrolling ? 'scrolling' : '';
    }

    // grab references to wrapper and text. if width of text is longer than wrapper, add 'scroll' class
}
