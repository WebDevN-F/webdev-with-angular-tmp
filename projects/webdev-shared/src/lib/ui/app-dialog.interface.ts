import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataDialogModel } from './app-dialog.model';
import { AppDialogComponent } from './material/app-dialog.component';

@Injectable()
export abstract class IAppDialogService {
  abstract openDialogCustom<TData> (
    data: DataDialogModel<TData>
  ): MatDialogRef<AppDialogComponent, any>;
}
