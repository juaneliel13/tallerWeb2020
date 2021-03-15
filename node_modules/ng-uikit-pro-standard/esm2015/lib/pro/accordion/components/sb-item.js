/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, ChangeDetectorRef, } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
export class SBItemComponent {
    /**
     * @param {?} accordionService
     * @param {?} _cdRef
     */
    constructor(accordionService, _cdRef) {
        this.accordionService = accordionService;
        this._cdRef = _cdRef;
        this.collapsed = true;
        this.autoExpand = true;
        this.idModifier = Math.floor(Math.random() * 1000);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.body !== undefined) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.collapsed
                    ? (this.body.expandAnimationState = 'collapsed')
                    : (this.body.expandAnimationState = 'expanded');
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
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.body && this.body.expandAnimationState === 'expanded') {
                this.collapsed = false;
            }
        }), 40);
        if (this.body) {
            this.body.id = `mdb-accordion-body-${this.idModifier}`;
        }
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        this.accordionService.didItemToggled(this);
        this.applyToggle(collapsed);
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    applyToggle(collapsed) {
        if (this.body !== undefined) {
            this.collapsed = collapsed;
            this.body.toggle(collapsed);
            this._cdRef.markForCheck();
        }
    }
}
SBItemComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItem',
                selector: 'mdb-item, mdb-accordion-item',
                template: "<div class=\"card {{ customClass }}\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
SBItemComponent.ctorParameters = () => [
    { type: MdbAccordionService },
    { type: ChangeDetectorRef }
];
SBItemComponent.propDecorators = {
    collapsed: [{ type: Input }],
    customClass: [{ type: Input }],
    body: [{ type: ContentChild, args: [SBItemBodyComponent, { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU8vRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFRMUIsWUFBb0IsZ0JBQXFDLEVBQVUsTUFBeUI7UUFBeEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBUDVFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFJaUQsQ0FBQzs7OztJQUVoRyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVM7b0JBQ1osQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNyQztTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxVQUFVLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsc0JBQXNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyx1SkFBMkI7YUFDNUI7Ozs7WUFOUSxtQkFBbUI7WUFIMUIsaUJBQWlCOzs7d0JBV2hCLEtBQUs7MEJBQ0wsS0FBSzttQkFJTCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBTHBELG9DQUFpQzs7SUFDakMsc0NBQTZCOztJQUM3QixxQ0FBa0I7O0lBQ2xCLHFDQUE4Qzs7SUFFOUMsK0JBQWdGOzs7OztJQUVwRSwyQ0FBNkM7Ozs7O0lBQUUsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIElucHV0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTQkl0ZW1Cb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9zYi1pdGVtLmJvZHknO1xuaW1wb3J0IHsgTWRiQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL21kYi1hY2NvcmRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbScsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0sIG1kYi1hY2NvcmRpb24taXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xsYXBzZWQgPSB0cnVlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBhdXRvRXhwYW5kID0gdHJ1ZTtcbiAgaWRNb2RpZmllciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gIEBDb250ZW50Q2hpbGQoU0JJdGVtQm9keUNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGJvZHk6IFNCSXRlbUJvZHlDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2NvcmRpb25TZXJ2aWNlOiBNZGJBY2NvcmRpb25TZXJ2aWNlLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkXG4gICAgICAgICAgPyAodGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcpXG4gICAgICAgICAgOiAodGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJyk7XG4gICAgICB9LCAwKTtcbiAgICAgIHRoaXMuYm9keS50b2dnbGUodGhpcy5jb2xsYXBzZWQpO1xuICAgICAgaWYgKHRoaXMuYXV0b0V4cGFuZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5ib2R5Lm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmJvZHkpIHtcbiAgICAgIHRoaXMuYm9keS5hdXRvRXhwYW5kID0gdGhpcy5hdXRvRXhwYW5kO1xuICAgICAgdGhpcy5ib2R5LmNvbGxhcHNlZCA9IHRoaXMuY29sbGFwc2VkO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJvZHkgJiYgdGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID09PSAnZXhwYW5kZWQnKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgNDApO1xuICAgIGlmICh0aGlzLmJvZHkpIHtcbiAgICAgIHRoaXMuYm9keS5pZCA9IGBtZGItYWNjb3JkaW9uLWJvZHktJHt0aGlzLmlkTW9kaWZpZXJ9YDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLmRpZEl0ZW1Ub2dnbGVkKHRoaXMpO1xuICAgIHRoaXMuYXBwbHlUb2dnbGUoY29sbGFwc2VkKTtcbiAgfVxuXG4gIGFwcGx5VG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgICB0aGlzLmJvZHkudG9nZ2xlKGNvbGxhcHNlZCk7XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==