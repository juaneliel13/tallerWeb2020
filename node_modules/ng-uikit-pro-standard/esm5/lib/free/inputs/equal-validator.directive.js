/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidatorDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        // self value (e.g. retype password)
        /** @type {?} */
        var v = c.value;
        // control value (e.g. password)
        /** @type {?} */
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false,
            });
        }
        // return null;
        return null;
    };
    EqualValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return EqualValidatorDirective; })), multi: true },
                    ],
                },] }
    ];
    /** @nocollapse */
    EqualValidatorDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
        { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
    ]; };
    return EqualValidatorDirective;
}());
export { EqualValidatorDirective };
if (false) {
    /** @type {?} */
    EqualValidatorDirective.prototype.validateEqual;
    /** @type {?} */
    EqualValidatorDirective.prototype.reverse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2lucHV0cy9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUE4QixhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRTtJQVFFLGlDQUNxQyxhQUFxQixFQUMzQixPQUFlO1FBRFQsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUMzQyxDQUFDO0lBRUosc0JBQVksOENBQVM7Ozs7O1FBQXJCO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTs7Ozs7SUFFRCwwQ0FBUTs7OztJQUFSLFVBQVMsQ0FBa0I7OztZQUVuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7OztZQUdYLENBQUMsR0FBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRTdDLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUN0QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ2pDO1FBRUQsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkI7U0FDRjtRQUVELDhCQUE4QjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3hDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ1YsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxlQUFlO1FBQ2YsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFDTiw0RkFBNEY7b0JBQzlGLFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsdUJBQXVCLEVBQXZCLENBQXVCLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUNoRztpQkFDRjs7Ozs2Q0FHSSxTQUFTLFNBQUMsZUFBZTs2Q0FDekIsU0FBUyxTQUFDLFNBQVM7O0lBd0N4Qiw4QkFBQztDQUFBLEFBbERELElBa0RDO1NBM0NZLHVCQUF1Qjs7O0lBRWhDLGdEQUF3RDs7SUFDeEQsMENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XG4gICAgJ1ttZGItdmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbdmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xdLFt2YWxpZGF0ZUVxdWFsXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXF1YWxWYWxpZGF0b3JEaXJlY3RpdmUpLCBtdWx0aTogdHJ1ZSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFcXVhbFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBBdHRyaWJ1dGUoJ3ZhbGlkYXRlRXF1YWwnKSBwdWJsaWMgdmFsaWRhdGVFcXVhbDogc3RyaW5nLFxuICAgIEBBdHRyaWJ1dGUoJ3JldmVyc2UnKSBwdWJsaWMgcmV2ZXJzZTogc3RyaW5nXG4gICkge31cblxuICBwcml2YXRlIGdldCBpc1JldmVyc2UoKSB7XG4gICAgaWYgKCF0aGlzLnJldmVyc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwge1xuICAgIC8vIHNlbGYgdmFsdWUgKGUuZy4gcmV0eXBlIHBhc3N3b3JkKVxuICAgIGNvbnN0IHYgPSBjLnZhbHVlO1xuXG4gICAgLy8gY29udHJvbCB2YWx1ZSAoZS5nLiBwYXNzd29yZClcbiAgICBjb25zdCBlOiBhbnkgPSBjLnJvb3QuZ2V0KHRoaXMudmFsaWRhdGVFcXVhbCk7XG5cbiAgICAvLyB2YWx1ZSBub3QgZXF1YWxcbiAgICBpZiAoZSAmJiB2ICE9PSBlLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyB2YWxpZGF0ZUVxdWFsOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIC8vIHZhbHVlIGVxdWFsIGFuZCByZXZlcnNlXG4gICAgaWYgKGUgJiYgdiA9PT0gZS52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuICAgICAgZGVsZXRlIGUuZXJyb3JzWyd2YWxpZGF0ZUVxdWFsJ107XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKGUuZXJyb3JzKS5sZW5ndGgpIHtcbiAgICAgICAgZS5zZXRFcnJvcnMobnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXG4gICAgaWYgKGUgJiYgdiAhPT0gZS52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuICAgICAgZS5zZXRFcnJvcnMoe1xuICAgICAgICB2YWxpZGF0ZUVxdWFsOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBudWxsO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=