import { Component, OnInit } from '@angular/core';
import { faUser, faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { SIDENAV_MENUS as menuAlls } from './services/sidenav-menu.data';
import { SidenavMenuModel } from './models/sidenav-menu';
import { searchTreeNodePrev } from './services/helper';
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

  iconName: IconName = 'coffee';
  iconPrefix: IconPrefix = 'fal'

  prevMenu!: SidenavMenuModel;
  menuItems: SidenavMenuModel[] = JSON.parse(JSON.stringify(menuAlls.filter(item => item.level === 0)));

  // check router current url

  constructor() { }

  ngOnInit(): void {
  }

  onBack() {
    if (!this.prevMenu) {
      return;
    }
    if (this.prevMenu.level === 0) {
      this.menuItems = JSON.parse(JSON.stringify(menuAlls.filter(item => item.parentId === this.prevMenu.parentId)));
      this.prevMenu = JSON.parse(JSON.stringify(null));
    } else {
      // console.log('this.prevMenu', this.prevMenu);
      const nodeSearch = searchTreeNodePrev(menuAlls, this.prevMenu.parentId);
      // console.log(nodeSearch);
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

  private searchTreeNodePrev(trees: SidenavMenuModel[], nodeId?: number): SidenavMenuModel | null {
    let stack = JSON.parse(JSON.stringify(trees));
    while (stack.length > 0) {
      let node = stack.pop();
      if (node && node.id == nodeId) {
        // Found it!
        return node;
      } else if (node && node.childs && node.childs.length > 0) {
        for (let i = 0; i < node.childs.length; i++) {
          stack.push(node.childs[i]);
        }
      }
    }
    // Didn't find it. Return null.
    return null;
  }


}
