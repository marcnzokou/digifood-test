import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// redux
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import logger from 'redux-logger';
import { ICartState, INITIAL_STATE } from './store/store';
import { rootReduce } from './reducer/reducer';

// router
import { routing } from './app.routing';

// shared module
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

// services
import { CategoryService } from './shared/services/category.service';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent
  ],
  providers: [
    CategoryService
  ]
})
export class AppModule {
  // providers
  constructor(ngRedux: NgRedux<ICartState[]>, devTools: DevToolsExtension) {
    let enhancers: any[] = [];
    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }
    let logging = isDevMode ? [logger] : [];
    ngRedux.configureStore(rootReduce, INITIAL_STATE, logging, enhancers);
  }
}
