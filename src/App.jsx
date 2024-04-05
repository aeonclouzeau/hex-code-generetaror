import random_hex from "./utils";
import Color from "./Color";
import "./App.css";

function App() {
	return (
		<div>
			<Color hex={random_hex()} />
			<Color hex={random_hex()} />
			<Color hex={random_hex()} />
			<Color hex={random_hex()} />
			<Color hex={random_hex()} />
		</div>
	);
}

export default App;
