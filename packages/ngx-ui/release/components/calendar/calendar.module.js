import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalendarComponent } from './calendar.component';
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CalendarComponent],
                    exports: [CalendarComponent],
                    imports: [CommonModule, FormsModule, MomentModule, FlexLayoutModule]
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());
export { CalendarModule };
//# sourceMappingURL=calendar.module.js.map