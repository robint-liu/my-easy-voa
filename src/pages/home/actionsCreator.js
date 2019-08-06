import { CHANGE_LIST } from './actionsTypes'

export const getChangeListAction = (list) => ({
	type: CHANGE_LIST,
	value: list
})

export const getACtionList = () => { // 获取ajax,发送action
	return (dispatch) => {
		fetch('/api/home',
		{
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  mode: 'cors',
		  body: JSON.stringify({
		    name: 'home',
		  })
		})
		.then((res) => res.json())
		.then((res) => {
			dispatch(getChangeListAction(res.data.homeList))
		})
	}
}
