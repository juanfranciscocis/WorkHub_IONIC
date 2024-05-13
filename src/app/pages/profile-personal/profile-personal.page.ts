import {Component, inject, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/interfaces";
import {getDownloadURL, ref, Storage, uploadBytesResumable} from "@angular/fire/storage";

@Component({
  selector: 'app-profile-personal',
  templateUrl: './profile-personal.page.html',
  styleUrls: ['./profile-personal.page.scss'],
})
export class ProfilePersonalPage implements OnInit {

  private readonly storage: Storage = inject(Storage);
  user:User = {
    companyName: '',
    email: '',
    password: '',
    isCompany: false,
    image: ''
  }
  isImageLoaded: boolean = false;

  constructor(private usersService:UsersService) {
    this.user = this.usersService.getCurrentUser() as User;
  }

  ngOnInit() {
  }

  saveChanges() {

    console.log(this.user);
    this.usersService.updateUser(this.user).then(r => {
      location.reload();
    });
  }

  onImageLoad() {
    this.isImageLoaded = true;
  }

  async uploadFile(input: HTMLInputElement) {
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
            this.user.image = data;
            console.log(this.user.image);
            await this.publish();
          });
        });
      }


    }
  }

  public publish(){
    this.usersService.updateUser(this.user).then((data) => {
      location.reload();
    });


  }

  async downloadFile(file: string):Promise<string> {
    let finalUrl = '';
    await getDownloadURL(ref(this.storage, file)).then((url) => {
      console.log('File available at', url);
      finalUrl = url;
    });
    return finalUrl;
  }
}
