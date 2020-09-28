import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    tracks: ITrack[];
    previousTrack: ITrack;
    currentTrack: ITrack;
    categories: string[];
    onTrackChange = new Subject<ITrack>();
    playing = false;

    constructor(
        private configService: ConfigService,
        private httpClient: HttpClient
    ) {
        this.tracks = this.configService.config.audioPlayer.tracks;
        this.categories = this.configService.config.audioPlayer.categories;
    }

    getAudioSource(filename: string): Observable<ArrayBuffer> {
        const { apiURL } = this.configService.config.audioPlayer;
        return this.httpClient.get(`${apiURL}/${filename}`, { responseType: 'arraybuffer' });
    }

    setPlaying(playing: boolean): void {
        this.playing = playing;
    }

    changeTrack(track: ITrack): void {
        this.previousTrack = { ...this.currentTrack };
        this.currentTrack = track;
        this.onTrackChange.next(track);
    }

    goToPrevTrack(): void {
        const prevTrackIndex = this.tracks.indexOf(this.currentTrack) + this.tracks.length - 1;
        this.changeTrack(this.tracks[prevTrackIndex % this.tracks.length]);
    }

    goToNextTrack(): void {
        const nextTrackIndex = this.tracks.indexOf(this.currentTrack) + 1;
        this.changeTrack(this.tracks[nextTrackIndex % this.tracks.length]);
    }
}
