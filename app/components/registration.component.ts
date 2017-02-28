import { Component, AfterViewInit} from '@angular/core';
import {FileUploaderComponent} from './file-uploader.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, NgModel}   from '@angular/forms';
declare var $:any;


export class Abiturient{
    public lastName: string;
    public firstName: string;
    public middleName: string;
    public birthDate: string;
    public mobilePhone: string;
    public citizenship: string;
    public sex: string;
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
    public countryLive: string;
    public cityLive: string;
    public regionLive: string;
    public districtLive: string;
    public localityLive: string;
    public streetLive: string;
    public houseLive: string;
    public buildingLive: string;
    public housingLive: string;
    public flatLive: string;
    public indexLive: string;
    public lastNameMother: string;
    public firstNameMother: string;
    public middleNameMother: string;
    public mobilePhoneMother: string;
    public lastNameFather: string;
    public firstNameFather: string;
    public middleNameFather: string;
    public mobilePhoneFather: string;
    public levelEducation: string;
    public seriesEducationDocument: string;
    public numberEducationDocument: string;
    public dateEducationDocument: string;
    public whoGiveEducationDocument: string;
    public uploadedFileName: string;
    public paymentForm: string;
    public lastNameCustomer: string;
    public firstNameCustomer: string;
    public middleNameCustomer: string;
    public mobilePhoneCustomer: string;
    public passportSeriesCustomer: string;
    public passportNumberCustomer: string;
    public passportDateCustomer: string;
    public passportIssueOrgCustomer: string;
    public countryCustomer: string;
    public cityCustomer: string;
    public regionCustomer: string;
    public districtCustomer: string;
    public localityCustomer: string;
    public streetCustomer: string;
    public houseCustomer: string;
    public buildingCustomer: string;
    public housingCustomer: string;
    public flatCustomer: string;
    public nameOfTheOrganization: string;
    public INN: string;
    public KPP: string;
    public legalAddress: string;
    public actualAddress: string;
    public nameOfTheBank: string;
    public INNOfTheBank: string;
    public BICOfTheBank: string;
    public checkingAccount: string;
    public correspondingAccount: string;
    public FIORepresentative: string;
    public phoneOfTheOrganisation: string;

}

export class User{

}

@Component({
    selector: 'registration',
    templateUrl: 'app/views/registration.html',
    styles:[`
    .formRegistration {
        height:620px;
    }
    @media (max-width: 1200px){
    .formRegistration {
        height:initial;
    }}  
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
        //TODO Отправить заявку заявка
    }

    adressLiveCheckBoxFunction($event){
        if($event.target.checked){
            this.abiturient.countryLive = this.abiturient.countryRegistration;
            this.abiturient.cityLive = this.abiturient.cityRegistration;
            this.abiturient.regionLive = this.abiturient.regionRegistration;
            this.abiturient.districtLive = this.abiturient.districtRegistration;
            this.abiturient.localityLive = this.abiturient.localityRegistration;
            this.abiturient.streetLive = this.abiturient.streetRegistration;
            this.abiturient.houseLive = this.abiturient.houseRegistration;
            this.abiturient.buildingLive = this.abiturient.buildingRegistration;
            this.abiturient.housingLive = this.abiturient.housingRegistration;
            this.abiturient.flatLive = this.abiturient.flatRegistration;
            this.abiturient.indexLive = this.abiturient.indexRegistration;
        }
        else{
            this.abiturient.countryLive = "";
            this.abiturient.cityLive = "";
            this.abiturient.regionLive = "";
            this.abiturient.districtLive = "";
            this.abiturient.localityLive = "";
            this.abiturient.streetLive = "";
            this.abiturient.houseLive = "";
            this.abiturient.buildingLive = "";
            this.abiturient.housingLive = "";
            this.abiturient.flatLive = "";
            this.abiturient.indexLive = "";
        }
    }

    adressCustomerCheckBoxFunction($event){
        if($event.target.checked){
            this.abiturient.countryCustomer = this.abiturient.countryRegistration;
            this.abiturient.cityCustomer = this.abiturient.cityRegistration;
            this.abiturient.regionCustomer = this.abiturient.regionRegistration;
            this.abiturient.districtCustomer = this.abiturient.districtRegistration;
            this.abiturient.localityCustomer = this.abiturient.localityRegistration;
            this.abiturient.streetCustomer = this.abiturient.streetRegistration;
            this.abiturient.houseCustomer = this.abiturient.houseRegistration;
            this.abiturient.buildingCustomer = this.abiturient.buildingRegistration;
            this.abiturient.housingCustomer = this.abiturient.housingRegistration;
            this.abiturient.flatCustomer = this.abiturient.flatRegistration;
        }
        else{
            this.abiturient.countryCustomer = "";
            this.abiturient.cityCustomer = "";
            this.abiturient.regionCustomer = "";
            this.abiturient.districtCustomer = "";
            this.abiturient.localityCustomer = "";
            this.abiturient.streetCustomer = "";
            this.abiturient.houseCustomer = "";
            this.abiturient.buildingCustomer = "";
            this.abiturient.housingCustomer = "";
            this.abiturient.flatCustomer = "";
        }
    }

}