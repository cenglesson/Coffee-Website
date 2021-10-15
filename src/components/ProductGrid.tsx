import { useSelector } from 'react-redux'
import { RootState } from '../store'

const ProductGrid = () => {
	const products = useSelector((state: RootState) => state.products)

	return (
		<div className="product-grid">
			{products.map(p => (
				<div key={p.name} className="product-card">
					<h3> {p.name} </h3>
					{p.info}
				</div>
			))}
		</div>
	)
}

export default ProductGrid
