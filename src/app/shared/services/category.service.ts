import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { ICategory } from '../models/category.model';

@Injectable()
export class CategoryService {

    constructor(
        private http: HttpClient
    ) {}

    // return all category
    public getAll(): Observable<ICategory[]> {
        return this.http.get("/rest-api/category.json")
                .map((res:any) => {
                       res.categories;
                       return res.categories;
                });
      }

}