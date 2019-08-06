import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css';

class Yinpin extends Component {
	constructor (props) {
		super(props)
		this.handleplayClick = this.handleplayClick.bind(this)
		this.handlestopClick = this.handlestopClick.bind(this)
		this.handletimeUpdate = this.handletimeUpdate.bind(this)
		this.handleinputbtn = this.handleinputbtn.bind(this)
		this.handleloopbtn = this.handleloopbtn.bind(this)
	}
	render() {
		return(
			<div className='detailsmain_audio'>
				<audio id="video" preload="true" ref="video" onCanPlay={this.handlecanplay} onTimeUpdate={this.handletimeUpdate}>
					<source id="source" ref="source" type="audio/mpeg" src={this.props.yinpin}></source>
					该浏览器不支持audio标签
				</audio>
				<div id="btnbox" style={{position:"relative"}}>
					<button className="button playbtn js-playbtn" ref="playbtn" onClick={this.handleplayClick}>播放</button>
					<button className="button stopbtn js-stopbtn" ref="stopbtn" onClick={this.handlestopClick}>停止</button>
					<div className="time_data" style={{display: "none",position:"absolute",top:"-50%",left:"27%",color:"#000",fontSize:"12px"}} ref="timedata">
						<span id="nowTime" ref="nowtime">0</span> 
						<span> / </span>
						<span id="totalTime" ref="totaltime"></span>
					</div>
					<input type="range" className="button js-inputbtn" min="0" max="1" step="0.001" ref="inputbtn" onChange={this.handleinputbtn}/>
					<button className="button loop js-loop" onClick={this.handleloopbtn}>未循环</button>
					<a href={this.props.content}><button className="button download js-download" ref="download"></button></a>
				</div>
		  	</div>
		)
	}

	componentDidMount() {
		this.playbtn = this.refs.playbtn
		this.timedata = this.refs.timedata
		this.video = this.refs.video
		this.totaltime = this.refs.totaltime
		this.nowtime = this.refs.nowtime
		this.inputbtn = this.refs.inputbtn
		this.inputbtn.value = "0"
		this.source = this.refs.source
	}

	componentDidUpdate() {
		this.refs.video.load()
	}

	handleplayClick() {
		this.totaltime.innerText = Math.floor(this.video.duration)
		this.timedata.style.display = 'inline-block'
		if(this.video.paused) {
			this.playbtn.innerText='暂停';
			this.video.play();
		}else{
			this.playbtn.innerText='播放';
			this.video.pause();
		}
	}

	handletimeUpdate() { // timeUpdate事件先于canplay事件
		this.nowtime.innerText = Math.floor(this.video.currentTime)
		this.inputbtn.value = this.video.duration?this.video.currentTime / this.video.duration:0
		if (Math.ceil(this.video.currentTime) === Math.ceil(this.video.duration)) {
			if (this.video.loop) {
				this.video.currentTime = 0;
			}else{
				this.handlestopClick()
			}
		}
	}

	handlestopClick() {
		this.stopbtn = this.refs.stopbtn
		this.video.pause()
		this.timedata.style.display = 'none'
		this.video.currentTime = 0
		this.playbtn.innerText='播放'
	}

	handleinputbtn(e) {
		this.video.currentTime = (e.target.value)*(this.totaltime.innerText)
	}

	handleloopbtn(e) {
		if (this.video.loop) {
			this.video.loop = !this.video.loop
			e.target.innerText="未循环"
		}else{
			this.video.loop = !this.video.loop
			e.target.innerText="已循环"
		}
	}
}


const mapState = (state) => ({
	yinpin:state.details.yinpin
}) 

export default connect(mapState, null)(Yinpin)