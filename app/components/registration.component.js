System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var Abiturient, User, RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Abiturient = (function () {
                function Abiturient() {
                }
                return Abiturient;
            }());
            exports_1("Abiturient", Abiturient);
            User = (function () {
                function User() {
                }
                return User;
            }());
            exports_1("User", User);
            RegistrationComponent = (function () {
                function RegistrationComponent() {
                    this.abiturient = new Abiturient();
                    this.firstStageVisible = false;
                    this.secondStageVisible = true;
                    this.thirdStageVisible = true;
                    this.fourthStageVisible = true;
                    this.fifthStageVisible = true;
                    this.isCheckAgreement = true;
                    this.chapter = "1";
                }
                RegistrationComponent.prototype.ngAfterViewInit = function () {
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
                        maxFilePreviewSize: 200
                    });
                    $("#mobilePhone").mask("+7(999)999-99-99");
                    $("#mobilePhoneMother").mask("+7(999)999-99-99");
                    $("#mobilePhoneFather").mask("+7(999)999-99-99");
                };
                RegistrationComponent.prototype.firstStageNext = function () {
                    this.firstStageVisible = true;
                    this.secondStageVisible = false;
                    this.chapter = "2";
                };
                RegistrationComponent.prototype.firstStageSmallCard = function () {
                    //TODO Предварительная заявка
                };
                RegistrationComponent.prototype.secondStagePrev = function () {
                    this.firstStageVisible = false;
                    this.secondStageVisible = true;
                    this.chapter = "1";
                };
                RegistrationComponent.prototype.secondStageNext = function () {
                    this.secondStageVisible = true;
                    this.thirdStageVisible = false;
                    this.chapter = "3";
                };
                RegistrationComponent.prototype.thirdStagePrev = function () {
                    this.secondStageVisible = false;
                    this.thirdStageVisible = true;
                    this.chapter = "2";
                };
                RegistrationComponent.prototype.thirdStageNext = function () {
                    this.thirdStageVisible = true;
                    this.fourthStageVisible = false;
                    this.chapter = "4";
                };
                RegistrationComponent.prototype.fourthStagePrev = function () {
                    this.thirdStageVisible = false;
                    this.fourthStageVisible = true;
                    this.chapter = "3";
                };
                RegistrationComponent.prototype.fourthStageNext = function () {
                    this.fourthStageVisible = true;
                    this.fifthStageVisible = false;
                    this.chapter = "5";
                };
                RegistrationComponent.prototype.fifthStagePrev = function () {
                    this.fourthStageVisible = false;
                    this.fifthStageVisible = true;
                    this.chapter = "4";
                };
                RegistrationComponent.prototype.finishRegistration = function () {
                    //TODO Отправить заявку заявка
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
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'registration',
                        templateUrl: 'app/views/registration.html',
                        styles: ["\n    .formRegistration {\n        height:620px;\n    }\n    @media (max-width: 1200px){\n    .formRegistration {\n        height:initial;\n    }} \n    .row{margin-right: 0px; margin-left: 0px;}\n    input.ng-touched.ng-invalid {border:solid red 2px;}\n    input.ng-touched.ng-valid {border:solid green 2px;}\n    select.ng-touched.ng-invalid {border:solid red 2px;}\n    select.ng-touched.ng-valid {border:solid green 2px;}\n    .red{color: red;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map