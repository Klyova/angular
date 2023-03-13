import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../home/home.component';
import {CatalogComponent} from '../catalog/catalog.component';
import {ContactComponent} from '../contact/contact.component';
import {Routes, RouterModule} from '@angular/router';
import { BookDetailComponent } from '../book/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'catalog', pathMatch: 'prefix', component: CatalogComponent},
  { path: 'catalog/:id', component: BookDetailComponent },
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '/'}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
