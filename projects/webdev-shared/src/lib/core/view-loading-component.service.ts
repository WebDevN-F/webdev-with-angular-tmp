import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';

@Injectable({ providedIn: 'any' })
export class ContainerXComponentService {
  constructor() { }

  async loadingComponent<TComponent>(vcr: ViewContainerRef, component: Type<TComponent>) {
    vcr.clear();
    return vcr.createComponent(component);
  }

  clearComponent(vcr: ViewContainerRef) {
    vcr.clear();
  }
}
