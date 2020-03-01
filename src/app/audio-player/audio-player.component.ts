import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.scss'],
})

export class AudioPlayerComponent {
    constructor(public audioService: AudioService) { }

    handleSelectTrack(track) {
        this.audioService.changeTrack(track);
    }
    getAudioSource() {
        return this.audioService.currentTrack ? this.audioService.currentTrack.src : '';
    }
}
