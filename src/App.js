import React, { useState } from 'react'
import './index.css';
import TodoList from './TodoList';

function App() {
  const [inputList,setInputList]=useState("")
  const [Items, setItems]=useState([]);


  const itemEvent =(event)=>{
    setInputList(event.target.value)
  };

  const listOfItem=()=>{
   setItems((oldItems)=>{
     return [...oldItems,inputList];
   });
   setInputList("")
  }

  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrEleem,index)=>{
        return index!== id;
      })
    })
}
  return (
    <div className='main-div'>
      <div className='center-div'>
      
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder='Add a Item' 
        value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItem}>+</button>

        <ol>
          
          {Items.map((itemval,index)=>{
          return <TodoList 
          key={index} 
          id={index} 
          text ={itemval} 
            onSelect ={deleteItems}
          />
          })}
        </ol>
      </div>
    </div>
  )
}

export default App