/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { SPACE } from '../../../free/utils/keyboard-navigation';
export class SBItemHeadComponent {
    /**
     * @param {?} sbItem
     * @param {?} _cdRef
     */
    constructor(sbItem, _cdRef) {
        this.sbItem = sbItem;
        this._cdRef = _cdRef;
        this.isDisabled = false;
        this.indicator = true;
        this.id = `mdb-accordion-`;
        this.ariaExpanded = false;
        this.ariaControls = '';
        this.id = `mdb-accordion-head-${this.sbItem.idModifier}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === SPACE) {
            this.toggleClick(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleClick(event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
            this.ariaExpanded = !this.ariaExpanded;
        }
        this._cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ariaExpanded = this.sbItem.collapsed ? false : true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.sbItem.body) {
                this.ariaControls = this.sbItem.body.id;
                this.sbItem.body.ariaLabelledBy = this.id;
            }
        }), 0);
    }
}
SBItemHeadComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'mdb-item-head, mdb-accordion-item-head',
                template: "<div\n  class=\"card-header {{ customClass }}\"\n  [ngClass]=\"{ 'item-disabled': isDisabled }\"\n  (click)=\"toggleClick($event)\"\n  [id]=\"id\"\n>\n  <a\n    role=\"button\"\n    href=\"javascript:;\"\n    [attr.aria-expanded]=\"ariaExpanded\"\n    [attr.aria-controls]=\"ariaControls\"\n  >\n    <h5 class=\"mb-0\">\n      <span class=\"\">\n        <ng-content></ng-content>\n      </span>\n      <i *ngIf=\"indicator\" class=\"mdb-accordion-indicator rotate-icon\" aria-hidden=\"true\"></i>\n    </h5>\n  </a>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SBItemHeadComponent.ctorParameters = () => [
    { type: SBItemComponent },
    { type: ChangeDetectorRef }
];
SBItemHeadComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    customClass: [{ type: Input }],
    indicator: [{ type: Input }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SBItemHeadComponent.prototype.isDisabled;
    /** @type {?} */
    SBItemHeadComponent.prototype.customClass;
    /** @type {?} */
    SBItemHeadComponent.prototype.indicator;
    /** @type {?} */
    SBItemHeadComponent.prototype.id;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaExpanded;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaControls;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype.sbItem;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEdBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBUWhFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUzlCLFlBQW9CLE1BQXVCLEVBQVUsTUFBeUI7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVJyRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFbkIsT0FBRSxHQUFHLGdCQUFnQixDQUFDO1FBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBR2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsc0JBQXNCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFb0MsU0FBUyxDQUFDLEtBQW9CO1FBQ2pFLHdDQUF3QztRQUN4QyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDM0M7UUFDSCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCx5aEJBQWdDO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVJRLGVBQWU7WUFIdEIsaUJBQWlCOzs7eUJBYWhCLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQVVMLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFabkMseUNBQTRCOztJQUM1QiwwQ0FBNkI7O0lBQzdCLHdDQUEwQjs7SUFFMUIsaUNBQTZCOztJQUM3QiwyQ0FBcUI7O0lBQ3JCLDJDQUFrQjs7Ozs7SUFFTixxQ0FBK0I7Ozs7O0lBQUUscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTQkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NiLWl0ZW0nO1xuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1IZWFkJyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1oZWFkLCBtZGItYWNjb3JkaW9uLWl0ZW0taGVhZCcsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5oZWFkLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtSGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaW5kaWNhdG9yID0gdHJ1ZTtcblxuICBwdWJsaWMgaWQgPSBgbWRiLWFjY29yZGlvbi1gO1xuICBhcmlhRXhwYW5kZWQgPSBmYWxzZTtcbiAgYXJpYUNvbnRyb2xzID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYkl0ZW06IFNCSXRlbUNvbXBvbmVudCwgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5pZCA9IGBtZGItYWNjb3JkaW9uLWhlYWQtJHt0aGlzLnNiSXRlbS5pZE1vZGlmaWVyfWA7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBTUEFDRSkge1xuICAgICAgdGhpcy50b2dnbGVDbGljayhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2JJdGVtLmNvbGxhcHNlZCA9ICF0aGlzLnNiSXRlbS5jb2xsYXBzZWQ7XG4gICAgICB0aGlzLnNiSXRlbS50b2dnbGUodGhpcy5zYkl0ZW0uY29sbGFwc2VkKTtcbiAgICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gIXRoaXMuYXJpYUV4cGFuZGVkO1xuICAgIH1cbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gdGhpcy5zYkl0ZW0uY29sbGFwc2VkID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2JJdGVtLmJvZHkpIHtcbiAgICAgICAgdGhpcy5hcmlhQ29udHJvbHMgPSB0aGlzLnNiSXRlbS5ib2R5LmlkO1xuICAgICAgICB0aGlzLnNiSXRlbS5ib2R5LmFyaWFMYWJlbGxlZEJ5ID0gdGhpcy5pZDtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxufVxuIl19