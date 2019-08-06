import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import './style.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actionsCreator'
import Yinpin from './yinpin'
import Echarts from './echarts'

class Details extends Component {

	render () {
		return (
			<div className='details'>
			  <Breadcrumb separator=">" className="detailsNav">
			    <Breadcrumb.Item>VOA</Breadcrumb.Item>
			    <Breadcrumb.Item href={'/'+this.props.secondFloor}>{this.props.secondFloor}</Breadcrumb.Item>
			    <Breadcrumb.Item href={'/'+this.props.secondFloor+'/'+this.props.thirdFloor}>{this.props.thirdFloor}</Breadcrumb.Item>
			    <Breadcrumb.Item href="">  </Breadcrumb.Item>
			  </Breadcrumb>
			<div>
			  <div className='detailsHeader'>
					<h1>{this.props.title}</h1>
					<p>
						<small>时间：{this.props.date}</small>
						<small>来源：{this.props.source}</small>
						<small>收听下载次数：{this.props.downloadNum}次</small>
					</p>
			  </div>
			  <div className='detailsmain'>
			  	<Yinpin content={this.props.yinpin} />
				<Echarts content={this.props} />
					{
						this.props.article.slice(0,3).map((value, index) => {
							return (
								<p key={index}>{value}</p>
								)			
						})
					}
					<p><img src={this.props.img} alt=""></img></p>
					{
						this.props.article.slice(3).map((value, index) => {
							return(
								<p key={index}>{value}</p>
								)
						})
					}
			  </div>
			  <div className='detailsfooter'>
			  	<h2 className='detailsfooter_header'>VOA内容相关链接 :</h2>
			  	<ul className='detailsfooter_main'>
			  		{
			  			this.props.connectSource.map((value, index) => {
			  				return (
			  				<li key={index}><a href={value.connectLink}>{value.connectTitle}</a></li>
			  				)
			  			})
			  		}
			  	</ul>
			  </div>
			</div>
		  </div>
		)
	}

	componentDidMount() {
		this.props.actions.getACtionData(this.props.match.params.id);
	}
}

const mapState = (state) => ({...state.details}) // 第一次渲染前已经执行

const mapDispatch = (dispach) => {
	return{
		actions: bindActionCreators(actions, dispach) // 第一次渲染前已经执行
	}
}
export default connect(mapState, mapDispatch)(Details)