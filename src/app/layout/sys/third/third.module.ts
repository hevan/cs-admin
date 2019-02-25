/**
 * Created by hevan on 2018/6/4.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';


import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import { TableModule } from 'primeng/table'
import { PaginatorModule } from 'primeng/paginator'
import { FileUploadModule } from 'primeng/fileupload'
import { ThirdComponent} from "./third.component";
import { ThirdEditComponent}from "./component/thirdedit.component";
import { ThirdListComponent}from "./component/thirdlist.component";
import { ThirdViewComponent}from "./component/thirdview.component";
import { ThirdRoutingModule } from './third-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        PaginatorModule,
        PageHeaderModule,
        FileUploadModule,
        ThirdRoutingModule
    ],
    declarations: [ThirdComponent,ThirdEditComponent,ThirdListComponent,ThirdViewComponent]
})
export class ThirdModule {}
