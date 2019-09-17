import React from 'react'
import { Provider, Subscribe } from 'unstated'

import styled from 'styled-components'

import TodosContainer from './store'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import ListOfTodos from './components/ListOfTodos'
import AddList from './components/AddList'

function App() {
  return (
    <Provider>
      <Wrapper>
        <Subscribe to={[TodosContainer]}>
          {todos => {
            const list = todos.getList();
            console.log(list)
            return (
              <TodosWrapper>
                <AddList onAddList={todos.createList}/>
                <ListOfTodos 
                list={list} 
                
                toggleList={todos.toggleList}
                toggleComplete={todos.toggleComplete}
                createTodo={todos.createTodo}
                />
              </TodosWrapper>
            )
          }}
        </Subscribe>
      </Wrapper>
    </Provider>
  )
}

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

export default App
