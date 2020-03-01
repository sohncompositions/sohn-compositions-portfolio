import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    categories: string[];
    selectedCategoryIndex: number;

    constructor(private audioService: AudioService) {
        this.categories = this.audioService.categories;
    }
    determineColor(i: number) {
        return i === this.selectedCategoryIndex ? 'accent' : 'primary';
    }
    onClick(i: number, category: string) {
        this.selectedCategoryIndex = i;
        this.selectRandomTrackByCategory(category);
    }
    selectRandomTrackByCategory(category: string): void {
        const randomize = (x) => Math.floor(Math.random() * x);

        const filteredByCategory = this.audioService.tracks.filter(c => c.category === category);
        if (filteredByCategory.length < 1) {
            throw Error(`No tracks with Category ID=${category} exist. Check settings in 'config.json'`);
        }

        /*
        * Choose track from chosen category at random.
        * If it is already playing and there are other options, loop until a different index is selected.
        */
        let randomIndex = randomize(filteredByCategory.length);
        while (
            filteredByCategory[randomIndex] === this.audioService.currentTrack &&
            filteredByCategory.length > 1
        ) {
            randomIndex = randomize(filteredByCategory.length);
        }

        this.audioService.changeTrack(filteredByCategory[randomIndex]);
    }
}
