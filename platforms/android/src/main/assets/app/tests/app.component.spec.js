"use strict";
var app_component_1 = require('../app.component');
var testing_1 = require('@angular/core/testing');
testing_1.beforeEachProviders(function () { return [app_component_1.AppComponent]; });
testing_1.describe('App: Angular2Calculator', function () {
    testing_1.describe('append');
    testing_1.it('adds element to operation', testing_1.inject([app_component_1.AppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=app.component.spec.js.map