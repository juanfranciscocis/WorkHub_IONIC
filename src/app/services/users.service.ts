import { Injectable } from '@angular/core';
import {Firestore, collection, query, getDocs, DocumentData, where, addDoc, setDoc, doc} from '@angular/fire/firestore';
import {User} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private firestore: Firestore) { }


  async createUser(user: User): Promise<boolean> {
    return this.verifyIfUserExists(user).then(async (existsUser) => {
      if (existsUser) {
        return Promise.resolve(false);
      }
      let document: string = 'users';
      let id: string = user.companyName;
      let path: string = document + '/' + id;
      try {
        await setDoc(doc(this.firestore, path), user);
        return Promise.resolve(true);
      } catch (e) {
        return Promise.resolve(false);
      }
    });
  }


  async verifyIfUserExists(user: User): Promise<boolean> {
    try {
      // Create a query to check if a user with the provided userId exists
      const q = query(collection(this.firestore, 'users'), where('companyName', '==', user.companyName));
      // Get the documents that match the query
      const querySnapshot = await getDocs(q);
      return Promise.resolve(!querySnapshot.empty);
    } catch (error) {
      return Promise.resolve(false);
    }
  }


}
