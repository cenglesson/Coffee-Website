// import React from 'react';
import ProductGrid from './components/ProductGrid'
import CartView from './components/CartView'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/HomeView'
import LoadingPage from './components/LoadingPage'

function App() {

    return (
        <div className="App">
            <main>
                <Switch>
                    <Route exact path="/">
                        <LoadingPage />
                    </Route>

                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/products">
                        <ProductGrid />
                    </Route>

                    <Route path="/cart">
                        <CartView />
                    </Route>
                </Switch>
            </main>
        </div >
    );
}

export default App;
