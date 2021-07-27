import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEvent, FireBaseService } from '../../../app/fire-base.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public form: FormGroup | undefined;

  public eventList: IEvent[] = [];
  public eventDetails: IEvent | undefined;


  constructor(
    private fb: FormBuilder,
    private fireBaseService: FireBaseService,
  ) {}

  ngOnInit(): void {
  }

  formInit(data: IEvent): void {
    this.form = this.fb.group({
      date: [data ? data.date : ''],
      hour: [data? data.hour : ''],
      description: [data? data.description : '']
    })
  }

  addEvent(): void {
    this.fireBaseService.addEvent(this.form?.value).then();
  }

  

}
