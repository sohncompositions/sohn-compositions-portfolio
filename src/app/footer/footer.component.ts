import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    constructor(public audioService: AudioService) { }
}
