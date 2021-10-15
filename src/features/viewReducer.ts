import { createAction, createReducer } from '@reduxjs/toolkit'

const PRODUCTVIEW = 'product view', CARTVIEW = 'cart view'

// Dessa actions finns - detta är vad användaren kan göra
const showProducts = createAction('show products')
const showCart = createAction('show cart')
const actions = { showProducts, showCart }


// Värdet på "view" när appen startar
const initialState = PRODUCTVIEW

// Reducers är alla sätt som "view" kan ändra värde
// Egentligen har alla reducers två parametrar (state och action) men vi behöver inte dem här.
const viewReducer = createReducer(initialState, {
	[showProducts.toString()]: () => PRODUCTVIEW,
	[showCart.toString()]: () => CARTVIEW
})

export { actions, viewReducer }
