import { Component, AfterViewInit} from '@angular/core';
import {Abiturient} from "../models/abiturient";
import {User} from "../models/user";
import {Response} from "@angular/http";
import {HttpService} from "../services/http.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Specialty} from "../models/specialty";
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
    photo: File = null;
    loginIsVisible: boolean = true;
    emailIsVisible: boolean = true;
    firstStageHidden: boolean = false;
    secondStageVisible: boolean = true;
    thirdStageVisible: boolean = true;
    fourthStageVisible: boolean = true;
    fifthStageVisible: boolean = true;
    isCheckAgreement: boolean = true;
    isPhysicalCustomerDisable: boolean = false;
    chapter: string = "1";
    allSpecialtyObjects: Specialty[];
    specialtyObjects: string[];
    formOfEducationObjects: string[];
    qualificationObjects: string[];

    ngAfterViewInit() {
        this.httpService.get('specialties/getAll').subscribe(body => {
            this.allSpecialtyObjects = body.json();
            let specialityObjectsForEach = [];
            specialityObjectsForEach.push("");
            this.allSpecialtyObjects.forEach(function(item){
                if(specialityObjectsForEach.indexOf(item.nameSpecialty) === -1)
                {
                    specialityObjectsForEach.push(item.nameSpecialty);
                }
            });
            this.specialtyObjects = specialityObjectsForEach;
        });

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
        $("#phoneOfTheOrganisation").mask("+7(999)999-99-99");
    }

    firstStageNext(){
        this.httpService.get('users/isLoginAndEmailFree/' + this.user.login + '&' + this.user.email).subscribe(body => this.firstStageNextSuccess(body.json()));
    }

    firstStageNextSuccess(body){
        this.loginIsVisible = !body[0];
        this.emailIsVisible = !body[1];
        if(!body[0] || !body[1]){
            return;
        }
        this.firstStageHidden =  true;
        this.secondStageVisible =  false;
        this.chapter = "2";
    }

    secondStagePrev(){
        this.firstStageHidden =  false;
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
        this.abiturient.id = this.guid();
        this.user.id = this.guid();
        this.abiturient.userId = this.user.id;
        this.user.idClient = this.abiturient.id;
        this.abiturient.createdDate = new Date().toUTCString();
        this.user.createdDate = new Date().toUTCString();

        let requestBody = [this.user, this.abiturient, this.takePhotoForRequest];
        this.httpService.post('api/abiturients/create', requestBody);
    }

    takePhotoForRequest(){
        let formData: FormData = new FormData();
        formData.append('uploadFile', this.photo, this.photo.name);
        return formData;
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

    specialtyChange(){
        let formOfEducationObjectsForEach = [];
        let selectedSpecialty = this.abiturient.specialty;
        this.allSpecialtyObjects.forEach(function (item){
           if(selectedSpecialty === item.nameSpecialty){
               if(formOfEducationObjectsForEach.indexOf(item.formOfEducation) === -1)
               {
                   formOfEducationObjectsForEach.push(item.formOfEducation);
               }
           }
        });
        this.formOfEducationObjects = formOfEducationObjectsForEach;
    }

    formOfEducationChange(){
        let qualificationObjectsForEach = [];
        let selectedSpecialty = this.abiturient.specialty;
        let selectedFormOfEducation = this.abiturient.formOfEducation;
        this.allSpecialtyObjects.forEach(function (item){
           if(selectedSpecialty === item.nameSpecialty && selectedFormOfEducation === item.formOfEducation){
               if(qualificationObjectsForEach.indexOf(item.qualification) === -1)
               {
                   qualificationObjectsForEach.push(item.qualification);
               }
           }
        });
        this.qualificationObjects = qualificationObjectsForEach;
    }

    paymentFormChange($event){
        this.isPhysicalCustomerDisable = $event.target.value === "Юридическое лицо";
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }


}