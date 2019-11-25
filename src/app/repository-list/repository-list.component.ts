import { Component, OnInit } from '@angular/core';
import {RepositoryDataService} from './repository-data.service';
import {Repository} from '../shared/repository.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  repositories: Repository[] = [];
  page: number;
  constructor(private repositoryService: RepositoryDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.page = +params.page;
      console.log(this.page);
      this.repositories = this.repositoryService.getRepositoriesArray(this.page);
    });
  }
  onChangePage(event: number) {
    console.log(event);
    this.router.navigate(['/Repositories', event ]);
  }

}
