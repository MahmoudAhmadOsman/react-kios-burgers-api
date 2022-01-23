import React from "react";

const Loading = () => {
	return (
		<section className="container">
			<div className="row">
				<div className="col mt-5 d-inline-flex justify-content-center w-100 mx-auto">
					<i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
				</div>
			</div>
		</section>
	);
};

export default Loading;
