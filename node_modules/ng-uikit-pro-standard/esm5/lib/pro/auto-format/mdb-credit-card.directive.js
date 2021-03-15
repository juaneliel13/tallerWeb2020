/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input, HostBinding } from '@angular/core';
/**
 * @record
 */
export function CreditCard() { }
if (false) {
    /** @type {?} */
    CreditCard.prototype.name;
    /** @type {?} */
    CreditCard.prototype.fullName;
    /** @type {?} */
    CreditCard.prototype.re;
    /** @type {?} */
    CreditCard.prototype.pattern;
    /** @type {?} */
    CreditCard.prototype.maxLength;
    /** @type {?} */
    CreditCard.prototype.cvvLength;
}
var MdbCreditCardDirective = /** @class */ (function () {
    function MdbCreditCardDirective() {
        this.standardPattern = /(\d{1,4})/g;
        this.defaultCard = {
            name: '',
            fullName: '',
            re: /\d{0,16}/,
            pattern: this.standardPattern,
            maxLength: 19,
            cvvLength: 3,
        };
        this.cards = [
            {
                name: 'visa',
                fullName: 'Visa',
                re: /^4\d{0,15}/,
                pattern: this.standardPattern,
                maxLength: 16,
                cvvLength: 3,
            },
            {
                name: 'mastercard',
                fullName: 'Mastercard',
                re: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 16,
                cvvLength: 3,
            },
            {
                name: 'amex',
                fullName: 'American Express',
                re: /^3[47]\d{0,13}/,
                pattern: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                maxLength: 15,
                cvvLength: 4,
            },
            {
                name: 'jcb',
                fullName: 'JCB',
                re: /^(?:35\d{0,2})\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 16,
                cvvLength: 3,
            },
            {
                name: 'discover',
                fullName: 'Discover',
                re: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
                pattern: this.standardPattern,
                maxLength: 16,
                cvvLength: 3,
            },
            {
                name: 'diners-club',
                fullName: 'Diners Club',
                re: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
                pattern: this.standardPattern,
                maxLength: 14,
                cvvLength: 3,
            },
        ];
        this._separator = ' ';
    }
    Object.defineProperty(MdbCreditCardDirective.prototype, "additionalCards", {
        get: /**
         * @return {?}
         */
        function () {
            return this._additionalCards;
        },
        set: /**
         * @param {?} cards
         * @return {?}
         */
        function (cards) {
            this._additionalCards = cards;
            this.addCards(cards);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCreditCardDirective.prototype, "separator", {
        get: /**
         * @return {?}
         */
        function () {
            return this._separator;
        },
        set: /**
         * @param {?} separator
         * @return {?}
         */
        function (separator) {
            this._separator = separator;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    MdbCreditCardDirective.prototype.onInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.formatInput(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    MdbCreditCardDirective.prototype.formatInput = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var input = event.target.value;
        /** @type {?} */
        var formattedInput = this.getFormattedInput(input);
        event.target.value = formattedInput;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.getFormattedInput = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = this.removeNonDigits(value);
        /** @type {?} */
        var card = this.findCardByNumber(value);
        this.updateCurrentCardNames(card.name, card.fullName);
        /** @type {?} */
        var cardNumMaxLength;
        if (this.hasStandardPattern(card)) {
            /** @type {?} */
            var matches = value.match(card.pattern);
            if (matches === null) {
                return value;
            }
            cardNumMaxLength = card.maxLength + matches.length - 1;
            this.maxLength = cardNumMaxLength.toString();
            return matches.join(this.separator);
        }
        else {
            /** @type {?} */
            var results = card.pattern.exec(value);
            if (results === null) {
                return value;
            }
            results.shift();
            cardNumMaxLength = card.maxLength + results.length - 1;
            this.maxLength = cardNumMaxLength.toString();
            return results.filter(this.isMatch).join(this.separator);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.removeNonDigits = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.replace(/\D/g, '');
    };
    /**
     * @private
     * @param {?} card
     * @return {?}
     */
    MdbCreditCardDirective.prototype.hasStandardPattern = /**
     * @private
     * @param {?} card
     * @return {?}
     */
    function (card) {
        return card.pattern.toString() === this.standardPattern.toString();
    };
    /**
     * @private
     * @param {?} match
     * @return {?}
     */
    MdbCreditCardDirective.prototype.isMatch = /**
     * @private
     * @param {?} match
     * @return {?}
     */
    function (match) {
        return match !== undefined;
    };
    /**
     * @private
     * @param {?} name
     * @param {?} fullName
     * @return {?}
     */
    MdbCreditCardDirective.prototype.updateCurrentCardNames = /**
     * @private
     * @param {?} name
     * @param {?} fullName
     * @return {?}
     */
    function (name, fullName) {
        this.cardName = name;
        this.cardFullName = fullName;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MdbCreditCardDirective.prototype.findCardByNumber = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var cardType = this.cards.find((/**
         * @param {?} card
         * @return {?}
         */
        function (card) {
            return card.re.test(value);
        }));
        if (!cardType) {
            return this.defaultCard;
        }
        return cardType;
    };
    /**
     * @param {?} newCards
     * @return {?}
     */
    MdbCreditCardDirective.prototype.addCards = /**
     * @param {?} newCards
     * @return {?}
     */
    function (newCards) {
        var _this = this;
        newCards.forEach((/**
         * @param {?} card
         * @return {?}
         */
        function (card) {
            _this.cards.push(card);
        }));
    };
    MdbCreditCardDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCreditCard]',
                    exportAs: 'mdbCreditCard',
                },] }
    ];
    /** @nocollapse */
    MdbCreditCardDirective.ctorParameters = function () { return []; };
    MdbCreditCardDirective.propDecorators = {
        additionalCards: [{ type: Input }],
        separator: [{ type: Input }],
        maxLength: [{ type: HostBinding, args: ['attr.maxLength',] }],
        onInput: [{ type: HostListener, args: ['input', ['$event'],] }]
    };
    return MdbCreditCardDirective;
}());
export { MdbCreditCardDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype.standardPattern;
    /** @type {?} */
    MdbCreditCardDirective.prototype.cardName;
    /** @type {?} */
    MdbCreditCardDirective.prototype.cardFullName;
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype.defaultCard;
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype.cards;
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype._additionalCards;
    /**
     * @type {?}
     * @private
     */
    MdbCreditCardDirective.prototype._separator;
    /** @type {?} */
    MdbCreditCardDirective.prototype.maxLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNyZWRpdC1jYXJkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1mb3JtYXQvbWRiLWNyZWRpdC1jYXJkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUU1RSxnQ0FPQzs7O0lBTkMsMEJBQWE7O0lBQ2IsOEJBQWlCOztJQUNqQix3QkFBVzs7SUFDWCw2QkFBZ0I7O0lBQ2hCLCtCQUFrQjs7SUFDbEIsK0JBQWtCOztBQUdwQjtJQXdGRTtRQW5GUSxvQkFBZSxHQUFHLFlBQVksQ0FBQztRQUkvQixnQkFBVyxHQUFlO1lBQ2hDLElBQUksRUFBRSxFQUFFO1lBQ1IsUUFBUSxFQUFFLEVBQUU7WUFDWixFQUFFLEVBQUUsVUFBVTtZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtZQUM3QixTQUFTLEVBQUUsRUFBRTtZQUNiLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQztRQUVNLFVBQUssR0FBaUI7WUFDNUI7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQzdCLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEVBQUUsRUFBRSx1REFBdUQ7Z0JBQzNELE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDN0IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFFB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LElBQUk7WUFDbkMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTSx5Q0FBUTs7OztJQUFmLFVBQWdCLFFBQXNCO1FBQXRDLGlCQUlDO1FBSEMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUk7WUFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7Ozs7a0NBa0VFLEtBQUs7NEJBVUwsS0FBSzs0QkFXTCxXQUFXLFNBQUMsZ0JBQWdCOzBCQUU1QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQTRFbkMsNkJBQUM7Q0FBQSxBQXhLRCxJQXdLQztTQXBLWSxzQkFBc0I7Ozs7OztJQUNqQyxpREFBdUM7O0lBQ3ZDLDBDQUFpQjs7SUFDakIsOENBQXFCOzs7OztJQUVyQiw2Q0FPRTs7Ozs7SUFFRix1Q0FpREU7Ozs7O0lBVUYsa0RBQXVDOzs7OztJQVN2Qyw0Q0FBeUI7O0lBSXpCLDJDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDcmVkaXRDYXJkIHtcbiAgbmFtZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICByZTogUmVnRXhwO1xuICBwYXR0ZXJuOiBSZWdFeHA7XG4gIG1heExlbmd0aDogbnVtYmVyO1xuICBjdnZMZW5ndGg6IG51bWJlcjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkNyZWRpdENhcmRdJyxcbiAgZXhwb3J0QXM6ICdtZGJDcmVkaXRDYXJkJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiQ3JlZGl0Q2FyZERpcmVjdGl2ZSB7XG4gIHByaXZhdGUgc3RhbmRhcmRQYXR0ZXJuID0gLyhcXGR7MSw0fSkvZztcbiAgY2FyZE5hbWU6IHN0cmluZztcbiAgY2FyZEZ1bGxOYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0Q2FyZDogQ3JlZGl0Q2FyZCA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBmdWxsTmFtZTogJycsXG4gICAgcmU6IC9cXGR7MCwxNn0vLFxuICAgIHBhdHRlcm46IHRoaXMuc3RhbmRhcmRQYXR0ZXJuLFxuICAgIG1heExlbmd0aDogMTksXG4gICAgY3Z2TGVuZ3RoOiAzLFxuICB9O1xuXG4gIHByaXZhdGUgY2FyZHM6IENyZWRpdENhcmRbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAndmlzYScsXG4gICAgICBmdWxsTmFtZTogJ1Zpc2EnLFxuICAgICAgcmU6IC9eNFxcZHswLDE1fS8sXG4gICAgICBwYXR0ZXJuOiB0aGlzLnN0YW5kYXJkUGF0dGVybixcbiAgICAgIG1heExlbmd0aDogMTYsXG4gICAgICBjdnZMZW5ndGg6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnbWFzdGVyY2FyZCcsXG4gICAgICBmdWxsTmFtZTogJ01hc3RlcmNhcmQnLFxuICAgICAgcmU6IC9eKDVbMS01XVxcZHswLDJ9fDIyWzItOV1cXGR7MCwxfXwyWzMtN11cXGR7MCwyfSlcXGR7MCwxMn0vLFxuICAgICAgcGF0dGVybjogdGhpcy5zdGFuZGFyZFBhdHRlcm4sXG4gICAgICBtYXhMZW5ndGg6IDE2LFxuICAgICAgY3Z2TGVuZ3RoOiAzLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2FtZXgnLFxuICAgICAgZnVsbE5hbWU6ICdBbWVyaWNhbiBFeHByZXNzJyxcbiAgICAgIHJlOiAvXjNbNDddXFxkezAsMTN9LyxcbiAgICAgIHBhdHRlcm46IC8oXFxkezEsNH0pKFxcZHsxLDZ9KT8oXFxkezEsNX0pPy8sXG4gICAgICBtYXhMZW5ndGg6IDE1LFxuICAgICAgY3Z2TGVuZ3RoOiA0LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2pjYicsXG4gICAgICBmdWxsTmFtZTogJ0pDQicsXG4gICAgICByZTogL14oPzozNVxcZHswLDJ9KVxcZHswLDEyfS8sXG4gICAgICBwYXR0ZXJuOiB0aGlzLnN0YW5kYXJkUGF0dGVybixcbiAgICAgIG1heExlbmd0aDogMTYsXG4gICAgICBjdnZMZW5ndGg6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGlzY292ZXInLFxuICAgICAgZnVsbE5hbWU6ICdEaXNjb3ZlcicsXG4gICAgICByZTogL14oPzo2MDExfDY1XFxkezAsMn18NjRbNC05XVxcZD8pXFxkezAsMTJ9LyxcbiAgICAgIHBhdHRlcm46IHRoaXMuc3RhbmRhcmRQYXR0ZXJuLFxuICAgICAgbWF4TGVuZ3RoOiAxNixcbiAgICAgIGN2dkxlbmd0aDogMyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdkaW5lcnMtY2x1YicsXG4gICAgICBmdWxsTmFtZTogJ0RpbmVycyBDbHViJyxcbiAgICAgIHJlOiAvXjMoPzowKFswLTVdfDkpfFs2ODldXFxkPylcXGR7MCwxMX0vLFxuICAgICAgcGF0dGVybjogdGhpcy5zdGFuZGFyZFBhdHRlcm4sXG4gICAgICBtYXhMZW5ndGg6IDE0LFxuICAgICAgY3Z2TGVuZ3RoOiAzLFxuICAgIH0sXG4gIF07XG5cbiAgQElucHV0KClcbiAgZ2V0IGFkZGl0aW9uYWxDYXJkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbENhcmRzO1xuICB9XG4gIHNldCBhZGRpdGlvbmFsQ2FyZHMoY2FyZHM6IENyZWRpdENhcmRbXSkge1xuICAgIHRoaXMuX2FkZGl0aW9uYWxDYXJkcyA9IGNhcmRzO1xuICAgIHRoaXMuYWRkQ2FyZHMoY2FyZHMpO1xuICB9XG4gIHByaXZhdGUgX2FkZGl0aW9uYWxDYXJkczogQ3JlZGl0Q2FyZFtdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzZXBhcmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcjtcbiAgfVxuICBzZXQgc2VwYXJhdG9yKHNlcGFyYXRvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VwYXJhdG9yID0gc2VwYXJhdG9yO1xuICB9XG4gIHByaXZhdGUgX3NlcGFyYXRvciA9ICcgJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1heExlbmd0aCcpIG1heExlbmd0aDogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgb25JbnB1dChldmVudDogYW55KSB7XG4gICAgdGhpcy5mb3JtYXRJbnB1dChldmVudCk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdElucHV0KGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBmb3JtYXR0ZWRJbnB1dCA9IHRoaXMuZ2V0Rm9ybWF0dGVkSW5wdXQoaW5wdXQpO1xuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGZvcm1hdHRlZElucHV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtYXR0ZWRJbnB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdmFsdWUgPSB0aGlzLnJlbW92ZU5vbkRpZ2l0cyh2YWx1ZSk7XG4gICAgY29uc3QgY2FyZCA9IHRoaXMuZmluZENhcmRCeU51bWJlcih2YWx1ZSk7XG5cbiAgICB0aGlzLnVwZGF0ZUN1cnJlbnRDYXJkTmFtZXMoY2FyZC5uYW1lLCBjYXJkLmZ1bGxOYW1lKTtcblxuICAgIGxldCBjYXJkTnVtTWF4TGVuZ3RoOiBudW1iZXI7XG5cbiAgICBpZiAodGhpcy5oYXNTdGFuZGFyZFBhdHRlcm4oY2FyZCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXM6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdmFsdWUubWF0Y2goY2FyZC5wYXR0ZXJuKTtcblxuICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBjYXJkTnVtTWF4TGVuZ3RoID0gY2FyZC5tYXhMZW5ndGggKyBtYXRjaGVzLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IGNhcmROdW1NYXhMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBtYXRjaGVzLmpvaW4odGhpcy5zZXBhcmF0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHRzOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gY2FyZC5wYXR0ZXJuLmV4ZWModmFsdWUpO1xuXG4gICAgICBpZiAocmVzdWx0cyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnNoaWZ0KCk7XG4gICAgICBjYXJkTnVtTWF4TGVuZ3RoID0gY2FyZC5tYXhMZW5ndGggKyByZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICB0aGlzLm1heExlbmd0aCA9IGNhcmROdW1NYXhMZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcih0aGlzLmlzTWF0Y2gpLmpvaW4odGhpcy5zZXBhcmF0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTm9uRGlnaXRzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzU3RhbmRhcmRQYXR0ZXJuKGNhcmQ6IENyZWRpdENhcmQpIHtcbiAgICByZXR1cm4gY2FyZC5wYXR0ZXJuLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RhbmRhcmRQYXR0ZXJuLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIGlzTWF0Y2gobWF0Y2g6IHN0cmluZykge1xuICAgIHJldHVybiBtYXRjaCAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDdXJyZW50Q2FyZE5hbWVzKG5hbWU6IHN0cmluZywgZnVsbE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuY2FyZE5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY2FyZEZ1bGxOYW1lID0gZnVsbE5hbWU7XG4gIH1cblxuICBwcml2YXRlIGZpbmRDYXJkQnlOdW1iZXIodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGNhcmRUeXBlID0gdGhpcy5jYXJkcy5maW5kKGNhcmQgPT4ge1xuICAgICAgcmV0dXJuIGNhcmQucmUudGVzdCh2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNhcmRUeXBlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q2FyZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FyZFR5cGU7XG4gIH1cblxuICBwdWJsaWMgYWRkQ2FyZHMobmV3Q2FyZHM6IENyZWRpdENhcmRbXSkge1xuICAgIG5ld0NhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==