import {Component, inject, Input, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {getDownloadURL, ref, Storage, uploadBytesResumable} from "@angular/fire/storage";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit {



  @Input() products:any[] = [];


  constructor(private postsService:PostsService) {
    console.log(this.products);
  }

  ngOnInit() {}

  async deleteProduct(index: number) {
    //verify that im not in the home page
    if (window.location.pathname !== '/prod-description') {
      console.log("Delete product")
      console.log(this.products[index].id)
      await this.postsService.deleteProduct(this.products[index].id).then((r) => {
        location.reload();
      });
    }
  }

  protected readonly location = location;
  isImageLoaded:boolean = false;


  onImageLoad() {
    this.isImageLoaded = true;
  }

  private readonly storage: Storage = inject(Storage);



  public publish(product:any){
    this.postsService.updateProduct(product).then((r) => {
      location.reload();
    });
  }


  async uploadFile(input: HTMLInputElement, index:number){
    if (!input.files) return

    const files: FileList = input.files;




    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const storageRef = ref(this.storage, file.name);
        await uploadBytesResumable(storageRef, file).then((snapshot)=>{
          //get the url
          console.log('Uploaded a blob or file!', snapshot.ref.fullPath);
          this.downloadFile(snapshot.ref.fullPath).then(async (data) => {
            this.products[index].image = data;
            console.log(this.products[index]);
            await this.publish(this.products[index]);
          });
        });
      }


    }
  }

  async downloadFile(file: string):Promise<string> {
    let finalUrl = '';
    await getDownloadURL(ref(this.storage, file)).then((url) => {
      console.log('File available at', url);
      finalUrl = url;
    });
    return finalUrl;
  }


  addImage() {

  }




}
