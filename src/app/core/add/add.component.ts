import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEvent, FireBaseService } from '../../../app/fire-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {

  public form: FormGroup;
  public error: string;

  public eventList: IEvent[] = [];
  public eventDetails: IEvent | undefined;

  constructor(
    private fb: FormBuilder,
    private fireBaseService: FireBaseService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      'date': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'hour': new FormControl('', [Validators.required, Validators.minLength(7)]),
      'description': new FormControl('', [Validators.required])
    })
    
    this.error = '';
  }

  addEvent(): void {  
    if(this.form.invalid){
      this.error = 'Date must be xx/xx/xx or hour xx/xxam or pm and description not empty';
    } else {
      this.fireBaseService.addEvent(this.form?.value).then((res) => {
        this.router.navigate(['/']);
      }).catch(e => {
        console.log(e);
      });  
    }
  }
}
