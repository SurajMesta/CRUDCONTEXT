import React,{useContext} from 'react'
import {Tasklistcontext} from '../context/Tasklistcontext'
import Second from './Second'

 const First = () => {
    const {tasks}=useContext(Tasklistcontext)
    return(
        <div>
             {tasks.length? (
    
        <ul className="list-group "  >
        {tasks.map((item)=>{
            return (<div className="row"><Second item={item}  key={item.id}/></div>)
        })}
      </ul>
       
       
     
       
    
   ):(<div><h4 style={{color:'snow'}}>Nothing to render...</h4></div>)}
        
        
        </div>
    )


     
}

export default First;
