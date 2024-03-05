import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePersonalPageRoutingModule } from './profile-personal-routing.module';

import { ProfilePersonalPage } from './profile-personal.page';
import {ComponentModule} from "../../components/component.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePersonalPageRoutingModule,
        ComponentModule
    ],
  declarations: [ProfilePersonalPage]
})
export class ProfilePersonalPageModule {}
