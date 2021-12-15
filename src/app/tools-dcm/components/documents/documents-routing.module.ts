import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocDetailComponent } from './doc-detail/doc-detail.component';
import { DocLoanPaymentingComponent } from './doc-loan-paymenting/doc-loan-paymenting.component';
import { DocMoveBuComponent } from './doc-move-bu/doc-move-bu.component';
import { DocMoveCrownComponent } from './doc-move-crown/doc-move-crown.component';
import { DocRevokingComponent } from './doc-revoking/doc-revoking.component';
import { DocSearchComponent } from './doc-search/doc-search.component';
import { DocShellComponent } from './doc-shell/doc-shell.component';
import { DocStoringComponent } from './doc-storing/doc-storing.component';
import { DocUpdatingComponent } from './doc-updating/doc-updating.component';

const routes: Routes = [
  {
    path: '', component: DocShellComponent, children: [
      { path: 'doc-search', component: DocSearchComponent, data: { title: 'Tìm kiếm', breadcrumb: 'Quản lý hồ sơ' } },
      { path: 'doc-detail/:id', component: DocDetailComponent, data: { title: 'Thông tin chi tiết hồ sơ', breadcrumb: 'Quản lý hồ sơ' } },
      { path: 'doc-store', component: DocStoringComponent, data: { title: 'Lưu kho ĐVKD', breadcrumb: 'Quản lý hồ sơ' } },
      { path: 'doc-loan-payment', component: DocLoanPaymentingComponent, data: { title: 'Mượn trả', breadcrumb: 'Quản lý hồ sơ' } },
      { path: 'doc-move-crown', component: DocMoveCrownComponent, data: { title: 'Chuyển kho Crown', breadcrumb: 'Quản lý hồ sơ' } },
      { path: 'doc-move-bu', component: DocMoveBuComponent, data: { title: 'Chuyển kho về ĐVKD', breadcrumb: 'Quản lý hồ sơ' } },
      { path: 'doc-update', component: DocUpdatingComponent, data: { title: 'Cập nhật thông tin Hồ sơ', breadcrumb: 'Quản lý hồ sơ' } },
      { path: 'doc-revoke', component: DocRevokingComponent, data: { title: 'Tiêu hủy', breadcrumb: 'Quản lý hồ sơ' } },
      { path: '', redirectTo: 'tools-dcm/document', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
