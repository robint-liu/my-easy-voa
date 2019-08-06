import { CHANGE_LIST } from './actionsTypes'

const defaultState = {
	"id":"",
	"title":"",
	"date":"",
	"source":"",
	"downloadNum":"",
	"img":"",
	"yinpin":"",
	"article":[],
	"secondFloor":"",
	"thirdFloor":"",
	"connectSource":[],
}
export default (state = defaultState, action) => {
	switch(action.type){
		case CHANGE_LIST:
			return {
				...action.value
			}
		default:
			return state
	}
} 