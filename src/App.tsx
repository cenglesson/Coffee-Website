// import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './features/viewReducer'

import './App.css';

function App() {
    const dispatch = useDispatch()
    const view = useSelector(state => state.view)

    const handleShowProducts = () => dispatch(actions.showProducts())
    const handleShowCart = () => dispatch(actions.showCart())

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
            Visa antingen product view eller cart view.
        </main>
        </div>
    );
}

export default App;
