import { Component, ViewChild, ElementRef, HostListener, AfterViewInit, OnDestroy } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.scss'],
})

export class AudioPlayerComponent implements AfterViewInit, OnDestroy {

    @ViewChild('audioPlayer') audioPlayer: ElementRef<HTMLAudioElement>;
    subscriptions: Subscription[] = [];
    error = false;

    constructor(public audioService: AudioService) { }

    ngAfterViewInit(): void {
        this.subscriptions.push(
            this.audioService.onTrackChange.subscribe(track => {
                this.audioService.getAudioSource(track.filename)
                    .subscribe(data => {
                        const blob = new Blob([data], { type: "audio/mp3" });
                        const url = window.URL.createObjectURL(blob);
                        this.audioPlayer.nativeElement.src = url;
                        this.error = false;
                    }, () => {
                        this.error = true;
                        this.audioPlayer.nativeElement.src = '';
                    });
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    handleSelectTrack(track: ITrack): void {
        this.audioService.changeTrack(track);
    }

    handleNext(): void {
        this.audioService.goToNextTrack();
    }

    handlePrev(): void {
        this.audioService.goToPrevTrack();
    }

    @HostListener('play')
    handlePlay(): void {
        this.audioService.setPlaying(true);
    }

    @HostListener('pause')
    handlePause(): void {
        this.audioService.setPlaying(false);
    }
}
