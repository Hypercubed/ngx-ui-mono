import { NgModule } from '@angular/core';
import { InjectionService } from './services';
import { TooltipModule, TooltipService } from './components';
/**
 * Exported Modules
 * @type {Array}
 */
var modules = [
    TooltipModule
];
var NgxUIToltipsModule = /** @class */ (function () {
    function NgxUIToltipsModule() {
    }
    NgxUIToltipsModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        InjectionService,
                        TooltipService
                    ],
                    exports: modules.slice(),
                    imports: modules.slice()
                },] },
    ];
    /** @nocollapse */
    NgxUIToltipsModule.ctorParameters = function () { return []; };
    return NgxUIToltipsModule;
}());
export { NgxUIToltipsModule };
//# sourceMappingURL=ngx-ui.module.js.map