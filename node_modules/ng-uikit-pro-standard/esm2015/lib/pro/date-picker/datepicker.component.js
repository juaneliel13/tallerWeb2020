/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, Renderer2, forwardRef, ViewChild, PLATFORM_ID, Inject, ChangeDetectionStrategy, ChangeDetectorRef, Optional, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LocaleService } from './services/datepickerLocale.service';
import { UtilService } from './services/datepickerUtil.service';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { MDB_DATE_OPTIONS } from './options.token';
import { ENTER, SPACE } from '../../free/utils/keyboard-navigation';
/** @type {?} */
export const MYDP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MDBDatePickerComponent)),
    multi: true,
};
/** @enum {number} */
const CalToggle = {
    Open: 1,
    CloseByDateSel: 2,
    CloseByCalBtn: 3,
    CloseByOutClick: 4,
};
CalToggle[CalToggle.Open] = 'Open';
CalToggle[CalToggle.CloseByDateSel] = 'CloseByDateSel';
CalToggle[CalToggle.CloseByCalBtn] = 'CloseByCalBtn';
CalToggle[CalToggle.CloseByOutClick] = 'CloseByOutClick';
/** @enum {number} */
const Year = {
    min: new Date().getFullYear() - 7,
    max: new Date().getFullYear() + 7,
};
Year[Year.min] = 'min';
Year[Year.max] = 'max';
/** @enum {number} */
const InputFocusBlur = {
    focus: 1,
    blur: 2,
};
InputFocusBlur[InputFocusBlur.focus] = 'focus';
InputFocusBlur[InputFocusBlur.blur] = 'blur';
/** @enum {number} */
const KeyCode = {
    enter: ENTER,
    space: SPACE,
};
KeyCode[KeyCode.enter] = 'enter';
KeyCode[KeyCode.space] = 'space';
/** @enum {number} */
const MonthId = {
    prev: 1,
    curr: 2,
    next: 3,
};
MonthId[MonthId.prev] = 'prev';
MonthId[MonthId.curr] = 'curr';
MonthId[MonthId.next] = 'next';
/** @type {?} */
let uniqueId = 0;
export class MDBDatePickerComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} localeService
     * @param {?} utilService
     * @param {?} cdRef
     * @param {?} _globalOptions
     * @param {?} document
     * @param {?} platformId
     */
    constructor(elem, renderer, localeService, utilService, cdRef, _globalOptions, document, platformId) {
        this.elem = elem;
        this.renderer = renderer;
        this.localeService = localeService;
        this.utilService = utilService;
        this.cdRef = cdRef;
        this._globalOptions = _globalOptions;
        this.document = document;
        this.label = '';
        this.placeholder = '';
        this.openOnFocus = true;
        this.outlineInput = false;
        this.inline = false;
        this.inlineIcon = 'far fa-calendar-alt';
        this.dateChanged = new EventEmitter();
        this.inputFieldChanged = new EventEmitter();
        this.calendarViewChanged = new EventEmitter();
        this.calendarToggle = new EventEmitter();
        this.inputFocusBlur = new EventEmitter();
        this.closeButtonClicked = new EventEmitter();
        this.clearButtonClicked = new EventEmitter();
        this.todayButtonClicked = new EventEmitter();
        this.isDateSelected = false;
        this.labelActive = false;
        this.showSelector = false;
        this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 1 };
        this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.selectionDayTxt = '';
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.weekDayOpts = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.editMonth = false;
        this.invalidMonth = false;
        this.editYear = false;
        this.invalidYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        this._uid = `mdb-datepicker-${uniqueId++}`;
        this.isOpen = false;
        this.isDisabled = false;
        this.tmp = {
            year: this.getToday().year,
            month: this.getToday().month,
            day: this.getToday().day,
        };
        // Default options
        this.opts = {
            startDate: (/** @type {?} */ ('')),
            closeAfterSelect: (/** @type {?} */ (false)),
            dayLabelsFull: (/** @type {?} */ ({})),
            dayLabels: (/** @type {?} */ ({})),
            monthLabelsFull: (/** @type {?} */ ({})),
            monthLabels: (/** @type {?} */ ({})),
            dateFormat: (/** @type {?} */ ('')),
            showTodayBtn: (/** @type {?} */ (true)),
            todayBtnTxt: (/** @type {?} */ ('')),
            firstDayOfWeek: (/** @type {?} */ ('')),
            sunHighlight: (/** @type {?} */ (true)),
            markCurrentDay: (/** @type {?} */ (true)),
            disableUntil: (/** @type {?} */ ({ year: 0, month: 0, day: 0 })),
            disableSince: (/** @type {?} */ ({ year: 0, month: 0, day: 0 })),
            disableDays: (/** @type {?} */ ([])),
            enableDays: (/** @type {?} */ ([])),
            editableDateField: (/** @type {?} */ (true)),
            markDates: (/** @type {?} */ ([])),
            markWeekends: (/** @type {?} */ ({})),
            disableDateRanges: (/** @type {?} */ ([])),
            disableWeekends: (/** @type {?} */ (false)),
            showWeekNumbers: (/** @type {?} */ (false)),
            height: (/** @type {?} */ ('32px')),
            width: (/** @type {?} */ ('100%')),
            selectionTxtFontSize: (/** @type {?} */ ('1rem')),
            showClearDateBtn: (/** @type {?} */ (true)),
            alignSelectorRight: (/** @type {?} */ (false)),
            disableHeaderButtons: (/** @type {?} */ (true)),
            minYear: (/** @type {?} */ (Year.min)),
            maxYear: (/** @type {?} */ (Year.max)),
            componentDisabled: (/** @type {?} */ (false)),
            showSelectorArrow: (/** @type {?} */ (true)),
            useDateObject: (/** @type {?} */ (false)),
            ariaLabelInputField: (/** @type {?} */ ('Date input field')),
            ariaLabelClearDate: (/** @type {?} */ ('Clear Date')),
            ariaLabelOpenCalendar: (/** @type {?} */ ('Open Calendar')),
            ariaLabelPrevMonth: (/** @type {?} */ ('Previous Month')),
            ariaLabelNextMonth: (/** @type {?} */ ('Next Month')),
            ariaLabelPrevYear: (/** @type {?} */ ('Previous Year')),
            ariaLabelNextYear: (/** @type {?} */ ('Next Year')),
        };
        this.months = [];
        this.years = [];
        this.firstTimeOpenedModal = true;
        this.modalHeightBefore = null;
        this.isMobile = null;
        this.isBrowser = false;
        this.onChangeCb = (/**
         * @return {?}
         */
        () => { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        () => { });
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        this.setLocaleOptions();
        renderer.listen(this.elem.nativeElement, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.showSelector &&
                event.target &&
                this.elem.nativeElement !== event.target &&
                !this.elem.nativeElement.contains(event.target)) {
                this.closeBtnClicked();
                this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                this.closeBtnClicked();
                this.cdRef.detectChanges();
            }
            if (true && event.target && this.elem.nativeElement.contains(event.target)) {
                this.resetMonthYearEdit();
                this.cdRef.detectChanges();
            }
        }));
        this.id = this.id;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value || this._uid;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.opts.startDate) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this.opts.startDate.toString().indexOf('T') !== -1) {
                    /** @type {?} */
                    const index = this.opts.startDate.toString().indexOf('T');
                    /** @type {?} */
                    const startDate = this.opts.startDate.toString().substr(0, index);
                    this.onUserDateInput(startDate);
                }
            }), 0);
        }
    }
    /**
     * @return {?}
     */
    ChangeZIndex() {
        if (this.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                // Fix for visible date / time picker input when picker plate is visible.
                try {
                    /** @type {?} */
                    const openedPicker = this.document.querySelector('.picker--opened');
                    /** @type {?} */
                    const allPickers = this.document.querySelectorAll('.picker');
                    allPickers.forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    (element) => {
                        this.renderer.setStyle(element, 'z-index', '0');
                    }));
                    // Change z-index from 100 to 1031 => Fix for problem
                    // when inline datepicker was rendered below footer with .fixed-bottom class
                    this.renderer.setStyle(openedPicker, 'z-index', '1031');
                }
                catch (error) { }
            }), 0);
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (this.inline) {
            this.setDisabled(isDisabled);
        }
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabled(isDisabled) {
        this.isDisabled = isDisabled;
        if (isDisabled) {
            this.inlineIcon += ' disabled grey-text';
        }
        else {
            /** @type {?} */
            const to = this.inlineIcon.indexOf('disabled');
            if (to >= 0) {
                this.inlineIcon = this.inlineIcon.substr(0, to);
                this.cdRef.detectChanges();
            }
        }
    }
    /**
     * @return {?}
     */
    removeInlineStyle() {
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                this.elem.nativeElement.parentElement.parentElement.style.height =
                    this.modalHeightBefore + 'px';
            }
        }
        catch (error) { }
        setTimeout((/**
         * @return {?}
         */
        () => {
            ((/** @type {?} */ (this.document.documentElement))).style.removeProperty('overflow');
        }), 155);
        this.labelActive = false;
    }
    /**
     * @return {?}
     */
    setLocaleOptions() {
        /** @type {?} */
        const opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            this.opts[k] = opts[k];
        }));
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    addLocale(locale) {
        this.localeService.locales = Object.assign({}, this.localeService.locales, locale);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setLocaleOptions();
        }), 0);
    }
    /**
     * @return {?}
     */
    setOptions() {
        /** @type {?} */
        const options = Object.assign({}, this._globalOptions, this.options);
        if (options && options !== undefined) {
            Object.keys(options).forEach((/**
             * @param {?} k
             * @return {?}
             */
            k => {
                this.opts[k] = options[k];
            }));
        }
        if (this.disabled !== undefined) {
            this.opts.componentDisabled = this.disabled;
        }
    }
    /**
     * @return {?}
     */
    resetMonthYearEdit() {
        this.editMonth = false;
        this.editYear = false;
        this.invalidMonth = false;
        this.invalidYear = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserDateInput(value) {
        this.invalidDate = false;
        if (value.length === 0) {
            this.clearDate();
        }
        else {
            /** @type {?} */
            const date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
            if (this.utilService.isInitializedDate(date)) {
                this.selectDate(date);
                this.setVisibleMonth();
            }
            else {
                this.invalidDate = true;
            }
        }
        if (this.invalidDate) {
            this.inputFieldChanged.emit({
                value: value,
                dateFormat: this.opts.dateFormat,
                valid: !(value.length === 0 || this.invalidDate),
            });
            this.onChangeCb('');
            this.onTouchedCb();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocusInput(event) {
        if (this.openOnFocus && !this.isOpen) {
            this.openBtnClicked();
        }
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        if (!this.inline) {
            ((/** @type {?} */ (this.document.documentElement))).style.overflow = 'hidden';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlurInput(event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserMonthInput(value) {
        this.invalidMonth = false;
        /** @type {?} */
        const m = this.utilService.isMonthLabelValid(value, this.opts.monthLabels);
        if (m !== -1) {
            this.editMonth = false;
            if (m !== this.visibleMonth.monthNbr) {
                this.visibleMonth = {
                    monthTxt: this.monthText(m),
                    monthNbr: m,
                    year: this.visibleMonth.year,
                };
                this.generateCalendar(m, this.visibleMonth.year, true);
            }
        }
        else {
            this.invalidMonth = true;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserYearInput(value) {
        this.invalidYear = false;
        /** @type {?} */
        const y = this.utilService.isYearLabelValid(Number(value), this.opts.minYear, this.opts.maxYear);
        if (y !== -1) {
            this.editYear = false;
            if (y !== this.visibleMonth.year) {
                this.visibleMonth = {
                    monthTxt: this.visibleMonth.monthTxt,
                    monthNbr: this.visibleMonth.monthNbr,
                    year: y,
                };
                this.generateCalendar(this.visibleMonth.monthNbr, y, true);
            }
        }
        else {
            this.invalidYear = true;
        }
    }
    /**
     * @return {?}
     */
    isTodayDisabled() {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    }
    /**
     * @return {?}
     */
    parseOptions() {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        this.isTodayDisabled();
        this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            /** @type {?} */
            let idx = this.dayIdx;
            for (let i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value && typeof value === 'string') {
            this.updateDateValue(this.parseSelectedDate(value), false);
        }
        else if (value && value['date']) {
            this.updateDateValue(this.parseSelectedDate(value['date']), false);
        }
        else if (value instanceof Date) {
            /** @type {?} */
            const date = { day: value.getDate(), month: value.getMonth() + 1, year: value.getFullYear() };
            this.updateDateValue(this.parseSelectedDate(date), false);
        }
        else if (value === '' || value === null) {
            this.selectedDate = { year: 0, month: 0, day: 0 };
            this.selectionDayTxt = '';
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('selector') && changes['selector'].currentValue > 0) {
            this.openBtnClicked();
        }
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
            this.setDisabled(this.disabled);
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.placeholder = changes['placeholder'].currentValue;
        }
        if (changes.hasOwnProperty('locale')) {
            this.locale = changes['locale'].currentValue;
            this.setLocaleOptions();
            this.updateDateValue(this.selectedDate, false);
        }
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
        }
        if (changes.hasOwnProperty('options')) {
            this.options = changes['options'].currentValue;
            if (changes.options.currentValue && changes.options.currentValue.startDate) {
                this.onUserDateInput(changes.options.currentValue.startDate);
            }
        }
        this.weekDays.length = 0;
        this.parseOptions();
        if (changes.hasOwnProperty('defaultMonth')) {
            /** @type {?} */
            const dm = changes['defaultMonth'].currentValue;
            if (dm !== null && dm !== undefined && dm !== '') {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
            }
        }
        if (changes.hasOwnProperty('selDate')) {
            /** @type {?} */
            const sd = changes['selDate'];
            if (sd.currentValue !== null &&
                sd.currentValue !== undefined &&
                sd.currentValue !== '' &&
                Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.onChangeCb(this.getDateModel(this.selectedDate));
                }));
                this.isDateSelected = true;
            }
            else {
                // Do not clear on init
                if (!sd.isFirstChange()) {
                    this.clearDate();
                }
            }
        }
        if (this.showSelector) {
            this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
    }
    /**
     * @return {?}
     */
    hideKeyboard() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const field = this.renderer.createElement('input');
                this.renderer.appendChild(this.elem.nativeElement, field);
                /** @type {?} */
                const inputReference = this.elem.nativeElement.lastElementChild;
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setStyle(inputReference, 'opacity', '0');
                this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                field.onfocus = (/**
                 * @return {?}
                 */
                () => {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.renderer.setStyle(field, 'display', 'none');
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            this.renderer.removeChild(this.elem.nativeElement, field);
                            this.document.body.focus();
                        }), 0);
                    }), 0);
                });
                field.focus();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    removeBtnClicked() {
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        this.isDateSelected = false;
        this.clearButtonClicked.emit(this);
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    closeBtnClicked() {
        this.showSelector = false;
        this.removeInlineStyle();
        this.isOpen = false;
        this.closeButtonClicked.emit(this);
        this.cdRef.markForCheck();
        this.documentClickFun();
    }
    /**
     * @return {?}
     */
    openBtnClicked() {
        this.isOpen = true;
        this.documentClickFun = this.renderer.listen('document', 'click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.isOpen &&
                this.pickerFrame &&
                this.inlineInput &&
                this.inlineIconToggle &&
                !this.inlineInput.nativeElement.contains(event.target) &&
                !this.pickerFrame.nativeElement.contains(event.target) &&
                !this.inlineIconToggle.nativeElement.contains(event.target)) {
                this.closeBtnClicked();
            }
        }));
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                if (this.firstTimeOpenedModal) {
                    this.modalHeightBefore = this.elem.nativeElement.parentElement.parentElement.offsetHeight;
                }
                this.firstTimeOpenedModal = false;
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                // tslint:disable-next-line:max-line-length
                this.elem.nativeElement.parentElement.parentElement.style.height =
                    this.modalHeightBefore + this.pickerFrame.nativeElement.offsetHeight + 'px';
            }
        }
        catch (error) { }
        // Open selector button clicked
        this.showSelector = !this.showSelector;
        if (this.showSelector) {
            this.setVisibleMonth();
            this.calendarToggle.emit(CalToggle.Open);
        }
        else {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        if (this.isMobile) {
            this.hideKeyboard();
        }
        this.labelActive = true;
        if (!this.inline) {
            this.ChangeZIndex();
        }
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    setVisibleMonth() {
        // Sets visible month of calendar
        /** @type {?} */
        let y = 0;
        /** @type {?} */
        let m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                /** @type {?} */
                const today = this.getToday();
                y = today.year;
                m = today.month;
            }
            else {
                y = this.selectedMonth.year;
                m = this.selectedMonth.monthNbr;
            }
        }
        else {
            y = this.selectedDate.year;
            m = this.selectedDate.month;
        }
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        // Create current month
        this.generateCalendar(m, y, true);
    }
    /**
     * @return {?}
     */
    monthList() {
        this.months = [];
        for (let i = 1; i <= 12; i++) {
            this.months.push({
                index: i,
                short: this.opts.monthLabels[i],
                label: this.opts.monthLabelsFull[i],
            });
        }
    }
    /**
     * @return {?}
     */
    yearsList() {
        this.years = [];
        /** @type {?} */
        const firstYear = this.opts.minYear;
        /** @type {?} */
        const lastYear = this.opts.maxYear;
        for (let i = firstYear; i <= lastYear; i++) {
            this.years.push(i);
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    prevMonth(event) {
        // Previous month from calendar
        /** @type {?} */
        const d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        /** @type {?} */
        const y = d.getFullYear();
        /** @type {?} */
        const m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
        // Prevents trigger (click) event when using Enter
        if (event.keyCode === ENTER) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    nextMonth(event) {
        // Next month from calendar
        /** @type {?} */
        const d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        /** @type {?} */
        const y = d.getFullYear();
        /** @type {?} */
        const m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
        // Prevents trigger (click) event when using Enter
        if (event.code === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    prevYear() {
        // Previous year from calendar
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    }
    /**
     * @return {?}
     */
    nextYear() {
        // Next year from calendar
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    }
    /**
     * @return {?}
     */
    todayClicked() {
        // Today button clicked
        /** @type {?} */
        const today = this.getToday();
        if (!this.utilService.isDisabledDay(today, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays)) {
            this.selectDate(today);
        }
        if (today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = {
                monthTxt: this.opts.monthLabels[today.month],
                monthNbr: today.month,
                year: today.year,
            };
            this.generateCalendar(today.month, today.year, true);
        }
        this.todayButtonClicked.emit(this);
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    cellClicked(cell) {
        // Cell clicked on the calendar
        if (cell.cmo === this.prevMonthId) {
            // Previous month day
            this.prevMonth();
        }
        else if (cell.cmo === this.currMonthId) {
            // Current month day - if date is already selected clear it
            if (cell.dateObj.year === this.selectedDate.year &&
                cell.dateObj.month === this.selectedDate.month &&
                cell.dateObj.day === this.selectedDate.day) {
                this.clearDate();
            }
            else {
                this.selectDate(cell.dateObj);
            }
        }
        else if (cell.cmo === this.nextMonthId) {
            // Next month day
            this.nextMonth();
        }
        this.resetMonthYearEdit();
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    cellKeyDown(event, cell) {
        // Cell keyboard handling
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.cellClicked(cell);
        }
    }
    /**
     * @return {?}
     */
    clearDate() {
        // Clears the date and notifies parent using callbacks and value accessor
        /** @type {?} */
        const date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: '', epoc: 0 });
        this.onChangeCb(null);
        this.onTouchedCb();
        this.updateDateValue(date, true);
        this.tmp = {
            year: this.getToday().year,
            month: this.getToday().month,
            day: this.getToday().day,
        };
        this.setVisibleMonth();
        this.labelActive = false;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectDate(date) {
        // Date selected, notifies parent using callbacks and value accessor
        this.tmp = date;
        /** @type {?} */
        const dateModel = this.getDateModel(date);
        this.dateChanged.emit({
            date: date,
            jsdate: this.getDate(date.year, date.month, date.day),
            previousDateFormatted: this.selectionDayTxt,
            actualDateFormatted: dateModel,
            epoc: Math.round(this.getTimeInMilliseconds(date) / 1000.0),
        });
        this.onChangeCb(dateModel);
        this.onTouchedCb();
        this.updateDateValue(date, false);
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByDateSel);
        }
        if (this.opts.closeAfterSelect) {
            this.closeBtnClicked();
        }
        this.labelActive = true;
    }
    /**
     * @param {?} date
     * @param {?} clear
     * @return {?}
     */
    updateDateValue(date, clear) {
        // Updates date values
        this.selectedDate = date;
        this.tmp = date;
        this.isDateSelected = true;
        this.selectionDayTxt = clear ? '' : this.formatDate(date);
        this.inputFieldChanged.emit({
            value: this.selectionDayTxt,
            dateFormat: this.opts.dateFormat,
            valid: !clear,
        });
        this.invalidDate = false;
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateModel(date) {
        /** @type {?} */
        const jsDate = this.getDate(date.year, date.month, date.day);
        /** @type {?} */
        const dateModel = this.opts.useDateObject ? jsDate : this.formatDate(date);
        return dateModel;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    preZero(val) {
        // Prepend zero if smaller than 10
        return parseInt(val, 0) < 10 ? '0' + val : val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    formatDate(val) {
        // Returns formatted date string, if mmm is part of dateFormat returns month as a string
        // days
        /** @type {?} */
        const d = val.day;
        // 1 - 31
        /** @type {?} */
        const dd = this.preZero(val.day);
        // 01 - 31
        /** @type {?} */
        const ddd = this.opts.dayLabels[this.getWeekday(val)];
        // Sun-Sat
        /** @type {?} */
        const dddd = this.opts.dayLabelsFull[this.getWeekday(val)];
        // Sunday – Saturday
        /** @type {?} */
        const m = val.month;
        // 1 - 12
        /** @type {?} */
        const mm = this.preZero(val.month);
        // 01 - 12
        /** @type {?} */
        const mmm = this.getMonthShort(val.month);
        // Jan - Dec
        /** @type {?} */
        const mmmm = this.getMonthFull(val.month);
        // January – December
        /** @type {?} */
        const yy = val.year.toString().length === 2 ? val.year : val.year.toString().slice(2, 4);
        // 00 - 99
        /** @type {?} */
        const yyyy = val.year;
        /** @type {?} */
        const toReplace = this.opts.dateFormat.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        /** @type {?} */
        let formatted = '';
        toReplace.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            switch (el) {
                case 'dddd':
                    el = el.replace(el, dddd);
                    break;
                case 'ddd':
                    el = el.replace(el, ddd);
                    break;
                case 'dd':
                    el = el.replace(el, dd);
                    break;
                case 'd':
                    el = el.replace(el, d);
                    break;
                case 'mmmm':
                    el = el.replace(el, mmmm);
                    break;
                case 'mmm':
                    el = el.replace(el, mmm);
                    break;
                case 'mm':
                    el = el.replace(el, mm);
                    break;
                case 'm':
                    el = el.replace(el, m);
                    break;
                case 'yyyy':
                    el = el.replace(el, yyyy);
                    break;
                case 'yy':
                    el = el.replace(el, yy);
                    break;
            }
            formatted += el;
        }));
        return formatted;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    monthText(m) {
        // Returns month as a text
        return this.opts.monthLabels[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    weekText(m) {
        // Returns month as a text
        return this.opts.dayLabelsFull[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    getMonthShort(m) {
        return this.opts.monthLabels[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    getMonthFull(m) {
        return this.opts.monthLabelsFull[m];
    }
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    monthStartIdx(y, m) {
        // Month start index
        /** @type {?} */
        const d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        /** @type {?} */
        const idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    daysInMonth(m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    daysInPrevMonth(m, y) {
        // Return number of days of the previous month
        /** @type {?} */
        const d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    }
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} cmo
     * @param {?} today
     * @return {?}
     */
    isCurrDay(d, m, y, cmo, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    }
    /**
     * @return {?}
     */
    getToday() {
        /** @type {?} */
        const date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTimeInMilliseconds(date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekday(date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.utilService.getDayNumber(date)];
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    getDate(year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }
    /**
     * @return {?}
     */
    sundayIdx() {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    generateCalendar(m, y, notifyChange) {
        this.dates.length = 0;
        /** @type {?} */
        const today = this.getToday();
        /** @type {?} */
        const monthStart = this.monthStartIdx(y, m);
        /** @type {?} */
        const dInThisM = this.daysInMonth(m, y);
        /** @type {?} */
        const dInPrevM = this.daysInPrevMonth(m, y);
        /** @type {?} */
        let dayNbr = 1;
        /** @type {?} */
        let cmo = this.prevMonthId;
        for (let i = 1; i < 7; i++) {
            /** @type {?} */
            const week = [];
            if (i === 1) {
                // First week
                /** @type {?} */
                const pm = dInPrevM - monthStart + 1;
                // Previous month
                for (let j = pm; j <= dInPrevM; j++) {
                    /** @type {?} */
                    const date = { year: y, month: m - 1, day: j };
                    week.push({
                        dateObj: date,
                        cmo: cmo,
                        currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                    });
                }
                cmo = this.currMonthId;
                // Current month
                /** @type {?} */
                const daysLeft = 7 - week.length;
                for (let j = 0; j < daysLeft; j++) {
                    /** @type {?} */
                    const date = { year: y, month: m, day: dayNbr };
                    week.push({
                        dateObj: date,
                        cmo: cmo,
                        currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                    });
                    dayNbr++;
                }
            }
            else {
                // Rest of the weeks
                for (let j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    /** @type {?} */
                    const date = {
                        year: y,
                        month: cmo === this.currMonthId ? m : m + 1,
                        day: dayNbr,
                    };
                    week.push({
                        dateObj: date,
                        cmo: cmo,
                        currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                    });
                    dayNbr++;
                }
            }
            /** @type {?} */
            const weekNbr = this.opts.showWeekNumbers && this.opts.firstDayOfWeek === 'mo'
                ? this.utilService.getWeekNumber(week[0].dateObj)
                : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            // Notify parent
            this.calendarViewChanged.emit({
                year: y,
                month: m,
                first: {
                    number: 1,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: 1,
                    }),
                },
                last: {
                    number: dInThisM,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: dInThisM,
                    }),
                },
            });
        }
        this.monthList();
        this.yearsList();
    }
    /**
     * @param {?} selDate
     * @return {?}
     */
    parseSelectedDate(selDate) {
        // Parse selDate value - it can be string or IMyDate object
        // Removes everything from selDate if it's ISO date format to allow to use ISO date in date picker
        if (selDate.toString().indexOf('T') !== -1) {
            selDate = selDate.substr(0, selDate.indexOf('T'));
        }
        /** @type {?} */
        let date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === 'string') {
            /** @type {?} */
            const sd = (/** @type {?} */ (selDate));
            /** @type {?} */
            const df = this.opts.dateFormat;
            /** @type {?} */
            const delimeters = this.utilService.getDateFormatDelimeters(df);
            /** @type {?} */
            const dateValue = this.utilService.getDateValue(sd, df, delimeters);
            date.year = this.utilService.getNumberByValue(dateValue[0]);
            if (df.indexOf('mmmm') !== -1) {
                date.month = this.utilService.getMonthNumberByMonthName(dateValue[1], this.opts.monthLabelsFull);
            }
            else if (df.indexOf('mmm') !== -1) {
                date.month = this.utilService.getMonthNumberByMonthName(dateValue[1], this.opts.monthLabels);
            }
            else {
                date.month = this.utilService.getNumberByValue(dateValue[1]);
            }
            date.day = this.utilService.getNumberByValue(dateValue[2]);
        }
        else if (typeof selDate === 'object') {
            date = selDate;
        }
        this.selectionDayTxt = this.formatDate(date);
        return date;
    }
    /**
     * @param {?} ms
     * @return {?}
     */
    parseSelectedMonth(ms) {
        return this.utilService.parseDefaultMonth(ms);
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    setHeaderBtnDisabledState(m, y) {
        /** @type {?} */
        let dpm = false;
        /** @type {?} */
        let dpy = false;
        /** @type {?} */
        let dnm = false;
        /** @type {?} */
        let dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({
                year: m === 1 ? y - 1 : y,
                month: m === 1 ? 12 : m - 1,
                day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y),
            }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({
                year: y - 1,
                month: m,
                day: this.daysInMonth(m, y - 1),
            }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({
                year: m === 12 ? y + 1 : y,
                month: m === 12 ? 1 : m + 1,
                day: 1,
            }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = (m === 1 && y === this.opts.minYear) || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = (m === 12 && y === this.opts.maxYear) || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    }
    /**
     * @return {?}
     */
    checkActive() {
        if (this.placeholder.length > 0) {
            return true;
        }
        if (this.labelActive) {
            return true;
        }
        if (this.isDateSelected) {
            return true;
        }
        return false;
    }
    // INLINE DATE PICKER
    /**
     * @return {?}
     */
    toggleInlineDatePicker() {
        if (this.isOpen) {
            this.closeBtnClicked();
        }
        else {
            this.openBtnClicked();
        }
    }
}
MDBDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-date-picker',
                exportAs: 'mdbdatepicker',
                template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. -->\r\n<div\r\n  class=\"mydp picker\"\r\n  [ngClass]=\"{ 'picker--opened': showSelector }\"\r\n  [ngStyle]=\"{ width: opts.width }\"\r\n  *ngIf=\"!inline\"\r\n>\r\n  <div class=\"md-form\" [ngClass]=\"{ 'md-outline': outlineInput }\">\r\n    <input\r\n      [id]=\"id\"\r\n      type=\"text\"\r\n      class=\"form-control mydp-date\"\r\n      [readonly]=\"!opts.editableDateField\"\r\n      [attr.aria-label]=\"opts.ariaLabelInputField\"\r\n      (mousedown)=\"openBtnClicked()\"\r\n      [attr.maxlength]=\"opts.dateFormat.length\"\r\n      [ngClass]=\"{\r\n        selectiondisabled: opts.componentDisabled,\r\n        disabled: opts.componentDisabled\r\n      }\"\r\n      placeholder=\"{{ placeholder }}\"\r\n      [ngModel]=\"selectionDayTxt\"\r\n      (ngModelChange)=\"onUserDateInput($event)\"\r\n      [value]=\"selectionDayTxt\"\r\n      [ngStyle]=\"{\r\n        'font-size': opts.selectionTxtFontSize\r\n      }\"\r\n      (blur)=\"onBlurInput($event)\"\r\n      (focus)=\"onFocusInput($event)\"\r\n      [disabled]=\"opts.componentDisabled || isDisabled\"\r\n      autocomplete=\"off\"\r\n      [tabindex]=\"tabIndex\"\r\n    />\r\n    <label\r\n      [for]=\"id\"\r\n      (click)=\"openBtnClicked()\"\r\n      *ngIf=\"label.length > 0\"\r\n      [ngClass]=\"{\r\n        active: checkActive(),\r\n        disabled: opts.componentDisabled\r\n      }\"\r\n      >{{ label }}</label\r\n    >\r\n  </div>\r\n  <div\r\n    *ngIf=\"showSelector\"\r\n    class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\"\r\n    #divFocus\r\n    [ngClass]=\"{ alignselectorright: opts.alignSelectorRight }\"\r\n    tabindex=\"0\"\r\n  >\r\n    <div class=\"picker__frame picker__box\" #pickerFrame>\r\n      <div class=\"picker__header\">\r\n        <div class=\"picker__date-display\">\r\n          <div class=\"picker__weekday-display\">\r\n            {{ weekText(getWeekday(tmp)) }}\r\n          </div>\r\n          <div class=\"picker__month-display\">\r\n            <div>{{ monthText(tmp.month) }}</div>\r\n          </div>\r\n          <div class=\"picker__day-display\">\r\n            <div>{{ tmp.day }}</div>\r\n          </div>\r\n          <div class=\"picker__year-display\">\r\n            <div>{{ tmp.year }}</div>\r\n          </div>\r\n        </div>\r\n        <select\r\n          class=\"picker__select--year\"\r\n          [(ngModel)]=\"visibleMonth.year\"\r\n          (ngModelChange)=\"onUserYearInput($event)\"\r\n          role=\"menu\"\r\n          aria-label=\"Year selector\"\r\n        >\r\n          <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n        </select>\r\n        <select\r\n          class=\"picker__select--month\"\r\n          [(ngModel)]=\"visibleMonth.monthTxt\"\r\n          (ngModelChange)=\"onUserMonthInput($event)\"\r\n          role=\"menu\"\r\n          aria-label=\"Month selector\"\r\n        >\r\n          <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n        </select>\r\n        <a\r\n          href=\"javascript:;\"\r\n          role=\"button\"\r\n          class=\"picker__nav--prev black-text\"\r\n          data-nav=\"-1\"\r\n          aria-controls=\"date-picker-example_table\"\r\n          title=\"Previous month\"\r\n          (click)=\"prevMonth($event)\"\r\n          (keydown.enter)=\"prevMonth($event)\"\r\n          [ngClass]=\"{\r\n            headerbtnenabled: !prevMonthDisabled,\r\n            headerbtndisabled: prevMonthDisabled,\r\n            'disabled grey-text': prevMonthDisabled\r\n          }\"\r\n        ></a>\r\n        <a\r\n          role=\"button\"\r\n          href=\"javascript:;\"\r\n          class=\"picker__nav--next black-text\"\r\n          data-nav=\"1\"\r\n          aria-controls=\"date-picker-example_table\"\r\n          title=\"Next month\"\r\n          (click)=\"nextMonth($event)\"\r\n          (keydown.enter)=\"nextMonth($event)\"\r\n          [ngClass]=\"{\r\n            headerbtnenabled: !nextMonthDisabled,\r\n            headerbtndisabled: nextMonthDisabled,\r\n            'disabled grey-text': nextMonthDisabled\r\n          }\"\r\n        ></a>\r\n      </div>\r\n      <table class=\"picker__table\">\r\n        <thead>\r\n          <tr>\r\n            <th\r\n              class=\"picker__weekday weekdaytitleweeknbr\"\r\n              *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n            >\r\n              #\r\n            </th>\r\n            <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{ d }}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let w of dates\">\r\n            <td\r\n              class=\"picker__day daycellweeknbr\"\r\n              *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n            >\r\n              {{ w.weekNbr }}\r\n            </td>\r\n            <td\r\n              class=\"picker__day\"\r\n              *ngFor=\"let d of w.week\"\r\n              [ngClass]=\"{\r\n                'picker__day--infocus': d.cmo === currMonthId && !d.disabled,\r\n                disabled: d.disabled,\r\n                tablesingleday: d.cmo === currMonthId && !d.disabled\r\n              }\"\r\n            >\r\n              <div\r\n                *ngIf=\"d.markedDate.marked\"\r\n                class=\"markdate\"\r\n                [ngStyle]=\"{ 'background-color': d.markedDate.color }\"\r\n              ></div>\r\n              <div\r\n                class=\"picker__day\"\r\n                [ngClass]=\"{\r\n                  'picker__day--infocus': d.cmo === currMonthId,\r\n                  'picker__day--outfocus': d.cmo === nextMonthId || d.cmo === prevMonthId,\r\n                  'picker__day--today': d.currDay && opts.markCurrentDay,\r\n                  'picker__day--selected picker__day--highlighted':\r\n                    selectedDate.day === d.dateObj.day &&\r\n                    selectedDate.month === d.dateObj.month &&\r\n                    selectedDate.year === d.dateObj.year &&\r\n                    d.cmo === currMonthId\r\n                }\"\r\n                (click)=\"!d.disabled && cellClicked(d); $event.stopPropagation()\"\r\n                (keydown)=\"cellKeyDown($event, d)\"\r\n                tabindex=\"0\"\r\n              >\r\n                {{ d.dateObj.day }}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"picker__footer\">\r\n        <button\r\n          type=\"button\"\r\n          *ngIf=\"opts.showTodayBtn\"\r\n          class=\"picker__button--today\"\r\n          (click)=\"todayClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.todayBtnTxt\"\r\n        >\r\n          {{ opts.todayBtnTxt }}\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          *ngIf=\"opts.showClearDateBtn\"\r\n          class=\"picker__button--clear\"\r\n          (click)=\"removeBtnClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.clearBtnTxt\"\r\n        >\r\n          {{ opts.clearBtnTxt }}\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [ngClass]=\"{ 'ml-auto': !opts.showTodayBtn }\"\r\n          class=\"picker__button--close\"\r\n          (click)=\"closeBtnClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.closeBtnTxt\"\r\n        >\r\n          {{ opts.closeBtnTxt }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  class=\"md-form my-0 d-flex align-items-center justify-content-center\"\r\n  *ngIf=\"inline\"\r\n  [ngClass]=\"{ 'md-outline': outlineInput }\"\r\n>\r\n  <input\r\n    #inlineInput\r\n    [id]=\"id\"\r\n    type=\"text\"\r\n    class=\"form-control mydp-date\"\r\n    [readonly]=\"!opts.editableDateField\"\r\n    [attr.aria-label]=\"opts.ariaLabelInputField\"\r\n    [attr.maxlength]=\"opts.dateFormat.length\"\r\n    [ngClass]=\"{\r\n      selectiondisabled: opts.componentDisabled,\r\n      disabled: opts.componentDisabled\r\n    }\"\r\n    placeholder=\"{{ placeholder }}\"\r\n    [ngModel]=\"selectionDayTxt\"\r\n    (ngModelChange)=\"onUserDateInput($event)\"\r\n    [value]=\"selectionDayTxt\"\r\n    [ngStyle]=\"{\r\n      'font-size': opts.selectionTxtFontSize\r\n    }\"\r\n    (focus)=\"onFocusInput($event)\"\r\n    (blur)=\"onBlurInput($event)\"\r\n    [disabled]=\"opts.componentDisabled || isDisabled\"\r\n    autocomplete=\"off\"\r\n    [tabindex]=\"tabIndex\"\r\n  />\r\n  <label\r\n    [for]=\"id\"\r\n    (click)=\"openBtnClicked()\"\r\n    *ngIf=\"label.length > 0\"\r\n    [ngClass]=\"{\r\n      active: checkActive(),\r\n      disabled: opts.componentDisabled\r\n    }\"\r\n    >{{ label }}</label\r\n  >\r\n  <i\r\n    [ngClass]=\"inlineIcon\"\r\n    #inlineIconToggle\r\n    class=\"datepicker-inline-icon\"\r\n    (click)=\"toggleInlineDatePicker()\"\r\n  ></i>\r\n</div>\r\n<div\r\n  class=\"mydp picker datepicker-inline\"\r\n  [ngClass]=\"{ 'picker--opened': showSelector }\"\r\n  *ngIf=\"inline && isOpen\"\r\n>\r\n  <div class=\"picker__frame picker__box z-depth-1\" #pickerFrame [ngClass]=\"{ 'd-none': !isOpen }\">\r\n    <div class=\"picker__header d-flex flex-center\">\r\n      <select\r\n        class=\"picker__select--year\"\r\n        [(ngModel)]=\"visibleMonth.year\"\r\n        (ngModelChange)=\"onUserYearInput($event)\"\r\n        role=\"menu\"\r\n        aria-label=\"Year selector\"\r\n      >\r\n        <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n      </select>\r\n      <select\r\n        class=\"picker__select--month\"\r\n        [(ngModel)]=\"visibleMonth.monthTxt\"\r\n        (ngModelChange)=\"onUserMonthInput($event)\"\r\n        role=\"menu\"\r\n        aria-label=\"Month selector\"\r\n      >\r\n        <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n      </select>\r\n      <a\r\n        href=\"javascript:;\"\r\n        role=\"button\"\r\n        class=\"picker__nav--prev black-text\"\r\n        data-nav=\"-1\"\r\n        aria-controls=\"date-picker-example_table\"\r\n        title=\"Previous month\"\r\n        (click)=\"prevMonth($event)\"\r\n        (keydown.enter)=\"prevMonth($event)\"\r\n        [ngClass]=\"{\r\n          headerbtnenabled: !prevMonthDisabled,\r\n          headerbtndisabled: prevMonthDisabled,\r\n          'disabled grey-text': prevMonthDisabled\r\n        }\"\r\n      ></a>\r\n      <a\r\n        href=\"javascript:;\"\r\n        role=\"button\"\r\n        class=\"picker__nav--next black-text\"\r\n        data-nav=\"1\"\r\n        aria-controls=\"date-picker-example_table\"\r\n        title=\"Next month\"\r\n        (click)=\"nextMonth($event)\"\r\n        (keydown.enter)=\"nextMonth($event)\"\r\n        [ngClass]=\"{\r\n          headerbtnenabled: !nextMonthDisabled,\r\n          headerbtndisabled: nextMonthDisabled,\r\n          'disabled grey-text': nextMonthDisabled\r\n        }\"\r\n      ></a>\r\n    </div>\r\n    <table class=\"picker__table\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"picker__weekday weekdaytitleweeknbr\"\r\n            *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n          >\r\n            #\r\n          </th>\r\n          <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{ d }}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let w of dates\">\r\n          <td\r\n            class=\"picker__day daycellweeknbr\"\r\n            *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n          >\r\n            {{ w.weekNbr }}\r\n          </td>\r\n          <td\r\n            class=\"picker__day\"\r\n            *ngFor=\"let d of w.week\"\r\n            [ngClass]=\"{\r\n              'picker__day--infocus': d.cmo === currMonthId && !d.disabled,\r\n              disabled: d.disabled,\r\n              tablesingleday: d.cmo === currMonthId && !d.disabled\r\n            }\"\r\n          >\r\n            <div\r\n              *ngIf=\"d.markedDate.marked\"\r\n              class=\"markdate\"\r\n              [ngStyle]=\"{ 'background-color': d.markedDate.color }\"\r\n            ></div>\r\n            <div\r\n              class=\"picker__day\"\r\n              [ngClass]=\"{\r\n                'picker__day--infocus': d.cmo === currMonthId,\r\n                'picker__day--outfocus': d.cmo === nextMonthId || d.cmo === prevMonthId,\r\n                'picker__day--today': d.currDay && opts.markCurrentDay,\r\n                'picker__day--selected picker__day--highlighted':\r\n                  selectedDate.day === d.dateObj.day &&\r\n                  selectedDate.month === d.dateObj.month &&\r\n                  selectedDate.year === d.dateObj.year &&\r\n                  d.cmo === currMonthId\r\n              }\"\r\n              (click)=\"!d.disabled && cellClicked(d); $event.stopPropagation()\"\r\n              (keydown)=\"cellKeyDown($event, d)\"\r\n              tabindex=\"0\"\r\n            >\r\n              {{ d.dateObj.day }}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"picker__footer\">\r\n      <button\r\n        type=\"button\"\r\n        *ngIf=\"opts.showTodayBtn\"\r\n        class=\"picker__button--today\"\r\n        (click)=\"todayClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.todayBtnTxt\"\r\n      >\r\n        {{ opts.todayBtnTxt }}\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        *ngIf=\"opts.showClearDateBtn\"\r\n        class=\"picker__button--clear\"\r\n        (click)=\"removeBtnClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.clearBtnTxt\"\r\n      >\r\n        {{ opts.clearBtnTxt }}\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        [ngClass]=\"{ 'ml-auto': !opts.showTodayBtn }\"\r\n        class=\"picker__button--close\"\r\n        (click)=\"closeBtnClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.closeBtnTxt\"\r\n      >\r\n        {{ opts.closeBtnTxt }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                providers: [UtilService, MYDP_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;/*!\n   * Default mobile-first, responsive styling for pickadate.js\n   * Demo: http://amsul.github.io/pickadate.js\n   */z-index:90;font-size:15px;text-align:left;line-height:1.2;color:#000;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker .picker__holder{width:100%;overflow-scrolling:touch;position:fixed;transition:background .15s ease-out,top .15s;-webkit-backface-visibility:hidden;backface-visibility:hidden}.picker .picker__frame,.picker .picker__holder{bottom:0;left:0;right:0;top:100%}.picker .picker__frame{position:absolute;margin:0 auto;min-width:16rem;max-width:20.3125rem;width:18.75rem;max-height:21.875rem;opacity:0;transition:.15s ease-out}@media (min-height:40.125em){.picker .picker__frame{margin-bottom:7.5%}}.picker .picker__frame .picker__wrap{display:table;width:100%;height:100%}.picker .picker__box{background:#fff;display:table-cell;vertical-align:middle}@media (min-height:28.875em){.picker .picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}.picker .picker__frame .picker__wrap{display:block}.picker .picker__box{display:block;border:1px solid #777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 .75rem 2.25rem 1rem rgba(0,0,0,.24)}}.picker--opened .picker__holder{top:0;background:rgba(0,0,0,.32);zoom:1;transition:background .15s ease-out}.picker--opened .picker__frame{top:0;opacity:1}@media (min-height:35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.datepicker.picker__input.picker__input--active,.timepicker.picker__input.picker__input--active{border-bottom:1px solid #e3f2fd}.picker__box{padding:0;border-radius:.125rem;overflow:hidden}.picker__box .picker__header{text-align:center;position:relative;margin-bottom:1.25rem}.picker__box .picker__header select{display:inline-block!important}.picker__box .picker__header .picker__date-display{display:flex;justify-content:center;background-color:#4285f4;color:#fff;font-weight:400;padding-bottom:.3125rem}.picker__box .picker__header .picker__date-display .picker__weekday-display{padding:.875rem .4375rem .3125rem .5rem;letter-spacing:.5;font-size:2.1rem;margin-top:1.25rem}.picker__box .picker__header .picker__date-display .picker__day-display,.picker__box .picker__header .picker__date-display .picker__month-display{font-size:2.1rem;padding:.875rem .3125rem .25rem;margin-top:1.25rem}.picker__box .picker__header .picker__date-display .picker__year-display{font-size:1.1rem;color:rgba(255,255,255,.4);position:absolute;top:.625rem;left:45%}.picker__box .picker__header .picker__month,.picker__box .picker__header .picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__box .picker__header .picker__select--month,.picker__box .picker__header .picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em;display:inline-block;border:none;background:0 0;border-bottom:1px solid #ced4da;outline:0}.picker__box .picker__header .picker__select--month:focus,.picker__box .picker__header .picker__select--year:focus{border-color:rgba(0,0,0,.05)}.picker__box .picker__header .picker__select--year{width:30%}.picker__box .picker__header .picker__select--month.browser-default{display:inline;background-color:red;width:40%}.picker__box .picker__header .picker__select--year.browser-default{display:inline;background-color:red;width:25%}.picker__box .picker__header .picker__nav--next,.picker__box .picker__header .picker__nav--prev{position:absolute;padding:.1875rem .625rem;box-sizing:content-box}.picker__box .picker__header .picker__nav--next:hover,.picker__box .picker__header .picker__nav--prev:hover{cursor:pointer;color:#000}.picker__box .picker__header .picker__nav--prev{left:-.5em;padding-right:1.25em}.picker__box .picker__header .picker__nav--prev:before{content:'\\f104'}.picker__box .picker__header .picker__nav--next{right:-.2em;padding-left:1.25em}.picker__box .picker__header .picker__nav--next:before{content:'\\f105'}.picker__box .picker__header .picker__nav--disabled,.picker__box .picker__header .picker__nav--disabled:before,.picker__box .picker__header .picker__nav--disabled:before:hover,.picker__box .picker__header .picker__nav--disabled:hover{cursor:default;background:0 0;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__box .picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__box .picker__table td,.picker__box .picker__table th{text-align:center}.picker__box .picker__table td{margin:0;padding:0}.picker__box .picker__table .picker__weekday{width:14%;font-size:.9em;padding-bottom:.25em;color:#999;font-weight:500}@media (min-height:33.875em){.picker__box .picker__table .picker__weekday{padding-bottom:.25em}}.picker__box .picker__table .picker__day--today{position:relative;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__box .picker__table .picker__day.picker__day--today{color:#4285f4}.picker__box .picker__table .picker__day--disabled:before{border-top-color:#aaa}.picker__box .picker__table .picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:#595959}.picker__box .picker__table .picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__box .picker__table .picker__day--outfocus{display:none;padding:.75rem 0;color:#fff}.picker__box .picker__table .picker__day--outfocus:hover{cursor:pointer;color:#ddd;font-weight:500}.picker__box .picker__table .picker--focused .picker__day--highlighted,.picker__box .picker__table .picker__day--highlighted:hover{cursor:pointer}.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--selected,.picker__box .picker__table .picker__day--selected:hover{border-radius:50%;-webkit-transform:scale(.9);transform:scale(.9);background-color:#4285f4;color:#fff!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.picker__box .picker__table .picker--focused.picker__day--outfocus,.picker__box .picker__table .picker__day--selected.picker__day--outfocus,.picker__box .picker__table .picker__day--selected:hover.picker__day--outfocus{background-color:#ecf2fc}.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--disabled,.picker__box .picker__table .picker__day--disabled:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__box .picker__table .picker__day--highlighted.picker__day--disabled,.picker__box .picker__table .picker__day--highlighted.picker__day--disabled:hover{background:#bbb}.picker__box .picker__footer{text-align:right;padding:.3125rem .625rem;display:flex;align-items:center;justify-content:space-between}.picker__box .picker__footer .picker__button--clear,.picker__box .picker__footer .picker__button--close,.picker__box .picker__footer .picker__button--today{border:1px solid #fff;background:#fff;font-size:.8em;padding:1rem 0 .7rem;font-weight:700;width:33%;display:inline-block;vertical-align:bottom;text-transform:uppercase}.picker__box .picker__footer .picker__button--clear:hover,.picker__box .picker__footer .picker__button--close:hover,.picker__box .picker__footer .picker__button--today:hover{cursor:pointer;color:#000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__box .picker__footer .picker__button--clear:focus,.picker__box .picker__footer .picker__button--close:focus,.picker__box .picker__footer .picker__button--today:focus{background:#b1dcfb;border-color:rgba(0,0,0,.05);outline:0}.picker__box .picker__footer .picker__button--clear:before,.picker__box .picker__footer .picker__button--close:before,.picker__box .picker__footer .picker__button--today:before{position:relative;display:inline-block;height:0}.picker__box .picker__footer .picker__button--clear:before,.picker__box .picker__footer .picker__button--today:before{content:' ';margin-right:.45em}.picker__box .picker__footer .picker__button--today:before{top:-.05em;width:0;border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker__box .picker__footer .picker__button--clear:before{top:-.25em;width:.66em;border-top:3px solid #e20}.picker__box .picker__footer .picker__button--close:before{content:'\\D7';top:-.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777}.picker__box .picker__footer .picker__button--today[disabled],.picker__box .picker__footer .picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__box .picker__footer .picker__button--today[disabled]:before{border-top-color:#aaa}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__select--month,.picker__select--year{display:inline-block!important;height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker .picker__holder{overflow-y:visible;display:none}.picker.picker--opened .picker__holder{display:block}.picker__box .picker__table td.picker__day div.picker__day{border-radius:50%}.picker__day-display,.picker__month-display,.picker__weekday-display{font-size:2rem!important}.clockpicker-am-pm-block button{color:#fff!important}.mydp{line-height:1.1;display:inline-block;position:relative;border-radius:4px}.mydp label{-webkit-transform:translateY(15px);transform:translateY(15px)}.mydp label.active{font-size:.8rem;-webkit-transform:translateY(-7px);transform:translateY(-7px)}.picker__frame{min-height:506.45px}.picker__nav--next,.picker__nav--prev{position:absolute;padding:.5em 1.55em;width:1em;height:1em;box-sizing:content-box;bottom:0;border:0;background:0 0}.picker__nav--next:before,.picker__nav--prev:before{font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important}.picker__nav--prev{padding-right:1.25em;left:0!important}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__box .picker__header .picker__nav--next:before,.picker__box .picker__header .picker__nav--prev:before{font-family:unset;font-weight:unset;content:unset;display:none}.picker__box .picker__header .picker__nav--next:after,.picker__box .picker__header .picker__nav--prev:after{content:'';display:block;border-style:solid;border-width:0 2px 2px 0;padding:2.5px;position:absolute}.picker__nav--prev::after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.picker__nav--next::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.picker__header{overflow:hidden}.picker__box .picker__table td.picker__day{padding:0;position:relative}.picker__box .picker__table td.picker__day.disabled{color:#ccc;background:#eee}.picker__box .picker__table td.picker__day div.picker__day{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent;outline:0;transition:.3s}.picker__box .picker__table td.picker__day div.picker__day:focus,.picker__box .picker__table td.picker__day div.picker__day:hover{cursor:pointer;color:#000;font-weight:500}.picker__box .picker__table td.picker__day div.picker__day.picker__day--today{color:#4285f4}.mydp .markdate{position:absolute;width:5px;height:5px;border-radius:50%;top:2px;right:2px}@media (max-height:35.875em){.picker--opened .picker__holder{overflow-y:scroll}}.validate-success.ng-valid .mydp-date{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.validate-success.ng-valid .mydp label{color:#00c851!important}.form-submitted .validate-error.ng-invalid .mydp-date,.validate-error.ng-invalid.ng-touched .mydp-date{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted .validate-error.ng-invalid .mydp label,.validate-error.ng-invalid.ng-touched .mydp label{color:#f44336!important}.md-form mdb-date-picker .md-form{margin:0}.datepicker-inline-icon{position:absolute;top:5px;right:0;padding:.5rem}.md-outline>.datepicker-inline-icon{top:4px}.datepicker-inline{position:absolute}.datepicker-inline .picker__header{padding:.3125rem .625rem}.datepicker-inline .picker__nav--next,.datepicker-inline .picker__nav--prev{bottom:unset!important}.datepicker-inline .picker__frame{min-height:unset!important;max-height:unset!important;position:unset!important;margin:unset;border:0}"]
            }] }
];
/** @nocollapse */
MDBDatePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LocaleService },
    { type: UtilService },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_DATE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
MDBDatePickerComponent.propDecorators = {
    tabIndex: [{ type: Input }],
    options: [{ type: Input }],
    locale: [{ type: Input }],
    defaultMonth: [{ type: Input }],
    selDate: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    selector: [{ type: Input }],
    disabled: [{ type: Input }],
    openOnFocus: [{ type: Input }],
    outlineInput: [{ type: Input }],
    inline: [{ type: Input }],
    inlineIcon: [{ type: Input }],
    id: [{ type: Input }],
    dateChanged: [{ type: Output }],
    inputFieldChanged: [{ type: Output }],
    calendarViewChanged: [{ type: Output }],
    calendarToggle: [{ type: Output }],
    inputFocusBlur: [{ type: Output }],
    closeButtonClicked: [{ type: Output }],
    clearButtonClicked: [{ type: Output }],
    todayButtonClicked: [{ type: Output }],
    divFocus: [{ type: ViewChild, args: ['divFocus', { static: false },] }],
    inlineInput: [{ type: ViewChild, args: ['inlineInput', { static: false },] }],
    inlineIconToggle: [{ type: ViewChild, args: ['inlineIconToggle', { static: false },] }],
    pickerFrame: [{ type: ViewChild, args: ['pickerFrame', { static: false },] }]
};
if (false) {
    /** @type {?} */
    MDBDatePickerComponent.prototype.tabIndex;
    /** @type {?} */
    MDBDatePickerComponent.prototype.options;
    /** @type {?} */
    MDBDatePickerComponent.prototype.locale;
    /** @type {?} */
    MDBDatePickerComponent.prototype.defaultMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selDate;
    /** @type {?} */
    MDBDatePickerComponent.prototype.label;
    /** @type {?} */
    MDBDatePickerComponent.prototype.placeholder;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selector;
    /** @type {?} */
    MDBDatePickerComponent.prototype.disabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.openOnFocus;
    /** @type {?} */
    MDBDatePickerComponent.prototype.outlineInput;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inline;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inlineIcon;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype._id;
    /** @type {?} */
    MDBDatePickerComponent.prototype.dateChanged;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inputFieldChanged;
    /** @type {?} */
    MDBDatePickerComponent.prototype.calendarViewChanged;
    /** @type {?} */
    MDBDatePickerComponent.prototype.calendarToggle;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inputFocusBlur;
    /** @type {?} */
    MDBDatePickerComponent.prototype.closeButtonClicked;
    /** @type {?} */
    MDBDatePickerComponent.prototype.clearButtonClicked;
    /** @type {?} */
    MDBDatePickerComponent.prototype.todayButtonClicked;
    /** @type {?} */
    MDBDatePickerComponent.prototype.divFocus;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inlineInput;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inlineIconToggle;
    /** @type {?} */
    MDBDatePickerComponent.prototype.pickerFrame;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isDateSelected;
    /** @type {?} */
    MDBDatePickerComponent.prototype.labelActive;
    /** @type {?} */
    MDBDatePickerComponent.prototype.showSelector;
    /** @type {?} */
    MDBDatePickerComponent.prototype.visibleMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selectedMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selectedDate;
    /** @type {?} */
    MDBDatePickerComponent.prototype.weekDays;
    /** @type {?} */
    MDBDatePickerComponent.prototype.dates;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selectionDayTxt;
    /** @type {?} */
    MDBDatePickerComponent.prototype.invalidDate;
    /** @type {?} */
    MDBDatePickerComponent.prototype.disableTodayBtn;
    /** @type {?} */
    MDBDatePickerComponent.prototype.dayIdx;
    /** @type {?} */
    MDBDatePickerComponent.prototype.weekDayOpts;
    /** @type {?} */
    MDBDatePickerComponent.prototype.editMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.invalidMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.editYear;
    /** @type {?} */
    MDBDatePickerComponent.prototype.invalidYear;
    /** @type {?} */
    MDBDatePickerComponent.prototype.prevMonthDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.nextMonthDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.prevYearDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.nextYearDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.prevMonthId;
    /** @type {?} */
    MDBDatePickerComponent.prototype.currMonthId;
    /** @type {?} */
    MDBDatePickerComponent.prototype.nextMonthId;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype._uid;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isOpen;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.tmp;
    /** @type {?} */
    MDBDatePickerComponent.prototype.opts;
    /** @type {?} */
    MDBDatePickerComponent.prototype.months;
    /** @type {?} */
    MDBDatePickerComponent.prototype.years;
    /** @type {?} */
    MDBDatePickerComponent.prototype.elementNumber;
    /** @type {?} */
    MDBDatePickerComponent.prototype.firstTimeOpenedModal;
    /** @type {?} */
    MDBDatePickerComponent.prototype.modalHeightBefore;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isMobile;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isBrowser;
    /** @type {?} */
    MDBDatePickerComponent.prototype.documentClickFun;
    /** @type {?} */
    MDBDatePickerComponent.prototype.onChangeCb;
    /** @type {?} */
    MDBDatePickerComponent.prototype.onTouchedCb;
    /** @type {?} */
    MDBDatePickerComponent.prototype.elem;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.localeService;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.utilService;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype._globalOptions;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnQnpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRXBFLE1BQU0sT0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7O0lBR0MsT0FBUTtJQUNSLGlCQUFrQjtJQUNsQixnQkFBaUI7SUFDakIsa0JBQW1COzs7Ozs7OztJQUluQixLQUFNLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQztJQUNsQyxLQUFNLElBQUksSUFB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O0lBQzNCLGlEQUErQjs7SUFDL0Isd0NBQWtCOztJQUNsQiw2Q0FBK0U7O0lBRS9FLDJDQUF5Qjs7SUFDekIsOENBQTRCOztJQUM1QiwwQ0FBd0I7O0lBQ3hCLDZDQUEyQjs7SUFFM0IsbURBQWlDOztJQUNqQyxtREFBaUM7O0lBQ2pDLGtEQUFnQzs7SUFDaEMsa0RBQWdDOztJQUVoQyw2Q0FBMEM7O0lBQzFDLDZDQUEwQzs7SUFDMUMsNkNBQTBDOzs7OztJQUUxQyxzQ0FBOEM7O0lBRTlDLHdDQUFlOztJQUNmLDRDQUFtQjs7SUFFbkIscUNBSUU7O0lBR0Ysc0NBeUNFOztJQUVGLHdDQUF3Qjs7SUFDeEIsdUNBQXVCOztJQUN2QiwrQ0FBMEI7O0lBRTFCLHNEQUE0Qjs7SUFDNUIsbURBQThCOztJQUM5QiwwQ0FBcUI7O0lBQ3JCLDJDQUF1Qjs7SUFFdkIsa0RBQTJCOztJQXFFM0IsNENBQXdDOztJQUN4Qyw2Q0FBbUM7O0lBbkVqQyxzQ0FBdUI7Ozs7O0lBQ3ZCLDBDQUEyQjs7Ozs7SUFDM0IsK0NBQW9DOzs7OztJQUNwQyw2Q0FBZ0M7Ozs7O0lBQ2hDLHVDQUFnQzs7Ozs7SUFDaEMsZ0RBQXdFOzs7OztJQUN4RSwwQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTXlMb2NhbGVzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2xvY2FsZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgUmVuZGVyZXIyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgSW5qZWN0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIE9wdGlvbmFsLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgSU15RGF0ZSxcclxuICBJTXlEYXRlUmFuZ2UsXHJcbiAgSU15TW9udGgsXHJcbiAgSU15Q2FsZW5kYXJEYXksXHJcbiAgSU15V2VlayxcclxuICBJTXlEYXlMYWJlbHMsXHJcbiAgSU15TW9udGhMYWJlbHMsXHJcbiAgSU15SW5wdXRGaWVsZENoYW5nZWQsXHJcbiAgSU15Q2FsZW5kYXJWaWV3Q2hhbmdlZCxcclxuICBJTXlJbnB1dEZvY3VzQmx1cixcclxuICBJTXlNYXJrZWREYXRlcyxcclxuICBJTXlNYXJrZWREYXRlLFxyXG4gIElNeU9wdGlvbnMsXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2VzL2luZGV4JztcclxuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0ZXBpY2tlckxvY2FsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJVdGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNREJfREFURV9PUFRJT05TIH0gZnJvbSAnLi9vcHRpb25zLnRva2VuJztcclxuaW1wb3J0IHsgRU5URVIsIFNQQUNFIH0gZnJvbSAnLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBNWURQX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmVcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNREJEYXRlUGlja2VyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZSxcclxufTtcclxuXHJcbmVudW0gQ2FsVG9nZ2xlIHtcclxuICBPcGVuID0gMSxcclxuICBDbG9zZUJ5RGF0ZVNlbCA9IDIsXHJcbiAgQ2xvc2VCeUNhbEJ0biA9IDMsXHJcbiAgQ2xvc2VCeU91dENsaWNrID0gNCxcclxufVxyXG5cclxuZW51bSBZZWFyIHtcclxuICBtaW4gPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSA3LFxyXG4gIG1heCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIDcsXHJcbn1cclxuXHJcbmVudW0gSW5wdXRGb2N1c0JsdXIge1xyXG4gIGZvY3VzID0gMSxcclxuICBibHVyID0gMixcclxufVxyXG5cclxuZW51bSBLZXlDb2RlIHtcclxuICBlbnRlciA9IEVOVEVSLFxyXG4gIHNwYWNlID0gU1BBQ0UsXHJcbn1cclxuXHJcbmVudW0gTW9udGhJZCB7XHJcbiAgcHJldiA9IDEsXHJcbiAgY3VyciA9IDIsXHJcbiAgbmV4dCA9IDMsXHJcbn1cclxuXHJcbmxldCB1bmlxdWVJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21kYi1kYXRlLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdtZGJkYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1waWNrZXItbW9kdWxlLnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtVdGlsU2VydmljZSwgTVlEUF9WQUxVRV9BQ0NFU1NPUl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1EQkRhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSB0YWJJbmRleDogYW55O1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcclxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcclxuICBASW5wdXQoKSBkZWZhdWx0TW9udGg6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWxEYXRlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIHNlbGVjdG9yOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgb3Blbk9uRm9jdXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG91dGxpbmVJbnB1dCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlubGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlubGluZUljb24gPSAnZmFyIGZhLWNhbGVuZGFyLWFsdCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSB2YWx1ZSB8fCB0aGlzLl91aWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0RmllbGRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIElNeUlucHV0RmllbGRDaGFuZ2VkXHJcbiAgPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxlbmRhclZpZXdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15Q2FsZW5kYXJWaWV3Q2hhbmdlZD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgSU15Q2FsZW5kYXJWaWV3Q2hhbmdlZFxyXG4gID4oKTtcclxuICBAT3V0cHV0KCkgY2FsZW5kYXJUb2dnbGU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0Rm9jdXNCbHVyOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGb2N1c0JsdXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2VCdXR0b25DbGlja2VkOiBFdmVudEVtaXR0ZXI8TURCRGF0ZVBpY2tlckNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgTURCRGF0ZVBpY2tlckNvbXBvbmVudFxyXG4gID4oKTtcclxuICBAT3V0cHV0KCkgY2xlYXJCdXR0b25DbGlja2VkOiBFdmVudEVtaXR0ZXI8TURCRGF0ZVBpY2tlckNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgTURCRGF0ZVBpY2tlckNvbXBvbmVudFxyXG4gID4oKTtcclxuICBAT3V0cHV0KCkgdG9kYXlCdXR0b25DbGlja2VkOiBFdmVudEVtaXR0ZXI8TURCRGF0ZVBpY2tlckNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgTURCRGF0ZVBpY2tlckNvbXBvbmVudFxyXG4gID4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZGl2Rm9jdXMnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGRpdkZvY3VzOiBhbnk7XHJcbiAgQFZpZXdDaGlsZCgnaW5saW5lSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGlubGluZUlucHV0OiBhbnk7XHJcbiAgQFZpZXdDaGlsZCgnaW5saW5lSWNvblRvZ2dsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgaW5saW5lSWNvblRvZ2dsZTogYW55O1xyXG5cclxuICBAVmlld0NoaWxkKCdwaWNrZXJGcmFtZScsIHsgc3RhdGljOiBmYWxzZSB9KSBwaWNrZXJGcmFtZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHVibGljIGlzRGF0ZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgcHVibGljIGxhYmVsQWN0aXZlID0gZmFsc2U7XHJcbiAgcHVibGljIHNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gIHB1YmxpYyB2aXNpYmxlTW9udGg6IElNeU1vbnRoID0geyBtb250aFR4dDogJycsIG1vbnRoTmJyOiAwLCB5ZWFyOiAxIH07XHJcbiAgcHVibGljIHNlbGVjdGVkTW9udGg6IElNeU1vbnRoID0geyBtb250aFR4dDogJycsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwIH07XHJcbiAgcHVibGljIHNlbGVjdGVkRGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCB9O1xyXG4gIHB1YmxpYyB3ZWVrRGF5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIHB1YmxpYyBkYXRlczogQXJyYXk8SU15V2Vlaz4gPSBbXTtcclxuICBwdWJsaWMgc2VsZWN0aW9uRGF5VHh0ID0gJyc7XHJcbiAgcHVibGljIGludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgcHVibGljIGRpc2FibGVUb2RheUJ0biA9IGZhbHNlO1xyXG4gIHB1YmxpYyBkYXlJZHggPSAwO1xyXG4gIHB1YmxpYyB3ZWVrRGF5T3B0czogQXJyYXk8c3RyaW5nPiA9IFsnc3UnLCAnbW8nLCAndHUnLCAnd2UnLCAndGgnLCAnZnInLCAnc2EnXTtcclxuXHJcbiAgcHVibGljIGVkaXRNb250aCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpbnZhbGlkTW9udGggPSBmYWxzZTtcclxuICBwdWJsaWMgZWRpdFllYXIgPSBmYWxzZTtcclxuICBwdWJsaWMgaW52YWxpZFllYXIgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHByZXZNb250aERpc2FibGVkID0gZmFsc2U7XHJcbiAgcHVibGljIG5leHRNb250aERpc2FibGVkID0gZmFsc2U7XHJcbiAgcHVibGljIHByZXZZZWFyRGlzYWJsZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgbmV4dFllYXJEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcHJldk1vbnRoSWQ6IG51bWJlciA9IE1vbnRoSWQucHJldjtcclxuICBwdWJsaWMgY3Vyck1vbnRoSWQ6IG51bWJlciA9IE1vbnRoSWQuY3VycjtcclxuICBwdWJsaWMgbmV4dE1vbnRoSWQ6IG51bWJlciA9IE1vbnRoSWQubmV4dDtcclxuXHJcbiAgcHJpdmF0ZSBfdWlkID0gYG1kYi1kYXRlcGlja2VyLSR7dW5pcXVlSWQrK31gO1xyXG5cclxuICBpc09wZW4gPSBmYWxzZTtcclxuICBpc0Rpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyB0bXA6IElNeURhdGUgPSB7XHJcbiAgICB5ZWFyOiB0aGlzLmdldFRvZGF5KCkueWVhcixcclxuICAgIG1vbnRoOiB0aGlzLmdldFRvZGF5KCkubW9udGgsXHJcbiAgICBkYXk6IHRoaXMuZ2V0VG9kYXkoKS5kYXksXHJcbiAgfTtcclxuXHJcbiAgLy8gRGVmYXVsdCBvcHRpb25zXHJcbiAgcHVibGljIG9wdHM6IGFueSA9IHtcclxuICAgIHN0YXJ0RGF0ZTogPGFueT4nJyxcclxuICAgIGNsb3NlQWZ0ZXJTZWxlY3Q6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgZGF5TGFiZWxzRnVsbDogPElNeURheUxhYmVscz57fSxcclxuICAgIGRheUxhYmVsczogPElNeURheUxhYmVscz57fSxcclxuICAgIG1vbnRoTGFiZWxzRnVsbDogPElNeU1vbnRoTGFiZWxzPnt9LFxyXG4gICAgbW9udGhMYWJlbHM6IDxJTXlNb250aExhYmVscz57fSxcclxuICAgIGRhdGVGb3JtYXQ6IDxzdHJpbmc+JycsXHJcbiAgICBzaG93VG9kYXlCdG46IDxib29sZWFuPnRydWUsXHJcbiAgICB0b2RheUJ0blR4dDogPHN0cmluZz4nJyxcclxuICAgIGZpcnN0RGF5T2ZXZWVrOiA8c3RyaW5nPicnLFxyXG4gICAgc3VuSGlnaGxpZ2h0OiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgbWFya0N1cnJlbnREYXk6IDxib29sZWFuPnRydWUsXHJcbiAgICBkaXNhYmxlVW50aWw6IDxJTXlEYXRlPnsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCB9LFxyXG4gICAgZGlzYWJsZVNpbmNlOiA8SU15RGF0ZT57IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfSxcclxuICAgIGRpc2FibGVEYXlzOiA8QXJyYXk8SU15RGF0ZSB8IG51bWJlcj4+W10sXHJcbiAgICBlbmFibGVEYXlzOiA8QXJyYXk8SU15RGF0ZSB8IG51bWJlcj4+W10sXHJcbiAgICBlZGl0YWJsZURhdGVGaWVsZDogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIG1hcmtEYXRlczogPEFycmF5PElNeU1hcmtlZERhdGVzPj5bXSxcclxuICAgIG1hcmtXZWVrZW5kczogPElNeU1hcmtlZERhdGU+e30sXHJcbiAgICBkaXNhYmxlRGF0ZVJhbmdlczogPEFycmF5PElNeURhdGVSYW5nZT4+W10sXHJcbiAgICBkaXNhYmxlV2Vla2VuZHM6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgc2hvd1dlZWtOdW1iZXJzOiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIGhlaWdodDogPHN0cmluZz4nMzJweCcsXHJcbiAgICB3aWR0aDogPHN0cmluZz4nMTAwJScsXHJcbiAgICBzZWxlY3Rpb25UeHRGb250U2l6ZTogPHN0cmluZz4nMXJlbScsXHJcbiAgICBzaG93Q2xlYXJEYXRlQnRuOiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgYWxpZ25TZWxlY3RvclJpZ2h0OiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIGRpc2FibGVIZWFkZXJCdXR0b25zOiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgbWluWWVhcjogPG51bWJlcj5ZZWFyLm1pbixcclxuICAgIG1heFllYXI6IDxudW1iZXI+WWVhci5tYXgsXHJcbiAgICBjb21wb25lbnREaXNhYmxlZDogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBzaG93U2VsZWN0b3JBcnJvdzogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIHVzZURhdGVPYmplY3Q6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgYXJpYUxhYmVsSW5wdXRGaWVsZDogPHN0cmluZz4nRGF0ZSBpbnB1dCBmaWVsZCcsXHJcbiAgICBhcmlhTGFiZWxDbGVhckRhdGU6IDxzdHJpbmc+J0NsZWFyIERhdGUnLFxyXG4gICAgYXJpYUxhYmVsT3BlbkNhbGVuZGFyOiA8c3RyaW5nPidPcGVuIENhbGVuZGFyJyxcclxuICAgIGFyaWFMYWJlbFByZXZNb250aDogPHN0cmluZz4nUHJldmlvdXMgTW9udGgnLFxyXG4gICAgYXJpYUxhYmVsTmV4dE1vbnRoOiA8c3RyaW5nPidOZXh0IE1vbnRoJyxcclxuICAgIGFyaWFMYWJlbFByZXZZZWFyOiA8c3RyaW5nPidQcmV2aW91cyBZZWFyJyxcclxuICAgIGFyaWFMYWJlbE5leHRZZWFyOiA8c3RyaW5nPidOZXh0IFllYXInLFxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBtb250aHM6IGFueSA9IFtdO1xyXG4gIHB1YmxpYyB5ZWFyczogYW55ID0gW107XHJcbiAgcHVibGljIGVsZW1lbnROdW1iZXI6IGFueTtcclxuXHJcbiAgZmlyc3RUaW1lT3BlbmVkTW9kYWwgPSB0cnVlO1xyXG4gIG1vZGFsSGVpZ2h0QmVmb3JlOiBhbnkgPSBudWxsO1xyXG4gIGlzTW9iaWxlOiBhbnkgPSBudWxsO1xyXG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XHJcblxyXG4gIGRvY3VtZW50Q2xpY2tGdW46IEZ1bmN0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBsb2NhbGVTZXJ2aWNlOiBMb2NhbGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTURCX0RBVEVfT1BUSU9OUykgcHJpdmF0ZSBfZ2xvYmFsT3B0aW9uczogSU15T3B0aW9ucyxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcclxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldExvY2FsZU9wdGlvbnMoKTtcclxuICAgIHJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yICYmXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0ICYmXHJcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxyXG4gICAgICAgICF0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5T3V0Q2xpY2spO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwaWNrZXJfX2hvbGRlcicpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHJ1ZSAmJiBldmVudC50YXJnZXQgJiYgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMucmVzZXRNb250aFllYXJFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMuaWQ7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRzLnN0YXJ0RGF0ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5vcHRzLnN0YXJ0RGF0ZS50b1N0cmluZygpLmluZGV4T2YoJ1QnKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vcHRzLnN0YXJ0RGF0ZS50b1N0cmluZygpLmluZGV4T2YoJ1QnKTtcclxuICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMub3B0cy5zdGFydERhdGUudG9TdHJpbmcoKS5zdWJzdHIoMCwgaW5kZXgpO1xyXG4gICAgICAgICAgdGhpcy5vblVzZXJEYXRlSW5wdXQoc3RhcnREYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQ2hhbmdlWkluZGV4KCkge1xyXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIEZpeCBmb3IgdmlzaWJsZSBkYXRlIC8gdGltZSBwaWNrZXIgaW5wdXQgd2hlbiBwaWNrZXIgcGxhdGUgaXMgdmlzaWJsZS5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3Qgb3BlbmVkUGlja2VyOiBhbnkgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWNrZXItLW9wZW5lZCcpO1xyXG4gICAgICAgICAgY29uc3QgYWxsUGlja2VyczogYW55ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGlja2VyJyk7XHJcbiAgICAgICAgICBhbGxQaWNrZXJzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICd6LWluZGV4JywgJzAnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gQ2hhbmdlIHotaW5kZXggZnJvbSAxMDAgdG8gMTAzMSA9PiBGaXggZm9yIHByb2JsZW1cclxuICAgICAgICAgIC8vIHdoZW4gaW5saW5lIGRhdGVwaWNrZXIgd2FzIHJlbmRlcmVkIGJlbG93IGZvb3RlciB3aXRoIC5maXhlZC1ib3R0b20gY2xhc3NcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUob3BlbmVkUGlja2VyLCAnei1pbmRleCcsICcxMDMxJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VDYjogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2hlZENiOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5saW5lKSB7XHJcbiAgICAgIHRoaXMuc2V0RGlzYWJsZWQoaXNEaXNhYmxlZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIGlmIChpc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuaW5saW5lSWNvbiArPSAnIGRpc2FibGVkIGdyZXktdGV4dCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0byA9IHRoaXMuaW5saW5lSWNvbi5pbmRleE9mKCdkaXNhYmxlZCcpO1xyXG4gICAgICBpZiAodG8gPj0gMCkge1xyXG4gICAgICAgIHRoaXMuaW5saW5lSWNvbiA9IHRoaXMuaW5saW5lSWNvbi5zdWJzdHIoMCwgdG8pO1xyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVJbmxpbmVTdHlsZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1jb250ZW50JykpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LFxyXG4gICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgJ2hlaWdodCAwLjNzJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgICB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgKHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIGFueSkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICB9LCAxNTUpO1xyXG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYWxlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9wdHM6IGFueSA9IHRoaXMubG9jYWxlU2VydmljZS5nZXRMb2NhbGVPcHRpb25zKHRoaXMubG9jYWxlKTtcclxuICAgIE9iamVjdC5rZXlzKG9wdHMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgIHRoaXMub3B0c1trXSA9IG9wdHNba107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZExvY2FsZShsb2NhbGU6IElNeUxvY2FsZXMpIHtcclxuICAgIHRoaXMubG9jYWxlU2VydmljZS5sb2NhbGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5sb2NhbGVTZXJ2aWNlLmxvY2FsZXMsIGxvY2FsZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZ2xvYmFsT3B0aW9ucywgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHtcclxuICAgICAgICB0aGlzLm9wdHNba10gPSBvcHRpb25zW2tdO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcHRzLmNvbXBvbmVudERpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0TW9udGhZZWFyRWRpdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgICB0aGlzLmVkaXRZZWFyID0gZmFsc2U7XHJcbiAgICB0aGlzLmludmFsaWRNb250aCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbnZhbGlkWWVhciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25Vc2VyRGF0ZUlucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHRoaXMub3B0cy5kYXRlRm9ybWF0LFxyXG4gICAgICAgIHRoaXMub3B0cy5taW5ZZWFyLFxyXG4gICAgICAgIHRoaXMub3B0cy5tYXhZZWFyLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgdGhpcy5vcHRzLm1vbnRoTGFiZWxzLFxyXG4gICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShkYXRlKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShkYXRlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbnZhbGlkRGF0ZSkge1xyXG4gICAgICB0aGlzLmlucHV0RmllbGRDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBkYXRlRm9ybWF0OiB0aGlzLm9wdHMuZGF0ZUZvcm1hdCxcclxuICAgICAgICB2YWxpZDogISh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5pbnZhbGlkRGF0ZSksXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQ2IoJycpO1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzSW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3Blbk9uRm9jdXMgJiYgIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHRoaXMub3BlbkJ0bkNsaWNrZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoeyByZWFzb246IElucHV0Rm9jdXNCbHVyLmZvY3VzLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgaWYgKCF0aGlzLmlubGluZSkge1xyXG4gICAgICAodGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgYW55KS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVySW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoeyByZWFzb246IElucHV0Rm9jdXNCbHVyLmJsdXIsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvblVzZXJNb250aElucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgICBjb25zdCBtOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhMYWJlbFZhbGlkKHZhbHVlLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpO1xyXG4gICAgaWYgKG0gIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgICAgIGlmIChtICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge1xyXG4gICAgICAgICAgbW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLFxyXG4gICAgICAgICAgbW9udGhOYnI6IG0sXHJcbiAgICAgICAgICB5ZWFyOiB0aGlzLnZpc2libGVNb250aC55ZWFyLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludmFsaWRNb250aCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblVzZXJZZWFySW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnZhbGlkWWVhciA9IGZhbHNlO1xyXG4gICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy51dGlsU2VydmljZS5pc1llYXJMYWJlbFZhbGlkKFxyXG4gICAgICBOdW1iZXIodmFsdWUpLFxyXG4gICAgICB0aGlzLm9wdHMubWluWWVhcixcclxuICAgICAgdGhpcy5vcHRzLm1heFllYXJcclxuICAgICk7XHJcbiAgICBpZiAoeSAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5lZGl0WWVhciA9IGZhbHNlO1xyXG4gICAgICBpZiAoeSAhPT0gdGhpcy52aXNpYmxlTW9udGgueWVhcikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge1xyXG4gICAgICAgICAgbW9udGhUeHQ6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoVHh0LFxyXG4gICAgICAgICAgbW9udGhOYnI6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLFxyXG4gICAgICAgICAgeWVhcjogeSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgeSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZFllYXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNUb2RheURpc2FibGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlVG9kYXlCdG4gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgIHRoaXMuZ2V0VG9kYXkoKSxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubG9jYWxlKSB7XHJcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRPcHRpb25zKCk7XHJcbiAgICB0aGlzLmlzVG9kYXlEaXNhYmxlZCgpO1xyXG4gICAgdGhpcy5kYXlJZHggPSB0aGlzLndlZWtEYXlPcHRzLmluZGV4T2YodGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrKTtcclxuICAgIGlmICh0aGlzLmRheUlkeCAhPT0gLTEpIHtcclxuICAgICAgbGV0IGlkeDogbnVtYmVyID0gdGhpcy5kYXlJZHg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53ZWVrRGF5T3B0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMud2Vla0RheXMucHVzaCh0aGlzLm9wdHMuZGF5TGFiZWxzW3RoaXMud2Vla0RheU9wdHNbaWR4XV0pO1xyXG4gICAgICAgIGlkeCA9IHRoaXMud2Vla0RheU9wdHNbaWR4XSA9PT0gJ3NhJyA/IDAgOiBpZHggKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHRoaXMucGFyc2VTZWxlY3RlZERhdGUodmFsdWUpLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlWydkYXRlJ10pIHtcclxuICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZVsnZGF0ZSddKSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IHsgZGF5OiB2YWx1ZS5nZXREYXRlKCksIG1vbnRoOiB2YWx1ZS5nZXRNb250aCgpICsgMSwgeWVhcjogdmFsdWUuZ2V0RnVsbFllYXIoKSB9O1xyXG4gICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKGRhdGUpLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCB9O1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2IgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IgPSBmbjtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdzZWxlY3RvcicpICYmIGNoYW5nZXNbJ3NlbGVjdG9yJ10uY3VycmVudFZhbHVlID4gMCkge1xyXG4gICAgICB0aGlzLm9wZW5CdG5DbGlja2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLnNldERpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwbGFjZWhvbGRlcicpKSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjaGFuZ2VzWydwbGFjZWhvbGRlciddLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbG9jYWxlJykpIHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSBjaGFuZ2VzWydsb2NhbGUnXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IGNoYW5nZXNbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlICYmIGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgdGhpcy5vblVzZXJEYXRlSW5wdXQoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZS5zdGFydERhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53ZWVrRGF5cy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wYXJzZU9wdGlvbnMoKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdE1vbnRoJykpIHtcclxuICAgICAgY29uc3QgZG06IHN0cmluZyA9IGNoYW5nZXNbJ2RlZmF1bHRNb250aCddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKGRtICE9PSBudWxsICYmIGRtICE9PSB1bmRlZmluZWQgJiYgZG0gIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5wYXJzZVNlbGVjdGVkTW9udGgoZG0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMCB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3NlbERhdGUnKSkge1xyXG4gICAgICBjb25zdCBzZDogYW55ID0gY2hhbmdlc1snc2VsRGF0ZSddO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgc2QuY3VycmVudFZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgc2QuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICBzZC5jdXJyZW50VmFsdWUgIT09ICcnICYmXHJcbiAgICAgICAgT2JqZWN0LmtleXMoc2QuY3VycmVudFZhbHVlKS5sZW5ndGggIT09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHNkLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IodGhpcy5nZXREYXRlTW9kZWwodGhpcy5zZWxlY3RlZERhdGUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBEbyBub3QgY2xlYXIgb24gaW5pdFxyXG4gICAgICAgIGlmICghc2QuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVLZXlib2FyZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGZpZWxkKTtcclxuICAgICAgICBjb25zdCBpbnB1dFJlZmVyZW5jZSA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRSZWZlcmVuY2UsICd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dFJlZmVyZW5jZSwgJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5wdXRSZWZlcmVuY2UsICdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnLXdlYmtpdC11c2VyLW1vZGlmeScsICdyZWFkLXdyaXRlLXBsYWludGV4dC1vbmx5Jyk7XHJcbiAgICAgICAgZmllbGQub25mb2N1cyA9ICgpID0+IHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGZpZWxkLCAnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGZpZWxkKTtcclxuICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpZWxkLmZvY3VzKCk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgfVxyXG5cclxuICByZW1vdmVCdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc0RhdGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbGVhckJ1dHRvbkNsaWNrZWQuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUJ0bkNsaWNrZWQoKSB7XHJcbiAgICB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZW1vdmVJbmxpbmVTdHlsZSgpO1xyXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMuY2xvc2VCdXR0b25DbGlja2VkLmVtaXQodGhpcyk7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG5cclxuICAgIHRoaXMuZG9jdW1lbnRDbGlja0Z1bigpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5kb2N1bWVudENsaWNrRnVuID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuaXNPcGVuICYmXHJcbiAgICAgICAgdGhpcy5waWNrZXJGcmFtZSAmJlxyXG4gICAgICAgIHRoaXMuaW5saW5lSW5wdXQgJiZcclxuICAgICAgICB0aGlzLmlubGluZUljb25Ub2dnbGUgJiZcclxuICAgICAgICAhdGhpcy5pbmxpbmVJbnB1dC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgICAhdGhpcy5waWNrZXJGcmFtZS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcclxuICAgICAgICAhdGhpcy5pbmxpbmVJY29uVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtY29udGVudCcpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RUaW1lT3BlbmVkTW9kYWwpIHtcclxuICAgICAgICAgIHRoaXMubW9kYWxIZWlnaHRCZWZvcmUgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpcnN0VGltZU9wZW5lZE1vZGFsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCxcclxuICAgICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICdoZWlnaHQgMC4zcydcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cclxuICAgICAgICAgIHRoaXMubW9kYWxIZWlnaHRCZWZvcmUgKyB0aGlzLnBpY2tlckZyYW1lLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICAvLyBPcGVuIHNlbGVjdG9yIGJ1dHRvbiBjbGlja2VkXHJcbiAgICB0aGlzLnNob3dTZWxlY3RvciA9ICF0aGlzLnNob3dTZWxlY3RvcjtcclxuICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xyXG4gICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLk9wZW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHRoaXMuaGlkZUtleWJvYXJkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcclxuICAgIGlmICghdGhpcy5pbmxpbmUpIHtcclxuICAgICAgdGhpcy5DaGFuZ2VaSW5kZXgoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRWaXNpYmxlTW9udGgoKTogdm9pZCB7XHJcbiAgICAvLyBTZXRzIHZpc2libGUgbW9udGggb2YgY2FsZW5kYXJcclxuICAgIGxldCB5ID0gMCxcclxuICAgICAgbSA9IDA7XHJcbiAgICBpZiAoIXRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy5zZWxlY3RlZERhdGUpKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9udGgueWVhciA9PT0gMCAmJiB0aGlzLnNlbGVjdGVkTW9udGgubW9udGhOYnIgPT09IDApIHtcclxuICAgICAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICB5ID0gdG9kYXkueWVhcjtcclxuICAgICAgICBtID0gdG9kYXkubW9udGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyO1xyXG4gICAgICAgIG0gPSB0aGlzLnNlbGVjdGVkTW9udGgubW9udGhOYnI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyO1xyXG4gICAgICBtID0gdGhpcy5zZWxlY3RlZERhdGUubW9udGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1ttXSwgbW9udGhOYnI6IG0sIHllYXI6IHkgfTtcclxuXHJcbiAgICAvLyBDcmVhdGUgY3VycmVudCBtb250aFxyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbW9udGhMaXN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb250aHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgdGhpcy5tb250aHMucHVzaCh7XHJcbiAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgc2hvcnQ6IHRoaXMub3B0cy5tb250aExhYmVsc1tpXSxcclxuICAgICAgICBsYWJlbDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbFtpXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB5ZWFyc0xpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLnllYXJzID0gW107XHJcblxyXG4gICAgY29uc3QgZmlyc3RZZWFyID0gdGhpcy5vcHRzLm1pblllYXI7XHJcbiAgICBjb25zdCBsYXN0WWVhciA9IHRoaXMub3B0cy5tYXhZZWFyO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBmaXJzdFllYXI7IGkgPD0gbGFzdFllYXI7IGkrKykge1xyXG4gICAgICB0aGlzLnllYXJzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2TW9udGgoZXZlbnQ/OiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIFByZXZpb3VzIG1vbnRoIGZyb20gY2FsZW5kYXJcclxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUodGhpcy52aXNpYmxlTW9udGgueWVhciwgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIDEpO1xyXG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcclxuXHJcbiAgICBjb25zdCB5OiBudW1iZXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtOiBudW1iZXIgPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICAgIHRoaXMudmlzaWJsZU1vbnRoID0geyBtb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5IH07XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcblxyXG4gICAgLy8gUHJldmVudHMgdHJpZ2dlciAoY2xpY2spIGV2ZW50IHdoZW4gdXNpbmcgRW50ZXJcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHRNb250aChldmVudD86IGFueSk6IHZvaWQge1xyXG4gICAgLy8gTmV4dCBtb250aCBmcm9tIGNhbGVuZGFyXHJcbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpICsgMSk7XHJcblxyXG4gICAgY29uc3QgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogeSB9O1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG5cclxuICAgIC8vIFByZXZlbnRzIHRyaWdnZXIgKGNsaWNrKSBldmVudCB3aGVuIHVzaW5nIEVudGVyXHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZZZWFyKCk6IHZvaWQge1xyXG4gICAgLy8gUHJldmlvdXMgeWVhciBmcm9tIGNhbGVuZGFyXHJcbiAgICB0aGlzLnZpc2libGVNb250aC55ZWFyLS07XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoKTogdm9pZCB7XHJcbiAgICAvLyBOZXh0IHllYXIgZnJvbSBjYWxlbmRhclxyXG4gICAgdGhpcy52aXNpYmxlTW9udGgueWVhcisrO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHRvZGF5Q2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIFRvZGF5IGJ1dHRvbiBjbGlja2VkXHJcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShcclxuICAgICAgICB0b2RheSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGUodG9kYXkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRvZGF5LnllYXIgIT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXIgfHwgdG9kYXkubW9udGggIT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge1xyXG4gICAgICAgIG1vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbdG9kYXkubW9udGhdLFxyXG4gICAgICAgIG1vbnRoTmJyOiB0b2RheS5tb250aCxcclxuICAgICAgICB5ZWFyOiB0b2RheS55ZWFyLFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodG9kYXkubW9udGgsIHRvZGF5LnllYXIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2RheUJ1dHRvbkNsaWNrZWQuZW1pdCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNlbGxDbGlja2VkKGNlbGw6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gQ2VsbCBjbGlja2VkIG9uIHRoZSBjYWxlbmRhclxyXG4gICAgaWYgKGNlbGwuY21vID09PSB0aGlzLnByZXZNb250aElkKSB7XHJcbiAgICAgIC8vIFByZXZpb3VzIG1vbnRoIGRheVxyXG4gICAgICB0aGlzLnByZXZNb250aCgpO1xyXG4gICAgfSBlbHNlIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZCkge1xyXG4gICAgICAvLyBDdXJyZW50IG1vbnRoIGRheSAtIGlmIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZCBjbGVhciBpdFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY2VsbC5kYXRlT2JqLnllYXIgPT09IHRoaXMuc2VsZWN0ZWREYXRlLnllYXIgJiZcclxuICAgICAgICBjZWxsLmRhdGVPYmoubW9udGggPT09IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoICYmXHJcbiAgICAgICAgY2VsbC5kYXRlT2JqLmRheSA9PT0gdGhpcy5zZWxlY3RlZERhdGUuZGF5XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKGNlbGwuZGF0ZU9iaik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMubmV4dE1vbnRoSWQpIHtcclxuICAgICAgLy8gTmV4dCBtb250aCBkYXlcclxuICAgICAgdGhpcy5uZXh0TW9udGgoKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVzZXRNb250aFllYXJFZGl0KCk7XHJcbiAgfVxyXG5cclxuICBjZWxsS2V5RG93bihldmVudDogYW55LCBjZWxsOiBhbnkpIHtcclxuICAgIC8vIENlbGwga2V5Ym9hcmQgaGFuZGxpbmdcclxuICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5lbnRlciB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLnNwYWNlKSAmJiAhY2VsbC5kaXNhYmxlZCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmNlbGxDbGlja2VkKGNlbGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJEYXRlKCk6IHZvaWQge1xyXG4gICAgLy8gQ2xlYXJzIHRoZSBkYXRlIGFuZCBub3RpZmllcyBwYXJlbnQgdXNpbmcgY2FsbGJhY2tzIGFuZCB2YWx1ZSBhY2Nlc3NvclxyXG4gICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCB9O1xyXG4gICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHsgZGF0ZTogZGF0ZSwganNkYXRlOiBudWxsLCBmb3JtYXR0ZWQ6ICcnLCBlcG9jOiAwIH0pO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiKG51bGwpO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoZGF0ZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLnRtcCA9IHtcclxuICAgICAgeWVhcjogdGhpcy5nZXRUb2RheSgpLnllYXIsXHJcbiAgICAgIG1vbnRoOiB0aGlzLmdldFRvZGF5KCkubW9udGgsXHJcbiAgICAgIGRheTogdGhpcy5nZXRUb2RheSgpLmRheSxcclxuICAgIH07XHJcbiAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xyXG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGF0ZShkYXRlOiBJTXlEYXRlKTogdm9pZCB7XHJcbiAgICAvLyBEYXRlIHNlbGVjdGVkLCBub3RpZmllcyBwYXJlbnQgdXNpbmcgY2FsbGJhY2tzIGFuZCB2YWx1ZSBhY2Nlc3NvclxyXG4gICAgdGhpcy50bXAgPSBkYXRlO1xyXG4gICAgY29uc3QgZGF0ZU1vZGVsOiBhbnkgPSB0aGlzLmdldERhdGVNb2RlbChkYXRlKTtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdCh7XHJcbiAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgIGpzZGF0ZTogdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLFxyXG4gICAgICBwcmV2aW91c0RhdGVGb3JtYXR0ZWQ6IHRoaXMuc2VsZWN0aW9uRGF5VHh0LFxyXG4gICAgICBhY3R1YWxEYXRlRm9ybWF0dGVkOiBkYXRlTW9kZWwsXHJcbiAgICAgIGVwb2M6IE1hdGgucm91bmQodGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgLyAxMDAwLjApLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2IoZGF0ZU1vZGVsKTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKGRhdGUsIGZhbHNlKTtcclxuICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlEYXRlU2VsKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdHMuY2xvc2VBZnRlclNlbGVjdCkge1xyXG4gICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEYXRlVmFsdWUoZGF0ZTogSU15RGF0ZSwgY2xlYXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIFVwZGF0ZXMgZGF0ZSB2YWx1ZXNcclxuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcclxuICAgIHRoaXMudG1wID0gZGF0ZTtcclxuICAgIHRoaXMuaXNEYXRlU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSBjbGVhciA/ICcnIDogdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgdGhpcy5pbnB1dEZpZWxkQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgdmFsdWU6IHRoaXMuc2VsZWN0aW9uRGF5VHh0LFxyXG4gICAgICBkYXRlRm9ybWF0OiB0aGlzLm9wdHMuZGF0ZUZvcm1hdCxcclxuICAgICAgdmFsaWQ6ICFjbGVhcixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGdldERhdGVNb2RlbChkYXRlOiBJTXlEYXRlKTogYW55IHtcclxuICAgIGNvbnN0IGpzRGF0ZSA9IHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KTtcclxuICAgIGNvbnN0IGRhdGVNb2RlbCA9IHRoaXMub3B0cy51c2VEYXRlT2JqZWN0ID8ganNEYXRlIDogdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGVNb2RlbDtcclxuICB9XHJcblxyXG4gIHByZVplcm8odmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gUHJlcGVuZCB6ZXJvIGlmIHNtYWxsZXIgdGhhbiAxMFxyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMCkgPCAxMCA/ICcwJyArIHZhbCA6IHZhbDtcclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGUodmFsOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgLy8gUmV0dXJucyBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcsIGlmIG1tbSBpcyBwYXJ0IG9mIGRhdGVGb3JtYXQgcmV0dXJucyBtb250aCBhcyBhIHN0cmluZ1xyXG4gICAgLy8gZGF5c1xyXG4gICAgY29uc3QgZCA9IHZhbC5kYXk7IC8vIDEgLSAzMVxyXG4gICAgY29uc3QgZGQgPSB0aGlzLnByZVplcm8odmFsLmRheSk7IC8vIDAxIC0gMzFcclxuICAgIGNvbnN0IGRkZCA9IHRoaXMub3B0cy5kYXlMYWJlbHNbdGhpcy5nZXRXZWVrZGF5KHZhbCldOyAvLyBTdW4tU2F0XHJcbiAgICBjb25zdCBkZGRkID0gdGhpcy5vcHRzLmRheUxhYmVsc0Z1bGxbdGhpcy5nZXRXZWVrZGF5KHZhbCldOyAvLyBTdW5kYXkg4oCTIFNhdHVyZGF5XHJcbiAgICBjb25zdCBtID0gdmFsLm1vbnRoOyAvLyAxIC0gMTJcclxuICAgIGNvbnN0IG1tID0gdGhpcy5wcmVaZXJvKHZhbC5tb250aCk7IC8vIDAxIC0gMTJcclxuICAgIGNvbnN0IG1tbSA9IHRoaXMuZ2V0TW9udGhTaG9ydCh2YWwubW9udGgpOyAvLyBKYW4gLSBEZWNcclxuICAgIGNvbnN0IG1tbW0gPSB0aGlzLmdldE1vbnRoRnVsbCh2YWwubW9udGgpOyAvLyBKYW51YXJ5IOKAkyBEZWNlbWJlclxyXG4gICAgY29uc3QgeXkgPSB2YWwueWVhci50b1N0cmluZygpLmxlbmd0aCA9PT0gMiA/IHZhbC55ZWFyIDogdmFsLnllYXIudG9TdHJpbmcoKS5zbGljZSgyLCA0KTsgLy8gMDAgLSA5OVxyXG4gICAgY29uc3QgeXl5eSA9IHZhbC55ZWFyO1xyXG5cclxuICAgIGNvbnN0IHRvUmVwbGFjZSA9IHRoaXMub3B0cy5kYXRlRm9ybWF0LnNwbGl0KC8oZHsxLDR9fG17MSw0fXx5ezR9fHl5fCEuKS9nKTtcclxuICAgIGxldCBmb3JtYXR0ZWQgPSAnJztcclxuICAgIHRvUmVwbGFjZS5mb3JFYWNoKChlbDogYW55KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZWwpIHtcclxuICAgICAgICBjYXNlICdkZGRkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGRkZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkZGQnOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBkZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGQnOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBkZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtbW1tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW1tbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtbW0nOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBtbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW0nOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBtbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5eXl5JzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgeXl5eSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5eSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIHl5KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1hdHRlZCArPSBlbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWQ7XHJcbiAgfVxyXG5cclxuICBtb250aFRleHQobTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dO1xyXG4gIH1cclxuXHJcbiAgd2Vla1RleHQobTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLmRheUxhYmVsc0Z1bGxbbV07XHJcbiAgfVxyXG5cclxuICBnZXRNb250aFNob3J0KG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhGdWxsKG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbFttXTtcclxuICB9XHJcblxyXG4gIG1vbnRoU3RhcnRJZHgoeTogbnVtYmVyLCBtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gTW9udGggc3RhcnQgaW5kZXhcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXREYXRlKDEpO1xyXG4gICAgZC5zZXRNb250aChtIC0gMSk7XHJcbiAgICBkLnNldEZ1bGxZZWFyKHkpO1xyXG4gICAgY29uc3QgaWR4ID0gZC5nZXREYXkoKSArIHRoaXMuc3VuZGF5SWR4KCk7XHJcbiAgICByZXR1cm4gaWR4ID49IDcgPyBpZHggLSA3IDogaWR4O1xyXG4gIH1cclxuXHJcbiAgZGF5c0luTW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIGN1cnJlbnQgbW9udGhcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCAwKS5nZXREYXRlKCk7XHJcbiAgfVxyXG5cclxuICBkYXlzSW5QcmV2TW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIHRoZSBwcmV2aW91cyBtb250aFxyXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh5LCBtLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcbiAgICByZXR1cm4gdGhpcy5kYXlzSW5Nb250aChkLmdldE1vbnRoKCkgKyAxLCBkLmdldEZ1bGxZZWFyKCkpO1xyXG4gIH1cclxuXHJcbiAgaXNDdXJyRGF5KGQ6IG51bWJlciwgbTogbnVtYmVyLCB5OiBudW1iZXIsIGNtbzogbnVtYmVyLCB0b2RheTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gQ2hlY2sgaXMgYSBnaXZlbiBkYXRlIHRoZSB0b2RheVxyXG4gICAgcmV0dXJuIGQgPT09IHRvZGF5LmRheSAmJiBtID09PSB0b2RheS5tb250aCAmJiB5ID09PSB0b2RheS55ZWFyICYmIGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZDtcclxuICB9XHJcblxyXG4gIGdldFRvZGF5KCk6IElNeURhdGUge1xyXG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4geyB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXk6IGRhdGUuZ2V0RGF0ZSgpIH07XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLmdldFRpbWUoKTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtkYXkoZGF0ZTogSU15RGF0ZSk6IHN0cmluZyB7XHJcbiAgICAvLyBHZXQgd2Vla2RheTogc3UsIG1vLCB0dSwgd2UgLi4uXHJcbiAgICByZXR1cm4gdGhpcy53ZWVrRGF5T3B0c1t0aGlzLnV0aWxTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKV07XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpOiBEYXRlIHtcclxuICAgIC8vIENyZWF0ZXMgYSBkYXRlIG9iamVjdCBmcm9tIGdpdmVuIHllYXIsIG1vbnRoIGFuZCBkYXlcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMCwgMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICBzdW5kYXlJZHgoKTogbnVtYmVyIHtcclxuICAgIC8vIEluZGV4IG9mIFN1bmRheSBkYXlcclxuICAgIHJldHVybiB0aGlzLmRheUlkeCA+IDAgPyA3IC0gdGhpcy5kYXlJZHggOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYWxlbmRhcihtOiBudW1iZXIsIHk6IG51bWJlciwgbm90aWZ5Q2hhbmdlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVzLmxlbmd0aCA9IDA7XHJcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgIGNvbnN0IG1vbnRoU3RhcnQ6IG51bWJlciA9IHRoaXMubW9udGhTdGFydElkeCh5LCBtKTtcclxuICAgIGNvbnN0IGRJblRoaXNNOiBudW1iZXIgPSB0aGlzLmRheXNJbk1vbnRoKG0sIHkpO1xyXG4gICAgY29uc3QgZEluUHJldk06IG51bWJlciA9IHRoaXMuZGF5c0luUHJldk1vbnRoKG0sIHkpO1xyXG5cclxuICAgIGxldCBkYXlOYnIgPSAxO1xyXG4gICAgbGV0IGNtbzogbnVtYmVyID0gdGhpcy5wcmV2TW9udGhJZDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHdlZWs6IEFycmF5PElNeUNhbGVuZGFyRGF5PiA9IFtdO1xyXG4gICAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgIC8vIEZpcnN0IHdlZWtcclxuICAgICAgICBjb25zdCBwbSA9IGRJblByZXZNIC0gbW9udGhTdGFydCArIDE7XHJcbiAgICAgICAgLy8gUHJldmlvdXMgbW9udGhcclxuICAgICAgICBmb3IgKGxldCBqID0gcG07IGogPD0gZEluUHJldk07IGorKykge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogeSwgbW9udGg6IG0gLSAxLCBkYXk6IGogfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsXHJcbiAgICAgICAgICAgIGNtbzogY21vLFxyXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShqLCBtLCB5LCBjbW8sIHRvZGF5KSxcclxuICAgICAgICAgICAgZGF5TmJyOiB0aGlzLnV0aWxTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShcclxuICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXNcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoXHJcbiAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMubWFya0RhdGVzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5tYXJrV2Vla2VuZHNcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY21vID0gdGhpcy5jdXJyTW9udGhJZDtcclxuICAgICAgICAvLyBDdXJyZW50IG1vbnRoXHJcbiAgICAgICAgY29uc3QgZGF5c0xlZnQ6IG51bWJlciA9IDcgLSB3ZWVrLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRheXNMZWZ0OyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IHksIG1vbnRoOiBtLCBkYXk6IGRheU5iciB9O1xyXG4gICAgICAgICAgd2Vlay5wdXNoKHtcclxuICAgICAgICAgICAgZGF0ZU9iajogZGF0ZSxcclxuICAgICAgICAgICAgY21vOiBjbW8sXHJcbiAgICAgICAgICAgIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgIGRheU5icjogdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtEYXRlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMubWFya1dlZWtlbmRzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRheU5icisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZXN0IG9mIHRoZSB3ZWVrc1xyXG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoZGF5TmJyID4gZEluVGhpc00pIHtcclxuICAgICAgICAgICAgLy8gTmV4dCBtb250aFxyXG4gICAgICAgICAgICBkYXlOYnIgPSAxO1xyXG4gICAgICAgICAgICBjbW8gPSB0aGlzLm5leHRNb250aElkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHtcclxuICAgICAgICAgICAgeWVhcjogeSxcclxuICAgICAgICAgICAgbW9udGg6IGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZCA/IG0gOiBtICsgMSxcclxuICAgICAgICAgICAgZGF5OiBkYXlOYnIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgd2Vlay5wdXNoKHtcclxuICAgICAgICAgICAgZGF0ZU9iajogZGF0ZSxcclxuICAgICAgICAgICAgY21vOiBjbW8sXHJcbiAgICAgICAgICAgIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgIGRheU5icjogdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtEYXRlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMubWFya1dlZWtlbmRzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRheU5icisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3ZWVrTmJyOiBudW1iZXIgPVxyXG4gICAgICAgIHRoaXMub3B0cy5zaG93V2Vla051bWJlcnMgJiYgdGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrID09PSAnbW8nXHJcbiAgICAgICAgICA/IHRoaXMudXRpbFNlcnZpY2UuZ2V0V2Vla051bWJlcih3ZWVrWzBdLmRhdGVPYmopXHJcbiAgICAgICAgICA6IDA7XHJcbiAgICAgIHRoaXMuZGF0ZXMucHVzaCh7IHdlZWs6IHdlZWssIHdlZWtOYnI6IHdlZWtOYnIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKG0sIHkpO1xyXG5cclxuICAgIGlmIChub3RpZnlDaGFuZ2UpIHtcclxuICAgICAgLy8gTm90aWZ5IHBhcmVudFxyXG4gICAgICB0aGlzLmNhbGVuZGFyVmlld0NoYW5nZWQuZW1pdCh7XHJcbiAgICAgICAgeWVhcjogeSxcclxuICAgICAgICBtb250aDogbSxcclxuICAgICAgICBmaXJzdDoge1xyXG4gICAgICAgICAgbnVtYmVyOiAxLFxyXG4gICAgICAgICAgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHtcclxuICAgICAgICAgICAgeWVhcjogeSxcclxuICAgICAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgICAgIGRheTogMSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFzdDoge1xyXG4gICAgICAgICAgbnVtYmVyOiBkSW5UaGlzTSxcclxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgICBkYXk6IGRJblRoaXNNLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb250aExpc3QoKTtcclxuICAgIHRoaXMueWVhcnNMaXN0KCk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVNlbGVjdGVkRGF0ZShzZWxEYXRlOiBhbnkpOiBJTXlEYXRlIHtcclxuICAgIC8vIFBhcnNlIHNlbERhdGUgdmFsdWUgLSBpdCBjYW4gYmUgc3RyaW5nIG9yIElNeURhdGUgb2JqZWN0XHJcblxyXG4gICAgLy8gUmVtb3ZlcyBldmVyeXRoaW5nIGZyb20gc2VsRGF0ZSBpZiBpdCdzIElTTyBkYXRlIGZvcm1hdCB0byBhbGxvdyB0byB1c2UgSVNPIGRhdGUgaW4gZGF0ZSBwaWNrZXJcclxuICAgIGlmIChzZWxEYXRlLnRvU3RyaW5nKCkuaW5kZXhPZignVCcpICE9PSAtMSkge1xyXG4gICAgICBzZWxEYXRlID0gc2VsRGF0ZS5zdWJzdHIoMCwgc2VsRGF0ZS5pbmRleE9mKCdUJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXRlOiBJTXlEYXRlID0geyBkYXk6IDAsIG1vbnRoOiAwLCB5ZWFyOiAwIH07XHJcbiAgICBpZiAodHlwZW9mIHNlbERhdGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IHNkOiBzdHJpbmcgPSA8c3RyaW5nPnNlbERhdGU7XHJcbiAgICAgIGNvbnN0IGRmOiBzdHJpbmcgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdDtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGltZXRlcnM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGVGb3JtYXREZWxpbWV0ZXJzKGRmKTtcclxuICAgICAgY29uc3QgZGF0ZVZhbHVlID0gdGhpcy51dGlsU2VydmljZS5nZXREYXRlVmFsdWUoc2QsIGRmLCBkZWxpbWV0ZXJzKTtcclxuICAgICAgZGF0ZS55ZWFyID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVswXSk7XHJcblxyXG4gICAgICBpZiAoZGYuaW5kZXhPZignbW1tbScpICE9PSAtMSkge1xyXG4gICAgICAgIGRhdGUubW9udGggPSB0aGlzLnV0aWxTZXJ2aWNlLmdldE1vbnRoTnVtYmVyQnlNb250aE5hbWUoXHJcbiAgICAgICAgICBkYXRlVmFsdWVbMV0sXHJcbiAgICAgICAgICB0aGlzLm9wdHMubW9udGhMYWJlbHNGdWxsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIGlmIChkZi5pbmRleE9mKCdtbW0nKSAhPT0gLTEpIHtcclxuICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXRNb250aE51bWJlckJ5TW9udGhOYW1lKFxyXG4gICAgICAgICAgZGF0ZVZhbHVlWzFdLFxyXG4gICAgICAgICAgdGhpcy5vcHRzLm1vbnRoTGFiZWxzXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsxXSk7XHJcbiAgICAgIH1cclxuICAgICAgZGF0ZS5kYXkgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzJdKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbERhdGUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIGRhdGUgPSBzZWxEYXRlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSB0aGlzLmZvcm1hdERhdGUoZGF0ZSk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcblxyXG4gIHBhcnNlU2VsZWN0ZWRNb250aChtczogc3RyaW5nKTogSU15TW9udGgge1xyXG4gICAgcmV0dXJuIHRoaXMudXRpbFNlcnZpY2UucGFyc2VEZWZhdWx0TW9udGgobXMpO1xyXG4gIH1cclxuXHJcbiAgc2V0SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtOiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IGRwbSA9IGZhbHNlO1xyXG4gICAgbGV0IGRweSA9IGZhbHNlO1xyXG4gICAgbGV0IGRubSA9IGZhbHNlO1xyXG4gICAgbGV0IGRueSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMub3B0cy5kaXNhYmxlSGVhZGVyQnV0dG9ucykge1xyXG4gICAgICBkcG0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHllYXI6IG0gPT09IDEgPyB5IC0gMSA6IHksXHJcbiAgICAgICAgICBtb250aDogbSA9PT0gMSA/IDEyIDogbSAtIDEsXHJcbiAgICAgICAgICBkYXk6IHRoaXMuZGF5c0luTW9udGgobSA9PT0gMSA/IDEyIDogbSAtIDEsIG0gPT09IDEgPyB5IC0gMSA6IHkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbFxyXG4gICAgICApO1xyXG4gICAgICBkcHkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHllYXI6IHkgLSAxLFxyXG4gICAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgICBkYXk6IHRoaXMuZGF5c0luTW9udGgobSwgeSAtIDEpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbFxyXG4gICAgICApO1xyXG4gICAgICBkbm0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHllYXI6IG0gPT09IDEyID8geSArIDEgOiB5LFxyXG4gICAgICAgICAgbW9udGg6IG0gPT09IDEyID8gMSA6IG0gKyAxLFxyXG4gICAgICAgICAgZGF5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZVxyXG4gICAgICApO1xyXG4gICAgICBkbnkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKFxyXG4gICAgICAgIHsgeWVhcjogeSArIDEsIG1vbnRoOiBtLCBkYXk6IDEgfSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXZNb250aERpc2FibGVkID0gKG0gPT09IDEgJiYgeSA9PT0gdGhpcy5vcHRzLm1pblllYXIpIHx8IGRwbTtcclxuICAgIHRoaXMucHJldlllYXJEaXNhYmxlZCA9IHkgLSAxIDwgdGhpcy5vcHRzLm1pblllYXIgfHwgZHB5O1xyXG4gICAgdGhpcy5uZXh0TW9udGhEaXNhYmxlZCA9IChtID09PSAxMiAmJiB5ID09PSB0aGlzLm9wdHMubWF4WWVhcikgfHwgZG5tO1xyXG4gICAgdGhpcy5uZXh0WWVhckRpc2FibGVkID0geSArIDEgPiB0aGlzLm9wdHMubWF4WWVhciB8fCBkbnk7XHJcbiAgfVxyXG5cclxuICBjaGVja0FjdGl2ZSgpIHtcclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYWJlbEFjdGl2ZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzRGF0ZVNlbGVjdGVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLy8gSU5MSU5FIERBVEUgUElDS0VSXHJcblxyXG4gIHB1YmxpYyB0b2dnbGVJbmxpbmVEYXRlUGlja2VyKCkge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9wZW5CdG5DbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==