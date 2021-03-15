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
export class StepChangeEvent {
}
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
export class MdbStepperComponent {
    /**
     * @param {?} ripple
     * @param {?} _renderer
     * @param {?} _cdRef
     * @param {?} platformId
     */
    constructor(ripple, _renderer, _cdRef, platformId) {
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
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set vertical(value) {
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
                const stepElContent = this.container.nativeElement.children[this._activeStepIndex]
                    .lastElementChild;
                this._updateHorizontalStepperHeight(this.activeStepIndex, stepElContent.clientHeight);
            }
        }
    }
    /**
     * @return {?}
     */
    get activeStepIndex() {
        return this._activeStepIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeStepIndex(value) {
        this._activeStepIndex = value;
    }
    /**
     * @return {?}
     */
    getStepChange$() {
        return this.stepChangeSubject;
    }
    /**
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    onClick(index, event) {
        if (!this.disableWaves) {
            /** @type {?} */
            const clickedEl = this.stepTitles.toArray()[index];
            this.ripple.el = clickedEl;
            this.ripple.click(event);
        }
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    _isStepValid(step) {
        if (!step.stepForm) {
            return true;
        }
        if (step.stepForm && step.stepForm.valid) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getAnimationState(index) {
        /** @type {?} */
        const nextElPosition = index - this.activeStepIndex;
        if (nextElPosition < 0) {
            return 'previous';
        }
        else if (nextElPosition > 0) {
            return 'next';
        }
        return 'current';
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _getStepByIndex(index) {
        return this.steps.toArray()[index];
    }
    /**
     * @return {?}
     */
    next() {
        if (this.activeStepIndex < this.steps.length - 1) {
            this.setNewActiveStep(this.activeStepIndex + 1);
            this._cdRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    previous() {
        if (this.activeStepIndex > 0) {
            this.setNewActiveStep(this.activeStepIndex - 1);
            this._cdRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    submit() {
        if (this.linear) {
            this._markCurrentAsDone();
            this._cdRef.markForCheck();
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setNewActiveStep(index) {
        /** @type {?} */
        const currentStep = this._activeStep;
        /** @type {?} */
        const currentStepIndex = this._activeStepIndex;
        /** @type {?} */
        const newStep = this._getStepByIndex(index);
        /** @type {?} */
        const newStepIndex = this.steps
            .toArray()
            .findIndex((/**
         * @param {?} step
         * @return {?}
         */
        (step) => step === newStep));
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
    }
    /**
     * @private
     * @return {?}
     */
    _markCurrentAsDone() {
        this._activeStep.isDone = true;
        this._activeStep.isWrong = false;
    }
    /**
     * @private
     * @return {?}
     */
    _markCurrentAsWrong() {
        this._activeStep.isWrong = true;
        this._activeStep.isDone = false;
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    _markStepControlsAsDirty(step) {
        /** @type {?} */
        const controls = step.stepForm.controls;
        if (step.stepForm.controls) {
            /** @type {?} */
            const keys = Object.keys(controls);
            for (let i = 0; i < keys.length; i++) {
                /** @type {?} */
                const control = controls[keys[i]];
                if (control instanceof FormControl) {
                    control.markAsTouched();
                }
            }
        }
    }
    /**
     * @private
     * @param {?} step
     * @return {?}
     */
    _removeStepValidationClasses(step) {
        step.isDone = false;
        step.isWrong = false;
    }
    /**
     * @private
     * @param {?} newStepIndex
     * @return {?}
     */
    _isNewStepLinear(newStepIndex) {
        return this.activeStepIndex - newStepIndex === 1 || this.activeStepIndex - newStepIndex === -1;
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    _setActiveStep(index) {
        this.steps.toArray()[index].isActive = true;
        this._updateHorizontalStepperHeight(index);
        this.activeStepIndex = index;
        this._activeStep = this._getStepByIndex(this.activeStepIndex);
    }
    /**
     * @private
     * @return {?}
     */
    _removeCurrentActiveStep() {
        /** @type {?} */
        const currentActiveStep = this.steps.find((/**
         * @param {?} activeStep
         * @return {?}
         */
        activeStep => activeStep.isActive));
        if (currentActiveStep) {
            currentActiveStep.isActive = false;
        }
    }
    /**
     * @return {?}
     */
    resetAll() {
        this.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        (step) => {
            step.reset();
            this._setActiveStep(0);
            this._cdRef.markForCheck();
        }));
    }
    /**
     * @private
     * @param {?} index
     * @param {?=} height
     * @return {?}
     */
    _updateHorizontalStepperHeight(index, height) {
        if (this.horizontal && !this.vertical) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const stepHeight = height
                    ? height + 50
                    : this.stepContents.toArray()[index].nativeElement.scrollHeight + 50;
                this._renderer.setStyle(this.container.nativeElement, 'height', stepHeight + 'px');
            }), 0);
        }
        else {
            this._renderer.removeStyle(this.container.nativeElement, 'height');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _initStepperVariation() {
        if (this.isBrowser) {
            if (this.vertical) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.horizontal = false;
                    this._renderer.removeStyle(this.container.nativeElement, 'height');
                }), 0);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initStepperVariation();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._setActiveStep(0);
        this.stepChange$ = from(this.steps.toArray());
        this.getStepChange$()
            .pipe(distinctUntilChanged(), takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this.container.nativeElement.children[this.activeStepIndex]) {
                /** @type {?} */
                const stepElContent = this.container.nativeElement.children[this._activeStepIndex]
                    .lastElementChild;
                this._updateHorizontalStepperHeight(this.activeStepIndex, stepElContent.clientHeight);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.stepContents) {
            /** @type {?} */
            const activeStep = this.stepContents
                .filter((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            (el, index) => el && index === this.activeStepIndex))
                .map((/**
             * @param {?} el
             * @return {?}
             */
            (el) => el.nativeElement))[0];
            if (activeStep.innerHTMl !== this.stepTextContent) {
                this.stepChangeSubject.next(activeStep.innerHTML);
            }
            this.stepTextContent = activeStep.innerHTML;
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
MdbStepperComponent.ctorParameters = () => [
    { type: WavesDirective },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsWUFBWSxFQUVaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsTUFBTSxFQUVOLE1BQU0sRUFDTixZQUFZLEVBRVosdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLElBQUksRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE1BQU0sT0FBTyxlQUFlO0NBSzNCOzs7SUFKQyxxQ0FBNkI7O0lBQzdCLDBDQUF3Qjs7SUFDeEIsdUNBQStCOztJQUMvQiw0Q0FBMEI7O0FBb0I1QixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBZ0M5QixZQUNTLE1BQXNCLEVBQ3JCLFNBQW9CLEVBQ3BCLE1BQXlCLEVBQ1osVUFBa0I7UUFIaEMsV0FBTSxHQUFO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QUM3Qix3Q0FBNEI7Ozs7O0lBQzVCLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1kYlN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgV2F2ZXNEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgU3RlcENoYW5nZUV2ZW50IHtcbiAgYWN0aXZlU3RlcDogTWRiU3RlcENvbXBvbmVudDtcbiAgYWN0aXZlU3RlcEluZGV4OiBudW1iZXI7XG4gIHByZXZpb3VzU3RlcDogTWRiU3RlcENvbXBvbmVudDtcbiAgcHJldmlvdXNTdGVwSW5kZXg6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXN0ZXBwZXInLFxuICBleHBvcnRBczogJ21kYlN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwcGVyLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzdGVwQ29udGVudFRyYW5zaXRpb24nLCBbXG4gICAgICBzdGF0ZSgncHJldmlvdXMnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEwMCUpJywgZGlzcGxheTogJ25vbmUnIH0pKSxcbiAgICAgIHN0YXRlKCduZXh0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJywgZGlzcGxheTogJ25vbmUnIH0pKSxcbiAgICAgIHN0YXRlKCdjdXJyZW50Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICdub25lJywgZGlzcGxheTogJ2Jsb2NrJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IConLCBhbmltYXRlKCc2MDBtcyBlYXNlJykpLFxuICAgIF0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtXYXZlc0RpcmVjdGl2ZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJTdGVwcGVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PE1kYlN0ZXBDb21wb25lbnQ+O1xuICBAVmlld0NoaWxkcmVuKCdzdGVwVGl0bGUnKSBzdGVwVGl0bGVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGRyZW4oJ3N0ZXBDb250ZW50Jykgc3RlcENvbnRlbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBsaW5lYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZVdhdmVzID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGdldCB2ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgc2V0IHZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xuICAgICAgdGhpcy5ob3Jpem9udGFsID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsID0gdmFsdWU7XG4gICAgICB0aGlzLmhvcml6b250YWwgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bdGhpcy5hY3RpdmVTdGVwSW5kZXhdKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBFbENvbnRlbnQgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW3RoaXMuX2FjdGl2ZVN0ZXBJbmRleF1cbiAgICAgICAgICAubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgdGhpcy5fdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQodGhpcy5hY3RpdmVTdGVwSW5kZXgsIHN0ZXBFbENvbnRlbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgc3RlcENoYW5nZTogRXZlbnRFbWl0dGVyPFN0ZXBDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0ZXBDaGFuZ2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmlwcGxlOiBXYXZlc0RpcmVjdGl2ZSxcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3k6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgaG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgZ2V0IGFjdGl2ZVN0ZXBJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlU3RlcEluZGV4O1xuICB9XG5cbiAgc2V0IGFjdGl2ZVN0ZXBJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYWN0aXZlU3RlcEluZGV4ID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmVTdGVwSW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYWN0aXZlU3RlcDogTWRiU3RlcENvbXBvbmVudDtcbiAgcHJpdmF0ZSBzdGVwVGV4dENvbnRlbnQgPSAnJztcblxuICBzdGVwQ2hhbmdlU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgc3RlcENoYW5nZSQ6IE9ic2VydmFibGU8YW55PjtcblxuICBnZXRTdGVwQ2hhbmdlJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0ZXBDaGFuZ2VTdWJqZWN0O1xuICB9XG5cbiAgb25DbGljayhpbmRleDogbnVtYmVyLCBldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVXYXZlcykge1xuICAgICAgY29uc3QgY2xpY2tlZEVsID0gdGhpcy5zdGVwVGl0bGVzLnRvQXJyYXkoKVtpbmRleF07XG4gICAgICB0aGlzLnJpcHBsZS5lbCA9IGNsaWNrZWRFbDtcbiAgICAgIHRoaXMucmlwcGxlLmNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc1N0ZXBWYWxpZChzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSB7XG4gICAgaWYgKCFzdGVwLnN0ZXBGb3JtKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcC5zdGVwRm9ybSAmJiBzdGVwLnN0ZXBGb3JtLnZhbGlkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRBbmltYXRpb25TdGF0ZShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBuZXh0RWxQb3NpdGlvbiA9IGluZGV4IC0gdGhpcy5hY3RpdmVTdGVwSW5kZXg7XG4gICAgaWYgKG5leHRFbFBvc2l0aW9uIDwgMCkge1xuICAgICAgcmV0dXJuICdwcmV2aW91cyc7XG4gICAgfSBlbHNlIGlmIChuZXh0RWxQb3NpdGlvbiA+IDApIHtcbiAgICAgIHJldHVybiAnbmV4dCc7XG4gICAgfVxuICAgIHJldHVybiAnY3VycmVudCc7XG4gIH1cblxuICBwcml2YXRlIF9nZXRTdGVwQnlJbmRleChpbmRleDogbnVtYmVyKTogTWRiU3RlcENvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNldE5ld0FjdGl2ZVN0ZXAodGhpcy5hY3RpdmVTdGVwSW5kZXggKyAxKTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZVN0ZXBJbmRleCA+IDApIHtcbiAgICAgIHRoaXMuc2V0TmV3QWN0aXZlU3RlcCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCAtIDEpO1xuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmxpbmVhcikge1xuICAgICAgdGhpcy5fbWFya0N1cnJlbnRBc0RvbmUoKTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5ld0FjdGl2ZVN0ZXAoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gdGhpcy5fYWN0aXZlU3RlcDtcbiAgICBjb25zdCBjdXJyZW50U3RlcEluZGV4ID0gdGhpcy5fYWN0aXZlU3RlcEluZGV4O1xuICAgIGNvbnN0IG5ld1N0ZXAgPSB0aGlzLl9nZXRTdGVwQnlJbmRleChpbmRleCk7XG4gICAgY29uc3QgbmV3U3RlcEluZGV4ID0gdGhpcy5zdGVwc1xuICAgICAgLnRvQXJyYXkoKVxuICAgICAgLmZpbmRJbmRleCgoc3RlcDogTWRiU3RlcENvbXBvbmVudCkgPT4gc3RlcCA9PT0gbmV3U3RlcCk7XG5cbiAgICBpZiAodGhpcy5saW5lYXIgJiYgIXRoaXMuX2lzTmV3U3RlcExpbmVhcihpbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV3U3RlcEluZGV4IDwgdGhpcy5fYWN0aXZlU3RlcEluZGV4ICYmICFuZXdTdGVwLmVkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlU3RlcFZhbGlkYXRpb25DbGFzc2VzKG5ld1N0ZXApO1xuXG4gICAgaWYgKHRoaXMubGluZWFyICYmIGluZGV4ID4gdGhpcy5hY3RpdmVTdGVwSW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLl9pc1N0ZXBWYWxpZCh0aGlzLl9hY3RpdmVTdGVwKSkge1xuICAgICAgICB0aGlzLl9tYXJrQ3VycmVudEFzRG9uZSgpO1xuICAgICAgICB0aGlzLl9yZW1vdmVDdXJyZW50QWN0aXZlU3RlcCgpO1xuICAgICAgICB0aGlzLl9zZXRBY3RpdmVTdGVwKGluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21hcmtDdXJyZW50QXNXcm9uZygpO1xuICAgICAgICB0aGlzLl9tYXJrU3RlcENvbnRyb2xzQXNEaXJ0eSh0aGlzLl9hY3RpdmVTdGVwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGluZGV4IDwgdGhpcy5hY3RpdmVTdGVwSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlU3RlcFZhbGlkYXRpb25DbGFzc2VzKHRoaXMuX2FjdGl2ZVN0ZXApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW1vdmVDdXJyZW50QWN0aXZlU3RlcCgpO1xuICAgICAgdGhpcy5fc2V0QWN0aXZlU3RlcChpbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGVwQ2hhbmdlLmVtaXQoe1xuICAgICAgYWN0aXZlU3RlcDogbmV3U3RlcCxcbiAgICAgIGFjdGl2ZVN0ZXBJbmRleDogbmV3U3RlcEluZGV4LFxuICAgICAgcHJldmlvdXNTdGVwOiBjdXJyZW50U3RlcCxcbiAgICAgIHByZXZpb3VzU3RlcEluZGV4OiBjdXJyZW50U3RlcEluZGV4LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0N1cnJlbnRBc0RvbmUoKSB7XG4gICAgdGhpcy5fYWN0aXZlU3RlcC5pc0RvbmUgPSB0cnVlO1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNXcm9uZyA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWFya0N1cnJlbnRBc1dyb25nKCkge1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAuaXNXcm9uZyA9IHRydWU7XG4gICAgdGhpcy5fYWN0aXZlU3RlcC5pc0RvbmUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcmtTdGVwQ29udHJvbHNBc0RpcnR5KHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpIHtcbiAgICBjb25zdCBjb250cm9scyA9IHN0ZXAuc3RlcEZvcm0uY29udHJvbHM7XG4gICAgaWYgKHN0ZXAuc3RlcEZvcm0uY29udHJvbHMpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb250cm9scyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGNvbnRyb2xzW2tleXNbaV1dO1xuXG4gICAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZVN0ZXBWYWxpZGF0aW9uQ2xhc3NlcyhzdGVwOiBNZGJTdGVwQ29tcG9uZW50KSB7XG4gICAgc3RlcC5pc0RvbmUgPSBmYWxzZTtcbiAgICBzdGVwLmlzV3JvbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzTmV3U3RlcExpbmVhcihuZXdTdGVwSW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCAtIG5ld1N0ZXBJbmRleCA9PT0gMSB8fCB0aGlzLmFjdGl2ZVN0ZXBJbmRleCAtIG5ld1N0ZXBJbmRleCA9PT0gLTE7XG4gIH1cblxuICBwcml2YXRlIF9zZXRBY3RpdmVTdGVwKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKVtpbmRleF0uaXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KGluZGV4KTtcbiAgICB0aGlzLmFjdGl2ZVN0ZXBJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX2FjdGl2ZVN0ZXAgPSB0aGlzLl9nZXRTdGVwQnlJbmRleCh0aGlzLmFjdGl2ZVN0ZXBJbmRleCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVDdXJyZW50QWN0aXZlU3RlcCgpIHtcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlU3RlcCA9IHRoaXMuc3RlcHMuZmluZChhY3RpdmVTdGVwID0+IGFjdGl2ZVN0ZXAuaXNBY3RpdmUpO1xuICAgIGlmIChjdXJyZW50QWN0aXZlU3RlcCkge1xuICAgICAgY3VycmVudEFjdGl2ZVN0ZXAuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXNldEFsbCgpIHtcbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXA6IE1kYlN0ZXBDb21wb25lbnQpID0+IHtcbiAgICAgIHN0ZXAucmVzZXQoKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZVN0ZXAoMCk7XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUhvcml6b250YWxTdGVwcGVySGVpZ2h0KGluZGV4OiBudW1iZXIsIGhlaWdodD86IG51bWJlcikge1xuICAgIGlmICh0aGlzLmhvcml6b250YWwgJiYgIXRoaXMudmVydGljYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGVwSGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgICAgPyBoZWlnaHQgKyA1MFxuICAgICAgICAgIDogdGhpcy5zdGVwQ29udGVudHMudG9BcnJheSgpW2luZGV4XS5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodCArIDUwO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jywgc3RlcEhlaWdodCArICdweCcpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbml0U3RlcHBlclZhcmlhdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2luaXRTdGVwcGVyVmFyaWF0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fc2V0QWN0aXZlU3RlcCgwKTtcbiAgICB0aGlzLnN0ZXBDaGFuZ2UkID0gZnJvbSh0aGlzLnN0ZXBzLnRvQXJyYXkoKSk7XG4gICAgdGhpcy5nZXRTdGVwQ2hhbmdlJCgpXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bdGhpcy5hY3RpdmVTdGVwSW5kZXhdKSB7XG4gICAgICAgICAgY29uc3Qgc3RlcEVsQ29udGVudCA9IHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bdGhpcy5fYWN0aXZlU3RlcEluZGV4XVxuICAgICAgICAgICAgLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSG9yaXpvbnRhbFN0ZXBwZXJIZWlnaHQodGhpcy5hY3RpdmVTdGVwSW5kZXgsIHN0ZXBFbENvbnRlbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuc3RlcENvbnRlbnRzKSB7XG4gICAgICBjb25zdCBhY3RpdmVTdGVwID0gdGhpcy5zdGVwQ29udGVudHNcbiAgICAgICAgLmZpbHRlcigoZWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gZWwgJiYgaW5kZXggPT09IHRoaXMuYWN0aXZlU3RlcEluZGV4KVxuICAgICAgICAubWFwKChlbDogYW55KSA9PiBlbC5uYXRpdmVFbGVtZW50KVswXTtcbiAgICAgIGlmIChhY3RpdmVTdGVwLmlubmVySFRNbCAhPT0gdGhpcy5zdGVwVGV4dENvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5zdGVwQ2hhbmdlU3ViamVjdC5uZXh0KGFjdGl2ZVN0ZXAuaW5uZXJIVE1MKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RlcFRleHRDb250ZW50ID0gYWN0aXZlU3RlcC5pbm5lckhUTUw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=