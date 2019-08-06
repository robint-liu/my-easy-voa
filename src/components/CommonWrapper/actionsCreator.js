import { CHANGE_LIST } from './actionsTypes'

export const getChangeListAction = (list) => ({
	type: CHANGE_LIST,
	value: list
})

export const getChangeListinfo = () => {
	return (dispatch) => {
		fetch('/api/common',
		{
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  mode: 'cors',
		  body: JSON.stringify({
		    name: 'common',
		  })
		})
		.then((res) => res.json())
		.then((res) => {
			dispatch(getChangeListAction(res.data.list))
		})
	}
}
