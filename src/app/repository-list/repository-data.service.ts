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
  getRepositoriesData(): Observable<Object> {
  return this.http.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc');
  }
  getRepositoriesArray(): Repository[] {
    this.getRepositoriesData().subscribe((resp) => {
      for (const elem of resp.items) {
        this.repositories.push(new Repository( elem.name, elem.description,
          elem.owner.login, elem.owner.avatar_url,
          elem.stargazers_count, elem.open_issues_count ));
      }
    });
    return this.repositories;
  }
}
