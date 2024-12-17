import React, { useState } from 'react'

function ToDo() {
    const[tasks,setTasks]=useState([])
    const[input,setInput]=useState("")
    const [editId,setEditId]=useState(null)
    const addTask=()=>{
        if(!input.trim()){
            alert("Write Any Task First")
        }else{
            if(!editId){
                let obj={
                    task:input,
                    id:Math.trunc(Math.random()*10000)
                }
                setTasks([...tasks,obj])
                setInput("")
            } else{
                let newTasks=tasks.map(ele=>{
                    if(ele.id==editId){
                        ele.task=input
                    }
                    return ele
                })
                setTasks(newTasks)
                setInput("")
                setEditId(nullb)
            }
        }
        
    }
    const deleteTask=(id)=>{
        let newTasks=tasks.filter(ele=>ele.id !=id)
        setTasks(newTasks)
    }
    const editTask=(id)=>{
        setEditId(id)
        let editTask=tasks.find(ele=>ele.id==id)
        setInput(editTask.task)
    }
  return (
    <div>
        <nav>
            <h1>To Do App</h1>
        </nav>
        <div className="inputs">
            <input type="text" placeholder='Write Your Task.....' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button onClick={addTask}>{editId?"UPDATE":"ADD"}</button>
        </div>
        <div className="tasks">
            {
                tasks.map(e=>{
                    return(
                        <div className="task">
                            <h1>{e.task}</h1>
                            <div className="buttons">
                                <button id='del' onClick={()=>deleteTask(e.id)}>Del</button>
                                <button id='edit' onClick={()=>editTask(e.id)}>Edit</button>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default ToDo