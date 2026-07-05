import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductCardComponent } from '@my-workspace/ui-components';
import {
  ProductDataService,
  ProductSelectionService,
} from '@my-workspace/services';
import { Product } from '@my-workspace/models';
import { map, Observable } from 'rxjs';

@Component({
  imports: [AsyncPipe, ProductCardComponent, CommonModule],
  selector: 'app-product-list-entry',
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntry {
  private readonly productDataService = inject(ProductDataService);
  private readonly productSelectionService = inject(ProductSelectionService);

  readonly products$: Observable<Product[]> =
    this.productDataService.getProducts();
  readonly selectedId$: Observable<string | null> =
    this.productSelectionService.selectedProduct$.pipe(
      map((product) => product?.id ?? null),
    );

  onSelect(id: string): void {
    this.productSelectionService.select(id);
  }
}
