System.register(['@angular/core', '@angular/http', "../appSettings"], function(exports_1, context_1) {
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
    var core_1, http_1, appSettings_1;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (appSettings_1_1) {
                appSettings_1 = appSettings_1_1;
            }],
        execute: function() {
            HttpService = (function () {
                function HttpService(http) {
                    this.http = http;
                    this.urlServer = appSettings_1.AppSettings.API_SRC;
                }
                HttpService.prototype.get = function (urlApi) {
                    return this.http.get(this.urlServer + urlApi);
                };
                HttpService.prototype.post = function (urlApi, obj) {
                    var body = JSON.stringify(obj);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8' });
                    return this.http.post(this.urlServer + urlApi, body, { headers: headers })
                        .map(function (resp) { return resp.json(); });
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpService);
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});
//# sourceMappingURL=http.service.js.map