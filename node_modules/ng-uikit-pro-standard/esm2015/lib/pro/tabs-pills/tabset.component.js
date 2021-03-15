/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewChildren, ViewEncapsulation, } from '@angular/core';
import { TabsetConfig } from './tabset.config';
import { WavesDirective } from '../../free/waves/waves-effect.directive';
import { isPlatformBrowser } from '@angular/common';
export class TabsetComponent {
    /**
     * @param {?} platformId
     * @param {?} config
     * @param {?} ripple
     * @param {?} cdRef
     * @param {?} renderer
     */
    constructor(platformId, config, ripple, cdRef, renderer) {
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
    /**
     * if true tabs will be placed vertically
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
        this._vertical = value;
        this.setClassMap();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveTab(index) {
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
    }
    /**
     * if true tabs fill the container and have a consistent width
     * @return {?}
     */
    get justified() {
        return this._justified;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set justified(value) {
        this._justified = value;
        this.setClassMap();
    }
    /**
     * navigation context class: 'tabs' or 'pills'
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    click(event, index) {
        /** @type {?} */
        const prev = this.tabEl.toArray()[this.getActive()];
        /** @type {?} */
        const clicked = this.tabEl.toArray()[index];
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroyed = true;
    }
    /**
     * @return {?}
     */
    getActive() {
        /** @type {?} */
        const tabs = this.tabs.map((/**
         * @param {?} object
         * @param {?} index
         * @return {?}
         */
        (object, index) => {
            return {
                index: index,
                object: object,
            };
        }));
        for (const tab of tabs) {
            if (tab.object.active) {
                return tab.index;
            }
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        /** @type {?} */
        const insertPos = this.tabs.findIndex((/**
         * @param {?} aTab
         * @return {?}
         */
        aTab => aTab.tabOrder > tab.tabOrder));
        if (insertPos >= 0) {
            this.tabs.splice(insertPos, 0, tab);
        }
        else {
            this.tabs.push(tab);
        }
        tab.active = this.tabs.length === 1 && tab.active !== false;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    removeTab(tab) {
        /** @type {?} */
        const index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            const newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
        this.cdRef.markForCheck();
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    getClosestTabIndex(index) {
        /** @type {?} */
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (let step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            const prevIndex = index - step;
            /** @type {?} */
            const nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    hasAvailableTabs(index) {
        /** @type {?} */
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (let i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
    /**
     * @protected
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            'nav-stacked': this.vertical,
            'nav-justified': this.justified,
        };
    }
    /**
     * @return {?}
     */
    listGet() {
        if (this.vertical) {
            this.listGetClass = this.tabsButtonsClass ? this.tabsButtonsClass : 'col-md-3';
        }
        else {
            this.listGetClass = this.tabsButtonsClass ? this.tabsButtonsClass : 'col-md-12';
        }
    }
    /**
     * @return {?}
     */
    tabsGet() {
        if (this.vertical) {
            this.tabsGetClass = this.tabsContentClass ? this.tabsContentClass : 'col-md-9';
        }
        else {
            this.tabsGetClass = this.tabsContentClass ? this.tabsContentClass : 'col-md-12';
        }
    }
    /**
     * @return {?}
     */
    getActiveElement() {
        /** @type {?} */
        const tabs = this.tabs.map((/**
         * @param {?} object
         * @param {?} index
         * @return {?}
         */
        (object, index) => {
            return {
                index: index,
                object: object,
            };
        }));
        for (const tab of tabs) {
            if (tab.object.active) {
                return {
                    el: tab.object,
                    activeTabIndex: tab.index,
                };
            }
        }
    }
    /**
     * @return {?}
     */
    showActiveIndex() {
        /** @type {?} */
        const activeElement = this.getActiveElement();
        this.getActiveTab.emit(activeElement);
    }
    /**
     * @private
     * @return {?}
     */
    getFirstActiveTabIndex() {
        /** @type {?} */
        const activeTabs = this.tabs.filter((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            return !tab.disabled;
        }));
        return this.tabs.indexOf(activeTabs[0]);
    }
    /**
     * @private
     * @return {?}
     */
    removeActiveTabs() {
        this.tabs.forEach((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            tab.active = false;
        }));
    }
    /**
     * @return {?}
     */
    initActiveTab() {
        /** @type {?} */
        const index = this.getFirstActiveTabIndex();
        if (index === -1) {
            this.removeActiveTabs();
            return;
        }
        this.setActiveTab(index + 1);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.listGet();
        this.tabsGet();
        this.showActiveIndex();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initActiveTab();
        if (this.tabs.findIndex((/**
         * @param {?} el
         * @return {?}
         */
        el => el.type === 'content')) !== -1) {
            /** @type {?} */
            const spacer = this.renderer.createElement('li');
            /** @type {?} */
            const firstContentTypeItemIndex = this.tabs.findIndex((/**
             * @param {?} el
             * @return {?}
             */
            el => el.type === 'content'));
            this.renderer.addClass(spacer, 'nav-item');
            this.renderer.addClass(spacer, 'flex-fill');
            this.renderer.insertBefore(this.itemsList.nativeElement, spacer, this.itemsList.nativeElement.children[firstContentTypeItemIndex]);
        }
    }
}
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
TabsetComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: TabsetConfig },
    { type: WavesDirective },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTcEQsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7O0lBa0YxQixZQUN1QixVQUFrQixFQUN2QyxNQUFvQixFQUNiLE1BQXNCLEVBQ3JCLEtBQXdCLEVBQ3hCLFFBQW1CO1FBRnBCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3JCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUF0RnRCLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFVMUIsY0FBUyxHQUFRLElBQUksQ0FBQztRQUNxQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRS9DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBVTlCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV2RCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZELGdCQUFXLEdBQXNCLElB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QTZCOztJQUM3Qix1Q0FBOEI7O0lBQzlCLDJDQUFrQzs7SUFDbEMsMkNBQWtDOztJQUVsQyxvQ0FBZ0U7O0lBQ2hFLGdDQUF3RDs7SUFFeEQsb0NBQ3VEOztJQUN2RCxxQ0FDd0Q7O0lBQ3hELG9DQUN1RDs7SUFDdkQsc0NBQ3lEOztJQUN6RCx1Q0FDMEQ7O0lBb0R4RCxpQ0FBNkI7Ozs7O0lBQzdCLGdDQUFnQzs7Ozs7SUFDaEMsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYnNldENvbmZpZyB9IGZyb20gJy4vdGFic2V0LmNvbmZpZyc7XG5cbmltcG9ydCB7IFdhdmVzRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZnJlZS93YXZlcy93YXZlcy1lZmZlY3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXRhYnNldCcsXG4gIHRlbXBsYXRlVXJsOiAndGFic2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy1waWxscy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtXYXZlc0RpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIHRhYnM6IFRhYkRpcmVjdGl2ZVtdID0gW107XG4gIHB1YmxpYyBjbGFzc01hcDogYW55ID0ge307XG5cbiAgcHJvdGVjdGVkIGlzRGVzdHJveWVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX3ZlcnRpY2FsOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2p1c3RpZmllZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF90eXBlOiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RHZXRDbGFzczogU3RyaW5nO1xuICBwdWJsaWMgdGFic0dldENsYXNzOiBTdHJpbmc7XG5cbiAgaXNCcm93c2VyOiBhbnkgPSBudWxsO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1jb250YWluZXInKSBwdWJsaWMgY2xhenogPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVXYXZlcyA9IGZhbHNlO1xuICBASW5wdXQoKSBidXR0b25DbGFzczogU3RyaW5nO1xuICBASW5wdXQoKSBjb250ZW50Q2xhc3M6IFN0cmluZztcbiAgQElucHV0KCkgdGFic0J1dHRvbnNDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB0YWJzQ29udGVudENsYXNzOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaXRlbXNMaXN0JywgeyBzdGF0aWM6IHRydWUgfSkgaXRlbXNMaXN0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkcmVuKCd0YWJFbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJFbDogYW55O1xuXG4gIEBPdXRwdXQoKVxuICBzaG93QnNUYWI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBzaG93bkJzVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGlkZUJzVGFiOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgaGlkZGVuQnNUYWI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBnZXRBY3RpdmVUYWI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgcHVibGljIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZVRhYihpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFic1tpbmRleCAtIDFdLnR5cGUgIT09ICdjb250ZW50Jykge1xuICAgICAgdGhpcy50YWJzW2luZGV4IC0gMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2V0QWN0aXZlVGFiLmVtaXQoe1xuICAgICAgICBlbDogdGhpcy50YWJzW2luZGV4IC0gMV0sXG4gICAgICAgIGFjdGl2ZVRhYkluZGV4OiBpbmRleCAtIDEsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFic1tpbmRleCAtIDFdLnNlbGVjdC5lbWl0KHRoaXMudGFic1tpbmRleCAtIDFdKTtcbiAgICB9XG4gIH1cblxuICAvKiogaWYgdHJ1ZSB0YWJzIGZpbGwgdGhlIGNvbnRhaW5lciBhbmQgaGF2ZSBhIGNvbnNpc3RlbnQgd2lkdGggKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBqdXN0aWZpZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZmllZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQganVzdGlmaWVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fanVzdGlmaWVkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLyoqIG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIGNvbmZpZzogVGFic2V0Q29uZmlnLFxuICAgIHB1YmxpYyByaXBwbGU6IFdhdmVzRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGljayhldmVudDogYW55LCBpbmRleDogYW55KSB7XG4gICAgY29uc3QgcHJldiA9IHRoaXMudGFiRWwudG9BcnJheSgpW3RoaXMuZ2V0QWN0aXZlKCldO1xuICAgIGNvbnN0IGNsaWNrZWQgPSB0aGlzLnRhYkVsLnRvQXJyYXkoKVtpbmRleF07XG5cbiAgICB0aGlzLmhpZGVCc1RhYi5lbWl0KHtcbiAgICAgIHRhcmdldDogY2xpY2tlZCxcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXYsXG4gICAgfSk7XG4gICAgdGhpcy5zaG93QnNUYWIuZW1pdCh7XG4gICAgICB0YXJnZXQ6IGNsaWNrZWQsXG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2LFxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKTtcblxuICAgIGlmICh0aGlzLmNvbnRlbnRDbGFzcyAhPT0gJ3ZlcnRpY2FsJyAmJiAhdGhpcy5kaXNhYmxlV2F2ZXMpIHtcbiAgICAgIHRoaXMucmlwcGxlLmVsID0gY2xpY2tlZDtcbiAgICAgIHRoaXMucmlwcGxlLmNsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGRlbkJzVGFiLmVtaXQoe1xuICAgICAgdGFyZ2V0OiBjbGlja2VkLFxuICAgICAgcmVsYXRlZFRhcmdldDogcHJldixcbiAgICB9KTtcbiAgICB0aGlzLnNob3duQnNUYWIuZW1pdCh7XG4gICAgICB0YXJnZXQ6IGNsaWNrZWQsXG4gICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2LFxuICAgIH0pO1xuXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmUoKTogYW55IHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLm1hcCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBvYmplY3Q6IG9iamVjdCxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgICBpZiAodGFiLm9iamVjdC5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRhYi5pbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkVGFiKHRhYjogVGFiRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgY29uc3QgaW5zZXJ0UG9zID0gdGhpcy50YWJzLmZpbmRJbmRleChhVGFiID0+IGFUYWIudGFiT3JkZXIgPiB0YWIudGFiT3JkZXIpO1xuICAgIGlmIChpbnNlcnRQb3MgPj0gMCkge1xuICAgICAgdGhpcy50YWJzLnNwbGljZShpbnNlcnRQb3MsIDAsIHRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFicy5wdXNoKHRhYik7XG4gICAgfVxuICAgIHRhYi5hY3RpdmUgPSB0aGlzLnRhYnMubGVuZ3RoID09PSAxICYmIHRhYi5hY3RpdmUgIT09IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcbiAgICBpZiAoaW5kZXggPT09IC0xIHx8IHRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2VsZWN0IGEgbmV3IHRhYiBpZiB0aGUgdGFiIHRvIGJlIHJlbW92ZWQgaXMgc2VsZWN0ZWQgYW5kIG5vdCBkZXN0cm95ZWRcbiAgICBpZiAodGFiLmFjdGl2ZSAmJiB0aGlzLmhhc0F2YWlsYWJsZVRhYnMoaW5kZXgpKSB7XG4gICAgICBjb25zdCBuZXdBY3RpdmVJbmRleCA9IHRoaXMuZ2V0Q2xvc2VzdFRhYkluZGV4KGluZGV4KTtcbiAgICAgIHRoaXMudGFic1tuZXdBY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0YWIucmVtb3ZlZC5lbWl0KHRhYik7XG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENsb3Nlc3RUYWJJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcbiAgICBpZiAoIXRhYnNMZW5ndGgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBzdGVwID0gMTsgc3RlcCA8PSB0YWJzTGVuZ3RoOyBzdGVwICs9IDEpIHtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gc3RlcDtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IGluZGV4ICsgc3RlcDtcbiAgICAgIGlmICh0aGlzLnRhYnNbcHJldkluZGV4XSAmJiAhdGhpcy50YWJzW3ByZXZJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRhYnNbbmV4dEluZGV4XSAmJiAhdGhpcy50YWJzW25leHRJbmRleF0uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhc0F2YWlsYWJsZVRhYnMoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xuICAgIGlmICghdGFic0xlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0xlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICAnbmF2LXN0YWNrZWQnOiB0aGlzLnZlcnRpY2FsLFxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGxpc3RHZXQoKSB7XG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMubGlzdEdldENsYXNzID0gdGhpcy50YWJzQnV0dG9uc0NsYXNzID8gdGhpcy50YWJzQnV0dG9uc0NsYXNzIDogJ2NvbC1tZC0zJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0R2V0Q2xhc3MgPSB0aGlzLnRhYnNCdXR0b25zQ2xhc3MgPyB0aGlzLnRhYnNCdXR0b25zQ2xhc3MgOiAnY29sLW1kLTEyJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdGFic0dldCgpIHtcbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy50YWJzR2V0Q2xhc3MgPSB0aGlzLnRhYnNDb250ZW50Q2xhc3MgPyB0aGlzLnRhYnNDb250ZW50Q2xhc3MgOiAnY29sLW1kLTknO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYnNHZXRDbGFzcyA9IHRoaXMudGFic0NvbnRlbnRDbGFzcyA/IHRoaXMudGFic0NvbnRlbnRDbGFzcyA6ICdjb2wtbWQtMTInO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRBY3RpdmVFbGVtZW50KCk6IGFueSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy5tYXAoKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgICAgaWYgKHRhYi5vYmplY3QuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZWw6IHRhYi5vYmplY3QsXG4gICAgICAgICAgYWN0aXZlVGFiSW5kZXg6IHRhYi5pbmRleCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd0FjdGl2ZUluZGV4KCkge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLmdldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICB0aGlzLmdldEFjdGl2ZVRhYi5lbWl0KGFjdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXJzdEFjdGl2ZVRhYkluZGV4KCkge1xuICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSB0aGlzLnRhYnMuZmlsdGVyKHRhYiA9PiB7XG4gICAgICByZXR1cm4gIXRhYi5kaXNhYmxlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy50YWJzLmluZGV4T2YoYWN0aXZlVGFic1swXSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUFjdGl2ZVRhYnMoKSB7XG4gICAgdGhpcy50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRBY3RpdmVUYWIoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEZpcnN0QWN0aXZlVGFiSW5kZXgoKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLnJlbW92ZUFjdGl2ZVRhYnMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRBY3RpdmVUYWIoaW5kZXggKyAxKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGlzdEdldCgpO1xuICAgIHRoaXMudGFic0dldCgpO1xuICAgIHRoaXMuc2hvd0FjdGl2ZUluZGV4KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbml0QWN0aXZlVGFiKCk7XG5cbiAgICBpZiAodGhpcy50YWJzLmZpbmRJbmRleChlbCA9PiBlbC50eXBlID09PSAnY29udGVudCcpICE9PSAtMSkge1xuICAgICAgY29uc3Qgc3BhY2VyID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgY29uc3QgZmlyc3RDb250ZW50VHlwZUl0ZW1JbmRleCA9IHRoaXMudGFicy5maW5kSW5kZXgoZWwgPT4gZWwudHlwZSA9PT0gJ2NvbnRlbnQnKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzcGFjZXIsICduYXYtaXRlbScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzcGFjZXIsICdmbGV4LWZpbGwnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKFxuICAgICAgICB0aGlzLml0ZW1zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgICBzcGFjZXIsXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bZmlyc3RDb250ZW50VHlwZUl0ZW1JbmRleF1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=