import { CHANGE_LIST }  from './actionType.js'
const defaultstate = {
	secondFloor:'',
	thirdFloor:'',
	data:[],
	pageMaxnum:20,
	pageMinnum:0
}

export default (state = defaultstate, action) => {
	switch(action.type) {
		case CHANGE_LIST:
			return {
				...action.value
			}
		default:
			return state
	}
}