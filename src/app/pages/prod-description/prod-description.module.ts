import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdDescriptionPageRoutingModule } from './prod-description-routing.module';

import { ProdDescriptionPage } from './prod-description.page';
import {ComponentModule} from "../../components/component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProdDescriptionPageRoutingModule,
        ComponentModule
    ],
  declarations: [ProdDescriptionPage]
})
export class ProdDescriptionPageModule {}
