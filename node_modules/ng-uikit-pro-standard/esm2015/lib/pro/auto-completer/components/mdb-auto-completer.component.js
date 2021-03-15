/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, QueryList, } from '@angular/core';
import { MdbOptionComponent, MDB_OPTION_PARENT } from './mdb-option.component';
import { Subject, merge } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { document, window } from '../../../free/utils/facade/browser';
import { Utils } from './../../../free/utils/utils.class';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { DOWN_ARROW, ENTER, ESCAPE, UP_ARROW } from '../../../free/utils/keyboard-navigation';
export class MdbAutoCompleterComponent {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} platformId
     */
    constructor(renderer, el, platformId) {
        this.renderer = renderer;
        this.el = el;
        this.clearButton = true;
        this.clearButtonTabIndex = 0;
        this._optionHeight = 45;
        // equal to 4 * optionHeight (which is 45 by default)
        this._dropdownHeight = 180;
        this.select = new EventEmitter();
        this.selected = new EventEmitter();
        this._destroy = new Subject();
        this.utils = new Utils();
        this._isDropdownOpen = new Subject();
        this._allItems = [];
        this._isOpen = false;
        this._selectedItemIndex = -1;
        this._selectedItemChanged = new Subject();
        this._isBrowser = false;
        this._isBrowser = isPlatformBrowser(platformId);
        this.renderer.addClass(this.el.nativeElement, 'mdb-auto-completer');
    }
    /**
     * @return {?}
     */
    get visibleOptions() {
        return this._visibleOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visibleOptions(value) {
        if (value !== 0) {
            this._visibleOptions = value;
        }
    }
    /**
     * @return {?}
     */
    get optionHeight() {
        return this._optionHeight;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optionHeight(value) {
        if (value !== 0) {
            this._optionHeight = value;
        }
    }
    /**
     * @return {?}
     */
    get dropdownHeight() {
        return this._dropdownHeight;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropdownHeight(value) {
        if (value !== 0) {
            this._dropdownHeight = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _listenToOptionClick() {
        this.mdbOptions.changes
            .pipe(startWith(this.mdbOptions), switchMap((/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            return merge(...options.map((/**
             * @param {?} option
             * @return {?}
             */
            (option) => option.click$)));
        })), takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} clickedOption
         * @return {?}
         */
        (clickedOption) => this._handleOptionClick(clickedOption)));
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    _handleOptionClick(option) {
        this.setSelectedItem({ text: option.value, element: option });
        this.highlightRow(0);
        this.select.emit({ text: option.value, element: option });
        this.selected.emit({ text: option.value, element: option });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setSelectedItem(item) {
        this._selectedItem = item;
        this._selectedItemChanged.next(this.getSelectedItem());
    }
    /**
     * @return {?}
     */
    getSelectedItem() {
        return this._selectedItem;
    }
    /**
     * @return {?}
     */
    selectedItemChanged() {
        return this._selectedItemChanged;
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this._isOpen;
    }
    /**
     * @return {?}
     */
    _calculatePosition() {
        /** @type {?} */
        const modalEl = this.utils.getClosestEl(this.el.nativeElement, '.modal-dialog');
        /** @type {?} */
        const style = document.querySelector('.completer-dropdown')
            ? window.getComputedStyle(document.querySelector('.completer-dropdown'))
            : null;
        if (!style) {
            return;
        }
        /** @type {?} */
        const height = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => parseInt(style.getPropertyValue(key), 10)))
            .reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        (prev, cur) => prev + cur));
        /** @type {?} */
        const topRect = document.querySelector('.completer-dropdown').getBoundingClientRect().top;
        /** @type {?} */
        const bottom = modalEl ? window.innerHeight - height - topRect : this.parameters.bottom;
        /** @type {?} */
        const top = this.dropdown.nativeElement.clientHeight > bottom
            ? `-${this.dropdown.nativeElement.clientHeight}`
            : this.parameters.inputHeight + 3;
        this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'left', 0 + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'width', this.parameters.width + 'px');
    }
    /**
     * @private
     * @return {?}
     */
    _calculateAppendPosition() {
        if (this._isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const originRect = this.origin.nativeElement.getBoundingClientRect();
                /** @type {?} */
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                /** @type {?} */
                const offsetTop = originRect.top + scrollTop;
                /** @type {?} */
                const height = originRect.height;
                /** @type {?} */
                const dropdownHeight = this.dropdown.nativeElement.offsetHeight;
                /** @type {?} */
                const inputMargin = 8;
                /** @type {?} */
                let top = 0;
                /** @type {?} */
                let left = 0;
                left = originRect.left;
                if (offsetTop + dropdownHeight + height + inputMargin >
                    scrollTop + document.documentElement.clientHeight) {
                    top = offsetTop - dropdownHeight - inputMargin;
                }
                else {
                    top = offsetTop + height + inputMargin;
                }
                this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'left', left + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'width', this.parameters.width + 'px');
            }), 0);
        }
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.disabled) {
            this._isOpen = true;
            this._isDropdownOpen.next(this.isOpen());
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.dropdown && !this.appendToBody) {
                this._calculatePosition();
            }
            if (this.dropdown && this.appendToBody) {
                this._calculateAppendPosition();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this.disabled) {
            this._isOpen = false;
            this._isDropdownOpen.next(this.isOpen());
        }
    }
    /**
     * @return {?}
     */
    isDropdownOpen() {
        return this._isDropdownOpen;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeHighlight(index) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            (el, i) => {
                /** @type {?} */
                const completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (i === index) {
                    this.renderer.addClass(el.nativeElement.firstElementChild, 'highlight-row');
                }
                else if (i !== index) {
                    completerRow.forEach((/**
                     * @param {?} elem
                     * @return {?}
                     */
                    (elem) => {
                        this.renderer.removeClass(elem, 'highlight-row');
                    }));
                }
            }));
        }), 0);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    highlightRow(index) {
        this._allItems = this.optionList
            .filter((/**
         * @param {?} el
         * @return {?}
         */
        el => el.nativeElement.firstElementChild.classList.contains('completer-row')))
            .map((/**
         * @param {?} elem
         * @return {?}
         */
        elem => elem.nativeElement));
        if (this._allItems[index]) {
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            (el, i) => {
                /** @type {?} */
                const completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (index === i) {
                    this.removeHighlight(index);
                    this.renderer.addClass(completerRow[completerRow.length - 1], 'highlight-row');
                }
            }));
        }
        this._selectedItemIndex = index;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateUsingKeyboard(event) {
        if (this.dropdown) {
            switch (event.keyCode) {
                case DOWN_ARROW:
                    event.preventDefault();
                    this.moveHighlightedIntoView(event.key);
                    if (!this.isOpen()) {
                        this.show();
                    }
                    if (this._selectedItemIndex + 1 <= this._allItems.length - 1) {
                        this.highlightRow(++this._selectedItemIndex);
                    }
                    else if (this._selectedItemIndex + 1 === this._allItems.length) {
                        this.highlightRow(0);
                    }
                    if (this._selectedItemIndex === 0) {
                        this.highlightRow(0);
                    }
                    /** @type {?} */
                    const selectedElement = this.mdbOptions.find((/**
                     * @param {?} el
                     * @param {?} index
                     * @return {?}
                     */
                    (el, index) => el && index === this._selectedItemIndex));
                    if (selectedElement) {
                        this.select.emit({ text: selectedElement.value, element: selectedElement });
                    }
                    break;
                case UP_ARROW:
                    event.preventDefault();
                    this.moveHighlightedIntoView(event.key);
                    if (this._selectedItemIndex === -1 || this._selectedItemIndex === 0) {
                        /** @type {?} */
                        const lastItemIndex = this.mdbOptions.length;
                        this.highlightRow(lastItemIndex);
                    }
                    this.highlightRow(--this._selectedItemIndex);
                    /** @type {?} */
                    const selectedItem = this.mdbOptions.find((/**
                     * @param {?} el
                     * @param {?} index
                     * @return {?}
                     */
                    (el, index) => el && index === this._selectedItemIndex));
                    if (selectedItem) {
                        this.select.emit({ text: selectedItem.value, element: selectedItem });
                    }
                    break;
                case ESCAPE:
                    event.preventDefault();
                    this.hide();
                    break;
                case ENTER:
                    event.preventDefault();
                    /** @type {?} */
                    const selectedOption = this.mdbOptions.map((/**
                     * @param {?} el
                     * @return {?}
                     */
                    el => el))[this._selectedItemIndex];
                    if (selectedOption) {
                        this.setSelectedItem({ text: selectedOption.value, element: selectedOption });
                        this.select.emit({ text: selectedOption.value, element: selectedOption });
                        this.selected.emit({ text: selectedOption.value, element: selectedOption });
                    }
                    this.hide();
                    break;
            }
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    moveHighlightedIntoView(type) {
        /** @type {?} */
        let listHeight = 0;
        /** @type {?} */
        let itemIndex = this._selectedItemIndex;
        this.optionList.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            listHeight += el.nativeElement.offsetHeight;
        }));
        if (itemIndex > -1) {
            /** @type {?} */
            let itemHeight = 0;
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            (el, i) => {
                if (i === itemIndex + 1) {
                    itemHeight = el.nativeElement.firstElementChild.clientHeight;
                }
            }));
            /** @type {?} */
            const itemTop = (itemIndex + 1) * itemHeight;
            /** @type {?} */
            const viewTop = this.dropdown.nativeElement.scrollTop;
            /** @type {?} */
            const viewBottom = viewTop + listHeight;
            if (type === 'ArrowDown') {
                this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemTop - itemHeight);
            }
            else if (type === 'ArrowUp') {
                if (itemIndex === 0) {
                    itemIndex = this.optionList.length - 1;
                }
                else {
                    itemIndex--;
                }
                if (itemIndex === this._allItems.length - 2) {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', viewBottom - itemHeight);
                }
                else {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemIndex * itemHeight);
                }
            }
        }
    }
    /**
     * @param {?} parameters
     * @return {?}
     */
    updatePosition(parameters) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.dropdown) {
                /** @type {?} */
                const top = this.dropdown.nativeElement.clientHeight > parameters.bottom
                    ? parameters.top - this.dropdown.nativeElement.clientHeight
                    : parameters.top;
                this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'left', parameters.left + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'width', parameters.width + 'px');
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    appendDropdown() {
        if (this._isBrowser && this.appendToBody) {
            /** @type {?} */
            const body = document.querySelector('body');
            /** @type {?} */
            const dropdown = this.el.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
                this._calculateAppendPosition();
            }
        }
    }
    /**
     * @return {?}
     */
    setSingleOptionHeight() {
        this.mdbOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            option._optionHeight = this._optionHeight;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._listenToOptionClick();
        this.highlightRow(0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
}
MdbAutoCompleterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-auto-completer',
                template: "<div class=\"completer-dropdown-holder\" *ngIf=\"isOpen()\">\n  <div\n    class=\"completer-dropdown\"\n    #dropdown\n    [ngStyle]=\"{\n      'pointer-events': optionList.length === 0 ? 'none' : 'auto',\n      'max-height.px': _visibleOptions ? _visibleOptions * _optionHeight : _dropdownHeight\n    }\"\n  >\n    <div class=\"completer-row-wrapper\">\n      <div *ngIf=\"textNoResults && optionList.length === 0\" class=\"completer-no-results\" #noResults>\n        {{ textNoResults }}\n      </div>\n      <ng-content #content></ng-content>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                exportAs: 'mdbAutoCompleter',
                providers: [{ provide: MDB_OPTION_PARENT, useExisting: MdbAutoCompleterComponent }],
                styles: [".mdb-autocomplete{margin-bottom:1px}.mdb-autocomplete::-webkit-search-cancel-button,.mdb-autocomplete::-webkit-search-decoration,.mdb-autocomplete::-webkit-search-results-button,.mdb-autocomplete::-webkit-search-results-decoration{-webkit-appearance:none}button:focus{outline:0!important}button.mdb-autocomplete-clear{position:absolute;z-index:2;top:.5rem;right:0;visibility:hidden;border:none;background:0 0;cursor:pointer}button.mdb-autocomplete-clear svg{fill:#a6a6a6}.mdb-autocomplete-wrap{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);position:absolute;z-index:100;left:0;right:0;list-style-type:none;overflow-y:auto;max-height:210px;padding-left:0;background:#fff}.mdb-autocomplete-wrap li{padding:12px 15px;cursor:pointer;font-size:.875rem}.mdb-autocomplete-wrap li:hover{background:#eee}.mdb-autocomplete-wrap li.selected{background-color:#eee}.form-inline .md-form .form-control.mdb-autocomplete{width:15rem}ng2-completer .completer-dropdown-holder{margin-top:-1rem}ng2-completer .md-form label{z-index:-1}.mdb-autocomplete-clear:hover,.mdb-autocomplete:hover,mdb-auto-completer:hover{cursor:pointer}.completer-dropdown{margin-top:1px;position:absolute;left:0;right:0;width:100%;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,.25);z-index:110;overflow-y:auto;overflow-x:hidden}.completer-dropdown .completer-row{width:100%;display:flex;align-items:center;justify-content:space-between;padding:12px 15px;outline:0;font-size:.875rem}.completer-dropdown .completer-row .completer-description{font-size:14px}.completer-dropdown .completer-row .completer-image-holder .completer-image-default{width:16px;height:16px}.completer-dropdown .completer-no-results,.completer-dropdown .completer-searching{padding:12px 15px;font-size:.875rem}.completer-selected-row{background-color:#eee}.completer-image{width:32px;height:32px;border-radius:50%}.validate-success.ng-valid .completer-input{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.validate-success.ng-valid .completer-holder label{color:#00c851!important}.form-submitted .validate-error.ng-invalid .completer-input,.validate-error.ng-invalid.ng-touched .completer-input{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted .validate-error.ng-invalid .completer-holder label,.validate-error.ng-invalid.ng-touched .completer-holder label{color:#f44336!important}.completer-row:hover,.highlight-row{background-color:#eee}"]
            }] }
];
/** @nocollapse */
MdbAutoCompleterComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MdbAutoCompleterComponent.propDecorators = {
    textNoResults: [{ type: Input }],
    clearButton: [{ type: Input }],
    clearButtonTabIndex: [{ type: Input }],
    appendToBody: [{ type: Input }],
    disabled: [{ type: Input }],
    visibleOptions: [{ type: Input }],
    optionHeight: [{ type: Input }],
    dropdownHeight: [{ type: Input }],
    displayValue: [{ type: Input }],
    select: [{ type: Output }],
    selected: [{ type: Output }],
    optionList: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true, read: ElementRef },] }],
    mdbOptions: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true },] }],
    dropdown: [{ type: ViewChild, args: ['dropdown', { static: false },] }],
    noResultsEl: [{ type: ViewChild, args: ['noResults', { static: false },] }]
};
if (false) {
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.textNoResults;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.clearButton;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.clearButtonTabIndex;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.appendToBody;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.disabled;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype._visibleOptions;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype._optionHeight;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype._dropdownHeight;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.displayValue;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.select;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.selected;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.optionList;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.mdbOptions;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.dropdown;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.noResultsEl;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype.utils;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.origin;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.parameters;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isDropdownOpen;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._allItems;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isOpen;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItemIndex;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItem;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItemChanged;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isBrowser;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBVTlGLE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQXVGcEMsWUFDVSxRQUFtQixFQUNuQixFQUFjLEVBQ0QsVUFBa0I7UUFGL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBdkZmLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHdCQUFt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SUFFbkIsK0NBTUU7Ozs7O0lBRUYsb0RBQTJEOzs7OztJQUUzRCw4Q0FBbUM7Ozs7O0lBQ25DLDRDQUF3Qjs7Ozs7SUFDeEIsdURBQWdDOzs7OztJQUNoQyxrREFBdUM7Ozs7O0lBQ3ZDLHlEQUFnRTs7Ozs7SUFDaEUsK0NBQTJCOzs7OztJQUd6Qiw2Q0FBMkI7Ozs7O0lBQzNCLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgUXVlcnlMaXN0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiT3B0aW9uQ29tcG9uZW50LCBNREJfT1BUSU9OX1BBUkVOVCB9IGZyb20gJy4vbWRiLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVNlbGVjdGVkT3B0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3RlZC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBkb2N1bWVudCwgd2luZG93IH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vLi4vLi4vLi4vZnJlZS91dGlscy91dGlscy5jbGFzcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgVVBfQVJST1cgfSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItYXV0by1jb21wbGV0ZXInLFxuICB0ZW1wbGF0ZVVybDogJ21kYi1hdXRvLWNvbXBsZXRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLy4uL2F1dG8tY29tcGxldGVyLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbWRiQXV0b0NvbXBsZXRlcicsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTURCX09QVElPTl9QQVJFTlQsIHVzZUV4aXN0aW5nOiBNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdGV4dE5vUmVzdWx0czogc3RyaW5nO1xuICBASW5wdXQoKSBjbGVhckJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGNsZWFyQnV0dG9uVGFiSW5kZXggPSAwO1xuICBASW5wdXQoKSBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2aXNpYmxlT3B0aW9ucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlT3B0aW9ucztcbiAgfVxuXG4gIHNldCB2aXNpYmxlT3B0aW9ucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl92aXNpYmxlT3B0aW9ucyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIF92aXNpYmxlT3B0aW9uczogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvcHRpb25IZWlnaHQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG9wdGlvbkhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl9vcHRpb25IZWlnaHQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBfb3B0aW9uSGVpZ2h0ID0gNDU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRyb3Bkb3duSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duSGVpZ2h0O1xuICB9XG5cbiAgc2V0IGRyb3Bkb3duSGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIHRoaXMuX2Ryb3Bkb3duSGVpZ2h0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gZXF1YWwgdG8gNCAqIG9wdGlvbkhlaWdodCAod2hpY2ggaXMgNDUgYnkgZGVmYXVsdClcbiAgX2Ryb3Bkb3duSGVpZ2h0ID0gMTgwO1xuXG4gIEBJbnB1dCgpIGRpc3BsYXlWYWx1ZTogKCh2YWx1ZTogYW55KSA9PiBzdHJpbmcpIHwgbnVsbDtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPHsgdGV4dDogc3RyaW5nOyBlbGVtZW50OiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgZWxlbWVudDogYW55O1xuICB9PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjx7IHRleHQ6IHN0cmluZzsgZWxlbWVudDogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGVsZW1lbnQ6IGFueTtcbiAgfT4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgb3B0aW9uTGlzdDogQXJyYXk8YW55PjtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbWRiT3B0aW9uczogUXVlcnlMaXN0PE1kYk9wdGlvbkNvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZCgnZHJvcGRvd24nLCB7IHN0YXRpYzogZmFsc2UgfSkgZHJvcGRvd246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25vUmVzdWx0cycsIHsgc3RhdGljOiBmYWxzZSB9KSBub1Jlc3VsdHNFbDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIHV0aWxzOiBVdGlscyA9IG5ldyBVdGlscygpO1xuXG4gIG9yaWdpbjogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgcGFyYW1ldGVyczoge1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIGlucHV0SGVpZ2h0OiBudW1iZXI7XG4gIH07XG5cbiAgcHJpdmF0ZSBfaXNEcm9wZG93bk9wZW46IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIF9pc09wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtSW5kZXggPSAtMTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBJU2VsZWN0ZWRPcHRpb247XG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbUNoYW5nZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfaXNCcm93c2VyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuX2lzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnbWRiLWF1dG8tY29tcGxldGVyJyk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub09wdGlvbkNsaWNrKCkge1xuICAgIHRoaXMubWRiT3B0aW9ucy5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMubWRiT3B0aW9ucyksXG4gICAgICAgIHN3aXRjaE1hcCgob3B0aW9uczogUXVlcnlMaXN0PE1kYk9wdGlvbkNvbXBvbmVudD4pID0+IHtcbiAgICAgICAgICByZXR1cm4gbWVyZ2UoLi4ub3B0aW9ucy5tYXAoKG9wdGlvbjogTWRiT3B0aW9uQ29tcG9uZW50KSA9PiBvcHRpb24uY2xpY2skKSk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGNsaWNrZWRPcHRpb246IE1kYk9wdGlvbkNvbXBvbmVudCkgPT4gdGhpcy5faGFuZGxlT3B0aW9uQ2xpY2soY2xpY2tlZE9wdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlT3B0aW9uQ2xpY2sob3B0aW9uOiBNZGJPcHRpb25Db21wb25lbnQpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkSXRlbSh7IHRleHQ6IG9wdGlvbi52YWx1ZSwgZWxlbWVudDogb3B0aW9uIH0pO1xuICAgIHRoaXMuaGlnaGxpZ2h0Um93KDApO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoeyB0ZXh0OiBvcHRpb24udmFsdWUsIGVsZW1lbnQ6IG9wdGlvbiB9KTtcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQoeyB0ZXh0OiBvcHRpb24udmFsdWUsIGVsZW1lbnQ6IG9wdGlvbiB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWxlY3RlZEl0ZW0oaXRlbTogSVNlbGVjdGVkT3B0aW9uKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkLm5leHQodGhpcy5nZXRTZWxlY3RlZEl0ZW0oKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkO1xuICB9XG5cbiAgcHVibGljIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICB9XG5cbiAgcHVibGljIF9jYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICBjb25zdCBtb2RhbEVsID0gdGhpcy51dGlscy5nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1vZGFsLWRpYWxvZycpO1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlci1kcm9wZG93bicpXG4gICAgICA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZXItZHJvcGRvd24nKSlcbiAgICAgIDogbnVsbDtcbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhlaWdodCA9IFsnaGVpZ2h0JywgJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ21hcmdpbi10b3AnLCAnbWFyZ2luLWJvdHRvbSddXG4gICAgICAubWFwKGtleSA9PiBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGtleSksIDEwKSlcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldiArIGN1cik7XG5cbiAgICBjb25zdCB0b3BSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlci1kcm9wZG93bicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBjb25zdCBib3R0b20gPSBtb2RhbEVsID8gd2luZG93LmlubmVySGVpZ2h0IC0gaGVpZ2h0IC0gdG9wUmVjdCA6IHRoaXMucGFyYW1ldGVycy5ib3R0b207XG5cbiAgICBjb25zdCB0b3AgPVxuICAgICAgdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+IGJvdHRvbVxuICAgICAgICA/IGAtJHt0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0fWBcbiAgICAgICAgOiB0aGlzLnBhcmFtZXRlcnMuaW5wdXRIZWlnaHQgKyAzO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAndG9wJywgdG9wICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgMCArICdweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB0aGlzLnBhcmFtZXRlcnMud2lkdGggKyAncHgnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGN1bGF0ZUFwcGVuZFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmlnaW5SZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5vcmlnaW4ubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gb3JpZ2luUmVjdC50b3AgKyBzY3JvbGxUb3A7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9yaWdpblJlY3QuaGVpZ2h0O1xuICAgICAgICBjb25zdCBkcm9wZG93bkhlaWdodCA9IHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGlucHV0TWFyZ2luID0gODtcblxuICAgICAgICBsZXQgdG9wID0gMDtcbiAgICAgICAgbGV0IGxlZnQgPSAwO1xuXG4gICAgICAgIGxlZnQgPSBvcmlnaW5SZWN0LmxlZnQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBvZmZzZXRUb3AgKyBkcm9wZG93bkhlaWdodCArIGhlaWdodCArIGlucHV0TWFyZ2luID5cbiAgICAgICAgICBzY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICkge1xuICAgICAgICAgIHRvcCA9IG9mZnNldFRvcCAtIGRyb3Bkb3duSGVpZ2h0IC0gaW5wdXRNYXJnaW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wID0gb2Zmc2V0VG9wICsgaGVpZ2h0ICsgaW5wdXRNYXJnaW47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRvcCArICdweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBsZWZ0ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB0aGlzLnBhcmFtZXRlcnMud2lkdGggKyAncHgnKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93KCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2lzRHJvcGRvd25PcGVuLm5leHQodGhpcy5pc09wZW4oKSk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93biAmJiAhdGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZHJvcGRvd24gJiYgdGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlQXBwZW5kUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLl9pc0Ryb3Bkb3duT3Blbi5uZXh0KHRoaXMuaXNPcGVuKCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc0Ryb3Bkb3duT3BlbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9pc0Ryb3Bkb3duT3BlbjtcbiAgfVxuXG4gIHJlbW92ZUhpZ2hsaWdodChpbmRleDogbnVtYmVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZm9yRWFjaCgoZWw6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlclJvdyA9IGVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlci1yb3cnKTtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnaGlnaGxpZ2h0LXJvdycpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgY29tcGxldGVyUm93LmZvckVhY2goKGVsZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtLCAnaGlnaGxpZ2h0LXJvdycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGhpZ2hsaWdodFJvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5fYWxsSXRlbXMgPSB0aGlzLm9wdGlvbkxpc3RcbiAgICAgIC5maWx0ZXIoZWwgPT4gZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlci1yb3cnKSlcbiAgICAgIC5tYXAoZWxlbSA9PiBlbGVtLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuX2FsbEl0ZW1zW2luZGV4XSkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0ZXJSb3cgPSBlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZXItcm93Jyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHQoaW5kZXgpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY29tcGxldGVyUm93W2NvbXBsZXRlclJvdy5sZW5ndGggLSAxXSwgJ2hpZ2hsaWdodC1yb3cnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBuYXZpZ2F0ZVVzaW5nS2V5Ym9hcmQoZXZlbnQ6IGFueSkge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duKSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBET1dOX0FSUk9XOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldyhldmVudC5rZXkpO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggKyAxIDw9IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KCsrdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggKyAxID09PSB0aGlzLl9hbGxJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50OiBhbnkgPSB0aGlzLm1kYk9wdGlvbnMuZmluZChcbiAgICAgICAgICAgIChlbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBlbCAmJiBpbmRleCA9PT0gdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoeyB0ZXh0OiBzZWxlY3RlZEVsZW1lbnQudmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkRWxlbWVudCB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoZXZlbnQua2V5KTtcbiAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggPT09IC0xIHx8IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0SXRlbUluZGV4ID0gdGhpcy5tZGJPcHRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KGxhc3RJdGVtSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdygtLXRoaXMuX3NlbGVjdGVkSXRlbUluZGV4KTtcblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbTogYW55ID0gdGhpcy5tZGJPcHRpb25zLmZpbmQoXG4gICAgICAgICAgICAoZWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gZWwgJiYgaW5kZXggPT09IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KHsgdGV4dDogc2VsZWN0ZWRJdGVtLnZhbHVlLCBlbGVtZW50OiBzZWxlY3RlZEl0ZW0gfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRVNDQVBFOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5tZGJPcHRpb25zLm1hcChlbCA9PiBlbClbdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXhdO1xuICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW0oeyB0ZXh0OiBzZWxlY3RlZE9wdGlvbi52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRPcHRpb24gfSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KHsgdGV4dDogc2VsZWN0ZWRPcHRpb24udmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkT3B0aW9uIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KHsgdGV4dDogc2VsZWN0ZWRPcHRpb24udmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkT3B0aW9uIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldyh0eXBlOiBzdHJpbmcpIHtcbiAgICBsZXQgbGlzdEhlaWdodCA9IDA7XG4gICAgbGV0IGl0ZW1JbmRleCA9IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4O1xuXG4gICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGxpc3RIZWlnaHQgKz0gZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaXRlbUluZGV4ID4gLTEpIHtcbiAgICAgIGxldCBpdGVtSGVpZ2h0ID0gMDtcblxuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBFbGVtZW50UmVmLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKGkgPT09IGl0ZW1JbmRleCArIDEpIHtcbiAgICAgICAgICBpdGVtSGVpZ2h0ID0gZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpdGVtVG9wID0gKGl0ZW1JbmRleCArIDEpICogaXRlbUhlaWdodDtcbiAgICAgIGNvbnN0IHZpZXdUb3AgPSB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgdmlld0JvdHRvbSA9IHZpZXdUb3AgKyBsaXN0SGVpZ2h0O1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGxUb3AnLCBpdGVtVG9wIC0gaXRlbUhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdBcnJvd1VwJykge1xuICAgICAgICBpZiAoaXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaXRlbUluZGV4ID0gdGhpcy5vcHRpb25MaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbUluZGV4LS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbUluZGV4ID09PSB0aGlzLl9hbGxJdGVtcy5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICdzY3JvbGxUb3AnLFxuICAgICAgICAgICAgdmlld0JvdHRvbSAtIGl0ZW1IZWlnaHRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICAgICAgIGl0ZW1JbmRleCAqIGl0ZW1IZWlnaHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24ocGFyYW1ldGVyczogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyBib3R0b206IG51bWJlciB9KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgICBjb25zdCB0b3AgPVxuICAgICAgICAgIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPiBwYXJhbWV0ZXJzLmJvdHRvbVxuICAgICAgICAgICAgPyBwYXJhbWV0ZXJzLnRvcCAtIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgIDogcGFyYW1ldGVycy50b3A7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAndG9wJywgdG9wICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHBhcmFtZXRlcnMubGVmdCArICdweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgcGFyYW1ldGVycy53aWR0aCArICdweCcpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgcHVibGljIGFwcGVuZERyb3Bkb3duKCkge1xuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgdGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2R5LCBkcm9wZG93bik7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUFwcGVuZFBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldFNpbmdsZU9wdGlvbkhlaWdodCgpIHtcbiAgICB0aGlzLm1kYk9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgb3B0aW9uLl9vcHRpb25IZWlnaHQgPSB0aGlzLl9vcHRpb25IZWlnaHQ7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fbGlzdGVuVG9PcHRpb25DbGljaygpO1xuICAgIHRoaXMuaGlnaGxpZ2h0Um93KDApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=