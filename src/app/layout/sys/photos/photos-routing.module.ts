import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PhotosComponent } from './photos.component';
import { PhotosListComponent} from "./component/photoslist.component";

const routes: Routes = [
    {
        path: '',
        component: PhotosComponent,
        children: [
            { path: '', redirectTo: 'photoslist' },
            { path: 'photoslist', component:  PhotosListComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  PhotosRoutingModule {}
