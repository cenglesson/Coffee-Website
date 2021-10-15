// import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actions, PRODUCTVIEW, CARTVIEW } from './features/viewReducer'
import { RootState } from './store'
import ProductGrid from './components/ProductGrid'
import CartView from './components/CartView'

import './App.css';

function App() {
    const dispatch = useDispatch()
    const view = useSelector((state: RootState) => state.view)
    const cart = useSelector((state: RootState) => state.cart)


    const handleShowProducts = () => dispatch(actions.showProducts())
    const handleShowCart = () => dispatch(actions.showCart())

    let main = null
    if( view === PRODUCTVIEW ) {
        main = <ProductGrid />
    }
    else if( view === CARTVIEW ) {
        main = <CartView />
    }

    return (
        <div className="App">
        <header>
            <h1> Wireframe webshop </h1>
            <nav>
                <button onClick={handleShowProducts}> Show products </button>
                <button onClick={handleShowCart}> Show cart </button>
            </nav>
        </header>
        <main>
            {main}
            <br/>
            Vald vy: {view}
            <br/>
            Cart has {cart.length} items.
        </main>
        </div>
    );
}

export default App;
