import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEvent, FireBaseService } from '../../../app/fire-base.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public form!: FormGroup;
  public id!: any;

  public eventList: IEvent[] = [];
  public eventDetails: IEvent | undefined;


  constructor (
    private fb: FormBuilder,
    private fireBaseService: FireBaseService,
    private ar: ActivatedRoute,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
      this.getEvents();
      this.id = this.ar.snapshot.paramMap.get('id');
      this.formInit();
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


  formInit(): void {
   this.form = this.fb.group({
     date: '',
     hour: '',
     description: ''
   })
  }

  updateEvent(eventId: string): void {
    this.eventDetails = this.eventList.find(event => event.id === this.id);
    
    this.fireBaseService.updateEvent(eventId, this.form?.value).then(res => {
      this.router.navigate(['/']);
    });
  }

}
