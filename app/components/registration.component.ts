import { Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'registration',
    templateUrl: 'app/views/registration.html',
    styles:[`
    .row{margin-right: 0px; margin-left: 0px;}
    `]
})
export class RegistrationComponent {

    firstStageVisible: boolean = false;
    secondStageVisible: boolean = true;
    chapter: string = "1"

    firstStageNext(){
        this.firstStageVisible =  true;
        this.secondStageVisible =  false;
        this.chapter = "2";
    }
    secondStagePrev(){
        this.firstStageVisible =  false;
        this.secondStageVisible =  true;
        this.chapter = "1";
    }
}