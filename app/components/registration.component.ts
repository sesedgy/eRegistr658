import { Component, AfterViewInit} from '@angular/core';
import {Abiturient} from "../models/abiturient";
import {User} from "../models/user";
import {Response} from "@angular/http";
import {HttpService} from "../services/http.service";
declare var $:any;

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
    .red{color: red;}
    `],
    providers: [HttpService]
})
export class RegistrationComponent {

    constructor(private httpService: HttpService){}
    abiturient: Abiturient = new Abiturient();
    user: User = new User();
    loginIsCorrect: boolean = true;
    emailIsCorrect: boolean = true;
    firstStageVisible: boolean = false;
    secondStageVisible: boolean = true;
    thirdStageVisible: boolean = true;
    fourthStageVisible: boolean = true;
    fifthStageVisible: boolean = true;
    isCheckAgreement: boolean = true;
    chapter: string = "1";

    ngAfterViewInit() {
        $('#myModal').modal({
            backdrop: 'static',
            keyboard: false
        });
        $("#photo").fileinput({
            showUpload:false,
            language: 'ru',
            showRemove: false,
            previewFileType:'text',
            allowedFileExtensions: ['jpg', 'jpeg', 'png'],
            maxFilePreviewSize: 200
        });
        $("#mobilePhone").mask("+7(999)999-99-99");
        $("#mobilePhoneMother").mask("+7(999)999-99-99");
        $("#mobilePhoneFather").mask("+7(999)999-99-99");
    }

    testRequest(){
        this.httpService.get('users/login=' + this.user.login + '&email=' + this.user.email).subscribe(this.err);
    }

    err(res:Response){
        if(res[0]){
            this.loginIsCorrect = false;
        }
        if(res[1]){
            this.emailIsCorrect = false;
        }
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

    checkBoxAgreementAccept($event){
        this.isCheckAgreement = !$event.target.checked;
    }

}