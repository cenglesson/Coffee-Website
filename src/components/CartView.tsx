import { useSelector } from 'react-redux'
import { RootState } from '../store'

const CartView = () => {
	const cart = useSelector((state: RootState) => state.cart)

	let countMessage = 'The cart is empty'
	if( cart.length > 0 ) {
		countMessage = `You have ${cart.length} items in the cart.`
	}

	return (
		<div className="cart">
			<h2> {countMessage} </h2>
			<div className="items">
				{cart.map(item => (
					<div key={item.product.name}>
						{item.product.name} ..... {item.count}
					</div>
				))}
			</div>
		</div>
	)
}

export default CartView
