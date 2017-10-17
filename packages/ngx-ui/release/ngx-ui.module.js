import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InjectionService, IconRegisteryService } from './services';
import { DirectivesModule } from './directives';
import { PipesModule } from './pipes';
import { NgxUIToltipsModule } from '@swimlane/ngx-ui-tooltips/src/';
import { CalendarModule, CodeEditorModule, LoadingModule, DrawerModule, DropdownModule, ButtonModule, InputModule, SectionModule, SliderModule, TabsModule, ToolbarModule, OverlayModule, DialogModule, OverlayService, DialogService, DrawerService, ToggleModule, DateTimeModule, CheckboxModule, NotificationModule, NotificationService, SelectModule, IconModule, LoadingService, TreeModule, SplitModule, HotkeysModule, NagModule } from './components';
/**
 * Exported Modules
 * @type {Array}
 */
var modules = [
    CalendarModule, CodeEditorModule, DirectivesModule,
    DrawerModule, DropdownModule, ButtonModule, FlexLayoutModule,
    InputModule, SectionModule, SliderModule, TabsModule,
    ToolbarModule, CommonModule, FormsModule,
    OverlayModule, DialogModule, ToggleModule, DateTimeModule,
    CheckboxModule, NotificationModule, PipesModule, SelectModule,
    IconModule, LoadingModule, TreeModule, SplitModule, HotkeysModule, NagModule,
    NgxUIToltipsModule
];
var NgxUIModule = /** @class */ (function () {
    function NgxUIModule() {
    }
    NgxUIModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        DrawerService,
                        InjectionService,
                        IconRegisteryService,
                        // TooltipService,
                        LoadingService,
                        DialogService,
                        OverlayService,
                        NotificationService
                    ],
                    exports: modules.slice(),
                    imports: modules.slice()
                },] },
    ];
    /** @nocollapse */
    NgxUIModule.ctorParameters = function () { return []; };
    return NgxUIModule;
}());
export { NgxUIModule };
//# sourceMappingURL=ngx-ui.module.js.map