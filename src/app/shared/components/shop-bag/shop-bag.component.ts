import { Component, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IProduct } from '../../models/product.model';

// store
import { ICartState } from '../../../store/store';

@Component({
  selector: 'seed-shop-bag',
  templateUrl: './shop-bag.component.html',
  styleUrls: ['./shop-bag.component.scss']
})

export class ShopBagComponent {

    // set binding
    @Input() type: string;
    @Input()  tabCarts: ICartState[] = [];

    sum: Number = 0;

    // all price
    getTotal(carts: any): Number {
        this.sum = carts.reduce((prevVal: any, elem: any) => prevVal + elem.totaux, 0);
        return this.sum;
    }

}
