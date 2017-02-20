import { Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'registration',
    templateUrl: 'app/views/registration.html'
})
export class RegistrationComponent {

    firstStageVisible: boolean = false;
    chapter: string = "1"

    firstStageNext(){
        this.firstStageVisible =  true;
        this.chapter = "2";
    }
}