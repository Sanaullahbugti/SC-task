import React from 'react'

import styled from 'styled-components'

const AddTodo = ({ listId, createTodo, onChange }) => {
  // const [value, setValue]=""
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      createTodo(e.target.value, listId)
    }
  }
  
  return (
    <div><Input
      type='text'
      onKeyPress={handleKeyPress}
      placeholder='Add new todo...'
    />
      <Select onChange={(e) => onChange(e.target.value)} >
        <option value="all">All</option>
        <option value="completed">Competed</option>
        <option value="active">Active</option>
      </Select>
    </div>

  )
}

const Input = styled.input`
  background: #3b4049;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 24px;
  height: 40px;
  min-width: 300px;
  margin-bottom: 16px;

  &::placeholder {
    color: #8d96a8;
  }
`
const Select = styled.select`
  background: #3b4049;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 20px;
  height: 40px;
  min-width: 300px;
  margin-bottom: 16px;

  &::placeholder {
    color: #8d96a8;
  }
`

export default AddTodo
