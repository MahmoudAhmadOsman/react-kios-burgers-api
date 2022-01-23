import React from "react";

function ErrorMessage(props) {
	return (
		<section className="container" style={{ marginTop: "160px" }}>
			<div className="alert alert-danger" role="alert">
				<div className="h1">{props.children}</div>
			</div>
		</section>
	);
}

export default ErrorMessage;
