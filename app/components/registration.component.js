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
                    this.chapter = "1";
                }
                RegistrationComponent.prototype.ngAfterViewInit = function () {
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
                    this.firstStageVisible = true;
                    this.secondStageVisible = false;
                };
                RegistrationComponent.prototype.adressLiveCheckBox = function () {
                };
                RegistrationComponent.prototype.adressCustomerCheckBox = function () {
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'registration',
                        templateUrl: 'app/views/registration.html',
                        styles: ["\n    .row{margin-right: 0px; margin-left: 0px;}\n    input.ng-touched.ng-invalid {border:solid red 2px;}\n    input.ng-touched.ng-valid {border:solid green 2px;}\n    select.ng-touched.ng-invalid {border:solid red 2px;}\n    select.ng-touched.ng-valid {border:solid green 2px;}\n    "]
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