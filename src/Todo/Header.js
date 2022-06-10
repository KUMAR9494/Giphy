
import React, { useState } from 'react'
import './Header.css'


const Header = () => {
    const [newItem, setNewItem] = useState("");
    const [items , setItems] = useState([]);

    // helper function
     function addItem () {
        if(!newItem){
            alert("enter an item")
            return;
        }
        const item ={
            id:Math.floor(Math.random() * 1000),
            value: newItem
        };
        setItems (oldList => [...oldList,item])
        setNewItem("");
    

    
     }

      function deleteItems(id){
       const newArray = items.filter(item =>item.id !== id);
       setItems(newArray);

      }
   return (
    <div className='header'>
        <center>
        <h1> My Todos List</h1>
        <input 
        type="text" placeholder='Add items...'
        value={newItem}
        onChange={e=>setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>

        <ul>
           {items.map(items => {
             return(
                <li key={items.id}>{items.value} <button className='delete' onClick= {() => deleteItems(items.id)}>X</button></li>
             )
           })}
        </ul>
        </center>
      
    </div>
  )
}

export default Header
