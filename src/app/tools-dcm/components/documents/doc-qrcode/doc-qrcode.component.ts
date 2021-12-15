import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-qrcode',
  templateUrl: './doc-qrcode.component.html',
  styleUrls: ['./doc-qrcode.component.scss']
})
export class DocQrcodeComponent implements OnInit {
  @Input() qrCodeValue: any = 'yo yo';
  constructor() { }

  ngOnInit(): void {
  }

}
