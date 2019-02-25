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
import {MenuComponent} from "./menu.component";
import {MenuEditComponent}from "./component/menuedit.component";
import {MenuListComponent}from "./component/menulist.component";
import {MenuViewComponent}from "./component/menuview.component";
import { MenuRoutingModule } from './menu-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        PaginatorModule,
        PageHeaderModule,
        FileUploadModule,
        MenuRoutingModule
    ],
    declarations: [MenuComponent,MenuEditComponent,MenuListComponent,MenuViewComponent]
})
export class MenuModule {}
