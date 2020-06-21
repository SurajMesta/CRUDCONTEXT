import React ,{useContext} from 'react'
import {Tasklistcontext} from '../context/Tasklistcontext'

 const Second = ({item}) => {
     const {deleteTask,findItem}=useContext(Tasklistcontext)
    return (
        <li className="list-group-item li-gp"  >
        <div style={{display:'flex',justifyContent:'space-between'}}>
            
        <span>{item.title}</span>
           <div>
                <button onClick={()=>{
                   findItem(item.id)
                }}  className="btn btn-sm btn-info " ><span className="glyphicon glyphicon-edit"></span></button>
                <button className="btn btn-sm btn-danger" onClick={()=>{
                    deleteTask(item.id)
                }}><span className="glyphicon glyphicon-trash"></span></button>
           </div>
            </div>
           
            
        </li>
    )
}

export default Second;
