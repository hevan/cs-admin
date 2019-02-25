/**
 * Created by hevan on 2018/6/4.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosListComponent} from "./component/photoslist.component";
import { PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import { TableModule } from 'primeng/table'
import { PaginatorModule } from 'primeng/paginator'
import { FileUploadModule } from 'primeng/fileupload'
import { PhotosComponent} from "./photos.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        PaginatorModule,
        PageHeaderModule,
        FileUploadModule,
        PhotosRoutingModule
    ],
    declarations: [ PhotosComponent, PhotosListComponent]
})
export class  PhotosModule {}
