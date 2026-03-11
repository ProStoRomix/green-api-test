function show(data){
document.getElementById("result").value =
JSON.stringify(data,null,2)
}

function creds(){

return{
id:document.getElementById("idInstance").value,
token:document.getElementById("apiToken").value
}

}

async function getSettings(){

const {id,token} = creds()

const res = await fetch(
`https://api.green-api.com/waInstance${id}/getSettings/${token}`
)

show(await res.json())

}

async function getState(){

const {id,token} = creds()

const res = await fetch(
`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`
)

show(await res.json())

}

async function sendMessage(){

const {id,token} = creds()

const body={
chatId:document.getElementById("phone").value,
message:document.getElementById("message").value
}

const res = await fetch(
`https://api.green-api.com/waInstance${id}/sendMessage/${token}`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(body)
}
)

show(await res.json())

}

async function sendFile(){

const {id,token} = creds()

const body={
chatId:document.getElementById("phone").value,
urlFile:document.getElementById("fileUrl").value,
fileName:"file"
}

const res = await fetch(
`https://api.green-api.com/waInstance${id}/sendFileByUrl/${token}`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(body)
}
)

show(await res.json())

}