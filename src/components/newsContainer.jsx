import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NewsContainer extends Component{
  
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/detail/1">新闻111</Link>
                    </li>
                    <li>
                        <Link to="/detail/2">新闻222</Link>
                    </li>
                    <li>
                        <Link to="/usercenter">个人中心</Link>
                    </li>
                </ul>
            </div>
        )
    }
}   