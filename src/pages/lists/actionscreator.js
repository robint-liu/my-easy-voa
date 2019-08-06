import { CHANGE_LIST }  from './actionType.js'
export const getactions = (value) => ({ // 当被调用方法的返回值是一个对象时，直接调用dispatch(action)
	type: CHANGE_LIST,
	value: value
})

export const getchangeactions = (id) => {
	return (dispatch) => { // 当被调用方法的返回值是函数时，需要手动向函数传递dispatch参数。
		fetch('/api/lists',
		{
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  mode: 'cors',
		  body: JSON.stringify({
		    name: 'lists',
		    id:id
		  })
		})
		.then((res) => res.json())
		.then((res) => {
			dispatch(getactions(res))
		})
	}
}

