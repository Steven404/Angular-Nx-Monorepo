import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@my-workspace/models';
import { ProductSelectionService } from '@my-workspace/services';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-product-details-entry',
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
})
export class RemoteEntry {
  private readonly productSelectionService = inject(ProductSelectionService);
  selectedProduct$: Observable<Product | undefined>;

  constructor() {
    this.selectedProduct$ = this.productSelectionService.selectedProduct$;
  }
}
