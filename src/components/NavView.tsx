import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import { RootState } from '../store';



const Nav = () => {
    const cart = useSelector((state: RootState) => state.cart)



    return (
        <div>
            <header>
                <h1> Coffee Shop </h1>
            </header>
            <div className="Nav">
                <Link to="/" className="Button-Nav" > Home 🏠 </Link>
                <Link to="/products" className="Button-Nav" > Products 📦</Link>
                <Link to="/cart" className="Button-Nav" >Cart 🛒 </Link>
                <div className="Button-Amount">{cart.length}</div>
            </div>

        </div>


    )
}

export default Nav