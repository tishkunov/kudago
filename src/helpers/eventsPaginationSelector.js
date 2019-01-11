export const eventsSelector = (state) => 
	state.events.events.filter((item,i) => i < state.pagination.currentPage*10 && (state.pagination.currentPage-1)*10 <= i)
 