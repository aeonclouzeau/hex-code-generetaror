import "./Color.css";

const Color = (hex) => {
	console.log(hex.hex);
	let backgroundColor = hex.hex;
	return (
		<div className="color-bar" style={{ backgroundColor }}>
			<p>{hex.hex}</p>
		</div>
	);
};

export default Color;
