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
export const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => SelectComponent)),
    multi: true,
};
export class SelectComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} platformId
     * @param {?} cdRef
     */
    constructor(el, renderer, document, platformId, cdRef) {
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
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = value;
    }
    /**
     * @return {?}
     */
    get compareWith() {
        return this._compareWith;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw Error('compareWith must be a function');
        }
        this._compareWith = fn;
    }
    /**
     * @return {?}
     */
    get focused() {
        return this._focused;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @private
     * @return {?}
     */
    _getLabelRef() {
        /** @type {?} */
        const selectParentEl = this.el.nativeElement.parentNode;
        /** @type {?} */
        const labelRef = selectParentEl.querySelector('label');
        return labelRef;
    }
    /**
     * @private
     * @return {?}
     */
    _getPrefixRef() {
        /** @type {?} */
        const selectParentEl = this.el.nativeElement.parentNode;
        /** @type {?} */
        const prefixRef = selectParentEl.querySelector('.prefix');
        return prefixRef;
    }
    /**
     * @return {?}
     */
    updateFilterHeight() {
        this.filterEnabled ? (this.filterHeight = 50) : (this.filterHeight = 0);
    }
    /**
     * @return {?}
     */
    updateDropdownHeight() {
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
    }
    /**
     * @return {?}
     */
    onDropdownAnimationDone() {
        this.dropdownAnimationDone = true;
    }
    /**
     * @return {?}
     */
    onDropdownAnimationStart() {
        this.dropdownAnimationDone = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
            const numOptions = this.optionList.options.length;
            /** @type {?} */
            const minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.updateState();
        }
    }
    /**
     * @param {?} elemnt
     * @return {?}
     */
    isChild(elemnt) {
        /** @type {?} */
        let node = elemnt.parentNode;
        while (node != null) {
            if (node === this.el.nativeElement) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        this.updateWidth();
    }
    // Select container.
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectContainerClick(event) {
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
    }
    /**
     * @return {?}
     */
    onSelectContainerFocus() {
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
    }
    /**
     * @return {?}
     */
    onSelectContainerBlur() {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectContainerKeydown(event) {
        this.handleSelectContainerKeydown(event);
    }
    // Dropdown container.
    /**
     * @param {?} option
     * @return {?}
     */
    onDropdownOptionClicked(option) {
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    }
    /**
     * @param {?} focus
     * @return {?}
     */
    onDropdownClose(focus) {
        this.closeDropdown(focus);
    }
    // Single filter input.
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.selectContainerClicked = true;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    onSingleFilterInput(term) {
        /** @type {?} */
        const hasShown = this.optionList.filter(term);
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.handleSingleFilterKeydown(event);
    }
    // Multiple filter input.
    /**
     * @param {?} event
     * @return {?}
     */
    onMultipleFilterInput(event) {
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        /** @type {?} */
        const term = event.target.value;
        /** @type {?} */
        const hasShown = this.optionList.filter(term);
        if (!hasShown) {
            this.noOptionsFound.emit(term);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMultipleFilterKeydown(event) {
        this.handleMultipleFilterKeydown(event);
    }
    // Single clear select.
    /**
     * @param {?} event
     * @return {?}
     */
    onClearSelectionClick(event) {
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
    }
    // Multiple deselect option.
    /**
     * @param {?} option
     * @return {?}
     */
    onDeselectOptionClick(option) {
        this.clearClicked = true;
        this.deselectOption(option);
    }
    /**
     * API. *
     * @return {?}
     */
    open() {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.openDropdown();
        }));
    }
    /**
     * @return {?}
     */
    close() {
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    get value() {
        return this.multiple ? this._value : this._value[0];
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (typeof v === 'undefined' || v === null || v === '') {
            v = [];
        }
        else if (!Array.isArray(v)) {
            v = [v];
        }
        this._setSelection(v);
        this._value = v;
        this.updateState();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setSelection(value) {
        if (this.multiple && value) {
            this.clearSelection();
            value.forEach((/**
             * @param {?} selectionValue
             * @return {?}
             */
            (selectionValue) => {
                this._selectByValue(selectionValue);
            }));
        }
        else {
            this._selectByValue(value[0]);
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _selectByValue(value) {
        /** @type {?} */
        const matchingOption = this.optionList.options.find((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            return option.value !== null && this._compareWith(option.value, value);
        }));
        if (matchingOption) {
            this.optionList.select(matchingOption);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.clearSelection();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select(value) {
        this.optionList.getOptionsByValue(value).forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            this.selectOption(option);
        }));
    }
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
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
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    valueChanged() {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    updateState() {
        this.placeholderView = this.placeholder;
        this.updateFilterWidth();
        this.cdRef.markForCheck();
    }
    /**
     * Initialization. *
     * @param {?} options
     * @return {?}
     */
    updateOptionsList(options) {
        this.optionList = new OptionList(options, this.multiple);
        this._setSelection(this._value);
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    updateLabelState() {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.labelActive = false;
        }
        else {
            this.labelActive = true;
        }
    }
    /**
     * @return {?}
     */
    updateLabelRefState() {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.renderer.removeClass(this.labelRef, 'active');
        }
        else {
            this.renderer.addClass(this.labelRef, 'active');
        }
    }
    /**
     * Dropdown. *
     * @return {?}
     */
    toggleDropdown() {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        // we should not set higher z-index value here
        // because dropdown added with appendToBody will be overlaped by select input
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
        if (!this.isOpen) {
            this.isOpen = true;
            if (this.appendToBody) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._appendDropdown();
                }), 0);
            }
            this.updateWidth();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            ['click', 'touchstart'].forEach((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => {
                this.documentClickFun = this.renderer.listen('document', ev, (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    if (!this.isChild(event.target) &&
                        this.isOpen &&
                        this.dropdownAnimationDone &&
                        event.target !== this.el.nativeElement) {
                        this.closeDropdown();
                        this.clearFilterInput();
                        if (this.label) {
                            this.updateLabelState();
                        }
                        if (this.labelRef) {
                            this.updateLabelRefState();
                        }
                    }
                }));
            }));
            this.opened.emit(this);
        }
        this.cdRef.markForCheck();
    }
    /**
     * @param {?=} focus
     * @return {?}
     */
    closeDropdown(focus = false) {
        if (this.appendToBody && this.isOpen) {
            this.renderer.removeChild('body', this.dropdown._elementRef.nativeElement);
        }
        /** @type {?} */
        const container = this.el.nativeElement.lastElementChild.classList;
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
    }
    /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
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
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselectOption(option) {
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
    }
    /**
     * @return {?}
     */
    clearSelection() {
        /** @type {?} */
        const selection = this.optionList.selection;
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
                option => {
                    return option.wrappedOption;
                })));
            }
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    toggleSelectOption(option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    }
    /**
     * @return {?}
     */
    selectHighlightedOption() {
        /** @type {?} */
        const option = this.optionList.highlightedOption;
        if (this.multiple && option !== null) {
            this.toggleSelectOption(option);
        }
        if (!this.multiple && option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
            this.canOpenOnFocus = false;
            this.selectionSpan.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    deselectLast() {
        /** @type {?} */
        const sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            const option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    }
    /**
     * @param {?} isSelected
     * @return {?}
     */
    onSelectAll(isSelected) {
        if (isSelected) {
            this.optionList.filtered
                .filter((/**
             * @param {?} option
             * @return {?}
             */
            option => !option.disabled))
                .forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                this.selectOption(option);
            }));
        }
        else {
            this.optionList.filtered
                .filter((/**
             * @param {?} option
             * @return {?}
             */
            option => !option.disabled))
                .forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                this.deselectOption(option);
            }));
        }
    }
    /**
     * Filter. *
     * @return {?}
     */
    clearFilterInput() {
        this.dropdown.clearFilterInput();
        this.updateDropdownHeight();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMultipleFilterInput(value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSelectContainerKeydown(event) {
        /** @type {?} */
        const key = event.keyCode;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleMultipleFilterKeydown(event) {
        /** @type {?} */
        const key = event.which;
        if (key === BACKSPACE) {
            if (this.hasSelected && this.filterEnabled && this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSingleFilterKeydown(event) {
        /** @type {?} */
        const key = event.which;
        if (key === ESCAPE || key === TAB || key === UP_ARROW || key === DOWN_ARROW || key === ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    }
    /**
     * View. *
     * @return {?}
     */
    focus() {
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
    }
    /**
     * @return {?}
     */
    blur() {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    updateWidth() {
        if (!this.multiple) {
            this.width = this.singleContainer.nativeElement.offsetWidth;
        }
        else {
            this.width = this.multipleContainer.nativeElement.offsetWidth;
        }
    }
    /**
     * @return {?}
     */
    updatePosition() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const docEl = document.documentElement;
            /** @type {?} */
            let elPosition = 0;
            if (this.isBrowser) {
                elPosition =
                    this.el.nativeElement.getBoundingClientRect().bottom +
                        this.document.documentElement.scrollTop;
            }
            /** @type {?} */
            const selectSpan = this.selectionSpan.nativeElement;
            /** @type {?} */
            const originHeight = this.outline
                ? this.OUTLINE_DROPDOWN_TOP_OFFSET
                : selectSpan.offsetHeight;
            this.left = selectSpan.offsetLeft;
            /** @type {?} */
            const bottom = docEl.scrollTop + docEl.clientHeight;
            /** @type {?} */
            const dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
            this.updateDropdownHeight();
            if (elPosition + dropdownHeight >= bottom) {
                this.top = originHeight - dropdownHeight - this.filterHeight;
            }
            else {
                this.top = this.outline ? selectSpan.offsetHeight + this.OUTLINE_DROPDOWN_BOTTOM_OFFSET : 0;
            }
            this.cdRef.markForCheck();
        }), 0);
    }
    /**
     * @private
     * @return {?}
     */
    _updateAppendedPosition() {
        if (this.isBrowser) {
            /** @type {?} */
            const selectRect = this.el.nativeElement.getBoundingClientRect();
            /** @type {?} */
            const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
            /** @type {?} */
            const offsetTop = selectRect.top + scrollTop;
            /** @type {?} */
            const height = selectRect.height;
            /** @type {?} */
            const dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
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
    }
    /**
     * @private
     * @return {?}
     */
    _appendDropdown() {
        if (this.isBrowser) {
            /** @type {?} */
            const body = this.document.querySelector('body');
            /** @type {?} */
            const dropdown = this.dropdown._elementRef.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
            }
        }
    }
    /**
     * @return {?}
     */
    updateFilterWidth() {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            const value = this.filterInput.nativeElement.value;
            this.filterInputWidth =
                value.length === 0 ? 1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    }
}
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
SelectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFHVCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sS0FBSyxFQUNMLEdBQUcsRUFDSCxRQUFRLEdBQ1QsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFOUMsTUFBTSxPQUFPLHFCQUFxQixHQUFxQjtJQUNyRCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFDO0lBQzlDLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFVRCxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7SUE2RzFCLFlBQ1MsRUFBYyxFQUNkLFFBQW1CLEVBQ0EsUUFBYSxFQUNsQixVQUFrQixFQUMvQixLQUF3QjtRQUp6QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FB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RixpQ0FBd0I7O0lBQ3hCLHFDQUF1Qjs7SUFDdkIsd0NBQXNCOztJQUN0QixnREFBMEI7O0lBRTFCLHNDQUFvQjs7SUFDcEIsb0NBQW1COztJQUduQix5Q0FBc0I7O0lBQ3RCLG1DQUFpQjs7SUFDakIsaUNBQWU7O0lBQ2Ysa0NBQWU7O0lBQ2YsMkNBQXFCOztJQUNyQixxQ0FBbUI7O0lBQ25CLDBDQUFxQjs7SUFDckIsc0NBQW9COztJQUNwQixtQ0FBc0I7O0lBQ3RCLG9DQUF1Qjs7SUFDdkIseUNBQXVCOztJQUN2QixnREFBOEI7O0lBRTlCLHVDQUFxQjs7SUFDckIsaURBQStCOztJQUUvQix1Q0FBaUI7O0lBQ2pCLHlDQUF1Qjs7SUFDdkIsNENBQTBCOztJQUUxQix5REFBbUM7O0lBQ25DLHNEQUFrQzs7SUFHbEMsZ0NBQWM7O0lBQ2QsOEJBQVk7O0lBQ1osK0JBQWE7O0lBRWIsMkNBQTJCOztJQUUzQixzQ0FBNkI7Ozs7O0lBSzdCLG1DQUF5Qjs7SUFFekIsbUNBQTBCOztJQUMxQixvQ0FBcUI7Ozs7O0lBRXJCLHVDQUF1RDs7SUFHckQsNkJBQXFCOztJQUNyQixtQ0FBMEI7Ozs7O0lBQzFCLG1DQUF1Qzs7Ozs7SUFFdkMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFeGlzdGluZ1Byb3ZpZGVyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTZWxlY3REcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJT3B0aW9uIH0gZnJvbSAnLi9vcHRpb24taW50ZXJmYWNlJztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7IE9wdGlvbkxpc3QgfSBmcm9tICcuL29wdGlvbi1saXN0JztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBCQUNLU1BBQ0UsXG4gIERPV05fQVJST1csXG4gIEVOVEVSLFxuICBFU0NBUEUsXG4gIFNQQUNFLFxuICBUQUIsXG4gIFVQX0FSUk9XLFxufSBmcm9tICcuLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUX1ZBTFVFX0FDQ0VTU09SOiBFeGlzdGluZ1Byb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXRlcmlhbC1zZWxlY3QtbW9kdWxlLnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbU0VMRUNUX1ZBTFVFX0FDQ0VTU09SXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEFycmF5PElPcHRpb24+O1xuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgYWxsb3dDbGVhciA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaGlnaGxpZ2h0Rmlyc3QgPSB0cnVlO1xuICBASW5wdXQoKSBtdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBub0ZpbHRlciA9IDA7XG4gIEBJbnB1dCgpIG5vdEZvdW5kTXNnID0gJ05vIHJlc3VsdHMgZm91bmQnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBmaWx0ZXJQbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBmaWx0ZXJFbmFibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpbHRlckF1dG9jb21wbGV0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIHZpc2libGVPcHRpb25zOiBudW1iZXI7XG4gIEBJbnB1dCgpIG9wdGlvbkhlaWdodCA9IDM3O1xuICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBlbmFibGVTZWxlY3RBbGwgPSB0cnVlO1xuICBASW5wdXQoKSBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBhbGwnO1xuICBASW5wdXQoKSBvdXRsaW5lID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNvbXBhcmVXaXRoKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wYXJlV2l0aDtcbiAgfVxuICBzZXQgY29tcGFyZVdpdGgoZm46IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ2NvbXBhcmVXaXRoIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICB9XG5cbiAgQE91dHB1dCgpIG9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8SU9wdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPElPcHRpb24+KCk7XG4gIEBPdXRwdXQoKSBkZXNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8SU9wdGlvbiB8IElPcHRpb25bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPElPcHRpb24gfCBJT3B0aW9uW10+KCk7XG4gIEBPdXRwdXQoKSBub09wdGlvbnNGb3VuZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnc2VsZWN0aW9uJywgeyBzdGF0aWM6IHRydWUgfSkgc2VsZWN0aW9uU3BhbjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd24nLCB7IHN0YXRpYzogZmFsc2UgfSkgZHJvcGRvd246IFNlbGVjdERyb3Bkb3duQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWx0ZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2xlYXInLCB7IHN0YXRpYzogZmFsc2UgfSkgY2xlYXJCdXR0b246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NpbmdsZUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBzaW5nbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ211bHRpcGxlQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIG11bHRpcGxlQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIF92YWx1ZTogQXJyYXk8YW55PiA9IFtdO1xuICBvcHRpb25MaXN0OiBPcHRpb25MaXN0O1xuICBvcHRpb25zTGVuZ3RoOiBudW1iZXI7XG4gIHZpc2libGVPcHRpb25zRGVmYXVsdCA9IDQ7XG4gIC8vIFNlbGVjdGlvbiBzdGF0ZSB2YXJpYWJsZXMuXG4gIGhhc1NlbGVjdGVkID0gZmFsc2U7XG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcblxuICAvLyBWaWV3IHN0YXRlIHZhcmlhYmxlcy5cbiAgY2FuT3Blbk9uRm9jdXMgPSB0cnVlO1xuICBoYXNGb2N1cyA9IGZhbHNlO1xuICBpc09wZW4gPSBmYWxzZTtcbiAgaXNCZWxvdyA9IHRydWU7XG4gIGZpbHRlcklucHV0V2lkdGggPSAxO1xuICBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIHBsYWNlaG9sZGVyVmlldyA9ICcnO1xuICBsYWJlbEFjdGl2ZSA9IGZhbHNlO1xuICBsYWJlbFJlZjogSFRNTEVsZW1lbnQ7XG4gIHByZWZpeFJlZjogSFRNTEVsZW1lbnQ7XG4gIGxhYmVsUmVmQWN0aXZlID0gZmFsc2U7XG4gIGRyb3Bkb3duQW5pbWF0aW9uRG9uZSA9IGZhbHNlO1xuXG4gIGNsZWFyQ2xpY2tlZCA9IGZhbHNlO1xuICBzZWxlY3RDb250YWluZXJDbGlja2VkID0gZmFsc2U7XG5cbiAgZmlsdGVySGVpZ2h0ID0gMDtcbiAgZHJvcGRvd25IZWlnaHQ6IG51bWJlcjtcbiAgZHJvcGRvd25NYXhIZWlnaHQ6IG51bWJlcjtcblxuICBPVVRMSU5FX0RST1BET1dOX0JPVFRPTV9PRkZTRVQgPSA1O1xuICBPVVRMSU5FX0RST1BET1dOX1RPUF9PRkZTRVQgPSAtMjA7XG5cbiAgLy8gV2lkdGggYW5kIHBvc2l0aW9uIGZvciB0aGUgZHJvcGRvd24gY29udGFpbmVyLlxuICB3aWR0aDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuXG4gIGRvY3VtZW50Q2xpY2tGdW46IEZ1bmN0aW9uO1xuXG4gIGl0ZW1zQmVmb3JlOiBBcnJheTxhbnk+ID0gW107XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XG4gIH1cbiAgcHJpdmF0ZSBfZm9jdXNlZCA9IGZhbHNlO1xuXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHByaXZhdGUgX2NvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlclZpZXcgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMudXBkYXRlRmlsdGVySGVpZ2h0KCk7XG4gICAgdGhpcy51cGRhdGVEcm9wZG93bkhlaWdodCgpO1xuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVsUmVmID0gdGhpcy5fZ2V0TGFiZWxSZWYoKTtcbiAgICB0aGlzLnByZWZpeFJlZiA9IHRoaXMuX2dldFByZWZpeFJlZigpO1xuXG4gICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxSZWZTdGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhpZ2hsaWdodEZpcnN0KSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0Rmlyc3QgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldExhYmVsUmVmKCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWxlY3RQYXJlbnRFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IGxhYmVsUmVmID0gc2VsZWN0UGFyZW50RWwucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcbiAgICByZXR1cm4gbGFiZWxSZWY7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcmVmaXhSZWYoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlbGVjdFBhcmVudEVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgcHJlZml4UmVmID0gc2VsZWN0UGFyZW50RWwucXVlcnlTZWxlY3RvcignLnByZWZpeCcpO1xuICAgIHJldHVybiBwcmVmaXhSZWY7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJIZWlnaHQoKSB7XG4gICAgdGhpcy5maWx0ZXJFbmFibGVkID8gKHRoaXMuZmlsdGVySGVpZ2h0ID0gNTApIDogKHRoaXMuZmlsdGVySGVpZ2h0ID0gMCk7XG4gIH1cblxuICB1cGRhdGVEcm9wZG93bkhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCA9IHRoaXMudmlzaWJsZU9wdGlvbnNcbiAgICAgICAgPyB0aGlzLm9wdGlvbkhlaWdodCAqICh0aGlzLnZpc2libGVPcHRpb25zICsgMSlcbiAgICAgICAgOiB0aGlzLm9wdGlvbkhlaWdodCAqICh0aGlzLnZpc2libGVPcHRpb25zRGVmYXVsdCArIDEpO1xuXG4gICAgICB0aGlzLmRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vcHRpb25IZWlnaHQgKiAodGhpcy5vcHRpb25MaXN0Lm9wdGlvbnMubGVuZ3RoICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgPSB0aGlzLnZpc2libGVPcHRpb25zXG4gICAgICAgID8gdGhpcy5vcHRpb25IZWlnaHQgKiB0aGlzLnZpc2libGVPcHRpb25zXG4gICAgICAgIDogdGhpcy5vcHRpb25IZWlnaHQgKiB0aGlzLnZpc2libGVPcHRpb25zRGVmYXVsdDtcblxuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9uSGVpZ2h0ICogdGhpcy5vcHRpb25MaXN0Lm9wdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIG9uRHJvcGRvd25BbmltYXRpb25Eb25lKCkge1xuICAgIHRoaXMuZHJvcGRvd25BbmltYXRpb25Eb25lID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRHJvcGRvd25BbmltYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmRyb3Bkb3duQW5pbWF0aW9uRG9uZSA9IGZhbHNlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnb3V0bGluZScpKSB7XG4gICAgICBpZiAoY2hhbmdlc1snb3V0bGluZSddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ21kYi1zZWxlY3Qtb3V0bGluZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdtZGItc2VsZWN0LW91dGxpbmUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSkge1xuICAgICAgdGhpcy51cGRhdGVPcHRpb25zTGlzdChjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25IZWlnaHQoKTtcbiAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID8gdGhpcy5fdXBkYXRlQXBwZW5kZWRQb3NpdGlvbigpIDogdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoe1xuICAgICAgICBwcmV2aW91c1ZhbHVlOiBjaGFuZ2VzLm9wdGlvbnMucHJldmlvdXNWYWx1ZSxcbiAgICAgICAgc2VsZWN0aW9uVmFsdWU6IGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25vRmlsdGVyJykpIHtcbiAgICAgIGNvbnN0IG51bU9wdGlvbnM6IG51bWJlciA9IHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmxlbmd0aDtcbiAgICAgIGNvbnN0IG1pbk51bU9wdGlvbnM6IG51bWJlciA9IGNoYW5nZXNbJ25vRmlsdGVyJ10uY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5maWx0ZXJFbmFibGVkID0gbnVtT3B0aW9ucyA+PSBtaW5OdW1PcHRpb25zO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaXNDaGlsZChlbGVtbnQ6IGFueSkge1xuICAgIGxldCBub2RlID0gZWxlbW50LnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgfVxuXG4gIC8vIFNlbGVjdCBjb250YWluZXIuXG5cbiAgb25TZWxlY3RDb250YWluZXJDbGljayhldmVudDogYW55KSB7XG4gICAgLy8gcHJldmVudCBmcm9tIG9wZW5pbmcgb24gbW91c2UgcmlnaHQgY2xpY2tcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IDIgfHwgZXZlbnQud2hpY2ggPT09IDMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NoaWxkKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuXG4gICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RDb250YWluZXJGb2N1cygpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmxhYmVsUmVmLCAnYWN0aXZlJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxSZWYsICdmb2N1c2VkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJlZml4UmVmKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMucHJlZml4UmVmLCAnZm9jdXNlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhbk9wZW5PbkZvY3VzKSB7XG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgIH1cbiAgICB0aGlzLmNhbk9wZW5PbkZvY3VzID0gdHJ1ZTtcbiAgfVxuXG4gIG9uU2VsZWN0Q29udGFpbmVyQmx1cigpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5PcGVuT25Gb2N1cyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxSZWZTdGF0ZSgpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmxhYmVsUmVmLCAnZm9jdXNlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByZWZpeFJlZikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnByZWZpeFJlZiwgJ2ZvY3VzZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNPcGVuICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0Q29udGFpbmVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIC8vIERyb3Bkb3duIGNvbnRhaW5lci5cblxuICBvbkRyb3Bkb3duT3B0aW9uQ2xpY2tlZChvcHRpb246IE9wdGlvbikge1xuICAgIHRoaXMubXVsdGlwbGUgPyB0aGlzLnRvZ2dsZVNlbGVjdE9wdGlvbihvcHRpb24pIDogdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgfVxuXG4gIG9uRHJvcGRvd25DbG9zZShmb2N1czogYW55KSB7XG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKGZvY3VzKTtcbiAgfVxuXG4gIC8vIFNpbmdsZSBmaWx0ZXIgaW5wdXQuXG4gIG9uU2luZ2xlRmlsdGVyQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RDb250YWluZXJDbGlja2VkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVySW5wdXQodGVybTogc3RyaW5nKSB7XG4gICAgY29uc3QgaGFzU2hvd246IGJvb2xlYW4gPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyKHRlcm0pO1xuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuZW5hYmxlU2VsZWN0QWxsKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duSGVpZ2h0ID0gKHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5sZW5ndGggKyAxKSAqIHRoaXMub3B0aW9uSGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmxlbmd0aCAqIHRoaXMub3B0aW9uSGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoIWhhc1Nob3duKSB7XG4gICAgICB0aGlzLm5vT3B0aW9uc0ZvdW5kLmVtaXQodGVybSk7XG4gICAgICB0aGlzLmRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgb25TaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZVNpbmdsZUZpbHRlcktleWRvd24oZXZlbnQpO1xuICB9XG5cbiAgLy8gTXVsdGlwbGUgZmlsdGVyIGlucHV0LlxuXG4gIG9uTXVsdGlwbGVGaWx0ZXJJbnB1dChldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJXaWR0aCgpO1xuICAgIGNvbnN0IHRlcm06IHN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBoYXNTaG93bjogYm9vbGVhbiA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXIodGVybSk7XG4gICAgaWYgKCFoYXNTaG93bikge1xuICAgICAgdGhpcy5ub09wdGlvbnNGb3VuZC5lbWl0KHRlcm0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudCk7XG4gIH1cblxuICAvLyBTaW5nbGUgY2xlYXIgc2VsZWN0LlxuXG4gIG9uQ2xlYXJTZWxlY3Rpb25DbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNsZWFyQ2xpY2tlZCA9IHRydWU7XG4gICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIHRoaXMucGxhY2Vob2xkZXJWaWV3ID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBNdWx0aXBsZSBkZXNlbGVjdCBvcHRpb24uXG5cbiAgb25EZXNlbGVjdE9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5jbGVhckNsaWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgfVxuXG4gIC8qKiBBUEkuICoqL1xuXG4gIG9wZW4oKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYW55IHwgYW55W10ge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gdGhpcy5fdmFsdWUgOiB0aGlzLl92YWx1ZVswXTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkgfCBhbnlbXSkge1xuICAgIGlmICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCB2ID09PSAnJykge1xuICAgICAgdiA9IFtdO1xuICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgIHYgPSBbdl07XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0U2VsZWN0aW9uKHYpO1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRTZWxlY3Rpb24odmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHZhbHVlKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChzZWxlY3Rpb25WYWx1ZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX3NlbGVjdEJ5VmFsdWUoc2VsZWN0aW9uVmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdEJ5VmFsdWUodmFsdWVbMF0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdEJ5VmFsdWUodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IG1hdGNoaW5nT3B0aW9uID0gdGhpcy5vcHRpb25MaXN0Lm9wdGlvbnMuZmluZCgob3B0aW9uOiBPcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24udmFsdWUgIT09IG51bGwgJiYgdGhpcy5fY29tcGFyZVdpdGgob3B0aW9uLnZhbHVlLCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBpZiAobWF0Y2hpbmdPcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5zZWxlY3QobWF0Y2hpbmdPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHNlbGVjdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25MaXN0LmdldE9wdGlvbnNCeVZhbHVlKHZhbHVlKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSBtZXRob2RzLiAqKi9cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5oYXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLmhhc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMub3B0aW9uTGlzdC52YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCkge1xuICAgIHRoaXMucGxhY2Vob2xkZXJWaWV3ID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcldpZHRoKCk7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBJbml0aWFsaXphdGlvbi4gKiovXG5cbiAgdXBkYXRlT3B0aW9uc0xpc3Qob3B0aW9uczogQXJyYXk8SU9wdGlvbj4pIHtcbiAgICB0aGlzLm9wdGlvbkxpc3QgPSBuZXcgT3B0aW9uTGlzdChvcHRpb25zLCB0aGlzLm11bHRpcGxlKTtcbiAgICB0aGlzLl9zZXRTZWxlY3Rpb24odGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB1cGRhdGVMYWJlbFN0YXRlKCkge1xuICAgIGlmICghdGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5oYXNTZWxlY3RlZCAmJiAhdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMubGFiZWxBY3RpdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGFiZWxSZWZTdGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2Vob2xkZXIgJiYgIXRoaXMuaGFzU2VsZWN0ZWQgJiYgIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxSZWYsICdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmxhYmVsUmVmLCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERyb3Bkb3duLiAqKi9cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpIDogdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKSB7XG4gICAgLy8gd2Ugc2hvdWxkIG5vdCBzZXQgaGlnaGVyIHotaW5kZXggdmFsdWUgaGVyZVxuICAgIC8vIGJlY2F1c2UgZHJvcGRvd24gYWRkZWQgd2l0aCBhcHBlbmRUb0JvZHkgd2lsbCBiZSBvdmVybGFwZWQgYnkgc2VsZWN0IGlucHV0XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgJzEwMDAnKTtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9hcHBlbmREcm9wZG93bigpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgdGhpcy5hcHBlbmRUb0JvZHkgPyB0aGlzLl91cGRhdGVBcHBlbmRlZFBvc2l0aW9uKCkgOiB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICBbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKChldjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0Z1biA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsIGV2LCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLmlzQ2hpbGQoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgdGhpcy5pc09wZW4gJiZcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25BbmltYXRpb25Eb25lICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuZWwubmF0aXZlRWxlbWVudFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVySW5wdXQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxSZWZTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5vcGVuZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93bihmb2N1czogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKCdib2R5JywgdGhpcy5kcm9wZG93bi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3Q7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4Jyk7XG4gICAgY29udGFpbmVyLnJlbW92ZSgnZmFkZUluU2VsZWN0Jyk7XG5cbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuY2xlYXJGaWx0ZXJJbnB1dCgpO1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIGlmIChmb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlZC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuZG9jdW1lbnRDbGlja0Z1bigpO1xuXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFNlbGVjdC4gKiovXG5cbiAgc2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5zZWxlY3Qob3B0aW9uKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQob3B0aW9uLndyYXBwZWRPcHRpb24pO1xuICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlICYmICFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZGVzZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZGVzZWxlY3Qob3B0aW9uKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmhhc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KG9wdGlvbi53cmFwcGVkT3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3Rpb246IEFycmF5PE9wdGlvbj4gPSB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChzZWxlY3Rpb25bMF0ud3JhcHBlZE9wdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChcbiAgICAgICAgICBzZWxlY3Rpb24ubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLndyYXBwZWRPcHRpb247XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVTZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPyB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbikgOiB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgc2VsZWN0SGlnaGxpZ2h0ZWRPcHRpb24oKSB7XG4gICAgY29uc3Qgb3B0aW9uOiBPcHRpb24gPSB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0ZWRPcHRpb247XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgb3B0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgb3B0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpO1xuXG4gICAgICB0aGlzLmNhbk9wZW5PbkZvY3VzID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGRlc2VsZWN0TGFzdCgpIHtcbiAgICBjb25zdCBzZWw6IEFycmF5PE9wdGlvbj4gPSB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uO1xuXG4gICAgaWYgKHNlbC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvcHRpb246IE9wdGlvbiA9IHNlbFtzZWwubGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICB0aGlzLnNldE11bHRpcGxlRmlsdGVySW5wdXQob3B0aW9uLmxhYmVsICsgJyAnKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdEFsbChpc1NlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZFxuICAgICAgICAuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWRcbiAgICAgICAgLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgICAgLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGaWx0ZXIuICoqL1xuXG4gIGNsZWFyRmlsdGVySW5wdXQoKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGVhckZpbHRlcklucHV0KCk7XG4gICAgdGhpcy51cGRhdGVEcm9wZG93bkhlaWdodCgpO1xuICB9XG5cbiAgc2V0TXVsdGlwbGVGaWx0ZXJJbnB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VsZWN0Q29udGFpbmVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgaWYgKGtleSA9PT0gRVNDQVBFIHx8IChrZXkgPT09IFVQX0FSUk9XICYmIGV2ZW50LmFsdEtleSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIHRoaXMuY2FuT3Blbk9uRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFRBQikge1xuICAgICAgICAvLyBSZXN0b3JlIGZvY3VzIGZyb20gc2VhcmNoIGlucHV0IHRvIHNlbGVjdCBpbnB1dC4gRW5zdXJlcyB0aGF0IHRoZSBuZXh0XG4gICAgICAgIC8vIG9yIHByZXZpb3VzIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGNvcnJldGx5IG9uIHRhYiBvciBzaGlmdC10YWJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gRU5URVIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RIaWdobGlnaHRlZE9wdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCkge1xuICAgICAgICAgIHRoaXMuZHJvcGRvd24udXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFVQX0FSUk9XKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRQcmV2aW91c09wdGlvbigpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0TmV4dE9wdGlvbigpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXkgPT09IEVOVEVSIHx8IGtleSA9PT0gU1BBQ0UgfHwgKGtleSA9PT0gRE9XTl9BUlJPVyAmJiBldmVudC5hbHRLZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBrZXkgPSBldmVudC53aGljaDtcblxuICAgIGlmIChrZXkgPT09IEJBQ0tTUEFDRSkge1xuICAgICAgaWYgKHRoaXMuaGFzU2VsZWN0ZWQgJiYgdGhpcy5maWx0ZXJFbmFibGVkICYmIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdExhc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBrZXkgPSBldmVudC53aGljaDtcblxuICAgIGlmIChrZXkgPT09IEVTQ0FQRSB8fCBrZXkgPT09IFRBQiB8fCBrZXkgPT09IFVQX0FSUk9XIHx8IGtleSA9PT0gRE9XTl9BUlJPVyB8fCBrZXkgPT09IEVOVEVSKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBibHVyKCkge1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICB1cGRhdGVXaWR0aCgpIHtcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNpbmdsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5tdWx0aXBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZG9jRWw6IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIGxldCBlbFBvc2l0aW9uID0gMDtcbiAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICBlbFBvc2l0aW9uID1cbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tICtcbiAgICAgICAgICB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB9XG4gICAgICBjb25zdCBzZWxlY3RTcGFuID0gdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCBvcmlnaW5IZWlnaHQgPSB0aGlzLm91dGxpbmVcbiAgICAgICAgPyB0aGlzLk9VVExJTkVfRFJPUERPV05fVE9QX09GRlNFVFxuICAgICAgICA6IHNlbGVjdFNwYW4ub2Zmc2V0SGVpZ2h0O1xuICAgICAgdGhpcy5sZWZ0ID0gc2VsZWN0U3Bhbi5vZmZzZXRMZWZ0O1xuICAgICAgY29uc3QgYm90dG9tOiBhbnkgPSBkb2NFbC5zY3JvbGxUb3AgKyBkb2NFbC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBkcm9wZG93bkhlaWdodCA9XG4gICAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgPiB0aGlzLmRyb3Bkb3duSGVpZ2h0ID8gdGhpcy5kcm9wZG93bkhlaWdodCA6IHRoaXMuZHJvcGRvd25NYXhIZWlnaHQ7XG4gICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duSGVpZ2h0KCk7XG4gICAgICBpZiAoZWxQb3NpdGlvbiArIGRyb3Bkb3duSGVpZ2h0ID49IGJvdHRvbSkge1xuICAgICAgICB0aGlzLnRvcCA9IG9yaWdpbkhlaWdodCAtIGRyb3Bkb3duSGVpZ2h0IC0gdGhpcy5maWx0ZXJIZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcCA9IHRoaXMub3V0bGluZSA/IHNlbGVjdFNwYW4ub2Zmc2V0SGVpZ2h0ICsgdGhpcy5PVVRMSU5FX0RST1BET1dOX0JPVFRPTV9PRkZTRVQgOiAwO1xuICAgICAgfVxuICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUFwcGVuZGVkUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBzZWxlY3RSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCArIHNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHNlbGVjdFJlY3QuaGVpZ2h0O1xuICAgICAgY29uc3QgZHJvcGRvd25IZWlnaHQgPVxuICAgICAgICB0aGlzLmRyb3Bkb3duTWF4SGVpZ2h0ID4gdGhpcy5kcm9wZG93bkhlaWdodCA/IHRoaXMuZHJvcGRvd25IZWlnaHQgOiB0aGlzLmRyb3Bkb3duTWF4SGVpZ2h0O1xuXG4gICAgICB0aGlzLmxlZnQgPSBzZWxlY3RSZWN0LmxlZnQ7XG4gICAgICBpZiAoXG4gICAgICAgIG9mZnNldFRvcCArIGRyb3Bkb3duSGVpZ2h0ICsgdGhpcy5maWx0ZXJIZWlnaHQgPlxuICAgICAgICBzY3JvbGxUb3AgKyB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5vdXRsaW5lKSB7XG4gICAgICAgICAgdGhpcy50b3AgPVxuICAgICAgICAgICAgb2Zmc2V0VG9wIC0gZHJvcGRvd25IZWlnaHQgKyB0aGlzLk9VVExJTkVfRFJPUERPV05fVE9QX09GRlNFVCAtIHRoaXMuZmlsdGVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9wID0gb2Zmc2V0VG9wIC0gZHJvcGRvd25IZWlnaHQgKyBoZWlnaHQgLSB0aGlzLmZpbHRlckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLm91dGxpbmVcbiAgICAgICAgICA/IG9mZnNldFRvcCArIGhlaWdodCArIHRoaXMuT1VUTElORV9EUk9QRE9XTl9CT1RUT01fT0ZGU0VUXG4gICAgICAgICAgOiBvZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd24oKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuZHJvcGRvd24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2R5LCBkcm9wZG93bik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmlsdGVyV2lkdGgoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlcklucHV0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXRXaWR0aCA9XG4gICAgICAgIHZhbHVlLmxlbmd0aCA9PT0gMCA/IDEgKyB0aGlzLnBsYWNlaG9sZGVyVmlldy5sZW5ndGggKiAxMCA6IDEgKyB2YWx1ZS5sZW5ndGggKiAxMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==