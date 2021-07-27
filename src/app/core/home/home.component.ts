import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEvent, FireBaseService } from '../../../app/fire-base.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public form: FormGroup | undefined;

  public eventList: IEvent[] = [];
  public eventDetails: IEvent | undefined;


  constructor(
    private fb: FormBuilder,
    private fireBaseService: FireBaseService,
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.fireBaseService.getEvents().subscribe((res) => {
      this.eventList = res.map((event) => {
        return {
          ...event.payload.doc.data() as {},
          id: event.payload.doc.id
        } as IEvent;
      })
    })
  }

  deleteEvent(eventId: string): void {
    this.fireBaseService.deleteEvent(eventId).then();
  }
}
