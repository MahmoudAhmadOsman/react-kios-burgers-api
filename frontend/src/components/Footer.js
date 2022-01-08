import React from "react";

const Footer = () => {
	const currentYear = new Date();

	return (
		<div className="footer">
			<p>
				&copy; Copyright {currentYear.getFullYear()}. KIOS APP. Alrights
				reserved.
			</p>
		</div>
	);
};

export default Footer;
