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
import { Subject } from 'rxjs/Subject';
import { InjectionService } from '../../../services';
import { OverlayService } from '../../overlay';
import { DialogService } from '../dialog.service';
import { AlertComponent } from './alert.component';
import { AlertTypes } from './alert.types';
var AlertService = /** @class */ (function (_super) {
    __extends(AlertService, _super);
    function AlertService(injectionService, overlayService) {
        var _this = _super.call(this, injectionService, overlayService) || this;
        _this.defaults = {
            inputs: {
                zIndex: 991,
                closeOnBlur: false,
                closeOnEscape: false,
                closeButton: false,
                showOverlay: true,
                visible: true
            }
        };
        _this.type = AlertComponent;
        _this.clsMap = {
            danger: 'ngx-alert-danger',
            warning: 'ngx-alert-warning',
            info: 'ngx-alert-info'
        };
        return _this;
    }
    AlertService.prototype.alert = function (props) {
        return this.createDialog(props, AlertTypes.alert);
    };
    AlertService.prototype.confirm = function (props) {
        return this.createDialog(props, AlertTypes.confirm);
    };
    AlertService.prototype.prompt = function (props) {
        return this.createDialog(props, AlertTypes.prompt);
    };
    AlertService.prototype.createDialog = function (props, type) {
        var subject = new Subject();
        var title = props.title, content = props.content;
        var cssClass = 'ngx-alert-dialog ' + this.clsMap[props.style];
        var component = this.create({
            title: title,
            content: content,
            type: type,
            cssClass: cssClass
        });
        var list = component.instance.ok.subscribe(function (data) {
            subject.next({
                type: 'ok',
                data: data
            });
            subject.complete();
            list.unsubscribe();
            list2.unsubscribe();
        });
        var list2 = component.instance.cancel.subscribe(function (data) {
            subject.next({
                type: 'cancel',
                data: data
            });
            subject.complete();
            list.unsubscribe();
            list2.unsubscribe();
        });
        return subject;
    };
    AlertService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AlertService.ctorParameters = function () { return [
        { type: InjectionService, },
        { type: OverlayService, },
    ]; };
    return AlertService;
}(DialogService));
export { AlertService };
//# sourceMappingURL=alert.service.js.map