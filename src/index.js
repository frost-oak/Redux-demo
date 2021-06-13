/* 
  redux 负责：提供 state 以及 操作state的方法
  react 负责：页面展示（UI）

  react-redux 是官方提供的绑定库（链接库），用来将 redux 和 react 绑定在一起使用
*/

// import React from 'react'
import React from 'react'

// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom'

// import { Provider } from 'react-redux' 路由redux
import { Provider } from 'react-redux'
// store
// import { createStore } from 'redux' 正版redux
import { createStore } from 'redux'

// import reducer from './reducers'
import reducer from './reducers'

// App 组件
// import App from './components/App'
import App from './components/App'

// 创建store
// const store = createStore(reducer)
const store = createStore(reducer)

// console.log('合并 reducer 后的状态为：', store.getState())

// store.subscribe(() => {
//   console.log('当前状态为：', store.getState())
// })
store.subscribe(() => {
  console.log(store.getState())
  
})

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
// 难点
//主要逻辑为点击footer切换三种状态会触发传递进来的方法，方法是action的缩写，组件触发方法时传递的参数是目标值，交给reducer之后修改state为参数，todolist配合拿到state中的filter参数，根据参数来显示对应的数据。
