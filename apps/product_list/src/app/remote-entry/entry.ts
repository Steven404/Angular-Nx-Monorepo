import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from '@my-workspace/ui-components';
import { ProductDataService, ProductSelectionService } from '@my-workspace/services';
import { Product } from '@my-workspace/models';
import { Observable } from 'rxjs';

@Component({
  imports: [AsyncPipe, ProductCardComponent],
  selector: 'app-product-list-entry',
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntry {
  private readonly productDataService = inject(ProductDataService);
  private readonly productSelectionService = inject(ProductSelectionService);

  readonly products$: Observable<Product[]> = this.productDataService.getProducts();
  selectedId: string | null = null;

  onSelect(id: string): void {
    this.selectedId = id;
    this.productSelectionService.select(id);
  }
}
