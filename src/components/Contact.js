import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './Contact.css';

function Contact() {
	return (
		<div>
			<div className="container">
				<div className="first-layer">
					<h1>Contact Us</h1>
					<div className="input-section">
						<div className="left-section">
							<input type="text" placeholder="Name" />
							<input type="email" placeholder="Email" />
							<input type="tel" placeholder="Phone" />
						</div>
						<div className="right-section">
							<textarea placeholder="Message" />
						</div>
					</div>
					<button type="submit">Submit</button>
				</div>
				<div className="second-layer">
					<div className="map-container">
						<iframe
							title="Google Map Preview"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435181.11373642654!2d-74.25986499544389!3d40.69714941975367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594b9c5a6c1d%3A0xa2f9a0bcb4f6b5b2!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1653464850583!5m2!1sen!2sus"
							width="400"
							height="300"
							style={{ border: 0 }}
							allowfullscreen=""
							loading="lazy"
						/>
					</div>
				</div>

                <Footer />
				
			</div>
		</div>
	);
}

export default Contact;
