import React, { Component } from 'react'
import { Row, Col, Menu } from 'antd'
import { Route, Switch ,Link } from 'react-router-dom'
import Footer from './footer/Footer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actionsCreator'
import { View as Home } from '../../pages/home/'
import { View as Details } from '../../pages/details/'
import { View as List } from '../../pages/lists/'
import './style.css'

class CommonWrapper extends Component {
	render() {
		return (
		  <div className='common'>
		    <Row className='logo'>
		      <Col span={6}><Link to='/'><img className='common-logo' src={require('../../static/imgs/newlogo.png')} alt="" /></Link></Col>
		      <Col span={18}>
		      	<Menu mode="horizontal">
		      		{
						this.props.list.map((value,index) => {
							return (
								<Menu.Item key={value.id}>
						          	<Link to="/"> {value.title} </Link>
						        </Menu.Item>
							)
						})
		      		}
			    </Menu>
		      </Col>
		    </Row>
		     <Row className='menu'>
		      <Col span={3} className='normalSpeed'>
		      	 	<h2><Link to="">常速英语</Link></h2>
		      	 	<ul>
		      	 		<li><Link to="/usuaenglish/audio">音频</Link></li>
		      	 		<li><Link to="">视频</Link></li>
		      	 		<li><Link to="">翻译</Link></li>
		      	 	</ul>
		      </Col>
		      <Col span={9}  className='slowSpeed'>
		      	<h2><Link to="">慢速英语</Link>(中级)</h2>
		      	 	<ul>
		      	 		<li><Link to="/details/123">科技报道</Link></li>
		      	 		<li><Link to="">词汇掌故</Link></li>
		      	 		<li><Link to="">美国故事</Link></li>
		      	 		<li><Link to="">时事新闻</Link></li>
		      	 		<li><Link to="">经济报道</Link></li>
		      	 		<li><Link to="">建国史话</Link></li>
		      	 		<li><Link to="">教育报道</Link></li>
		      	 		<li><Link to="">自然探索</Link></li>
		      	 		<li><Link to="">健康报道</Link></li>
		      	 		<li><Link to="">美国万花筒</Link></li>
		      	 		<li><Link to="">科学动态</Link></li>
		      	 		<li><Link to="">农业报道</Link></li>
		      	 		<li><Link to="">美国专栏</Link></li>
		      	 		<li><Link to="">美国人物</Link></li>
		      	 	</ul>
		      </Col>
		      <Col span={12} className='englishTrain'>
		      	<h2><Link to="">英语教学</Link>(初级)</h2>
		      	 	<ul>
		      	 		<li><Link to="">流行美语</Link></li>
		      	 		<li><Link to="">美语三级跳</Link></li>
		      	 		<li><Link to="">美国习惯用语</Link></li>
		      	 		<li><Link to="">学个词</Link></li>
		      	 		<li><Link to="">AS IT IS</Link></li>
		      	 		<li><Link to="">体育美语</Link></li>
		      	 		<li><Link to="">美语怎么说</Link></li>
		      	 		<li><Link to="">商务礼节美语</Link></li>
		      	 		<li><Link to="">双语新闻</Link></li>
		      	 		<li><Link to="">美语咖啡屋</Link></li>
		      	 		<li><Link to="">中级美语</Link></li>
		      	 		<li><Link to="">美语训练班</Link></li>
		      	 		<li><Link to="">VOA每日一课</Link></li>
		      	 		<li><Link to="">OMG美语</Link></li>
		      	 		<li><Link to="">VOA相关资料</Link></li>
		      	 	</ul>
		      </Col>
		    </Row>
		    <div>{this.props.children}</div>
			<div>
		    	<div>
		    		<Switch>
		    			 <Route exact path='/' component={Home}></Route>
				      	 <Route path='/details/:id' component={Details}></Route>
				      	 <Route path='/usuaenglish/:id' component={List}></Route>
		    		</Switch>
		    	</div>
		    </div>
		    <Footer />
		  </div>
		)
	}

	componentDidMount() {
		if (!this.props.list.length) {
			this.props.actions.getChangeListinfo();
		}
	}
}

const mapState = (state) => ({
	...state.common			
})

const mapDispatch = (dispatch) => ({
	actions:bindActionCreators(actions, dispatch)
})

export default connect(mapState, mapDispatch)(CommonWrapper)