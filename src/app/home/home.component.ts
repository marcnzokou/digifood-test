import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { CategoryService } from '../shared/services/category.service';
import { ICategory } from '../shared/models/category.model';

// store
import { ICartState } from '../store/store';

@Component({
  selector: 'seed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  category: ICategory [] = [];
  carts: ICartState[] = this.ngRedux.getState();

  constructor(
    private categoryService: CategoryService,
    private ngRedux: NgRedux<ICartState[]>
  ) {
      // async state
      ngRedux.subscribe(() => {
        this.carts = this.ngRedux.getState();
      });
  }

  ngOnInit() {
     this.categoryService.getAll()
     .subscribe(c => {
       this.category = c;
     });
  }
}
