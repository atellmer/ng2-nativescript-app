"use strict";
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert('your email is: ' + this.email + '\n' + 'your password is: ' + this.password);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['pages/login/login.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map