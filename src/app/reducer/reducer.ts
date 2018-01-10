import { productAction } from "../action/product.action";
import { INITIAL_STATE } from "../store/store";
import * as _ from 'underscore';
import { filter } from "rxjs/operator/filter";


// reducer
export const rootReduce = (state, action) => {
    
    switch(action.type) {
        // add product
        case productAction.add:
            let nextItemId = 1;
            // index item of state
            let indexAdd = state.findIndex(x => x.id === action.product.id);
            // exist item of state
            if (indexAdd >= 0) {
                state[indexAdd].count = state[indexAdd].count + 1;
                state[indexAdd].totaux = state[indexAdd].price * state[indexAdd].count;
                return state;
            }
            else {
                return [
                    ...state,
                    {
                        id: action.product.id,
                        name: action.product.name,
                        price: action.product.price,
                        image: action.product.image,
                        tva: (action.product.tva) ? (action.product.tva) : 0,
                        count: nextItemId ++,
                        totaux: action.product.price
                    }
                ];
            }

        // remove
        case productAction.remove:
            // index item of state
            let indexRemove = state.findIndex(x => x.id === action.product.id);
             // exist item of state
            if (indexRemove >= 0) {
                state[indexRemove].count = state[indexRemove].count - 1;
                state[indexRemove].totaux = state[indexRemove].price * state[indexRemove].count;
                return state;
            } else {
                return state;
            }

        default:
            return state;
    }
}


