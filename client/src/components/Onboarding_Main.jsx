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
            
            await fetch(`${API_URL}/onboarding/postData` , {
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

        await fetch(`${API_URL}/onboarding/delete/`+ taskToRemove, {
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



    function handlepage(task){
     
        window.location.href = `/onboarding/user/${task}`  
}

    const [state, setState] = useState([""]);

    useEffect(() => {

        const dataFetch = async () => {
            setIsLoading(true);
            const data = await (
                await fetch(`${API_URL}/onboarding/fetchData`)
            ).json()
            console.log(data)
            setState(data)
            setIsLoading(false);
        };
        dataFetch();
    }, [])

    const [isLoading, setIsLoading] = useState(false);


    return (
        <>
        <div>
            {isLoading ? <div className="loading-container">
        
                <p className="loading-state"> Lädt...</p>
        
            </div> : null}

        </div>

        <div className="main-list">
     
            <div className="list">
                
                <div className="sublist-2">
            
                    <input className="table-1 input-box"
                    id="1"
                    type="text"
                    value={newTask}
                    onChange={((e) => setNewTask(e.target.value))}
                    placeholder="Name"/>


                    <button className="table-1 btn" onClick={handleSubmit}>Hinzufügen</button>
                </div>
                {  state && state.map((value, key) => (<ToDoItem_2 key={key} item={value.name} gotopage={handlepage} onRemove={removeTask}/>))}
                {  tasks && tasks.map((task, key) => (<ToDoItem key={key} item={task} gotopage={handlepage} onRemove={removeTask} />))} 
            </div>   
        </div>     

        </>
    )

}

export default Onboarding_Form_Main;