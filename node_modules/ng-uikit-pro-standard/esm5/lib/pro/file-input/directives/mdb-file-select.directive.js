/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, Input, Output, PLATFORM_ID, Inject, ViewEncapsulation, Component, } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MDBUploaderService } from '../classes/mdb-uploader.class';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var MDBFileSelectDirective = /** @class */ (function () {
    function MDBFileSelectDirective(platform_id, elementRef) {
        var _this = this;
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this._destroy$ = new Subject();
        this.isServer = isPlatformServer(this.platform_id);
        this.fileListener = (/**
         * @return {?}
         */
        function () {
            _this.upload.handleFiles(_this.el.files);
            _this.el.value = '';
        });
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MDBFileSelectDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        /** @type {?} */
        var concurrency = (this.options && this.options.concurrency) || Number.POSITIVE_INFINITY;
        /** @type {?} */
        var allowedContentTypes = (this.options && this.options.allowedContentTypes) || ['*'];
        /** @type {?} */
        var maxUploads = (this.options && this.options.maxUploads) || Number.POSITIVE_INFINITY;
        this.upload = new MDBUploaderService(concurrency, allowedContentTypes, maxUploads);
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.pipe(takeUntil(this._destroy$)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.uploadOutput.emit(event);
        }));
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    };
    /**
     * @return {?}
     */
    MDBFileSelectDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isServer) {
            return;
        }
        if (this.el) {
            this.el.removeEventListener('change', this.fileListener, false);
        }
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
        this._destroy$.next();
        this._destroy$.complete();
    };
    MDBFileSelectDirective.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[mdbFileSelect]',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".file-field{position:relative;display:flex;flex-direction:row}.file-field .file-path-wrapper{padding-left:10px;height:2.5rem;overflow:visible;display:flex;flex-grow:1}.file-field input[type=file]::-webkit-file-upload-button{display:none}.file-field .file-path-wrapper:after{content:'';clear:both}.file-field input.file-path{background-color:transparent;border:none;border-bottom:1px solid #ccc;border-radius:0;outline:0;height:2.1rem;width:100%;font-size:1rem;box-shadow:none;box-sizing:content-box;transition:.3s}.file-field .btn{position:relative;display:flex;float:none}.file-field .btn:hover{cursor:pointer}.file-field .btn input[type=file]{height:100%}.file-field .btn input[type=file] :hover,.file-field span{cursor:pointer}.file-field input[type=file]{opacity:0;position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:1px;cursor:pointer;opacity:0}.file-field input[type=file]::-ms-value{display:none}.file-field input[type=file]::-ms-browse{width:100%}.btn-file{padding-top:1px}"]
                }] }
    ];
    /** @nocollapse */
    MDBFileSelectDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef }
    ]; };
    MDBFileSelectDirective.propDecorators = {
        uploadInput: [{ type: Input }],
        options: [{ type: Input }],
        uploadOutput: [{ type: Output }]
    };
    return MDBFileSelectDirective;
}());
export { MDBFileSelectDirective };
if (false) {
    /** @type {?} */
    MDBFileSelectDirective.prototype.uploadInput;
    /** @type {?} */
    MDBFileSelectDirective.prototype.options;
    /** @type {?} */
    MDBFileSelectDirective.prototype.uploadOutput;
    /**
     * @type {?}
     * @private
     */
    MDBFileSelectDirective.prototype._destroy$;
    /** @type {?} */
    MDBFileSelectDirective.prototype.upload;
    /** @type {?} */
    MDBFileSelectDirective.prototype.isServer;
    /** @type {?} */
    MDBFileSelectDirective.prototype.el;
    /** @type {?} */
    MDBFileSelectDirective.prototype.fileListener;
    /**
     * @type {?}
     * @private
     */
    MDBFileSelectDirective.prototype.platform_id;
    /**
     * @type {?}
     * @private
     */
    MDBFileSelectDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZpbGUtc2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZmlsZS1pbnB1dC9kaXJlY3RpdmVzL21kYi1maWxlLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sV0FBVyxFQUNYLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0IsTUFBTSwrQkFBK0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQW9CRSxnQ0FBeUMsV0FBZ0IsRUFBVSxVQUFzQjtRQUF6RixpQkFFQztRQUZ3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFQakYsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2pELGFBQVEsR0FBWSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUErQ3ZELGlCQUFZOzs7UUFBRztZQUNiLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQztRQTdDQSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFBQSxpQkFvQkM7UUFuQkMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjs7WUFFSyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLGlCQUFpQjs7WUFDcEYsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7WUFDakYsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUI7UUFDeEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVuRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFtQjtZQUN0RixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxZQUFZLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBN0RGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFFckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUN0Qzs7OztnREFjYyxNQUFNLFNBQUMsV0FBVztnQkFyQy9CLFVBQVU7Ozs4QkEwQlQsS0FBSzswQkFDTCxLQUFLOytCQUNMLE1BQU07O0lBd0RULDZCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0EzRFksc0JBQXNCOzs7SUFDakMsNkNBQXdDOztJQUN4Qyx5Q0FBa0M7O0lBQ2xDLDhDQUFtRDs7Ozs7SUFFbkQsMkNBQWlEOztJQUVqRCx3Q0FBMkI7O0lBQzNCLDBDQUF1RDs7SUFFdkQsb0NBQTJCOztJQTZDM0IsOENBR0U7Ozs7O0lBOUNVLDZDQUE2Qzs7Ozs7SUFBRSw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29tcG9uZW50LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTURCVXBsb2FkZXJTZXJ2aWNlLCBVcGxvYWRPdXRwdXQgfSBmcm9tICcuLi9jbGFzc2VzL21kYi11cGxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBVcGxvYWRlck9wdGlvbnMgfSBmcm9tICcuLi9jbGFzc2VzL21kYi11cGxvYWRlci5jbGFzcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW21kYkZpbGVTZWxlY3RdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vLi4vZmlsZS1pbnB1dC1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTURCRmlsZVNlbGVjdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XG4gIEBPdXRwdXQoKSB1cGxvYWRPdXRwdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+O1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICB1cGxvYWQ6IE1EQlVwbG9hZGVyU2VydmljZTtcbiAgaXNTZXJ2ZXI6IGJvb2xlYW4gPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1faWQpO1xuICAvLyBlbDogSFRNTElucHV0RWxlbWVudDtcbiAgZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBhbnk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybV9pZDogYW55LCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnVwbG9hZE91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25jdXJyZW5jeSA9ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmNvbmN1cnJlbmN5KSB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgY29uc3QgYWxsb3dlZENvbnRlbnRUeXBlcyA9ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmFsbG93ZWRDb250ZW50VHlwZXMpIHx8IFsnKiddO1xuICAgIGNvbnN0IG1heFVwbG9hZHMgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5tYXhVcGxvYWRzKSB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgdGhpcy51cGxvYWQgPSBuZXcgTURCVXBsb2FkZXJTZXJ2aWNlKGNvbmN1cnJlbmN5LCBhbGxvd2VkQ29udGVudFR5cGVzLCBtYXhVcGxvYWRzKTtcblxuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuZmlsZUxpc3RlbmVyLCBmYWxzZSk7XG5cbiAgICB0aGlzLnVwbG9hZC5zZXJ2aWNlRXZlbnRzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKChldmVudDogVXBsb2FkT3V0cHV0KSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZE91dHB1dC5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnVwbG9hZElucHV0IGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICB0aGlzLnVwbG9hZC5pbml0SW5wdXRFdmVudHModGhpcy51cGxvYWRJbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmZpbGVMaXN0ZW5lciwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVwbG9hZElucHV0KSB7XG4gICAgICB0aGlzLnVwbG9hZElucHV0LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBmaWxlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgdGhpcy51cGxvYWQuaGFuZGxlRmlsZXModGhpcy5lbC5maWxlcyk7XG4gICAgdGhpcy5lbC52YWx1ZSA9ICcnO1xuICB9O1xufVxuIl19