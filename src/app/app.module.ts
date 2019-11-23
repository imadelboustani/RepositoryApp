import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryElementComponent } from './repository-list/repository-element/repository-element.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {RepositoryPaginationComponent} from './repository-list/repository-pagination/repository-pagination.component';

const appRoutes: Routes = [{path: 'Repositories/:page', component: RepositoryListComponent},
 {path: '', redirectTo: 'Repositories/1', pathMatch: 'full'}];
@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent,
    RepositoryElementComponent,
    RepositoryPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
