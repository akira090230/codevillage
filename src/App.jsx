/*import React from 'react'
import Form from './Form';

const App=()=>
<div>
  <h1>Todoアプリ</h1>
  
  <label>
    <input type="checkbox" />
    全てを完了にする
  </label>
  <select>
    <option>全て</option>
    <option>未完了</option>
    <option>完了済み</option>
  </select>
  <ul>
    <li>
      <label>
        <input type="checkbox" />
        洗濯する
      </label>
      <button>編集</button>
      <button>削除</button>
    </li>
  </ul>
  <button>完了済みを全て削除</button>
  </div>*/



import React,{useState} from 'react'
import CheckAll from './CheckAll'
import Form from './Form'
import List from './List'
import shortid from'shortid'
const App=()=>{
const [todos,setTodos]=useState([
    /*{
      content: '課題をする'
  },
  {  content: '洗濯をする'},
  {content: '電話をする'},
  {content: '料理をする'}*/
  ])
const addTodo = content =>{
setTodos([
  ...todos,{
    content:content,
    id: shortid.generate()
  }
])
}
const deleteTodo = id =>{
  setTodos(todos.filter(todo => todo.id !== id))
}
 /*const handleChangeAllCompleted =completed =>{
 const newTodos =this.state.todos.map(todo =>{
  return{...todo,completed,}})
  this.setState({todos:newTodos})}*/

    return(
    <>
     <h1>Todoアプリ</h1>
     <Form addTodo={addTodo} /> 
     <CheckAll allCompleted={todos.every(({Completed})=>Completed)}/>
      <select>
        <option>全て</option>
        <option>未完了</option>
        <option>完了済み</option>
      </select>
     <List todos={todos} deleteTodo={deleteTodo} />
     <button>完了済みを全て削除</button>
      
      
      </>  )
      
    }
    export default App 