import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { List, Avatar } from 'antd';
import  * as actions from './actionsCreator'
import { Link } from 'react-router-dom'
import './style.css'

class Home extends Component { // PureComponent 纯组件：自动执行shouldComponentUpdate()进行逻辑判断，进而是否指执行render()。
	render() {
		return (
			<div className='home'>
				<List
				className='list'
				style={{marginTop:'5px'}}
				bordered={true}
			    itemLayout="horizontal"
			    dataSource={this.props.list}
			    renderItem={item => (
			      <List.Item>
			        <List.Item.Meta
			          avatar={<Avatar src={require('../../static/imgs/articleImg.jpg')} />}
			          	title={<Link to={item.link}><span style={{color:item.color}}>{item.describe}</span><span className='title'>{item.title}</span><span className='pubdate'>{item.pubdate}</span></Link>}
			        />
			      </List.Item>
			    )}
			  />
	      	<div className='homeUl'>
	      		<h2>VOA友情链接</h2>
				    <ul>
				    	<li><a>小马过河</a></li>
				    	<li><a>雅思培训</a></li>
				    	<li><a>留学机构</a></li>
				    	<li><a>出国语言培训</a></li>
				    	<li><a>大学生</a></li>
				    	<li><a>人人听力网</a></li>
				    	<li><a>英语口语</a></li>
				    	<li><a>英文小说网</a></li>
				    	<li><a>口译</a></li>
				    	<li><a>美国之音</a></li>
				    	<li><a>给力英语网</a></li>
				    	<li><a>中小学教育</a></li>
				    	<li><a>翻译资格考试</a></li>
				    	<li><a>GCT</a></li>
				    	<li><a>英语六级</a></li>
				    	<li><a>英语学习网站</a></li>
				    	<li><a>英蕊幼儿英语</a></li>
				    	<li><a>手抄报</a></li>
				    	<li><a>简单学习网</a></li>
				    	<li><a>哈尔滨英语</a></li>
						<li><a>英语口语培训</a></li>
				    	<li><a>在线英语培训</a></li>
				    	<li><a>英语培训</a></li>
				    	<li><a>韩语学习网</a></li>
				    	<li><a>职称英语考试</a></li>
				    	<li><a>家教</a></li>
						<li><a>在线英语培训</a></li>
				    </ul>
			    </div>
		  </div>
			)
		}
	componentDidMount() {
		if (!this.props.list.length) {
			this.props.actions.getACtionList()
		}
	}
  }
  
const mapState = (state) => ({
	list: state.home.list
})

const mapDispatch = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})

export default connect(mapState, mapDispatch)(Home)