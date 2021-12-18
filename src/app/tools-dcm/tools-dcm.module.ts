import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Add icons to the library for convenient access in other components
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faClock as fasClock } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight as fasChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical as fasBookMedical } from '@fortawesome/free-solid-svg-icons';
import { faSearch as fasSearch } from '@fortawesome/free-solid-svg-icons';
import { faArchive as fasArchive } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt as fasExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt as fasSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt as fasSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faHdd as fasHdd } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt as fasTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faFile as fasFaFile } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt as fasFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCog as fasUserCog } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog as fasUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faPlus as fasPlus } from '@fortawesome/free-solid-svg-icons';
import { faRedo as fasRedo } from '@fortawesome/free-solid-svg-icons';

import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { ToolsDcmRoutingModule } from './tools-dcm-routing.module';
import { ToolsDcmComponent } from './tools-dcm.component';
import { NavContainerComponent } from '../core/nav-container/nav-container.component';

const icons = [
  fasStar, fasClock, fasChevronRight, fasBookMedical, fasSearch, fasArchive, fasExchangeAlt, fasSignOutAlt, fasSignInAlt, fasHdd, fasTrashAlt, fasFaFile, fasFileAlt, fasUsersCog, fasUserCog, fasPlus, fasRedo
];

@NgModule({
  declarations: [
    ToolsDcmComponent,
    SidebarMenuComponent,
    NavContainerComponent
  ],
  imports: [
    CommonModule,
    ToolsDcmRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    FontAwesomeModule,
    LayoutModule
  ]
})
export class ToolsDcmModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(...icons);
    // use the fa- prefix on class names
    // <!-- <fa-icon [icon]="['fas', 'star']"></fa-icon> -->
    // <!-- <fa-icon [icon]="['fas', 'clock']"></fa-icon> -->
  }
}
