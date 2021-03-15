/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
export class BsDropdownContainerComponent {
    /**
     * @param {?} _state
     */
    constructor(_state) {
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.isOpen = value;
        }));
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._state.direction;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
BsDropdownContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-dropdown-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      [class.dropup]="direction === 'up'"
      [class.dropdown]="direction === 'down'"
      [class.show]="isOpen"
      [class.open]="isOpen"
    >
      <ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState }
];
BsDropdownContainerComponent.propDecorators = {
    display: [{ type: HostBinding, args: ['style.display',] }],
    position: [{ type: HostBinding, args: ['style.position',] }]
};
if (false) {
    /** @type {?} */
    BsDropdownContainerComponent.prototype.isOpen;
    /** @type {?} */
    BsDropdownContainerComponent.prototype.display;
    /** @type {?} */
    BsDropdownContainerComponent.prototype.position;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    BsDropdownContainerComponent.prototype._state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2Ryb3Bkb3duL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWEsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWdCbkQsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQVl2QyxZQUFvQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQVgzQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWUsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUNqQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBU25ELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFWRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7Ozs7SUFVRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2FBQ0Y7Ozs7WUFmUSxlQUFlOzs7c0JBbUJyQixXQUFXLFNBQUMsZUFBZTt1QkFDM0IsV0FBVyxTQUFDLGdCQUFnQjs7OztJQUg3Qiw4Q0FBZTs7SUFFZiwrQ0FBZ0Q7O0lBQ2hELGdEQUFxRDs7Ozs7SUFNckQscURBQTJCOzs7OztJQUVmLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vZHJvcGRvd24uc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItZHJvcGRvd24tY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgW2NsYXNzLmRyb3B1cF09XCJkaXJlY3Rpb24gPT09ICd1cCdcIlxuICAgICAgW2NsYXNzLmRyb3Bkb3duXT1cImRpcmVjdGlvbiA9PT0gJ2Rvd24nXCJcbiAgICAgIFtjbGFzcy5zaG93XT1cImlzT3BlblwiXG4gICAgICBbY2xhc3Mub3Blbl09XCJpc09wZW5cIlxuICAgID5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGlzT3BlbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnYmxvY2snO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvc2l0aW9uJykgcG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gIGdldCBkaXJlY3Rpb24oKTogJ2Rvd24nIHwgJ3VwJyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmRpcmVjdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUpIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBfc3RhdGUuaXNPcGVuQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19