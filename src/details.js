import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Details(){

const {id}=useParams()
const [user,setuser]=useState({})
const [loading,setLoding]=useState(true)
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>setuser(res.data))
    .then(res=>setLoding(false))
    .catch(err=>console.log(err))
},
[]);
console.log(user)
    return(
        <div>
            {loading? "stana"   :<>
            
            <h1>{user.name}</h1>
            <h2>{user.company.name}</h2>
            <h3>{user.address.geo.lat}</h3>

            </> }
                   </div>
    )
}

export default Details