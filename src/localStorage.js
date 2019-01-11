export const loadState = () => {
	try {
		// Load state from localStorage
		// And pass data to store in loading browser
		const savedState = localStorage.getItem('state')
		if (savedState === null) {
			return undefined
		}
		return JSON.parse(savedState)
	} catch (e) {
		return undefined
	}
}

export const saveState = (state) => {
	try {
		// Save state from store
		const savedState = JSON.stringify(state)
		localStorage.setItem('state', savedState)
	} catch (e) {

	}
}