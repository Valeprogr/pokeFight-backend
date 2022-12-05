import express,{json}from "express";
import {} from "dotenv/config";

const app = express();
const PORT= process.env.PORT;

app.use(json());

async function startApp(){
    try{
        await
        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

startApp();
