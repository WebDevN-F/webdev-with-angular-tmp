import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TitleService } from './title.service';

const LOCAL_CONTACT = 'webdev.myContact';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbInitializedGuardGuard implements CanActivate, CanActivateChild {
  constructor(
    private titleApi: Title,
    private titleService: TitleService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const { title, breadcrumb } = route.data;

    this.setTitle(title, breadcrumb);

    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const { title, breadcrumb } = childRoute.data;
    this.setTitle(title, breadcrumb);

    return true;
  }

  private setTitle(title: string, breadcrumb: string) {
    if (title) {
      this.titleApi.setTitle(`${title} - ${breadcrumb}`);
    } else {
      this.titleApi.setTitle(breadcrumb);
    }
    this.titleService.setTitlePage(title);
  }

}
