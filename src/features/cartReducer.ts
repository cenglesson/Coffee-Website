import { createAction, createReducer } from '@reduxjs/toolkit'
import { Product } from '../models/Product'
import { CartItem } from '../models/CartItem'

// Dessa actions finns - detta är vad användaren kan göra
const addProduct = createAction<Product>('add one item to cart')
const removeProduct = createAction<string>('remove a product from cart')
const actions = { addProduct, removeProduct }


// Värdet på "cart" när appen startar
const initialState: CartItem[] = []


const cartReducer = createReducer(initialState, {
	// Lägga till en produkt
	// [addProduct.toString()]: (state, action) => [ ...state, { product: action.payload, count: 1 } ],
	[addProduct.toString()]: (state, action) => {
		const newProduct: Product = action.payload
		const oldItem = state.find(item => item.product.name === newProduct.name)
		if( oldItem ) {
			// Produkten finns redan i kundvagnen
			const newItem = { product: oldItem.product, count: oldItem.count + 1 }
			// Alternativ 1: skapa en ny array manuellt och ändra i den
			// const newCart = [...state]
			// const indexOfOldItem = newCart.findIndex(item => item.product.name === newProduct.name)
			// newCart[indexOfOldItem] = newItem;
			// return newCart;

			// Alternativ 2: map-funktionen
			return state.map(item => {
				if( item.product.name !== newProduct.name ) {
					return item;
				} else {
					return newItem;
				}
			});
			// Alternativ 3: map-funktionen, mera kompakt
			// return state.map(item => (item.product.name !== newProduct.name) ? item : newItem);
		} else {
			// Produkten finns inte
			return [ ...state, { product: action.payload, count: 1 } ]
		}
	},

	// Ta bort produkten med ett visst namn
	[removeProduct.toString()]: (state, action) => state.filter(item => item.product.name !== action.payload)
})

/*
export interface Product {
	price: number;
	name: string;
	stock: number;
	info: string;
	picture: string;  // URL to image
}
*/
export { actions, cartReducer }
