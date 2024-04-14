import { Injectable } from '@angular/core';
import {Firestore, collection, query, getDocs, DocumentData, where} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore: Firestore) { }

  async getAllPosts(): Promise<DocumentData[]> {
    const postsCollectionRef = collection(this.firestore, 'posts');
    const postsQuery = query(postsCollectionRef);
    const postsSnapshot = await getDocs(postsQuery);
    return postsSnapshot.docs.map(doc => doc.data());
  }

  async getPostByCompanyName(companyName: string): Promise<DocumentData | null> {
    const postsCollectionRef = collection(this.firestore, 'posts');
    const postsQuery = query(postsCollectionRef, where('companyName', '==', companyName));
    const postsSnapshot = await getDocs(postsQuery);
    if (!postsSnapshot.empty) {
      return postsSnapshot.docs[0].data();
    } else {
      return null;
    }
  }


  async getProductByName(companyName: string):Promise<DocumentData|null> {
    const postsCollectionRef = collection(this.firestore, 'products');
    const postsQuery = query(postsCollectionRef, where('companyName', '==', companyName));
    const postsSnapshot = await getDocs(postsQuery);
    if (!postsSnapshot.empty) {
      //return all the products
      return postsSnapshot.docs.map(doc => doc.data());
    } else {
      return null;
    }

  }
}
