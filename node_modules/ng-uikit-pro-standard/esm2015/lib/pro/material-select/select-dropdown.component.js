/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, ElementRef, HostListener, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OptionList } from './option-list';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap, map } from 'rxjs/operators';
import { A, NINE, Z, ZERO } from '../../free/utils/keyboard-navigation';
export class SelectDropdownComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} cdRef
     */
    constructor(_elementRef, _renderer, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.cdRef = cdRef;
        this.customClass = '';
        this.visibleOptions = 4;
        this.selectAllLabel = 'Select all';
        this.outline = false;
        this.close = new EventEmitter();
        this.optionClicked = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.animationDone = new EventEmitter();
        this.animationStart = new EventEmitter();
        this.selectAll = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
        // Used in sliding-down animation
        this.state = 'invisible';
        this.startHeight = 0;
        this.endHeight = 45;
        this.hasOptionsItems = true;
        this._destroy = new Subject();
        this._pressedKeysStream = new Subject();
        this._pressedKeys = [];
        this.selectAllSelected = false;
        this.searchIndex = 0;
        this.previousKey = '';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowKeydown(event) {
        if ((event.keyCode >= A && event.keyCode <= Z) ||
            (event.keyCode >= ZERO && event.keyCode <= NINE)) {
            this._pressedKeysStream.next(String.fromCharCode(event.keyCode));
        }
    }
    /**
     * @return {?}
     */
    highlightOptionByTyping() {
        this._pressedKeysStream
            .pipe(tap((/**
         * @param {?} key
         * @return {?}
         */
        (key) => this._pressedKeys.push(key))), map((/**
         * @return {?}
         */
        () => this._pressedKeys.join('').toLocaleLowerCase())), debounceTime(200), takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} searchKey
         * @return {?}
         */
        (searchKey) => {
            /** @type {?} */
            const items = Array.from(this.optionList['_options'])
                .filter((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => !elem.group))
                .filter((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => !elem.disabled))
                .map((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el.wrappedOption.label || el.wrappedOption.value));
            this.navigateThroughArray(searchKey, items);
            this.previousKey = searchKey;
        }));
    }
    /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    navigateThroughArray(key, itemSource) {
        /** @type {?} */
        const items = itemSource.filter((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el
            .toString()
            .toLowerCase()
            .startsWith(key.toString().toLowerCase())));
        if (this.searchIndex > items.length - 1 || key !== this.previousKey) {
            this.searchIndex = 0;
        }
        this.highlightedItem = this.optionList.filtered.find((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el.wrappedOption.label === items[this.searchIndex]));
        this.searchIndex++;
        if (this.highlightedItem) {
            this.optionList.highlightOption(this.highlightedItem);
            this.cdRef.markForCheck();
        }
        this.moveHighlightedIntoView();
        this._pressedKeys = [];
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    onkeyup() {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    }
    /**
     * @return {?}
     */
    onkeydown() {
        this.setOptionHeight();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
        this.highlightOptionByTyping();
    }
    /**
     * @return {?}
     */
    setDropdownHeight() {
        this.optionList.options.filter((/**
         * @param {?} el
         * @return {?}
         */
        el => (/**
         * @return {?}
         */
        () => {
            if (el.icon) {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', this.dropdownHeight + 8 + 'px');
            }
            else {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', this.dropdownHeight + 'px');
            }
        })));
    }
    /**
     * @return {?}
     */
    setVisibleOptionsNumber() {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    }
    /**
     * @return {?}
     */
    setOptionHeight() {
        /** @type {?} */
        const optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            /** @type {?} */
            const isCustomElement = el.classList.contains('custom-select-content');
            if (el.firstElementChild) {
                if (this.optionHeight && el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    this._renderer.setStyle(el.firstElementChild, 'height', `${this.optionHeight}px`);
                }
                if (el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    this._renderer.setStyle(el.firstElementChild, 'line-height', `${this.optionHeight}px`);
                }
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        /** @type {?} */
        const container = this._elementRef.nativeElement.classList;
        setTimeout((/**
         * @return {?}
         */
        () => {
            container.add('fadeInSelect');
        }), 200);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = this.state === 'invisible' ? 'visible' : 'invisible';
        this.cdRef.detectChanges();
        if (this.multiple) {
            /** @type {?} */
            const disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (let i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.filterInput.nativeElement.focus();
            }), 0);
        }
    }
    // Filter input (single select).
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.singleFilterClick.emit(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterInput(event) {
        this.singleFilterInput.emit(event.target.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.singleFilterKeydown.emit(event);
    }
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    onOptionsWheel(event) {
        this.handleOptionsWheel(event);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onOptionClick(option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    }
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    optionsReset() {
        this.optionList.filter('');
        this.optionList.highlight();
    }
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    getOptionStyle(option) {
        if (option.highlighted || option.hovered) {
            /** @type {?} */
            const optionStyle = {};
            optionStyle['height.px'] = this.optionHeight;
            if (typeof this.highlightColor !== 'undefined') {
                optionStyle['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                optionStyle['color'] = this.highlightTextColor;
            }
            return optionStyle;
        }
        else {
            return {};
        }
    }
    /**
     * @return {?}
     */
    onSelectAllClick() {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    }
    /**
     * @return {?}
     */
    updateSelectAllState() {
        /** @type {?} */
        const areAllSelected = this.optionList.filtered
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        (option) => !option.disabled))
            .every((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            return option.selected ? true : false;
        }));
        areAllSelected ? (this.selectAllSelected = true) : (this.selectAllSelected = false);
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    clearFilterInput() {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    }
    /**
     * @return {?}
     */
    onAnimationDone() {
        this.animationDone.emit();
    }
    /**
     * @return {?}
     */
    onAnimationStart() {
        this.animationStart.emit();
    }
    /**
     * @return {?}
     */
    moveHighlightedIntoView() {
        /** @type {?} */
        let listHeight;
        /** @type {?} */
        const list = this.optionsList.nativeElement;
        listHeight =
            this.multiple && this.enableSelectAll
                ? list.offsetHeight - this.optionHeight
                : list.offsetHeight;
        /** @type {?} */
        const itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            const item = list.children[0].children[itemIndex];
            /** @type {?} */
            const itemHeight = item.offsetHeight;
            /** @type {?} */
            const itemTop = itemIndex * itemHeight;
            /** @type {?} */
            const itemBottom = itemTop + itemHeight;
            /** @type {?} */
            const viewTop = list.scrollTop;
            /** @type {?} */
            const viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    handleOptionsWheel(e) {
        /** @type {?} */
        const div = this.optionsList.nativeElement;
        /** @type {?} */
        const atTop = div.scrollTop === 0;
        /** @type {?} */
        const atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
}
SelectDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-select-dropdown',
                template: "<div\n  (click)=\"$event.stopPropagation()\"\n  class=\"dropdown-content\"\n  #dropdownContent\n  [ngStyle]=\"{ 'top.px': top, 'left.px': left, 'width.px': width }\"\n  [@dropdownAnimation]=\"{\n    value: state,\n    params: { startHeight: startHeight, endHeight: endHeight }\n  }\"\n  (@dropdownAnimation.done)=\"onAnimationDone()\"\n  (@dropdownAnimation.start)=\"onAnimationStart()\"\n>\n  <div class=\"filter md-form px-2\" *ngIf=\"filterEnabled\">\n    <input\n      type=\"text\"\n      class=\"search form-control w-100 d-block\"\n      #filterInput\n      [attr.autocomplete]=\"filterAutocomplete ? 'on' : 'off'\"\n      [attr.role]=\"'searchbox'\"\n      [placeholder]=\"placeholder\"\n      (input)=\"onSingleFilterInput($event)\"\n      (keydown)=\"onSingleFilterKeydown($event)\"\n    />\n  </div>\n\n  <div class=\"options\" #optionsList>\n    <ul\n      class=\"select-dropdown\"\n      [ngClass]=\"{ 'multiple-select-dropdown': multiple }\"\n      (wheel)=\"onOptionsWheel($event)\"\n    >\n      <li\n        [ngStyle]=\"{ 'height.px': optionHeight }\"\n        *ngIf=\"multiple && enableSelectAll && this.hasOptionsItems\"\n        (click)=\"onSelectAllClick()\"\n      >\n        <span class=\"filtrable\" *ngIf=\"multiple\">\n          <input\n            type=\"checkbox\"\n            [checked]=\"selectAllSelected\"\n            class=\"form-check-input {{ customClass }}\"\n          />\n          <label></label>\n          {{ selectAllLabel }}\n        </span>\n      </li>\n      <li\n        *ngFor=\"let option of optionList.filtered\"\n        [ngClass]=\"{\n          'heavy-rain-gradient': option.highlighted && !highlightColor,\n          active: option.highlighted,\n          selected: option.selected,\n          disabled: option.disabled,\n          optgroup: option.group,\n          'd-flex justify-content-between flex-row-reverse align-items-center': option.icon\n        }\"\n        [ngStyle]=\"{\n          'height.px': optionHeight,\n          'line-height.px': optionHeight,\n          'background-color': getOptionStyle(option)['background-color'],\n          color: getOptionStyle(option)['color']\n        }\"\n        [attr.role]=\"'option'\"\n        [attr.aria-selected]=\"option.selected\"\n        [attr.aria-disabled]=\"option.disabled\"\n        (click)=\"onOptionClick(option)\"\n        (mouseover)=\"option.hovered = true\"\n        (mouseleave)=\"option.hovered = false\"\n      >\n        <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\" />\n        <span\n          class=\"deselect-option\"\n          *ngIf=\"!multiple\"\n          [ngStyle]=\"{\n            'background-color': getOptionStyle(option)['background-color'],\n            color: getOptionStyle(option)['color']\n          }\"\n          >{{ option.label }}</span\n        >\n        <span\n          class=\"deselect-option\"\n          [ngStyle]=\"{\n            'background-color': getOptionStyle(option)['background-color'],\n            color: getOptionStyle(option)['color']\n          }\"\n          *ngIf=\"multiple\"\n        >\n          <input\n            type=\"checkbox\"\n            [checked]=\"option.selected\"\n            class=\"form-check-input {{ customClass }}\"\n            [disabled]=\"option.disabled\"\n          />\n          <label></label>\n          {{ option.label }}\n        </span>\n      </li>\n      <li\n        *ngIf=\"!this.hasOptionsItems\"\n        class=\"message disabled\"\n        [ngStyle]=\"{ 'height.px': optionHeight }\"\n      >\n        <span>{{ notFoundMsg }}</span>\n      </li>\n      <li #customContent class=\"custom-select-content\">\n        <ng-content></ng-content>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('dropdownAnimation', [
                        state('invisible', style({ opacity: 0, height: '0px' })),
                        state('visible', style({ opacity: 1, height: '*' })),
                        transition('invisible => visible', animate('300ms ease')),
                        transition('visible => invisible', animate('300ms ease')),
                    ]),
                ]
            }] }
];
/** @nocollapse */
SelectDropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
SelectDropdownComponent.propDecorators = {
    filterEnabled: [{ type: Input }],
    filterAutocomplete: [{ type: Input }],
    highlightColor: [{ type: Input }],
    highlightTextColor: [{ type: Input }],
    left: [{ type: Input }],
    multiple: [{ type: Input }],
    notFoundMsg: [{ type: Input }],
    optionList: [{ type: Input }],
    top: [{ type: Input }],
    width: [{ type: Input }],
    placeholder: [{ type: Input }],
    customClass: [{ type: Input }],
    visibleOptions: [{ type: Input }],
    dropdownHeight: [{ type: Input }],
    dropdownMaxHeight: [{ type: Input }],
    optionHeight: [{ type: Input }],
    enableSelectAll: [{ type: Input }],
    selectAllLabel: [{ type: Input }],
    outline: [{ type: Input }],
    close: [{ type: Output }],
    optionClicked: [{ type: Output }],
    singleFilterClick: [{ type: Output }],
    singleFilterInput: [{ type: Output }],
    singleFilterKeydown: [{ type: Output }],
    animationDone: [{ type: Output }],
    animationStart: [{ type: Output }],
    selectAll: [{ type: Output }],
    filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
    optionsList: [{ type: ViewChild, args: ['optionsList', { static: true },] }],
    dropdownContent: [{ type: ViewChild, args: ['dropdownContent', { static: true },] }],
    customContent: [{ type: ViewChild, args: ['customContent', { static: true },] }],
    onWindowKeydown: [{ type: HostListener, args: ['window: keydown', ['$event'],] }],
    onkeyup: [{ type: HostListener, args: ['keyup',] }],
    onkeydown: [{ type: HostListener, args: ['input',] }]
};
if (false) {
    /** @type {?} */
    SelectDropdownComponent.prototype.filterEnabled;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterAutocomplete;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.left;
    /** @type {?} */
    SelectDropdownComponent.prototype.multiple;
    /** @type {?} */
    SelectDropdownComponent.prototype.notFoundMsg;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionList;
    /** @type {?} */
    SelectDropdownComponent.prototype.top;
    /** @type {?} */
    SelectDropdownComponent.prototype.width;
    /** @type {?} */
    SelectDropdownComponent.prototype.placeholder;
    /** @type {?} */
    SelectDropdownComponent.prototype.customClass;
    /** @type {?} */
    SelectDropdownComponent.prototype.visibleOptions;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownMaxHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.enableSelectAll;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAllLabel;
    /** @type {?} */
    SelectDropdownComponent.prototype.outline;
    /** @type {?} */
    SelectDropdownComponent.prototype.close;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionClicked;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterClick;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterKeydown;
    /** @type {?} */
    SelectDropdownComponent.prototype.animationDone;
    /** @type {?} */
    SelectDropdownComponent.prototype.animationStart;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAll;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionsList;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownContent;
    /** @type {?} */
    SelectDropdownComponent.prototype.customContent;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.state;
    /** @type {?} */
    SelectDropdownComponent.prototype.startHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.endHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.hasOptionsItems;
    /**
     * @type {?}
     * @private
     */
    SelectDropdownComponent.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    SelectDropdownComponent.prototype._pressedKeysStream;
    /**
     * @type {?}
     * @private
     */
    SelectDropdownComponent.prototype._pressedKeys;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAllSelected;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightedItem;
    /** @type {?} */
    SelectDropdownComponent.prototype.searchIndex;
    /** @type {?} */
    SelectDropdownComponent.prototype.previousKey;
    /** @type {?} */
    SelectDropdownComponent.prototype._elementRef;
    /** @type {?} */
    SelectDropdownComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    SelectDropdownComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFnQnhFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQW1EbEMsWUFDUyxXQUF1QixFQUN2QixTQUFvQixFQUNuQixLQUF3QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBMUN6QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUtuQixtQkFBYyxHQUFHLFlBQVksQ0FBQztRQUM5QixZQUFPLEdBQUcsS0FB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Q3JCLDhDQUFnQjs7SUFDaEIsOENBQWlCOztJQVBmLDhDQUE4Qjs7SUFDOUIsNENBQTJCOzs7OztJQUMzQix3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUmVuZGVyZXIyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7IE9wdGlvbkxpc3QgfSBmcm9tICcuL29wdGlvbi1saXN0JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgdGFrZVVudGlsLCB0YXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEEsIE5JTkUsIFosIFpFUk8gfSBmcm9tICcuLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2VsZWN0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2Ryb3Bkb3duQW5pbWF0aW9uJywgW1xuICAgICAgc3RhdGUoJ2ludmlzaWJsZScsIHN0eWxlKHsgb3BhY2l0eTogMCwgaGVpZ2h0OiAnMHB4JyB9KSksXG4gICAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHsgb3BhY2l0eTogMSwgaGVpZ2h0OiAnKicgfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW52aXNpYmxlID0+IHZpc2libGUnLCBhbmltYXRlKCczMDBtcyBlYXNlJykpLFxuICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiBpbnZpc2libGUnLCBhbmltYXRlKCczMDBtcyBlYXNlJykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBmaWx0ZXJFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBmaWx0ZXJBdXRvY29tcGxldGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsZWZ0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuICBASW5wdXQoKSBub3RGb3VuZE1zZzogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25MaXN0OiBPcHRpb25MaXN0O1xuICBASW5wdXQoKSB0b3A6IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgdmlzaWJsZU9wdGlvbnMgPSA0O1xuICBASW5wdXQoKSBkcm9wZG93bkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBkcm9wZG93bk1heEhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBvcHRpb25IZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0QWxsOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgYWxsJztcbiAgQElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9wdGlvbkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE9wdGlvbj4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVySW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcktleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsdGVySW5wdXQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uc0xpc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBvcHRpb25zTGlzdDogYW55O1xuICBAVmlld0NoaWxkKCdkcm9wZG93bkNvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkcm9wZG93bkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2N1c3RvbUNvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjdXN0b21Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIGRpc2FibGVkQ29sb3IgPSAnI2ZmZic7XG4gIGRpc2FibGVkVGV4dENvbG9yID0gJzllOWU5ZSc7XG5cbiAgLy8gVXNlZCBpbiBzbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gIHN0YXRlID0gJ2ludmlzaWJsZSc7XG4gIHN0YXJ0SGVpZ2h0OiBhbnkgPSAwO1xuICBlbmRIZWlnaHQ6IGFueSA9IDQ1O1xuXG4gIHB1YmxpYyBoYXNPcHRpb25zSXRlbXMgPSB0cnVlO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9wcmVzc2VkS2V5c1N0cmVhbSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfcHJlc3NlZEtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBoaWdobGlnaHRlZEl0ZW06IGFueTtcbiAgc2VhcmNoSW5kZXggPSAwO1xuICBwcmV2aW91c0tleSA9ICcnO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzoga2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uV2luZG93S2V5ZG93bihldmVudDogYW55KSB7XG4gICAgaWYgKFxuICAgICAgKGV2ZW50LmtleUNvZGUgPj0gQSAmJiBldmVudC5rZXlDb2RlIDw9IFopIHx8XG4gICAgICAoZXZlbnQua2V5Q29kZSA+PSBaRVJPICYmIGV2ZW50LmtleUNvZGUgPD0gTklORSlcbiAgICApIHtcbiAgICAgIHRoaXMuX3ByZXNzZWRLZXlzU3RyZWFtLm5leHQoU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKSk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0T3B0aW9uQnlUeXBpbmcoKSB7XG4gICAgdGhpcy5fcHJlc3NlZEtleXNTdHJlYW1cbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKGtleTogc3RyaW5nKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5wdXNoKGtleSkpLFxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5fcHJlc3NlZEtleXMuam9pbignJykudG9Mb2NhbGVMb3dlckNhc2UoKSksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHNlYXJjaEtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLm9wdGlvbkxpc3RbJ19vcHRpb25zJ10pXG4gICAgICAgICAgLmZpbHRlcigoZWxlbTogYW55KSA9PiAhZWxlbS5ncm91cClcbiAgICAgICAgICAuZmlsdGVyKChlbGVtOiBhbnkpID0+ICFlbGVtLmRpc2FibGVkKVxuICAgICAgICAgIC5tYXAoKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgfHwgZWwud3JhcHBlZE9wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRocm91Z2hBcnJheShzZWFyY2hLZXksIGl0ZW1zKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0tleSA9IHNlYXJjaEtleTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmF2aWdhdGVUaHJvdWdoQXJyYXkoa2V5OiBzdHJpbmcsIGl0ZW1Tb3VyY2U6IGFueSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaXRlbVNvdXJjZS5maWx0ZXIoKGVsOiBhbnkpID0+XG4gICAgICBlbFxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAuc3RhcnRzV2l0aChrZXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgaWYgKHRoaXMuc2VhcmNoSW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGtleSAhPT0gdGhpcy5wcmV2aW91c0tleSkge1xuICAgICAgdGhpcy5zZWFyY2hJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmZpbmQoXG4gICAgICAoZWw6IGFueSkgPT4gZWwud3JhcHBlZE9wdGlvbi5sYWJlbCA9PT0gaXRlbXNbdGhpcy5zZWFyY2hJbmRleF1cbiAgICApO1xuXG4gICAgdGhpcy5zZWFyY2hJbmRleCsrO1xuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0T3B0aW9uKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIHRoaXMuX3ByZXNzZWRLZXlzID0gW107XG4gIH1cblxuICAvKiogRXZlbnQgaGFuZGxlcnMuICoqL1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJykgb25rZXl1cCgpIHtcbiAgICB0aGlzLmhhc09wdGlvbnNJdGVtcyA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5sZW5ndGggPiAwO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0Jykgb25rZXlkb3duKCkge1xuICAgIHRoaXMuc2V0T3B0aW9uSGVpZ2h0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB0aGlzLnNldERyb3Bkb3duSGVpZ2h0KCk7XG4gICAgdGhpcy5zZXRWaXNpYmxlT3B0aW9uc051bWJlcigpO1xuICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uQnlUeXBpbmcoKTtcbiAgfVxuXG4gIHNldERyb3Bkb3duSGVpZ2h0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmZpbHRlcihlbCA9PiAoKSA9PiB7XG4gICAgICBpZiAoZWwuaWNvbikge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCArIDggKyAncHgnXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCArICdweCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZpc2libGVPcHRpb25zTnVtYmVyKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCArICdweCdcbiAgICApO1xuICB9XG5cbiAgc2V0T3B0aW9uSGVpZ2h0KCkge1xuICAgIGNvbnN0IG9wdGlvbnNJdGVtcyA9IEFycmF5LmZyb20odGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKTtcbiAgICBvcHRpb25zSXRlbXMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaXNDdXN0b21FbGVtZW50ID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXN0b20tc2VsZWN0LWNvbnRlbnQnKTtcbiAgICAgIGlmIChlbC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25IZWlnaHQgJiYgZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycgJiYgIWlzQ3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLmZpcnN0RWxlbWVudENoaWxkLCAnaGVpZ2h0JywgYCR7dGhpcy5vcHRpb25IZWlnaHR9cHhgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycgJiYgIWlzQ3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLmZpcnN0RWxlbWVudENoaWxkLCAnbGluZS1oZWlnaHQnLCBgJHt0aGlzLm9wdGlvbkhlaWdodH1weGApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbkxpc3QnKSkge1xuICAgICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZHJvcGRvd25IZWlnaHQnKSkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bkhlaWdodCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuYWRkKCdmYWRlSW5TZWxlY3QnKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFNsaWRpbmctZG93biBhbmltYXRpb25cbiAgICB0aGlzLmVuZEhlaWdodCA9IHRoaXMuZHJvcGRvd25Db250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSAnaW52aXNpYmxlJyA/ICd2aXNpYmxlJyA6ICdpbnZpc2libGUnO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudHMgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJy5kaXNhYmxlZC5vcHRncm91cCdcbiAgICAgICk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzYWJsZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICBkaXNhYmxlZEVsZW1lbnRzW2ldLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQsXG4gICAgICAgICAgJ2Rpc3BsYXknLFxuICAgICAgICAgICdub25lJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0T3B0aW9uSGVpZ2h0KCk7XG5cbiAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsdGVyIGlucHV0IChzaW5nbGUgc2VsZWN0KS5cblxuICBvblNpbmdsZUZpbHRlckNsaWNrKCkge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVyQ2xpY2suZW1pdChudWxsKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVySW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVySW5wdXQuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgb25TaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcktleWRvd24uZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBPcHRpb25zIGxpc3QuXG5cbiAgb25PcHRpb25zV2hlZWwoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlT3B0aW9uc1doZWVsKGV2ZW50KTtcbiAgfVxuXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBPcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbkNsaWNrZWQuZW1pdChvcHRpb24pO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgfVxuXG4gIC8qKiBJbml0aWFsaXphdGlvbi4gKiovXG5cbiAgcHJpdmF0ZSBvcHRpb25zUmVzZXQoKSB7XG4gICAgdGhpcy5vcHRpb25MaXN0LmZpbHRlcignJyk7XG4gICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodCgpO1xuICB9XG5cbiAgLyoqIFZpZXcuICoqL1xuXG4gIGdldE9wdGlvblN0eWxlKG9wdGlvbjogT3B0aW9uKTogYW55IHtcbiAgICBpZiAob3B0aW9uLmhpZ2hsaWdodGVkIHx8IG9wdGlvbi5ob3ZlcmVkKSB7XG4gICAgICBjb25zdCBvcHRpb25TdHlsZTogYW55ID0ge307XG4gICAgICBvcHRpb25TdHlsZVsnaGVpZ2h0LnB4J10gPSB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5oaWdobGlnaHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0Q29sb3I7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25TdHlsZVsnY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvblN0eWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RBbGxDbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gIXRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQ7XG4gICAgdGhpcy5zZWxlY3RBbGwuZW1pdCh0aGlzLnNlbGVjdEFsbFNlbGVjdGVkKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdEFsbFN0YXRlKCkge1xuICAgIGNvbnN0IGFyZUFsbFNlbGVjdGVkID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkXG4gICAgICAuZmlsdGVyKChvcHRpb246IE9wdGlvbikgPT4gIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgIC5ldmVyeSgob3B0aW9uOiBPcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgYXJlQWxsU2VsZWN0ZWQgPyAodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9IHRydWUpIDogKHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjbGVhckZpbHRlcklucHV0KCkge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkRvbmUuZW1pdCgpO1xuICB9XG5cbiAgb25BbmltYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXJ0LmVtaXQoKTtcbiAgfVxuXG4gIG1vdmVIaWdobGlnaHRlZEludG9WaWV3KCkge1xuICAgIGxldCBsaXN0SGVpZ2h0OiBudW1iZXI7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBsaXN0SGVpZ2h0ID1cbiAgICAgIHRoaXMubXVsdGlwbGUgJiYgdGhpcy5lbmFibGVTZWxlY3RBbGxcbiAgICAgICAgPyBsaXN0Lm9mZnNldEhlaWdodCAtIHRoaXMub3B0aW9uSGVpZ2h0XG4gICAgICAgIDogbGlzdC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLm9wdGlvbkxpc3QuZ2V0SGlnaGxpZ2h0ZWRJbmRleCgpO1xuXG4gICAgaWYgKGl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBpdGVtID0gbGlzdC5jaGlsZHJlblswXS5jaGlsZHJlbltpdGVtSW5kZXhdO1xuICAgICAgY29uc3QgaXRlbUhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBjb25zdCBpdGVtVG9wID0gaXRlbUluZGV4ICogaXRlbUhlaWdodDtcbiAgICAgIGNvbnN0IGl0ZW1Cb3R0b20gPSBpdGVtVG9wICsgaXRlbUhlaWdodDtcblxuICAgICAgY29uc3Qgdmlld1RvcCA9IGxpc3Quc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgdmlld0JvdHRvbSA9IHZpZXdUb3AgKyBsaXN0SGVpZ2h0O1xuXG4gICAgICBpZiAoaXRlbUJvdHRvbSA+IHZpZXdCb3R0b20pIHtcbiAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtQm90dG9tIC0gbGlzdEhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbVRvcCA8IHZpZXdUb3ApIHtcbiAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtVG9wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlT3B0aW9uc1doZWVsKGU6IGFueSkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBhdFRvcCA9IGRpdi5zY3JvbGxUb3AgPT09IDA7XG4gICAgY29uc3QgYXRCb3R0b20gPSBkaXYub2Zmc2V0SGVpZ2h0ICsgZGl2LnNjcm9sbFRvcCA9PT0gZGl2LnNjcm9sbEhlaWdodDtcblxuICAgIGlmIChhdFRvcCAmJiBlLmRlbHRhWSA8IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGF0Qm90dG9tICYmIGUuZGVsdGFZID4gMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxufVxuIl19