import { Injectable } from '@angular/core';
import {Business} from "../interfaces/interfaces";
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc, where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private firestore: Firestore) { }



  // Add a favorite
  async addFavorite(user:string, companyName:string): Promise<Boolean> {
    try{
      const favsCollectionRef = collection(this.firestore, 'favorites');
      const favsQuery = query(favsCollectionRef, where('user', '==', user));
      const favsSnapshot = await getDocs(favsQuery);
      let favs = favsSnapshot.docs.map(doc => doc.data());
      if (favs.length > 0){
        if (favs[0]['companies'].includes(companyName)){
          return true;
        }
        favs[0]['companies'].push(companyName);
        await setDoc(doc(this.firestore, 'favorites', user), favs[0]);
      }
      else {
        await setDoc(doc(this.firestore, 'favorites', user), {user: user, companies: [companyName]});
      }
      return true;
    }catch (e){
      console.log(e);
      return false;
    }
  }


  //Get all favorites by user
  async getFavorites(user:string): Promise<Business[]> {
    try{
      const favsCollectionRef = collection(this.firestore, 'favorites');
      const favsQuery = query(favsCollectionRef, where('user', '==', user));
      const favsSnapshot = await getDocs(favsQuery);
      let favs = favsSnapshot.docs.map(doc => doc.data());
      if (favs.length > 0){
        favs[0]['companies'];
        const postsCollectionRef = collection(this.firestore, 'posts');
        const postsQuery = query(postsCollectionRef);
        const postsSnapshot = await getDocs(postsQuery);
        let posts = postsSnapshot.docs.map(doc => doc.data());
        let favorites: Business[] = [];
        posts.forEach(post => {
          if (favs[0]['companies'].includes(post['companyName'])){
            favorites.push(post as Business);
          }
        });
        return favorites;
      }
      return [];
    }catch (e){
      console.log(e);
      return [];
    }
  }


  //Remove a favorite
  async removeFavorite(user:string, companyName:string): Promise<Boolean> {
    try{
      const favsCollectionRef = collection(this.firestore, 'favorites');
      const favsQuery = query(favsCollectionRef, where('user', '==', user));
      const favsSnapshot = await getDocs(favsQuery);
      let favs = favsSnapshot.docs.map(doc => doc.data());
      if (favs.length > 0){
        if (favs[0]['companies'].includes(companyName)){
          favs[0]['companies'] = favs[0]['companies'].filter((company: string) => company !== companyName);
          await setDoc(doc(this.firestore, 'favorites', user), favs[0]);
          return true;
        }
      }
      return false;
    }catch (e){
      console.log(e);
      return false;
    }
  }

}
