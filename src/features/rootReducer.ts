import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	// reducers go here
})

/*
"Wireframe webshop"
- produkter (lista)
- kundvagn
- användare, inloggningsstatus
- vilken sida (komponent) ska visas

+ products: Product[]  (interface för produkter)
+ cart: CartItem[]
+ user: User
+ view: string
*/


export { rootReducer }
