import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";

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
    console.log("Delete product")
    console.log(this.products[index].id)
    await this.postsService.deleteProduct(this.products[index].id).then((r) => {
      location.reload();
    });
  }
}
