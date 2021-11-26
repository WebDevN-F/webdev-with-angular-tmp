import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NgrxQuickAppComponent } from './ngrx-quick-app.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonXComponent } from './components/button-x/button-x.component';

const routes: Routes = [
  {
    path: '', component: NgrxQuickAppComponent
  }
];

@NgModule({
  declarations: [
    NgrxQuickAppComponent,
    ButtonXComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 100, logOnly: environment.production })
  ]
})
export class NgrxQuickAppModule { }
