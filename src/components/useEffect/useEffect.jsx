
import { useEffect, useState } from "react"
import Post from "./Users";

export default function UseEffect() {

     const [users, setUsers] = useState([]);
     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
               .then(res => res.json())
               .then(data => setUsers(data))
               , []
     })
     return (
          <div className="text-center text-white text-xl font-mono">
               <h1>Users:{users.length}</h1>
               {
                    users.map((user) => <Post user={user}></Post>)
               }
          </div>
     )
}