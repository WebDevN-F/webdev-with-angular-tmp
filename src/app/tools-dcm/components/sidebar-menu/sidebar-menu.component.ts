import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidenavMenuModel } from '../../models/sidenav-menu';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(400)
      ]),
      transition('* => void', [
        animate(400, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SidebarMenuComponent implements OnInit {
  @Input() currentMenu!: string;
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

