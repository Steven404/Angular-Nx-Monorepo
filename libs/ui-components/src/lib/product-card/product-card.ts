import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from '@my-workspace/models';

@Component({
  selector: 'lib-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Input() selected = false;

  @Output() selectProduct = new EventEmitter<string>();
}
