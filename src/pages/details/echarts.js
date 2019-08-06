import React, { Component } from 'react'
import echarts from 'echarts'
import './style.css'

export default class Echarts extends Component {
	constructor(props) {
		super(props)
		this.option = {
            title: {
                text: 'ECharts 销量'
            },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
	}

	render() {
		return(
			<div className='detailsmain_echarts' ref="detailsmainecharts"></div>
		)
	}

	componentDidMount () {
		this.detailsmainecharts = this.refs.detailsmainecharts
		this.mychart = echarts.init(this.detailsmainecharts)
		this.mychart.setOption(this.option)
	}
}