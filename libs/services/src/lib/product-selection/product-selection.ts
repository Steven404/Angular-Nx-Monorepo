import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '@my-workspace/models';
import { ProductDataService } from '../product-data/product-data';

@Injectable({ providedIn: 'root' })
export class ProductSelectionService {
  private readonly dataService = inject(ProductDataService);
  private readonly selectedId$ = new BehaviorSubject<string | null>(null);

  readonly selectedProduct$: Observable<Product | undefined> =
    this.selectedId$.pipe(
      switchMap((id) => (id ? this.dataService.getById(id) : of(undefined))),
    );

  select(id: string): void {
    this.selectedId$.next(id);
  }
}
