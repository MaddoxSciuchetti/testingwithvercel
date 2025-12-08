import { useState, useEffect } from "react";

import ToDoItem from "./ToDoItem.jsx"
import ToDoItem_2 from "./ToDoItem_2.jsx"
import {useNavigate} from "react-router-dom"
import { API_URL } from "../api.js";


function Onboarding_Form_Main() {


    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    async function handleSubmit() {
        if(newTask){

            setTasks([...tasks, newTask])
            setNewTask("")
            
            await fetch(`${API_URL}/postData` , {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({"name": newTask})
            })
            .then((response) => response.json())
            .then((response) => console.log(response)) 
        }
    }
    


     async function remove_task_1(taskToRemove) {

        await fetch(`${API_URL}/delete/`+ taskToRemove, {
        method:"DELETE",
        headers: {
            "Content-Type":"application/json"
        },
        }).then((response) => console.log(response))

    }

    function removeTask(taskToRemove) {
        setTasks(tasks.filter((task) => task !== taskToRemove ));
        remove_task_1(taskToRemove)
        window.location.reload();
    }

    const [modalOpen, setModalOpen] = useState(false);

    const handleEditRow = () => {
        setModalOpen(true)
    }

    function handlepage(task){
     
        window.location.href = `/user/${task}`  
}

    const [state, setState] = useState([""]);

    useEffect(() => {

        const dataFetch = async () => {
            const data = await (
                await fetch(`${API_URL}/fetchData`)
            ).json()
            console.log(data)
            setState(data)
        };
        dataFetch();
    }, [])

    return (
        <div className="list-container">
            <div className="list">
                <div className="sublist-1">
                    <div className="sublist-2">

                        <button className="table-1 btn" onClick={handleSubmit}>Add</button>
                
                        <input className="table-1 input-box"
                        id="1"
                        type="text"
                        value={newTask}

                        onChange={((e) => setNewTask(e.target.value))}
                        placeholder="Name"/>
                    </div>
                    { state && state.map((value, key) => (<ToDoItem_2 key={key} item={value.name} onRemove={removeTask} editRow={handleEditRow} gotopage={handlepage}/>))}
                    { tasks && tasks.map((task, key) => (<ToDoItem key={key} item={task} onRemove={removeTask} editRow={handleEditRow} gotopage={handlepage} />))}
               
                </div>
            </div>
                    

        
        </div>
    )

}

export default Onboarding_Form_Main;