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
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(_elementRef, _renderer, cdRef) {
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
    SelectDropdownComponent.prototype.onWindowKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((event.keyCode >= A && event.keyCode <= Z) ||
            (event.keyCode >= ZERO && event.keyCode <= NINE)) {
            this._pressedKeysStream.next(String.fromCharCode(event.keyCode));
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.highlightOptionByTyping = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._pressedKeysStream
            .pipe(tap((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this._pressedKeys.push(key); })), map((/**
         * @return {?}
         */
        function () { return _this._pressedKeys.join('').toLocaleLowerCase(); })), debounceTime(200), takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} searchKey
         * @return {?}
         */
        function (searchKey) {
            /** @type {?} */
            var items = Array.from(_this.optionList['_options'])
                .filter((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) { return !elem.group; }))
                .filter((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) { return !elem.disabled; }))
                .map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el.wrappedOption.label || el.wrappedOption.value; }));
            _this.navigateThroughArray(searchKey, items);
            _this.previousKey = searchKey;
        }));
    };
    /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    SelectDropdownComponent.prototype.navigateThroughArray = /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    function (key, itemSource) {
        var _this = this;
        /** @type {?} */
        var items = itemSource.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            return el
                .toString()
                .toLowerCase()
                .startsWith(key.toString().toLowerCase());
        }));
        if (this.searchIndex > items.length - 1 || key !== this.previousKey) {
            this.searchIndex = 0;
        }
        this.highlightedItem = this.optionList.filtered.find((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.wrappedOption.label === items[_this.searchIndex]; }));
        this.searchIndex++;
        if (this.highlightedItem) {
            this.optionList.highlightOption(this.highlightedItem);
            this.cdRef.markForCheck();
        }
        this.moveHighlightedIntoView();
        this._pressedKeys = [];
    };
    /** Event handlers. **/
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.onkeyup = /**
     * Event handlers. *
     * @return {?}
     */
    function () {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onkeydown = /**
     * @return {?}
     */
    function () {
        this.setOptionHeight();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
        this.highlightOptionByTyping();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setDropdownHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.optionList.options.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return (/**
         * @return {?}
         */
        function () {
            if (el.icon) {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', _this.dropdownHeight + 8 + 'px');
            }
            else {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', _this.dropdownHeight + 'px');
            }
        }); }));
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setVisibleOptionsNumber = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setOptionHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var isCustomElement = el.classList.contains('custom-select-content');
            if (el.firstElementChild) {
                if (_this.optionHeight && el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    _this._renderer.setStyle(el.firstElementChild, 'height', _this.optionHeight + "px");
                }
                if (el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    _this._renderer.setStyle(el.firstElementChild, 'line-height', _this.optionHeight + "px");
                }
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        /** @type {?} */
        var container = this._elementRef.nativeElement.classList;
        setTimeout((/**
         * @return {?}
         */
        function () {
            container.add('fadeInSelect');
        }), 200);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = this.state === 'invisible' ? 'visible' : 'invisible';
        this.cdRef.detectChanges();
        if (this.multiple) {
            /** @type {?} */
            var disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (var i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.filterInput.nativeElement.focus();
            }), 0);
        }
    };
    // Filter input (single select).
    // Filter input (single select).
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = 
    // Filter input (single select).
    /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    // Options list.
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = 
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted || option.hovered) {
            /** @type {?} */
            var optionStyle = {};
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
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSelectAllClick = /**
     * @return {?}
     */
    function () {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.updateSelectAllState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var areAllSelected = this.optionList.filtered
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return !option.disabled; }))
            .every((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.selected ? true : false;
        }));
        areAllSelected ? (this.selectAllSelected = true) : (this.selectAllSelected = false);
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.clearFilterInput = /**
     * @return {?}
     */
    function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationDone = /**
     * @return {?}
     */
    function () {
        this.animationDone.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationStart = /**
     * @return {?}
     */
    function () {
        this.animationStart.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listHeight;
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        listHeight =
            this.multiple && this.enableSelectAll
                ? list.offsetHeight - this.optionHeight
                : list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
    };
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
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    return SelectDropdownComponent;
}());
export { SelectDropdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFeEU7SUFpRUUsaUNBQ1MsV0FBdUIsRUFDdkIsU0FBb0IsRUFDbkIsS0FBd0I7UUFGekIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQTFDekIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFLbkIsbUJBQWMsR0FBRyxZQUFZLENBQUM7UUFDOUIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVmLFVBQUssR0FBRyxJ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QXVDOztJQUN2QywwQ0FBeUI7O0lBRXpCLHdDQUE4Qzs7SUFDOUMsZ0RBQXFEOztJQUNyRCxvREFBdUQ7O0lBQ3ZELG9EQUF5RDs7SUFDekQsc0RBQXdEOztJQUN4RCxnREFBa0Q7O0lBQ2xELGlEQUFtRDs7SUFDbkQsNENBQWtEOztJQUVsRCw4Q0FBOEQ7O0lBQzlELDhDQUE2RDs7SUFDN0Qsa0RBQTRFOztJQUM1RSxnREFBd0U7O0lBRXhFLGdEQUF1Qjs7SUFDdkIsb0RBQTZCOztJQUc3Qix3Q0FBb0I7O0lBQ3BCLDhDQUFxQjs7SUFDckIsNENBQW9COztJQUVwQixrREFBOEI7Ozs7O0lBRTlCLDJDQUF1Qzs7Ozs7SUFDdkMscURBQW1EOzs7OztJQUNuRCwrQ0FBb0M7O0lBRXBDLG9EQUEwQjs7SUFRMUIsa0RBQXFCOztJQUNyQiw4Q0FBZ0I7O0lBQ2hCLDhDQUFpQjs7SUFQZiw4Q0FBOEI7O0lBQzlCLDRDQUEyQjs7Ozs7SUFDM0Isd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQgeyBPcHRpb25MaXN0IH0gZnJvbSAnLi9vcHRpb24tbGlzdCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCwgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBLCBOSU5FLCBaLCBaRVJPIH0gZnJvbSAnLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdpbnZpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIGhlaWdodDogJzBweCcgfSkpLFxuICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2ludmlzaWJsZSA9PiB2aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaW52aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZmlsdGVyQXV0b2NvbXBsZXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGVmdDogbnVtYmVyO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbm90Rm91bmRNc2c6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgQElucHV0KCkgdG9wOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHZpc2libGVPcHRpb25zID0gNDtcbiAgQElucHV0KCkgZHJvcGRvd25IZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgZHJvcGRvd25NYXhIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgb3B0aW9uSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IGFsbCc7XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvcHRpb25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxPcHRpb24+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcklucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJLZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25Eb25lID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbHRlcklucHV0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ29wdGlvbnNMaXN0JywgeyBzdGF0aWM6IHRydWUgfSkgb3B0aW9uc0xpc3Q6IGFueTtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25Db250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgZHJvcGRvd25Db250ZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjdXN0b21Db250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY3VzdG9tQ29udGVudDogRWxlbWVudFJlZjtcblxuICBkaXNhYmxlZENvbG9yID0gJyNmZmYnO1xuICBkaXNhYmxlZFRleHRDb2xvciA9ICc5ZTllOWUnO1xuXG4gIC8vIFVzZWQgaW4gc2xpZGluZy1kb3duIGFuaW1hdGlvblxuICBzdGF0ZSA9ICdpbnZpc2libGUnO1xuICBzdGFydEhlaWdodDogYW55ID0gMDtcbiAgZW5kSGVpZ2h0OiBhbnkgPSA0NTtcblxuICBwdWJsaWMgaGFzT3B0aW9uc0l0ZW1zID0gdHJ1ZTtcblxuICBwcml2YXRlIF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfcHJlc3NlZEtleXNTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIHByaXZhdGUgX3ByZXNzZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgaGlnaGxpZ2h0ZWRJdGVtOiBhbnk7XG4gIHNlYXJjaEluZGV4ID0gMDtcbiAgcHJldmlvdXNLZXkgPSAnJztcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6IGtleWRvd24nLCBbJyRldmVudCddKVxuICBvbldpbmRvd0tleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIGlmIChcbiAgICAgIChldmVudC5rZXlDb2RlID49IEEgJiYgZXZlbnQua2V5Q29kZSA8PSBaKSB8fFxuICAgICAgKGV2ZW50LmtleUNvZGUgPj0gWkVSTyAmJiBldmVudC5rZXlDb2RlIDw9IE5JTkUpXG4gICAgKSB7XG4gICAgICB0aGlzLl9wcmVzc2VkS2V5c1N0cmVhbS5uZXh0KFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSkpO1xuICAgIH1cbiAgfVxuXG4gIGhpZ2hsaWdodE9wdGlvbkJ5VHlwaW5nKCkge1xuICAgIHRoaXMuX3ByZXNzZWRLZXlzU3RyZWFtXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChrZXk6IHN0cmluZykgPT4gdGhpcy5fcHJlc3NlZEtleXMucHVzaChrZXkpKSxcbiAgICAgICAgbWFwKCgpID0+IHRoaXMuX3ByZXNzZWRLZXlzLmpvaW4oJycpLnRvTG9jYWxlTG93ZXJDYXNlKCkpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMjAwKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChzZWFyY2hLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20odGhpcy5vcHRpb25MaXN0Wydfb3B0aW9ucyddKVxuICAgICAgICAgIC5maWx0ZXIoKGVsZW06IGFueSkgPT4gIWVsZW0uZ3JvdXApXG4gICAgICAgICAgLmZpbHRlcigoZWxlbTogYW55KSA9PiAhZWxlbS5kaXNhYmxlZClcbiAgICAgICAgICAubWFwKChlbDogYW55KSA9PiBlbC53cmFwcGVkT3B0aW9uLmxhYmVsIHx8IGVsLndyYXBwZWRPcHRpb24udmFsdWUpO1xuXG4gICAgICAgIHRoaXMubmF2aWdhdGVUaHJvdWdoQXJyYXkoc2VhcmNoS2V5LCBpdGVtcyk7XG4gICAgICAgIHRoaXMucHJldmlvdXNLZXkgPSBzZWFyY2hLZXk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5hdmlnYXRlVGhyb3VnaEFycmF5KGtleTogc3RyaW5nLCBpdGVtU291cmNlOiBhbnkpIHtcbiAgICBjb25zdCBpdGVtcyA9IGl0ZW1Tb3VyY2UuZmlsdGVyKChlbDogYW55KSA9PlxuICAgICAgZWxcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnN0YXJ0c1dpdGgoa2V5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICApO1xuICAgIGlmICh0aGlzLnNlYXJjaEluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSB8fCBrZXkgIT09IHRoaXMucHJldmlvdXNLZXkpIHtcbiAgICAgIHRoaXMuc2VhcmNoSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLmhpZ2hsaWdodGVkSXRlbSA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5maW5kKFxuICAgICAgKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgPT09IGl0ZW1zW3RoaXMuc2VhcmNoSW5kZXhdXG4gICAgKTtcblxuICAgIHRoaXMuc2VhcmNoSW5kZXgrKztcblxuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodE9wdGlvbih0aGlzLmhpZ2hsaWdodGVkSXRlbSk7XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRoaXMubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKTtcbiAgICB0aGlzLl9wcmVzc2VkS2V5cyA9IFtdO1xuICB9XG5cbiAgLyoqIEV2ZW50IGhhbmRsZXJzLiAqKi9cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpIG9ua2V5dXAoKSB7XG4gICAgdGhpcy5oYXNPcHRpb25zSXRlbXMgPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQubGVuZ3RoID4gMDtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIG9ua2V5ZG93bigpIHtcbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgdGhpcy5zZXREcm9wZG93bkhlaWdodCgpO1xuICAgIHRoaXMuc2V0VmlzaWJsZU9wdGlvbnNOdW1iZXIoKTtcbiAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbkJ5VHlwaW5nKCk7XG4gIH1cblxuICBzZXREcm9wZG93bkhlaWdodCgpIHtcbiAgICB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5maWx0ZXIoZWwgPT4gKCkgPT4ge1xuICAgICAgaWYgKGVsLmljb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgKyA4ICsgJ3B4J1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICdoZWlnaHQnLFxuICAgICAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgKyAncHgnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlT3B0aW9uc051bWJlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgIHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudCxcbiAgICAgICdtYXgtaGVpZ2h0JyxcbiAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgKyAncHgnXG4gICAgKTtcbiAgfVxuXG4gIHNldE9wdGlvbkhlaWdodCgpIHtcbiAgICBjb25zdCBvcHRpb25zSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbik7XG4gICAgb3B0aW9uc0l0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGlzQ3VzdG9tRWxlbWVudCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLXNlbGVjdC1jb250ZW50Jyk7XG4gICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uSGVpZ2h0ICYmIGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGAke3RoaXMub3B0aW9uSGVpZ2h0fXB4YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2xpbmUtaGVpZ2h0JywgYCR7dGhpcy5vcHRpb25IZWlnaHR9cHhgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25MaXN0JykpIHtcbiAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Ryb3Bkb3duSGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZCgnZmFkZUluU2VsZWN0Jyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gICAgdGhpcy5lbmRIZWlnaHQgPSB0aGlzLmRyb3Bkb3duQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gJ2ludmlzaWJsZScgPyAndmlzaWJsZScgOiAnaW52aXNpYmxlJztcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICBjb25zdCBkaXNhYmxlZEVsZW1lbnRzID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICcuZGlzYWJsZWQub3B0Z3JvdXAnXG4gICAgICApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2FibGVkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgZGlzYWJsZWRFbGVtZW50c1tpXS5maXJzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLFxuICAgICAgICAgICdkaXNwbGF5JyxcbiAgICAgICAgICAnbm9uZSdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBpbnB1dCAoc2luZ2xlIHNlbGVjdCkuXG5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckNsaWNrLmVtaXQobnVsbCk7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJLZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gT3B0aW9ucyBsaXN0LlxuXG4gIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU9wdGlvbnNXaGVlbChldmVudCk7XG4gIH1cblxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25DbGlja2VkLmVtaXQob3B0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXIoJycpO1xuICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBnZXRPcHRpb25TdHlsZShvcHRpb246IE9wdGlvbik6IGFueSB7XG4gICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCB8fCBvcHRpb24uaG92ZXJlZCkge1xuICAgICAgY29uc3Qgb3B0aW9uU3R5bGU6IGFueSA9IHt9O1xuICAgICAgb3B0aW9uU3R5bGVbJ2hlaWdodC5weCddID0gdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0Q29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvblN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2NvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodFRleHRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25TdHlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9ICF0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RBbGxTdGF0ZSgpIHtcbiAgICBjb25zdCBhcmVBbGxTZWxlY3RlZCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZFxuICAgICAgLmZpbHRlcigob3B0aW9uOiBPcHRpb24pID0+ICFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAuZXZlcnkoKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcblxuICAgIGFyZUFsbFNlbGVjdGVkID8gKHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlKSA6ICh0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2UpO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXJJbnB1dCgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBvbkFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25Eb25lLmVtaXQoKTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uU3RhcnQoKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGFydC5lbWl0KCk7XG4gIH1cblxuICBtb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpIHtcbiAgICBsZXQgbGlzdEhlaWdodDogbnVtYmVyO1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGlzdEhlaWdodCA9XG4gICAgICB0aGlzLm11bHRpcGxlICYmIHRoaXMuZW5hYmxlU2VsZWN0QWxsXG4gICAgICAgID8gbGlzdC5vZmZzZXRIZWlnaHQgLSB0aGlzLm9wdGlvbkhlaWdodFxuICAgICAgICA6IGxpc3Qub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5vcHRpb25MaXN0LmdldEhpZ2hsaWdodGVkSW5kZXgoKTtcblxuICAgIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgaXRlbSA9IGxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5baXRlbUluZGV4XTtcbiAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBpdGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgY29uc3QgaXRlbVRvcCA9IGl0ZW1JbmRleCAqIGl0ZW1IZWlnaHQ7XG4gICAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW1IZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHZpZXdUb3AgPSBsaXN0LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgaWYgKGl0ZW1Cb3R0b20gPiB2aWV3Qm90dG9tKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbUJvdHRvbSAtIGxpc3RIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1Ub3AgPCB2aWV3VG9wKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbVRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU9wdGlvbnNXaGVlbChlOiBhbnkpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgYXRUb3AgPSBkaXYuc2Nyb2xsVG9wID09PSAwO1xuICAgIGNvbnN0IGF0Qm90dG9tID0gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPT09IGRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICBpZiAoYXRUb3AgJiYgZS5kZWx0YVkgPCAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChhdEJvdHRvbSAmJiBlLmRlbHRhWSA+IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==