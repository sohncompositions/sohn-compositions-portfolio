import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    tracks: ITrack[];
    currentTrack: ITrack;
    categories: string[];

    constructor(private configService: ConfigService) {
        this.tracks = this.configService.config.audioPlayer.tracks;
        this.categories = this.configService.config.audioPlayer.categories;
    }

    changeTrack(track: ITrack) { this.currentTrack = track; }
}
