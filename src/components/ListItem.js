import React from 'react'

import styled from 'styled-components'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

class ListItem extends React.Component {
    state = {
        list: [],
        todos: this.props.todos,

    }
    filterTodos = (type) => {
        console.log(type)
        if (type == "completed") {
            console.log("complete")
            this.setState({
                todos: this.props.todos.filter(rec => rec.completed)
            })

        } else if (type == "active") {
            console.log("active")
            this.setState({
                todos: this.props.todos.filter(rec => !rec.completed)
            })

        } else {
            console.log(type);
            this.setState(() => {
                console.log("state", this.props.todos);
                return { todos: this.props.todos }
            })

        }

    }
    render() {
        const { item, show, onShow, ...rest } = this.props
        const { todos } = this.state;
        console.log(todos)
        console.log(this.props.todos)
        return (
            <Wrapper >
                <code onClick={onShow}>
                    [{show ? "-" : "+"}]<Text >{item}</Text>
                </code>
                {show && <Wrapper><AddTodo {...rest} onChange={this.filterTodos} />
                    {todos.length && <TodoList items={todos} {...rest} />}</Wrapper>}
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
