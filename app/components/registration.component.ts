import { Component, AfterViewInit} from '@angular/core';
declare var $:any;
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, NgModel}   from '@angular/forms';


export class Abiturient{
    public lastName: string;
    public citizenship: string;
    public birthDate: string;
    public firstName: string;
    public sex: string;
    public mobilePhone: string;
    public middleName: string;
    public nation: string;
    public specialty: string;
    public formOfEducation: string;
    public qualification: string;
    public email: string;
    public typeStudentDocument: string;
    public passportSeries: string;
    public passportNumber: string;
    public passportDate: string;
    public passportIssueOrg: string;
    public countryRegistration: string;
    public cityRegistration: string;
    public regionRegistration: string;
    public districtRegistration: string;
    public localityRegistration: string;
    public streetRegistration: string;
    public houseRegistration: string;
    public buildingRegistration: string;
    public housingRegistration: string;
    public flatRegistration: string;
    public indexRegistration: string;
}

export class User{
    public title: string;
    public price: number;
    public company: string;
}

@Component({
    selector: 'registration',
    templateUrl: 'app/views/registration.html',
    styles:[`
    .row{margin-right: 0px; margin-left: 0px;}
    input.ng-touched.ng-invalid {border:solid red 2px;}
    input.ng-touched.ng-valid {border:solid green 2px;}
    select.ng-touched.ng-invalid {border:solid red 2px;}
    select.ng-touched.ng-valid {border:solid green 2px;}
    `]
})
export class RegistrationComponent {



    abiturient: Abiturient = new Abiturient();
    firstStageVisible: boolean = false;
    secondStageVisible: boolean = true;
    thirdStageVisible: boolean = true;
    fourthStageVisible: boolean = true;
    fifthStageVisible: boolean = true;
    chapter: string = "1"

    ngAfterViewInit() {
        $("#mobilePhone").mask("+7(999)999-99-99");
        $("#mobilePhoneMother").mask("+7(999)999-99-99");
        $("#mobilePhoneFather").mask("+7(999)999-99-99");
    }

    firstStageNext(){
        this.firstStageVisible =  true;
        this.secondStageVisible =  false;
        this.chapter = "2";
    }
    firstStageSmallCard(){
    //TODO Предварительная заявка
    }
    secondStagePrev(){
        this.firstStageVisible =  false;
        this.secondStageVisible =  true;
        this.chapter = "1";
    }
    secondStageNext(){
        this.secondStageVisible =  true;
        this.thirdStageVisible =  false;
        this.chapter = "3";
    }
    thirdStagePrev(){
        this.secondStageVisible =  false;
        this.thirdStageVisible =  true;
        this.chapter = "2";
    }
    thirdStageNext(){
        this.thirdStageVisible =  true;
        this.fourthStageVisible =  false;
        this.chapter = "4";
    }
    fourthStagePrev(){
        this.thirdStageVisible =  false;
        this.fourthStageVisible =  true;
        this.chapter = "3";
    }
    fourthStageNext(){
        this.fourthStageVisible =  true;
        this.fifthStageVisible =  false;
        this.chapter = "5";
    }
    fifthStagePrev(){
        this.fourthStageVisible =  false;
        this.fifthStageVisible =  true;
        this.chapter = "4";
    }
    finishRegistration(){
        this.firstStageVisible =  true;
        this.secondStageVisible =  false;
    }

    adressLiveCheckBox(){

    }

    adressCustomerCheckBox(){

    }

}