import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  public error: string;

  public eventList: IEvent[] = [];
  public eventDetails: IEvent | undefined;


  constructor (
    private fb: FormBuilder,
    private fireBaseService: FireBaseService,
    private ar: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      'date': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'hour': new FormControl('', [Validators.required, Validators.minLength(7)]),
      'description': new FormControl('', [Validators.required])
    })
    this.error = '';
  }

  ngOnInit(): void {
      this.getEvents();
      this.id = this.ar.snapshot.paramMap.get('id');
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

  updateEvent(eventId: string): void {
    this.eventDetails = this.eventList.find(event => event.id === this.id);
    if(this.form.invalid){
      this.error = 'Date must be xx/xx/xx or hour xx/xxam or pm and description not empty';
    } else {
      this.fireBaseService.updateEvent(eventId, this.form?.value).then(res => {
        this.router.navigate(['/']);
      });
    }
    
  }

}
