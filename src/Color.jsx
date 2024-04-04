import random_hex from "./utils";

const Color = () => {
	return (
		<div color={random_hex}>
			<p>#{random_hex()}</p>
		</div>
	);
};

export default Color;
