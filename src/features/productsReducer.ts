import { createAction, createReducer } from '@reduxjs/toolkit'
import { Product } from '../models/Product'

// Dessa actions finns - detta är vad användaren kan göra
// const ?? = createAction(??)
const actions = {  }


// Värdet på "products" när appen startar
const initialState: Product[] = []


const productsReducer = createReducer(initialState, {

})

export { actions, productsReducer }
