import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysComponent } from './sys.component';

const routes: Routes = [
    {
        path: '',
        component: SysComponent,
        children: [
            { path: '', redirectTo: 'menu' },
            { path: 'third', loadChildren: './third/third.module#ThirdModule' },
            { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
            { path: 'photos', loadChildren: './photos/photos.module#PhotosModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SysRoutingModule {}
