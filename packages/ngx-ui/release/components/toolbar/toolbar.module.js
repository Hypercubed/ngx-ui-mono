import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DropdownModule } from '../dropdown';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarTitleDirective } from './toolbar-title.directive';
import { ToolbarContentDirective } from './toolbar-content.directive';
var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
    }
    ToolbarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ToolbarComponent, ToolbarTitleDirective, ToolbarContentDirective],
                    exports: [ToolbarComponent, ToolbarTitleDirective, ToolbarContentDirective],
                    imports: [CommonModule, DropdownModule, FlexLayoutModule]
                },] },
    ];
    /** @nocollapse */
    ToolbarModule.ctorParameters = function () { return []; };
    return ToolbarModule;
}());
export { ToolbarModule };
//# sourceMappingURL=toolbar.module.js.map