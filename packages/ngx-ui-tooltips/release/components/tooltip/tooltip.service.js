var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Injectable } from '@angular/core';
import { InjectionRegisteryService, InjectionService } from '../../services';
import { TooltipContentComponent } from '.';
var TooltipService = /** @class */ (function (_super) {
    __extends(TooltipService, _super);
    function TooltipService(injectionService) {
        var _this = _super.call(this, injectionService) || this;
        _this.type = TooltipContentComponent;
        return _this;
    }
    TooltipService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TooltipService.ctorParameters = function () { return [
        { type: InjectionService, },
    ]; };
    return TooltipService;
}(InjectionRegisteryService));
export { TooltipService };
//# sourceMappingURL=tooltip.service.js.map