"use strict";
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var AppComponent = (function () {
    function AppComponent() {
        this.operation = '';
        this.result = '';
    }
    AppComponent.prototype.append = function (element) {
        this.operation += element;
    };
    AppComponent.prototype.undo = function () {
        if (this.operation != '') {
            this.operation = this.operation.slice(0, -1);
        }
    };
    AppComponent.prototype.clear = function () {
        this.operation = '';
    };
    AppComponent.prototype.evaluate = function () {
        try {
            this.result = eval(this.operation);
        }
        catch (e) {
            dialogs.alert({ title: 'Error', message: 'Cannot evaluate expression!', okButtonText: 'OK' });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.xml"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map