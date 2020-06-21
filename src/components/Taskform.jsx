import React,{useContext,useState,useEffect} from 'react'
import {Tasklistcontext} from '../context/Tasklistcontext'
const Taskform = () => {
    const {addtask,clearTask,editItem,editTask}=useContext(Tasklistcontext)
    const [value,setValue]=useState("")

    const handleOnChange=(e)=>{
     setValue(e.target.value)
     console.log(value)
    }

    const handleonSubmit=(e)=>{
        e.preventDefault()
        if(editItem===null){
            addtask(value)
            setValue("")
        }
        else{
            editTask(value,editItem.id)
        }
        
    }
    
    useEffect(()=>{
      
        if(editItem!==null){
            setValue(editItem.title)
            console.log(editItem)
        }
        else{
            setValue("")
        }
    },[editItem])
    return (
        <div>
            <form onSubmit={handleonSubmit}>
                <div className="form-group">
                    <input required type="text" placeholder="Enter Title" value={value} onChange={handleOnChange} className="form-control"/>
                </div>
                <div className="form-group">
    <button type="submit" className="btn btn-sm btn-primary">{editItem?('Edit'):('Add')}</button>
                    <button type="clear" className="btn btn-sm btn-danger" onClick={clearTask}>clear</button>
                </div>
            </form>
        </div>
    )
}

export default Taskform;