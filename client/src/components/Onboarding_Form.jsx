import "./on_form.css"
import "react";
import { useState, useEffect } from "react";
import Form from "./form";
import { useParams } from "react-router-dom";
import { API_URL } from "../api.js";


function Onboarding_form() {

    
    async function sendFormData (formData) {

        await fetch(`${API_URL}/editdata`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((response) => console.log(response))
    }

    async function handleSubmit(event) {
        // Erster Versuch der nicht geklappt hat bei vanilla js klappt der
        // event.preventDefault();

        // const form = event.target
        // const name = form.name.target;
        // let formData = new FormData()
        // formData.append("name", name)
        // document.getElementById("id").value=""
        // await sendFormData(formData)

        event.preventDefault();
        const form = event.target;
        let formData = new FormData(form)
        const data = {};
        for (let keyValue of formData.entries()) {
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
        const dataFetch = async() => {
            const data = await (
                await fetch(`${API_URL}/user/`+url)
            ).json()
            console.log(data)
            setData(data)
            
        };
        dataFetch()
    }, [])

    const new_object = data

    // const description_1 = {...data[0], description: "Arbeitsvertrag unterschrieben zurück + Dokumente BSB"} 
    // new_object[0] = description_1

    // const description_2 = {...data[1], description: "Personalfragebogen inkl. notw. Dokumente erhalten"}
    // new_object[1] = description_2

    // const description_3 = {...data[2], description: "Arbeitsmaterialien bereitgestellt (Bestellung Werkzeug)"}
    // new_object[2] = description_3

    // const description_4 = {...data[3], description: "Arbeitsplatz eingerichtet"}
    // new_object[3] = description_4

    // const description_5 = {...data[4], description: "Software-Zugänge (Engine, Office365) Mailadresse"}
    // new_object[4] = description_5

    // const description_6 = {...data[5], description: "Computer eingerichtet"}
    // new_object[5] = description_6

    // const description_7 = {...data[6], description: "Handy + Tablet"}
    // new_object[6] = description_7

    // const description_8 = {...data[7], description: "Schlüssel"}
    // new_object[7] = description_8

    // const description_9 = {...data[8], description: "Werkzeug QR-Codes registrieren"}
    // new_object[8] = description_9

    // const description_10 = {...data[9], description: "Auto"}
    // new_object[9] = description_10

    // const description_11= {...data[10], description: "Arbeitskleidung"}
    // new_object[10] = description_11

    // const description_12= {...data[11], description:  "Visitenkarten"}
    // new_object[11] = description_12

    // const description_13= {...data[12], description: "Willkommensmail an das Team"}
    // new_object[12] = description_13

    // const description_14= {...data[13], description: "Einarbeitungsplan erstellt"}
    // new_object[13] = description_14

    // const description_15= {...data[14], description: "BSB Fibel"}
    // new_object[14] = description_15

    // const description_16= {...data[15], description: "Mail mit Kununu-Link versendet"}
    // new_object[15] = description_16

    // const description_17= {...data[16], description: "Easy Park einrichten"}
    // new_object[16] = description_17



    console.log(data)

    return( 

        <>
            <div className="modal-container">

                <div className="main-form">

                    <div className="form-group">
                        <ul className="description">
                            <li className="first">Arbeitsvertrag unterschrieben zurück + Dokumente BSB</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li >Personalfragebogen inkl. notw. Dokumente erhalten</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li > Arbeitsmaterialien bereitgestellt (Bestellung Werkzeug)</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>Arbeitsplatz eingerichtet</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>


                            <li>Software-Zugänge (Engine, Office365) Mailadresse</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>Computer eingerichtet</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>Handy + Tablet</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>Schlüssel</li>
                            <br/>
                            <br/>

                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>Werkzeug QR-Codes registrieren</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Auto</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>



                            <li>Arbeitskleidung</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>Visitenkarten</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>Willkommensmail an das Team</li>
                            <br/>
                            <br/>
                            <br/>

                            <br/>
                            <br/>

                            <li>Einarbeitungsplan erstellt</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>BSB Fibel</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <li>Mail mit Kununu-Link versendet</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <li>Easy Park einrichten</li>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        </ul>

                
                    </div>
                    <div className="form-group">
                        {data && data.map((values, index) => (

                            <Form
                            key={index}
                            id_original={values.id}
                            editcomment={values["edit"]}
                            select_option = {values["status"]}
                            handleSubmit={handleSubmit}
                            />
                        ))}
                    </div>



                </div>



            </div>
        </>


    )
}

export default Onboarding_form;