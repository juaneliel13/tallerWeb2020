/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ContentChildren, QueryList, Input, ElementRef, ViewChild, ViewChildren, Renderer2, PLATFORM_ID, Inject, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { MdbStepComponent } from './step.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { FormControl } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { from, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
var StepChangeEvent = /** @class */ (function () {
    function StepChangeEvent() {
    }
    return StepChangeEvent;
}());
export { StepChangeEvent };
if (false) {
    /** @type {?} */
    StepChangeEvent.prototype.activeStep;
    /** @type {?} */
    StepChangeEvent.prototype.activeStepIndex;
    /** @type {?} */
    StepChangeEvent.prototype.previousStep;
    /** @type {?} */
    StepChangeEvent.prototype.previousStepIndex;
}
var MdbStepperComponent = /** @class */ (function () {
    function MdbStepperComponent(ripple, _renderer, _cdRef, platformId) {
        this.ripple = ripple;
        this._renderer = _renderer;
        this._cdRef = _cdRef;
        this.linear = false;
        this.disableWaves = false;
        this._vertical = false;
        this.stepChange = new EventEmitter();
        this._destroy = new Subject();
        this.horizontal = true;
        this.stepTextContent = '';
        this.stepChangeSubject = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdbStepperComponent.prototype, "vertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._vertical = value;
                this.horizontal = false;
                this._renderer.removeStyle(this.container.nativeElement, 'height');
            }
            else {
                this._vertical = value;
                this.horizontal = true;
                if (this.container.nativeElement.children[this.activeStepIndex]) {
                    /** @type {?} */
                    var stepElContent = this.container.nativeElement.children[this._activeStepIndex]
                        .lastElementChild;
                    this._updateHorizontalStepperHeight(this.activeStepIndex, stepElContent.clientHeight);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepperComponent.prototype, "activeStepIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeStepIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeStepIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.getStepChange$ = /**
     * @return {?}
     */
    function () {
        return this.stepChangeSubject;
    };
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    MdbStepperComponent.prototype.onClick = /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        if (!this.disableWaves) {
            /** @type {?} */
            var clickedEl = this.stepTitles.toArray()[index];
            this.ripple.el = clickedEl;
            this.ripple.click(event);
        }
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._isStepValid = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (!step.stepForm) {
            return true;
        }
        if (step.stepForm && step.stepForm.valid) {
            return true;
        }
        return false;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype.getAnimationState = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var nextElPosition = index - this.activeStepIndex;
        if (nextElPosition < 0) {
            return 'previous';
        }
        else if (nextElPosition > 0) {
            return 'next';
        }
        return 'current';
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype._getStepByIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.steps.toArray()[index];
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.activeStepIndex < this.steps.length - 1) {
            this.setNewActiveStep(this.activeStepIndex + 1);
            this._cdRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        if (this.activeStepIndex > 0) {
            this.setNewActiveStep(this.activeStepIndex - 1);
            this._cdRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        if (this.linear) {
            this._markCurrentAsDone();
            this._cdRef.markForCheck();
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype.setNewActiveStep = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var currentStep = this._activeStep;
        /** @type {?} */
        var currentStepIndex = this._activeStepIndex;
        /** @type {?} */
        var newStep = this._getStepByIndex(index);
        /** @type {?} */
        var newStepIndex = this.steps
            .toArray()
            .findIndex((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step === newStep; }));
        if (this.linear && !this._isNewStepLinear(index)) {
            return;
        }
        if (newStepIndex < this._activeStepIndex && !newStep.editable) {
            return;
        }
        this._removeStepValidationClasses(newStep);
        if (this.linear && index > this.activeStepIndex) {
            if (this._isStepValid(this._activeStep)) {
                this._markCurrentAsDone();
                this._removeCurrentActiveStep();
                this._setActiveStep(index);
            }
            else {
                this._markCurrentAsWrong();
                this._markStepControlsAsDirty(this._activeStep);
            }
        }
        else {
            if (index < this.activeStepIndex) {
                this._removeStepValidationClasses(this._activeStep);
            }
            this._removeCurrentActiveStep();
            this._setActiveStep(index);
        }
        this.stepChange.emit({
            activeStep: newStep,
            activeStepIndex: newStepIndex,
            previousStep: currentStep,
            previousStepIndex: currentStepIndex,
        });
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._markCurrentAsDone = /**
     * @private
     * @return {?}
     */
    function () {
        this._activeStep.isDone = true;
        this._activeStep.isWrong = false;
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._markCurrentAsWrong = /**
     * @private
     * @return {?}
     */
    function () {
        this._activeStep.isWrong = true;
        this._activeStep.isDone = false;
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._markStepControlsAsDirty = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        /** @type {?} */
        var controls = step.stepForm.controls;
        if (step.stepForm.controls) {
            /** @type {?} */
            var keys = Object.keys(controls);
            for (var i = 0; i < keys.length; i++) {
                /** @type {?} */
                var control = controls[keys[i]];
                if (control instanceof FormControl) {
                    control.markAsTouched();
                }
            }
        }
    };
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    MdbStepperComponent.prototype._removeStepValidationClasses = /**
     * @private
     * @param {?} step
     * @return {?}
     */
    function (step) {
        step.isDone = false;
        step.isWrong = false;
    };
    /**
     * @private
     * @param {?} newStepIndex
     * @return {?}
     */
    MdbStepperComponent.prototype._isNewStepLinear = /**
     * @private
     * @param {?} newStepIndex
     * @return {?}
     */
    function (newStepIndex) {
        return this.activeStepIndex - newStepIndex === 1 || this.activeStepIndex - newStepIndex === -1;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    MdbStepperComponent.prototype._setActiveStep = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.steps.toArray()[index].isActive = true;
        this._updateHorizontalStepperHeight(index);
        this.activeStepIndex = index;
        this._activeStep = this._getStepByIndex(this.activeStepIndex);
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._removeCurrentActiveStep = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentActiveStep = this.steps.find((/**
         * @param {?} activeStep
         * @return {?}
         */
        function (activeStep) { return activeStep.isActive; }));
        if (currentActiveStep) {
            currentActiveStep.isActive = false;
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.resetAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            step.reset();
            _this._setActiveStep(0);
            _this._cdRef.markForCheck();
        }));
    };
    /**
     * @private
     * @param {?} index
     * @param {?=} height
     * @return {?}
     */
    MdbStepperComponent.prototype._updateHorizontalStepperHeight = /**
     * @private
     * @param {?} index
     * @param {?=} height
     * @return {?}
     */
    function (index, height) {
        var _this = this;
        if (this.horizontal && !this.vertical) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var stepHeight = height
                    ? height + 50
                    : _this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
                _this._renderer.setStyle(_this.container.nativeElement, 'height', stepHeight + 'px');
            }), 0);
        }
        else {
            this._renderer.removeStyle(this.container.nativeElement, 'height');
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbStepperComponent.prototype._initStepperVariation = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isBrowser) {
            if (this.vertical) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.horizontal = false;
                    _this._renderer.removeStyle(_this.container.nativeElement, 'height');
                }), 0);
            }
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._initStepperVariation();
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._setActiveStep(0);
        this.stepChange$ = from(this.steps.toArray());
        this.getStepChange$()
            .pipe(distinctUntilChanged(), takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.container.nativeElement.children[_this.activeStepIndex]) {
                /** @type {?} */
                var stepElContent = _this.container.nativeElement.children[_this._activeStepIndex]
                    .lastElementChild;
                _this._updateHorizontalStepperHeight(_this.activeStepIndex, stepElContent.clientHeight);
            }
        }));
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.stepContents) {
            /** @type {?} */
            var activeStep = this.stepContents
                .filter((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            function (el, index) { return el && index === _this.activeStepIndex; }))
                .map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el.nativeElement; }))[0];
            if (activeStep.innerHTMl !== this.stepTextContent) {
                this.stepChangeSubject.next(activeStep.innerHTML);
            }
            this.stepTextContent = activeStep.innerHTML;
        }
    };
    /**
     * @return {?}
     */
    MdbStepperComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
    };
    MdbStepperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-stepper',
                    exportAs: 'mdbStepper',
                    template: "<div class=\"card-body\">\n  <ul #container class=\"stepper\" [ngClass]=\"{ horizontal: !vertical && horizontal }\">\n    <li\n      [ngClass]=\"{ active: step.isActive, done: step.isDone, wrong: step.isWrong }\"\n      class=\"step\"\n      *ngFor=\"let step of steps; let i = index\"\n    >\n      <div\n        #stepTitle\n        class=\"step-title waves-effect waves-dark\"\n        (click)=\"setNewActiveStep(i); onClick(i, $event)\"\n      >\n        <span>{{ step.name }}</span>\n        <span class=\"step-label\">{{ step.label }}</span>\n      </div>\n      <div\n        #stepContent\n        class=\"step-new-content\"\n        [ngClass]=\"{ 'd-block': step.isActive }\"\n        [@stepContentTransition]=\"!vertical && getAnimationState(i)\"\n      >\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </li>\n  </ul>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    animations: [
                        trigger('stepContentTransition', [
                            state('previous', style({ transform: 'translateX(-100%)', display: 'none' })),
                            state('next', style({ transform: 'translateX(100%)', display: 'none' })),
                            state('current', style({ transform: 'none', display: 'block' })),
                            transition('* => *', animate('600ms ease')),
                        ]),
                    ],
                    providers: [WavesDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".stepper li a{padding:1.5rem;font-size:1em;text-align:center}.stepper li a .circle{display:inline-block;color:#fff;border-radius:50%;background:rgba(0,0,0,.38);width:1.75rem;height:1.75rem;text-align:center;line-height:1.75rem;margin-right:.5rem}.stepper li a .label{display:inline-block;color:rgba(0,0,0,.38)}.stepper li.active a .circle,.stepper li.completed a .circle{background-color:#4285f4}.stepper li.active a .label,.stepper li.completed a .label{font-weight:600;color:rgba(0,0,0,.87)}.stepper li.warning a .circle{background-color:#ff3547}.stepper-horizontal{position:relative;display:flex;justify-content:space-between}.stepper-horizontal li{transition:.5s;display:flex;align-items:center;flex:1;position:relative}.stepper-horizontal li a .label{margin-top:.63rem}.stepper-horizontal li:not(:first-child):before,.stepper-horizontal li:not(:last-child):after{content:'';position:relative;flex:1;margin:.5rem 0 0;height:1px;background-color:rgba(0,0,0,.1)}@media (max-width:47.9375rem){.stepper-horizontal{flex-direction:column}.stepper-horizontal li{align-items:flex-start;flex-direction:column}.stepper-horizontal li a .label{flex-flow:column nowrap;order:2;margin-top:.2rem}.stepper-horizontal li:not(:last-child):after{content:'';position:absolute;width:1px;height:calc(100% - 40px);left:2.19rem;top:3.75rem}}.stepper-vertical{position:relative;display:flex;flex-direction:column;justify-content:space-between}.stepper-vertical li{display:flex;align-items:flex-start;flex:1;flex-direction:column;position:relative}.stepper-vertical li a{align-self:flex-start;display:flex;position:relative}.stepper-vertical li a .circle{order:1}.stepper-vertical li a .label{flex-flow:column nowrap;order:2;margin-top:.2rem}.stepper-vertical li.completed a .label{font-weight:500}.stepper-vertical li .step-content{display:block;margin-top:0;margin-left:3.13rem;padding:.94rem}.stepper-vertical li .step-content p{font-size:.88rem}.stepper-vertical li:not(:last-child):after{content:'';position:absolute;width:1px;height:calc(100% - 40px);left:2.19rem;top:3.44rem;background-color:rgba(0,0,0,.1)}label.invalid{font-size:.8rem;font-weight:500;color:red!important;top:50px!important}label.invalid.active{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}ul.stepper .wait-feedback{left:0;right:0;top:0;z-index:2;position:absolute;width:100%;height:100%;text-align:center;display:flex;justify-content:center;align-items:center}ul.stepper .step{position:relative;list-style:none}ul.stepper .step.feedbacking .step-new-content>:not(.wait-feedback){opacity:.1}ul.stepper .step:not(:last-of-type).active{margin-bottom:2.25rem}ul.stepper .step:before{position:absolute;top:.75rem;counter-increment:section;content:counter(section);height:1.75rem;width:1.75rem;color:#fff;background-color:rgba(0,0,0,.3);border-radius:100%;text-align:center;line-height:1.75rem;font-weight:400}ul.stepper .step.active:before{background-color:#4285f4}ul.stepper .step.done:before{content:'\\f00c';background-color:#00c851}ul.stepper .step.wrong:before{content:'\\f071';background-color:#ff3547}ul.stepper>li:not(:last-of-type){margin-bottom:.625rem;transition:margin-bottom .4s}ul.stepper .step-title{margin:0 -1.3rem;cursor:pointer;padding:.9688rem 2.75rem 1.5rem 4rem;display:block;position:relative}ul.stepper .step-title:after{content:attr(data-step-label);display:block;position:absolute;font-size:.8rem;color:#424242;font-weight:400}ul.stepper .step-title:hover{background-color:rgba(0,0,0,.06)}ul.stepper .step-label{font-size:.8rem;color:#424242;font-weight:400;position:absolute;top:40px;left:65px}ul.stepper .step-new-content{position:relative;display:none;width:inherit;margin-left:41px;margin-right:24px}ul.stepper>.step:not(:last-of-type):after{content:'';position:absolute;top:3.125rem;left:.8438rem;width:.0625rem;height:40%;height:calc(100% - 38px);background-color:rgba(0,0,0,.1);transition:.4s}ul.stepper>.step.active:not(:last-child):after{height:93%;height:calc(100% - 12px)}ul.stepper>.step[data-last=true]{margin-bottom:0}ul.stepper>.step[data-last=true]:after{height:0;width:0}ul.stepper .step-actions{display:-webkit-box;-webkit-box-pack:start}ul.stepper .step-actions .btn-flat:not(:last-child),ul.stepper .step-actions .btn-large:not(:last-child),ul.stepper .step-actions .btn:not(:last-child){margin-right:.3125rem}ul.stepper .step-new-content .row{margin-bottom:.4375rem}ul.stepper .validate{margin-bottom:0}ul.stepper.horizontal{position:relative;display:flex;justify-content:space-between;min-height:20rem;margin-left:-1.5rem;margin-right:-1.5rem;padding-left:1.5rem;padding-right:1.5rem;overflow:hidden}ul.stepper.horizontal:before{content:'';background-color:transparent;width:100%;min-height:5.25rem;position:absolute;left:-3px;border-top-left-radius:2px}ul.stepper.horizontal:first-child{margin-top:-2.7rem}ul.stepper.horizontal .step{position:static;margin:0;width:100%;display:flex;align-items:center;height:5.25rem!important}ul.stepper.horizontal .step:not(:last-of-type):after{content:'';position:static;display:inline-block;width:100%;height:.0625rem}ul.stepper.horizontal>.step:last-of-type,ul.stepper.horizontal>.step[data-last=true]{width:auto!important}ul.stepper.horizontal>.step.active:not(:last-of-type):after{content:'';position:static;display:inline-block;width:100%;height:.0625rem}ul.stepper.horizontal .step.active .step-title:before{background-color:#4285f4}ul.stepper.horizontal .step.done .step-title:before{font-family:'Font Awesome 5 Free';font-weight:900;content:'\\f00c';font-size:1rem;background:#00c851}ul.stepper.horizontal .step.wrong .step-title:before{font-family:'Font Awesome 5 Free';font-weight:900;content:'\\f071';font-size:1.1rem;background-color:#ff3547}ul.stepper.horizontal .step-title{position:relative;line-height:5.25rem;height:5.25rem;margin:0;padding:0 1.5625rem 0 4.0625rem;display:inline-block;max-width:13.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:0}ul.stepper.horizontal .step-label{position:absolute;top:20px;left:65px}ul.stepper.horizontal .step:before{content:none}ul.stepper.horizontal .step .step-title:before{position:absolute;top:1.7813rem;left:1.1875rem;counter-increment:section;content:counter(section);height:1.75rem;width:1.75rem;color:#fff;background-color:rgba(0,0,0,.3);border-radius:100%;text-align:center;line-height:1.75rem;font-weight:400}ul.stepper.horizontal .step-title:after{top:.9375rem}ul.stepper.horizontal .step-new-content{position:absolute;height:calc(100% - 84px);top:6rem;left:0;width:100%;overflow-y:auto;overflow-x:hidden;margin:0;padding:1.25rem 1.25rem 4.75rem}ul.stepper.horizontal .step-actions{position:absolute;bottom:0;left:0;width:100%;padding:20px;flex-direction:row-reverse}ul.stepper.horizontal .step-actions .btn-flat:not(:last-child),ul.stepper.horizontal .step-actions .btn-large:not(:last-child),ul.stepper.horizontal .step-actions .btn:not(:last-child){margin-left:.3125rem;margin-right:0}ul.stepper.horizontal .step-actions,ul.stepper.horizontal .step-new-content{padding-left:2.5rem;padding-right:2.5rem}ul.stepper .md-form label{left:0}ul.stepper .step.done:before{content:'\\f00c';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1rem}ul.stepper .step.wrong:before{content:'\\f071';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1.1rem}ul.stepper .step.active .step-title{font-weight:500}ul.stepper .step-new-content{overflow:hidden!important;height:auto!important}.card-body ul.stepper.horizontal li a:not(.picker__nav--prev):not(.picker__nav--next){padding:.84rem 2.14rem}.card-body ul.stepper.horizontal .step.active .step-title:before{background-color:#4285f4}.card-body ul.stepper.horizontal .step.done .step-title:before{content:'\\f00c';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1rem;background:#00c851}.card-body ul.stepper.horizontal .step.wrong .step-title:before{content:'\\f071';font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important;font-weight:900;font-size:1.1rem;background-color:#ff3547}.card-body ul.stepper.horizontal .step:before{content:none}@media (max-width:420px){ul.stepper.horizontal .step-title{padding-left:10px!important;padding-right:10px!important;line-height:9.25rem!important}}"]
                }] }
    ];
    /** @nocollapse */
    MdbStepperComponent.ctorParameters = function () { return [
        { type: WavesDirective },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbStepperComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [MdbStepComponent,] }],
        stepTitles: [{ type: ViewChildren, args: ['stepTitle',] }],
        stepContents: [{ type: ViewChildren, args: ['stepContent',] }],
        container: [{ type: ViewChild, args: ['container', { static: true },] }],
        linear: [{ type: Input }],
        disableWaves: [{ type: Input }],
        vertical: [{ type: Input }],
        stepChange: [{ type: Output }]
    };
    return MdbStepperComponent;
}());
export { MdbStepperComponent };
if (false) {
    /** @type {?} */
    MdbStepperComponent.prototype.steps;
    /** @type {?} */
    MdbStepperComponent.prototype.stepTitles;
    /** @type {?} */
    MdbStepperComponent.prototype.stepContents;
    /** @type {?} */
    MdbStepperComponent.prototype.container;
    /** @type {?} */
    MdbStepperComponent.prototype.linear;
    /** @type {?} */
    MdbStepperComponent.prototype.disableWaves;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._vertical;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChange;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._destroy;
    /** @type {?} */
    MdbStepperComponent.prototype.isBrowser;
    /** @type {?} */
    MdbStepperComponent.prototype.horizontal;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._activeStepIndex;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._activeStep;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype.stepTextContent;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChangeSubject;
    /** @type {?} */
    MdbStepperComponent.prototype.stepChange$;
    /** @type {?} */
    MdbStepperComponent.prototype.ripple;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    MdbStepperComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUVaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsTUFBTSxFQUVOLE1BQU0sRUFDTixZQUFZLEVBRVosdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLElBQUksRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFO0lBQUE7SUFLQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLHFDQUE2Qjs7SUFDN0IsMENBQXdCOztJQUN4Qix1Q0FBK0I7O0lBQy9CLDRDQUEwQjs7QUFHNUI7SUFpREUsNkJBQ1MsTUFBc0IsRUFDckIsU0FBb0IsRUFDcEIsTUFBeUIsRUFDWixVQUFrQjtRQUhoQyxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUNyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBNUIxQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFvQnRCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFaEIsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQVdsRixhQUFRLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFHaEQsZUFBVSxHQUFHLElBQUksQ0FBQztRQVlWLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRTdCLHNCQUFpQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBcEI5QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUE5QkQsc0JBQ0kseUNBQVE7Ozs7UUFEWjtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7OztRQUNELFVBQWEsS0FBYztZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFOzt3QkFDekQsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7eUJBQy9FLGdCQUFnQjtvQkFDbkIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN2RjthQUNGO1FBQ0gsQ0FBQzs7O09BZkE7SUFrQ0Qsc0JBQUksZ0RBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7OztRQUVELFVBQW9CLEtBQWE7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FKQTs7OztJQWFELDRDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELHFDQUFPOzs7OztJQUFQLFVBQVEsS0FBYSxFQUFFLEtBQVU7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7O2dCQUNoQixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sMENBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQXNCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsS0FBYTs7WUFDdkIsY0FBYyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZTtRQUNuRCxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxVQUFVLENBQUM7U0FDbkI7YUFBTSxJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLDZDQUFlOzs7OztJQUF2QixVQUF3QixLQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBTTs7O0lBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBYTs7WUFDdEIsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXOztZQUM5QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCOztZQUN4QyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7O1lBQ3JDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSzthQUM1QixPQUFPLEVBQUU7YUFDVCxTQUFTOzs7O1FBQUMsVUFBQyxJQUFzQixJQUFLLE9BQUEsSUFBSSxLQUFLLE9BQU8sRUFBaEIsQ0FBZ0IsRUFBQztRQUUxRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEQsT0FBTztTQUNSO1FBRUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUM3RCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQy9DLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNqRDtTQUNGO2FBQU07WUFDTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3JEO1lBRUQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ25CLFVBQVUsRUFBRSxPQUFPO1lBQ25CLGVBQWUsRUFBRSxZQUFZO1lBQzdCLFlBQVksRUFBRSxXQUFXO1lBQ3pCLGlCQUFpQixFQUFFLGdCQUFnQjtTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGdEQUFrQjs7OztJQUExQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFTyxpREFBbUI7Ozs7SUFBM0I7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7OztJQUVPLHNEQUF3Qjs7Ozs7SUFBaEMsVUFBaUMsSUFBc0I7O1lBQy9DLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVE7UUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTs7Z0JBQ3BCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQzlCLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVqQyxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7b0JBQ2xDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDekI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sMERBQTRCOzs7OztJQUFwQyxVQUFxQyxJQUFzQjtRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyw4Q0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLFlBQW9CO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Ozs7OztJQUVPLDRDQUFjOzs7OztJQUF0QixVQUF1QixLQUFhO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVPLHNEQUF3Qjs7OztJQUFoQzs7WUFDUSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxRQUFRLEVBQW5CLENBQW1CLEVBQUM7UUFDNUUsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFzQjtZQUN4QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8sNERBQThCOzs7Ozs7SUFBdEMsVUFBdUMsS0FBYSxFQUFFLE1BQWU7UUFBckUsaUJBV0M7UUFWQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLFVBQVU7OztZQUFDOztvQkFDSCxVQUFVLEdBQUcsTUFBTTtvQkFDdkIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFO29CQUNiLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsRUFBRTtnQkFDdEUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNyRixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7OztJQUVPLG1EQUFxQjs7OztJQUE3QjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsVUFBVTs7O2dCQUFDO29CQUNULEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDckUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1A7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsZ0RBQWtCOzs7SUFBbEI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEVBQUU7YUFDbEIsSUFBSSxDQUNILG9CQUFvQixFQUFFLEVBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUzs7O1FBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7O29CQUN6RCxhQUFhLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDL0UsZ0JBQWdCO2dCQUNuQixLQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdkY7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxtREFBcUI7OztJQUFyQjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztnQkFDZixVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVk7aUJBQ2pDLE1BQU07Ozs7O1lBQUMsVUFBQyxFQUFPLEVBQUUsS0FBYSxJQUFLLE9BQUEsRUFBRSxJQUFJLEtBQUssS0FBSyxLQUFJLENBQUMsZUFBZSxFQUFwQyxDQUFvQyxFQUFDO2lCQUN4RSxHQUFHOzs7O1lBQUMsVUFBQyxFQUFPLElBQUssT0FBQSxFQUFFLENBQUMsYUFBYSxFQUFoQixDQUFnQixFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksVUFBVSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuRDtZQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBeFNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLDgzQkFBcUM7b0JBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLHVCQUF1QixFQUFFOzRCQUMvQixLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzs0QkFDN0UsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7NEJBQ3hFLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzs0QkFDaEUsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQzVDLENBQUM7cUJBQ0g7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQTdCUSxjQUFjO2dCQVpyQixTQUFTO2dCQVFULGlCQUFpQjs2Q0FzRWQsTUFBTSxTQUFDLFdBQVc7Ozt3QkFsQ3BCLGVBQWUsU0FBQyxnQkFBZ0I7NkJBQ2hDLFlBQVksU0FBQyxXQUFXOytCQUN4QixZQUFZLFNBQUMsYUFBYTs0QkFDMUIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7eUJBRXZDLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQXFCTCxNQUFNOztJQTBQVCwwQkFBQztDQUFBLEFBelNELElBeVNDO1NBeFJZLG1CQUFtQjs7O0lBRTlCLG9DQUFzRTs7SUFDdEUseUNBQTZEOztJQUM3RCwyQ0FBaUU7O0lBQ2pFLHdDQUFnRTs7SUFFaEUscUNBQXdCOztJQUN4QiwyQ0FBOEI7Ozs7O0lBb0I5Qix3Q0FBMEI7O0lBRTFCLHlDQUEwRjs7Ozs7SUFXMUYsdUNBQWdEOztJQUVoRCx3Q0FBbUI7O0lBQ25CLHlDQUFrQjs7Ozs7SUFVbEIsK0NBQWlDOzs7OztJQUNqQywwQ0FBc0M7Ozs7O0lBQ3RDLDhDQUE2Qjs7SUFFN0IsZ0RBQWdEOztJQUNoRCwwQ0FBNkI7O0lBMUIzQixxQ0FBNkI7Ozs7O0lBQzdCLHdDQUE0Qjs7Ozs7SUFDNUIscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiU3RlcENvbXBvbmVudCB9IGZyb20gJy4vc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBXYXZlc0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2ZyZWUvd2F2ZXMvd2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjbGFzcyBTdGVwQ2hhbmdlRXZlbnQge1xuICBhY3RpdmVTdGVwOiBNZGJTdGVwQ29tcG9uZW50O1xuICBhY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgcHJldmlvdXNTdGVwOiBNZGJTdGVwQ29tcG9uZW50O1xuICBwcmV2aW91c1N0ZXBJbmRleDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc3RlcHBlcicsXG4gIGV4cG9ydEFzOiAnbWRiU3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0ZXBwZXItbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3N0ZXBDb250ZW50VHJhbnNpdGlvbicsIFtcbiAgICAgIHN0YXRlKCdwcmV2aW91cycsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxuICAgICAgc3RhdGUoJ25leHQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLCBkaXNwbGF5OiAnbm9uZScgfSkpLFxuICAgICAgc3RhdGUoJ2N1cnJlbnQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ25vbmUnLCBkaXNwbGF5OiAnYmxvY2snIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gKicsIGFuaW1hdGUoJzYwMG1zIGVhc2UnKSksXG4gICAgXSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1dhdmVzRGlyZWN0aXZlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlN0ZXBwZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkcmVuKE1kYlN0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8TWRiU3RlcENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBUaXRsZScpIHN0ZXBUaXRsZXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgQFZpZXdDaGlsZHJlbignc3RlcENvbnRlbnQnKSBzdGVwQ29udGVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGxpbmVhciA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlV2F2ZXMgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBzZXQgdmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsID0gdmFsdWU7XG4gICAgICB0aGlzLmhvcml6b250YWwgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLmFjdGl2ZVN0ZXBJbmRleF0pIHtcbiAgICAgICAgY29uc3Qgc3RlcEVsQ29udGVudCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bdGhpcy5fYWN0aXZlU3RlcEluZGV4XVxuICAgICAgICAgIC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCwgc3RlcEVsQ29udGVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBzdGVwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3RlcENoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RlcENoYW5nZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByaXBwbGU6IFdhdmVzRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgaXNCcm93c2VyOiBib29sZWFuO1xuICBob3Jpem9udGFsID0gdHJ1ZTtcblxuICBnZXQgYWN0aXZlU3RlcEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVTdGVwSW5kZXg7XG4gIH1cblxuICBzZXQgYWN0aXZlU3RlcEluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hY3RpdmVTdGVwSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2ZVN0ZXBJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9hY3RpdmVTdGVwOiBNZGJTdGVwQ29tcG9uZW50O1xuICBwcml2YXRlIHN0ZXBUZXh0Q29udGVudCA9ICcnO1xuXG4gIHN0ZXBDaGFuZ2VTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuICBzdGVwQ2hhbmdlJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIGdldFN0ZXBDaGFuZ2UkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcENoYW5nZVN1YmplY3Q7XG4gIH1cblxuICBvbkNsaWNrKGluZGV4OiBudW1iZXIsIGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZVdhdmVzKSB7XG4gICAgICBjb25zdCBjbGlja2VkRWwgPSB0aGlzLnN0ZXBUaXRsZXMudG9BcnJheSgpW2luZGV4XTtcbiAgICAgIHRoaXMucmlwcGxlLmVsID0gY2xpY2tlZEVsO1xuICAgICAgdGhpcy5yaXBwbGUuY2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzU3RlcFZhbGlkKHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpIHtcbiAgICBpZiAoIXN0ZXAuc3RlcEZvcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwLnN0ZXBGb3JtICYmIHN0ZXAuc3RlcEZvcm0udmFsaWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvblN0YXRlKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5leHRFbFBvc2l0aW9uID0gaW5kZXggLSB0aGlzLmFjdGl2ZVN0ZXBJbmRleDtcbiAgICBpZiAobmV4dEVsUG9zaXRpb24gPCAwKSB7XG4gICAgICByZXR1cm4gJ3ByZXZpb3VzJztcbiAgICB9IGVsc2UgaWYgKG5leHRFbFBvc2l0aW9uID4gMCkge1xuICAgICAgcmV0dXJuICduZXh0JztcbiAgICB9XG4gICAgcmV0dXJuICdjdXJyZW50JztcbiAgfVxuXG4gIHByaXZhdGUgX2dldFN0ZXBCeUluZGV4KGluZGV4OiBudW1iZXIpOiBNZGJTdGVwQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcy50b0FycmF5KClbaW5kZXhdO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVTdGVwSW5kZXggPCB0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc2V0TmV3QWN0aXZlU3RlcCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCArIDEpO1xuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlU3RlcEluZGV4ID4gMCkge1xuICAgICAgdGhpcy5zZXROZXdBY3RpdmVTdGVwKHRoaXMuYWN0aXZlU3RlcEluZGV4IC0gMSk7XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMubGluZWFyKSB7XG4gICAgICB0aGlzLl9tYXJrQ3VycmVudEFzRG9uZSgpO1xuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmV3QWN0aXZlU3RlcChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSB0aGlzLl9hY3RpdmVTdGVwO1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwSW5kZXggPSB0aGlzLl9hY3RpdmVTdGVwSW5kZXg7XG4gICAgY29uc3QgbmV3U3RlcCA9IHRoaXMuX2dldFN0ZXBCeUluZGV4KGluZGV4KTtcbiAgICBjb25zdCBuZXdTdGVwSW5kZXggPSB0aGlzLnN0ZXBzXG4gICAgICAudG9BcnJheSgpXG4gICAgICAuZmluZEluZGV4KChzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSA9PiBzdGVwID09PSBuZXdTdGVwKTtcblxuICAgIGlmICh0aGlzLmxpbmVhciAmJiAhdGhpcy5faXNOZXdTdGVwTGluZWFyKGluZGV4KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXdTdGVwSW5kZXggPCB0aGlzLl9hY3RpdmVTdGVwSW5kZXggJiYgIW5ld1N0ZXAuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXMobmV3U3RlcCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgaW5kZXggPiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgaWYgKHRoaXMuX2lzU3RlcFZhbGlkKHRoaXMuX2FjdGl2ZVN0ZXApKSB7XG4gICAgICAgIHRoaXMuX21hcmtDdXJyZW50QXNEb25lKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFya0N1cnJlbnRBc1dyb25nKCk7XG4gICAgICAgIHRoaXMuX21hcmtTdGVwQ29udHJvbHNBc0RpcnR5KHRoaXMuX2FjdGl2ZVN0ZXApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmFjdGl2ZVN0ZXBJbmRleCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVTdGVwVmFsaWRhdGlvbkNsYXNzZXModGhpcy5fYWN0aXZlU3RlcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCk7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKGluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLnN0ZXBDaGFuZ2UuZW1pdCh7XG4gICAgICBhY3RpdmVTdGVwOiBuZXdTdGVwLFxuICAgICAgYWN0aXZlU3RlcEluZGV4OiBuZXdTdGVwSW5kZXgsXG4gICAgICBwcmV2aW91c1N0ZXA6IGN1cnJlbnRTdGVwLFxuICAgICAgcHJldmlvdXNTdGVwSW5kZXg6IGN1cnJlbnRTdGVwSW5kZXgsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrQ3VycmVudEFzRG9uZSgpIHtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzRG9uZSA9IHRydWU7XG4gICAgdGhpcy5fYWN0aXZlU3RlcC5pc1dyb25nID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9tYXJrQ3VycmVudEFzV3JvbmcoKSB7XG4gICAgdGhpcy5fYWN0aXZlU3RlcC5pc1dyb25nID0gdHJ1ZTtcbiAgICB0aGlzLl9hY3RpdmVTdGVwLmlzRG9uZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya1N0ZXBDb250cm9sc0FzRGlydHkoc3RlcDogTWRiU3RlcENvbXBvbmVudCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gc3RlcC5zdGVwRm9ybS5jb250cm9scztcbiAgICBpZiAoc3RlcC5zdGVwRm9ybS5jb250cm9scykge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbnRyb2xzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb250cm9sID0gY29udHJvbHNba2V5c1tpXV07XG5cbiAgICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xuICAgICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlU3RlcFZhbGlkYXRpb25DbGFzc2VzKHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpIHtcbiAgICBzdGVwLmlzRG9uZSA9IGZhbHNlO1xuICAgIHN0ZXAuaXNXcm9uZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNOZXdTdGVwTGluZWFyKG5ld1N0ZXBJbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlU3RlcEluZGV4IC0gbmV3U3RlcEluZGV4ID09PSAxIHx8IHRoaXMuYWN0aXZlU3RlcEluZGV4IC0gbmV3U3RlcEluZGV4ID09PSAtMTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldEFjdGl2ZVN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQoaW5kZXgpO1xuICAgIHRoaXMuYWN0aXZlU3RlcEluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fYWN0aXZlU3RlcCA9IHRoaXMuX2dldFN0ZXBCeUluZGV4KHRoaXMuYWN0aXZlU3RlcEluZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZUN1cnJlbnRBY3RpdmVTdGVwKCkge1xuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVTdGVwID0gdGhpcy5zdGVwcy5maW5kKGFjdGl2ZVN0ZXAgPT4gYWN0aXZlU3RlcC5pc0FjdGl2ZSk7XG4gICAgaWYgKGN1cnJlbnRBY3RpdmVTdGVwKSB7XG4gICAgICBjdXJyZW50QWN0aXZlU3RlcC5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0QWxsKCkge1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcDogTWRiU3RlcENvbXBvbmVudCkgPT4ge1xuICAgICAgc3RlcC5yZXNldCgpO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlU3RlcCgwKTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQoaW5kZXg6IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuaG9yaXpvbnRhbCAmJiAhdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBIZWlnaHQgPSBoZWlnaHRcbiAgICAgICAgICA/IGhlaWdodCArIDUwXG4gICAgICAgICAgOiB0aGlzLnN0ZXBDb250ZW50cy50b0FycmF5KClbaW5kZXhdLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgNTA7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBzdGVwSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luaXRTdGVwcGVyVmFyaWF0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5ob3Jpem9udGFsID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5faW5pdFN0ZXBwZXJWYXJpYXRpb24oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKDApO1xuICAgIHRoaXMuc3RlcENoYW5nZSQgPSBmcm9tKHRoaXMuc3RlcHMudG9BcnJheSgpKTtcbiAgICB0aGlzLmdldFN0ZXBDaGFuZ2UkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLmFjdGl2ZVN0ZXBJbmRleF0pIHtcbiAgICAgICAgICBjb25zdCBzdGVwRWxDb250ZW50ID0gdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5jaGlsZHJlblt0aGlzLl9hY3RpdmVTdGVwSW5kZXhdXG4gICAgICAgICAgICAubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICB0aGlzLl91cGRhdGVIb3Jpem9udGFsU3RlcHBlckhlaWdodCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCwgc3RlcEVsQ29udGVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5zdGVwQ29udGVudHMpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZVN0ZXAgPSB0aGlzLnN0ZXBDb250ZW50c1xuICAgICAgICAuZmlsdGVyKChlbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBlbCAmJiBpbmRleCA9PT0gdGhpcy5hY3RpdmVTdGVwSW5kZXgpXG4gICAgICAgIC5tYXAoKGVsOiBhbnkpID0+IGVsLm5hdGl2ZUVsZW1lbnQpWzBdO1xuICAgICAgaWYgKGFjdGl2ZVN0ZXAuaW5uZXJIVE1sICE9PSB0aGlzLnN0ZXBUZXh0Q29udGVudCkge1xuICAgICAgICB0aGlzLnN0ZXBDaGFuZ2VTdWJqZWN0Lm5leHQoYWN0aXZlU3RlcC5pbm5lckhUTUwpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdGVwVGV4dENvbnRlbnQgPSBhY3RpdmVTdGVwLmlubmVySFRNTDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==