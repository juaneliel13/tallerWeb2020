import { TemplateRef, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class MdbStepComponent implements OnInit {
    el: ElementRef;
    content: TemplateRef<any>;
    editable: boolean;
    name: string;
    label: string;
    stepForm: FormGroup;
    constructor(el: ElementRef);
    isDone: boolean;
    private _isDone;
    isWrong: boolean;
    private _isWrong;
    isActive: boolean;
    private _isActive;
    private _removeClasses;
    reset(): void;
    ngOnInit(): void;
}
