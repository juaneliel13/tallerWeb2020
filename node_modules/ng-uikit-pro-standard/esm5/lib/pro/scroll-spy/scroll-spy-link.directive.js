/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostListener, HostBinding, ChangeDetectorRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var ScrollSpyLinkDirective = /** @class */ (function () {
    function ScrollSpyLinkDirective(cdRef, document) {
        this.cdRef = cdRef;
        this.document = document;
        this._scrollIntoView = true;
        this.active = false;
    }
    Object.defineProperty(ScrollSpyLinkDirective.prototype, "scrollIntoView", {
        get: /**
         * @return {?}
         */
        function () { return this._scrollIntoView; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._scrollIntoView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollSpyLinkDirective.prototype, "section", {
        get: /**
         * @return {?}
         */
        function () { return this._section; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._section = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrollSpyLinkDirective.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._id = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyLinkDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.section && this.scrollIntoView === true) {
            this.section.scrollIntoView();
        }
    };
    /**
     * @return {?}
     */
    ScrollSpyLinkDirective.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    ScrollSpyLinkDirective.prototype.assignSectionToId = /**
     * @return {?}
     */
    function () {
        this.section = this.document.documentElement.querySelector("#" + this.id);
    };
    /**
     * @return {?}
     */
    ScrollSpyLinkDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.assignSectionToId();
    };
    ScrollSpyLinkDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpyLink]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyLinkDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ScrollSpyLinkDirective.propDecorators = {
        scrollIntoView: [{ type: Input }],
        id: [{ type: Input, args: ['mdbScrollSpyLink',] }],
        active: [{ type: HostBinding, args: ['class.active',] }],
        onClick: [{ type: HostListener, args: ['click', [],] }]
    };
    return ScrollSpyLinkDirective;
}());
export { ScrollSpyLinkDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollSpyLinkDirective.prototype._scrollIntoView;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyLinkDirective.prototype._section;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyLinkDirective.prototype._id;
    /** @type {?} */
    ScrollSpyLinkDirective.prototype.active;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyLinkDirective.prototype.cdRef;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyLinkDirective.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2Nyb2xsLXNweS9zY3JvbGwtc3B5LWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxZQUFZLEVBQ1osV0FBVyxFQUNYLGlCQUFpQixFQUNqQixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDO0lBb0JFLGdDQUNVLEtBQXdCLEVBQ04sUUFBYTtRQUQvQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUNOLGFBQVEsR0FBUixRQUFRLENBQUs7UUFiakMsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUEyQi9CLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFiWixDQUFDO0lBbkJKLHNCQUNJLGtEQUFjOzs7O1FBRGxCLGNBQ3VCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3JELFVBQW1CLEtBQWM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BSG9EO0lBTXJELHNCQUFJLDJDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDdkMsVUFBWSxLQUFrQjtZQUM1QixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQUxzQztJQWN2QyxzQkFDSSxzQ0FBRTs7OztRQUROO1lBRUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7Ozs7O1FBQ0QsVUFBTyxLQUFhO1lBQ2xCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQzs7O09BTEE7Ozs7SUFXRCx3Q0FBTzs7O0lBRFA7UUFFRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7SUFFRCw4Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxrREFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE1BQUksSUFBSSxDQUFDLEVBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkF2REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQVBDLGlCQUFpQjtnREEyQmQsTUFBTSxTQUFDLFFBQVE7OztpQ0FsQmpCLEtBQUs7cUJBcUJMLEtBQUssU0FBQyxrQkFBa0I7eUJBVXhCLFdBQVcsU0FBQyxjQUFjOzBCQUcxQixZQUFZLFNBQUMsT0FBTyxFQUFFLEVBQUU7O0lBa0IzQiw2QkFBQztDQUFBLEFBeERELElBd0RDO1NBckRZLHNCQUFzQjs7Ozs7O0lBTWpDLGlEQUErQjs7Ozs7SUFRL0IsMENBQThCOzs7OztJQUM5QixxQ0FBb0I7O0lBaUJwQix3Q0FDZTs7Ozs7SUFmYix1Q0FBZ0M7Ozs7O0lBQ2hDLDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlNjcm9sbFNweUxpbmtdJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTcHlMaW5rRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZ2V0IHNjcm9sbEludG9WaWV3KCkgeyByZXR1cm4gdGhpcy5fc2Nyb2xsSW50b1ZpZXc7IH1cbiAgc2V0IHNjcm9sbEludG9WaWV3KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2Nyb2xsSW50b1ZpZXcgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9zY3JvbGxJbnRvVmlldyA9IHRydWU7XG5cbiAgZ2V0IHNlY3Rpb24oKSB7IHJldHVybiB0aGlzLl9zZWN0aW9uOyB9XG4gIHNldCBzZWN0aW9uKHZhbHVlOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fc2VjdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9zZWN0aW9uOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgKSB7fVxuXG4gIEBJbnB1dCgnbWRiU2Nyb2xsU3B5TGluaycpXG4gIGdldCBpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBzZXQgaWQobmV3SWQ6IHN0cmluZykge1xuICAgIGlmIChuZXdJZCkge1xuICAgICAgdGhpcy5faWQgPSBuZXdJZDtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIGFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgW10pXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc2VjdGlvbiAmJiB0aGlzLnNjcm9sbEludG9WaWV3ID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgYXNzaWduU2VjdGlvblRvSWQoKSB7XG4gICAgdGhpcy5zZWN0aW9uID0gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXNzaWduU2VjdGlvblRvSWQoKTtcbiAgfVxufVxuIl19