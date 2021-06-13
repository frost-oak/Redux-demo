/* 
  容器组件：
*/
import { connect } from 'react-redux'
import { delTodo, toggleTodo } from '../actions'

// 导入展示组件
import TodoList from '../components/TodoList'

// 根据展示任务的类型，来过滤数据：
//主要逻辑为点击footer切换三种状态会触发传递进来的方法，方法是action的缩写，组件触发方法时传递的参数是目标值，交给reducer之后修改state为参数，todolist配合拿到state中的filter参数，根据参数来显示对应的数据。
//这里的filter参数其实是visibilityFilter，是计算后的filter
const getFilterTodos = (filter, todos) => {
  if (filter === 'all') {
    return todos //这里的filter是数组的原生方法拉哈哈。
  } else if (filter === 'active') {
    return todos.filter(item => !item.done)
  } else if (filter === 'completed') {
    return todos.filter(item => item.done)
  }
}

// 提供状态：
const mapStateToProps = state => {
  // 为了实现展示不同状态的任务列表数据
  // 需要将传递给组件的数据 state.todos 按照 state.visibilityFilter 的值来进行处理
  // 如果 visibilityFilter 为 all，此时，直接返回 state.todos
  // 如果 visibilityFilter 为 active，此时，从 state.todos 中过滤去所有未完成的任务
  // 如果 visibilityFilter 为 completed，此时，从 state.todos 中过滤去所有已完成的任务
  return { //去拿到被更改过或者未被更改过的filter。visibilityFilter就是计算后的filter。所以说它像计算属性computed。
    todos: getFilterTodos(state.visibilityFilter, state.todos)
  }
}

// 提供方法：
const mapDispatchToProps = dispatch => {
  return {
    // 根据id删除任务
    del(id) {
      // console.log('要删除任务id：', id)
      dispatch(delTodo(id))
    },
    // 根据id切换任务状态
    toggle(id) {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
