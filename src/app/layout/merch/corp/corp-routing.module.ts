import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorpComponent } from './corp.component';
import {CorpEditComponent} from "./component/corpedit.component";
import {CorpListComponent} from "./component/corplist.component";
import {CorpViewComponent} from "./component/corpview.component";
import {CorpTypeService} from "../../../shared/services/corp/corpType.service";
import {CorpTypeListComponent} from "./component/corptypelist.component";

const routes: Routes = [
    {
        path: '',
        component: CorpComponent,
        children: [
            { path: '', redirectTo: 'corplist' },
            { path: 'corpedit', component: CorpEditComponent },
            { path: 'corplist', component: CorpListComponent },
            { path: 'corpview', component: CorpViewComponent },
            { path: 'corptype', component: CorpTypeListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CorpRoutingModule {}
