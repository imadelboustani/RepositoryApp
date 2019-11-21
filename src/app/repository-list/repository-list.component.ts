import { Component, OnInit } from '@angular/core';
import {RepositoryDataService} from './repository-data.service';
import {Repository} from '../shared/repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[] = [];
  constructor(private repositoryService: RepositoryDataService) { }

  ngOnInit() {
   this.repositories = this.repositoryService.getRepositoriesArray();
  }

}
