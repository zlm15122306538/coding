import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import Details from './Details'
class Message extends Component {
  state = {
    message:[
      {
        id: 1,
        title: 'message1'
      },
      {
        id: 2,
        title: 'message2'
      },
      {
        id: 3,
        title: 'message3'
      },
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.message.map((item)=>{
              return(
                <li key={item.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/details/${item.id}/${item.title}`}>{item.title}</Link> */}
                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/details/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname:'/home/message/details',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
        {/* 声明接收params参数 */}
        {/* <Route path='/home/message/details/:id/:title' component={Details}></Route> */}
        {/* 无需声明接收search,state参数 */}
        <Route path='/home/message/details' component={Details}></Route>
      </div>
    );
  }
}

export default Message;