System.register(['@angular/core', "../models/abiturient", "../models/user", "../services/http.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, abiturient_1, user_1, http_service_1;
    var RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (abiturient_1_1) {
                abiturient_1 = abiturient_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent(httpService) {
                    this.httpService = httpService;
                    this.abiturient = new abiturient_1.Abiturient();
                    this.user = new user_1.User();
                    this.photo = null;
                    this.abiturientIsMale = false;
                    this.loginIsHidden = true;
                    this.emailIsHidden = true;
                    this.firstStageHidden = false;
                    this.secondStageHidden = true;
                    this.thirdStageHidden = true;
                    this.fourthStageHidden = true;
                    this.fifthStageHidden = true;
                    this.sixthStageHidden = true;
                    this.isCheckAgreement = true;
                    this.isPhysicalCustomerDisable = false;
                    this.isMilitaryTicketDisable = true;
                    this.chapter = "1";
                    this.chapterTotal = "5";
                }
                RegistrationComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.httpService.get('specialties/getAll').subscribe(function (body) {
                        _this.allSpecialtyObjects = body.json();
                        var specialityObjectsForEach = [];
                        specialityObjectsForEach.push("");
                        _this.allSpecialtyObjects.forEach(function (item) {
                            if (specialityObjectsForEach.indexOf(item.nameSpecialty) === -1) {
                                specialityObjectsForEach.push(item.nameSpecialty);
                            }
                        });
                        _this.specialtyObjects = specialityObjectsForEach;
                    });
                    $('#myModal').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                    $("#photo").fileinput({
                        showUpload: false,
                        language: 'ru',
                        showRemove: false,
                        previewFileType: 'text',
                        allowedFileExtensions: ['jpg', 'jpeg', 'png'],
                        maxFileSize: 200
                    });
                    $("#mobilePhone").mask("+7(999)999-99-99");
                    $("#mobilePhoneMother").mask("+7(999)999-99-99");
                    $("#mobilePhoneFather").mask("+7(999)999-99-99");
                    $("#phoneOfTheOrganisation").mask("+7(999)999-99-99");
                };
                RegistrationComponent.prototype.firstStageNext = function () {
                    var _this = this;
                    this.httpService.get('users/isLoginAndEmailFree/' + this.user.login + '&' + this.user.email).subscribe(function (body) { return _this.firstStageNextSuccess(body.json()); });
                };
                RegistrationComponent.prototype.firstStageNextSuccess = function (body) {
                    this.loginIsHidden = body[0];
                    this.emailIsHidden = body[1];
                    if (!body[0] || !body[1]) {
                        return;
                    }
                    this.firstStageHidden = true;
                    this.secondStageHidden = false;
                    this.chapter = "2";
                };
                RegistrationComponent.prototype.secondStagePrev = function () {
                    this.firstStageHidden = false;
                    this.secondStageHidden = true;
                    this.chapter = "1";
                };
                RegistrationComponent.prototype.secondStageNext = function () {
                    this.secondStageHidden = true;
                    this.thirdStageHidden = false;
                    this.chapter = "3";
                };
                RegistrationComponent.prototype.thirdStagePrev = function () {
                    this.secondStageHidden = false;
                    this.thirdStageHidden = true;
                    this.chapter = "2";
                };
                RegistrationComponent.prototype.thirdStageNext = function () {
                    this.thirdStageHidden = true;
                    this.fourthStageHidden = false;
                    this.chapter = "4";
                };
                RegistrationComponent.prototype.fourthStagePrev = function () {
                    this.thirdStageHidden = false;
                    this.fourthStageHidden = true;
                    this.chapter = "3";
                };
                RegistrationComponent.prototype.fourthStageNext = function () {
                    this.fourthStageHidden = true;
                    this.fifthStageHidden = false;
                    this.chapter = "5";
                };
                RegistrationComponent.prototype.fifthStagePrev = function () {
                    this.fourthStageHidden = false;
                    this.fifthStageHidden = true;
                    this.chapter = "4";
                };
                RegistrationComponent.prototype.fifthStageNext = function () {
                    this.fifthStageHidden = true;
                    this.sixthStageHidden = false;
                    this.abiturientIsMale = false;
                    this.chapter = "6";
                };
                RegistrationComponent.prototype.sixthStagePrev = function () {
                    this.fifthStageHidden = false;
                    this.sixthStageHidden = true;
                    this.chapter = "5";
                };
                RegistrationComponent.prototype.finishRegistration = function () {
                    //TODO Отправить заявку заявка
                    this.abiturient.id = this.guid();
                    this.user.id = this.guid();
                    this.abiturient.userId = this.user.id;
                    this.user.idClient = this.abiturient.id;
                    this.abiturient.createdDate = new Date().toUTCString();
                    this.user.createdDate = new Date().toUTCString();
                    var requestBody = [this.user, this.abiturient, this.takePhotoForRequest];
                    this.httpService.post('api/abiturients/create', requestBody);
                };
                RegistrationComponent.prototype.takePhotoForRequest = function () {
                    var formData = new FormData();
                    formData.append('uploadFile', this.photo, this.photo.name);
                    return formData;
                };
                RegistrationComponent.prototype.adressLiveCheckBoxFunction = function ($event) {
                    if ($event.target.checked) {
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
                    else {
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
                };
                RegistrationComponent.prototype.adressCustomerCheckBoxFunction = function ($event) {
                    if ($event.target.checked) {
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
                    else {
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
                };
                RegistrationComponent.prototype.checkBoxAgreementAccept = function ($event) {
                    this.isCheckAgreement = !$event.target.checked;
                };
                RegistrationComponent.prototype.isMilitaryChange = function () {
                    if (this.isMilitary == "Да") {
                        this.chapterTotal = "6";
                        this.abiturientIsMale = true;
                    }
                    else {
                        this.chapterTotal = "5";
                        this.abiturientIsMale = false;
                    }
                };
                RegistrationComponent.prototype.militaryDocumentChange = function ($event) {
                    this.isMilitaryTicketDisable = $event.target.value === "Военный билет";
                };
                RegistrationComponent.prototype.specialtyChange = function () {
                    var formOfEducationObjectsForEach = [];
                    var selectedSpecialty = this.abiturient.specialty;
                    this.allSpecialtyObjects.forEach(function (item) {
                        if (selectedSpecialty === item.nameSpecialty) {
                            if (formOfEducationObjectsForEach.indexOf(item.formOfEducation) === -1) {
                                formOfEducationObjectsForEach.push(item.formOfEducation);
                            }
                        }
                    });
                    this.formOfEducationObjects = formOfEducationObjectsForEach;
                };
                RegistrationComponent.prototype.formOfEducationChange = function () {
                    var qualificationObjectsForEach = [];
                    var selectedSpecialty = this.abiturient.specialty;
                    var selectedFormOfEducation = this.abiturient.formOfEducation;
                    this.allSpecialtyObjects.forEach(function (item) {
                        if (selectedSpecialty === item.nameSpecialty && selectedFormOfEducation === item.formOfEducation) {
                            if (qualificationObjectsForEach.indexOf(item.qualification) === -1) {
                                qualificationObjectsForEach.push(item.qualification);
                            }
                        }
                    });
                    this.qualificationObjects = qualificationObjectsForEach;
                };
                RegistrationComponent.prototype.paymentFormChange = function ($event) {
                    this.isPhysicalCustomerDisable = $event.target.value === "Юридическое лицо";
                };
                RegistrationComponent.prototype.guid = function () {
                    function s4() {
                        return Math.floor((1 + Math.random()) * 0x10000)
                            .toString(16)
                            .substring(1);
                    }
                    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                        s4() + '-' + s4() + s4() + s4();
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'registration',
                        templateUrl: 'app/views/registration.html',
                        styles: ["\n    .formRegistration {\n        height:620px;\n    }\n    @media (max-width: 1200px){\n    .formRegistration {\n        height:initial;\n    }} \n    .row{margin-right: 0px; margin-left: 0px;}\n    input.ng-touched.ng-invalid {border:solid red 2px;}\n    input.ng-touched.ng-valid {border:solid green 2px;}\n    select.ng-touched.ng-invalid {border:solid red 2px;}\n    select.ng-touched.ng-valid {border:solid green 2px;}\n    .red{color: red;}\n    "],
                        providers: [http_service_1.HttpService]
                    }), 
                    __metadata('design:paramtypes', [http_service_1.HttpService])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map