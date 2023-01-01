import { Link } from 'react-router-dom';
import '../../styles/navbar/styles.css'
// import icon from '../../public/barbershop.png'

function Navbar() {
	return (
		<nav className='nav'>
			
			<Link to="/">Home</Link>
			{/* <Link to="/onlineshop">Online Shop</Link> */}
			<a href="/login">Barbershop</a>
			<Link to="/about">About Us</Link>
			<Link to="/contact">Contact</Link>
		
		</nav>
	);	
}

export default Navbar;