import { createAction, createReducer } from '@reduxjs/toolkit'

const PRODUCTVIEW = 'product view', CARTVIEW = 'cart view'

// Dessa actions finns - detta är vad användaren kan göra
const showProducts = createAction('show products')
const showCart = createAction('show cart')
const actions = { showProducts, showCart }

// Värdet på "view" när appen startar
const initialState = PRODUCTVIEW

// Reducers är alla sätt som "view" kan ändra värde
const viewReducer = createReducer(initialState, {
	[showProducts]: (state, action) => PRODUCTVIEW,
	[showCart]: (state, action) => CARTVIEW
})

export { actions, viewReducer }
