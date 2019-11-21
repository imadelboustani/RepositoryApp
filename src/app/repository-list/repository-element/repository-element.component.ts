import {Component, Input, OnInit} from '@angular/core';
import {Repository} from '../../shared/repository.model';

@Component({
  selector: 'app-repository-element',
  templateUrl: './repository-element.component.html',
  styleUrls: ['./repository-element.component.css']
})
export class RepositoryElementComponent implements OnInit {
  @Input() repository: Repository;
  constructor() { }

  ngOnInit() {
  }

}
