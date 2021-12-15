import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appViewContainer]' })
export class ContainerXDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
