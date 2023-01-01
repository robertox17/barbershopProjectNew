import { Link } from 'react-router-dom';
import '../../styles/home/styles.css'
import icon from '../../public/Logo.png'


function Home() {
	return (
		<div className='Homepage'>
		<section className='block'>
		<img className='rzr' src={icon}/>
		<Link to="/appointments" className='bookBtn'>Book Now</Link>
		</section>
		</div>
	);
}

export default Home;