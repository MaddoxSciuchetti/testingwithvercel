// requires import when type: "module"
// when not the case "require"
import pool from './db.js';
import dotenv from "dotenv";
import  cors from "cors"
import express from "express"


//for next project
// improving routing
// integrating middleware

dotenv.config();
const PORT = process.env.PORT || 3005


const app = express()
app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

app.use(cors())


pool.connect().then(() => console.log("connected"))


app.post("/sendusername/:name", (req,res) => {
    const {name} = req.params
    console.log(name)
    res.send('received')
})


// Daten ziehen für die form
app.get("/onboarding/user/:name", (req, res) => {
    const name = req.params.name
    console.log(name)
    const fetch_query = "SELECT * FROM mitarbeiter_form WHERE arbeiter_name=$1 ORDER BY id" 
    pool.query(fetch_query, [name], (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result.rows)
            
        }
    })
})




// Daten editieren von der form
app.put("/onboarding/editdata", (req, res) => {
    console.log(req.body)
    console.log(req.body.id)
    console.log(req.body.username)
    console.log(req.body["select-option"])
    const id = req.body.id
    const name = req.body.name 
    const edit = req.body.editcomment
    const status = req.body["select-option"]

    const insert_query = "UPDATE mitarbeiter_form SET edit=$1, status=$2 WHERE id=$3" 
    pool.query(insert_query, [edit, status, id], (err, result) => {
        if(err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }else{
            console.log(result)
        }
    })
})


// speichert die Mitarbeiter
app.post('/onboarding/postData', async (req, res) => {
    const name = req.body.name
    console.log(name)
    console.log('posting the acutal name request')
    
    const creating_user='INSERT INTO mitarbeiter_name (name) VALUES ($1)'
    pool.query(creating_user,[name], (err,result) => {
    
        if(err){
            res.send(err)
            console.log(err)
        }else{
            console.log(result)
        }
    })

    const insert_user = 'INSERT INTO mitarbeiter_form (arbeiter_name) VALUES ($1), ($1), ($1), ($1),($1),($1),($1),($1),($1),($1),($1),($1),($1),($1),($1),($1),($1)'
    pool.query(insert_user, [name], (err, result) => {
        if(err){
            res.send(err)
            console.log(err)
        }else{
            console.log(result)
        }
    })
})

// fetched die ganzen Mitarbeiter
app.get("/onboarding/fetchData", (req, res) => {
    try{
        const fetch_query ="SELECT * FROM mitarbeiter_name"
        pool.query(fetch_query,(err,result) => {
            if(err){
                res.send(err)
            }else{
                res.send(result.rows)
            }
        })
    } catch(error) {
        console.error(error);
        res.send('there is currently no data')
    }


})

// löscht Mitarbeiter funktioniert
app.delete("/onboarding/delete/:name", async (req, res) => {
    const name = req.params.name
    delete_firstdatabase()
    delete_seconddatabase()

    async function delete_firstdatabase () {

        const delete_query = "Delete from mitarbeiter_name where name=$1"
        pool.query(delete_query, [name], (err, result) => {
            if(err){
                res.send(err)
            }else{
                console.log(result)
            }
        })

    }

    async function delete_seconddatabase () {

        const delete_mitarbeiter_form = 'DELETE FROM mitarbeiter_form WHERE arbeiter_name = $1'
        pool.query(delete_mitarbeiter_form, [name], (err, result) => {
            if(err){
                res.send(err)
                console.log(err)
            }else{
                console.log(result)
            }
        })

        await delete_firstdatabase()

    }
})

// offboarding only name and creating 

app.post("/offboarding/postonboardingdata", async (req, res) => {
    const name = req.body.name
    console.log(name)
    

    const creating_user = 'INSERT INTO offboarding_name (name) VALUES ($1)' 
    pool.query(creating_user, [name], (err, result) => {
        if(err) {
            res.send(err)
            console.log(err)
        }else {
            console.log(result)
        }
    })

    const insert_user ='INSERT INTO offboarding_form (arbeiter_name) VALUES ($1), ($1),($1),($1),($1),($1),($1),($1),($1),($1),($1),($1),($1),($1)'
    pool.query(insert_user, [name], (err, result) => {
        if(err) {
            res.send(err)
            console.log(err)
        }else{
            console.log(result)
        }
    })

})



app.get("/offboarding/fetchoffboardingname", (req, res) => {
    try{
        const fetch_query = 'SELECT * FROM offboarding_name'
        pool.query(fetch_query, (err, result) => {
            if(err) {
                res.send(err)
            }else{
                res.send(result.rows)
            }
        })
    } catch(err) {
        console.log(error);
        res.send('there is currently no data')
    }
})

app.delete("/offboarding/onboardingname/delete/:name", (req, res) => {
    const name = req.params.name
    delete_firstdatabase_of()
    delete_seconddatabase_of()

    async function delete_firstdatabase_of() {
        const delete_query = ' DELETE FROM offboarding_name WHERE name=$1'
        pool.query(delete_query, [name], (err, result) => {
            if(err) {
                res.send(err)
            }else{
                console.log(result)
            }
        })
    }

    async function delete_seconddatabase_of() {
        const delete_offboarding_form = 'DELETE FROM offboarding_form WHERE arbeiter_name = $1'
        pool.query(delete_offboarding_form, [name], (err, result) => {
            if(err){
                res.send(err)
                console.log(err)
            }else{
                console.log(result)
            }
        })

        await delete_firstdatabase_of()
    }
})

// offboarding including the form

app.get("/offboarding/offboarding/user/:id", (req, res) => {
    const name = req.params.id
    console.log(name)


    const insert_query = "SELECT * FROM offboarding_form WHERE arbeiter_name = $1 ORDER BY id"

    pool.query(insert_query, [name], (err, result) => {
        if(err){
            res.send(err)
            console.log(err)

        }else{
            res.send(result.rows)
        }
    })
})

app.put("/offboarding/offboarding/editoffboarding", (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const edit = req.body.editcomment
    const status = req.body["select-option"]

    const insert_query = "UPDATE offboarding_form SET edit=$1, status=$2 WHERE id= $3 "
    pool.query(insert_query, [edit, status, id], (err, result) => {
        if(err){
            console.log(err)
            res.sendStatus(500);
            return;
        }else{
            console.log(result)
        }
    })
})

app.listen(PORT,() => {
    console.log(`port is running on ${PORT}`)
    console.log("CORS is enabled")
})
