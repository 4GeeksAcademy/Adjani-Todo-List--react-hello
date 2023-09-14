import React, { useState } from "react";


const ToDo = () => {
    const [task, setTask] = useState(["Tomar Agua", "Sacar Perros", "Estudiar"]);
    const [text, setText] = useState("");


    const addTask =(e) =>{
        if (e.key === "Enter" && text !== " ") {
            setTask([...task, text]) 
            setText("");
        }
    } 

    const deletetask = (item) => { 
        // console.log("borrar");  
        // console.log(item)
        setTask(task.filter((task) => task != item))
    }
    
    return (
        <div className= "container" style={{ width: 750, backgroundColor: "#fbc7e121", padding: 50, fontSize: 20, fontFamily:"sans-serif"}}>
            <div><h1 style={{ color: "#e7b1cca3", textAlign: "center", fontSize: 85 }}>todos</h1></div>

            <div className= "list-group" >
                <input className= "list-group-item" type= "text" value= {text} 
                    placeholder= "No hay tareas, añadir tareas" 
                    onChange= {(e) => {setText(e.target.value)}}
                    onKeyDown= {addTask}>
                </input>

                <div> {task.map((task, item) => (
                        <li className= "list-group-item" 
                            style= {{paddingLeft: 15, color: "#212529a6", display: "flex", justifyContent: "space-between"}} key={item}>{task}
                            <button type= "button" onClick={() => deletetask(task)}>X</button>
                        </li>
                    ))} 
                </div>
            </div>
            <div style= {{ color: "#212529a6", textAlign: "inherit", fontSize: 15 }}>
                {task.length}items left
            </div>
        </div>
    )
}
export default ToDo;