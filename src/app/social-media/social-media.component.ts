import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks: ISocialMediaLink[] = [];

  constructor(
    private configService: ConfigService
  ) {
    this.socialMediaLinks = this.configService.config.socialMediaLinks;
  }

  ngOnInit(): void { }
  generateIcon(name: string, prefix: string = 'fa'): string {
    return `${prefix}-${name}`;
  }
}
