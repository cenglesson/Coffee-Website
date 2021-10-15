import { Product } from './Product'

export interface CartItem {
	product: Product;
	count: number;
	// totalCost - räknas ut mha product.price och count
}
