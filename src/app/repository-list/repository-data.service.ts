import { Injectable } from '@angular/core';
import {HttpClient, JsonpClientBackend} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Repository} from '../shared/repository.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryDataService {
   repositories: Repository[] = [];
  constructor(private http: HttpClient) { }
  getRepositoriesData(): Observable<any> {
   return this.http.get('https://api.github.com/search/repositories?q=created:>' + this.getCurrentDate() + '&sort=stars&order=desc');
  }
  getRepositoriesArray(): Repository[] {
    this.getRepositoriesData().subscribe((resp: any) => {
      for (const elem of resp.items) {
        this.repositories.push(new Repository( elem.name, elem.description,
          elem.owner.login, elem.owner.avatar_url,
          elem.stargazers_count, elem.open_issues_count ));
      }
    });
    return this.repositories;
  }
  getCurrentDate(): string {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const day =  String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const dateUrl = date.getFullYear() + '-' + month + '-' + day;
    return dateUrl;
  }
}
