import { Injectable } from '@angular/core';
import config from '../config.json';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    config: IConfig;
    constructor() {
        this.config = config as IConfig;
    }
}
