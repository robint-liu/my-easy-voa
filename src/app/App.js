import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/'
import { View as CommonWrapper } from '../components/CommonWrapper/'
import 'whatwg-fetch'
import './reset.css'
import 'antd/dist/antd.css'
import styles from './style.mcss'

export default class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Provider store={store}>
				   <BrowserRouter>
				      <Route path='/' component={CommonWrapper}></Route>
				   </BrowserRouter>
				</Provider>
			</div>
		)
	}
}