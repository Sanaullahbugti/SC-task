import React from 'react'

import styled from 'styled-components'

import TodoItem from './TodoItem'

const TodoList = ({ items, toggleComplete, listId, type }) => {
  if (type === "completed") {
    return (
      <Wrapper>
        {items.filter(rec => rec.completed).map(item => {
          const onComplete = e => {
            console.log(item)
            toggleComplete(listId, item.id)
          }

          return <TodoItem key={item.id} {...item} onComplete={onComplete} />
        })}
      </Wrapper>
    )
  } else if(type==="active"){
    return (
      <Wrapper>
        {items.filter(rec => !rec.completed).map(item => {
          const onComplete = e => {
            console.log(item)
            toggleComplete(listId, item.id)
          }

          return <TodoItem key={item.id} {...item} onComplete={onComplete} />
        })}
      </Wrapper>
    )
  }else {
    return (
      <Wrapper>
        {items.map(item => {
          const onComplete = e => {
            console.log(item)
            toggleComplete(listId, item.id)
          }

          return <TodoItem key={item.id} {...item} onComplete={onComplete} />
        })}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default TodoList
