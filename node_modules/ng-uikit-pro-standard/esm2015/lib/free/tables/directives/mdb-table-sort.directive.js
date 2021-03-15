/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, } from '@angular/core';
/** @enum {string} */
const SortDirection = {
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
export class MdbTableSortDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
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
    onclick() {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
    }
    /**
     * @param {?} headElement
     * @return {?}
     */
    trimWhiteSigns(headElement) {
        return headElement.replace(/ /g, '');
    }
    /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    moveArrayItem(arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            /** @type {?} */
            let k = newIndex - arr.length;
            while (k-- + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sortDataBy(key) {
        /** @type {?} */
        let ariaPass = true;
        /** @type {?} */
        const setAria = (/**
         * @param {?} sort
         * @param {?} id
         * @return {?}
         */
        (sort, id) => {
            if (ariaPass) {
                /** @type {?} */
                const inverse = sort === 'ascending' ? 'descending' : 'ascending';
                this.renderer.setAttribute(this.el.nativeElement, 'aria-sort', sort);
                this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${id}: activate to sort column ${inverse}`);
                ariaPass = false;
            }
        });
        key = key.split('.');
        this.dataSource.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            let i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                setAria('ascending', key);
                this.order = SortDirection.ASC;
                return this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                setAria('descending', key);
                this.order = SortDirection.DESC;
                return this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                this.order = SortDirection.CONST;
                return 1;
            }
            else {
                this.order = SortDirection.CONST;
                return 0;
            }
        }));
        this.sortedInto = !this.sortedInto;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${key}: activate to sort column descending`);
    }
}
MdbTableSortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableSort]',
            },] }
];
/** @nocollapse */
MdbTableSortDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbTableSortDirective.propDecorators = {
    dataSource: [{ type: Input, args: ['mdbTableSort',] }],
    sortBy: [{ type: Input }],
    sortEnd: [{ type: Output }],
    sorted: [{ type: Output }],
    onclick: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOzs7SUFHckIsS0FBTSxXQUFXO0lBQ2pCLE1BQU8sWUFBWTtJQUNuQixPQUFRLFVBQVU7Ozs7O0FBR3BCLGdDQUlDOzs7SUFIQywwQkFBWTs7SUFDWiwrQkFBa0I7O0lBQ2xCLDRCQUFlOztBQU1qQixNQUFNLE9BQU8scUJBQXFCOzs7OztJQVVoQyxZQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFUL0QsZUFBVSxHQUFHLElBQUksQ0FBQztRQUdLLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFHekMsWUFBTyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3pELFdBQU0sR0FBNkIsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUVWLENBQUM7Ozs7SUFFNUMsT0FBTztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSztZ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Q0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQztpQkFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsQ0FBQzthQUNWO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDakMsT0FBTyxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixZQUFZLEVBQ1osR0FBRyxHQUFHLHNDQUFzQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQzs7O1lBdEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBbkJDLFVBQVU7WUFDVixTQUFTOzs7eUJBdUJSLEtBQUssU0FBQyxjQUFjO3FCQUNwQixLQUFLO3NCQUVMLE1BQU07cUJBQ04sTUFBTTtzQkFJTixZQUFZLFNBQUMsT0FBTzs7OztJQVhyQiwyQ0FBa0I7O0lBQ2xCLHNDQUFjOztJQUVkLDJDQUFtRDs7SUFDbkQsdUNBQXdCOztJQUV4Qix3Q0FBbUU7O0lBQ25FLHVDQUE0RTs7Ozs7SUFFaEUsbUNBQXNCOzs7OztJQUFFLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZW51bSBTb3J0RGlyZWN0aW9uIHtcbiAgQVNDID0gJ2FzY2VuZGluZycsXG4gIERFU0MgPSAnZGVzY2VuZGluZycsXG4gIENPTlNUID0gJ2NvbnN0YW50Jyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTb3J0ZWREYXRhIHtcbiAgZGF0YTogYW55W107XG4gIHNvcnRPcmRlcjogc3RyaW5nO1xuICBzb3J0Qnk6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRhYmxlU29ydF0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZVNvcnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBzb3J0ZWRJbnRvID0gdHJ1ZTtcbiAgb3JkZXI6IHN0cmluZztcblxuICBASW5wdXQoJ21kYlRhYmxlU29ydCcpIGRhdGFTb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgc29ydEJ5OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHNvcnRFbmQ6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgc29ydGVkOiBFdmVudEVtaXR0ZXI8U29ydGVkRGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNvcnRlZERhdGE+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLnNvcnREYXRhQnkodGhpcy50cmltV2hpdGVTaWducyh0aGlzLnNvcnRCeS50b1N0cmluZygpKSk7XG4gICAgdGhpcy5zb3J0RW5kLmVtaXQodGhpcy5kYXRhU291cmNlKTtcbiAgICB0aGlzLnNvcnRlZC5lbWl0KHtcbiAgICAgIGRhdGE6IHRoaXMuZGF0YVNvdXJjZSxcbiAgICAgIHNvcnRPcmRlcjogdGhpcy5vcmRlcixcbiAgICAgIHNvcnRCeTogdGhpcy5zb3J0QnksXG4gICAgfSk7XG4gIH1cblxuICB0cmltV2hpdGVTaWducyhoZWFkRWxlbWVudDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gaGVhZEVsZW1lbnQucmVwbGFjZSgvIC9nLCAnJyk7XG4gIH1cblxuICBwdWJsaWMgbW92ZUFycmF5SXRlbShhcnI6IGFueSwgb2xkSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcikge1xuICAgIHdoaWxlIChvbGRJbmRleCA8IDApIHtcbiAgICAgIG9sZEluZGV4ICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICAgIHdoaWxlIChuZXdJbmRleCA8IDApIHtcbiAgICAgIG5ld0luZGV4ICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChuZXdJbmRleCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICBsZXQgayA9IG5ld0luZGV4IC0gYXJyLmxlbmd0aDtcbiAgICAgIHdoaWxlIChrLS0gKyAxKSB7XG4gICAgICAgIGFyci5wdXNoKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgICBhcnIuc3BsaWNlKG5ld0luZGV4LCAwLCBhcnIuc3BsaWNlKG9sZEluZGV4LCAxKVswXSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHNvcnREYXRhQnkoa2V5OiBzdHJpbmcgfCBhbnkpIHtcbiAgICBsZXQgYXJpYVBhc3MgPSB0cnVlO1xuXG4gICAgY29uc3Qgc2V0QXJpYSA9IChzb3J0OiAnYXNjZW5kaW5nJyB8ICdkZXNjZW5kaW5nJywgaWQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGFyaWFQYXNzKSB7XG4gICAgICAgIGNvbnN0IGludmVyc2UgPSBzb3J0ID09PSAnYXNjZW5kaW5nJyA/ICdkZXNjZW5kaW5nJyA6ICdhc2NlbmRpbmcnO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FyaWEtc29ydCcsIHNvcnQpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgICAgIGAke2lkfTogYWN0aXZhdGUgdG8gc29ydCBjb2x1bW4gJHtpbnZlcnNlfWBcbiAgICAgICAgKTtcbiAgICAgICAgYXJpYVBhc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAga2V5ID0ga2V5LnNwbGl0KCcuJyk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwga2V5Lmxlbmd0aCkge1xuICAgICAgICBhID0gYVtrZXlbaV1dO1xuICAgICAgICBiID0gYltrZXlbaV1dO1xuICAgICAgICBpKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChhIDwgYikge1xuICAgICAgICBzZXRBcmlhKCdhc2NlbmRpbmcnLCBrZXkpO1xuICAgICAgICB0aGlzLm9yZGVyID0gU29ydERpcmVjdGlvbi5BU0M7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkSW50byA/IDEgOiAtMTtcbiAgICAgIH0gZWxzZSBpZiAoYSA+IGIpIHtcbiAgICAgICAgc2V0QXJpYSgnZGVzY2VuZGluZycsIGtleSk7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkRFU0M7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkSW50byA/IC0xIDogMTtcbiAgICAgIH0gZWxzZSBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9yZGVyID0gU29ydERpcmVjdGlvbi5DT05TVDtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9yZGVyID0gU29ydERpcmVjdGlvbi5DT05TVDtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvcnRlZEludG8gPSAhdGhpcy5zb3J0ZWRJbnRvO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy50cmltV2hpdGVTaWducyh0aGlzLnNvcnRCeS50b1N0cmluZygpKS5zcGxpdCgnLicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgYCR7a2V5fTogYWN0aXZhdGUgdG8gc29ydCBjb2x1bW4gZGVzY2VuZGluZ2BcbiAgICApO1xuICB9XG59XG4iXX0=