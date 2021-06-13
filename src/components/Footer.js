import React from 'react'

//主要逻辑为点击footer切换三种状态会触发传递进来的方法，方法是action的缩写，组件触发方法时传递的参数是目标值，交给reducer之后修改state为参数，todolist配合拿到state中的filter参数，根据参数来显示对应的数据。
const Footer = props => {
  return (
    <p>
      <button
        disabled={props.filter === 'all'}
        onClick={() => props.setFilter('all')}
      >
        ALL
      </button>{' '}
      <button
        disabled={props.filter === 'active'}
        onClick={() => props.setFilter('active')}
      >
        ACTIVE
      </button>{' '}
      <button
        disabled={props.filter === 'completed'}
        onClick={() => props.setFilter('completed')}
      >
        COMPLETED
      </button>
    </p>
  )
}

export default Footer
