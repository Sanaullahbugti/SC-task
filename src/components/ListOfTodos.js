import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
// const showList = () => {
//     return <Wrapper><AddTodo onAddTodo={todos.createTodo} />
//         <TodoList items={list} toggleComplete={todos.toggleComplete} /></Wrapper>
// }
const ListOfTodos = ({ list, toggleList, ...rest }) => {
    return (
        <Wrapper>
            {list.map((item) => {
                console.log(item);
                const onShow = e => {
                    toggleList(item.id)
                }
                return <ListItem
                    key={item.id}
                    listId={item.id}
                    item={item.name}
                    show={item.show}
                    onShow={onShow}
                    todos={item.list ? item.list : []}
                    {...rest}
                />
            })}
        </Wrapper>
    )
}
const Wrapper = styled.div`
  margin-left:-40px;
  min-width:400px;
  display: flex;
  flex-direction: column;
`

export default ListOfTodos;