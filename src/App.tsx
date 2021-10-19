// import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actions, PRODUCTVIEW, CARTVIEW } from './features/viewReducer'
import { RootState } from './store'
import ProductGrid from './components/ProductGrid'
import CartView from './components/CartView'

import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Home from './components/HomeView'

function App() {

    const view = useSelector((state: RootState) => state.view)
    const cart = useSelector((state: RootState) => state.cart)

    let main = null
    if (view === PRODUCTVIEW) {
        main = <ProductGrid />
    }
    else if (view === CARTVIEW) {
        main = <CartView />
    }



    return (
        <div className="App">
            <header>
                <h1> Coffee Shop </h1>
                <nav>
                    <Link to="/" className="Button-Nav" > Home 🏠 </Link>
                    <Link to="/products" className="Button-Nav" > Products 📦</Link>
                    <Link to="/cart" className="Button-Nav" > Cart  🛒 </Link>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route exact path="/products">
                        <ProductGrid />
                    </Route>

                    <Route exact path="/cart">
                        <CartView />
                    </Route>
                </Switch>
            </main>
        </div >
    );
}

export default App;
