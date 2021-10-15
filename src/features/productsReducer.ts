import { /*createAction,*/ createReducer } from '@reduxjs/toolkit'
import { Product } from '../models/Product'

// Dessa actions finns - detta är vad användaren kan göra
// const ?? = createAction(??)
const actions = {  }


// Värdet på "products" när appen startar
const initialState: Product[] = [
	{ price: 100, name: 'Choklad', stock: 500, info: 'Vanlig choklad', picture: 'TODO' },
	{ price: 549, name: 'Post Malone', stock: 3, info: 'Fantastiskt bra musik', picture: '' },
	{ price: 333, name: 'Kind of blue', stock: 5, info: 'Miles David: Kind of blue', picture: '' },
	{ price: 35, name: 'Chokladkakor', stock: 2000, info: 'Goda kakor', picture: '' }
]


const productsReducer = createReducer(initialState, {

})

export { actions, productsReducer }

/*
export interface Product {
	price: number;
	name: string;
	stock: number;
	info: string;
	picture: string;  // URL to image
}
*/
