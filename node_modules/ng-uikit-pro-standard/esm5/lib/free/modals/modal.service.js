/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter, RendererFactory2, } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { ModalBackdropComponent } from './modalBackdrop.component';
import { ModalContainerComponent } from './modalContainer.component';
import { MDBModalRef, ClassName, modalConfigDefaults, ModalOptions, TransitionDurations, } from './modal.options';
var MDBModalService = /** @class */ (function () {
    function MDBModalService(rendererFactory, clf) {
        this.clf = clf;
        this.config = modalConfigDefaults;
        this.open = new EventEmitter();
        this.opened = new EventEmitter();
        this.close = new EventEmitter();
        this.closed = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /** Shows a modal */
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    MDBModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }), this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        var duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.removeBackdrop(); }), duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        var mdbModalRef = new MDBModalRef();
        /** @type {?} */
        var modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({
            content: content,
            isAnimated: this.config.animated,
            data: this.config.data,
            mdbModalService: this,
        });
        modalContainerRef.instance.focusModalElement();
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = (/**
         * @return {?}
         */
        function () {
            modalContainerRef.instance.hide();
        });
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @protected
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = /**
     * @protected
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = /**
     * @private
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this.renderer.createElement('div');
        this.renderer.addClass(scrollDiv, ClassName.SCROLLBAR_MEASURER);
        this.renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var loader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.copyEvent(loader.onBeforeShow, this.open);
        this.copyEvent(loader.onShown, this.opened);
        this.copyEvent(loader.onBeforeHide, this.close);
        this.copyEvent(loader.onHidden, this.closed);
        this.loaders.push(loader);
    };
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = /**
     * @private
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((/**
         * @param {?} loader
         * @param {?} i
         * @return {?}
         */
        function (loader, i) {
            loader.instance.level = i + 1;
        }));
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe((/**
         * @return {?}
         */
        function () {
            to.emit(_this.lastDismissReason);
        }));
    };
    MDBModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MDBModalService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: ComponentLoaderFactory }
    ]; };
    return MDBModalService;
}());
export { MDBModalService };
if (false) {
    /** @type {?} */
    MDBModalService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.el;
    /** @type {?} */
    MDBModalService.prototype.open;
    /** @type {?} */
    MDBModalService.prototype.opened;
    /** @type {?} */
    MDBModalService.prototype.close;
    /** @type {?} */
    MDBModalService.prototype.closed;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.isBodyOverflowing;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.originalBodyPadding;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.scrollbarWidth;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.backdropRef;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype._backdropLoader;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.modalsCount;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.lastDismissReason;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.loaders;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.clf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUVWLFlBQVksRUFFWixnQkFBZ0IsR0FHakIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QjtJQXVCRSx5QkFBbUIsZUFBaUMsRUFBVSxHQUEyQjtRQUEzQixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQXJCbEYsV0FBTSxHQUFpQixtQkFBbUIsQ0FBQztRQUszQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUlyQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFFNUIsWUFBTyxHQUErQyxFQUFFLENBQUM7UUFFL0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVks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Q0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLE1BQWdELEVBQUUsQ0FBUztZQUMvRSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVPLG1DQUFTOzs7Ozs7SUFBakIsVUFBa0IsSUFBdUIsRUFBRSxFQUFxQjtRQUFoRSxpQkFJQztRQUhDLElBQUksQ0FBQyxTQUFTOzs7UUFBQztZQUNiLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFwTEYsVUFBVTs7OztnQkFqQlQsZ0JBQWdCO2dCQU1ULHNCQUFzQjs7SUFnTS9CLHNCQUFDO0NBQUEsQUFyTEQsSUFxTEM7U0FwTFksZUFBZTs7O0lBQzFCLGlDQUFrRDs7Ozs7SUFDbEQsbUNBQTRCOzs7OztJQUM1Qiw4QkFBOEI7Ozs7O0lBQzlCLDZCQUF1Qjs7SUFFdkIsK0JBQW9EOztJQUNwRCxpQ0FBc0Q7O0lBQ3RELGdDQUFxRDs7SUFDckQsaUNBQXNEOzs7OztJQUV0RCw0Q0FBb0M7Ozs7O0lBQ3BDLDhDQUFrQzs7Ozs7SUFFbEMseUNBQTZCOzs7OztJQUU3QixzQ0FBa0U7Ozs7O0lBQ2xFLDBDQUFpRTs7Ozs7SUFDakUsc0NBQXdCOzs7OztJQUN4Qiw0Q0FBb0M7Ozs7O0lBRXBDLGtDQUFpRTs7Ozs7SUFDWCw4QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIEluamVjdGFibGUsXG4gIFRlbXBsYXRlUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5MixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnknO1xuaW1wb3J0IHsgTW9kYWxCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWxCYWNrZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsQ29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBNREJNb2RhbFJlZixcbiAgQ2xhc3NOYW1lLFxuICBtb2RhbENvbmZpZ0RlZmF1bHRzLFxuICBNb2RhbE9wdGlvbnMsXG4gIFRyYW5zaXRpb25EdXJhdGlvbnMsXG59IGZyb20gJy4vbW9kYWwub3B0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNREJNb2RhbFNlcnZpY2Uge1xuICBwdWJsaWMgY29uZmlnOiBNb2RhbE9wdGlvbnMgPSBtb2RhbENvbmZpZ0RlZmF1bHRzO1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmO1xuICBwcml2YXRlIGVsOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBvcGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIG9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb3RlY3RlZCBpc0JvZHlPdmVyZmxvd2luZyA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgb3JpZ2luYWxCb2R5UGFkZGluZyA9IDA7XG5cbiAgcHJvdGVjdGVkIHNjcm9sbGJhcldpZHRoID0gMDtcblxuICBwcm90ZWN0ZWQgYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PiB8IGFueTtcbiAgcHJpdmF0ZSBfYmFja2Ryb3BMb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBtb2RhbHNDb3VudCA9IDA7XG4gIHByaXZhdGUgbGFzdERpc21pc3NSZWFzb246IGFueSA9ICcnO1xuXG4gIHByaXZhdGUgbG9hZGVyczogQ29tcG9uZW50TG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50PltdID0gW107XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihyZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsIHByaXZhdGUgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxCYWNrZHJvcENvbXBvbmVudD4oXG4gICAgICB0aGlzLmVsLFxuICAgICAgdGhpcy52Y3IsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgLyoqIFNob3dzIGEgbW9kYWwgKi9cbiAgc2hvdyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LCBjb25maWc/OiBhbnkpOiBNREJNb2RhbFJlZiB7XG4gICAgdGhpcy5tb2RhbHNDb3VudCsrO1xuICAgIHRoaXMuX2NyZWF0ZUxvYWRlcnMoKTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsQ29uZmlnRGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCk7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dNb2RhbChjb250ZW50KTtcbiAgfVxuXG4gIGhpZGUobGV2ZWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9oaWRlQmFja2Ryb3AoKTtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICB9XG4gICAgdGhpcy5tb2RhbHNDb3VudCA9IHRoaXMubW9kYWxzQ291bnQgPj0gMSA/IHRoaXMubW9kYWxzQ291bnQgLSAxIDogMDtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oaWRlTW9kYWwobGV2ZWwpO1xuICAgICAgICB0aGlzLnJlbW92ZUxvYWRlcnMobGV2ZWwpO1xuICAgICAgfSxcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVHJhbnNpdGlvbkR1cmF0aW9ucy5CQUNLRFJPUCA6IDBcbiAgICApO1xuICB9XG5cbiAgX3Nob3dCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0JhY2tkcm9wRW5hYmxlZCA9IHRoaXMuY29uZmlnLmJhY2tkcm9wIHx8IHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJztcbiAgICBjb25zdCBpc0JhY2tkcm9wSW5ET00gPSAhdGhpcy5iYWNrZHJvcFJlZiB8fCAhdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duO1xuXG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcblxuICAgICAgaWYgKGlzQmFja2Ryb3BFbmFibGVkICYmIGlzQmFja2Ryb3BJbkRPTSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcExvYWRlclxuICAgICAgICAgIC5hdHRhY2goTW9kYWxCYWNrZHJvcENvbXBvbmVudClcbiAgICAgICAgICAudG8oJ2JvZHknKVxuICAgICAgICAgIC5zaG93KHsgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQgfSk7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BSZWYgPSB0aGlzLl9iYWNrZHJvcExvYWRlci5fY29tcG9uZW50UmVmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmJhY2tkcm9wUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmFja2Ryb3BSZWYuaW5zdGFuY2UuaXNTaG93biA9IGZhbHNlO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0ZWQgPyBUcmFuc2l0aW9uRHVyYXRpb25zLkJBQ0tEUk9QIDogMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlQmFja2Ryb3AoKSwgZHVyYXRpb24pO1xuICB9XG5cbiAgX3Nob3dNb2RhbChjb250ZW50OiBhbnkpOiBNREJNb2RhbFJlZiB7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbdGhpcy5sb2FkZXJzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IG1kYk1vZGFsUmVmID0gbmV3IE1EQk1vZGFsUmVmKCk7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXJSZWYgPSBtb2RhbExvYWRlclxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBNb2RhbE9wdGlvbnMsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZyB9KVxuICAgICAgLnByb3ZpZGUoeyBwcm92aWRlOiBNREJNb2RhbFJlZiwgdXNlVmFsdWU6IG1kYk1vZGFsUmVmIH0pXG4gICAgICAuYXR0YWNoKE1vZGFsQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKCdib2R5JylcbiAgICAgIC5zaG93KHtcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgaXNBbmltYXRlZDogdGhpcy5jb25maWcuYW5pbWF0ZWQsXG4gICAgICAgIGRhdGE6IHRoaXMuY29uZmlnLmRhdGEsXG4gICAgICAgIG1kYk1vZGFsU2VydmljZTogdGhpcyxcbiAgICAgIH0pO1xuICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmZvY3VzTW9kYWxFbGVtZW50KCk7XG4gICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UubGV2ZWwgPSB0aGlzLmdldE1vZGFsc0NvdW50KCk7XG4gICAgbWRiTW9kYWxSZWYuaGlkZSA9ICgpID0+IHtcbiAgICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmhpZGUoKTtcbiAgICB9O1xuICAgIG1kYk1vZGFsUmVmLmNvbnRlbnQgPSBtb2RhbExvYWRlci5nZXRJbm5lckNvbXBvbmVudCgpIHx8IG51bGw7XG4gICAgcmV0dXJuIG1kYk1vZGFsUmVmO1xuICB9XG5cbiAgX2hpZGVNb2RhbChsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbbGV2ZWwgLSAxXTtcbiAgICBpZiAobW9kYWxMb2FkZXIpIHtcbiAgICAgIG1vZGFsTG9hZGVyLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRNb2RhbHNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGFsc0NvdW50O1xuICB9XG5cbiAgc2V0RGlzbWlzc1JlYXNvbihyZWFzb246IHN0cmluZykge1xuICAgIHRoaXMubGFzdERpc21pc3NSZWFzb24gPSByZWFzb247XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVtb3ZlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIuaGlkZSgpO1xuICAgIHRoaXMuYmFja2Ryb3BSZWYgPSBudWxsO1xuICB9XG5cbiAgLyoqIEFGVEVSIFBSIE1FUkdFIE1PREFMLkNPTVBPTkVOVCBXSUxMIEJFIFVTSU5HIFRISVMgQ09ERSovXG4gIC8qKiBTY3JvbGwgYmFyIHRyaWNrcyAqL1xuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBjaGVja1Njcm9sbGJhcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSB8fCAnMCcsXG4gICAgICAxMFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nICsgJ3B4JztcbiAgfVxuXG4gIC8vIHRoeCBkLndhbHNoXG4gIHByaXZhdGUgZ2V0U2Nyb2xsYmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc2Nyb2xsRGl2LCBDbGFzc05hbWUuU0NST0xMQkFSX01FQVNVUkVSKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xuXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlTG9hZGVycygpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkZXIgPSB0aGlzLmNsZi5jcmVhdGVMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+KHRoaXMuZWwsIHRoaXMudmNyLCB0aGlzLnJlbmRlcmVyKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25CZWZvcmVTaG93LCB0aGlzLm9wZW4pO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vblNob3duLCB0aGlzLm9wZW5lZCk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlSGlkZSwgdGhpcy5jbG9zZSk7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uSGlkZGVuLCB0aGlzLmNsb3NlZCk7XG4gICAgdGhpcy5sb2FkZXJzLnB1c2gobG9hZGVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTG9hZGVycyhsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkZXJzLnNwbGljZShsZXZlbCAtIDEsIDEpO1xuICAgIHRoaXMubG9hZGVycy5mb3JFYWNoKChsb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgbG9hZGVyLmluc3RhbmNlLmxldmVsID0gaSArIDE7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNvcHlFdmVudChmcm9tOiBFdmVudEVtaXR0ZXI8YW55PiwgdG86IEV2ZW50RW1pdHRlcjxhbnk+KSB7XG4gICAgZnJvbS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdG8uZW1pdCh0aGlzLmxhc3REaXNtaXNzUmVhc29uKTtcbiAgICB9KTtcbiAgfVxufVxuIl19