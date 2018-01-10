import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgRedux, select } from '@angular-redux/store';

// store
import { ICartState } from "../store/store";

@Component({
  selector: 'seed-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit{

    carts: ICartState[] = [];
    
    constructor(
        private ngRedux: NgRedux<ICartState[]>,
        private location: Location
    ) {}

    ngOnInit () {
        this.carts = this.ngRedux.getState();
    }

    // redirect
    goTo() {
        this.location.back();
    }

}
