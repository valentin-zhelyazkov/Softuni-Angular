import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEvent, FireBaseService } from '../../../app/fire-base.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public form: FormGroup | undefined;

  public eventList: IEvent[] = [];
  public eventDetails: IEvent | undefined;


  constructor(
    private fb: FormBuilder,
    private fireBaseService: FireBaseService,
  ) {}

  formInit(data: IEvent): void {
    this.form = this.fb.group({
      date: [data ? data.date : ''],
      hour: [data? data.hour : ''],
      description: [data? data.description : '']
    })
  }

  ngOnInit(): void {
  }

  updateEvent(eventId: string): void {
    this.fireBaseService.updateEvent(eventId, this.form?.value).then();
  }

}
