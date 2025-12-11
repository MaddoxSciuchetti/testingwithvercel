import { useState, useEffect } from "react";
// import ToDoItem from "./ToDoItem"
import ToDoItem_2 from "./ToDoItem_2"
import { API_URL } from "../api.js";
import "./on_form.css"



function Offboarding_main() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    async function handleSubmit() {
        if(newTask){
            setTasks([...tasks, newTask])
            setNewTask("")
            await fetch(`${API_URL}/offboarding/postonboardingdata`, {
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
        await fetch(`${API_URL}/offboarding/onboardingname/delete/` + taskToRemove, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            },
        }).then((response) => console.log(response))
    }

    function removeTask(taskToRemove) {
        setTasks(tasks.filter((task) => task != taskToRemove));
        remove_task_1(taskToRemove)
        window.location.reload();
    }

    const [modalOpen, setModalOpen] = useState(false);

    const handleEditRow = () => {
        setModalOpen(true)
    }

    function handlepage(task) {
        window.location.href = `/offboarding/user/${task}`
    }

    const [state, setState] = useState([""]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const dataFetch = async () => {
            setIsLoading(true);
            const data = await (
                await fetch(`${API_URL}/offboarding/fetchoffboardingname`)
            ).json()
            console.log(data)
            setIsLoading(false);
            setState(data)
        };
        dataFetch();
    }, [])



    return(
        <><div>
            {isLoading ? <div className="loading-container">

                <p className="loading-state">Lädt...</p>
                </div> : null
            }
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

                    {state && state.map((value, key ) => (<ToDoItem_2 key={key} item={value.name} onRemove={removeTask} editRow={handleEditRow} gotopage={handlepage}/>))}
                    {tasks && tasks.map((task, key) => (<ToDoItem_2 key={key} item={task} onRemove={removeTask} editRow={handleEditRow} gotopage={handlepage} />))}
        
                </div>
            </div>
        </>
        
    )
}

export default Offboarding_main; 