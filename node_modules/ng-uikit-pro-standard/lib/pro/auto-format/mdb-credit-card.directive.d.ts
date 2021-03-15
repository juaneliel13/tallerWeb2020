export interface CreditCard {
    name: string;
    fullName: string;
    re: RegExp;
    pattern: RegExp;
    maxLength: number;
    cvvLength: number;
}
export declare class MdbCreditCardDirective {
    private standardPattern;
    cardName: string;
    cardFullName: string;
    private defaultCard;
    private cards;
    additionalCards: CreditCard[];
    private _additionalCards;
    separator: string;
    private _separator;
    constructor();
    maxLength: string;
    onInput(event: any): void;
    private formatInput;
    private getFormattedInput;
    private removeNonDigits;
    private hasStandardPattern;
    private isMatch;
    private updateCurrentCardNames;
    private findCardByNumber;
    addCards(newCards: CreditCard[]): void;
}
