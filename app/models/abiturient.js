System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Abiturient;
    return {
        setters:[],
        execute: function() {
            Abiturient = (function () {
                function Abiturient(id, lastName, name, middleName) {
                    this.id = id;
                    this.lastName = lastName;
                    this.name = name;
                    this.middleName = middleName;
                }
                return Abiturient;
            }());
            exports_1("Abiturient", Abiturient);
        }
    }
});
//# sourceMappingURL=abiturient.js.map