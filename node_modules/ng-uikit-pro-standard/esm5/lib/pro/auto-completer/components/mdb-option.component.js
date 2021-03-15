/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, HostListener, InjectionToken, Optional, Inject, } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @record
 */
export function MdbOptionParent() { }
if (false) {
    /** @type {?} */
    MdbOptionParent.prototype.optionHeight;
    /** @type {?} */
    MdbOptionParent.prototype.visibleOptions;
}
/** @type {?} */
export var MDB_OPTION_PARENT = new InjectionToken('MDB_OPTION_PARENT');
var MdbOptionComponent = /** @class */ (function () {
    function MdbOptionComponent(el, _parent) {
        this.el = el;
        this._parent = _parent;
        this.clicked = false;
        this.clickSource = new Subject();
        this.click$ = this.clickSource.asObservable();
        this.clicked = false;
    }
    Object.defineProperty(MdbOptionComponent.prototype, "optionHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbOptionComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.clickSource.next(this);
    };
    Object.defineProperty(MdbOptionComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.el.nativeElement.textContent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbOptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this._parent.visibleOptions && this._parent.optionHeight) {
            this._optionHeight = this._parent.optionHeight;
        }
    };
    MdbOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-option',
                    template: "<div\n  tabindex=\"0\"\n  class=\"completer-row\"\n  [ngStyle]=\"{\n    'height.px': _optionHeight ? _optionHeight : 'auto'\n  }\"\n  mdbAutoCompleterOption\n>\n  <ng-content></ng-content>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    MdbOptionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_PARENT,] }] }
    ]; };
    MdbOptionComponent.propDecorators = {
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return MdbOptionComponent;
}());
export { MdbOptionComponent };
if (false) {
    /** @type {?} */
    MdbOptionComponent.prototype.value;
    /** @type {?} */
    MdbOptionComponent.prototype.disabled;
    /** @type {?} */
    MdbOptionComponent.prototype._optionHeight;
    /** @type {?} */
    MdbOptionComponent.prototype.clicked;
    /** @type {?} */
    MdbOptionComponent.prototype.selectedItem;
    /** @type {?} */
    MdbOptionComponent.prototype.clickSource;
    /** @type {?} */
    MdbOptionComponent.prototype.click$;
    /** @type {?} */
    MdbOptionComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbOptionComponent.prototype._parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG8tY29tcGxldGVyL2NvbXBvbmVudHMvbWRiLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxZQUFZLEVBQ1osY0FBYyxFQUNkLFFBQVEsRUFDUixNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUUzQyxxQ0FHQzs7O0lBRkMsdUNBQXFCOztJQUNyQix5Q0FBdUI7OztBQUd6QixNQUFNLEtBQU8saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQWtCLG1CQUFtQixDQUFDO0FBRXpGO0lBa0JFLDRCQUNTLEVBQWMsRUFDMEIsT0FBd0I7UUFEaEUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUMwQixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQVJ6RSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBR2hCLGdCQUFXLEdBQWdDLElBQUksT0FBTyxFQUFzQixDQUFDO1FBQzdFLFdBQU0sR0FBbUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU12RSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBZkQsc0JBQUksNENBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFnQkQsb0NBQU87OztJQURQO1FBRUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELHNCQUFJLHFDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTs7OztJQUNELHFDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztTQUNoRDtJQUNILENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGtOQUF3QztpQkFDekM7Ozs7Z0JBckJDLFVBQVU7Z0RBc0NQLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOzs7d0JBZnRDLEtBQUs7MkJBQ0wsS0FBSzswQkFtQkwsWUFBWSxTQUFDLE9BQU87O0lBWXZCLHlCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FqQ1ksa0JBQWtCOzs7SUFDN0IsbUNBQXVCOztJQUN2QixzQ0FBMkI7O0lBQzNCLDJDQUFtQjs7SUFLbkIscUNBQWdCOztJQUNoQiwwQ0FBOEI7O0lBRTlCLHlDQUE2RTs7SUFDN0Usb0NBQXlFOztJQUd2RSxnQ0FBcUI7Ozs7O0lBQ3JCLHFDQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE9wdGlvbmFsLFxuICBJbmplY3QsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU2VsZWN0ZWRPcHRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdGVkLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1kYk9wdGlvblBhcmVudCB7XG4gIG9wdGlvbkhlaWdodDogbnVtYmVyO1xuICB2aXNpYmxlT3B0aW9uczogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTURCX09QVElPTl9QQVJFTlQgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWRiT3B0aW9uUGFyZW50PignTURCX09QVElPTl9QQVJFTlQnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLW9wdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnbWRiLW9wdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1kYk9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBfb3B0aW9uSGVpZ2h0OiBhbnk7XG4gIGdldCBvcHRpb25IZWlnaHQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uSGVpZ2h0O1xuICB9XG5cbiAgY2xpY2tlZCA9IGZhbHNlO1xuICBzZWxlY3RlZEl0ZW06IElTZWxlY3RlZE9wdGlvbjtcblxuICBjbGlja1NvdXJjZTogU3ViamVjdDxNZGJPcHRpb25Db21wb25lbnQ+ID0gbmV3IFN1YmplY3Q8TWRiT3B0aW9uQ29tcG9uZW50PigpO1xuICBjbGljayQ6IE9ic2VydmFibGU8TWRiT3B0aW9uQ29tcG9uZW50PiA9IHRoaXMuY2xpY2tTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTURCX09QVElPTl9QQVJFTlQpIHByaXZhdGUgX3BhcmVudDogTWRiT3B0aW9uUGFyZW50XG4gICkge1xuICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuY2xpY2tTb3VyY2UubmV4dCh0aGlzKTtcbiAgfVxuICBnZXQgbGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5fcGFyZW50LnZpc2libGVPcHRpb25zICYmIHRoaXMuX3BhcmVudC5vcHRpb25IZWlnaHQpIHtcbiAgICAgIHRoaXMuX29wdGlvbkhlaWdodCA9IHRoaXMuX3BhcmVudC5vcHRpb25IZWlnaHQ7XG4gICAgfVxuICB9XG59XG4iXX0=