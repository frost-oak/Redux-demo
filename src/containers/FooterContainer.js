import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

import Footer from '../components/Footer'

// 给组件传递状态
const mapStateToProps = state => {
  return {
    //将被更改或者默认为all的state用connect高阶组件的形式传给footer组件。
    filter: state.visibilityFilter
  }
}

// 给组件传递方法
const mapDispatchToProps = dispatch => {
  return {
    setFilter(filter) {
      // console.log('mapDispatchToProps：', filter)
      // dispatch( { type: 'SET_VISIBILITY_FILTER', filter: 'active' } )
      // 事实上这里的dispatch只不过是相当于一个触发reducer的action的缩写。
      // 实际上的功能其实本质是由reducer和footer以及todolist组件配合完成的，逻辑主要在reducer和footer组件上，这里的dispatch和action只不过负责更改state罢了。
      //主要逻辑为点击footer切换三种状态会触发传递进来的方法，方法是action的缩写，组件触发方法时传递的参数是目标值，交给reducer之后修改state为参数，todolist配合拿到state中的filter参数，根据参数来显示对应的数据。
      dispatch(setVisibilityFilter(filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
