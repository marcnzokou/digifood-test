import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layouts/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ShopBagComponent } from './components/shop-bag/shop-bag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        ProductComponent,
        ShopBagComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HeaderComponent,
        ProductComponent,
        ShopBagComponent
    ]
})
export class SharedModule {}