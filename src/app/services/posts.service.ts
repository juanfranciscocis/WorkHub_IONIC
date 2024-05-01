import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  getDocs,
  DocumentData,
  where,
  doc,
  updateDoc,
  setDoc, deleteDoc
} from '@angular/fire/firestore';
import {Business, Products} from "../interfaces/interfaces";
import {create} from "ionicons/icons";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private firestore: Firestore) { }

  // Get all posts
  async getAllPosts(): Promise<DocumentData[]> {
    const postsCollectionRef = collection(this.firestore, 'posts');
    const postsQuery = query(postsCollectionRef);
    const postsSnapshot = await getDocs(postsQuery);
    return postsSnapshot.docs.map(doc => doc.data());
  }

  // Get post by company name
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

  // Get all products by company name
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

  //Update the post
  async updatePost(post: Business): Promise<boolean> {
    try {
      const document = doc(this.firestore, 'posts', post.companyName);
      await updateDoc(document, {
        companyName: post.companyName,
        price: post.price,
        description: post.description,
        image: post.image,
        contact: post.contact
      });
      return Promise.resolve(true);
    } catch (error) {
      return Promise.resolve(false);
    }
  }

  //Create a product for a company
  async createProduct(product:any, bussiness:Business): Promise<boolean> {
    const id = product.productName + bussiness.companyName;
    const document  = doc(this.firestore, 'products', id);
    try {
      console.log(product);
      await setDoc(document, {
        name: product.productName,
        price: product.price,
        image: "",
        companyName: bussiness.companyName,
        id: id
      });
      return Promise.resolve(true);
    } catch (error) {
      return Promise.resolve(false);
    }

  }


  //Delete a product for a company
  async deleteProduct(id:any): Promise<boolean> {
    try {
      await deleteDoc(doc(this.firestore, 'products',id));
      console.log('Product deleted successfully:', id);
      return Promise.resolve(true);
    } catch (error) {
      return Promise.resolve(false);
    }
  }


  async updateProduct(product: any):Promise<boolean> {
    try {
      await updateDoc(doc(this.firestore, 'products', product.id), {
        name: product.name,
        price: product.price,
        image: product.image,
        companyName: product.companyName
      });
      return Promise.resolve(true);
    } catch (e) {
      console.log(e);
    }
    return Promise.resolve(false);
  }
}
