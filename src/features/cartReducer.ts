import { createAction, createReducer } from '@reduxjs/toolkit'
import { Product } from '../models/Product'
import { CartItem } from '../models/CartItem'

// Dessa actions finns - detta är vad användaren kan göra
const addProduct = createAction<Product>('add one item to cart')
const actions = { addProduct }


// Värdet på "cart" när appen startar
const initialState: CartItem[] = []


const cartReducer = createReducer(initialState, {
	// Lägga till en produkt
	[addProduct.toString()]: (state, action) => [ ...state, { product: action.payload, count: 1 } ]
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
