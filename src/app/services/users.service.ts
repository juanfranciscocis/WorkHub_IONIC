import { Injectable } from '@angular/core';
import {doc, docData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private firestore: Firestore) { }

  getUser(){
    const userDocRef = doc(this.firestore, 'users', 'usr');
    return docData(userDocRef);
  }



}
