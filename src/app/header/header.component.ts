import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    appMenuOpen = false;
    toggleOpenMenu() {
        this.appMenuOpen = !this.appMenuOpen;
    }
}
