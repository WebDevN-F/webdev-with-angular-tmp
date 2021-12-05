import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidenavMenuModel } from '../../models/sidenav-menu';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  @Input() menuItems: SidenavMenuModel[] = [];
  @Output() menuClick: EventEmitter<{curentValue: SidenavMenuModel;}> = new EventEmitter<{curentValue: SidenavMenuModel;}>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu(menu: SidenavMenuModel) {
    if (!menu.childs) { return; }
    this.menuClick.emit({curentValue: menu});
  }

}

