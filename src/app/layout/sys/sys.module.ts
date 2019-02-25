import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SysRoutingModule } from './sys-routing.module';
import { SysComponent } from './sys.component';
import {ThirdModule} from "./third/third.module";
import {MenuModule} from "./menu/menu.module";
import {PhotosModule} from "./photos/photos.module";

@NgModule({
    imports: [
        CommonModule,
        SysRoutingModule,
        ThirdModule,
        MenuModule,
        PhotosModule
    ],
    declarations: [SysComponent]
})
export class SysModule {}
