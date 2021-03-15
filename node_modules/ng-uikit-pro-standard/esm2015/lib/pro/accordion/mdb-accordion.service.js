/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class MdbAccordionService {
    constructor() {
        this._items = [];
        this._multiple = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        this._items.push(item);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    updateItemsArray(items) {
        this._items = [...items];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateMultipleState(value) {
        this._multiple = value;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    didItemToggled(item) {
        // on not multiple, it will collpase the rest of items
        if (!this._multiple) {
            this._items.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                if (el !== item) {
                    el.applyToggle(true);
                }
                if (el === item) {
                    /** @type {?} */
                    const collapsed = el.collapsed ? true : false;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        el.applyToggle(collapsed);
                    }), 0);
                }
            }));
        }
    }
}
MdbAccordionService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbAccordionService.prototype._items;
    /**
     * @type {?}
     * @private
     */
    MdbAccordionService.prototype._multiple;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWFjY29yZGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vbWRiLWFjY29yZGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXpDLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFVSxXQUFNLEdBQXNCLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBK0I1QixDQUFDOzs7OztJQTdCQyxPQUFPLENBQUMsSUFBcUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUF3QjtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQWM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBcUI7UUFDbEMsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtvQkFDZixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7OzBCQUNULFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBQzdDLFVBQVU7OztvQkFBQyxHQUFHLEVBQUU7d0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNQO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQWhDRixVQUFVOzs7Ozs7O0lBRVQscUNBQXVDOzs7OztJQUN2Qyx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0JJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NiLWl0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWRiQWNjb3JkaW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2l0ZW1zOiBTQkl0ZW1Db21wb25lbnRbXSA9IFtdO1xuICBwcml2YXRlIF9tdWx0aXBsZSA9IGZhbHNlO1xuXG4gIGFkZEl0ZW0oaXRlbTogU0JJdGVtQ29tcG9uZW50KSB7XG4gICAgdGhpcy5faXRlbXMucHVzaChpdGVtKTtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW1zQXJyYXkoaXRlbXM6IFNCSXRlbUNvbXBvbmVudFtdKSB7XG4gICAgdGhpcy5faXRlbXMgPSBbLi4uaXRlbXNdO1xuICB9XG5cbiAgdXBkYXRlTXVsdGlwbGVTdGF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gdmFsdWU7XG4gIH1cblxuICBkaWRJdGVtVG9nZ2xlZChpdGVtOiBTQkl0ZW1Db21wb25lbnQpIHtcbiAgICAvLyBvbiBub3QgbXVsdGlwbGUsIGl0IHdpbGwgY29sbHBhc2UgdGhlIHJlc3Qgb2YgaXRlbXNcbiAgICBpZiAoIXRoaXMuX211bHRpcGxlKSB7XG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICAgIGlmIChlbCAhPT0gaXRlbSkge1xuICAgICAgICAgIGVsLmFwcGx5VG9nZ2xlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbCA9PT0gaXRlbSkge1xuICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IGVsLmNvbGxhcHNlZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVsLmFwcGx5VG9nZ2xlKGNvbGxhcHNlZCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=