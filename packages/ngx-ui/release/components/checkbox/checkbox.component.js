import { Component, Input, EventEmitter, Output, forwardRef, HostBinding, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CHKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var nextId = 0;
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.id = "checkbox-" + ++nextId;
        this.name = null;
        this.tabindex = 0;
        this.disabled = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this._value = false;
        this.onTouchedCallback = function () {
            // placeholder
        };
        this.onChangeCallback = function (_) {
            // placeholder
        };
    }
    Object.defineProperty(CheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this.value !== value) {
                this._value = value;
                this.onChangeCallback(this._value);
            }
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.onBlur = function (event) {
        this.onTouchedCallback();
    };
    CheckboxComponent.prototype.onChange = function (event) {
        this.toggle();
    };
    CheckboxComponent.prototype.toggle = function () {
        this.value = !this.value;
    };
    CheckboxComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-checkbox',
                    providers: [CHKBOX_VALUE_ACCESSOR],
                    template: "\n    <label class=\"checkbox-label\">\n      <input\n        type=\"checkbox\"\n        class=\"checkbox-input\"\n        [id]=\"id + '-chk'\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [name]=\"name + '-chk'\"\n        [tabIndex]=\"tabindex\"\n        (focus)=\"focus.emit($event)\"\n        (blur)=\"blur.emit($event)\"\n        (change)=\"change.emit($event)\"\n      />\n      <ng-content></ng-content>\n    </label>\n  ",
                    encapsulation: ViewEncapsulation.None,
                    styleUrls: ['./checkbox.component.css'],
                    host: {
                        class: 'ngx-checkbox'
                    }
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        'id': [{ type: Input },],
        'name': [{ type: Input },],
        'tabindex': [{ type: Input },],
        'disabled': [{ type: HostBinding, args: ['class.disabled',] }, { type: Input },],
        'change': [{ type: Output },],
        'blur': [{ type: Output },],
        'focus': [{ type: Output },],
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map