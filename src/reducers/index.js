// import { combineReducers } from 'redux'
// import * as actionTypes from '../actionTypes'
import { combineReducers } from 'redux'
import * as actionTypes from '../actionTypes'

let id = 0

// 处理 todos 任务列表的reducer --这里的action其实是封装好的Action Creator们。

// [{ id, text, done }, {}, {}, ...]
const todos = (state = [], action) => {
  switch (action.type) {
    // 添加任务
    case actionTypes.ADD_TODO:
      return [...state, { id: ++id, text: action.text, done: false }]

    // 删除任务
    case actionTypes.DELETE_TODO:
      return state.filter(item => item.id !== action.id)

    // 切换任务完成状态
    case actionTypes.TOGGLE_TODO:
      return state.map(item =>
        item.id === action.id ? { ...item, done: !item.done } : { ...item }
      )
    default:
      return state
  }
}

// 创建处理 展示任务状态 数据的reducer
// 注意：这个 动作并没有对state操作，仅仅是告诉 todos 案例，要展示 什么类型的任务列表 ，改是由footer改，用是由list来用，这里的state不重要，filter比较重要，显示什么由filter决定，可以理解为state二号。
const visibilityFilter = (state = 'all', action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER: //根据footer传来的这坨值。
      return action.filter //来修改负责展示的数据filter。其实它就有点类似于一个计算属性computed。
    default:
      return state //默认就是all
  }
}

// 使用 combineReducers() 合并 reducer 之后，应用的状态就变为一个对象了
// 或者说state里对应的值与子reducer们同名？键是state里的键，参数是reducer们
// 对象中的键 与 combineReducers参数的键同名
// 比如，当前应用的状态为： { todos: [], visibilityFilter: 'all' }
const rootReducer = combineReducers({
  todos,
  visibilityFilter
})
// const rootReducer = combineReducers({
//   todos: todos,
//   visibilityFilter: visibilityFilter
// })

export default rootReducer
