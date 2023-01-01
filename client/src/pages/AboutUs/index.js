import React from "react"
import '../../styles/aboutus/styles.css'
// import icon from "../../public/barbershopPhoto.webp"
function About() {

	return (
		<div className="about-us">
			{/* <img src={icon} /> */}
			<h1 className="titleA">About Us</h1>
			<p className="paragraph"> 
				Welcome to our barbershop! We are a team of skilled
				barbers with a passion for providing top notch grooming services
				to our clients.
			</p>
			<p className="paragraph">
				Our shop is a welcoming snd relaxing environment where you can sit 
				back and let us take care of all your grooming needs. From haircuts
				and styling to beard trims and hot towel shaves, we've got you covered.
			</p>
			<p className="paragraph">
				 We pride ourselves on using only the best products and tools to ensure 
				that every service is of the highest quality. Plus , our friendly and 
				professional staff will make sure you feel comfortable and satisfied with your experience.
			</p>
			<p className="paragraph"> Thank you for choosing our barbershop. We cant wait to serve you!</p>
		</div>
	);
}

export default About;