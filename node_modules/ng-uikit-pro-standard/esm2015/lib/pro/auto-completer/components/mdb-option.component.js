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
export const MDB_OPTION_PARENT = new InjectionToken('MDB_OPTION_PARENT');
export class MdbOptionComponent {
    /**
     * @param {?} el
     * @param {?} _parent
     */
    constructor(el, _parent) {
        this.el = el;
        this._parent = _parent;
        this.clicked = false;
        this.clickSource = new Subject();
        this.click$ = this.clickSource.asObservable();
        this.clicked = false;
    }
    /**
     * @return {?}
     */
    get optionHeight() {
        return this._optionHeight;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.clickSource.next(this);
    }
    /**
     * @return {?}
     */
    get label() {
        return this.el.nativeElement.textContent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this._parent.visibleOptions && this._parent.optionHeight) {
            this._optionHeight = this._parent.optionHeight;
        }
    }
}
MdbOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-option',
                template: "<div\n  tabindex=\"0\"\n  class=\"completer-row\"\n  [ngStyle]=\"{\n    'height.px': _optionHeight ? _optionHeight : 'auto'\n  }\"\n  mdbAutoCompleterOption\n>\n  <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
MdbOptionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_PARENT,] }] }
];
MdbOptionComponent.propDecorators = {
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG8tY29tcGxldGVyL2NvbXBvbmVudHMvbWRiLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxZQUFZLEVBQ1osY0FBYyxFQUNkLFFBQVEsRUFDUixNQUFNLEdBRVAsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQzs7OztBQUUzQyxxQ0FHQzs7O0lBRkMsdUNBQXFCOztJQUNyQix5Q0FBdUI7OztBQUd6QixNQUFNLE9BQU8saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQWtCLG1CQUFtQixDQUFDO0FBTXpGLE1BQU0sT0FBTyxrQkFBa0I7Ozs7O0lBYzdCLFlBQ1MsRUFBYyxFQUMwQixPQUF3QjtRQURoRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQzBCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBUnpFLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIsZ0JBQVcsR0FBZ0MsSUFBSSxPQUFPLEVBQXNCLENBQUM7UUFDN0UsV0FBTSxHQUFtQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBTXZFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFmRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQWdCRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsa05BQXdDO2FBQ3pDOzs7O1lBckJDLFVBQVU7NENBc0NQLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOzs7b0JBZnRDLEtBQUs7dUJBQ0wsS0FBSztzQkFtQkwsWUFBWSxTQUFDLE9BQU87Ozs7SUFwQnJCLG1DQUF1Qjs7SUFDdkIsc0NBQTJCOztJQUMzQiwyQ0FBbUI7O0lBS25CLHFDQUFnQjs7SUFDaEIsMENBQThCOztJQUU5Qix5Q0FBNkU7O0lBQzdFLG9DQUF5RTs7SUFHdkUsZ0NBQXFCOzs7OztJQUNyQixxQ0FBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdGlvblRva2VuLFxuICBPcHRpb25hbCxcbiAgSW5qZWN0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNlbGVjdGVkT3B0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3RlZC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBNZGJPcHRpb25QYXJlbnQge1xuICBvcHRpb25IZWlnaHQ6IG51bWJlcjtcbiAgdmlzaWJsZU9wdGlvbnM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IE1EQl9PUFRJT05fUEFSRU5UID0gbmV3IEluamVjdGlvblRva2VuPE1kYk9wdGlvblBhcmVudD4oJ01EQl9PUFRJT05fUEFSRU5UJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ21kYi1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgX29wdGlvbkhlaWdodDogYW55O1xuICBnZXQgb3B0aW9uSGVpZ2h0KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbkhlaWdodDtcbiAgfVxuXG4gIGNsaWNrZWQgPSBmYWxzZTtcbiAgc2VsZWN0ZWRJdGVtOiBJU2VsZWN0ZWRPcHRpb247XG5cbiAgY2xpY2tTb3VyY2U6IFN1YmplY3Q8TWRiT3B0aW9uQ29tcG9uZW50PiA9IG5ldyBTdWJqZWN0PE1kYk9wdGlvbkNvbXBvbmVudD4oKTtcbiAgY2xpY2skOiBPYnNlcnZhYmxlPE1kYk9wdGlvbkNvbXBvbmVudD4gPSB0aGlzLmNsaWNrU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1EQl9PUFRJT05fUEFSRU5UKSBwcml2YXRlIF9wYXJlbnQ6IE1kYk9wdGlvblBhcmVudFxuICApIHtcbiAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICB0aGlzLmNsaWNrU291cmNlLm5leHQodGhpcyk7XG4gIH1cbiAgZ2V0IGxhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudC52aXNpYmxlT3B0aW9ucyAmJiB0aGlzLl9wYXJlbnQub3B0aW9uSGVpZ2h0KSB7XG4gICAgICB0aGlzLl9vcHRpb25IZWlnaHQgPSB0aGlzLl9wYXJlbnQub3B0aW9uSGVpZ2h0O1xuICAgIH1cbiAgfVxufVxuIl19