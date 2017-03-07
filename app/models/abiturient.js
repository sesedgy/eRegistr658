System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Abiturient;
    return {
        setters:[],
        execute: function() {
            Abiturient = (function () {
                function Abiturient() {
                }
                Abiturient.prototype.save = function () {
                    // HTTP request would go here
                    // console.log(this.name, this.email, this.rating);
                };
                return Abiturient;
            }());
            exports_1("Abiturient", Abiturient);
        }
    }
});
//# sourceMappingURL=abiturient.js.map