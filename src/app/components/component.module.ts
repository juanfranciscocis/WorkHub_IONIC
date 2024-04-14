import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";
import {BarfooterComponent} from "./barfooter/barfooter.component";
import {RouterLink} from "@angular/router";
import {ProductsComponent} from "./products/products.component";



@NgModule({
  declarations: [
    HeaderComponent,
    BarfooterComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterLink,
  ],
  exports: [
    HeaderComponent,
    BarfooterComponent,
    ProductsComponent
  ]
})
export class ComponentModule { }
