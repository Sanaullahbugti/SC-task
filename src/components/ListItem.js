import React from 'react'

import styled from 'styled-components'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class ListItem extends React.Component {
    state = {
        list: [],
        todos: this.props.todos,
        type: "all"

    }
    filterTodos = (type) => {
        this.setState({
            type,
        })

    }
    render() {
        const { item, show, onShow, todos, ...rest } = this.props
        const { type } = this.state;
        console.log("state", todos)
        console.log(this.props.todos)
        return (
            <Wrapper >
                <code onClick={onShow}>
                    [{show ? "-" : "+"}]<Text >{item}</Text>
                </code>
                {show && <Wrapper><AddTodo {...rest} onChange={this.filterTodos} />
                    {<TodoList items={todos} {...rest} type={type} />}</Wrapper>}
            </Wrapper>
        )
    }
}
const Wrapper = styled.p`
  font-size: 24px;
  cursor: pointer;
  background-color:rgba(0,100,0,0.2);
  border-radius:10px;
  padding: 40px;
`

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  padding:20px;
  
`

export default ListItem
