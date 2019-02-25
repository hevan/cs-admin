/**
 * Created by hevan on 2018/6/4.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { CorpRoutingModule } from './corp-routing.module';
import { CorpComponent } from './corp.component';
import {CorpEditComponent} from './component/corpedit.component';
import {CorpListComponent} from './component/corplist.component';
import {CorpViewComponent} from './component/corpview.component';
import {PageHeaderModule} from "../../../shared/modules/page-header/page-header.module";
import { TableModule } from 'primeng/table'
import { PaginatorModule } from 'primeng/paginator'
import { FileUploadModule } from 'primeng/fileupload'
import { DialogModule } from 'primeng/dialog'
import {TabViewModule} from 'primeng/tabview';
import {PickListModule} from 'primeng/picklist';
import {CorpTypeListComponent} from "./component/corptypelist.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TabViewModule,
        TableModule,
        PickListModule,
        DialogModule,
        PaginatorModule,
        PageHeaderModule,
        FileUploadModule,
        CorpRoutingModule,

    ],
    declarations: [CorpComponent,CorpListComponent,CorpEditComponent,CorpViewComponent, CorpTypeListComponent]
})
export class CorpModule {}
