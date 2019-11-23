import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-repository-pagination',
  templateUrl: './repository-pagination.component.html',
  styleUrls: ['./repository-pagination.component.css']
})
export class RepositoryPaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Output() changePage = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  onChange(page: number) {
    this.changePage.emit(page);
  }

}
