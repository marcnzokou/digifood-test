import { Component, Input } from '@angular/core';
import { NgRedux, select } from "@angular-redux/store";

import { IProduct } from '../../models/product.model';

// store
import { ICartState } from "../../../store/store";

@Component({
  selector: 'seed-shop-bag',
  templateUrl: './shop-bag.component.html',
  styleUrls: ['./shop-bag.component.scss']
})

export class ShopBagComponent {

    // set binding
    @Input() type: string;
    @Input()  tabCarts: ICartState[] = [];

    sum: number = 0;

    // all price
    getTotal(carts: any): number {
        this.sum = carts.reduce((prevVal, elem) => prevVal + elem.totaux, 0);
        return this.sum;
    }

}
