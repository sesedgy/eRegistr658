System.register(['@angular/core', "../models/user"], function(exports_1, context_1) {
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
    var core_1, user_1;
    var DataUserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            DataUserService = (function () {
                function DataUserService() {
                }
                DataUserService.prototype.getUser = function (id) {
                    var user = new user_1.User();
                    return user;
                };
                DataUserService.prototype.setUser = function (tokenId) {
                    //Куки действительны втечении одного дня
                    var date = new Date();
                    date.setDate(date.getDate() + 1);
                    document.cookie = 'TokenId=' + tokenId + ';path=/;expires=' + date.toUTCString() + ';';
                };
                DataUserService.prototype.updateUser = function () {
                    var date = new Date(0);
                    document.cookie = "TokenId=; path=/; expires=" + date.toUTCString();
                };
                DataUserService.prototype.deleteUser = function () {
                    var cookie = document.cookie;
                    var rights = cookie.slice(6, 42);
                    var date = new Date(cookie.slice(58, -1)).getTime();
                    var now = Date.now();
                    if (((now - date) > 86400000) && ((now - date) < 100000000)) {
                        document.cookie = "Rights=; path=/; expires=" + new Date(0).toUTCString();
                        var dateNow = new Date();
                        dateNow.setDate(dateNow.getDate() + 1);
                        document.cookie = 'Rights=' + rights + ';path=/;expires=' + dateNow.toUTCString() + ';';
                    }
                    return rights;
                };
                DataUserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataUserService);
                return DataUserService;
            }());
            exports_1("DataUserService", DataUserService);
        }
    }
});
//# sourceMappingURL=data-user.service.js.map