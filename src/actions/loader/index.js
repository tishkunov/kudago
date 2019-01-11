
import * as t from '../../constants/loader'

// export const fetching = () => ({

// 	type: t.START_FETCHING,
// })


export const fetching = () => {
	console.log('fet')
	return {
type: t.START_FETCHING,
	}
}