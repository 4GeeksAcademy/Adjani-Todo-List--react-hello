import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [text, setText] = useState("")
	const [tasks, setTask] = useState(["cenar", "tomar agua", "sacar perros", "estudiar"])
	
	const handleSubmit = (event) => {
		event.preventDefault()
		let aux = [...tasks]
		aux.push(text)
		setTask(aux)
		setText("")
	}
	const deletetask = (index) => {
		let aux = [...tasks]
		let filterTask = aux.filter((item, i) => (index != i))
		setTask(filterTask)
	}
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">ToDo List!</h1>
			<form className="col-4 bg-secondary mx-auto" onSubmit={handleSubmit}>
				{/* input */}	
				<div><input value={text} className="col-12" type="text" onChange={e => setText(e.target.value)} placeholder="No hay tareas, añadir tareas"/></div>
				{/* tasks */}
				<div> 
					{tasks.map((item, i) => {
						return (
							<li>
								{item} <button type="button" onClick={() => deletetask(i)}>x</button>
							</li>
						)
					})}
				</div>
				{/* count task */}	
				<div>{tasks.length} "items left"</div>
			</form>
		</div>
	);
};

export default Home;
