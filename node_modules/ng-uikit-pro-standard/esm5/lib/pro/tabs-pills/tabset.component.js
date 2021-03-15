/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewChildren, ViewEncapsulation, } from '@angular/core';
import { TabsetConfig } from './tabset.config';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { isPlatformBrowser } from '@angular/common';
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(platformId, config, ripple, cdRef, renderer) {
        this.ripple = ripple;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.tabs = [];
        this.classMap = {};
        this.isBrowser = null;
        this.clazz = true;
        this.disableWaves = false;
        this.showBsTab = new EventEmitter();
        this.shownBsTab = new EventEmitter();
        this.hideBsTab = new EventEmitter();
        this.hiddenBsTab = new EventEmitter();
        this.getActiveTab = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: /**
         * if true tabs will be placed vertically
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
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.setActiveTab = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.tabs[index - 1].type !== 'content') {
            this.tabs[index - 1].active = true;
            this.getActiveTab.emit({
                el: this.tabs[index - 1],
                activeTabIndex: index - 1,
            });
            this.cdRef.detectChanges();
        }
        else {
            this.tabs[index - 1].select.emit(this.tabs[index - 1]);
        }
    };
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.click = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        /** @type {?} */
        var prev = this.tabEl.toArray()[this.getActive()];
        /** @type {?} */
        var clicked = this.tabEl.toArray()[index];
        this.hideBsTab.emit({
            target: clicked,
            relatedTarget: prev,
        });
        this.showBsTab.emit({
            target: clicked,
            relatedTarget: prev,
        });
        this.setActiveTab(index + 1);
        if (this.contentClass !== 'vertical' && !this.disableWaves) {
            this.ripple.el = clicked;
            this.ripple.click(event);
        }
        this.hiddenBsTab.emit({
            target: clicked,
            relatedTarget: prev,
        });
        this.shownBsTab.emit({
            target: clicked,
            relatedTarget: prev,
        });
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getActive = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var tabs = this.tabs.map((/**
         * @param {?} object
         * @param {?} index
         * @return {?}
         */
        function (object, index) {
            return {
                index: index,
                object: object,
            };
        }));
        try {
            for (var tabs_1 = tslib_1.__values(tabs), tabs_1_1 = tabs_1.next(); !tabs_1_1.done; tabs_1_1 = tabs_1.next()) {
                var tab = tabs_1_1.value;
                if (tab.object.active) {
                    return tab.index;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tabs_1_1 && !tabs_1_1.done && (_a = tabs_1.return)) _a.call(tabs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var insertPos = this.tabs.findIndex((/**
         * @param {?} aTab
         * @return {?}
         */
        function (aTab) { return aTab.tabOrder > tab.tabOrder; }));
        if (insertPos >= 0) {
            this.tabs.splice(insertPos, 0, tab);
        }
        else {
            this.tabs.push(tab);
        }
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
        this.cdRef.markForCheck();
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @protected
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @protected
     * @return {?}
     */
    function () {
        this.classMap = {
            'nav-stacked': this.vertical,
            'nav-justified': this.justified,
        };
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.listGet = /**
     * @return {?}
     */
    function () {
        if (this.vertical) {
            this.listGetClass = this.tabsButtonsClass ? this.tabsButtonsClass : 'col-md-3';
        }
        else {
            this.listGetClass = this.tabsButtonsClass ? this.tabsButtonsClass : 'col-md-12';
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.tabsGet = /**
     * @return {?}
     */
    function () {
        if (this.vertical) {
            this.tabsGetClass = this.tabsContentClass ? this.tabsContentClass : 'col-md-9';
        }
        else {
            this.tabsGetClass = this.tabsContentClass ? this.tabsContentClass : 'col-md-12';
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getActiveElement = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var tabs = this.tabs.map((/**
         * @param {?} object
         * @param {?} index
         * @return {?}
         */
        function (object, index) {
            return {
                index: index,
                object: object,
            };
        }));
        try {
            for (var tabs_2 = tslib_1.__values(tabs), tabs_2_1 = tabs_2.next(); !tabs_2_1.done; tabs_2_1 = tabs_2.next()) {
                var tab = tabs_2_1.value;
                if (tab.object.active) {
                    return {
                        el: tab.object,
                        activeTabIndex: tab.index,
                    };
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (tabs_2_1 && !tabs_2_1.done && (_a = tabs_2.return)) _a.call(tabs_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.showActiveIndex = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeElement = this.getActiveElement();
        this.getActiveTab.emit(activeElement);
    };
    /**
     * @private
     * @return {?}
     */
    TabsetComponent.prototype.getFirstActiveTabIndex = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeTabs = this.tabs.filter((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            return !tab.disabled;
        }));
        return this.tabs.indexOf(activeTabs[0]);
    };
    /**
     * @private
     * @return {?}
     */
    TabsetComponent.prototype.removeActiveTabs = /**
     * @private
     * @return {?}
     */
    function () {
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        function (tab) {
            tab.active = false;
        }));
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.initActiveTab = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.getFirstActiveTabIndex();
        if (index === -1) {
            this.removeActiveTabs();
            return;
        }
        this.setActiveTab(index + 1);
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.listGet();
        this.tabsGet();
        this.showActiveIndex();
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initActiveTab();
        if (this.tabs.findIndex((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.type === 'content'; })) !== -1) {
            /** @type {?} */
            var spacer = this.renderer.createElement('li');
            /** @type {?} */
            var firstContentTypeItemIndex = this.tabs.findIndex((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return el.type === 'content'; }));
            this.renderer.addClass(spacer, 'nav-item');
            this.renderer.addClass(spacer, 'flex-fill');
            this.renderer.insertBefore(this.itemsList.nativeElement, spacer, this.itemsList.nativeElement.children[firstContentTypeItemIndex]);
        }
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-tabset',
                    template: "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"{{ listGetClass }}\">\n      <ul\n        class=\"nav {{ buttonClass }}\"\n        [ngClass]=\"classMap\"\n        (click)=\"$event.preventDefault()\"\n        #itemsList\n      >\n        <li\n          *ngFor=\"let tabz of tabs; let i = index\"\n          [ngClass]=\"{\n            'ml-auto': tabz.type === 'content' && i === 0,\n            'list-group-item-action': buttonClass.includes('list-group'),\n            'nav-item': tabz.type !== 'content'\n          }\"\n          class=\"{{ tabz.customClass }}\"\n          [class.active]=\"tabz.active\"\n          [class.disabled]=\"tabz.disabled\"\n          (click)=\"click($event, i)\"\n        >\n          <span\n            class=\"d-flex flex-fill\"\n            *ngIf=\"tabs[i].type !== 'content' && tabs[i + 1] && tabs[i + 1].type === 'content'\"\n          ></span>\n          <a\n            *ngIf=\"tabz.type !== 'content'\"\n            #tabEl\n            href=\"javascript:void(0);\"\n            class=\"nav-link\"\n            [ngClass]=\"{ 'waves-light': !disableWaves }\"\n            [class.active]=\"tabz.active\"\n            [class.disabled]=\"tabz.disabled\"\n          >\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz)\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n          <a\n            *ngIf=\"tabz.type === 'content'\"\n            #tabEl\n            class=\"nav-link\"\n            [ngClass]=\"{ 'waves-light': !disableWaves }\"\n            [class.active]=\"tabz.active\"\n            [class.disabled]=\"tabz.disabled\"\n          >\n            <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz)\" class=\"fas fa-times ml-2\">\n              </span>\n            </span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"{{ tabsGetClass }}\">\n      <div class=\"tab-content {{ contentClass }}\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    providers: [WavesDirective],
                    styles: [".md-tabs{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border:0;padding:.7rem;margin-left:1rem;margin-right:1rem;margin-bottom:-20px;background-color:#2bbbad;z-index:1;position:relative;border-radius:.125rem;overflow-y:hidden;display:flex;flex-direction:column}.md-tabs .nav-item+.nav-item{margin-left:0}.md-tabs .nav-item.disabled{pointer-events:none!important}.md-tabs .nav-item.disabled .nav-link{color:#6c757d}.md-tabs .nav-link{transition:.4s;border:0;color:#fff}.md-tabs .nav-item.open .nav-link,.md-tabs .nav-link.active{background-color:rgba(0,0,0,.2);color:#fff;transition:1s;border-radius:.125rem}.md-tabs .nav-item.show .nav-link{background-color:#2bbbad;color:#fff;transition:1s;border-radius:.125rem}.md-tabs .nav-item.show .nav-link.dropdown-toggle{background-color:rgba(0,0,0,.2)}.tab-content{padding:2rem 1rem 1rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.tab-content.vertical{padding-top:0}.md-pills{border:0}.md-pills li{padding:.6rem}.md-pills .show>.nav-link{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);color:#fff;background-color:#2bbbad}.md-pills .nav-link{transition:.4s;border-radius:2px;color:#666;text-align:center}.md-pills .nav-link:hover{background-color:rgba(158,158,158,.3)}.md-pills .nav-link.active{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);color:#fff;background-color:#2bbbad}.md-pills .nav-link.active:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}ul.pills-primary{padding:0}.pills-primary .nav-link.active,.pills-primary .show>.nav-link,.tabs-primary{background-color:#4285f4!important}ul.pills-danger{padding:0}.pills-danger .nav-link.active,.pills-danger .show>.nav-link,.tabs-danger{background-color:#ff3547!important}ul.pills-warning{padding:0}.pills-warning .nav-link.active,.pills-warning .show>.nav-link,.tabs-warning{background-color:#fb3!important}ul.pills-success{padding:0}.pills-success .nav-link.active,.pills-success .show>.nav-link,.tabs-success{background-color:#00c851!important}ul.pills-info{padding:0}.pills-info .nav-link.active,.pills-info .show>.nav-link,.tabs-info{background-color:#33b5e5!important}ul.pills-default{padding:0}.pills-default .nav-link.active,.pills-default .show>.nav-link,.tabs-default{background-color:#2bbbad!important}ul.pills-secondary{padding:0}.pills-secondary .nav-link.active,.pills-secondary .show>.nav-link,.tabs-secondary{background-color:#a6c!important}ul.pills-elegant{padding:0}.pills-elegant .nav-link.active,.pills-elegant .show>.nav-link,.tabs-elegant{background-color:#2e2e2e!important}ul.pills-unique{padding:0}.pills-unique .nav-link.active,.pills-unique .show>.nav-link,.tabs-unique{background-color:#880e4f!important}ul.pills-dark-green{padding:0}.pills-dark-green .nav-link.active,.pills-dark-green .show>.nav-link,.tabs-dark-green{background-color:#388e3c!important}ul.pills-mdb-color{padding:0}.pills-mdb-color .nav-link.active,.pills-mdb-color .show>.nav-link,.tabs-mdb-color{background-color:#59698d!important}ul.pills-red{padding:0}.pills-red .nav-link.active,.pills-red .show>.nav-link,.tabs-red{background-color:#d32f2f!important}ul.pills-pink{padding:0}.pills-pink .nav-link.active,.pills-pink .show>.nav-link,.tabs-pink{background-color:#ec407a!important}ul.pills-purple{padding:0}.pills-purple .nav-link.active,.pills-purple .show>.nav-link,.tabs-purple{background-color:#8e24aa!important}ul.pills-deep-purple{padding:0}.pills-deep-purple .nav-link.active,.pills-deep-purple .show>.nav-link,.tabs-deep-purple{background-color:#512da8!important}ul.pills-indigo{padding:0}.pills-indigo .nav-link.active,.pills-indigo .show>.nav-link,.tabs-indigo{background-color:#3f51b5!important}ul.pills-blue{padding:0}.pills-blue .nav-link.active,.pills-blue .show>.nav-link,.tabs-blue{background-color:#1976d2!important}ul.pills-light-blue{padding:0}.pills-light-blue .nav-link.active,.pills-light-blue .show>.nav-link,.tabs-light-blue{background-color:#82b1ff!important}ul.pills-cyan{padding:0}.pills-cyan .nav-link.active,.pills-cyan .show>.nav-link,.tabs-cyan{background-color:#00bcd4!important}ul.pills-teal{padding:0}.pills-teal .nav-link.active,.pills-teal .show>.nav-link,.tabs-teal{background-color:#00796b!important}ul.pills-green{padding:0}.pills-green .nav-link.active,.pills-green .show>.nav-link,.tabs-green{background-color:#388e3c!important}ul.pills-light-green{padding:0}.pills-light-green .nav-link.active,.pills-light-green .show>.nav-link,.tabs-light-green{background-color:#8bc34a!important}ul.pills-lime{padding:0}.pills-lime .nav-link.active,.pills-lime .show>.nav-link,.tabs-lime{background-color:#afb42b!important}ul.pills-yellow{padding:0}.pills-yellow .nav-link.active,.pills-yellow .show>.nav-link,.tabs-yellow{background-color:#fbc02d!important}ul.pills-amber{padding:0}.pills-amber .nav-link.active,.pills-amber .show>.nav-link,.tabs-amber{background-color:#ffa000!important}ul.pills-orange{padding:0}.pills-orange .nav-link.active,.pills-orange .show>.nav-link,.tabs-orange{background-color:#f57c00!important}ul.pills-deep-orange{padding:0}.pills-deep-orange .nav-link.active,.pills-deep-orange .show>.nav-link,.tabs-deep-orange{background-color:#ff7043!important}ul.pills-brown{padding:0}.pills-brown .nav-link.active,.pills-brown .show>.nav-link,.tabs-brown{background-color:#795548!important}ul.pills-grey{padding:0}.pills-grey .nav-link.active,.pills-grey .show>.nav-link,.tabs-grey{background-color:#616161!important}ul.pills-blue-grey{padding:0}.pills-blue-grey .nav-link.active,.pills-blue-grey .show>.nav-link,.tabs-blue-grey{background-color:#78909c!important}ul.pills-dark{padding:0}.pills-dark .nav-link.active,.pills-dark .show>.nav-link,.tabs-dark{background-color:#212121!important}ul.pills-light{padding:0}.pills-light .nav-link.active,.pills-light .show>.nav-link,.tabs-light{background-color:#e0e0e0!important}ul.pills-white{padding:0}.pills-white .nav-link.active,.pills-white .show>.nav-link,.tabs-white{background-color:#fff!important}ul.pills-black{padding:0}.pills-black .nav-link.active,.pills-black .show>.nav-link,.tabs-black{background-color:#000!important}.classic-tabs .nav{white-space:nowrap;overflow-x:auto;position:relative;border-radius:.3rem .3rem 0 0}@media (min-width:62rem){.classic-tabs .nav{overflow-x:hidden}}.classic-tabs .nav li a{display:block;padding:20px 24px;font-size:13px;text-transform:uppercase;color:rgba(255,255,255,.7);text-align:center;border-radius:0}.classic-tabs .nav li a:not(.active){margin-bottom:3px}.classic-tabs .nav li a.active{border-bottom:3px solid;color:#fff}@media (min-width:62em){.classic-tabs .nav li:first-child{margin-left:56px}}.classic-tabs .nav.tabs-cyan li a.active{border-color:#ffeb3b}.classic-tabs .nav.tabs-orange li a.active{border-color:#e53935}.classic-tabs .nav.tabs-grey li a.active{border-color:#fff}.classic-tabs .nav.tabs-pink li a.active{border-color:#673ab7}.classic-tabs .nav.tabs-green li a.active{border-color:#1565c0}.classic-tabs .nav.tabs-primary li a.active{border-color:#fff}.classic-tabs .nav.tabs-animated li a.active{border:none}.classic-tabs .nav.tabs-animated.tabs-cyan .floor{background-color:#ffeb3b}.classic-tabs .nav.tabs-animated.tabs-orange .floor{background-color:#e53935}.classic-tabs .nav.tabs-animated.tabs-grey .floor{background-color:#fff}.classic-tabs .nav.tabs-animated.tabs-pink .floor{background-color:#673ab7}.classic-tabs .nav.tabs-animated.tabs-green .floor{background-color:#1565c0}.classic-tabs .nav.tabs-animated.tabs-primary .floor{background-color:#fff}.classic-tabs .nav.tabs-animated .floor{display:inline-block;width:30px;height:3px;position:absolute;z-index:1200;bottom:0;transition:.4s linear}.classic-tabs .tab-content.card{border-top-left-radius:0;border-top-right-radius:0}@media screen and (min-width:768px){.md-tabs{flex-direction:row}}.md-tabs .nav-item{flex-basis:0;flex-grow:1;text-align:center;margin-bottom:0}.md-tabs .nav-item a{width:100%}.tab-control{background-color:transparent;border:0;padding-left:10px;padding-right:10px;cursor:pointer}.tab-control-icon{color:#fff}.tab-control-icon.disabled{color:#e0e0e0}mdb-tabset .white{box-shadow:0 0 0 0 transparent,0 4px 15px 0 transparent!important}mdb-tabset .white li{margin:0 1em!important}mdb-tabset .white li .nav-link.active{transition:.4s!important}mdb-tabset .white li .nav-link{color:#666!important}mdb-tabset .white li .nav-link:hover{background-color:rgba(158,158,158,.3)}mdb-tabset .white .active a{color:#fff!important;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}mdb-tabset .white .active:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}mdb-tabset .margin li{margin:.5em!important}.classic-tabs{white-space:normal}.classic-tabs .nav.classic-tabs{margin:0 5px;overflow-x:auto;white-space:nowrap}.classic-tabs .tab-content{margin:0 5px 5px;padding-top:0}@media all and (min-width:992px){.classic-tabs .nav li:last-child{margin-right:56px}}.classic-tabs .nav li:hover{color:rgba(255,255,255,.7)}.nav-stacked{display:flex;flex-direction:column}"]
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: TabsetConfig },
        { type: WavesDirective },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    TabsetComponent.propDecorators = {
        clazz: [{ type: HostBinding, args: ['class.tab-container',] }],
        disableWaves: [{ type: Input }],
        buttonClass: [{ type: Input }],
        contentClass: [{ type: Input }],
        tabsButtonsClass: [{ type: Input }],
        tabsContentClass: [{ type: Input }],
        itemsList: [{ type: ViewChild, args: ['itemsList', { static: true },] }],
        tabEl: [{ type: ViewChildren, args: ['tabEl', { read: ElementRef },] }],
        showBsTab: [{ type: Output }],
        shownBsTab: [{ type: Output }],
        hideBsTab: [{ type: Output }],
        hiddenBsTab: [{ type: Output }],
        getActiveTab: [{ type: Output }],
        vertical: [{ type: Input }],
        justified: [{ type: Input }],
        type: [{ type: Input }]
    };
    return TabsetComponent;
}());
export { TabsetComponent };
if (false) {
    /** @type {?} */
    TabsetComponent.prototype.tabs;
    /** @type {?} */
    TabsetComponent.prototype.classMap;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype.isDestroyed;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._vertical;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._justified;
    /**
     * @type {?}
     * @protected
     */
    TabsetComponent.prototype._type;
    /** @type {?} */
    TabsetComponent.prototype.listGetClass;
    /** @type {?} */
    TabsetComponent.prototype.tabsGetClass;
    /** @type {?} */
    TabsetComponent.prototype.isBrowser;
    /** @type {?} */
    TabsetComponent.prototype.clazz;
    /** @type {?} */
    TabsetComponent.prototype.disableWaves;
    /** @type {?} */
    TabsetComponent.prototype.buttonClass;
    /** @type {?} */
    TabsetComponent.prototype.contentClass;
    /** @type {?} */
    TabsetComponent.prototype.tabsButtonsClass;
    /** @type {?} */
    TabsetComponent.prototype.tabsContentClass;
    /** @type {?} */
    TabsetComponent.prototype.itemsList;
    /** @type {?} */
    TabsetComponent.prototype.tabEl;
    /** @type {?} */
    TabsetComponent.prototype.showBsTab;
    /** @type {?} */
    TabsetComponent.prototype.shownBsTab;
    /** @type {?} */
    TabsetComponent.prototype.hideBsTab;
    /** @type {?} */
    TabsetComponent.prototype.hiddenBsTab;
    /** @type {?} */
    TabsetComponent.prototype.getActiveTab;
    /** @type {?} */
    TabsetComponent.prototype.ripple;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    TabsetComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBEO0lBeUZFLHlCQUN1QixVQUFrQixFQUN2QyxNQUFvQixFQUNiLE1BQXNCLEVBQ3JCLEtBQXdCLEVBQ3hCLFFBQW1CO1FBRnBCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUF0RnRCLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFVMUIsY0FBUyxHQUFRLElBQUksQ0FBQztRQUNxQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRS9DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBVTlCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2RCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFF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T0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs0QkFFMUMsTUFBTTs2QkFFTixNQUFNOzRCQUVOLE1BQU07OEJBRU4sTUFBTTsrQkFFTixNQUFNOzJCQUlOLEtBQUs7NEJBeUJMLEtBQUs7dUJBV0wsS0FBSzs7SUE4TlIsc0JBQUM7Q0FBQSxBQTdTRCxJQTZTQztTQXRTWSxlQUFlOzs7SUFDMUIsK0JBQWlDOztJQUNqQyxtQ0FBMEI7Ozs7O0lBRTFCLHNDQUErQjs7Ozs7SUFDL0Isb0NBQTZCOzs7OztJQUM3QixxQ0FBOEI7Ozs7O0lBQzlCLGdDQUF3Qjs7SUFFeEIsdUNBQTRCOztJQUM1Qix1Q0FBNEI7O0lBRTVCLG9DQUFzQjs7SUFDdEIsZ0NBQXdEOztJQUV4RCx1Q0FBOEI7O0lBQzlCLHNDQUE2Qjs7SUFDN0IsdUNBQThCOztJQUM5QiwyQ0FBa0M7O0lBQ2xDLDJDQUFrQzs7SUFFbEMsb0NBQWdFOztJQUNoRSxnQ0FBd0Q7O0lBRXhELG9DQUN1RDs7SUFDdkQscUNBQ3dEOztJQUN4RCxvQ0FDdUQ7O0lBQ3ZELHNDQUN5RDs7SUFDekQsdUNBQzBEOztJQW9EeEQsaUNBQTZCOzs7OztJQUM3QixnQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJzZXRDb25maWcgfSBmcm9tICcuL3RhYnNldC5jb25maWcnO1xuXG5pbXBvcnQgeyBXYXZlc0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2ZyZWUvd2F2ZXMvd2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi10YWJzZXQnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYnNldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYnMtcGlsbHMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbV2F2ZXNEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyB0YWJzOiBUYWJEaXJlY3RpdmVbXSA9IFtdO1xuICBwdWJsaWMgY2xhc3NNYXA6IGFueSA9IHt9O1xuXG4gIHByb3RlY3RlZCBpc0Rlc3Ryb3llZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9qdXN0aWZpZWQ6IGJvb2xlYW47XG4gIHByb3RlY3RlZCBfdHlwZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0R2V0Q2xhc3M6IFN0cmluZztcbiAgcHVibGljIHRhYnNHZXRDbGFzczogU3RyaW5nO1xuXG4gIGlzQnJvd3NlcjogYW55ID0gbnVsbDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgcHVibGljIGNsYXp6ID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkaXNhYmxlV2F2ZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3M6IFN0cmluZztcbiAgQElucHV0KCkgY29udGVudENsYXNzOiBTdHJpbmc7XG4gIEBJbnB1dCgpIHRhYnNCdXR0b25zQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdGFic0NvbnRlbnRDbGFzczogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2l0ZW1zTGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIGl0ZW1zTGlzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZHJlbigndGFiRWwnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGFiRWw6IGFueTtcblxuICBAT3V0cHV0KClcbiAgc2hvd0JzVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgc2hvd25Cc1RhYjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhpZGVCc1RhYjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIGhpZGRlbkJzVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgZ2V0QWN0aXZlVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKiBpZiB0cnVlIHRhYnMgd2lsbCBiZSBwbGFjZWQgdmVydGljYWxseSAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBY3RpdmVUYWIoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYnNbaW5kZXggLSAxXS50eXBlICE9PSAnY29udGVudCcpIHtcbiAgICAgIHRoaXMudGFic1tpbmRleCAtIDFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmdldEFjdGl2ZVRhYi5lbWl0KHtcbiAgICAgICAgZWw6IHRoaXMudGFic1tpbmRleCAtIDFdLFxuICAgICAgICBhY3RpdmVUYWJJbmRleDogaW5kZXggLSAxLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYnNbaW5kZXggLSAxXS5zZWxlY3QuZW1pdCh0aGlzLnRhYnNbaW5kZXggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIGlmIHRydWUgdGFicyBmaWxsIHRoZSBjb250YWluZXIgYW5kIGhhdmUgYSBjb25zaXN0ZW50IHdpZHRoICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQganVzdGlmaWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZpZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGp1c3RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2p1c3RpZmllZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8qKiBuYXZpZ2F0aW9uIGNvbnRleHQgY2xhc3M6ICd0YWJzJyBvciAncGlsbHMnICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgcHVibGljIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBjb25maWc6IFRhYnNldENvbmZpZyxcbiAgICBwdWJsaWMgcmlwcGxlOiBXYXZlc0RpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgY2xpY2soZXZlbnQ6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLnRhYkVsLnRvQXJyYXkoKVt0aGlzLmdldEFjdGl2ZSgpXTtcbiAgICBjb25zdCBjbGlja2VkID0gdGhpcy50YWJFbC50b0FycmF5KClbaW5kZXhdO1xuXG4gICAgdGhpcy5oaWRlQnNUYWIuZW1pdCh7XG4gICAgICB0YXJnZXQ6IGNsaWNrZWQsXG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2LFxuICAgIH0pO1xuICAgIHRoaXMuc2hvd0JzVGFiLmVtaXQoe1xuICAgICAgdGFyZ2V0OiBjbGlja2VkLFxuICAgICAgcmVsYXRlZFRhcmdldDogcHJldixcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4ICsgMSk7XG5cbiAgICBpZiAodGhpcy5jb250ZW50Q2xhc3MgIT09ICd2ZXJ0aWNhbCcgJiYgIXRoaXMuZGlzYWJsZVdhdmVzKSB7XG4gICAgICB0aGlzLnJpcHBsZS5lbCA9IGNsaWNrZWQ7XG4gICAgICB0aGlzLnJpcHBsZS5jbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWRkZW5Cc1RhYi5lbWl0KHtcbiAgICAgIHRhcmdldDogY2xpY2tlZCxcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXYsXG4gICAgfSk7XG4gICAgdGhpcy5zaG93bkJzVGFiLmVtaXQoe1xuICAgICAgdGFyZ2V0OiBjbGlja2VkLFxuICAgICAgcmVsYXRlZFRhcmdldDogcHJldixcbiAgICB9KTtcblxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlKCk6IGFueSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy5tYXAoKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgICAgaWYgKHRhYi5vYmplY3QuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0YWIuaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGNvbnN0IGluc2VydFBvcyA9IHRoaXMudGFicy5maW5kSW5kZXgoYVRhYiA9PiBhVGFiLnRhYk9yZGVyID4gdGFiLnRhYk9yZGVyKTtcbiAgICBpZiAoaW5zZXJ0UG9zID49IDApIHtcbiAgICAgIHRoaXMudGFicy5zcGxpY2UoaW5zZXJ0UG9zLCAwLCB0YWIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xuICAgIH1cbiAgICB0YWIuYWN0aXZlID0gdGhpcy50YWJzLmxlbmd0aCA9PT0gMSAmJiB0YWIuYWN0aXZlICE9PSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVUYWIodGFiOiBUYWJEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFicy5pbmRleE9mKHRhYik7XG4gICAgaWYgKGluZGV4ID09PSAtMSB8fCB0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXG4gICAgaWYgKHRhYi5hY3RpdmUgJiYgdGhpcy5oYXNBdmFpbGFibGVUYWJzKGluZGV4KSkge1xuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XG4gICAgICB0aGlzLnRhYnNbbmV3QWN0aXZlSW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGFiLnJlbW92ZWQuZW1pdCh0YWIpO1xuICAgIHRoaXMudGFicy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdGFic0xlbmd0aCA9IHRoaXMudGFicy5sZW5ndGg7XG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XG4gICAgICBjb25zdCBwcmV2SW5kZXggPSBpbmRleCAtIHN0ZXA7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBpbmRleCArIHN0ZXA7XG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBwcmV2SW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXg7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNBdmFpbGFibGVUYWJzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICBpZiAoIXRhYnNMZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKCF0aGlzLnRhYnNbaV0uZGlzYWJsZWQgJiYgaSAhPT0gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcbiAgICAgICduYXYtanVzdGlmaWVkJzogdGhpcy5qdXN0aWZpZWQsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBsaXN0R2V0KCkge1xuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmxpc3RHZXRDbGFzcyA9IHRoaXMudGFic0J1dHRvbnNDbGFzcyA/IHRoaXMudGFic0J1dHRvbnNDbGFzcyA6ICdjb2wtbWQtMyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdEdldENsYXNzID0gdGhpcy50YWJzQnV0dG9uc0NsYXNzID8gdGhpcy50YWJzQnV0dG9uc0NsYXNzIDogJ2NvbC1tZC0xMic7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRhYnNHZXQoKSB7XG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMudGFic0dldENsYXNzID0gdGhpcy50YWJzQ29udGVudENsYXNzID8gdGhpcy50YWJzQ29udGVudENsYXNzIDogJ2NvbC1tZC05JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJzR2V0Q2xhc3MgPSB0aGlzLnRhYnNDb250ZW50Q2xhc3MgPyB0aGlzLnRhYnNDb250ZW50Q2xhc3MgOiAnY29sLW1kLTEyJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QWN0aXZlRWxlbWVudCgpOiBhbnkge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMubWFwKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcbiAgICAgIGlmICh0YWIub2JqZWN0LmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVsOiB0YWIub2JqZWN0LFxuICAgICAgICAgIGFjdGl2ZVRhYkluZGV4OiB0YWIuaW5kZXgsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dBY3RpdmVJbmRleCgpIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5nZXRBY3RpdmVFbGVtZW50KCk7XG4gICAgdGhpcy5nZXRBY3RpdmVUYWIuZW1pdChhY3RpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rmlyc3RBY3RpdmVUYWJJbmRleCgpIHtcbiAgICBjb25zdCBhY3RpdmVUYWJzID0gdGhpcy50YWJzLmZpbHRlcih0YWIgPT4ge1xuICAgICAgcmV0dXJuICF0YWIuZGlzYWJsZWQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMudGFicy5pbmRleE9mKGFjdGl2ZVRhYnNbMF0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVBY3RpdmVUYWJzKCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICB0YWIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBpbml0QWN0aXZlVGFiKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRGaXJzdEFjdGl2ZVRhYkluZGV4KCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgdGhpcy5yZW1vdmVBY3RpdmVUYWJzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4ICsgMSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxpc3RHZXQoKTtcbiAgICB0aGlzLnRhYnNHZXQoKTtcbiAgICB0aGlzLnNob3dBY3RpdmVJbmRleCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5pdEFjdGl2ZVRhYigpO1xuXG4gICAgaWYgKHRoaXMudGFicy5maW5kSW5kZXgoZWwgPT4gZWwudHlwZSA9PT0gJ2NvbnRlbnQnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHNwYWNlciA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGNvbnN0IGZpcnN0Q29udGVudFR5cGVJdGVtSW5kZXggPSB0aGlzLnRhYnMuZmluZEluZGV4KGVsID0+IGVsLnR5cGUgPT09ICdjb250ZW50Jyk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3BhY2VyLCAnbmF2LWl0ZW0nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3BhY2VyLCAnZmxleC1maWxsJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZShcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubmF0aXZlRWxlbWVudCxcbiAgICAgICAgc3BhY2VyLFxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuW2ZpcnN0Q29udGVudFR5cGVJdGVtSW5kZXhdXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19