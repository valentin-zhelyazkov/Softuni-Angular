import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEvent, FireBaseService } from '../../../app/fire-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {

  public form!: FormGroup;

  public eventList: IEvent[] = [];
  public eventDetails: IEvent | undefined;

  constructor(
    private fb: FormBuilder,
    private fireBaseService: FireBaseService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
   this.form = this.fb.group({
     date: '',
     hour: '',
     description: ''
   })
  }

  addEvent(): void {
    console.log(this.form.value);
    this.fireBaseService.addEvent(this.form?.value).then((res) => {
    this.router.navigate(['/']);
    }).catch(e => {
      
    });
  }

}
