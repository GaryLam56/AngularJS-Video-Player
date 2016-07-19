import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Angular 2 for beginners - Tutorial 7 - Components", "f8qBeaGe2S4", "Angular 2"),
            new Video(1, "Angular 2 for beginners - Tutorial 8 - Passing Data to compoents", "bKWDKmHvF78", "Angular 2")
        ]
    }
}
