/*import React from "react";

const Form = () =>{
constructor(props)
    super(props)

    this.state = {
        input :""
    };
    return(
        <form>
    <input type="text" value ={this.state.input} />
    <button>追加</button>
  </form>
    )
}


export default Form*/

import React,{useState} from 'react'

const Form = ({addTodo}) =>{
    const [value,setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if(!value){
            alert("入力してください")
            return
        }
        addTodo(value)
        const textareaform=document.getElementById("add")
        textareaform.value=""
    }
    return(
        <form onSubmit ={handleSubmit} >
            <input type="text" id="add"
            onChange={e => {
                setValue(e.target.value)

            }} />
            <button>追加</button>
            
        </form>   
    )

}

export default Form