/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
export class MdbCardComponent {
    /**
     * @param {?} _el
     * @param {?} _r
     */
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @param {?} narrower
     * @return {?}
     */
    set narrower(narrower) {
        if (narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        else if (!narrower && this._el.nativeElement.classList.contains('narrower')) {
            this._r.removeClass(this._el.nativeElement, 'narrower');
        }
    }
    /**
     * @param {?} reverse
     * @return {?}
     */
    set reverse(reverse) {
        if (reverse) {
            this._r.addClass(this._el.nativeElement, 'reverse');
        }
        else if (!reverse && this._el.nativeElement.classList.contains('reserse')) {
            this._r.removeClass(this._el.nativeElement, 'reverse');
        }
    }
    /**
     * @param {?} dark
     * @return {?}
     */
    set dark(dark) {
        if (dark) {
            this._r.addClass(this._el.nativeElement, 'card-dark');
        }
        else if (!dark && this._el.nativeElement.classList.contains('card-dark')) {
            this._r.removeClass(this._el.nativeElement, 'card-dark');
        }
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set bgColor(color) {
        if (color) {
            this._r.addClass(this._el.nativeElement, color);
        }
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set borderColor(color) {
        if (color) {
            this._r.addClass(this._el.nativeElement, color);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card');
        if (this.cascade) {
            this._r.addClass(this._el.nativeElement, 'card-cascade');
        }
        if (this.wider) {
            this._r.addClass(this._el.nativeElement, 'wider');
        }
        if (this.narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        if (this.class) {
            this.class.split(' ').forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                this._r.addClass(this._el.nativeElement, element);
            }));
        }
    }
}
MdbCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".card{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border:0;font-weight:400}.card[class*=border]{border:1px solid #9e9e9e;box-shadow:none}.card .card-body h1,.card .card-body h2,.card .card-body h3,.card .card-body h4,.card .card-body h5,.card .card-body h6{font-weight:400}.card .card-body .card-title a,.card .card-body .card-title a:hover{transition:.2s ease-in-out}.card .card-body .card-text{color:#747373;font-size:.9rem;font-weight:400}.card .md-form label{font-weight:300}.card-text:last-child{margin-bottom:1rem!important}mdb-card-img img.img-fluid{width:100%}.card.card-image{background-size:cover;background-position:center;width:100%}.card.card-image [class*=rgba-]{border-radius:.25rem}.card.card-cascade .view.view-cascade{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);border-radius:.25rem}.card.card-cascade .view.view-cascade.gradient-card-header{color:#fff;padding:1.6rem 1rem;text-align:center}.card.card-cascade .view.view-cascade.gradient-card-header .card-header-title{font-weight:500}.card.card-cascade .view.view-cascade.gradient-card-header .btn-floating{background-color:rgba(255,255,255,.2)}.card.card-cascade.wider{box-shadow:none;background-color:transparent}.card.card-cascade.wider .view.view-cascade{z-index:2}.card.card-cascade.wider .card-body.card-body-cascade{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);margin-left:4%;margin-right:4%;background:#fff;z-index:1;border-radius:0 0 .25rem .25rem}.card.card-cascade.wider .card-body.card-body-cascade .card-footer{margin-left:-1.25rem;margin-right:-1.25rem}.card.card-cascade.wider.reverse .card-body.card-body-cascade{z-index:3;margin-top:-1rem;border-radius:.25rem;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.card.card-cascade.narrower{margin-top:1.25rem}.card.card-cascade.narrower .view.view-cascade{margin-left:4%;margin-right:4%;margin-top:-1.25rem}.card.card-cascade.panel-cascade .view{text-align:center;color:#fff}.card.card-cascade.panel-cascade .list-group .list-group-item{margin-bottom:0;border:0;border-bottom:1px solid #eee;color:#495057}.card.card-cascade.panel-cascade .list-group .list-group-item:hover{background-color:#eee}.card .btn-action{margin-top:-1.44rem;margin-bottom:-1.44rem}.card .activator{position:absolute;right:0;font-size:1.2rem}.card .card-reveal{position:absolute;width:100%;overflow-y:auto;top:100%;height:100%;z-index:1;display:none}.card .card-reveal .content{position:relative}.card.ovf-hidden{overflow:hidden}.card .card-share{position:relative}.card .card-share .social-reveal{position:absolute;top:-1.44rem;right:1.88rem;visibility:hidden;width:auto;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transform:translateX(0);transform:translateX(0);transition:transform .35s;transition:transform .35s,-webkit-transform .35s}.card .card-share .social-reveal-active{z-index:11;visibility:visible;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transform:translateX(-48px);transform:translateX(-48px);transition:transform .35s;transition:transform .35s,-webkit-transform .35s}.card .card-reveal .card-title,.card-wrapper .card-rotating .card-title{cursor:pointer}.card .card-reveal .card-title i,.card-wrapper .card-rotating .card-title i{color:#9e9e9e;position:absolute;right:.63rem}.card-wrapper{-webkit-perspective:800px;perspective:800px;position:relative;margin:0;width:100%}.card-wrapper .card-up{height:200px;overflow:hidden}.card-wrapper .card-up img{vertical-align:middle}.card-wrapper .avatar{display:block;margin-top:-60px;overflow:hidden;width:120px}.card-wrapper .avatar img{border:5px solid #fff;background:#fff;width:100%}.card-wrapper .card-rotating{height:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;transition:.5s}.card-wrapper .card-rotating .face{width:100%;position:absolute;background:#fff;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:2}.card-wrapper .card-rotating.flipped{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card-wrapper .card-rotating .front{z-index:1}.card-wrapper .card-rotating .back,.card-wrapper .card-rotating .front{transition:1s}.testimonial-card .card-up{overflow:hidden;height:120px;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.testimonial-card .avatar{border-radius:50%;width:120px;margin-top:-60px;overflow:hidden;border:5px solid #fff}.testimonial-card .avatar img{width:100%}.testimonial-card .card-body{text-align:center}"]
            }] }
];
/** @nocollapse */
MdbCardComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbCardComponent.propDecorators = {
    class: [{ type: Input }],
    cascade: [{ type: Input }],
    wider: [{ type: Input }],
    imageBackground: [{ type: Input }],
    card: [{ type: ViewChild, args: ['card', { static: true },] }],
    narrower: [{ type: Input }],
    reverse: [{ type: Input }],
    dark: [{ type: Input }],
    bgColor: [{ type: Input }],
    borderColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbCardComponent.prototype.class;
    /** @type {?} */
    MdbCardComponent.prototype.cascade;
    /** @type {?} */
    MdbCardComponent.prototype.wider;
    /** @type {?} */
    MdbCardComponent.prototype.imageBackground;
    /** @type {?} */
    MdbCardComponent.prototype.card;
    /**
     * @type {?}
     * @private
     */
    MdbCardComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbCardComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2FyZHMvbWRiLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBU3ZCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBNEMzQixZQUFvQixHQUFlLEVBQVUsRUFBYTtRQUF0QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUFHLENBQUM7Ozs7O0lBcEM5RCxJQUFhLFFBQVEsQ0FBQyxRQUFpQjtRQUNyQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO2FBQU0sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzdFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxJQUFhLE9BQU8sQ0FBQyxPQUFnQjtRQUNuQyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3JEO2FBQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEs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c0Q7Ozs7O0lBc0MxQywrQkFBdUI7Ozs7O0lBQUUsOEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRiLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkcy1tb2R1bGUuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTWRiQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhc2NhZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdpZGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBpbWFnZUJhY2tncm91bmQ6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdjYXJkJywgeyBzdGF0aWM6IHRydWUgfSkgY2FyZDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBzZXQgbmFycm93ZXIobmFycm93ZXI6IGJvb2xlYW4pIHtcbiAgICBpZiAobmFycm93ZXIpIHtcbiAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ25hcnJvd2VyJyk7XG4gICAgfSBlbHNlIGlmICghbmFycm93ZXIgJiYgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hcnJvd2VyJykpIHtcbiAgICAgIHRoaXMuX3IucmVtb3ZlQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ25hcnJvd2VyJyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgc2V0IHJldmVyc2UocmV2ZXJzZTogYm9vbGVhbikge1xuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdyZXZlcnNlJyk7XG4gICAgfSBlbHNlIGlmICghcmV2ZXJzZSAmJiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncmVzZXJzZScpKSB7XG4gICAgICB0aGlzLl9yLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdyZXZlcnNlJyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgc2V0IGRhcmsoZGFyazogYm9vbGVhbikge1xuICAgIGlmIChkYXJrKSB7XG4gICAgICB0aGlzLl9yLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdjYXJkLWRhcmsnKTtcbiAgICB9IGVsc2UgaWYgKCFkYXJrICYmIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLWRhcmsnKSkge1xuICAgICAgdGhpcy5fci5yZW1vdmVDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2FyZC1kYXJrJyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgc2V0IGJnQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBjb2xvcik7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgc2V0IGJvcmRlckNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY2FyZCcpO1xuICAgIGlmICh0aGlzLmNhc2NhZGUpIHtcbiAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQtY2FzY2FkZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWRlcikge1xuICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnd2lkZXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubmFycm93ZXIpIHtcbiAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ25hcnJvd2VyJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNsYXNzKSB7XG4gICAgICB0aGlzLmNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==