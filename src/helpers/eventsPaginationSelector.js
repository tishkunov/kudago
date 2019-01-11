export const eventsSelector = (state) => 
	state.events.events.filter((item,i) => i < state.events.currentPage*10 && (state.events.currentPage-1)*10 <= i)
 