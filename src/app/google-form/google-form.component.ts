import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const sheetID = '1Byoa9eX6oFZiXzeE4faEtFcAiVooWK7x-RincHpF_fE';
const sheetName = 'googleform';
const API_KEY_GOOGLE_SHEETAPI = 'AIzaSyAjAl7MFiimGRdwh4bmvtu-3iHPCGjSlAk';

const formlyRow = (fieldConfig: FormlyFieldConfig[]) => {
  return {
    fieldGroupClassName: 'display-flex',
    fieldGroup: fieldConfig,
  }
}

const attributesMapping = {
  createdAt: "createdAt",
  q1: "q1",
  q2: "q2",
  q3: "q3",
  q4: "q4",
  q5: "q5",
  q6: "q6",
  q7: "q7",
  q8: "q8",
  q9: "q9",
  q10: "q10",
  q11: "q11",
  q12: "q12",
  q13: "q13",
  q14: "q14",
  q15: "q15",
  q16: "q16",
  q17: "q17",
  q18: "q18",
  q19: "q19",
};

@Component({
  selector: 'app-google-form',
  templateUrl: './google-form.component.html',
  styleUrls: ['./google-form.component.scss']
})
export class GoogleFormComponent implements OnInit, OnDestroy {
  isSubmitted = true;
  form = new FormGroup({});
  model = {
    createdAt: new Date()
  };
  labels = [
    "Điều tôi đang cảm thấy ngay lúc này là…",
    "Tôi đang cảm nhận thấy rằng …",
    "Điều thúc đẩy tôi là…",
    "Tôi được truyền cảm hứng bởi…",
    "Hôm nay, tôi khao khát…",
    "Điều làm tôi tổn thương là …",
    "Tôi ước …",
    "Những người khác đang …",
    "Tôi đã mắc phải một sai lầm hạnh phúc …",
    "Tình yêu là …",
    "Những điều khiến tôi khó chịu là …",
    "Những điểm yếu của tôi là …",
    "Những điều khiến tôi vui vẻ là …",
    "Những điểm mạnh của tôi là …",
    "Giá trị cốt lõi của tôi là …",
    "Tôi đại diện cho …",
    "Tôi có giỏi không?",
    "Tôi có là người tốt không?",
    "Tôi có đáng được yêu không?",
  ];

  fields: FormlyFieldConfig[] = [
    {
      key: 'createdAt',
      templateOptions: {
        hidden: true
      }
    },
  ];

  private componentDestroyed$: Subject<boolean> = new Subject()

  constructor(private http: HttpClient) {
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true)
    this.componentDestroyed$.complete()
  }

  async ngOnInit() {
    this.labels.forEach((label, index) => {
      this.fields.push(formlyRow([{
        key: `q${index + 1}`,
        type: 'input',
        defaultValue: '',
        templateOptions: {
          label: label,
          placeholder: '...',
          required: true,
        },
        className: 'flex-1',
        validation: {
          show: true,
        },
      }]));
    })

    // await doc.loadInfo();
    // console.log(doc.title);

    // this.googleSheetsDbService.get(this.sheetID, this.sheetName, attributesMapping)
    //     .pipe(
    //       startWith([]),
    //       takeUntil(this.componentDestroyed$)
    //     )
    //     .subscribe(data => {
    //       console.log(data);
    //     });
  }

  onSubmit(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      value['createdAt'] = new Date();
      console.log(Object.values<any>(value));

      // this.googleSheetsDbService.getActive(this.sheetID, this.sheetName, attributesMapping, )
      // const GoogleSpreadsheet = require('google-spreadsheet');
    }
  }

  onReset(): void {
    this.form.reset();
  }

}
