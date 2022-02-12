import React from "react";

const Footer = () => {
	const currentYear = new Date();

	return (
		<div className="footer">
			<p>
				&copy; Copyright {currentYear.getFullYear()}. KIOS APP. Alrights
				reserved. Build by <i>Mahmoud Osman</i>
			</p>
		</div>
	);
};

export default Footer;
