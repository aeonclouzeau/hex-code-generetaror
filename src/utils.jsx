function random_hex() {
	const hex_chars = "0123456789abcdef";
	return Array.from(
		{ length: 6 },
		() => hex_chars[Math.floor(Math.random() * 16)]
	).join("");
}

export default random_hex;
