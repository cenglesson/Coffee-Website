import { createAction, createReducer } from '@reduxjs/toolkit'
import { Product } from '../models/Product'
import { CartItem } from '../models/CartItem'

// Dessa actions finns - detta är vad användaren kan göra
const addProduct = createAction('add one item to cart')
const actions = { addProduct }


// Värdet på "cart" när appen startar
const initialState: CartItem[] = []


const cartReducer = createReducer(initialState, {
	// Lägga till en produkt
	[addProduct.toString()]: (state, action) => [ ...state, { product: { price: 100, name: 'Choklad', stock: 500, info: 'Vanlig choklad', picture: 'TODO' }, count: 1 } ]
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
