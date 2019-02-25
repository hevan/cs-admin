import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent } from './menu.component';
import {MenuEditComponent} from "./component/menuedit.component";
import {MenuListComponent} from "./component/menulist.component";
import {MenuViewComponent} from "./component/menuview.component";

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            { path: '', redirectTo: 'menulist' },
            { path: 'menuedit', component: MenuEditComponent },
            { path: 'menulist', component: MenuListComponent },
            { path: 'menuview', component: MenuViewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule {}
