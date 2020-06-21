import React,{createContext,useState,useEffect} from 'react'


export const Tasklistcontext=createContext()

 const TasklistcontextProvider = (props) => {
  const  initialstate=JSON.parse(localStorage.getItem('tasks'))||[]
  const [tasks,setTasks]=useState(initialstate)
  const [editItem,seteditItem]=useState(null)
  const addtask=(title)=>{
      setTasks([...tasks,{title,id:Math.random().toFixed()}])
      console.log(tasks)

  }

  const clearTask=()=>{
      setTasks([])
  }

  const deleteTask=(id)=>{
      setTasks(tasks.filter(item=> item.id!==id))
  }

  const findItem=(id)=>{
      let foundItem= tasks.find((item)=>(item.id==id))
      seteditItem(foundItem)
      console.log(editItem)
  }

  const editTask=(title,id)=>{
      const newitem= tasks.map((item)=> (item.id===id)?{title,id}:item)
    //   console.log(newitem)
      setTasks(newitem)
      console.log('newitem is')
      console.log(tasks)
      seteditItem(null)
  }

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

    return (
       <Tasklistcontext.Provider value={{tasks,addtask,clearTask,deleteTask,findItem,editTask,editItem}}>
           {props.children}
       </Tasklistcontext.Provider>
    )
}

export default TasklistcontextProvider