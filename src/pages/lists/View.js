import React, { Component } from 'react'
import { List, Pagination, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actionscreator.js'
import './style.css'

class Lists extends Component {
	render() {
		return(
			<div className="lists">
        <div className="listsnews">
          <Breadcrumb separator=">" className="listsNav">
            <Breadcrumb.Item>VOA</Breadcrumb.Item>
            <Breadcrumb.Item href={'/'+this.props.secondFloor}>{this.props.secondFloor}</Breadcrumb.Item>
            <Breadcrumb.Item href={'/'+this.props.thirdFloor+'/'+this.props.thirdFloor}>{this.props.thirdFloor}</Breadcrumb.Item>
            <Breadcrumb.Item href="">  </Breadcrumb.Item>
          </Breadcrumb>
          <div className="lists_main">
  			    <List size="small" bordered className="listsitem">
                {
                  this.props.data.slice(this.props.pageMinnum, this.props.pageMaxnum).map((value, index) => {
                    return (
                      <List.Item key={value.id}><Link to={value.link}>{value.titlefont}<span style={{marginLeft:"10px"}}>{value.pubdate}</span></Link></List.Item>
                    )
                  })
                }
            </List>
  			    <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} total={this.props.data.length} defaultPageSize={24} onChange={this.onchange.bind(this)} className="Pagination"/>
          </div>
        </div>
		  </div>
		)
	}


  componentDidMount() {
    if (!this.props.data.length) {
      this.props.actions.getchangeactions(this.props.match.params.id)
    }
     // Redux中的bindActionCreators，是通过dispatch将action包裹起来，这样可以通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用）。
  }

  onchange (page, pageSize) {
     this.pageMaxnum = page*pageSize
     this.pageMinnum = (page-1)*pageSize
     this.pagenum = {
      pageMinnum:this.pageMinnum,
      pageMaxnum:this.pageMaxnum,
      data:this.props.data,
      secondFloor:this.props.secondFloor,
      thirdFloor:this.props.thirdFloor
     }
     this.props.actions.getactions(this.pagenum)
  }
}

  const mapstate = (state) => ({
      ...state.lists // 将state中的数据映射到当前组件的props中。
    })

  const mapdispatch = (dispatch) => ({
      actions:bindActionCreators(actions, dispatch) // 绑定给actions两个流程：创建action, 发送action(这两者在这里没有执行,需要调用执行。)   
    })

  export default connect(mapstate, mapdispatch)(Lists)