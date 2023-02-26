import React from 'react'

const TodoList = () => {
  return (
    <div className='todoList'>
        <div className='todos'>
            <div className='todo'>
                <div className="todoText">
                    <span>Hello World!</span>
                </div>
            </div>
            <div className="icons">
                <button>
                    <i className="fa-solid fa-check"></i>
                </button>
                <button>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default TodoList
