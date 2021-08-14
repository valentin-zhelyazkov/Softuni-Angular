import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private firestore: AngularFirestore) { }

  getEvents() {
    return this.firestore.collection('events').snapshotChanges();
  }

  addEvent(payload: IEvent) {
    
    return this.firestore.collection('events').add(payload);
  }

  updateEvent(eventId: string, payload: IEvent) {
    return this.firestore.doc('events/' + eventId).update(payload);
  }

  deleteEvent(eventId: string) {
    return this.firestore.doc('events/' + eventId).delete();
  }
}

export interface IEvent {
  id: string;
  date: string;
  hour: string;
  description: string;
}
