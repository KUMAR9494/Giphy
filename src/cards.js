import React, { useState } from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards (){
   const [count,setCount] = useState(0)
   return (
      
      <div className='container my-5'>
         <div className="card text-center my-5"> 
         <div className="card-body">
            <h1>Counter</h1>
            <div className="my-5">
               <h2 className="my-5">{count}</h2>
               <button className="btn btn-success mx-3" onClick={()=> setCount(count +1)}>increment</button> 
               <button className="btn btn-success mx-3" onClick={()=> setCount(count -1)}>decrement</button> 
               <button className="btn btn-success mx-3" onClick={()=> setCount(0)}>Reset</button> 



            </div>

         </div>

         </div>

      </div>
   )
}
export default Cards;