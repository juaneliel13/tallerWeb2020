/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
export class CardRotatingComponent {
    /**
     * @param {?} _cdRef
     */
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.rotate = false;
        this.ANIMATION_TRANSITION_TIME = 1000;
        this.animationStart = new EventEmitter();
        this.animationEnd = new EventEmitter();
    }
    /**
     * @return {?}
     */
    toggle() {
        this.rotate = !this.rotate;
        this.animationStart.emit();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.animationEnd.emit();
        }), this.ANIMATION_TRANSITION_TIME);
        this._cdRef.markForCheck();
    }
}
CardRotatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-rotating, mdb-flipping-card',
                template: "<div class=\"flip-container card-wrapper\" [ngClass]=\"{ rotate: rotate }\">\n  <div class=\"flipper card-rotating effect__click tp-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.card.promoting-card .fa{transition:.4s}.card.promoting-card .fa[class*=fa-]:hover{transition:.4s;cursor:pointer}.card.weather-card .collapse-content a.collapsed:after{content:'Expand'}.card.weather-card .collapse-content a:not(.collapsed):after{content:'Collapse'}.card.weather-card .degree:after{content:'\u00B0C';position:absolute;font-size:3rem;margin-top:.9rem;font-weight:400}.card.gradient-card{transition:.5s ease-in-out}.card.gradient-card .first-content .card-title{font-weight:500}.card.gradient-card .second-content,.card.gradient-card .third-content{display:none}.card.gradient-card .card-body{transition:.5s ease-in-out;opacity:0;visibility:hidden;overflow:hidden;height:0;padding-bottom:0;padding-top:0}.card.gradient-card .card-image,.card.gradient-card .card-image .mask{border-radius:.25rem}.card.gradient-card:focus-within{margin-top:3rem;transition:.5s ease-in-out}.card.gradient-card:focus-within .card-image{transition:.5s ease-in-out;width:7rem;height:7rem;margin-top:-2rem;margin-left:1rem;border-radius:.25rem;margin-bottom:2rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card.gradient-card:focus-within .card-image .mask{border-radius:.25rem}.card.gradient-card:focus-within .card-body{transition:.7s ease-in-out;visibility:visible;opacity:1;overflow:visible;padding-bottom:1.25rem;padding-top:1.25rem;height:auto;border-radius:.25rem}.card.gradient-card:focus-within .card-body .progress{height:.4rem}.card.gradient-card:focus-within .card-body .progress .progress-bar{height:.4rem}.card.gradient-card:focus-within .first-content{display:none}.card.gradient-card:focus-within .second-content{display:block}.card.gradient-card:focus-within .third-content{display:block;margin-top:-6rem}@media (max-device-width:1025px){.card.gradient-card:hover{margin-top:3rem;transition:.5s ease-in-out}.card.gradient-card:hover .card-image{transition:.5s ease-in-out;width:7rem;height:7rem;margin-top:-2rem;margin-left:1rem;border-radius:.25rem;margin-bottom:2rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card.gradient-card:hover .card-image .mask{border-radius:.25rem}.card.gradient-card:hover .card-body{transition:.7s ease-in-out;visibility:visible;opacity:1;overflow:visible;padding-bottom:1.25rem;padding-top:1.25rem;height:auto;border-radius:.25rem}.card.gradient-card:hover .card-body .progress,.card.gradient-card:hover .card-body .progress .progress-bar{height:.4rem}.card.gradient-card:hover .first-content{display:none}.card.gradient-card:hover .second-content{display:block}.card.gradient-card:hover .third-content{display:block;margin-top:-6rem}}.card.booking-card .rating{font-size:.7rem}.card.chart-card .classic-tabs .nav li a.active{border-bottom:2px solid;transition:width .5s,background-color .5s}.card.chart-card .classic-tabs .nav.tabs-white li a{color:#757575;font-weight:500}.card.chart-card .classic-tabs .nav.tabs-white li a.active{color:#673ab7}.card.chart-card .btn-deep-purple-accent{background-color:#b388ff;margin-top:-65px}.card.chart-card .btn-deep-purple-accent i{color:#000!important}.card.chart-card .btn-teal-accent{background-color:#1de9b6;margin-top:-65px}.card.chart-card .btn-teal-accent i{color:#000!important}.card.colorful-card .indigo-accent-text{color:#304ffe}.card.colorful-card .btn-indigo-accent{background-color:#304ffe}.card.colorful-card .yellow-darken-text{color:#fdd835}.card.colorful-card .testimonial-card .avatar{width:55px;margin-top:-30px;border:3px solid #fff}.card.colorful-card .testimonial-card .avatar img{width:50px;height:50px}.card.colorful-card .brown-darken-text{color:#3e2723}.card.colorful-card .btn-red-lighten{background-color:#ffcdd2}.card-wrapper.card-action{min-height:640px}@media (max-width:450px){.card-wrapper.card-action{min-height:790px}}.card-form .md-form input[type=email]:focus:not([readonly]),.card-form .md-form input[type=password]:focus:not([readonly]),.card-form .md-form input[type=text]:focus:not([readonly]){box-shadow:0 1px 0 0 #fff;border-bottom:1px solid #fff}.card-form .card-form-2{border-top-left-radius:21px;border-top-right-radius:21px;margin-top:-35px}.card-form .card-form-2 .form-check-input[type=checkbox].filled-in:checked+label:after,.card-form .card-form-2 label.btn input[type=checkbox].filled-in:checked+label:after{background-color:#e53935;border:2px solid #e53935}.card-form .card-form-2 .btn-outline-red-accent{border:2px solid #e53935;background-color:transparent;color:#e53935}.card-form .card-form-2 .pink-accent-text{color:#c51162}.z-depth-1-bottom{box-shadow:0 5px 5px -2px rgba(0,0,0,.16)}.card-wrapper{height:500px;position:relative;-webkit-perspective:800px;perspective:800px}.card-wrapper .face{position:absolute;width:100%;height:100%;background-color:#fff}.card-wrapper .face h4{margin-bottom:15px}.card-wrapper .face h5{margin-top:30px}.card-wrapper .face .content{text-align:left;padding:15px}.card-wrapper .face .content p{margin-bottom:30px}.card-wrapper .face .content .rotate-btn{padding:1rem;margin-right:-8px;float:right;font-size:1.2rem;color:#000}.card-wrapper .card-up{overflow:hidden;height:50%}.card-wrapper .card-up img{min-width:400px;width:100%}.card-wrapper .avatar{border-radius:50%;display:block;height:120px;margin:-65px auto 0;overflow:hidden;width:120px}.card-wrapper .avatar img{border:5px solid #fff;background:#fff;width:100%}.card-wrapper .card-rotating{text-align:center;position:absolute;width:100%;height:100%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.card-wrapper .card-rotating .content{position:relative}.card-wrapper .card-rotating .content .rotate-btn{position:absolute;right:8px;top:0}.card-wrapper .fa-repeat,.card-wrapper .fa-undo{font-size:20px;margin-top:30px}.card-wrapper .fa-undo{margin-top:30px}.card-wrapper .back,.card-wrapper .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform 1s;transition:transform 1s,-webkit-transform 1s;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.card-wrapper .fron{z-index:2;cursor:auto}.card-wrapper .back{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg);padding:1rem}.card-wrapper .back .card-title{cursor:pointer}.card-wrapper .back .card-title i{color:#9e9e9e;position:absolute;right:20px}.card-wrapper .card-rotating.effect__click.flipped .front{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card-wrapper .card-rotating.effect__click.flipped .back{-webkit-transform:rotateY(0);transform:rotateY(0)}.embed-responsive-item{background:#000}.tp-box{position:relative;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;transition:transform 1s;transition:transform 1s,-webkit-transform 1s}.tp-box .tp-box_side{width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;text-align:center}.tp-box .tp-box_back{-webkit-transform:rotateY(179.9deg);transform:rotateY(179.9deg)}.flip-container{-webkit-perspective:1000px;perspective:1000px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.flip-container .flipper{transition:1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}.flip-container .front{z-index:2;-webkit-transform:rotateY(0);transform:rotateY(0)}.flip-container .back{-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg)}.flip-container .back,.flip-container .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:absolute;top:0;left:0}.flip-container.rotate .back{-webkit-transform:rotateY(0);transform:rotateY(0);background-color:#fff}.flip-container.rotate .front{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card-overflow{overflow:hidden;height:100%;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
            }] }
];
/** @nocollapse */
CardRotatingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CardRotatingComponent.propDecorators = {
    animationStart: [{ type: Output }],
    animationEnd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CardRotatingComponent.prototype.rotate;
    /** @type {?} */
    CardRotatingComponent.prototype.ANIMATION_TRANSITION_TIME;
    /** @type {?} */
    CardRotatingComponent.prototype.animationStart;
    /** @type {?} */
    CardRotatingComponent.prototype.animationEnd;
    /**
     * @type {?}
     * @private
     */
    CardRotatingComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yb3RhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2FuaW1hdGVkLWNhcmRzL2NhcmQtcm90YXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFTdkIsTUFBTSxPQUFPLHFCQUFxQjs7OztJQU1oQyxZQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUx0QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLDhCQUF5QixHQUFHLElBQUksQ0FBQztRQUN2QixtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFcEIsQ0FBQzs7OztJQUVqRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUzQixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsR0FBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQseU1BQTJDO2dCQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBVkMsaUJBQWlCOzs7NkJBY2hCLE1BQU07MkJBQ04sTUFBTTs7OztJQUhQLHVDQUFzQjs7SUFDdEIsMERBQWlDOztJQUNqQywrQ0FBc0U7O0lBQ3RFLDZDQUFvRTs7Ozs7SUFFeEQsdUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJkLXJvdGF0aW5nLCBtZGItZmxpcHBpbmctY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1yb3RhdGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FuaW1hdGVkLWNhcmRzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkUm90YXRpbmdDb21wb25lbnQge1xuICBwdWJsaWMgcm90YXRlID0gZmFsc2U7XG4gIEFOSU1BVElPTl9UUkFOU0lUSU9OX1RJTUUgPSAxMDAwO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnJvdGF0ZSA9ICF0aGlzLnJvdGF0ZTtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXJ0LmVtaXQoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25FbmQuZW1pdCgpO1xuICAgIH0sIHRoaXMuQU5JTUFUSU9OX1RSQU5TSVRJT05fVElNRSk7XG5cbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19