import { OnInit, ChangeDetectorRef } from '@angular/core';
export declare class ScrollSpyLinkDirective implements OnInit {
    private cdRef;
    private document;
    scrollIntoView: boolean;
    private _scrollIntoView;
    section: HTMLElement;
    private _section;
    private _id;
    constructor(cdRef: ChangeDetectorRef, document: any);
    id: string;
    active: boolean;
    onClick(): void;
    detectChanges(): void;
    assignSectionToId(): void;
    ngOnInit(): void;
}
