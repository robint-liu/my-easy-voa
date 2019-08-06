import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as commonReducer }  from '../components/CommonWrapper/'
import { reducer as homeReducer } from '../pages/home/'
import { reducer as detailsReducer } from '../pages/details/'
import { reducer as listsReducer } from '../pages/lists/'
 export default combineReducers({
 	common: commonReducer,
 	home: homeReducer,
 	details: detailsReducer,
 	lists: listsReducer,
 	routing: routerReducer
 })