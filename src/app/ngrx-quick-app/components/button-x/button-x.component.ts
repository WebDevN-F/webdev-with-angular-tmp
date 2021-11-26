import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-x',
  templateUrl: './button-x.component.html',
  styleUrls: ['./button-x.component.scss']
})
export class ButtonXComponent implements OnInit {
  @Input() btnBlock: boolean = false;
  @Input() bgcolor: string = '#000000';
  @Input() color: string = '#ffffff';
  @Input() buttonText: string = 'Button';
  @Output() clickButton: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn(e?: any) {
    this.clickButton.emit(e);
  }

}
