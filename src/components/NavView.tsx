import { Link } from 'react-router-dom';
import '../App.css';


const Nav = () => {


    return (
        <div>
            <header>
                <h1> Coffee Shop </h1>
            </header>
            <Link to="/" className="Button-Nav" > Home 🏠 </Link>
            <Link to="/products" className="Button-Nav" > Products 📦</Link>
            <Link to="/cart" className="Button-Nav" > Cart  🛒 </Link>

        </div>


    )
}

export default Nav