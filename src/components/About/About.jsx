import React from 'react'
import Cart from './Cart/Cart'
import { DataAbout } from '../../data'
import '../About/About.css'


const About = () => {
	return (
		<div className='about'>
			<h2 className="about_title">
				What makes our brand different
			</h2>
			<div className="cart_blocks">
			{
				DataAbout.map(item => (
					<Cart
						icon={item.icon}
						title={item.title}
						desc={item.desc}
					/>
				))}
			</div>

			
		</div>
	)
}

export default About