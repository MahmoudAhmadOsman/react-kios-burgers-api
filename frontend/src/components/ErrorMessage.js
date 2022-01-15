import React from "react";

function ErrorMessage() {
	return (
		<section className="ui container" style={{ marginTop: "160px" }}>
			<div className="ui warning message">
				<div className="header">Unable to display data!</div>
			</div>
		</section>
	);
}

export default ErrorMessage;
