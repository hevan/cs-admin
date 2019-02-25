import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from './third.component';
import {ThirdEditComponent} from "./component/thirdedit.component";
import {ThirdListComponent} from "./component/thirdlist.component";
import {ThirdViewComponent} from "./component/thirdview.component";

const routes: Routes = [
    {
        path: '',
        component: ThirdComponent,
        children: [
            { path: '', redirectTo: 'thirdlist' },
            { path: 'thirdedit', component: ThirdEditComponent },
            { path: 'thirdlist', component: ThirdListComponent },
            { path: 'thirdview', component: ThirdViewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThirdRoutingModule {}
