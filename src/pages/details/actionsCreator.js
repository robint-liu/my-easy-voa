import { CHANGE_LIST } from './actionsTypes'

export const getChangeListAction = (value) => ({
	type: CHANGE_LIST,
	value: value
})

export const getACtionData = (id) => {
	return (dispatch) => {
		fetch('/api/details',
		{
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  mode: 'cors',
		  body: JSON.stringify({
		    name: 'details',
		    id:id
		  })
		})
		.then((res) => res.json())
		.then((res) => {
			dispatch(getChangeListAction(res.data))
		})
	}
}