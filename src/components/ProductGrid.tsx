import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { actions } from '../features/cartReducer'
import { Product } from '../models/Product'

const ProductGrid = () => {
	const dispatch = useDispatch()
	const products = useSelector((state: RootState) => state.products)

	const addToCart = (p: Product) => dispatch(actions.addProduct(p))

	return (
		<div className="product-grid">
			{products.map(p => (
				<div key={p.name} className="product-card">
					<h3> {p.name} </h3>
					{p.info}
					<br/>
					<button onClick={() => addToCart(p)}> Add to cart </button>
				</div>
			))}
		</div>
	)
}

export default ProductGrid
