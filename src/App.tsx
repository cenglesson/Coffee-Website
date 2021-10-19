// import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actions, PRODUCTVIEW, CARTVIEW } from './features/viewReducer'
import { RootState } from './store'
import ProductGrid from './components/ProductGrid'
import CartView from './components/CartView'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Home from './components/HomeView'
import Nav from './components/NavView'

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
            <main>
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/products">
                        <Nav />
                        <ProductGrid />
                    </Route>

                    <Route exact path="/cart">
                        <Nav />
                        <CartView />
                    </Route>
                </Switch>
            </main>
        </div >
    );
}

export default App;
