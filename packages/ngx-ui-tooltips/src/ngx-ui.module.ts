import { NgModule } from '@angular/core';
import { InjectionService } from './services';

import {
  TooltipModule, TooltipService
} from './components';

/**
 * Exported Modules
 * @type {Array}
 */
const modules = [
  TooltipModule
];

@NgModule({
  providers: [
    InjectionService,
    TooltipService
  ],
  exports: [...modules],
  imports: [...modules]
})
export class NgxUIToltipsModule { }
