import { /*createAction,*/ createReducer } from '@reduxjs/toolkit'
import { Product } from '../models/Product'

// Dessa actions finns - detta är vad användaren kan göra
// const ?? = createAction(??)
const actions = {}


// Värdet på "products" när appen startar
const initialState: Product[] = [
	{ price: 46, name: 'Cappuccino', stock: 500, info: 'Espresso m. mjölk', picture: 'https://i.pinimg.com/564x/21/03/4b/21034b988db9737ce6992a1a1a9655ea.jpg' },
	{ price: 55, name: 'Café Latte', stock: 3, info: 'hälften mjölk och hälften espresso', picture: 'https://i.pinimg.com/564x/b8/e1/2b/b8e12b87c2282297901aaa6fd973099f.jpg' },
	{ price: 25, name: 'Espresso', stock: 5, info: 'Only good beans', picture: 'https://i.pinimg.com/564x/3e/e1/99/3ee19904e689045f9959d3b4cd614dff.jpg' },
	{ price: 28, name: 'Choco', stock: 2000, info: 'Choklad från Belgien', picture: 'https://i.pinimg.com/564x/eb/44/fe/eb44feaa109c36af64e13db4f5ce0314.jpg' },
	{ price: 35, name: 'Americano', stock: 4, info: 'Klassiskt och gott', picture: 'https://i.pinimg.com/564x/3b/28/cb/3b28cbd083ba7d83028b6ebe381fcdf5.jpg' },
	{ price: 35, name: 'Chai Latte', stock: 8, info: 'Julstämningen är på hög nivå', picture: 'https://i.pinimg.com/564x/65/02/82/6502822a77334bf853794f23dfe35871.jpg' },
	{ price: 40, name: 'Cortado', stock: 300, info: 'hmm... maybe..', picture: 'https://i.pinimg.com/564x/de/78/cd/de78cdd18bcf68d68719b2eb1161c4c9.jpg' },
	{ price: 45, name: 'Ice Latte', stock: 150, info: 'Ice Ice baby', picture: 'https://i.pinimg.com/564x/4b/46/09/4b4609663e5cc925ff8b56c16a4043ba.jpg' },
	{ price: 25, name: 'Coffee', stock: 5, info: 'Only good beans', picture: 'https://i.pinimg.com/564x/3e/e1/99/3ee19904e689045f9959d3b4cd614dff.jpg' }

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
