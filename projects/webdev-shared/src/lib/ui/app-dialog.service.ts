/**
 * How use in component/ts
 * const myComp = await import('./components/my.component')
 *   .then(m => m.MyComponent).catch(err => {
 *     console.log(err)
 *     return
 *   });
 * const dialogRef = this.dialogService.openDialogCustom<any>({
 *   title: 'Tìm kiếm',
 *   isConfirm: false,
 *   component: myComp,
 * });
 *
 * setTimeout(() => {
 *   const { componentInstance } = dialogRef;
 *   componentInstance.componentRef.instance.onSearch.subscribe((query: any) => {
 *     console.log(query);
 *   })
 * }, 100);
 */

import { HostListener, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AppDialogComponent } from './material/app-dialog.component';
import { DataDialogModel } from './app-dialog.model';

@Injectable({ providedIn: 'any'})
export class AppDialogService {
  private innerWidth: number = 500;
  constructor(private dialogService: MatDialog) { }

  openDialogCustom<TData> (
    data: DataDialogModel<TData>
  ): MatDialogRef<AppDialogComponent, any> {
    return this.dialogService.open(AppDialogComponent, {
      width: data.width || this.innerWidth + 'px',
      panelClass: ['mat-dialog-container'],
      disableClose: true,
      data: data
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event?: any) {
    this.innerWidth = window.innerWidth;
  }
}
