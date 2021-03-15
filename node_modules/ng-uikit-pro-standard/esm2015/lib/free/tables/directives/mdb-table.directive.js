/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// tslint:disable-next-line:component-class-suffix
export class MdbTableDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
        this._dataSource = [];
        this._dataSourceChanged = new Subject();
    }
    /**
     * @param {?} newRow
     * @return {?}
     */
    addRow(newRow) {
        this.getDataSource().push(newRow);
    }
    /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    addRowAfter(index, row) {
        this.getDataSource().splice(index, 0, row);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeRow(index) {
        this.getDataSource().splice(index, 1);
    }
    /**
     * @return {?}
     */
    rowRemoved() {
        /** @type {?} */
        const rowRemoved = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            observer.next(true);
        }));
        return rowRemoved;
    }
    /**
     * @return {?}
     */
    removeLastRow() {
        this.getDataSource().pop();
    }
    /**
     * @return {?}
     */
    getDataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setDataSource(data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    }
    /**
     * @return {?}
     */
    dataSourceChange() {
        return this._dataSourceChanged;
    }
    /**
     * @param {?} searchKey
     * @return {?}
     */
    filterLocalDataBy(searchKey) {
        return this.getDataSource().filter((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            return Object.keys(obj).some((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                if (obj[key]) {
                    // Fix(tableSearch): table search will now able to filter through nested data
                    return (/** @type {?} */ (JSON.stringify(obj)
                        .toLowerCase()
                        .includes(searchKey)));
                }
            }));
        }));
    }
    /**
     * @param {?} searchKey
     * @param {?} keys
     * @return {?}
     */
    filterLocalDataByFields(searchKey, keys) {
        return this.getDataSource().filter((/**
         * @param {?} obj
         * @return {?}
         */
        (obj) => {
            return Object.keys(obj).some((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                if (obj[key]) {
                    if (keys.includes(key)) {
                        if (obj[key].toLowerCase().includes(searchKey)) {
                            return obj[key];
                        }
                    }
                }
            }));
        }));
    }
    /**
     * @param {?} searchKey
     * @param {?=} keys
     * @return {?}
     */
    filterLocalDataByMultipleFields(searchKey, keys) {
        /** @type {?} */
        const items = searchKey.split(' ').map((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.toLowerCase()));
        return this.getDataSource().filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            for (const item of items) {
                /** @type {?} */
                let flag = false;
                if (keys !== undefined) {
                    for (const prop in x) {
                        if (x[prop]) {
                            if (keys.includes(prop)) {
                                if (x[prop].toLowerCase().indexOf(item) !== -1) {
                                    flag = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (keys === undefined) {
                    for (const prop in x) {
                        if (x[prop].toLowerCase().indexOf(item) !== -1) {
                            flag = true;
                            break;
                        }
                    }
                }
                if (!flag) {
                    return false;
                }
            }
            return true;
        }));
    }
    /**
     * @param {?} searchKey
     * @return {?}
     */
    searchLocalDataBy(searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    /**
     * @param {?} searchKey
     * @param {?} keys
     * @return {?}
     */
    searchLocalDataByFields(searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys.length > 0) {
            return this.filterLocalDataByFields(searchKey.toLowerCase(), keys);
        }
        if (!keys || keys.length === 0) {
            return this.filterLocalDataBy(searchKey.toLowerCase());
        }
    }
    /**
     * @param {?} searchKey
     * @param {?=} keys
     * @return {?}
     */
    searchLocalDataByMultipleFields(searchKey, keys) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey && keys !== undefined) {
            return this.filterLocalDataByMultipleFields(searchKey.toLowerCase(), keys);
        }
    }
    /**
     * @param {?} searchKey
     * @return {?}
     */
    searchDataObservable(searchKey) {
        /** @type {?} */
        const observable = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            observer.next(this.searchLocalDataBy(searchKey));
        }));
        return observable;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'table');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Fix(stickyHeader): resolved problem with not working stickyHeader="true" on Chrome
        if (this.stickyHeader) {
            /** @type {?} */
            const tableHead = this.el.nativeElement.querySelector('thead');
            Array.from(tableHead.firstElementChild.children).forEach((/**
             * @param {?} child
             * @return {?}
             */
            (child) => {
                this.renderer.addClass(child, 'sticky-top');
                if (this.stickyHeaderBgColor) {
                    this.renderer.setStyle(child, 'background-color', this.stickyHeaderBgColor);
                }
                else {
                    this.renderer.setStyle(child, 'background-color', '#f2f2f2');
                }
                if (this.stickyHeaderTextColor) {
                    this.renderer.setStyle(child, 'color', this.stickyHeaderTextColor);
                }
                else {
                    this.renderer.setStyle(child, 'color', '#000000');
                }
            }));
        }
    }
}
MdbTableDirective.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: '[mdbTable]',
                exportAs: 'mdbTable',
                template: '<ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                styles: ["table th{font-size:.9rem;font-weight:400}table td{font-size:.9rem;font-weight:300}table.table thead th{border-top:none}table.table td,table.table th{padding-top:1.1rem;padding-bottom:1rem}table.table .label-table{margin:0;padding:0;line-height:.94rem;height:.94rem}table.table.btn-table td{vertical-align:middle}table.table-hover tbody tr:hover{transition:.5s;background-color:rgba(0,0,0,.075)}table .th-lg{min-width:9rem}table .th-sm{min-width:6rem}table.table-sm td,table.table-sm th{padding-top:.6rem;padding-bottom:.6rem}.table-scroll-vertical{max-height:300px;overflow-y:auto}.table-fixed{table-layout:fixed}.table-responsive-lg>.table-bordered,.table-responsive-md>.table-bordered,.table-responsive-sm>.table-bordered,.table-responsive-xl>.table-bordered,.table-responsive>.table-bordered{border-top:1px solid #dee2e6}"]
            }] }
];
/** @nocollapse */
MdbTableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbTableDirective.propDecorators = {
    striped: [{ type: Input }, { type: HostBinding, args: ['class.table-striped',] }],
    bordered: [{ type: Input }, { type: HostBinding, args: ['class.table-bordered',] }],
    borderless: [{ type: Input }, { type: HostBinding, args: ['class.table-borderless',] }],
    hover: [{ type: Input }, { type: HostBinding, args: ['class.table-hover',] }],
    small: [{ type: Input }, { type: HostBinding, args: ['class.table-sm',] }],
    responsive: [{ type: Input }, { type: HostBinding, args: ['class.table-responsive',] }],
    stickyHeader: [{ type: Input }],
    stickyHeaderBgColor: [{ type: Input }],
    stickyHeaderTextColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbTableDirective.prototype.striped;
    /** @type {?} */
    MdbTableDirective.prototype.bordered;
    /** @type {?} */
    MdbTableDirective.prototype.borderless;
    /** @type {?} */
    MdbTableDirective.prototype.hover;
    /** @type {?} */
    MdbTableDirective.prototype.small;
    /** @type {?} */
    MdbTableDirective.prototype.responsive;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeader;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeaderBgColor;
    /** @type {?} */
    MdbTableDirective.prototype.stickyHeaderTextColor;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype._dataSourceChanged;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbTableDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy9kaXJlY3RpdmVzL21kYi10YWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBRUwsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVUzQyxrREFBa0Q7QUFDbEQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUE2QjVCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUp0RCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBSTVCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO0lBSEksQ0FBQzs7Ozs7SUFLbkUsTUFBTSxDQUFDLE1BQVc7UUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBYSxFQUFFLEdBQVE7UUFDakMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFD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RWxCLHVDQUVvQjs7SUFFcEIsa0NBRWU7O0lBRWYsa0NBRWU7O0lBRWYsdUNBRW9COztJQUVwQix5Q0FBOEI7O0lBQzlCLGdEQUFrQzs7SUFDbEMsa0RBQW9DOzs7OztJQUlwQyx3Q0FBOEI7Ozs7O0lBQzlCLCtDQUE4RDs7Ozs7SUFIbEQsK0JBQXNCOzs7OztJQUFFLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJUYWJsZV0nLFxuICBleHBvcnRBczogJ21kYlRhYmxlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vLi4vdGFibGVzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtc3RyaXBlZCcpXG4gIHN0cmlwZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ib3JkZXJlZCcpXG4gIGJvcmRlcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtYm9yZGVybGVzcycpXG4gIGJvcmRlcmxlc3M6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWJsZS1ob3ZlcicpXG4gIGhvdmVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFibGUtc20nKVxuICBzbWFsbDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYmxlLXJlc3BvbnNpdmUnKVxuICByZXNwb25zaXZlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGlja3lIZWFkZXJCZ0NvbG9yID0gJyc7XG4gIEBJbnB1dCgpIHN0aWNreUhlYWRlclRleHRDb2xvciA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBwcml2YXRlIF9kYXRhU291cmNlOiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSBfZGF0YVNvdXJjZUNoYW5nZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBhZGRSb3cobmV3Um93OiBhbnkpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5wdXNoKG5ld1Jvdyk7XG4gIH1cblxuICBhZGRSb3dBZnRlcihpbmRleDogbnVtYmVyLCByb3c6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLnNwbGljZShpbmRleCwgMCwgcm93KTtcbiAgfVxuXG4gIHJlbW92ZVJvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5nZXREYXRhU291cmNlKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHJvd1JlbW92ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3Qgcm93UmVtb3ZlZCA9IG5ldyBPYnNlcnZhYmxlPGJvb2xlYW4+KChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByb3dSZW1vdmVkO1xuICB9XG5cbiAgcmVtb3ZlTGFzdFJvdygpIHtcbiAgICB0aGlzLmdldERhdGFTb3VyY2UoKS5wb3AoKTtcbiAgfVxuXG4gIGdldERhdGFTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XG4gIH1cblxuICBzZXREYXRhU291cmNlKGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhO1xuICAgIHRoaXMuX2RhdGFTb3VyY2VDaGFuZ2VkLm5leHQodGhpcy5nZXREYXRhU291cmNlKCkpO1xuICB9XG5cbiAgZGF0YVNvdXJjZUNoYW5nZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlQ2hhbmdlZDtcbiAgfVxuXG4gIGZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigob2JqOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb21lKChrZXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAob2JqW2tleV0pIHtcbiAgICAgICAgICAvLyBGaXgodGFibGVTZWFyY2gpOiB0YWJsZSBzZWFyY2ggd2lsbCBub3cgYWJsZSB0byBmaWx0ZXIgdGhyb3VnaCBuZXN0ZWQgZGF0YVxuXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iailcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoS2V5KSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyTG9jYWxEYXRhQnlGaWVsZHMoc2VhcmNoS2V5OiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigob2JqOiBBcnJheTxhbnk+KSA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5zb21lKChrZXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAob2JqW2tleV0pIHtcbiAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBpZiAob2JqW2tleV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hLZXkpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZpbHRlckxvY2FsRGF0YUJ5TXVsdGlwbGVGaWVsZHMoc2VhcmNoS2V5OiBzdHJpbmcsIGtleXM/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGl0ZW1zID0gc2VhcmNoS2V5LnNwbGl0KCcgJykubWFwKCh4OiB7IHRvTG93ZXJDYXNlOiAoKSA9PiB2b2lkIH0pID0+IHgudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpLmZpbHRlcigoeDogQXJyYXk8YW55PikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGtleXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB4KSB7XG4gICAgICAgICAgICBpZiAoeFtwcm9wXSkge1xuICAgICAgICAgICAgICBpZiAoa2V5cy5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIGlmICh4W3Byb3BdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpdGVtKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4geCkge1xuICAgICAgICAgICAgaWYgKHhbcHJvcF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKGl0ZW0pICE9PSAtMSkge1xuICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cbiAgc2VhcmNoTG9jYWxEYXRhQnkoc2VhcmNoS2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckxvY2FsRGF0YUJ5KHNlYXJjaEtleS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hMb2NhbERhdGFCeUZpZWxkcyhzZWFyY2hLZXk6IHN0cmluZywga2V5czogc3RyaW5nW10pIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2hLZXkgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJMb2NhbERhdGFCeUZpZWxkcyhzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSwga2V5cyk7XG4gICAgfVxuICAgIGlmICgha2V5cyB8fCBrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnkoc2VhcmNoS2V5LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuICBzZWFyY2hMb2NhbERhdGFCeU11bHRpcGxlRmllbGRzKHNlYXJjaEtleTogc3RyaW5nLCBrZXlzPzogc3RyaW5nW10pIHtcbiAgICBpZiAoIXNlYXJjaEtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YVNvdXJjZSgpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoS2V5ICYmIGtleXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTG9jYWxEYXRhQnlNdWx0aXBsZUZpZWxkcyhzZWFyY2hLZXkudG9Mb3dlckNhc2UoKSwga2V5cyk7XG4gICAgfVxuICB9XG4gIHNlYXJjaERhdGFPYnNlcnZhYmxlKHNlYXJjaEtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodGhpcy5zZWFyY2hMb2NhbERhdGFCeShzZWFyY2hLZXkpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndGFibGUnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBGaXgoc3RpY2t5SGVhZGVyKTogcmVzb2x2ZWQgcHJvYmxlbSB3aXRoIG5vdCB3b3JraW5nIHN0aWNreUhlYWRlcj1cInRydWVcIiBvbiBDaHJvbWVcbiAgICBpZiAodGhpcy5zdGlja3lIZWFkZXIpIHtcbiAgICAgIGNvbnN0IHRhYmxlSGVhZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0aGVhZCcpO1xuXG4gICAgICBBcnJheS5mcm9tKHRhYmxlSGVhZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNoaWxkLCAnc3RpY2t5LXRvcCcpO1xuICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJCZ0NvbG9yKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2JhY2tncm91bmQtY29sb3InLCB0aGlzLnN0aWNreUhlYWRlckJnQ29sb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2hpbGQsICdiYWNrZ3JvdW5kLWNvbG9yJywgJyNmMmYyZjInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJUZXh0Q29sb3IpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNoaWxkLCAnY29sb3InLCB0aGlzLnN0aWNreUhlYWRlclRleHRDb2xvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaGlsZCwgJ2NvbG9yJywgJyMwMDAwMDAnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=