/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectorRef, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MdbTableDirective } from '../directives/mdb-table.directive';
import { takeUntil } from 'rxjs/operators';
/**
 * @record
 */
export function MdbPaginationIndex() { }
if (false) {
    /** @type {?} */
    MdbPaginationIndex.prototype.first;
    /** @type {?} */
    MdbPaginationIndex.prototype.last;
}
export class MdbTablePaginationComponent {
    /**
     * @param {?} cdRef
     */
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.searchPagination = false;
        this.searchDataSource = null;
        this.ofKeyword = 'of';
        this.dashKeyword = '-';
        this.paginationAlign = '';
        this.hideDescription = false;
        this._destroy$ = new Subject();
        this.maxVisibleItems = 10;
        this.firstItemIndex = 0;
        this.lastItemIndex = this.maxVisibleItems;
        this.lastVisibleItemIndex = 5;
        this.activePageNumber = 1;
        this.allItemsLength = 0;
        this.nextShouldBeDisabled = false;
        this.previousShouldBeDisabled = true;
        this.searchText = '';
        this.pagination = new Subject();
        this.nextPageClick = new EventEmitter();
        this.previousPageClick = new EventEmitter();
        this.firstPageClick = new EventEmitter();
        this.lastPageClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.tableEl) {
            this.allItemsLength = this.tableEl.getDataSource().length;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.tableEl) {
            this.tableEl
                .dataSourceChange()
                .pipe(takeUntil(this._destroy$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.allItemsLength = data.length;
                this.lastVisibleItemIndex = data.length;
                this.calculateFirstItemIndex();
                this.calculateLastItemIndex();
                this.disableNextButton(data);
                if (this.searchDataSource) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        if (this.searchDataSource.length !== data.length) {
                            this.activePageNumber = 1;
                            this.firstItemIndex = 1;
                        }
                    }), 0);
                }
            }));
        }
        this.paginationChange()
            .pipe(takeUntil(this._destroy$))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.firstItemIndex = data.first;
            this.lastVisibleItemIndex = data.last;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const searchDataSource = changes['searchDataSource'];
        if (searchDataSource.currentValue.length !== 0) {
            this.allItemsLength = searchDataSource.currentValue.length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        if (searchDataSource.currentValue.length === 0) {
            this.firstItemIndex = 0;
            this.lastItemIndex = 0;
            this.lastVisibleItemIndex = 0;
            this.allItemsLength = 0;
        }
        if (!searchDataSource.isFirstChange() &&
            searchDataSource.currentValue.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
            this.lastVisibleItemIndex = searchDataSource.currentValue.length;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMaxVisibleItemsNumberTo(value) {
        this.lastItemIndex = value;
        this.lastVisibleItemIndex = value;
        this.maxVisibleItems = value;
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    searchTextObs() {
        /** @type {?} */
        const observable = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            observer.next(this.searchText);
        }));
        return observable;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    disableNextButton(data) {
        if (data.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    }
    /**
     * @return {?}
     */
    calculateFirstItemIndex() {
        this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1;
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    /**
     * @return {?}
     */
    calculateLastItemIndex() {
        this.lastItemIndex = this.activePageNumber * this.maxVisibleItems;
        this.lastVisibleItemIndex = this.lastItemIndex;
        if (this.searchDataSource && this.lastItemIndex > this.searchDataSource.length) {
            this.lastVisibleItemIndex = this.searchDataSource.length;
        }
        else if (!this.searchDataSource) {
            this.lastVisibleItemIndex = this.lastItemIndex;
        }
        if (this.lastItemIndex > this.tableEl.getDataSource().length) {
            this.lastItemIndex = this.tableEl.getDataSource().length;
            this.lastVisibleItemIndex = this.tableEl.getDataSource().length;
        }
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    /**
     * @return {?}
     */
    paginationChange() {
        return this.pagination;
    }
    /**
     * @return {?}
     */
    calculateHowManyPagesShouldBe() {
        return Math.ceil(this.tableEl.getDataSource().length / this.maxVisibleItems);
    }
    /**
     * @return {?}
     */
    previousPage() {
        this.activePageNumber--;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.activePageNumber++;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        if (this.lastItemIndex > this.tableEl.getDataSource().length) {
            this.lastItemIndex = this.tableEl.getDataSource().length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        this.nextPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    /**
     * @return {?}
     */
    firstPage() {
        this.activePageNumber = 1;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.firstPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    /**
     * @return {?}
     */
    lastPage() {
        /** @type {?} */
        const lastPage = Math.ceil(this.allItemsLength / this.maxVisibleItems);
        this.activePageNumber = lastPage;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.lastPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    }
    /**
     * @return {?}
     */
    nextPageObservable() {
        /** @type {?} */
        const obs = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            observer.next(this.firstItemIndex);
        }));
        return obs;
    }
    /**
     * @return {?}
     */
    previousPageObservable() {
        /** @type {?} */
        const obs = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            observer.next(this.lastVisibleItemIndex);
        }));
        return obs;
    }
    /**
     * @return {?}
     */
    checkIfNextShouldBeDisabled() {
        if (this.searchDataSource && this.lastVisibleItemIndex === this.searchDataSource.length) {
            return true;
        }
        if (this.activePageNumber >= this.calculateHowManyPagesShouldBe()) {
            return true;
        }
        if (this.nextShouldBeDisabled) {
            return this.nextShouldBeDisabled;
        }
    }
    /**
     * @return {?}
     */
    checkIfPreviousShouldBeDisabled() {
        if (this.activePageNumber === 1) {
            return true;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
MdbTablePaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-table-pagination',
                template: "<!--Pagination -->\n<nav>\n  <ul\n    class=\"pagination pagination-circle pg-blue d-flex flex-center\"\n    [ngClass]=\"{\n      'justify-content-end': paginationAlign == 'end',\n      'justify-content-start': paginationAlign == 'start'\n    }\"\n  >\n    <li *ngIf=\"!hideDescription\">\n      {{ firstItemIndex }} {{ dashKeyword }} {{ lastVisibleItemIndex }} {{ ofKeyword }}\n      {{ allItemsLength }}\n    </li>\n    <!--Arrow left-->\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfPreviousShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"firstPage()\">\n        <span aria-hidden=\"true\">\u00AB</span>\n      </a>\n    </li>\n\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfPreviousShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"previousPage()\">\n        <span aria-hidden=\"true\">&#8249;</span>\n      </a>\n    </li>\n\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfNextShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"nextPage()\">\n        <span aria-hidden=\"true\">&#8250;</span>\n      </a>\n    </li>\n\n    <!--Arrow right-->\n    <li class=\"page-item\" [ngClass]=\"{ disabled: checkIfNextShouldBeDisabled() }\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\" (click)=\"lastPage()\">\n        <span aria-hidden=\"true\">\u00BB</span>\n      </a>\n    </li>\n  </ul>\n</nav>\n<!--/Pagination -->\n"
            }] }
];
/** @nocollapse */
MdbTablePaginationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MdbTablePaginationComponent.propDecorators = {
    tableEl: [{ type: Input }],
    searchPagination: [{ type: Input }],
    searchDataSource: [{ type: Input }],
    ofKeyword: [{ type: Input }],
    dashKeyword: [{ type: Input }],
    paginationAlign: [{ type: Input }],
    hideDescription: [{ type: Input }],
    nextPageClick: [{ type: Output }],
    previousPageClick: [{ type: Output }],
    firstPageClick: [{ type: Output }],
    lastPageClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MdbTablePaginationComponent.prototype.tableEl;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.searchPagination;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.searchDataSource;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.ofKeyword;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.dashKeyword;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.paginationAlign;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.hideDescription;
    /**
     * @type {?}
     * @private
     */
    MdbTablePaginationComponent.prototype._destroy$;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.maxVisibleItems;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.firstItemIndex;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.lastItemIndex;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.lastVisibleItemIndex;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.activePageNumber;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.allItemsLength;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.nextShouldBeDisabled;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.previousShouldBeDisabled;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.searchText;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.pagination;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.nextPageClick;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.previousPageClick;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.firstPageClick;
    /** @type {?} */
    MdbTablePaginationComponent.prototype.lastPageClick;
    /**
     * @type {?}
     * @private
     */
    MdbTablePaginationComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2NvbXBvbmVudHMvbWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLGlCQUFpQixHQUtsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFM0Msd0NBR0M7OztJQUZDLG1DQUFjOztJQUNkLGtDQUFhOztBQU9mLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFnQ3RDLFlBQW9CLEtBQXdCO1FBQXhCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBOUJuQyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIscUJBQWdCLEdBQVEsSUFBSSxDQUFDO1FBQzdCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFekIsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpELG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRXJCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGtCQUFhLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM3Qyx5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFFekIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLG1CQUFjLEdBQUcs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aURBQTRFOztJQUU1RSxvREFBaUU7O0lBQ2pFLHdEQUFxRTs7SUFDckUscURBQWtFOztJQUNsRSxvREFBaUU7Ozs7O0lBQ3JELDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNZGJUYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWRiUGFnaW5hdGlvbkluZGV4IHtcbiAgZmlyc3Q6IG51bWJlcjtcbiAgbGFzdDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItdGFibGUtcGFnaW5hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZGItdGFibGUtcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB0YWJsZUVsOiBNZGJUYWJsZURpcmVjdGl2ZTtcbiAgQElucHV0KCkgc2VhcmNoUGFnaW5hdGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWFyY2hEYXRhU291cmNlOiBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBvZktleXdvcmQgPSAnb2YnO1xuICBASW5wdXQoKSBkYXNoS2V5d29yZCA9ICctJztcbiAgQElucHV0KCkgcGFnaW5hdGlvbkFsaWduID0gJyc7XG4gIEBJbnB1dCgpIGhpZGVEZXNjcmlwdGlvbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBtYXhWaXNpYmxlSXRlbXMgPSAxMDtcblxuICBmaXJzdEl0ZW1JbmRleCA9IDA7XG4gIGxhc3RJdGVtSW5kZXg6IG51bWJlciA9IHRoaXMubWF4VmlzaWJsZUl0ZW1zO1xuICBsYXN0VmlzaWJsZUl0ZW1JbmRleCA9IDU7XG5cbiAgYWN0aXZlUGFnZU51bWJlciA9IDE7XG5cbiAgYWxsSXRlbXNMZW5ndGggPSAwO1xuXG4gIG5leHRTaG91bGRCZURpc2FibGVkID0gZmFsc2U7XG4gIHByZXZpb3VzU2hvdWxkQmVEaXNhYmxlZCA9IHRydWU7XG5cbiAgc2VhcmNoVGV4dCA9ICcnO1xuXG4gIHBhZ2luYXRpb246IFN1YmplY3Q8TWRiUGFnaW5hdGlvbkluZGV4PiA9IG5ldyBTdWJqZWN0PE1kYlBhZ2luYXRpb25JbmRleD4oKTtcblxuICBAT3V0cHV0KCkgbmV4dFBhZ2VDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWRiUGFnaW5hdGlvbkluZGV4PigpO1xuICBAT3V0cHV0KCkgcHJldmlvdXNQYWdlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1kYlBhZ2luYXRpb25JbmRleD4oKTtcbiAgQE91dHB1dCgpIGZpcnN0UGFnZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNZGJQYWdpbmF0aW9uSW5kZXg+KCk7XG4gIEBPdXRwdXQoKSBsYXN0UGFnZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNZGJQYWdpbmF0aW9uSW5kZXg+KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnRhYmxlRWwpIHtcbiAgICAgIHRoaXMuYWxsSXRlbXNMZW5ndGggPSB0aGlzLnRhYmxlRWwuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMudGFibGVFbCkge1xuICAgICAgdGhpcy50YWJsZUVsXG4gICAgICAgIC5kYXRhU291cmNlQ2hhbmdlKClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5hbGxJdGVtc0xlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCk7XG4gICAgICAgICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG4gICAgICAgICAgdGhpcy5kaXNhYmxlTmV4dEJ1dHRvbihkYXRhKTtcblxuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaERhdGFTb3VyY2UpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hEYXRhU291cmNlLmxlbmd0aCAhPT0gZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RJdGVtSW5kZXggPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucGFnaW5hdGlvbkNoYW5nZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZmlyc3RJdGVtSW5kZXggPSBkYXRhLmZpcnN0O1xuICAgICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gZGF0YS5sYXN0O1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3Qgc2VhcmNoRGF0YVNvdXJjZSA9IGNoYW5nZXNbJ3NlYXJjaERhdGFTb3VyY2UnXTtcbiAgICBpZiAoc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLmFsbEl0ZW1zTGVuZ3RoID0gc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID4gdGhpcy5hbGxJdGVtc0xlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMuYWxsSXRlbXNMZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaERhdGFTb3VyY2UuY3VycmVudFZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5maXJzdEl0ZW1JbmRleCA9IDA7XG4gICAgICB0aGlzLmxhc3RJdGVtSW5kZXggPSAwO1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IDA7XG4gICAgICB0aGlzLmFsbEl0ZW1zTGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAhc2VhcmNoRGF0YVNvdXJjZS5pc0ZpcnN0Q2hhbmdlKCkgJiZcbiAgICAgIHNlYXJjaERhdGFTb3VyY2UuY3VycmVudFZhbHVlLmxlbmd0aCA8PSB0aGlzLm1heFZpc2libGVJdGVtc1xuICAgICkge1xuICAgICAgdGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gc2VhcmNoRGF0YVNvdXJjZS5jdXJyZW50VmFsdWUubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc2V0TWF4VmlzaWJsZUl0ZW1zTnVtYmVyVG8odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMubGFzdEl0ZW1JbmRleCA9IHZhbHVlO1xuICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB2YWx1ZTtcbiAgICB0aGlzLm1heFZpc2libGVJdGVtcyA9IHZhbHVlO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2VhcmNoVGV4dE9icygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnNlYXJjaFRleHQpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgZGlzYWJsZU5leHRCdXR0b24oZGF0YTogYW55KSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoIDw9IHRoaXMubWF4VmlzaWJsZUl0ZW1zKSB7XG4gICAgICB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uZXh0U2hvdWxkQmVEaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCkge1xuICAgIHRoaXMuZmlyc3RJdGVtSW5kZXggPSB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgKiB0aGlzLm1heFZpc2libGVJdGVtcyAtIHRoaXMubWF4VmlzaWJsZUl0ZW1zICsgMTtcbiAgICB0aGlzLnBhZ2luYXRpb24ubmV4dCh7IGZpcnN0OiB0aGlzLmZpcnN0SXRlbUluZGV4LCBsYXN0OiB0aGlzLmxhc3RJdGVtSW5kZXggfSk7XG4gIH1cblxuICBjYWxjdWxhdGVMYXN0SXRlbUluZGV4KCkge1xuICAgIHRoaXMubGFzdEl0ZW1JbmRleCA9IHRoaXMuYWN0aXZlUGFnZU51bWJlciAqIHRoaXMubWF4VmlzaWJsZUl0ZW1zO1xuICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLmxhc3RJdGVtSW5kZXg7XG5cbiAgICBpZiAodGhpcy5zZWFyY2hEYXRhU291cmNlICYmIHRoaXMubGFzdEl0ZW1JbmRleCA+IHRoaXMuc2VhcmNoRGF0YVNvdXJjZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPSB0aGlzLnNlYXJjaERhdGFTb3VyY2UubGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuc2VhcmNoRGF0YVNvdXJjZSkge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMubGFzdEl0ZW1JbmRleDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0SXRlbUluZGV4ID4gdGhpcy50YWJsZUVsLmdldERhdGFTb3VyY2UoKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGFzdEl0ZW1JbmRleCA9IHRoaXMudGFibGVFbC5nZXREYXRhU291cmNlKCkubGVuZ3RoO1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZUl0ZW1JbmRleCA9IHRoaXMudGFibGVFbC5nZXREYXRhU291cmNlKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMucGFnaW5hdGlvbi5uZXh0KHsgZmlyc3Q6IHRoaXMuZmlyc3RJdGVtSW5kZXgsIGxhc3Q6IHRoaXMubGFzdEl0ZW1JbmRleCB9KTtcbiAgfVxuXG4gIHBhZ2luYXRpb25DaGFuZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uO1xuICB9XG5cbiAgY2FsY3VsYXRlSG93TWFueVBhZ2VzU2hvdWxkQmUoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnRhYmxlRWwuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aCAvIHRoaXMubWF4VmlzaWJsZUl0ZW1zKTtcbiAgfVxuXG4gIHByZXZpb3VzUGFnZSgpIHtcbiAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXItLTtcbiAgICB0aGlzLmNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCk7XG4gICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG4gICAgdGhpcy5wcmV2aW91c1BhZ2VDbGljay5lbWl0KHsgZmlyc3Q6IHRoaXMuZmlyc3RJdGVtSW5kZXgsIGxhc3Q6IHRoaXMubGFzdEl0ZW1JbmRleCB9KTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIHRoaXMuYWN0aXZlUGFnZU51bWJlcisrO1xuICAgIHRoaXMuY2FsY3VsYXRlRmlyc3RJdGVtSW5kZXgoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUxhc3RJdGVtSW5kZXgoKTtcblxuICAgIGlmICh0aGlzLmxhc3RJdGVtSW5kZXggPiB0aGlzLnRhYmxlRWwuZ2V0RGF0YVNvdXJjZSgpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sYXN0SXRlbUluZGV4ID0gdGhpcy50YWJsZUVsLmdldERhdGFTb3VyY2UoKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXggPiB0aGlzLmFsbEl0ZW1zTGVuZ3RoKSB7XG4gICAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID0gdGhpcy5hbGxJdGVtc0xlbmd0aDtcbiAgICB9XG5cbiAgICB0aGlzLm5leHRQYWdlQ2xpY2suZW1pdCh7IGZpcnN0OiB0aGlzLmZpcnN0SXRlbUluZGV4LCBsYXN0OiB0aGlzLmxhc3RJdGVtSW5kZXggfSk7XG4gIH1cblxuICBmaXJzdFBhZ2UoKSB7XG4gICAgdGhpcy5hY3RpdmVQYWdlTnVtYmVyID0gMTtcbiAgICB0aGlzLmNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCk7XG4gICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG5cbiAgICB0aGlzLmZpcnN0UGFnZUNsaWNrLmVtaXQoeyBmaXJzdDogdGhpcy5maXJzdEl0ZW1JbmRleCwgbGFzdDogdGhpcy5sYXN0SXRlbUluZGV4IH0pO1xuICB9XG5cbiAgbGFzdFBhZ2UoKSB7XG4gICAgY29uc3QgbGFzdFBhZ2UgPSBNYXRoLmNlaWwodGhpcy5hbGxJdGVtc0xlbmd0aCAvIHRoaXMubWF4VmlzaWJsZUl0ZW1zKTtcbiAgICB0aGlzLmFjdGl2ZVBhZ2VOdW1iZXIgPSBsYXN0UGFnZTtcbiAgICB0aGlzLmNhbGN1bGF0ZUZpcnN0SXRlbUluZGV4KCk7XG4gICAgdGhpcy5jYWxjdWxhdGVMYXN0SXRlbUluZGV4KCk7XG5cbiAgICB0aGlzLmxhc3RQYWdlQ2xpY2suZW1pdCh7IGZpcnN0OiB0aGlzLmZpcnN0SXRlbUluZGV4LCBsYXN0OiB0aGlzLmxhc3RJdGVtSW5kZXggfSk7XG4gIH1cblxuICBuZXh0UGFnZU9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvYnMgPSBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLmZpcnN0SXRlbUluZGV4KTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JzO1xuICB9XG5cbiAgcHJldmlvdXNQYWdlT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9icyA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRoaXMubGFzdFZpc2libGVJdGVtSW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiBvYnM7XG4gIH1cblxuICBjaGVja0lmTmV4dFNob3VsZEJlRGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoRGF0YVNvdXJjZSAmJiB0aGlzLmxhc3RWaXNpYmxlSXRlbUluZGV4ID09PSB0aGlzLnNlYXJjaERhdGFTb3VyY2UubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVQYWdlTnVtYmVyID49IHRoaXMuY2FsY3VsYXRlSG93TWFueVBhZ2VzU2hvdWxkQmUoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmV4dFNob3VsZEJlRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5leHRTaG91bGRCZURpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZQcmV2aW91c1Nob3VsZEJlRGlzYWJsZWQoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlUGFnZU51bWJlciA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==