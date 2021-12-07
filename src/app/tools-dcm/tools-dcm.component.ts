import { Component, OnInit } from '@angular/core';
import { faUser, faSearch, faArrowLeft, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { SIDENAV_MENUS as menuAlls } from './services/sidenav-menu.data';
import { SidenavMenuModel } from './models/sidenav-menu';
import { searchTreeNodePrev } from './services/helper';
import { Router } from '@angular/router';
import { TitleService } from './services/title.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tools-dcm',
  templateUrl: './tools-dcm.component.html',
  styleUrls: ['./tools-dcm.component.scss']
})
export class ToolsDcmComponent implements OnInit {
  opened: boolean = true;

  faSearch = faSearch;
  faUser = faUser;
  faArrowLeft = faArrowLeft;
  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;

  prevMenu!: SidenavMenuModel;
  menuItems: SidenavMenuModel[] = [];

  pageTitle!: string;
  urlChange!: string;

  constructor(
    private router: Router,
    private titleService: TitleService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.titleService.getTitlePage().subscribe(title => this.pageTitle = title);
    this.urlChange = this.location.path();
    this.menuItems = JSON.parse(JSON.stringify(menuAlls.filter(item => item.level === 0)))
  }

  onBack() {
    if (!this.prevMenu) {
      return;
    }
    if (this.prevMenu.level === 0) {
      this.menuItems = JSON.parse(JSON.stringify(menuAlls.filter(item => item.parentId === this.prevMenu.parentId)));
      this.prevMenu = JSON.parse(JSON.stringify(null));
    } else {
      const nodeSearch = searchTreeNodePrev(menuAlls, this.prevMenu.parentId);
      if (nodeSearch) {
        this.prevMenu = nodeSearch;
      }
      this.menuItems = JSON.parse(JSON.stringify(this.prevMenu.childs));
    }
  }

  onMenuClick(e: {curentValue: SidenavMenuModel}) {
    this.prevMenu = e.curentValue;
    this.menuItems = JSON.parse(JSON.stringify(e.curentValue.childs));
  }

  private redirectTo() {
    if (this.prevMenu['url']) {
      this.router.navigate([this.prevMenu.url]);
    }
  }

}
