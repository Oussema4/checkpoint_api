import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import  UserCard from './card'

function List(){
const [users,setuser]=useState([])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setuser(res.data))
    .catch(err=>console.log(err))
},
[]);


    return(
    <div className="hh">


{users.map(el=><UserCard key={el.id} el={el} />)}

        </div>
    )
}

export default List