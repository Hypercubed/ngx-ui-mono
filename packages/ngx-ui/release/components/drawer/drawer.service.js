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
import { InjectionService, InjectionRegisteryService } from '../../services';
import { DrawerComponent } from '.';
import { OverlayService } from '../overlay';
var DrawerService = /** @class */ (function (_super) {
    __extends(DrawerService, _super);
    function DrawerService(injectionService, overlayService) {
        var _this = _super.call(this, injectionService) || this;
        _this.overlayService = overlayService;
        _this.type = DrawerComponent;
        _this.defaults = {
            inputs: {
                direction: 'left'
            }
        };
        _this.zIndex = 995;
        _this.size = 80;
        return _this;
    }
    DrawerService.prototype.create = function (bindings) {
        var component = _super.prototype.create.call(this, bindings);
        this.createSubscriptions(component);
        return component;
    };
    DrawerService.prototype.destroy = function (component) {
        var _this = this;
        // race case clicking fast errors here
        if (component && component.instance) {
            component.instance.size = 0;
        }
        setTimeout(function () {
            _this.zIndex = _this.zIndex - 2;
            _this.size = _this.size + 10;
            _this.overlayService.removeTriggerComponent(component);
            _super.prototype.destroy.call(_this, component);
        }, 10);
    };
    DrawerService.prototype.assignDefaults = function (bindings) {
        bindings = _super.prototype.assignDefaults.call(this, bindings);
        if (!bindings.inputs.zIndex) {
            this.zIndex = (this.overlayService.instance) ?
                this.overlayService.instance.zIndex + 3 :
                this.zIndex + 2;
            bindings.inputs.zIndex = this.zIndex;
        }
        this.size = this.size - 10;
        if (!bindings.inputs.size) {
            bindings.inputs.size = this.size;
        }
        return bindings;
    };
    DrawerService.prototype.createSubscriptions = function (component) {
        var _this = this;
        var overlay = this.overlayService.show({
            triggerComponent: component,
            zIndex: this.zIndex
        });
        var closeSub;
        var overlaySub;
        var kill = function (c) {
            if (component !== c) {
                return;
            }
            closeSub.unsubscribe();
            overlaySub.unsubscribe();
            _this.destroy(component);
        };
        closeSub = component.instance.close.subscribe(kill.bind(this, component));
        overlaySub = this.overlayService.click.subscribe(kill);
    };
    DrawerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DrawerService.ctorParameters = function () { return [
        { type: InjectionService, },
        { type: OverlayService, },
    ]; };
    return DrawerService;
}(InjectionRegisteryService));
export { DrawerService };
//# sourceMappingURL=drawer.service.js.map