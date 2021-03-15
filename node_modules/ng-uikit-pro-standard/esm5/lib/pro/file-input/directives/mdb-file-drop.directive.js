/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, ViewEncapsulation, } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MDBUploaderService, } from '../classes/mdb-uploader.class';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var MDBFileDropDirective = /** @class */ (function () {
    function MDBFileDropDirective(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this._destroy$ = new Subject();
        this.isServer = isPlatformServer(this.platform_id);
        this.stopEvent = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            e.stopPropagation();
            e.preventDefault();
        });
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MDBFileDropDirective.prototype.ngOnInit = /**
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
        this.el.addEventListener('drop', this.stopEvent, false);
        this.el.addEventListener('dragenter', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
    };
    /**
     * @return {?}
     */
    MDBFileDropDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isServer) {
            return;
        }
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
        this._destroy$.next();
        this._destroy$.complete();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        e.preventDefault();
        /** @type {?} */
        var event = { type: 'drop' };
        this.uploadOutput.emit(event);
        this.upload.handleFiles(e.dataTransfer.files);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e) {
            return;
        }
        /** @type {?} */
        var event = { type: 'dragOver' };
        this.uploadOutput.emit(event);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!e) {
            return;
        }
        /** @type {?} */
        var event = { type: 'dragOut' };
        this.uploadOutput.emit(event);
    };
    MDBFileDropDirective.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: '[mdbFileDrop]',
                    template: '<ng-content></ng-content>',
                    encapsulation: ViewEncapsulation.None,
                    styles: [".file-field{position:relative;display:flex;flex-direction:row}.file-field .file-path-wrapper{padding-left:10px;height:2.5rem;overflow:visible;display:flex;flex-grow:1}.file-field input[type=file]::-webkit-file-upload-button{display:none}.file-field .file-path-wrapper:after{content:'';clear:both}.file-field input.file-path{background-color:transparent;border:none;border-bottom:1px solid #ccc;border-radius:0;outline:0;height:2.1rem;width:100%;font-size:1rem;box-shadow:none;box-sizing:content-box;transition:.3s}.file-field .btn{position:relative;display:flex;float:none}.file-field .btn:hover{cursor:pointer}.file-field .btn input[type=file]{height:100%}.file-field .btn input[type=file] :hover,.file-field span{cursor:pointer}.file-field input[type=file]{opacity:0;position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:1px;cursor:pointer;opacity:0}.file-field input[type=file]::-ms-value{display:none}.file-field input[type=file]::-ms-browse{width:100%}.btn-file{padding-top:1px}"]
                }] }
    ];
    /** @nocollapse */
    MDBFileDropDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef }
    ]; };
    MDBFileDropDirective.propDecorators = {
        uploadInput: [{ type: Input }],
        options: [{ type: Input }],
        uploadOutput: [{ type: Output }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
    };
    return MDBFileDropDirective;
}());
export { MDBFileDropDirective };
if (false) {
    /** @type {?} */
    MDBFileDropDirective.prototype.uploadInput;
    /** @type {?} */
    MDBFileDropDirective.prototype.options;
    /** @type {?} */
    MDBFileDropDirective.prototype.uploadOutput;
    /**
     * @type {?}
     * @private
     */
    MDBFileDropDirective.prototype._destroy$;
    /** @type {?} */
    MDBFileDropDirective.prototype.upload;
    /** @type {?} */
    MDBFileDropDirective.prototype.isServer;
    /** @type {?} */
    MDBFileDropDirective.prototype.el;
    /** @type {?} */
    MDBFileDropDirective.prototype.stopEvent;
    /**
     * @type {?}
     * @private
     */
    MDBFileDropDirective.prototype.platform_id;
    /**
     * @type {?}
     * @private
     */
    MDBFileDropDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZpbGUtZHJvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2ZpbGUtaW5wdXQvZGlyZWN0aXZlcy9tZGItZmlsZS1kcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFDTCxrQkFBa0IsR0FJbkIsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQW1CRSw4QkFBeUMsV0FBZ0IsRUFBVSxVQUFzQjtRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFOakYsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR2pELGFBQVEsR0FBWSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUE4Q3ZELGNBQVM7Ozs7UUFBRyxVQUFDLENBQVE7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUM7UUE3Q0EsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNq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QUFDLEVBQUU7WUFDTixPQUFPO1NBQ1I7O1lBRUssS0FBSyxHQUFpQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7UUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBL0ZGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwyQkFBMkI7b0JBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0RBYWMsTUFBTSxTQUFDLFdBQVc7Z0JBeEMvQixVQUFVOzs7OEJBOEJULEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxNQUFNO3lCQXdETixZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOzZCQVUvQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQVVuQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQVN2QywyQkFBQztDQUFBLEFBaEdELElBZ0dDO1NBeEZZLG9CQUFvQjs7O0lBQy9CLDJDQUFnRDs7SUFDaEQsdUNBQWtDOztJQUNsQyw0Q0FBbUQ7Ozs7O0lBRW5ELHlDQUFpRDs7SUFFakQsc0NBQTJCOztJQUMzQix3Q0FBdUQ7O0lBQ3ZELGtDQUFxQjs7SUE2Q3JCLHlDQUdFOzs7OztJQTlDVSwyQ0FBNkM7Ozs7O0lBQUUsMENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgTURCVXBsb2FkZXJTZXJ2aWNlLFxuICBVcGxvYWRlck9wdGlvbnMsXG4gIFVwbG9hZElucHV0LFxuICBVcGxvYWRPdXRwdXQsXG59IGZyb20gJy4uL2NsYXNzZXMvbWRiLXVwbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbWRiRmlsZURyb3BdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vLi4vZmlsZS1pbnB1dC1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTURCRmlsZURyb3BEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVwbG9hZElucHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+O1xuICBASW5wdXQoKSBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XG4gIEBPdXRwdXQoKSB1cGxvYWRPdXRwdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+O1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICB1cGxvYWQ6IE1EQlVwbG9hZGVyU2VydmljZTtcbiAgaXNTZXJ2ZXI6IGJvb2xlYW4gPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1faWQpO1xuICBlbDogSFRNTElucHV0RWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtX2lkOiBhbnksIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMudXBsb2FkT3V0cHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc1NlcnZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmN1cnJlbmN5ID0gKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuY29uY3VycmVuY3kpIHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBjb25zdCBhbGxvd2VkQ29udGVudFR5cGVzID0gKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYWxsb3dlZENvbnRlbnRUeXBlcykgfHwgWycqJ107XG4gICAgY29uc3QgbWF4VXBsb2FkcyA9ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm1heFVwbG9hZHMpIHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB0aGlzLnVwbG9hZCA9IG5ldyBNREJVcGxvYWRlclNlcnZpY2UoY29uY3VycmVuY3ksIGFsbG93ZWRDb250ZW50VHlwZXMsIG1heFVwbG9hZHMpO1xuXG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy51cGxvYWQuc2VydmljZUV2ZW50cy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoZXZlbnQ6IFVwbG9hZE91dHB1dCkgPT4ge1xuICAgICAgdGhpcy51cGxvYWRPdXRwdXQuZW1pdChldmVudCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy51cGxvYWRJbnB1dCBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgICAgdGhpcy51cGxvYWQuaW5pdElucHV0RXZlbnRzKHRoaXMudXBsb2FkSW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuc3RvcEV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLnN0b3BFdmVudCwgZmFsc2UpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLnN0b3BFdmVudCwgZmFsc2UpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLnN0b3BFdmVudCwgZmFsc2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cGxvYWRJbnB1dCkge1xuICAgICAgdGhpcy51cGxvYWRJbnB1dC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgc3RvcEV2ZW50ID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyb3AoZTogYW55KSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBldmVudDogVXBsb2FkT3V0cHV0ID0geyB0eXBlOiAnZHJvcCcgfTtcbiAgICB0aGlzLnVwbG9hZE91dHB1dC5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLnVwbG9hZC5oYW5kbGVGaWxlcyhlLmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkRyYWdPdmVyKGU6IEV2ZW50KSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnQ6IFVwbG9hZE91dHB1dCA9IHsgdHlwZTogJ2RyYWdPdmVyJyB9O1xuICAgIHRoaXMudXBsb2FkT3V0cHV0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ0xlYXZlKGU6IEV2ZW50KSB7XG4gICAgaWYgKCFlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnQ6IFVwbG9hZE91dHB1dCA9IHsgdHlwZTogJ2RyYWdPdXQnIH07XG4gICAgdGhpcy51cGxvYWRPdXRwdXQuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==