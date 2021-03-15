/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, ChangeDetectorRef, } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
var SBItemComponent = /** @class */ (function () {
    function SBItemComponent(accordionService, _cdRef) {
        this.accordionService = accordionService;
        this._cdRef = _cdRef;
        this.collapsed = true;
        this.autoExpand = true;
        this.idModifier = Math.floor(Math.random() * 1000);
    }
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.body !== undefined) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.collapsed
                    ? (_this.body.expandAnimationState = 'collapsed')
                    : (_this.body.expandAnimationState = 'expanded');
            }), 0);
            this.body.toggle(this.collapsed);
            if (this.autoExpand !== false) {
                this.body.openSidenavOnActiveLink();
            }
        }
        if (this.body) {
            this.body.autoExpand = this.autoExpand;
            this.body.collapsed = this.collapsed;
        }
    };
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.body && _this.body.expandAnimationState === 'expanded') {
                _this.collapsed = false;
            }
        }), 40);
        if (this.body) {
            this.body.id = "mdb-accordion-body-" + this.idModifier;
        }
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.toggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        this.accordionService.didItemToggled(this);
        this.applyToggle(collapsed);
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.applyToggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        if (this.body !== undefined) {
            this.collapsed = collapsed;
            this.body.toggle(collapsed);
            this._cdRef.markForCheck();
        }
    };
    SBItemComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItem',
                    selector: 'mdb-item, mdb-accordion-item',
                    template: "<div class=\"card {{ customClass }}\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    SBItemComponent.ctorParameters = function () { return [
        { type: MdbAccordionService },
        { type: ChangeDetectorRef }
    ]; };
    SBItemComponent.propDecorators = {
        collapsed: [{ type: Input }],
        customClass: [{ type: Input }],
        body: [{ type: ContentChild, args: [SBItemBodyComponent, { static: false },] }]
    };
    return SBItemComponent;
}());
export { SBItemComponent };
if (false) {
    /** @type {?} */
    SBItemComponent.prototype.collapsed;
    /** @type {?} */
    SBItemComponent.prototype.customClass;
    /** @type {?} */
    SBItemComponent.prototype.autoExpand;
    /** @type {?} */
    SBItemComponent.prototype.idModifier;
    /** @type {?} */
    SBItemComponent.prototype.body;
    /**
     * @type {?}
     * @private
     */
    SBItemComponent.prototype.accordionService;
    /**
     * @type {?}
     * @private
     */
    SBItemComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRDtJQWFFLHlCQUFvQixnQkFBcUMsRUFBVSxNQUF5QjtRQUF4RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFQNUUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUlpRCxDQUFDOzs7O0lBRWhHLHlDQUFlOzs7SUFBZjtRQUFBLGlCQWdCQztRQWZDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVM7b0JBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNyQztTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVELDRDQUFrQjs7O0lBQWxCO1FBQUEsaUJBU0M7UUFSQyxVQUFVOzs7UUFBQztZQUNULElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixLQUFLLFVBQVUsRUFBRTtnQkFDOUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyx3QkFBc0IsSUFBSSxDQUFDLFVBQVksQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsOEJBQThCO29CQUN4Qyx1SkFBMkI7aUJBQzVCOzs7O2dCQU5RLG1CQUFtQjtnQkFIMUIsaUJBQWlCOzs7NEJBV2hCLEtBQUs7OEJBQ0wsS0FBSzt1QkFJTCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTZDdEQsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQW5EWSxlQUFlOzs7SUFDMUIsb0NBQWlDOztJQUNqQyxzQ0FBNkI7O0lBQzdCLHFDQUFrQjs7SUFDbEIscUNBQThDOztJQUU5QywrQkFBZ0Y7Ozs7O0lBRXBFLDJDQUE2Qzs7Ozs7SUFBRSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgSW5wdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNCSXRlbUJvZHlDb21wb25lbnQgfSBmcm9tICcuL3NiLWl0ZW0uYm9keSc7XG5pbXBvcnQgeyBNZGJBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vbWRiLWFjY29yZGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtJyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbSwgbWRiLWFjY29yZGlvbi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGNvbGxhcHNlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG4gIGF1dG9FeHBhbmQgPSB0cnVlO1xuICBpZE1vZGlmaWVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgQENvbnRlbnRDaGlsZChTQkl0ZW1Cb2R5Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgYm9keTogU0JJdGVtQm9keUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IE1kYkFjY29yZGlvblNlcnZpY2UsIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRcbiAgICAgICAgICA/ICh0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJylcbiAgICAgICAgICA6ICh0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnKTtcbiAgICAgIH0sIDApO1xuICAgICAgdGhpcy5ib2R5LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZCk7XG4gICAgICBpZiAodGhpcy5hdXRvRXhwYW5kICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmJvZHkub3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuYm9keSkge1xuICAgICAgdGhpcy5ib2R5LmF1dG9FeHBhbmQgPSB0aGlzLmF1dG9FeHBhbmQ7XG4gICAgICB0aGlzLmJvZHkuY29sbGFwc2VkID0gdGhpcy5jb2xsYXBzZWQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYm9keSAmJiB0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPT09ICdleHBhbmRlZCcpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCA0MCk7XG4gICAgaWYgKHRoaXMuYm9keSkge1xuICAgICAgdGhpcy5ib2R5LmlkID0gYG1kYi1hY2NvcmRpb24tYm9keS0ke3RoaXMuaWRNb2RpZmllcn1gO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UuZGlkSXRlbVRvZ2dsZWQodGhpcyk7XG4gICAgdGhpcy5hcHBseVRvZ2dsZShjb2xsYXBzZWQpO1xuICB9XG5cbiAgYXBwbHlUb2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcbiAgICAgIHRoaXMuYm9keS50b2dnbGUoY29sbGFwc2VkKTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIl19