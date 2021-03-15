/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MdbTableService = /** @class */ (function () {
    function MdbTableService() {
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    /**
     * @param {?} newRow
     * @return {?}
     */
    MdbTableService.prototype.addRow = /**
     * @param {?} newRow
     * @return {?}
     */
    function (newRow) {
        this.getDataSource().push(newRow);
    };
    /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    MdbTableService.prototype.addRowAfter = /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    function (index, row) {
        this.getDataSource().splice(index, 0, row);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbTableService.prototype.removeRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.getDataSource().splice(index, 1);
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.rowRemoved = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rowRemoved = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            observer.next(true);
        }));
        return rowRemoved;
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.removeLastRow = /**
     * @return {?}
     */
    function () {
        this.getDataSource().pop();
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.getDataSource = /**
     * @return {?}
     */
    function () {
        return this._dataSource;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    MdbTableService.prototype.setDataSource = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.dataSourceChange = /**
     * @return {?}
     */
    function () {
        return this._dataSourceChanged;
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.filterLocalDataBy = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        return this.getDataSource().filter((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            return Object.keys(obj).some((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (obj[key]) {
                    return obj[key]
                        .toString()
                        .toLowerCase()
                        .includes(searchKey);
                }
            }));
        }));
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.searchLocalDataBy = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.searchDataObservable = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        var _this = this;
        /** @type {?} */
        var observable = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            observer.next(_this.searchLocalDataBy(searchKey));
        }));
        return observable;
    };
    MdbTableService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MdbTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ MdbTableService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MdbTableService_Factory() { return new MdbTableService(); }, token: MdbTableService, providedIn: "root" });
    return MdbTableService;
}());
export { MdbTableService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbTableService.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    MdbTableService.prototype._dataSourceChanged;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90YWJsZXMvc2VydmljZXMvbWRiLXRhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBTUU7UUFGUSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0Qix1QkFBa0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVoQixnQ0FBTTs7OztJQUFOLFVBQU8sTUFBVztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELHFDQUFXOzs7OztJQUFYLFVBQVksS0FBYSxFQUFFLEdBQVE7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELG9DQUFVOzs7SUFBVjs7WUFDUSxVQUFVLEdBQUcsSUFBSSxVQUFVOzs7O1FBQVUsVUFBQyxRQUFhO1lBQ3ZELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHVDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsdUNBQWE7OztJQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsdUNBQWE7Ozs7SUFBYixVQUFjLElBQVM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsMENBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELDJDQUFpQjs7OztJQUFqQixVQUFrQixTQUFjO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLEdBQWU7WUFDakQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLEdBQVE7Z0JBQ3BDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNaLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQzt5QkFDWixRQUFRLEVBQUU7eUJBQ1YsV0FBVyxFQUFFO3lCQUNiLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDeEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwyQ0FBaUI7Ozs7SUFBakIsVUFBa0IsU0FBYztRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDN0I7UUFFRCxJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4Q0FBb0I7Ozs7SUFBcEIsVUFBcUIsU0FBYztRQUFuQyxpQkFLQzs7WUFKTyxVQUFVLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsVUFBQyxRQUFhO1lBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDO1FBQ0YsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Z0JBeEVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQUxEO0NBNEVDLEFBekVELElBeUVDO1NBdEVZLGVBQWU7Ozs7OztJQUMxQixzQ0FBOEI7Ozs7O0lBQzlCLDZDQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlU2VydmljZSB7XG4gIHByaXZhdGUgX2RhdGFTb3VyY2U6IGFueSA9IFtdO1xuICBwcml2YXRlIF9kYXRhU291cmNlQ2hhbmdlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkUm93KG5ld1JvdzogYW55KSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkucHVzaChuZXdSb3cpO1xuICB9XG5cbiAgYWRkUm93QWZ0ZXIoaW5kZXg6IG51bWJlciwgcm93OiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5zcGxpY2UoaW5kZXgsIDAsIHJvdyk7XG4gIH1cblxuICByZW1vdmVSb3coaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByb3dSZW1vdmVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJvd1JlbW92ZWQgPSBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPigob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcm93UmVtb3ZlZDtcbiAgfVxuXG4gIHJlbW92ZUxhc3RSb3coKSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkucG9wKCk7XG4gIH1cblxuICBnZXREYXRhU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xuICB9XG5cbiAgc2V0RGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YTtcbiAgICB0aGlzLl9kYXRhU291cmNlQ2hhbmdlZC5uZXh0KHRoaXMuZ2V0RGF0YVNvdXJjZSgpKTtcbiAgfVxuXG4gIGRhdGFTb3VyY2VDaGFuZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZUNoYW5nZWQ7XG4gIH1cblxuICBmaWx0ZXJMb2NhbERhdGFCeShzZWFyY2hLZXk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKS5maWx0ZXIoKG9iajogQXJyYXk8YW55PikgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikuc29tZSgoa2V5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9ialtrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIG9ialtrZXldXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hLZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaExvY2FsRGF0YUJ5KHNlYXJjaEtleTogYW55KSB7XG4gICAgaWYgKCFzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERhdGFTb3VyY2UoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJMb2NhbERhdGFCeShzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoRGF0YU9ic2VydmFibGUoc2VhcmNoS2V5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnNlYXJjaExvY2FsRGF0YUJ5KHNlYXJjaEtleSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG59XG4iXX0=