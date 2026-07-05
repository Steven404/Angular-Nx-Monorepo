import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '@my-workspace/models';
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    description:
      'Over-ear headphones with active noise cancellation and 30-hour battery life.',
    image: 'https://picsum.photos/seed/headphones/400/400',
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 249.99,
    description:
      'Fitness tracking, heart-rate monitoring, and GPS in a sleek aluminum case.',
    image: 'https://picsum.photos/seed/smartwatch/400/400',
    category: 'Electronics',
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 24.99,
    description:
      'Soft, breathable crew-neck tee made from 100% organic cotton.',
    image: 'https://picsum.photos/seed/tshirt/400/400',
    category: 'Clothing',
  },
  {
    id: '4',
    name: 'Slim Fit Denim Jeans',
    price: 59.99,
    description:
      'Classic five-pocket jeans with a modern slim fit and stretch denim.',
    image: 'https://picsum.photos/seed/jeans/400/400',
    category: 'Clothing',
  },
  {
    id: '5',
    name: 'Stainless Steel Water Bottle',
    price: 19.99,
    description:
      'Insulated 32 oz bottle keeps drinks cold for 24 hours or hot for 12 hours.',
    image: 'https://picsum.photos/seed/bottle/400/400',
    category: 'Home & Kitchen',
  },
  {
    id: '6',
    name: 'Ceramic Coffee Mug Set',
    price: 34.99,
    description:
      'Set of four handcrafted mugs with a matte glaze finish, dishwasher safe.',
    image: 'https://picsum.photos/seed/mugs/400/400',
    category: 'Home & Kitchen',
  },
  {
    id: '7',
    name: 'LED Desk Lamp',
    price: 44.99,
    description:
      'Adjustable arm lamp with three color temperatures and USB charging port.',
    image: 'https://picsum.photos/seed/lamp/400/400',
    category: 'Home & Kitchen',
  },
  {
    id: '8',
    name: 'Running Shoes',
    price: 89.99,
    description:
      'Lightweight mesh upper with responsive cushioning for daily runs.',
    image: 'https://picsum.photos/seed/shoes/400/400',
    category: 'Footwear',
  },
  {
    id: '9',
    name: 'Leather Crossbody Bag',
    price: 129.99,
    description:
      'Genuine leather bag with adjustable strap and multiple interior pockets.',
    image: 'https://picsum.photos/seed/bag/400/400',
    category: 'Accessories',
  },
  {
    id: '10',
    name: 'Portable Bluetooth Speaker',
    price: 49.99,
    description: 'Waterproof speaker with 360° sound and 12-hour playtime.',
    image: 'https://picsum.photos/seed/speaker/400/400',
    category: 'Electronics',
  },
  {
    id: '11',
    name: 'Yoga Mat',
    price: 29.99,
    description:
      'Non-slip 6mm mat with carrying strap, ideal for yoga and pilates.',
    image: 'https://picsum.photos/seed/yogamat/400/400',
    category: 'Sports & Outdoors',
  },
  {
    id: '12',
    name: 'Camping Backpack 40L',
    price: 99.99,
    description:
      'Durable hiking pack with rain cover, hydration sleeve, and hip belt.',
    image: 'https://picsum.photos/seed/backpack/400/400',
    category: 'Sports & Outdoors',
  },
  {
    id: '13',
    name: 'The Art of Programming',
    price: 39.99,
    description:
      'A comprehensive guide to software design patterns and best practices.',
    image: 'https://picsum.photos/seed/book1/400/400',
    category: 'Books',
  },
  {
    id: '14',
    name: 'Modern Web Development',
    price: 44.99,
    description:
      'Hands-on introduction to building scalable web applications with TypeScript.',
    image: 'https://picsum.photos/seed/book2/400/400',
    category: 'Books',
  },
  {
    id: '15',
    name: 'Mechanical Keyboard',
    price: 119.99,
    description:
      'RGB backlit keyboard with Cherry MX switches and aluminum frame.',
    image: 'https://picsum.photos/seed/keyboard/400/400',
    category: 'Electronics',
  },
  {
    id: '16',
    name: 'Wireless Mouse',
    price: 34.99,
    description:
      'Ergonomic wireless mouse with precision sensor and long battery life.',
    image: 'https://picsum.photos/seed/mouse/400/400',
    category: 'Electronics',
  },
  {
    id: '17',
    name: 'Scented Candle Set',
    price: 27.99,
    description:
      'Set of three soy wax candles in lavender, vanilla, and eucalyptus scents.',
    image: 'https://picsum.photos/seed/candles/400/400',
    category: 'Home & Kitchen',
  },
];

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  // In a real world app I'd have a public readonly products signal (products: Product[])
  // and a fetchProducts() method that would fetch the products from the API and set the products array
  // the fetchProducts() would be called in the ngOnInit() of the component that needs the products
  // and I'd also have a loading boolean that would be consumed by the component to show a loading spinner

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS).pipe(delay(300));
  }

  getById(id: string): Observable<Product | undefined> {
    return of(PRODUCTS.find((p) => p.id === id));
  }
}
