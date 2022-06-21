import React, { useState } from "react";
import "./../styles/App.css";

let globalId = 11;
function App() {
	const [inputVal,setInputVal] = useState();
	const [todoItems,setTodoItems] = useState([]);
	const [isEdit,setIsEdit] = useState(NaN);

	const ele = todoItems.map((element)=>{
		return <>
			{!isNaN(isEdit) && element.id === isEdit ? (
				<>
					<textarea className="editTask" 
					onChange={function(e){
						setInputVal(e.target.value);
					}}
					value={inputVal==' ' ? element.task:inputVal}
					></textarea>
					<button className="saveTask" onClick={function(){
						const newArray = todoItems.map((obj)=>{
							if(obj.id===element.id){
								obj.task = inputVal;
							}
							return obj;
						})
						setTodoItems(newArray);
						setInputVal('');
						setIsEdit(NaN);
					}}>Save</button>
				</>
			):(
				<>
					<li className="list">{element.task}</li>
			<button className="edit" onClick={function(){
				setIsEdit(element.id);
			}}>Edit</button>

			<button className="delete" onClick={function(){
				const newArrayList = todoItems.filter((item)=>{
					return item.id !== element.id;
				})
				setTodoItems(newArrayList);
			}}>Delete</button>
				</>
			)}
			
		</>
	})
	return (
	<div id="main">
	<form onSubmit={function(e){
		e.preventDefault();
		const obj = {
			task:inputVal,
			id:globalId++
		}
		setTodoItems([...todoItems,obj]);
		setInputVal(' ');
	}}>
	<textarea id="task" 
		value={inputVal}
		onChange={function(e){
		setInputVal(e.target.value);
		}}>
	</textarea>
	<button id="btn" type="submit">Add Task</button>
	</form>
	<ol>{ele}</ol>
	</div>
	);
}


export default App;
