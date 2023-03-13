import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContactComponent } from './contact/contact.component';
import { BookItemComponent } from './book/book-item/book-item.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import {MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CatalogComponent,
    NavListComponent,
    ContactComponent,
    BookItemComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RoutingModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
