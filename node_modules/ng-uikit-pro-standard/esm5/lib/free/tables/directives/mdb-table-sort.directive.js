/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, } from '@angular/core';
/** @enum {string} */
var SortDirection = {
    ASC: 'ascending',
    DESC: 'descending',
    CONST: 'constant',
};
/**
 * @record
 */
export function SortedData() { }
if (false) {
    /** @type {?} */
    SortedData.prototype.data;
    /** @type {?} */
    SortedData.prototype.sortOrder;
    /** @type {?} */
    SortedData.prototype.sortBy;
}
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortedInto = true;
        this.dataSource = [];
        this.sortEnd = new EventEmitter();
        this.sorted = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
    };
    /**
     * @param {?} headElement
     * @return {?}
     */
    MdbTableSortDirective.prototype.trimWhiteSigns = /**
     * @param {?} headElement
     * @return {?}
     */
    function (headElement) {
        return headElement.replace(/ /g, '');
    };
    /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    MdbTableSortDirective.prototype.moveArrayItem = /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            /** @type {?} */
            var k = newIndex - arr.length;
            while (k-- + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MdbTableSortDirective.prototype.sortDataBy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        /** @type {?} */
        var ariaPass = true;
        /** @type {?} */
        var setAria = (/**
         * @param {?} sort
         * @param {?} id
         * @return {?}
         */
        function (sort, id) {
            if (ariaPass) {
                /** @type {?} */
                var inverse = sort === 'ascending' ? 'descending' : 'ascending';
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', sort);
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', id + ": activate to sort column " + inverse);
                ariaPass = false;
            }
        });
        key = key.split('.');
        this.dataSource.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                setAria('ascending', key);
                _this.order = SortDirection.ASC;
                return _this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                setAria('descending', key);
                _this.order = SortDirection.DESC;
                return _this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                _this.order = SortDirection.CONST;
                return 1;
            }
            else {
                _this.order = SortDirection.CONST;
                return 0;
            }
        }));
        this.sortedInto = !this.sortedInto;
    };
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
    };
    MdbTableSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableSort]',
                },] }
    ];
    /** @nocollapse */
    MdbTableSortDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbTableSortDirective.propDecorators = {
        dataSource: [{ type: Input, args: ['mdbTableSort',] }],
        sortBy: [{ type: Input }],
        sortEnd: [{ type: Output }],
        sorted: [{ type: Output }],
        onclick: [{ type: HostListener, args: ['click',] }]
    };
    return MdbTableSortDirective;
}());
export { MdbTableSortDirective };
if (false) {
    /** @type {?} */
    MdbTableSortDirective.prototype.sortedInto;
    /** @type {?} */
    MdbTableSortDirective.prototype.order;
    /** @type {?} */
    MdbTableSortDirective.prototype.dataSource;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortBy;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortEnd;
    /** @type {?} */
    MdbTableSortDirective.prototype.sorted;
    /**
     * @type {?}
     * @private
     */
    MdbTableSortDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbTableSortDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOzs7SUFHckIsS0FBTSxXQUFXO0lBQ2pCLE1BQU8sWUFBWTtJQUNuQixPQUFRLFVBQVU7Ozs7O0FBR3BCLGdDQUlDOzs7SUFIQywwQkFBWTs7SUFDWiwrQkFBa0I7O0lBQ2xCLDRCQUFlOztBQUdqQjtJQWFFLCtCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFUL0QsZUFBVSxHQUFHLElBQUksQ0FBQztRQUdLLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFHekMsWUFBTyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3pELFdBQU0sR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVWLENBQUM7Ozs7SUFFNUMsdUNBQU87OztJQUE5QjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxXQUFnQjtRQUM3QixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFFTSw2Q0FBYTs7Ozs7O0lBQXBCLFVBQXFCLEdBQVEsRUFBRSxRQUFnQixFQUFFLFFBQWdCO1FBQy9ELE9BQU8sUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNuQixRQUFRLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUN4QjtRQUNELE9BQU8sUUFBUSxHQUFHLENBQUMsRUFBRTtZQUNuQixRQUFRLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUN4QjtRQUNELElBQUksUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7O2dCQUN0QixDQUFDLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxNQUFNO1lBQzdCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7U0FDRjtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsR0FBaUI7UUFBNUIsaUJBK0NDOztZQTlDSyxRQUFRLEdBQUcsSUFBSTs7WUFFYixPQUFPOzs7OztRQUFHLFVBQUMsSUFBZ0MsRUFBRSxFQUFPO1lBQ3hELElBQUksUUFBUSxFQUFFOztvQkFDTixPQUFPLEdBQUcsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxXQUFXO2dCQUVqRSxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JFLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUN4QixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsWUFBWSxFQUNULEVBQUUsa0NBQTZCLE9BQVMsQ0FDNUMsQ0FBQztnQkFDRixRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07O2dCQUM5QixDQUFDLEdBQUcsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztnQkFFL0IsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUVoQyxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakM7aUJBQU0sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDakMsT0FBTyxDQUFDLENBQUM7YUFDVjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7O1lBQ1EsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixZQUFZLEVBQ1QsR0FBRyx5Q0FBc0MsQ0FDN0MsQ0FBQztJQUNKLENBQUM7O2dCQXRHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBbkJDLFVBQVU7Z0JBQ1YsU0FBUzs7OzZCQXVCUixLQUFLLFNBQUMsY0FBYzt5QkFDcEIsS0FBSzswQkFFTCxNQUFNO3lCQUNOLE1BQU07MEJBSU4sWUFBWSxTQUFDLE9BQU87O0lBd0Z2Qiw0QkFBQztDQUFBLEFBdkdELElBdUdDO1NBcEdZLHFCQUFxQjs7O0lBQ2hDLDJDQUFrQjs7SUFDbEIsc0NBQWM7O0lBRWQsMkNBQW1EOztJQUNuRCx1Q0FBd0I7O0lBRXhCLHdDQUFtRTs7SUFDbkUsdUNBQTRFOzs7OztJQUVoRSxtQ0FBc0I7Ozs7O0lBQUUseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5lbnVtIFNvcnREaXJlY3Rpb24ge1xuICBBU0MgPSAnYXNjZW5kaW5nJyxcbiAgREVTQyA9ICdkZXNjZW5kaW5nJyxcbiAgQ09OU1QgPSAnY29uc3RhbnQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRlZERhdGEge1xuICBkYXRhOiBhbnlbXTtcbiAgc29ydE9yZGVyOiBzdHJpbmc7XG4gIHNvcnRCeTogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVTb3J0XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlU29ydERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNvcnRlZEludG8gPSB0cnVlO1xuICBvcmRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgnbWRiVGFibGVTb3J0JykgZGF0YVNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBzb3J0Qnk6IHN0cmluZztcblxuICBAT3V0cHV0KCkgc29ydEVuZDogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSBzb3J0ZWQ6IEV2ZW50RW1pdHRlcjxTb3J0ZWREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8U29ydGVkRGF0YT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuc29ydERhdGFCeSh0aGlzLnRyaW1XaGl0ZVNpZ25zKHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkpKTtcbiAgICB0aGlzLnNvcnRFbmQuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xuICAgIHRoaXMuc29ydGVkLmVtaXQoe1xuICAgICAgZGF0YTogdGhpcy5kYXRhU291cmNlLFxuICAgICAgc29ydE9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICB9KTtcbiAgfVxuXG4gIHRyaW1XaGl0ZVNpZ25zKGhlYWRFbGVtZW50OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBoZWFkRWxlbWVudC5yZXBsYWNlKC8gL2csICcnKTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQXJyYXlJdGVtKGFycjogYW55LCBvbGRJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKSB7XG4gICAgd2hpbGUgKG9sZEluZGV4IDwgMCkge1xuICAgICAgb2xkSW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKG5ld0luZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgIGxldCBrID0gbmV3SW5kZXggLSBhcnIubGVuZ3RoO1xuICAgICAgd2hpbGUgKGstLSArIDEpIHtcbiAgICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFyci5zcGxpY2UobmV3SW5kZXgsIDAsIGFyci5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgc29ydERhdGFCeShrZXk6IHN0cmluZyB8IGFueSkge1xuICAgIGxldCBhcmlhUGFzcyA9IHRydWU7XG5cbiAgICBjb25zdCBzZXRBcmlhID0gKHNvcnQ6ICdhc2NlbmRpbmcnIHwgJ2Rlc2NlbmRpbmcnLCBpZDogYW55KSA9PiB7XG4gICAgICBpZiAoYXJpYVBhc3MpIHtcbiAgICAgICAgY29uc3QgaW52ZXJzZSA9IHNvcnQgPT09ICdhc2NlbmRpbmcnID8gJ2Rlc2NlbmRpbmcnIDogJ2FzY2VuZGluZyc7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1zb3J0Jywgc29ydCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnYXJpYS1sYWJlbCcsXG4gICAgICAgICAgYCR7aWR9OiBhY3RpdmF0ZSB0byBzb3J0IGNvbHVtbiAke2ludmVyc2V9YFxuICAgICAgICApO1xuICAgICAgICBhcmlhUGFzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBrZXkgPSBrZXkuc3BsaXQoJy4nKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBrZXkubGVuZ3RoKSB7XG4gICAgICAgIGEgPSBhW2tleVtpXV07XG4gICAgICAgIGIgPSBiW2tleVtpXV07XG4gICAgICAgIGkrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgIHNldEFyaWEoJ2FzY2VuZGluZycsIGtleSk7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkFTQztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRJbnRvID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgICBzZXRBcmlhKCdkZXNjZW5kaW5nJywga2V5KTtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uREVTQztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRJbnRvID8gLTEgOiAxO1xuICAgICAgfSBlbHNlIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkNPTlNUO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkNPTlNUO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc29ydGVkSW50byA9ICF0aGlzLnNvcnRlZEludG87XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnRyaW1XaGl0ZVNpZ25zKHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkpLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAnYXJpYS1sYWJlbCcsXG4gICAgICBgJHtrZXl9OiBhY3RpdmF0ZSB0byBzb3J0IGNvbHVtbiBkZXNjZW5kaW5nYFxuICAgICk7XG4gIH1cbn1cbiJdfQ==