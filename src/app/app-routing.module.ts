import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './shared/components/image-detail/image-detail.component';


const routes: Routes = [
  { path: 'gallerie', component: GalleryComponent},
  { path: 'bild/:id', component: ImageDetailComponent},
  { path: 'suche', component: SearchComponent },
  { path: '', redirectTo: 'gallerie', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
