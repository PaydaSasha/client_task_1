export default function filterStringFromQuotes(str) {
	return str
		.replace(/&quot;/g, `'`)
		.replace(/&#039;/g, `'`)
		.replace(/&#039;/g, `'`)
}
