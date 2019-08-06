import React from 'react'
import { Card } from 'antd'
import './style.css'

export default (props) => {
	return (
		<Card  className='footer'>
				<p>本网站由 <a className='boldfont'>EasyVOA</a> 开发上线 © 2011-2014 <a className='normalfont'>手机版EasyVOA</a></p>
				<p>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
					<a href="http://www.51.la/?3208443"><img alt="" src="http://icon.users.51.la/icon_9.gif"/></a>
		</Card>
	)
}