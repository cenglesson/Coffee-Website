import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { actions } from '../features/cartReducer'
import Nav from './NavView'


const CartView = () => {
	const dispatch = useDispatch()
	const cart = useSelector((state: RootState) => state.cart)

	let countMessage = 'The cart is empty'
	if (cart.length > 0) {
		countMessage = `You have ${cart.length} items in the cart.`
	}

	const handleRemove = (productName: string) => dispatch(actions.removeProduct(productName))

	// Summa kan räknas ut med reduce-funktionen
	let sum = 0
	cart.forEach(item => {
		sum += item.count * item.product.price
	})


	return (
		<div className="cart">
			<Nav />

			<h2> {countMessage} </h2>
			<div className="items">
				{cart.map(item => (
					<div key={item.product.name}>
						{item.product.name} ..... {item.count} ...... {item.product.price * item.count}
						<button className="trashCan" onClick={() => handleRemove(item.product.name)}> 🗑️ {cart.length} st</button>
					</div>
				))}
			</div>
			<div className="sumCart">
				Total sum: {sum} SEK.
			</div>
		</div>
	)
}

export default CartView
