/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { ClassName } from './modal.options';
import { isBs3 } from '../utils/ng2-bootstrap-config';
import { Utils } from '../utils/utils.class';
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
export { ModalBackdropOptions };
if (false) {
    /** @type {?} */
    ModalBackdropOptions.prototype.animate;
}
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.classNameBackDrop = true;
        this._isShown = false;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAnimated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + ClassName.IN);
                if (!isBs3()) {
                    this.renderer.addClass(this.element.nativeElement, "" + ClassName.SHOW);
                }
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + ClassName.IN);
                if (!isBs3()) {
                    this.renderer.removeClass(this.element.nativeElement, "" + ClassName.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        else {
            this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-modal-backdrop',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ModalBackdropComponent.propDecorators = {
        classNameBackDrop: [{ type: HostBinding, args: ['class.modal-backdrop',] }]
    };
    return ModalBackdropComponent;
}());
export { ModalBackdropComponent };
if (false) {
    /** @type {?} */
    ModalBackdropComponent.prototype.classNameBackDrop;
    /**
     * @type {?}
     * @protected
     */
    ModalBackdropComponent.prototype._isAnimated;
    /**
     * @type {?}
     * @protected
     */
    ModalBackdropComponent.prototype._isShown;
    /** @type {?} */
    ModalBackdropComponent.prototype.element;
    /** @type {?} */
    ModalBackdropComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxCYWNrZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9tb2RhbHMvbW9kYWxCYWNrZHJvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFN0M7SUFHRSw4QkFBbUIsT0FBNkI7UUFGekMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUdwQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLHVDQUFzQjs7Ozs7QUFReEI7SUF1Q0UsZ0NBQTBCLE9BQW1CLEVBQVMsUUFBbUI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUFsQzdCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQWdDM0QsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUVpRCxDQUFDO0lBaEM3RSxzQkFBVyw4Q0FBVTs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7OztRQUVELFVBQXNCLEtBQWM7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVywyQ0FBTzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7OztRQUVELFVBQW1CLEtBQWM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBRyxTQUFTLENBQUMsRUFBSSxDQUFDLENBQUM7Z0JBRXRFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFHLFNBQVMsQ0FBQyxJQUFNLENBQUMsQ0FBQztpQkFDekU7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFHLFNBQVMsQ0FBQyxFQUFJLENBQUMsQ0FBQztnQkFFekUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUcsU0FBUyxDQUFDLElBQU0sQ0FBQyxDQUFDO2lCQUM1RTthQUNGO1FBQ0gsQ0FBQzs7O09BakJBOzs7O0lBd0JELHlDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFHLFNBQVMsQ0FBQyxJQUFNLENBQUMsQ0FBQztZQUN4RSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUcsU0FBUyxDQUFDLElBQU0sQ0FBQyxDQUFDO1lBQ3hFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBbEJtQixVQUFVO2dCQUFVLFNBQVM7OztvQ0FvQjlDLFdBQVcsU0FBQyxzQkFBc0I7O0lBOENyQyw2QkFBQztDQUFBLEFBbkRELElBbURDO1NBL0NZLHNCQUFzQjs7O0lBQ2pDLG1EQUFxRTs7Ozs7SUErQnJFLDZDQUErQjs7Ozs7SUFDL0IsMENBQTJCOztJQUVSLHlDQUEwQjs7SUFBRSwwQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbGFzc05hbWUgfSBmcm9tICcuL21vZGFsLm9wdGlvbnMnO1xuaW1wb3J0IHsgaXNCczMgfSBmcm9tICcuLi91dGlscy9uZzItYm9vdHN0cmFwLWNvbmZpZyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmNsYXNzJztcblxuZXhwb3J0IGNsYXNzIE1vZGFsQmFja2Ryb3BPcHRpb25zIHtcbiAgcHVibGljIGFuaW1hdGUgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBNb2RhbEJhY2tkcm9wT3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cbn1cblxuLyoqIFRoaXMgY29tcG9uZW50IHdpbGwgYmUgYWRkZWQgYXMgYmFja2dyb3VuZCBsYXlvdXQgZm9yIG1vZGFscyBpZiBlbmFibGVkICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItbW9kYWwtYmFja2Ryb3AnLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsQmFja2Ryb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vZGFsLWJhY2tkcm9wJykgcHVibGljIGNsYXNzTmFtZUJhY2tEcm9wID0gdHJ1ZTtcblxuICBwdWJsaWMgZ2V0IGlzQW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQW5pbWF0ZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGlzQW5pbWF0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0FuaW1hdGVkID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU2hvd247XG4gIH1cblxuICBwdWJsaWMgc2V0IGlzU2hvd24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1Nob3duID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtDbGFzc05hbWUuSU59YCk7XG5cbiAgICAgIGlmICghaXNCczMoKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtDbGFzc05hbWUuU0hPV31gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7Q2xhc3NOYW1lLklOfWApO1xuXG4gICAgICBpZiAoIWlzQnMzKCkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7Q2xhc3NOYW1lLlNIT1d9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9pc0FuaW1hdGVkOiBib29sZWFuO1xuICBwcm90ZWN0ZWQgX2lzU2hvd24gPSBmYWxzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke0NsYXNzTmFtZS5GQURFfWApO1xuICAgICAgVXRpbHMucmVmbG93KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7Q2xhc3NOYW1lLkZBREV9YCk7XG4gICAgICBVdGlscy5yZWZsb3codGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xuICB9XG59XG4iXX0=