import React from "react";

const Loading = () => {
	return (
		<section className="ui container">
			<div className="ui segment">
				<div className="ui active inverted dimmer">
					<div className="ui text loader">Loading</div>
				</div>
				<p></p>
			</div>
		</section>
	);
};

export default Loading;
