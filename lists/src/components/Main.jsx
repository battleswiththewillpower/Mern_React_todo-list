import React, { useState } from 'react'

const Main = () => {
  // console.log(props)

  const [addItem, setAddItem] = useState("")
  const [toDos, setToDos] = useState([])

  const handleNewSubmit = (e) => {
          e.preventDefault();

          if(addItem.length === 0){
            return;
          }
          setToDos([...toDos,{addItem, isCompleted: false}])
          setAddItem("");
          
  }
  const handleCheckedItem = (i) =>{
    const filterItem = [...toDos]
    filterItem[i].isCompleted = !filterItem[i].isCompleted
    setToDos(filterItem);
  }

  const handleDeletedItem = (delIdx) => {
    const filterList = toDos.filter((todo, i) => {
      return i !== delIdx; 
    })
    setToDos(filterList);

  }

  return (
    <div>Todo List
        <form onSubmit={(e) => {
          handleNewSubmit(e);
        }}>
          {/* FIGURE OUT WHY IT ISNT CLEARING FROM THE FORM WHEN ADDITEM IS PASSED IN */}
            <textarea onChange={(e) =>{
              setAddItem(e.target.value);
            }} value={addItem} name="addItem" id="" cols="30" rows="2" placeholder='add to your list'></textarea><br />
            <button>Add</button><br />
            
        </form>
        {
          toDos.map((todo, i) => {
            return (
              <div key={i} style={{textDecoration:todo.isCompleted?"line-through":''}}>
              <span>{todo.addItem}</span>

              <input onChange={(e)=>{
                handleCheckedItem(i)
              }} type="checkbox" name='toDos' checked={todo.isCompleted}  />

            <button onClick={(e) =>{
              handleDeletedItem(i)
            }}>Delete</button>
              </div>
              

            )
          })
        }
    </div>
  )
}

export default Main