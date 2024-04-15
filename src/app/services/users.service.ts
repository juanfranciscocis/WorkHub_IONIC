import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  getDocs,
  DocumentData,
  where,
  addDoc,
  setDoc,
  doc,
  getDoc
} from '@angular/fire/firestore';
import {Login, User} from "../interfaces/interfaces";
import {getAll} from "@angular/fire/remote-config";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private firestore: Firestore) { }

  //register user in  the database
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
        // After creating the user, save user details in local storage for session management
        localStorage.setItem('currentUser', JSON.stringify(user));
        return Promise.resolve(true);
      } catch (e) {
        return Promise.resolve(false);
      }
    });
  }

  //before we can register a new user we need to verify if the user already exists
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


  // Method to login the user
  async loginUser(user: Login): Promise<boolean> {
    try {
      // Create a query to check if a user with the provided userId exists
      const q = query(collection(this.firestore, 'users'), where('companyName', '==', user.companyName), where('password', '==', user.password));
      // Get the documents that match the query
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        //get the user from the database
        let document = "users";
        let id = user.companyName;
        let path = document + '/' + id;
        //get the user from the database
        const docSnap = await getDoc(doc(this.firestore, path));
        user = docSnap.data() as User;
        // Save user details in local storage for session management
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log('User logged in', this.getCurrentUser());
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    } catch (error) {
      return Promise.resolve(false);
    }
  }






  // Method to get the current user from local storage
  getCurrentUser(): User | null {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      return JSON.parse(userString);
    } else {
      return null;
    }
  }

  // Method to logout the current user from local storage
  clearCurrentUser(): void {
    localStorage.removeItem('currentUser');
  }




}
