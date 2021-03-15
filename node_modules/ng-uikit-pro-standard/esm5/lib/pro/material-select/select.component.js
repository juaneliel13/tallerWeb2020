/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, forwardRef, ElementRef, Renderer2, Inject, PLATFORM_ID, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { OptionList } from './option-list';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, SPACE, TAB, UP_ARROW, } from '../../free/utils/keyboard-navigation';
/** @type {?} */
export var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return SelectComponent; })),
    multi: true,
};
var SelectComponent = /** @class */ (function () {
    function SelectComponent(el, renderer, document, platformId, cdRef) {
        this.el = el;
        this.renderer = renderer;
        this.document = document;
        this.cdRef = cdRef;
        this.customClass = '';
        this.allowClear = false;
        this.disabled = false;
        this.highlightFirst = true;
        this.multiple = false;
        this.noFilter = 0;
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        this.filterEnabled = false;
        this.filterAutocomplete = true;
        this.optionHeight = 37;
        this.enableSelectAll = true;
        this.selectAllLabel = 'Select all';
        this.outline = false;
        this._required = false;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.noOptionsFound = new EventEmitter();
        this.changed = new EventEmitter();
        this._value = [];
        this.visibleOptionsDefault = 4;
        // Selection state variables.
        this.hasSelected = false;
        // View state variables.
        this.canOpenOnFocus = true;
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.labelActive = false;
        this.labelRefActive = false;
        this.dropdownAnimationDone = false;
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.filterHeight = 0;
        this.OUTLINE_DROPDOWN_BOTTOM_OFFSET = 5;
        this.OUTLINE_DROPDOWN_TOP_OFFSET = -20;
        this.itemsBefore = [];
        this._focused = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
        this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(SelectComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "compareWith", {
        get: /**
         * @return {?}
         */
        function () {
            return this._compareWith;
        },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (typeof fn !== 'function') {
                throw Error('compareWith must be a function');
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "focused", {
        get: /**
         * @return {?}
         */
        function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.placeholderView = this.placeholder;
        this.updateFilterHeight();
        this.updateDropdownHeight();
        if (this.label) {
            this.updateLabelState();
        }
        this.labelRef = this._getLabelRef();
        this.prefixRef = this._getPrefixRef();
        if (this.labelRef) {
            this.updateLabelRefState();
        }
        if (this.highlightFirst) {
            this.optionList.highlightFirst = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype._getLabelRef = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectParentEl = this.el.nativeElement.parentNode;
        /** @type {?} */
        var labelRef = selectParentEl.querySelector('label');
        return labelRef;
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype._getPrefixRef = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectParentEl = this.el.nativeElement.parentNode;
        /** @type {?} */
        var prefixRef = selectParentEl.querySelector('.prefix');
        return prefixRef;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterHeight = /**
     * @return {?}
     */
    function () {
        this.filterEnabled ? (this.filterHeight = 50) : (this.filterHeight = 0);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateDropdownHeight = /**
     * @return {?}
     */
    function () {
        if (this.multiple && this.enableSelectAll) {
            this.dropdownMaxHeight = this.visibleOptions
                ? this.optionHeight * (this.visibleOptions + 1)
                : this.optionHeight * (this.visibleOptionsDefault + 1);
            this.dropdownHeight = this.optionHeight * (this.optionList.options.length + 1);
        }
        else {
            this.dropdownMaxHeight = this.visibleOptions
                ? this.optionHeight * this.visibleOptions
                : this.optionHeight * this.visibleOptionsDefault;
            this.dropdownHeight = this.optionHeight * this.optionList.options.length;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onDropdownAnimationDone = /**
     * @return {?}
     */
    function () {
        this.dropdownAnimationDone = true;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onDropdownAnimationStart = /**
     * @return {?}
     */
    function () {
        this.dropdownAnimationDone = false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateState();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('outline')) {
            if (changes['outline'].currentValue) {
                this.renderer.addClass(this.el.nativeElement, 'mdb-select-outline');
            }
            else {
                this.renderer.removeClass(this.el.nativeElement, 'mdb-select-outline');
            }
        }
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes.options.currentValue);
            this.updateState();
            this.updateDropdownHeight();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            this.changed.emit({
                previousValue: changes.options.previousValue,
                selectionValue: changes.options.currentValue,
            });
        }
        if (changes.hasOwnProperty('noFilter')) {
            /** @type {?} */
            var numOptions = this.optionList.options.length;
            /** @type {?} */
            var minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.updateState();
        }
    };
    /**
     * @param {?} elemnt
     * @return {?}
     */
    SelectComponent.prototype.isChild = /**
     * @param {?} elemnt
     * @return {?}
     */
    function (elemnt) {
        /** @type {?} */
        var node = elemnt.parentNode;
        while (node != null) {
            if (node === this.el.nativeElement) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    // Select container.
    // Select container.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = 
    // Select container.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // prevent from opening on mouse right click
        if (event.which === 2 || event.which === 3) {
            return false;
        }
        if (this.isChild(event.target)) {
            this.selectContainerClicked = true;
            this.openDropdown();
            if (this.label) {
                this.updateLabelState();
            }
            if (this.labelRef) {
                this.updateLabelRefState();
            }
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = /**
     * @return {?}
     */
    function () {
        this._focused = true;
        if (this.label) {
            this.labelActive = true;
        }
        if (this.labelRef) {
            this.renderer.addClass(this.labelRef, 'active');
            this.renderer.addClass(this.labelRef, 'focused');
        }
        if (this.prefixRef) {
            this.renderer.addClass(this.prefixRef, 'focused');
        }
        if (this.canOpenOnFocus) {
            this.openDropdown();
        }
        this.canOpenOnFocus = true;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerBlur = /**
     * @return {?}
     */
    function () {
        this._focused = false;
        this.canOpenOnFocus = true;
        if (this.label) {
            this.updateLabelState();
        }
        if (this.labelRef) {
            this.updateLabelRefState();
            this.renderer.removeClass(this.labelRef, 'focused');
        }
        if (this.prefixRef) {
            this.renderer.removeClass(this.prefixRef, 'focused');
        }
        if (!this.isOpen && !this.disabled) {
            this.onTouched();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSelectContainerKeydown(event);
    };
    // Dropdown container.
    // Dropdown container.
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = 
    // Dropdown container.
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.onDropdownClose = /**
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        this.closeDropdown(focus);
    };
    // Single filter input.
    // Single filter input.
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = 
    // Single filter input.
    /**
     * @return {?}
     */
    function () {
        this.selectContainerClicked = true;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterInput = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        /** @type {?} */
        var hasShown = this.optionList.filter(term);
        if (this.multiple && this.enableSelectAll) {
            this.dropdownHeight = (this.optionList.filtered.length + 1) * this.optionHeight;
        }
        else {
            this.dropdownHeight = this.optionList.filtered.length * this.optionHeight;
        }
        if (!hasShown) {
            this.noOptionsFound.emit(term);
            this.dropdownHeight = this.optionHeight;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleSingleFilterKeydown(event);
    };
    // Multiple filter input.
    // Multiple filter input.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterInput = 
    // Multiple filter input.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        /** @type {?} */
        var term = event.target.value;
        /** @type {?} */
        var hasShown = this.optionList.filter(term);
        if (!hasShown) {
            this.noOptionsFound.emit(term);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    // Single clear select.
    // Single clear select.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = 
    // Single clear select.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.clearClicked = true;
        this.clearSelection();
        this.placeholderView = this.placeholder;
        this.onTouched();
        if (this.label) {
            this.updateLabelState();
        }
        if (this.labelRef) {
            this.updateLabelRefState();
        }
    };
    // Multiple deselect option.
    // Multiple deselect option.
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = 
    // Multiple deselect option.
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    /**
     * API. *
     * @return {?}
     */
    SelectComponent.prototype.open = /**
     * API. *
     * @return {?}
     */
    function () {
        var _this = this;
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this.openDropdown();
        }));
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (!Array.isArray(v)) {
                v = [v];
            }
            this._setSelection(v);
            this._value = v;
            this.updateState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype._setSelection = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.multiple && value) {
            this.clearSelection();
            value.forEach((/**
             * @param {?} selectionValue
             * @return {?}
             */
            function (selectionValue) {
                _this._selectByValue(selectionValue);
            }));
        }
        else {
            this._selectByValue(value[0]);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype._selectByValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var matchingOption = this.optionList.options.find((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.value !== null && _this._compareWith(option.value, value);
        }));
        if (matchingOption) {
            this.optionList.select(matchingOption);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.optionList.getOptionsByValue(value).forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            _this.selectOption(option);
        }));
    };
    /** ControlValueAccessor interface methods. **/
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.hasSelected = true;
        if (!value && value !== 0) {
            this.clearSelection();
            this.hasSelected = false;
        }
        if (this.label) {
            this.updateLabelState();
        }
        if (this.labelRef) {
            this.updateLabelRefState();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = /**
     * @return {?}
     */
    function () {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateState = /**
     * @return {?}
     */
    function () {
        this.placeholderView = this.placeholder;
        this.updateFilterWidth();
        this.cdRef.markForCheck();
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @param {?} options
     * @return {?}
     */
    SelectComponent.prototype.updateOptionsList = /**
     * Initialization. *
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.optionList = new OptionList(options, this.multiple);
        this._setSelection(this._value);
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateLabelState = /**
     * @return {?}
     */
    function () {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.labelActive = false;
        }
        else {
            this.labelActive = true;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateLabelRefState = /**
     * @return {?}
     */
    function () {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.renderer.removeClass(this.labelRef, 'active');
        }
        else {
            this.renderer.addClass(this.labelRef, 'active');
        }
    };
    /** Dropdown. **/
    /**
     * Dropdown. *
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = /**
     * Dropdown. *
     * @return {?}
     */
    function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // we should not set higher z-index value here
        // because dropdown added with appendToBody will be overlaped by select input
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
        if (!this.isOpen) {
            this.isOpen = true;
            if (this.appendToBody) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this._appendDropdown();
                }), 0);
            }
            this.updateWidth();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            ['click', 'touchstart'].forEach((/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                _this.documentClickFun = _this.renderer.listen('document', ev, (/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    if (!_this.isChild(event.target) &&
                        _this.isOpen &&
                        _this.dropdownAnimationDone &&
                        event.target !== _this.el.nativeElement) {
                        _this.closeDropdown();
                        _this.clearFilterInput();
                        if (_this.label) {
                            _this.updateLabelState();
                        }
                        if (_this.labelRef) {
                            _this.updateLabelRefState();
                        }
                    }
                }));
            }));
            this.opened.emit(this);
        }
        this.cdRef.markForCheck();
    };
    /**
     * @param {?=} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = /**
     * @param {?=} focus
     * @return {?}
     */
    function (focus) {
        if (focus === void 0) { focus = false; }
        if (this.appendToBody && this.isOpen) {
            this.renderer.removeChild('body', this.dropdown._elementRef.nativeElement);
        }
        /** @type {?} */
        var container = this.el.nativeElement.lastElementChild.classList;
        this.renderer.removeStyle(this.el.nativeElement, 'z-index');
        container.remove('fadeInSelect');
        if (this.isOpen) {
            this.clearFilterInput();
            this.isOpen = false;
            if (focus) {
                this.focus();
            }
            this.closed.emit(this);
        }
        this.documentClickFun();
        this.onTouched();
        this.cdRef.markForCheck();
    };
    /** Select. **/
    /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!option.disabled) {
            this.optionList.select(option);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
            this.hasSelected = true;
            if (this.label) {
                this.updateLabelState();
            }
            if (this.labelRef) {
                this.updateLabelRefState();
            }
        }
        if (!this.multiple && !option.disabled) {
            this.closeDropdown();
        }
        this.cdRef.markForCheck();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.placeholderView = this.placeholder;
            if (this.optionList.selection.length === 0) {
                this.hasSelected = false;
                if (this.label) {
                    this.updateLabelState();
                }
                if (this.labelRef) {
                    this.updateLabelRefState();
                }
            }
            this.deselected.emit(option.wrappedOption);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            this.hasSelected = false;
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return option.wrappedOption;
                })));
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var option = this.optionList.highlightedOption;
        if (this.multiple && option !== null) {
            this.toggleSelectOption(option);
        }
        if (!this.multiple && option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
            this.canOpenOnFocus = false;
            this.selectionSpan.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /**
     * @param {?} isSelected
     * @return {?}
     */
    SelectComponent.prototype.onSelectAll = /**
     * @param {?} isSelected
     * @return {?}
     */
    function (isSelected) {
        var _this = this;
        if (isSelected) {
            this.optionList.filtered
                .filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return !option.disabled; }))
                .forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                _this.selectOption(option);
            }));
        }
        else {
            this.optionList.filtered
                .filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return !option.disabled; }))
                .forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                _this.deselectOption(option);
            }));
        }
    };
    /** Filter. **/
    /**
     * Filter. *
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = /**
     * Filter. *
     * @return {?}
     */
    function () {
        this.dropdown.clearFilterInput();
        this.updateDropdownHeight();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.keyCode;
        if (this.isOpen) {
            if (key === ESCAPE || (key === UP_ARROW && event.altKey)) {
                event.preventDefault();
                this.closeDropdown();
                this.canOpenOnFocus = false;
                this.selectionSpan.nativeElement.focus();
                if (this.label) {
                    this.updateLabelState();
                }
                if (this.labelRef) {
                    this.updateLabelRefState();
                }
            }
            else if (key === TAB) {
                // Restore focus from search input to select input. Ensures that the next
                // or previous element will be focused corretly on tab or shift-tab
                this.selectionSpan.nativeElement.focus();
                this.closeDropdown();
            }
            else if (key === ENTER) {
                this.selectHighlightedOption();
                if (this.multiple && this.enableSelectAll) {
                    this.dropdown.updateSelectAllState();
                }
            }
            else if (key === UP_ARROW) {
                event.preventDefault();
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
            }
            else if (key === DOWN_ARROW) {
                event.preventDefault();
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
            }
        }
        else {
            if (key === ENTER || key === SPACE || (key === DOWN_ARROW && event.altKey)) {
                event.preventDefault();
                this.openDropdown();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === BACKSPACE) {
            if (this.hasSelected && this.filterEnabled && this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.which;
        if (key === ESCAPE || key === TAB || key === UP_ARROW || key === DOWN_ARROW || key === ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype.focus = /**
     * View. *
     * @return {?}
     */
    function () {
        this.hasFocus = true;
        try {
            if (this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            else {
                this.selectionSpan.nativeElement.focus();
            }
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        if (!this.multiple) {
            this.width = this.singleContainer.nativeElement.offsetWidth;
        }
        else {
            this.width = this.multipleContainer.nativeElement.offsetWidth;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var docEl = document.documentElement;
            /** @type {?} */
            var elPosition = 0;
            if (_this.isBrowser) {
                elPosition =
                    _this.el.nativeElement.getBoundingClientRect().bottom +
                        _this.document.documentElement.scrollTop;
            }
            /** @type {?} */
            var selectSpan = _this.selectionSpan.nativeElement;
            /** @type {?} */
            var originHeight = _this.outline
                ? _this.OUTLINE_DROPDOWN_TOP_OFFSET
                : selectSpan.offsetHeight;
            _this.left = selectSpan.offsetLeft;
            /** @type {?} */
            var bottom = docEl.scrollTop + docEl.clientHeight;
            /** @type {?} */
            var dropdownHeight = _this.dropdownMaxHeight > _this.dropdownHeight ? _this.dropdownHeight : _this.dropdownMaxHeight;
            _this.updateDropdownHeight();
            if (elPosition + dropdownHeight >= bottom) {
                _this.top = originHeight - dropdownHeight - _this.filterHeight;
            }
            else {
                _this.top = _this.outline ? selectSpan.offsetHeight + _this.OUTLINE_DROPDOWN_BOTTOM_OFFSET : 0;
            }
            _this.cdRef.markForCheck();
        }), 0);
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype._updateAppendedPosition = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var selectRect = this.el.nativeElement.getBoundingClientRect();
            /** @type {?} */
            var scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
            /** @type {?} */
            var offsetTop = selectRect.top + scrollTop;
            /** @type {?} */
            var height = selectRect.height;
            /** @type {?} */
            var dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
            this.left = selectRect.left;
            if (offsetTop + dropdownHeight + this.filterHeight >
                scrollTop + this.document.documentElement.clientHeight) {
                if (this.outline) {
                    this.top =
                        offsetTop - dropdownHeight + this.OUTLINE_DROPDOWN_TOP_OFFSET - this.filterHeight;
                }
                else {
                    this.top = offsetTop - dropdownHeight + height - this.filterHeight;
                }
            }
            else {
                this.top = this.outline
                    ? offsetTop + height + this.OUTLINE_DROPDOWN_BOTTOM_OFFSET
                    : offsetTop;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    SelectComponent.prototype._appendDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var body = this.document.querySelector('body');
            /** @type {?} */
            var dropdown = this.dropdown._elementRef.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
            }
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = /**
     * @return {?}
     */
    function () {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth =
                value.length === 0 ? 1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-select',
                    template: "<label *ngIf=\"label !== ''\" [ngClass]=\"{ active: labelActive, focused: focused }\">\n  {{ label }}\n</label>\n<div\n  #selection\n  [attr.tabindex]=\"disabled ? null : 0\"\n  [ngClass]=\"{ open: isOpen, focus: hasFocus, below: isBelow, disabled: disabled }\"\n  [tabindex]=\"tabindex\"\n  (mousedown)=\"onSelectContainerClick($event)\"\n  (focus)=\"onSelectContainerFocus()\"\n  (blur)=\"onSelectContainerBlur()\"\n  (keydown)=\"onSelectContainerKeydown($event)\"\n  (window:resize)=\"onWindowResize()\"\n  [attr.role]=\"filterEnabled ? 'combobox' : 'listbox'\"\n  [attr.aria-disabled]=\"disabled\"\n  [attr.multiselectable]=\"multiple\"\n  [attr.aria-expanded]=\"isOpen\"\n  [attr.aria-required]=\"required\"\n  [attr.aria-haspopup]=\"true\"\n>\n  <div\n    #singleContainer\n    class=\"single form-control\"\n    *ngIf=\"!multiple\"\n    [ngClass]=\"{ focused: focused }\"\n  >\n    <div class=\"value\" *ngIf=\"optionList.hasSelected()\">\n      {{ optionList.selection[0].label }}\n    </div>\n    <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\">\n      {{ placeholderView }}\n    </div>\n    <div\n      #clear\n      class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\"\n    >\n      &#x2715;\n    </div>\n    <span class=\"mdb-select-toggle\" [ngClass]=\"{ focused: focused }\"></span>\n  </div>\n\n  <div\n    #multipleContainer\n    class=\"multiple form-control\"\n    *ngIf=\"multiple\"\n    [ngClass]=\"{ focused: focused }\"\n  >\n    <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\">\n      {{ placeholderView }}\n    </div>\n\n    <div [ngStyle]=\"allowClear && { 'width.%': 90 }\" class=\"option\">\n      <span *ngFor=\"let option of optionList.selection\">\n        {{ option.label }}<span class=\"deselect-option\">,</span>\n      </span>\n    </div>\n\n    <div\n      #clear\n      class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\"\n    >\n      &#x2715;\n    </div>\n\n    <span class=\"mdb-select-toggle\" [ngClass]=\"{ focused: focused }\"></span>\n  </div>\n</div>\n<mdb-select-dropdown\n  *ngIf=\"isOpen\"\n  #dropdown\n  [enableSelectAll]=\"enableSelectAll\"\n  [multiple]=\"multiple\"\n  [dropdownHeight]=\"dropdownHeight\"\n  [dropdownMaxHeight]=\"dropdownMaxHeight\"\n  [optionHeight]=\"optionHeight\"\n  [optionList]=\"optionList\"\n  [notFoundMsg]=\"notFoundMsg\"\n  [customClass]=\"customClass\"\n  [highlightColor]=\"highlightColor\"\n  [highlightTextColor]=\"highlightTextColor\"\n  [filterEnabled]=\"filterEnabled\"\n  [filterAutocomplete]=\"filterAutocomplete\"\n  [placeholder]=\"filterPlaceholder\"\n  [selectAllLabel]=\"selectAllLabel\"\n  [outline]=\"outline\"\n  [top]=\"top\"\n  [left]=\"left\"\n  [width]=\"width\"\n  (close)=\"onDropdownClose($event)\"\n  (optionClicked)=\"onDropdownOptionClicked($event)\"\n  (singleFilterClick)=\"onSingleFilterClick()\"\n  (singleFilterInput)=\"onSingleFilterInput($event)\"\n  (singleFilterKeydown)=\"onSingleFilterKeydown($event)\"\n  (selectAll)=\"onSelectAll($event)\"\n  (animationDone)=\"onDropdownAnimationDone()\"\n  (animationStart)=\"onDropdownAnimationStart()\"\n>\n  <ng-content></ng-content>\n</mdb-select-dropdown>\n",
                    providers: [SELECT_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".select-wrapper .select-dropdown{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ced4da;outline:0;height:38px;line-height:2.9rem;width:100%;font-size:1rem;margin:0 0 .94rem;padding:0;display:block;text-overflow:ellipsis;z-index:2}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,.3);border-bottom-color:rgba(0,0,0,.2);cursor:default}.select-wrapper input.select-dropdown .selected,.select-wrapper input.select-dropdown li:focus{background-color:rgba(0,0,0,.15)}.select-wrapper input.select-dropdown li.active{background:0 0}.select-wrapper input.select-dropdown .fab,.select-wrapper input.select-dropdown .far,.select-wrapper input.select-dropdown .fas{color:inherit}.select-wrapper input.active{box-shadow:0 1px 0 0 #4285f4;border-bottom:1px solid #4285f4}.select-wrapper .search-wrap{padding:1rem 0 0;display:block;margin:0 .7rem}.select-wrapper .search-wrap .md-form{margin-top:0;margin-bottom:1rem}.select-wrapper .search-wrap .md-form input{padding-bottom:.4rem;margin-bottom:0}.select-wrapper span.caret{color:initial;position:absolute;right:0;top:.8rem;font-size:.63rem}.select-wrapper span.caret.disabled{color:rgba(0,0,0,.3)}.select-wrapper+label{position:absolute;top:2.125rem;transition:.2s ease-out;color:#757575;font-weight:300}.select-wrapper+label.active{-webkit-transform:translateY(-14px);transform:translateY(-14px);font-size:.8rem;top:1.5rem;left:15px}.select-wrapper+label.active-check{color:#4285f4}.select-wrapper+label.mdb-main-label{z-index:1}.select-wrapper i,.select-wrapper+label.disabled{color:rgba(0,0,0,.3)}.select-wrapper ul{list-style-type:none;padding-left:0}.select-wrapper.md-form>ul li label{top:0;color:#4285f4;font-size:.9rem;-webkit-transform:none;transform:none}.select-wrapper.md-form>ul li.select-toggle-all label{padding-left:38px}.select-wrapper.md-form.colorful-select>ul li.select-toggle-all:hover label{color:#fff}.select-wrapper.md-form.md-outline span.caret{padding-right:.75rem;padding-left:.75rem;color:#495057!important}.select-wrapper.md-form.md-outline span.caret.active{color:#4285f4!important}.select-wrapper.md-form.md-outline .dropdown-content{top:2.7rem!important}.select-wrapper.md-form.md-outline input.select-dropdown{padding:.375rem .75rem;color:#495057}.select-wrapper.md-form.md-outline input.select-dropdown:focus{border-color:#4285f4;box-shadow:inset 0 0 0 1px #4285f4}.select-wrapper.md-form.md-outline+label{position:absolute;-webkit-transform:translateY(40%);transform:translateY(40%);left:23px;color:#757575;background:#fff;font-size:13px;font-weight:500;padding-right:5px;padding-left:5px;top:.5em!important;z-index:2!important}.select-wrapper.md-form.md-outline+label.active{color:#4285f4}select{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}select.browser-default{display:block!important}select:disabled{color:rgba(0,0,0,.3)}.select-dropdown [type=checkbox]:disabled:not(:checked)+label:before{margin-left:0;margin-top:3px}.select-dropdown ul{list-style-type:none;padding:0}.select-dropdown li img{height:30px;width:30px;margin:.3rem .75rem;float:right}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,.3);background-color:transparent!important;cursor:context-menu}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,.4)}.dropdown-content{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);background-color:#fff;margin:0;display:none;min-width:6.25rem;max-height:40.625rem;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width,height}.dropdown-content li{clear:both;color:#000;cursor:pointer;line-height:1.3rem;width:100%;text-align:left;text-transform:none}.dropdown-content li.active,.dropdown-content li:hover{background-color:#eee}.dropdown-content li>a,.dropdown-content li>span{color:#4285f4;display:block;padding:.5rem}.dropdown-content li>a>i{height:inherit;line-height:inherit}.colorful-select .dropdown-content{padding:.5rem}.colorful-select .dropdown-content li.active span{color:#fff!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.colorful-select .dropdown-content li.active span [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent}.colorful-select .dropdown-content li a:hover,.colorful-select .dropdown-content li span:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);color:#fff!important;transition:.15s;border-radius:.125rem}.colorful-select .dropdown-content li a:hover [type=checkbox]+label:before,.colorful-select .dropdown-content li span:hover [type=checkbox]+label:before{border-color:#fff}.colorful-select .dropdown-content li a:hover [type=checkbox]:checked+label:before,.colorful-select .dropdown-content li span:hover [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent}.colorful-select .dropdown-content li.disabled.active span,.colorful-select .dropdown-content li.optgroup.active span,.colorful-select .dropdown-content li:disabled.active span{box-shadow:none;color:rgba(0,0,0,.3)!important;border-bottom-color:rgba(0,0,0,.3);cursor:default}.colorful-select .dropdown-content li.disabled a:hover,.colorful-select .dropdown-content li.disabled span:hover,.colorful-select .dropdown-content li.optgroup a:hover,.colorful-select .dropdown-content li.optgroup span:hover,.colorful-select .dropdown-content li:disabled a:hover,.colorful-select .dropdown-content li:disabled span:hover{box-shadow:none;color:rgba(0,0,0,.3)!important;border-bottom-color:rgba(0,0,0,.3);cursor:default;background-color:#fff!important}.colorful-select .dropdown-content li.disabled label,.colorful-select .dropdown-content li.optgroup label,.colorful-select .dropdown-content li:disabled label{cursor:default}.dropdown-primary .dropdown-content li a,.dropdown-primary .dropdown-content li span:hover,.dropdown-primary .dropdown-content li.active{background-color:#4285f4!important}.dropdown-primary .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-primary .search-wrap input:focus{border-bottom:1px solid #4285f4;box-shadow:0 1px 0 0 #4285f4}.dropdown-danger .dropdown-content li a,.dropdown-danger .dropdown-content li span:hover,.dropdown-danger .dropdown-content li.active{background-color:#c00!important}.dropdown-danger .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-danger .search-wrap input:focus{border-bottom:1px solid #c00;box-shadow:0 1px 0 0 #c00}.dropdown-default .dropdown-content li a,.dropdown-default .dropdown-content li span:hover,.dropdown-default .dropdown-content li.active{background-color:#2bbbad!important}.dropdown-default .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-default .search-wrap input:focus{border-bottom:1px solid #2bbbad;box-shadow:0 1px 0 0 #2bbbad}.dropdown-secondary .dropdown-content li a,.dropdown-secondary .dropdown-content li span:hover,.dropdown-secondary .dropdown-content li.active{background-color:#a6c!important}.dropdown-secondary .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-secondary .search-wrap input:focus{border-bottom:1px solid #a6c;box-shadow:0 1px 0 0 #a6c}.dropdown-success .dropdown-content li a,.dropdown-success .dropdown-content li span:hover,.dropdown-success .dropdown-content li.active{background-color:#00c851!important}.dropdown-success .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-success .search-wrap input:focus{border-bottom:1px solid #00c851;box-shadow:0 1px 0 0 #00c851}.dropdown-info .dropdown-content li a,.dropdown-info .dropdown-content li span:hover,.dropdown-info .dropdown-content li.active{background-color:#33b5e5!important}.dropdown-info .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-info .search-wrap input:focus{border-bottom:1px solid #33b5e5;box-shadow:0 1px 0 0 #33b5e5}.dropdown-warning .dropdown-content li a,.dropdown-warning .dropdown-content li span:hover,.dropdown-warning .dropdown-content li.active{background-color:#fb3!important}.dropdown-warning .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-warning .search-wrap input:focus{border-bottom:1px solid #fb3;box-shadow:0 1px 0 0 #fb3}.dropdown-dark .dropdown-content li a,.dropdown-dark .dropdown-content li span:hover,.dropdown-dark .dropdown-content li.active{background-color:#2e2e2e!important}.dropdown-dark .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-dark .search-wrap input:focus{border-bottom:1px solid #2e2e2e;box-shadow:0 1px 0 0 #2e2e2e}.dropdown-ins .dropdown-content li a,.dropdown-ins .dropdown-content li span:hover,.dropdown-ins .dropdown-content li.active{background-color:#2e5e86!important}.dropdown-ins .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-ins .search-wrap input:focus{border-bottom:1px solid #2e5e86;box-shadow:0 1px 0 0 #2e5e86}.md-dropdown li.disabled.active{background-color:transparent!important}mdb-select{display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}mdb-select *{box-sizing:border-box;font-family:Roboto,sans-serif;outline:0}mdb-select.mdb-select-outline{transition:.2s}mdb-select.mdb-select-outline>label{padding-left:10px;top:8px;left:4px}mdb-select.mdb-select-outline:active label,mdb-select.mdb-select-outline:focus label,mdb-select.mdb-select-outline:focus-within label{color:#4285f4}mdb-select.mdb-select-outline:active .below>.form-control,mdb-select.mdb-select-outline:focus .below>.form-control,mdb-select.mdb-select-outline:focus-within .below>.form-control{border-color:#4285f4;box-shadow:inset 0 0 0 1px #4285f4}mdb-select.mdb-select-outline .multiple,mdb-select.mdb-select-outline .single{border:1px solid #dadce0;border-radius:4px}mdb-select.mdb-select-outline .multiple .placeholder,mdb-select.mdb-select-outline .multiple .value,mdb-select.mdb-select-outline .single .placeholder,mdb-select.mdb-select-outline .single .value{padding-left:13px}mdb-select.mdb-select-outline>label.active{-webkit-transform:translateY(-22px);transform:translateY(-22px);background:#fff;font-weight:500;padding:0 5px;font-size:.8rem;z-index:1;top:12px;left:9px}mdb-select>div{border:transparent;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}mdb-select>div.disabled{color:#aaa!important;cursor:default;pointer-events:none;background-color:transparent}mdb-select>div.disabled .placeholder,mdb-select>div.disabled .value,mdb-select>div.disabled span{color:#aaa!important}mdb-select>div.disabled>div.single>div.clear,mdb-select>div.disabled>div.single>div.placeholder,mdb-select>div.disabled>div.single>div.toggle{color:rgba(0,0,0,.3)}mdb-select>div>div.single{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ced4da;outline:0;line-height:2rem;width:100%;font-size:1rem;margin:0;height:24px;box-sizing:content-box;padding:.6rem 0 .4rem;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start}mdb-select>div>div.single.focused{box-shadow:0 1px 0 0 #4285f4;border-bottom:1px solid #4285f4}mdb-select>div>div.single>div.value{flex:1;line-height:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-right:1.2rem!important;color:#292b2c;padding:0 0 5px}mdb-select>div>div.single>div.placeholder{flex:1;line-height:24px;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:#6c757d;padding:0 0 5px}mdb-select>div>div.single>div.clear,mdb-select>div>div.single>div.toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:20px;top:55%;margin-top:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-select>div>div.single>div.toggle:before{content:'\\25B2'}mdb-select>div>div.single>div.clear:hover,mdb-select>div>div.single>div.toggle:hover{background-color:#ececec}mdb-select>div>div.single>div.clear,mdb-select>div>div.single>div.toggle:hover{background-color:transparent}mdb-select>div>div.single>div.clear{font-size:18px}mdb-select>div>div.single>div.toggle{font-size:14px}mdb-select>div>div.multiple{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ced4da;outline:0;line-height:2rem;width:100%;font-size:1rem;margin:0;height:24px;box-sizing:content-box;padding:.6rem 0 .4rem;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start}mdb-select>div>div.multiple.focused{box-shadow:0 1px 0 0 #4285f4;border-bottom:1px solid #4285f4}mdb-select>div>div.multiple .placeholder{flex:1;line-height:24px;max-width:95%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:#6c757d;padding:0 0 5px}mdb-select>div>div.multiple>div.clear,mdb-select>div>div.multiple>div.toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:20px;top:60%;margin-top:-2px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-select>div>div.multiple>div.clear:hover,mdb-select>div>div.multiple>div.toggle:hover{background-color:#ececec}mdb-select>div>div.multiple>div.clear,mdb-select>div>div.multiple>div.toggle:hover{background-color:transparent}mdb-select>div>div.multiple>div.clear{font-size:18px}mdb-select>div>div.multiple>div.toggle{font-size:14px}mdb-select>div>div.multiple>div.option{overflow:hidden;min-width:0;width:80%;text-overflow:ellipsis;white-space:nowrap;cursor:default;line-height:24px}mdb-select>div>div.multiple>div.option span:last-child .deselect-option{display:none}mdb-select>div>div.multiple>div.option span.deselect-option{cursor:pointer;height:20px;line-height:24px;background-color:transparent;border:0;border-radius:0;color:#292b2c;font-size:1rem;margin:0;padding:0}mdb-select>div>div.multiple>div.option span.deselect-option:hover{color:#555}mdb-select>div>div.multiple input{background-color:transparent;border:none;height:30px;line-height:2rem;padding:0}mdb-select>div>div.multiple input:focus{outline:0}mdb-select>label{color:#757575;font-size:1rem;position:absolute;top:11px;left:0;transition:.2s ease-out;cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%}mdb-select>label.active{font-size:.8rem;-webkit-transform:translateY(-22px);transform:translateY(-22px);max-width:100%}mdb-select>label.focused{color:#4285f4}.md-form .mdb-select-outline .form-control{margin-bottom:0}.md-form mdb-select.mdb-select-outline+label{top:8px;left:4px;padding-left:10px}.md-form mdb-select.mdb-select-outline+label.active{top:12px;left:9px;padding-left:5px;padding-right:5px;background-color:#fff;z-index:1000}mdb-select-dropdown{box-sizing:border-box;font-family:Sans-Serif;color:#4285f4;font-size:19.2px}mdb-select-dropdown *{box-sizing:border-box;font-family:Sans-Serif}mdb-select-dropdown>div{background-color:#fff;outline:transparent;border:0;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-top:none;box-sizing:border-box;position:absolute;z-index:1}mdb-select-dropdown>div .filter{margin-bottom:9.6px!important;margin-top:9.6px!important;height:38px}mdb-select-dropdown>div .options{position:relative;overflow-y:auto}mdb-select-dropdown>div .options ul{list-style:none;margin:0;padding:0}mdb-select-dropdown>div .options ul li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}mdb-select-dropdown>div .options ul li .filtrable{flex-direction:row;align-items:center}mdb-select-dropdown>div .options ul .selected{background-color:#eee}mdb-select-dropdown>div .options ul .highlighted{background-color:#eee;color:#4285f4}mdb-select-dropdown>div .options ul .disabled{background-color:#fff;color:#9e9e9e;cursor:default;pointer-events:none}mdb-select-dropdown>div .options::-webkit-scrollbar{width:4px;height:4px}mdb-select-dropdown>div .options::-webkit-scrollbar-button:end:increment,mdb-select-dropdown>div .options::-webkit-scrollbar-button:start:decrement{display:block;height:0;background-color:transparent}mdb-select-dropdown>div .options::-webkit-scrollbar-track-piece{background-color:transparent;border-radius:0 0 4px 4px}mdb-select-dropdown>div .options::-webkit-scrollbar-thumb:vertical{height:50px;background-color:#999;border-radius:4px}mdb-select-dropdown .dropdown-content{background-color:#fff;margin:0;width:100%;display:block;min-width:100px;max-height:unset;overflow-y:hidden;opacity:1;position:absolute;z-index:1020;will-change:width,height}mdb-select-dropdown .dropdown-content li>a,mdb-select-dropdown .dropdown-content li>span{color:#4285f4;padding:0 .5rem}mdb-select-dropdown .dropdown-content li.disabled,mdb-select-dropdown .dropdown-content li.disabled>span{color:rgba(0,0,0,.3);background-color:transparent!important}mdb-select-dropdown .dropdown-content li.optgroup{color:rgba(0,0,0,.3);background-color:transparent!important;border-top:1px solid #eee}mdb-select-dropdown .dropdown-content li.optgroup:first-child{border-top:0}mdb-select-dropdown .dropdown-content li.optgroup>span{color:rgba(0,0,0,.4)!important}.dropdown-content li>a,.dropdown-content li>span{font-size:.9rem}.select-dropdown li{overflow:hidden;text-overflow:ellipsis}.colorful-select .multiple-select-dropdown li.active span.filtrable,.colorful-select .multiple-select-dropdown li.selected span.filtrable{color:#fff}.colorful-select .multiple-select-dropdown li.active [type=checkbox]:checked+label:before,.colorful-select .multiple-select-dropdown li.selected [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent!important}.dropdown-primary.colorful-select .dropdown-content li.active,.dropdown-primary.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-primary.colorful-select .dropdown-content li.active span,.dropdown-primary.colorful-select .dropdown-content li.selected span{background-color:#4285f4;color:#fff}.dropdown-danger.colorful-select .dropdown-content li.active,.dropdown-danger.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-danger.colorful-select .dropdown-content li.active span,.dropdown-danger.colorful-select .dropdown-content li.selected span{background-color:#c00;color:#fff}.dropdown-default.colorful-select .dropdown-content li.active,.dropdown-default.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-default.colorful-select .dropdown-content li.active span,.dropdown-default.colorful-select .dropdown-content li.selected span{background-color:#2bbbad;color:#fff}.dropdown-secondary.colorful-select .dropdown-content li.active,.dropdown-secondary.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-secondary.colorful-select .dropdown-content li.active span,.dropdown-secondary.colorful-select .dropdown-content li.selected span{background-color:#a6c;color:#fff}.dropdown-success.colorful-select .dropdown-content li.active,.dropdown-success.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-success.colorful-select .dropdown-content li.active span,.dropdown-success.colorful-select .dropdown-content li.selected span{background-color:#00c851;color:#fff}.dropdown-info.colorful-select .dropdown-content li.active,.dropdown-info.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-info.colorful-select .dropdown-content li.active span,.dropdown-info.colorful-select .dropdown-content li.selected span{background-color:#33b5e5;color:#fff}.dropdown-warning.colorful-select .dropdown-content li.active,.dropdown-warning.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-warning.colorful-select .dropdown-content li.active span,.dropdown-warning.colorful-select .dropdown-content li.selected span{background-color:#fb3;color:#fff}.dropdown-ins.colorful-select .dropdown-content li.active,.dropdown-ins.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-ins.colorful-select .dropdown-content li.active span,.dropdown-ins.colorful-select .dropdown-content li.selected span{background-color:#3f729b;color:#fff}.dropdown-dark.colorful-select .dropdown-content li.active,.dropdown-dark.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-dark.colorful-select .dropdown-content li.active span,.dropdown-dark.colorful-select .dropdown-content li.selected span{background-color:#2e2e2e;color:#fff}.multiple-select-dropdown li [type=checkbox]+label{height:10px;top:0!important;margin-top:-2px!important;-webkit-transform:translateY(0);transform:translateY(0);overflow:visible;width:auto}mdb-select .clear{position:absolute;font-size:18px;color:#000;width:30px;margin-top:-2px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.md-form mdb-select .form-control{height:24px;box-sizing:content-box}.md-form .prefix+mdb-select{left:40px}.md-form .prefix.focused{color:#4285f4}.md-form mdb-select label{color:#757575;font-size:1rem;position:absolute;top:12px;left:0;transition:.2s ease-out;-webkit-transform:translateY(0);transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%}.md-form mdb-select label.active{font-size:.8rem;-webkit-transform:translateY(-22px);transform:translateY(-22px);max-width:100%}.md-form mdb-select label.focused{color:#4285f4}.md-form mdb-select+label{color:#757575;font-size:1rem;position:absolute;top:12px;left:0;transition:.2s ease-out;-webkit-transform:translateY(0);transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%}.md-form mdb-select+label.active{font-size:.8rem;-webkit-transform:translateY(-22px);transform:translateY(-22px);max-width:100%}.md-form mdb-select+label.focused{color:#4285f4}mdb-select+label{color:#757575;font-size:1rem;position:absolute;top:12px;left:15px;transition:.2s ease-out;-webkit-transform:translateY(0);transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:90%;z-index:-1}mdb-select+label.active{font-size:.8rem;-webkit-transform:translateY(-22px);transform:translateY(-22px);max-width:95%;z-index:0}mdb-select+label.focused{color:#4285f4}mdb-select .form-control{border-radius:0}mdb-select.validate-success.ng-valid.ng-touched div.multiple,mdb-select.validate-success.ng-valid.ng-touched div.single{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}mdb-select.validate-success.ng-valid.ng-touched label,mdb-select.validate-success.ng-valid.ng-touched+label{color:#00c851!important}.form-submitted mdb-select.validate-error.ng-invalid div.multiple,.form-submitted mdb-select.validate-error.ng-invalid div.single,mdb-select.validate-error.ng-invalid.ng-touched div.multiple,mdb-select.validate-error.ng-invalid.ng-touched div.single{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted mdb-select.validate-error.ng-invalid.ng-touched label .form-submitted mdb-select.validate-error.ng-invalid.ng-touched+label,mdb-select.validate-error.ng-invalid.ng-touched label,mdb-select.validate-error.ng-invalid.ng-touched+label{color:#f44336!important}mdb-select.colorful-select .select-dropdown li.selected,mdb-select.colorful-select .select-dropdown li:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.mdb-select-toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:0;top:calc(50% + 9.4px);margin-top:-.5rem;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:14px}.mdb-select-toggle.focused{color:#4285f4}.mdb-select-toggle:before{content:'\\25BC'}.dropdown-content .custom-select-content:hover{background-color:transparent}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;opacity:0;pointer-events:none}.form-check-input[type=checkbox]+label,label.btn input[type=checkbox]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:1.5625rem;line-height:1.5625rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-check-input[type=checkbox]+label:before,.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]+label:before,label.btn input[type=checkbox]:not(.filled-in)+label:after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #8a8a8a;border-radius:1px;margin-top:3px;transition:.2s}.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]:not(.filled-in)+label:after{border:0;-webkit-transform:scale(0);transform:scale(0)}.form-check-input[type=checkbox]:not(:checked):disabled+label:before,label.btn input[type=checkbox]:not(:checked):disabled+label:before{border:none;background-color:#bdbdbd}.form-check-input[type=checkbox]:checked+label:before,label.btn input[type=checkbox]:checked+label:before{top:-4px;left:-5px;width:12px;height:1.375rem;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #4285f4;border-bottom:2px solid #4285f4;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.form-check-input[type=checkbox]:checked:disabled+label:before,label.btn input[type=checkbox]:checked:disabled+label:before{border-right:2px solid #bdbdbd;border-bottom:2px solid #bdbdbd}.form-check-input[type=checkbox]:indeterminate+label:before,label.btn input[type=checkbox]:indeterminate+label:before{top:-11px;left:-12px;width:10px;height:1.375rem;border-top:none;border-left:none;border-right:2px solid #4285f4;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.form-check-input[type=checkbox]:indeterminate:disabled+label:before,label.btn input[type=checkbox]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,.46);background-color:transparent}.form-check-input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:after{border-radius:.125rem}.form-check-input[type=checkbox].filled-in+label:after,.form-check-input[type=checkbox].filled-in+label:before,label.btn input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:before{content:'';left:0;position:absolute;transition:border .25s,background-color .25s,width .2s .1s,height .2s .1s,top .2s .1s,left .2s .1s;z-index:1}.form-check-input[type=checkbox].filled-in:not(:checked)+label:before,label.btn input[type=checkbox].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.form-check-input[type=checkbox].filled-in:not(:checked)+label:after,label.btn input[type=checkbox].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0;z-index:0}.form-check-input[type=checkbox].filled-in:checked+label:before,label.btn input[type=checkbox].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.form-check-input[type=checkbox].filled-in:checked+label:after,label.btn input[type=checkbox].filled-in:checked+label:after{top:0;width:20px;height:20px;border:2px solid #a6c;background-color:#a6c;z-index:0}.form-check-input[type=checkbox].filled-in.filled-in-danger:checked+label:after,label.btn input[type=checkbox].filled-in.filled-in-danger:checked+label:after{background-color:#f44336;border-color:#f44336}.form-check-input[type=checkbox]:disabled:not(:checked)+label:before,label.btn input[type=checkbox]:disabled:not(:checked)+label:before{background-color:#bdbdbd;border-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:not(:checked)+label:after,label.btn input[type=checkbox]:disabled:not(:checked)+label:after{border-color:#bdbdbd;background-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:checked+label:before,label.btn input[type=checkbox]:disabled:checked+label:before{background-color:transparent}.form-check-input[type=checkbox]:disabled:checked+label:after,label.btn input[type=checkbox]:disabled:checked+label:after{background-color:#bdbdbd;border-color:#bdbdbd}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ChangeDetectorRef }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: Input }],
        customClass: [{ type: Input }],
        allowClear: [{ type: Input }],
        disabled: [{ type: Input }],
        highlightColor: [{ type: Input }],
        highlightTextColor: [{ type: Input }],
        highlightFirst: [{ type: Input }],
        multiple: [{ type: Input }],
        noFilter: [{ type: Input }],
        notFoundMsg: [{ type: Input }],
        placeholder: [{ type: Input }],
        filterPlaceholder: [{ type: Input }],
        label: [{ type: Input }],
        filterEnabled: [{ type: Input }],
        filterAutocomplete: [{ type: Input }],
        visibleOptions: [{ type: Input }],
        optionHeight: [{ type: Input }],
        tabindex: [{ type: Input }],
        enableSelectAll: [{ type: Input }],
        appendToBody: [{ type: Input }],
        selectAllLabel: [{ type: Input }],
        outline: [{ type: Input }],
        required: [{ type: Input }],
        compareWith: [{ type: Input }],
        opened: [{ type: Output }],
        closed: [{ type: Output }],
        selected: [{ type: Output }],
        deselected: [{ type: Output }],
        noOptionsFound: [{ type: Output }],
        changed: [{ type: Output }],
        selectionSpan: [{ type: ViewChild, args: ['selection', { static: true },] }],
        dropdown: [{ type: ViewChild, args: ['dropdown', { static: false },] }],
        filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
        clearButton: [{ type: ViewChild, args: ['clear', { static: false },] }],
        singleContainer: [{ type: ViewChild, args: ['singleContainer', { static: false },] }],
        multipleContainer: [{ type: ViewChild, args: ['multipleContainer', { static: false },] }]
    };
    return SelectComponent;
}());
export { SelectComponent };
if (false) {
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.customClass;
    /** @type {?} */
    SelectComponent.prototype.allowClear;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.highlightColor;
    /** @type {?} */
    SelectComponent.prototype.highlightTextColor;
    /** @type {?} */
    SelectComponent.prototype.highlightFirst;
    /** @type {?} */
    SelectComponent.prototype.multiple;
    /** @type {?} */
    SelectComponent.prototype.noFilter;
    /** @type {?} */
    SelectComponent.prototype.notFoundMsg;
    /** @type {?} */
    SelectComponent.prototype.placeholder;
    /** @type {?} */
    SelectComponent.prototype.filterPlaceholder;
    /** @type {?} */
    SelectComponent.prototype.label;
    /** @type {?} */
    SelectComponent.prototype.filterEnabled;
    /** @type {?} */
    SelectComponent.prototype.filterAutocomplete;
    /** @type {?} */
    SelectComponent.prototype.visibleOptions;
    /** @type {?} */
    SelectComponent.prototype.optionHeight;
    /** @type {?} */
    SelectComponent.prototype.tabindex;
    /** @type {?} */
    SelectComponent.prototype.enableSelectAll;
    /** @type {?} */
    SelectComponent.prototype.appendToBody;
    /** @type {?} */
    SelectComponent.prototype.selectAllLabel;
    /** @type {?} */
    SelectComponent.prototype.outline;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype._required;
    /** @type {?} */
    SelectComponent.prototype.opened;
    /** @type {?} */
    SelectComponent.prototype.closed;
    /** @type {?} */
    SelectComponent.prototype.selected;
    /** @type {?} */
    SelectComponent.prototype.deselected;
    /** @type {?} */
    SelectComponent.prototype.noOptionsFound;
    /** @type {?} */
    SelectComponent.prototype.changed;
    /** @type {?} */
    SelectComponent.prototype.selectionSpan;
    /** @type {?} */
    SelectComponent.prototype.dropdown;
    /** @type {?} */
    SelectComponent.prototype.filterInput;
    /** @type {?} */
    SelectComponent.prototype.clearButton;
    /** @type {?} */
    SelectComponent.prototype.singleContainer;
    /** @type {?} */
    SelectComponent.prototype.multipleContainer;
    /** @type {?} */
    SelectComponent.prototype._value;
    /** @type {?} */
    SelectComponent.prototype.optionList;
    /** @type {?} */
    SelectComponent.prototype.optionsLength;
    /** @type {?} */
    SelectComponent.prototype.visibleOptionsDefault;
    /** @type {?} */
    SelectComponent.prototype.hasSelected;
    /** @type {?} */
    SelectComponent.prototype.isBrowser;
    /** @type {?} */
    SelectComponent.prototype.canOpenOnFocus;
    /** @type {?} */
    SelectComponent.prototype.hasFocus;
    /** @type {?} */
    SelectComponent.prototype.isOpen;
    /** @type {?} */
    SelectComponent.prototype.isBelow;
    /** @type {?} */
    SelectComponent.prototype.filterInputWidth;
    /** @type {?} */
    SelectComponent.prototype.isDisabled;
    /** @type {?} */
    SelectComponent.prototype.placeholderView;
    /** @type {?} */
    SelectComponent.prototype.labelActive;
    /** @type {?} */
    SelectComponent.prototype.labelRef;
    /** @type {?} */
    SelectComponent.prototype.prefixRef;
    /** @type {?} */
    SelectComponent.prototype.labelRefActive;
    /** @type {?} */
    SelectComponent.prototype.dropdownAnimationDone;
    /** @type {?} */
    SelectComponent.prototype.clearClicked;
    /** @type {?} */
    SelectComponent.prototype.selectContainerClicked;
    /** @type {?} */
    SelectComponent.prototype.filterHeight;
    /** @type {?} */
    SelectComponent.prototype.dropdownHeight;
    /** @type {?} */
    SelectComponent.prototype.dropdownMaxHeight;
    /** @type {?} */
    SelectComponent.prototype.OUTLINE_DROPDOWN_BOTTOM_OFFSET;
    /** @type {?} */
    SelectComponent.prototype.OUTLINE_DROPDOWN_TOP_OFFSET;
    /** @type {?} */
    SelectComponent.prototype.width;
    /** @type {?} */
    SelectComponent.prototype.top;
    /** @type {?} */
    SelectComponent.prototype.left;
    /** @type {?} */
    SelectComponent.prototype.documentClickFun;
    /** @type {?} */
    SelectComponent.prototype.itemsBefore;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype._focused;
    /** @type {?} */
    SelectComponent.prototype.onChange;
    /** @type {?} */
    SelectComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype._compareWith;
    /** @type {?} */
    SelectComponent.prototype.el;
    /** @type {?} */
    SelectComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFHVCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLEdBQUcsRUFDSCxRQUFRLEdBQ1QsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFOUMsTUFBTSxLQUFPLHFCQUFxQixHQUFxQjtJQUNyRCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLEVBQUM7SUFDOUMsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBcUhFLHlCQUNTLEVBQWMsRUFDZCxRQUFtQixFQUNBLFFBQWEsRUFDbEIsVUFBa0IsRUFDL0IsS0FBd0I7UUFKekIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDQSxhQUFRLEdBQVIs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O0lBQ2pCLGlDQUFlOztJQUNmLGtDQUFlOztJQUNmLDJDQUFxQjs7SUFDckIscUNBQW1COztJQUNuQiwwQ0FBcUI7O0lBQ3JCLHNDQUFvQjs7SUFDcEIsbUNBQXNCOztJQUN0QixvQ0FBdUI7O0lBQ3ZCLHlDQUF1Qjs7SUFDdkIsZ0RBQThCOztJQUU5Qix1Q0FBcUI7O0lBQ3JCLGlEQUErQjs7SUFFL0IsdUNBQWlCOztJQUNqQix5Q0FBdUI7O0lBQ3ZCLDRDQUEwQjs7SUFFMUIseURBQW1DOztJQUNuQyxzREFBa0M7O0lBR2xDLGdDQUFjOztJQUNkLDhCQUFZOztJQUNaLCtCQUFhOztJQUViLDJDQUEyQjs7SUFFM0Isc0NBQTZCOzs7OztJQUs3QixtQ0FBeUI7O0lBRXpCLG1DQUEwQjs7SUFDMUIsb0NBQXFCOzs7OztJQUVyQix1Q0FBdUQ7O0lBR3JELDZCQUFxQjs7SUFDckIsbUNBQTBCOzs7OztJQUMxQixtQ0FBdUM7Ozs7O0lBRXZDLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRXhpc3RpbmdQcm92aWRlcixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdJbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2VsZWN0RHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSU9wdGlvbiB9IGZyb20gJy4vb3B0aW9uLWludGVyZmFjZSc7XG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQgeyBPcHRpb25MaXN0IH0gZnJvbSAnLi9vcHRpb24tbGlzdCc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQkFDS1NQQUNFLFxuICBET1dOX0FSUk9XLFxuICBFTlRFUixcbiAgRVNDQVBFLFxuICBTUEFDRSxcbiAgVEFCLFxuICBVUF9BUlJPVyxcbn0gZnJvbSAnLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9WQUxVRV9BQ0NFU1NPUjogRXhpc3RpbmdQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdENvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0ZXJpYWwtc2VsZWN0LW1vZHVsZS5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1NFTEVDVF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBvcHRpb25zOiBBcnJheTxJT3B0aW9uPjtcbiAgQElucHV0KCkgcHVibGljIGN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGFsbG93Q2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodEZpcnN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgbXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbm9GaWx0ZXIgPSAwO1xuICBASW5wdXQoKSBub3RGb3VuZE1zZyA9ICdObyByZXN1bHRzIGZvdW5kJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCkgZmlsdGVyUGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgZmlsdGVyRW5hYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBmaWx0ZXJBdXRvY29tcGxldGUgPSB0cnVlO1xuICBASW5wdXQoKSB2aXNpYmxlT3B0aW9uczogbnVtYmVyO1xuICBASW5wdXQoKSBvcHRpb25IZWlnaHQgPSAzNztcbiAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0QWxsID0gdHJ1ZTtcbiAgQElucHV0KCkgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgYWxsJztcbiAgQElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb21wYXJlV2l0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyZVdpdGg7XG4gIH1cbiAgc2V0IGNvbXBhcmVXaXRoKGZuOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IEVycm9yKCdjb21wYXJlV2l0aCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcbiAgfVxuXG4gIEBPdXRwdXQoKSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPElPcHRpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxJT3B0aW9uPigpO1xuICBAT3V0cHV0KCkgZGVzZWxlY3RlZDogRXZlbnRFbWl0dGVyPElPcHRpb24gfCBJT3B0aW9uW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxJT3B0aW9uIHwgSU9wdGlvbltdPigpO1xuICBAT3V0cHV0KCkgbm9PcHRpb25zRm91bmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIHNlbGVjdGlvblNwYW46IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJywgeyBzdGF0aWM6IGZhbHNlIH0pIGRyb3Bkb3duOiBTZWxlY3REcm9wZG93bkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmlsdGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NsZWFyJywgeyBzdGF0aWM6IGZhbHNlIH0pIGNsZWFyQnV0dG9uOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaW5nbGVDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgc2luZ2xlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtdWx0aXBsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBtdWx0aXBsZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBfdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcbiAgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgb3B0aW9uc0xlbmd0aDogbnVtYmVyO1xuICB2aXNpYmxlT3B0aW9uc0RlZmF1bHQgPSA0O1xuICAvLyBTZWxlY3Rpb24gc3RhdGUgdmFyaWFibGVzLlxuICBoYXNTZWxlY3RlZCA9IGZhbHNlO1xuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG5cbiAgLy8gVmlldyBzdGF0ZSB2YXJpYWJsZXMuXG4gIGNhbk9wZW5PbkZvY3VzID0gdHJ1ZTtcbiAgaGFzRm9jdXMgPSBmYWxzZTtcbiAgaXNPcGVuID0gZmFsc2U7XG4gIGlzQmVsb3cgPSB0cnVlO1xuICBmaWx0ZXJJbnB1dFdpZHRoID0gMTtcbiAgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBwbGFjZWhvbGRlclZpZXcgPSAnJztcbiAgbGFiZWxBY3RpdmUgPSBmYWxzZTtcbiAgbGFiZWxSZWY6IEhUTUxFbGVtZW50O1xuICBwcmVmaXhSZWY6IEhUTUxFbGVtZW50O1xuICBsYWJlbFJlZkFjdGl2ZSA9IGZhbHNlO1xuICBkcm9wZG93bkFuaW1hdGlvbkRvbmUgPSBmYWxzZTtcblxuICBjbGVhckNsaWNrZWQgPSBmYWxzZTtcbiAgc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IGZhbHNlO1xuXG4gIGZpbHRlckhlaWdodCA9IDA7XG4gIGRyb3Bkb3duSGVpZ2h0OiBudW1iZXI7XG4gIGRyb3Bkb3duTWF4SGVpZ2h0OiBudW1iZXI7XG5cbiAgT1VUTElORV9EUk9QRE9XTl9CT1RUT01fT0ZGU0VUID0gNTtcbiAgT1VUTElORV9EUk9QRE9XTl9UT1BfT0ZGU0VUID0gLTIwO1xuXG4gIC8vIFdpZHRoIGFuZCBwb3NpdGlvbiBmb3IgdGhlIGRyb3Bkb3duIGNvbnRhaW5lci5cbiAgd2lkdGg6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcblxuICBkb2N1bWVudENsaWNrRnVuOiBGdW5jdGlvbjtcblxuICBpdGVtc0JlZm9yZTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIGdldCBmb2N1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xuICB9XG4gIHByaXZhdGUgX2ZvY3VzZWQgPSBmYWxzZTtcblxuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBwcml2YXRlIF9jb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGxhY2Vob2xkZXJWaWV3ID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlckhlaWdodCgpO1xuICAgIHRoaXMudXBkYXRlRHJvcGRvd25IZWlnaHQoKTtcbiAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFJlZiA9IHRoaXMuX2dldExhYmVsUmVmKCk7XG4gICAgdGhpcy5wcmVmaXhSZWYgPSB0aGlzLl9nZXRQcmVmaXhSZWYoKTtcblxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRGaXJzdCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodEZpcnN0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRMYWJlbFJlZigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VsZWN0UGFyZW50RWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBsYWJlbFJlZiA9IHNlbGVjdFBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgcmV0dXJuIGxhYmVsUmVmO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJlZml4UmVmKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWxlY3RQYXJlbnRFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHByZWZpeFJlZiA9IHNlbGVjdFBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJy5wcmVmaXgnKTtcbiAgICByZXR1cm4gcHJlZml4UmVmO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVySGVpZ2h0KCkge1xuICAgIHRoaXMuZmlsdGVyRW5hYmxlZCA/ICh0aGlzLmZpbHRlckhlaWdodCA9IDUwKSA6ICh0aGlzLmZpbHRlckhlaWdodCA9IDApO1xuICB9XG5cbiAgdXBkYXRlRHJvcGRvd25IZWlnaHQoKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5lbmFibGVTZWxlY3RBbGwpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgPSB0aGlzLnZpc2libGVPcHRpb25zXG4gICAgICAgID8gdGhpcy5vcHRpb25IZWlnaHQgKiAodGhpcy52aXNpYmxlT3B0aW9ucyArIDEpXG4gICAgICAgIDogdGhpcy5vcHRpb25IZWlnaHQgKiAodGhpcy52aXNpYmxlT3B0aW9uc0RlZmF1bHQgKyAxKTtcblxuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9uSGVpZ2h0ICogKHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmxlbmd0aCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyb3Bkb3duTWF4SGVpZ2h0ID0gdGhpcy52aXNpYmxlT3B0aW9uc1xuICAgICAgICA/IHRoaXMub3B0aW9uSGVpZ2h0ICogdGhpcy52aXNpYmxlT3B0aW9uc1xuICAgICAgICA6IHRoaXMub3B0aW9uSGVpZ2h0ICogdGhpcy52aXNpYmxlT3B0aW9uc0RlZmF1bHQ7XG5cbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbkhlaWdodCAqIHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBvbkRyb3Bkb3duQW5pbWF0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmRyb3Bkb3duQW5pbWF0aW9uRG9uZSA9IHRydWU7XG4gIH1cblxuICBvbkRyb3Bkb3duQW5pbWF0aW9uU3RhcnQoKSB7XG4gICAgdGhpcy5kcm9wZG93bkFuaW1hdGlvbkRvbmUgPSBmYWxzZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ291dGxpbmUnKSkge1xuICAgICAgaWYgKGNoYW5nZXNbJ291dGxpbmUnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdtZGItc2VsZWN0LW91dGxpbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnbWRiLXNlbGVjdC1vdXRsaW5lJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHtcbiAgICAgIHRoaXMudXBkYXRlT3B0aW9uc0xpc3QoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duSGVpZ2h0KCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQm9keSA/IHRoaXMuX3VwZGF0ZUFwcGVuZGVkUG9zaXRpb24oKSA6IHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHtcbiAgICAgICAgcHJldmlvdXNWYWx1ZTogY2hhbmdlcy5vcHRpb25zLnByZXZpb3VzVmFsdWUsXG4gICAgICAgIHNlbGVjdGlvblZhbHVlOiBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdub0ZpbHRlcicpKSB7XG4gICAgICBjb25zdCBudW1PcHRpb25zOiBudW1iZXIgPSB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgICBjb25zdCBtaW5OdW1PcHRpb25zOiBudW1iZXIgPSBjaGFuZ2VzWydub0ZpbHRlciddLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVyRW5hYmxlZCA9IG51bU9wdGlvbnMgPj0gbWluTnVtT3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGxhY2Vob2xkZXInKSkge1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGlzQ2hpbGQoZWxlbW50OiBhbnkpIHtcbiAgICBsZXQgbm9kZSA9IGVsZW1udC5wYXJlbnROb2RlO1xuICAgIHdoaWxlIChub2RlICE9IG51bGwpIHtcbiAgICAgIGlmIChub2RlID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gIH1cblxuICAvLyBTZWxlY3QgY29udGFpbmVyLlxuXG4gIG9uU2VsZWN0Q29udGFpbmVyQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIC8vIHByZXZlbnQgZnJvbSBvcGVuaW5nIG9uIG1vdXNlIHJpZ2h0IGNsaWNrXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAyIHx8IGV2ZW50LndoaWNoID09PSAzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDaGlsZChldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcblxuICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxSZWZTdGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0Q29udGFpbmVyRm9jdXMoKSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmxhYmVsUmVmLCAnZm9jdXNlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByZWZpeFJlZikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnByZWZpeFJlZiwgJ2ZvY3VzZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW5PcGVuT25Gb2N1cykge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9XG4gICAgdGhpcy5jYW5PcGVuT25Gb2N1cyA9IHRydWU7XG4gIH1cblxuICBvblNlbGVjdENvbnRhaW5lckJsdXIoKSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FuT3Blbk9uRm9jdXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2ZvY3VzZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmVmaXhSZWYpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5wcmVmaXhSZWYsICdmb2N1c2VkJyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzT3BlbiAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0Q29udGFpbmVyS2V5ZG93bihldmVudCk7XG4gIH1cblxuICAvLyBEcm9wZG93biBjb250YWluZXIuXG5cbiAgb25Ecm9wZG93bk9wdGlvbkNsaWNrZWQob3B0aW9uOiBPcHRpb24pIHtcbiAgICB0aGlzLm11bHRpcGxlID8gdGhpcy50b2dnbGVTZWxlY3RPcHRpb24ob3B0aW9uKSA6IHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICBvbkRyb3Bkb3duQ2xvc2UoZm9jdXM6IGFueSkge1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bihmb2N1cyk7XG4gIH1cblxuICAvLyBTaW5nbGUgZmlsdGVyIGlucHV0LlxuICBvblNpbmdsZUZpbHRlckNsaWNrKCkge1xuICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IHRydWU7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KHRlcm06IHN0cmluZykge1xuICAgIGNvbnN0IGhhc1Nob3duOiBib29sZWFuID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcih0ZXJtKTtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9ICh0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQubGVuZ3RoICsgMSkgKiB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5sZW5ndGggKiB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICB9XG4gICAgaWYgKCFoYXNTaG93bikge1xuICAgICAgdGhpcy5ub09wdGlvbnNGb3VuZC5lbWl0KHRlcm0pO1xuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9uSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5oYW5kbGVTaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIC8vIE11bHRpcGxlIGZpbHRlciBpbnB1dC5cblxuICBvbk11bHRpcGxlRmlsdGVySW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICBjb25zdCB0ZXJtOiBzdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgaGFzU2hvd246IGJvb2xlYW4gPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyKHRlcm0pO1xuICAgIGlmICghaGFzU2hvd24pIHtcbiAgICAgIHRoaXMubm9PcHRpb25zRm91bmQuZW1pdCh0ZXJtKTtcbiAgICB9XG4gIH1cblxuICBvbk11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5oYW5kbGVNdWx0aXBsZUZpbHRlcktleWRvd24oZXZlbnQpO1xuICB9XG5cbiAgLy8gU2luZ2xlIGNsZWFyIHNlbGVjdC5cblxuICBvbkNsZWFyU2VsZWN0aW9uQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jbGVhckNsaWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcblxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gTXVsdGlwbGUgZGVzZWxlY3Qgb3B0aW9uLlxuXG4gIG9uRGVzZWxlY3RPcHRpb25DbGljayhvcHRpb246IE9wdGlvbikge1xuICAgIHRoaXMuY2xlYXJDbGlja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICAvKiogQVBJLiAqKi9cblxuICBvcGVuKCkge1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB8IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3ZhbHVlIDogdGhpcy5fdmFsdWVbMF07XG4gIH1cblxuICBzZXQgdmFsdWUodjogYW55IHwgYW55W10pIHtcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgdiA9PT0gJycpIHtcbiAgICAgIHYgPSBbXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICB2ID0gW3ZdO1xuICAgIH1cblxuICAgIHRoaXMuX3NldFNlbGVjdGlvbih2KTtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U2VsZWN0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdmFsdWUuZm9yRWFjaCgoc2VsZWN0aW9uVmFsdWU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3RCeVZhbHVlKHNlbGVjdGlvblZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RCeVZhbHVlKHZhbHVlWzBdKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RCeVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmZpbmQoKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlICE9PSBudWxsICYmIHRoaXMuX2NvbXBhcmVXaXRoKG9wdGlvbi52YWx1ZSwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoaW5nT3B0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0KG1hdGNoaW5nT3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gIH1cblxuICBzZWxlY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9uTGlzdC5nZXRPcHRpb25zQnlWYWx1ZSh2YWx1ZSkuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgbWV0aG9kcy4gKiovXG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaGFzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLm9wdGlvbkxpc3QudmFsdWU7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSgpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJXaWR0aCgpO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHVwZGF0ZU9wdGlvbnNMaXN0KG9wdGlvbnM6IEFycmF5PElPcHRpb24+KSB7XG4gICAgdGhpcy5vcHRpb25MaXN0ID0gbmV3IE9wdGlvbkxpc3Qob3B0aW9ucywgdGhpcy5tdWx0aXBsZSk7XG4gICAgdGhpcy5fc2V0U2VsZWN0aW9uKHRoaXMuX3ZhbHVlKTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgdXBkYXRlTGFiZWxTdGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2Vob2xkZXIgJiYgIXRoaXMuaGFzU2VsZWN0ZWQgJiYgIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmxhYmVsQWN0aXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFiZWxBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxhYmVsUmVmU3RhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyICYmICF0aGlzLmhhc1NlbGVjdGVkICYmICF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmxhYmVsUmVmLCAnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBEcm9wZG93bi4gKiovXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzT3BlbiA/IHRoaXMuY2xvc2VEcm9wZG93bih0cnVlKSA6IHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbkRyb3Bkb3duKCkge1xuICAgIC8vIHdlIHNob3VsZCBub3Qgc2V0IGhpZ2hlciB6LWluZGV4IHZhbHVlIGhlcmVcbiAgICAvLyBiZWNhdXNlIGRyb3Bkb3duIGFkZGVkIHdpdGggYXBwZW5kVG9Cb2R5IHdpbGwgYmUgb3ZlcmxhcGVkIGJ5IHNlbGVjdCBpbnB1dFxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsICcxMDAwJyk7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXBwZW5kRHJvcGRvd24oKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID8gdGhpcy5fdXBkYXRlQXBwZW5kZWRQb3NpdGlvbigpIDogdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgWydjbGljaycsICd0b3VjaHN0YXJ0J10uZm9yRWFjaCgoZXY6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmRvY3VtZW50Q2xpY2tGdW4gPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCBldiwgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5pc0NoaWxkKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuICYmXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duQW5pbWF0aW9uRG9uZSAmJlxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckZpbHRlcklucHV0KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub3BlbmVkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24oZm9jdXM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCgnYm9keScsIHRoaXMuZHJvcGRvd24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0O1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcpO1xuICAgIGNvbnRhaW5lci5yZW1vdmUoJ2ZhZGVJblNlbGVjdCcpO1xuXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmNsZWFyRmlsdGVySW5wdXQoKTtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmRvY3VtZW50Q2xpY2tGdW4oKTtcblxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBTZWxlY3QuICoqL1xuXG4gIHNlbGVjdE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0KG9wdGlvbik7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KG9wdGlvbi53cmFwcGVkT3B0aW9uKTtcbiAgICAgIHRoaXMuaGFzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy5tdWx0aXBsZSAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB9XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGRlc2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmRlc2VsZWN0KG9wdGlvbik7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5wbGFjZWhvbGRlclZpZXcgPSB0aGlzLnBsYWNlaG9sZGVyO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25MaXN0LnNlbGVjdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxSZWZTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChvcHRpb24ud3JhcHBlZE9wdGlvbik7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uOiBBcnJheTxPcHRpb24+ID0gdGhpcy5vcHRpb25MaXN0LnNlbGVjdGlvbjtcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuaGFzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQoc2VsZWN0aW9uWzBdLndyYXBwZWRPcHRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQoXG4gICAgICAgICAgc2VsZWN0aW9uLm1hcChvcHRpb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi53cmFwcGVkT3B0aW9uO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlU2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID8gdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pIDogdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgfVxuXG4gIHNlbGVjdEhpZ2hsaWdodGVkT3B0aW9uKCkge1xuICAgIGNvbnN0IG9wdGlvbjogT3B0aW9uID0gdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodGVkT3B0aW9uO1xuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIG9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50b2dnbGVTZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlICYmIG9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bih0cnVlKTtcblxuICAgICAgdGhpcy5jYW5PcGVuT25Gb2N1cyA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBkZXNlbGVjdExhc3QoKSB7XG4gICAgY29uc3Qgc2VsOiBBcnJheTxPcHRpb24+ID0gdGhpcy5vcHRpb25MaXN0LnNlbGVjdGlvbjtcblxuICAgIGlmIChzZWwubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgb3B0aW9uOiBPcHRpb24gPSBzZWxbc2VsLmxlbmd0aCAtIDFdO1xuICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgdGhpcy5zZXRNdWx0aXBsZUZpbHRlcklucHV0KG9wdGlvbi5sYWJlbCArICcgJyk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RBbGwoaXNTZWxlY3RlZDogYm9vbGVhbikge1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWRcbiAgICAgICAgLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgICAgLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkXG4gICAgICAgIC5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAgIC5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogRmlsdGVyLiAqKi9cblxuICBjbGVhckZpbHRlcklucHV0KCkge1xuICAgIHRoaXMuZHJvcGRvd24uY2xlYXJGaWx0ZXJJbnB1dCgpO1xuICAgIHRoaXMudXBkYXRlRHJvcGRvd25IZWlnaHQoKTtcbiAgfVxuXG4gIHNldE11bHRpcGxlRmlsdGVySW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIGlmIChrZXkgPT09IEVTQ0FQRSB8fCAoa2V5ID09PSBVUF9BUlJPVyAmJiBldmVudC5hbHRLZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB0aGlzLmNhbk9wZW5PbkZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBUQUIpIHtcbiAgICAgICAgLy8gUmVzdG9yZSBmb2N1cyBmcm9tIHNlYXJjaCBpbnB1dCB0byBzZWxlY3QgaW5wdXQuIEVuc3VyZXMgdGhhdCB0aGUgbmV4dFxuICAgICAgICAvLyBvciBwcmV2aW91cyBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCBjb3JyZXRseSBvbiB0YWIgb3Igc2hpZnQtdGFiXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IEVOVEVSKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0SGlnaGxpZ2h0ZWRPcHRpb24oKTtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5lbmFibGVTZWxlY3RBbGwpIHtcbiAgICAgICAgICB0aGlzLmRyb3Bkb3duLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBVUF9BUlJPVykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0UHJldmlvdXNPcHRpb24oKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodE5leHRPcHRpb24oKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5ID09PSBFTlRFUiB8fCBrZXkgPT09IFNQQUNFIHx8IChrZXkgPT09IERPV05fQVJST1cgJiYgZXZlbnQuYWx0S2V5KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQud2hpY2g7XG5cbiAgICBpZiAoa2V5ID09PSBCQUNLU1BBQ0UpIHtcbiAgICAgIGlmICh0aGlzLmhhc1NlbGVjdGVkICYmIHRoaXMuZmlsdGVyRW5hYmxlZCAmJiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RMYXN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQud2hpY2g7XG5cbiAgICBpZiAoa2V5ID09PSBFU0NBUEUgfHwga2V5ID09PSBUQUIgfHwga2V5ID09PSBVUF9BUlJPVyB8fCBrZXkgPT09IERPV05fQVJST1cgfHwga2V5ID09PSBFTlRFUikge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogVmlldy4gKiovXG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG5cbiAgYmx1cigpIHtcbiAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgdXBkYXRlV2lkdGgoKSB7XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5zaW5nbGVDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aWR0aCA9IHRoaXMubXVsdGlwbGVDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRvY0VsOiBhbnkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBsZXQgZWxQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgZWxQb3NpdGlvbiA9XG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArXG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2VsZWN0U3BhbiA9IHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3Qgb3JpZ2luSGVpZ2h0ID0gdGhpcy5vdXRsaW5lXG4gICAgICAgID8gdGhpcy5PVVRMSU5FX0RST1BET1dOX1RPUF9PRkZTRVRcbiAgICAgICAgOiBzZWxlY3RTcGFuLm9mZnNldEhlaWdodDtcbiAgICAgIHRoaXMubGVmdCA9IHNlbGVjdFNwYW4ub2Zmc2V0TGVmdDtcbiAgICAgIGNvbnN0IGJvdHRvbTogYW55ID0gZG9jRWwuc2Nyb2xsVG9wICsgZG9jRWwuY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3QgZHJvcGRvd25IZWlnaHQgPVxuICAgICAgICB0aGlzLmRyb3Bkb3duTWF4SGVpZ2h0ID4gdGhpcy5kcm9wZG93bkhlaWdodCA/IHRoaXMuZHJvcGRvd25IZWlnaHQgOiB0aGlzLmRyb3Bkb3duTWF4SGVpZ2h0O1xuICAgICAgdGhpcy51cGRhdGVEcm9wZG93bkhlaWdodCgpO1xuICAgICAgaWYgKGVsUG9zaXRpb24gKyBkcm9wZG93bkhlaWdodCA+PSBib3R0b20pIHtcbiAgICAgICAgdGhpcy50b3AgPSBvcmlnaW5IZWlnaHQgLSBkcm9wZG93bkhlaWdodCAtIHRoaXMuZmlsdGVySGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLm91dGxpbmUgPyBzZWxlY3RTcGFuLm9mZnNldEhlaWdodCArIHRoaXMuT1VUTElORV9EUk9QRE9XTl9CT1RUT01fT0ZGU0VUIDogMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBcHBlbmRlZFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgc2VsZWN0UmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VsZWN0UmVjdC50b3AgKyBzY3JvbGxUb3A7XG4gICAgICBjb25zdCBoZWlnaHQgPSBzZWxlY3RSZWN0LmhlaWdodDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID1cbiAgICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCA+IHRoaXMuZHJvcGRvd25IZWlnaHQgPyB0aGlzLmRyb3Bkb3duSGVpZ2h0IDogdGhpcy5kcm9wZG93bk1heEhlaWdodDtcblxuICAgICAgdGhpcy5sZWZ0ID0gc2VsZWN0UmVjdC5sZWZ0O1xuICAgICAgaWYgKFxuICAgICAgICBvZmZzZXRUb3AgKyBkcm9wZG93bkhlaWdodCArIHRoaXMuZmlsdGVySGVpZ2h0ID5cbiAgICAgICAgc2Nyb2xsVG9wICsgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMub3V0bGluZSkge1xuICAgICAgICAgIHRoaXMudG9wID1cbiAgICAgICAgICAgIG9mZnNldFRvcCAtIGRyb3Bkb3duSGVpZ2h0ICsgdGhpcy5PVVRMSU5FX0RST1BET1dOX1RPUF9PRkZTRVQgLSB0aGlzLmZpbHRlckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvcCA9IG9mZnNldFRvcCAtIGRyb3Bkb3duSGVpZ2h0ICsgaGVpZ2h0IC0gdGhpcy5maWx0ZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy5vdXRsaW5lXG4gICAgICAgICAgPyBvZmZzZXRUb3AgKyBoZWlnaHQgKyB0aGlzLk9VVExJTkVfRFJPUERPV05fQk9UVE9NX09GRlNFVFxuICAgICAgICAgIDogb2Zmc2V0VG9wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgYm9keSA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYm9keSwgZHJvcGRvd24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpbHRlcldpZHRoKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXJJbnB1dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgICB0aGlzLmZpbHRlcklucHV0V2lkdGggPVxuICAgICAgICB2YWx1ZS5sZW5ndGggPT09IDAgPyAxICsgdGhpcy5wbGFjZWhvbGRlclZpZXcubGVuZ3RoICogMTAgOiAxICsgdmFsdWUubGVuZ3RoICogMTA7XG4gICAgfVxuICB9XG59XG4iXX0=