import "./on_form.css"
import "react";
import {useState, useEffect} from "react";
import Form from "./form";
import { API_URL } from "../api.js";



function Offboarding_form () {

    async function sendFormData(formData) {
        await fetch(`${API_URL}/offboarding/offboarding/editoffboarding`, {
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((response) => console.log(response))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        let formData = new FormData(form)
        const data = {};
        for(let keyValue of formData.entries()) {
            data[keyValue[0]] = keyValue[1];
        }
        const url = window.location.href

        const str = url.split("/");
        const new_str = str[str.length -1];
        data.username = new_str

        console.log(data);

        await sendFormData(data)
    }

    const [data, setData] = useState([])


    const url = window.location.pathname.split("/").pop()
    console.log(url)

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(`${API_URL}/offboarding/offboarding/user/`+ url)
            ).json()
            console.log(data)
            setData(data)
        };
        dataFetch()
    }, [])

    return (
        <>

        {/* improve the styling */}
            <div className="modal-container">
                <div className="main-form">
                    <div className="form-group">
                        <ul className="description">
                            <li>Rückgabe Computer</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Rückgabe PKW</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Rückgabe Handy</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Rückgabe Schlüssel</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Rückgabe Werkzeug (wenn unvollständig, was fehlt?)</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Rückgabe Arbeitskleidung</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Abwesenheitsassistent Mail eingerichtet</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>RWeiterleitung Mail eingerichtet</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Löschung privater Mails durch Mitarbeiter</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Zugänge gesperrt</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Offboarding-Gespräch terminiert</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Offboarding-Gespräch durchgeführt</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Infomail ans Team versendet</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Arbeitszeugnis erstellt & verschickt</li>
                        </ul>
                    </div>

                    <div className="form-group">
                        {data && data.map((values, index) => (
                            <Form 
                            key={index}
                            id_original={values.id}
                            editcomment={values["edit"]}
                            select_option={values["status"]}
                            handleSubmit={handleSubmit}
                            />

                        ))}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Offboarding_form; 