/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var MdbAccordionService = /** @class */ (function () {
    function MdbAccordionService() {
        this._items = [];
        this._multiple = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    MdbAccordionService.prototype.addItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._items.push(item);
    };
    /**
     * @param {?} items
     * @return {?}
     */
    MdbAccordionService.prototype.updateItemsArray = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        this._items = tslib_1.__spread(items);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbAccordionService.prototype.updateMultipleState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._multiple = value;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbAccordionService.prototype.didItemToggled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // on not multiple, it will collpase the rest of items
        if (!this._multiple) {
            this._items.forEach((/**
             * @param {?} el
             * @return {?}
             */
            function (el) {
                if (el !== item) {
                    el.applyToggle(true);
                }
                if (el === item) {
                    /** @type {?} */
                    var collapsed_1 = el.collapsed ? true : false;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        el.applyToggle(collapsed_1);
                    }), 0);
                }
            }));
        }
    };
    MdbAccordionService.decorators = [
        { type: Injectable }
    ];
    return MdbAccordionService;
}());
export { MdbAccordionService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWFjY29yZGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vbWRiLWFjY29yZGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QztJQUFBO1FBRVUsV0FBTSxHQUFzQixFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQStCNUIsQ0FBQzs7Ozs7SUE3QkMscUNBQU87Ozs7SUFBUCxVQUFRLElBQXFCO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsOENBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQXdCO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLG9CQUFPLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsaURBQW1COzs7O0lBQW5CLFVBQW9CLEtBQWM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCw0Q0FBYzs7OztJQUFkLFVBQWUsSUFBcUI7UUFDbEMsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsRUFBTztnQkFDMUIsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO29CQUNmLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELElBQUksRUFBRSxLQUFLLElBQUksRUFBRTs7d0JBQ1QsV0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztvQkFDN0MsVUFBVTs7O29CQUFDO3dCQUNULEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBUyxDQUFDLENBQUM7b0JBQzVCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztpQkFDUDtZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFoQ0YsVUFBVTs7SUFrQ1gsMEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSxtQkFBbUI7Ozs7OztJQUM5QixxQ0FBdUM7Ozs7O0lBQ3ZDLHdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTQkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2ItaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZGJBY2NvcmRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfaXRlbXM6IFNCSXRlbUNvbXBvbmVudFtdID0gW107XG4gIHByaXZhdGUgX211bHRpcGxlID0gZmFsc2U7XG5cbiAgYWRkSXRlbShpdGVtOiBTQkl0ZW1Db21wb25lbnQpIHtcbiAgICB0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdXBkYXRlSXRlbXNBcnJheShpdGVtczogU0JJdGVtQ29tcG9uZW50W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IFsuLi5pdGVtc107XG4gIH1cblxuICB1cGRhdGVNdWx0aXBsZVN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGRpZEl0ZW1Ub2dnbGVkKGl0ZW06IFNCSXRlbUNvbXBvbmVudCkge1xuICAgIC8vIG9uIG5vdCBtdWx0aXBsZSwgaXQgd2lsbCBjb2xscGFzZSB0aGUgcmVzdCBvZiBpdGVtc1xuICAgIGlmICghdGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVsICE9PSBpdGVtKSB7XG4gICAgICAgICAgZWwuYXBwbHlUb2dnbGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsID09PSBpdGVtKSB7XG4gICAgICAgICAgY29uc3QgY29sbGFwc2VkID0gZWwuY29sbGFwc2VkID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWwuYXBwbHlUb2dnbGUoY29sbGFwc2VkKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==