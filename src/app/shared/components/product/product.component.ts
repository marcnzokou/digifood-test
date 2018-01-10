import { Component, Input } from '@angular/core';
import { NgRedux, select } from "@angular-redux/store";

import { IProduct } from '../../models/product.model';

// store
import { ICartState } from "../../../store/store";
// action
import { productAction } from "../../../action/product.action";

@Component({
  selector: 'seed-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

    // set binding vlaue
    @Input() product: IProduct;
    
    count: number = 0;

    constructor(
        private ngRedux: NgRedux<ICartState[]>
    ){}

    // add prodcut
    addProduct(p: IProduct) {
        this.ngRedux.dispatch({type: productAction.add, product: p});
        this.getCount(p);
    }
    // remove product
    removeProduct(p: IProduct) {
        this.ngRedux.dispatch({type: productAction.remove, product: p});
        this.getCount(p);
    }

    // return nb of product
    getCount(p: IProduct) {
        let data = this.ngRedux.getState();
        let index = data.findIndex(x => x.id === p.id);
        this.count = data[index].count;
    }

}
