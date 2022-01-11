import React from "react";

function ErrorMessage() {
	return (
		<section className="ui container">
			<div className="ui warning message">
				<i className="close icon"></i>
				<div className="header">Unable to display data!</div>
			</div>
		</section>
	);
}

export default ErrorMessage;
