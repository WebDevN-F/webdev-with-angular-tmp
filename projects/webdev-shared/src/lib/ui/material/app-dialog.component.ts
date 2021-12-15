import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactoryResolver,
  Inject
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataDialogModel } from '../app-dialog.model';

@Component({
  selector: 'ngn-app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.scss']
})
export class AppDialogComponent implements OnInit, OnDestroy {
  title: string = '';
  isConfirm = false;
  buttonYesText = 'Ok';
  buttonYesVisible = true;
  buttonNoText = 'Cancel';
  buttonNoVisible = false;
  messageConfirm!: string;

  @ViewChild('target', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  componentRef!: ComponentRef<any>;

  constructor(
    private dialogRef: MatDialogRef<AppDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialogModel<any>,
  ) {}

  ngOnInit() {
    this.title = this.data.title as string;
    this.isConfirm = this.data['isConfirm'] || false;
    this.buttonYesText = this.data['buttonYes']?.text || this.buttonYesText;
    this.buttonYesVisible = this.data['buttonYes']?.isVisible || this.buttonYesVisible;
    this.buttonNoText = this.data['buttonNo']?.text || this.buttonNoText;
    this.buttonNoVisible = this.data['buttonNo']?.isVisible || this.buttonNoVisible;
    if (this.data['model'] && typeof this.data['model'] === 'string') {
      this.messageConfirm = this.data['model'] as string;
    }
    if (this.data['component']) {
      this.componentRef = this.container.createComponent(this.data.component);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
