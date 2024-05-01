import { Injectable } from '@angular/core';
import {collection, doc, Firestore, getDoc, getDocs, query, setDoc, where} from "@angular/fire/firestore";
import {Business} from "../interfaces/interfaces";
import {getAll} from "@angular/fire/remote-config";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private firestore: Firestore) { }


  //get all the categories of a company
  async getCategories(companyName: string): Promise<string[]> {
    let data;
    let category: string[] = [];
    const document = doc(this.firestore, 'categories', companyName);
    const docData = await getDoc(document);
    if (docData.exists()) {
      data = docData.data();
      category = data['category'] as string[];
    }
    return Promise.resolve(category);
  }

  //Add a category
  async addCategory(cat: string, companyName:string): Promise<boolean>{
    //get the array of categories
    let data;
    let category: string[] = [];
    const document = doc(this.firestore, 'categories', companyName);
    const docData = await getDoc(document);
    if (docData.exists()) {
      data = docData.data();
      category = data['category'] as string[];
      console.log(category)
    }

    //check if the category already exists
    if (category.includes(cat)) {
      //remove the category
      category = category.filter((value) => value !== cat);
      await setDoc(document, {category: category});
      return Promise.resolve(false);
    }

    //add the category
    category.push(cat);
    await setDoc(document, {
      companyName: companyName,
      category: category
    });
    return Promise.resolve(true);

  }


  async makeSearchByCategory(category: string | undefined): Promise<any> {
    try {
      // Create a query to check if a user with the provided userId exists
      const q = query(collection(this.firestore, 'categories'), where('category', 'array-contains', category));
      // Get the documents that match the query
      const querySnapshot = await getDocs(q);
      let bussinessNames:string[] = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        bussinessNames.push(data['companyName']);
      });

      let business: Business[] = [];
      try {
        for (let cat of bussinessNames) {
          const q = query(collection(this.firestore, 'posts'), where('companyName', '==', cat));
          // Get the documents that match the query
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            let data = doc.data() as Business;
            if (!business.includes(data)) {
              business.push(data);
            }
          });
        }
        return Promise.resolve(business);
      } catch (e) {
        console.log(e);
      }
      return Promise.resolve([]);
    } catch (error) {
      return Promise.resolve([]);
    }
  }

  //search
  async makeSearch(search?: string): Promise<Business[]> {
    console.log(search);
    let business: Business[] = [];

    try {
      // Create a query to check if a user with the provided userId exists
      const q = query(collection(this.firestore, 'posts'), where('companyName', '>=', search));
      // Get the documents that match the query
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data = doc.data() as Business;
        if (!business.includes(data)){
          business.push(data);
        }
      });
      return Promise.resolve(business);
    } catch (error) {
      return Promise.resolve([]);
    }
  }


}
