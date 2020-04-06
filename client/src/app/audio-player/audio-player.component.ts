import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.scss'],
})

export class AudioPlayerComponent {
    playing = false;

    @ViewChild('audioPlayer') audioPlayer: ElementRef<HTMLAudioElement>;

    constructor(public audioService: AudioService) { }

    handleSelectTrack(track) {
        this.audioService.changeTrack(track);
    }
    getAudioSource() {
        const path = '../../assets/audio/';
        return this.audioService.currentTrack ? path + this.audioService.currentTrack.filename : '';
    }

    handleNext() {
        this.audioService.goToNextTrack();
    }

    handlePrev() {
        this.audioService.goToPrevTrack();
    }

    @HostListener('play')
    handlePlay() {
        this.audioService.setPlaying(true);
    }

    @HostListener('pause')
    handlePause() {
        this.audioService.setPlaying(false);
    }
}
