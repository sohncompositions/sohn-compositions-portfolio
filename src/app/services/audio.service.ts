import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    tracks: ITrack[];
    previousTrack: ITrack;
    currentTrack: ITrack;
    categories: string[];

    playing = false;

    constructor(private configService: ConfigService) {
        this.tracks = this.configService.config.audioPlayer.tracks;
        this.categories = this.configService.config.audioPlayer.categories;
    }

    setPlaying(playing: boolean) {
        this.playing = playing;
    }

    changeTrack(track: ITrack) {
        this.previousTrack = { ...this.currentTrack };
        this.currentTrack = track;
    }

    goToPrevTrack() {
        const prevTrackIndex = this.tracks.indexOf(this.currentTrack) + this.tracks.length - 1;
        this.changeTrack(this.tracks[prevTrackIndex % this.tracks.length]);
    }

    goToNextTrack() {
        const nextTrackIndex = this.tracks.indexOf(this.currentTrack) + 1;
        this.changeTrack(this.tracks[nextTrackIndex % this.tracks.length]);
    }
}
