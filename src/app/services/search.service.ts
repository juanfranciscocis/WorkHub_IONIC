import { Injectable } from '@angular/core';
import {doc, Firestore, getDoc, setDoc} from "@angular/fire/firestore";
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
    await setDoc(document, {category: category});
    return Promise.resolve(true);

  }

  //search
  async makeSearch(search?: string, category?:string): Promise<Business[]> {
    return [
      {
        companyName: search || 'Company 1',
        price: 100,
        description: category || 'Description 1',
        image: 'image 1',
        contact: 999
      },
      {
        companyName: 'Company 2',
        price: 200,
        description: 'Description 2',
        image: 'image 2',
        contact: 999
      }
    ];
  }


}
